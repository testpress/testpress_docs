---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Products


Products API gives you access to read all the products which are active and can be purchased.

### Get All Products

This endpoint retrieves all products available for purchase in an institute.

#### HTTP Request

```
GET /api/v2.2/products/
```

#### Query Parameters

| Parameter | Type  | Description  |    
| ----------- | ----------- |----------- |
| category | string |Filters by category name. Ex: IBPS |

#### Fields


| Name | Type |Description |
|---------|-----------|----------|
| id | int |The product unique ID |
| url | string |URL to get details of the product |
| title | string |Title of the product |                                
| slug | string |Human readable keyword string of the product |
| images | array |An array of image urls for the product <br/> - original - User uploaded size<br/>-  medium - 300x250px <br/>-  small - 100x83px|
| start_date | datestring |Start date of product |
| end_date | datestring |End  date of product |
| categories | array |Categories to which this product belongs |
| types | array |Type of goods included in this package. Can be E-books, Exams, Classroom Program, Books |
| price | string |Price of the product in INR |
| exams_count | int |Number of exams present in this product |
| notes_count | int |Number of documents present in this product |


<Tabs>
<TabItem value="bash" label="cURL">

```bash
curl --request GET \
  --url http://demo.testpress.in/api/v2.2/products/ \
  --header 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw' \
  --header 'cache-control: no-cache'
```

</TabItem>
<TabItem value="rb" label="Ruby">

```rb
require 'uri'
require 'net/http'

url = URI("http://demo.testpress.in/api/v2.2/products/")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Get.new(url)
request["authorization"] = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw'
request["cache-control"] = 'no-cache'

response = http.request(request)
puts response.read_body
```

</TabItem>


<TabItem value="py" label="Python">

```py
import requests

url = "http://demo.testpress.in/api/v2.2/products/"

headers = {
    'authorization': "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw",
    'cache-control': "no-cache"
    }

response = requests.request("GET", url, headers=headers)

print(response.text)

```

</TabItem>


<TabItem value="c" label="C#">

```c
var client = new RestClient("http://demo.testpress.in/api/v2.2/products/");
var request = new RestRequest(Method.GET);
request.AddHeader("cache-control", "no-cache");
request.AddHeader("authorization", "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw");
IRestResponse response = client.Execute(request);

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
      "id": 243,
      "url": "http://demo.testpress.in/api/v2.2/products/free-ias-prelims-power-pack/",
      "title": "Free IAS Prelims Power Pack",
      "slug": "free-ias-prelims-power-pack",
      "image": "https://s3-ap-southeast-1.amazonaws.com/media.testpress.in/i/770056a05ab2433191eeeef8de75210f.png",
      "images": [
        {
          "original": "https://s3-ap-southeast-1.amazonaws.com/media.testpress.in/i/770056a05ab2433191eeeef8de75210f.png",
          "medium": "https://s3-ap-southeast-1.amazonaws.com/media.testpress.in/i/bfbfcf2f31f84c5aada30eba2ae6bd2e.png",
          "small": "https://s3-ap-southeast-1.amazonaws.com/media.testpress.in/i/63b181a83d8c4e198309cacb110bac35.png"
        }
      ],
      "start_date": "2.25-01-01T00:00:00+05:30",
      "end_date": "2021-12-31T00:00:00+05:30",
      "categories": [
        "TNPSC"
      ],
      "types": [
        "E-books",
        "Exams"
      ],
      "exams_count": 1,
      "notes_count": 0,
      "price": "1.00"
    }
  ]
}

```


### Get Single Product


This endpoint retrieves all products available for purchase in an institute.


#### HTTP Request

```
GET /api/v2.2/products/<slug>
```


#### URL Parameters

| Parameter | Description  |    
| ----------- | ----------- |
| slug | The unique slug of the product to retrieve |

#### Fields

| Name | Type  | Description  |    
| ----------- | ----------- |----------- |
| description | string |Brief description of the product |
| exams | array |Exams present in this product |
| notes | array |Documents present in this product |
| requires_shipping | boolean |Whether the product has shippable goods |


<Tabs>
<TabItem value="bash" label="cURL">

```bash
curl --request GET \
  --url http://demo.testpress.in/api/v2.2/products/free-ias-prelims-power-pack/ \
  --header 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw' \
  --header 'cache-control: no-cache'
```

</TabItem>
<TabItem value="rb" label="Ruby">

```rb
require 'uri'
require 'net/http'

url = URI("http://demo.testpress.in/api/v2.2/products/free-ias-prelims-power-pack/")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Get.new(url)
request["authorization"] = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw'
request["cache-control"] = 'no-cache'

response = http.request(request)
puts response.read_body
```

</TabItem>


<TabItem value="py" label="Python">

```py
import requests

url = "http://demo.testpress.in/api/v2.2/products/free-ias-prelims-power-pack/"

headers = {
    'authorization': "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw",
    'cache-control': "no-cache"
    }

response = requests.request("GET", url, headers=headers)

print(response.text)

```

</TabItem>


<TabItem value="c" label="C#">

```c
var client = new RestClient("http://demo.testpress.in/api/v2.2/products/free-ias-prelims-power-pack/");
var request = new RestRequest(Method.GET);
request.AddHeader("cache-control", "no-cache");
request.AddHeader("authorization", "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw");
IRestResponse response = client.Execute(request);
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
      "id": 243,
      "url": "http://demo.testpress.in/api/v2.2/products/free-ias-prelims-power-pack/",
      "title": "Free IAS Prelims Power Pack",
      "slug": "free-ias-prelims-power-pack",
      "image": "https://s3-ap-southeast-1.amazonaws.com/media.testpress.in/i/770056a05ab2433191eeeef8de75210f.png",
      "images": [
        {
          "original": "https://s3-ap-southeast-1.amazonaws.com/media.testpress.in/i/770056a05ab2433191eeeef8de75210f.png",
          "medium": "https://s3-ap-southeast-1.amazonaws.com/media.testpress.in/i/bfbfcf2f31f84c5aada30eba2ae6bd2e.png",
          "small": "https://s3-ap-southeast-1.amazonaws.com/media.testpress.in/i/63b181a83d8c4e198309cacb110bac35.png"
        }
      ],
      "start_date": "2.25-01-01T00:00:00+05:30",
      "end_date": "2021-12-31T00:00:00+05:30",
      "categories": [
        "TNPSC"
      ],
      "types": [
        "E-books",
        "Exams"
      ],
      "exams_count": 1,
      "notes_count": 0,
      "price": "1.00"
    }
  ]
}
```