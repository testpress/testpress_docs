---
sidebar_position: 7
---

# Courses

<details>
<summary><b> GET</b> https://lmsdemo.testpress.in/api/v2.5/admin/courses/ <br/> <b>Get Courses</b></summary>

This endpoint allows you to get the list of courses.

### Parameters

#### Query

<table>
  <tr>
    <td>q</td>
    <td>string</td>
    <td>The API will do its best to find a course matching the provided search term</td>
  </tr>
</table>

#### Header 

<table>
  <tr>
    <td>authorization</td>
    <td>string</td>
    <td>Authentication token to track down who is accessing the API. E.g. JWT Token</td>
  </tr>
</table>

#### Responses

<details >
<summary> 
<b>200</b>    Courses Successfully retrieved 
  </summary>
<pre>

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
</pre>
</details>

</details>

<details>

<summary> <b>GET</b> https://lmsdemo.testpress.in/api/v2.5/courses/:id/ <br />
<b>Get Course</b></summary>

This endpoint allows you to get a course

### Parameters

#### Path

<table>
  <tr>
    <td>Id</td>
    <td>string</td>
    <td>ID of the course to be retrieved</td>
  </tr>
</table>

#### Header 

<table>
  <tr>
    <td>Authorization</td>
    <td>string</td>
    <td>Authentication token to track down who is accessing the API. E.g. JWT Token</td>
  </tr>
</table>

<details >
<summary> 
<b>200</b>
  </summary>
<pre>

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
}
</pre>
</details>

<details >
<summary> 
<b>404</b>
  </summary>
<pre>

{
  "detail": "Not found"
}
</pre>
</details>

</details>

<details>
<summary><b> GET</b> https://lmsdemo.testpress.in/api/v2.5/courses/:id/chapters/ <br/> <b>Get Course's Chapters </b></summary>

This endpoint allows you to get the list of course's chapters.

### Parameters

#### Query

<table>
  <tr>
    <td>id</td>
    <td>string</td>
    <td>ID of the course whose chapters are to be retrieved</td>
  </tr>
</table>

#### Header 

<table>
  <tr>
    <td>Authorization</td>
    <td>string</td>
    <td>Authentication token to track down who is accessing the API. E.g. JWT Token</td>
  </tr>
</table>

#### Responses

<details >
<summary> 
<b>200</b>   
  </summary>
<pre>

