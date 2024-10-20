---
sidebar_position: 6
---

# Basic Example

Following is a basic example of test taking flow

1. Get the Auth token to authenticate the user using the [Get Auth Token](https://testpress.github.io/testpress_docs/docs/intro#generate-authentication-token) API.
2. Use the token as Authorization header in the following requests.
3. Now try to get list of exams using the [Get Available Exams](https://testpress.github.io/testpress_docs/docs/server-api/students-apis/exams#get-available-exams) API.
4. Get exam details of an exam in the list of exams using the [Get Exam Details](https://testpress.github.io/testpress_docs/docs/server-api/students-apis/exams#get-a-single-exam) API.
5. Start a new attempt for the exam using the [Create an attempt](https://testpress.github.io/testpress_docs/docs/server-api/students-apis/attempts#create-an-attempt) API.
6. Using the response of the new attempt, get the questions for that attempt using the [Get attempt questions](https://testpress.github.io/testpress_docs/docs/server-api/students-apis/attempts#get-attempt-questions) API.
7. Attend the questions by updating the selected answers or review later flag using [Update attempt questions](https://testpress.github.io/testpress_docs/docs/server-api/students-apis/attempts#update-attempt-questions) API.
8. Send heart beat every 1 minute using [Send Heart Beat](https://testpress.github.io/testpress_docs/docs/server-api/students-apis/attempts#send-heart-beat) API.
9. [End the attempt](https://testpress.github.io/testpress_docs/docs/server-api/students-apis/attempts#end-an-attempt) once all the required questions have been attempted.
10. Review the solutions of the completed attempt using [Get Review Questions](https://testpress.github.io/testpress_docs/docs/server-api/students-apis/attempts#review-attempt-questions) API.
11. Review the subject wise analytics of the completed attempt using [Get Attempt Subject Wise Analytics](https://testpress.github.io/testpress_docs/docs/server-api/students-apis/attempts#attempt-subject-wise-analytics) API.
