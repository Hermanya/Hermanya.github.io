(window.webpackJsonp=window.webpackJsonp||[]).push([[1,7],{138:function(t,e,a){"use strict";a.r(e);var n=a(161),r=a(0),o=a.n(r),s=a(146),i=a(162),l=a.n(i),c=a(145),u=a(155),m=a(158),g=a(154),d=a(159),p=Object(c.default)(s.Flex).withConfig({displayName:"lg__Sidebar",componentId:"sc-1fiddnz-0"})([""]),h=Object(c.default)(s.Box).withConfig({displayName:"lg__Copy",componentId:"sc-1fiddnz-1"})(["max-width:32em;border-radius:0.5em 0.5em 0 0;transition:0.5s;:hover{border-radius:0.5em;box-shadow:0px 30px 100px -10px rgba(0,0,0,0.4);}"]),f=Object(c.default)(s.Flex).withConfig({displayName:"lg__Header",componentId:"sc-1fiddnz-2"})(["background-color:#8ec5fc;background-image:linear-gradient(62deg,#8ec5fc 0%,#e0c3fc 100%);"]);e.default=function(){var t=n.data;return o.a.createElement(s.Flex,{width:1},o.a.createElement(p,{pt:6,px:4,width:.25},o.a.createElement(m.a,null)),o.a.createElement(s.Flex,{width:1,flexDirection:"column",bg:"#fafafa"},o.a.createElement(f,{color:"white",px:4,pt:5},o.a.createElement(s.Box,{width:[0,0,1/3,.25],alignSelf:"flex-end",mr:4},o.a.createElement(l.a,{fluid:t.placeholderImage.childImageSharp.fluid})),o.a.createElement(g.a,null,o.a.createElement(h,{p:4,bg:"black"},o.a.createElement(s.Text,{lineHeight:1.25,fontWeight:"normal"},o.a.createElement(s.Flex,{as:"h1",flexWrap:"wrap"},Object(d.a)(t.site.siteMetadata.description,t.site.siteMetadata.misspelledWords,t.site.siteMetadata.keyWords))),o.a.createElement(s.Text,{lineHeight:1.75,fontWeight:"normal"},o.a.createElement(s.Flex,{flexWrap:"wrap",mt:4},Object(d.a)(t.site.siteMetadata.bio,t.site.siteMetadata.misspelledWords,t.site.siteMetadata.keyWords)))))),o.a.createElement(u.a,{pl:4,pr:[4,4,4,0]})),o.a.createElement(s.Box,{width:[0,0,0,.25],bg:"#fafafa"}))}},148:function(t,e,a){"use strict";a.r(e),a.d(e,"graphql",function(){return h}),a.d(e,"StaticQueryContext",function(){return g}),a.d(e,"StaticQuery",function(){return d}),a.d(e,"useStaticQuery",function(){return p});var n=a(0),r=a.n(n),o=a(4),s=a.n(o),i=a(149),l=a.n(i);a.d(e,"Link",function(){return l.a}),a.d(e,"withPrefix",function(){return i.withPrefix}),a.d(e,"navigate",function(){return i.navigate}),a.d(e,"push",function(){return i.push}),a.d(e,"replace",function(){return i.replace}),a.d(e,"navigateTo",function(){return i.navigateTo});var c=a(171),u=a.n(c);a.d(e,"PageRenderer",function(){return u.a});var m=a(50);a.d(e,"parsePath",function(){return m.a});var g=r.a.createContext({}),d=function(t){return r.a.createElement(g.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},p=function(t){r.a.useContext;var e=r.a.useContext(g);if(e[t]&&e[t].data)return e[t].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},151:function(t,e,a){"use strict";var n=a(451),r=a(0),o=a.n(r),s=a(4),i=a.n(s),l=a(452),c=a.n(l),u=a(148);function m(t){var e=t.description,a=t.lang,r=t.meta,s=t.keywords,i=t.title;return o.a.createElement(u.StaticQuery,{query:g,render:function(t){var n=e||t.site.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:i},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:n}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)},o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Ubuntu",rel:"stylesheet"}),o.a.createElement("link",{href:"https://unpkg.com/normalize.css@8.0.1/normalize.css",rel:"stylesheet"}),o.a.createElement("style",null,"\n\t\t\t\t\t\thtml, body {\n\t\t\t\t\t\t\tpadding: 0;\n\t\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t"))},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},e.a=m;var g="2515784693"},153:function(t,e,a){"use strict";var n=a(0),r=a.n(n),o=a(4),s=a.n(o),i=a(145),l=a(165),c=a(146),u={breakpoints:["40em","52em","64em"],fontSizes:[12,14,16,20,24,32,48,64],colors:{blue:"#07c",lightgray:"#f6f6ff"},space:[0,4,8,16,32,64,128,256],fonts:{sans:"Ubuntu, system-ui, sans-serif",mono:"Ubuntu, monospace"},shadows:{small:"0 0 4px rgba(0, 0, 0, .125)",large:"0 0 24px rgba(0, 0, 0, .125)"}},m=a(138),g=Object(i.default)(c.Flex).withConfig({displayName:"layout__Container",componentId:"ii2kc2-0"})(["min-height:100vh;",""],l.fontFamily),d=Object(i.default)(c.Box).withConfig({displayName:"layout__DisplayBox",componentId:"ii2kc2-1"})(["",""],l.display),p=function(t){var e=t.children;return r.a.createElement(i.ThemeProvider,{theme:u},r.a.createElement(g,{mx:"auto",px:[4,4,0],py:[6,6,0],fontFamily:"sans"},r.a.createElement(d,{display:["none","none","flex"]},r.a.createElement(m.default,null)),r.a.createElement(d,{display:["flex","flex","none"]},e)))};p.propTypes={children:s.a.node.isRequired};e.a=p},154:function(t,e,a){"use strict";a(157),a(32);var n=a(150),r=a.n(n),o=a(0),s=a.n(o),i=a(160),l=a(147),c=a(145),u=a(146),m=a(167);function g(){var t=Object(o.useRef)(),e=Object(o.useState)({left:0,top:0,width:0,height:0}),a=e[0],n=e[1],r=Object(o.useState)(function(){return new m.a(function(t){var e=t[0];return n(e.target.getBoundingClientRect())})})[0];return Object(o.useEffect)(function(){return t.current&&r.observe(t.current),function(){return r.disconnect()}},[]),[{ref:t},a]}a.d(e,"a",function(){return p}),a.d(e,"b",function(){return f});var d=Object(c.default)(u.Flex).withConfig({displayName:"spring__MyLink",componentId:"nyphqb-0"})(["color:",";text-decoration:none;"],function(t){return t.color||"black"});function p(t){var e=t.style,a=r()(t,["style"]),n=Object(i.b)(function(){return{xys:[0,0,1],config:{mass:5,tension:350,friction:40}}}),o=n[0],l=n[1],c=g(),u=c[0].ref,m=c[1],d=m.top,p=m.left,h=m.width,f=m.height,b=function(t,e){return[-(d+f/2-e)/(f/2)*10,-(p+h/2-t)/(h/2)*10,1.1]};return s.a.createElement(i.a.div,Object.assign({ref:u,style:Object.assign({transform:o.xys.interpolate(function(t,e,a){return"perspective(1000px) rotateX("+t+"deg) rotateY("+-e+"deg) scale("+a+")"})},e),onMouseLeave:function(){return l({xys:[0,0,1]})},onMouseMove:function(t){var e=t.pageX,a=t.pageY;return l({xys:b(e,a)})}},a))}var h=Object(c.default)(i.a.div).withConfig({displayName:"spring__Content",componentId:"nyphqb-1"})(["will-change:transform,opacity,height;margin-left:0.5em;padding:0px 0px 0px 1em;border-left:1px dashed rgba(0,0,0,0.1);overflow:hidden;"]),f=Object(o.memo)(function(t){var e,a,n=t.children,c=t.name,m=t.href,p=t.icon,f=t.open,b=void 0!==f&&f,y=t.color,C=r()(t,["children","name","href","icon","open","color"]),z=Object(o.useState)(b),x=z[0],v=z[1],w=(e=x,a=Object(o.useRef)(),Object(o.useEffect)(function(){a.current=e},[e]),a.current),E=g(),k=E[0],j=E[1].height,O=Object(i.b)({from:{height:0,opacity:0,transform:"translate3d(20px,0,0)"},to:{height:x?j:0,opacity:x?1:0,transform:"translate3d("+(x?0:20)+"px,0,0)"}}),S=O.height,I=O.opacity,T=O.transform,M=p||(n?x?l.CornerRightDown:l.ChevronRight:l.X);return s.a.createElement(u.Flex,Object.assign({flexDirection:"column"},C),s.a.createElement(d,{as:"a",target:"_blank",href:m||"#",alignItems:"center",color:y,mb:2,onClick:function(t){t.stopPropagation(),m||(t.preventDefault(),v(!x))}},s.a.createElement(M,{style:{opacity:n?.3:.6},height:"1em",width:"1em"}),s.a.createElement(u.Box,{ml:"2"},c)),s.a.createElement(h,{style:{opacity:I,height:x&&w===x?"auto":S}},s.a.createElement(i.a.div,Object.assign({style:{transform:T}},k),n)))})},155:function(t,e,a){"use strict";var n=a(156),r=a.n(n),o=(a(32),a(145)),s=(a(33),a(157),a(150)),i=a.n(s),l=a(163),c=a(0),u=a.n(c),m=a(160),g=a(147),d=a(146);function p(){var t=r()(["opacity:0.6;"]);return p=function(){return t},t}function h(){var t=r()([""]);return h=function(){return t},t}var f=function t(e){var a=e.repo,n=i()(e,["repo"]);return u.a.createElement(t.Body,n,u.a.createElement(d.Flex,{flexDirection:"column",mr:[3,4]},u.a.createElement(t.Emoji,{fontSize:["46px","46px","80px"]},a.description.substr(0,2)),u.a.createElement(t.Language,{mt:2},a.primaryLanguage.name)),u.a.createElement(b,{flexDirection:"column",width:1},u.a.createElement(t.Heading,{my:3},u.a.createElement(d.Text,{lineHeight:1.25},a.name.replace(/-/g," ")),u.a.createElement(d.Link,{href:a.url,ml:[3,4],target:"_blank"},u.a.createElement(g.ExternalLink,null))),u.a.createElement(y,{mb:3,fontSize:1,lineHeight:1.75},a.description.substr(2)),u.a.createElement(d.Flex,{justifyContent:"space-between",alignItems:"center",mt:"auto"},u.a.createElement(d.Flex,{alignItems:"center"},u.a.createElement(g.Star,{color:"goldenrod",size:"1em"}),u.a.createElement(d.Text,{ml:2},a.stargazers.totalCount)))))};f.Body=Object(o.default)(d.Flex).withConfig({displayName:"github__Body",componentId:"dmhvfy-0"})(["border-radius:0.5em;"]),f.Heading=o.default.h3.withConfig({displayName:"github__Heading",componentId:"dmhvfy-1"})(["text-transform:capitalize;display:flex;justify-content:space-between;align-items:center;width:100%;font-weight:normal;"]),f.Emoji=Object(o.default)(d.Text).withConfig({displayName:"github__Emoji",componentId:"dmhvfy-2"})(["height:80px;width:80px;vertical-align:middle;text-align:center;line-height:80px;"]),f.Language=Object(o.default)(d.Box).withConfig({displayName:"github__Language",componentId:"dmhvfy-3"})(["font-weight:600;font-size:12px;line-height:1;border-radius:2px;padding:3px 4px;text-align:center;",""],function(t){switch(t.children){case"JavaScript":return Object(o.css)(["background:#fcdf00;color:black;"]);case"TypeScript":return Object(o.css)(["background:#0076cd;color:white;"])}});e.a=function(t){var e=l.data.github.user,a=e.bio,n=e.pinnedRepositories,r=e.repositories.nodes.reduce(function(t,e){return e.stargazers.totalCount+t},0),o=Object(m.c)(n.nodes.length,{config:{mass:5,tension:2e3,friction:200},opacity:1,x:0,from:{opacity:0,x:20}});return u.a.createElement(d.Box,Object.assign({style:{position:"relative"}},t),u.a.createElement(g.GitHub,{size:"100px",color:"#00000011",strokeWidth:2,style:{position:"absolute",zIndex:-1,top:"-2em",left:"50%",transform:"rotate(-10deg) translateX(-50%)"}}),u.a.createElement(d.Text,{as:"h2",fontWeight:"normal",mt:4,mb:5,textAlign:["center","left"]},a),u.a.createElement(d.Flex,{flexWrap:"wrap",alignItems:"stretch",m:-4},o.map(function(t,e){var a=t.x,r=i()(t,["x"]),o=n.nodes[e];return u.a.createElement(d.Flex,{key:o.id,p:3,width:[1,1,.5]},u.a.createElement(m.a.div,{className:"trails-text",style:Object.assign({},r,{transform:a.interpolate(function(t){return"translate3d(0,"+t+"px,0)"}),display:"flex",width:"100%"})},u.a.createElement(f,{repo:o,px:[2,3],py:[1,2],width:1})))})),u.a.createElement(d.Text,{textAlign:"right",fontSize:0,color:"#888",mb:4,mt:5},"In total, I have received ",r," stars."))};var b=Object(o.default)(d.Flex)(h()),y=Object(o.default)(d.Text)(p())},158:function(t,e,a){"use strict";a(32);var n=a(147),r=a(0),o=a.n(r),s=a(154);e.a=function(t){return o.a.createElement(s.b,Object.assign({open:!0,name:"Links"},t),o.a.createElement(s.b,{open:!0,name:"Pet projects"},o.a.createElement(s.b,{name:"UI1",href:"https://ui1.io?ref=herman",icon:n.ShoppingBag}),o.a.createElement(s.b,{color:"rgb(132, 193, 135)",name:"Lean Analytics",href:"https://leananalytics.io",icon:n.BarChart2})),o.a.createElement(s.b,{open:!0,name:"Contact"},o.a.createElement(s.b,{name:"Email",href:"mailto:hermanstarikov@gmail.com",icon:n.Inbox}),o.a.createElement(s.b,{name:"Messenger",href:"https://m.me/hermanhasawish",icon:n.MessageCircle}),o.a.createElement(s.b,{name:"Telegram",href:"http://t.me/hermanya",icon:n.Send}),o.a.createElement(s.b,{name:"Twitter",href:"https://twitter.com/hermanhasawish",icon:n.Twitter})),o.a.createElement(s.b,{name:"For hire"},o.a.createElement(s.b,{name:"Linkedin",href:"https://linkedin.com/in/hermanstarikov",icon:n.Linkedin}),o.a.createElement(s.b,{name:"Resume",href:"https://hermanya.github.io/resume",icon:n.FileText})),o.a.createElement(s.b,{name:"Technology"},o.a.createElement(s.b,{name:"GitHub",href:"https://github.com/hermanya",icon:n.GitHub}),o.a.createElement(s.b,{name:"Codepen",href:"https://codepen.io/Hermanya",icon:n.Codepen}),o.a.createElement(s.b,{name:"Stack overflow",href:"https://stackoverflow.com/users/7228427/herman-starikov",icon:n.ExternalLink})),o.a.createElement(s.b,{name:"Life"},o.a.createElement(s.b,{name:"Instagram",href:"https://instagram.com/hermanya",icon:n.Instagram}),o.a.createElement(s.b,{name:"Facebook",href:"https://facebook.com/hermanhasawish",icon:n.Facebook})),o.a.createElement(s.b,{name:"Other"},o.a.createElement(s.b,{name:"Product Hunt",href:"https://www.producthunt.com/@hermanhasawish/made",icon:n.ExternalLink}),o.a.createElement(s.b,{name:"Dribbble",href:"https://dribbble.com/hermanya",icon:n.ExternalLink}),o.a.createElement(s.b,{name:"Angel",href:"https://angel.co/hermanya",icon:n.ExternalLink})))}},159:function(t,e,a){"use strict";var n=a(156),r=a.n(n),o=(a(168),a(73),a(74),a(145)),s=(a(169),a(77),a(0)),i=a.n(s),l=a(146);function c(){var t=r()(["",""]);return c=function(){return t},t}e.a=function(t,e,a){return void 0===e&&(e=[]),void 0===a&&(a=[]),t.split(/(?<=\.|!|\?)\s*/).map(function(t,n){return t.endsWith("!")?i.a.createElement(l.Text,{key:String(n)+"-!",as:"span",color:"rgb(204, 61, 104)",mr:1},t):[t.split(/\s/g).map(function(t,r){return/[A-Z]/.test(t[0])&&0!==r?i.a.createElement(u,{key:String(n)+"-"+String(r),as:"span",color:"#98cf2f",mr:1,_css:e.includes(t)&&Object(o.css)(["text-decoration-line:underline;text-decoration-style:wavy;text-decoration-color:red;"])},t):a.some(function(e){return t.startsWith(e)})?i.a.createElement(l.Text,{key:String(n)+"-"+String(r),as:"span",color:"#82d2e7",mr:1},t):i.a.createElement(l.Text,{key:String(n)+"-"+String(r),as:"span",mr:1},t)})]})};var u=Object(o.default)(l.Text)(c(),function(t){return t._css})},161:function(t){t.exports={data:{site:{siteMetadata:{description:"Hi! My name is Herman Starikov. I live in Toronto and make apps on the internet.",bio:"If you are into cool internet apps, or just want to know what Software Developer's life in Tronno is like, follow me on the social platform of your choice.",misspelledWords:["Tronno"],keyWords:["follow","cool","internet","apps"]}},placeholderImage:{childImageSharp:{fluid:{tracedSVG:"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='400' height='349' viewBox='0 0 400 349' version='1'%3e%3cpath d='M210 12l-8 1a111 111 0 0 0-33 11c-9 3-18 11-25 20-11 15-12 18-12 45-1 33 0 48 3 53 1 3 2 3 2 1 0-4 2-4 2-1l3 3c2 0 3 2 3 4 1 3 2 4 4 1 2-1 2-1 5 3l2 5v5l2 4v4c1 3 1 3-2 3h-4c-4-2-4-1 2 7l4 9 4 5 8 9 4 6 2 3 2 1 2 2c1 2 1 3 2 2l7 5 5 4 3 3 4 2 2 1 2 1 4 1c6 5 38 5 38 0l2-1 2-1c1-3 8-4 9-2v5l-1 5c-1 5-16 18-30 26l-15 9c-3 1-3 1-7-1l-11-6c-10-5-18-10-25-17l-5-5-1-15-1-15c-3 0-5 5-11 18l-4 12c-1 1-2 3-4 3l-15 7-57 25c-16 6-40 18-44 22a116 116 0 0 0-24 45 25943 25943 0 0 0 393-2c0-3-9-28-12-33s-9-10-23-20c-9-7-16-11-42-21a8944 8944 0 0 1-46-19c-5-1-5-2-7-13l-3-12c-4-7-3-18 3-27 4-8 9-18 10-23 0-3 0-2-2 2-3 9-9 17-12 17l-3 1h-2c-1-1-1 0-3 4l-3 5-1 2-3 3-4 3c-1 4-9 7-14 7l-3 1h-1l-4-1-12-3c0-2-3-4-4-3h-2c0-3-5-7-7-6-2 0-2 0-1-1 2-3 1-3-2 0-3 2-4 2-5 1l-4-4-3-4-1-2c-2 1-5-2-5-4l-1-2-2-1-2-4-3-5-1-3-1-1-1-7-2-7-2-4c-2-4-2-7-1-9l1-2 1-1 2 10c-1 1 0 3 1 4 1 2 1 2 1-5 0-8-2-14-4-15l-1-3-1-2c-1 0-1-11 1-14l5-17c0-2 1-4 3-5l6-6a81 81 0 0 1 24-24l5-2h1c-2 2-2 5 0 5l7-5 7-5 2-1 2-1v2c-2 2 0 1 3-1l3-2 2-1 2-2 3-4 2-4v3c0 4-4 16-8 19v3l16-16c3-3 5-3 3 0-1 3 1 6 3 5 1-1 2-1 4 1s2 3 2 8v4c4-3 8 4 5 7-1 1 1 5 5 11l3 5c1 2 1 2-2 2-2-1-7 0-12 1-8 2-9 2-15 9-7 8-8 11-3 19l3 10 1 17c1-1 2-8 1-10v-6c0-4 0-6-2-9-4-6-4-8-1-13 2-3 4-4 4-2l3-1c3-2 13-4 14-2 1 1 0 1-2 1-4 0-6 2-4 3 2 0 2 1 1 2-2 2 1 4 7 3 5 0 6 0 3 3-2 3 0 2 3 0s3-3 3-5c-1-2 0-3 1-4 2 0 2 0 5 8 4 14 2 31-6 34-3 1-5 5-5 13-1 8 0 8 1 0 1-4 5-10 7-10l2 3c1 2 1 2 1-2l2-9 2-8 2-6c3-7 5-36 3-51v-7l-1-2-1-4-3-7-3-9c1-2-4-8-12-16-6-4-8-7-8-8 1-3-5-10-10-11l-6-4c-1-1-2-2-3-1-2 0-11-5-16-9-3-3-13-4-16-3m-5 100l-7 1-5 2c-2 1-2 1-2-1 0-1-6 0-10 2-5 3-8 8-3 7l3-1 4-1 4-1c1-1 17 0 22 1 2 0 5 1 7 3 5 5 8 3 3-2l-2-4c1-1-5-6-8-6h-6m-11 11a192 192 0 0 0-11 2c-2 0-1 3 1 3l-1 1c-1 2-1 2 5 2l6-1 2-2c2-2 3-2 5 1 2 2 7 3 8 0h2c2 2 4 1 4-1 0-6-8-8-21-5m54 31l1 4c1 2-1 5-3 5l-4 3c-2 2-3 2-7 2-6-1-13-2-18-5-3-1-3-1-3 1 1 2 17 9 23 9 9 0 18-8 15-13l-1-3-1-3c-2-2-2-2-2 0m-5 26h-21c-16 0-20 0-21 2-1 1-1 1 1 1l6 3c5 3 13 6 13 4l-1-1-1-1 8-1 11 1c2 0 2 0 0 2l-7 1c-6-1-7 1-2 2 8 1 19-3 23-7l3-3v-2c-1-2-11-3-12-1' fill='lightgray' fill-rule='evenodd'/%3e%3c/svg%3e",aspectRatio:1.1477516059957173,src:"/static/659eb3d2474dca945580317515097ea2/eb3c1/me-looking-right.png",srcSet:"/static/659eb3d2474dca945580317515097ea2/7a825/me-looking-right.png 63w,\n/static/659eb3d2474dca945580317515097ea2/cc023/me-looking-right.png 125w,\n/static/659eb3d2474dca945580317515097ea2/eb3c1/me-looking-right.png 250w,\n/static/659eb3d2474dca945580317515097ea2/b341b/me-looking-right.png 375w,\n/static/659eb3d2474dca945580317515097ea2/a802c/me-looking-right.png 500w,\n/static/659eb3d2474dca945580317515097ea2/e1317/me-looking-right.png 536w",sizes:"(max-width: 250px) 100vw, 250px"}}}}}},163:function(t){t.exports={data:{github:{user:{bio:"Making things with React and other fun tech.",pinnedRepositories:{nodes:[{id:"MDEwOlJlcG9zaXRvcnkxNTg4OTg5MzY=",name:"classnamed-components",url:"https://github.com/Hermanya/classnamed-components",description:"💋Creating React components using your favorite CSS framework just got easier",stargazers:{totalCount:29},primaryLanguage:{name:"JavaScript"},licenseInfo:null},{id:"MDEwOlJlcG9zaXRvcnkxMzg4MjcwODY=",name:"friendly-github",url:"https://github.com/Hermanya/friendly-github",description:"🐶Browser extension that makes GitHub a better Social Network",stargazers:{totalCount:27},primaryLanguage:{name:"JavaScript"},licenseInfo:{name:"MIT License"}},{id:"MDEwOlJlcG9zaXRvcnkxNjc4NzkzODE=",name:"create-react-hook",url:"https://github.com/Hermanya/create-react-hook",description:"🎣CLI for easily creating reusable react hooks.",stargazers:{totalCount:18},primaryLanguage:{name:"JavaScript"},licenseInfo:null},{id:"MDEwOlJlcG9zaXRvcnkxNjg3Njc3OTY=",name:"use-scroll-to-reveal",url:"https://github.com/Hermanya/use-scroll-to-reveal",description:"🎩 React hook for using scroll to reveal components",stargazers:{totalCount:5},primaryLanguage:{name:"JavaScript"},licenseInfo:null},{id:"MDEwOlJlcG9zaXRvcnkxNjkwMjUyODY=",name:"use-interval",url:"https://github.com/Hermanya/use-interval",description:"⏲ Dan Abramov's interval hook",stargazers:{totalCount:3},primaryLanguage:{name:"TypeScript"},licenseInfo:{name:"MIT License"}},{id:"MDEwOlJlcG9zaXRvcnkxNjc2NDM5MDY=",name:"use-typing-effect",url:"https://github.com/Hermanya/use-typing-effect",description:"⌨️ React hook for the “human typing” effect; great for landing pages, input placeholders and more!",stargazers:{totalCount:17},primaryLanguage:{name:"JavaScript"},licenseInfo:null}]},repositories:{nodes:[{stargazers:{totalCount:0}},{stargazers:{totalCount:10}},{stargazers:{totalCount:3}},{stargazers:{totalCount:4}},{stargazers:{totalCount:4}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:1}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:4}},{stargazers:{totalCount:0}},{stargazers:{totalCount:1}},{stargazers:{totalCount:1}},{stargazers:{totalCount:4}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:2}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:2}},{stargazers:{totalCount:0}},{stargazers:{totalCount:4}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:1}},{stargazers:{totalCount:1}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:2}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:1}},{stargazers:{totalCount:0}},{stargazers:{totalCount:1}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:182}},{stargazers:{totalCount:6}},{stargazers:{totalCount:0}},{stargazers:{totalCount:1}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:8}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:1}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:27}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:8}},{stargazers:{totalCount:53}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:37}},{stargazers:{totalCount:1}},{stargazers:{totalCount:0}},{stargazers:{totalCount:1}},{stargazers:{totalCount:29}},{stargazers:{totalCount:4}},{stargazers:{totalCount:12}},{stargazers:{totalCount:0}},{stargazers:{totalCount:17}},{stargazers:{totalCount:18}},{stargazers:{totalCount:5}},{stargazers:{totalCount:0}},{stargazers:{totalCount:3}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}}]}}}}}},171:function(t,e,a){var n;t.exports=(n=a(460))&&n.default||n},451:function(t){t.exports={data:{site:{siteMetadata:{title:"Herman Starikov's home page",description:"Hi! My name is Herman Starikov. I live in Toronto and make apps on the internet.",author:"@hermanya"}}}}},460:function(t,e,a){"use strict";a.r(e);a(32);var n=a(0),r=a.n(n),o=a(4),s=a.n(o),i=a(68),l=a(2),c=function(t){var e=t.location,a=l.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(i.a,Object.assign({location:e,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},e.default=c}}]);
//# sourceMappingURL=1-46a68373472792041b1b.js.map