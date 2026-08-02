# AWS deployment

The production website is a Next.js static export hosted in a private S3 bucket
behind CloudFront. Jenkins builds and deploys the `main` branch after a manual
approval.

## Architecture

- Next.js emits static files into `out/`.
- S3 stores the site privately with public access blocked.
- CloudFront accesses S3 through Origin Access Control and provides HTTPS.
- A CloudFront Function maps `/privacy` and `/privacy/` to
  `/privacy/index.html`.
- ACM issues the `starixis.com` certificate in `us-east-1`.
- Jenkins uses its EC2 instance role to sync files and invalidate CloudFront.
- SSM Parameter Store supplies the bucket and distribution IDs to Jenkins.

No AWS access keys are stored in Jenkins or this repository.

## 1. Create the AWS infrastructure

The Terraform configuration uses the HCP Terraform organization `starixis` and
workspace `starixis-web-production`.

Bootstrap the workspace's short-lived AWS role once from an authenticated
administrator workstation:

```bash
aws cloudformation deploy \
  --region eu-west-2 \
  --stack-name starixis-web-hcp-terraform-auth \
  --template-file infra/bootstrap/hcp-terraform-role.yml \
  --capabilities CAPABILITY_NAMED_IAM
```

Configure the workspace environment variables `TFC_AWS_PROVIDER_AUTH`,
`TFC_AWS_RUN_ROLE_ARN`, `TFC_AWS_PROVIDER_AUTH_us_east_1`, and
`TFC_AWS_RUN_ROLE_ARN_us_east_1`. Both role variables use the stack's
`TerraformRoleArn` output. HCP Terraform then supplies short-lived credentials
for the default and `us_east_1` provider configurations.

```bash
cd infra/terraform
terraform init
terraform plan
terraform apply
```

The first apply intentionally leaves `enable_custom_domain = false`. The site
is immediately available on the `cloudfront_domain_name` output while the
certificate is validated.

## 2. Validate the ACM certificate

Read the records Terraform generated:

```bash
terraform output -json certificate_dns_validation_records
```

In Squarespace Domains, remove no website records yet. Add each generated CNAME
under DNS Settings > Custom Records. ACM validation records must remain in DNS
so future certificate renewals work automatically.

Wait until the certificate reports `ISSUED`:

```bash
aws acm describe-certificate \
  --region us-east-1 \
  --certificate-arn "$(terraform output -raw certificate_arn)" \
  --query 'Certificate.Status' \
  --output text
```

Then set the workspace variable `enable_custom_domain` to `true` and apply
again.

## 3. Point Squarespace DNS to CloudFront

After the second apply has completed, use the
`cloudfront_domain_name` Terraform output as the target:

- Replace the existing Squarespace `@` A records with an `ALIAS` record from
  `@` to the CloudFront domain.
- Replace the existing `www` record with a `CNAME` from `www` to the CloudFront
  domain.
- Do not remove MX, TXT, DKIM, DMARC, email, or certificate-validation records.

DNS changes should be made only after the CloudFront distribution includes both
custom aliases.

## 4. Configure Jenkins

Create a Multibranch Pipeline for `starixisinfra/starixis-web` and use
`Jenkinsfile` as the script path. The
Terraform stack attaches a narrowly scoped inline policy to the existing
`hubble-jenkins-instance` role.

Pull requests and non-main branches run install, lint, and build only. A build
of `main` pauses for manual approval before it uploads to S3 and invalidates
CloudFront.

## Manual deployment fallback

If Jenkins is temporarily unavailable:

```bash
npm ci
npm run lint
npm run build

bucket="$(aws ssm get-parameter --region eu-west-2 --name /starixis/web/production/bucket-name --query Parameter.Value --output text)"
distribution="$(aws ssm get-parameter --region eu-west-2 --name /starixis/web/production/cloudfront-distribution-id --query Parameter.Value --output text)"

aws s3 sync out/ "s3://${bucket}/" --region eu-west-2 --delete
aws cloudfront create-invalidation --distribution-id "$distribution" --paths '/*'
```

## Analytics (CloudWatch RUM)

The site uses Amazon CloudWatch RUM for cookieless usage and performance monitoring.
Cookies are disabled on the app monitor, so no consent banner is required. Infrastructure
lives in `infra/terraform/rum.tf` (app monitor + Cognito identity pool, `eu-west-2`).

After `terraform apply`, read the IDs from the outputs:

```bash
terraform output rum_app_monitor_id
terraform output rum_identity_pool_id
```

Put them in `.env.production` at the repo root (copy `.env.production.example`):

```bash
NEXT_PUBLIC_RUM_APP_ID=<rum_app_monitor_id>
NEXT_PUBLIC_RUM_IDENTITY_POOL_ID=<rum_identity_pool_id>
NEXT_PUBLIC_RUM_REGION=eu-west-2
```

Next.js loads `.env.production` automatically during `next build`, so no build
environment or CI configuration is required — `npm run build` picks it up wherever it
runs. The file is committed (see the `.gitignore` exception): these two IDs are not
secrets, they ship in the client JavaScript and are visible in view-source.

The snippet renders only when both IDs are set, so a checkout without the file ships
no monitoring at all.

**Keep this consistent with the Privacy Notice.** `app/privacy/page.tsx` states that a
cookieless monitoring tool is in use (Sections 3, 4, 5, 6 and the Section 8 retention
table). If RUM is disabled — `enable_rum = false`, or the file removed — that wording
must be reverted, or the notice will describe something that is not running.

Two limits worth knowing:

- RUM records **no external referrer**, so it cannot attribute traffic to sources such as
  LinkedIn. Enabling CloudFront access logging would provide that, at the cost of storing
  visitor IP addresses.
- With cookies disabled there are **no session or user journeys** — page views are counted
  individually and cannot be linked into a visit.
