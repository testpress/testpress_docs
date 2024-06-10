"use strict";(self.webpackChunktestpress_docs=self.webpackChunktestpress_docs||[]).push([[9251],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(o,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<s;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const s="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),a=n(7294),s=n(6010),l=n(2389),i=n(7392),o=n(7094),u=n(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:l,defaultValue:d,values:m,groupId:b,className:_}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??h.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),w=(0,i.l)(k,((e,t)=>e.value===t.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==f&&!k.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,o.U)(),[g,T]=(0,a.useState)(f),N=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=b){const e=v[b];null!=e&&e!==g&&k.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,n=N.indexOf(t),r=k[n].value;r!==g&&(I(t),T(r),null!=b&&y(b,String(r)))},O=e=>{var t;let n=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},_)},k.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,key:t,ref:e=>N.push(e),onKeyDown:O,onClick:x},l,{className:(0,s.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":g===t})}),n??t)}))),n?(0,a.cloneElement)(h.filter((e=>e.props.value===g))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}function m(e){const t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),s=n(5488),l=n(5162);const i={sidebar_position:4},o="Attempts",u={unversionedId:"server-api/admin-apis/attempts",id:"server-api/admin-apis/attempts",title:"Attempts",description:"Admin APIs require authorization token with admin privileges. You check the following link to generate authorization token. You need to provide admin username and password to generate token with admin privileges",source:"@site/docs/server-api/admin-apis/attempts.md",sourceDirName:"server-api/admin-apis",slug:"/server-api/admin-apis/attempts",permalink:"/docs/server-api/admin-apis/attempts",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"serverAPISidebar",previous:{title:"Mentors",permalink:"/docs/server-api/admin-apis/mentors"},next:{title:"Videos",permalink:"/docs/server-api/admin-apis/videos"}},c={},p=[{value:"List Attempts",id:"list-attempts",level:2},{value:"Examples",id:"examples",level:4},{value:"Get A Single Attempt",id:"get-a-single-attempt",level:2},{value:"HTTP Request",id:"http-request",level:4},{value:"URL Parameters",id:"url-parameters",level:4},{value:"Response",id:"response",level:4}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"attempts"},"Attempts"),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"Admin APIs require authorization token with admin privileges. You check the following link to generate authorization token. You need to provide admin username and password to generate token with admin privileges")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://testpress.github.io/testpress_docs/docs/intro/"},"Authentication")),(0,a.kt)("p",null,"All operations related to user attempt can be done using the following end points."),(0,a.kt)("h2",{id:"list-attempts"},"List Attempts"),(0,a.kt)("p",null,"This endpoint returns all attempts. Attempts can be filtered based on user or exams"),(0,a.kt)("details",null,(0,a.kt)("summary",null," ",(0,a.kt)("b",null,"Get")," https:// institute_url /api/v2.5/admin/attempts",(0,a.kt)("br",null),"Attempts List API "),(0,a.kt)("p",null," This endpoint returns all attempts."),(0,a.kt)("h4",null," Parameters"),(0,a.kt)("h4",null," Query"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",{"text-align":"left"},"ordering"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"This will sort the results date Oldest started attempts will be displayed first ",(0,a.kt)("br",null),"-date - Recently started attempts will be displayed first correctanswers_count ",(0,a.kt)("br",null),"- Attempts with least correct answers will be displayed first ",(0,a.kt)("br",null),"-correct answers_count ",(0,a.kt)("br",null),"- Attempts with more correct answers will be displayed first incorrectLanswers_count ",(0,a.kt)("br",null),"- Attempts with least incorrect answers will be displayed first ",(0,a.kt)("br",null),"-incorrectanswers_count Attempts with more incorrect answerss will be displayed first unanswered_count ",(0,a.kt)("br",null),"- Attempts with least unanswered answers will be displayed first -unanswered_count ",(0,a.kt)("br",null),"- Attempts with more unanswered will be displayed first")),(0,a.kt)("tr",null,(0,a.kt)("td",{"text-align":"left"},"state"),(0,a.kt)("td",null,"number"),(0,a.kt)("td",null,"This will filter attempts based on the following states",(0,a.kt)("br",null),"0-Running Attempts",(0,a.kt)("br",null),"1- Completed Attempts",(0,a.kt)("br",null),"3-Not started")),(0,a.kt)("tr",null,(0,a.kt)("td",{"text-align":"left"},"date_1"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"This will display all attempts which started before this date")),(0,a.kt)("tr",null,(0,a.kt)("td",{"text-align":"left"},"date_0"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"This will display all attempts which started after this date")),(0,a.kt)("tr",null,(0,a.kt)("td",{"text-align":"left"},"Users"),(0,a.kt)("td",null,"integer"),(0,a.kt)("td",null,"To get attempts of an user. Value should be user id",(0,a.kt)("br",null),"Ex: users=1")),(0,a.kt)("tr",null,(0,a.kt)("td",{"text-align":"left"},"exams"),(0,a.kt)("td",null,"integer"),(0,a.kt)("td",null,"To filter attempts by exam. Value should be exam id exams",(0,a.kt)("br",null),"Ex: exams=3"))),(0,a.kt)("h4",null,"Responses"),(0,a.kt)("details",null,(0,a.kt)("summary",null," 200  "),(0,a.kt)("pre",null,(0,a.kt)("p",null,'{\n"count":1,\n"next":"',(0,a.kt)("a",{parentName:"p",href:"https://sandbox.testpress.in/api/v2.5/admin/attempts/?page=2%22"},'https://sandbox.testpress.in/api/v2.5/admin/attempts/?page=2"'),',\n"previous":null,\n"per_page":200,\n"results":','[\n{\nid: 68701,\ndate: "2021-03-16T03:59:21.860924Z",\nexam_id: 133,\nuser_id: 143,\nemail: null,\nname: null,\nphone: null,\ncorrect_answers_count: 220,\nincorrect_answers_count: 20,\nunanswered_count: 200,\nscore: "90.00",\npercentage: 0,\ntime_taken: "0:00:00",\nremaining_time: null,\nresult: "Not taken",\nstate: "Completed",\nlast_started_time: null,\nlast_answer_updated_time: null,\nspeed: 0,\nexam_url: "https://sandbox.testpress.in/api/v2.5/admin/exams/133/",\nuser_url: "https://sandbox.testpress.in/api/v2.5/admin/users/133/"\n}]',"\n}")))),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/api/v2.5/admin/attempts/?exams=5")," - This will display attempt of exam with id 5"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/api/v2.5/admin/attempts/?users=1&exams=2")," - This will display attempts of exam whose id is 2 for the user id 1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/api/v2.5/admin/attempts/?date_0=2020-01-11&date_1=2021-02-02&ordering=date")," - This will display attempts that are attempted between 11/1/2020 and 2/2/2021. Oldest attempted exams will be displayed first")),(0,a.kt)("h2",{id:"get-a-single-attempt"},"Get A Single Attempt"),(0,a.kt)("p",null,"This endpoint retrieves a single attempt."),(0,a.kt)("h4",{id:"http-request"},"HTTP Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET /api/v2.5/admin/attempts/<id>/\n")),(0,a.kt)("h4",{id:"url-parameters"},"URL Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"The unique id of the attempt to retrieve")))),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"bash",label:"cURL",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request GET \\\n  --url http://demo.testpress.in/api/v2.5/admin/attempts/125894/ \\\n  --header 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw' \\\n  --header 'cache-control: no-cache'\n\n"))),(0,a.kt)(l.Z,{value:"rb",label:"Ruby",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rb"},"require 'uri'\nrequire 'net/http'\n\nurl = URI(\"http://demo.testpress.in/api/v2.5/admin/attempts/125894/\")\n\nhttp = Net::HTTP.new(url.host, url.port)\n\nrequest = Net::HTTP::Get.new(url)\nrequest[\"authorization\"] = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw'\nrequest[\"cache-control\"] = 'no-cache'\n\nresponse = http.request(request)\nputs response.read_body\n"))),(0,a.kt)(l.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'import requests\n\nurl = "http://demo.testpress.in/api/v2.5/admin/attempts/125894/"\n\nheaders = {\n    \'authorization\': "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw",\n    \'cache-control\': "no-cache"\n    }\n\nresponse = requests.request("GET", url, headers=headers)\n\nprint(response.text)\n\n')))),(0,a.kt)("h4",{id:"response"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "date": "2023-01-23T11:35:37.930389+05:30",\n    "exam_id": 2,\n    "user_id": 2,\n    "email": "hariharan@testpress.in",\n    "name": null,\n    "phone": null,\n    "correct_answers_count": 0,\n    "incorrect_answers_count": 1,\n    "unanswered_count": 79,\n    "score": "0.00",\n    "percentage": 0,\n    "percentile": 100.0,\n    "time_taken": "2:47:53.076906",\n    "remaining_time": "0:00:00",\n    "result": "Fail",\n    "state": "Completed",\n    "last_started_time": "2023-04-02T15:27:46.453786+05:30",\n    "last_answer_updated_time": "2023-04-02T15:27:59.639308+05:30",\n    "speed": 0,\n    "exam_url": "http://demo.tespress.in/api/v2.5/admin/exams/2/",\n    "user_url": "http://demo.tespress.in/api/v2.5/admin/users/2/",\n    "username": "admin",\n    "sections": [\n        {\n            "id": 1,\n            "order": 0,\n            "section_id": 2,\n            "time_taken": "0:00:00",\n            "correct_answers_count": 0,\n            "incorrect_answers_count": 0,\n            "unanswered_count": 20,\n            "score": "0.00"\n        },\n        {\n            "id": 2,\n            "order": 1,\n            "section_id": 3,\n            "time_taken": "0:00:00",\n            "correct_answers_count": 0,\n            "incorrect_answers_count": 1,\n            "unanswered_count": 20,\n            "score": "0.00"\n        },\n        {\n            "id": 3,\n            "order": 2,\n            "section_id": 4,\n            "time_taken": "0:00:00",\n            "correct_answers_count": 0,\n            "incorrect_answers_count": 0,\n            "unanswered_count": 20,\n            "score": "0.00"\n        },\n        {\n            "id": 4,\n            "order": 3,\n            "section_id": 5,\n            "time_taken": "0:00:00",\n            "correct_answers_count": 0,\n            "incorrect_answers_count": 0,\n            "unanswered_count": 19,\n            "score": "0.00"\n        }\n    ],\n    "subject_stats": [\n        {\n            "subject_id": 1,\n            "subject_name": "Geography",\n            "total_count": 64,\n            "correct_answers_count": 0,\n            "unanswered_count": 63,\n            "incorrect_answers_count": 1,\n            "parent_subject_id": null,\n            "is_leaf": true,\n            "score": "0.00",\n            "partial_correct_answers_count": 0\n        },\n        {\n            "subject_id": 2,\n            "subject_name": "Current affairs",\n            "total_count": 12,\n            "correct_answers_count": 0,\n            "unanswered_count": 12,\n            "incorrect_answers_count": 0,\n            "parent_subject_id": null,\n            "is_leaf": true,\n            "score": "0.00",\n            "partial_correct_answers_count": 0\n        },\n        {\n            "subject_id": null,\n            "subject_name": "History",\n            "total_count": 4,\n            "correct_answers_count": 0,\n            "unanswered_count": 4,\n            "incorrect_answers_count": 0,\n            "parent_subject_id": null,\n            "is_leaf": true,\n            "score": "0.00",\n            "partial_correct_answers_count": 0\n        }\n    ],\n    "difficulty_level_stats": {\n        "easy": {\n            "correct_answers_count": 0,\n            "incorrect_answers_count": 1,\n            "partial_correct_answers_count": 0,\n            "unanswered_count": 69,\n            "total_count": 70\n        },\n         "medium": {\n            "correct_answers_count": 0,\n            "incorrect_answers_count": 5,\n            "partial_correct_answers_count": 0,\n            "unanswered_count": 5,\n            "total_count": 10\n        }\n    },\n    "institute_attempt_id": 100101\n}\n\n')))}m.isMDXComponent=!0}}]);