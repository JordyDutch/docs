"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[5774],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return n?o.createElement(k,i(i({ref:t},u),{},{components:n})):o.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1902:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(7462),a=(n(7294),n(3905));const r={title:"Become a Validator",sidebar_position:3},i=void 0,l={unversionedId:"networks/testnet/become-a-validator",id:"networks/testnet/become-a-validator",title:"Become a Validator",description:"Become a Validator",source:"@site/docs/networks/testnet/become-a-validator.md",sourceDirName:"networks/testnet",slug:"/networks/testnet/become-a-validator",permalink:"/networks/testnet/become-a-validator",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/networks/testnet/become-a-validator.md",tags:[],version:"current",lastUpdatedAt:1684530271,formattedLastUpdatedAt:"May 19, 2023",sidebarPosition:3,frontMatter:{title:"Become a Validator",sidebar_position:3},sidebar:"networksSidebar",previous:{title:"Running a Node",permalink:"/networks/testnet/running-a-node"},next:{title:"L14 Public Testnet",permalink:"/networks/l14-testnet"}},s={},d=[{value:"Become a Validator",id:"become-a-validator",level:2},{value:"Starting a Validator",id:"starting-a-validator",level:2},{value:"LUKSO CLI Validator Node",id:"lukso-cli-validator-node",level:3},{value:"Using Docker",id:"using-docker",level:3},{value:"Custom Validator Node",id:"custom-validator-node",level:3},{value:"Need Help?",id:"need-help",level:2}],u={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"become-a-validator"},"Become a Validator"),(0,a.kt)("p",null,"Testnet validators are core members and organizations wanting to run and maintain their LUKSO Testnet node in a stable environment over a long period to ensure healthy uptimes, stability, and quick response times from clients as demand from developers rises."),(0,a.kt)("p",null,"If you want to become a whitelisted validator on our testnet, prepare your validator keys, set up your node environment, and contact ",(0,a.kt)("a",{parentName:"p",href:"mailto:testnet-validators@lukso.network"},"testnet-validators@lukso.network"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Testnet Launchpad",src:n(2176).Z,width:"1315",height:"664"})),(0,a.kt)("p",null,"After you become whitelisted, visit the official ",(0,a.kt)("a",{parentName:"p",href:"https://deposit.testnet.lukso.network/"},"Testnet Deposit Launchpad")," and cautiously generate the specified number of keys you are allowed. Then continue depositing your LYXt to them."),(0,a.kt)("admonition",{title:"Genesis validators",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"As a validator, you need to import your validator deposit key (",(0,a.kt)("inlineCode",{parentName:"p"},"keystore-xxx-[timestamp].json")," files that you have generated using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/tools-wagyu-key-gen"},"LUKSO Wagyu")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/tools-key-gen-cli"},"LUKSO CLI Keygen")," tools. Ensure you safely copy them to your node before starting the validator node.")),(0,a.kt)("h2",{id:"starting-a-validator"},"Starting a Validator"),(0,a.kt)("p",null,"As while running a regular node, you have multiple options to start your validator:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"LUKSO CLI Validator")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Docker Compose Setup")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Configure a LUKSO Compatible Client"))),(0,a.kt)("p",null,"Please refer to the regular ",(0,a.kt)("a",{parentName:"p",href:"/networks/testnet/running-a-node"},"Node Guide")," that explains the differences between those setups and how to get the correct network configurations."),(0,a.kt)("h3",{id:"lukso-cli-validator-node"},"LUKSO CLI Validator Node"),(0,a.kt)("p",null,"Set up your regular node using the LUKSO CLI as described in the ",(0,a.kt)("a",{parentName:"p",href:"/networks/testnet/running-a-node"},"Node Guide"),"."),(0,a.kt)("p",null,"The instructions are the same as for mainnet node, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/networks/mainnet/become-a-validator#using-lukso-cli"},"mainnet validator guide"),". You will simply have to add ",(0,a.kt)("inlineCode",{parentName:"p"},"--testnet")," after each commands to make it work for testnet. The command will look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ lukso validator import --validator-keys "./path/to/your/keys/folder" --testnet\n\n$ lukso validator list --testnet\n\n$ lukso start --validator --transaction-fee-recipient "0x1234..." --testnet\n\n$ lukso logs validator --testnet\n')),(0,a.kt)("h3",{id:"using-docker"},"Using Docker"),(0,a.kt)("p",null,"Our official Docker container provides a base template for images to run the LUKSO validator nodes. Make sure you have Docker and Docker Compose installed on your system."),(0,a.kt)("p",null,"The instructions are the same as for mainnet node, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/networks/mainnet/become-a-validator#using-docker"},"mainnet validator guide"),". You will simply have to download the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/network-configs/tree/main/testnet/shared"},(0,a.kt)("strong",{parentName:"a"},"testnet")," genesis files")," instead of the mainnet ones."),(0,a.kt)("h3",{id:"custom-validator-node"},"Custom Validator Node"),(0,a.kt)("p",null,"If you are a pro user or want to set up the testnet node in a cloud environment, you can follow the instructions in the following repositories to manually configure the Ethereum clients:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/network-configs/testnet"},"Network Configurations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/network-configs#binary-applications"},"Client Specifications"))),(0,a.kt)("h2",{id:"need-help"},"Need Help?"),(0,a.kt)("p",null,"Check the ",(0,a.kt)("a",{parentName:"p",href:"/networks/faq/validator"},"Network FAQ")," section."),(0,a.kt)("p",null,"Ask your question in the validators channel on the ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/lukso"},"official LUKSO Discord server"),"."))}p.isMDXComponent=!0},2176:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/testnet-launchpad-e15811d79d9b5e73db4a0912fc8a936d.png"}}]);