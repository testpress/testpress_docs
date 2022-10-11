"use strict";(self.webpackChunktestpress_docs=self.webpackChunktestpress_docs||[]).push([[220],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=n,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return r?a.createElement(k,i(i({ref:t},c),{},{components:r})):a.createElement(k,i({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6605:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:4},i="Watermark Videos",s={unversionedId:"video-embedding/watermarking",id:"video-embedding/watermarking",title:"Watermark Videos",description:"Videos hosted through testpress cannot be downloaded. There does however remain the risk of piracy from screen capture. Add text to videos with our dynamic watermark feature that effectively prevents users from pirating video content using screen capture, and goes a long way towards helping users protect their premium content.",source:"@site/docs/video-embedding/watermarking.md",sourceDirName:"video-embedding",slug:"/video-embedding/watermarking",permalink:"/docs/video-embedding/watermarking",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"videoEmbeddingSidebar",previous:{title:"Domain restriction",permalink:"/docs/video-embedding/domain-restriction"},next:{title:"Player SDK",permalink:"/docs/category/player-sdk"}},p={},l=[{value:"Create Watermark Code",id:"create-watermark-code",level:2},{value:"Static text",id:"static-text",level:3},{value:"Moving text",id:"moving-text",level:3},{value:"Apply Watermark",id:"apply-watermark",level:2}],c={toc:l};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"watermark-videos"},"Watermark Videos"),(0,n.kt)("p",null,"Videos hosted through testpress cannot be downloaded. There does however remain the risk of piracy from screen capture. Add text to videos with our dynamic watermark feature that effectively prevents users from pirating video content using screen capture, and goes a long way towards helping users protect their premium content."),(0,n.kt)("p",null,"The dynamic watermark can be customized for movement, color, size and transparency. "),(0,n.kt)("h2",{id:"create-watermark-code"},"Create Watermark Code"),(0,n.kt)("p",null,"Here is a sample JSON string that adds a moving (dynamic) watermark and a static watermark."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'{\n   "annotations":[\n      {\n         "type":"static",\n         "text":"Testpress",\n         "x":10,\n         "y":10,\n         "opacity":"0.5",\n         "color":"#FFF",\n         "size":6\n      },\n      {\n         "type":"dynamic",\n         "text":"hari",\n         "opacity":"0.5",\n         "color":"#FF0000",\n         "size":6,\n         "interval":5000,\n         "skip":2000\n      }\n   ]\n}\n')),(0,n.kt)("p",null,"Technically, this is an array of JSON objects, where each object describe a single annotation item."),(0,n.kt)("p",null,"Each of these items will be described by its parameters. Every item requires a ",(0,n.kt)("strong",{parentName:"p"},"type")," parameter which defines the type of watermark by default its value was static. The type of watermark can be either a moving text or a static text. The rest of the parameters depends on the type."),(0,n.kt)("p",null,"Following is a short description of how each parameter affects the display of text."),(0,n.kt)("h3",{id:"static-text"},"Static text"),(0,n.kt)("p",null,"The following code will display a static watermark code, placed at 10px distance from the left border of the video and 50px from top border, displaying text ",(0,n.kt)("strong",{parentName:"p"},"Testpress")," . The text color will be white (#fff), opacity is 0.5, and font-size is 6. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'[{\n    "type": "static",\n    "text": "Testpress",\n    "x": 10",\n    "y": 10,\n    "opacity": "0.5",\n    "color": "#FFF",\n    "size": "6"\n}]\n')),(0,n.kt)("h3",{id:"moving-text"},"Moving text"),(0,n.kt)("p",null,"The following code will display a dynamic watermark code, displaying text ",(0,n.kt)("strong",{parentName:"p"},"hari"),". The text color will be red (#ff0000), opacity is 0.8, and font-size is 6. The watermark is configured to update position every 5 seconds (5000ms)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"[{\n    'type': 'dynamic',\n    'text': 'hari',\n    'opacity': '0.8',\n    'color': '#FF0000',\n    'size': '6',\n    'interval': 5000,\n    'skip': 2000,\n}]\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type of text")),(0,n.kt)("p",null,"Set type parameter as dynamic for Dynamic watermark and static for Static watermark"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"'type':'dynamic',\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Set the text to be shown")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"'text\" : 'testpress',\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Specify text opacity")),(0,n.kt)("p",null,"This is the opacity of the text. For full opacity keep value 1."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"'opacity':'0.8',\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Specify text color")),(0,n.kt)("p",null,"This is the hex value of the watermark text color. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"'color':'#FF0000',\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Specify the font size")),(0,n.kt)("p",null,"This is the font size"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"'size':6,\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Specify the interval over which watermark changes position")),(0,n.kt)("p",null,"The value is the interval in milliseconds when the text changes position"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"'interval':5000,\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Skip feature for watermark")),(0,n.kt)("p",null,"It is possible to have watermark skip for some time between two overlays. Here is a sample code for it \u2013"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"'skip':2000\n")),(0,n.kt)("h2",{id:"apply-watermark"},"Apply Watermark"),(0,n.kt)("p",null,"Now you just need pass the watermark code that you've created to the player to apply on the video. There are two ways to do that"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Pass the code as part of the ",(0,n.kt)("a",{parentName:"li",href:"./authentication#add-watermark"},"Access token Request"),"."),(0,n.kt)("li",{parentName:"ul"},"Pass the code via Player SDK method called ",(0,n.kt)("a",{parentName:"li",href:"./player-sdk/player-methods#apply-watermark-to-the-video"},"applyWatermark"),".")))}d.isMDXComponent=!0}}]);