"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[7723],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),k=a,m=d["".concat(s,".").concat(k)]||d[k]||c[k]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"Running a Node",sidebar_position:2},l=void 0,i={unversionedId:"networks/testnet/running-a-node",id:"networks/testnet/running-a-node",title:"Running a Node",description:"System Requirements",source:"@site/docs/networks/testnet/running-a-node.md",sourceDirName:"networks/testnet",slug:"/networks/testnet/running-a-node",permalink:"/networks/testnet/running-a-node",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/networks/testnet/running-a-node.md",tags:[],version:"current",lastUpdatedAt:1684518977,formattedLastUpdatedAt:"May 19, 2023",sidebarPosition:2,frontMatter:{title:"Running a Node",sidebar_position:2},sidebar:"networksSidebar",previous:{title:"Network parameters",permalink:"/networks/testnet/parameters"},next:{title:"Become a Validator",permalink:"/networks/testnet/become-a-validator"}},s={},u=[{value:"System Requirements",id:"system-requirements",level:2},{value:"Ports",id:"ports",level:2},{value:"Supported Clients",id:"supported-clients",level:2},{value:"Starting Node",id:"starting-node",level:2},{value:"LUKSO CLI Node Setup",id:"lukso-cli-node-setup",level:3},{value:"Install the LUKSO CLI",id:"install-the-lukso-cli",level:4},{value:"Create a Working Directory",id:"create-a-working-directory",level:4},{value:"Install the Clients",id:"install-the-clients",level:4},{value:"Start the Clients",id:"start-the-clients",level:4},{value:"Checking Processes",id:"checking-processes",level:4},{value:"Need Help?",id:"need-help",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Settings"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Operating System"),(0,a.kt)("td",{parentName:"tr",align:null},"Linux or MacOS")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Number of CPU cores"),(0,a.kt)("td",{parentName:"tr",align:null},"4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RAM"),(0,a.kt)("td",{parentName:"tr",align:null},"16 GB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SSD"),(0,a.kt)("td",{parentName:"tr",align:null},"100 GB")))),(0,a.kt)("h2",{id:"ports"},"Ports"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Port"),(0,a.kt)("th",{parentName:"tr",align:null},"Protocol"),(0,a.kt)("th",{parentName:"tr",align:null},"Client"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"30303"),(0,a.kt)("td",{parentName:"tr",align:null},"TCP"),(0,a.kt)("td",{parentName:"tr",align:null},"execution syncing"),(0,a.kt)("td",{parentName:"tr",align:null},"port must be open")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"30303"),(0,a.kt)("td",{parentName:"tr",align:null},"UDP"),(0,a.kt)("td",{parentName:"tr",align:null},"execution discovery"),(0,a.kt)("td",{parentName:"tr",align:null},"port must be open")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"13000"),(0,a.kt)("td",{parentName:"tr",align:null},"TCP"),(0,a.kt)("td",{parentName:"tr",align:null},"consensus syncing"),(0,a.kt)("td",{parentName:"tr",align:null},"port must be open")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"12000"),(0,a.kt)("td",{parentName:"tr",align:null},"UDP"),(0,a.kt)("td",{parentName:"tr",align:null},"consensus discovery"),(0,a.kt)("td",{parentName:"tr",align:null},"port must be open")))),(0,a.kt)("h2",{id:"supported-clients"},"Supported Clients"),(0,a.kt)("p",null,"LUKSO runs the Ethereum protocol, meaning most Ethereum clients will run the LUKSO Blockchain. The currently tested clients are the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Execution Clients"),": ",(0,a.kt)("a",{parentName:"li",href:"https://geth.ethereum.org/"},"Geth"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ledgerwatch/erigon"},"Erigon")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Consensus Clients"),": ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/prysmaticlabs/prysm"},"Prysm"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/sigp/lighthouse"},"Lighthouse")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Validator Clients"),": ",(0,a.kt)("a",{parentName:"li",href:"https://docs.prylabs.network/docs/how-prysm-works/prysm-validator-client"},"Prysm"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/sigp/lighthouse"},"Lighthouse"))),(0,a.kt)("admonition",{title:"CLI Development",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Not all tested clients are fully supported by the LUKSO CLI yet. You can follow the latest development process on the official ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/tools-lukso-cli/"},"LUKSO CLI repository"),". Version ",(0,a.kt)("inlineCode",{parentName:"p"},"0.6.0 ")," features Geth, Erigon, and Prysm. We are currently working to ensure that Lighthouse also receives full support.")),(0,a.kt)("h2",{id:"starting-node"},"Starting Node"),(0,a.kt)("p",null,"To start your clients and contribute to the LUKSO Testnet, you have 3 options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Install the LUKSO CLI"),": The ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/tools-lukso-cli"},"LUKSO CLI")," is a command line tool to install, manage and set up nodes and validators of different clients for the LUKSO blockchain. It provides simple and unified commands to interact with your node and runs natively on your operating system. We recommend this as default for anyone beginning to get into the topic of running a node himself."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Use Docker Compose"),": The official ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/network-docker-containers"},"Docker Containers")," can make it easy for you if you're already experienced with the Docker ecosystem. Different configurations can be started in the blink of an eye and work in encapsulated containers. The versatility makes it especially useful if you want to run multiple networks on your node at once. The repository features extended documentation. By default, the Docker setup will run as a validator for the mainnet but can be modified."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Configure a LUKSO Compatible Client"),": You are in no way limited to the tools we provide for easy onboarding. If you are a pro user, you can download and run the Erigon, Geth, Lighthouse, or Prysm clients in your preferred setup. You can either ",(0,a.kt)("a",{parentName:"li",href:"https://deposit.mainnet.lukso.network/"},"download")," or ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/tools-lodestar-genesis-ssz-generator/blob/spike/pos-from-the-start/packages/beacon-node/test/utils/README.md"},"generate")," the genesis files of the LUKSO network and configure your clients manually. Please refer to the respective ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/network-configs#binary-applications"},"clients installation instructions")," and use the LUKSO ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/network-configs/"},"network configuration")," repository to start your node.")),(0,a.kt)("h3",{id:"lukso-cli-node-setup"},"LUKSO CLI Node Setup"),(0,a.kt)("p",null,"For further information, you can check out the official ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/tools-lukso-cli/"},"LUKSO CLI Documentation"),". It is not limiting yourself to running any supported clients, as all configurations and flags can be passed down. The guide will give you a brief introduction."),(0,a.kt)("h4",{id:"install-the-lukso-cli"},"Install the LUKSO CLI"),(0,a.kt)("p",null,"First, install the ",(0,a.kt)("inlineCode",{parentName:"p"},"lukso")," command globally on your node machine."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl https://install.lukso.network | sh\n")),(0,a.kt)("h4",{id:"create-a-working-directory"},"Create a Working Directory"),(0,a.kt)("p",null,"Next, create a working directory for your node's data and move into it. The directory is where everything regarding your blockchain node will be stored. Make sure to choose a proper name for your node folder. If you plan on running a validator later, this folder will also contain your validator key files by default."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ mkdir myLUKSOnode && cd myLUKSOnode\n")),(0,a.kt)("p",null,"Initialize the working folder, which will download the LUKSO network configuration and genesis files needed to sync with the LUKSO network."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ lukso init\n")),(0,a.kt)("h4",{id:"install-the-clients"},"Install the Clients"),(0,a.kt)("p",null,"After the initialization is successful, we have to download the blockchain clients, which will be managed from the CLI under the hood. They will install globally, need superuser permissions, and are set as default clients within your working directories configuration file. You will be asked which clients you want to download and install during the setup."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo lukso install\n")),(0,a.kt)("h4",{id:"start-the-clients"},"Start the Clients"),(0,a.kt)("p",null,"The following command will spin up your execution and consensus client and connect to the mainnet."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"lukso start --testnet\n")),(0,a.kt)("h4",{id:"checking-processes"},"Checking Processes"),(0,a.kt)("p",null,"To check that everything is running correctly, you can see the status of all your clients using the status command. By default, the validator is not enabled. If you want to run your validator node, please have a look at the ",(0,a.kt)("a",{parentName:"p",href:"/networks/testnet/become-a-validator"},"validator page"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ lukso status\n\n# INFO[0000] PID 39424 - Execution (geth): Running \ud83d\udfe2\n# INFO[0000] PID 39430 - Consensus (prysm): Running \ud83d\udfe2\n# INFO[0000] PID 39432 - Validator (validator): Stopped \ud83d\udd18\n")),(0,a.kt)("p",null,"If you want to check any of the running clients in more detail, you can use the built-in logging command of the CLI. It will print out the current log messages of one client to the terminal screen."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Viewing the logs of the execution client\n$ lukso logs execution --testnet\n\n# Viewing the logs of the consensus client\n$ lukso logs execution --testnet\n")),(0,a.kt)("p",null,"For more options, please check the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/tools-lukso-cli"},"LUKSO CLI Documentation"),"."),(0,a.kt)("p",null,"To enable more advanced monitoring for your node, you can check the official ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/network-docker-monitoring"},(0,a.kt)("inlineCode",{parentName:"a"},"network-docker-monitoring"))," repository with a step-by-step guide."),(0,a.kt)("h2",{id:"need-help"},"Need Help?"),(0,a.kt)("p",null,"Check the ",(0,a.kt)("a",{parentName:"p",href:"/networks/faq/validator"},"Network FAQ")," section."),(0,a.kt)("p",null,"Ask your question in the validators channel on the ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/lukso"},"official LUKSO Discord server"),"."))}c.isMDXComponent=!0}}]);