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
<iframe width='560' height='315' src='https://lms.testpress.in/embed/cnwKtQwNmbG' title='DDE video 12' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>

</body>
</html>
```