---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Users

> Admin APIs require authorization token with admin privileges. You check the following link to generate authorization token. You need to provide admin username and password to generate token with admin privileges.

[Authentication](https://testpress.github.io/testpress_docs/docs/intro/)


Admin Users API gives you access to create/edit users in the institute.

## Create User

This endpoint creates a user.

### HTTP Request

`POST /api/v2.5/admin/users/`

> You can optionally add a batches field in the POST data with an array of batch names. The user will automatically get added to those batches during creation.

Except for username and password, all other fields are optional.

### Fields

| Name       | Type       | Description                                                                         |
| ---------- | ---------- | ----------------------------------------------------------------------------------- |
| username   | string     | Username of the user                                                                |
| first_name | string     | First name of the user                                                              |
| last_name  | string     | Last of the user                                                                    |
| email      | string     | Email of the user                                                                   |
| birth_date | datestring | Birth date of user. Should be in DD/MM/YYYY format                                  |
| address1   | string     | Address of the user                                                                 |
| address2   | string     | Address of the user                                                                 |
| city       | string     | City of the user                                                                    |
| zip        | string     | Pincode of the user                                                                 |
| state      | string     | State of user in ISO 3166-2:IN format (https://en.wikipedia.org/wiki/ISO_3166-2:IN) |
| phone      | string     | Phone of the user                                                                   |
| batches    | list       | Batches of the user                                                                 |
| expires    | datestring | Expiry date of the batches subscription. Format yyyy-mm-dd. After which the user will be removed form the batch


<Tabs>
<TabItem value="`URL`" label="cURL">

```bash
curl --request POST \
  --url http://demo.testpress.in/api/v2.5/admin/users/ \
  --header 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84' \
  --header 'cache-control: no-cache' \
  --header 'content-type: application/json' \
  --data '{"username": "lorem", "password": "ipsum1$", "first_name": "John", "last_name": "Appleseed", "email": "test@example.com", "birth_date": "03/07/2016", "state": "IN-TN", "batches": ["Test Batch", "UPSC Morning Batch"],"expires":"2023-01-13"}'
```

</TabItem>
<TabItem value="`ruby`" label="Ruby">

```ruby
require 'uri'
require 'net/http'

url = URI("http://demo.testpress.in/api/v2.5/admin/users/")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Post.new(url)
request["content-type"] = 'application/json'
request["authorization"] = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84'
request["cache-control"] = 'no-cache'
request.body = "{\n    \"username\": \"lorem\",\n    \"password\": \"ipsum1$\",\n    \"first_name\": \"John\",\n    \"last_name\": \"Appleseed\",\n    \"email\": \"test@example.com\",\n    \"birth_date\": \"03/07/2016\",\n    \"state\": \"IN-TN\",\n    \"batches\": [\"Test Batch\", \"UPSC Morning Batch\"],\n    \"expires\": \"2023-01-13\"}"

response = http.request(request)
puts response.read_body
```

</TabItem>
<TabItem value="`python`" label="Python">

```python
import requests

url = "http://demo.testpress.in/api/v2.5/admin/users/"

payload = "{\n    \"username\": \"lorem\",\n    \"password\": \"ipsum1$\",\n    \"first_name\": \"John\",\n    \"last_name\": \"Appleseed\",\n    \"email\": \"test@example.com\",\n    \"birth_date\": \"03/07/2016\",\n    \"state\": \"IN-TN\",\n    \"batches\": [\"Test Batch\", \"UPSC Morning Batch\"],\n    \"expires\": \"2023-01-13\"}"
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
var client = new RestClient("http://demo.testpress.in/api/v2.5/admin/users/");
var request = new RestRequest(Method.POST);
request.AddHeader("cache-control", "no-cache");
request.AddHeader("authorization", "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84");
request.AddHeader("content-type", "application/json");
request.AddParameter("application/json", "{\n    \"username\": \"lorem\",\n    \"password\": \"ipsum1$\",\n    \"first_name\": \"John\",\n    \"last_name\": \"Appleseed\",\n    \"email\": \"test@example.com\",\n    \"birth_date\": \"03/07/2016\",\n    \"state\": \"IN-TN\",\n    \"batches\": [\"Test Batch\", \"UPSC Morning Batch\"],\n    \"expires\": \"2023-01-13\"}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```
</TabItem>
<TabItem value="`php`" label="PHP">

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'http://demo.testpress.in/api/v2.5/admin/users/',
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
    "username": "lorem1",
    "password": "ipsum1$",
    "first_name": "John",
    "last_name": "Appleseed",
    "email": "test1@example.com",
    "birth_date": "03/07/2016",
    "state": "IN-TN",
    "batches": ["Test Batch", "UPSC Morning Batch"],
    "expires": "2023-01-13"
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
RequestBody body = RequestBody.create(mediaType, "{\n    \"username\": \"lorem\",\n    \"password\": \"ipsum1$\",\n    \"first_name\": \"John\",\n    \"last_name\": \"Appleseed\",\n    \"email\": \"test@example.com\",\n    \"birth_date\": \"03/07/2016\",\n    \"state\": \"IN-TN\",\n    \"batches\": [\"Test Batch\", \"UPSC Morning Batch\"],\n    \"expires\": \"2023-01-13\"}");
Request request = new Request.Builder()
  .url("http://demo.testpress.in/api/v2.5/admin/users/")
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
  "path": "/api/v2.5/admin/users/",
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

req.write(JSON.stringify({ username: 'lorem',
  password: 'ipsum1$',
  first_name: 'John',
  last_name: 'Appleseed',
  email: 'test@example.com',
  birth_date: '03/07/2016',
  state: 'IN-TN',
  batches: [ 'Test Batch', 'UPSC Morning Batch' ],
  expires: "2023-01-13" }));
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

    url := "http://demo.testpress.in/api/v2.5/admin/users/"

    payload := strings.NewReader("{\n    \"username\": \"lorem\",\n    \"password\": \"ipsum1$\",\n    \"first_name\": \"John\",\n    \"last_name\": \"Appleseed\",\n    \"email\": \"test@example.com\",\n    \"birth_date\": \"03/07/2016\",\n    \"state\": \"IN-TN\",\n    \"batches\": [\"Test Batch\", \"UPSC Morning Batch\"],\n    \"expires\": \"2023-01-13\"}")

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
  "url": "http://demo.testpress.in/api/v2.5/admin/users/1892/",
  "username": "lorem",
  "first_name": "John",
  "last_name": "Appleseed",
  "display_name": "John Appleseed",
  "email": "test@example.com",
  "photo": null,
  "birth_date": "03/07/2016",
  "address1": "",
  "address2": "",
  "city": "",
  "zip": "",
  "state": "Tamil Nadu",
  "state_code": "IN-TN",
  "phone": "",
  "batches_url": "http://demo.testpress.in/api/v2.5/admin/users/1892/batches/"
}
```

## View User

This endpoint allows you to view details of a particular user.

### HTTP Request

`GET /api/v2.5/admin/users/<:id>`

### URL Parameters

| Parametter | Description                       |
| ---------- | --------------------------------- |
| id         | Unique Id of the user to retrieve |

### Fields

| Name         | Type       | Description                                                                         |
| ------------ | ---------- | ----------------------------------------------------------------------------------- |
| username     | string     | Username of the user                                                                |
| first_name   | string     | First name of the user                                                              |
| last_name    | string     | Last of the user                                                                    |
| display_name | string     | Name of the user to be displayed                                                    |
| email        | string     | Email of the user                                                                   |
| photo        | string     | Original image of the user as uploaded                                              |
| birth_date   | datestring | Birth date of user. Should be in DD/MM/YYYY format                                  |
| gender       | string     | (Read only) Human readable gender of user. Can be "Male", "Female" or "Transgender" |
| address1     | string     | Address of the user                                                                 |
| address2     | string     | Address of the user                                                                 |
| city         | string     | City of the user                                                                    |
| zip          | string     | Pincode of the user                                                                 |
| state        | string     | State of user in ISO 3166-2:IN format (https://en.wikipedia.org/wiki/ISO_3166-2:IN) |
| phone        | string     | Phone of the user                                                                   |

<Tabs>
<TabItem value="`URL`" label="cURL">

```bash
curl --request GET \
  --url http://demo.testpress.in/api/v2.5/admin/users/1889/ \
  --header 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAzNDI4NTB9.Dsc2NZ_q0e3GRaBTArgwkPs81RbQEt-FnH0u_TBs2hc' \
  --header 'cache-control: no-cache' \
  --header 'content-type: application/json' \
  --data '{"username": "admin15", "password": "demouser", "first_name": "Cool", "last_name": "dude", "email": "cool@dude.com", "birth_date": "03/07/2016", "state": "IN-TN"\n}'
```

</TabItem>
<TabItem value="`ruby`" label="Ruby">

```ruby
require 'uri'
require 'net/http'

url = URI("http://demo.testpress.in/api/v2.5/admin/users/1889/")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Get.new(url)
request["content-type"] = 'application/json'
request["authorization"] = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAzNDI4NTB9.Dsc2NZ_q0e3GRaBTArgwkPs81RbQEt-FnH0u_TBs2hc'
request["cache-control"] = 'no-cache'
request.body = "{\n    \"username\": \"admin15\",\n    \"password\": \"demouser\",\n    \"first_name\": \"Cool\",\n    \"last_name\": \"dude\",\n    \"email\": \"cool@dude.com\",\n    \"birth_date\": \"03/07/2016\",\n    \"state\": \"IN-TN\"\n}"

response = http.request(request)
puts response.read_body
```

</TabItem>
<TabItem value="`python`" label="Python">

```python
import requests

url = "http://demo.testpress.in/api/v2.5/admin/users/1889/"

payload = "{\n    \"username\": \"admin15\",\n    \"password\": \"demouser\",\n    \"first_name\": \"Cool\",\n    \"last_name\": \"dude\",\n    \"email\": \"cool@dude.com\",\n    \"birth_date\": \"03/07/2016\",\n    \"state\": \"IN-TN\"\n}"
headers = {
    'content-type': "application/json",
    'authorization': "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAzNDI4NTB9.Dsc2NZ_q0e3GRaBTArgwkPs81RbQEt-FnH0u_TBs2hc",
    'cache-control': "no-cache"
    }

response = requests.request("GET", url, data=payload, headers=headers)

print(response.text)
```
</TabItem>
<TabItem value="`c`" label="C#">

```c
var client = new RestClient("http://demo.testpress.in/api/v2.5/admin/users/1889/");
var request = new RestRequest(Method.GET);
request.AddHeader("cache-control", "no-cache");
request.AddHeader("authorization", "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAzNDI4NTB9.Dsc2NZ_q0e3GRaBTArgwkPs81RbQEt-FnH0u_TBs2hc");
request.AddHeader("content-type", "application/json");
request.AddParameter("application/json", "{\n    \"username\": \"admin15\",\n    \"password\": \"demouser\",\n    \"first_name\": \"Cool\",\n    \"last_name\": \"dude\",\n    \"email\": \"cool@dude.com\",\n    \"birth_date\": \"03/07/2016\",\n    \"state\": \"IN-TN\"\n}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```
</TabItem>
<TabItem value="`php`" label="PHP">

```php
<?php

$request = new HttpRequest();
$request->setUrl('http://demo.testpress.in/api/v2.5/admin/users/1889/');
$request->setMethod(HTTP_METH_GET);

$request->setHeaders(array(
  'cache-control' => 'no-cache',
  'authorization' => 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAzNDI4NTB9.Dsc2NZ_q0e3GRaBTArgwkPs81RbQEt-FnH0u_TBs2hc',
  'content-type' => 'application/json'
));

$request->setBody('{
    "username": "admin15",
    "password": "demouser",
    "first_name": "Cool",
    "last_name": "dude",
    "email": "cool@dude.com",
    "birth_date": "03/07/2016",
    "state": "IN-TN"
}');

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}
```
</TabItem>
<TabItem value="`java`" label="Java">

```java
OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n    \"username\": \"admin15\",\n    \"password\": \"demouser\",\n    \"first_name\": \"Cool\",\n    \"last_name\": \"dude\",\n    \"email\": \"cool@dude.com\",\n    \"birth_date\": \"03/07/2016\",\n    \"state\": \"IN-TN\"\n}");
Request request = new Request.Builder()
  .url("http://demo.testpress.in/api/v2.5/admin/users/1889/")
  .get()
  .addHeader("content-type", "application/json")
  .addHeader("authorization", "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAzNDI4NTB9.Dsc2NZ_q0e3GRaBTArgwkPs81RbQEt-FnH0u_TBs2hc")
  .addHeader("cache-control", "no-cache")
  .build();

Response response = client.newCall(request).execute();
```
</TabItem>
<TabItem value="`nodejs`" label="NodeJs">

```js
var http = require("http");

var options = {
  "method": "GET",
  "hostname": "demo.testpress.in",
  "port": null,
  "path": "/api/v2.5/admin/users/1889/",
  "headers": {
    "content-type": "application/json",
    "authorization": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAzNDI4NTB9.Dsc2NZ_q0e3GRaBTArgwkPs81RbQEt-FnH0u_TBs2hc",
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

req.write(JSON.stringify({ username: 'admin15',
  password: 'demouser',
  first_name: 'Cool',
  last_name: 'dude',
  email: 'cool@dude.com',
  birth_date: '03/07/2016',
  state: 'IN-TN' }));
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

    url := "http://demo.testpress.in/api/v2.5/admin/users/1889/"

    payload := strings.NewReader("{\n    \"username\": \"admin15\",\n    \"password\": \"demouser\",\n    \"first_name\": \"Cool\",\n    \"last_name\": \"dude\",\n    \"email\": \"cool@dude.com\",\n    \"birth_date\": \"03/07/2016\",\n    \"state\": \"IN-TN\"\n}")

    req, _ := http.NewRequest("GET", url, payload)

    req.Header.Add("content-type", "application/json")
    req.Header.Add("authorization", "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAzNDI4NTB9.Dsc2NZ_q0e3GRaBTArgwkPs81RbQEt-FnH0u_TBs2hc")
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
  "id": 1889,
  "url": "http://demo.testpress.in/api/v2.5/admin/users/1889/",
  "username": "lorem",
  "first_name": "John",
  "last_name": "Appleseed",
  "display_name": "John Appleseed",
  "email": "test@example.com",
  "photo": null,
  "birth_date": "03/07/2016",
  "address1": "",
  "address2": "",
  "city": "",
  "zip": "",
  "state": "IN-TN",
  "phone": "",
  "batches_url": "http://demo.testpress.in/api/v2.5/admin/users/1889/batches/"
}
```

## Update User

This endpoint allows you to update details of a particular user.

### HTTP Request

`PUT /api/v2.5/admin/users/<:id>`

### URL Parameters

| Parametter | Description                     |
| ---------- | ------------------------------- |
| id         | Unique Id of the user to update |

### Fields

| Name         | Type       | Description                                                                         |
| ------------ | ---------- | ----------------------------------------------------------------------------------- |
| username     | string     | Username of the user                                                                |
| password     | string     | Password to update the user                                                         |
| first_name   | string     | First name of the user                                                              |
| last_name    | string     | Last of the user                                                                    |
| display_name | string     | Name of the user to be displayed                                                    |
| email        | string     | Email of the user                                                                   |
| photo        | string     | Original image of the user as uploaded                                              |
| birth_date   | datestring | Birth date of user. Should be in DD/MM/YYYY format                                  |
| gender       | string     | (Read only) Human readable gender of user. Can be "Male", "Female" or "Transgender" |
| address1     | string     | Address of the user                                                                 |
| address2     | string     | Address of the user                                                                 |
| city         | string     | City of the user                                                                    |
| zip          | string     | Pincode of the user                                                                 |
| state        | string     | State of user in ISO 3166-2:IN format (https://en.wikipedia.org/wiki/ISO_3166-2:IN) |
| phone        | string     | Phone of the user                                                                   |
| is_active    | boolean    | Used to activate/deactivate the user. Accepts "true"/"false".                       |


### Read Only Fields

password_hash, gender, state, large_image, medium_image, medium_small_image, small_image, xsmall_image, mini_image, created, modified

### Write Only Fields

password

<Tabs>
<TabItem value="`URL`" label="cURL">

```bash
url --request PUT \
  --url http://demo.testpress.in/api/v2.5/admin/users/2120/ \
  --header 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAzNDI4NTB9.Dsc2NZ_q0e3GRaBTArgwkPs81RbQEt-FnH0u_TBs2hc' \
  --header 'cache-control: no-cache' \
  --header 'content-type: application/json' \
  --header 'postman-token: 5bdb17f6-db4d-c72e-a30f-c1776f0d8384' \
  --data '{\n   "password": "welcome"\n}'
```

</TabItem>
<TabItem value="`ruby`" label="Ruby">

```ruby
require 'uri'
require 'net/http'

url = URI("http://demo.testpress.in/api/v2.5/admin/users/2120/")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Put.new(url)
request["authorization"] = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAzNDI4NTB9.Dsc2NZ_q0e3GRaBTArgwkPs81RbQEt-FnH0u_TBs2hc'
request["content-type"] = 'application/json'
request["cache-control"] = 'no-cache'
request["postman-token"] = 'e395af73-374f-75e4-4ca2-3751f84b0598'
request.body = "{\n\t\"password\": \"welcome\"\n}"

response = http.request(request)
puts response.read_body
```

</TabItem>
<TabItem value="`python`" label="Python">

```python
import requests

url = "http://demo.testpress.in/api/v2.5/admin/users/2120/"

payload = "{\n\t\"password\": \"welcome\"\n}"
headers = {
    'authorization': "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAzNDI4NTB9.Dsc2NZ_q0e3GRaBTArgwkPs81RbQEt-FnH0u_TBs2hc",
    'content-type': "application/json",
    'cache-control': "no-cache",
    'postman-token': "25ef8298-0a61-7404-3a97-db9d0250ef78"
    }

response = requests.request("PUT", url, data=payload, headers=headers)

print(response.text)
```
</TabItem>
<TabItem value="`c`" label="C#">

```c
var client = new RestClient("http://demo.testpress.in/api/v2.5/admin/users/2120/");
var request = new RestRequest(Method.PUT);
request.AddHeader("postman-token", "0ce5b8e5-0793-457c-32e7-f5c96be55aa9");
request.AddHeader("cache-control", "no-cache");
request.AddHeader("content-type", "application/json");
request.AddHeader("authorization", "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAzNDI4NTB9.Dsc2NZ_q0e3GRaBTArgwkPs81RbQEt-FnH0u_TBs2hc");
request.AddParameter("application/json", "{\n\t\"password\": \"welcome\"\n}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```
</TabItem>
<TabItem value="`php`" label="PHP">

```php
<?php

$request = new HttpRequest();
$request->setUrl('http://demo.testpress.in/api/v2.5/admin/users/2120/');
$request->setMethod(HTTP_METH_PUT);

$request->setHeaders(array(
  'postman-token' => '652f45cc-e181-b3e2-706c-47459bb5363e',
  'cache-control' => 'no-cache',
  'content-type' => 'application/json',
  'authorization' => 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAzNDI4NTB9.Dsc2NZ_q0e3GRaBTArgwkPs81RbQEt-FnH0u_TBs2hc'
));

$request->setBody('{
    "password": "welcome"
}');

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}
```
</TabItem>
<TabItem value="`java`" label="Java">

```java
OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n\t\"password\": \"welcome\"\n}");
Request request = new Request.Builder()
  .url("http://demo.testpress.in/api/v2.5/admin/users/2120/")
  .put(body)
  .addHeader("authorization", "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAzNDI4NTB9.Dsc2NZ_q0e3GRaBTArgwkPs81RbQEt-FnH0u_TBs2hc")
  .addHeader("content-type", "application/json")
  .addHeader("cache-control", "no-cache")
  .addHeader("postman-token", "2d5c843c-b6ee-d38e-7a3b-7a71c0353bc8")
  .build();

Response response = client.newCall(request).execute();
```
</TabItem>
<TabItem value="`nodejs`" label="NodeJs">

```js
var http = require("http");

var options = {
  "method": "PUT",
  "hostname": "demo.testpress.in",
  "port": null,
  "path": "/api/v2.5/admin/users/2120/",
  "headers": {
    "authorization": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAzNDI4NTB9.Dsc2NZ_q0e3GRaBTArgwkPs81RbQEt-FnH0u_TBs2hc",
    "content-type": "application/json",
    "cache-control": "no-cache",
    "postman-token": "a4f44159-0b97-e199-ecca-7c5646324c84"
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

req.write(JSON.stringify({ password: 'welcome' }));
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

    url := "http://demo.testpress.in/api/v2.5/admin/users/2120/"

    payload := strings.NewReader("{\n\t\"password\": \"welcome\"\n}")

    req, _ := http.NewRequest("PUT", url, payload)

    req.Header.Add("authorization", "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAzNDI4NTB9.Dsc2NZ_q0e3GRaBTArgwkPs81RbQEt-FnH0u_TBs2hc")
    req.Header.Add("content-type", "application/json")
    req.Header.Add("cache-control", "no-cache")
    req.Header.Add("postman-token", "9c29d96f-7ea6-35c9-1d30-8ccb20389d39")

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
    "id": 2120,
    "username": "goodboy",
    "password_hash": "pbkdf2_sha256$12000$zaz1v370q51a$ipNrjQCWNOAmdFsHWPHHZ1i1+5hxF5LxHZ+VfFZ9mrM=",
    "email": "",
    "first_name": "",
    "last_name": "",
    "display_name": "goodboy",
    "photo": "https://s3-ap-southeast-1.amazonaws.com/media.testpress.in/png/3a6be029faea4c41915291da8778c36d.png",
    "birth_date": null,
    "address1": "",
    "address2": "",
    "city": "",
    "zip": "",
    "state": "",
    "state_code": "",
    "phone": "",
    "batches_url": "http://demo.testpress.in/api/v2.5/admin/users/2120/batches/",
    "url": "http://demo.testpress.in/api/v2.5/admin/users/2120/",
    "created": "2017-08-03T18:25:45.949568Z",
    "modified": "2017-08-03T18:29:24.712464Z"
}
```

## Delete User

This endpoint allows you to delete particular user. Please be aware this will delete all the data related to the user. The operation is ir reversible

### HTTP Request

`DELETE /api/v2.2/admin/users/<:id>`

### URL Parameters

| Parametter | Description                       |
| ---------- | --------------------------------- |
| id         | Unique Id of the user to retrieve |

## View User By Email

This endpoint allows you to view details of a particular user by email address

### HTTP Request

`GET /api/v2.5/admin/users/?email=<:email_id>`

### URL Parameters

| Parametter | Description               |
| ---------- | ------------------------- |
| id         | Email Address of the user |

### Fields

| Name         | Type       | Description                                                                         |
| ------------ | ---------- | ----------------------------------------------------------------------------------- |
| username     | string     | Username of the user                                                                |
| first_name   | string     | First name of the user                                                              |
| last_name    | string     | Last of the user                                                                    |
| display_name | string     | Name of the user to be displayed                                                    |
| email        | string     | Email of the user                                                                   |
| photo        | string     | Original image of the user as uploaded                                              |
| large_image  | string     | Profile image with size 256x256                                                     |
| medium_image | string     | Profile image with size 128x128                                                     |
| small_image  | string     | Profile image with size 48x48                                                       |
| xsmall_image | string     | Profile image with size 32x32                                                       |
| mini_image   | string     | Profile image with size 24x24                                                       |
| birth_date   | datestring | Birth date of user. Should be in DD/MM/YYYY format                                  |
| gender_code  | string     | Gender of user. Can be "male", "female" or "trans"                                  |
| gender       | string     | (Read only) Human readable gender of user. Can be "Male", "Female" or "Transgender" |
| address1     | string     | Address of the user                                                                 |
| address2     | string     | Address of the user                                                                 |
| city         | string     | City of the user                                                                    |
| zip          | string     | Pincode of the user                                                                 |
| state_code   | string     | State of user in ISO 3166-2:IN format (https://en.wikipedia.org/wiki/ISO_3166-2:IN) |
| phone        | string     | Phone of the user                                                                   |
| batches      | array      | Batches to which user has access                                                    |

<Tabs>
<TabItem value="`URL`" label="cURL">

```bash
curl -X GET -H "Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAzODY4NTV9.5w4InsvTPtQGgj4L1myQGc1qxw7IvNEpa3BtVfQOtxE" -H "Cache-Control: no-cache" -H "Postman-Token: c8cbe2a1-76d0-da3a-1bbb-38cd3f61f215" "http://demo.testpress.in//api/v2.5/admin/users/?email=bharathwaaj.s@gmail.com"
```

</TabItem>
<TabItem value="`ruby`" label="Ruby">

```ruby
require 'uri'
require 'net/http'

url = URI("http://demo.testpress.in//api/v2.5/admin/users/?email=bharathwaaj.s%40gmail.com")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Get.new(url)
request["authorization"] = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAzODY4NTV9.5w4InsvTPtQGgj4L1myQGc1qxw7IvNEpa3BtVfQOtxE'
request["cache-control"] = 'no-cache'
request["postman-token"] = 'b21426e3-c795-8d2f-eb0b-db5d81ac2ec0'

response = http.request(request)
puts response.read_body
```

</TabItem>
<TabItem value="`python`" label="Python">

```python
import requests

url = "http://demo.testpress.in//api/v2.5/admin/users/"

querystring = {"email":"bharathwaaj.s@gmail.com"}

headers = {
    'authorization': "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAzODY4NTV9.5w4InsvTPtQGgj4L1myQGc1qxw7IvNEpa3BtVfQOtxE",
    'cache-control': "no-cache",
    'postman-token': "d46170d5-b684-79ad-2ce8-b2c5d8cb5988"
    }

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)
```
</TabItem>
<TabItem value="`c`" label="C#">

```c
var client = new RestClient("http://demo.testpress.in//api/v2.5/admin/users/?email=bharathwaaj.s%40gmail.com");
var request = new RestRequest(Method.GET);
request.AddHeader("postman-token", "30c7ab26-66ed-0558-dd6f-8cc4b66d5644");
request.AddHeader("cache-control", "no-cache");
request.AddHeader("authorization", "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAzODY4NTV9.5w4InsvTPtQGgj4L1myQGc1qxw7IvNEpa3BtVfQOtxE");
IRestResponse response = client.Execute(request);
```
</TabItem>
<TabItem value="`php`" label="PHP">

```php
<?php

$request = new HttpRequest();
$request->setUrl('http://demo.testpress.in//api/v2.5/admin/users/');
$request->setMethod(HTTP_METH_GET);

$request->setQueryData(array(
  'email' => 'bharathwaaj.s@gmail.com'
));

$request->setHeaders(array(
  'postman-token' => 'f09b000b-ac7c-da00-2532-85010b519a60',
  'cache-control' => 'no-cache',
  'authorization' => 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAzODY4NTV9.5w4InsvTPtQGgj4L1myQGc1qxw7IvNEpa3BtVfQOtxE'
));

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}
```
</TabItem>
<TabItem value="`java`" label="Java">

```java
OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
  .url("http://demo.testpress.in//api/v2.5/admin/users/?email=bharathwaaj.s%40gmail.com")
  .get()
  .addHeader("authorization", "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAzODY4NTV9.5w4InsvTPtQGgj4L1myQGc1qxw7IvNEpa3BtVfQOtxE")
  .addHeader("cache-control", "no-cache")
  .addHeader("postman-token", "05ef17ed-3a9c-3745-ee1b-10ae5963bbcc")
  .build();

Response response = client.newCall(request).execute();
```
</TabItem>
<TabItem value="`nodejs`" label="NodeJs">

```js

```
</TabItem>
<TabItem value="`go`" label="Go">

```go
package main

import (
    "fmt"
    "net/http"
    "io/ioutil"
)

func main() {

    url := "http://demo.testpress.in//api/v2.5/admin/users/?email=bharathwaaj.s%40gmail.com"

    req, _ := http.NewRequest("GET", url, nil)

    req.Header.Add("authorization", "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAzODY4NTV9.5w4InsvTPtQGgj4L1myQGc1qxw7IvNEpa3BtVfQOtxE")
    req.Header.Add("cache-control", "no-cache")
    req.Header.Add("postman-token", "80159c50-160a-991a-f513-a5fafa286a1b")

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
  "count": 1,
  "next": null,
  "previous": null,
  "per_page": 20,
  "results": [
    {
      "id": 36,
      "url": "http://demo.testpress.in/api/v2.2/admin/users/36/",
      "username": "bharath",
      "first_name": "Bharath Kumar",
      "last_name": "S",
      "display_name": "Bharath Kumar S",
      "email": "bharathwaaj.s@gmail.com",
      "photo": "https://s3-ap-southeast-1.amazonaws.com/media.testpress.in/i/cb88287098924bd6ae615ca4aa71eab5.png",
      "large_image": "",
      "medium_image": "",
      "small_image": "",
      "x_small_image": "",
      "mini_image": "",
      "birth_date": "17/08/1987",
      "gender_code": "male",
      "gender": "Male",
      "address1": "257 A Timber Mill Road",
      "address2": "4th Cross, New Thippasandra",
      "city": "Bangalore",
      "zip": "560075",
      "state": "",
      "state_code": "",
      "phone": "9787231006",
      "batches": [
        {
          "id": 26,
          "name": "UPSC Evening Batch",
          "url": "http://demo.testpress.in/api/v2.2/admin/batches/26/"
        },
        {
          "id": 25,
          "name": "IBPS Online Batch",
          "url": "http://demo.testpress.in/api/v2.2/admin/batches/25/"
        },
        {
          "id": 24,
          "name": "NEET Morning Batch",
          "url": "http://demo.testpress.in/api/v2.2/admin/batches/24/"
        },
        {
          "id": 23,
          "name": "UPSC Morning Batch",
          "url": "http://demo.testpress.in/api/v2.2/admin/batches/23/"
        },
        {
          "id": 22,
          "name": "IBPS Morning Batch",
          "url": "http://demo.testpress.in/api/v2.2/admin/batches/22/"
        },
        {
          "id": 21,
          "name": "st std A",
          "url": "http://demo.testpress.in/api/v2.2/admin/batches/21/"
        },
        {
          "id": 20,
          "name": "OHC 2013",
          "url": "http://demo.testpress.in/api/v2.2/admin/batches/20/"
        },
        {
          "id": 19,
          "name": "POZITIVE ONLINE TEST SERIES",
          "url": "http://demo.testpress.in/api/v2.2/admin/batches/19/"
        },
        {
          "id": 18,
          "name": "Unique UPSC Batch",
          "url": "http://demo.testpress.in/api/v2.2/admin/batches/18/"
        }
      ],
      "batches_url": "http://demo.testpress.in/api/v2.2/admin/users/36/batches/"
    }
  ]
}
```


## View Batches

This endpoint allows you to view batches of a particular user.

### HTTP Request

`GET /api/v2.5/admin/users/<id>/batches/`

### URL Parameters

| Parametter | Description                       |
| ---------- | --------------------------------- |
| id         | Unique Id of the user to retrieve |

### Response Fields

| Name | Type   | Description                   |
| ---- | ------ | ----------------------------- |
| id   | string | Id of the batch               |
| url  | string | Unique endpoint of that batch |
| name | string | Name of the batch             |

<Tabs>
<TabItem value="`URL`" label="cURL">

```bash
curl --request GET \
  --url http://demo.testpress.in/api/v2.5/admin/users/1892/batches/ \
  --header 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84' \
  --header 'cache-control: no-cache' \
  --header 'content-type: application/json'
```

</TabItem>
<TabItem value="`ruby`" label="Ruby">

```rubyrequire 'uri'
require 'net/http'

url = URI("http://demo.testpress.in/api/v2.5/admin/users/1892/batches/")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Get.new(url)
request["content-type"] = 'application/json'
request["authorization"] = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84'
request["cache-control"] = 'no-cache'

response = http.request(request)
puts response.read_body
```

</TabItem>
<TabItem value="`python`" label="Python">

```python
import requests

url = "http://demo.testpress.in/api/v2.5/admin/users/1892/batches/"

payload = ""
headers = {
    'content-type': "application/json",
    'authorization': "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84",
    'cache-control': "no-cache"
    }

response = requests.request("GET", url, data=payload, headers=headers)

print(response.text)
```
</TabItem>
<TabItem value="`c`" label="C#">

```c
var client = new RestClient("http://demo.testpress.in/api/v2.5/admin/users/1892/batches/");
var request = new RestRequest(Method.GET);
request.AddHeader("cache-control", "no-cache");
request.AddHeader("authorization", "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84");
request.AddHeader("content-type", "application/json");
IRestResponse response = client.Execute(request);
```
</TabItem>
<TabItem value="`php`" label="PHP">

```php
<?php

$request = new HttpRequest();
$request->setUrl('http://demo.testpress.in/api/v2.5/admin/users/1892/batches/');
$request->setMethod(HTTP_METH_GET);

$request->setHeaders(array(
  'cache-control' => 'no-cache',
  'authorization' => 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84',
  'content-type' => 'application/json'
));

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}
```
</TabItem>
<TabItem value="`java`" label="Java">

```java
OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
  .url("http://demo.testpress.in/api/v2.5/admin/users/1892/batches/")
  .get()
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
  "method": "GET",
  "hostname": "demo.testpress.in",
  "port": null,
  "path": "/api/v2.5/admin/users/1892/batches/",
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

req.end();
```
</TabItem>
<TabItem value="`go`" label="Go">

```go
package main

import (
    "fmt"
    "net/http"
    "io/ioutil"
)

func main() {

    url := "http://demo.testpress.in/api/v2.5/admin/users/1892/batches/"

    req, _ := http.NewRequest("GET", url, nil)

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
  "count": 2,
  "next": null,
  "previous": null,
  "per_page": 20,
  "results": [
    {
      "id": 29,
      "name": "Test Batch",
    },
    {
      "id": 23,
      "name": "UPSC Morning Batch",
    }
  ]
}
```

## Add Batches

This endpoint allows you to add users to batches

### HTTP Request

`POST /api/v2.5/admin/users/<id>/batches/`

### URL Parameters

| Parametter | Description                       |
| ---------- | --------------------------------- |
| id         | Unique Id of the user to retrieve |

### Response Fields

| Name | Type   | Description                   |
| ---- | ------ | ----------------------------- |
| id   | string | Id of the batch               |
| url  | string | Unique endpoint of that batch |
| name | string | Name of the batch             |

<Tabs>
<TabItem value="`URL`" label="cURL">

```bash
curl --request POST \
  --url http://demo.testpress.in/api/v2.5/admin/users/1892/batches/ \
  --header 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84' \
  --header 'cache-control: no-cache' \
  --header 'content-type: application/json' \
  --data '{"batches": [24, 22]}'
```

</TabItem>
<TabItem value="`ruby`" label="Ruby">

```ruby
require 'uri'
require 'net/http'

url = URI("http://demo.testpress.in/api/v2.5/admin/users/1892/batches/")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Post.new(url)
request["content-type"] = 'application/json'
request["authorization"] = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84'
request["cache-control"] = 'no-cache'
request.body = "{\n    \"batches\": [24, 22]\n}"

response = http.request(request)
puts response.read_body
```

</TabItem>
<TabItem value="`python`" label="Python">

```python
import requests

url = "http://demo.testpress.in/api/v2.5/admin/users/1892/batches/"

payload = "{\n    \"batches\": [24, 22]\n}"
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
var client = new RestClient("http://demo.testpress.in/api/v2.5/admin/users/1892/batches/");
var request = new RestRequest(Method.POST);
request.AddHeader("cache-control", "no-cache");
request.AddHeader("authorization", "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84");
request.AddHeader("content-type", "application/json");
request.AddParameter("application/json", "{\n    \"batches\": [24, 22]\n}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```
</TabItem>
<TabItem value="`php`" label="PHP">

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'http://demo.testpress.in/api/v2.5/admin/users/1892/batches/',
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
    "batches": [24, 22]
}',
  CURLOPT_HTTPHEADER => array(
    'Authorization: JWT <Type Authorization code here>',
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
RequestBody body = RequestBody.create(mediaType, "{\n    \"batches\": [24, 22]\n}");
Request request = new Request.Builder()
  .url("http://demo.testpress.in/api/v2.5/admin/users/1892/batches/")
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
  "path": "/api/v2.5/admin/users/1892/batches/",
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

req.write(JSON.stringify({ batches: [24, 22] }));
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

    url := "http://demo.testpress.in/api/v2.5/admin/users/1892/batches/"

    payload := strings.NewReader("{\n    \"batches\": [24, 22]\n}")

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
[
  {
    "id": 29,
    "name": "Test Batch",
  },
  {
    "id": 24,
    "name": "NEET Morning Batch",
  },
  {
    "id": 23,
    "name": "UPSC Morning Batch",
  },
  {
    "id": 22,
    "name": "IBPS Morning Batch",
  }
]
```

## Remove Batches

This endpoint allows you to add users to batches

### HTTP Request

`DELETE /api/v2.5/admin/users/<id>/batches/`

### URL Parameters

| Parametter | Description                       |
| ---------- | --------------------------------- |
| id         | Unique Id of the user to retrieve |

### POST data

| Parametter | Description       |
| ---------- | ----------------- |
| batches    | List of batch ids |

<Tabs>
<TabItem value="`URL`" label="cURL">

```bash
curl --request DELETE \
  --url http://demo.testpress.in/api/v2.5/admin/users/1892/batches/ \
  --header 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84' \
  --header 'cache-control: no-cache' \
  --header 'content-type: application/json' \
  --data '{"batches": [24, 22]}'
```

</TabItem>
<TabItem value="`ruby`" label="Ruby">

```ruby
require 'uri'
require 'net/http'

url = URI("http://demo.testpress.in/api/v2.5/admin/users/1892/batches/")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Delete.new(url)
request["content-type"] = 'application/json'
request["authorization"] = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84'
request["cache-control"] = 'no-cache'
request.body = "{\n    \"batches\": [24, 22]\n}"

response = http.request(request)
puts response.read_body
```

</TabItem>
<TabItem value="`python`" label="Python">

```python
import requests

url = "http://demo.testpress.in/api/v2.5/admin/users/1892/batches/"

payload = "{\n    \"batches\": [24, 22]\n}"
headers = {
    'content-type': "application/json",
    'authorization': "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84",
    'cache-control': "no-cache"
    }

response = requests.request("DELETE", url, data=payload, headers=headers)

print(response.text)
```
</TabItem>
<TabItem value="`c`" label="C#">

```c
var client = new RestClient("http://demo.testpress.in/api/v2.5/admin/users/1892/batches/");
var request = new RestRequest(Method.DELETE);
request.AddHeader("cache-control", "no-cache");
request.AddHeader("authorization", "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84");
request.AddHeader("content-type", "application/json");
request.AddParameter("application/json", "{\n    \"batches\": [24, 22]\n}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```
</TabItem>
<TabItem value="`php`" label="PHP">

```php
<?php

$request = new HttpRequest();
$request->setUrl('http://demo.testpress.in/api/v2.5/admin/users/1892/batches/');
$request->setMethod(HTTP_METH_DELETE);

$request->setHeaders(array(
  'cache-control' => 'no-cache',
  'authorization' => 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84',
  'content-type' => 'application/json'
));

$request->setBody('{
    "batches": [24, 22]
}');

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}
```
</TabItem>
<TabItem value="`java`" label="Java">

```java
OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n    \"batches\": [24, 22]\n}");
Request request = new Request.Builder()
  .url("http://demo.testpress.in/api/v2.5/admin/users/1892/batches/")
  .delete(body)
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
  "method": "DELETE",
  "hostname": "demo.testpress.in",
  "port": null,
  "path": "/api/v2.5/admin/users/1892/batches/",
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

req.write(JSON.stringify({ batches: [24, 22] }));
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

    url := "http://demo.testpress.in/api/v2.5/admin/users/1892/batches/"

    payload := strings.NewReader("{\n    \"batches\": [24, 22]\n}")

    req, _ := http.NewRequest("DELETE", url, payload)

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

> The above command on success will return 204 NO CONTENT


## Add Courses

This endpoint allows you to add courses to a user

### HTTP Request

`POST /api/v2.5/admin/users/<id>/courses/`

### URL Parameters

| Parametter | Description                       |
| ---------- | --------------------------------- |
| id         | Unique Id of the user to retrieve |

### POST data

| Parametter | Description        |
| ---------- | ------------------ |
| courses    | List of course ids |

<Tabs>
<TabItem value="`URL`" label="cURL">

```bash
curl --request POST \
  --url http://lmsdemo.testpress.in/api/v2.5/admin/users/1892/courses/ \
  --header 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84' \
  --header 'cache-control: no-cache' \
  --header 'content-type: application/json' \
  --data '{"courses": [278, 279]}'
```

</TabItem>
<TabItem value="`ruby`" label="Ruby">

```ruby
require 'uri'
require 'net/http'

url = URI("http://lmsdemo.testpress.in/api/v2.5/admin/users/1892/courses/")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Post.new(url)
request["content-type"] = 'application/json'
request["authorization"] = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84'
request["cache-control"] = 'no-cache'
request.body = "{\n    \"courses\": [278, 279]\n}"

response = http.request(request)
puts response.read_body
```

</TabItem>
<TabItem value="`python`" label="Python">

```python
import requests

url = "http://lmsdemo.testpress.in/api/v2.5/admin/users/1892/courses/"

payload = "{\n    \"courses\": [278, 279]\n}"
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
var client = new RestClient("http://demo.testpress.in/api/v2.5/admin/users/1892/courses/");
var request = new RestRequest(Method.POST);
request.AddHeader("cache-control", "no-cache");
request.AddHeader("authorization", "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84");
request.AddHeader("content-type", "application/json");
request.AddParameter("application/json", "{\n    \"coursess\": [278, 279]\n}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```
</TabItem>
<TabItem value="`php`" label="PHP">

```php
<?php

$request = new HttpRequest();
$request->setUrl('http://demo.testpress.in/api/v2.5/admin/users/1892/courses/');
$request->setMethod(HTTP_METH_POST);

$request->setHeaders(array(
  'cache-control' => 'no-cache',
  'authorization' => 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84',
  'content-type' => 'application/json'
));

$request->setBody('{
    "courses": [278, 279]
}');

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}
```
</TabItem>
<TabItem value="`java`" label="Java">

```java
OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n    \"courses\": [278, 279]\n}");
Request request = new Request.Builder()
  .url("http://demo.testpress.in/api/v2.5/admin/users/1892/courses/")
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
  "path": "/api/v2.5/admin/users/1892/courses/",
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

req.write(JSON.stringify({ courses: [278, 279] }));
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

    url := "http://demo.testpress.in/api/v2.5/admin/users/1892/courses/"

    payload := strings.NewReader("{\n    \"courses\": [278, 279]\n}")

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
  "count": 5,
  "next": null,
  "previous": null,
  "per_page": 20,
  "results": [
    {
      "id": 278,
      "title": "Master of Business Administration",
      "slug": "master-of-business-administration",
      "description": "",
      "image": "https://static.testpress.in/institute/lmsdemo/custom_icons/0351510ee9254487a6d393f966d0f2f3.jpg",
      "is_public": true,
      "created": "2020-12-09T09:39:53.863767Z",
      "modified": "2020-12-14T12:58:36.148936Z",
      "enable_progressive_lock": false,
      "order": 8,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "batches_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/batches/",
      "chapters_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/chapters/",
      "contents_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/contents/"
    },
    {
      "id": 279,
      "title": "Language training",
      "slug": "language-training",
      "description": "",
      "image": "https://static.testpress.in/institute/lmsdemo/custom_icons/e293fdefcfdc46a8892ca12a0bdbb7cc.jpg",
      "is_public": true,
      "created": "2020-12-09T09:56:31.350026Z",
      "modified": "2020-12-12T10:17:05.427842Z",
      "enable_progressive_lock": false,
      "order": 9,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/279/",
      "batches_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/279/batches/",
      "chapters_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/279/chapters/",
      "contents_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/279/contents/"
    },
    {
      "id": 280,
      "title": "Entrance Coaching",
      "slug": "entrance-coaching",
      "description": "",
      "image": "https://static.testpress.in/institute/lmsdemo/custom_icons/421d84a1778a4c55a6b6ceaac1e540e7.jfif",
      "is_public": true,
      "created": "2020-12-09T09:59:48.392077Z",
      "modified": "2020-12-12T10:17:05.427842Z",
      "enable_progressive_lock": false,
      "order": 10,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/280/",
      "batches_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/280/batches/",
      "chapters_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/280/chapters/",
      "contents_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/280/contents/"
    },
    {
      "id": 281,
      "title": "Skill Development Training",
      "slug": "skill-development-training",
      "description": "",
      "image": "https://static.testpress.in/institute/lmsdemo/custom_icons/a3687fd5094042ddb8ab043eecf1d2d2.jpg",
      "is_public": true,
      "created": "2020-12-09T10:00:58.923825Z",
      "modified": "2020-12-12T10:17:05.427842Z",
      "enable_progressive_lock": false,
      "order": 11,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/281/",
      "batches_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/281/batches/",
      "chapters_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/281/chapters/",
      "contents_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/281/contents/"
    },
    {
      "id": 283,
      "title": "TD",
      "slug": "td",
      "description": "",
      "image": "https://static.testpress.in/institute/lmsdemo/custom_icons/26759ff073e34454945f5ea867e7afee.png",
      "is_public": false,
      "created": "2020-12-11T10:37:20.205025Z",
      "modified": "2020-12-13T17:15:37.681858Z",
      "enable_progressive_lock": false,
      "order": 7,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/283/",
      "batches_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/283/batches/",
      "chapters_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/283/chapters/",
      "contents_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/283/contents/"
    }
  ]
}
```

## Remove Courses

This endpoint allows you to remove courses from a user

### HTTP Request

`DELETE /api/v2.5/admin/users/<id>/courses/`

### URL Parameters

| Parametter | Description                       |
| ---------- | --------------------------------- |
| id         | Unique Id of the user to retrieve |

### POST data

| Parametter | Description                                      |
| ---------- | ------------------------------------------------ |
| courses    | List of course ids that needs to be removed user |

<Tabs>
<TabItem value="`URL`" label="cURL">

```bash
curl --request DELETE \
  --url http://lmsdemo.testpress.in/api/v2.5/admin/users/1892/courses/ \
  --header 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84' \
  --header 'cache-control: no-cache' \
  --header 'content-type: application/json' \
  --data '{"courses": [24, 22]}'
```

</TabItem>
<TabItem value="`ruby`" label="Ruby">

```ruby
require 'uri'
require 'net/http'

url = URI("http://lmsdemo.testpress.in/api/v2.5/admin/users/1892/courses/")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Delete.new(url)
request["content-type"] = 'application/json'
request["authorization"] = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84'
request["cache-control"] = 'no-cache'
request.body = "{\n    \"courses\": [24, 22]\n}"

response = http.request(request)
puts response.read_body
```

</TabItem>
<TabItem value="`python`" label="Python">

```python
import requests

url = "http://lmsdemo.testpress.in/api/v2.5/admin/users/1892/courses/"

payload = "{\n    \"courses\": [24, 22]\n}"
headers = {
    'content-type': "application/json",
    'authorization': "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84",
    'cache-control': "no-cache"
    }

response = requests.request("DELETE", url, data=payload, headers=headers)

print(response.text)
```
</TabItem>
<TabItem value="`c`" label="C#">

```c
var client = new RestClient("http://lmsdemo.testpress.in/api/v2.5/admin/users/1892/courses/");
var request = new RestRequest(Method.DELETE);
request.AddHeader("cache-control", "no-cache");
request.AddHeader("authorization", "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84");
request.AddHeader("content-type", "application/json");
request.AddParameter("application/json", "{\n    \"courses\": [24, 22]\n}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```
</TabItem>
<TabItem value="`php`" label="PHP">

```php
<?php

$request = new HttpRequest();
$request->setUrl('http://lmsdemo.testpress.in/api/v2.5/admin/users/1892/courses/');
$request->setMethod(HTTP_METH_DELETE);

$request->setHeaders(array(
  'cache-control' => 'no-cache',
  'authorization' => 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84',
  'content-type' => 'application/json'
));

$request->setBody('{
    "courses": [24, 22]
}');

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}
```
</TabItem>
<TabItem value="`java`" label="Java">

```java
OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n    \"courses\": [24, 22]\n}");
Request request = new Request.Builder()
  .url("http://lmsdemo.testpress.in/api/v2.5/admin/users/1892/courses/")
  .delete(body)
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
  "method": "DELETE",
  "hostname": "lmsdemo.testpress.in",
  "port": null,
  "path": "/api/v2.5/admin/users/1892/courses/",
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

req.write(JSON.stringify({ courses: [24, 22] }));
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

    url := "http://lmsdemo.testpress.in/api/v2.5/admin/users/1892/courses/"

    payload := strings.NewReader("{\n    \"courses\": [278, 279]\n}")

    req, _ := http.NewRequest("DELETE", url, payload)

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

> The above command on success will return 204 NO CONTENT

