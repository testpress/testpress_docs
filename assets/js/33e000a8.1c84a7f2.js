"use strict";(self.webpackChunktestpress_docs=self.webpackChunktestpress_docs||[]).push([[878],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1462:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},o="Playback Authentication",s={unversionedId:"video-embedding/authentication",id:"video-embedding/authentication",title:"Playback Authentication",description:"Your might have noticed that we are passing query param called access_token to the iframe source url, which is required to authorize video playback.",source:"@site/docs/video-embedding/authentication.md",sourceDirName:"video-embedding",slug:"/video-embedding/authentication",permalink:"/testpress_docs/docs/video-embedding/authentication",draft:!1,editUrl:"https://github.com/testpress/testpress_docs/tree/master/docs/video-embedding/authentication.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"videoEmbeddingSidebar",previous:{title:"Getting started",permalink:"/testpress_docs/docs/video-embedding/getting-starting"},next:{title:"Domain restriction",permalink:"/testpress_docs/docs/video-embedding/domain-restriction"}},c={},l=[{value:"Obtaining Access token using API",id:"obtaining-access-token-using-api",level:3},{value:"Time-to-live for token Validity",id:"time-to-live-for-token-validity",level:3},{value:"Expire After one usage",id:"expire-after-one-usage",level:3},{value:"View Access token",id:"view-access-token",level:3},{value:"Update Access token",id:"update-access-token",level:3}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"playback-authentication"},"Playback Authentication"),(0,r.kt)("p",null,"Your might have noticed that we are passing query param called access_token to the iframe source url, which is required to authorize video playback. "),(0,r.kt)("p",null,"By default embed code that you have generated from the menu bar will contain access token which won't have expiry date. "),(0,r.kt)("p",null,"so use that with caution because if user have that code he can embed your video onto any page on the internet if you don't have domain restriction. even if you have domain restriction, user can view the video by embedding your video on your home page."),(0,r.kt)("p",null,"You can prevent the above scenarios by generating access token using API with time-to-live or set to expire after one usage on back-end server and then sent to the website front-end. In the website front-end use the generate access_token as part of the video embed code."),(0,r.kt)("h3",{id:"obtaining-access-token-using-api"},"Obtaining Access token using API"),(0,r.kt)("p",null,"To generate the Access token you need to send an HTTP POST request to the API Endpoint, with the ",(0,r.kt)("a",{parentName:"p",href:"https://testpress.github.io/testpress_docs/docs/intro"},"authentication Header")," and the optional OTP request Body."),(0,r.kt)("p",null,"API endpoint to retrieve OTP is ",(0,r.kt)("a",{parentName:"p",href:"https://demo.testpress.in/api/v2.5/admin/chapter_contents/replace-with-video-id/access-token"},"https://demo.testpress.in/api/v2.5/admin/chapter_contents/replace-with-video-id/access-token")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"time_to_live"),(0,r.kt)("td",{parentName:"tr",align:null},"integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expires_after_first_usage"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean")))),(0,r.kt)("p",null,"For valid requests the API server returns a JSON:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "expires_after_first_usage": true,\n    "code": "ea806eb5-4576-4bef-8489-204e78115d5a",\n    "status": "Active",\n    "valid_until": "2022-08-29T12:43:11.288874Z"\n}\n')),(0,r.kt)("h3",{id:"time-to-live-for-token-validity"},"Time-to-live for token Validity"),(0,r.kt)("p",null,"By default the Access token validity is set to infinity. You can create shorter lived URLs by passing time_to_live parameter. This value is to be set in seconds."),(0,r.kt)("p",null,"The time_to_live value is relevant when there is a time-gap between the website backend requesting the access token, and the video player loading on client-side. Such a scenario is relevant for users watching videos on very slow connections. We recommend a minimum time_to_live of 1 minute. It is unrealistic for any user to be waiting for more than 1 minute for video player load. Please note that a new access token is generated when a page is refreshed."),(0,r.kt)("p",null,"you can create a static video URL by not passing time_to_live, that you may use as part of your home page and for non-premium content."),(0,r.kt)("p",null,"This code below sets the time_to_live to 5 minutes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "time_to_live": 300\n}\n')),(0,r.kt)("h3",{id:"expire-after-one-usage"},"Expire After one usage"),(0,r.kt)("p",null,"By passing true for expires_after_first_usage will make the access token to expire immediately after first usage, by this way to you can prevent the users from sharing and embedding the video into your site before expire time.  "),(0,r.kt)("p",null,"This code below sets the access_token to expire after usage."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "expires_after_first_usage": true\n}\n')),(0,r.kt)("h3",{id:"view-access-token"},"View Access token"),(0,r.kt)("p",null,"Make get request to the below API with your video id and access token code to get the access token details"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"GET : "),(0,r.kt)("a",{parentName:"p",href:"https://demo.testpress.in/api/v2.5/admin/chapter_contents/video-id/access-token/your_access_token_code/"},"https://demo.testpress.in/api/v2.5/admin/chapter_contents/video-id/access-token/your_access_token_code/")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "expires_after_first_usage": false,\n    "code": "your_access_token_code",\n    "status": "Active",\n    "valid_until": "2022-08-30T14:24:23.835382Z"\n}\n')),(0,r.kt)("h3",{id:"update-access-token"},"Update Access token"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PUT : "),(0,r.kt)("a",{parentName:"p",href:"https://demo.testpress.in/api/v2.5/admin/chapter_contents/video-id/access-token/your_access_token_code/"},"https://demo.testpress.in/api/v2.5/admin/chapter_contents/video-id/access-token/your_access_token_code/")),(0,r.kt)("p",null,"This code below updates the access_token time_to_live."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n    time_to_live: 300\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "expires_after_first_usage": false,\n    "code": "your_access_token_code",\n    "status": "Active",\n    "valid_until": "2022-08-30T14:24:23.835382Z"\n}\n')))}p.isMDXComponent=!0}}]);