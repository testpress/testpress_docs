---
sidebar_position: 2.5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Courses

The Courses API provides the courses available to the authenticated student, along with course metadata, tags, and the student's progress in those courses.

## Get Available Courses

This endpoint returns only the courses the authenticated student can access. The response is paginated and includes related tags and course-progress records separately so clients can associate them using `tag_ids` and `course_id`.

### HTTP Request

`GET /api/v3/courses/`

### Query Parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| page | integer | Optional. Page number to retrieve. Defaults to `1`. |
| page_size | integer | Optional. Number of courses to return per page. Defaults to `20`. |
| q | string | Optional. Searches for courses by title. |
| tags | string | Optional. Filters courses by tag name. Repeat this parameter to match any of several tags, for example `?tags=Banking&tags=Finance`. |
| created_0 | date | Optional. Returns courses created on or after this date. Use `YYYY-MM-DD` format. |
| created_1 | date | Optional. Returns courses created on or before this date. Use `YYYY-MM-DD` format. |
| o | string | Optional. Sort order: `order`, `-created`, `created`, `title`, or `-title`. |

### Authentication

Include the student's JWT in the `Authorization` header. An unauthenticated request returns `401 Unauthorized`.

<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl --request GET \
  --url 'https://lmsdemo.testpress.in/api/v3/courses/?page=1&page_size=20&o=order' \
  --header 'authorization: JWT your_jwt_token' \
  --header 'cache-control: no-cache'
```

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
require 'uri'
require 'net/http'

url = URI('https://lmsdemo.testpress.in/api/v3/courses/?page=1&page_size=20&o=order')
request = Net::HTTP::Get.new(url)
request['authorization'] = 'JWT your_jwt_token'
request['cache-control'] = 'no-cache'

response = Net::HTTP.start(url.hostname, url.port, use_ssl: true) do |http|
  http.request(request)
end

puts response.read_body
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://lmsdemo.testpress.in/api/v3/courses/"
headers = {
    "authorization": "JWT your_jwt_token",
    "cache-control": "no-cache",
}
params = {
    "page": 1,
    "page_size": 20,
    "o": "order",
}

response = requests.get(url, headers=headers, params=params)
print(response.text)
```

</TabItem>
</Tabs>

### Course Fields

| Field | Type | Description |
| ----- | ---- | ----------- |
| id | integer | Unique course ID. |
| title | string | Course title. |
| description | string | Course description, which may contain HTML. |
| image | string | Course image URL. |
| created_by | integer | ID of the user who created the course. |
| created | datetime | Date and time when the course was created. |
| modified | datetime | Date and time when the course was last modified. |
| contents_url | string | API URL for retrieving the course contents. |
| slug | string | URL-friendly course identifier. |
| chapters_count | integer | Number of chapters in the course. |
| contents_count | integer | Total number of chapter contents. |
| exams_count | integer | Number of exams. |
| videos_count | integer | Number of videos. |
| attachments_count | integer | Number of attachments. |
| html_contents_count | integer | Number of HTML or text contents. |
| video_conferences_count | integer | Number of video conferences. |
| live_streams_count | integer | Number of live streams. |
| order | integer | Configured display order. |
| external_content_link | string or null | External destination associated with the course. |
| external_link_label | string | Label to display for the external link. |
| enable_discussions | boolean | Whether discussions are enabled. |
| device_access_control | string | Device-access policy configured for the course. |
| allowed_devices | string | Human-readable list of devices on which the course can be accessed. |
| layout | string | Course-content layout, such as `list` or `tree`. |
| tag_ids | array | IDs of tags associated with the course. Resolve these IDs using `results.tags`. |
| enable_progressive_lock | boolean | Whether course contents use progressive locking. |
| max_allowed_views_per_video | integer or null | Maximum permitted views of each video, or `null` when unrestricted. |
| max_allowed_watch_minutes | integer or null | Maximum permitted video watch time in minutes, or `null` when unrestricted. |
| allow_custom_test_generation | boolean | Whether the student can generate custom tests for this course. |

### Response

