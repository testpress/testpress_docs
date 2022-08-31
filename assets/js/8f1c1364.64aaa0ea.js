"use strict";(self.webpackChunktestpress_docs=self.webpackChunktestpress_docs||[]).push([[193],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},554:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},s=void 0,i={unversionedId:"video-embedding/player-sdk/using-player-sdk",id:"video-embedding/player-sdk/using-player-sdk",title:"using-player-sdk",description:"The iframe embed lets you embed your Testpress videos and control the player using Javascript. You have access to the essential methods and properties of the players. There are events that you can listen for and execute custom actions in your web application.",source:"@site/docs/video-embedding/player-sdk/using-player-sdk.md",sourceDirName:"video-embedding/player-sdk",slug:"/video-embedding/player-sdk/using-player-sdk",permalink:"/testpress_docs/docs/video-embedding/player-sdk/using-player-sdk",draft:!1,editUrl:"https://github.com/testpress/testpress_docs/tree/master/docs/video-embedding/player-sdk/using-player-sdk.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"About player SDK",permalink:"/testpress_docs/docs/video-embedding/player-sdk/introduction"},next:{title:"Player Methods",permalink:"/testpress_docs/docs/video-embedding/player-sdk/player-methods"}},l={},d=[{value:"Adding the script",id:"adding-the-script",level:3},{value:"Get a reference to the iframe",id:"get-a-reference-to-the-iframe",level:3},{value:"Establish communication with the iframe",id:"establish-communication-with-the-iframe",level:3},{value:"What&#39;s next",id:"whats-next",level:3}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The iframe embed lets you embed your Testpress videos and control the player using Javascript. You have access to the essential methods and properties of the players. There are events that you can listen for and execute custom actions in your web application."),(0,a.kt)("h3",{id:"adding-the-script"},"Adding the script"),(0,a.kt)("p",null,"Add the following script to the html of your web page. This loads the interface that are used to establish communication with the video player. If this script is loaded on-demand later, make sure to wait for the load to complete before calling subsequent methods on the object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<script src="https://sandbox.testpress.in/static/video_player/player.js"><\/script>\n')),(0,a.kt)("h3",{id:"get-a-reference-to-the-iframe"},"Get a reference to the iframe"),(0,a.kt)("p",null,"Note: Assuming the API script (above) is already loaded, "),(0,a.kt)("p",null,"To begin communicating with the player, get a reference to the iframe element. This can be using DOM APIs such as querySelector()."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const iframe = document.querySelector("iframe");\n')),(0,a.kt)("h3",{id:"establish-communication-with-the-iframe"},"Establish communication with the iframe"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<html>\n<head>\n  <title>page_title</title>\n</head>\n<body>\n  <iframe width='560' height='315' src='https://lms.testpress.in/embed/cnwKtQwNmbG' title='DDE video 12' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>\n  <script src=\"https://lms.testpress.in/static/video_player/player.js\"><\/script>\n  <script>\n    var iframe = document.querySelector('iframe');\n    var player = new Testpress.Player(iframe);\n   \n    player.loaded().then(()=>{\n      console.log('Player is ready now')\n    }); \n    \n\n    player.on('play', function() {\n      console.log('Played the video')\n    });\n\n        \n   player.setCurrentTime(30).then(()=>{\n      console.log('Current watch time updated')\n    });\n  <\/script>\n\n</body>\n</html>\n\n\n")),(0,a.kt)("h3",{id:"whats-next"},"What's next"),(0,a.kt)("p",null,"It's time to start controlling some videos. We've compiled a comprehensive reference of ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3001/testpress_docs/docs/video-embedding/player-sdk/player-methods"},"methods")," and ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3001/testpress_docs/docs/video-embedding/player-sdk/player-events"},"events")," to make your dreams of absolute power a reality."),(0,a.kt)("p",null,"If we've confused you going forward, contact us. We tend to get it right the second time."))}p.isMDXComponent=!0}}]);