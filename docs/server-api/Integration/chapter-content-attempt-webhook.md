---
sidebar_position: 3
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
| assessment             | key/value pair | Populated when the attempt is for an exam; `null` when not applicable.              |
| user_video             | key/value pair | Details about the learner’s video watch progress, if available.                                      |
| user_video_conference  | key/value pair | Data about the video conference attempt, if available.                                          |
| state                  | string         | Current state of the attempt (e.g. `Started`,  `Pending Evaluation`, `Evaluation Completed`, `Completed`).                                      |
| created                | datetime       | ISO-8601 timestamp indicating when the attempt record was created.                                |
| completed_on           | datetime       | ISO-8601 timestamp showing when the attempt was completed; `null` while in progress.              |
| key                    | string         | Public institute key provided by Testpress to identify the Institute.                             |
| hash                   | string         | HMAC signature that can be used to verify the authenticity of the payload.                        |

`hash` is used to verify that the data originated from Testpress.

## Sample webhook payload

#### For Notes
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

#### For Attachments
```json
{
  "attempt_id": 100419,
  "user_id": 3,
  "chapter_content": {
    "id": 8357,
    "title": "Financial Leverage Practice",
    "content_type": "Attachment",
    "exam": null
  },
  "course": {
    "id": 726,
    "title": "# Demo Course"
  },
  "assessment": null,
  "user_video": null,
  "user_video_conference": null,
  "state": "Completed",
  "created": "2025-11-17T12:59:25.213511+05:30",
  "completed_on": "2025-11-17T12:59:25.213284+05:30",
  "key": "wCubPULcrB38SM5d",
  "hash": "f12bbef95f7563b3bd4b6cb2efade4163ccd6f2026e3ff3380214bf00f05a421ce93aeb063be13cad9ea3ff9f5067c4924ac4bdb8d568cedc9d2828d436bbff2"
}
```

#### For Exam
```json
{
  "attempt_id": 100418,
  "user_id": 3,
  "chapter_content": {
    "id": 8298,
    "title": "Monthly Test 3",
    "content_type": "Exam",
    "exam": {
      "id": 2628,
      "title": "Monthly Test 3",
      "start_date": "2025-10-27T15:55:46.356357+05:30",
      "end_date": null,
      "duration": "0:05:00"
    }
  },
  "course": {
    "id": 1242,
    "title": "Science"
  },
  "assessment": {
    "id": 90722,
    "exam_id": 2628,
    "user_id": 3,
    "total_score": 80,
    "number_of_correct_answers": 0,
    "number_of_incorrect_answers": 0,
    "number_of_unanswered_questions": 0,
    "number_of_answered_questions": 0,
    "percentage": "0.00",
    "rank": "NA",
    "result": "NA",
    "total_questions": 20
  },
  "user_video": null,
  "user_video_conference": null,
  "state": "Started",
  "created": "2025-11-17T12:55:01.130232+05:30",
  "completed_on": null,
  "key": "wCubPULcrB38SM5d",
  "hash": "de7d7eedd904c3bf03558c4a425d15a8a053d1d11f7def46c0a448271266d1e7852ee184bb19f4d73946018a8731777821eae058b85fd36b5391925e72c5bbac"
}
```

#### For Video
```json
{
  "attempt_id": 100421,
  "user_id": 3,
  "chapter_content": {
    "id": 7859,
    "title": "Chauffers Communication",
    "content_type": "Video",
    "exam": null
  },
  "course": {
    "id": 726,
    "title": "# Test Course"
  },
  "assessment": null,
  "user_video": {
    "id": 5390,
    "video_id": 2648,
    "created": "2025-11-17T12:59:57.493704+05:30",
    "watched_percentage": 0,
    "remaining_duration": "593.0",
    "state": "Started",
    "is_live_class_recording": false
  },
  "user_video_conference": null,
  "state": "Started",
  "created": "2025-11-17T12:59:57.497059+05:30",
  "completed_on": null,
  "key": "wCubPULcrB38SM5d",
  "hash": "a765d8001d4770d0c3f73772377c78399abadde776779fdc270c44e2c3be9b65d3d67baac99b18db9a43d685b525c5e8213dffb529df96605543ef41e3557e41"
}
```

#### For VideoConference
```json
{
  "attempt_id": 100426,
  "user_id": 3,
  "chapter_content": {
    "id": 5662,
    "title": "NM Testing 25-7-24",
    "content_type": "VideoConference",
    "exam": null
  },
  "course": {
    "id": 492,
    "title": "Science Class 4 - Logistics"
  },
  "assessment": null,
  "user_video": {
    "id": 5392,
    "video_id": 1796,
    "created": "2025-11-17T13:55:38.022375+05:30",
    "watched_percentage": 100,
    "remaining_duration": "0.0",
    "state": "Completed",
    "is_live_class_recording": true
  },
  "user_video_conference": null,
  "state": "Completed",
  "created": "2025-11-17T13:55:38.024655+05:30",
  "completed_on": "2025-11-17T13:55:41.442138+05:30",
  "key": "wCubPULcrB38SM5d",
  "hash": "fd12fe502d962504c9e7d966ef1f7dfaa2060e35578361b2350d7dc5ddb30fb2581eee8ae5fc9c83380d7a23e007a30bc4f988442894b3ddf28a89ee08b8e851"
}
```

#### For LiveStream
```json
{
  "attempt_id": 100422,
  "user_id": 3,
  "chapter_content": {
    "id": 7920,
    "title": "live stream title",
    "content_type": "Live Stream",
    "exam": null
  },
  "course": {
    "id": 726,
    "title": "# Test Course"
  },
  "assessment": null,
  "user_video": {
    "id": 5391,
    "video_id": 2658,
    "created": "2025-11-17T13:01:46.730544+05:30",
    "watched_percentage": 0,
    "remaining_duration": null,
    "state": "Started",
    "is_live_class_recording": false
  },
  "user_video_conference": null,
  "state": "Started",
  "created": "2025-11-17T13:01:46.733354+05:30",
  "completed_on": null,
  "key": "wCubPULcrB38SM5d",
  "hash": "01d6d0c2cb574b52620f4659d0428da96b41a4be35a4bec65a4b4b5706bed9ef2b277b41522c5c2c579146af7da92af9757966062cdd1cc46dab1e212307e691"
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
