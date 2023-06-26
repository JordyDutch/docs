"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[2642],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return a?r.createElement(f,s(s({ref:t},u),{},{components:a})):r.createElement(f,s({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<l;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(7294),n=a(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(7462),n=a(7294),l=a(6010),s=a(2466),o=a(6775),i=a(1980),c=a(7392),u=a(12);function p(e){return function(e){var t;return(null==(t=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=d(e),[s,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,c]=f({queryString:a,groupId:r}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),k=(()=>{const e=i??p;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),h(e)}),[c,h,l]),tabValues:l}}var k=a(2389);const g="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:o,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),r=c[a].value;r!==o&&(p(t),i(r))},m=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},s,{className:(0,l.Z)("tabs__item",b,null==s?void 0:s.className,{"tabs__item--active":o===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=h(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",g)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(N,(0,r.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},7621:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=a(7462),n=(a(7294),a(3905)),l=a(4866),s=a(5162);const o={title:"Introduction",sidebar_position:1},i="Smart Contracts",c={unversionedId:"contracts/introduction",id:"contracts/introduction",title:"Introduction",description:"The smart contracts are public and open source on GitHub.",source:"@site/docs/contracts/introduction.md",sourceDirName:"contracts",slug:"/contracts/introduction",permalink:"/contracts/introduction",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/contracts/introduction.md",tags:[],version:"current",lastUpdatedAt:1687435518,formattedLastUpdatedAt:"Jun 22, 2023",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1},sidebar:"contractsSidebar",next:{title:"Interfaces IDs",permalink:"/contracts/interface-ids"}},u={},p=[{value:"Installation",id:"installation",level:2},{value:"Overview",id:"overview",level:2},{value:"Universal Profile",id:"universal-profile",level:3},{value:"Digital Assets",id:"digital-assets",level:3},{value:"Generic Standards",id:"generic-standards",level:3},{value:"Further Information",id:"further-information",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"smart-contracts"},"Smart Contracts"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The smart contracts are public and open source on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/lsp-smart-contracts"},"GitHub"),". ",(0,n.kt)("a",{href:"https://github.com/lukso-network/lsp-smart-contracts",target:"_blank",rel:"noopener noreferrer"},(0,n.kt)("img",{style:{verticalAlign:"middle"},alt:"github badge",src:"https://img.shields.io/github/v/release/lukso-network/lsp-smart-contracts?logo=github&label=Github"}))),(0,n.kt)("p",{parentName:"blockquote"},"They are available as an npm package ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@lukso/lsp-smart-contracts"},(0,n.kt)("inlineCode",{parentName:"a"},"@lukso/lsp-smart-contracts")),". ",(0,n.kt)("a",{href:"https://www.npmjs.com/package/@lukso/lsp-smart-contracts",target:"_blank",rel:"noopener noreferrer"},(0,n.kt)("img",{style:{verticalAlign:"middle"},alt:"npm badge",src:"https://img.shields.io/npm/v/@lukso/lsp-smart-contracts.svg?style=flat&label=NPM&logo=npm"})))),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Welcome to the LUKSO Smart Contracts documentation!")),(0,n.kt)("p",null,"In this section, you will find all the documentation and resources related to the ",(0,n.kt)("inlineCode",{parentName:"p"},"@lukso/lsp-smart-contracts"),", the reference contract implementations in Solidity of the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/standards/introduction"},"LUKSO Standard Proposals")),"."),(0,n.kt)("p",null,"Developers wishing to understand the logic behind the standards and their tradeoffs within are well-advised to read these documents alongside the Solidity code itself."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @lukso/lsp-smart-contracts\n"))),(0,n.kt)(s.Z,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @lukso/lsp-smart-contracts\n"))),(0,n.kt)(s.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @lukso/lsp-smart-contracts\n")))),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Overall, the contracts can be divided by their usage, related to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Universal Profiles")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Digital Assets and NFT 2.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"General use cases"),".")),(0,n.kt)("p",null,"Some of the LSP standards do not have a contract implementation as they represent ",(0,n.kt)("strong",{parentName:"p"},"Metadata-Standards")," to be used in the implementation contracts."),(0,n.kt)("h3",{id:"universal-profile"},"Universal Profile"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Universal Profile")," contracts allow a better representation of the identity on the blockchain and better control over it."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp0-erc725-account"},"LSP0ERC725Account")),": a contract that can be used as an account and represents an ",(0,n.kt)("strong",{parentName:"li"},"identity on-chain"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp1-universal-receiver-delegate-up"},"LSP1UniversalReceiverDelegateUP")),": a contract that allows the account to react to the calls that it receives (Normal transaction, Token transfer, Vaults transfer, etc.)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp6-key-manager"},"LSP6KeyManager")),": a contract that allows ",(0,n.kt)("strong",{parentName:"li"},"multi-control")," over the account using different permissions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"LSP11BasicSocialRecovery"))),(0,n.kt)("h3",{id:"digital-assets"},"Digital Assets"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Digital Asset (Token and NFT 2.0)")," contracts are the newest advanced version of the existing token standards. They come with many features that enhance the security and the overall user experience and compatibility with ",(0,n.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp0-erc725account"},"ERC725Accounts")," and ",(0,n.kt)("a",{parentName:"p",href:"/standards/generic-standards/lsp1-universal-receiver"},"Universal Receivers"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"../standards/smart-contracts/lsp4-digital-asset-metadata"},"LSP4DigitalAssetMetadata")),": a contract that sets the ",(0,n.kt)("strong",{parentName:"li"},"metadata")," of the ",(0,n.kt)("strong",{parentName:"li"},"Digital Asset"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp7-digital-asset"},"LSP7DigitalAsset")),": a contract that either represents a fungible or non-fungible token (NFT)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp8-identifiable-digital-asset"},"LSP8IdentifiableDigitalAsset")),": a contract that represents a non-fungible token (NFT). It uses a bytes32 tokenId to allow many uses of token identification, including numbers, contract addresses, and hashed values (e.g., serial numbers).")),(0,n.kt)("h3",{id:"generic-standards"},"Generic Standards"),(0,n.kt)("p",null,"These contracts are not just related to one specific section and could be used with the ",(0,n.kt)("strong",{parentName:"p"},"Universal Profile"),", ",(0,n.kt)("strong",{parentName:"p"},"Digital Asset"),", and ",(0,n.kt)("strong",{parentName:"p"},"NFT 2.0")," contracts."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp9-vault"},"LSP9Vault")),": a contract representing a ",(0,n.kt)("strong",{parentName:"li"},"Vault")," able to execute and hold assets could be owned by an LSP0ERC725Account contract."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp1-universal-receiver-delegate-vault"},"LSP1UniversalReceiverDelegateVault")),": a contract that allows the vault to react to the calls it receives (Normal transaction, Token transfer, etc.)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"LSP14Ownable2Step")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"LSP17ContractExtension")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"LSP20CallVerification"))),(0,n.kt)("h2",{id:"further-information"},"Further Information"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/SbTo_e3l_Lk?t=1727"},"UniversalProfile & Identity Section")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/hg1Ow6u9QVk"},"NFT 2.0 Section"))))}m.isMDXComponent=!0}}]);