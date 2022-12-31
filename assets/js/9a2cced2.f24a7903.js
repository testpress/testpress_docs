"use strict";(self.webpackChunktestpress_docs=self.webpackChunktestpress_docs||[]).push([[703],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=i(a),k=r,h=d["".concat(s,".").concat(k)]||d[k]||m[k]||l;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8972:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:3},o="Player Methods",p={unversionedId:"video-embedding/player-sdk/javascript-sdk/player-methods",id:"video-embedding/player-sdk/javascript-sdk/player-methods",title:"Player Methods",description:"About player methods",source:"@site/docs/video-embedding/player-sdk/javascript-sdk/player-methods.md",sourceDirName:"video-embedding/player-sdk/javascript-sdk",slug:"/video-embedding/player-sdk/javascript-sdk/player-methods",permalink:"/docs/video-embedding/player-sdk/javascript-sdk/player-methods",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"videoEmbeddingSidebar",previous:{title:"Using Player SDK",permalink:"/docs/video-embedding/player-sdk/javascript-sdk/using-player-sdk"},next:{title:"Player Events",permalink:"/docs/video-embedding/player-sdk/javascript-sdk/player-events"}},s={},i=[{value:"About player methods",id:"about-player-methods",level:3},{value:"Get the playback position of a video",id:"get-the-playback-position-of-a-video",level:3},{value:"Get the loop state of a player",id:"get-the-loop-state-of-a-player",level:3},{value:"Get the pause state of a player",id:"get-the-pause-state-of-a-player",level:3},{value:"Get the ended state of a video",id:"get-the-ended-state-of-a-video",level:3},{value:"Get the playback rate of a player",id:"get-the-playback-rate-of-a-player",level:3},{value:"Get the volume level of a player",id:"get-the-volume-level-of-a-player",level:3},{value:"Get user watched time ranges",id:"get-user-watched-time-ranges",level:3},{value:"Pause a video",id:"pause-a-video",level:3},{value:"Play a video",id:"play-a-video",level:3},{value:"Set the playback position of a video",id:"set-the-playback-position-of-a-video",level:3},{value:"Set the autoplay state of a player or browser",id:"set-the-autoplay-state-of-a-player-or-browser",level:3},{value:"Set the loop state of a player",id:"set-the-loop-state-of-a-player",level:3},{value:"Set the playback rate of a player",id:"set-the-playback-rate-of-a-player",level:3},{value:"Set the volume level of a player",id:"set-the-volume-level-of-a-player",level:3},{value:"Apply watermark to the video",id:"apply-watermark-to-the-video",level:3}],u={toc:i};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"player-methods"},"Player Methods"),(0,r.kt)("h3",{id:"about-player-methods"},"About player methods"),(0,r.kt)("p",null,"You can call player methods by calling the corresponding function on the Player object. All player method executes only after the iframe is loaded, so no need to wait for the player to loaded to call the methods. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"player.play();\n")),(0,r.kt)("p",null,"All methods, except for on() and off(), return a Promise \u2014 a special JavaScript object that stands for the result of the operation, whether success or failure."),(0,r.kt)("p",null,"Promises for methods that return information resolve with the value of the property in question."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"player.getLoop().then(function(loop) {\n  // Whether the player is set to loop\n});\n")),(0,r.kt)("h3",{id:"get-the-playback-position-of-a-video"},"Get the playback position of a video"),(0,r.kt)("p",null,"This method gets the current playback position of a video, measured in seconds."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"getCurrentTime()\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Promise <number>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"player.getCurrentTime().then(function(seconds) {\n  // `seconds` indicates the current playback position of the video\n});\n")),(0,r.kt)("p",null,"\u200b"),(0,r.kt)("h3",{id:"get-the-loop-state-of-a-player"},"Get the loop state of a player"),(0,r.kt)("p",null,"This method gets the loop state of a player, where true indicates that the video restarts once it reaches the end of playback."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"getLoop()\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Promise <boolean>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"player.getLoop().then(function(loop) {\n  // `loop` indicates whether the loop behavior is active\n});\n")),(0,r.kt)("p",null,"\u200b"),(0,r.kt)("h3",{id:"get-the-pause-state-of-a-player"},"Get the pause state of a player"),(0,r.kt)("p",null,"This method gets the pause state of the current player, where true indicates that playback is paused."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"getPaused()\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Promise <boolean>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"player.getPaused().then(function(paused) {\n  // `paused` indicates whether the player is paused\n});\n")),(0,r.kt)("p",null,"\u200b"),(0,r.kt)("h3",{id:"get-the-ended-state-of-a-video"},"Get the ended state of a video"),(0,r.kt)("p",null,"This method gets the ended state of the video, where true indicates that the video has ended. The video has ended if its current playback position is exactly equal to its duration."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"getEnded()\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Promise <boolean>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"player.getEnded().then(function(ended) {\n  // `ended` indicates whether the video has ended\n});\n")),(0,r.kt)("h3",{id:"get-the-playback-rate-of-a-player"},"Get the playback rate of a player"),(0,r.kt)("p",null,"This method gets the playback rate of a player on a scale from 0.5 to 2, where 0.5 is half speed and 2 is double speed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"getPlaybackRate()\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Promise <number>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"player.getPlaybackRate().then(function(playbackRate) {\n  // `playbackRate` indicates the numeric value of the current playback rate\n});\n")),(0,r.kt)("h3",{id:"get-the-volume-level-of-a-player"},"Get the volume level of a player"),(0,r.kt)("p",null,"This method gets the volume level of a player on a scale of 0 to 1."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Most mobile devices don't support a volume level independent of the system volume. In these cases, this method always returns 1.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"getVolume()\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Promise <number>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"player.getVolume().then(function(volume) {\n  // `volume` indicates the volume level of the player\n});\n")),(0,r.kt)("h3",{id:"get-user-watched-time-ranges"},"Get user watched time ranges"),(0,r.kt)("p",null,"This methods returns the list of time ranges that user watched in a video."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"played()\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Promise <Array>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"player.played().then(function(ranges) {\n  // ranges => [[0, 120.084666], [155.292928, 161.054032], ...]\n});\n")),(0,r.kt)("h3",{id:"pause-a-video"},"Pause a video"),(0,r.kt)("p",null,"This method pauses the playback of a video."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"pause()\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Promise <void>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"player.pause().then(function() {\n  // The video is paused\n}).catch(function(error) {\n  // Some other error occurred\n});\n")),(0,r.kt)("h3",{id:"play-a-video"},"Play a video"),(0,r.kt)("p",null,"This method plays the playback of a video."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"play()\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Promise <void>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"player.play().then(function() {\n  // The video is paused\n}).catch(function(error) {\n  // Some other error occurred\n});\n")),(0,r.kt)("p",null,"\u200b"),(0,r.kt)("h3",{id:"set-the-playback-position-of-a-video"},"Set the playback position of a video"),(0,r.kt)("p",null,"This method sets the current playback position in seconds. The player attempts to seek to as close to the specified time as possible. The exact time comes back as the fulfilled value of the promise."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"If playback hasn't started yet"),",  using this method starts playback.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"If playback has already started"),", using this method doesn't affect the play state."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"  If the player is paused, it remains paused. If the player is playing, it buffers the video from the new position and then resumes playing.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"setCurrentTime(seconds)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required?"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"seconds"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The playback position in seconds.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Promise <number, (RangeError | Error)>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Errors")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Error"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RangeError"),(0,r.kt)("td",{parentName:"tr",align:null},"The time is less than 0 or greater than the video's duration.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Error"),(0,r.kt)("td",{parentName:"tr",align:null},"Some other error occurred.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"player.setCurrentTime(30.456).then(function(seconds) {\n  // `seconds` indicates the actual time that the player seeks to\n}).catch(function(error) {\n  switch (error.name) {\n    case 'RangeError':\n        // The time is less than 0 or greater than the video's duration\n        break;\n    default:\n        // Some other error occurred\n        break;\n  }\n});\n")),(0,r.kt)("p",null,"\u200b"),(0,r.kt)("h3",{id:"set-the-autoplay-state-of-a-player-or-browser"},"Set the autoplay state of a player or browser"),(0,r.kt)("p",null,"This method enables or disables autoplay in a player or browser, where true indicates that autoplay is enabled. Under autopause, whenever a new video loads in the browser window, the video begins in a played state.\nBy default autoplay was disabled."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The autopause feature has no effect if you've disabled cookies in your browser, either through browser settings or with an extension or plugin.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"setAutoPlay({autoplay})\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required?"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autopause"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The autopause state to set.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Promise <boolean, (UnsupportedError | Error)>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Errors")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Error"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UnsupportedError"),(0,r.kt)("td",{parentName:"tr",align:null},"Autopause isn't supported by the current player or browser.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Error"),(0,r.kt)("td",{parentName:"tr",align:null},"Some other error occurred.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"player.setAutoPlay(false).then(function(autopause) {\n  // Autoplay is disabled\n}).catch(function(error) {\n  // Handle errors\n});\n")),(0,r.kt)("h3",{id:"set-the-loop-state-of-a-player"},"Set the loop state of a player"),(0,r.kt)("p",null,"This method sets the loop state of the player. When the loop state is true, playback resumes at the beginning of the video immediately after the video ends."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"setLoop(loop)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required?"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"loop"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the player loops video playback.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Promise <boolean>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"player.setLoop(true).then(function(loop) {\n  // The loop behavior is enabled\n});\n")),(0,r.kt)("h3",{id:"set-the-playback-rate-of-a-player"},"Set the playback rate of a player"),(0,r.kt)("p",null,"This method sets the playback rate of the player on a scale from 0.5 to 2, where 0.5 is half speed and 2 is double speed. When you set the playback rate through the API, the specified value isn't synchronized to other players or stored as the viewer's preference."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"setPlaybackRate(playbackRate)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required?"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"playbackRate"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The playback rate of the player from 0.5 to 2.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Promise <number, (RangeError | Error)>**\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Errors")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Error"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RangeError"),(0,r.kt)("td",{parentName:"tr",align:null},"The playback rate is less than 0.5 or greater than 2.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Error"),(0,r.kt)("td",{parentName:"tr",align:null},"Some other error occurred.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"player.setPlaybackRate(0.5).then(function(playbackRate) {\n  // The playback rate is set\n}).catch(function(error) {\n  switch (error.name) {\n    case 'RangeError':\n        // The playback rate is less than 0.5 or greater than 2\n        break;\n    default:\n        // Some other error occurred\n        break;\n  }\n});\n")),(0,r.kt)("h3",{id:"set-the-volume-level-of-a-player"},"Set the volume level of a player"),(0,r.kt)("p",null,"This method sets the volume level of the player on a scale from 0 to 1. When you set the volume through the API, the specified value isn't synchronized to other players or stored as the viewer's preference."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"setVolume(volume)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required?"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"volume"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The volume level of the player from 0 to 1.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Promise <number, (RangeError | Error)>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Errors")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Error"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RangeError"),(0,r.kt)("td",{parentName:"tr",align:null},"The volume is less than 0 or greater than 1.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Error"),(0,r.kt)("td",{parentName:"tr",align:null},"Some other error occurred.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"player.setVolume(0.5).then(function(volume) {\n  // The volume is set\n}).catch(function(error) {\n  switch (error.name) {\n    case 'RangeError':\n        // The volume is less than 0 or greater than 1\n        break;\n    default:\n        // Some other errors occurred\n        break;\n  }\n});\n")),(0,r.kt)("h3",{id:"apply-watermark-to-the-video"},"Apply watermark to the video"),(0,r.kt)("p",null,"This method applies watermark to the video. Please refer to this ",(0,r.kt)("a",{parentName:"p",href:"/docs/video-embedding/watermarking"},"doc")," for more details on watermarking."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"applyWatermark()\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"annotations"),(0,r.kt)("td",{parentName:"tr",align:null},"json"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Promise <void>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const annotations = [\n   {\n      "type":"dynamic",\n      "text":"Dinesh",\n      "opacity":"0.8",\n      "color":"#FF0000",\n      "size":"5",\n      "interval":5000,\n      "skip": 2000\n   }\n]\nplayer.applyWatermark(annotations).then(function() {\n  // The watermark is applied\n})\n')))}m.isMDXComponent=!0}}]);