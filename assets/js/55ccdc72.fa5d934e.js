"use strict";(self.webpackChunktestpress_docs=self.webpackChunktestpress_docs||[]).push([[9251],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=o(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(k,s(s({ref:t},u),{},{components:n})):a.createElement(k,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var o=2;o<l;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6010),s=n(2389),i=n(7392),p=n(7094),o=n(2466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:n,block:s,defaultValue:d,values:m,groupId:k,className:b}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),_=m??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(_,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==g&&!_.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${_.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:v}=(0,p.U)(),[f,w]=(0,r.useState)(g),I=[],{blockElementScrollPositionUntilNextRender:T}=(0,o.o5)();if(null!=k){const e=N[k];null!=e&&e!==f&&_.some((t=>t.value===e))&&w(e)}const R=e=>{const t=e.currentTarget,n=I.indexOf(t),a=_[n].value;a!==f&&(T(t),w(a),null!=k&&v(k,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"Enter":R(e);break;case"ArrowRight":{const t=I.indexOf(e.currentTarget)+1;n=I[t]??I[0];break}case"ArrowLeft":{const t=I.indexOf(e.currentTarget)-1;n=I[t]??I[I.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},b)},_.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,key:t,ref:e=>I.push(e),onKeyDown:C,onClick:R},s,{className:(0,l.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":f===t})}),n??t)}))),n?(0,r.cloneElement)(h.filter((e=>e.props.value===f))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}function m(e){const t=(0,s.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),s=n(5162);const i={sidebar_position:4},p="Attempts",o={unversionedId:"server-api/admin-apis/attempts",id:"server-api/admin-apis/attempts",title:"Attempts",description:"Admin APIs require authorization token with admin privileges. You check the following link to generate authorization token. You need to provide admin username and password to generate token with admin privileges",source:"@site/docs/server-api/admin-apis/attempts.md",sourceDirName:"server-api/admin-apis",slug:"/server-api/admin-apis/attempts",permalink:"/docs/server-api/admin-apis/attempts",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"serverAPISidebar",previous:{title:"Mentors",permalink:"/docs/server-api/admin-apis/mentors"},next:{title:"Videos",permalink:"/docs/server-api/admin-apis/videos"}},u={},c=[{value:"List Attempts",id:"list-attempts",level:2},{value:"Examples",id:"examples",level:4},{value:"Get A Single Attempt",id:"get-a-single-attempt",level:2},{value:"HTTP Request",id:"http-request",level:4},{value:"URL Parameters",id:"url-parameters",level:4},{value:"Response",id:"response",level:4},{value:"Get Chapter Content Attempts",id:"get-chapter-content-attempts",level:2},{value:"HTTP Request",id:"http-request-1",level:4},{value:"Query Parameters",id:"query-parameters",level:4},{value:"Response",id:"response-1",level:4},{value:"Get Video Conference Attempts",id:"get-video-conference-attempts",level:2},{value:"HTTP Request",id:"http-request-2",level:4},{value:"URL Parameters",id:"url-parameters-1",level:4},{value:"Example",id:"example",level:4},{value:"Response Fields",id:"response-fields",level:4},{value:"Response",id:"response-2",level:4}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"attempts"},"Attempts"),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Admin APIs require authorization token with admin privileges. You check the following link to generate authorization token. You need to provide admin username and password to generate token with admin privileges")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://testpress.github.io/testpress_docs/docs/intro/"},"Authentication")),(0,r.kt)("p",null,"All operations related to user attempt can be done using the following end points."),(0,r.kt)("h2",{id:"list-attempts"},"List Attempts"),(0,r.kt)("p",null,"This endpoint returns all attempts. Attempts can be filtered based on user or exams"),(0,r.kt)("details",null,(0,r.kt)("summary",null," ",(0,r.kt)("b",null,"Get")," https:// institute_url /api/v2.5/admin/attempts",(0,r.kt)("br",null),"Attempts List API "),(0,r.kt)("p",null," This endpoint returns all attempts."),(0,r.kt)("h4",null," Parameters"),(0,r.kt)("h4",null," Query"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",{"text-align":"left"},"ordering"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"This will sort the results date Oldest started attempts will be displayed first ",(0,r.kt)("br",null),"-date - Recently started attempts will be displayed first correctanswers_count ",(0,r.kt)("br",null),"- Attempts with least correct answers will be displayed first ",(0,r.kt)("br",null),"-correct answers_count ",(0,r.kt)("br",null),"- Attempts with more correct answers will be displayed first incorrectLanswers_count ",(0,r.kt)("br",null),"- Attempts with least incorrect answers will be displayed first ",(0,r.kt)("br",null),"-incorrectanswers_count Attempts with more incorrect answerss will be displayed first unanswered_count ",(0,r.kt)("br",null),"- Attempts with least unanswered answers will be displayed first -unanswered_count ",(0,r.kt)("br",null),"- Attempts with more unanswered will be displayed first")),(0,r.kt)("tr",null,(0,r.kt)("td",{"text-align":"left"},"state"),(0,r.kt)("td",null,"number"),(0,r.kt)("td",null,"This will filter attempts based on the following states",(0,r.kt)("br",null),"0-Running Attempts",(0,r.kt)("br",null),"1- Completed Attempts",(0,r.kt)("br",null),"3-Not started")),(0,r.kt)("tr",null,(0,r.kt)("td",{"text-align":"left"},"date_1"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"This will display all attempts which started before this date")),(0,r.kt)("tr",null,(0,r.kt)("td",{"text-align":"left"},"date_0"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"This will display all attempts which started after this date")),(0,r.kt)("tr",null,(0,r.kt)("td",{"text-align":"left"},"Users"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"To get attempts of an user. Value should be user id",(0,r.kt)("br",null),"Ex: users=1")),(0,r.kt)("tr",null,(0,r.kt)("td",{"text-align":"left"},"exams"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"To filter attempts by exam. Value should be exam id exams",(0,r.kt)("br",null),"Ex: exams=3"))),(0,r.kt)("h4",null,"Responses"),(0,r.kt)("details",null,(0,r.kt)("summary",null," 200  "),(0,r.kt)("pre",null,(0,r.kt)("p",null,'{\n"count":1,\n"next":"',(0,r.kt)("a",{parentName:"p",href:"https://sandbox.testpress.in/api/v2.5/admin/attempts/?page=2%22"},'https://sandbox.testpress.in/api/v2.5/admin/attempts/?page=2"'),',\n"previous":null,\n"per_page":200,\n"results":','[\n{\nid: 68701,\ndate: "2021-03-16T03:59:21.860924Z",\nexam_id: 133,\nuser_id: 143,\nemail: null,\nname: null,\nphone: null,\ncorrect_answers_count: 220,\nincorrect_answers_count: 20,\nunanswered_count: 200,\nscore: "90.00",\npercentage: 0,\ntime_taken: "0:00:00",\nremaining_time: null,\nresult: "Not taken",\nstate: "Completed",\nlast_started_time: null,\nlast_answer_updated_time: null,\nspeed: 0,\nexam_url: "https://sandbox.testpress.in/api/v2.5/admin/exams/133/",\nuser_url: "https://sandbox.testpress.in/api/v2.5/admin/users/133/"\n}]',"\n}")))),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/api/v2.5/admin/attempts/?exams=5")," - This will display attempt of exam with id 5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/api/v2.5/admin/attempts/?users=1&exams=2")," - This will display attempts of exam whose id is 2 for the user id 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/api/v2.5/admin/attempts/?date_0=2020-01-11&date_1=2021-02-02&ordering=date")," - This will display attempts that are attempted between 11/1/2020 and 2/2/2021. Oldest attempted exams will be displayed first")),(0,r.kt)("h2",{id:"get-a-single-attempt"},"Get A Single Attempt"),(0,r.kt)("p",null,"This endpoint retrieves a single attempt."),(0,r.kt)("h4",{id:"http-request"},"HTTP Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /api/v2.5/admin/attempts/<id>/\n")),(0,r.kt)("h4",{id:"url-parameters"},"URL Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"The unique id of the attempt to retrieve")))),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"bash",label:"cURL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request GET \\\n  --url http://demo.testpress.in/api/v2.5/admin/attempts/125894/ \\\n  --header 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw' \\\n  --header 'cache-control: no-cache'\n\n"))),(0,r.kt)(s.Z,{value:"rb",label:"Ruby",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rb"},"require 'uri'\nrequire 'net/http'\n\nurl = URI(\"http://demo.testpress.in/api/v2.5/admin/attempts/125894/\")\n\nhttp = Net::HTTP.new(url.host, url.port)\n\nrequest = Net::HTTP::Get.new(url)\nrequest[\"authorization\"] = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw'\nrequest[\"cache-control\"] = 'no-cache'\n\nresponse = http.request(request)\nputs response.read_body\n"))),(0,r.kt)(s.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'import requests\n\nurl = "http://demo.testpress.in/api/v2.5/admin/attempts/125894/"\n\nheaders = {\n    \'authorization\': "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw",\n    \'cache-control\': "no-cache"\n    }\n\nresponse = requests.request("GET", url, headers=headers)\n\nprint(response.text)\n\n')))),(0,r.kt)("h4",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "date": "2023-01-23T11:35:37.930389+05:30",\n    "exam_id": 2,\n    "user_id": 2,\n    "email": "hariharan@testpress.in",\n    "name": null,\n    "phone": null,\n    "correct_answers_count": 0,\n    "incorrect_answers_count": 1,\n    "unanswered_count": 79,\n    "score": "0.00",\n    "percentage": 0,\n    "percentile": 100.0,\n    "time_taken": "2:47:53.076906",\n    "remaining_time": "0:00:00",\n    "result": "Fail",\n    "state": "Completed",\n    "last_started_time": "2023-04-02T15:27:46.453786+05:30",\n    "last_answer_updated_time": "2023-04-02T15:27:59.639308+05:30",\n    "speed": 0,\n    "exam_url": "http://demo.tespress.in/api/v2.5/admin/exams/2/",\n    "user_url": "http://demo.tespress.in/api/v2.5/admin/users/2/",\n    "username": "admin",\n    "sections": [\n        {\n            "id": 1,\n            "order": 0,\n            "section_id": 2,\n            "time_taken": "0:00:00",\n            "correct_answers_count": 0,\n            "incorrect_answers_count": 0,\n            "unanswered_count": 20,\n            "score": "0.00"\n        },\n        {\n            "id": 2,\n            "order": 1,\n            "section_id": 3,\n            "time_taken": "0:00:00",\n            "correct_answers_count": 0,\n            "incorrect_answers_count": 1,\n            "unanswered_count": 20,\n            "score": "0.00"\n        },\n        {\n            "id": 3,\n            "order": 2,\n            "section_id": 4,\n            "time_taken": "0:00:00",\n            "correct_answers_count": 0,\n            "incorrect_answers_count": 0,\n            "unanswered_count": 20,\n            "score": "0.00"\n        },\n        {\n            "id": 4,\n            "order": 3,\n            "section_id": 5,\n            "time_taken": "0:00:00",\n            "correct_answers_count": 0,\n            "incorrect_answers_count": 0,\n            "unanswered_count": 19,\n            "score": "0.00"\n        }\n    ],\n    "subject_stats": [\n        {\n            "subject_id": 1,\n            "subject_name": "Geography",\n            "total_count": 64,\n            "correct_answers_count": 0,\n            "unanswered_count": 63,\n            "incorrect_answers_count": 1,\n            "parent_subject_id": null,\n            "is_leaf": true,\n            "score": "0.00",\n            "partial_correct_answers_count": 0\n        },\n        {\n            "subject_id": 2,\n            "subject_name": "Current affairs",\n            "total_count": 12,\n            "correct_answers_count": 0,\n            "unanswered_count": 12,\n            "incorrect_answers_count": 0,\n            "parent_subject_id": null,\n            "is_leaf": true,\n            "score": "0.00",\n            "partial_correct_answers_count": 0\n        },\n        {\n            "subject_id": null,\n            "subject_name": "History",\n            "total_count": 4,\n            "correct_answers_count": 0,\n            "unanswered_count": 4,\n            "incorrect_answers_count": 0,\n            "parent_subject_id": null,\n            "is_leaf": true,\n            "score": "0.00",\n            "partial_correct_answers_count": 0\n        }\n    ],\n    "difficulty_level_stats": {\n        "easy": {\n            "correct_answers_count": 0,\n            "incorrect_answers_count": 1,\n            "partial_correct_answers_count": 0,\n            "unanswered_count": 69,\n            "total_count": 70\n        },\n         "medium": {\n            "correct_answers_count": 0,\n            "incorrect_answers_count": 5,\n            "partial_correct_answers_count": 0,\n            "unanswered_count": 5,\n            "total_count": 10\n        }\n    },\n    "institute_attempt_id": 100101\n}\n\n')),(0,r.kt)("h2",{id:"get-chapter-content-attempts"},"Get Chapter Content Attempts"),(0,r.kt)("p",null,"This endpoint retrieves the chapter content attempts list for all users."),(0,r.kt)("h4",{id:"http-request-1"},"HTTP Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /api/v3/admin/chapter-content-attempts/\n")),(0,r.kt)("h4",{id:"query-parameters"},"Query Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user_ids"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique user ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chapter_ids"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique chapter ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"course_ids"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique course ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chapter_content_ids"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique chapter content ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exam_id"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique exam ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content_type"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of content")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Status of the attempt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"completed_date"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"date in the format yyyy-mm-dd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"completed_before"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"date in the format yyyy-mm-dd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"completed_after"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"date in the format yyyy-mm-dd")))),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"bash",label:"cURL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request GET \\\n  --url http://demo.testpress.in/api/v3/admin/chapter-content-attempts/ \\\n  --header 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw' \\\n  --header 'cache-control: no-cache'\n\n"))),(0,r.kt)(s.Z,{value:"rb",label:"Ruby",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rb"},"require 'uri'\nrequire 'net/http'\n\nurl = URI(\"http://demo.testpress.in/api/v3/admin/chapter-content-attempts/\")\n\nhttp = Net::HTTP.new(url.host, url.port)\n\nrequest = Net::HTTP::Get.new(url)\nrequest[\"authorization\"] = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw'\nrequest[\"cache-control\"] = 'no-cache'\n\nresponse = http.request(request)\nputs response.read_body\n"))),(0,r.kt)(s.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'import requests\n\nurl = "http://demo.testpress.in/api/v3/admin/chapter-content-attempts/"\n\nheaders = {\n    \'authorization\': "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw",\n    \'cache-control\': "no-cache"\n    }\n\nresponse = requests.request("GET", url, headers=headers)\n\nprint(response.text)\n\n')))),(0,r.kt)("h4",{id:"response-1"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "count": 1,\n    "next": null,\n    "previous": null,\n    "per_page": 250,\n    "results": {\n        "content_attempts": [\n           {\n                "id": 764,\n                "user_id": 9,\n                "course_id": 8,\n                "chapter_id": 33,\n                "chapter_content_id": 127,\n                "content_type": "video",\n                "state": "Started",\n                "remaining_time": null,\n                "assessment_id": null,\n                "user_video_conference_id": null,\n                "user_video_id": 55,\n                "user_live_stream_id": null,\n                "user_content_id": null,\n                "user_attachment_id": null,\n                "created": "2024-07-15T18:49:52.059055+05:30",\n                "completed_on": null\n            },\n        ],\n        "user_videos": [\n            {\n                "id": 55,\n                "video_id": 18,\n                "created": "2024-07-15T18:38:42.853855+05:30",\n                "watched_percentage": 0,\n                "remaining_duration": null,\n                "state": "Started",\n                "is_live_class_recording": false\n            }\n            \n        ]\n    }\n}\n')),(0,r.kt)("h2",{id:"get-video-conference-attempts"},"Get Video Conference Attempts"),(0,r.kt)("p",null,"This endpoint retrieves the details of attempts for a video conference."),(0,r.kt)("h4",{id:"http-request-2"},"HTTP Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /api/v3/admin/attempts/<id>/video-conference/\n")),(0,r.kt)("h4",{id:"url-parameters-1"},"URL Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"The unique id of the video conference")))),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/api/v3/admin/attempts/12/video-conference/")),(0,r.kt)("p",null,"This endpoint will retrieve the details of attempts for the video conference with ID 12."),(0,r.kt)("h4",{id:"response-fields"},"Response Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Email of the user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"joined_time"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Time of joining the video conference in ISO 8601 format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"leave_time"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Time of leaving the video conference in ISO 8601 format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"duration"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Duration of attendance in seconds")))),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"bash",label:"cURL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request GET \\\n  --url http://demo.testpress.in/api/v3/admin/attempts/12/video-conference/ \\\n  --header 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw' \\\n  --header 'cache-control: no-cache'\n\n"))),(0,r.kt)(s.Z,{value:"rb",label:"Ruby",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rb"},"require 'uri'\nrequire 'net/http'\n\nurl = URI(\"http://demo.testpress.in/api/v3/admin/attempts/12/video-conference/\")\n\nhttp = Net::HTTP.new(url.host, url.port)\n\nrequest = Net::HTTP::Get.new(url)\nrequest[\"authorization\"] = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw'\nrequest[\"cache-control\"] = 'no-cache'\n\nresponse = http.request(request)\nputs response.read_body\n"))),(0,r.kt)(s.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'import requests\n\nurl = "http://demo.testpress.in/api/v3/admin/attempts/12/video-conference/"\n\nheaders = {\n    \'authorization\': "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RwcmVzcyIsInVzZXJfaWQiOjE3LCJlbWFpbCI6InRlc3RwcmVzcy5pbkBnbWFpbC5jb20iLCJleHAiOjE0NDc4MzMyMjl9.Ik_yi4lHbNbrRGhqmRpsW82Nls_O9lgXakk_syV-vSw",\n    \'cache-control\': "no-cache"\n    }\n\nresponse = requests.request("GET", url, headers=headers)\n\nprint(response.text)\n\n')))),(0,r.kt)("h4",{id:"response-2"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "count": 2,\n    "next": null,\n    "previous": null,\n    "per_page": 20,\n    "results": [\n        {\n            "name": "deva",\n            "email": "deva@testpress.in",\n            "join_time": "2024-06-10T16:20:26+05:30",\n            "leave_time": "2024-06-10T16:22:26+05:30",\n            "duration": 120\n        },\n        {\n            "name": "alwin",\n            "email": "alwin@testpress.in",\n            "join_time": "2024-06-10T16:19:55+05:30",\n            "leave_time": "2024-06-10T16:22:27+05:30",\n            "duration": 152\n        }\n    ]\n}\n')))}m.isMDXComponent=!0}}]);