The example contains one record of each type. The `courses`, `tags`, and `user_course_credits` arrays may be empty.

```json
{
  "count": 480,
  "next": "https://lmsdemo.testpress.in/api/v3/courses/?page=2",
  "previous": null,
  "per_page": 20,
  "results": {
    "courses": [
      {
        "id": 1583,
        "title": "Course that has all the types of contents",
        "description": "",
        "image": "https://d36vpug2b5drql.cloudfront.net/institute/lmsdemo/custom_icons/course.png",
        "created_by": 74,
        "created": "2026-04-16T12:46:12.864386+05:30",
        "modified": "2026-08-18T13:24:58.610361+05:30",
        "contents_url": "https://lmsdemo.testpress.in/api/v3/courses/1583/contents/",
        "slug": "course-that-has-all-the-types-of-contents",
        "chapters_count": 19,
        "contents_count": 217,
        "exams_count": 40,
        "videos_count": 72,
        "attachments_count": 9,
        "html_contents_count": 14,
        "video_conferences_count": 49,
        "live_streams_count": 67,
        "order": 7,
        "external_content_link": null,
        "external_link_label": "Register Here",
        "enable_discussions": true,
        "device_access_control": "All Platforms",
        "allowed_devices": "web, mobile app, desktop app",
        "layout": "list",
        "tag_ids": [208],
        "enable_progressive_lock": false,
        "max_allowed_views_per_video": null,
        "max_allowed_watch_minutes": null,
        "allow_custom_test_generation": true
      }
    ],
    "tags": [
      {
        "id": 208,
        "name": "videos"
      }
    ],
    "user_course_credits": [
      {
        "id": 32466,
        "user": 1639,
        "course_id": 1583,
        "total_video_attempts": 1,
        "total_unique_video_attempts": 1,
        "total_html_attempts": 0,
        "total_unique_html_attempts": 0,
        "total_exam_attempts": 0,
        "total_unique_exam_attempts": 0,
        "total_quiz_attempts": 0,
        "total_unique_quiz_attempts": 0,
        "video_watched_duration": "15.0000",
        "total_video_conference_attempts": 0,
        "total_unique_video_conference_attempts": 0,
        "total_attachment_attempts": 0,
        "total_unique_attachment_attempts": 0,
        "total_live_stream_attempts": 0,
        "total_unique_live_stream_attempts": 0,
        "total_assignment_attempts": 0,
        "total_unique_assignment_attempts": 0,
        "total_unique_attempts": 1,
        "course_completion_percentage": 0.46
      }
    ]
  }
}
```

Match a progress record to its course using `user_course_credits[].course_id`. The `course_completion_percentage` is based on unique attempted contents divided by the course's `contents_count`, capped at 100.

## Get Course Details

This endpoint retrieves one published course. The student must be permitted to view and start the course.

### HTTP Request

`GET /api/v3/courses/<course_id>/`

### URL Parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| course_id | integer | ID of the course to retrieve. |

<Tabs>
<TabItem value="detail-curl" label="cURL">

```bash
curl --request GET \
  --url 'https://lmsdemo.testpress.in/api/v3/courses/1583/' \
  --header 'authorization: JWT your_jwt_token' \
  --header 'cache-control: no-cache'
```

</TabItem>
<TabItem value="detail-ruby" label="Ruby">

```ruby
require 'uri'
require 'net/http'

url = URI('https://lmsdemo.testpress.in/api/v3/courses/1583/')
request = Net::HTTP::Get.new(url)
request['authorization'] = 'JWT your_jwt_token'

response = Net::HTTP.start(url.hostname, url.port, use_ssl: true) do |http|
  http.request(request)
end

puts response.read_body
```

</TabItem>
<TabItem value="detail-python" label="Python">

```python
import requests

url = "https://lmsdemo.testpress.in/api/v3/courses/1583/"
headers = {"authorization": "JWT your_jwt_token"}

response = requests.get(url, headers=headers)
print(response.text)
```

</TabItem>
</Tabs>

### Response

