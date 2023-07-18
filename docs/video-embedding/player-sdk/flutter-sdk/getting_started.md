---
sidebar_position: 3
---

# Getting Started

To use our Flutter player SDK, add [`tpstreams_player_sdk`](https://pub.dev/packages/tpstreams_player_sdk) as a dependency in your [pubspec.yaml](https://docs.flutter.dev/packages-and-plugins/using-packages) file.


### Initializing TPStreamsSDK 

First, imported our package:

```dart
import 'package:tpstreams_player_sdk/tpstreams_player_sdk.dart';
```

Next, you can initialize the TPStreamsSDK with your subdomain and provider.

```
TPStreamsSDK.initialize(provider: PROVIDER.testpress, orgCode: "YOUR_SUBDOMAIN");
```

Make sure to replace "YOUR_SUBDOMAIN" with your actual subdomain. This code snippet should be placed at the entry point of your application (usually in the main function) to ensure proper initialization of the TPStreamsSDK.


### Play a Video 

To play a video using the TPStreams Player SDK, use the `TPStreamPlayer` widget:

```dart
TPStreamPlayer(assetId: 'VIDEO_ID', accessToken: 'ACCESS_TOKEN')
```

Replace `VIDEO_ID` and `ACCESS_TOKEN` with the actual video ID and accessToken of the video you wish to play.
After executing your Flutter application, the TPStreams player will display the video specified by the provided assetId and accessToken.


For a practical implementation and usage of tpstreams_player_sdk, refer to our [Sample Flutter App](https://github.com/testpress/sample_flutter_app/tree/testpress).