{
  "count": 10,
  "next": null,
  "previous": null,
  "per_page": 200,
  "results": [
    {
      "id": 509,
      "order": 0,
      "name": "Finance ",
      "description": "",
      "image": "https://static.testpress.in/courses/general/1442849556_calculator.png",
      "slug": "finance-2",
      "created": "2020-12-09T11:06:35.563106Z",
      "modified": "2020-12-09T11:18:41.743806Z",
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "parent_url": null,
      "required_trophy_count": 0
    },
    {
      "id": 511,
      "order": 0,
      "name": "Lesson 1",
      "description": "",
      "image": "https://static.testpress.in/courses/Numbers/1488844765_one_number_count_chart.png",
      "slug": "lesson-1-2",
      "created": "2020-12-09T11:07:12.440144Z",
      "modified": "2020-12-09T11:07:12.462447Z",
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "parent_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/509/",
      "required_trophy_count": 0
    },
    {
      "id": 533,
      "order": 0,
      "name": "Lesson 1",
      "description": "",
      "image": "https://static.testpress.in/courses/Numbers/1488844765_one_number_count_chart.png",
      "slug": "lesson-1-10",
      "created": "2020-12-09T11:40:09.295158Z",
      "modified": "2020-12-09T11:40:09.310906Z",
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "parent_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/532/",
      "required_trophy_count": 0
    },
    {
      "id": 530,
      "order": 1,
      "name": "Lesson 2",
      "description": "",
      "image": "https://static.testpress.in/courses/Numbers/1488844789_two_number_count_chart.png",
      "slug": "lesson-1-8",
      "created": "2020-12-09T11:39:24.151887Z",
      "modified": "2020-12-09T11:39:41.719987Z",
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "parent_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/509/",
      "required_trophy_count": 0
    },
    {
      "id": 532,
      "order": 1,
      "name": "Human Resource",
      "description": "",
      "image": "https://static.testpress.in/courses/general/1442850107_Management_Team.png",
      "slug": "finance-6",
      "created": "2020-12-09T11:40:09.275242Z",
      "modified": "2020-12-09T11:40:28.970609Z",
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "parent_url": null,
      "required_trophy_count": 0
    },
    {
      "id": 534,
      "order": 1,
      "name": "Lesson 2",
      "description": "",
      "image": "https://static.testpress.in/courses/Numbers/1488844789_two_number_count_chart.png",
      "slug": "lesson-2-5",
      "created": "2020-12-09T11:40:09.586707Z",
      "modified": "2020-12-09T11:40:09.597308Z",
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "parent_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/532/",
      "required_trophy_count": 0
    },
    {
      "id": 531,
      "order": 2,
      "name": "Lesson 3",
      "description": "",
      "image": "https://static.testpress.in/courses/Numbers/1488844816_three_number_count_chart.png",
      "slug": "lesson-1-9",
      "created": "2020-12-09T11:39:29.044231Z",
      "modified": "2020-12-09T11:39:52.351762Z",
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "parent_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/509/",
      "required_trophy_count": 0
    },
    {
      "id": 535,
      "order": 2,
      "name": "Lesson 3",
      "description": "",
      "image": "https://static.testpress.in/courses/Numbers/1488844816_three_number_count_chart.png",
      "slug": "lesson-3-3",
      "created": "2020-12-09T11:40:09.860032Z",
      "modified": "2020-12-09T11:40:09.868160Z",
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "parent_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/532/",
      "required_trophy_count": 0
    },
    {
      "id": 514,
      "order": 3,
      "name": "Live Class",
      "description": "",
      "image": "https://static.testpress.in/institute/lmsdemo/custom_icons/b71b9758467e482dbb0ce5014a80427c.svg",
      "slug": "live-class-3",
      "created": "2020-12-09T11:18:41.717462Z",
      "modified": "2020-12-10T10:15:06.949473Z",
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "parent_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/509/",
      "required_trophy_count": 0
    },
    {
      "id": 585,
      "order": 3,
      "name": "Live Class",
      "description": "",
      "image": "https://static.testpress.in/institute/lmsdemo/custom_icons/b71b9758467e482dbb0ce5014a80427c.svg",
      "slug": "live-class-16",
      "created": "2020-12-10T10:15:41.016452Z",
      "modified": "2020-12-10T10:15:41.041095Z",
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "parent_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/532/",
      "required_trophy_count": 0
    }
  ]
}
</pre>
</details>

</details>

<details>
<summary><b> GET</b> https://lmsdemo.testpress.in/api/v2.5/courses/:id/contents/<br/> <b>Get Course's Contents </b></summary>

This endpoint allows you to get the list of course's contents.

### Parameters

#### Query

<table>
  <tr>
    <td>id</td>
    <td>string</td>
    <td>ID of the course whose contents are to be retrieved</td>
  </tr>
</table>

#### Header 

<table>
  <tr>
    <td>Authorization</td>
    <td>string</td>
    <td>Authentication token to track down who is accessing the API. E.g. JWT Token</td>
  </tr>
</table>

#### Responses

<details >
<summary> 
<b>200</b>   
  </summary>
<pre>

