(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7209)}])},8257:function(e,t,n){"use strict";var r=n(7294);let a=(0,r.createContext)();t.Z=a},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,a=n(7273).Z,o=r(n(7294)),i=n(4532),l=n(3353),u=n(1410),s=n(9064),c=n(370),f=n(9955),p=n(4224),d=n(508),y=n(1516),m=n(4266);let h=new Set;function v(e,t,n,r,a){if(a||l.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let a=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,o=t+"%"+n+"%"+a;if(h.has(o))return;h.add(o)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function b(e){return"string"==typeof e?e:u.formatUrl(e)}let g=o.default.forwardRef(function(e,t){let n,r;let{href:u,as:h,children:g,prefetch:x,passHref:w,replace:j,shallow:k,scroll:M,locale:O,onClick:_,onMouseEnter:N,onTouchStart:C,legacyBehavior:S=!1}=e,P=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,S&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let V=!1!==x,H=o.default.useContext(f.RouterContext),E=o.default.useContext(p.AppRouterContext),T=null!=H?H:E,z=!H,{href:A,as:R}=o.default.useMemo(()=>{if(!H){let e=b(u);return{href:e,as:h?b(h):e}}let[e,t]=i.resolveHref(H,u,!0);return{href:e,as:h?i.resolveHref(H,h):t||e}},[H,u,h]),I=o.default.useRef(A),L=o.default.useRef(R);S&&(r=o.default.Children.only(n));let B=S?r&&"object"==typeof r&&r.ref:t,[$,U,q]=d.useIntersection({rootMargin:"200px"}),D=o.default.useCallback(e=>{(L.current!==R||I.current!==A)&&(q(),L.current=R,I.current=A),$(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[R,B,A,q,$]);o.default.useEffect(()=>{T&&U&&V&&v(T,A,R,{locale:O},z)},[R,A,U,O,V,null==H?void 0:H.locale,T,z]);let F={ref:D,onClick(e){S||"function"!=typeof _||_(e),S&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),T&&!e.defaultPrevented&&function(e,t,n,r,a,i,u,s,c,f){let{nodeName:p}=e.currentTarget,d="A"===p.toUpperCase();if(d&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!l.isLocalURL(n)))return;e.preventDefault();let y=()=>{"beforePopState"in t?t[a?"replace":"push"](n,r,{shallow:i,locale:s,scroll:u}):t[a?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};c?o.default.startTransition(y):y()}(e,T,A,R,j,k,M,O,z,V)},onMouseEnter(e){S||"function"!=typeof N||N(e),S&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),T&&(V||!z)&&v(T,A,R,{locale:O,priority:!0,bypassPrefetchedCheck:!0},z)},onTouchStart(e){S||"function"!=typeof C||C(e),S&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),T&&(V||!z)&&v(T,A,R,{locale:O,priority:!0,bypassPrefetchedCheck:!0},z)}};if(s.isAbsoluteUrl(R))F.href=R;else if(!S||w||"a"===r.type&&!("href"in r.props)){let e=void 0!==O?O:null==H?void 0:H.locale,t=(null==H?void 0:H.isLocaleDomain)&&y.getDomainLocale(R,e,null==H?void 0:H.locales,null==H?void 0:H.domainLocales);F.href=t||m.addBasePath(c.addLocale(R,e,null==H?void 0:H.defaultLocale))}return S?o.default.cloneElement(r,F):o.default.createElement("a",Object.assign({},P,F),n)});t.default=g,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:u}=e,s=u||!o,[c,f]=r.useState(!1),p=r.useRef(null),d=r.useCallback(e=>{p.current=e},[]);r.useEffect(()=>{if(o){if(s||c)return;let e=p.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:a,elements:o}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=i.get(r)))return t;let a=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:o,elements:a},l.push(n),i.set(n,t),t}(n);return o.set(e,t),a.observe(e),function(){if(o.delete(e),a.unobserve(e),0===o.size){a.disconnect(),i.delete(r);let e=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!c){let e=a.requestIdleCallback(()=>f(!0));return()=>a.cancelIdleCallback(e)}},[s,n,t,c,p.current]);let y=r.useCallback(()=>{f(!1)},[]);return[d,c,y]};var r=n(7294),a=n(29);let o="function"==typeof IntersectionObserver,i=new Map,l=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7209:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(5893),a=n(8895),o=n.n(a);n(3814);var i=n(7294),l=n(1664),u=n.n(l),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=i.createContext&&i.createContext(s),f=function(){return(f=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function d(e){return function(t){return i.createElement(y,f({attr:f({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return i.createElement(t.tag,f({key:n},t.attr),e(t.child))})}(e.child))}}function y(e){var t=function(t){var n,r=e.attr,a=e.size,o=e.title,l=p(e,["attr","size","title"]),u=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),i.createElement("svg",f({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,l,{className:n,style:f(f({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&i.createElement("title",null,o),e.children)};return void 0!==c?i.createElement(c.Consumer,null,function(e){return t(e)}):t(s)}function m(e){return d({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]})(e)}function h(e){return d({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]})(e)}let v=()=>{let[e,t]=(0,i.useState)(!1),n=()=>{t(!e)};return(0,r.jsx)("div",{className:"fixed left-0 top-0 w-full z-10 ease-in duration-300  border",children:(0,r.jsxs)("div",{className:"max-w-[1340px] m-auto flex justify-center items-center p-4 dark-green",children:[(0,r.jsxs)("ul",{className:"hidden sm:flex",children:[(0,r.jsx)("li",{className:"p-4",children:(0,r.jsx)(u(),{href:"/",children:"Home"})}),(0,r.jsx)("li",{className:"p-4",children:(0,r.jsx)(u(),{href:"/about",children:"About Page"})})]}),(0,r.jsx)("div",{onClick:n,className:"block sm:hidden z-10",children:e?(0,r.jsx)(m,{size:20,className:"text-white"}):(0,r.jsx)(h,{size:20})}),(0,r.jsx)("div",{className:e?"sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 text-white":"sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{onClick:n,className:"p-4 text-4xl hover:text-gray-500",children:(0,r.jsx)(u(),{href:"/",children:"Home"})}),(0,r.jsx)("li",{onClick:n,className:"p-4 text-4xl hover:text-gray-500",children:(0,r.jsx)(u(),{href:"/about",children:"About Page"})})]})})]})})},b=()=>(0,r.jsxs)("footer",{className:"h-[50px]",children:[(0,r.jsx)("div",{className:"border"}),(0,r.jsxs)("div",{className:"relative text-black flex md:flex-row justify-evenly items-center sm:flex-col pt-1",children:[(0,r.jsx)("p",{className:" text-2xl pl-1",children:" SONG-CHALENGE"}),(0,r.jsx)("p",{className:"text-md",children:"\xa92023 JIM & MCNIAC DEVELOP."}),(0,r.jsx)("p",{className:"text-md",children:"All Rights Reserved."})]})]}),g=e=>{let{children:t}=e;return(0,r.jsxs)("div",{className:"flex flex-col justify-between h-[100vh]",children:[(0,r.jsx)(v,{}),(0,r.jsx)("main",{children:t}),(0,r.jsx)(b,{})]})};var x=n(733),w=n.n(x),j=n(8257);function k(e){let{Component:t,pageProps:n}=e,[a,l]=(0,i.useState)("default"),[u,s]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{s(!1)},[]),(0,r.jsx)("div",{className:"".concat(o().className," "),children:(0,r.jsx)(g,{children:u?(0,r.jsx)("div",{className:"relative flex flex-col items-center justify-center h-[90vh]",children:(0,r.jsx)(w(),{type:"bars",color:"#2c3e50",height:50,width:50})}):(0,r.jsx)(j.Z.Provider,{value:{songContext:a,setSongContext:l},children:(0,r.jsx)(t,{...n})})})})}},3814:function(){},8895:function(e){e.exports={style:{fontFamily:"'__Montserrat_531700', '__Montserrat_Fallback_531700'",fontStyle:"normal"},className:"__className_531700"}},1664:function(e,t,n){e.exports=n(5569)},733:function(e){"undefined"!=typeof self&&self,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=7)}([function(e,t,n){"use strict";var r=function(e){};e.exports=function(e,t,n,a,o,i,l,u){if(r(t),!e){var s;if(void 0===t)s=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,a,o,i,l,u],f=0;(s=Error(t.replace(/%s/g,function(){return c[f++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}}},function(e,t,n){"use strict";function r(e){return function(){return e}}var a=function(){};a.thatReturns=r,a.thatReturnsFalse=r(!1),a.thatReturnsTrue=r(!0),a.thatReturnsNull=r(null),a.thatReturnsThis=function(){return this},a.thatReturnsArgument=function(e){return e},e.exports=a},function(e,t,n){"use strict";/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=!function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var a={};if("abcdefghijklmnopqrst".split("").forEach(function(e){a[e]=e}),"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},a)).join(""))return!1;return!0}catch(e){return!1}}()?function(e,t){for(var n,i,l=function(e){if(null==e)throw TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))a.call(n,s)&&(l[s]=n[s]);if(r){i=r(n);for(var c=0;c<i.length;c++)o.call(n,i[c])&&(l[i[c]]=n[i[c]])}}return l}:Object.assign},function(e,t,n){"use strict";var r=n(1);e.exports=r},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";e.exports={}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,a){}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(8),i=s(o),l=s(n(11)),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(14));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}var f=function(e){function t(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);for(var e,n,r,a=arguments.length,o=Array(a),i=0;i<a;i++)o[i]=arguments[i];return n=r=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.state={delayed:r.props.delay>0},c(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.delay;this.state.delayed&&(this.timeout=setTimeout(function(){e.setState({delayed:!1})},t))}},{key:"componentWillUnmount",value:function(){var e=this.timeout;e&&clearTimeout(e)}},{key:"render",value:function(){var e=this.props,t=e.color,n=(e.delay,e.type),a=e.height,o=e.width,l=function(e,t){var n={};for(var r in e)!(t.indexOf(r)>=0)&&Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["color","delay","type","height","width"]),s=u[this.state.delayed?"blank":n];return i.default.createElement("div",r({style:{fill:t,height:a,width:o},dangerouslySetInnerHTML:{__html:s}},l))}}]),t}(o.Component);f.propTypes={color:l.default.string,delay:l.default.number,type:l.default.string,height:l.default.oneOfType([l.default.string,l.default.number]),width:l.default.oneOfType([l.default.string,l.default.number])},f.defaultProps={color:"#fff",delay:0,type:"balls",height:64,width:64},t.default=f},function(e,t,n){"use strict";e.exports=n(9)},function(e,t,n){"use strict";/** @license React v16.3.2
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2),a=n(0),o=n(5),i=n(1),l="function"==typeof Symbol&&Symbol.for,u=l?Symbol.for("react.element"):60103,s=l?Symbol.for("react.portal"):60106,c=l?Symbol.for("react.fragment"):60107,f=l?Symbol.for("react.strict_mode"):60108,p=l?Symbol.for("react.provider"):60109,d=l?Symbol.for("react.context"):60110,y=l?Symbol.for("react.async_mode"):60111,m=l?Symbol.for("react.forward_ref"):60112,h="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t=arguments.length-1,n="http://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);a(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function g(e,t,n){this.props=e,this.context=t,this.refs=o,this.updater=n||b}function x(){}function w(e,t,n){this.props=e,this.context=t,this.refs=o,this.updater=n||b}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&v("85"),this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=g.prototype;var j=w.prototype=new x;j.constructor=w,r(j,g.prototype),j.isPureReactComponent=!0;var k={current:null},M=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var r=void 0,a={},o=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)M.call(t,r)&&!O.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];a.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:u,type:e,key:o,ref:i,props:a,_owner:k.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var C=/\/+/g,S=[];function P(e,t,n,r){if(S.length){var a=S.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function V(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>S.length&&S.push(e)}function H(e,t,n,r){var a=typeof e;("undefined"===a||"boolean"===a)&&(e=null);var o=!1;if(null===e)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case u:case s:o=!0}}if(o)return n(r,e,""===t?"."+E(e,0):t),1;if(o=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var l=t+E(a=e[i],i);o+=H(a,l,n,r)}else if("function"==typeof(l=null==e?null:"function"==typeof(l=h&&e[h]||e["@@iterator"])?l:null))for(e=l.call(e),i=0;!(a=e.next()).done;)l=t+E(a=a.value,i++),o+=H(a,l,n,r);else"object"===a&&v("31","[object Object]"==(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return o}function E(e,t){var n,r;return"object"==typeof e&&null!==e&&null!=e.key?(n=e.key,r={"=":"=0",":":"=2"},"$"+(""+n).replace(/[=:]/g,function(e){return r[e]})):t.toString(36)}function T(e,t){e.func.call(e.context,t,e.count++)}function z(e,t,n){var r=e.result,a=e.keyPrefix;Array.isArray(e=e.func.call(e.context,t,e.count++))?A(e,r,n,i.thatReturnsArgument):null!=e&&(N(e)&&(t=a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+n,e={$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),r.push(e))}function A(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(C,"$&/")+"/"),t=P(t,o,r,a),null==e||H(e,"",z,t),V(t)}var R={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return A(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;t=P(null,null,t,n),null==e||H(e,"",T,t),V(t)},count:function(e){return null==e?0:H(e,"",i.thatReturnsNull,null)},toArray:function(e){var t=[];return A(e,t,null,i.thatReturnsArgument),t},only:function(e){return N(e)||v("143"),e}},createRef:function(){return{current:null}},Component:g,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:d,_calculateChangedBits:t,_defaultValue:e,_currentValue:e,_changedBits:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:m,render:e}},Fragment:c,StrictMode:f,unstable_AsyncMode:y,createElement:_,cloneElement:function(e,t,n){null==e&&v("267",e);var a=void 0,o=r({},e.props),i=e.key,l=e.ref,s=e._owner;if(null!=t){void 0!==t.ref&&(l=t.ref,s=k.current),void 0!==t.key&&(i=""+t.key);var c=void 0;for(a in e.type&&e.type.defaultProps&&(c=e.type.defaultProps),t)M.call(t,a)&&!O.hasOwnProperty(a)&&(o[a]=void 0===t[a]&&void 0!==c?c[a]:t[a])}if(a=arguments.length-2,1===a)o.children=n;else if(1<a){c=Array(a);for(var f=0;f<a;f++)c[f]=arguments[f+2];o.children=c}return{$$typeof:u,type:e.type,key:i,ref:l,props:o,_owner:s}},createFactory:function(e){var t=_.bind(null,e);return t.type=e,t},isValidElement:N,version:"16.3.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:k,assign:r}},I=Object.freeze({default:R}),L=I&&R||I;e.exports=L.default?L.default:L},function(e,t,n){},function(e,t,n){e.exports=n(13)()},function(e,t,n){"use strict";var r=n(1),a=n(0),o=n(3),i=n(2),l=n(4),u=n(6);e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,s="<<anonymous>>",c={array:d("array"),bool:d("boolean"),func:d("function"),number:d("number"),object:d("object"),string:d("string"),symbol:d("symbol"),any:p(r.thatReturnsNull),arrayOf:function(e){return p(function(t,n,r,a,o){if("function"!=typeof e)return new f("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var i=t[n];if(!Array.isArray(i)){var u=y(i);return new f("Invalid "+a+" `"+o+"` of type "+("`"+u)+"` supplied to `"+r+"`, expected an array.")}for(var s=0;s<i.length;s++){var c=e(i,s,r,a,o+"["+s+"]",l);if(c instanceof Error)return c}return null})},element:p(function(t,n,r,a,o){var i=t[n];if(!e(i)){var l=y(i);return new f("Invalid "+a+" `"+o+"` of type "+("`"+l)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}),instanceOf:function(e){return p(function(t,n,r,a,o){if(!(t[n]instanceof e)){var i,l=e.name||s,u=(i=t[n]).constructor&&i.constructor.name?i.constructor.name:s;return new f("Invalid "+a+" `"+o+"` of type "+("`"+u)+"` supplied to `"+r+"`, expected instance of `"+l+"`.")}return null})},node:p(function(t,r,a,o,i){return!function t(r){switch(typeof r){case"number":case"string":case"undefined":return!0;case"boolean":return!r;case"object":if(Array.isArray(r))return r.every(t);if(null===r||e(r))return!0;var a=function(e){var t=e&&(n&&e[n]||e["@@iterator"]);if("function"==typeof t)return t}(r);if(!a)return!1;var o,i=a.call(r);if(a!==r.entries){for(;!(o=i.next()).done;)if(!t(o.value))return!1}else for(;!(o=i.next()).done;){var l=o.value;if(l&&!t(l[1]))return!1}return!0;default:return!1}}(t[r])?new f("Invalid "+o+" `"+i+"` supplied to `"+a+"`, expected a ReactNode."):null}),objectOf:function(e){return p(function(t,n,r,a,o){if("function"!=typeof e)return new f("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var i=t[n],u=y(i);if("object"!==u)return new f("Invalid "+a+" `"+o+"` of type "+("`"+u)+"` supplied to `"+r+"`, expected an object.");for(var s in i)if(i.hasOwnProperty(s)){var c=e(i,s,r,a,o+"."+s,l);if(c instanceof Error)return c}return null})},oneOf:function(e){return Array.isArray(e)?p(function(t,n,r,a,o){for(var i,l=t[n],u=0;u<e.length;u++)if(l===(i=e[u])?0!==l||1/l==1/i:l!=l&&i!=i)return null;var s=JSON.stringify(e);return new f("Invalid "+a+" `"+o+"` of value `"+l+"` "+("supplied to `"+r)+"`, expected one of "+s+".")}):r.thatReturnsNull},oneOfType:function(e){if(!Array.isArray(e))return r.thatReturnsNull;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return o(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",function(e){var t=m(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}(n),t),r.thatReturnsNull}return p(function(t,n,r,a,o){for(var i=0;i<e.length;i++)if(null==(0,e[i])(t,n,r,a,o,l))return null;return new f("Invalid "+a+" `"+o+"` supplied to `"+r+"`.")})},shape:function(e){return p(function(t,n,r,a,o){var i=t[n],u=y(i);if("object"!==u)return new f("Invalid "+a+" `"+o+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");for(var s in e){var c=e[s];if(c){var p=c(i,s,r,a,o+"."+s,l);if(p)return p}}return null})},exact:function(e){return p(function(t,n,r,a,o){var u=t[n],s=y(u);if("object"!==s)return new f("Invalid "+a+" `"+o+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");var c=i({},t[n],e);for(var p in c){var d=e[p];if(!d)return new f("Invalid "+a+" `"+o+"` key `"+p+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=d(u,p,r,a,o+"."+p,l);if(m)return m}return null})}};function f(e){this.message=e,this.stack=""}function p(e){function n(n,r,o,i,u,c,p){return(i=i||s,c=c||o,p!==l&&t&&a(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"),null!=r[o])?e(r,o,i,u,c):n?new f(null===r[o]?"The "+u+" `"+c+"` is marked as required in `"+i+"`, but its value is `null`.":"The "+u+" `"+c+"` is marked as required in `"+i+"`, but its value is `undefined`."):null}var r=n.bind(null,!1);return r.isRequired=n.bind(null,!0),r}function d(e){return p(function(t,n,r,a,o,i){var l=t[n];if(y(l)!==e){var u=m(l);return new f("Invalid "+a+" `"+o+"` of type "+("`"+u)+"` supplied to `"+r+"`, expected `"+e+"`.")}return null})}function y(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":"symbol"===t||"Symbol"===e["@@toStringTag"]||"function"==typeof Symbol&&e instanceof Symbol?"symbol":t}function m(e){if(null==e)return""+e;var t=y(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}return f.prototype=Error.prototype,c.checkPropTypes=u,c.PropTypes=c,c}},function(e,t,n){"use strict";var r=n(1),a=n(0),o=n(4);e.exports=function(){function e(e,t,n,r,i,l){l!==o&&a(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(15);Object.defineProperty(t,"blank",{enumerable:!0,get:function(){return p(r).default}});var a=n(16);Object.defineProperty(t,"balls",{enumerable:!0,get:function(){return p(a).default}});var o=n(17);Object.defineProperty(t,"bars",{enumerable:!0,get:function(){return p(o).default}});var i=n(18);Object.defineProperty(t,"bubbles",{enumerable:!0,get:function(){return p(i).default}});var l=n(19);Object.defineProperty(t,"cubes",{enumerable:!0,get:function(){return p(l).default}});var u=n(20);Object.defineProperty(t,"cylon",{enumerable:!0,get:function(){return p(u).default}});var s=n(21);Object.defineProperty(t,"spin",{enumerable:!0,get:function(){return p(s).default}});var c=n(22);Object.defineProperty(t,"spinningBubbles",{enumerable:!0,get:function(){return p(c).default}});var f=n(23);function p(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"spokes",{enumerable:!0,get:function(){return p(f).default}})},function(e,t){e.exports='<svg class="icon-blank" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"></svg>\n'},function(e,t){e.exports='<svg class="icon-loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <path transform="translate(-8 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> \n    <animateTransform attributeName="transform" type="translate" values="-8 0; 2 0; 2 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.25;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />\n  </path>\n  <path transform="translate(2 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> \n    <animateTransform attributeName="transform" type="translate" values="2 0; 12 0; 12 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.35;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />\n  </path>\n  <path transform="translate(12 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> \n    <animateTransform attributeName="transform" type="translate" values="12 0; 22 0; 22 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.45;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />\n  </path>\n  <path transform="translate(24 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> \n    <animateTransform attributeName="transform" type="translate" values="22 0; 32 0; 32 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.55;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />\n  </path>\n</svg>\n'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <path transform="translate(2)" d="M0 12 V20 H4 V12z"> \n    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  />\n  </path>\n  <path transform="translate(8)" d="M0 12 V20 H4 V12z">\n    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.2" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  />\n  </path>\n  <path transform="translate(14)" d="M0 12 V20 H4 V12z">\n    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.4" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />\n  </path>\n  <path transform="translate(20)" d="M0 12 V20 H4 V12z">\n    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.6" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />\n  </path>\n  <path transform="translate(26)" d="M0 12 V20 H4 V12z">\n    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.8" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />\n  </path>\n</svg>\n'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <circle transform="translate(8 0)" cx="0" cy="16" r="0"> \n    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0"\n      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="translate(16 0)" cx="0" cy="16" r="0"> \n    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.3"\n      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="translate(24 0)" cx="0" cy="16" r="0"> \n    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.6"\n      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />\n  </circle>\n</svg>\n'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <path transform="translate(-8 0)" d="M0 12 V20 H8 V12z"> \n    <animateTransform attributeName="transform" type="translate" values="-8 0; 2 0; 2 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.25;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />\n  </path>\n  <path transform="translate(2 0)" d="M0 12 V20 H8 V12z"> \n    <animateTransform attributeName="transform" type="translate" values="2 0; 12 0; 12 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.35;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />\n  </path>\n  <path transform="translate(12 0)" d="M0 12 V20 H8 V12z"> \n    <animateTransform attributeName="transform" type="translate" values="12 0; 22 0; 22 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.45;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />\n  </path>\n  <path transform="translate(24 0)" d="M0 12 V20 H8 V12z"> \n    <animateTransform attributeName="transform" type="translate" values="22 0; 32 0; 32 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.55;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />\n  </path>\n</svg>\n'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <path transform="translate(0 0)" d="M0 12 V20 H4 V12z">\n    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </path>\n  <path opacity="0.5" transform="translate(0 0)" d="M0 12 V20 H4 V12z">\n    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0.1s" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </path>\n  <path opacity="0.25" transform="translate(0 0)" d="M0 12 V20 H4 V12z">\n    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0.2s" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </path>\n</svg>\n'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <path opacity=".25" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/>\n  <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">\n    <animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite" />\n  </path>\n</svg>\n'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <circle cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="rotate(45 16 16)" cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.125s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="rotate(90 16 16)" cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.25s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="rotate(135 16 16)" cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.375s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="rotate(225 16 16)" cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.625s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="rotate(270 16 16)" cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.75s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="rotate(315 16 16)" cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.875s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n</svg>\n'},function(e,t){e.exports='<svg id="loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(0 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(45 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.125s"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(90 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.25s"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(135 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.375s"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(180 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.5s"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(225 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.675s"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(270 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.75s"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(315 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.875s"/>\n  </path>\n</svg>\n'}])}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);