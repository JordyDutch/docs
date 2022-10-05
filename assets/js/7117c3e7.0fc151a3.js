"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[5787],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=d(a),k=r,u=m["".concat(p,".").concat(k)]||m[k]||c[k]||s;return a?n.createElement(u,i(i({ref:t},l),{},{components:a})):n.createElement(u,i({ref:t},l))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<s;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8471:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_label:"LSP2 - ERC725Y JSON Schema",sidebar_position:2},i="LSP2 - ERC725Y JSON Schema",o={unversionedId:"standards/generic-standards/lsp2-json-schema",id:"standards/generic-standards/lsp2-json-schema",title:"LSP2 - ERC725Y JSON Schema",description:"LSP2 - ERC725Y JSON Schema",source:"@site/docs/standards/generic-standards/lsp2-json-schema.md",sourceDirName:"standards/generic-standards",slug:"/standards/generic-standards/lsp2-json-schema",permalink:"/standards/generic-standards/lsp2-json-schema",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/generic-standards/lsp2-json-schema.md",tags:[],version:"current",lastUpdatedAt:1661109600,formattedLastUpdatedAt:"Aug 21, 2022",sidebarPosition:2,frontMatter:{sidebar_label:"LSP2 - ERC725Y JSON Schema",sidebar_position:2},sidebar:"standardsSidebar",previous:{title:"LSP1 - Universal Receiver",permalink:"/standards/generic-standards/lsp1-universal-receiver"},next:{title:"LSP14 - Ownable 2-Step",permalink:"/standards/generic-standards/lsp14-ownable-2-step"}},p={},d=[{value:"Introduction",id:"introduction",level:2},{value:"What does this standard represent?",id:"what-does-this-standard-represent",level:2},{value:"Specification",id:"specification",level:3},{value:"How does LSP2 work?",id:"how-does-lsp2-work",level:3},{value:"Data Key Types",id:"data-key-types",level:2},{value:"Singleton",id:"singleton",level:3},{value:"Array",id:"array",level:3},{value:"Mapping",id:"mapping",level:3},{value:"Example 1: Mapping as <code>FirstWord:SecondWord</code>",id:"example-1-mapping-as-firstwordsecondword",level:4},{value:"Example 2: Mapping as <code>FirstWord:&lt;address&gt;</code> (<code>&lt;mixed type&gt;</code>)",id:"example-2-mapping-as-firstwordaddress-mixed-type",level:4},{value:"Example 3: Mapping as <code>FirstWord:&lt;bytes32&gt;</code> (<code>&lt;mixed type&gt;</code>)",id:"example-3-mapping-as-firstwordbytes32-mixed-type",level:4},{value:"MappingWithGrouping",id:"mappingwithgrouping",level:3}],l={toc:d};function c(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lsp2---erc725y-json-schema"},"LSP2 - ERC725Y JSON Schema"),(0,r.kt)("admonition",{title:"Standard Document",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-2-ERC725YJSONSchema.md"},"LSP2 - ERC725Y JSON Schema"))),(0,r.kt)("admonition",{title:"Recommendation",type:"success"},(0,r.kt)("p",{parentName:"admonition"},"Our ",(0,r.kt)("a",{parentName:"p",href:"/tools/erc725js/getting-started"},"JavaScript library ",(0,r.kt)("strong",{parentName:"a"},"erc725.js"))," makes it easy to read + write data encoded according to the LSP2 Schema without manually going through all the encoding complexity.")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The storage of a smart contract consists of multiple ",(0,r.kt)("strong",{parentName:"p"},"storage slots"),". These slots are referenced by a ",(0,r.kt)("strong",{parentName:"p"},"slot number")," (as an ",(0,r.kt)("strong",{parentName:"p"},"integer"),") starting from slot 0. Each piece of data (= contract state) in a smart contract is stored as raw ",(0,r.kt)("strong",{parentName:"p"},"bytes")," under a specific storage slot."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In summary, smart contracts understand only two languages: bytes and uint256.\nTake the following key-value pair, for instance. It is not easy to infer the meaning of these data keys by reading them as ",(0,r.kt)("strong",{parentName:"p"},"bytes"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(key)                                                              => (value)\n0xdeba1e292f8ba88238e10ab3c7f88bd4be4fac56cad5194b6ecceaf653468af1 => 0x4d7920546f6b656e20322e30\n")),(0,r.kt)("p",null,"Using ",(0,r.kt)("strong",{parentName:"p"},"slot numbers")," and ",(0,r.kt)("strong",{parentName:"p"},"raw bytes")," makes the contract storage very hard to handle. ",(0,r.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp0-erc725account#erc725y---generic-key-value-store"},"ERC725Y")," solves part of the problem through a more flexible storage layout, where data is addressed via ",(0,r.kt)("inlineCode",{parentName:"p"},"bytes32")," keys. However, with such low-level languages, it is difficult for humans to understand the data in the storage."),(0,r.kt)("p",null,'The main problem around smart contract storage also arises when data is stored differently, depending on individual use cases and application needs. No standard schema defines "what the data stored under a specific data key represents".'),(0,r.kt)("p",null,"These two issues make it very hard for smart contracts to interact with each other and for external services to interact with contracts' storage."),(0,r.kt)("h2",{id:"what-does-this-standard-represent"},"What does this standard represent?"),(0,r.kt)("h3",{id:"specification"},"Specification"),(0,r.kt)("p",null,"The LSP2 Standard aims to offer a better abstraction on top of the storage of a smart contract."),(0,r.kt)("p",null,"This standard introduces a JSON schema that enables to represent the storage of a smart contract through more understandable data keys. It makes the data stored in a smart contract more organized."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Universal Profile + ERC725Y JSON schema (diagram)",src:a(6913).Z,width:"1692",height:"590"})),(0,r.kt)("p",null,"By introducing a schema, we can represent contract storage in the same way across contracts in the network. Everyone has a unified view of the data stored between smart contracts. Developers can quickly parse data, and contracts or interfaces can read or write data from or to the contract storage in the same manner. The standardization makes smart contracts ",(0,r.kt)("strong",{parentName:"p"},"more interoperable with each other"),"."),(0,r.kt)("h3",{id:"how-does-lsp2-work"},"How does LSP2 work?"),(0,r.kt)("p",null,"LSP2 introduces new ways to encode data, depending on its type. From a single entry to multiple entries (like arrays or maps)."),(0,r.kt)("p",null,"A data key in the contract storage can be defined as a JSON object with properties that describe the key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "LSP4TokenName",\n  "key": "0xdeba1e292f8ba88238e10ab3c7f88bd4be4fac56cad5194b6ecceaf653468af1",\n  "keyType": "Singleton",\n  "valueType": "string",\n  "valueContent": "String"\n}\n')),(0,r.kt)("h2",{id:"data-key-types"},"Data Key Types"),(0,r.kt)("p",null,"A Data Key Type defines ",(0,r.kt)("strong",{parentName:"p"},"HOW")," a 32 bytes data key is constructed, representing how a particular data key type is described in 32 bytes. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"Singleton")," data keys are simple keccak256 hashes of the key name string. Other Data Key Types are constructed of slices of hashes to group different key name parts or define array element keys."),(0,r.kt)("p",null,"The LSP2 Standard defines several ",(0,r.kt)("strong",{parentName:"p"},"data key types"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#singleton"},"Singleton")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#array"},"Array")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#mapping"},"Mapping")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#mappingwithgrouping"},"MappingWithGrouping"))),(0,r.kt)("h3",{id:"singleton"},"Singleton"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"Singleton")," data key is helpful to store a unique single value under a single data key."),(0,r.kt)("p",null,"Below is an example of a ",(0,r.kt)("strong",{parentName:"p"},"Singleton")," data key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "LSP4TokenName",\n  "key": "0xdeba1e292f8ba88238e10ab3c7f88bd4be4fac56cad5194b6ecceaf653468af1",\n  "keyType": "Singleton",\n  "valueType": "string",\n  "valueContent": "String"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"LSP2 Singleton key type",src:a(3288).Z,width:"1696",height:"589"})),(0,r.kt)("h3",{id:"array"},"Array"),(0,r.kt)("p",null,"Developers can use a data key of the type Array to store a list of elements of the same data type. They are accessed by an ",(0,r.kt)("em",{parentName:"p"},"index")," that defines their position within it."),(0,r.kt)("p",null,"The Array elements are arranged systematically, in the order they are added or removed to or from it."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"main properties")," of the LSP2 Array data key type are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"ordering matters")," \u2757"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"duplicates are permitted")," \u2705")),(0,r.kt)("p",null,"A data key type Array can be useful when there is the need to store a large group of similar data items under the same data key. For instance, a list of tokens or NFTs that an address has received. Below is an example of an Array data key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "LSP5ReceivedAssets[]",\n  "key": "0x6460ee3c0aac563ccbf76d6e1d07bada78e3a9514e6382b736ed3f478ab7b90b",\n  "keyType": "Array",\n  "valueType": "address",\n  "valueContent": "Address"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"LSP2 Array key type (length check)",src:a(1164).Z,width:"1138",height:"878"})),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"LSP2 Array key type (index access)",src:a(2388).Z,width:"1146",height:"872"})),(0,r.kt)("h3",{id:"mapping"},"Mapping"),(0,r.kt)("p",null,"The Mapping data key type is similar to the concept of lookup tables. It can be used to map data that have a shared significance (such as items derived from a common ancestor), and search or query specific elements efficiently."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"main properties")," of the LSP2 Mapping data key type are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"ordering does not matter")," \u2705"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"duplicates are not permitted")," \u274c")),(0,r.kt)("p",null,"The data being mapped can be words that have a specific meaning for the protocol or application implementation, or underlying data types (= ",(0,r.kt)("inlineCode",{parentName:"p"},"<mixed type>"),") like ",(0,r.kt)("inlineCode",{parentName:"p"},"address"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bytesN"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"uintN"),", etc. For ",(0,r.kt)("inlineCode",{parentName:"p"},"<mixed type>"),", all the data types are left padded. If the type is larger than 20 bytes, the second part of the key is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"left-cut for ",(0,r.kt)("inlineCode",{parentName:"li"},"uint<M>"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"int<M>")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"bool")),(0,r.kt)("li",{parentName:"ul"},"right cut for ",(0,r.kt)("inlineCode",{parentName:"li"},"bytes<M>")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"address"))),(0,r.kt)("p",null,"Below are some examples of the ",(0,r.kt)("strong",{parentName:"p"},"Mapping")," key type."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"mapping to ",(0,r.kt)("strong",{parentName:"li"},"words:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"SupportedStandards:LSP3UniversalProfile"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"SupportedStandards:LSP4DigitalAsset"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"SupportedStandards:LSP{N}{StandardName}"),", etc..."),(0,r.kt)("li",{parentName:"ul"},"mapping to ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"<mixed type>")),", like an ",(0,r.kt)("inlineCode",{parentName:"li"},"address"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"LSP5ReceivedAssetsMap:<address>")),(0,r.kt)("li",{parentName:"ul"},"mapping to ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"<mixed type>")),", like a ",(0,r.kt)("inlineCode",{parentName:"li"},"bytes32"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"LSP8MetadataAddress:<bytes32>"))),(0,r.kt)("h4",{id:"example-1-mapping-as-firstwordsecondword"},"Example 1: Mapping as ",(0,r.kt)("inlineCode",{parentName:"h4"},"FirstWord:SecondWord")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "SupportedStandards:LSP3UniversalProfile",\n  "key": "0xeafec4d89fa9619884b60000abe425d64acd861a49b8ddf5c0b6962110481f38",\n  "keyType": "Mapping",\n  "valueType": "bytes4",\n  "valueContent": "0xabe425d6"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"LSP2 Mapping key type to word",src:a(4402).Z,width:"1454",height:"687"})),(0,r.kt)("h4",{id:"example-2-mapping-as-firstwordaddress-mixed-type"},"Example 2: Mapping as ",(0,r.kt)("inlineCode",{parentName:"h4"},"FirstWord:<address>")," (",(0,r.kt)("inlineCode",{parentName:"h4"},"<mixed type>"),")"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"address")," value = ",(0,r.kt)("inlineCode",{parentName:"p"},"0xcafecafecafecafecafecafecafecafecafecafe")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "LSP5ReceivedAssetsMap:<address>",\n  "key": "0x812c4334633eb816c80d0000cafecafecafecafecafecafecafecafecafecafe",\n  "keyType": "Mapping",\n  "valueType": "(bytes4,bytes8)",\n  "valueContent": "(Bytes4,Number)"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"LSP2 Mapping key type to address",src:a(919).Z,width:"1520",height:"657"})),(0,r.kt)("h4",{id:"example-3-mapping-as-firstwordbytes32-mixed-type"},"Example 3: Mapping as ",(0,r.kt)("inlineCode",{parentName:"h4"},"FirstWord:<bytes32>")," (",(0,r.kt)("inlineCode",{parentName:"h4"},"<mixed type>"),")"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bytes32")," value = ",(0,r.kt)("inlineCode",{parentName:"p"},"0xaaaabbbbccccddddeeeeffff111122223333444455556666777788889999aaaa"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"bytes32")," value is ",(0,r.kt)("strong",{parentName:"p"},"right-cut"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "LSP8MetadataAddress:<bytes32>",\n  "key": "0x73dcc7c3c4096cdc7f8a0000aaaabbbbccccddddeeeeffff1111222233334444",\n  "keyType": "Mapping",\n  "valueType": "Mixed",\n  "valueContent": "Mixed"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"LSP2 Mapping key type to bytes32",src:a(8281).Z,width:"1706",height:"585"})),(0,r.kt)("h3",{id:"mappingwithgrouping"},"MappingWithGrouping"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"<firstWordHash>:<secondWordHash>:<bytes2(0)>:<thirdWordHash>")),(0,r.kt)("p",{parentName:"admonition"},"You must take into consideration the fact that if you choose the same value to hash for ",(0,r.kt)("inlineCode",{parentName:"p"},"firstWord")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"thirdWord")," there is a 0.0000000233% chance that two random values for the ",(0,r.kt)("inlineCode",{parentName:"p"},"secondWord")," will result in the same data key.")),(0,r.kt)("p",null,"A data key of type ",(0,r.kt)("strong",{parentName:"p"},"MappingWithGrouping")," is similar to the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"#mapping"},"Mapping"))," data key type, except that sub-types can be added to the main mapping data key."),(0,r.kt)("p",null,"For instance, it can be used to differentiate various types from the primary mapping data key, like different types of permissions (see ",(0,r.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp6-key-manager"},"LSP6 - Key Manager"),")."),(0,r.kt)("p",null,"Below is an example of a MappingWithGrouping data key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "AddressPermissions:Permissions:<address>",\n    "key": "0x4b80742de2bf82acb3630000<address>",\n    "keyType": "MappingWithGrouping",\n    "valueType": "bytes32",\n    "valueContent": "BitArray"\n},\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"LSP2 mappingWithGrouping key type",src:a(87).Z,width:"1473",height:"678"})),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Solidity Example"),(0,r.kt)("p",null,"Whenever you want to generate a data key of ",(0,r.kt)("inlineCode",{parentName:"p"},"keyType")," ",(0,r.kt)("strong",{parentName:"p"},"MappingWithGrouping"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"bytes32 dataKey = bytes32(\n    bytes.concat(\n        bytes6(keccak256(bytes(firstWord))),\n        bytes4(keccak256(bytes(secondWord))),\n        bytes2(0),\n        bytes20(keccak256(bytes(thirdWord)))\n    )\n);\n"))))}c.isMDXComponent=!0},6913:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ERC725Y-JSON-Schema-explained-ebb9fd1e6c2c1c77fa7bf75232737ef9.jpeg"},2388:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lsp2-key-type-array-index-access-03ade562bd986850564257f524659216.jpeg"},1164:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lsp2-key-type-array-length-check-dcf33b68541766254f2e21e10b45f91d.jpeg"},919:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lsp2-key-type-mapping-to-address-11926ed3dca9b2a4913bdaa4ca6583ac.jpeg"},8281:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lsp2-key-type-mapping-to-bytes32-72c8449f4686986e5115dc6f348ee85f.jpeg"},4402:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lsp2-key-type-mapping-to-word-8e6a56b5f9c08d8f86ad97002a04c7a7.jpeg"},87:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lsp2-key-type-mapping-with-grouping-37758f1bcd364a6b52bd63e89c2b122b.jpeg"},3288:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lsp2-key-type-singleton-f5773adc076859513bc0ca4821bab47c.jpeg"}}]);