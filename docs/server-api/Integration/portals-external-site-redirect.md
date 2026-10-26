---
sidebar_position: 6
title: Portals - External Site Redirect
sidebar_label: Portals - External Site Redirect
---

# Portals - External Site Redirect

This page explains how a Portal link redirects a student to an external website, including SSO. Adding, editing, enabling or deleting Portal links is done by administrators in the Portals settings.

Portals allow administrators to configure links in Testpress that redirect students to external websites. Portal links can redirect students directly to the destination website or include SSO parameters when a shared secret is configured and the student is authenticated.

## How It Works

1. A student clicks a configured Portal link inside Testpress.
2. Testpress initiates an HTTP `GET` redirect to the destination URL.
3. If an SSO secret is configured, Testpress appends signed student identity information in query parameters.
4. The external website verifies the signature, extracts student information, and establishes an authenticated session.

:::note

If no SSO secret is configured for the Portal link, Testpress redirects the student to the external website without any SSO query parameters.

:::

## Portal Configuration

Configure the following settings for each Portal link in Testpress:

- Name: The label shown for the link in the Portals menu.
- URL: The destination website URL to which students will be redirected.
- SSO Secret (optional): A shared secret key used to generate and verify the HMAC-SHA256 signature. Leave it blank for a plain redirect.
- Show Without Login: When enabled, the link is also shown to visitors who are not logged in. See "Portal Visibility and Redirect Behavior".
- Active: When a link is disabled, it is hidden from students and its redirect URL cannot be used. Its configuration is kept and the link can be enabled again later.

The external website must use the identical secret key to verify incoming requests.

## Redirect Request

When a student accesses a Portal link with an SSO secret configured, Testpress redirects the browser using HTTP `GET` with the following query parameters:

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `sso`     | string | Base64-encoded student identity and timestamp payload. |
| `sig`     | string | Hex-encoded HMAC-SHA256 signature of the `sso` payload. |

### Example Redirect URL

```
https://external.example.com/?sig=<signature>&sso=<payload>
```

## SSO Payload

Before Base64 encoding, the payload contains either the student's email address or username, along with a Unix timestamp in seconds (`time`). Email takes precedence when available.

- **With Email:**
  ```
  email=student@example.com&time=1729683600
  ```
- **With Username (when email is unavailable):**
  ```
  username=student123&time=1729683600
  ```

This raw query string is encoded using standard Base64 before being passed in the `sso` parameter.

## Signature Verification

Testpress signs the Base64-encoded `sso` string using HMAC-SHA256 with the shared Portal secret:

```
sig = HMAC-SHA256(key = SSO_SECRET, message = sso)
```

The external website must calculate the signature using the same method and compare it with the received `sig` value. Reject the request if the signatures do not match.

The sso value is Base64-encoded and can contain the characters +, / and =. Read the query parameters with a standard URL-decoding query parser. Compute the signature on the sso string exactly as received (URL-decoded, but still Base64-encoded). Base64-decode it only after the signature is verified.

## External Website Implementation

To securely handle incoming student redirects, the external website must:

1. **Read Parameters:** Retrieve the `sso` and `sig` query parameters from the HTTP `GET` request.
2. **Verify Signature:** Compute the HMAC-SHA256 signature of the `sso` string using the shared SSO secret and compare it against `sig`.
3. **Decode Payload:** Base64-decode the `sso` payload and parse the identity field and timestamp.
4. **Validate Timestamp:** Verify that the `time` parameter is no more than 30 minutes old, allowing for small clock differences between servers, and reject expired or invalid requests.
5. **Authenticate Student:** Identify the student using the email address or username and establish an active session.

Security recommendations:

- Serve the destination website over HTTPS.
- Compare signatures using a constant-time comparison.
- Do not trust or decode the sso payload until the signature has been verified.

## Portal Visibility and Redirect Behavior

Portal links are displayed to logged-out users on the home, login, and registration pages only when the Portals feature is enabled and the individual Portal link has **Show Without Login** enabled.

When a logged-out user clicks a public Portal link, Testpress redirects them to the external website without SSO parameters. If **Show Without Login** is disabled, unauthenticated users are redirected to the Testpress login page.

For authenticated users, Testpress includes SSO parameters in the redirect when an SSO secret is configured. Otherwise, the user is redirected without SSO parameters.

Disabled links: A disabled Portal link is not shown to any user and its redirect URL cannot be used.

Removing the SSO Secret: If the SSO Secret is removed from a link, the link redirects without SSO parameters.

Show Without Login and SSO: These two settings are independent. If a link has an SSO Secret and Show Without Login is enabled, a logged-out visitor is redirected without SSO parameters. The destination does not receive the student's identity and cannot sign them in. Enable Show Without Login only for destinations that can be used without Testpress SSO.

## Redirecting to a Specific Page

Portal links support an optional `endpoint` query parameter to redirect students to a specific path on the external website.

Example:

```text
/portals/<slug>/?endpoint=ebooks
```

When provided, Testpress appends the specified endpoint to the configured destination URL. If omitted, the student is redirected to the configured destination URL.

The endpoint value is appended only as a path to the configured URL. It cannot change the destination host.
