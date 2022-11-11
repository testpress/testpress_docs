---
sidebar_position: 1
---

# Getting Started

This SDK enables you to securely stream DRM-protected videos through your Android app.


## Adding dependency
- Download this [file](https://media.testpress.in/repository.zip).
- If you have a settings.gradle file in your project root, then you need to add the repositories in the settings.gradle inside dependencyResolutionManagement with the downloaded file path. Else, this will go in build.gradle file in project root.

```
repositories {
    // other repo, e.g. google() or mavenCentral()
    maven {
        url "C:\\Users\\Ragnar\\downloads\\repository"
    }
}
```

Then reference the library in the dependency section:

``` groovy
dependencies {
    implementation "com.testpress.player:player:1.0.0b"
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
    .setOrgCode("your_subdomain")
    .build()
player.load(parameters)
player.setPlayWhenReady(true)
```


Final code will look like this
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
                .setOrgCode("your_subdomain")
                .build()
            player.load(parameters)
            player.setPlayWhenReady(true)
        }
    });
}
```