{
  "count": 33,
  "next": null,
  "previous": null,
  "per_page": 200,
  "results": [
    {
      "id": 1138,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1138/",
      "title": "Basics",
      "content_type": "Video",
      "order": 0,
      "description": "",
      "created": "2020-12-09T11:39:24.180287Z",
      "modified": "2020-12-09T11:39:24.187979Z",
      "start": "2020-12-09T11:08:20Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": "https://static.testpress.in/institute/lmsdemo/chapter_contents/9bf1b833dbe94d319e28b98e0dba82cf.png",
      "cover_image_medium": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1085/f8f26fdfd33e438f935659bd3232a0cf.png",
      "cover_image_small": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1085/54f6f153f69b47288398b271652ffa09.png"
    },
    {
      "id": 1153,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1153/",
      "title": "Basics",
      "content_type": "Video",
      "order": 0,
      "description": "",
      "created": "2020-12-09T11:40:09.606829Z",
      "modified": "2020-12-09T11:40:09.616484Z",
      "start": "2020-12-09T11:08:20Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": "https://static.testpress.in/institute/lmsdemo/chapter_contents/9bf1b833dbe94d319e28b98e0dba82cf.png",
      "cover_image_medium": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1085/f8f26fdfd33e438f935659bd3232a0cf.png",
      "cover_image_small": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1085/54f6f153f69b47288398b271652ffa09.png"
    },
    {
      "id": 1344,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1344/",
      "title": "Finance- Live sessions",
      "content_type": "VideoConference",
      "order": 0,
      "description": "",
      "created": "2020-12-10T10:15:41.049637Z",
      "modified": "2020-12-10T10:15:41.055610Z",
      "start": "2020-12-10T10:14:41.067153Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1087/0e26d71129a1422dba09ab769f32f388.png",
      "cover_image_medium": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1087/f9cd051fb3f7475d8c0a911f8f0ef08d.png",
      "cover_image_small": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1087/9c228486a7584b3da17fc5f46c4a83b5.png"
    },
    {
      "id": 1158,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1158/",
      "title": "Basics",
      "content_type": "Video",
      "order": 0,
      "description": "",
      "created": "2020-12-09T11:40:09.878026Z",
      "modified": "2020-12-09T11:40:09.887933Z",
      "start": "2020-12-09T11:08:20Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": "https://static.testpress.in/institute/lmsdemo/chapter_contents/9bf1b833dbe94d319e28b98e0dba82cf.png",
      "cover_image_medium": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1085/f8f26fdfd33e438f935659bd3232a0cf.png",
      "cover_image_small": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1085/54f6f153f69b47288398b271652ffa09.png"
    },
    {
      "id": 1085,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1085/",
      "title": "Basics",
      "content_type": "Video",
      "order": 0,
      "description": "",
      "created": "2020-12-09T11:15:20.410548Z",
      "modified": "2020-12-09T11:23:51.941926Z",
      "start": "2020-12-09T11:08:20Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1085/224da1a7811e453caee9716cce72932f.jpg",
      "cover_image_medium": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1085/12e86e36818949d8a05703f03f91d99e.jpeg",
      "cover_image_small": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1085/238a8a0420ed4527b75cb28bdfcaa08a.jpeg"
    },
    {
      "id": 1143,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1143/",
      "title": "Basics",
      "content_type": "Video",
      "order": 0,
      "description": "",
      "created": "2020-12-09T11:39:29.074739Z",
      "modified": "2020-12-09T11:39:29.084157Z",
      "start": "2020-12-09T11:08:20Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": "https://static.testpress.in/institute/lmsdemo/chapter_contents/9bf1b833dbe94d319e28b98e0dba82cf.png",
      "cover_image_medium": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1085/f8f26fdfd33e438f935659bd3232a0cf.png",
      "cover_image_small": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1085/54f6f153f69b47288398b271652ffa09.png"
    },
    {
      "id": 1148,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1148/",
      "title": "Basics",
      "content_type": "Video",
      "order": 0,
      "description": "",
      "created": "2020-12-09T11:40:09.323244Z",
      "modified": "2020-12-09T11:40:09.332753Z",
      "start": "2020-12-09T11:08:20Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": "https://static.testpress.in/institute/lmsdemo/chapter_contents/9bf1b833dbe94d319e28b98e0dba82cf.png",
      "cover_image_medium": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1085/f8f26fdfd33e438f935659bd3232a0cf.png",
      "cover_image_small": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1085/54f6f153f69b47288398b271652ffa09.png"
    },
    {
      "id": 1087,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1087/",
      "title": "Finance- Live sessions",
      "content_type": "VideoConference",
      "order": 0,
      "description": "",
      "created": "2020-12-09T11:19:17.975217Z",
      "modified": "2020-12-10T12:12:09.370310Z",
      "start": "2020-12-10T12:12:08.323185Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1087/0e26d71129a1422dba09ab769f32f388.png",
      "cover_image_medium": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1087/ff2ae0544ab6471fa07c36c5e541bfd2.png",
      "cover_image_small": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1087/447bae0613fd4fb6801a8c4dba9ba9d5.png"
    },
    {
      "id": 1159,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1159/",
      "title": "1. Introduction, Financial Terms and Concepts",
      "content_type": "Video",
      "order": 1,
      "description": "MIT 18.S096 Topics in Mathematics with Applications in Finance, Fall 2013\nView the complete course: http://ocw.mit.edu/18-S096F13\nInstructor: Peter Kempthorne, Choongbum Lee, Vasily Strela, Jake Xia\n\nIn the first lecture of this course, the instructors introduce key terms and concepts related to financial products, markets, and quantitative analysis.\n\nLicense: Creative Commons BY-NC-SA\nMore information at http://ocw.mit.edu/terms\nMore courses at http://ocw.mit.edu",
      "created": "2020-12-09T11:40:09.899790Z",
      "modified": "2020-12-09T11:40:09.907219Z",
      "start": "2020-12-09T11:17:41Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": "https://static.testpress.in/institute/lmsdemo/chapter_contents/9a35980f6246454c8084d9c9a5346e93.png",
      "cover_image_medium": "https://static.testpress.in/institute/lmsdemo/chapter_contents/e66e34e6be744256b9db27480fbbf0c8.png",
      "cover_image_small": "https://static.testpress.in/institute/lmsdemo/chapter_contents/826e08b4528a45e58c43e4d660cceb45.png"
    },
    {
      "id": 1144,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1144/",
      "title": "1. Introduction, Financial Terms and Concepts",
      "content_type": "Video",
      "order": 1,
      "description": "MIT 18.S096 Topics in Mathematics with Applications in Finance, Fall 2013\nView the complete course: http://ocw.mit.edu/18-S096F13\nInstructor: Peter Kempthorne, Choongbum Lee, Vasily Strela, Jake Xia\n\nIn the first lecture of this course, the instructors introduce key terms and concepts related to financial products, markets, and quantitative analysis.\n\nLicense: Creative Commons BY-NC-SA\nMore information at http://ocw.mit.edu/terms\nMore courses at http://ocw.mit.edu",
      "created": "2020-12-09T11:39:29.098851Z",
      "modified": "2020-12-09T11:39:29.106562Z",
      "start": "2020-12-09T11:17:41Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": "https://static.testpress.in/institute/lmsdemo/chapter_contents/9a35980f6246454c8084d9c9a5346e93.png",
      "cover_image_medium": "https://static.testpress.in/institute/lmsdemo/chapter_contents/e66e34e6be744256b9db27480fbbf0c8.png",
      "cover_image_small": "https://static.testpress.in/institute/lmsdemo/chapter_contents/826e08b4528a45e58c43e4d660cceb45.png"
    },
    {
      "id": 1139,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1139/",
      "title": "1. Introduction, Financial Terms and Concepts",
      "content_type": "Video",
      "order": 1,
      "description": "MIT 18.S096 Topics in Mathematics with Applications in Finance, Fall 2013\nView the complete course: http://ocw.mit.edu/18-S096F13\nInstructor: Peter Kempthorne, Choongbum Lee, Vasily Strela, Jake Xia\n\nIn the first lecture of this course, the instructors introduce key terms and concepts related to financial products, markets, and quantitative analysis.\n\nLicense: Creative Commons BY-NC-SA\nMore information at http://ocw.mit.edu/terms\nMore courses at http://ocw.mit.edu",
      "created": "2020-12-09T11:39:24.198765Z",
      "modified": "2020-12-09T11:39:24.205060Z",
      "start": "2020-12-09T11:17:41Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": "https://static.testpress.in/institute/lmsdemo/chapter_contents/9a35980f6246454c8084d9c9a5346e93.png",
      "cover_image_medium": "https://static.testpress.in/institute/lmsdemo/chapter_contents/e66e34e6be744256b9db27480fbbf0c8.png",
      "cover_image_small": "https://static.testpress.in/institute/lmsdemo/chapter_contents/826e08b4528a45e58c43e4d660cceb45.png"
    },
    {
      "id": 1345,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1345/",
      "title": "Live Class",
      "content_type": "VideoConference",
      "order": 1,
      "description": "",
      "created": "2020-12-10T10:18:00.345813Z",
      "modified": "2020-12-10T10:18:02.710258Z",
      "start": "2020-12-10T10:18:00.346168Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": "https://static.testpress.in/institute/lmsdemo/chapter_contents/aca6a4f028e24d17813331ccde9c9ab9.png",
      "cover_image_medium": "https://static.testpress.in/institute/lmsdemo/chapter_contents/a2279f0a7e7a41b2a166a6ab481a81a3.png",
      "cover_image_small": "https://static.testpress.in/institute/lmsdemo/chapter_contents/40571e0787a74d2cb20cc1add5bd7573.png"
    },
    {
      "id": 1086,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1086/",
      "title": "1. Introduction, Financial Terms and Concepts",
      "content_type": "Video",
      "order": 1,
      "description": "MIT 18.S096 Topics in Mathematics with Applications in Finance, Fall 2013\r\nView the complete course: http://ocw.mit.edu/18-S096F13\r\nInstructor: Peter Kempthorne, Choongbum Lee, Vasily Strela, Jake Xia\r\n\r\nIn the first lecture of this course, the instructors introduce key terms and concepts related to financial products, markets, and quantitative analysis.\r\n\r\nLicense: Creative Commons BY-NC-SA\r\nMore information at http://ocw.mit.edu/terms\r\nMore courses at http://ocw.mit.edu",
      "created": "2020-12-09T11:18:08.881802Z",
      "modified": "2020-12-09T11:23:51.896026Z",
      "start": "2020-12-09T11:17:41Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": null,
      "cover_image_medium": null,
      "cover_image_small": null
    },
    {
      "id": 1154,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1154/",
      "title": "1. Introduction, Financial Terms and Concepts",
      "content_type": "Video",
      "order": 1,
      "description": "MIT 18.S096 Topics in Mathematics with Applications in Finance, Fall 2013\nView the complete course: http://ocw.mit.edu/18-S096F13\nInstructor: Peter Kempthorne, Choongbum Lee, Vasily Strela, Jake Xia\n\nIn the first lecture of this course, the instructors introduce key terms and concepts related to financial products, markets, and quantitative analysis.\n\nLicense: Creative Commons BY-NC-SA\nMore information at http://ocw.mit.edu/terms\nMore courses at http://ocw.mit.edu",
      "created": "2020-12-09T11:40:09.628177Z",
      "modified": "2020-12-09T11:40:09.635726Z",
      "start": "2020-12-09T11:17:41Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": "https://static.testpress.in/institute/lmsdemo/chapter_contents/9a35980f6246454c8084d9c9a5346e93.png",
      "cover_image_medium": "https://static.testpress.in/institute/lmsdemo/chapter_contents/e66e34e6be744256b9db27480fbbf0c8.png",
      "cover_image_small": "https://static.testpress.in/institute/lmsdemo/chapter_contents/826e08b4528a45e58c43e4d660cceb45.png"
    },
    {
      "id": 1149,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1149/",
      "title": "1. Introduction, Financial Terms and Concepts",
      "content_type": "Video",
      "order": 1,
      "description": "MIT 18.S096 Topics in Mathematics with Applications in Finance, Fall 2013\nView the complete course: http://ocw.mit.edu/18-S096F13\nInstructor: Peter Kempthorne, Choongbum Lee, Vasily Strela, Jake Xia\n\nIn the first lecture of this course, the instructors introduce key terms and concepts related to financial products, markets, and quantitative analysis.\n\nLicense: Creative Commons BY-NC-SA\nMore information at http://ocw.mit.edu/terms\nMore courses at http://ocw.mit.edu",
      "created": "2020-12-09T11:40:09.344451Z",
      "modified": "2020-12-09T11:40:09.352161Z",
      "start": "2020-12-09T11:17:41Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": "https://static.testpress.in/institute/lmsdemo/chapter_contents/9a35980f6246454c8084d9c9a5346e93.png",
      "cover_image_medium": "https://static.testpress.in/institute/lmsdemo/chapter_contents/e66e34e6be744256b9db27480fbbf0c8.png",
      "cover_image_small": "https://static.testpress.in/institute/lmsdemo/chapter_contents/826e08b4528a45e58c43e4d660cceb45.png"
    },
    {
      "id": 1160,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1160/",
      "title": "Basics",
      "content_type": "Attachment",
      "order": 2,
      "description": "",
      "created": "2020-12-09T11:40:09.918302Z",
      "modified": "2020-12-09T16:53:31.545730Z",
      "start": "2020-12-09T11:08:30Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": "https://static.testpress.in/institute/lmsdemo/chapter_contents/8f370c9219e3466f992425282821e648.png",
      "cover_image_medium": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1084/a5f4729bac674655a58d8509ee713634.png",
      "cover_image_small": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1084/88d50229def34cf5a0cfd0b37cfa0f35.png"
    },
    {
      "id": 1084,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1084/",
      "title": "Basics",
      "content_type": "Attachment",
      "order": 2,
      "description": "",
      "created": "2020-12-09T11:12:14.510301Z",
      "modified": "2020-12-14T12:58:36.150984Z",
      "start": "2020-12-09T11:08:30Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1084/db342c18f8ca41be8640d23faa9e6b3a.jpg",
      "cover_image_medium": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1084/b340125e6aab46109d74247709413138.jpeg",
      "cover_image_small": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1084/d920642378a844cca86820e5808bcf84.jpeg"
    },
    {
      "id": 1155,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1155/",
      "title": "Basics",
      "content_type": "Attachment",
      "order": 2,
      "description": "",
      "created": "2020-12-09T11:40:09.646190Z",
      "modified": "2020-12-09T16:53:30.859240Z",
      "start": "2020-12-09T11:08:30Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": "https://static.testpress.in/institute/lmsdemo/chapter_contents/8f370c9219e3466f992425282821e648.png",
      "cover_image_medium": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1084/a5f4729bac674655a58d8509ee713634.png",
      "cover_image_small": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1084/88d50229def34cf5a0cfd0b37cfa0f35.png"
    },
    {
      "id": 1145,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1145/",
      "title": "Basics",
      "content_type": "Attachment",
      "order": 2,
      "description": "",
      "created": "2020-12-09T11:39:29.118781Z",
      "modified": "2020-12-09T16:53:29.488260Z",
      "start": "2020-12-09T11:08:30Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": "https://static.testpress.in/institute/lmsdemo/chapter_contents/8f370c9219e3466f992425282821e648.png",
      "cover_image_medium": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1084/a5f4729bac674655a58d8509ee713634.png",
      "cover_image_small": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1084/88d50229def34cf5a0cfd0b37cfa0f35.png"
    },
    {
      "id": 1150,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1150/",
      "title": "Basics",
      "content_type": "Attachment",
      "order": 2,
      "description": "",
      "created": "2020-12-09T11:40:09.362575Z",
      "modified": "2020-12-09T16:53:30.173900Z",
      "start": "2020-12-09T11:08:30Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": "https://static.testpress.in/institute/lmsdemo/chapter_contents/8f370c9219e3466f992425282821e648.png",
      "cover_image_medium": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1084/a5f4729bac674655a58d8509ee713634.png",
      "cover_image_small": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1084/88d50229def34cf5a0cfd0b37cfa0f35.png"
    },
    {
      "id": 1140,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1140/",
      "title": "Basics",
      "content_type": "Attachment",
      "order": 2,
      "description": "",
      "created": "2020-12-09T11:39:24.214101Z",
      "modified": "2020-12-09T16:53:28.800042Z",
      "start": "2020-12-09T11:08:30Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": "https://static.testpress.in/institute/lmsdemo/chapter_contents/8f370c9219e3466f992425282821e648.png",
      "cover_image_medium": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1084/a5f4729bac674655a58d8509ee713634.png",
      "cover_image_small": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1084/88d50229def34cf5a0cfd0b37cfa0f35.png"
    },
    {
      "id": 1088,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1088/",
      "title": "Basics",
      "content_type": "Notes",
      "order": 3,
      "description": "",
      "created": "2020-12-09T11:20:16.929303Z",
      "modified": "2020-12-14T11:26:03.625962Z",
      "start": "2020-12-09T11:18:22Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": null,
      "cover_image_medium": null,
      "cover_image_small": null
    },
    {
      "id": 1161,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1161/",
      "title": "Basics",
      "content_type": "Notes",
      "order": 3,
      "description": "",
      "created": "2020-12-09T11:40:09.941093Z",
      "modified": "2020-12-09T11:40:09.964933Z",
      "start": "2020-12-09T11:18:22Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1088/86019621329b401c801792cb3c0bb49b.png",
      "cover_image_medium": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1088/b013d9c8443441a7b8db2f472c7d6d70.png",
      "cover_image_small": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1088/1e27b40350f7494fa93c3226decd9500.png"
    },
    {
      "id": 1156,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1156/",
      "title": "Basics",
      "content_type": "Notes",
      "order": 3,
      "description": "",
      "created": "2020-12-09T11:40:09.668272Z",
      "modified": "2020-12-09T11:40:09.693809Z",
      "start": "2020-12-09T11:18:22Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1088/86019621329b401c801792cb3c0bb49b.png",
      "cover_image_medium": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1088/b013d9c8443441a7b8db2f472c7d6d70.png",
      "cover_image_small": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1088/1e27b40350f7494fa93c3226decd9500.png"
    },
    {
      "id": 1151,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1151/",
      "title": "Basics",
      "content_type": "Notes",
      "order": 3,
      "description": "",
      "created": "2020-12-09T11:40:09.384883Z",
      "modified": "2020-12-09T11:40:09.411236Z",
      "start": "2020-12-09T11:18:22Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1088/86019621329b401c801792cb3c0bb49b.png",
      "cover_image_medium": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1088/b013d9c8443441a7b8db2f472c7d6d70.png",
      "cover_image_small": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1088/1e27b40350f7494fa93c3226decd9500.png"
    },
    {
      "id": 1146,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1146/",
      "title": "Basics",
      "content_type": "Notes",
      "order": 3,
      "description": "",
      "created": "2020-12-09T11:39:29.141610Z",
      "modified": "2020-12-09T11:39:29.171744Z",
      "start": "2020-12-09T11:18:22Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1088/86019621329b401c801792cb3c0bb49b.png",
      "cover_image_medium": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1088/b013d9c8443441a7b8db2f472c7d6d70.png",
      "cover_image_small": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1088/1e27b40350f7494fa93c3226decd9500.png"
    },
    {
      "id": 1141,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1141/",
      "title": "Basics",
      "content_type": "Notes",
      "order": 3,
      "description": "",
      "created": "2020-12-09T11:39:24.234346Z",
      "modified": "2020-12-09T11:39:24.264034Z",
      "start": "2020-12-09T11:18:22Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1088/86019621329b401c801792cb3c0bb49b.png",
      "cover_image_medium": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1088/b013d9c8443441a7b8db2f472c7d6d70.png",
      "cover_image_small": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1088/1e27b40350f7494fa93c3226decd9500.png"
    },
    {
      "id": 1142,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1142/",
      "title": "Exam",
      "content_type": "Exam",
      "order": 4,
      "description": "",
      "created": "2020-12-09T11:39:24.275647Z",
      "modified": "2020-12-09T11:39:24.426124Z",
      "start": "2020-12-09T11:24:02Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1089/c74b63a13ef04cf891d6c5384e3de0b1.png",
      "cover_image_medium": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1089/1bc05f47ef334f7f9105d413921c74f6.png",
      "cover_image_small": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1089/d74ad5f377974f12ba3f97961ac9a743.png"
    },
    {
      "id": 1089,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1089/",
      "title": "Exam",
      "content_type": "Exam",
      "order": 4,
      "description": "",
      "created": "2020-12-09T11:29:30.803815Z",
      "modified": "2020-12-09T11:32:50.202983Z",
      "start": "2020-12-09T11:24:02Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1089/c74b63a13ef04cf891d6c5384e3de0b1.png",
      "cover_image_medium": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1089/1bc05f47ef334f7f9105d413921c74f6.png",
      "cover_image_small": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1089/d74ad5f377974f12ba3f97961ac9a743.png"
    },
    {
      "id": 1147,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1147/",
      "title": "Exam",
      "content_type": "Exam",
      "order": 4,
      "description": "",
      "created": "2020-12-09T11:39:29.183148Z",
      "modified": "2020-12-09T11:39:29.336867Z",
      "start": "2020-12-09T11:24:02Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1089/c74b63a13ef04cf891d6c5384e3de0b1.png",
      "cover_image_medium": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1089/1bc05f47ef334f7f9105d413921c74f6.png",
      "cover_image_small": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1089/d74ad5f377974f12ba3f97961ac9a743.png"
    },
    {
      "id": 1152,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1152/",
      "title": "Exam",
      "content_type": "Exam",
      "order": 4,
      "description": "",
      "created": "2020-12-09T11:40:09.421350Z",
      "modified": "2020-12-09T11:40:09.576032Z",
      "start": "2020-12-09T11:24:02Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1089/c74b63a13ef04cf891d6c5384e3de0b1.png",
      "cover_image_medium": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1089/1bc05f47ef334f7f9105d413921c74f6.png",
      "cover_image_small": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1089/d74ad5f377974f12ba3f97961ac9a743.png"
    },
    {
      "id": 1157,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1157/",
      "title": "Exam",
      "content_type": "Exam",
      "order": 4,
      "description": "",
      "created": "2020-12-09T11:40:09.703764Z",
      "modified": "2020-12-09T11:40:09.849357Z",
      "start": "2020-12-09T11:24:02Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1089/c74b63a13ef04cf891d6c5384e3de0b1.png",
      "cover_image_medium": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1089/1bc05f47ef334f7f9105d413921c74f6.png",
      "cover_image_small": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1089/d74ad5f377974f12ba3f97961ac9a743.png"
    },
    {
      "id": 1162,
      "url": "https://lmsdemo.testpress.in/api/v2.5/admin/chapter_contents/1162/",
      "title": "Exam",
      "content_type": "Exam",
      "order": 4,
      "description": "",
      "created": "2020-12-09T11:40:09.974491Z",
      "modified": "2020-12-09T11:40:10.125625Z",
      "start": "2020-12-09T11:24:02Z",
      "end": null,
      "course_url": "https://lmsdemo.testpress.in/api/v2.5/admin/courses/278/",
      "cover_image": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1089/c74b63a13ef04cf891d6c5384e3de0b1.png",
      "cover_image_medium": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1089/1bc05f47ef334f7f9105d413921c74f6.png",
      "cover_image_small": "https://static.testpress.in/institute/lmsdemo/chapter_contents/1089/d74ad5f377974f12ba3f97961ac9a743.png"
    }
  ]
}
</pre>
</details>

