"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[8587],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(r),m=n,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return r?a.createElement(f,l(l({ref:t},p),{},{components:r})):a.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6854:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const i={title:"\ud83c\udd99 RPC API",sidebar_position:9},l="\ud83c\udd99 RPC API",o={unversionedId:"standards/rpc-api",id:"standards/rpc-api",title:"\ud83c\udd99 RPC API",description:"This page is under active development.",source:"@site/docs/standards/rpc-api.md",sourceDirName:"standards",slug:"/standards/rpc-api",permalink:"/standards/rpc-api",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/rpc-api.md",tags:[],version:"current",lastUpdatedAt:1660718732,formattedLastUpdatedAt:"Aug 17, 2022",sidebarPosition:9,frontMatter:{title:"\ud83c\udd99 RPC API",sidebar_position:9},sidebar:"standardsSidebar",previous:{title:"LSP14Ownable2Step",permalink:"/standards/smart-contracts/lsp14-ownable-2-step"},next:{title:"Multi-channel nonces",permalink:"/standards/faq/channel-nonce"}},s={},d=[{value:"Methods",id:"methods",level:2},{value:"up_addRelayService",id:"up_addrelayservice",level:3},{value:"Parameters",id:"parameters",level:4},{value:"1. <code>relayer</code> - Object",id:"1-relayer---object",level:5},{value:"Returns",id:"returns",level:4},{value:"1. <code>String Array</code> - Array of universal profile addresses the user selected for this relay service",id:"1-string-array---array-of-universal-profile-addresses-the-user-selected-for-this-relay-service",level:5},{value:"up_import",id:"up_import",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"1. <code>String</code> - Universal profile address to add to the extension",id:"1-string---universal-profile-address-to-add-to-the-extension",level:5},{value:"Returns",id:"returns-1",level:4},{value:"1. <code>String</code> - New controller address, to be added to the profile by the dapp.",id:"1-string---new-controller-address-to-be-added-to-the-profile-by-the-dapp",level:5}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-rpc-api"},"\ud83c\udd99 RPC API"),(0,n.kt)("admonition",{title:"Work in progress",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"This page is under active development.")),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"../guides/browser-extension/install-browser-extension"},"LUKSO Extension")," uses new RPC API which are described here."),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"up_addrelayservice"},"up_addRelayService"),(0,n.kt)("p",null,"Add a custom relayer."),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("h5",{id:"1-relayer---object"},"1. ",(0,n.kt)("inlineCode",{parentName:"h5"},"relayer")," - Object"),(0,n.kt)("p",null,"Object containing the new relayer properties. To find more information about custom relayers, you can read the ",(0,n.kt)("a",{parentName:"p",href:"https://www.notion.so/lukso/Transaction-Relay-Service-API-Standard-2bda58f4f47f4497bb3381654acda8c3"},"Transaction Relay Service API"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"name")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The name of the relayer.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"apiUrl")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The base API URL.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"chainIds")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Array of string (hex) or int.")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"params: [\n  {\n    name: 'My Relayer',\n    apiUrl: 'https://relayer.l16.staging.lukso.dev/api/v1/',\n    chainIds: [2828],\n  },\n];\n")),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("h5",{id:"1-string-array---array-of-universal-profile-addresses-the-user-selected-for-this-relay-service"},"1. ",(0,n.kt)("inlineCode",{parentName:"h5"},"String Array")," - Array of universal profile addresses the user selected for this relay service"),(0,n.kt)("p",null,"It returns an array of Universal Profile addresses."),(0,n.kt)("h3",{id:"up_import"},"up_import"),(0,n.kt)("p",null,"Add a Universal Profile address."),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("h5",{id:"1-string---universal-profile-address-to-add-to-the-extension"},"1. ",(0,n.kt)("inlineCode",{parentName:"h5"},"String")," - Universal profile address to add to the extension"),(0,n.kt)("p",null,"The Universal Profile address to add."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"params: ['0x311611C9A46a192C14Ea993159a0498EDE5578aC'];\n")),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("h5",{id:"1-string---new-controller-address-to-be-added-to-the-profile-by-the-dapp"},"1. ",(0,n.kt)("inlineCode",{parentName:"h5"},"String")," - New controller address, to be added to the profile by the dapp."),(0,n.kt)("p",null,"TODO"))}c.isMDXComponent=!0}}]);