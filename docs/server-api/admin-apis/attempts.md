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

### Create An Attempt By HMAC

- Allows a user to take an exam in a seamless manner from your own website.
- The flow will be similar to that of making a purchase using a payment gateway.
- Users would be redirected to testpress page where users can attempt an exam.
- Once user completes the exam, Testpress would redirect to the success url (surl) given in POST Parameter

#### HTTP Request

```
POST <exam_url>
```

exam_url can be taken from Testpress Admin dashboard. Once an exam is created, URL can be copied from Exam's List Page

#### Fields

| Name                 | Type   | Description                                                                                                      |
| -------------------- | ------ | ---------------------------------------------------------------------------------------------------------------- |
| email                | string | Email Address of the user                                                                                        |
| first_name           | string | First name of the user                                                                                           |
| institute_attempt_id | string | Unique reference string generated at your end (Institute's end). This can be used to track a particular attempt. |
| key                  | string | Public institute key provided by Testpress to identify the Institute                                             |
| time                 | string | Time since epoch used during the HMAC creation                                                                   |
| hmac                 | string | HMAC generated using the below algorithm                                                                         |
| surl                 | url    | Percentage encoded URL to be called by Testpress after successful completion of the exam                         |

### How To Create HMAC

HMAC (Hash-based message authentication code) is used to avoid tampering during the request flow. We use a time based HMAC algorithm to limit the lifetime of the HMAC.

The HMAC is calculated using the following algorithm:

- Get the values of 'email', 'first_name', 'institute_attempt_id', 'key', 'time'
- Percentage encode the values
- time will be time since epoch in seconds
- Create a string by appending the above percentage encoded values using | pipe character. Maintain the same order while appending (uses alphabetical order of the keys)
- Calculate the HMAC using HMAC-SHA256 with the secret
- Secret can be received from the admin dashboard


Secret can be received from the admin dashboard

:::important

#### Usage of time
The epoch time limits the validity of the HMAC. We have a *30 minute* delta to ensure the validity of the HMAC. For ex: if the HMAC was generated at 10.30 AM, it will be valid only for the next 30 minutes and can be used to start an attempt only till 11.00 AM.

:::

### Response Parameters For Attempt Creation

Below are the response parameters posted by Testpress to Institute when an exam is completed / cancelled

| Name                 | Type   | Description                                                                                                      |
| -------------------- | ------ | ---------------------------------------------------------------------------------------------------------------- |
| email                | string | Email Address of the user                                                                                        |
| first_name           | string | First name of the user                                                                                           |
| attempt_id           | string | Unique Testpress Id for the Attempt. This id will be used to review the attempt                                  |
| institute_attempt_id | string | Unique reference string generated at your end (Institute's end). This can be used to track a particular attempt. |
| total_count          | string | Total number of questions in the Exam                                                                            |
| correct_count        | string | Total number of correct attempts by the user                                                                     |
| incorrect_count      | string | Total number of incorrect attempts                                                                               |
| unanswered_count     | string | Total number of unattemptted questions                                                                           |
| score                | string | Score gained by the student                                                                                      |
| max_score            | string | Maximum grade for the test                                                                                       |
| rank                 | string | Student's rank. Rank will be set only if the ranks are enabled for the exam                                      |
| max_rank             | string | Total number of students attemptted the exam                                                                     |
| percentage           | string | Score percentage                                                                                                 |
| status               | string | completed / cancelled / pending                                                                                  |
| hmac                 | string | HMAC generated using the below algorithm                                                                         |

### Review Exam Attempt By HMAC

- Allows a user to review the exam he has attempted.
- User would be redirected to testpress page where users can review the exam.
- User can check the subject wise analytics / time analytics, correct and incorrect questions.
- Comments/doubts can be posted by user to questions and can also see comments posted by peer students.

#### HTTP Request

#### How to create HMAC

HMAC (Hash-based message authentication code) is used to avoid tampering during the request flow. We use a time based HMAC algorithm to limit the lifetime of the HMAC.

The HMAC is calculated using the following algorithm:

- Get the values of 'email', 'first_name', 'institute_attempt_id', 'key', 'time'
- Percentage encode the values
- time will be time since epoch in seconds
- Create a string by appending the above percentage encoded values using | pipe character. Maintain the same order while appending (uses alphabetical order of the keys)
- Calculate the HMAC using HMAC-SHA256 with the secret
- Secret can be received from the admin dashboard


message = id|institute_attempt_id|key|time hmac.new(secret, message, hashlib.sha256).hexdigest()


```
GET /exams/attempts/?id=<id>&hmac=<hmac>&time=<time>
```

| Name                 | Type                          | Description                                                          |
| -------------------- | ----------------------------- | -------------------------------------------------------------------- |
| id                   | string                        | Attempt ID provided by testpress                                     |
| institute_attempt_id | string Institute's attempy Id |
| key                  | string                        | Public institute key provided by Testpress to identify the Institute |
| time                 | string                        | Time since epoch used during the HMAC creation                       |
| hmac                 | string                        | HMAC generated using the below algorithm                             |

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
      }
   ]
}

</pre>
</details>
</details>

#### Examples

- ```/api/v2.5/admin/attempts/?exams=5```  - This will display attempt of exam with id 5
- ```/api/v2.5/admin/attempts/?users=1&exams=2```  - This will display attempts of exam whose id is 2 for the user id 1
- ```/api/v2.5/admin/attempts/?date_0=2020-01-11&date_1=2021-02-02&ordering=date```  - This will display attempts that are attempted between 11/1/2020 and 2/2/2021. Oldest attempted exams will be displayed first
