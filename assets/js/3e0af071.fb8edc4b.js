"use strict";(self.webpackChunktestpress_docs=self.webpackChunktestpress_docs||[]).push([[612],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,b=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return r?o.createElement(b,a(a({ref:t},c),{},{components:r})):o.createElement(b,a({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=p;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:n,a[1]=d;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4351:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const i={sidebar_position:1},a="Getting started",d={unversionedId:"video-embedding/getting-starting",id:"video-embedding/getting-starting",title:"Getting started",description:"For any video that you host with Testpress, if you want you use it somewhere else, you have to embed it. This means that when you have generated the embed code for your video, you will be able to add the video to your website, blog, articles, or other website you\u2019re looking forward to.",source:"@site/docs/video-embedding/getting-starting.md",sourceDirName:"video-embedding",slug:"/video-embedding/getting-starting",permalink:"/testpress_docs/docs/video-embedding/getting-starting",draft:!1,editUrl:"https://github.com/testpress/testpress_docs/tree/master/docs/video-embedding/getting-starting.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Video Embedding",permalink:"/testpress_docs/docs/category/video-embedding"},next:{title:"Playback Authentication",permalink:"/testpress_docs/docs/video-embedding/authentication"}},s={},l=[{value:"Generate an embed code",id:"generate-an-embed-code",level:2},{value:"Embed on your site",id:"embed-on-your-site",level:2}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started"},"Getting started"),(0,n.kt)("p",null,"For any video that you host with Testpress, if you want you use it somewhere else, you have to embed it. This means that when you have generated the embed code for your video, you will be able to add the video to your website, blog, articles, or other website you\u2019re looking forward to."),(0,n.kt)("p",null,"In order to allow embedding for a certain video, you will first need to follow the below steps which will guide you through the whole Video Embedding process"),(0,n.kt)("h2",{id:"generate-an-embed-code"},"Generate an embed code"),(0,n.kt)("p",null,"Go to chapter which you have upload the video, Click on the \u201cCopy emded code\u201d button against the video you want to generate the Embed code for. This will copy the embed code into your clipboard"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"}," Sample format ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},"<iframe width='560' height='315' src='https://<yoursiteurl>/embed/<video_id>/?access_token=<auth_token>' title='<video title>' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>\n")),(0,n.kt)("h2",{id:"embed-on-your-site"},"Embed on your site"),(0,n.kt)("p",null,"Now you use copied iframe code in your code to embed the video. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"}," Example ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html",metastring:"live showLineNumbers",live:!0,showLineNumbers:!0},"<html>\n<body style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vh', }}>\n\n<div>\n\n<h2 style={{ textAlign: 'center' }}>Your site</h2>\n\n{/* Replace this with generate embed code */}\n<iframe width='560' height='315' src='https://lms.testpress.in/embed/cnwKtQwNmbG' title='DDE video 12' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>\n\n</body>\n</html>\n")))}u.isMDXComponent=!0}}]);