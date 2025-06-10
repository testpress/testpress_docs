---
sidebar_position: 9
---

# Exams

<details>
<summary><b> GET</b> https://lmsdemo.testpress.in/api/v2.5/admin/exams/ <br/> <b>Exams List API</b></summary>

This will return list of exams

### Parameters

#### Query

<table>
  <tr>
    <td>ordering</td>
    <td>string</td>
    <td>This will sort the results start_date (Exams with oldest start date will be displayed first)-start_date (Exams with latest start date will be displayed first)end_date (Exams with oldest end date will be displayed first)-end_date (Exams with latest end date will be displayed first)</td>
  </tr>
    <tr>
    <td>end_date</td>
    <td>string</td>
    <td>This will filter exams which are lesser than the provided end date. Date format is YYYY-MM-DD. Ex: 2021-12-02</td>
  </tr>
    <tr>
    <td>start_date</td>
    <td>string</td>
    <td>This will filter exams which are greater than the provided start date. Date format is YYYY-MM-DD. Ex: 2010oo-12-02</td>
  </tr>
  <tr>
    <td>status</td>
    <td>string</td>
    <td>Can be running, upcoming, completed</td>
  </tr>
  <tr>
  <td>subject</td>
  <td>string</td>
  <td>This will filter exams that contain questions from the provided subject name. (Case-insensitive match on subject name)</td>
</tr>
<tr>
  <td>batch</td>
  <td>string</td>
  <td>This will filter exams linked to the given batch via associated courses.(Case-insensitive match on batch name)</td>
</tr>
<tr>
  <td>exam_type</td>
  <td>string</td>
  <td>
    This will filter exams based on template type. Allowed values: default, ibps, aiims, fmge, bitsat, gamified, ssc, gate, tnpsc, nmat, nta, ielts, act, cat, ctet, sat, gmat, toefl, new_gate
  </td>
</tr>

</table>

#### Responses

<details >
<summary> 
<b>200</b>    
  </summary>
<pre>

{
   "count":1,
   "next":null,
   "previous":null,
   "per_page":200,
   "results":[
      {
         "created":"2021-04-13T11:45:28.582267Z",
         "description":"",
         "duration":"17:15:12",
         "enable_ranks":false,
         "end_date":null,
         "mark_per_question":"1.00",
         "modified":"2021-04-16T10:25:47.838579Z",
         "negative_marks":"0.00",
         "number_of_questions":8,
         "pass_percentage":50,
         "published":true,
         "start_date":"2021-04-13T11:45:12Z",
         "title":"All Question Types",
         "show_score":true,
         "show_percentile":true,
         "show_pass_or_fail":false,
         "total_marks":"7.00"
      }
   ]
}

</pre>
</details>
</details>

### Examples:

/api/v2.5/admin/exams/?start_date=2020-02-02&ordering=-start_date

The above URL will display exams that have start date greater than 2nd Feb 2020 and exams with recent start date will displayed first

/api/v2.5/admin/exams/?status=running&ordering=start_date

The above URL will display exams are running and exams with oldest start date will be displayed first

/api/v2.5/admin/exams/?subject=accounting&exam_type=ibps&batch=test1

The above URL will display exams that contain questions from the subject Accounting, use the IBPS template type, and are associated with the batch named test1.