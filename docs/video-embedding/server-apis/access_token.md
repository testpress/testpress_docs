---
sidebar_position: 1
---

# Access tokens

These moderator-only APIs let your backend list and manage playback access tokens for a video chapter content.

In every path below, `<chapter_content_uuid>` is the top-level `uuid` returned by the [Chapter Content Details API](../../server-api/students-apis/courses.md#get-chapter-content-details). It is sometimes called `video_id` in older integrations.

## List access tokens

```http
GET /api/v2.5/admin/videos/<chapter_content_uuid>/access-tokens/
Authorization: JWT <moderator_or_staff_jwt>
```

### Query parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| status | string | Optional. Filter by `active` or `expired`. |
| page | integer | Optional. Page number to retrieve. |
| page_size | integer | Optional. Number of tokens per page. |

### Response

```json
{
  "count": 1,
  "next": null,
  "previous": null,
  "per_page": 20,
  "results": [
    {
      "playback_url": "https://lmsdemo.testpress.in/embed/7aBM7cOyDTi/?access_token=ef5c288a-ee85-4840-a4f3-f39d7091938f",
      "expires_after_first_usage": false,
      "code": "ef5c288a-ee85-4840-a4f3-f39d7091938f",
      "status": "Active",
      "valid_until": "2026-08-18T10:10:00+05:30",
      "annotations": [],
      "created": "2026-08-18T10:00:00+05:30",
      "modified": "2026-08-18T10:00:00+05:30"
    }
  ]
}
```

## Get an access token

```http
GET /api/v2.5/admin/videos/<chapter_content_uuid>/access-tokens/<access_token_code>/
Authorization: JWT <moderator_or_staff_jwt>
```

The token must belong to the chapter content specified in the URL. Otherwise, the endpoint returns `404 Not Found`.

## Update an access token

```http
PUT /api/v2.5/admin/videos/<chapter_content_uuid>/access-tokens/<access_token_code>/
Authorization: JWT <moderator_or_staff_jwt>
Content-Type: application/json
```

The update endpoint can replace annotations, change `expires_after_first_usage`, and reset validity relative to the current time with `time_to_live`:

```json
{
  "time_to_live": 300,
  "expires_after_first_usage": false,
  "annotations": []
}
```

Setting `time_to_live` to `0` expires an active token immediately.

## Create an access token

Token creation uses the same collection URL with `POST`. See [Playback Authentication](../authentication.md) for request examples, response fields, and security guidance.
