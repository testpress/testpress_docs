---
sidebar_position: 1
---

# Getting started

Testpress video embedding lets you play a video hosted in your Testpress institute on another website or application. Playback uses two values:

- The video chapter content's `uuid`
- A playback access token generated for that chapter content

The API paths historically call the UUID `video_id`. In these endpoints, **`video_id` means `ChapterContent.uuid`**. It is not the numeric chapter-content `id`, video `id`, course `id`, or content slug.

## Before you begin

Ensure that:

- Video embedding is enabled for your Testpress institute.
- The video has been added to a course chapter and is available for playback.
- Your server has a Testpress JWT belonging to a moderator or staff user. Student JWTs cannot generate playback access tokens.
- Token generation happens on your backend. Never expose an admin or moderator JWT in browser or mobile application code.

## Who calls each API?

| Component | Responsibility |
| --------- | -------------- |
| Student frontend | Asks your backend to start playback for a chapter content, then places the returned `playback_url` in an iframe. It must not call the Testpress admin token endpoint. |
| Your backend | Authenticates the student, verifies that the student may view the requested content, calls Testpress's access-token endpoint with a moderator or staff JWT, and returns only the resulting `playback_url` to the frontend. |
| Testpress API | Creates a token scoped to the requested chapter-content UUID and returns the embed playback URL. |

The access-token endpoint grants moderator-level callers the ability to create playback credentials. It does not use a student JWT to decide which student receives the URL. Your backend must perform that authorization before issuing a playback URL.

## Integration flow

### 1. Find the numeric chapter-content ID

Retrieve the contents of a course:

```http
GET /api/v3/courses/<course_id>/contents/?type=video
```

Each item in `results.contents` is a chapter content. Its numeric `id` identifies the placement of the video in that course chapter.

```json
{
  "results": {
    "contents": [
      {
        "id": 10639,
        "title": "Introduction",
        "content_type": "Video",
        "video_id": 3557
      }
    ]
  }
}
```

See [Get Course Contents](../server-api/students-apis/courses.md#get-course-contents) for filters and the complete response structure.

### 2. Resolve the chapter-content UUID

Use the numeric chapter-content ID from step 1:

```http
GET /api/v2.4/contents/10639/
Authorization: JWT <student_or_admin_jwt>
```

Read the top-level `uuid` from the response:

```json
{
  "id": 10639,
  "uuid": "7aBM7cOyDTi",
  "content_type": "Video",
  "video": {
    "id": 3557,
    "title": "Introduction"
  }
}
```

Use `7aBM7cOyDTi` as `{video_id}` in the token and embed URLs. See [Get Chapter Content Details](../server-api/students-apis/courses.md#get-chapter-content-details).

### 3. Generate a playback access token

From your backend, send a moderator or staff JWT to:

```http
POST /api/v2.5/admin/videos/7aBM7cOyDTi/access-tokens/
Authorization: JWT <moderator_or_staff_jwt>
Content-Type: application/json
```

For a token valid for 10 minutes:

```json
{
  "time_to_live": 600,
  "expires_after_first_usage": false
}
```

The response includes both the token in `code` and a ready-to-use `playback_url`:

```json
{
  "playback_url": "https://lmsdemo.testpress.in/embed/7aBM7cOyDTi/?access_token=ef5c288a-ee85-4840-a4f3-f39d7091938f",
  "expires_after_first_usage": false,
  "code": "ef5c288a-ee85-4840-a4f3-f39d7091938f",
  "status": "Active",
  "valid_until": "2026-08-18T10:10:00+05:30",
  "annotations": []
}
```

See [Playback Authentication](./authentication.md) for request examples and token options.

In a typical integration, your application exposes its own student-facing endpoint, such as `POST /api/video-playback`, and keeps the Testpress moderator JWT only on the server:

```python
# Example server-side flow. Adapt authentication and authorization to your app.
import requests

def create_playback_url(authenticated_student, chapter_content_uuid):
    if not student_can_view(authenticated_student, chapter_content_uuid):
        raise PermissionError("The student cannot view this content")

    response = requests.post(
        "https://lmsdemo.testpress.in/api/v2.5/admin/videos/"
        f"{chapter_content_uuid}/access-tokens/",
        headers={
            "authorization": "JWT " + TESTPRESS_MODERATOR_JWT,
            "content-type": "application/json",
        },
        json={"time_to_live": 600},
        timeout=10,
    )
    response.raise_for_status()
    return {"playback_url": response.json()["playback_url"]}
```

`TESTPRESS_MODERATOR_JWT` must come from protected server configuration, not from a request sent by the browser.

### 4. Embed the returned playback URL

Prefer the server-provided `playback_url` instead of constructing it manually:

```html
<iframe
  width="560"
  height="315"
  src="https://lmsdemo.testpress.in/embed/7aBM7cOyDTi/?access_token=ef5c288a-ee85-4840-a4f3-f39d7091938f"
  title="Introduction"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>
```

For a dynamic student frontend, request a fresh URL from your backend and assign it to the iframe:

```html
<iframe id="testpress-player" width="560" height="315" allowfullscreen></iframe>

<script>
  async function loadVideo(chapterContentUuid) {
    const response = await fetch('/api/video-playback', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({chapter_content_uuid: chapterContentUuid}),
    });

    if (!response.ok) {
      throw new Error('Unable to authorize video playback');
    }

    const {playback_url} = await response.json();
    document.querySelector('#testpress-player').src = playback_url;
  }

  loadVideo('7aBM7cOyDTi');
</script>
```

The browser receives only the short-lived playback URL. It never receives the Testpress moderator JWT.

## Identifier reference

| Value | Example | Where it is used |
| ----- | ------- | ---------------- |
| Course ID | `1583` | `/api/v3/courses/1583/contents/` |
| Numeric chapter-content ID | `10639` | `/api/v2.4/contents/10639/` |
| Video record ID | `3557` | Returned inside video data; not used in the embed URL |
| Chapter-content UUID | `7aBM7cOyDTi` | Token endpoint and `/embed/` playback URL; historically named `video_id` |
| Access-token code | `ef5c288a-...` | The `access_token` query parameter in the playback URL |

## Security recommendations

- Generate short-lived tokens just before playback instead of reusing permanent embed codes.
- Generate tokens on your server and return only `playback_url` or `code` to the frontend.
- Use `expires_after_first_usage` only when a token truly needs to be single-use.
- Configure domain restrictions when playback should work only on approved websites.
- Do not log JWTs, access-token codes, or signed playback URLs.
