---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Dashboard

The Dashboard API returns the data needed to build a student's home screen. It combines product discovery, banners, suggested learning content, bookmarks, course progress, recent learning activity, newly available content, and the institute leaderboard in a single request.

## Get Dashboard

This endpoint retrieves dashboard data for the authenticated student. Results that depend on course access, bookmarks, progress, or learning activity are personalized for that student.

### HTTP Request

`GET /api/v3/dashboard/`

### Query Parameters

| Parameter      | Type   | Description |
| -------------- | ------ | ----------- |
| tag             | string | Optional. Filters popular and recently added products by product tag name. |

### Response Sections

| Section                     | Description |
| --------------------------- | ----------- |
| popular_products            | Up to 10 active, published products ordered by their configured display order. |
| recently_added_products     | Up to 10 active, published products ordered by creation date. |
| banner_ads                  | Up to 10 promotional banners. |
| suggested_exams             | Up to 10 recently added exams available to the student. |
| suggested_videos            | Up to 10 recently added videos available to the student. |
| bookmarks                   | Up to 10 of the student's most recent bookmarks and their related content. |
| course_progress             | Progress counters and course details for up to 10 courses. |
| resume_learning             | Up to 10 of the student's latest incomplete content attempts, with related records. |
| completed_learning          | Up to 10 of the student's latest completed content attempts, with related records. |
| whats_new                   | Up to 10 recently started chapter contents from courses available to the student. |
| leaderboard                 | The institute's top 10 students by trophy count. |

<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl --request GET \
  --url 'https://lmsdemo.testpress.in/api/v3/dashboard/' \
  --header 'authorization: JWT your_jwt_token' \
  --header 'cache-control: no-cache'
```

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
require 'uri'
require 'net/http'

url = URI('https://lmsdemo.testpress.in/api/v3/dashboard/')
request = Net::HTTP::Get.new(url)
request['authorization'] = 'JWT your_jwt_token'
request['cache-control'] = 'no-cache'

response = Net::HTTP.start(url.hostname, url.port, use_ssl: true) do |http|
  http.request(request)
end

puts response.read_body
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://lmsdemo.testpress.in/api/v3/dashboard/"
headers = {
    "authorization": "JWT your_jwt_token",
    "cache-control": "no-cache",
}

response = requests.get(url, headers=headers)
print(response.text)
```

</TabItem>
</Tabs>

### Response

The records below are shortened to show the structure of each standard dashboard section. Arrays can be empty when no matching data is available to the student.

