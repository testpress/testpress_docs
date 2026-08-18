---
sidebar_position: 3.5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Bookmarks

The Bookmarks API lets an authenticated student save learning content, questions, answers, posts, and forum threads for later use. Students can organize bookmarks into folders and retrieve the related content data needed to render a bookmark screen.

All endpoints require the student's JWT and operate only on that student's bookmarks and folders.

## Endpoints

| Method | Endpoint | Purpose |
| ------ | -------- | ------- |
| GET | `/api/v3/bookmarks/` | List and filter the student's bookmarks. |
| POST | `/api/v3/bookmarks/` | Create a bookmark or update an existing bookmark for the same target. |
| GET | `/api/v3/bookmarks/<bookmark_id>/` | Retrieve one bookmark and its related content. |
| DELETE | `/api/v3/bookmarks/<bookmark_id>/` | Delete one bookmark. |
| POST | `/api/v3/bookmarks/folders/` | Create a bookmark folder. |

The API does not expose `PUT` or `PATCH` for bookmark details. To change an existing bookmark, send another `POST` for the same target; the service updates that student's existing bookmark instead of creating a duplicate.

## List Bookmarks

Returns a paginated, normalized response. Bookmark records and their related objects are returned in separate arrays and can be matched using `bookmarks[].object_id`.

### HTTP Request

`GET /api/v3/bookmarks/`

### Query Parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| page | integer | Optional. Page number to retrieve. Defaults to `1`. |
| page_size | integer | Optional. Number of bookmarks per page. Defaults to `50`. |
| content_type | string | Optional. One of `post`, `forum_thread`, `questions`, `videos`, `pdfs`, `notes`, `exams_and_quiz`, `live_classes`, `assignments`, `user_selected_answer`, or `question`. |
| bookmark_type | string | Optional. One of `starred`, `doubt`, `tagged`, or `annotate`. |
| course_id | integer | Optional. Returns chapter-content bookmarks belonging to the specified course. |
| course_tag | string | Optional. Returns chapter-content bookmarks from courses with this tag name. |
| folder_id | integer or `uncategorized` | Optional. Filters by folder ID. Use `uncategorized` for bookmarks without a folder. |
| folder_name | string | Optional. Filters by an exact folder name. |
| object_id | integer | Optional. Filters by the bookmarked object's ID. |
| sort | string | Optional. Use `created` for oldest first or `-created` for newest first. |

The `bookmark_types_count` values are calculated after applying the requested filters and before pagination.

<Tabs>
<TabItem value="list-curl" label="cURL">

```bash
curl --request GET \
  --url 'https://lmsdemo.testpress.in/api/v3/bookmarks/?content_type=videos&sort=-created' \
  --header 'authorization: JWT your_student_jwt'
```

</TabItem>
<TabItem value="list-ruby" label="Ruby">

```ruby
require 'uri'
require 'net/http'

url = URI('https://lmsdemo.testpress.in/api/v3/bookmarks/?content_type=videos&sort=-created')
request = Net::HTTP::Get.new(url)
request['authorization'] = 'JWT your_student_jwt'

response = Net::HTTP.start(url.hostname, url.port, use_ssl: true) do |http|
  http.request(request)
end

puts response.read_body
```

</TabItem>
<TabItem value="list-python" label="Python">

```python
import requests

url = "https://lmsdemo.testpress.in/api/v3/bookmarks/"
headers = {"authorization": "JWT your_student_jwt"}
params = {"content_type": "videos", "sort": "-created"}

response = requests.get(url, headers=headers, params=params)
print(response.json())
```

</TabItem>
</Tabs>

### Response

This shortened response contains one video bookmark. Only related-object arrays relevant to the current page contain records.

```json
{
  "count": 1,
  "next": null,
  "previous": null,
  "per_page": 50,
  "results": {
    "bookmarks": [
      {
        "id": 3467,
        "folder": "Revision",
        "content_type": "chapter_content",
        "bookmark_type": "Tagged",
        "object_id": 10639,
        "created": "2026-08-18T10:00:00+05:30",
        "modified": "2026-08-18T10:00:00+05:30",
        "timestamp": "0:02:15",
        "page_number": 0,
        "preview_text": null
      }
    ],
    "chapter_contents": [
      {
        "id": 10639,
        "order": 1,
        "chapter_id": 3256,
        "free_preview": false,
        "title": "Introduction",
        "course_id": 1583,
        "video_id": 3557,
        "content_type": "Video",
        "start": "2026-08-18T09:00:00+05:30",
        "end": null,
        "description": ""
      }
    ],
    "questions": [],
    "posts": [],
    "forum_threads": [],
    "user_selected_answers": [],
    "bookmark_types_count": {
      "starred_bookmarks_count": 0,
      "doubt_bookmarks_count": 0,
      "tagged_bookmarks_count": 1
    }
  }
}
```

