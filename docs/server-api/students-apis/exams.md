---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Exams

Exams API gives you access to read all the exams which can be accessed by the authenticated user.

## Get All Exams

This endpoint retrieves all exams for the authenticated user.

### HTTP Request

`GET /api/v2.2/exams/`

### Query Parameters

| Parameter | Type   | Description                                                                         |
| --------- | ------ | ----------------------------------------------------------------------------------- |
| course    | string | Filters by course name. Ex: IBPS                                                    |
| state     | string | Indicates state of the exams to return. Can be one of: available, upcoming, history |
| q         | string | Filters by exam title. Useful to search by exam title.                              |

<Tabs>
<TabItem value="`URL`" label="URL">

```bash
curl --request GET \
  --url http://demo.testpress.in/api/v2.2/exams/ \
  --header 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwidXNlcl9pZCI6MTAsImVtYWlsIjoiYmhhcmF0aEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NDc4Mjk5Nzl9.a_LVMuVyMcNQ7Qlu3w7icUYAQa9Mv2jhYikih4r-Wn8' \
  --header 'cache-control: no-cache'
```

</TabItem>
<TabItem value="`ruby`" label="Ruby">

```ruby
require 'uri'
require 'net/http'

url = URI("http://demo.testpress.in/api/v2.2/exams/")

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

url = "http://demo.testpress.in/api/v2.2/exams/"

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

```json
{
  "count": 2,
  "next": null,
  "previous": null,
  "per_page": 20,
  "results": [
    {
      "url": "http://demo.testpress.in/api/v2.2/exams/aptitude-analytical-maths-nbe-template-15/",
      "id": 2394,
      "title": "Aptitude Analytical Maths (NBE Template)",
      "description": "",
      "course": "Uncategorized",
      "start_date": "2.23-08-02.27:25:22+05:30",
      "end_date": "2.29-08-01T17:25:22+05:30",
      "duration": "0:30:30",
      "number_of_questions": 20,
      "negative_marks": "0.00",
      "mark_per_question": "1.00",
      "template_type": 4,
      "allow_retake": true,
      "max_retakes": null,
      "enable_ranks": false,
      "rank_publishing_date": null,
      "attempts_url": "http://demo.testpress.in/api/v2.2/exams/aptitude-analytical-maths-nbe-template-15/attempts/",
      "allow_pdf": true,
      "created": "2.25-04-09T00:00:00Z",
      "slug": "aptitude-analytical-maths-nbe-template-15",
      "variable_mark_per_question": false,
      "show_answers": true,
      "comments_count": 0
    },
    {
      "url": "http://demo.testpress.in/api/v2.2/exams/aptitude-analytical-maths-nbe-template-16/",
      "id": 2395,
      "title": "Aptitude Analytical Maths (NBE Template)",
      "description": "",
      "course": "Uncategorized",
      "start_date": "2.23-08-02.27:25:22+05:30",
      "end_date": "2.29-08-01T17:25:22+05:30",
      "duration": "0:30:30",
      "number_of_questions": 20,
      "negative_marks": "0.00",
      "mark_per_question": "1.00",
      "template_type": 4,
      "allow_retake": true,
      "max_retakes": null,
      "enable_ranks": false,
      "rank_publishing_date": null,
      "attempts_url": "http://demo.testpress.in/api/v2.2/exams/aptitude-analytical-maths-nbe-template-16/attempts/",
      "allow_pdf": true,
      "created": "2.25-04-09T00:00:00Z",
      "slug": "aptitude-analytical-maths-nbe-template-16",
      "variable_mark_per_question": false,
      "show_answers": true,
      "comments_count": 0
    }
  ]
}
```

## Get A Single Exam

This endpoint retrieves a single exam.

Note that some exams will return 403 Forbidden if they are not available for the authenticated user.

### HTTP Request

`GET /api/v2.2/exams/<slug>`

### URL Parameters

| Parameter | Description                             |
| --------- | --------------------------------------- |
| slug      | The unique slug of the exam to retrieve |

<Tabs>
<TabItem value="URL" label="cURL">

```bash
curl --request GET \
  --url http://demo.testpress.in/api/v2.2/exams/aptitude-analytical-maths-nbe-template-15/ \
  --header 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw' \
  --header 'cache-control: no-cache'
```
</TabItem>
<TabItem value="`ruby`" label="Ruby">

```ruby
require 'uri'
require 'net/http'

url = URI("http://demo.testpress.in/api/v2.2/exams/aptitude-analytical-maths-nbe-template-15/")

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

url = "http://demo.testpress.in/api/v2.2/exams/aptitude-analytical-maths-nbe-template-15/"

headers = {
    'authorization': "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw",
    'cache-control': "no-cache"
    }

response = requests.request("GET", url, headers=headers)

