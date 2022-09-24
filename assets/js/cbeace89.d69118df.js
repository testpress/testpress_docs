"use strict";(self.webpackChunktestpress_docs=self.webpackChunktestpress_docs||[]).push([[970],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),r=a(7294),l=a(6010),s=a(2389),o=a(7392),i=a(7094),p=a(2466);const u="tabList__CuJ",c="tabItem_LNqP";function m(e){var t;const{lazy:a,block:s,defaultValue:m,values:d,groupId:h,className:g}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=d??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,o.l)(y,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===m?m:m??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==f&&!y.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:T}=(0,i.U)(),[N,w]=(0,r.useState)(f),O=[],{blockElementScrollPositionUntilNextRender:S}=(0,p.o5)();if(null!=h){const e=v[h];null!=e&&e!==N&&y.some((t=>t.value===e))&&w(e)}const x=e=>{const t=e.currentTarget,a=O.indexOf(t),n=y[a].value;n!==N&&(S(t),w(n),null!=h&&T(h,String(n)))},_=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;a=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;a=O[t]??O[O.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},g)},y.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:_,onFocus:x,onClick:x},s,{className:(0,l.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,r.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,s.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},1975:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),s=a(5162);const o={sidebar_position:2},i="Single Sign On (SSO)",p={unversionedId:"server-api/single-sign-on",id:"server-api/single-sign-on",title:"Single Sign On (SSO)",description:"This endpoint is used to authenticate the user using your own existing authentication system.",source:"@site/docs/server-api/single-sign-on.md",sourceDirName:"server-api",slug:"/server-api/single-sign-on",permalink:"/testpress_docs/docs/server-api/single-sign-on",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"serverAPISidebar",previous:{title:"Authentication",permalink:"/testpress_docs/docs/intro"},next:{title:"Students APIs",permalink:"/testpress_docs/docs/category/students-apis"}},u={},c=[{value:"HTTP REQUEST",id:"http-request",level:3},{value:"PAYLOAD",id:"payload",level:3},{value:"HMAC Signature",id:"hmac-signature",level:3},{value:"SSO URL",id:"sso-url",level:3}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"single-sign-on-sso"},"Single Sign On (SSO)"),(0,r.kt)("p",null,"This endpoint is used to authenticate the user using your own existing authentication system."),(0,r.kt)("h3",{id:"http-request"},"HTTP REQUEST"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /sso_login/?sig=<hmac-signature>&sso=<payload>\n")),(0,r.kt)("p",null,"To generate SSO URL, you need to generate "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Payload"),(0,r.kt)("li",{parentName:"ol"},"HMAC signature")),(0,r.kt)("h3",{id:"payload"},"PAYLOAD"),(0,r.kt)("p",null,"The payload is a special string which is generated as follows"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Concatenate the parameters in the following table with &"),(0,r.kt)("li",{parentName:"ul"},"Encode the concatenated string with base64 encoding.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"email/username"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Email Address or username of the user respectively")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"time"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Time since epoch")))),(0,r.kt)("p",null,"Example with email"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"email=demo@testpress.in&time=1554879681\n")),(0,r.kt)("p",null,"Example with username"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"username=demo@testpress.in&time=1554879681\n")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'import base64, time\n\nepoch_time = int(time.time())\nquery_string = "email=demo@testpress.in&time={}".format(epoch_time)\npayload = base64.b64encode(query_string)\n\nprint(payload)\n')),(0,r.kt)("p",null,"The above snippet returns payload as shown below"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ZW1haWw9ZGVtb0B0ZXN0cHJlc3MuaW4mdGltZT0xNTU0ODc5Njgx\n"))),(0,r.kt)(s.Z,{value:"javascript",label:"NodeJs",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'let epochTime = Math.floor((new Date).getTime()/1000);\nqueryString = "email=demo@testpress.in&time=" + epochTime\npayload = btoa(queryString)\n\nconsole.log(payload)\n')),(0,r.kt)("p",null,"The above snippet returns payload as shown below"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ZW1haWw9ZGVtb0B0ZXN0cHJlc3MuaW4mdGltZT0xNTU0ODc5Njgx \n"))),(0,r.kt)(s.Z,{value:"php",label:"php",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'\n<?php\n    $epoch = time();\n    $email = "demo@testpress.in";\n    $qstring = "email=" . $email . "&time=" . $epoch;\n    $payload = base64_encode($qstring);\n    echo $payload;\n?>\n')),(0,r.kt)("p",null,"The above snippet returns payload as shown below"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ZW1haWw9ZGVtb0B0ZXN0cHJlc3MuaW4mdGltZT0xNTU0ODc5Njgx \n")))),(0,r.kt)("h3",{id:"hmac-signature"},"HMAC Signature"),(0,r.kt)("p",null,"HMAC (Hash-based message authentication code) is used to avoid tampering during the request flow. We use a time-based HMAC algorithm to limit the lifetime of the HMAC."),(0,r.kt)("p",null,"To generate the HMAC signature, the following are need"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"payload - Generate from the above step"),(0,r.kt)("li",{parentName:"ul"},"secret_key - Obtained from Testpress Team")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'import hashlib, hmac, time\n\nepoch_time = int(time.time())\nquery_string = "email=demo@testpress.in&time={}".format(epoch_time)\npayload = base64.b64encode(query_string)\n\nsecret_key = "abcxyzqwerty"\nhmac_signature = hmac.new(secret_key, payload, hashlib.sha256).hexdigest()\n\nprint(hmac_signature)\n')),(0,r.kt)("p",null,"The above snippet returns HMAC signature as shown below"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"aa747c502a898200f9e4fa21bac68136f886a0e27aec70ba06daf2e2a5cb5597\n"))),(0,r.kt)(s.Z,{value:"javascript",label:"NodeJs",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var CryptoJS = require("crypto-js")\n\nlet epochTime = Math.floor((new Date).getTime()/1000);\nqueryString = "email=demo@testpress.in&time=" + epochTime\npayload = btoa(queryString)\n\nlet secreteKey = "abcxyzqwerty"\nlet hmacSignature = CryptoJS.HmacSHA256(payload, secreteKey).toString(CryptoJS.enc.Hex);\n\nconsole.log(hmacSignature)\n\n')),(0,r.kt)("p",null,"The above snippet returns payload as shown below"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"aa747c502a898200f9e4fa21bac68136f886a0e27aec70ba06daf2e2a5cb5597 \n"))),(0,r.kt)(s.Z,{value:"php",label:"php",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'\n<?php\n  $epoch = time();\n  $email = "demo@tesptress.in";\n  $qstring = "email=" . $email . "&time=" . $epoch;\n  $payload = base64_encode($qstring);\n  $secret_key = "abcd";\n  $hmac_signature = hash_hmac(\'sha256\', $payload, $secret_key);\n  echo $hmac_signature;\n?>\n')),(0,r.kt)("p",null,"The above snippet returns payload as shown below"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"aa747c502a898200f9e4fa21bac68136f886a0e27aec70ba06daf2e2a5cb5597 \n")))),(0,r.kt)("h3",{id:"sso-url"},"SSO URL"),(0,r.kt)("p",null,"The SSO URL format is as shown below"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://demo.testpress.in/sso_login/?sig=<hmac-signature>&sso=<payload>\n")),(0,r.kt)("p",null,"In the above URL replace the {hmac-signature} and {payload} with your hmac signature and payload values generated using the above steps."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"E.g. https://demo.testpress.in/sso_login/?sig=aa747c502a898200f9e4fa21bac68136f886a0e27aec70ba06daf2e2a5cb5597&sso=ZW1haWw9ZGVtb0B0ZXN0cHJlc3MuaW4mdGltZT0xNTU0ODc5Njgx\n")),(0,r.kt)("p",null,"The epoch time limits the validity of the HMAC. We have a ",(0,r.kt)("em",{parentName:"p"},"30 minute")," delta to ensure the validity of the HMAC. For e.g. if the HMAC was generated at 10.30 AM, it will be valid only for the next 30 minutes and expires after 11.00 AM."))}d.isMDXComponent=!0}}]);