(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[529],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2751:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:1.1},c={unversionedId:"tools/erc725js/getting-started",id:"tools/erc725js/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"The erc725.js package allows you to easily interact with the ERC-725 schemas.",source:"@site/docs/tools/erc725js/getting-started.md",sourceDirName:"tools/erc725js",slug:"/tools/erc725js/getting-started",permalink:"/tools/erc725js/getting-started",editUrl:"https://github.com/lukso-network/docs-website/tree/main/docs/tools/erc725js/getting-started.md",version:"current",sidebarPosition:1.1,frontMatter:{sidebar_position:1.1},sidebar:"toolsSidebar",previous:{title:"Relayer API",permalink:"/tools/relayer-api"},next:{title:"Schemas",permalink:"/tools/erc725js/schemas"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Instantiation",id:"instantiation",children:[]},{value:"Usage",id:"usage",children:[]}],p={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"erc725.js")," package allows you to easily interact with the ERC-725 schemas."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GitHub repo: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ERC725Alliance/erc725.js"},"https://github.com/ERC725Alliance/erc725.js")),(0,o.kt)("li",{parentName:"ul"},"NPM: ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/erc725.js"},"https://www.npmjs.com/package/erc725.js"))),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  npm install erc725.js\n")),(0,o.kt)("h2",{id:"instantiation"},"Instantiation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { ERC725 } from "erc725.js";\nimport Web3 from "web3";\n\n// Part of LSP3-UniversalProfile Schema\n// https://github.com/lukso-network/LIPs/blob/master/LSPs/LSP-3-UniversalProfile.md\nconst schema = [\n  {\n    name: "SupportedStandards:ERC725Account",\n    key: "0xeafec4d89fa9619884b6b89135626455000000000000000000000000afdeb5d6",\n    keyType: "Mapping",\n    valueContent: "0xafdeb5d6",\n    valueType: "bytes",\n  },\n  {\n    name: "LSP3Profile",\n    key: "0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5",\n    keyType: "Singleton",\n    valueContent: "JSONURL",\n    valueType: "bytes",\n  },\n  {\n    name: "LSP1UniversalReceiverDelegate",\n    key: "0x0cfc51aec37c55a4d0b1a65c6255c4bf2fbdf6277f3cc0730c45b828b6db8b47",\n    keyType: "Singleton",\n    valueContent: "Address",\n    valueType: "address",\n  },\n];\n\nconst address = "0x0c03fba782b07bcf810deb3b7f0595024a444f4e";\nconst provider = new Web3.providers.HttpProvider(\n  "https://rpc.l14.lukso.network"\n);\nconst config = {\n  ipfsGateway: "https://ipfs.lukso.network/ipfs/",\n};\n\nconst erc725 = new ERC725(schema, address, provider, config);\n')),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await erc725.getOwner();\n// > '0x28D25E70819140daF65b724158D00c373D1a18ee'\n\nawait erc725.getData(\"SupportedStandards:ERC725Account\");\n// > '0xafdeb5d6'\n\nawait erc725.getData(\"LSP3Profile\");\n/* >\n{\n    url: 'ipfs://QmXybv2LdJWscy1C6yRKUjvnaj6aqKktZX4g4xmz2nyYj2',\n    hash: '0xb4f9d72e83bbe7e250ed9ec80332c493b7b3d73e0d72f7b2c7ab01c39216eb1a',\n    hashFunction: 'keccak256(utf8)'\n}\n*/\n\nawait erc725.fetchData(\"LSP3Profile\"); // downloads and verifies the linked JSON\n/* > \n{\n    LSP3Profile: {\n        name: 'frozeman',\n        description: 'The inventor of ERC725 and ERC20...',\n        links: [\n            { title: 'Twitter', url: 'https://twitter.com/feindura' },\n            { title: 'lukso.network', url: 'https://lukso.network' }\n        ],\n        ...\n    }\n}\n*/\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Try it")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/erc725js-instantiation?devtoolsheight=66&file=index.js"},"https://stackblitz.com/edit/erc725js-instantiation?devtoolsheight=66&file=index.js")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Whenever you can you should import ",(0,o.kt)("inlineCode",{parentName:"p"},"ERC725")," via the named export. However currently we are also providing a default export."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import ERC725 from "erc725.js";\n')))),(0,o.kt)("p",null,"Parameters descriptions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./api/interfaces/erc725schema.md"},"ERC725Schema")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/tools/erc725js/providers"},"Providers"))),(0,o.kt)("p",null,"After the instance has been created is is still possible to change settings through the options property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"    myERC725.options.schema = '<schema>' // change schema\n    myERC725.options.address '<address>' // change address\n    myERC725.options.config.ipfsGateway = '<url>' // used for fetchData(), default: 'https://cloudflare-ipfs.com/ipfs/'\n\n    // NOTE: ERC725.provider can not be changed\n")))}d.isMDXComponent=!0}}]);