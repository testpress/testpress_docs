---
sidebar_position: 1
---

# Getting Started

This SDK enables you to securely stream DRM-protected videos through your Android app.


## Adding dependency
Put this aar [file](https://testpress.s3.ap-southeast-1.amazonaws.com/player.aar) in your libs directory and add a directory repository.

```
repositories {
  mavenCentral()
  flatDir {
    dirs 'libs'
  }
}
```

Then reference the library in the dependency section:

``` groovy
dependencies {
    implementation 'com.tpstream:player@aar'
}
```



## Integrating player fragment
Drop a TpStreamPlayerFragment into your activity layout with an id. This is the fastest and easiest way to integrate the player into your application. TpStreamPlayerFragment includes a prebuilt UI for the player with ample features and functionality.

``` xml
<androidx.fragment.app.FragmentContainerView
    android:id="@+id/tpstream_player_fragment"
    android:name="com.tpstream.player.TpStreamPlayerFragment"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:keepScreenOn="true"
    tools:layout="@layout/fragment_tp_stream_player" />
```
and receive its instance in your activity using findFragmentbyId()

``` kotlin
playerFragment = supportFragmentManager.findFragmentById(R.id.tpstream_player_fragment) as TpStreamPlayerFragment
```


## Initializing Player And Starting Playback

You can set listener class with onInitializationSuccess method and receive the player in the onInitializationSuccess callback.

```java
playerFragment.setOnInitializationListener(object: InitializationListener {
    override fun onInitializationSuccess(player: TpStreamPlayer) {
        Log.i(TAG, "onInitializationSuccess");
        this.player = player
    }
})
```

Once you have a player, you can start loading media onto it for playback. You'll need a TpInitParams object to specify which media to load along with your playback preferences.

A TpInitParams object needs videoId, [accessToken](../../authentication.md) and orgCode.

``` java
val parameters = TpInitParams.Builder()
    .setVideoId(videoId)
    .setAccessToken(accessToken)
    .setOrgCode(orgCode)
    .build()
player.load(parameters)
player.setPlayWhenReady(true)
```


Final code will be like this
```java
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_player)
    playerFragment =
        supportFragmentManager.findFragmentById(R.id.tpstream_player_fragment) asTpStreamPlayerFragment
    playerFragment.setOnInitializationListener(object: InitializationListener {
        override fun onInitializationSuccess(player: TpStreamPlayer) {
            val parameters = TpInitParams.Builder()
                .setVideoId(videoId)
                .setAccessToken(accessToken)
                .setOrgCode(orgCode)
                .build()
            player.load(parameters)
            player.setPlayWhenReady(true)
        }
    });
}
```