"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[915],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=s,f=u["".concat(o,".").concat(m)]||u[m]||p[m]||r;return a?n.createElement(f,l(l({ref:t},d),{},{components:a})):n.createElement(f,l({ref:t},d))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,l=new Array(r);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),s=a(4334);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(r,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(3117),s=a(7294),r=a(4334),l=a(2389),i=a(7392),o=a(7094),c=a(2466);const d="tabList__CuJ",p="tabItem_LNqP";function u(e){var t,a;const{lazy:l,block:u,defaultValue:m,values:f,groupId:h,className:v}=e,g=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=f?f:g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,i.l)(w,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===m?m:null!=(t=null!=m?m:null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)?t:g[0].props.value;if(null!==b&&!w.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+w.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:P,setTabGroupChoices:S}=(0,o.U)(),[y,A]=(0,s.useState)(b),N=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=h){const e=P[h];null!=e&&e!==y&&w.some((t=>t.value===e))&&A(e)}const R=e=>{const t=e.currentTarget,a=N.indexOf(t),n=w[a].value;n!==y&&(E(t),A(n),null!=h&&S(h,String(n)))},D=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=N.indexOf(e.currentTarget)+1;a=null!=(n=N[t])?n:N[0];break}case"ArrowLeft":{var s;const t=N.indexOf(e.currentTarget)-1;a=null!=(s=N[t])?s:N[N.length-1];break}}null==(t=a)||t.focus()};return s.createElement("div",{className:(0,r.Z)("tabs-container",d)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":u},v)},w.map((e=>{let{value:t,label:a,attributes:l}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>N.push(e),onKeyDown:D,onFocus:R,onClick:R},l,{className:(0,r.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":y===t})}),null!=a?a:t)}))),l?(0,s.cloneElement)(g.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function m(e){const t=(0,l.Z)();return s.createElement(u,(0,n.Z)({key:String(t)},e))}},1509:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(3117),s=(a(7294),a(3905)),r=a(5488),l=a(5162);const i={sidebar_label:"Read Asset Data",sidebar_position:2},o="Read Asset Data",c={unversionedId:"guides/digital-assets/read-asset-data",id:"guides/digital-assets/read-asset-data",title:"Read Asset Data",description:"In this guide, we will learn how to:",source:"@site/docs/guides/digital-assets/read-asset-data.md",sourceDirName:"guides/digital-assets",slug:"/guides/digital-assets/read-asset-data",permalink:"/guides/digital-assets/read-asset-data",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/guides/digital-assets/read-asset-data.md",tags:[],version:"current",lastUpdatedAt:1659351474,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:2,frontMatter:{sidebar_label:"Read Asset Data",sidebar_position:2},sidebar:"guidesSidebar",previous:{title:"Create an LSP7 Digital Asset (Token)",permalink:"/guides/digital-assets/create-lsp7-digital-asset"},next:{title:"Install the UP Browser Extension",permalink:"/guides/browser-extension/install-browser-extension"}},d={},p=[{value:"Setup",id:"setup",level:2},{value:"Step 1 - Get all owned assets",id:"step-1---get-all-owned-assets",level:2},{value:"Step 2 - Fetch the asset metadata",id:"step-2---fetch-the-asset-metadata",level:2},{value:"Final Code",id:"final-code",level:2}],u={toc:p};function m(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"read-asset-data"},"Read Asset Data"),(0,s.kt)("p",null,"In this guide, we will learn how to:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Get all assets owned by a Universal Profile."),(0,s.kt)("li",{parentName:"ul"},"Fetch the metadata of all owned assets.")),(0,s.kt)("div",{style:{textAlign:"center",color:"grey"}},(0,s.kt)("img",{src:a(2904).Z,alt:"Asset example on universalprofile.cloud"}),(0,s.kt)("br",null),(0,s.kt)("i",null,"The ",(0,s.kt)("a",{href:"https://universalprofile.cloud/asset/0xbD14F48DDDe851b812D95431906E629fb9514Db4"},"Lambada Dyed Red White Blue")," asset as seen on UniversalProfile.cloud")),(0,s.kt)("p",null,"We will use:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://web3js.readthedocs.io/en/v1.7.0/"},"web3.js")," for utility as well as connecting to the LUKSO L14 or L16 network."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../../tools/erc725js/getting-started/"},"erc725.js")," library to fetch the asset metadata."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/lsp-smart-contracts"},"lsp-smart-contracts")," to integrate the ABIs for the LUKSO Standards.")),(0,s.kt)("h2",{id:"setup"},"Setup"),(0,s.kt)("p",null,"Open a terminal in the project's folder of your choice and install all required libraries."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"npm install web3 @erc725/erc725.js @lukso/lsp-smart-contracts\n")),(0,s.kt)("h2",{id:"step-1---get-all-owned-assets"},"Step 1 - Get all owned assets"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"Current Standard",label:"Current Standard",mdxType:"TabItem"},(0,s.kt)("p",null,"In the ",(0,s.kt)("a",{parentName:"p",href:"../universal-profile/read-profile-data"},(0,s.kt)("strong",{parentName:"a"},"Read Profile Data")," guide"),", we learned how to read the Universal Profile properties and use the data key names with the ",(0,s.kt)("inlineCode",{parentName:"p"},"fetchData()")," function of the ",(0,s.kt)("a",{parentName:"p",href:"../../tools/erc725js/getting-started/"},"erc725.js")," library. In the same way, we can now fetch all the assets owned by the Universal Profile by calling ",(0,s.kt)("inlineCode",{parentName:"p"},"fetchData")," and passing the ",(0,s.kt)("inlineCode",{parentName:"p"},"LSP5ReceivedAssets[]")," key."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"This same method can also be used to fetch all assets a Universal Profile has ever issued by using the ",(0,s.kt)("inlineCode",{parentName:"p"},"LSP12IssuedAssets[]")," key.")),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"If using erc725.js in a NodeJS environment you may need to install and import ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/isomorphic-fetch"},(0,s.kt)("inlineCode",{parentName:"a"},"isomorphic-fetch"))," to use the ",(0,s.kt)("inlineCode",{parentName:"p"},"fetchData()")," method.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="read_assets.js"',title:'"read_assets.js"'},"// Import and network setup\nimport { ERC725 } from '@erc725/erc725.js';\nimport UniversalProfileSchema from '@erc725/erc725.js/schemas/LSP3UniversalProfileMetadata.json';\nimport Web3 from 'web3';\n\n// Static variables\nconst SAMPLE_PROFILE_ADDRESS = '0xa907c1904c22DFd37FF56c1f3c3d795682539196';\nconst RPC_ENDPOINT = 'https://rpc.l16.lukso.network';\nconst IPFS_GATEWAY = 'https://2eff.lukso.dev/ipfs/';\n\n// Parameters for the ERC725 instance\nconst provider = new Web3.providers.HttpProvider(RPC_ENDPOINT);\nconst config = { ipfsGateway: IPFS_GATEWAY };\n\n// Fetch the LSP5 data of the Universal Profile to get its owned assets\nconst profile = new ERC725(\n  UniversalProfileSchema,\n  SAMPLE_PROFILE_ADDRESS,\n  provider,\n  config,\n);\n\nconst result = await profile.fetchData('LSP5ReceivedAssets[]');\nconst ownedAssets = result.value;\n\nconsole.log(ownedAssets);\n"))),(0,s.kt)(l.Z,{value:"Legacy Standard",label:"Legacy Standard",mdxType:"TabItem"},(0,s.kt)("p",null,"In the ",(0,s.kt)("a",{parentName:"p",href:"../universal-profile/read-profile-data"},"previous guide"),", we learned how to read the Universal Profile properties and use the data key names with the ",(0,s.kt)("inlineCode",{parentName:"p"},"fetchData()")," function of the ",(0,s.kt)("a",{parentName:"p",href:"../../tools/erc725js/getting-started/"},"erc725.js")," library. In the same way, we can now fetch the address of the ",(0,s.kt)("a",{parentName:"p",href:"../../standards/generic-standards/lsp1-universal-receiver/"},"Universal Receiver")," by using ",(0,s.kt)("inlineCode",{parentName:"p"},'fetchData("LSP1UniversalReceiverDelegate")'),"."),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"If using erc725.js in a NodeJS environment you may need to install and import ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/isomorphic-fetch"},(0,s.kt)("inlineCode",{parentName:"a"},"isomorphic-fetch"))," to use the ",(0,s.kt)("inlineCode",{parentName:"p"},"fetchData()")," method.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="read_assets.js"',title:'"read_assets.js"'},"// Import and network setup\nimport { ERC725 } from '@erc725/erc725.js';\nimport UniversalProfileSchema from '@erc725/erc725.js/schemas/LSP3UniversalProfileMetadata.json';\nimport Web3 from 'web3';\n\n// Static variables\nconst SAMPLE_PROFILE_ADDRESS = '0x0C03fBa782b07bCf810DEb3b7f0595024A444F4e';\nconst RPC_ENDPOINT = 'https://rpc.l14.lukso.network';\nconst IPFS_GATEWAY = 'https://2eff.lukso.dev/ipfs/';\n\n// Parameters for the ERC725 instance\nconst provider = new Web3.providers.HttpProvider(RPC_ENDPOINT);\nconst config = { ipfsGateway: IPFS_GATEWAY };\n\n// Fetch the LSP1 data of the Universal Profile to get its Universal Receiver\nconst profile = new ERC725(\n  UniversalProfileSchema,\n  SAMPLE_PROFILE_ADDRESS,\n  provider,\n  config,\n);\n\nconst result = await profile.fetchData('LSP1UniversalReceiverDelegate');\nconst universalReceiverAddress = result.value;\n")),(0,s.kt)("p",null,"Using the Universal Receiver address, we can now call the ",(0,s.kt)("inlineCode",{parentName:"p"},"getAllRawValues()")," function on this contract to retrieve an array of received assets."),(0,s.kt)("details",null,(0,s.kt)("summary",null,"LSP1 Legacy ABI"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="lsp1_legacy_minimal_abi.json"',title:'"lsp1_legacy_minimal_abi.json"'},'[\n  {\n    "inputs": [],\n    "name": "getAllRawValues",\n    "outputs": [\n      {\n        "internalType": "bytes32[]",\n        "name": "",\n        "type": "bytes32[]"\n      }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  }\n]\n'))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="read_assets.js"',title:'"read_assets.js"'},"// ABI for the Universal Receiver\nimport LSP1MinimalABI from './lsp1_legacy_minimal_abi.json';\n\n// ...\n\nconst web3 = new Web3('https://rpc.l14.lukso.network');\n\n// Get all received assets from the Universal Receiver of the Universal Profile.\nconst universalReceiver = new web3.eth.Contract(\n  LSP1MinimalABI,\n  receiverAddress,\n);\n\n\n// Fetch all raw values\nconst rawValues = await universalReceiver.methods.getAllRawValues().call();\n\n// Convert raw values to addresses\nconst receivedAssets = rawValues.map((returnedRawValue) => {\n  return web3.utils.toChecksumAddress(returnedRawValue.substr(26));\n});\n\nconsole.log(receivedAssets),\n\n")))),(0,s.kt)("h2",{id:"step-2---fetch-the-asset-metadata"},"Step 2 - Fetch the asset metadata"),(0,s.kt)("p",null,"Now we can retrieve the metadata for the asset address. The ",(0,s.kt)("a",{parentName:"p",href:"../../standards/nft-2.0/LSP4-Digital-Asset-Metadata"},"LSP4")," metadata is saved under the ERC725Y key-value store of the digital asset. We need to input the correct data key to fetch the associated value. There are multiple ",(0,s.kt)("a",{parentName:"p",href:"../../standards/nft-2.0/LSP4-Digital-Asset-Metadata"},"LSP4 keys")," for different properties."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"LSP4TokenName")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"LSP4TokenSymbol")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"LSP4Metadata")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"LSP4Creators[]"))),(0,s.kt)("p",null,"In this guide, we will use the ",(0,s.kt)("inlineCode",{parentName:"p"},"LSP4Metadata")," key to read the asset metadata."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="read_assets.js"',title:'"read_assets.js"'},"// ABIs\nimport LSP4schema from '@erc725/erc725.js/schemas/LSP4DigitalAsset.json';\n\n// ...\n\n// Instantiate the asset\nconst digitalAsset = new ERC725(LSP4Schema, ownedAssets[0], provider, config);\n\n// Get the encoded data\nconst decodedAssetMetadata = await digitalAsset.fetchData('LSP4Metadata');\n")),(0,s.kt)("p",null,"To get the metadata of all owned assets we can iterate through the ",(0,s.kt)("inlineCode",{parentName:"p"},"ownedAssets")," array."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const ownedAssetsMetadata = await ownedAssets.map(async (ownedAsset) => {\n  const digitalAsset = new ERC725(LSP4Schema, ownedAsset, provider, config);\n\n  return await digitalAsset.fetchData('LSP4Metadata');\n});\n\n")),(0,s.kt)("h2",{id:"final-code"},"Final Code"),(0,s.kt)("p",null,"Below is the complete code snippet of this guide, with all the steps compiled together."),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"Current Standards",label:"Current Standards",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="read_assets.js"',title:'"read_assets.js"'},"// Import and network setup\nimport { ERC725 } from '@erc725/erc725.js';\nimport UniversalProfileSchema from '@erc725/erc725.js/schemas/LSP3UniversalProfileMetadata.json';\nimport LSP4schema from '@erc725/erc725.js/schemas/LSP4DigitalAsset.json';\nimport Web3 from 'web3';\n\n// Static variables\nconst SAMPLE_PROFILE_ADDRESS = '0xa907c1904c22DFd37FF56c1f3c3d795682539196';\nconst RPC_ENDPOINT = 'https://rpc.l16.lukso.network';\nconst IPFS_GATEWAY = 'https://2eff.lukso.dev/ipfs/';\n\n// Parameters for the ERC725 instance\nconst provider = new Web3.providers.HttpProvider(RPC_ENDPOINT);\nconst config = { ipfsGateway: IPFS_GATEWAY };\n\n// Fetch the LSP5 data of the Universal Profile to get its owned assets\nconst profile = new ERC725(\n  UniversalProfileSchema,\n  SAMPLE_PROFILE_ADDRESS,\n  provider,\n  config,\n);\n\nconst result = await profile.fetchData('LSP5ReceivedAssets[]');\nconst ownedAssets = result.value;\n\nconst ownedAssetsMetadata = await ownedAssets.map(async (ownedAsset) => {\n  // Instantiate the asset\n  const digitalAsset = new ERC725(LSP4Schema, ownedAsset, provider, config);\n\n  // Get the encoded data\n  return await digitalAsset.fetchData('LSP4Metadata');\n});\n\nconsole.log(ownedAssetsMetadata);\n"))),(0,s.kt)(l.Z,{value:"Legacy Standards",label:"Legacy Standards",mdxType:"TabItem"},(0,s.kt)("details",null,(0,s.kt)("summary",null,"LSP1 Legacy ABI"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="lsp1_legacy_minimal_abi.json"',title:'"lsp1_legacy_minimal_abi.json"'},'[\n  {\n    "inputs": [],\n    "name": "getAllRawValues",\n    "outputs": [\n      {\n        "internalType": "bytes32[]",\n        "name": "",\n        "type": "bytes32[]"\n      }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  }\n]\n'))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="read_assets.js"',title:'"read_assets.js"'},"// Import and network setup\nimport { ERC725 } from '@erc725/erc725.js';\nimport UniversalProfileSchema from '@erc725/erc725.js/schemas/LSP3UniversalProfileMetadata.json';\nimport LSP4schema from '@erc725/erc725.js/schemas/LSP4DigitalAsset.json';\nimport Web3 from 'web3';\nimport LSP1MinimalABI from './lsp1_legacy_minimal_abi.json';\n\n// Static variables\nconst SAMPLE_PROFILE_ADDRESS = '0x0C03fBa782b07bCf810DEb3b7f0595024A444F4e';\nconst RPC_ENDPOINT = 'https://rpc.l14.lukso.network';\nconst IPFS_GATEWAY = 'https://2eff.lukso.dev/ipfs/';\n\n// Parameters for the ERC725 instance\nconst provider = new Web3.providers.HttpProvider(RPC_ENDPOINT);\nconst config = { ipfsGateway: IPFS_GATEWAY };\n\n// Fetch the LSP1 data of the Universal Profile to get its Universal Receiver\nconst profile = new ERC725(\n  UniversalProfileSchema,\n  SAMPLE_PROFILE_ADDRESS,\n  provider,\n  config,\n);\n\nconst result = await profile.fetchData('LSP1UniversalReceiverDelegate');\nconst universalReceiverAddress = result.value;\n\nconst web3 = new Web3(RPC_ENDPOINT);\n\n// Get all received assets from the Universal Receiver of the Universal Profile.\nconst universalReceiver = new web3.eth.Contract(\n  LSP1MinimalABI,\n  receiverAddress,\n);\n\n// Fetch all raw values\nconst rawValues = await universalReceiver.methods.getAllRawValues().call();\n\n// Convert raw values to addresses\nconst ownedAssets = rawValues.map((returnedRawValue) => {\n  return web3.utils.toChecksumAddress(returnedRawValue.substr(26));\n});\n\nconst ownedAssetsMetadata = await ownedAssets.map(async (ownedAsset) => {\n  // Instantiate the asset\n  const digitalAsset = new ERC725(LSP4Schema, ownedAsset, provider, config);\n\n  // Get the encoded data\n  return await digitalAsset.fetchData('LSP4Metadata');\n});\n\nconsole.log(ownedAssetsMetadata);\n")))))}m.isMDXComponent=!0},2904:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example-asset-dd5a54e12a4dd980896dc69d4d2633d7.png"}}]);