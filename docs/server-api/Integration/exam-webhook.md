---
sidebar_position: 2
---

# Exam webhook


## How To Enable Exam Webhook

* In the Institute settings, locate the Exam webhook URL field and add the desired URL for the   webhook.
* To test the webhook, use a URL generated from a webhook site like [Webhook site](https://webhook.site/)
* The webhook will automatically post data to the provided URL when Exam attempts are started or completed.
## Data Posted To The Exam Webhook URL

Below are the response parameters posted by Testpress to Institute when an attempt is started and completed.


| Name                     | Type           | Description                                                                                             |
| ------------------------ | -------------- | ------------------------------------------------------------------------------------------------------- |
| email                    | string         | Email Address of the user                                                                               |
| username                 | string         | Username of the user                                                                              |    
| attempt_id               | integer        | Unique Testpress Id for the Attempt. This id will be used to review the attempt                         |
| exam                     | key/value pair | This key/value pair will contain exam details like "id", "title", "start_date", "end_date", "duration". |
| total_count              | integer        | Total number of questions in the Exam                                                                   |
| correct_answers_count    | string         | Total number of correct answers in the attempt                                                          |
| incorrect_answers_count  | integer        | Total number of incorrect answers in the attempt                                                        |
| unanswered_answers_count | integer        | Total number of unattemptted questions in the attempt                                                   |
| score                    | integer        | Total score obtained by the user for the attempt                                                        |
| percentage               | integer        | score percentage                                                                                        |
| key                      | string         | Public institute key provided by Testpress to identify the Institute                                    |
| hash                     | string         | Hash generated using above algorithm.                                                                   |
| subject_stats            | key/value pair | This key/value pair will contain subject wise details  |
| difficulty_level_stats   | key/value pair | This key/value pair will contain difficulty wise details |


In the above data `hash` value is used to identify that the data is indeed posted from testpress.

## Start Exam Webhook Response

```json
{
  "username": "test_user",
  "accuracy": 0,
  "hash": "8291fc65f59336716b072ae3936aeaeabbe56685e812144d87722430e80ae6c10feaf82c83dfb75ca4696e2b1f60eb72a68b376e15b3dfb5a2717d3a51973c88",
  "exam": {
    "id": 27,
    "title": "File type exam",
    "duration": null,
    "start_date": "2023-03-15T12:04:32+05:30",
    "end_date": null
  },
  "subject_stats": [],
  "email": "karthiktest51@gmail.com",
  "partial_correct_answers_count": null,
  "attempt_id": 130,
  "attempt_state": "started",
  "incorrect_answers_count": 0,
  "difficulty_level_stats": {},
  "completed_on": null,
  "unanswered_answers_count": 0,
  "key": "YDRAXrgV3STf7EH5",
  "attempt_start_time": "2023-03-31T10:55:54.968829Z",
  "user_id": 2,
  "percentage": "0.00",
  "score": "0.00",
  "speed": 0,
  "institute_attempt_id": null,
  "correct_answers_count": 0
}
```

## End Exam Webhook Response

```json
{
  "username": "student",
  "accuracy": 0,
  "hash": "dc206631d1fb9a73dd1b8119b63bcfd6f2700bbd20dc6bbb7999e11f182697104cc72cb323b153ff42565481ff3d777087de7c88956c637897b43272d5b9dc9f",
  "exam": {
    "id": 27,
    "title": "File type exam",
    "duration": null,
    "start_date": "2023-03-15T12:04:32+05:30",
    "end_date": null
  },
  "subject_stats": [
    {
      "subject_name": "Quantitative",
      "parent_subject_id": null,
      "correct_answers_count": 0,
      "incorrect_answers_count": 0,
      "partial_correct_answers_count": 0,
      "unanswered_count": 1,
      "answered_count": 0,
      "total_count": 1,
      "score": "0.00"
    }
  ],
  "email": "karthiktest51@gmail.com",
  "partial_correct_answers_count": 0,
  "attempt_id": 130,
  "attempt_state": "completed",
  "incorrect_answers_count": 0,
  "difficulty_level_stats": {
    "uncategorized": {
      "correct_answers_count": 0,
      "incorrect_answers_count": 0,
      "partial_correct_answers_count": 0,
      "unanswered_count": 1,
      "total_count": 1
    }
  },
  "completed_on": "2023-03-31T16:27:41.151586+05:30",
  "unanswered_answers_count": 1,
  "key": "YDRAXrgV3STf7EH5",
  "attempt_start_time": "2023-03-31T10:55:54.968829Z",
  "user_id": 2,
  "percentage": "0.00",
  "score": "0.00",
  "speed": 0,
  "institute_attempt_id": null,
  "correct_answers_count": 0
}
```
## How To Generate The Hash And Verify The Authenticity Of The Data
HMAC (Hash-based message authentication code) is used to avoid tampering during the request flow.
The hash is calculated using the following algorithm:
* Get the values of 'public_key', 'attempt_id', 'correct_answers_count', 'private_key', 'incorrct_answers_count', 'unanswered_count', 'percentage', 'score', 'user_id'
* Create a string by appending the above percentage encoded values using | pipe character. Maintain the same order while appending
* Calculate the HMAC using HMAC-SHA512 with the private key.
* Private key can be taken from the admin dashboard.
hmac.new(secret, message, hashlib.sha512).hexdigest()