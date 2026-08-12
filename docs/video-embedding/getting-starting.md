---
sidebar_position: 1
---

# Getting started

For any video that you host with Testpress, if you want you use it somewhere else, you have to embed it. This means that when you have generated the embed code for your video, you will be able to add the video to your website, blog, articles, or other website you’re looking forward to.

In order to allow embedding for a certain video, you will first need to follow the below steps which will guide you through the whole Video Embedding process

## Generate an embed code

Go to chapter which you have upload the video, Click on the “Copy emded code” button against the video you want to generate the Embed code for. This will copy the embed code into your clipboard

** Sample format **

```html 
<iframe width='560' height='315' src='https://<yoursiteurl>/embed/<video_id>/?access_token=<auth_token>' title='<video title>' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
```

## Embed on your site

Now you use copied iframe code in your code to embed the video. 

** Example **
```html live showLineNumbers
<html>
<body style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vh', }}>

<div>

<h2 style={{ textAlign: 'center' }}>Your site</h2>

{/* Replace this with generate embed code */}
<iframe width='560' height='315' src='https://lms.testpress.in/embed/7aBM7cOyDTi/?access_token=ef5c288a-ee85-4840-a4f3-f39d7091938f' title='Physical World, Units and Measurements' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
</div>

</body>
</html>
```

## Identifying viewers of a live stream

For a live stream, the admin portal shows how many people are watching while it is on air.

By default the player identifies a viewer with a cookie it sets on the embed page, so the count measures **devices**:

| Situation | Counted as |
| ----------- | ----------- |
| Two tabs in the same browser | 1 |
| Two different browsers on one device | 2 |
| The same person on a phone and a laptop | 2 |

Counting devices means nobody can inflate the number by opening more tabs, but it will read higher than your real audience if people watch on more than one device.

If your users are signed in on your side, pass `viewer_id` in the embed URL. The count then measures **people**, and the same user on a phone and a laptop is counted once.

```html
<iframe width='560' height='315' src='https://<yoursiteurl>/embed/<video_id>/?access_token=<auth_token>&viewer_id=<your_user_id>' title='<video title>' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
```

**Choosing a value**

| Guidance | Why |
| ----------- | ----------- |
| Use the identifier your own system already has for that user | It has to stay the same across sessions and devices, or the same person is counted more than once |
| Use an opaque ID rather than an email address or a name | The value travels in the embed URL, and URLs end up in browser history, referrer headers and server logs |
| The same ID in two organizations is never confused | The value is hashed with a secret and scoped to your organization before it is used for counting, so TPStreams does not hold the raw ID in the viewer count |

This parameter only affects the live viewer count. It has no effect on recorded videos, and it does not change playback or authorization in any way.