## Create or Update a Bookmark

Creates a bookmark for the authenticated student. If a bookmark already exists for the same student and object, the existing record is updated. PDF annotation bookmarks are distinct per page number.

### HTTP Request

`POST /api/v3/bookmarks/`

### Request Fields

| Field | Type | Required | Description |
| ----- | ---- | -------- | ----------- |
| category | string | Yes | Target category: `video`, `attachment`, `html`, `user_selected_answer`, `post`, `question`, or `forum_thread`. |
| object_id | integer | Yes | ID of the object to bookmark. For `video`, `attachment`, and `html`, use the numeric chapter-content ID—not the nested video, attachment, or text-content ID. |
| bookmark_type | string | No | `starred`, `doubt`, `tagged`, or `annotate`. Defaults to `tagged`. |
| folder | string or null | No | Folder name. The folder is created automatically if it does not already exist for the student. |
| timestamp | duration | No | Playback position for a video bookmark, such as `0:02:15`. Defaults to zero. |
| page_number | integer | Conditional | PDF page number. Required and greater than zero when `category` is `attachment` and `bookmark_type` is `annotate`. |
| preview_text | string | No | Optional text excerpt associated with a PDF annotation. |
| active | boolean | No | Bookmark active state. |

The supplied `object_id` must exist for the selected category.

<Tabs>
<TabItem value="create-curl" label="cURL">

```bash
curl --request POST \
  --url 'https://lmsdemo.testpress.in/api/v3/bookmarks/' \
  --header 'authorization: JWT your_student_jwt' \
  --header 'content-type: application/json' \
  --data '{
    "category": "video",
    "object_id": 10639,
    "bookmark_type": "tagged",
    "folder": "Revision",
    "timestamp": "0:02:15"
  }'
```

</TabItem>
<TabItem value="create-ruby" label="Ruby">

```ruby
require 'json'
require 'uri'
require 'net/http'

url = URI('https://lmsdemo.testpress.in/api/v3/bookmarks/')
request = Net::HTTP::Post.new(url)
request['authorization'] = 'JWT your_student_jwt'
request['content-type'] = 'application/json'
request.body = {
  category: 'video',
  object_id: 10639,
  bookmark_type: 'tagged',
  folder: 'Revision',
  timestamp: '0:02:15'
}.to_json

response = Net::HTTP.start(url.hostname, url.port, use_ssl: true) do |http|
  http.request(request)
end

puts response.read_body
```

</TabItem>
<TabItem value="create-python" label="Python">

```python
import requests

url = "https://lmsdemo.testpress.in/api/v3/bookmarks/"
headers = {"authorization": "JWT your_student_jwt"}
payload = {
    "category": "video",
    "object_id": 10639,
    "bookmark_type": "tagged",
    "folder": "Revision",
    "timestamp": "0:02:15",
}

response = requests.post(url, headers=headers, json=payload)
print(response.json())
```

</TabItem>
</Tabs>

### Response

A successful request returns `201 Created`:

```json
{
  "id": 3467,
  "folder": "Revision",
  "object_id": 10639,
  "page_number": 0,
  "preview_text": null,
  "active": true,
  "created": "2026-08-18T10:00:00+05:30",
  "modified": "2026-08-18T10:00:00+05:30",
  "timestamp": "0:02:15"
}
```

`category` and `bookmark_type` are write-only and are therefore not included in this response. They are included in subsequent list responses as `content_type` and the display-form `bookmark_type`.

### PDF Annotation Example

```json
{
  "category": "attachment",
  "object_id": 10650,
  "bookmark_type": "annotate",
  "folder": "Important pages",
  "page_number": 4,
  "preview_text": "Key formula and explanation"
}
```

## Get a Bookmark

Returns one bookmark belonging to the authenticated student and a serialized representation of its target object.

### HTTP Request

`GET /api/v3/bookmarks/<bookmark_id>/`

<Tabs>
<TabItem value="detail-curl" label="cURL">

```bash
curl --request GET \
  --url 'https://lmsdemo.testpress.in/api/v3/bookmarks/3467/' \
  --header 'authorization: JWT your_student_jwt'
```

</TabItem>
<TabItem value="detail-ruby" label="Ruby">

