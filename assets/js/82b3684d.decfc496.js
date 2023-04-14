"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[2014],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<l;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>C});var n=a(7462),r=a(7294),l=a(6010),s=a(2466),o=a(6775),i=a(1980),c=a(7392),u=a(12);function d(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,c]=h({queryString:a,groupId:n}),[d,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),f=(()=>{const e=i??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),g(e)}),[c,g,l]),tabValues:l}}var f=a(2389);const v="tabList__CuJ",k="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:o,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==o&&(d(t),i(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},s,{className:(0,l.Z)("tabs__item",k,null==s?void 0:s.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",v)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function C(e){const t=(0,f.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},4521:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),s=a(5162);const o={sidebar_label:"Interact With Contracts",sidebar_position:3},i="Interact With Contracts",c={unversionedId:"guides/vault/interact-with-contracts",id:"guides/vault/interact-with-contracts",title:"Interact With Contracts",description:"Similar to our previous guide on setting data on the Vault, in this guide, we will be learning how to interact with other contracts through the Vault's execute function.",source:"@site/docs/guides/vault/interact-with-contracts.md",sourceDirName:"guides/vault",slug:"/guides/vault/interact-with-contracts",permalink:"/guides/vault/interact-with-contracts",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/guides/vault/interact-with-contracts.md",tags:[],version:"current",lastUpdatedAt:1676928077,formattedLastUpdatedAt:"Feb 20, 2023",sidebarPosition:3,frontMatter:{sidebar_label:"Interact With Contracts",sidebar_position:3},sidebar:"guidesSidebar",previous:{title:"Edit Vault Data",permalink:"/guides/vault/edit-vault-data"},next:{title:"Restrict Addresses to Vaults",permalink:"/guides/vault/restrict-addresses-to-vaults"}},u={},d=[{value:"Setup",id:"setup",level:2},{value:"Step 1 - Setup imports &amp; constants",id:"step-1---setup-imports--constants",level:2},{value:"Step 2 - Create the contracts instances",id:"step-2---create-the-contracts-instances",level:2},{value:"Step 3 - Encode the calldatas",id:"step-3---encode-the-calldatas",level:2},{value:"Encode Target Contract calldata",id:"encode-target-contract-calldata",level:3},{value:"Encode Vault calldata",id:"encode-vault-calldata",level:3},{value:"Encode Universal Profile calldata",id:"encode-universal-profile-calldata",level:3},{value:"Step 4 - Execute via the Key Manager",id:"step-4---execute-via-the-key-manager",level:2},{value:"Final code",id:"final-code",level:2}],p={toc:d};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"interact-with-contracts"},"Interact With Contracts"),(0,r.kt)("p",null,"Similar to our ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/guides/vault/edit-vault-data"},"previous guide"))," on setting data on the Vault, in this guide, we will be learning how to ",(0,r.kt)("strong",{parentName:"p"},"interact with other contracts")," through the Vault's execute function."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This guide is also very similar to the guide: ",(0,r.kt)("a",{parentName:"p",href:"/guides/universal-profile/interact-with-contracts"},(0,r.kt)("strong",{parentName:"a"},"Interact with contract using a Universal Profile")),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interaction flow"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Guide - Interact with other contracts using a Vault",src:a(9145).Z,width:"10762",height:"2432"})),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"To complete this mini-guide, we will need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"an EOA with some LYX for gas fees and the required ",(0,r.kt)("a",{parentName:"li",href:"/standards/universal-profile/lsp6-key-manager#permissions"},(0,r.kt)("strong",{parentName:"a"},"permissions"))," for the interaction."),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"UniversalProfile"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"LSP6KeyManager")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"LSP9Vault")," contracts ABIs from the ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@lukso/lsp-smart-contracts"},(0,r.kt)("inlineCode",{parentName:"a"},"@lukso/lsp-smart-contracts"))," npm package."),(0,r.kt)("li",{parentName:"ul"},"the address of the Universal Profile."),(0,r.kt)("li",{parentName:"ul"},"the address of the LSP9 Vault."),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"targetContract")," ABI."),(0,r.kt)("li",{parentName:"ul"},"the address of the Target Contract.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The chosen EOA needs to have ",(0,r.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp6-key-manager#permissions"},(0,r.kt)("strong",{parentName:"a"},"CALL Permission"))," together with ",(0,r.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp6-key-manager#allowed-calls"},(0,r.kt)("strong",{parentName:"a"},"AllowedCalls"))," or ",(0,r.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp6-key-manager#super-permissions"},(0,r.kt)("strong",{parentName:"a"},"SUPER_CALL Pemrission")))),(0,r.kt)("p",null,"Make sure you have the following dependencies installed before beginning this tutorial."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Either ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/web3/web3.js"},(0,r.kt)("inlineCode",{parentName:"a"},"web3.js"))," or ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ethers-io/ethers.js/"},(0,r.kt)("inlineCode",{parentName:"a"},"ethers.js"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/lsp-smart-contracts/"},(0,r.kt)("inlineCode",{parentName:"a"},"@lukso/lsp-smart-contracts")))),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Install the dependencies"',title:'"Install',the:!0,'dependencies"':!0},"npm install web3 @lukso/lsp-smart-contracts\n"))),(0,r.kt)(s.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Install the dependencies"',title:'"Install',the:!0,'dependencies"':!0},"npm install ethers @lukso/lsp-smart-contracts\n")))),(0,r.kt)("h2",{id:"step-1---setup-imports--constants"},"Step 1 - Setup imports & constants"),(0,r.kt)("p",null,"At this step we will import the needed ",(0,r.kt)("strong",{parentName:"p"},"contract ABIs")," and we will save all the ",(0,r.kt)("strong",{parentName:"p"},"required addresses")," in constants.",(0,r.kt)("br",{parentName:"p"}),"\n","Also we will initialize our ",(0,r.kt)("strong",{parentName:"p"},"EOA")," for further use."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Save the Target Contract ABI in a separate json and import it in the main file.",(0,r.kt)("br",{parentName:"p"}),"\n","You can quickly compile and get a contract's ABI in ",(0,r.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},(0,r.kt)("strong",{parentName:"a"},"Remix IDO")))),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Imports & Constants"',title:'"Imports',"&":!0,'Constants"':!0},"import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';\nimport LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';\nimport LSP9Vault from '@lukso/lsp-smart-contracts/artifacts/LSP9Vault.json';\nimport TargetContractABI from './TargetContractABI.json';\nimport Web3 from 'web3';\n\nconst web3 = new Web3('https://rpc.l16.lukso.network');\nconst universalProfileAddress = '0x...';\nconst vaultAddress = '0x...';\nconst targetContractAddress = '0x...';\n\n// setup EOA\nconst privateKey = '0x...'; // your EOA private key (controller address)\nconst myEOA = web3.eth.accounts.wallet.add(privateKey);\n"))),(0,r.kt)(s.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Imports & Constants"',title:'"Imports',"&":!0,'Constants"':!0},"import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';\nimport LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';\nimport LSP9Vault from '@lukso/lsp-smart-contracts/artifacts/LSP9Vault.json';\nimport TargetContractABI from './TargetContractABI.json';\nimport { ethers } from 'ethers';\n\nconst provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');\nconst universalProfileAddress = '0x...';\nconst vaultAddress = '0x...';\nconst targetContractAddress = '0x...';\n\n// setup EOA\nconst privateKey = '0x...'; // your EOA private key (controller address)\nconst myEOA = new ethers.Wallet(privateKey).connect(provider);\n")))),(0,r.kt)("h2",{id:"step-2---create-the-contracts-instances"},"Step 2 - Create the contracts instances"),(0,r.kt)("p",null,"Further we will create instances for our contracts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create an Universal Profile contract instance from ",(0,r.kt)("inlineCode",{parentName:"li"},"universalProfileAddress"),"."),(0,r.kt)("li",{parentName:"ul"},"Get the ",(0,r.kt)("inlineCode",{parentName:"li"},"owner()")," of the Universal Profile."),(0,r.kt)("li",{parentName:"ul"},"Create a Key Manager contract instance from the owner of the Universal Profile."),(0,r.kt)("li",{parentName:"ul"},"Create a Target Contract instance from the ",(0,r.kt)("inlineCode",{parentName:"li"},"targetContractAddress"),".")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Contracts instances"',title:'"Contracts','instances"':!0},"// Create Universal Profile contract instance\nconst universalProfile = new web3.eth.Contract(\n  UniversalProfile.abi,\n  universalProfileAddress,\n);\n// Get Universal Profile owner\nconst keyManagerAddress = await universalProfile.methods.owner().call();\n// Create LSP6 Key Manager contract instance\nconst keyManager = new web3.eth.Contract(LSP6KeyManager.abi, keyManagerAddress);\n// Create LSP9 Vault contract instance\nconst vault = new web3.eth.Contract(LSP9Vault.abi, vaultAddress);\n// Create Target Contract contract instance\nconst targetContract = new web3.eth.Contract(\n  TargetContractABI,\n  targetContractAddress,\n);\n"))),(0,r.kt)(s.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Contracts instances"',title:'"Contracts','instances"':!0},"// Create Universal Profile contract instance\nconst universalProfile = new ethers.Contract(\n  universalProfileAddress,\n  UniversalProfile.abi,\n);\n// Get Universal Profile owner\nconst keyManagerAddress = await universalProfile.owner();\n// Create LSP6 Key Manager contract instance\nconst keyManager = new ethers.Contract(keyManagerAddress, LSP6KeyManager.abi);\n// Create LSP9 Vault contract instance\nconst vault = new ethers.Contract(vaultAddress, LSP9Vault.abi);\n// Create Target Contract contract instance\nconst targetContract = new ethers.Contract(\n  targetContractAddress,\n  TargetContractABI,\n);\n")))),(0,r.kt)("h2",{id:"step-3---encode-the-calldatas"},"Step 3 - Encode the calldatas"),(0,r.kt)("p",null,"This is the easy part, we need to create 2 calldatas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"first calldata")," will be executed on the Target Contract."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"second calldata")," will be executed on the Vault and will trigger the ",(0,r.kt)("em",{parentName:"li"},"first calldata"),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"third calldata")," will be executed on the Universal Profile and will trigger the ",(0,r.kt)("em",{parentName:"li"},"second calldata"),".")),(0,r.kt)("h3",{id:"encode-target-contract-calldata"},"Encode Target Contract calldata"),(0,r.kt)("p",null,"Encoding the calldata that will be be exeuted on the Target Contract."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Target calldata"',title:'"Target','calldata"':!0},"// 1. encode the calldata to be run at the targetContract\n// assuming targetContract is a Contract instance\nconst targetCalldata = targetContract.methods\n  .myCoolfunction('dummyParameter')\n  .encodeABI();\n"))),(0,r.kt)(s.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Target calldata"',title:'"Target','calldata"':!0},"// 1. encode the calldata to be run at the targetContract\n// assuming targetContract is a Contract instance\nconst targetCalldata = targetContract.interface.encodeFunctionData(\n  'myCoolfunction',\n  ['dummyParameter'],\n);\n")))),(0,r.kt)("h3",{id:"encode-vault-calldata"},"Encode Vault calldata"),(0,r.kt)("p",null,"Encoding the calldata that will be be exeuted on the Vault. This calldata will also trigger the calldata that will be executed on the Target Contract."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Vault calldata"',title:'"Vault','calldata"':!0},"// 2. encode the calldata to be run on the Vault,\n// passing the calldata to be run at the targetContract as 4th parameter\nconst vaultCalldata = await vault.methods[\n  'execute(uint256,address,uint256,bytes)'\n](0, targetContract.address, 0, targetCalldata).encodeABI();\n"))),(0,r.kt)(s.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Vault calldata"',title:'"Vault','calldata"':!0},"// 2. encode the calldata to be run on the Vault,\n// passing the calldata to be run at the targetContract as 4th parameter\nconst vaultCalldata = vault.interface.encodeFunctionData(\n  'execute(uint256,address,uint256,bytes)',\n  [0, targetContract.address, 0, targetCalldata],\n);\n")))),(0,r.kt)("h3",{id:"encode-universal-profile-calldata"},"Encode Universal Profile calldata"),(0,r.kt)("p",null,"Encoding the calldata that will be be exeuted on the Universal Profile. This calldata will also trigger the calldata that will be executed in the Vault."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Universal Profile calldata"',title:'"Universal',Profile:!0,'calldata"':!0},"// 3. encode the calldata to be run on the UP,\n// passing the calldata to be run in the Vault as 4th parameter\nconst universalProfileCalldata = await universalProfile.methods[\n  'execute(uint256,address,uint256,bytes)'\n](0, vaultAddress, 0, vaultCalldata).encodeABI();\n"))),(0,r.kt)(s.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Universal Profile calldata"',title:'"Universal',Profile:!0,'calldata"':!0},"// 3. encode the calldata to be run on the UP,\n// passing the calldata to be run in the Vault as 4th parameter\nconst universalProfileCalldata = universalProfile.interface.encodeFunctionData(\n  'execute(uint256,address,uint256,bytes)',\n  [0, vaultAddress, 0, vaultCalldata],\n);\n")))),(0,r.kt)("h2",{id:"step-4---execute-via-the-key-manager"},"Step 4 - Execute via the Key Manager"),(0,r.kt)("p",null,"The final step is to pass the encoded calldata to the Key Manager. Since we are calling from a UP's controller address (with proper ",(0,r.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp6-key-manager#permissions"},(0,r.kt)("strong",{parentName:"a"},"permissions")),"), the Key Manager will authorize and execute the transaction."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Send transaction"',title:'"Send','transaction"':!0},"// Execute via the KeyManager, passing the UP calldata\nawait keyManager.methods['execute(bytes)'](universalProfileCalldata).send({\n  from: myEOA.address,\n  gasLimit: 600_000,\n});\n"))),(0,r.kt)(s.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Send transaction"',title:'"Send','transaction"':!0},"// Execute via the KeyManager, passing the UP calldata\nawait keyManager.connect(myEOA)['execute(bytes)'](universalProfileCalldata);\n")))),(0,r.kt)("h2",{id:"final-code"},"Final code"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Interacting with other contracts through the vault"',title:'"Interacting',with:!0,other:!0,contracts:!0,through:!0,the:!0,'vault"':!0},"import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';\nimport LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';\nimport LSP9Vault from '@lukso/lsp-smart-contracts/artifacts/LSP9Vault.json';\nimport TargetContractABI from './TargetContractABI.json';\nimport Web3 from 'web3';\n\nconst web3 = new Web3('https://rpc.l16.lukso.network');\nconst universalProfileAddress = '0x...';\nconst vaultAddress = '0x...';\nconst targetContractAddress = '0x...';\n\n// setup EOA\nconst privateKey = '0x...'; // your EOA private key (controller address)\nconst myEOA = web3.eth.accounts.wallet.add(privateKey);\n\n// Create Universal Profile contract instance\nconst universalProfile = new web3.eth.Contract(\n  UniversalProfile.abi,\n  universalProfileAddress,\n);\n// Get Universal Profile owner\nconst keyManagerAddress = await universalProfile.methods.owner().call();\n// Create LSP6 Key Manager contract instance\nconst keyManager = new web3.eth.Contract(LSP6KeyManager.abi, keyManagerAddress);\n// Create LSP9 Vault contract instance\nconst vault = new web3.eth.Contract(LSP9Vault.abi, vaultAddress);\n// Create Target Contract contract instance\nconst targetContract = new web3.eth.Contract(\n  TargetContractABI,\n  targetContractAddress,\n);\n\n// 1. encode the calldata to be run at the targetContract\n// assuming targetContract is a Contract instance\nconst targetCalldata = targetContract.methods\n  .myCoolfunction('dummyParameter')\n  .encodeABI();\n\n// 2. encode the calldata to be run on the Vault,\n// passing the calldata to be run at the targetContract as 4th parameter\nconst vaultCalldata = await vault.methods[\n  'execute(uint256,address,uint256,bytes)'\n](0, targetContract.address, 0, targetCalldata).encodeABI();\n\n// 3. encode the calldata to be run on the UP,\n// passing the calldata to be run in the Vault as 4th parameter\nconst universalProfileCalldata = await universalProfile.methods[\n  'execute(uint256,address,uint256,bytes)'\n](0, vaultAddress, 0, vaultCalldata).encodeABI();\n\n// Execute via the KeyManager, passing the UP calldata\nawait keyManager.methods['execute(bytes)'](universalProfileCalldata).send({\n  from: myEOA.address,\n  gasLimit: 600_000,\n});\n"))),(0,r.kt)(s.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Interacting with other contracts through the vault"',title:'"Interacting',with:!0,other:!0,contracts:!0,through:!0,the:!0,'vault"':!0},"import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';\nimport LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';\nimport LSP9Vault from '@lukso/lsp-smart-contracts/artifacts/LSP9Vault.json';\nimport TargetContractABI from './TargetContractABI.json';\nimport { ethers } from 'ethers';\n\nconst provider = new ethers.JsonRpcProvider('https://rpc.l16.lukso.network');\nconst universalProfileAddress = '0x...';\nconst vaultAddress = '0x...';\nconst targetContractAddress = '0x...';\n\n// setup EOA\nconst privateKey = '0x...'; // your EOA private key (controller address)\nconst myEOA = new ethers.Wallet(privateKey).connect(provider);\n\n// Create Universal Profile contract instance\nconst universalProfile = new ethers.Contract(\n  universalProfileAddress,\n  UniversalProfile.abi,\n);\n// Get Universal Profile owner\nconst keyManagerAddress = await universalProfile.owner();\n// Create LSP6 Key Manager contract instance\nconst keyManager = new ethers.Contract(keyManagerAddress, LSP6KeyManager.abi);\n// Create LSP9 Vault contract instance\nconst vault = new ethers.Contract(vaultAddress, LSP9Vault.abi);\n// Create Target Contract contract instance\nconst targetContract = new ethers.Contract(\n  targetContractAddress,\n  TargetContractABI,\n);\n\n// 1. encode the calldata to be run at the targetContract\n// assuming targetContract is a Contract instance\nconst targetCalldata = targetContract.interface.encodeFunctionData(\n  'myCoolfunction',\n  ['dummyParameter'],\n);\n\n// 2. encode the calldata to be run on the Vault,\n// passing the calldata to be run at the targetContract as 4th parameter\nconst vaultCalldata = vault.interface.encodeFunctionData(\n  'execute(uint256,address,uint256,bytes)',\n  [0, targetContract.address, 0, targetCalldata],\n);\n\n// 3. encode the calldata to be run on the UP,\n// passing the calldata to be run in the Vault as 4th parameter\nconst universalProfileCalldata = universalProfile.interface.encodeFunctionData(\n  'execute(uint256,address,uint256,bytes)',\n  [0, vaultAddress, 0, vaultCalldata],\n);\n\n// Execute via the KeyManager, passing the UP calldata\nawait keyManager.connect(myEOA)['execute(bytes)'](universalProfileCalldata);\n")))),(0,r.kt)("p",null,"In the code snippet above, we interacted with ",(0,r.kt)("inlineCode",{parentName:"p"},"myCoolfunction(..)")," function on the ",(0,r.kt)("strong",{parentName:"p"},"targetContract")," contract through the Vault's ",(0,r.kt)("a",{parentName:"p",href:"/standards/smart-contracts/lsp9-vault#execute"},"execute")," function. The call was encoded and executed through the Universal Profile and the Key Manager."))}m.isMDXComponent=!0},9145:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/interact-with-contract-using-vaults-flow-471302f35d2a774dcfdd52d2a6407937.jpg"}}]);