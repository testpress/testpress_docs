---
sidebar_position: 1
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



# Authentication

You need to authentication token to access the private resources and to generate access token for playback via Testpress API

## Generate authentication token

Make Post request to the below link with the credentials to generate an authentication token.


**POST http://demo.testpress.in/api/v2.3/auth-token/ **

| Name        | Type        | Description |
| ----------- | ----------- |----------- |
| username    | string      | Username of the user |
| password    | string      | Password of the user |


### Sample code

<Tabs>
<TabItem value="rb" label="Ruby">

```rb
re 'uri'
require 'net/http'

url = URI("https://demo.testpress.in/api/v2.5/auth-token/")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(url)
request["content-type"] = 'application/json'
request["cache-control"] = 'no-cache'
request.body = "{\n    \"username\": \"testpress\",\n    \"password\": \"demo\"\n}"

response = http.request(request)
puts response.read_body

```

</TabItem>
<TabItem value="py" label="Python">

```py
import requests

url = "https://demo.testpress.in/api/v2.5/auth-token/"

payload = "{\n    \"username\": \"testpress\",\n    \"password\": \"demo\"\n}"
headers = {
    'content-type': "application/json",
    'cache-control': "no-cache",
    }

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
```

</TabItem>
<TabItem value="java" label="Java">

```java

OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("multipart/form-data; boundary=---011000010111000001101001");
RequestBody body = RequestBody.create(mediaType, "-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"username\"\r\n\r\nadmin\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"password\"\r\n\r\ndemo\r\n-----011000010111000001101001--");
Request request = new Request.Builder()
  .url("http://demo.testpress.in/api/v2.2/auth-token/")
  .post(body)
  .addHeader("content-type", "multipart/form-data; boundary=---011000010111000001101001")
  .addHeader("authorization", "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MTM5NTYsInVzZXJfaWQiOjEzOTU2LCJlbWFpbCI6ImRlcy5wcm8ubWFkaGFuQGhvdG1haWwuY29tIiwiZXhwIjoxNDY0MzQwMzg1fQ.TElNLpQE8KERVe7Q-vjNk9aU-9prOfzBb43srB9WmC0")
  .addHeader("cache-control", "no-cache")
  .addHeader("postman-token", "987488b1-1b5f-dd8b-95fc-fea8d276b2ae")
  .build();

Response response = client.newCall(request).execute();
```

</TabItem>

<TabItem value="php" label="php">

```php

<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://demo.testpress.in/api/v2.3/auth-token/',
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
    "username": "<type_your_username_here>",
    "password": "<type_your_password_here>"
}',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
```

</TabItem>
</Tabs>

:::caution

Replace demo with your institute subdomain hereafter everywhere.

:::
## Response

The response will return an token which should be prefixed with JWT and included in all API requests to the server in a header that looks like the following:

```bash
Authorization: JWT auth-token-string
```