```json
{
  "id": 1583,
  "url": "https://lmsdemo.testpress.in/api/v3/courses/1583/",
  "title": "Course that has all the types of contents",
  "expiry_date": null,
  "description": "",
  "image": "https://d36vpug2b5drql.cloudfront.net/institute/lmsdemo/custom_icons/course.png",
  "created_by": 74,
  "created": "2026-04-16T12:46:12.864386+05:30",
  "modified": "2026-08-18T13:24:58.610361+05:30",
  "contents_url": "https://lmsdemo.testpress.in/api/v3/courses/1583/contents/",
  "chapters_url": "https://lmsdemo.testpress.in/api/v3/courses/1583/chapters/",
  "slug": "course-that-has-all-the-types-of-contents",
  "chapters_count": 19,
  "contents_count": 217,
  "exams_count": 40,
  "videos_count": 72,
  "attachments_count": 9,
  "html_contents_count": 14,
  "order": 7,
  "external_content_link": null,
  "external_link_label": "Register Here",
  "enable_discussions": true,
  "device_access_control": "All Platforms",
  "allowed_devices": "web, mobile app, desktop app",
  "layout": "list",
  "tags": ["videos"],
  "enable_progressive_lock": false,
  "max_allowed_views_per_video": null,
  "max_allowed_watch_minutes": null,
  "allow_custom_test_generation": true,
  "enable_certificate": false
}
```

The external link and its label can reflect the authenticated student's enrollment or approval state.

## Get Course Chapters

This endpoint retrieves the chapters in a course and the authenticated student's progress in those chapters.

### HTTP Request

`GET /api/v3/courses/<course_id>/chapters/`

### URL Parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| course_id | integer | ID of the course whose chapters should be retrieved. |

### Query Parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| page | integer | Optional. Page number to retrieve. Defaults to `1`. |
| page_size | integer | Optional. Number of chapters per page. Defaults to `250`. |
| parent_id | integer or `null` | Optional. Filters by parent chapter ID. Use `null` to retrieve root chapters. |
| order_by | string | Optional. Student-specific order: `last_opened`, `most_completed`, or `least_completed`. |

<Tabs>
<TabItem value="chapters-curl" label="cURL">

```bash
curl --request GET \
  --url 'https://lmsdemo.testpress.in/api/v3/courses/1583/chapters/?parent_id=null' \
  --header 'authorization: JWT your_jwt_token' \
  --header 'cache-control: no-cache'
```

</TabItem>
<TabItem value="chapters-ruby" label="Ruby">

```ruby
require 'uri'
require 'net/http'

url = URI('https://lmsdemo.testpress.in/api/v3/courses/1583/chapters/?parent_id=null')
request = Net::HTTP::Get.new(url)
request['authorization'] = 'JWT your_jwt_token'

response = Net::HTTP.start(url.hostname, url.port, use_ssl: true) do |http|
  http.request(request)
end

puts response.read_body
```

</TabItem>
<TabItem value="chapters-python" label="Python">

```python
import requests

url = "https://lmsdemo.testpress.in/api/v3/courses/1583/chapters/"
headers = {"authorization": "JWT your_jwt_token"}
params = {"parent_id": "null"}

response = requests.get(url, headers=headers, params=params)
print(response.text)
```

</TabItem>
</Tabs>

### Response

The response separates chapter records from the authenticated student's progress. Match them using `participant_progress[].chapter_id`.

