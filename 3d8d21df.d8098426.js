(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{117:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/img1-ada757bc34c4c7970138d74ebba7f994.png"},118:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/img2-985aa67d97c85d80be89d598b17c36dc.png"},65:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var i=r(2),a=r(6),n=(r(0),r(80)),c={id:"about",title:"About Microservices",sidebar_label:"About Microservices"},o={unversionedId:"about",id:"about",isDocsHomePage:!1,title:"About Microservices",description:"What are Microservices:",source:"@site/docs/about.md",slug:"/about",permalink:"/docs/about",version:"current",sidebar_label:"About Microservices",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Designing Microservices",permalink:"/docs/designing"}},s=[{value:"What are Microservices:",id:"what-are-microservices",children:[]},{value:"Benefits of Microservices:",id:"benefits-of-microservices",children:[]},{value:"Rules for Building Applications with Microservices:",id:"rules-for-building-applications-with-microservices",children:[]},{value:"Architecture:",id:"architecture",children:[]}],l={rightToc:s};function p(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(i.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"what-are-microservices"},"What are Microservices:"),Object(n.b)("p",null,"Microservices - also known as the microservice architecture - is an architectural style that structures an application as a collection of services that are "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Often times large monolithic applications that are broken into small services."),Object(n.b)("li",{parentName:"ul"},"Highly maintainable and testable"),Object(n.b)("li",{parentName:"ul"},"Loosely coupled"),Object(n.b)("li",{parentName:"ul"},"Independently deployable"),Object(n.b)("li",{parentName:"ul"},"Organized around business capabilities"),Object(n.b)("li",{parentName:"ul"},"Owned by a small team\nThe microservice architecture enables the rapid, frequent and reliable delivery of large, complex applications. It also enables an organization to evolve its technology stack.\n",Object(n.b)("img",{alt:"img",src:r(117).default}))),Object(n.b)("h2",{id:"benefits-of-microservices"},"Benefits of Microservices:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Act Independently :"),"\nMicroservices are applications that are separated into a collection of small, independently deployable services. Because microservices are designed to act independently, they are naturally consistent with agile principles that promote end-to-end team ownership.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Simplified Deployment:"),"\nEach microservice is built and aligned around a feature to reduce the complexity of the application change-management process. Because each service is individually changed, tested, and deployed without affecting other services, deployment is accelerated.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Improved Application Quality:"),'\nBecause of the "divide-and-conquer" approach of microservices, both functional and performance testing are easier with microservices than they are with monolithic applications. Microservices architecture lends itself to test-driven development, as components can be tested in isolation and combined with a full or virtualized set of microservices. This approach results in overall improvement in application quality.')),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Easier to Scale:"),"\nTeams can more efficiently scale applications by scaling individual services according to their criticality to the overall app, throughput, memory, and CPU load."))),Object(n.b)("h2",{id:"rules-for-building-applications-with-microservices"},"Rules for Building Applications with Microservices:"),Object(n.b)("p",null,"When you develop microservices for an application, keep these rules in mind:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"One job:"),' Each microservice must be optimized for a single function. Each service is smaller and simpler to write, maintain, and manage. Robert Martin calls this principle the "single responsibility principle."')),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Separate processes:")," Communication between microservices must be conducted through REST API and message brokers. All communication from service to service must be through the service API or must use an explicit communication pattern, such as the Claim Check Pattern from Hohpe.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Execution scope:")," Although microservices can expose themselves through APIs, the focus is not on interfaces, but on the running components. The granularity of a microservices application is highlighted in this figure:\n",Object(n.b)("img",{alt:"img",src:r(118).default}))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"CI/CD:")," Each microservice can be continuously integrated (CI) and continuously delivered (CD). When you build a large application that is composed of many services, you soon realize that different services evolve at different rates. If each service has a unique continuous integration or continuous delivery pipeline, the service can proceed at its own pace. In the monolithic approach, different aspects of the system are all released at the speed of the slowest moving part of the system.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Resiliency:")," You can apply high availability and clustering decisions to each microservice. When you build large systems, another realization that you have is that when it comes to clustering, one size does not fit all. The monolithic approach of scaling all the services in the monolith at the same level can lead to the overuse or underuse of services. Even worse, when shared resources are monopolized, services might be neglected. In a large system, you can deploy services that do not need to scale to a minimum number of servers to conserve resources. Other services require scaling up to large numbers."))),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Reference:")," ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ibm.com/cloud/architecture/architectures/microservices?mhsrc=ibmsearch_a&mhq=microservices"}),"https://www.ibm.com/cloud/architecture/architectures/microservices?mhsrc=ibmsearch_a&mhq=microservices"))),Object(n.b)("h2",{id:"architecture"},"Architecture:"),Object(n.b)("p",null,"Bee Travels is a travel booking application that is composed of several mircoservices. Each mircoservice can be run independently, or together to form the full service. Bee Travels can be used to search and book hotels, flights and car rentals for various destinations across the world."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," All data is fake and only to be used for demonstration purposes.")),Object(n.b)("p",null,"Bee Travels is comprised of the following microservices:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/bee-travels/bee-travels-node/tree/master/services/ui/frontend"}),"UI Frontend")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/bee-travels/bee-travels-node/tree/master/services/ui/backend"}),"UI Backend")),Object(n.b)("li",{parentName:"ul"},"Destination Service --\x3e Dead Link"),Object(n.b)("li",{parentName:"ul"},"Hotel Service --\x3e Dead Link"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/bee-travels/bee-travels-node/tree/master/services/currency-exchange"}),"Currency Exchange"))),Object(n.b)("p",null,"The following is a basic architecture diagram for the containerized version of Bee Travels."),Object(n.b)("p",null,Object(n.b)("img",{alt:"img",src:r(91).default})))}p.isMDXComponent=!0},80:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var i=r(0),a=r.n(i);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(r),m=i,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||n;return r?a.a.createElement(d,o(o({ref:t},l),{},{components:r})):a.a.createElement(d,o({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,c=new Array(n);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var l=2;l<n;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/architecture-v1-6e56e10f06f6a8da3f025b814802f275.png"}}]);