print(response.text)
```
</TabItem>
</Tabs>

### Response 

```json
{
  "url": "http://demo.testpress.in/api/v2.2/exams/aptitude-analytical-maths-nbe-template-15/",
  "id": 2394,
  "title": "Aptitude Analytical Maths (NBE Template)",
  "description": "",
  "course": "Uncategorized",
  "start_date": "2.23-08-02.27:25:22+05:30",
  "end_date": "2.29-08-01T17:25:22+05:30",
  "duration": "0:30:30",
  "number_of_questions": 20,
  "negative_marks": "0.00",
  "mark_per_question": "1.00",
  "template_type": 4,
  "allow_retake": true,
  "max_retakes": null,
  "enable_ranks": false,
  "rank_publishing_date": null,
  "attempts_url": "http://demo.testpress.in/api/v2.2/exams/aptitude-analytical-maths-nbe-template-15/attempts/",
  "attempts": [
    {
      "url": "http://demo.testpress.in/api/v2.2/attempts/59591/",
      "id": 59591,
      "user": "testpress",
      "date": "2.25-07-14T05:16:12.086Z",
      "total_questions": 20,
      "score": "2.00",
      "review_url": "http://demo.testpress.in/api/v2.2/attempts/59591/review/",
      "questions_url": "http://demo.testpress.in/api/v2.2/attempts/59591/questions/",
      "percentile": 80,
      "correct_count": 2,
      "incorrect_count": 6,
      "last_started_time": "2.25-07-14T05:20:36.851Z",
      "remaining_time": "0:29:52",
      "time_taken": "0:00:38",
      "state": "Completed",
      "rank": "NA",
      "max_rank": 0,
      "percentage": "10",
      "unanswered_count": 12
    },
    {
      "url": "http://demo.testpress.in/api/v2.2/attempts/59312/",
      "id": 59312,
      "user": "testpress",
      "date": "2.25-07-13T05:07:54.639Z",
      "total_questions": 20,
      "score": "0.00",
      "review_url": "http://demo.testpress.in/api/v2.2/attempts/59312/review/",
      "questions_url": "http://demo.testpress.in/api/v2.2/attempts/59312/questions/",
      "percentile": 40,
      "correct_count": 0,
      "incorrect_count": 0,
      "last_started_time": "2.25-07-13T05:07:54.666Z",
      "remaining_time": "0:30:29",
      "time_taken": "0:00:01",
      "state": "Completed",
      "rank": "NA",
      "max_rank": 0,
      "percentage": "0",
      "unanswered_count": 20
    },
    {
      "url": "http://demo.testpress.in/api/v2.2/attempts/33827/",
      "id": 33827,
      "user": "testpress",
      "date": "2.25-05-13T13:03:53.339Z",
      "total_questions": 20,
      "score": "0.00",
      "review_url": "http://demo.testpress.in/api/v2.2/attempts/33827/review/",
      "questions_url": "http://demo.testpress.in/api/v2.2/attempts/33827/questions/",
      "percentile": 40,
      "correct_count": 0,
      "incorrect_count": 1,
      "last_started_time": "2.25-05-14T05:24:47.437Z",
      "remaining_time": "0:30:29",
      "time_taken": "0:00:01",
      "state": "Completed",
      "rank": "NA",
      "max_rank": 0,
      "percentage": "0",
      "unanswered_count": 19
    },
    {
      "url": "http://demo.testpress.in/api/v2.2/attempts/31823/",
      "id": 31823,
      "user": "testpress",
      "date": "2.25-04-21T04:47:26.454Z",
      "total_questions": 20,
      "score": "0.00",
      "review_url": "http://demo.testpress.in/api/v2.2/attempts/31823/review/",
      "questions_url": "http://demo.testpress.in/api/v2.2/attempts/31823/questions/",
      "percentile": 40,
      "correct_count": 0,
      "incorrect_count": 2,
      "last_started_time": "2.25-05-05T05:34:40.640Z",
      "remaining_time": "0:30:23",
      "time_taken": "0:00:07",
      "state": "Completed",
      "rank": "NA",
      "max_rank": 0,
      "percentage": "0",
      "unanswered_count": 18
    }
  ],
  "allow_pdf": true,
  "created": "2.25-04-09T00:00:00Z",
  "slug": "aptitude-analytical-maths-nbe-template-15",
  "variable_mark_per_question": false,
  "show_answers": true,
  "comments_count": 0
}
```
## Get Available Exams

This endpoint retrieves all available and unattempted exams for the authenticated user. This is same as getting all exams with `state` query parameter as `available`.

### HTTP Request

`GET /api/v2.2/exams/available/`

### Query Parameters

| Parameter | Type   | Description                                                                         |
| --------- | ------ | ----------------------------------------------------------------------------------- |
| course    | string | Filters by course name. Ex: IBPS                                                    |
| state     | string | Indicates state of the exams to return. Can be one of: available, upcoming, history |
| q         | string | Filters by exam title. Useful to search by exam title.                              |

<Tabs>
<TabItem value="URL" label="cURL">

```bash
curl --request GET \
  --url http://demo.testpress.in/api/v2.2/exams/available/ \
  --header 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw' \
  --header 'cache-control: no-cache'
