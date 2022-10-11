"use strict";(self.webpackChunktestpress_docs=self.webpackChunktestpress_docs||[]).push([[408],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),d=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(r),c=a,f=m["".concat(o,".").concat(c)]||m[c]||u[c]||s;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<s;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7963:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const s={sidebar_position:8},l="Exams",i={unversionedId:"server-api/admin-apis/exams",id:"server-api/admin-apis/exams",title:"Exams",description:"GET https://lmsdemo.testpress.in/api/v2.5/admin/exams/  Exams List API",source:"@site/docs/server-api/admin-apis/exams.md",sourceDirName:"server-api/admin-apis",slug:"/server-api/admin-apis/exams",permalink:"/docs/server-api/admin-apis/exams",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"serverAPISidebar",previous:{title:"Courses",permalink:"/docs/server-api/admin-apis/courses"}},o={},d=[{value:"Parameters",id:"parameters",level:3},{value:"Query",id:"query",level:4},{value:"Responses",id:"responses",level:4},{value:"Examples:",id:"examples",level:3}],p={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"exams"},"Exams"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null," GET")," https://lmsdemo.testpress.in/api/v2.5/admin/exams/ ",(0,a.kt)("br",null)," ",(0,a.kt)("b",null,"Exams List API")),(0,a.kt)("p",null,"This will return list of exams"),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("h4",{id:"query"},"Query"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"ordering"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"TThis will sort the results start_date (Exams with oldest start date will be displayed first)-start_date (Exams with latest start date will be displayed first)end_date (Exams with oldest end date will be displayed first)-end_date (Exams with latest end date will be displayed first)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"end_date"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"This will filter exams which are lesser than the provided end date. Date format is YYYY-MM-DD. Ex: 2021-12-02")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"start_date"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"This will filter exams which are greater than the provided start date. Date format is YYYY-MM-DD. Ex: 2010oo-12-02")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"status"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"Can be running, upcoming, completed"))),(0,a.kt)("h4",{id:"responses"},"Responses"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"200")),(0,a.kt)("pre",null,(0,a.kt)("p",null,'{\n"count":1,\n"next":null,\n"previous":null,\n"per_page":200,\n"results":','[\n{\n"created":"2021-04-13T11:45:28.582267Z",\n"description":"",\n"duration":"17:15:12",\n"enable_ranks":false,\n"end_date":null,\n"mark_per_question":"1.00",\n"modified":"2021-04-16T10:25:47.838579Z",\n"negative_marks":"0.00",\n"number_of_questions":8,\n"pass_percentage":50,\n"published":true,\n"start_date":"2021-04-13T11:45:12Z",\n"title":"All Question Types",\n"show_score":true,\n"show_percentile":true,\n"show_pass_or_fail":false,\n"total_marks":"7.00"\n}\n]',"\n}")))),(0,a.kt)("h3",{id:"examples"},"Examples:"),(0,a.kt)("p",null,"/api/v2.5/admin/exams/?start_date=2020-02-02&ordering=-start_date"),(0,a.kt)("p",null,"The above URL will display exams that have start date greater than 2nd Feb 2020 and exams with recent start date will displayed first"),(0,a.kt)("p",null,"/api/v2.5/admin/exams/?status=running&ordering=start_date"),(0,a.kt)("p",null,"The above URL will display exams are running and exams with oldest start date will be displayed first"))}u.isMDXComponent=!0}}]);