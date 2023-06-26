"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[864],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8843:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_label:"LSP9 - Vault",sidebar_position:7},o="LSP9 - Vault",l={unversionedId:"standards/universal-profile/lsp9-vault",id:"standards/universal-profile/lsp9-vault",title:"LSP9 - Vault",description:"LSP9 - Vault",source:"@site/docs/standards/universal-profile/lsp9-vault.md",sourceDirName:"standards/universal-profile",slug:"/standards/universal-profile/lsp9-vault",permalink:"/standards/universal-profile/lsp9-vault",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/universal-profile/lsp9-vault.md",tags:[],version:"current",lastUpdatedAt:1687777629,formattedLastUpdatedAt:"Jun 26, 2023",sidebarPosition:7,frontMatter:{sidebar_label:"LSP9 - Vault",sidebar_position:7},sidebar:"standardsSidebar",previous:{title:"LSP6 - Key Manager",permalink:"/standards/universal-profile/lsp6-key-manager"},next:{title:"LSP10 - Received Vaults",permalink:"/standards/universal-profile/lsp10-received-vaults"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"What does this standard represent?",id:"what-does-this-standard-represent",level:2},{value:"ERC725X - Generic Executor",id:"erc725x---generic-executor",level:3},{value:"ERC725Y - Generic Data Key-Value Store",id:"erc725y---generic-data-key-value-store",level:3},{value:"LSP1 - UniversalReceiver",id:"lsp1---universalreceiver",level:3},{value:"LSP14 - Ownable2Step",id:"lsp14---ownable2step",level:3},{value:"Flow",id:"flow",level:3}],d={toc:p};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lsp9---vault"},"LSP9 - Vault"),(0,r.kt)("admonition",{title:"Standard Document",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-9-Vault.md"},"LSP9 - Vault"))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Using the Key Manager with the Universal Profile will enable third parties to execute through your profile given specific permissions, but this will not eliminate the risk of operating maliciously with your data and belongings."),(0,r.kt)("p",null,"Third parties should be restricted when talking to a specific smart contract through the Universal Profile to avoid this risk when it almost has the same functionalities and is controlled by the Universal Profile."),(0,r.kt)("h2",{id:"what-does-this-standard-represent"},"What does this standard represent?"),(0,r.kt)("p",null,"This standard defines a vault that can hold assets and interact with other contracts. It can ",(0,r.kt)("strong",{parentName:"p"},"attach information")," via ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-725.md#erc725y"},"ERC725Y")," to itself, ",(0,r.kt)("strong",{parentName:"p"},"execute, deploy or transfer value")," to any other smart contract or EOA via ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-725.md#erc725x"},"ERC725X"),". It can be ",(0,r.kt)("strong",{parentName:"p"},"notified of incoming assets")," via the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/master/LSPs/LSP-1-UniversalReceiver.md"},"LSP1-UniversalReceiver")," function."),(0,r.kt)("p",null,"This standard uses the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://eips.ethereum.org/EIPS/eip-173"},"ERC173"))," standard to provide ownership functions for owning and controlling the implementation contract."),(0,r.kt)("h3",{id:"erc725x---generic-executor"},"ERC725X - Generic Executor"),(0,r.kt)("p",null,"This substandard enables the vault to execute a call on any other smart contracts, transfer the blockchain's native token, or deploy a new smart contract. Only the owner can perform these operations below."),(0,r.kt)("p",null,"The following ",(0,r.kt)("inlineCode",{parentName:"p"},"operationType")," MUST exist:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"CALL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"CREATE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"2")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"CREATE2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"3")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"STATICCALL"))),(0,r.kt)("p",null,"The following ",(0,r.kt)("inlineCode",{parentName:"p"},"operationType")," COULD exist:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"4")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"DELEGATECALL")," - ",(0,r.kt)("strong",{parentName:"li"},"NOTE")," This is a potentially dangerous operation")),(0,r.kt)("h3",{id:"erc725y---generic-data-key-value-store"},"ERC725Y - Generic Data Key-Value Store"),(0,r.kt)("p",null,"This substandard enables the vault to hold arbitrary data through a generic data key/value store. It gives flexibility to the contract storage by allowing to attach any information to the contract and update it easily."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The data keys and values are constructed according to the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/standards/generic-standards/lsp2-json-schema"},"LSP2-ERC725YJSONSchema"))," standard.")),(0,r.kt)("h3",{id:"lsp1---universalreceiver"},"LSP1 - UniversalReceiver"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/standards/generic-standards/lsp1-universal-receiver"},"LSP1-UniversalReceiver"))," standard for more information.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The implementation of the ",(0,r.kt)("strong",{parentName:"p"},"UniversalReceiverDelegate")," used by the Universal Profile is different from the one used by the vault. Check ",(0,r.kt)("a",{parentName:"p",href:"/standards/smart-contracts/lsp1-universal-receiver-delegate-vault"},"LSP1UniversalReceiverDelegateVault"))),(0,r.kt)("p",null,"This standard enables the vault to be notified of incoming transactions such as token transfers, information transfers, etc. Notifications are handy when users want to customize how their account contract reacts to certain tokens by either rejecting them or operating a specific call on each received token."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"#"},"LSP9-Vault"))," implements the ",(0,r.kt)("inlineCode",{parentName:"p"},"universalReceiver(..)")," function that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Emits an event with the typeId and data passed to it, as well as additional parameters such as the amount sent to the function, the caller of the function, and the return value of the delegate contracts.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Forwards the call to the ",(0,r.kt)("strong",{parentName:"p"},"UniversalReceiverDelegate")," contract address stored under the data key attached below, if it supports ",(0,r.kt)("a",{parentName:"p",href:"/contracts/interface-ids"},"LSP1UniversalReceiverDelegate InterfaceId"),"."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "LSP1UniversalReceiverDelegate",\n  "key": "0x0cfc51aec37c55a4d0b1a65c6255c4bf2fbdf6277f3cc0730c45b828b6db8b47",\n  "keyType": "Singleton",\n  "valueType": "address",\n  "valueContent": "Address"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Forwards the call to the ",(0,r.kt)("strong",{parentName:"li"},"typeId delegate")," contract address stored under the data key attached below, if it supports ",(0,r.kt)("a",{parentName:"li",href:"/contracts/interface-ids"},"LSP1UniversalReceiverDelegate InterfaceId"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "LSP1UniversalReceiverDelegate:<bytes32>",\n  "key": "0x0cfc51aec37c55a4d0b10000<bytes32>",\n  "keyType": "Mapping",\n  "valueType": "address",\n  "valueContent": "Address"\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"<bytes32",">"," is the ",(0,r.kt)("inlineCode",{parentName:"p"},"typeId")," passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"universalReceiver(..)")," function.")),(0,r.kt)("h3",{id:"lsp14---ownable2step"},"LSP14 - Ownable2Step"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/standards/generic-standards/lsp14-ownable-2-step"},"LSP14 - Ownable2Step"))," standard for more information.")),(0,r.kt)("p",null,"This standard allows for the ",(0,r.kt)("strong",{parentName:"p"},"LSP9 - Vault")," contract's ownership to be controlled by an EOA or by another contract, by implementing ",(0,r.kt)("strong",{parentName:"p"},"3 essential methods"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/standards/smart-contracts/lsp14-ownable-2-step#transferownership"},(0,r.kt)("inlineCode",{parentName:"a"},"transferOwnership()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/standards/smart-contracts/lsp14-ownable-2-step#acceptownership"},(0,r.kt)("inlineCode",{parentName:"a"},"acceptOwnership()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/standards/smart-contracts/lsp14-ownable-2-step#renounceownership"},(0,r.kt)("inlineCode",{parentName:"a"},"renounceOwnership()")))),(0,r.kt)("h3",{id:"flow"},"Flow"),(0,r.kt)("p",null,"Developers could use the vault to hold assets and, as mentioned before, could be used to restrict third parties to only operate on the assets and metadata of the vault and not the Universal Profile. The Universal Profile's metadata and assets are safe if the third party tries to act maliciously."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," The ",(0,r.kt)("strong",{parentName:"p"},"protocol")," should be allowed to only talk to the vault A1 through ",(0,r.kt)("a",{parentName:"p",href:"./lsp6-key-manager#address-permissions"},"AllowedAddresses permission"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"LSP9 vault allowed in profile",src:a(5819).Z,width:"2883",height:"1387"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," All the ",(0,r.kt)("strong",{parentName:"p"},"protocol")," transactions should be routed through the vault. Otherwise, the transaction will ",(0,r.kt)("strong",{parentName:"p"},"revert"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"LSP9 vault with third parties flow",src:a(6327).Z,width:"2977",height:"1343"})))}c.isMDXComponent=!0},6327:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lsp9-vault-flow-5234da23d42ade83a1b14dabe4c1f5cf.jpeg"},5819:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vault-flow-881a05118ac0d4e489e8302f24cd1b02.jpeg"}}]);