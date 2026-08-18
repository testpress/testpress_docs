---
sidebar_position: 4.5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Stats

The Stats API provides a high-level summary of the authenticated student's available and attempted learning activities.

## Get Current Student Statistics

This endpoint retrieves high-level learning statistics for the authenticated student. It summarizes available and attempted exams, videos, video conferences, and live streams, and includes any published student report cards.

### HTTP Request

`GET /api/v2.5/me/stats/`

### Authentication

Include the student's JWT in the `Authorization` header. The endpoint derives the student from the authenticated request, so no user ID is required.

<Tabs>
<TabItem value="stats-curl" label="cURL">

```bash
curl --request GET \
  --url 'https://lmsdemo.testpress.in/api/v2.5/me/stats/' \
  --header 'authorization: JWT your_student_jwt' \
  --header 'cache-control: no-cache'
```
</TabItem>
<TabItem value="stats-ruby" label="Ruby">

```ruby
require 'uri'
require 'net/http'

url = URI('https://lmsdemo.testpress.in/api/v2.5/me/stats/')
request = Net::HTTP::Get.new(url)
request['authorization'] = 'JWT your_student_jwt'
request['cache-control'] = 'no-cache'

response = Net::HTTP.start(url.hostname, url.port, use_ssl: true) do |http|
  http.request(request)
end

puts response.read_body
```

</TabItem>
<TabItem value="stats-python" label="Python">

```python
import requests

url = "https://lmsdemo.testpress.in/api/v2.5/me/stats/"
headers = {
    "authorization": "JWT your_student_jwt",
    "cache-control": "no-cache",
}

response = requests.get(url, headers=headers)
print(response.json())
```

</TabItem>
</Tabs>

### Response Fields

| Field | Type | Description |
| ----- | ---- | ----------- |
| total_exams | integer | Number of distinct exams currently available to the student or previously attempted by the student. Future and unpublished exams are not counted as available. |
| total_videos | integer | Number of distinct video chapter contents currently available or previously attempted. |
| total_video_conferences | integer | Number of distinct video-conference chapter contents currently available or previously attended. |
| total_live_streams | integer | Number of distinct live-stream chapter contents currently available or previously attended. |
| exams_attempted | integer | Number of distinct exams with a completed, did-not-finish, or evaluation-completed attempt. Running attempts are not included. |
| videos_watched | integer | Number of distinct video chapter contents with an attempt. A partially watched video is included. |
| video_conferences_attended | integer | Number of distinct video-conference chapter contents with an attempt. Multiple attempts for the same content count once. |
| live_streams_attended | integer | Number of distinct live-stream chapter contents with an attempt. Multiple attempts for the same content count once. |
| student_report | object | Contains published report cards for the student. `reports` is empty when none are available. |

Availability is based on the student's assigned batches, chapter-content assignments, and public courses or exams. Content scheduled for the future is not included in the available totals.

### Response

```json
{
  "total_videos": 24,
  "total_exams": 10,
  "total_video_conferences": 6,
  "total_live_streams": 4,
  "exams_attempted": 7,
  "videos_watched": 15,
  "video_conferences_attended": 3,
  "live_streams_attended": 2,
  "student_report": {
    "reports": [
      {
        "report_title": "Term 1 Report",
        "total_score": 420,
        "total_min_range": 0,
        "total_max_range": 500,
        "groups": [
          {
            "name": "Mathematics",
            "min_score": 0,
            "max_score": 100,
            "average_score": 84
          }
        ]
      }
    ]
  }
}
```
