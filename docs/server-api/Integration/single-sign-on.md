---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';


# Single Sign On (SSO)

This endpoint is used to authenticate the user using your own existing authentication system.

### HTTP REQUEST 

```
GET /sso_login/?sig=<hmac-signature>&sso=<payload>
```



To generate SSO URL, you need to generate 

1. Payload
2. HMAC signature

### PAYLOAD 

The payload is a special string which is generated as follows

- Concatenate the parameters in the following table with &
- Encode the concatenated string with base64 encoding.

| Parameter        | Type        | Description |
| ----------- | ----------- |----------- |
| email/username    | string      | Email Address or username of the user respectively |
| time    | string      | Time since epoch |

Example with email
```
email=demo@testpress.in&time=1554879681
```

Example with username
```
username=demo@testpress.in&time=1554879681
```

<Tabs>
<TabItem value="py" label="Python">

```py
import base64, time

epoch_time = int(time.time())
query_string = "email=demo@testpress.in&time={}".format(epoch_time)
payload = base64.b64encode(query_string)

print(payload)
```
The above snippet returns payload as shown below
```
ZW1haWw9ZGVtb0B0ZXN0cHJlc3MuaW4mdGltZT0xNTU0ODc5Njgx
```

</TabItem>
<TabItem value="javascript" label="NodeJS">

```javascript
let epochTime = Math.floor((new Date).getTime()/1000);
queryString = "email=demo@testpress.in&time=" + epochTime
payload = btoa(queryString)

console.log(payload)
```
The above snippet returns payload as shown below
```
ZW1haWw9ZGVtb0B0ZXN0cHJlc3MuaW4mdGltZT0xNTU0ODc5Njgx 
```

</TabItem>

<TabItem value="php" label="PHP">

```php

<?php
    $epoch = time();
    $email = "demo@testpress.in";
    $qstring = "email=" . $email . "&time=" . $epoch;
    $payload = base64_encode($qstring);
    echo $payload;
?>
```
The above snippet returns payload as shown below
```
ZW1haWw9ZGVtb0B0ZXN0cHJlc3MuaW4mdGltZT0xNTU0ODc5Njgx 
```

</TabItem>
</Tabs>

### HMAC Signature 

- HMAC (Hash-based Message Authentication Code) is used to ensure the security and integrity of requests during data transfer.
- To generate an HMAC signature for Testpress exam software, you'll need a payload (generated in a previous step) and a secret key obtained from the Testpress team.

<Tabs>
<TabItem value="py" label="Python">

```py
import hashlib, hmac, time

epoch_time = int(time.time())
query_string = "email=demo@testpress.in&time={}".format(epoch_time)
payload = base64.b64encode(query_string)

secret_key = "abcxyzqwerty"
hmac_signature = hmac.new(secret_key, payload, hashlib.sha256).hexdigest()

print(hmac_signature)
```
The above snippet returns HMAC signature as shown below
```
aa747c502a898200f9e4fa21bac68136f886a0e27aec70ba06daf2e2a5cb5597
```

</TabItem>
<TabItem value="javascript" label="NodeJS">

```javascript
var CryptoJS = require("crypto-js")

let epochTime = Math.floor((new Date).getTime()/1000);
queryString = "email=demo@testpress.in&time=" + epochTime
payload = btoa(queryString)

let secreteKey = "abcxyzqwerty"
let hmacSignature = CryptoJS.HmacSHA256(payload, secreteKey).toString(CryptoJS.enc.Hex);

console.log(hmacSignature)

```
The above snippet returns payload as shown below

```
aa747c502a898200f9e4fa21bac68136f886a0e27aec70ba06daf2e2a5cb5597 
```

</TabItem>

<TabItem value="php" label="PHP">

```php

<?php
  $epoch = time();
  $email = "demo@tesptress.in";
  $qstring = "email=" . $email . "&time=" . $epoch;
  $payload = base64_encode($qstring);
  $secret_key = "abcd";
  $hmac_signature = hash_hmac('sha256', $payload, $secret_key);
  echo $hmac_signature;
?>
```
The above snippet returns payload as shown below
```
aa747c502a898200f9e4fa21bac68136f886a0e27aec70ba06daf2e2a5cb5597 
```

</TabItem>
</Tabs>

### SSO URL 

The SSO URL format is as shown below

```
https://demo.testpress.in/sso_login/?sig=<hmac-signature>&sso=<payload>
```

In the above URL replace the {hmac-signature} and {payload} with your hmac signature and payload values generated using the above steps.


```
E.g. https://demo.testpress.in/sso_login/?sig=aa747c502a898200f9e4fa21bac68136f886a0e27aec70ba06daf2e2a5cb5597&sso=ZW1haWw9ZGVtb0B0ZXN0cHJlc3MuaW4mdGltZT0xNTU0ODc5Njgx
```
:::important

The epoch time limits the validity of the HMAC. We have a *30 minute* delta to ensure the validity of the HMAC. For e.g. if the HMAC was generated at 10.30 AM, it will be valid only for the next 30 minutes and expires after 11.00 AM.

:::

### Redirect user to a particular exam

Redirect the user to a particular by passing the exam start URL as a redirect path to the above SSO login link, like below

```curl
https://demo.testpress.in/sso_login/?sig=<hmac-signature>&sso=<payload>&next=/exams/run/<exam-slug>/start/
```