```json
{
  "count": 19,
  "next": null,
  "previous": null,
  "per_page": 250,
  "results": {
    "chapters": [
      {
        "id": 3256,
        "name": "Live Classes",
        "description": "",
        "slug": "live-classes",
        "modified": "2026-08-18T13:24:58.610361+05:30",
        "image": "https://d36vpug2b5drql.cloudfront.net/static/courses/general/chapter.png",
        "course_id": 1583,
        "parent_id": null,
        "instructor_id": null,
        "leaf": true,
        "required_trophy_count": 0,
        "order": 1,
        "contents_count": 7,
        "exams_count": 1,
        "quizzes_count": 0,
        "videos_count": 2,
        "html_contents_count": 1,
        "attachments_count": 1,
        "video_conferences_count": 1,
        "live_streams_count": 1
      }
    ],
    "participant_progress": [
      {
        "id": 901,
        "user_id": 1639,
        "chapter_id": 3256,
        "contents_count": 7,
        "completed_contents_count": 2,
        "total_exam_attempts": 1,
        "total_quiz_attempts": 0,
        "total_html_attempts": 1,
        "total_video_attempts": 1,
        "total_attachment_attempts": 0,
        "total_video_conference_attempts": 0,
        "total_live_stream_attempts": 0,
        "total_unique_exam_attempts": 1,
        "total_unique_quiz_attempts": 0,
        "total_unique_html_attempts": 1,
        "total_unique_video_attempts": 0,
        "total_unique_attachment_attempts": 0,
        "total_unique_video_conference_attempts": 0,
        "total_unique_live_stream_attempts": 0
      }
    ]
  }
}
```

## Get Course Contents

This endpoint retrieves contents available to the authenticated student within a course. Each page contains lightweight content records and the related type-specific records needed to render them.

### HTTP Request

`GET /api/v3/courses/<course_id>/contents/`

### URL Parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| course_id | integer | ID of the course whose contents should be retrieved. |

### Query Parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| page | integer | Optional. Page number to retrieve. Defaults to `1`. |
| page_size | integer | Optional. Number of contents per page. Defaults to `100`. |
| ids | string | Optional. Comma-separated chapter-content IDs. |
| tag | string | Optional. Filters by an exact content tag name. |
| chapter | integer | Optional. Filters by chapter ID. |
| state | string | Optional. `running` returns started content that has not ended; `upcoming` returns content starting in the future. |
| attempt_status | string | Optional. `attempt_started` or `unattempted`, evaluated for the authenticated student. |
| free_preview | boolean | Optional. Filters by free-preview availability. |
| type | string | Optional. One of `video`, `quiz`, `exam`, `pdf`, `attachment`, `notes`, `videoconference`, `livestream`, or `assignment`. |
| o | string | Optional. Sort by `-start`, `start`, `-end`, `end`, `title`, or `-title`. |

<Tabs>
<TabItem value="contents-curl" label="cURL">

```bash
curl --request GET \
  --url 'https://lmsdemo.testpress.in/api/v3/courses/1583/contents/?chapter=3256&type=exam' \
  --header 'authorization: JWT your_jwt_token' \
  --header 'cache-control: no-cache'
```

</TabItem>
<TabItem value="contents-ruby" label="Ruby">

```ruby
require 'uri'
require 'net/http'

url = URI('https://lmsdemo.testpress.in/api/v3/courses/1583/contents/?chapter=3256&type=exam')
request = Net::HTTP::Get.new(url)
request['authorization'] = 'JWT your_jwt_token'

response = Net::HTTP.start(url.hostname, url.port, use_ssl: true) do |http|
  http.request(request)
end

puts response.read_body
```

</TabItem>
<TabItem value="contents-python" label="Python">

```python
import requests

url = "https://lmsdemo.testpress.in/api/v3/courses/1583/contents/"
headers = {"authorization": "JWT your_jwt_token"}
params = {"chapter": 3256, "type": "exam"}

response = requests.get(url, headers=headers, params=params)
print(response.text)
```

</TabItem>
</Tabs>

### Response Structure

| Key | Description |
| --- | ----------- |
| contents | Common metadata for each chapter content on the current page. Use its type-specific ID, such as `exam_id` or `video_id`, to resolve details from the corresponding array. |
| exams | Exam details referenced by `contents[].exam_id`. |
| videos | Video details referenced by `contents[].video_id`. |
| video_conferences | Video-conference details for the returned contents. |
| live_streams | Live-stream details for the returned contents. |
| attachments | Attachment details referenced by `contents[].attachment_id`. |
| text_contents | Notes or HTML details referenced by `contents[].content_id`. |
| tags | Tags used by the returned contents. |
| chapters | Chapters containing the returned contents. |
| instructors | Instructors associated with those chapters. |
| content_attempts | The authenticated student's attempts for contents on the current page. Match using `chapter_content_id`. |

