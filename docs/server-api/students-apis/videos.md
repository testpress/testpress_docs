---
sidebar_position: 4
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



# Videos
Video API gives you access to read all the videos which can be accessed by the authenticated user.

## Get All Watched Videos

This endpoint retrieves all watched videos for the authenticated user.

### HTTP Request

`GET /api/v2.5/me/videos_watched/`

### Query Parameters


| Parameter        | Type        | Description |
| ----------- | ----------- |----------- |
| start_date    | string      | start date in the format yyyy-mm-dd |
| end_date    | string      | end date in the format yyyy-mm-dd |
| course    | string      | unique coure id |
| chapter    | string      | unique chapter id |

### Example:

/api/v2.5/me/videos_watched/?start_date=2023-12-29&end_date=2024-05-06&course=14

This endpoint will get the list of videos watched from the course with ID 14 from December 29, 2023, to May 6, 2024.


<Tabs>
<TabItem value="bash" label="cURL">

```bash
curl --request GET \
  --url http://demo.testpress.in/api/v2.5/me/videos_watched/
  --header 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw' \
  --header 'cache-control: no-cache'

```

</TabItem>

<TabItem value="rb" label="Ruby">

```rb
require 'uri'
require 'net/http'

url = URI("http://demo.testpress.in/api/v2.5/me/videos_watched/")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Get.new(url)
request["authorization"] = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw'
request["cache-control"] = 'no-cache'

response = http.request(request)
puts response.read_body

```

</TabItem>
<TabItem value="py" label="Python">

```py
import requests

url = "http://demo.testpress.in/api/v2.5/me/videos_watched/"

headers = {
    'authorization': "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw",
    'cache-control': "no-cache",
    }

response = requests.request("GET", url, headers=headers)

print(response.text)


```

</TabItem>
</Tabs>

#### Response


```json
{
  "count": 2,
  "next": null,
  "previous": null,
  "per_page": 20,
  "results": [
    {
      "id": 3647,
      "title": "Testing Chat",
      "watched_duration": null,
      "total_duration": "25 seconds",
      "created": "2024-04-29T23:57:06.339798+05:30",
      "watched_percentage": 0,
      "remaining_duration": "25 seconds",
      "course_title": "Sample Course",
      "chapter_name": "ZLS Demo",
      "content_created_date": "2024-04-24T18:28:35+05:30"
    },
    {
      "id": 3646,
      "title": "Testing1",
      "watched_duration": null,
      "total_duration": "41 seconds",
      "created": "2024-04-29T23:56:59.034408+05:30",
      "watched_percentage": 0,
      "remaining_duration": "41 seconds",
      "course_title": "Sample Course",
      "chapter_name": "sample",
      "content_created_date": "2024-04-24T15:07:52+05:30"
    }
  ]
}