```ruby
require 'uri'
require 'net/http'

url = URI('https://lmsdemo.testpress.in/api/v3/bookmarks/3467/')
request = Net::HTTP::Get.new(url)
request['authorization'] = 'JWT your_student_jwt'

response = Net::HTTP.start(url.hostname, url.port, use_ssl: true) do |http|
  http.request(request)
end

puts response.read_body
```

</TabItem>
<TabItem value="detail-python" label="Python">

```python
import requests

url = "https://lmsdemo.testpress.in/api/v3/bookmarks/3467/"
headers = {"authorization": "JWT your_student_jwt"}

response = requests.get(url, headers=headers)
print(response.json())
```

</TabItem>
</Tabs>

### Response

The shape of `detail` depends on the bookmarked object's content type.

```json
{
  "id": 3467,
  "content_type": "chapter_content",
  "timestamp": "0:02:15",
  "detail": {
    "id": 10639,
    "order": 1,
    "chapter_id": 3256,
    "free_preview": false,
    "title": "Introduction",
    "course_id": 1583,
    "video_id": 3557,
    "content_type": "Video",
    "start": "2026-08-18T09:00:00+05:30",
    "end": null,
    "description": ""
  }
}
```

A bookmark owned by another student is not exposed and returns `404 Not Found`.

## Delete a Bookmark

Permanently deletes one bookmark belonging to the authenticated student.

### HTTP Request

`DELETE /api/v3/bookmarks/<bookmark_id>/`

<Tabs>
<TabItem value="delete-curl" label="cURL">

```bash
curl --request DELETE \
  --url 'https://lmsdemo.testpress.in/api/v3/bookmarks/3467/' \
  --header 'authorization: JWT your_student_jwt'
```

</TabItem>
<TabItem value="delete-ruby" label="Ruby">

```ruby
require 'uri'
require 'net/http'

url = URI('https://lmsdemo.testpress.in/api/v3/bookmarks/3467/')
request = Net::HTTP::Delete.new(url)
request['authorization'] = 'JWT your_student_jwt'

response = Net::HTTP.start(url.hostname, url.port, use_ssl: true) do |http|
  http.request(request)
end

puts response.code
```

</TabItem>
<TabItem value="delete-python" label="Python">

```python
import requests

url = "https://lmsdemo.testpress.in/api/v3/bookmarks/3467/"
headers = {"authorization": "JWT your_student_jwt"}

response = requests.delete(url, headers=headers)
print(response.status_code)
```

</TabItem>
</Tabs>

A successful deletion returns `204 No Content`. Deleting a missing bookmark or one owned by another student returns `404 Not Found`.

## Create a Folder

Creates a bookmark folder for the authenticated student. A folder can also be created automatically by supplying a new folder name while creating a bookmark.

### HTTP Request

`POST /api/v3/bookmarks/folders/`

### Request Fields

| Field | Type | Required | Description |
| ----- | ---- | -------- | ----------- |
| name | string | Yes | Folder name. It must be unique for the student and may contain letters, numbers, spaces, hyphens, underscores, and `&`. |

<Tabs>
<TabItem value="folder-curl" label="cURL">

```bash
curl --request POST \
  --url 'https://lmsdemo.testpress.in/api/v3/bookmarks/folders/' \
  --header 'authorization: JWT your_student_jwt' \
  --header 'content-type: application/json' \
  --data '{"name":"Revision"}'
```

</TabItem>
<TabItem value="folder-ruby" label="Ruby">

```ruby
require 'json'
require 'uri'
require 'net/http'

url = URI('https://lmsdemo.testpress.in/api/v3/bookmarks/folders/')
request = Net::HTTP::Post.new(url)
request['authorization'] = 'JWT your_student_jwt'
request['content-type'] = 'application/json'
request.body = {name: 'Revision'}.to_json

response = Net::HTTP.start(url.hostname, url.port, use_ssl: true) do |http|
  http.request(request)
end

puts response.read_body
```

</TabItem>
<TabItem value="folder-python" label="Python">

```python
import requests

url = "https://lmsdemo.testpress.in/api/v3/bookmarks/folders/"
headers = {"authorization": "JWT your_student_jwt"}

response = requests.post(url, headers=headers, json={"name": "Revision"})
print(response.json())
```

</TabItem>
</Tabs>

### Response

A successful request returns `201 Created`:

```json
{
  "id": 92,
  "user": {
    "id": 1639,
    "display_name": "Student",
    "first_name": "",
    "last_name": ""
  },
  "name": "Revision",
  "bookmarks_count": 0
}
```
