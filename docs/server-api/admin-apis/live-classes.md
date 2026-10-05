---
sidebar_position: 12
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Live Classes

> Admin APIs require authorization token with admin privileges. 

[Authentication](https://testpress.github.io/testpress_docs/docs/intro/)

Live Classes API lets you create standalone learning sessions or course-specific live streams.

## Create Learning Session

This endpoint creates a standalone learning session.

### HTTP Request

`POST /api/v3/admin/live-classes/learning-sessions/`

### Fields

| Name | Type | Description |
|---|---|---|
| title | string | Title of the session (required) |
| start | string | Start time in ISO 8601 format (required) |
| duration | integer | Duration of the session in minutes (required) |
| instructor | integer | User ID of the staff member acting as instructor (required) |
| session_type | string | "GROUP_CLASS" or "ONE_ON_ONE" (default: "GROUP_CLASS") |
| audience_users | array | Student User IDs (Required if session_type is "ONE_ON_ONE") |
| audience_batches | array | Batch IDs |
| instructions | string | Optional instructions for the session |
| allow_guest_access | boolean | Allow guests to join (default: false) |
| send_reminder_email | boolean | Send reminder emails to participants (default: false) |
| is_instant | boolean | Start the session instantly (default: false) |
| session_settings | json | Allowed keys: `add_everyone_on_stage`, `should_skip_join_screen_for_students` |
| guest_settings | json | Allowed keys: `name`, `email`, `phone_number` |

<Tabs>
<TabItem value="bash" label="cURL">

```bash
curl --request POST \
  --url https://your-institute.testpress.in/api/v3/admin/live-classes/learning-sessions/ \
  --header 'authorization: JWT <your-token>' \
  --header 'content-type: application/json' \
  --data '{
    "title": "Weekly Doubt Clearing",
    "start": "2023-10-15T10:00:00Z",
    "duration": 60,
    "instructor": 12,
    "session_type": "GROUP_CLASS"
}'
```

</TabItem>
<TabItem value="py" label="Python">

```py
import requests

url = "https://your-institute.testpress.in/api/v3/admin/live-classes/learning-sessions/"
headers = {
    'authorization': "JWT <your-token>",
    'content-type': "application/json"
}
payload = {
    "title": "Weekly Doubt Clearing",
    "start": "2023-10-15T10:00:00Z",
    "duration": 60,
    "instructor": 12,
    "session_type": "GROUP_CLASS"
}

response = requests.request("POST", url, headers=headers, json=payload)
print(response.text)
```

</TabItem>
</Tabs>

### Responses

<details>
<summary><b>201</b> Created</summary>

```json
{
  "id": 1,
  "title": "Weekly Doubt Clearing",
  "session_type": "Group Class",
  "status": "Not Started",
  "provider": "Fermion",
  "start": "2023-10-15T10:00:00Z",
  "end": "2023-10-15T11:00:00Z",
  "instructor": {
    "id": 12,
    "display_name": "John Doe"
  },
  "meeting_id": "fermion-123",
  "public_join_url": "https://...",
  "created": "2023-10-10T09:00:00Z"
}
```

</details>

## Create Course Live Stream

This endpoint creates a live stream within a specific course chapter.

### HTTP Request

`POST /api/v3/admin/live-classes/courses/:course_id/chapters/:chapter_id/live-streams/`

### Fields

| Name | Type | Description |
|---|---|---|
| title | string | Title of the live stream (required) |
| start | string | Start time in ISO 8601 format (required) |
| duration | integer | Duration of the session in minutes (required) |
| provider | string | "fermion" or "tpstreams" (required) |
| instructor | integer | User ID of the instructor (required) |
| description | string | Description of the live stream |
| enable_chat | boolean | Enable chat room (defaults to true for tpstreams) |
| show_recorded_video | boolean | Allow viewing after stream ends (default: true) |
| latency | string | Stream latency setting |
| send_reminder_email | boolean | Send reminder emails to participants (default: false) |
| free_preview | boolean | Allow free preview (default: false) |

<Tabs>
<TabItem value="bash" label="cURL">

```bash
curl --request POST \
  --url https://your-institute.testpress.in/api/v3/admin/live-classes/courses/10/chapters/20/live-streams/ \
  --header 'authorization: JWT <your-token>' \
  --header 'content-type: application/json' \
  --data '{
    "title": "Chapter 1 Live Class",
    "start": "2023-10-15T10:00:00Z",
    "duration": 45,
    "provider": "tpstreams",
    "instructor": 12
}'
```

</TabItem>
</Tabs>

### Responses

<details>
<summary><b>201</b> Created</summary>

```json
{
  "id": 100,
  "title": "Chapter 1 Live Class",
  "content_type": "Live Stream",
  "course_id": 10,
  "chapter_id": 20,
  "start": "2023-10-15T10:00:00Z",
  "end": "2023-10-15T10:45:00Z",
  "duration": 45,
  "provider": "tpstreams",
  "live_stream_id": 50,
  "meeting_id": "channel-123",
  "live_stream_status": "Not Started",
  "created": "2023-10-10T09:00:00Z"
}
```

</details>
