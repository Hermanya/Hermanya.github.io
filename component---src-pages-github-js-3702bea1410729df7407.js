(window.webpackJsonp=window.webpackJsonp||[]).push([[7,10,12],{139:function(e,t,a){"use strict";a.r(t);var n=a(182),r=a(0),o=a.n(r),i=a(152),s=a(172),l=a.n(s),c=a(151),u=a(175),d=a(157),m=a(156),f=a(173),g=a(166),p=a(174),h=a(158),b=Object(c.default)(i.Flex).withConfig({displayName:"md__Sidebar",componentId:"zp693r-0"})([""]),y=Object(c.default)(i.Box).withConfig({displayName:"md__Copy",componentId:"zp693r-1"})(["max-width:32em;border-radius:0.5em 0.5em 0 0;transition:0.5s;:hover{border-radius:0.5em;box-shadow:0px 30px 100px -10px rgba(0,0,0,0.4);}"]),v=Object(c.default)(i.Flex).withConfig({displayName:"md__Header",componentId:"zp693r-2"})(["background-color:#8ec5fc;background-image:linear-gradient(62deg,#8ec5fc 0%,#e0c3fc 100%);"]);t.default=function(){var e=n.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{title:"Home",keywords:[]}),o.a.createElement(d.a,null,o.a.createElement(i.Flex,{width:1},o.a.createElement(b,{pt:6,pb:4,px:4,width:.25,flexDirection:"column",justifyContent:"space-between"},o.a.createElement(f.a,null),o.a.createElement(h.a,{href:"https://github.com/Hermanya/hermanya.github.io/tree/develop"},"View Page Source")),o.a.createElement(i.Flex,{width:1,flexDirection:"column",bg:"#fafafa"},o.a.createElement(v,{color:"white",px:4,pt:5},o.a.createElement(i.Box,{width:[0,0,1/3,.25],alignSelf:"flex-end",mr:4},o.a.createElement(l.a,{fluid:e.placeholderImage.childImageSharp.fluid})),o.a.createElement(g.a,null,o.a.createElement(y,{p:4,bg:"black"},o.a.createElement(i.Text,{lineHeight:1.25,fontWeight:"normal"},o.a.createElement(i.Flex,{as:"h1",flexWrap:"wrap"},Object(p.a)(e.site.siteMetadata.description,e.site.siteMetadata.misspelledWords,e.site.siteMetadata.keyWords))),o.a.createElement(i.Text,{lineHeight:1.75,fontWeight:"normal"},o.a.createElement(i.Flex,{flexWrap:"wrap",mt:4},Object(p.a)(e.site.siteMetadata.bio,e.site.siteMetadata.misspelledWords,e.site.siteMetadata.keyWords)))))),o.a.createElement(u.a,{pl:4,pr:[4,4,4,0]})),o.a.createElement(i.Box,{width:[0,0,0,.25],bg:"#fafafa"}))))}},140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(170),i=a(157),s=a(156),l=a(175);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(s.a,{title:"OSS",keywords:["open-source","github","repos"]}),r.a.createElement(l.a,null),r.a.createElement(o.a,null))}},145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(186),i=a(140),s=a(139);t.default=function(){return r.a.createElement(o.a,{md:s.default,xs:i.default})}},153:function(e,t,a){var n;e.exports=(n=a(160))&&n.default||n},154:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return f}),a.d(t,"useStaticQuery",function(){return g});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),s=a(150),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var c=a(153),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var d=a(33);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},g=function(e){r.a.useContext;var t=r.a.useContext(m);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},156:function(e,t,a){"use strict";var n=a(159),r=a(0),o=a.n(r),i=a(4),s=a.n(i),l=a(177),c=a.n(l),u=a(154);function d(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,s=e.title;return o.a.createElement(u.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)},o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Ubuntu",rel:"stylesheet"}),o.a.createElement("link",{href:"https://unpkg.com/normalize.css@8.0.1/normalize.css",rel:"stylesheet"}),o.a.createElement("style",null,"\n\t\t\t\t\t\thtml, body {\n\t\t\t\t\t\t\tpadding: 0;\n\t\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t"))},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d;var m="2515784693"},157:function(e,t,a){"use strict";a(32);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),s=a(151),l=a(164),c=a(152),u={breakpoints:["40em","52em","64em"],fontSizes:[12,14,16,20,24,32,48,64],colors:{blue:"#07c",lightgray:"#f6f6ff"},space:[0,4,8,16,32,64,128,256],fonts:{sans:"Ubuntu, system-ui, sans-serif",mono:"Ubuntu, monospace"},shadows:{small:"0 0 4px rgba(0, 0, 0, .125)",large:"0 0 24px rgba(0, 0, 0, .125)"}},d=Object(s.default)(c.Flex).withConfig({displayName:"layout__Container",componentId:"ii2kc2-0"})(["min-height:100vh;",""],l.fontFamily),m=function(e){return r.a.createElement(s.ThemeProvider,{theme:u},r.a.createElement(d,Object.assign({mx:"auto",px:[4,4,0],py:[6,6,0],fontFamily:"sans"},e)))};m.propTypes={children:i.a.node.isRequired};t.a=m},158:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(151),r=a(152),o=Object(n.default)(r.Flex).withConfig({displayName:"external-link__ExternalLink",componentId:"nph5fd-0"})(["color:",";text-decoration:none;:hover,:focus{text-decoration:underline;outline:none;}"],function(e){return e.color||"black"});o.defaultProps={as:"a",target:"_blank",rel:"noreferrer"}},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Herman Starikov's home page",description:"Hi! My name is Herman Starikov. I live in Toronto and make apps on the internet.",author:"@hermanya"}}}}},160:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),s=a(52),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},162:function(e,t){e.exports=function(e,t){return t||(t=e.slice(0)),e.raw=t,e}},166:function(e,t,a){"use strict";a(171),a(32);var n=a(161),r=a.n(n),o=a(0),i=a.n(o),s=a(176),l=a(155),c=a(151),u=a(152),d=a(187);function m(){var e=Object(o.useRef)(),t=Object(o.useState)({left:0,top:0,width:0,height:0}),a=t[0],n=t[1],r=Object(o.useState)(function(){return new d.a(function(e){var t=e[0];return n(t.target.getBoundingClientRect())})})[0];return Object(o.useEffect)(function(){return e.current&&r.observe(e.current),function(){return r.disconnect()}},[]),[{ref:e},a]}var f=a(158);function g(e){var t=e.style,a=r()(e,["style"]),n=Object(s.b)(function(){return{xys:[0,0,1],config:{mass:5,tension:350,friction:40}}}),o=n[0],l=n[1],c=m(),u=c[0].ref,d=c[1],f=d.top,g=d.left,p=d.width,h=d.height,b=function(e,t){return[-(f+h/2-t)/(h/2)*10,-(g+p/2-e)/(p/2)*10,1.1]};return i.a.createElement(s.a.div,Object.assign({ref:u,style:Object.assign({transform:o.xys.interpolate(function(e,t,a){return"perspective(1000px) rotateX("+e+"deg) rotateY("+-t+"deg) scale("+a+")"})},t),onMouseLeave:function(){return l({xys:[0,0,1]})},onMouseMove:function(e){var t=e.pageX,a=e.pageY;return l({xys:b(t,a)})}},a))}a.d(t,"a",function(){return g}),a.d(t,"b",function(){return h});var p=Object(c.default)(s.a.div).withConfig({displayName:"spring__Content",componentId:"nyphqb-0"})(["will-change:transform,opacity,height;margin-left:0.5em;padding:0px 0px 0px 1em;overflow:hidden;"]),h=Object(o.memo)(function(e){var t,a,n=e.children,c=e.name,d=e.href,g=e.icon,h=e.open,b=void 0!==h&&h,y=e.color,v=r()(e,["children","name","href","icon","open","color"]),w=Object(o.useState)(b),x=w[0],E=w[1],C=(t=x,a=Object(o.useRef)(),Object(o.useEffect)(function(){a.current=t},[t]),a.current),z=m(),k=z[0],S=z[1].height,j=Object(s.b)({from:{height:0,opacity:0,transform:"translate3d(20px,0,0)"},to:{height:x?S:0,opacity:x?1:0,transform:"translate3d("+(x?0:20)+"px,0,0)"}}),I=j.height,O=j.opacity,L=j.transform,T=g||(n?x?l.ChevronDown:l.ChevronRight:l.X);return i.a.createElement(u.Flex,Object.assign({flexDirection:"column"},v),i.a.createElement(f.a,{href:d||"#",alignItems:"center",color:y,mb:2,onClick:function(e){e.stopPropagation(),d||(e.preventDefault(),E(!x))}},i.a.createElement(T,{style:{opacity:n?.3:.6},height:"1em",width:"1em"}),i.a.createElement(u.Box,{ml:"2"},c)),i.a.createElement(p,{style:{opacity:O,height:x&&C===x?"auto":I}},i.a.createElement(s.a.div,Object.assign({style:{transform:L}},k),x&&n)))})},170:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(154),i=a(152),s=a(155),l=a(151),c=Object(l.default)(i.Flex).withConfig({displayName:"mobile-nav__MobileNav",componentId:"sc-1akr694-0"})(["position:fixed;justify-content:space-around;bottom:0;left:0;right:0;z-index:1;background:#ffffffee;min-height:3.5rem;padding-bottom:env(safe-area-inset-bottom);"]),u=Object(l.default)(o.Link).withConfig({displayName:"mobile-nav__NavLink",componentId:"sc-1akr694-1"})(["border-radius:2px;font-size:0.70711rem;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;line-height:1;width:64px;padding:0.2625rem 0.2625rem 0;-webkit-text-decoration:none;text-decoration:none;text-align:center;svg{display:block;height:32px;margin:0 auto;}"]);t.a=function(){return r.a.createElement(c,null,r.a.createElement(u,{to:"/"},r.a.createElement(s.User,null),r.a.createElement(i.Text,null,"Bio")),r.a.createElement(u,{to:"/links"},r.a.createElement(s.Compass,null),r.a.createElement(i.Text,null,"Links")),r.a.createElement(u,{to:"/github"},r.a.createElement(s.GitHub,null),r.a.createElement(i.Text,null,"OSS")),r.a.createElement(u,{as:"a",href:"https://medium.com/@hermanhasawish"},r.a.createElement(s.Feather,null),r.a.createElement(i.Text,null,"Blog")))}},172:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var r,o=n(a(7)),i=n(a(53)),s=n(a(161)),l=n(a(183)),c=n(a(0)),u=n(a(4)),d=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},m={},f=function(e){var t=d(e),a=t.fluid?t.fluid.src:t.fixed.src;return m[a]||!1},g=[];var p=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){g.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),g.push([e,t])},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",o=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+n+r+"<img "+s+l+t+i+o+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var a=e.style,n=e.onLoad,r=e.onError,o=(0,s.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},o,{onLoad:n,onError:r,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});b.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,r=!1,o=t.fadeIn,s=f(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,r=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:n,imgLoaded:!1,IOSupported:r,fadeIn:o,hasNoScript:l,seenBefore:s},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)((0,i.default)(a))),a.handleRef=a.handleRef.bind((0,i.default)((0,i.default)(a))),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&p(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=d(e),a=t.fluid?t.fluid.src:t.fixed.src,m[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=d(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,o=void 0===r?{}:r,i=e.imgStyle,s=void 0===i?{}:i,u=e.placeholderStyle,m=void 0===u?{}:u,f=e.placeholderClassName,g=e.fluid,p=e.fixed,y=e.backgroundColor,v=e.Tag,w=e.itemProp,x="boolean"==typeof y?"lightgray":y,E=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,m),C=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),z={title:t,alt:this.state.isVisible?"":a,style:E,className:f};if(g){var k=g;return c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),k.base64&&c.default.createElement(b,(0,l.default)({src:k.base64},z)),k.tracedSVG&&c.default.createElement(b,(0,l.default)({src:k.tracedSVG},z)),x&&c.default.createElement(v,{title:t,style:{backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,k.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),c.default.createElement("source",{srcSet:k.srcSet,sizes:k.sizes}),c.default.createElement(b,{alt:a,title:t,src:k.src,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t},k))}}))}if(p){var S=p,j=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:S.width,height:S.height},o);return"inherit"===o.display&&delete j.display,c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(S.srcSet)},S.base64&&c.default.createElement(b,(0,l.default)({src:S.base64},z)),S.tracedSVG&&c.default.createElement(b,(0,l.default)({src:S.tracedSVG},z)),x&&c.default.createElement(v,{title:t,style:{backgroundColor:x,width:S.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:S.height}}),this.state.isVisible&&c.default.createElement("picture",null,S.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:S.srcSetWebp,sizes:S.sizes}),c.default.createElement("source",{srcSet:S.srcSet,sizes:S.sizes}),c.default.createElement(b,{alt:a,title:t,width:S.width,height:S.height,src:S.src,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t,width:S.width,height:S.height},S))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),w=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});y.propTypes={resolutions:v,sizes:w,fixed:v,fluid:w,fadeIn:u.default.bool,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string};var x=y;t.default=x},173:function(e,t,a){"use strict";a(32);var n=a(155),r=a(0),o=a.n(r),i=a(166);t.a=function(e){return o.a.createElement(i.b,Object.assign({open:!0,name:"Links"},e),o.a.createElement(i.b,{open:!0,name:"Pet projects"},o.a.createElement(i.b,{name:"UI1",href:"https://ui1.io?ref=herman",icon:n.ShoppingBag}),o.a.createElement(i.b,{color:"rgb(132, 193, 135)",name:"Lean Analytics",href:"https://leananalytics.io",icon:n.BarChart2})),o.a.createElement(i.b,{open:!0,name:"Contact"},o.a.createElement(i.b,{name:"Email",href:"mailto:hermanstarikov@gmail.com",icon:n.Inbox}),o.a.createElement(i.b,{name:"Messenger",href:"https://m.me/hermanhasawish",icon:n.MessageCircle}),o.a.createElement(i.b,{name:"Telegram",href:"http://t.me/hermanya",icon:n.Send}),o.a.createElement(i.b,{name:"Twitter",href:"https://twitter.com/hermanhasawish",icon:n.Twitter})),o.a.createElement(i.b,{name:"For hire"},o.a.createElement(i.b,{name:"Linkedin",href:"https://linkedin.com/in/hermanstarikov",icon:n.Linkedin}),o.a.createElement(i.b,{name:"Resume",href:"https://hermanya.github.io/resume",icon:n.FileText})),o.a.createElement(i.b,{name:"Technology"},o.a.createElement(i.b,{name:"GitHub",href:"https://github.com/hermanya",icon:n.GitHub}),o.a.createElement(i.b,{name:"Codepen",href:"https://codepen.io/Hermanya",icon:n.Codepen}),o.a.createElement(i.b,{name:"Stack overflow",href:"https://stackoverflow.com/users/7228427/herman-starikov",icon:n.ExternalLink})),o.a.createElement(i.b,{name:"Life"},o.a.createElement(i.b,{name:"Instagram",href:"https://instagram.com/hermanya",icon:n.Instagram}),o.a.createElement(i.b,{name:"Facebook",href:"https://facebook.com/hermanhasawish",icon:n.Facebook})),o.a.createElement(i.b,{name:"Other"},o.a.createElement(i.b,{name:"Product Hunt",href:"https://www.producthunt.com/@hermanhasawish/made",icon:n.ExternalLink}),o.a.createElement(i.b,{name:"Dribbble",href:"https://dribbble.com/hermanya",icon:n.ExternalLink}),o.a.createElement(i.b,{name:"Angel",href:"https://angel.co/hermanya",icon:n.ExternalLink})))}},174:function(e,t,a){"use strict";var n=a(162),r=a.n(n),o=(a(179),a(76),a(77),a(151)),i=(a(78),a(180),a(75),a(0)),s=a.n(i),l=a(152);function c(){var e=r()(["",""]);return c=function(){return e},e}t.a=function(e,t,a){return void 0===t&&(t=[]),void 0===a&&(a=[]),e.match(/\(?[^.?!]+[.!?]\)?/g).map(function(e,n){return e.endsWith("!")?s.a.createElement(l.Text,{key:String(n)+"-!",as:"span",color:"rgb(204, 61, 104)",mr:1},e):[e.trim().split(/\s/g).map(function(e,r){return/[A-Z]/.test(e[0])&&0!==r?s.a.createElement(u,{key:String(n)+"-"+String(r),as:"span",color:"#98cf2f",mr:1,_css:t.includes(e)&&Object(o.css)(["text-decoration-line:underline;text-decoration-style:wavy;text-decoration-color:red;"])},e):a.some(function(t){return e.startsWith(t)})?s.a.createElement(l.Text,{key:String(n)+"-"+String(r),as:"span",color:"#82d2e7",mr:1},e):s.a.createElement(l.Text,{key:String(n)+"-"+String(r),as:"span",mr:1},e)})]})};var u=Object(o.default)(l.Text)(c(),function(e){return e._css})},175:function(e,t,a){"use strict";var n=a(162),r=a.n(n),o=(a(32),a(151)),i=(a(34),a(171),a(161)),s=a.n(i),l=a(178),c=a(0),u=a.n(c),d=a(176),m=a(155),f=a(152),g=function(e,t){void 0===e&&(e=[""]);var a,n=void 0===t?{loop:!1,playbackRate:1}:t,r=n.loop,o=void 0!==r&&r,i=n.playbackRate,s=void 0===i?1:i,l=Object(c.useState)({stringIndex:0,characterIndex:0}),u=l[0],d=u.stringIndex,m=u.characterIndex,f=l[1],g=function(){if(++m===e[d].length){if(m=0,++d===e.length){if(!o)return;d=0}a=window.setTimeout(g,100*s)}else a=m===e[d].length-1?window.setTimeout(g,2e3*s):window.setTimeout(g,100*s);f({characterIndex:m,stringIndex:d})};Object(c.useEffect)(function(){return g(),function(){window.clearTimeout(a)}},[]);return e[d].slice(0,m+1)||" "},p=a(158);function h(){var e=r()(["opacity:0.6;"]);return h=function(){return e},e}function b(){var e=r()([""]);return b=function(){return e},e}var y=function e(t){var a=t.repo,n=s()(t,["repo"]);return u.a.createElement(e.Body,n,u.a.createElement(f.Flex,{flexDirection:"column",mr:[3,4]},u.a.createElement(e.Emoji,{fontSize:["46px","46px","80px"]},a.description.substr(0,2)),u.a.createElement(e.Language,{mt:2},a.primaryLanguage.name)),u.a.createElement(v,{flexDirection:"column",width:1},u.a.createElement(e.Heading,{my:3},u.a.createElement(f.Text,{lineHeight:1.25},a.name.replace(/-/g," ")),u.a.createElement(p.a,{href:a.url,ml:[3,4]},u.a.createElement(m.ExternalLink,null))),u.a.createElement(w,{mb:3,fontSize:1,lineHeight:1.75},a.description.substr(2)),u.a.createElement(f.Flex,{justifyContent:"space-between",alignItems:"center",mt:"auto"},u.a.createElement(f.Flex,{alignItems:"center"},u.a.createElement(m.Star,{color:"goldenrod",size:"1em"}),u.a.createElement(f.Text,{ml:2},a.stargazers.totalCount)))))};y.Body=Object(o.default)(f.Flex).withConfig({displayName:"github__Body",componentId:"dmhvfy-0"})(["border-radius:0.5em;"]),y.Heading=o.default.h3.withConfig({displayName:"github__Heading",componentId:"dmhvfy-1"})(["text-transform:capitalize;display:flex;justify-content:space-between;align-items:center;width:100%;font-weight:normal;"]),y.Emoji=Object(o.default)(f.Text).withConfig({displayName:"github__Emoji",componentId:"dmhvfy-2"})(["height:80px;width:80px;vertical-align:middle;text-align:center;line-height:80px;"]),y.Language=Object(o.default)(f.Box).withConfig({displayName:"github__Language",componentId:"dmhvfy-3"})(["font-weight:600;font-size:12px;line-height:1;border-radius:2px;padding:3px 4px;text-align:center;",""],function(e){switch(e.children){case"JavaScript":return Object(o.css)(["background:#fcdf00;color:black;"]);case"TypeScript":return Object(o.css)(["background:#0076cd;color:white;"])}});t.a=function(e){var t=l.data.github.user,a=t.login,n=t.bio,r=t.pinnedRepositories,o=t.repositories.nodes.reduce(function(e,t){return t.stargazers.totalCount+e},0),i=Object(d.c)(r.nodes.length,{config:{mass:5,tension:2e3,friction:200},opacity:1,x:0,from:{opacity:0,x:20}}),c=g([n]);return u.a.createElement(f.Box,Object.assign({style:{position:"relative"}},e),u.a.createElement(m.GitHub,{size:"100px",color:"#00000011",strokeWidth:2,style:{position:"absolute",zIndex:-1,top:"-2em",left:"50%",transform:"rotate(-10deg) translateX(-50%)"}}),u.a.createElement(f.Text,{as:"h2",fontWeight:"normal",mt:4,mb:5,textAlign:["center","left"]},c),u.a.createElement(f.Flex,{flexWrap:"wrap",alignItems:"stretch",m:-4},i.map(function(e,t){var a=e.x,n=s()(e,["x"]),o=r.nodes[t];return u.a.createElement(f.Flex,{key:o.id,p:3,width:[1,1,.5]},u.a.createElement(d.a.div,{className:"trails-text",style:Object.assign({},n,{transform:a.interpolate(function(e){return"translate3d(0,"+e+"px,0)"}),display:"flex",width:"100%"})},u.a.createElement(y,{repo:o,px:[2,3],py:[1,2],width:1})))})),u.a.createElement(f.Flex,{justifyContent:"space-between",alignItems:"center",mb:4,mt:5},u.a.createElement(p.a,{href:"https://github.com/"+a+"/repositories"},"More repositories"),u.a.createElement(f.Text,{fontSize:0,color:"#888"},"In total, I have received ",o," stars.")))};var v=Object(o.default)(f.Flex)(b()),w=Object(o.default)(f.Text)(h())},178:function(e){e.exports={data:{github:{user:{login:"Hermanya",bio:"Mainly focused on UI Architecture and the React ecosystem.",pinnedRepositories:{nodes:[{id:"MDEwOlJlcG9zaXRvcnkxNTg4OTg5MzY=",name:"classnamed-components",url:"https://github.com/Hermanya/classnamed-components",description:"💋Creating React components using your favorite CSS framework just got easier",stargazers:{totalCount:31},primaryLanguage:{name:"JavaScript"},licenseInfo:null},{id:"MDEwOlJlcG9zaXRvcnkxMzg4MjcwODY=",name:"friendly-github",url:"https://github.com/Hermanya/friendly-github",description:"🐶Browser extension that makes GitHub a better Social Network",stargazers:{totalCount:29},primaryLanguage:{name:"JavaScript"},licenseInfo:{name:"MIT License"}},{id:"MDEwOlJlcG9zaXRvcnkxNjc4NzkzODE=",name:"create-react-hook",url:"https://github.com/Hermanya/create-react-hook",description:"🎣CLI for easily creating reusable react hooks.",stargazers:{totalCount:23},primaryLanguage:{name:"JavaScript"},licenseInfo:null},{id:"MDEwOlJlcG9zaXRvcnkxNjg3Njc3OTY=",name:"use-scroll-to-reveal",url:"https://github.com/Hermanya/use-scroll-to-reveal",description:"🎩 React hook for using scroll to reveal components",stargazers:{totalCount:6},primaryLanguage:{name:"JavaScript"},licenseInfo:null},{id:"MDEwOlJlcG9zaXRvcnkxNjkwMjUyODY=",name:"use-interval",url:"https://github.com/Hermanya/use-interval",description:"⏲ Dan Abramov's interval hook",stargazers:{totalCount:4},primaryLanguage:{name:"TypeScript"},licenseInfo:{name:"MIT License"}},{id:"MDEwOlJlcG9zaXRvcnkxNjc2NDM5MDY=",name:"use-typing-effect",url:"https://github.com/Hermanya/use-typing-effect",description:"⌨️ React hook for the “human typing” effect; great for landing pages, input placeholders and more!",stargazers:{totalCount:18},primaryLanguage:{name:"TypeScript"},licenseInfo:null}]},repositories:{nodes:[{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:2}},{stargazers:{totalCount:0}},{stargazers:{totalCount:10}},{stargazers:{totalCount:3}},{stargazers:{totalCount:4}},{stargazers:{totalCount:4}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:1}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:4}},{stargazers:{totalCount:0}},{stargazers:{totalCount:1}},{stargazers:{totalCount:1}},{stargazers:{totalCount:4}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:2}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:2}},{stargazers:{totalCount:0}},{stargazers:{totalCount:4}},{stargazers:{totalCount:1}},{stargazers:{totalCount:1}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:2}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:1}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:191}},{stargazers:{totalCount:7}},{stargazers:{totalCount:0}},{stargazers:{totalCount:1}},{stargazers:{totalCount:0}},{stargazers:{totalCount:8}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:1}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:29}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:9}},{stargazers:{totalCount:57}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:38}},{stargazers:{totalCount:1}},{stargazers:{totalCount:0}},{stargazers:{totalCount:1}},{stargazers:{totalCount:31}},{stargazers:{totalCount:12}},{stargazers:{totalCount:0}},{stargazers:{totalCount:18}},{stargazers:{totalCount:23}},{stargazers:{totalCount:6}},{stargazers:{totalCount:0}},{stargazers:{totalCount:4}},{stargazers:{totalCount:0}},{stargazers:{totalCount:1}}]}}}}}},179:function(e,t,a){"use strict";var n=a(11),r=a(14),o=a(73),i="".startsWith;n(n.P+n.F*a(74)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),a=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return i?i.call(t,n,a):t.slice(a,a+n.length)===n}})},180:function(e,t,a){"use strict";var n=a(11),r=a(14),o=a(73),i="".endsWith;n(n.P+n.F*a(74)("endsWith"),"String",{endsWith:function(e){var t=o(this,e,"endsWith"),a=arguments.length>1?arguments[1]:void 0,n=r(t.length),s=void 0===a?n:Math.min(r(a),n),l=String(e);return i?i.call(t,l,s):t.slice(s-l.length,s)===l}})},182:function(e){e.exports={data:{site:{siteMetadata:{description:"Hi! My name is Herman Starikov. I live in Toronto and make apps on the internet.",bio:"If you are into cool internet apps, or just want to know what Software Developer's life in Tronno is like, follow me on the social platform of your choice.",misspelledWords:["Tronno"],keyWords:["follow","cool","internet","apps"]}},placeholderImage:{childImageSharp:{fluid:{tracedSVG:"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='400' height='349' viewBox='0 0 400 349' version='1'%3e%3cpath d='M210 12l-8 1a111 111 0 0 0-33 11c-9 3-18 11-25 20-11 15-12 18-12 45-1 33 0 48 3 53 1 3 2 3 2 1 0-4 2-4 2-1l3 3c2 0 3 2 3 4 1 3 2 4 4 1 2-1 2-1 5 3l2 5v5l2 4v4c1 3 1 3-2 3h-4c-4-2-4-1 2 7l4 9 4 5 8 9 4 6 2 3 2 1 2 2c1 2 1 3 2 2l7 5 5 4 3 3 4 2 2 1 2 1 4 1c6 5 38 5 38 0l2-1 2-1c1-3 8-4 9-2v5l-1 5c-1 5-16 18-30 26l-15 9c-3 1-3 1-7-1l-11-6c-10-5-18-10-25-17l-5-5-1-15-1-15c-3 0-5 5-11 18l-4 12c-1 1-2 3-4 3l-15 7-57 25c-16 6-40 18-44 22a116 116 0 0 0-24 45 25943 25943 0 0 0 393-2c0-3-9-28-12-33s-9-10-23-20c-9-7-16-11-42-21a8944 8944 0 0 1-46-19c-5-1-5-2-7-13l-3-12c-4-7-3-18 3-27 4-8 9-18 10-23 0-3 0-2-2 2-3 9-9 17-12 17l-3 1h-2c-1-1-1 0-3 4l-3 5-1 2-3 3-4 3c-1 4-9 7-14 7l-3 1h-1l-4-1-12-3c0-2-3-4-4-3h-2c0-3-5-7-7-6-2 0-2 0-1-1 2-3 1-3-2 0-3 2-4 2-5 1l-4-4-3-4-1-2c-2 1-5-2-5-4l-1-2-2-1-2-4-3-5-1-3-1-1-1-7-2-7-2-4c-2-4-2-7-1-9l1-2 1-1 2 10c-1 1 0 3 1 4 1 2 1 2 1-5 0-8-2-14-4-15l-1-3-1-2c-1 0-1-11 1-14l5-17c0-2 1-4 3-5l6-6a81 81 0 0 1 24-24l5-2h1c-2 2-2 5 0 5l7-5 7-5 2-1 2-1v2c-2 2 0 1 3-1l3-2 2-1 2-2 3-4 2-4v3c0 4-4 16-8 19v3l16-16c3-3 5-3 3 0-1 3 1 6 3 5 1-1 2-1 4 1s2 3 2 8v4c4-3 8 4 5 7-1 1 1 5 5 11l3 5c1 2 1 2-2 2-2-1-7 0-12 1-8 2-9 2-15 9-7 8-8 11-3 19l3 10 1 17c1-1 2-8 1-10v-6c0-4 0-6-2-9-4-6-4-8-1-13 2-3 4-4 4-2l3-1c3-2 13-4 14-2 1 1 0 1-2 1-4 0-6 2-4 3 2 0 2 1 1 2-2 2 1 4 7 3 5 0 6 0 3 3-2 3 0 2 3 0s3-3 3-5c-1-2 0-3 1-4 2 0 2 0 5 8 4 14 2 31-6 34-3 1-5 5-5 13-1 8 0 8 1 0 1-4 5-10 7-10l2 3c1 2 1 2 1-2l2-9 2-8 2-6c3-7 5-36 3-51v-7l-1-2-1-4-3-7-3-9c1-2-4-8-12-16-6-4-8-7-8-8 1-3-5-10-10-11l-6-4c-1-1-2-2-3-1-2 0-11-5-16-9-3-3-13-4-16-3m-5 100l-7 1-5 2c-2 1-2 1-2-1 0-1-6 0-10 2-5 3-8 8-3 7l3-1 4-1 4-1c1-1 17 0 22 1 2 0 5 1 7 3 5 5 8 3 3-2l-2-4c1-1-5-6-8-6h-6m-11 11a192 192 0 0 0-11 2c-2 0-1 3 1 3l-1 1c-1 2-1 2 5 2l6-1 2-2c2-2 3-2 5 1 2 2 7 3 8 0h2c2 2 4 1 4-1 0-6-8-8-21-5m54 31l1 4c1 2-1 5-3 5l-4 3c-2 2-3 2-7 2-6-1-13-2-18-5-3-1-3-1-3 1 1 2 17 9 23 9 9 0 18-8 15-13l-1-3-1-3c-2-2-2-2-2 0m-5 26h-21c-16 0-20 0-21 2-1 1-1 1 1 1l6 3c5 3 13 6 13 4l-1-1-1-1 8-1 11 1c2 0 2 0 0 2l-7 1c-6-1-7 1-2 2 8 1 19-3 23-7l3-3v-2c-1-2-11-3-12-1' fill='lightgray' fill-rule='evenodd'/%3e%3c/svg%3e",aspectRatio:1.1477516059957173,src:"/static/659eb3d2474dca945580317515097ea2/eb3c1/me-looking-right.png",srcSet:"/static/659eb3d2474dca945580317515097ea2/7a825/me-looking-right.png 63w,\n/static/659eb3d2474dca945580317515097ea2/cc023/me-looking-right.png 125w,\n/static/659eb3d2474dca945580317515097ea2/eb3c1/me-looking-right.png 250w,\n/static/659eb3d2474dca945580317515097ea2/b341b/me-looking-right.png 375w,\n/static/659eb3d2474dca945580317515097ea2/a802c/me-looking-right.png 500w,\n/static/659eb3d2474dca945580317515097ea2/e1317/me-looking-right.png 536w",sizes:"(max-width: 250px) 100vw, 250px"}}}}}},186:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(151),i=a(164),s=a(152),l=Object(o.default)(s.Box).withConfig({displayName:"responsive-page__DisplayBox",componentId:"a4672-0"})(["",""],i.display),c=function(e){var t=e.xs,a=e.sm,n=void 0===a?t:a,o=e.md,i=void 0===o?n:o;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l,{display:["flex","flex","none"]},r.a.createElement(t,null)),r.a.createElement(l,{display:["none","none","flex"]},r.a.createElement(i,null)))};c.propTypes={},t.a=c}}]);
//# sourceMappingURL=component---src-pages-github-js-3702bea1410729df7407.js.map