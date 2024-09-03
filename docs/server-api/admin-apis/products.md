---
sidebar_position: 10
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Products

> Admin APIs require authorization token with admin privileges. You check the following link to generate authorization token. You need to provide admin username and password to generate token with admin privileges.

[Authentication](https://testpress.github.io/testpress_docs/docs/intro/)


## Create Cash Record

This endpoint records a cash payment for a user purchasing a product. It is useful for situations where users make payments offline or outside of Testpress. Upon successful creation of the payment record, the user will automatically gain access to the courses and exams associated with the product. The product's validity and expiry date for that user will be automatically managed.

### HTTP Request

`POST /api/v2.5/admin/products/<:product-slug>/add-cash-payment/`

### Fields

| Name       | Type          | Description                                                                         |
| ---------- | ------------- | ----------------------------------------------------------------------------------- |
| user_id    | integer       | ID of the Testpress user.                                                            |
| amount     | integer/float | Payment amount upto 2 decimal places.                                                |
| note       | string        | An optional note that you can add to this cash payment record.                      |

<Tabs>
<TabItem value="`URL`" label="cURL">

```bash
curl --request POST \
  --url http://demo.testpress.in/api/v2.5/admin/products/testing-product-1/add-cash-payment/ \
  --header 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84' \
  --header 'cache-control: no-cache' \
  --header 'content-type: application/json' \
  --data '{"user_id": 23, "amount": 999, "note": "Added via API"}'
```

</TabItem>
<TabItem value="`ruby`" label="Ruby">

```ruby
require 'uri'
require 'net/http'

url = URI("http://demo.testpress.in/api/v2.5/admin/products/testing-product-1/add-cash-payment/")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Post.new(url)
request["content-type"] = 'application/json'
request["authorization"] = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84'
request["cache-control"] = 'no-cache'
request.body = "{\n    \"user_id\": 23,\n    \"amount\": 999,\n    \"note\": \"Added via API\"}"

response = http.request(request)
puts response.read_body
```

</TabItem>
<TabItem value="`python`" label="Python">

```python
import requests

url = "http://demo.testpress.in/api/v2.5/admin/products/testing-product-1/add-cash-payment/"

payload = "{\n    \"user_id\": 23,\n    \"amount\": 999,\n    \"note\": \"Added via API\"}"
headers = {
    'content-type': "application/json",
    'authorization': "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84",
    'cache-control': "no-cache"
    }

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
```
</TabItem>
<TabItem value="`c`" label="C#">

```c
var client = new RestClient("http://demo.testpress.in/api/v2.5/admin/products/testing-product-1/add-cash-payment/");
var request = new RestRequest(Method.POST);
request.AddHeader("cache-control", "no-cache");
request.AddHeader("authorization", "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84");
request.AddHeader("content-type", "application/json");
request.AddParameter("application/json", "{\n    \"user_id\": 23,\n    \"amount\": 999,\n    \"note\": \"Added via API\"}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```
</TabItem>
<TabItem value="`php`" label="PHP">

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'http://demo.testpress.in/api/v2.5/admin/products/testing-product-1/add-cash-payment/',
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
    "user_id": 23,
    "amount": 999,
    "note": "Added via API",
}',
  CURLOPT_HTTPHEADER => array(
    'Authorization: JWT <Enter authorization code here>',
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;

```
</TabItem>
<TabItem value="`java`" label="Java">

```java
OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n    \"user_id\": 23,\n    \"amount\": 999,\n    \"note\": \"Added via API\"}");
Request request = new Request.Builder()
  .url("http://demo.testpress.in/api/v2.5/admin/products/testing-product-1/add-cash-payment/")
  .post(body)
  .addHeader("content-type", "application/json")
  .addHeader("authorization", "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84")
  .addHeader("cache-control", "no-cache")
  .build();

Response response = client.newCall(request).execute();
```
</TabItem>
<TabItem value="`nodejs`" label="NodeJs">

```js
var http = require("http");

var options = {
  "method": "POST",
  "hostname": "demo.testpress.in",
  "port": null,
  "path": "/api/v2.5/admin/products/testing-product-1/add-cash-payment/",
  "headers": {
    "content-type": "application/json",
    "authorization": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84",
    "cache-control": "no-cache"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({ 
  user_id: 23,
  amount: 999,
  note: 'Added via API',
}));
req.end();
```
</TabItem>
<TabItem value="`go`" label="Go">

```go
package main

import (
    "fmt"
    "strings"
    "net/http"
    "io/ioutil"
)

func main() {

    url := "http://demo.testpress.in/api/v2.5/admin/products/testing-product-1/add-cash-payment/"

    payload := strings.NewReader("{\n    \"user_id\": 23,\n    \"amount\": 999,\n    \"note\": \"Added via API\"}")

    req, _ := http.NewRequest("POST", url, payload)

    req.Header.Add("content-type", "application/json")
    req.Header.Add("authorization", "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84")
    req.Header.Add("cache-control", "no-cache")

    res, _ := http.DefaultClient.Do(req)

    defer res.Body.Close()
    body, _ := ioutil.ReadAll(res.Body)

    fmt.Println(res)
    fmt.Println(string(body))

}
```
</TabItem>
</Tabs>

### Response 

```json
{
  "id": 1892,
  "user_id": 23,
  "amount": "999.00",
  "note": "Added via API",
}
```
