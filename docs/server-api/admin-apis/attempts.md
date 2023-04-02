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