</details>

<details>
<summary><b> GET</b> https://lmsdemo.testpress.in/api/v2.5/courses/:id/batches/<br/> <b>Get Course's Batches </b></summary>

### Parameters

#### Query

<table>
  <tr>
    <td>id</td>
    <td>string</td>
    <td>ID of the course whose batches are to be retrieved</td>
  </tr>
</table>

#### Header 

<table>
  <tr>
    <td>Authorization</td>
    <td>string</td>
    <td>Authentication token to track down who is accessing the API. E.g. JWT Token</td>
  </tr>
</table>

#### Responses

<details >
<summary> 
<b>200</b>   
  </summary>
<pre>

{
  "count": 2,
  "next": null,
  "previous": null,
  "per_page": 20,
  "results": [
    {
      "id": 271,
      "name": "18aeaab2bd0449829823e43d6b7c1404",
      "created": "2020-12-12T10:13:52.868314Z",
      "modified": "2020-12-12T10:13:52.870923Z",
      "is_local": false
    },
    {
      "id": 270,
      "name": "59ec99e8e3c140ebbea0da5dd9dc9762",
      "created": "2020-12-12T05:40:33.246738Z",
      "modified": "2020-12-12T05:40:33.249473Z",
      "is_local": false
    }
  ]
}
</pre>
</details>

