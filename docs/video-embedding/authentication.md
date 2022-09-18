---
sidebar_position: 2
---

# Playback Authentication

Your might have noticed that we are passing query param called access_token to the iframe source url, which is required to authorize video playback. 

By default embed code that you have generated from the menu bar will contain access token which won't have expiry date. 

so use that with caution because if user have that code he can embed your video onto any page on the internet if you don't have domain restriction. even if you have domain restriction, user can view the video by embedding your video on your home page.

You can prevent the above scenarios by generating access token using API with time-to-live or set to expire after one usage on back-end server and then sent to the website front-end. In the website front-end use the generate access_token as part of the video embed code.


### Obtaining Access token using API

To generate the Access token you need to send an HTTP POST request to the API Endpoint, with the [authentication Header](../intro.md) and the optional OTP request Body.

API endpoint to retrieve OTP is https://demo.testpress.in/api/v2.5/admin/chapter_contents/replace-with-video-id/access-token


| Name                            | Type         
| -----------                     | -----------  |
| time_to_live                    | integer      | 
| expires_after_first_usage       | boolean      | 
| annotations                     | json         | 


For valid requests the API server returns a JSON:

```
{
    "expires_after_first_usage": true,
    "code": "ea806eb5-4576-4bef-8489-204e78115d5a",
    "status": "Active",
    "valid_until": "2022-08-29T12:43:11.288874Z",
    "annotations":[]
}
```


### Time-to-live for token Validity

By default the Access token validity is set to infinity. You can create shorter lived URLs by passing time_to_live parameter. This value is to be set in seconds.

The time_to_live value is relevant when there is a time-gap between the website backend requesting the access token, and the video player loading on client-side. Such a scenario is relevant for users watching videos on very slow connections. We recommend a minimum time_to_live of 1 minute. It is unrealistic for any user to be waiting for more than 1 minute for video player load. Please note that a new access token is generated when a page is refreshed.

you can create a static video URL by not passing time_to_live, that you may use as part of your home page and for non-premium content.

This code below sets the time_to_live to 5 minutes.

```
{
  "time_to_live": 300
}
```


### Expire After one usage

By passing true for expires_after_first_usage will make the access token to expire immediately after first usage, by this way to you can prevent the users from sharing and embedding the video into your site before expire time.  

This code below sets the access_token to expire after usage.
```
{
  "expires_after_first_usage": true
}
```


### Add Watermark

To watermark a video, you need to pass a JSON string as annotation code. The JSON string would contain all the information about the watermark.

Here is a sample JSON string that adds a moving (dynamic) watermark and a static watermark.

```js
{
	"annotations": [{
			'type': 'dynamic',
			'text': 'Moving Text',
			'opacity': '0.8',
			'color': '#FF0000',
			'size': '6',
			'interval': '5000'
		},
		{
			'type': 'static',
			'text': 'Static Text',
			'opacity': '0.5',
			'x': '10',
			'y': '100',
			'color': '#FF0000',
			'size': '6'
		}
	]
}
```

Please refer to this [doc](./watermarking.md) for details on watermarking.

### View Access token 

Make get request to the below API with your video id and access token code to get the access token details

**GET : **https://demo.testpress.in/api/v2.5/admin/chapter_contents/video-id/access-token/your_access_token_code/


**Response**
```js
{
    "expires_after_first_usage": false,
    "code": "your_access_token_code",
    "status": "Active",
    "valid_until": "2022-08-30T14:24:23.835382Z",
    "annotations":[]
}
```


### Update Access token 

**PUT : **https://demo.testpress.in/api/v2.5/admin/chapter_contents/video-id/access-token/your_access_token_code/

This code below updates the access_token time_to_live.

```js
{
    time_to_live: 300
}
```

**Response**
```js
{
    "expires_after_first_usage": false,
    "code": "your_access_token_code",
    "status": "Active",
    "valid_until": "2022-08-30T14:24:23.835382Z",
    "annotations":[]
}
```

