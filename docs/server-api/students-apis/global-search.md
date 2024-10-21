---
sidebar_position: 7
---

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
| page      | int    | The page number for pagination. Defaults to 1.                                      |
| size      | int    | The number of results to return per page. Defaults to 10.                           |


### Filter Parameters

The `param` query parameter can be accompanied by parameters that specify filtering criteria.

## Base Filters

| Parameter            | Type          | Description                                               |
|----------------------|---------------|-----------------------------------------------------------|
| course               | string        | Filter results for courses.                               |
| chapter              | string        | Filter results for chapters.                              |
| chaptercontent       | string        | Filter results by contents.                               |
| product              | string        | Filter results by product categories.                     |
| post                 | string        | Filter results by posts.                                  |
| ticket               | string        | Filter results by user tickets (doubts).                  |
| forumthread          | string        | Filter results related to forum discussions.              |
| forumthreadcategory  | string        | Filter results by categories of discussions.              |
| customtestattempt    | string        | Filter results by custom tests.                           |

## Additional Filters

| Key                             | Parameter                             | Type          | Description                                               |
|---------------------------------|---------------------------------------|---------------|-----------------------------------------------------------|
| chaptercontent_content_type     | Video                                 | string        | Filter results specifically for video content.            |
| chaptercontent_content_type     | Exam                                  | string        | Filter results specifically for exam content.             |
| chaptercontent_content_type     | Notes                                 | string        | Filter results for note-taking content.                   |
| chaptercontent_content_type     | Videoconference                       | string        | Filter results specifically for video conference content. |
| chaptercontent_content_type     | Livestream                            | string        | Filter results specifically for live stream content.      |
| chaptercontent_content_type     | Attachment                            | string        | Filter results for attachments.                           |
| chaptercontent_content_type     | Quiz                                  | string        | Filter results for quiz content.                          |

**Note**: 
- Base filters need to be included before adding additional filters. 
- You can refer to the example usage below for clarity.
- Currently, additional filters for chapter content type and user status are the only advanced filtering options available. More advanced filtering is not yet implemented. 

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

**Note**: The following example response corresponds to a search query for the term "course".

```json
{
  "results": [
    {
      "batches": [],
      "description": "",
      "title": "Science course",
      "created": "2024-07-25T07:03:03.093928+00:00",
      "slug": "science-course",
      "institute_subdomain": "demo",
      "state": "Published",
      "highlight": {"title": "Science <span class='highlight'>course</span>"},
      "active": true,
      "is_public": false,
      "type": "course",
      "id": 80
    },
    {
      "batches": [],
      "description": "",
      "title": "Maths course",
      "created": "2024-07-25T06:52:16.206599+00:00",
      "slug": "maths-course",
      "institute_subdomain": "demo",
      "state": "Published",
      "highlight": {"title": "Maths <span class='highlight'>course</span>"},
      "active": true,
      "is_public": false,
      "type": "course",
      "id": 79
    },
  ],
  "nextPage": 2
}
```