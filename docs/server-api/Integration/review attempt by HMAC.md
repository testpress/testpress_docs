---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem'

## Review Exam Attempt By HMAC

- Allows a user to review the exam he has attempted.
- User would be redirected to testpress page where users can review the exam.
- User can check the subject wise analytics / time analytics, correct and incorrect questions.
- Comments/doubts can be posted by user to questions and can also see comments posted by peer students.

#### HTTP Request
```
GET /exams/attempts/?id=<id>&hmac=<hmac>&time=<time>
```

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


| Name                 | Type                          | Description                                                          |
| -------------------- | ----------------------------- | -------------------------------------------------------------------- |
| id                   | string                        | Attempt ID provided by testpress                                     |
| institute_attempt_id | string Institute's attempy Id |
| key                  | string                        | Public institute key provided by Testpress to identify the Institute |
| time                 | string                        | Time since epoch used during the HMAC creation                       |
| hmac                 | string                        | HMAC generated using the below algorithm                             |