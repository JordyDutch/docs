"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[2570],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=i,f=p["".concat(s,".").concat(u)]||p[u]||h[u]||r;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_label:"LSP20 - Call Verification",sidebar_position:6},o="LSP20 - Call Verification",l={unversionedId:"standards/generic-standards/lsp20-call-verification",id:"standards/generic-standards/lsp20-call-verification",title:"LSP20 - Call Verification",description:"LSP20 - Call Verification",source:"@site/docs/standards/generic-standards/lsp20-call-verification.md",sourceDirName:"standards/generic-standards",slug:"/standards/generic-standards/lsp20-call-verification",permalink:"/standards/generic-standards/lsp20-call-verification",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/generic-standards/lsp20-call-verification.md",tags:[],version:"current",lastUpdatedAt:1687355469,formattedLastUpdatedAt:"Jun 21, 2023",sidebarPosition:6,frontMatter:{sidebar_label:"LSP20 - Call Verification",sidebar_position:6},sidebar:"standardsSidebar",previous:{title:"LSP17 - Contract Extension",permalink:"/standards/generic-standards/lsp17-contract-extension"},next:{title:"Introduction",permalink:"/standards/universal-profile/introduction"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"What does this standard represent ?",id:"what-does-this-standard-represent-",level:2},{value:"Specification",id:"specification",level:2},{value:"Delegating Contract",id:"delegating-contract",level:3},{value:"Verification-receiving Contract (Logic Verifier)",id:"verification-receiving-contract-logic-verifier",level:3},{value:"Example Usage",id:"example-usage",level:3}],d={toc:c};function h(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lsp20---call-verification"},"LSP20 - Call Verification"),(0,i.kt)("admonition",{title:"Standard Document",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-20-CallVerification.md"},"LSP20 - Call Verification"))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Smart contracts often have complex requirements that need to be checked before executing a function. These requirements might change over time, adding to the complexity of managing them within the same contract."),(0,i.kt)("p",null,"In order to maintain the integrity and security of smart contracts, while enhancing their ability to respond to change, a mechanism that enables a contract to delegate the verification of a function call to another contract can be extremely useful. This mechanism would not only ensure the fulfillment of varying requirements but also allow these requirements to be modified, updated, or enhanced without disrupting the primary contract's functionality."),(0,i.kt)("h2",{id:"what-does-this-standard-represent-"},"What does this standard represent ?"),(0,i.kt)("p",null,"The LSP20 standard addresses this issue by introducing a mechanism for delegating the verification of a function call to another contract. This enables the smart contract to update, modify, or enhance the requirements without affecting the primary contract's functionality, making the smart contract more versatile and adaptable."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"LSP20Verification",src:n(4412).Z,width:"2828",height:"1414"})),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("p",null,"The LSP20 standard defines two sections, detailing the expected behavior in both the delegating contract and the verification-receiving contract."),(0,i.kt)("h3",{id:"delegating-contract"},"Delegating Contract"),(0,i.kt)("p",null,"The behavior of the delegating contract is defined in the LSP20 standard. When a function in this contract is called, it should forward the call to the ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp20VerifyCall")," function implemented on the verification-receiving contract, passing the necessary arguments for verification. These arguments include:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Caller information"),(0,i.kt)("li",{parentName:"ol"},"Amount of native tokens sent (",(0,i.kt)("inlineCode",{parentName:"li"},"msg.value"),")"),(0,i.kt)("li",{parentName:"ol"},"Calldata provided by the caller (the function called and its arguments)")),(0,i.kt)("p",null,"The logic verifier contract uses these arguments to perform the verification. For example, it may have logic that checks how much LYX is sent and authorizes the call based on a minimum amount sent. Alternatively, it could verify solely based on the address of the caller, irrespective of the amount of LYX sent."),(0,i.kt)("p",null,"Once the ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp20VerifyCall")," verifies and authorizes the call, an optional post-execution check can be performed through the ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp20VerifyCallResult")," function. The result of the executed function gets passed to the logic verifier, which allows for checks such as balance changes or other aspects of the contract."),(0,i.kt)("h3",{id:"verification-receiving-contract-logic-verifier"},"Verification-receiving Contract (Logic Verifier)"),(0,i.kt)("p",null,"The logic verifier contract, which receives the delegation for verification, is required to implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp20VerifyCall")," function, and ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp20VerifyCallResult")," function if it is to be used for post-execution checks."),(0,i.kt)("p",null,"There is no standardized logic for these functions; it is up to the implementer to decide how to use them and integrate any required logic. The parameters provide context about the call's different aspects (caller, value sent, data sent), and it's up to the implementer to decide whether to allow it or not. As mentioned, the return value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp20VerifyCall")," function determines whether the ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp20VerifyCallResult")," should be invoked."),(0,i.kt)("h3",{id:"example-usage"},"Example Usage"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Online marketplace")),(0,i.kt)("p",null,"Imagine a smart contract that governs an online marketplace where users can buy and sell goods. Each transaction in this marketplace might require specific verification checks like verifying the availability of goods from the seller, confirming the buyer's payment ability, and potentially even checking the reputation score of both parties."),(0,i.kt)("p",null,"By leveraging the LSP20 standard, the marketplace contract can delegate these complex verification tasks to a separate logic verifier contract. In case the marketplace wants to introduce new checks in the future such as KYC status, dispute history, etc., they simply update the logic verifier contract. This decoupling of verification logic from the primary contract ensures that the marketplace contract remains agile, adaptable, and easy to manage."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Universal Profiles with Key Manager")),(0,i.kt)("p",null,"When a Universal Profile is owned by a Key Manager, multiple controllers can use the Universal Profile according to the permissions they are granted. However this setup creates the following problem: since the ",(0,i.kt)("inlineCode",{parentName:"p"},"owner()")," of the Universal Profile is the Key Manager, every single interactions must be done through the Key Manager."),(0,i.kt)("p",null,"This creates development complexity, as interactions must be crafted, encoded and send to the Key Manager instead. Calling the Universal Profile directly is not possible."),(0,i.kt)("p",null,"LSP20 being embedded in LSP0 (the smart contract based account under a Universal Profile) simplify this complexity, allowing anyone to interact directly with the Universal Profile without having to go through the Key Manager first. The LSP20 module embedded in the Universal Profile will see that the request does not come from the Key Manager directly, and will instead forward the request and the calldata back to the Key Manager to verify the permissions of the caller first."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"LSP20 with LSP6 Key Manager",src:n(1086).Z,width:"2572",height:"1554"})))}h.isMDXComponent=!0},4412:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/LSP20-Verification-7e7660f033b4fef994eaba0c48aebf6e.jpeg"},1086:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/LSP20-example-LSP6-2af355425a5873f9474cf4329ce859a7.jpeg"}}]);