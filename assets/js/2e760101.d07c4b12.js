"use strict";(self.webpackChunktestpress_docs=self.webpackChunktestpress_docs||[]).push([[5106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6010),i=n(2389),s=n(7392),o=n(7094),u=n(2466);const p="tabList__CuJ",d="tabItem_LNqP";function c(e){var t;const{lazy:n,block:i,defaultValue:c,values:m,groupId:h,className:b}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,s.l)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===c?c:c??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:N}=(0,o.U)(),[w,I]=(0,r.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:_}=(0,u.o5)();if(null!=h){const e=f[h];null!=e&&e!==w&&k.some((t=>t.value===e))&&I(e)}const O=e=>{const t=e.currentTarget,n=T.indexOf(t),a=k[n].value;a!==w&&(_(t),I(a),null!=h&&N(h,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},b)},k.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:E,onClick:O},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},8941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),i=n(5162);const s={sidebar_position:5},o="Videos",u={unversionedId:"server-api/admin-apis/videos",id:"server-api/admin-apis/videos",title:"Videos",description:"Admin APIs require authorization token with admin privileges. You check the following link to generate an authorization token. You need to provide an admin username and password to generate token with admin privileges.",source:"@site/docs/server-api/admin-apis/videos.md",sourceDirName:"server-api/admin-apis",slug:"/server-api/admin-apis/videos",permalink:"/docs/server-api/admin-apis/videos",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"serverAPISidebar",previous:{title:"Attempts",permalink:"/docs/server-api/admin-apis/attempts"},next:{title:"Batches",permalink:"/docs/server-api/admin-apis/batches"}},p={},d=[{value:"Get Watched Videos of User",id:"get-watched-videos-of-user",level:2},{value:"HTTP Request",id:"http-request",level:4},{value:"URL Parameters",id:"url-parameters",level:4},{value:"Query Parameters",id:"query-parameters",level:4},{value:"Example:",id:"example",level:4},{value:"Response",id:"response",level:4}],c={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"videos"},"Videos"),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Admin APIs require authorization token with admin privileges. You check the following link to generate an authorization token. You need to provide an admin username and password to generate token with admin privileges.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://testpress.github.io/testpress_docs/docs/intro"},"Authentication")),(0,r.kt)("p",null,"The Video API allows admin to access and read all videos."),(0,r.kt)("h2",{id:"get-watched-videos-of-user"},"Get Watched Videos of User"),(0,r.kt)("p",null,"This endpoint can be used to retrieve the videos watched by a particular user."),(0,r.kt)("h4",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/v2.5/admin/users/<id>/videos_watched/")),(0,r.kt)("h4",{id:"url-parameters"},"URL Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique Id of the user")))),(0,r.kt)("h4",{id:"query-parameters"},"Query Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start_date"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Start date in the format yyyy-mm-dd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end_date"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"End date in the format yyyy-mm-dd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"course"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique course ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chapter"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique chapter ID")))),(0,r.kt)("h4",{id:"example"},"Example:"),(0,r.kt)("p",null,"/api/v2.5/admin/users/10/videos_watched/?start_date=2023-12-29&end_date=2024-05-29&course=14"),(0,r.kt)("p",null,"This endpoint will get the list of videos watched by user with ID 10 from the course with ID 14 from December 29, 2023, to May 29, 2024."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"bash",label:"cURL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request GET \\\n  --url http://demo.testpress.in/api/v2.5/admin/users/60386/videos_watched/\n  --header 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw' \\\n  --header 'cache-control: no-cache'\n\n"))),(0,r.kt)(i.Z,{value:"rb",label:"Ruby",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rb"},"require 'uri'\nrequire 'net/http'\n\nurl = URI(\"http://demo.testpress.in/api/v2.5/admin/users/60386/videos_watched/\")\n\nhttp = Net::HTTP.new(url.host, url.port)\n\nrequest = Net::HTTP::Get.new(url)\nrequest[\"authorization\"] = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw'\nrequest[\"cache-control\"] = 'no-cache'\n\nresponse = http.request(request)\nputs response.read_body\n\n"))),(0,r.kt)(i.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'import requests\n\nurl = "http://demo.testpress.in/api/v2.5/admin/users/60386/videos_watched/"\n\nheaders = {\n    \'authorization\': "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw",\n    \'cache-control\': "no-cache",\n    }\n\nresponse = requests.request("GET", url, headers=headers)\n\nprint(response.text)\n\n\n')))),(0,r.kt)("h4",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count": 2,\n  "next": "https://lmsdemo.testpress.in/api/v2.5/admin/users/60386/videos_watched/?page=2",\n  "previous": null,\n  "per_page": 20,\n  "results": [\n    {\n      "id": 3651,\n      "title": "Rad1",\n      "watched_duration": null,\n      "total_duration": null,\n      "created": "2024-05-09T12:25:13.267531+05:30",\n      "watched_percentage": 0,\n      "remaining_duration": null,\n      "course_title": "UPSC Course",\n      "chapter_name": "Radical",\n      "content_created_date": "2024-04-24T14:08:11+05:30"\n    },\n    {\n      "id": 3689,\n      "title": "Video 6",\n      "watched_duration": "12 seconds",\n      "total_duration": "30 seconds",\n      "created": "2024-05-28T11:39:06.034546+05:30",\n      "watched_percentage": 40,\n      "remaining_duration": "18 seconds",\n      "course_title": "Orange Muttai 1",\n      "chapter_name": "Video",\n      "content_created_date": "2022-12-01T17:28:07+05:30"\n    }\n  ]\n}\n')))}m.isMDXComponent=!0}}]);