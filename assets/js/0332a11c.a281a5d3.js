"use strict";(self.webpackChunktestpress_docs=self.webpackChunktestpress_docs||[]).push([[723],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||l;return r?a.createElement(k,i(i({ref:t},d),{},{components:r})):a.createElement(k,i({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5308:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const l={sidebar_position:1},i="Markers",o={unversionedId:"video-embedding/javascript-sdk/plugins/markers",id:"video-embedding/javascript-sdk/plugins/markers",title:"Markers",description:"Enable plugin",source:"@site/docs/video-embedding/javascript-sdk/plugins/markers.md",sourceDirName:"video-embedding/javascript-sdk/plugins",slug:"/video-embedding/javascript-sdk/plugins/markers",permalink:"/docs/video-embedding/javascript-sdk/plugins/markers",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"videoEmbeddingSidebar",previous:{title:"Plugins",permalink:"/docs/category/plugins"}},s={},p=[{value:"Enable plugin",id:"enable-plugin",level:2},{value:"Initialize markers",id:"initialize-markers",level:2},{value:"Methods",id:"methods",level:2},{value:"Sample code",id:"sample-code",level:2},{value:"Output",id:"output",level:3}],d={toc:p};function c(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"markers"},"Markers"),(0,n.kt)("h2",{id:"enable-plugin"},"Enable plugin"),(0,n.kt)("p",null,"  You can enable a plugin by passing query param ",(0,n.kt)("strong",{parentName:"p"},"plugins"),' with value "markers to src URL" '),(0,n.kt)("h2",{id:"initialize-markers"},"Initialize markers"),(0,n.kt)("p",null," You can intialize markers through ",(0,n.kt)("a",{parentName:"p",href:"/docs/video-embedding/javascript-sdk/using-player-sdk"},"Player SDK")," method call setMarkers"),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"}," Arguments ")," "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"markerDisplay"),(0,n.kt)("td",{parentName:"tr",align:null},"Object"),(0,n.kt)("td",{parentName:"tr",align:null},"The general css styling that would be applied to all the markers created by the plugin. The default is only concerned with width, border-radius, and background-color, but any other css rules would be applied too (think of it as jQuery's css function).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"breakOverlay"),(0,n.kt)("td",{parentName:"tr",align:null},"Object"),(0,n.kt)("td",{parentName:"tr",align:null},"Options for the break overlays at each marker. Available fields => display, displayTime, style")))),(0,n.kt)("p",null,"You can read more about available arguments ",(0,n.kt)("a",{parentName:"p",href:"http://sampingchuang.com/videojs-markers"},"here")),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"}," Events ")," "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"onMarkerReached"),(0,n.kt)("td",{parentName:"tr",align:null},"This callback function is triggered whenever playback reaches the time interval from a marker. The interval is specified in the breakOverlay.displayTime . This can be used to trigger certain actions at each marker, depending on your use case. Again, this function is given a marker instance. In 0.6.0, the function also takes in a second parameter index.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"onMarkerClick"),(0,n.kt)("td",{parentName:"tr",align:null},"This callback function is triggered when clicking on the markers. The default behavior for clicking on the marker is seeking to that point in the video. However, if onMarkerClick returns false, the default behavior will be prevented.")))),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Remove markers")),(0,n.kt)("p",null,"You can remove the particular markers by passing its indices to removeMarkers function."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"player.removeMarkers([1,2,4]);\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Remove All markers")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"player.removeAllMarkers([1,2,4]);\n")),(0,n.kt)("h2",{id:"sample-code"},"Sample code"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n<body>\n<div style="padding-top:56.25%;position:relative;"><iframe id="video_player" src="https://lms.testpress.in/embed/cnwKtQwNmbG/?access_token=fb92ae61-5b1e-4822-a2e9-e402e07c3e5e&plugins=markers" style="border:0;max-width:100%;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope picture-in-picture" allowfullscreen="" frameborder="0"></iframe></div>\n<script src="https://lms.testpress.in/static/video_player/player.js"><\/script>\n<script>\n   var player = new Testpress.Player(document.getElementById("video_player"));\n    player.loaded().then(()=>{\n        player.setMarkers({\n        markerStyle: {\n            \'width\': \'7px\',\n            \'border-radius\': \'30%\',\n            \'background-color\': \'yellow\'\n        },\n        markers: [{\n            time: 60,\n            text: "marker",\n        },\n        {\n            time: 120,\n            text: "marker2",\n        },        \n        {\n            time: 180,\n            text: "marker3",\n        } \n       ]\n    });\n    \n    })\n \n    player.on("onMarkerReached", (marker, index)=>{\n        console.log("onMarkerReached", marker, index)\n        player.removeMarkers([index])\n    })\n    \n    player.on("onMarkerClick", (marker)=>{\n       console.log("onMarkerClick", marker)\n    })\n       \n<\/script>\n  </body>\n</html>\n')),(0,n.kt)("h3",{id:"output"},"Output"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Domain restriction form",src:r(7310).Z,width:"525",height:"296"})))}c.isMDXComponent=!0},7310:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/markers_output-38f8c694b12e33c0b3eb193cdce969de.png"}}]);