### Response

This shortened example contains one exam content. Type-specific arrays that do not apply are empty.

```json
{
  "count": 1,
  "next": null,
  "previous": null,
  "per_page": 100,
  "results": {
    "contents": [
      {
        "id": 10615,
        "order": 1,
        "chapter_id": 3256,
        "free_preview": false,
        "title": "Sample Exam",
        "course_id": 1583,
        "exam_id": 3239,
        "content_id": null,
        "video_id": null,
        "attachment_id": null,
        "content_type": "Exam",
        "icon": "https://static.testpress.in/static/img/exam-icon.png",
        "cover_image": "https://static.testpress.in/static/img/exam-icon.jpg",
        "cover_image_medium": "https://static.testpress.in/static/img/exam-icon-medium.jpg",
        "cover_image_small": "https://static.testpress.in/static/img/exam-icon-small.jpg",
        "start": "2026-08-13T17:48:50+05:30",
        "end": null,
        "tags": [208],
        "description": "",
        "average_rating": "4.50",
        "number_of_ratings": 5
      }
    ],
    "exams": [
      {
        "id": 3239,
        "slug": "sample-exam",
        "title": "Sample Exam",
        "description": "",
        "instructions": "",
        "start_date": "2026-08-13T17:48:50+05:30",
        "end_date": null,
        "duration": "0:30:00",
        "allow_retake": true,
        "number_of_questions": 20,
        "is_adaptive": false,
        "sections": []
      }
    ],
    "videos": [],
    "video_conferences": [],
    "live_streams": [],
    "attachments": [],
    "text_contents": [],
    "tags": [
      {
        "id": 208,
        "name": "videos"
      }
    ],
    "chapters": [
      {
        "id": 3256,
        "name": "Live Classes",
        "course_id": 1583,
        "parent_id": null,
        "instructor_id": null,
        "leaf": true,
        "order": 1
      }
    ],
    "instructors": [],
    "content_attempts": [
      {
        "id": 105236,
        "user_id": 1639,
        "course_id": 1583,
        "chapter_id": 3256,
        "chapter_content_id": 10615,
        "content_type": "assessment",
        "state": "Started",
        "remaining_time": "1171.627827",
        "assessment_id": 95537,
        "user_video_conference_id": null,
        "user_video_id": null,
        "user_live_stream_id": null,
        "user_content_id": null,
        "user_attachment_id": null,
        "correct_answers_count": 2,
        "incorrect_answers_count": 1,
        "created": "2026-08-18T10:00:00+05:30",
        "completed_on": null
      }
    ]
  }
}
```

## Get Chapter Content Details

This endpoint retrieves a single chapter content and the type-specific data required to display or launch it. The authenticated student must have permission to view the content.

Although course listing uses API v3, this content-detail endpoint is currently available under API v2.4.

### HTTP Request

`GET /api/v2.4/contents/<chapter_content_id>/`

### URL Parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| chapter_content_id | integer | ID of the chapter content to retrieve. This is the `id` returned in `results.contents` by the course-contents endpoint. |

<Tabs>
<TabItem value="content-detail-curl" label="cURL">

```bash
curl --request GET \
  --url 'https://lmsdemo.testpress.in/api/v2.4/contents/10615/' \
  --header 'authorization: JWT your_jwt_token' \
  --header 'cache-control: no-cache'
```

</TabItem>
<TabItem value="content-detail-ruby" label="Ruby">

```ruby
require 'uri'
require 'net/http'

url = URI('https://lmsdemo.testpress.in/api/v2.4/contents/10615/')
request = Net::HTTP::Get.new(url)
request['authorization'] = 'JWT your_jwt_token'

response = Net::HTTP.start(url.hostname, url.port, use_ssl: true) do |http|
  http.request(request)
end

puts response.read_body
```

</TabItem>
<TabItem value="content-detail-python" label="Python">

```python
import requests

url = "https://lmsdemo.testpress.in/api/v2.4/contents/10615/"
headers = {"authorization": "JWT your_jwt_token"}

response = requests.get(url, headers=headers)
print(response.text)
```

