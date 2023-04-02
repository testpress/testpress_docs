---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem'

# Attempts

:::important

Admin APIs require authorization token with admin privileges. You check the following link to generate authorization token. You need to provide admin username and password to generate token with admin privileges

:::

[Authentication](https://testpress.github.io/testpress_docs/docs/intro/)

All operations related to user attempt can be done using the following end points.

## List Attempts

This endpoint returns all attempts. Attempts can be filtered based on user or exams

<details>
  <summary> <b>Get</b> https:// institute_url /api/v2.5/admin/attempts<br />Attempts List API </summary>
  
  <p> This endpoint returns all attempts.</p>
  <h4> Parameters</h4>

  <h4> Query</h4>
  <table>
  <tr>
    <td  text-align="left">ordering</td>
    <td>string</td>
    <td>This will sort the results date Oldest started attempts will be displayed first <br />-date - Recently started attempts will be displayed first correctanswers_count <br />- Attempts with least correct answers will be displayed first <br />-correct answers_count <br />- Attempts with more correct answers will be displayed first incorrectLanswers_count <br />- Attempts with least incorrect answers will be displayed first <br />-incorrectanswers_count Attempts with more incorrect answerss will be displayed first unanswered_count <br />- Attempts with least unanswered answers will be displayed first -unanswered_count <br />- Attempts with more unanswered will be displayed first</td>
    </tr>
    <tr>
    <td  text-align="left">state</td>
    <td>number</td>
    <td>This will filter attempts based on the following states<br />
    0-Running Attempts<br />
    1- Completed Attempts<br />
    3-Not started</td>
    </tr>
    <tr>
    <td  text-align="left">date_1</td>
    <td>string</td>
    <td>This will display all attempts which started before this date</td>
    </tr>
        <tr>
    <td  text-align="left">date_0</td>
    <td>string</td>
    <td>This will display all attempts which started after this date</td>
    </tr>
       <tr>
    <td  text-align="left">Users</td>
    <td>integer</td>
    <td>To get attempts of an user. Value should be user id<br />
    Ex: users=1</td>
    </tr>
       <tr>
    <td  text-align="left">exams</td>
    <td>integer</td>
    <td>To filter attempts by exam. Value should be exam id exams<br />
    Ex: exams=3</td>
    </tr>
    </table>
    <h4>Responses</h4>
<details  >
<summary> 200  </summary>
<pre>

{
   "count":1,
   "next":"https://sandbox.testpress.in/api/v2.5/admin/attempts/?page=2",
   "previous":null,
   "per_page":200,
   "results":[
   {
      id: 68701,
      date: "2021-03-16T03:59:21.860924Z",
      exam_id: 133,
      user_id: 143,
      email: null,
      name: null,
      phone: null,
      correct_answers_count: 220,
      incorrect_answers_count: 20,
      unanswered_count: 200,
      score: "90.00",
      percentage: 0,
      time_taken: "0:00:00",
      remaining_time: null,
      result: "Not taken",
      state: "Completed",
      last_started_time: null,
      last_answer_updated_time: null,
      speed: 0,
      exam_url: "https://sandbox.testpress.in/api/v2.5/admin/exams/133/",
      user_url: "https://sandbox.testpress.in/api/v2.5/admin/users/133/"
   }]
}

</pre>
</details>
</details>

#### Examples

- `/api/v2.5/admin/attempts/?exams=5` - This will display attempt of exam with id 5
- `/api/v2.5/admin/attempts/?users=1&exams=2` - This will display attempts of exam whose id is 2 for the user id 1
- `/api/v2.5/admin/attempts/?date_0=2020-01-11&date_1=2021-02-02&ordering=date` - This will display attempts that are attempted between 11/1/2020 and 2/2/2021. Oldest attempted exams will be displayed first


## Get A Single Attempt

This endpoint retrieves a single attempt.


#### HTTP Request

```
GET /api/v2.5/admin/attempts/<id>/
```

#### URL Parameters


| Parameter | Description |
| --------- | ----------- |
| id | The unique id of the attempt to retrieve |

<Tabs>
<TabItem value="bash" label="cURL">


```bash
curl --request GET \
  --url http://demo.testpress.in/api/v2.5/admin/attempts/125894/ \
  --header 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw' \
  --header 'cache-control: no-cache'

```

</TabItem>
<TabItem value="rb" label="Ruby">

```rb
require 'uri'
require 'net/http'

url = URI("http://demo.testpress.in/api/v2.5/admin/attempts/125894/")

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

url = "http://demo.testpress.in/api/v2.5/admin/attempts/125894/"

headers = {
    'authorization': "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw",
    'cache-control': "no-cache"
    }

response = requests.request("GET", url, headers=headers)

print(response.text)

```

</TabItem>

</Tabs>


#### Response


```json
{
    "id": 1,
    "date": "2023-01-23T11:35:37.930389+05:30",
    "exam_id": 2,
    "user_id": 2,
    "email": "hariharan@testpress.in",
    "name": null,
    "phone": null,
    "correct_answers_count": 0,
    "incorrect_answers_count": 1,
    "unanswered_count": 79,
    "score": "0.00",
    "percentage": 0,
    "percentile": 100.0,
    "time_taken": "2:47:53.076906",
    "remaining_time": "0:00:00",
    "result": "Fail",
    "state": "Completed",
    "last_started_time": "2023-04-02T15:27:46.453786+05:30",
    "last_answer_updated_time": "2023-04-02T15:27:59.639308+05:30",
    "speed": 0,
    "exam_url": "http://demo.tespress.in/api/v2.5/admin/exams/2/",
    "user_url": "http://demo.tespress.in/api/v2.5/admin/users/2/",
    "username": "admin",
    "sections": [
        {
            "id": 1,
            "order": 0,
            "section_id": 2,
            "time_taken": "0:00:00",
            "correct_answers_count": 0,
            "incorrect_answers_count": 0,
            "unanswered_count": 20,
            "score": "0.00"
        },
        {
            "id": 2,
            "order": 1,
            "section_id": 3,
            "time_taken": "0:00:00",
            "correct_answers_count": 0,
            "incorrect_answers_count": 1,
            "unanswered_count": 20,
            "score": "0.00"
        },
        {
            "id": 3,
            "order": 2,
            "section_id": 4,
            "time_taken": "0:00:00",
            "correct_answers_count": 0,
            "incorrect_answers_count": 0,
            "unanswered_count": 20,
            "score": "0.00"
        },
        {
            "id": 4,
            "order": 3,
            "section_id": 5,
            "time_taken": "0:00:00",
            "correct_answers_count": 0,
            "incorrect_answers_count": 0,
            "unanswered_count": 19,
            "score": "0.00"
        }
    ],
    "subject_stats": [
        {
            "subject_id": 1,
            "subject_name": "Geography",
            "total_count": 64,
            "correct_answers_count": 0,
            "unanswered_count": 63,
            "incorrect_answers_count": 1,
            "parent_subject_id": null,
            "is_leaf": true,
            "score": "0.00",
            "partial_correct_answers_count": 0
        },
        {
            "subject_id": 2,
            "subject_name": "Current affairs",
            "total_count": 12,
            "correct_answers_count": 0,
            "unanswered_count": 12,
            "incorrect_answers_count": 0,
            "parent_subject_id": null,
            "is_leaf": true,
            "score": "0.00",
            "partial_correct_answers_count": 0
        },
        {
            "subject_id": null,
            "subject_name": "History",
            "total_count": 4,
            "correct_answers_count": 0,
            "unanswered_count": 4,
            "incorrect_answers_count": 0,
            "parent_subject_id": null,
            "is_leaf": true,
            "score": "0.00",
            "partial_correct_answers_count": 0
        }
    ],
    "difficulty_level_stats": {
        "easy": {
            "correct_answers_count": 0,
            "incorrect_answers_count": 1,
            "partial_correct_answers_count": 0,
            "unanswered_count": 69,
            "total_count": 70
        },
         "medium": {
            "correct_answers_count": 0,
            "incorrect_answers_count": 5,
            "partial_correct_answers_count": 0,
            "unanswered_count": 5,
            "total_count": 10
        }
    },
    "institute_attempt_id": 100101
}

```