</details>

<details>
<summary><b> POST</b> https://lmsdemo.testpress.in/api/v2.5/courses/:id/batches/<br/> <b>Add Batches to the  Course </b></summary>

### Parameters

#### Query

<table>
  <tr>
    <td>id</td>
    <td>string</td>
    <td>ID of the course which batches are to be added</td>
  </tr>
</table>

#### Header 

<table>
  <tr>
    <td>Authorization</td>
    <td>string</td>
    <td>Authentication token to track down who is accessing the API. E.g. JWT Token</td>
  </tr>
</table>

#### Body 

<table>
  <tr>
    <td>batches</td>
    <td>array</td>
    <td>An array of batch IDs e.g. [1, 2, 3]</td>
  </tr>
</table>

#### Responses

<details >
<summary> 
<b>201</b>   
  </summary>
<pre>

[
    {
        "id": 271,
        "name": "18aeaab2bd0449829823e43d6b7c1404",
        "created": "2020-12-12T10:13:52.868314Z",
        "modified": "2020-12-12T10:13:52.870923Z",
        "is_local": false
    },
    {
        "id": 270,
        "name": "59ec99e8e3c140ebbea0da5dd9dc9762",
        "created": "2020-12-12T05:40:33.246738Z",
        "modified": "2020-12-12T05:40:33.249473Z",
        "is_local": false
    },
    {
        "id": 266,
        "name": "testing",
        "created": "2020-12-08T09:52:52.409952Z",
        "modified": "2020-12-08T09:52:52.415339Z",
        "is_local": false
    }
]
</pre>
</details>

</details>

<details>
<summary><b> DELETE</b> https://lmsdemo.testpress.in/api/v2.5/courses/:id/batches/<br/> <b>Remove Batches from the  Course </b></summary>

### Parameters

#### Query

<table>
  <tr>
    <td>id</td>
    <td>string</td>
    <td>ID of the course which batches are to be removed</td>
  </tr>
</table>

#### Header 

<table>
  <tr>
    <td>Authorization</td>
    <td>string</td>
    <td>Authentication token to track down who is accessing the API. E.g. JWT Token</td>
  </tr>
</table>

#### Body 

<table>
  <tr>
    <td>batches</td>
    <td>array</td>
    <td>An array of batch IDs e.g. [1, 2, 3]</td>
  </tr>
</table>

#### Responses

<details >
<summary> 
<b>204</b>   
  </summary>
<pre>


</pre>
</details>

</details>