```

</TabItem>
<TabItem value="`ruby`" label="Ruby">

```ruby
require 'uri'
require 'net/http'

url = URI("http://demo.testpress.in/api/v2.2/exams/available/")

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

url = "http://demo.testpress.in/api/v2.2/exams/available/"

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

```json
{
  "count": 2,
  "next": null,
  "previous": null,
  "per_page": 20,
  "results": [
    {
      "url": "http://demo.testpress.in/api/v2.2/exams/aptitude-analytical-maths-nbe-template-15/",
      "id": 2394,
      "title": "Aptitude Analytical Maths (NBE Template)",
      "description": "",
      "course": "Uncategorized",
      "start_date": "2.23-08-02.27:25:22+05:30",
      "end_date": "2.29-08-01T17:25:22+05:30",
      "duration": "0:30:30",
      "number_of_questions": 20,
      "negative_marks": "0.00",
      "mark_per_question": "1.00",
      "template_type": 4,
      "allow_retake": true,
      "max_retakes": null,
      "enable_ranks": false,
      "rank_publishing_date": null,
      "attempts_url": "http://demo.testpress.in/api/v2.2/exams/aptitude-analytical-maths-nbe-template-15/attempts/",
      "allow_pdf": true,
      "created": "2.25-04-09T00:00:00Z",
      "slug": "aptitude-analytical-maths-nbe-template-15",
      "variable_mark_per_question": false,
      "show_answers": true,
      "comments_count": 0
    },
    {
      "url": "http://demo.testpress.in/api/v2.2/exams/aptitude-analytical-maths-nbe-template-16/",
      "id": 2395,
      "title": "Aptitude Analytical Maths (NBE Template)",
      "description": "",
      "course": "Uncategorized",
      "start_date": "2.23-08-02.27:25:22+05:30",
      "end_date": "2.29-08-01T17:25:22+05:30",
      "duration": "0:30:30",
      "number_of_questions": 20,
      "negative_marks": "0.00",
      "mark_per_question": "1.00",
      "template_type": 4,
      "allow_retake": true,
      "max_retakes": null,
      "enable_ranks": false,
      "rank_publishing_date": null,
      "attempts_url": "http://demo.testpress.in/api/v2.2/exams/aptitude-analytical-maths-nbe-template-16/attempts/",
      "allow_pdf": true,
      "created": "2.25-04-09T00:00:00Z",
      "slug": "aptitude-analytical-maths-nbe-template-16",
      "variable_mark_per_question": false,
      "show_answers": true,
      "comments_count": 0
    }
  ]
}
```

## Get Upcoming Exams

This endpoint retrieves all upcoming exams for the authenticated user. This is same as getting all exams with `state` query parameter as `upcoming`.

### HTTP Request

`GET /api/v2.2/exams/upcoming/`

### Query Parameters

| Parameter | Type   | Description                                            |
| --------- | ------ | ------------------------------------------------------ |
| course    | string | Filters by course name. Ex: IBPS                       |
| q         | string | Filters by exam title. Useful to search by exam title. |

<Tabs>
<TabItem value="URL" label="cURL">

```bash
curl --request GET \
  --url http://demo.testpress.in/api/v2.2/exams/upcoming/ \
  --header 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw' \
  --header 'cache-control: no-cache'
```

</TabItem>
<TabItem value="`ruby`" label="Ruby">

