(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/uZM":function(e,t,n){e.exports={content:"layout-module--content--3nIku",connected:"layout-module--connected--3Q_Nm",disconnected:"layout-module--disconnected--LqxH3"}},"7/Sd":function(e,t,n){e.exports={navigationPanel:"navigation-module--navigationPanel--168er",background:"navigation-module--background--3mIrp",nav:"navigation-module--nav--4KTQR",menuitems:"navigation-module--menuitems--gTIzG",menuitem:"navigation-module--menuitem--_L-0h",menu_time:"navigation-module--menu_time--32AXS",menu_settings:"navigation-module--menu_settings--bzNJc",icon:"navigation-module--icon--3x-R4",closed:"navigation-module--closed--2jHYl",opened:"navigation-module--opened--39q3k",backblur:"navigation-module--backblur--2rLsf"}},"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},Bl7J:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("qhky"),i=n("iuhU"),c=n("T8Hb"),u=n.n(c),l=function(e){var t=e.state,n=e.onClick;return a.a.createElement("div",{className:Object(i.a)(u.a.menu,u.a[t])},a.a.createElement("svg",{width:"194",height:"194",viewBox:"0 0 194 194",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:function(e){return n(e)}},a.a.createElement("mask",{id:"mask0","mask-type":"alpha",maskUnits:"userSpaceOnUse",x:"39",y:"58",width:"116",height:"116"},a.a.createElement("circle",{cx:"97",cy:"116",r:"58",fill:"black"})),a.a.createElement("g",{mask:"url(#mask0)"},a.a.createElement("path",{className:u.a.arc,fillRule:"evenodd",clipRule:"evenodd",d:"M97 224.886C117.924 224.886 134.886 207.924 134.886 187C134.886 166.076 117.924 149.114 97 149.114C76.0763 149.114 59.1143 166.076 59.1143 187C59.1143 207.924 76.0763 224.886 97 224.886ZM97 226C118.539 226 136 208.539 136 187C136 165.461 118.539 148 97 148C75.4609 148 58 165.461 58 187C58 208.539 75.4609 226 97 226Z"}),a.a.createElement("circle",{className:u.a.dot,cx:"97",cy:"136",r:"7.5",stroke:"#BCBCBC"}))))};l.defaultProps={state:"closed",onClick:function(){}};var s=l,f=n("Wbzz"),d=n("7/Sd"),p=n.n(d),m=function(){return a.a.createElement("svg",{className:p.a.icon,width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32.25 58.5C46.7475 58.5 58.5 46.7475 58.5 32.25C58.5 17.7525 46.7475 6 32.25 6C17.7525 6 6 17.7525 6 32.25C6 46.7475 17.7525 58.5 32.25 58.5ZM30.7695 32.8104C30.3104 32.554 30 32.0632 30 31.5V11.5C30 10.6716 30.6716 10 31.5 10C32.3284 10 33 10.6716 33 11.5V30.8906L42.416 37.1679C43.1053 37.6275 43.2915 38.5588 42.832 39.2481C42.3725 39.9374 41.4412 40.1236 40.7519 39.6641L31.248 33.3282C31.0426 33.1912 30.8818 33.0123 30.7695 32.8104Z",fill:"#BCBCBC"}))},h=function(){return a.a.createElement("svg",{className:p.a.icon,width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M53.6618 47.439C51.3113 48.1295 48.8239 48.5 46.25 48.5C31.7525 48.5 20 36.7475 20 22.25C20 16.5899 21.7914 11.3482 24.8382 7.06097C13.9498 10.2597 6 20.3265 6 32.25C6 46.7475 17.7525 58.5 32.25 58.5C41.0874 58.5 48.9048 54.1329 53.6618 47.439Z",fill:"#BCBCBC"}),a.a.createElement("path",{d:"M40.5 12L42.4084 17.8734L48.584 17.8734L43.5878 21.5033L45.4962 27.3766L40.5 23.7467L35.5038 27.3766L37.4122 21.5033L32.416 17.8734L38.5916 17.8734L40.5 12Z",fill:"#C4C4C4"}))},y=function(){return a.a.createElement("svg",{className:p.a.icon,width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("g",{clipPath:"url(#clip0)"},a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.98505 25.1263C3.05075 39.0797 11.1729 53.5806 25.1263 57.5149C32.0103 59.4559 34.7691 55.5583 41.3817 41.3185C45.0206 33.4822 48.6156 36.9606 51.6218 39.8694C54.0785 42.2464 56.1419 44.2429 57.5149 39.3737C61.4492 25.4202 53.3271 10.9194 39.3736 6.98508C25.4202 3.05078 10.9193 11.1729 6.98505 25.1263ZM15.5921 31.4494C13.7317 30.9248 12.6487 28.9913 13.1733 27.1309C13.6978 25.2704 15.6313 24.1875 17.4918 24.7121C19.3522 25.2366 20.4352 27.1701 19.9106 29.0305C19.386 30.891 17.4526 31.9739 15.5921 31.4494ZM18.7745 18.3203C18.2499 20.1808 19.3329 22.1142 21.1933 22.6388C23.0538 23.1633 24.9872 22.0804 25.5118 20.2199C26.0364 18.3595 24.9534 16.426 23.093 15.9015C21.2325 15.3769 19.2991 16.4598 18.7745 18.3203ZM30.5214 19.035C28.6609 18.5104 27.578 16.5769 28.1025 14.7165C28.6271 12.856 30.5606 11.7731 32.421 12.2977C34.2815 12.8222 35.3644 14.7557 34.8398 16.6161C34.3153 18.4766 32.3818 19.5595 30.5214 19.035ZM13.3469 37.5697C12.8223 39.4302 13.9053 41.3637 15.7657 41.8882C17.6262 42.4128 19.5596 41.3299 20.0842 39.4694C20.6088 37.6089 19.5258 35.6755 17.6654 35.1509C15.8049 34.6263 13.8715 35.7093 13.3469 37.5697ZM21.8373 49.8341C19.9768 49.3095 18.8938 47.3761 19.4184 45.5156C19.943 43.6552 21.8764 42.5722 23.7369 43.0968C25.5974 43.6214 26.6803 45.5548 26.1557 47.4153C25.6312 49.2757 23.6977 50.3587 21.8373 49.8341ZM37.9986 16.4678C37.4741 18.3283 38.557 20.2617 40.4175 20.7863C42.2779 21.3108 44.2114 20.2279 44.7359 18.3674C45.2605 16.507 44.1776 14.5735 42.3171 14.049C40.4567 13.5244 38.5232 14.6073 37.9986 16.4678Z",fill:"#BCBCBC"})),a.a.createElement("defs",null,a.a.createElement("clipPath",{id:"clip0"},a.a.createElement("rect",{width:"64",height:"64",fill:"white"}))))},g=function(){return a.a.createElement("svg",{className:p.a.icon,width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("g",{clipPath:"url(#clip0)"},a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M37.4268 6.51034V0.176697H27.4268V6.44216C25.5708 6.78685 23.7833 7.32682 22.0866 8.03995C20.5293 8.67412 19.0206 9.46405 17.5843 10.4097L13.0848 5.91028L6.01377 12.9813L10.4251 17.3927C8.37604 20.3403 7.00054 23.6142 6.2986 27H0V37H6.1621C6.80855 40.6129 8.21544 44.1164 10.3828 47.2532L6.19057 51.4454L13.2616 58.5164L17.522 54.256C18.9576 55.2072 20.4662 56.0022 22.0237 56.6412C22.0798 56.6647 22.136 56.688 22.1922 56.7111C23.8579 57.3967 25.6097 57.9159 27.4268 58.248V64.1767H37.4268V58.1516C39.0656 57.8189 40.649 57.3336 42.1615 56.711C43.8693 56.0097 45.5181 55.1207 47.0764 54.044L51.2686 58.2362L58.3397 51.1651L54.0793 46.9047C55.0212 45.4831 55.81 43.99 56.4457 42.4487L56.4729 42.3827C57.189 40.6728 57.7294 38.871 58.0713 37H64V27H57.9749C57.2873 23.6128 55.9476 20.4624 54.0924 17.6857L58.5165 13.2616L51.4454 6.19053L47.0613 10.5747C44.2051 8.61919 40.9427 7.21357 37.4268 6.51034ZM42 32.5C42 37.7467 37.5228 42 32 42C26.4772 42 22 37.7467 22 32.5C22 27.2533 26.4772 23 32 23C37.5228 23 42 27.2533 42 32.5Z",fill:"#BCBCBC"})),a.a.createElement("defs",null,a.a.createElement("clipPath",{id:"clip0"},a.a.createElement("rect",{width:"64",height:"64",fill:"white"}))))},v=function(e){var t=e.state;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:Object(i.a)(p.a.navigationPanel,p.a[t])},a.a.createElement("nav",{className:p.a.nav},a.a.createElement("ul",{className:p.a.menuitems},a.a.createElement("li",{className:Object(i.a)(p.a.menuitem,p.a.menu_design)},a.a.createElement(f.Link,{to:"/colors",title:"Design"},a.a.createElement(y,null))),a.a.createElement("li",{className:Object(i.a)(p.a.menuitem,p.a.menu_time)},a.a.createElement(f.Link,{to:"/",title:"Time"},a.a.createElement(m,null))),a.a.createElement("li",{className:Object(i.a)(p.a.menuitem,p.a.menu_nightmode)},a.a.createElement(f.Link,{to:"/nightmode",title:"Night Mode"},a.a.createElement(h,null))),a.a.createElement("li",{className:Object(i.a)(p.a.menuitem,p.a.menu_settings)},a.a.createElement(f.Link,{to:"/settings",title:"Settings"},a.a.createElement(g,null))))),a.a.createElement("svg",{className:p.a.background,viewBox:"0 0 412 276",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("circle",{cx:"206",cy:"138",r:"448"}))),a.a.createElement("div",{className:Object(i.a)(p.a.backblur,p.a[t])}))};v.defaultProps={state:"closed"};var b=v,C=n("/uZM"),w=n.n(C);t.a=function(e){var t=e.connected,n=e.children,c=Object(r.useState)("closed"),u=c[0],l=c[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,null,a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),a.a.createElement("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),a.a.createElement("meta",{name:"apple-touch-fullscreen",content:"yes"}),a.a.createElement("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black"})),a.a.createElement("main",{className:Object(i.a)(w.a.content,t?w.a.connected:w.a.disconnected)},n),a.a.createElement(s,{state:u,onClick:function(){l("closed"===u?"opened":"closed")}}),a.a.createElement(b,{state:u}))}},MfGh:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("iuhU"),i=n("wMIv"),c=n.n(i);function u(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e){return 180*e/Math.PI}function f(e){var t=e.left,n=e.top,r=e.width,a=e.height,o=e.pageX,i=e.pageY,c=o-Math.round(t+r/2),u=Math.round(n+a/2)-i,l=Math.sqrt(Math.pow(c,2)+Math.pow(u,2)),f=0;return f=c>0?s(Math.asin(1*u/l)):180-s(Math.acos(-1*c/l)),u<0&&c<0?f=360-f:u<0&&(f=360+f),f}function d(e,t){var n=e.currentTarget,r=e.pageX,a=e.pageY,o=n.getBoundingClientRect(),i=o.top,c=o.left,l=o.width,s=o.height,d=i+window.scrollY,p=c+window.scrollX;if(function(e){var t=e.type;return"touchmove"===t||"touchstart"===t||"touchend"===t}(e))for(var m,h=u(e.changedTouches);!(m=h()).done;){var y=m.value;t(f({top:d,left:p,width:l,height:s,pageX:y.pageX,pageY:y.pageY}))}else t(f({top:d,left:p,width:l,height:s,pageX:r,pageY:a}))}function p(e){e<0&&(e=360+e);var t=e+90;return t>360&&(t-=360),t<0&&(t=360+t),Math.floor(t)}function m(e){e<0&&(e=360+e);var t=e-90;return t>360&&(t-=360),t<0&&(t=360+t),Math.floor(t)}var h=function(e){var t=e.value,n=e.className,i=e.min,u=e.max,l=e.onChange,s=e.children,f=Object(r.useState)(!1),h=f[0],y=f[1],g=Object(r.useState)(m(Math.max(t,i))),v=g[0],b=g[1],C=Object(r.useState)(-1*v),w=C[0],T=C[1],E=Object(r.useState)(0),O=E[0],A=E[1],S=Object(r.useRef)(null),j=function(e){return S.current.style.setProperty("--dialRotation",e+"deg")};Object(r.useEffect)((function(){j(v),b(m(t))}),[t]);var M=function(e,t){d(e,(function(e){var n=-1*(w+(e-O))%360;console.log("getValue",p(n)),t(n)}))},k=function(e){console.log("setValue",e),e!==v&&(b(e),l(p(e)),j(v))},L=function(e){h&&(console.log("onSelecting"),M(e,(function(e){p(e)<i?k(i):p(e)>u?k(u):k(e)})))},x=function(e){d(e,(function(e){console.log("selectStart grabAngle",e),A(e),y(!0)}))},P=function(e){M(e,(function(e){return y(!1),console.log("selectEnd",{angle:e,rotateAngle90:p(e),rotateAngle90Back:m(e),rotateMin90Back:m(i),rotateMin90:p(i),rotateMax90:p(u),rotateMax90Back:m(u),min:i,max:u}),p(e)<i?(k(i),T(-1*i),void console.log("selectEnd")):p(e)>u?(k(u),T(-1*u),void console.log("selectEnd")):(k(e),void T(-1*e))}))};return a.a.createElement("div",{ref:S,className:Object(o.a)(n,c.a.dial),onMouseDown:function(e){return x(e)},onTouchStart:function(e){return x(e)},onMouseMove:function(e){return L(e)},onTouchMove:function(e){return L(e)},onMouseUp:function(e){return P(e)},onTouchEnd:function(e){return P(e)}},s)};h.defaultProps={value:0,className:"",min:0,max:359};t.a=h},T8Hb:function(e,t,n){e.exports={menu:"menu-module--menu--1IDZ3",dot:"menu-module--dot--3W1l0",arc:"menu-module--arc--1rDuK",opened:"menu-module--opened--3DB6T",closed:"menu-module--closed--164je"}},ZhWT:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,u,l,s;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(u=c;0!=u--;)if(!e(t[u],i[u]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(s=t.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;for(s=t.entries();!(u=s.next()).done;)if(!e(u.value[1],i.get(u.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(s=t.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(u=c;0!=u--;)if(t[u]!==i[u])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(l=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(i,l[u]))return!1;if(n&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!t.$$typeof)&&!e(t[l[u]],i[l[u]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},iuhU:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));var r,a,o,i,c=n("17x9"),u=n.n(c),l=n("8+s/"),s=n.n(l),f=n("ZhWT"),d=n.n(f),p=n("q1tI"),m=n.n(p),h=n("6qGY"),y=n.n(h),g="bodyAttributes",v="htmlAttributes",b="titleAttributes",C={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(C).map((function(e){return C[e]})),"charset"),T="cssText",E="href",O="http-equiv",A="innerHTML",S="itemprop",j="name",M="property",k="rel",L="src",x="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",N="defer",B="encodeSpecialCharacters",R="onChangeClientState",_="titleTemplate",q=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),H=[C.NOSCRIPT,C.SCRIPT,C.STYLE],Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},D=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},V=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=Q(e,C.TITLE),n=Q(e,_);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,I);return t||r||void 0},W=function(e){return Q(e,R)||function(){}},X=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[C.BASE]})).map((function(e){return e[C.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},G=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+Z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],u=c.toLowerCase();-1===t.indexOf(u)||n===k&&"canonical"===e[n].toLowerCase()||u===k&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==A&&c!==T&&c!==S||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],u=y()({},r[c],a[c]);r[c]=u}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,d=e.titleAttributes;ue(C.BODY,r),ue(C.HTML,a),ce(f,d);var p={baseTag:le(C.BASE,n),linkTags:le(C.LINK,o),metaTags:le(C.META,i),noscriptTags:le(C.NOSCRIPT,c),scriptTags:le(C.SCRIPT,l),styleTags:le(C.STYLE,s)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),u(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ue(C.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===a.indexOf(u)&&a.push(u);var s=o.indexOf(u);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},le=function(e,t){var n=document.head||document.querySelector(C.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===A)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case C.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[m.a.createElement(C.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=se(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+z(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+z(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case v:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===A||n===T){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===A||e===T)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+z(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,d=e.titleAttributes;return{base:de(C.BASE,t,r),bodyAttributes:de(g,n,r),htmlAttributes:de(v,a,r),link:de(C.LINK,o,r),meta:de(C.META,i,r),noscript:de(C.NOSCRIPT,c,r),script:de(C.SCRIPT,u,r),style:de(C.STYLE,l,r),title:de(C.TITLE,{title:f,titleAttributes:d},r)}},me=s()((function(e){return{baseTag:J([E,x],e),bodyAttributes:X(g,e),defer:Q(e,N),encode:Q(e,B),htmlAttributes:X(v,e),linkTags:G(C.LINK,[k,E],e),metaTags:G(C.META,[j,w,O,M,S],e),noscriptTags:G(C.NOSCRIPT,[A],e),onChangeClientState:W(e),scriptTags:G(C.SCRIPT,[L,A],e),styleTags:G(C.STYLE,[T],e),title:K(e),titleAttributes:X(b,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),pe)((function(){return null})),he=(a=me,i=o=function(e){function t(){return Y(this,t),V(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case C.SCRIPT:case C.NOSCRIPT:return{innerHTML:t};case C.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case C.TITLE:return U({},a,((t={})[r.type]=i,t.titleAttributes=U({},o),t));case C.BODY:return U({},a,{bodyAttributes:U({},o)});case C.HTML:return U({},a,{htmlAttributes:U({},o)})}return U({},a,((n={})[r.type]=U({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[q[n]||n]=e[n],t}),t)}(F(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case C.LINK:case C.META:case C.NOSCRIPT:case C.SCRIPT:case C.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=F(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.a.createElement(a,r)},D(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),o.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,n("yLpj"))},vrFN:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("qhky"),i=n("Wbzz");function c(e){var t=e.description,n=e.lang,r=e.meta,c=e.title,u=Object(i.useStaticQuery)("63159454").site,l=t||u.siteMetadata.description;return a.a.createElement(o.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},wMIv:function(e,t,n){e.exports={dial:"dial-module--dial--3jV2l"}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-f03d4e2ffe8b1e4be9a6.js.map