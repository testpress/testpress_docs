---
sidebar_position: 11
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Global Search

Global Search API provides access to search across various resources for the authenticated user.

## Search

This endpoint retrieves search results based on the query and filters provided by the authenticated user.

### HTTP Request

`GET /api/v2.5/global_search/search_results/`

### Query Parameters

| Parameter | Type   | Description                                                                         |
| --------- | ------ | ----------------------------------------------------------------------------------- |
| q         | string | The search query string. Useful to search for specific keywords or phrases.         |
| page      | int    | Optional: The page number for pagination (defaults to 1).                           |
| size      | int    | Optional: The number of results to return per page (defaults to 10).                |


### Filter Parameters

The `param` query parameter can be accompanied by parameters that specify filtering criteria.

## Base Filters

| Parameter                             | Type          | Description                                               |
|---------------------------------------|---------------|-----------------------------------------------------------|
| course                                | string        | Filter results for courses.                               |
| chapter                               | string        | Filter results for chapters.                              |
| chaptercontent                        | string        | Filter results by contents.                               |
| exam                                  | string        | Filter results by exams(available).                       |
| product                               | string        | Filter results by product categories.                     |
| productcategory                       | string        | Filter results by product categories.                     |
| post                                  | string        | Filter results by posts.                                  |
| postcategory                          | string        | Filter results by the category of the post.               |
| ticket                                | string        | Filter results by user tickets (doubts).                  |
| tickettopic                           | string        | Filter results by specific topics within tickets.         |
| forumthread                           | string        | Filter results related to forum discussions.              |
| forumthreadcategory                   | string        | Filter results by categories of discussions.              |
| user                                  | string        | Filter results by users.                                  |
| batch                                 | integer       | Filter results by user batches.                           |
| role                                  | string        | Filter results by user roles.                             |
| questionset                           | string        | Filter results by specific question folders.              |
| question                              | string        | Filter results for questions.                             |
| subject                               | string        | Filter results for subjects.                              |
| direction                             | string        | Filter results for directions.                            |

## Advanced Filters

| Key                             | Parameter                             | Type          | Description                                               |
|---------------------------------|---------------------------------------|---------------|-----------------------------------------------------------|
| chaptercontent_type             | Video                                 | string        | Filter results specifically for video content.            |
| chaptercontent_type             | Exam                                  | string        | Filter results specifically for exam content.             |
| chaptercontent_type             | Notes                                 | string        | Filter results for note-taking content.                   |
| chaptercontent_type             | Videoconference                       | string        | Filter results specifically for video conference content. |
| chaptercontent_type             | Livestream                            | string        | Filter results specifically for live stream content.      |
| chaptercontent_type             | Attachment                            | string        | Filter results for attachments.                           |
| chaptercontent_type             | Quiz                                  | string        | Filter results for quiz content.                          |
| user_status                     | Student                               | string        | Filter results by user status (e.g., Student).            |
| user_status                     | Admin                                 | string        | Filter results by user status (e.g., Admin).              |
| user_status                     | Mentor                                | string        | Filter results by user status (e.g., Mentor).             |
| user_status                     | Staff                                 | string        | Filter results by user status (e.g., Staff).              |

**Note**: 
- Base filters need to be included before adding additional filters. 
- You can refer to the example usage below for clarity.
- Currently, the only advanced filtering options available are for chapter content types and user statuses. More advanced filtering is not yet implemented.

<Tabs>
<TabItem value="`URL`" label="URL">

```bash
curl --request GET \
  --url "http://demo.testpress.in/api/v2.5/global_search/search_results/?q=your_search_query&page=1&size=10&param=product&param=chaptercontent&chaptercontent_content_type=Video&param=user&user_status=Student" \
  --header 'authorization: JWT your_jwt_token' \
  --header 'cache-control: no-cache'
```

</TabItem>
<TabItem value="`ruby`" label="Ruby">

```ruby
require 'uri'
require 'net/http'

url = URI("http://demo.testpress.in/api/v2.5/global_search/search_results/?q=your_search_query&page=1&size=10&param=product&param=chaptercontent&chaptercontent_content_type=Video&param=user&user_status=Student")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Get.new(url)
request["authorization"] = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw'
request["cache-control"] = 'no-cache'

response = http.request(request)
puts response.read_body
```

</TabItem>
<TabItem value="`python`" label="Python">

```python
import requests

url = "http://demo.testpress.in/api/v2.5/global_search/search_results/?q=course&page=1&size=10&param=product&param=chaptercontent&chaptercontent_content_type=Video&param=user&user_status=Student"

headers = {
    'authorization': "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw",
    'cache-control': "no-cache",
    }

response = requests.request("GET", url, headers=headers)

print(response.text)
```
</TabItem>
</Tabs>


### Response 

**Note**: The example response below is for the search query "course."

```json
{
  "results": [
    {
      "description": "",
      "created": "2024-05-16T09:12:35.641830+00:00",
      "id": 9,
      "institute_subdomain": "demo",
      "highlight": {"name": "Batch <span class='highlight'>Course</span>"},
      "is_hidden": false,
      "type": "batch",
      "slug": "batch3",
      "name": "Batch Course"
    },
    {
      "description": "",
      "title": "Science course",
      "created": "2024-07-25T07:03:03.093928+00:00",
      "slug": "science-course",
      "institute_subdomain": "demo",
      "state": "Published",
      "highlight": {"title": "Science <span class='highlight'>course</span>"},
      "type": "course",
      "id": 80
    },
    {
      "description": "",
      "title": "Maths course",
      "created": "2024-07-25T06:52:16.206599+00:00",
      "slug": "maths-course",
      "institute_subdomain": "demo",
      "state": "Published",
      "highlight": {"title": "Maths <span class='highlight'>course</span>"},
      "type": "course",
      "id": 79
    },
    {
      "status": "Student",
      "first_name": "testpress",
      "created": "2024-05-17T08:37:13.851032+00:00",
      "id": 23,
      "email": "testpress@x.com",
      "username": "testpress",
      "state": "",
      "date_joined": "2024-05-17T08:37:13.851060+00:00",
      "last_name": "",
      "highlight": {"membership_set.batches.name": "Batch <span class='highlight'>Course</span>"},
      "type": "user",
      "institute_subdomain": "demo",
    }
  ],
  "nextPage": 2
}
```