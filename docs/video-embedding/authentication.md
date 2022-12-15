---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Playback Authentication

Access token generated using Testpress API which is required to authorize video playback. Embed code you generated from the admin portal will contain an access token that won't have an expiry date. 


If the user has that code he can embed your video onto any page on the internet if you don't have domain restrictions. even if you have, users can view the video by embedding your video on your home or any other page that doesn't restrict users.


You can prevent the above scenario by generating an access token using API with time-to-live or set to expire after one usage on the back-end server and then sent to the website front-end and use generate access_token as part of the video embed code.


### Obtaining an Access token

To generate the Access token you need to send an HTTP POST request to the API Endpoint, with the [authentication Header](../intro.md) and the optional Access token request Body.

```bash
https://demo.testpress.in/api/v2.5/admin/videos/{video-id}/access-tokens
```


You can get the video ID from the admin portal under the video title.

**Optional Fields**

| Name                            | Type         | description |
| -----------                     | -----------  | ----------- |
| time_to_live                    | integer      | By default, the Access token validity is set to infinity. You can create shorter-lived URLs by passing the time_to_live parameter. This value is to be set in seconds |
| expires_after_first_usage       | boolean      | Passing true will make the access token expire immediately after the first usage |
| annotations                     | json         | JSON contain all the information about the watermark. Please refer to this [doc](./watermarking.md) for details on watermarking. |


<Tabs>
<TabItem value="`URL`" label="cURL">

```bash
curl --request POST \
  --url https://lms.testpress.in/api/v2.5/admin/videos/6M5ItSrGdcs/access-tokens/ \
  --header 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MiwidXNlcl9pZCI6MiwiaW5zdGl0dXRlIjoxNjU1LCJpZCI6MiwiZXhwIjoxNjcxMDkxODE4LCJlbWFpbCI6InN1cHBvcnRAdGVzdHByZXNzLmluIn0.unnuHYMnu_6rxaiOMFouN5-O57psCVb5j7DWq9B28k8' \
  --header 'cache-control: no-cache' \
  --header 'content-type: application/json' \
  --data '{"time_to_live": 600, "expires_after_first_usage": "true"}'
```

</TabItem>
<TabItem value="`ruby`" label="Ruby">

```ruby
require 'uri'
require 'net/http'

url = URI("https://lms.testpress.in/api/v2.5/admin/videos/6M5ItSrGdcs/access-tokens/")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Post.new(url)
request["content-type"] = 'application/json'
request["authorization"] = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84'
request["cache-control"] = 'no-cache'
request.body = "{\n    \"time_to_live\": \"300\",\n    \"expires_after_first_usage\": \"true\"\n}"

response = http.request(request)
puts response.read_body
```

</TabItem>
<TabItem value="`python`" label="Python">

```python
import requests

url = "https://lms.testpress.in/api/v2.5/admin/videos/6M5ItSrGdcs/access-tokens/"

payload = "{\n \"time_to_live\": \"300\",\n    \"expires_after_first_usage\": \"true\"\n}"
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
var client = new RestClient("https://lms.testpress.in/api/v2.5/admin/videos/6M5ItSrGdcs/access-tokens/");
var request = new RestRequest(Method.POST);
request.AddHeader("cache-control", "no-cache");
request.AddHeader("authorization", "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84");
request.AddHeader("content-type", "application/json");
request.AddParameter("application/json", "{\n \"time_to_live\": \"300\",\n    \"expires_after_first_usage\": \"true\"\n}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```
</TabItem>
<TabItem value="`php`" label="PHP">

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://lms.testpress.in/api/v2.5/admin/videos/6M5ItSrGdcs/access-tokens/',
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
    "time_to_live": "300",
    "expires_after_first_usage": "true",
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
RequestBody body = RequestBody.create(mediaType, "{\n \"time_to_live\": \"300\",\n    \"expires_after_first_usage\": \"true\"\n}");
Request request = new Request.Builder()
  .url("https://lms.testpress.in/api/v2.5/admin/videos/6M5ItSrGdcs/access-tokens/")
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
  "hostname": "lms.testpress.in",
  "port": null,
  "path": "/api/v2.5/admin/videos/6M5ItSrGdcs/access-tokens/",
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
  time_to_live: 300,
  expires_after_first_usage: true,
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

    url := "https://lms.testpress.in/api/v2.5/admin/videos/6M5ItSrGdcs/access-tokens/"

    payload := strings.NewReader("{\n \"time_to_live\": \"300\",\n    \"expires_after_first_usage\": \"true\"\n}")

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


For valid requests the API server returns a JSON:

```js
{
    "url": "https://demo.testpress.in/api/v2.5/admin/videos/{video-id}/access-tokens/ea806eb5-4576-4bef-8489-204e78115d5a/",
    "expires_after_first_usage": true,
    "code": "ea806eb5-4576-4bef-8489-204e78115d5a",
    "status": "Active",
    "valid_until": "2022-08-29T12:43:11.288874Z",
    "annotations":[]
    "playback_url": "https://demo.testpress.in/embed/{video-id}/?access-tokens=ea806eb5-4576-4bef-8489-204e78115d5a"
}
```