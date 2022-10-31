---
sidebar_position: 2
---

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