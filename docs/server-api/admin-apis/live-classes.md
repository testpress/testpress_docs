---
sidebar_position: 12
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Live Classes

:::important

Admin APIs require authorization token with admin privileges. You can check the following link to generate an authorization token. You need to provide an admin username and password to generate token with admin privileges.

:::

[Authentication](https://testpress.github.io/testpress_docs/docs/intro)

Live Classes API lets you create live classes for your institute. You choose the provider and, optionally, the course chapter the live class belongs to.

- To create a live class on its own, call the endpoint without `course_id` and `chapter_id`.
- To attach a live class to a course chapter, also send `course_id` and `chapter_id`.

## Permissions

- The `instructor` must be an owner, moderator, or mentor of the institute.
- For a live class attached to a course, the user must be an owner, staff member, or a user with edit-contents permission on the course.
- For a live class without a course, the user must be an owner, moderator, or staff member of the institute.

## Rate Limit

This endpoint is throttled to **10 requests per minute** per institute and user.

## Create A Live Class

This endpoint creates a live class, optionally attached to a course chapter.

### HTTP Request

`POST /api/v3/admin/live-classes/`

### Fields

| Name | Type | Description |
|---|---|---|
| title | string | Title of the live class. Required, maximum 255 characters. |
| start | string | Start time in ISO 8601 format. Required. |
| duration | integer | Duration in minutes. Required, minimum 1. |
| provider | string | `fermion` or `tpstreams`. Required. TpStreams is only supported when a course is provided. |
| instructor | integer | User ID of the staff member acting as instructor. Required. |
| course_id | integer | Course ID. Optional. Provide together with `chapter_id`. |
| chapter_id | integer | Chapter ID belonging to `course_id`. Optional. Provide together with `course_id`. |
| description | string | Description of the live class. |
| send_reminder_email | boolean | Send reminder emails to participants. Default: `false`. |
| instructions | string | Instructions for the live class. Used only without a course; falls back to `description` when omitted. |
| session_type | string | Used only without a course. `one_on_one`, `group_class`, `public`, or `guest_only`. Default: `group_class`. |
| audience_users | array | Used only without a course. Student User IDs. |
| audience_batches | array | Used only without a course. Batch IDs. |
| allow_guest_access | boolean | Used only without a course. Allow guests to join. Default: `false`. |
| is_instant | boolean | Used only without a course. Start the live class instantly. Default: `false`. |
| session_settings | json | Used only without a course. Allowed keys: `add_everyone_on_stage`, `should_skip_join_screen_for_students`. |
| guest_settings | json | Used only without a course. Allowed keys: `name`, `email`, `phone_number`. |
| enable_chat | boolean | Used only with a course. Enable the chat room. Defaults to `true` for TpStreams, and is always `false` for Fermion. |
| show_recorded_video | boolean | Used only with a course. Allow viewing the recording after the stream ends. Default: `true`. |
| latency | integer | Used only with a course. `0` for Normal Latency (default) or `1` for Low Latency. |
| free_preview | boolean | Used only with a course. Allow the content as a free preview. Default: `false`. |
| add_everyone_on_stage | boolean | Used only with a course and the Fermion provider. Defaults to the cached institute preference when omitted. |
| should_skip_join_screen_for_students | boolean | Used only with a course and the Fermion provider. Defaults to the cached institute preference when omitted. |

### Live Class Without A Course

<Tabs>
<TabItem value="bash" label="cURL">

```bash
curl --request POST \
  --url https://your-institute.testpress.in/api/v3/admin/live-classes/ \
  --header 'authorization: JWT <your-token>' \
  --header 'content-type: application/json' \
  --data '{
    "title": "Weekly Doubt Clearing",
    "start": "2023-10-15T10:00:00Z",
    "duration": 60,
    "provider": "fermion",
    "instructor": 12,
    "session_type": "group_class",
    "audience_batches": [3]
}'
```

</TabItem>
<TabItem value="py" label="Python">

```py
import requests

url = "https://your-institute.testpress.in/api/v3/admin/live-classes/"
headers = {
    'authorization': "JWT <your-token>",
    'content-type': "application/json"
}
payload = {
    "title": "Weekly Doubt Clearing",
    "start": "2023-10-15T10:00:00Z",
    "duration": 60,
    "provider": "fermion",
    "instructor": 12,
    "session_type": "group_class",
    "audience_batches": [3]
}

response = requests.request("POST", url, headers=headers, json=payload)
print(response.text)
```

</TabItem>
</Tabs>

### Live Class Attached To A Course

<Tabs>
<TabItem value="bash" label="cURL">

```bash
curl --request POST \
  --url https://your-institute.testpress.in/api/v3/admin/live-classes/ \
  --header 'authorization: JWT <your-token>' \
  --header 'content-type: application/json' \
  --data '{
    "title": "Chapter 1 Live Class",
    "start": "2023-10-15T10:00:00Z",
    "duration": 45,
    "provider": "tpstreams",
    "instructor": 12,
    "course_id": 10,
    "chapter_id": 20
}'
```

</TabItem>
<TabItem value="py" label="Python">

```py
import requests

url = "https://your-institute.testpress.in/api/v3/admin/live-classes/"
headers = {
    'authorization': "JWT <your-token>",
    'content-type': "application/json"
}
payload = {
    "title": "Chapter 1 Live Class",
    "start": "2023-10-15T10:00:00Z",
    "duration": 45,
    "provider": "tpstreams",
    "instructor": 12,
    "course_id": 10,
    "chapter_id": 20
}

response = requests.request("POST", url, headers=headers, json=payload)
print(response.text)
```

</TabItem>
</Tabs>

### Responses

<details>
<summary><b>201</b> Live class created without a course</summary>

```json
{
  "id": 1,
  "title": "Weekly Doubt Clearing",
  "start": "2023-10-15T10:00:00Z",
  "end": "2023-10-15T11:00:00Z",
  "duration": 60,
  "provider": "Fermion",
  "is_course_live_class": false,
  "course_id": null,
  "chapter_id": null,
  "meeting_id": "fermion-123",
  "status": "Not Started",
  "instructor": {
    "id": 12,
    "display_name": "John Doe"
  },
  "public_join_url": "",
  "created": "2023-10-10T09:00:00Z"
}
```

</details>

<details>
<summary><b>201</b> Live class created with a course</summary>

```json
{
  "id": 100,
  "title": "Chapter 1 Live Class",
  "start": "2023-10-15T10:00:00Z",
  "end": null,
  "duration": 45,
  "provider": "TpStreams",
  "is_course_live_class": true,
  "course_id": 10,
  "chapter_id": 20,
  "meeting_id": "channel-123",
  "status": "Not Started",
  "instructor": {
    "id": 12,
    "display_name": "John Doe"
  },
  "public_join_url": null,
  "created": "2023-10-10T09:00:00Z"
}
```

</details>

<details>
<summary><b>400</b> Validation error</summary>

```json
{
  "course_id and chapter_id must be provided together."
}
```

</details>

<details>
<summary><b>403</b> Forbidden</summary>

```json
{
  "detail": "You do not have permission to create this live class."
}
```

</details>

### Response Fields

| Name | Type | Description |
|---|---|---|
| id | integer | Unique ID of the live class. |
| title | string | Title of the live class. |
| start | string | Start time in ISO 8601 format. |
| end | string | End time. `null` for a live class created with a course. |
| duration | integer | Duration in minutes. |
| provider | string | `Fermion` or `TpStreams`. |
| is_course_live_class | boolean | Whether the live class is attached to a course. |
| course_id | integer | Course ID when attached to a course, otherwise `null`. |
| chapter_id | integer | Chapter ID when attached to a course, otherwise `null`. |
| meeting_id | string | Provider meeting/channel identifier. |
| status | string | Live class status, for example `Not Started`. |
| instructor | object | Instructor with `id` and `display_name`. |
| public_join_url | string | Public join URL for a live class with guest access; otherwise `null` or an empty string. |
| created | string | Creation time in ISO 8601 format. |

## Validation Rules

- `course_id` and `chapter_id` must be provided together.
- TpStreams requires `course_id` and `chapter_id`; without a course only Fermion is supported.
- The provider must be configured for the institute. Fermion must be configured, and live streaming (TpStreams) must be enabled.
- `enable_chat: true` is rejected for Fermion live classes attached to a course.
- `one_on_one` live classes require exactly one `audience_users` entry, and the instructor must be a different user.
- `group_class` live classes require at least one audience user or batch, and the instructor cannot be part of the audience.
- `session_settings` and `guest_settings` only accept the keys listed above.
- The `instructor` must be an owner, moderator, or mentor of the institute.
