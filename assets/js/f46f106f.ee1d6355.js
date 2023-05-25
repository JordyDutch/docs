"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[1581],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(o),m=n,k=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return o?a.createElement(k,i(i({ref:t},c),{},{components:o})):a.createElement(k,i({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<r;d++)i[d]=o[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},5816:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=o(7462),n=(o(7294),o(3905));const r={title:"Become a Validator",sidebar_position:3},i=void 0,l={unversionedId:"networks/mainnet/become-a-validator",id:"networks/mainnet/become-a-validator",title:"Become a Validator",description:"Become a validator",source:"@site/docs/networks/mainnet/become-a-validator.md",sourceDirName:"networks/mainnet",slug:"/networks/mainnet/become-a-validator",permalink:"/networks/mainnet/become-a-validator",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/networks/mainnet/become-a-validator.md",tags:[],version:"current",lastUpdatedAt:1685011009,formattedLastUpdatedAt:"May 25, 2023",sidebarPosition:3,frontMatter:{title:"Become a Validator",sidebar_position:3},sidebar:"networksSidebar",previous:{title:"Running a Node",permalink:"/networks/mainnet/running-a-node"},next:{title:"Network parameters",permalink:"/networks/testnet/parameters"}},s={},d=[{value:"Become a validator",id:"become-a-validator",level:2},{value:"Starting a validator",id:"starting-a-validator",level:2},{value:"Using LUKSO CLI",id:"using-lukso-cli",level:3},{value:"Importing Validator Keys",id:"importing-validator-keys",level:4},{value:"Checking Validator Keys",id:"checking-validator-keys",level:4},{value:"Starting the Validator",id:"starting-the-validator",level:4},{value:"Checking Validator Logs",id:"checking-validator-logs",level:4},{value:"Using Docker",id:"using-docker",level:3},{value:"Using Custom configs",id:"using-custom-configs",level:3},{value:"Need Help?",id:"need-help",level:2}],c={toc:d};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"become-a-validator"},"Become a validator"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The LUKSO Mainnet launched on Tuesday 23rd May, 4:20 PM GMT with validators that previously deposited to the ",(0,n.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x42000421dd80D1e90E56E87e6eE18D7770b9F8cC#code"},"Genesis Deposit Contract"),". Becoming a validator is paused until the discovery month ends and the LYXe to LYX migration goes live. For more information, have a look into our Medium posts about the ",(0,n.kt)("a",{parentName:"p",href:"https://medium.com/lukso/its-happening-the-genesis-validators-are-coming-ce5e07935df6"},"LUKSO launch process")," and the ",(0,n.kt)("a",{parentName:"p",href:"https://medium.com/lukso/genesis-validators-deposit-smart-contract-freeze-and-testnet-launch-c5f7b568b1fc"},"deposit contract freeze"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Deposit Launchpad",src:o(5359).Z,width:"1315",height:"664"})),(0,n.kt)("p",null,"To become a validator, you can use the LUKSO Deposit Launchpad: ",(0,n.kt)("a",{parentName:"p",href:"https://deposit.mainnet.lukso.network/"},"https://deposit.mainnet.lukso.network/"),"."),(0,n.kt)("admonition",{title:"Validator Keys",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"As a validator, you need to import your validator deposit key (",(0,n.kt)("inlineCode",{parentName:"p"},"keystore-xxx-[timestamp].json")," files that you have generated using the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/tools-wagyu-key-gen"},"LUKSO Wagyu")," or ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/tools-key-gen-cli"},"LUKSO CLI Keygen")," tools. Ensure you safely copy them to your node before starting the validator node.")),(0,n.kt)("h2",{id:"starting-a-validator"},"Starting a validator"),(0,n.kt)("p",null,"As while running a regular node, you have multiple options to start your validator:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"LUKSO CLI Validator")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Docker Compose Setup")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Configure a LUKSO Compatible Client"))),(0,n.kt)("p",null,"Please refer to the regular ",(0,n.kt)("a",{parentName:"p",href:"/networks/mainnet/running-a-node"},"Node Guide")," that explains the differences between those setups and how to get the correct network configurations."),(0,n.kt)("h3",{id:"using-lukso-cli"},"Using LUKSO CLI"),(0,n.kt)("p",null,"Set up your regular node using the LUKSO CLI as described in the ",(0,n.kt)("a",{parentName:"p",href:"/networks/mainnet/running-a-node"},"Node Guide"),"."),(0,n.kt)("h4",{id:"importing-validator-keys"},"Importing Validator Keys"),(0,n.kt)("p",null,"If it is set up correctly and all clients are working, you can continue importing your validator keys into the validator wallet. You will be asked to set a new wallet password to store the imported deposit keys safely. Further, you will have to input your password for the deposit keys you want to import so that they can be encrypted and added to the wallet. The new keystore files will be stored under the ",(0,n.kt)("inlineCode",{parentName:"p"},"./myLUKSOnode/mainnet-keystore")," directory."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'$ lukso validator import --validator-keys "./path/to/your/keys/folder"\n')),(0,n.kt)("h4",{id:"checking-validator-keys"},"Checking Validator Keys"),(0,n.kt)("p",null,"After importing one or multiple folders, you can check your imported keys."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ lukso validator list\n")),(0,n.kt)("p",null,"If the imported deposit keys match the ones in the original folder, you can delete them from your node machine."),(0,n.kt)("h4",{id:"starting-the-validator"},"Starting the Validator"),(0,n.kt)("p",null,"After importing your keys, you can start the node with the validator functionality. If the node is already synced and running, the ",(0,n.kt)("inlineCode",{parentName:"p"},"lukso start")," command will restart all clients automatically."),(0,n.kt)("p",null,"To start the validator, you have to pass a minimum of 2 flags:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--validator"),": Will start the installed and configured clients, including the validator"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--transaction-fee-recipient"),": Specifies your transaction fee recipient address, which will receive all block rewards and tips from transactions. The address can be any EOA address you have control over on a wallet like MetaMask, Ledger, or any other wallet with the functionality to connect with LUKSO or custom networks.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If you want to set custom flags to the start command, like the graffiti or a custom stat page connection, make sure to add them. You can find more information about passing options to the client on the official ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/tools-lukso-cli"},"LUKSO CLI Documentation"),".")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The recipient fee address can also be different than the withdrawal credential you added to your validator key when you generated them. The withdrawal address is used to withdraw rewards and staked amounts connected to the consensus mechanism after the ",(0,n.kt)("a",{parentName:"p",href:"https://ethereum.org/en/history/"},"Shapella")," upgrade is implemented on the LUKSO blockchain. The feature is planned some months after the network launch.")),(0,n.kt)("p",null,"As only genesis validators can run the validator on a node, you must select your chosen initial supply for the LUKSO mainnet. More information can be found in the official ",(0,n.kt)("a",{parentName:"p",href:"https://medium.com/lukso/lukso-mainnet-timeline-and-process-dd997fe811c8"},"Mainnet Timeline")," article."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'$ lukso start --validator --transaction-fee-recipient "0x1234..."\n')),(0,n.kt)("h4",{id:"checking-validator-logs"},"Checking Validator Logs"),(0,n.kt)("p",null,"To check that everything is running correctly, you can see the status of all your clients using the status command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ lukso status\n\n# INFO[0000] PID 39424 - Execution (geth): Running \ud83d\udfe2\n# INFO[0000] PID 39430 - Consensus (prysm): Running \ud83d\udfe2\n# INFO[0000] PID 39432 - Validator (validator): Running \ud83d\udfe2\n")),(0,n.kt)("p",null,"In addition to the ",(0,n.kt)("em",{parentName:"p"},"consensus")," and ",(0,n.kt)("em",{parentName:"p"},"execution")," clients, you can now further check the validator logs using the LUKSO CLI:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Viewing the logs of the validator client\n$ lukso logs validator\n")),(0,n.kt)("p",null,"For more options, please check the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/tools-lukso-cli"},"LUKSO CLI Documentation"),"."),(0,n.kt)("p",null,"To enable more advanced monitoring for your node, you can check the official ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/network-docker-monitoring"},(0,n.kt)("inlineCode",{parentName:"a"},"network-docker-monitoring"))," repository with a step-by-step guide."),(0,n.kt)("h3",{id:"using-docker"},"Using Docker"),(0,n.kt)("p",null,"Our official Docker container provides a base template for images to run the LUKSO validator nodes. Make sure you have Docker and Docker Compose installed on your system."),(0,n.kt)("p",null,"Head over to the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/network-docker-containers"},"network-docker-containers")," repository from LUKSO and follow the installation process. You will have to clone the repository to your node machine and configure various properties, including the genesis files, deposit keys, and node name."),(0,n.kt)("p",null,"After the configuration, you can automatically download, install, and start all node clients. Head into the repository and follow the instructions in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/network-docker-monitoring/blob/main/README.md"},"README.md")),(0,n.kt)("p",null,"To enable more advanced monitoring for your node, you can check the official ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/network-docker-monitoring"},(0,n.kt)("inlineCode",{parentName:"a"},"network-docker-monitoring"))," repository with a step-by-step guide."),(0,n.kt)("h3",{id:"using-custom-configs"},"Using Custom configs"),(0,n.kt)("p",null,"If you are a pro user or want to generate custom genesis files with a different genesis supply of the blockchain, you can follow the instructions in the following repositories:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/tools-lodestar-genesis-ssz-generator/blob/spike/pos-from-the-start/packages/beacon-node/test/utils/README.md"},"Genesis File Generation Tool")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/network-configs/mainnet"},"Network Configurations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/network-configs#binary-applications"},"Client Specifications"))),(0,n.kt)("h2",{id:"need-help"},"Need Help?"),(0,n.kt)("p",null,"Check the ",(0,n.kt)("a",{parentName:"p",href:"/networks/faq/validator"},"Network FAQ")," section."),(0,n.kt)("p",null,"Ask your question in the validators channel on the ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/lukso"},"official LUKSO Discord server"),"."))}u.isMDXComponent=!0},5359:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/deposit-launchpad-08511c262f474568be88c604868167a4.png"}}]);