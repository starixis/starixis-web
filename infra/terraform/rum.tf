# CloudWatch RUM — cookieless real user monitoring for the website.
#
# Cookies are deliberately disabled on the app monitor (see cw_log_enabled/custom
# events note below and the web client config in app/layout.tsx). Without cookies
# nothing is stored on or read from the visitor's device, so no consent banner is
# required under PECR. The trade-off is that session/user aggregation and in-site
# navigation paths are not collected — and RUM does not record external referrers
# in either mode, so it cannot attribute traffic to sources such as LinkedIn.
#
# The browser posts events using temporary credentials from a Cognito identity pool
# that permits exactly one action: rum:PutRumEvents on this app monitor.

resource "aws_cognito_identity_pool" "rum" {
  count = var.enable_rum ? 1 : 0

  identity_pool_name               = "${local.name_prefix}-rum"
  allow_unauthenticated_identities = true
  allow_classic_flow               = false

  tags = local.common_tags
}

data "aws_iam_policy_document" "rum_assume_role" {
  count = var.enable_rum ? 1 : 0

  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRoleWithWebIdentity"]

    principals {
      type        = "Federated"
      identifiers = ["cognito-identity.amazonaws.com"]
    }

    condition {
      test     = "StringEquals"
      variable = "cognito-identity.amazonaws.com:aud"
      values   = [aws_cognito_identity_pool.rum[0].id]
    }

    condition {
      test     = "ForAnyValue:StringLike"
      variable = "cognito-identity.amazonaws.com:amr"
      values   = ["unauthenticated"]
    }
  }
}

data "aws_iam_policy_document" "rum_put_events" {
  count = var.enable_rum ? 1 : 0

  statement {
    effect    = "Allow"
    actions   = ["rum:PutRumEvents"]
    resources = ["arn:aws:rum:${var.aws_region}:${data.aws_caller_identity.current.account_id}:appmonitor/${local.name_prefix}"]
  }
}

resource "aws_iam_role" "rum_unauthenticated" {
  count = var.enable_rum ? 1 : 0

  name               = "${local.name_prefix}-rum-unauth"
  assume_role_policy = data.aws_iam_policy_document.rum_assume_role[0].json

  tags = local.common_tags
}

resource "aws_iam_role_policy" "rum_unauthenticated" {
  count = var.enable_rum ? 1 : 0

  name   = "put-rum-events"
  role   = aws_iam_role.rum_unauthenticated[0].id
  policy = data.aws_iam_policy_document.rum_put_events[0].json
}

resource "aws_cognito_identity_pool_roles_attachment" "rum" {
  count = var.enable_rum ? 1 : 0

  identity_pool_id = aws_cognito_identity_pool.rum[0].id

  roles = {
    unauthenticated = aws_iam_role.rum_unauthenticated[0].arn
  }
}

resource "aws_rum_app_monitor" "website" {
  count = var.enable_rum ? 1 : 0

  name           = local.name_prefix
  domain         = "www.${var.domain_name}"
  cw_log_enabled = false

  app_monitor_configuration {
    # allow_cookies = false keeps this outside PECR consent requirements.
    allow_cookies       = false
    enable_xray         = false
    session_sample_rate = 1
    telemetries         = ["performance", "errors"]
    identity_pool_id    = aws_cognito_identity_pool.rum[0].id
    guest_role_arn      = aws_iam_role.rum_unauthenticated[0].arn
  }

  tags = local.common_tags
}
