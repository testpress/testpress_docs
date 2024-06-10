---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Videos

:::important

Admin APIs require authorization token with admin privileges. You check the following link to generate an authorization token. You need to provide an admin username and password to generate token with admin privileges.

:::

[Authentication](https://testpress.github.io/testpress_docs/docs/intro)

The Video API allows admin to access and read all videos.

## Get Watched Videos of User

This endpoint can be used to retrieve the videos watched by a particular user.

#### HTTP Request

`GET /api/v2.5/admin/users/<id>/videos_watched/`

#### URL Parameters

|Parameter|Description|
|---------|-----------|
|id|Unique Id of the user|

#### Query Parameters


| Parameter        | Type        | Description |
| ----------- | ----------- |----------- |
| start_date    | string      | Start date in the format yyyy-mm-dd |
| end_date    | string      | End date in the format yyyy-mm-dd |
| course    | string      | Unique course ID |
| chapter    | string      | Unique chapter ID |

#### Example:

/api/v2.5/admin/users/10/videos_watched/?start_date=2023-12-29&end_date=2024-05-29&course=14

This endpoint will get the list of videos watched by user with ID 10 from the course with ID 14 from December 29, 2023, to May 29, 2024.

<Tabs>
<TabItem value="bash" label="cURL">

```bash
curl --request GET \
  --url http://demo.testpress.in/api/v2.5/admin/users/60386/videos_watched/
  --header 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw' \
  --header 'cache-control: no-cache'

```

</TabItem>

<TabItem value="rb" label="Ruby">

```rb
require 'uri'
require 'net/http'

url = URI("http://demo.testpress.in/api/v2.5/admin/users/60386/videos_watched/")

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

url = "http://demo.testpress.in/api/v2.5/admin/users/60386/videos_watched/"

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
  "next": "https://lmsdemo.testpress.in/api/v2.5/admin/users/60386/videos_watched/?page=2",
  "previous": null,
  "per_page": 20,
  "results": [
    {
      "id": 3651,
      "title": "Rad1",
      "watched_duration": null,
      "total_duration": null,
      "created": "2024-05-09T12:25:13.267531+05:30",
      "watched_percentage": 0,
      "remaining_duration": null,
      "course_title": "UPSC Course",
      "chapter_name": "Radical",
      "content_created_date": "2024-04-24T14:08:11+05:30"
    },
    {
      "id": 3689,
      "title": "Video 6",
      "watched_duration": "12 seconds",
      "total_duration": "30 seconds",
      "created": "2024-05-28T11:39:06.034546+05:30",
      "watched_percentage": 40,
      "remaining_duration": "18 seconds",
      "course_title": "Orange Muttai 1",
      "chapter_name": "Video",
      "content_created_date": "2022-12-01T17:28:07+05:30"
    }
  ]
}