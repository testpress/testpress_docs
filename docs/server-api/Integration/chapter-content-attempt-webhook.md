---
sidebar_position: 5
---

# Chapter content attempt webhook

## How to enable the chapter content attempt webhook

* In the Institute settings, locate the **Chapter content webhook URL** field and add the desired destination URL.
* Use a URL generated from a webhook tester such as [Webhook site](https://webhook.site/) if you want to validate payloads before going live.
* Testpress automatically posts data to this URL whenever a learner starts or completes a chapter content attempt.

## Data posted to the webhook URL

Below are the response parameters Testpress sends when a chapter content attempt transitions to a new state.

| Name                   | Type           | Description                                                                                       |
| ---------------------- | -------------- | ------------------------------------------------------------------------------------------------- |
| attempt_id             | integer        | Unique Testpress ID for the chapter content attempt.                                              |
| user_id                | integer        | Identifier of the learner who is attempting the chapter content.                                  |
| chapter_content        | key/value pair | Contains chapter content details such as `id`, `title`, `content_type`, and nested `exam` info.   |
| course                 | key/value pair | Provides course metadata (for example `id` and `title`).                                          |
| assessment             | key/value pair | Populated when the attempt is attached to an assessment; `null` when not applicable.              |
| user_video             | key/value pair | Details about the learner’s video progress, if available.                                         |
| user_video_conference  | key/value pair | Data about the video conference attempt, if available.                                          |
| state                  | string         | Current state of the attempt (e.g., `Started`, `Completed`).                                      |
| created                | datetime       | ISO-8601 timestamp indicating when the attempt record was created.                                |
| completed_on           | datetime       | ISO-8601 timestamp showing when the attempt was completed; `null` while in progress.              |
| key                    | string         | Public institute key provided by Testpress to identify the Institute.                             |
| hash                   | string         | HMAC signature that can be used to verify the authenticity of the payload.                        |

`hash` is used to verify that the data originated from Testpress.

## Sample chapter content attempt webhook payload

```json
{
  "attempt_id": 255920,
  "user_id": 2,
  "chapter_content": {
    "id": 248,
    "title": "Arithmetic Operators in Python",
    "content_type": "Notes",
    "exam": null
  },
  "course": {
    "id": 1,
    "title": "Computer Science"
  },
  "assessment": null,
  "user_video": null,
  "user_video_conference": null,
  "state": "Completed",
  "created": "2025-11-14T16:18:51.254316+05:30",
  "completed_on": "2025-11-14T16:18:51.253655+05:30",
  "key": "rBGZys6baejzNDkn",
  "hash": "b8c8ae7442c0d13db532401e8ab0ac48857b47201eb7a2b8ed7d1dcc54ca44972db23a2188b1f43f9abc215e32f1825fa1b22d448ce6633cc5230d4595ef4f82"
}
```

## How To Generate The Hash And Verify The Authenticity Of The Data
HMAC (Hash-based message authentication code) is used to avoid tampering during the request flow.
The hash is calculated using the following algorithm:
* Get the values of `public_key`, `attempt_id`, `chapter_content.id`, `user_id`, `course.id`, `private_key`, `status`.
* Create a string by appending the above percentage encoded values using | pipe character. Maintain the same order while appending
* Calculate the HMAC using HMAC-SHA512 with the private key.
* Private key can be taken from the admin dashboard.
hmac.new(secret, message, hashlib.sha512).hexdigest()