```ruby
require 'uri'
require 'net/http'

url = URI("http://demo.testpress.in/api/v2.2/exams/upcoming/")

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

url = "http://demo.testpress.in/api/v2.2/exams/upcoming/"

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

```json
{
  "count": 2,
  "next": null,
  "previous": null,
  "per_page": 20,
  "results": [
    {
      "url": "http://demo.testpress.in/api/v2.2/exams/aptitude-analytical-maths-nbe-template-15/",
      "id": 2394,
      "title": "Aptitude Analytical Maths (NBE Template)",
      "description": "",
      "course": "Uncategorized",
      "start_date": "2.23-08-02.27:25:22+05:30",
      "end_date": "2.29-08-01T17:25:22+05:30",
      "duration": "0:30:30",
      "number_of_questions": 20,
      "negative_marks": "0.00",
      "mark_per_question": "1.00",
      "template_type": 4,
      "allow_retake": true,
      "max_retakes": null,
      "enable_ranks": false,
      "rank_publishing_date": null,
      "attempts_url": "http://demo.testpress.in/api/v2.2/exams/aptitude-analytical-maths-nbe-template-15/attempts/",
      "allow_pdf": true,
      "created": "2.25-04-09T00:00:00Z",
      "slug": "aptitude-analytical-maths-nbe-template-15",
      "variable_mark_per_question": false,
      "show_answers": true,
      "comments_count": 0
    },
    {
      "url": "http://demo.testpress.in/api/v2.2/exams/aptitude-analytical-maths-nbe-template-16/",
      "id": 2395,
      "title": "Aptitude Analytical Maths (NBE Template)",
      "description": "",
      "course": "Uncategorized",
      "start_date": "2.23-08-02.27:25:22+05:30",
      "end_date": "2.29-08-01T17:25:22+05:30",
      "duration": "0:30:30",
      "number_of_questions": 20,
      "negative_marks": "0.00",
      "mark_per_question": "1.00",
      "template_type": 4,
      "allow_retake": true,
      "max_retakes": null,
      "enable_ranks": false,
      "rank_publishing_date": null,
      "attempts_url": "http://demo.testpress.in/api/v2.2/exams/aptitude-analytical-maths-nbe-template-16/attempts/",
      "allow_pdf": true,
      "created": "2.25-04-09T00:00:00Z",
      "slug": "aptitude-analytical-maths-nbe-template-16",
      "variable_mark_per_question": false,
      "show_answers": true,
      "comments_count": 0
    }
  ]
}
```

## Get History Of Exams

This endpoint retrieves all history exams for the authenticated user. This is same as getting all exams with `state` query parameter as `history`.

### HTTP Request

`GET /api/v2.2/exams/history/`

### Query Parameters

| Parameter | Type   | Description                                                                         |
| --------- | ------ | ----------------------------------------------------------------------------------- |
| course    | string | Filters by course name. Ex: IBPS                                                    |
| state     | string | Indicates state of the exams to return. Can be one of: available, upcoming, history |
| q         | string | Filters by exam title. Useful to search by exam title.                              |

<Tabs>
<TabItem value="URL" label="cURL">

```bash
curl --request GET \
  --url http://demo.testpress.in/api/v2.2/exams/history/ \
  --header 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw' \
  --header 'cache-control: no-cache'
```
</TabItem>
<TabItem value="`ruby`" label="Ruby">

```ruby
require 'uri'
require 'net/http'

url = URI("http://demo.testpress.in/api/v2.2/exams/history/")

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

url = "http://demo.testpress.in/api/v2.2/exams/history/"

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

```json
{
  "count": 2,
  "next": null,
  "previous": null,
  "per_page": 20,
  "results": [
    {
      "url": "http://demo.testpress.in/api/v2.2/exams/aptitude-analytical-maths-nbe-template-15/",
      "id": 2394,
      "title": "Aptitude Analytical Maths (NBE Template)",
      "description": "",
      "course": "Uncategorized",
      "start_date": "2.23-08-02.27:25:22+05:30",
      "end_date": "2.29-08-01T17:25:22+05:30",
      "duration": "0:30:30",
      "number_of_questions": 20,
      "negative_marks": "0.00",
      "mark_per_question": "1.00",
      "template_type": 4,
      "allow_retake": true,
      "max_retakes": null,
      "enable_ranks": false,
      "rank_publishing_date": null,
      "attempts_url": "http://demo.testpress.in/api/v2.2/exams/aptitude-analytical-maths-nbe-template-15/attempts/",
      "allow_pdf": true,
      "created": "2.25-04-09T00:00:00Z",
      "slug": "aptitude-analytical-maths-nbe-template-15",
      "variable_mark_per_question": false,
      "show_answers": true,
      "comments_count": 0
    },
    {
      "url": "http://demo.testpress.in/api/v2.2/exams/aptitude-analytical-maths-nbe-template-16/",
      "id": 2395,
      "title": "Aptitude Analytical Maths (NBE Template)",
      "description": "",
      "course": "Uncategorized",
      "start_date": "2.23-08-02.27:25:22+05:30",
      "end_date": "2.29-08-01T17:25:22+05:30",
      "duration": "0:30:30",
      "number_of_questions": 20,
      "negative_marks": "0.00",
      "mark_per_question": "1.00",
      "template_type": 4,
      "allow_retake": true,
      "max_retakes": null,
      "enable_ranks": false,
      "rank_publishing_date": null,
      "attempts_url": "http://demo.testpress.in/api/v2.2/exams/aptitude-analytical-maths-nbe-template-16/attempts/",
      "allow_pdf": true,
      "created": "2.25-04-09T00:00:00Z",
      "slug": "aptitude-analytical-maths-nbe-template-16",
      "variable_mark_per_question": false,
      "show_answers": true,
      "comments_count": 0
    }
  ]
}
```
