# Data retention

Starixis Limited publishes retention periods in the [Website Privacy Notice](app/privacy/page.tsx)
(Section 8). This file records how those published commitments are actually applied.

**This matters:** a published retention period that is not applied is worse than not
publishing one. It is both a storage-limitation failure under UK GDPR Art 5(1)(e) and a
misstatement to the people whose data is held. Under Art 5(2) (accountability), being able
to show the policy exists *and* is applied is most of what is required.

## What we publish

| Category | Published retention |
| --- | --- |
| General enquiries | Up to 24 months from the last exchange, then deleted or anonymised unless a longer period is required (e.g. to resolve a dispute or meet a legal obligation). |
| Prospective commercial discussions | Duration of the active discussion, plus up to 24 months after last contact — or longer where discussions lead to a contract, in which case retained under that contract. |
| Website access logs | Not applicable. Access logging is not enabled on CloudFront or S3, so no website access logs are collected on our behalf. |
| Analytics data | Not applicable. No analytics tool is in use. |

If any of the above changes, update **both** this file and the privacy notice. They must not
drift apart.

## Where the data actually lives

- **`contact@starixis.com` mailbox (Microsoft 365)** — the only place enquiry personal data is
  held. There is no CRM, no contact-form backend, and no server-side form (the site is a
  static export; the "get in touch" links open the visitor's own mail client).
- **AWS S3 / CloudFront** — hosts static files only. Contains no personal data. Access
  logging is deliberately not enabled (see `infra/terraform/main.tf` — no `logging_config`
  block on the distribution and no `aws_s3_bucket_logging` resource).

So in practice, honouring retention means one thing: **clearing old mail from the mailbox.**

## How to apply it

Either approach is acceptable. Pick one and be consistent.

**Automated — Microsoft Purview retention policy**
Auto-deletes mail past a set age. Requires Microsoft 365 Business Premium or E3+; Business
Basic/Standard do not include retention policies, so check the tier before relying on this.

**Manual — recurring sweep**
A calendar reminder every six months to delete enquiry mail older than 24 months. Proportionate
for a single mailbox, and adequate provided it is actually done and logged below.

## Sweep log

Add a row each time retention is applied. This log is the accountability evidence.

| Date applied | Method | Applied by | Notes |
| --- | --- | --- | --- |
| _(not yet applied)_ | | | |
