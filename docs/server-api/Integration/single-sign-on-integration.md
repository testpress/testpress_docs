---
sidebar_position: 6
---

# Single Sign-On (SSO) Integration

## Overview

Testpress supports SSO for external websites configured as Portal links. When a student clicks a Portal link, Testpress redirects them to the external website with an SSO payload and signature.

The external website must verify the signature, validate the payload, and authenticate the student.

## 1. Configure SSO

Configure the following for the Portal link in Testpress:

- **URL:** The external website URL.
- **SSO Secret:** A shared secret used to generate and verify the SSO signature.

The external website must use the same secret to verify incoming SSO requests.

## 2. SSO Request

When a student clicks the Portal link, Testpress redirects the browser to the configured URL using HTTP `GET`.

The redirect includes these query parameters:

| Parameter | Description |
| --------- | ----------- |
| `sso`     | Base64-encoded student information and timestamp |
| `sig`     | HMAC-SHA256 signature of the encoded payload |

Example:

```
https://external.example.com/?sig=<signature>&sso=<payload>
```

## 3. SSO Payload

The payload contains the student's email address or username and the current Unix timestamp in seconds.

If the student has an email address:

```
email=student@example.com&time=1729683600
```

Otherwise:

```
username=student123&time=1729683600
```

The payload is encoded using standard Base64 before being sent in the `sso` parameter.

Only one identity field is included. Email takes precedence over username.

## 4. Signature

Testpress generates the signature using HMAC-SHA256, with the configured SSO secret as the key and the Base64-encoded payload as the message.

The external website must generate the signature using the same method and compare it with the received `sig` value. Reject the request if the signatures do not match.

## 5. External Website Requirements

The external website must:

1. Read the `sso` and `sig` query parameters.
2. Verify the signature using the shared SSO secret.
3. Decode the payload and extract the identity field and timestamp.
4. Validate the timestamp to prevent accepting expired requests.
5. Identify the student using the email address or username.
6. Authenticate the student and establish a session.

:::note

If the SSO secret is not configured for the Portal link, Testpress redirects to the external website without SSO parameters.

:::