</TabItem>
</Tabs>

### Type-Specific Fields

Only the object matching the chapter content's type is populated. The other type-specific fields are `null`.

| Field | Populated for | Description |
| ----- | ------------- | ----------- |
| exam | Exam or quiz | Exam configuration, availability, sections, attempt information, and scoring rules. Use `exam_start_url` to launch a new attempt. |
| video | Video | Video metadata and either uploaded-video streams or an embed code. Stream URLs can be time-limited. |
| html_content | Notes | HTML content and estimated reading time. |
| attachment | Attachment or PDF | Attachment metadata, download URL, rendering capability, and download permission. |
| video_conference | Video conference | Meeting metadata and joining information. Access credentials can be short-lived. |
| live_stream | Live stream | Stream status, playback URL, provider, and chat URL when available. |

### Common Response Fields

| Field | Description |
| ----- | ----------- |
| is_locked | Whether progressive locking currently prevents the student from opening this content. |
| is_course_available | Whether the parent course is currently available to the student. |
| attempts_count | Number of attempts made by the authenticated student for this chapter content. |
| bookmark_id | The student's bookmark ID for this content, or `null` when it is not bookmarked. |
| start, end, has_started | The student's effective availability window and whether it has begun. |
| previous_content_id, next_content_id | IDs used to navigate between adjacent course contents. Either can be `null`. |
| related_contents | IDs of related chapter contents. |
| video_subtitle | Active video subtitle metadata, or `null`. |
| enable_transcript | Whether transcript display is enabled for the video. |

### Response

This shortened example represents notes content. Responses for other content types retain the same common fields and populate their corresponding type-specific object.

```json
{
  "uuid": "d1456cc5-9c93-4d1f-bb10-cbbcd56c22fd",
  "order": 2,
  "exam": null,
  "html_content_title": "Introduction",
  "html_content_url": "https://lmsdemo.testpress.in/api/v2.3/contents/10615/html/",
  "free_preview": false,
  "url": "https://lmsdemo.testpress.in/api/v2.4/contents/10615/",
  "modified": "2026-08-18T13:24:58.610361+05:30",
  "attempts_url": "https://lmsdemo.testpress.in/api/v2.3/contents/10615/attempts/",
  "chapter_id": 3256,
  "chapter_slug": "live-classes",
  "chapter_url": "https://lmsdemo.testpress.in/api/v2.4/chapters/live-classes/",
  "id": 10615,
  "video": null,
  "name": "Introduction",
  "image": "https://static.testpress.in/static/img/bookicon.png",
  "attachment": null,
  "live_stream": null,
  "description": "",
  "is_locked": false,
  "attempts_count": 1,
  "start": "2026-08-18T09:00:00+05:30",
  "end": null,
  "has_started": true,
  "content_type": "Notes",
  "title": "Introduction",
  "bookmark_id": null,
  "html_content": {
    "id": 2048,
    "title": "Introduction",
    "text_html": "<p>Welcome to the course.</p>",
    "read_time": 2
  },
  "active": true,
  "comments_url": "https://lmsdemo.testpress.in/api/v2.3/contents/10615/comments/",
  "video_conference": null,
  "course_id": 1583,
  "is_course_available": true,
  "cover_image": null,
  "cover_image_medium": null,
  "cover_image_small": null,
  "next_content_id": 10616,
  "previous_content_id": 10614,
  "is_uploaded_video": false,
  "is_embedded_content": false,
  "exam_start_url": null,
  "is_ai_enabled": false,
  "learnlens_asset_id": null,
  "learnlens_asset_status": null,
  "can_enable_learnlens_ai": false,
  "ai_notes_url": null,
  "related_contents": [],
  "video_subtitle": null,
  "enable_transcript": false
}
```

Possible access-related responses include `401 Unauthorized`, `403 Forbidden`, and `404 Not Found`. Future scheduled content can return `403 Forbidden` with `error_code` set to `scheduled`; if scheduled content is hidden by the course configuration, it returns `404 Not Found` instead.
