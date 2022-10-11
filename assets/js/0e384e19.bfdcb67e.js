"use strict";(self.webpackChunktestpress_docs=self.webpackChunktestpress_docs||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),o=n(6010),s=n(2389),l=n(7392),i=n(7094),u=n(2466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:n,block:s,defaultValue:d,values:m,groupId:h,className:b}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,l.l)(f,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:T}=(0,i.U)(),[w,N]=(0,r.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=h){const e=g[h];null!=e&&e!==w&&f.some((t=>t.value===e))&&N(e)}const P=e=>{const t=e.currentTarget,n=O.indexOf(t),a=f[n].value;a!==w&&(E(t),N(a),null!=h&&T(h,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},b)},f.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:I,onFocus:P,onClick:P},s,{className:(0,o.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,s.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),s=n(5162);const l={sidebar_position:1},i="Authentication",u={unversionedId:"intro",id:"intro",title:"Authentication",description:"You need to authentication token to access the private resources and to generate access token for playback via Testpress API",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"serverAPISidebar",next:{title:"Single Sign On (SSO)",permalink:"/docs/server-api/single-sign-on"}},p={},c=[{value:"Generate authentication token",id:"generate-authentication-token",level:2},{value:"Sample code",id:"sample-code",level:3},{value:"Response",id:"response",level:3}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"You need to authentication token to access the private resources and to generate access token for playback via Testpress API"),(0,r.kt)("h2",{id:"generate-authentication-token"},"Generate authentication token"),(0,r.kt)("p",null,"Make Post request to the below link with the credentials to generate an authentication token."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"POST ",(0,r.kt)("a",{parentName:"strong",href:"http://demo.testpress.in/api/v2.5/auth-token/"},"http://demo.testpress.in/api/v2.5/auth-token/")," ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Username of the user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Password of the user")))),(0,r.kt)("h3",{id:"sample-code"},"Sample code"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'import requests\n\nurl = "https://demo.testpress.in/api/v2.5/auth-token/"\n\npayload = "{\\n    \\"username\\": \\"testpress\\",\\n    \\"password\\": \\"demo\\"\\n}"\nheaders = {\n    \'content-type\': "application/json",\n    \'cache-control\': "no-cache",\n    }\n\nresponse = requests.request("POST", url, data=payload, headers=headers)\n\nprint(response.text)\n'))),(0,r.kt)(s.Z,{value:"rb",label:"Ruby",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rb"},'re \'uri\'\nrequire \'net/http\'\n\nurl = URI("https://demo.testpress.in/api/v2.5/auth-token/")\n\nhttp = Net::HTTP.new(url.host, url.port)\nhttp.use_ssl = true\nhttp.verify_mode = OpenSSL::SSL::VERIFY_NONE\n\nrequest = Net::HTTP::Post.new(url)\nrequest["content-type"] = \'application/json\'\nrequest["cache-control"] = \'no-cache\'\nrequest.body = "{\\n    \\"username\\": \\"testpress\\",\\n    \\"password\\": \\"demo\\"\\n}"\n\nresponse = http.request(request)\nputs response.read_body\n\n'))),(0,r.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nOkHttpClient client = new OkHttpClient();\n\nMediaType mediaType = MediaType.parse("multipart/form-data; boundary=---011000010111000001101001");\nRequestBody body = RequestBody.create(mediaType, "-----011000010111000001101001\\r\\nContent-Disposition: form-data; name=\\"username\\"\\r\\n\\r\\nadmin\\r\\n-----011000010111000001101001\\r\\nContent-Disposition: form-data; name=\\"password\\"\\r\\n\\r\\ndemo\\r\\n-----011000010111000001101001--");\nRequest request = new Request.Builder()\n  .url("http://demo.testpress.in/api/v2.2/auth-token/")\n  .post(body)\n  .addHeader("content-type", "multipart/form-data; boundary=---011000010111000001101001")\n  .addHeader("authorization", "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MTM5NTYsInVzZXJfaWQiOjEzOTU2LCJlbWFpbCI6ImRlcy5wcm8ubWFkaGFuQGhvdG1haWwuY29tIiwiZXhwIjoxNDY0MzQwMzg1fQ.TElNLpQE8KERVe7Q-vjNk9aU-9prOfzBb43srB9WmC0")\n  .addHeader("cache-control", "no-cache")\n  .addHeader("postman-token", "987488b1-1b5f-dd8b-95fc-fea8d276b2ae")\n  .build();\n\nResponse response = client.newCall(request).execute();\n'))),(0,r.kt)(s.Z,{value:"php",label:"php",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"\n<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, array(\n  CURLOPT_URL => 'https://demo.testpress.in/api/v2.3/auth-token/',\n  CURLOPT_CUSTOMREQUEST => 'POST',\n  CURLOPT_POSTFIELDS =>'{\n    \"username\": \"<type_your_username_here>\",\n    \"password\": \"<type_your_password_here>\"\n}',\n  CURLOPT_HTTPHEADER => array(\n    'Content-Type: application/json'\n  ),\n));\n\n$response = curl_exec($curl);\n\ncurl_close($curl);\necho $response;\n")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Replace demo with your institute subdomain hereafter everywhere.")),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("p",null,"The response will return an token which should be prefixed with JWT and included in all API requests to the server in a header that looks like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Authorization: JWT auth-token-string\n")))}m.isMDXComponent=!0}}]);