```json
{
  "popular_products": {
    "products": [
      {
        "id": 111,
        "title": "10th STD",
        "slug": "10th-std",
        "images": [
          {
            "original": "https://d36vpug2b5drql.cloudfront.net/i/product.jpeg",
            "medium": "https://d36vpug2b5drql.cloudfront.net/i/product-medium.jpeg",
            "small": "https://d36vpug2b5drql.cloudfront.net/i/product-small.jpeg"
          }
        ],
        "start_date": "2022-11-07T00:00:00+05:30",
        "description": "",
        "description_html": "",
        "short_description": null,
        "tag_ids": [2],
        "order": 0,
        "price": "20000.00"
      }
    ],
    "product_tags": [
      {
        "id": 2,
        "name": "Neet"
      }
    ]
  },
  "recently_added_products": {
    "products": [
      {
        "id": 549,
        "title": "Sample Product",
        "slug": "sample-product",
        "images": [
          {
            "original": null,
            "medium": null,
            "small": null
          }
        ],
        "start_date": null,
        "short_description": "A recently added product.",
        "tag_ids": [],
        "order": 1,
        "price": "1000.00"
      }
    ],
    "product_tags": []
  },
  "banner_ads": [
    {
      "id": 143,
      "image": "https://d36vpug2b5drql.cloudfront.net/institute/lmsdemo/banners/banner.jpg",
      "url": "https://lmsdemo.testpress.in/courses/",
      "image_medium": "https://d36vpug2b5drql.cloudfront.net/institute/lmsdemo/banners/banner-medium.jpeg",
      "image_small": "https://d36vpug2b5drql.cloudfront.net/institute/lmsdemo/banners/banner-small.jpeg"
    }
  ],
  "suggested_exams": [
    {
      "id": 3239,
      "slug": "sample-exam",
      "title": "Sample Exam",
      "description": "",
      "start_date": "2026-08-13T17:48:50+05:30",
      "end_date": null,
      "duration": "0:30:00",
      "number_of_questions": 20,
      "mark_per_question": "1.00",
      "negative_marks": "0.00",
      "allow_retake": true,
      "show_answers": true,
      "chapter_content_id": 10615,
      "course_id": 1806,
      "free_preview": false,
      "average_rating": null
    }
  ],
  "suggested_videos": [
    {
      "id": 3557,
      "title": "Introduction.mp4",
      "url": "",
      "description": "",
      "duration": "0:15:00",
      "embed_code": "",
      "required_watch_percentage": 80,
      "required_watch_duration": "720.0000",
      "chapter_content_id": 10639,
      "course_id": 1806,
      "free_preview": false,
      "average_rating": null
    }
  ],
  "bookmarks": {
    "bookmarks": [
      {
        "id": 3467,
        "folder": "Revision",
        "content_type": "chapter_content",
        "bookmark_type": "Tagged",
        "object_id": 6895,
        "created": "2025-03-19T21:21:37.613287+05:30",
        "modified": "2025-03-19T21:21:37.613287+05:30",
        "timestamp": "0:00:00",
        "page_number": 0,
        "preview_text": null
      }
    ],
    "chapter_contents": [
      {
        "id": 6895,
        "title": "Live Class",
        "course_id": 1057,
        "content_type": "VideoConference",
        "free_preview": false,
        "start": "2025-03-19T15:47:27.051203+05:30"
      }
    ],
    "questions": [],
    "posts": [],
    "forum_threads": [],
    "user_selected_answers": []
  },
  "course_progress": {
    "progress": [
      {
        "id": 30317,
        "user": 1639,
        "course_id": 1339,
        "total_video_attempts": 1,
        "total_unique_video_attempts": 1,
        "total_exam_attempts": 0,
        "total_unique_exam_attempts": 0,
        "video_watched_duration": "0.0000",
        "total_unique_attempts": 1
      }
    ],
    "courses": [
      {
        "id": 1339,
        "title": "Sample Course",
        "image": "https://d36vpug2b5drql.cloudfront.net/static/courses/general/course.png",
        "description": "",
        "slug": "sample-course",
        "exams_count": 0,
        "videos_count": 1,
        "attachments_count": 0,
        "html_contents_count": 0
      }
    ]
  },
  "resume_learning": {
    "content_attempts": [
      {
        "id": 105236,
        "user_id": 1639,
        "course_id": 1414,
        "chapter_id": 2944,
        "chapter_content_id": 8791,
        "content_type": "assessment",
        "state": "Started",
        "remaining_time": "1171.627827",
        "created": "2026-02-10T18:20:53.432033+05:30",
        "completed_on": null
      }
    ],
    "users": [{ "id": 1639, "username": "student" }],
    "user_videos": [],
    "user_exams": [{ "id": 95537, "exam_id": 2841, "user_id": 1639 }],
    "courses": [{ "id": 1414, "title": "Sample Course", "slug": "sample-course" }],
    "chapters": [{ "id": 2944, "name": "Sample Chapter", "course_id": 1414 }],
    "chapter_contents": [
      {
        "id": 8791,
        "chapter_id": 2944,
        "title": "Sample Exam",
        "course_id": 1414,
        "exam_id": 2841,
        "content_type": "Exam"
      }
    ],
    "user_video_conferences": [],
    "user_live_streams": []
  },
  "completed_learning": {
    "content_attempts": [
      {
        "id": 123561,
        "user_id": 1639,
        "course_id": 726,
        "chapter_id": 2337,
        "chapter_content_id": 7951,
        "content_type": "assessment",
        "state": "Completed",
        "created": "2026-05-20T18:38:51.531364+05:30",
        "completed_on": "2026-05-20T18:39:23.718500+05:30"
      }
    ],
    "users": [{ "id": 1639, "username": "student" }],
    "user_videos": [],
    "user_exams": [{ "id": 113489, "exam_id": 4, "user_id": 1639 }],
    "courses": [{ "id": 726, "title": "Sample Course", "slug": "sample-course" }],
    "chapters": [{ "id": 2337, "name": "Exam", "course_id": 726 }],
    "chapter_contents": [{ "id": 7951, "title": "Test 1", "content_type": "Exam" }],
    "user_video_conferences": [],
    "user_live_streams": []
  },
  "whats_new": {
    "chapter_contents": [
      {
        "id": 10640,
        "chapter_id": 3256,
        "title": "Live Class",
        "course_id": 1583,
        "content_type": "VideoConference",
        "start": "2026-08-14T11:33:00+05:30",
        "free_preview": false
      }
    ],
    "chapters": [
      {
        "id": 3256,
        "name": "Live Classes"
      }
    ]
  },
  "leaderboard": [
    {
      "id": 120026,
      "trophies_count": 9349,
      "user": {
        "display_name": "Student 1",
        "medium_image": "https://static.testpress.in/static/img/default_medium_image.png"
      }
    }
  ]
}
```
