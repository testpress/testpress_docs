"use strict";(self.webpackChunktestpress_docs=self.webpackChunktestpress_docs||[]).push([[704],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),s=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=s(e.components);return n.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,f=u["".concat(i,".").concat(m)]||u[m]||c[m]||r;return t?n.createElement(f,l(l({ref:a},p),{},{components:t})):n.createElement(f,l({ref:a},p))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=u;var d={};for(var i in a)hasOwnProperty.call(a,i)&&(d[i]=a[i]);d.originalType=e,d.mdxType="string"==typeof e?e:o,l[1]=d;for(var s=2;s<r;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},163:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const r={sidebar_position:1},l="Offline Downloads",d={unversionedId:"video-embedding/player-sdk/android-native-sdk/offline-downloads",id:"video-embedding/player-sdk/android-native-sdk/offline-downloads",title:"Offline Downloads",description:"We'll explore the workflow in this document.The Sample Android App on Github provides code examples for a typical use case.",source:"@site/docs/video-embedding/player-sdk/android-native-sdk/offline-downloads.md",sourceDirName:"video-embedding/player-sdk/android-native-sdk",slug:"/video-embedding/player-sdk/android-native-sdk/offline-downloads",permalink:"/docs/video-embedding/player-sdk/android-native-sdk/offline-downloads",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"videoEmbeddingSidebar",previous:{title:"Getting Started",permalink:"/docs/video-embedding/player-sdk/android-native-sdk/getting-started"}},i={},s=[{value:"Enable Download support",id:"enable-download-support",level:2},{value:"Creating a TpStreamsDownloadManager",id:"creating-a-tpstreamsdownloadmanager",level:2},{value:"Get list of downloaded media",id:"get-list-of-downloaded-media",level:4},{value:"Delete",id:"delete",level:4},{value:"Pause",id:"pause",level:4},{value:"Resume",id:"resume",level:4},{value:"Cancel",id:"cancel",level:4},{value:"Playing downloaded media",id:"playing-downloaded-media",level:2}],p={toc:s};function c(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"offline-downloads"},"Offline Downloads"),(0,o.kt)("p",null,"We'll explore the workflow in this document.The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/testpress/sample-android-app"},"Sample Android App")," on Github provides code examples for a typical use case."),(0,o.kt)("h2",{id:"enable-download-support"},"Enable Download support"),(0,o.kt)("p",null,"Create TpInitParams with .enableDownloadSupport(true) to enable download support."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'var parameters = TpInitParams.Builder()\n    .setVideoId(videoId)\n    .setAccessToken(accessToken)\n    .setOrgCode("your_subdomain") // demo for demo.testpress.in\n    .enableDownloadSupport(true)\n    .build()\n')),(0,o.kt)("h2",{id:"creating-a-tpstreamsdownloadmanager"},"Creating a TpStreamsDownloadManager"),(0,o.kt)("p",null,"The following code snippet demonstrates how to instantiate a TpStreamsDownloadManager"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val tpStreamDownloadManager : TpStreamDownloadManager = TpStreamDownloadManager(activityContext)\n")),(0,o.kt)("p",null,"Using this TpStreamDownloadManager we can get a list of downloaded media and the following media operations to delete, pause, resume, and cancel."),(0,o.kt)("h4",{id:"get-list-of-downloaded-media"},"Get list of downloaded media"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val downloads : LiveData<List<Video>?> = tpStreamDownloadManager.getAllDownloads()\n")),(0,o.kt)("p",null,"It will return a list of OfflineVideoInfo in LiveData to monitor the download progress use ViewModel and observe."),(0,o.kt)("h4",{id:"delete"},"Delete"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"tpStreamDownloadManager.deleteDownload(video)\n")),(0,o.kt)("h4",{id:"pause"},"Pause"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"tpStreamDownloadManager.pauseDownload(video)\n")),(0,o.kt)("h4",{id:"resume"},"Resume"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"tpStreamDownloadManager.resumeDownload(video)\n")),(0,o.kt)("h4",{id:"cancel"},"Cancel"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"tpStreamDownloadManager.cancelDownload(video)\n")),(0,o.kt)("h2",{id:"playing-downloaded-media"},"Playing downloaded media"),(0,o.kt)("p",null,"Create offline params and pass them to player activity via intent to play an offline video."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val intent = Intent(activityContext,PlayerActivity::class.java)\nintent.putExtra(TP_OFFLINE_PARAMS,TpInitParams.createOfflineParams(video.videoId))\nstartActivity(intent)\n")))}c.isMDXComponent=!0}}]);