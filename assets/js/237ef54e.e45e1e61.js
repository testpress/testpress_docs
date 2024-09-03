"use strict";(self.webpackChunktestpress_docs=self.webpackChunktestpress_docs||[]).push([[667],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),o=n(6010),s=n(2389),i=n(7392),l=n(7094),p=n(2466);const u="tabList__CuJ",d="tabItem_LNqP";function c(e){var t;const{lazy:n,block:s,defaultValue:c,values:m,groupId:h,className:y}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,i.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===c?c:c??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:I}=(0,l.U)(),[N,T]=(0,r.useState)(k),C=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=h){const e=f[h];null!=e&&e!==N&&v.some((t=>t.value===e))&&T(e)}const J=e=>{const t=e.currentTarget,n=C.indexOf(t),a=v[n].value;a!==N&&(O(t),T(a),null!=h&&I(h,String(a)))},A=e=>{var t;let n=null;switch(e.key){case"Enter":J(e);break;case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},y)},v.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>C.push(e),onKeyDown:A,onClick:J},s,{className:(0,o.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,s.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},8447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),s=n(5162);const i={sidebar_position:10},l="Products",p={unversionedId:"server-api/admin-apis/products",id:"server-api/admin-apis/products",title:"Products",description:"Admin APIs require authorization token with admin privileges. You check the following link to generate authorization token. You need to provide admin username and password to generate token with admin privileges.",source:"@site/docs/server-api/admin-apis/products.md",sourceDirName:"server-api/admin-apis",slug:"/server-api/admin-apis/products",permalink:"/docs/server-api/admin-apis/products",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"serverAPISidebar",previous:{title:"Exams",permalink:"/docs/server-api/admin-apis/exams"},next:{title:"Single Sign On (SSO)",permalink:"/docs/server-api/Integration/single-sign-on"}},u={},d=[{value:"Create Cash Record",id:"create-cash-record",level:2},{value:"HTTP Request",id:"http-request",level:3},{value:"Fields",id:"fields",level:3},{value:"Response",id:"response",level:3}],c={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"products"},"Products"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Admin APIs require authorization token with admin privileges. You check the following link to generate authorization token. You need to provide admin username and password to generate token with admin privileges.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://testpress.github.io/testpress_docs/docs/intro/"},"Authentication")),(0,r.kt)("h2",{id:"create-cash-record"},"Create Cash Record"),(0,r.kt)("p",null,"This endpoint records a cash payment for a user purchasing a product. It is useful for situations where users make payments offline or outside of Testpress. Upon successful creation of the payment record, the user will automatically gain access to the courses and exams associated with the product. The product's validity and expiry date for that user will be automatically managed."),(0,r.kt)("h3",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/v2.5/admin/products/<:product-slug>/add-cash-payment/")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user_id"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"ID of the Testpress user.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount"),(0,r.kt)("td",{parentName:"tr",align:null},"integer/float"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment amount upto 2 decimal places.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"note"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"An optional note that you can add to this cash payment record.")))),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"`URL`",label:"cURL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request POST \\\n  --url http://demo.testpress.in/api/v2.5/admin/products/testing-product-1/add-cash-payment/ \\\n  --header 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84' \\\n  --header 'cache-control: no-cache' \\\n  --header 'content-type: application/json' \\\n  --data '{\"user_id\": 23, \"amount\": 999, \"note\": \"Added via API\"}'\n"))),(0,r.kt)(s.Z,{value:"`ruby`",label:"Ruby",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'require \'uri\'\nrequire \'net/http\'\n\nurl = URI("http://demo.testpress.in/api/v2.5/admin/products/testing-product-1/add-cash-payment/")\n\nhttp = Net::HTTP.new(url.host, url.port)\n\nrequest = Net::HTTP::Post.new(url)\nrequest["content-type"] = \'application/json\'\nrequest["authorization"] = \'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84\'\nrequest["cache-control"] = \'no-cache\'\nrequest.body = "{\\n    \\"user_id\\": 23,\\n    \\"amount\\": 999,\\n    \\"note\\": \\"Added via API\\"}"\n\nresponse = http.request(request)\nputs response.read_body\n'))),(0,r.kt)(s.Z,{value:"`python`",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import requests\n\nurl = "http://demo.testpress.in/api/v2.5/admin/products/testing-product-1/add-cash-payment/"\n\npayload = "{\\n    \\"user_id\\": 23,\\n    \\"amount\\": 999,\\n    \\"note\\": \\"Added via API\\"}"\nheaders = {\n    \'content-type\': "application/json",\n    \'authorization\': "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84",\n    \'cache-control\': "no-cache"\n    }\n\nresponse = requests.request("POST", url, data=payload, headers=headers)\n\nprint(response.text)\n'))),(0,r.kt)(s.Z,{value:"`c`",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'var client = new RestClient("http://demo.testpress.in/api/v2.5/admin/products/testing-product-1/add-cash-payment/");\nvar request = new RestRequest(Method.POST);\nrequest.AddHeader("cache-control", "no-cache");\nrequest.AddHeader("authorization", "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84");\nrequest.AddHeader("content-type", "application/json");\nrequest.AddParameter("application/json", "{\\n    \\"user_id\\": 23,\\n    \\"amount\\": 999,\\n    \\"note\\": \\"Added via API\\"}", ParameterType.RequestBody);\nIRestResponse response = client.Execute(request);\n'))),(0,r.kt)(s.Z,{value:"`php`",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, array(\n  CURLOPT_URL => 'http://demo.testpress.in/api/v2.5/admin/products/testing-product-1/add-cash-payment/',\n  CURLOPT_CUSTOMREQUEST => 'POST',\n  CURLOPT_POSTFIELDS =>'{\n    \"user_id\": 23,\n    \"amount\": 999,\n    \"note\": \"Added via API\",\n}',\n  CURLOPT_HTTPHEADER => array(\n    'Authorization: JWT <Enter authorization code here>',\n    'Content-Type: application/json'\n  ),\n));\n\n$response = curl_exec($curl);\n\ncurl_close($curl);\necho $response;\n\n"))),(0,r.kt)(s.Z,{value:"`java`",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'OkHttpClient client = new OkHttpClient();\n\nMediaType mediaType = MediaType.parse("application/json");\nRequestBody body = RequestBody.create(mediaType, "{\\n    \\"user_id\\": 23,\\n    \\"amount\\": 999,\\n    \\"note\\": \\"Added via API\\"}");\nRequest request = new Request.Builder()\n  .url("http://demo.testpress.in/api/v2.5/admin/products/testing-product-1/add-cash-payment/")\n  .post(body)\n  .addHeader("content-type", "application/json")\n  .addHeader("authorization", "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84")\n  .addHeader("cache-control", "no-cache")\n  .build();\n\nResponse response = client.newCall(request).execute();\n'))),(0,r.kt)(s.Z,{value:"`nodejs`",label:"NodeJs",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var http = require("http");\n\nvar options = {\n  "method": "POST",\n  "hostname": "demo.testpress.in",\n  "port": null,\n  "path": "/api/v2.5/admin/products/testing-product-1/add-cash-payment/",\n  "headers": {\n    "content-type": "application/json",\n    "authorization": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84",\n    "cache-control": "no-cache"\n  }\n};\n\nvar req = http.request(options, function (res) {\n  var chunks = [];\n\n  res.on("data", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on("end", function () {\n    var body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n});\n\nreq.write(JSON.stringify({ \n  user_id: 23,\n  amount: 999,\n  note: \'Added via API\',\n}));\nreq.end();\n'))),(0,r.kt)(s.Z,{value:"`go`",label:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "strings"\n    "net/http"\n    "io/ioutil"\n)\n\nfunc main() {\n\n    url := "http://demo.testpress.in/api/v2.5/admin/products/testing-product-1/add-cash-payment/"\n\n    payload := strings.NewReader("{\\n    \\"user_id\\": 23,\\n    \\"amount\\": 999,\\n    \\"note\\": \\"Added via API\\"}")\n\n    req, _ := http.NewRequest("POST", url, payload)\n\n    req.Header.Add("content-type", "application/json")\n    req.Header.Add("authorization", "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MzgsInVzZXJfaWQiOjM4LCJlbWFpbCI6ImRpbmVzaEB0ZXN0cHJlc3MuaW4iLCJleHAiOjE0NzAyMjk2MDd9.ynLE30wWup2CXMqgpNjT4ZBAUAtttqebzat-stuVB84")\n    req.Header.Add("cache-control", "no-cache")\n\n    res, _ := http.DefaultClient.Do(req)\n\n    defer res.Body.Close()\n    body, _ := ioutil.ReadAll(res.Body)\n\n    fmt.Println(res)\n    fmt.Println(string(body))\n\n}\n')))),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 1892,\n  "user_id": 23,\n  "amount": "999.00",\n  "note": "Added via API",\n}\n')))}m.isMDXComponent=!0}}]);