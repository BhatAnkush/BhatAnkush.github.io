function yd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function wd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bs={exports:{}},wi={},Hs={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sr=Symbol.for("react.element"),kd=Symbol.for("react.portal"),jd=Symbol.for("react.fragment"),Sd=Symbol.for("react.strict_mode"),Cd=Symbol.for("react.profiler"),Nd=Symbol.for("react.provider"),Ed=Symbol.for("react.context"),bd=Symbol.for("react.forward_ref"),Pd=Symbol.for("react.suspense"),zd=Symbol.for("react.memo"),Ld=Symbol.for("react.lazy"),ca=Symbol.iterator;function Rd(e){return e===null||typeof e!="object"?null:(e=ca&&e[ca]||e["@@iterator"],typeof e=="function"?e:null)}var Vs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ys=Object.assign,Qs={};function mn(e,t,n){this.props=e,this.context=t,this.refs=Qs,this.updater=n||Vs}mn.prototype.isReactComponent={};mn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};mn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gs(){}Gs.prototype=mn.prototype;function dl(e,t,n){this.props=e,this.context=t,this.refs=Qs,this.updater=n||Vs}var pl=dl.prototype=new Gs;pl.constructor=dl;Ys(pl,mn.prototype);pl.isPureReactComponent=!0;var da=Array.isArray,Ks=Object.prototype.hasOwnProperty,fl={current:null},$s={key:!0,ref:!0,__self:!0,__source:!0};function Zs(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Ks.call(t,r)&&!$s.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:sr,type:e,key:o,ref:l,props:i,_owner:fl.current}}function Td(e,t){return{$$typeof:sr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function hl(e){return typeof e=="object"&&e!==null&&e.$$typeof===sr}function Id(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var pa=/\/+/g;function Ui(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Id(""+e.key):t.toString(36)}function Mr(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case sr:case kd:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Ui(l,0):r,da(i)?(n="",e!=null&&(n=e.replace(pa,"$&/")+"/"),Mr(i,t,n,"",function(c){return c})):i!=null&&(hl(i)&&(i=Td(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(pa,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",da(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+Ui(o,s);l+=Mr(o,t,n,u,i)}else if(u=Rd(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+Ui(o,s++),l+=Mr(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function vr(e,t,n){if(e==null)return e;var r=[],i=0;return Mr(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Md(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Ar={transition:null},Ad={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Ar,ReactCurrentOwner:fl};function Xs(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:vr,forEach:function(e,t,n){vr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vr(e,function(){t++}),t},toArray:function(e){return vr(e,function(t){return t})||[]},only:function(e){if(!hl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=mn;T.Fragment=jd;T.Profiler=Cd;T.PureComponent=dl;T.StrictMode=Sd;T.Suspense=Pd;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ad;T.act=Xs;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ys({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=fl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Ks.call(t,u)&&!$s.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:sr,type:e.type,key:i,ref:o,props:r,_owner:l}};T.createContext=function(e){return e={$$typeof:Ed,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Nd,_context:e},e.Consumer=e};T.createElement=Zs;T.createFactory=function(e){var t=Zs.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:bd,render:e}};T.isValidElement=hl;T.lazy=function(e){return{$$typeof:Ld,_payload:{_status:-1,_result:e},_init:Md}};T.memo=function(e,t){return{$$typeof:zd,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=Ar.transition;Ar.transition={};try{e()}finally{Ar.transition=t}};T.unstable_act=Xs;T.useCallback=function(e,t){return de.current.useCallback(e,t)};T.useContext=function(e){return de.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return de.current.useDeferredValue(e)};T.useEffect=function(e,t){return de.current.useEffect(e,t)};T.useId=function(){return de.current.useId()};T.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return de.current.useMemo(e,t)};T.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};T.useRef=function(e){return de.current.useRef(e)};T.useState=function(e){return de.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return de.current.useTransition()};T.version="18.3.1";Hs.exports=T;var j=Hs.exports;const ut=wd(j),_d=yd({__proto__:null,default:ut},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od=j,Dd=Symbol.for("react.element"),Fd=Symbol.for("react.fragment"),Ud=Object.prototype.hasOwnProperty,Wd=Od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bd={key:!0,ref:!0,__self:!0,__source:!0};function Js(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Ud.call(t,r)&&!Bd.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Dd,type:e,key:o,ref:l,props:i,_owner:Wd.current}}wi.Fragment=Fd;wi.jsx=Js;wi.jsxs=Js;Bs.exports=wi;var a=Bs.exports,qs={exports:{}},je={},eu={exports:{}},tu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,L){var R=E.length;E.push(L);e:for(;0<R;){var G=R-1>>>1,q=E[G];if(0<i(q,L))E[G]=L,E[R]=q,R=G;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var L=E[0],R=E.pop();if(R!==L){E[0]=R;e:for(var G=0,q=E.length,mr=q>>>1;G<mr;){var Nt=2*(G+1)-1,Fi=E[Nt],Et=Nt+1,gr=E[Et];if(0>i(Fi,R))Et<q&&0>i(gr,Fi)?(E[G]=gr,E[Et]=R,G=Et):(E[G]=Fi,E[Nt]=R,G=Nt);else if(Et<q&&0>i(gr,R))E[G]=gr,E[Et]=R,G=Et;else break e}}return L}function i(E,L){var R=E.sortIndex-L.sortIndex;return R!==0?R:E.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],c=[],f=1,d=null,m=3,x=!1,y=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(E){for(var L=n(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=E)r(c),L.sortIndex=L.expirationTime,t(u,L);else break;L=n(c)}}function v(E){if(w=!1,g(E),!y)if(n(u)!==null)y=!0,Oi(S);else{var L=n(c);L!==null&&Di(v,L.startTime-E)}}function S(E,L){y=!1,w&&(w=!1,h(z),z=-1),x=!0;var R=m;try{for(g(L),d=n(u);d!==null&&(!(d.expirationTime>L)||E&&!Le());){var G=d.callback;if(typeof G=="function"){d.callback=null,m=d.priorityLevel;var q=G(d.expirationTime<=L);L=e.unstable_now(),typeof q=="function"?d.callback=q:d===n(u)&&r(u),g(L)}else r(u);d=n(u)}if(d!==null)var mr=!0;else{var Nt=n(c);Nt!==null&&Di(v,Nt.startTime-L),mr=!1}return mr}finally{d=null,m=R,x=!1}}var b=!1,P=null,z=-1,Q=5,I=-1;function Le(){return!(e.unstable_now()-I<Q)}function yn(){if(P!==null){var E=e.unstable_now();I=E;var L=!0;try{L=P(!0,E)}finally{L?wn():(b=!1,P=null)}}else b=!1}var wn;if(typeof p=="function")wn=function(){p(yn)};else if(typeof MessageChannel<"u"){var ua=new MessageChannel,xd=ua.port2;ua.port1.onmessage=yn,wn=function(){xd.postMessage(null)}}else wn=function(){C(yn,0)};function Oi(E){P=E,b||(b=!0,wn())}function Di(E,L){z=C(function(){E(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,Oi(S))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(E){switch(m){case 1:case 2:case 3:var L=3;break;default:L=m}var R=m;m=L;try{return E()}finally{m=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,L){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var R=m;m=E;try{return L()}finally{m=R}},e.unstable_scheduleCallback=function(E,L,R){var G=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?G+R:G):R=G,E){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=R+q,E={id:f++,callback:L,priorityLevel:E,startTime:R,expirationTime:q,sortIndex:-1},R>G?(E.sortIndex=R,t(c,E),n(u)===null&&E===n(c)&&(w?(h(z),z=-1):w=!0,Di(v,R-G))):(E.sortIndex=q,t(u,E),y||x||(y=!0,Oi(S))),E},e.unstable_shouldYield=Le,e.unstable_wrapCallback=function(E){var L=m;return function(){var R=m;m=L;try{return E.apply(this,arguments)}finally{m=R}}}})(tu);eu.exports=tu;var Hd=eu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vd=j,ke=Hd;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nu=new Set,Hn={};function Ft(e,t){sn(e,t),sn(e+"Capture",t)}function sn(e,t){for(Hn[e]=t,e=0;e<t.length;e++)nu.add(t[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mo=Object.prototype.hasOwnProperty,Yd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fa={},ha={};function Qd(e){return mo.call(ha,e)?!0:mo.call(fa,e)?!1:Yd.test(e)?ha[e]=!0:(fa[e]=!0,!1)}function Gd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Kd(e,t,n,r){if(t===null||typeof t>"u"||Gd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var ml=/[\-:]([a-z])/g;function gl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ml,gl);ie[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ml,gl);ie[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ml,gl);ie[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function vl(e,t,n,r){var i=ie.hasOwnProperty(t)?ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Kd(t,n,i,r)&&(n=null),r||i===null?Qd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Je=Vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xr=Symbol.for("react.element"),Ht=Symbol.for("react.portal"),Vt=Symbol.for("react.fragment"),xl=Symbol.for("react.strict_mode"),go=Symbol.for("react.profiler"),ru=Symbol.for("react.provider"),iu=Symbol.for("react.context"),yl=Symbol.for("react.forward_ref"),vo=Symbol.for("react.suspense"),xo=Symbol.for("react.suspense_list"),wl=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),ou=Symbol.for("react.offscreen"),ma=Symbol.iterator;function kn(e){return e===null||typeof e!="object"?null:(e=ma&&e[ma]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Wi;function zn(e){if(Wi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wi=t&&t[1]||""}return`
`+Wi+e}var Bi=!1;function Hi(e,t){if(!e||Bi)return"";Bi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{Bi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?zn(e):""}function $d(e){switch(e.tag){case 5:return zn(e.type);case 16:return zn("Lazy");case 13:return zn("Suspense");case 19:return zn("SuspenseList");case 0:case 2:case 15:return e=Hi(e.type,!1),e;case 11:return e=Hi(e.type.render,!1),e;case 1:return e=Hi(e.type,!0),e;default:return""}}function yo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vt:return"Fragment";case Ht:return"Portal";case go:return"Profiler";case xl:return"StrictMode";case vo:return"Suspense";case xo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case iu:return(e.displayName||"Context")+".Consumer";case ru:return(e._context.displayName||"Context")+".Provider";case yl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wl:return t=e.displayName||null,t!==null?t:yo(e.type)||"Memo";case tt:t=e._payload,e=e._init;try{return yo(e(t))}catch{}}return null}function Zd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yo(t);case 8:return t===xl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xd(e){var t=lu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yr(e){e._valueTracker||(e._valueTracker=Xd(e))}function au(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=lu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wo(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ga(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function su(e,t){t=t.checked,t!=null&&vl(e,"checked",t,!1)}function ko(e,t){su(e,t);var n=yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?jo(e,t.type,n):t.hasOwnProperty("defaultValue")&&jo(e,t.type,yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function va(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function jo(e,t,n){(t!=="number"||Qr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ln=Array.isArray;function tn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+yt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function So(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Ln(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yt(n)}}function uu(e,t){var n=yt(t.value),r=yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ya(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function cu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Co(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?cu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wr,du=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wr=wr||document.createElement("div"),wr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var In={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jd=["Webkit","ms","Moz","O"];Object.keys(In).forEach(function(e){Jd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),In[t]=In[e]})});function pu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||In.hasOwnProperty(e)&&In[e]?(""+t).trim():t+"px"}function fu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=pu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var qd=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function No(e,t){if(t){if(qd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Eo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bo=null;function kl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Po=null,nn=null,rn=null;function wa(e){if(e=dr(e)){if(typeof Po!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Ni(t),Po(e.stateNode,e.type,t))}}function hu(e){nn?rn?rn.push(e):rn=[e]:nn=e}function mu(){if(nn){var e=nn,t=rn;if(rn=nn=null,wa(e),t)for(e=0;e<t.length;e++)wa(t[e])}}function gu(e,t){return e(t)}function vu(){}var Vi=!1;function xu(e,t,n){if(Vi)return e(t,n);Vi=!0;try{return gu(e,t,n)}finally{Vi=!1,(nn!==null||rn!==null)&&(vu(),mu())}}function Yn(e,t){var n=e.stateNode;if(n===null)return null;var r=Ni(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var zo=!1;if(Ke)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){zo=!0}}),window.addEventListener("test",jn,jn),window.removeEventListener("test",jn,jn)}catch{zo=!1}function ep(e,t,n,r,i,o,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var Mn=!1,Gr=null,Kr=!1,Lo=null,tp={onError:function(e){Mn=!0,Gr=e}};function np(e,t,n,r,i,o,l,s,u){Mn=!1,Gr=null,ep.apply(tp,arguments)}function rp(e,t,n,r,i,o,l,s,u){if(np.apply(this,arguments),Mn){if(Mn){var c=Gr;Mn=!1,Gr=null}else throw Error(k(198));Kr||(Kr=!0,Lo=c)}}function Ut(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function yu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ka(e){if(Ut(e)!==e)throw Error(k(188))}function ip(e){var t=e.alternate;if(!t){if(t=Ut(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ka(i),e;if(o===r)return ka(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function wu(e){return e=ip(e),e!==null?ku(e):null}function ku(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ku(e);if(t!==null)return t;e=e.sibling}return null}var ju=ke.unstable_scheduleCallback,ja=ke.unstable_cancelCallback,op=ke.unstable_shouldYield,lp=ke.unstable_requestPaint,K=ke.unstable_now,ap=ke.unstable_getCurrentPriorityLevel,jl=ke.unstable_ImmediatePriority,Su=ke.unstable_UserBlockingPriority,$r=ke.unstable_NormalPriority,sp=ke.unstable_LowPriority,Cu=ke.unstable_IdlePriority,ki=null,We=null;function up(e){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(ki,e,void 0,(e.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:pp,cp=Math.log,dp=Math.LN2;function pp(e){return e>>>=0,e===0?32:31-(cp(e)/dp|0)|0}var kr=64,jr=4194304;function Rn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=Rn(s):(o&=l,o!==0&&(r=Rn(o)))}else l=n&~i,l!==0?r=Rn(l):o!==0&&(r=Rn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ae(t),i=1<<n,r|=e[n],t&=~i;return r}function fp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ae(o),s=1<<l,u=i[l];u===-1?(!(s&n)||s&r)&&(i[l]=fp(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function Ro(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Nu(){var e=kr;return kr<<=1,!(kr&4194240)&&(kr=64),e}function Yi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ur(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ae(t),e[t]=n}function mp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ae(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Sl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ae(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var A=0;function Eu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var bu,Cl,Pu,zu,Lu,To=!1,Sr=[],ct=null,dt=null,pt=null,Qn=new Map,Gn=new Map,it=[],gp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sa(e,t){switch(e){case"focusin":case"focusout":ct=null;break;case"dragenter":case"dragleave":dt=null;break;case"mouseover":case"mouseout":pt=null;break;case"pointerover":case"pointerout":Qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gn.delete(t.pointerId)}}function Sn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=dr(t),t!==null&&Cl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function vp(e,t,n,r,i){switch(t){case"focusin":return ct=Sn(ct,e,t,n,r,i),!0;case"dragenter":return dt=Sn(dt,e,t,n,r,i),!0;case"mouseover":return pt=Sn(pt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Qn.set(o,Sn(Qn.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Gn.set(o,Sn(Gn.get(o)||null,e,t,n,r,i)),!0}return!1}function Ru(e){var t=zt(e.target);if(t!==null){var n=Ut(t);if(n!==null){if(t=n.tag,t===13){if(t=yu(n),t!==null){e.blockedOn=t,Lu(e.priority,function(){Pu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _r(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Io(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);bo=r,n.target.dispatchEvent(r),bo=null}else return t=dr(n),t!==null&&Cl(t),e.blockedOn=n,!1;t.shift()}return!0}function Ca(e,t,n){_r(e)&&n.delete(t)}function xp(){To=!1,ct!==null&&_r(ct)&&(ct=null),dt!==null&&_r(dt)&&(dt=null),pt!==null&&_r(pt)&&(pt=null),Qn.forEach(Ca),Gn.forEach(Ca)}function Cn(e,t){e.blockedOn===t&&(e.blockedOn=null,To||(To=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,xp)))}function Kn(e){function t(i){return Cn(i,e)}if(0<Sr.length){Cn(Sr[0],e);for(var n=1;n<Sr.length;n++){var r=Sr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ct!==null&&Cn(ct,e),dt!==null&&Cn(dt,e),pt!==null&&Cn(pt,e),Qn.forEach(t),Gn.forEach(t),n=0;n<it.length;n++)r=it[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<it.length&&(n=it[0],n.blockedOn===null);)Ru(n),n.blockedOn===null&&it.shift()}var on=Je.ReactCurrentBatchConfig,Xr=!0;function yp(e,t,n,r){var i=A,o=on.transition;on.transition=null;try{A=1,Nl(e,t,n,r)}finally{A=i,on.transition=o}}function wp(e,t,n,r){var i=A,o=on.transition;on.transition=null;try{A=4,Nl(e,t,n,r)}finally{A=i,on.transition=o}}function Nl(e,t,n,r){if(Xr){var i=Io(e,t,n,r);if(i===null)to(e,t,r,Jr,n),Sa(e,r);else if(vp(i,e,t,n,r))r.stopPropagation();else if(Sa(e,r),t&4&&-1<gp.indexOf(e)){for(;i!==null;){var o=dr(i);if(o!==null&&bu(o),o=Io(e,t,n,r),o===null&&to(e,t,r,Jr,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else to(e,t,r,null,n)}}var Jr=null;function Io(e,t,n,r){if(Jr=null,e=kl(r),e=zt(e),e!==null)if(t=Ut(e),t===null)e=null;else if(n=t.tag,n===13){if(e=yu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jr=e,null}function Tu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ap()){case jl:return 1;case Su:return 4;case $r:case sp:return 16;case Cu:return 536870912;default:return 16}default:return 16}}var lt=null,El=null,Or=null;function Iu(){if(Or)return Or;var e,t=El,n=t.length,r,i="value"in lt?lt.value:lt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Or=i.slice(e,1<r?1-r:void 0)}function Dr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cr(){return!0}function Na(){return!1}function Se(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Cr:Na,this.isPropagationStopped=Na,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cr)},persist:function(){},isPersistent:Cr}),t}var gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bl=Se(gn),cr=V({},gn,{view:0,detail:0}),kp=Se(cr),Qi,Gi,Nn,ji=V({},cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nn&&(Nn&&e.type==="mousemove"?(Qi=e.screenX-Nn.screenX,Gi=e.screenY-Nn.screenY):Gi=Qi=0,Nn=e),Qi)},movementY:function(e){return"movementY"in e?e.movementY:Gi}}),Ea=Se(ji),jp=V({},ji,{dataTransfer:0}),Sp=Se(jp),Cp=V({},cr,{relatedTarget:0}),Ki=Se(Cp),Np=V({},gn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ep=Se(Np),bp=V({},gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pp=Se(bp),zp=V({},gn,{data:0}),ba=Se(zp),Lp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ip(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Tp[e])?!!t[e]:!1}function Pl(){return Ip}var Mp=V({},cr,{key:function(e){if(e.key){var t=Lp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Dr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pl,charCode:function(e){return e.type==="keypress"?Dr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ap=Se(Mp),_p=V({},ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pa=Se(_p),Op=V({},cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pl}),Dp=Se(Op),Fp=V({},gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Up=Se(Fp),Wp=V({},ji,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bp=Se(Wp),Hp=[9,13,27,32],zl=Ke&&"CompositionEvent"in window,An=null;Ke&&"documentMode"in document&&(An=document.documentMode);var Vp=Ke&&"TextEvent"in window&&!An,Mu=Ke&&(!zl||An&&8<An&&11>=An),za=" ",La=!1;function Au(e,t){switch(e){case"keyup":return Hp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _u(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yt=!1;function Yp(e,t){switch(e){case"compositionend":return _u(t);case"keypress":return t.which!==32?null:(La=!0,za);case"textInput":return e=t.data,e===za&&La?null:e;default:return null}}function Qp(e,t){if(Yt)return e==="compositionend"||!zl&&Au(e,t)?(e=Iu(),Or=El=lt=null,Yt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mu&&t.locale!=="ko"?null:t.data;default:return null}}var Gp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ra(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gp[e.type]:t==="textarea"}function Ou(e,t,n,r){hu(r),t=qr(t,"onChange"),0<t.length&&(n=new bl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _n=null,$n=null;function Kp(e){Ku(e,0)}function Si(e){var t=Kt(e);if(au(t))return e}function $p(e,t){if(e==="change")return t}var Du=!1;if(Ke){var $i;if(Ke){var Zi="oninput"in document;if(!Zi){var Ta=document.createElement("div");Ta.setAttribute("oninput","return;"),Zi=typeof Ta.oninput=="function"}$i=Zi}else $i=!1;Du=$i&&(!document.documentMode||9<document.documentMode)}function Ia(){_n&&(_n.detachEvent("onpropertychange",Fu),$n=_n=null)}function Fu(e){if(e.propertyName==="value"&&Si($n)){var t=[];Ou(t,$n,e,kl(e)),xu(Kp,t)}}function Zp(e,t,n){e==="focusin"?(Ia(),_n=t,$n=n,_n.attachEvent("onpropertychange",Fu)):e==="focusout"&&Ia()}function Xp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Si($n)}function Jp(e,t){if(e==="click")return Si(t)}function qp(e,t){if(e==="input"||e==="change")return Si(t)}function ef(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Oe=typeof Object.is=="function"?Object.is:ef;function Zn(e,t){if(Oe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!mo.call(t,i)||!Oe(e[i],t[i]))return!1}return!0}function Ma(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Aa(e,t){var n=Ma(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ma(n)}}function Uu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Uu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wu(){for(var e=window,t=Qr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qr(e.document)}return t}function Ll(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function tf(e){var t=Wu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Uu(n.ownerDocument.documentElement,n)){if(r!==null&&Ll(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Aa(n,o);var l=Aa(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var nf=Ke&&"documentMode"in document&&11>=document.documentMode,Qt=null,Mo=null,On=null,Ao=!1;function _a(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ao||Qt==null||Qt!==Qr(r)||(r=Qt,"selectionStart"in r&&Ll(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),On&&Zn(On,r)||(On=r,r=qr(Mo,"onSelect"),0<r.length&&(t=new bl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qt)))}function Nr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gt={animationend:Nr("Animation","AnimationEnd"),animationiteration:Nr("Animation","AnimationIteration"),animationstart:Nr("Animation","AnimationStart"),transitionend:Nr("Transition","TransitionEnd")},Xi={},Bu={};Ke&&(Bu=document.createElement("div").style,"AnimationEvent"in window||(delete Gt.animationend.animation,delete Gt.animationiteration.animation,delete Gt.animationstart.animation),"TransitionEvent"in window||delete Gt.transitionend.transition);function Ci(e){if(Xi[e])return Xi[e];if(!Gt[e])return e;var t=Gt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Bu)return Xi[e]=t[n];return e}var Hu=Ci("animationend"),Vu=Ci("animationiteration"),Yu=Ci("animationstart"),Qu=Ci("transitionend"),Gu=new Map,Oa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kt(e,t){Gu.set(e,t),Ft(t,[e])}for(var Ji=0;Ji<Oa.length;Ji++){var qi=Oa[Ji],rf=qi.toLowerCase(),of=qi[0].toUpperCase()+qi.slice(1);kt(rf,"on"+of)}kt(Hu,"onAnimationEnd");kt(Vu,"onAnimationIteration");kt(Yu,"onAnimationStart");kt("dblclick","onDoubleClick");kt("focusin","onFocus");kt("focusout","onBlur");kt(Qu,"onTransitionEnd");sn("onMouseEnter",["mouseout","mouseover"]);sn("onMouseLeave",["mouseout","mouseover"]);sn("onPointerEnter",["pointerout","pointerover"]);sn("onPointerLeave",["pointerout","pointerover"]);Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));function Da(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rp(r,t,void 0,e),e.currentTarget=null}function Ku(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;Da(i,s,c),o=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;Da(i,s,c),o=u}}}if(Kr)throw e=Lo,Kr=!1,Lo=null,e}function O(e,t){var n=t[Uo];n===void 0&&(n=t[Uo]=new Set);var r=e+"__bubble";n.has(r)||($u(t,e,2,!1),n.add(r))}function eo(e,t,n){var r=0;t&&(r|=4),$u(n,e,r,t)}var Er="_reactListening"+Math.random().toString(36).slice(2);function Xn(e){if(!e[Er]){e[Er]=!0,nu.forEach(function(n){n!=="selectionchange"&&(lf.has(n)||eo(n,!1,e),eo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Er]||(t[Er]=!0,eo("selectionchange",!1,t))}}function $u(e,t,n,r){switch(Tu(t)){case 1:var i=yp;break;case 4:i=wp;break;default:i=Nl}n=i.bind(null,t,n,e),i=void 0,!zo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function to(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;s!==null;){if(l=zt(s),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}s=s.parentNode}}r=r.return}xu(function(){var c=o,f=kl(n),d=[];e:{var m=Gu.get(e);if(m!==void 0){var x=bl,y=e;switch(e){case"keypress":if(Dr(n)===0)break e;case"keydown":case"keyup":x=Ap;break;case"focusin":y="focus",x=Ki;break;case"focusout":y="blur",x=Ki;break;case"beforeblur":case"afterblur":x=Ki;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ea;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Sp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Dp;break;case Hu:case Vu:case Yu:x=Ep;break;case Qu:x=Up;break;case"scroll":x=kp;break;case"wheel":x=Bp;break;case"copy":case"cut":case"paste":x=Pp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Pa}var w=(t&4)!==0,C=!w&&e==="scroll",h=w?m!==null?m+"Capture":null:m;w=[];for(var p=c,g;p!==null;){g=p;var v=g.stateNode;if(g.tag===5&&v!==null&&(g=v,h!==null&&(v=Yn(p,h),v!=null&&w.push(Jn(p,v,g)))),C)break;p=p.return}0<w.length&&(m=new x(m,y,null,n,f),d.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==bo&&(y=n.relatedTarget||n.fromElement)&&(zt(y)||y[$e]))break e;if((x||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=c,y=y?zt(y):null,y!==null&&(C=Ut(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=c),x!==y)){if(w=Ea,v="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=Pa,v="onPointerLeave",h="onPointerEnter",p="pointer"),C=x==null?m:Kt(x),g=y==null?m:Kt(y),m=new w(v,p+"leave",x,n,f),m.target=C,m.relatedTarget=g,v=null,zt(f)===c&&(w=new w(h,p+"enter",y,n,f),w.target=g,w.relatedTarget=C,v=w),C=v,x&&y)t:{for(w=x,h=y,p=0,g=w;g;g=Bt(g))p++;for(g=0,v=h;v;v=Bt(v))g++;for(;0<p-g;)w=Bt(w),p--;for(;0<g-p;)h=Bt(h),g--;for(;p--;){if(w===h||h!==null&&w===h.alternate)break t;w=Bt(w),h=Bt(h)}w=null}else w=null;x!==null&&Fa(d,m,x,w,!1),y!==null&&C!==null&&Fa(d,C,y,w,!0)}}e:{if(m=c?Kt(c):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var S=$p;else if(Ra(m))if(Du)S=qp;else{S=Xp;var b=Zp}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=Jp);if(S&&(S=S(e,c))){Ou(d,S,n,f);break e}b&&b(e,m,c),e==="focusout"&&(b=m._wrapperState)&&b.controlled&&m.type==="number"&&jo(m,"number",m.value)}switch(b=c?Kt(c):window,e){case"focusin":(Ra(b)||b.contentEditable==="true")&&(Qt=b,Mo=c,On=null);break;case"focusout":On=Mo=Qt=null;break;case"mousedown":Ao=!0;break;case"contextmenu":case"mouseup":case"dragend":Ao=!1,_a(d,n,f);break;case"selectionchange":if(nf)break;case"keydown":case"keyup":_a(d,n,f)}var P;if(zl)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Yt?Au(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Mu&&n.locale!=="ko"&&(Yt||z!=="onCompositionStart"?z==="onCompositionEnd"&&Yt&&(P=Iu()):(lt=f,El="value"in lt?lt.value:lt.textContent,Yt=!0)),b=qr(c,z),0<b.length&&(z=new ba(z,e,null,n,f),d.push({event:z,listeners:b}),P?z.data=P:(P=_u(n),P!==null&&(z.data=P)))),(P=Vp?Yp(e,n):Qp(e,n))&&(c=qr(c,"onBeforeInput"),0<c.length&&(f=new ba("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=P))}Ku(d,t)})}function Jn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Yn(e,n),o!=null&&r.unshift(Jn(e,o,i)),o=Yn(e,t),o!=null&&r.push(Jn(e,o,i))),e=e.return}return r}function Bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fa(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,i?(u=Yn(n,o),u!=null&&l.unshift(Jn(n,u,s))):i||(u=Yn(n,o),u!=null&&l.push(Jn(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var af=/\r\n?/g,sf=/\u0000|\uFFFD/g;function Ua(e){return(typeof e=="string"?e:""+e).replace(af,`
`).replace(sf,"")}function br(e,t,n){if(t=Ua(t),Ua(e)!==t&&n)throw Error(k(425))}function ei(){}var _o=null,Oo=null;function Do(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fo=typeof setTimeout=="function"?setTimeout:void 0,uf=typeof clearTimeout=="function"?clearTimeout:void 0,Wa=typeof Promise=="function"?Promise:void 0,cf=typeof queueMicrotask=="function"?queueMicrotask:typeof Wa<"u"?function(e){return Wa.resolve(null).then(e).catch(df)}:Fo;function df(e){setTimeout(function(){throw e})}function no(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Kn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Kn(t)}function ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ba(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vn=Math.random().toString(36).slice(2),Ue="__reactFiber$"+vn,qn="__reactProps$"+vn,$e="__reactContainer$"+vn,Uo="__reactEvents$"+vn,pf="__reactListeners$"+vn,ff="__reactHandles$"+vn;function zt(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$e]||n[Ue]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ba(e);e!==null;){if(n=e[Ue])return n;e=Ba(e)}return t}e=n,n=e.parentNode}return null}function dr(e){return e=e[Ue]||e[$e],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Ni(e){return e[qn]||null}var Wo=[],$t=-1;function jt(e){return{current:e}}function F(e){0>$t||(e.current=Wo[$t],Wo[$t]=null,$t--)}function _(e,t){$t++,Wo[$t]=e.current,e.current=t}var wt={},se=jt(wt),me=jt(!1),Mt=wt;function un(e,t){var n=e.type.contextTypes;if(!n)return wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ge(e){return e=e.childContextTypes,e!=null}function ti(){F(me),F(se)}function Ha(e,t,n){if(se.current!==wt)throw Error(k(168));_(se,t),_(me,n)}function Zu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,Zd(e)||"Unknown",i));return V({},n,r)}function ni(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wt,Mt=se.current,_(se,e),_(me,me.current),!0}function Va(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Zu(e,t,Mt),r.__reactInternalMemoizedMergedChildContext=e,F(me),F(se),_(se,e)):F(me),_(me,n)}var Ve=null,Ei=!1,ro=!1;function Xu(e){Ve===null?Ve=[e]:Ve.push(e)}function hf(e){Ei=!0,Xu(e)}function St(){if(!ro&&Ve!==null){ro=!0;var e=0,t=A;try{var n=Ve;for(A=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ve=null,Ei=!1}catch(i){throw Ve!==null&&(Ve=Ve.slice(e+1)),ju(jl,St),i}finally{A=t,ro=!1}}return null}var Zt=[],Xt=0,ri=null,ii=0,Ce=[],Ne=0,At=null,Ye=1,Qe="";function bt(e,t){Zt[Xt++]=ii,Zt[Xt++]=ri,ri=e,ii=t}function Ju(e,t,n){Ce[Ne++]=Ye,Ce[Ne++]=Qe,Ce[Ne++]=At,At=e;var r=Ye;e=Qe;var i=32-Ae(r)-1;r&=~(1<<i),n+=1;var o=32-Ae(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Ye=1<<32-Ae(t)+i|n<<i|r,Qe=o+e}else Ye=1<<o|n<<i|r,Qe=e}function Rl(e){e.return!==null&&(bt(e,1),Ju(e,1,0))}function Tl(e){for(;e===ri;)ri=Zt[--Xt],Zt[Xt]=null,ii=Zt[--Xt],Zt[Xt]=null;for(;e===At;)At=Ce[--Ne],Ce[Ne]=null,Qe=Ce[--Ne],Ce[Ne]=null,Ye=Ce[--Ne],Ce[Ne]=null}var we=null,ye=null,U=!1,Me=null;function qu(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ya(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,ye=ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=At!==null?{id:Ye,overflow:Qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,we=e,ye=null,!0):!1;default:return!1}}function Bo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ho(e){if(U){var t=ye;if(t){var n=t;if(!Ya(e,t)){if(Bo(e))throw Error(k(418));t=ft(n.nextSibling);var r=we;t&&Ya(e,t)?qu(r,n):(e.flags=e.flags&-4097|2,U=!1,we=e)}}else{if(Bo(e))throw Error(k(418));e.flags=e.flags&-4097|2,U=!1,we=e}}}function Qa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function Pr(e){if(e!==we)return!1;if(!U)return Qa(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Do(e.type,e.memoizedProps)),t&&(t=ye)){if(Bo(e))throw ec(),Error(k(418));for(;t;)qu(e,t),t=ft(t.nextSibling)}if(Qa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=we?ft(e.stateNode.nextSibling):null;return!0}function ec(){for(var e=ye;e;)e=ft(e.nextSibling)}function cn(){ye=we=null,U=!1}function Il(e){Me===null?Me=[e]:Me.push(e)}var mf=Je.ReactCurrentBatchConfig;function En(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function zr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ga(e){var t=e._init;return t(e._payload)}function tc(e){function t(h,p){if(e){var g=h.deletions;g===null?(h.deletions=[p],h.flags|=16):g.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=vt(h,p),h.index=0,h.sibling=null,h}function o(h,p,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<p?(h.flags|=2,p):g):(h.flags|=2,p)):(h.flags|=1048576,p)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,p,g,v){return p===null||p.tag!==6?(p=co(g,h.mode,v),p.return=h,p):(p=i(p,g),p.return=h,p)}function u(h,p,g,v){var S=g.type;return S===Vt?f(h,p,g.props.children,v,g.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===tt&&Ga(S)===p.type)?(v=i(p,g.props),v.ref=En(h,p,g),v.return=h,v):(v=Yr(g.type,g.key,g.props,null,h.mode,v),v.ref=En(h,p,g),v.return=h,v)}function c(h,p,g,v){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=po(g,h.mode,v),p.return=h,p):(p=i(p,g.children||[]),p.return=h,p)}function f(h,p,g,v,S){return p===null||p.tag!==7?(p=It(g,h.mode,v,S),p.return=h,p):(p=i(p,g),p.return=h,p)}function d(h,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=co(""+p,h.mode,g),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case xr:return g=Yr(p.type,p.key,p.props,null,h.mode,g),g.ref=En(h,null,p),g.return=h,g;case Ht:return p=po(p,h.mode,g),p.return=h,p;case tt:var v=p._init;return d(h,v(p._payload),g)}if(Ln(p)||kn(p))return p=It(p,h.mode,g,null),p.return=h,p;zr(h,p)}return null}function m(h,p,g,v){var S=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:s(h,p,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case xr:return g.key===S?u(h,p,g,v):null;case Ht:return g.key===S?c(h,p,g,v):null;case tt:return S=g._init,m(h,p,S(g._payload),v)}if(Ln(g)||kn(g))return S!==null?null:f(h,p,g,v,null);zr(h,g)}return null}function x(h,p,g,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return h=h.get(g)||null,s(p,h,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case xr:return h=h.get(v.key===null?g:v.key)||null,u(p,h,v,S);case Ht:return h=h.get(v.key===null?g:v.key)||null,c(p,h,v,S);case tt:var b=v._init;return x(h,p,g,b(v._payload),S)}if(Ln(v)||kn(v))return h=h.get(g)||null,f(p,h,v,S,null);zr(p,v)}return null}function y(h,p,g,v){for(var S=null,b=null,P=p,z=p=0,Q=null;P!==null&&z<g.length;z++){P.index>z?(Q=P,P=null):Q=P.sibling;var I=m(h,P,g[z],v);if(I===null){P===null&&(P=Q);break}e&&P&&I.alternate===null&&t(h,P),p=o(I,p,z),b===null?S=I:b.sibling=I,b=I,P=Q}if(z===g.length)return n(h,P),U&&bt(h,z),S;if(P===null){for(;z<g.length;z++)P=d(h,g[z],v),P!==null&&(p=o(P,p,z),b===null?S=P:b.sibling=P,b=P);return U&&bt(h,z),S}for(P=r(h,P);z<g.length;z++)Q=x(P,h,z,g[z],v),Q!==null&&(e&&Q.alternate!==null&&P.delete(Q.key===null?z:Q.key),p=o(Q,p,z),b===null?S=Q:b.sibling=Q,b=Q);return e&&P.forEach(function(Le){return t(h,Le)}),U&&bt(h,z),S}function w(h,p,g,v){var S=kn(g);if(typeof S!="function")throw Error(k(150));if(g=S.call(g),g==null)throw Error(k(151));for(var b=S=null,P=p,z=p=0,Q=null,I=g.next();P!==null&&!I.done;z++,I=g.next()){P.index>z?(Q=P,P=null):Q=P.sibling;var Le=m(h,P,I.value,v);if(Le===null){P===null&&(P=Q);break}e&&P&&Le.alternate===null&&t(h,P),p=o(Le,p,z),b===null?S=Le:b.sibling=Le,b=Le,P=Q}if(I.done)return n(h,P),U&&bt(h,z),S;if(P===null){for(;!I.done;z++,I=g.next())I=d(h,I.value,v),I!==null&&(p=o(I,p,z),b===null?S=I:b.sibling=I,b=I);return U&&bt(h,z),S}for(P=r(h,P);!I.done;z++,I=g.next())I=x(P,h,z,I.value,v),I!==null&&(e&&I.alternate!==null&&P.delete(I.key===null?z:I.key),p=o(I,p,z),b===null?S=I:b.sibling=I,b=I);return e&&P.forEach(function(yn){return t(h,yn)}),U&&bt(h,z),S}function C(h,p,g,v){if(typeof g=="object"&&g!==null&&g.type===Vt&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case xr:e:{for(var S=g.key,b=p;b!==null;){if(b.key===S){if(S=g.type,S===Vt){if(b.tag===7){n(h,b.sibling),p=i(b,g.props.children),p.return=h,h=p;break e}}else if(b.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===tt&&Ga(S)===b.type){n(h,b.sibling),p=i(b,g.props),p.ref=En(h,b,g),p.return=h,h=p;break e}n(h,b);break}else t(h,b);b=b.sibling}g.type===Vt?(p=It(g.props.children,h.mode,v,g.key),p.return=h,h=p):(v=Yr(g.type,g.key,g.props,null,h.mode,v),v.ref=En(h,p,g),v.return=h,h=v)}return l(h);case Ht:e:{for(b=g.key;p!==null;){if(p.key===b)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(h,p.sibling),p=i(p,g.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=po(g,h.mode,v),p.return=h,h=p}return l(h);case tt:return b=g._init,C(h,p,b(g._payload),v)}if(Ln(g))return y(h,p,g,v);if(kn(g))return w(h,p,g,v);zr(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,g),p.return=h,h=p):(n(h,p),p=co(g,h.mode,v),p.return=h,h=p),l(h)):n(h,p)}return C}var dn=tc(!0),nc=tc(!1),oi=jt(null),li=null,Jt=null,Ml=null;function Al(){Ml=Jt=li=null}function _l(e){var t=oi.current;F(oi),e._currentValue=t}function Vo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ln(e,t){li=e,Ml=Jt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function Pe(e){var t=e._currentValue;if(Ml!==e)if(e={context:e,memoizedValue:t,next:null},Jt===null){if(li===null)throw Error(k(308));Jt=e,li.dependencies={lanes:0,firstContext:e}}else Jt=Jt.next=e;return t}var Lt=null;function Ol(e){Lt===null?Lt=[e]:Lt.push(e)}function rc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ol(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ze(e,r)}function Ze(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nt=!1;function Dl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ic(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ht(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ze(e,n)}return i=r.interleaved,i===null?(t.next=t,Ol(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ze(e,n)}function Fr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sl(e,n)}}function Ka(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ai(e,t,n,r){var i=e.updateQueue;nt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==l&&(s===null?f.firstBaseUpdate=c:s.next=c,f.lastBaseUpdate=u))}if(o!==null){var d=i.baseState;l=0,f=c=u=null,s=o;do{var m=s.lane,x=s.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,w=s;switch(m=t,x=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){d=y.call(x,d,m);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,m=typeof y=="function"?y.call(x,d,m):y,m==null)break e;d=V({},d,m);break e;case 2:nt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[s]:m.push(s))}else x={eventTime:x,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(c=f=x,u=d):f=f.next=x,l|=m;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(u=d),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Ot|=l,e.lanes=l,e.memoizedState=d}}function $a(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var pr={},Be=jt(pr),er=jt(pr),tr=jt(pr);function Rt(e){if(e===pr)throw Error(k(174));return e}function Fl(e,t){switch(_(tr,t),_(er,e),_(Be,pr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Co(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Co(t,e)}F(Be),_(Be,t)}function pn(){F(Be),F(er),F(tr)}function oc(e){Rt(tr.current);var t=Rt(Be.current),n=Co(t,e.type);t!==n&&(_(er,e),_(Be,n))}function Ul(e){er.current===e&&(F(Be),F(er))}var B=jt(0);function si(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var io=[];function Wl(){for(var e=0;e<io.length;e++)io[e]._workInProgressVersionPrimary=null;io.length=0}var Ur=Je.ReactCurrentDispatcher,oo=Je.ReactCurrentBatchConfig,_t=0,H=null,X=null,ee=null,ui=!1,Dn=!1,nr=0,gf=0;function oe(){throw Error(k(321))}function Bl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Oe(e[n],t[n]))return!1;return!0}function Hl(e,t,n,r,i,o){if(_t=o,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ur.current=e===null||e.memoizedState===null?wf:kf,e=n(r,i),Dn){o=0;do{if(Dn=!1,nr=0,25<=o)throw Error(k(301));o+=1,ee=X=null,t.updateQueue=null,Ur.current=jf,e=n(r,i)}while(Dn)}if(Ur.current=ci,t=X!==null&&X.next!==null,_t=0,ee=X=H=null,ui=!1,t)throw Error(k(300));return e}function Vl(){var e=nr!==0;return nr=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?H.memoizedState=ee=e:ee=ee.next=e,ee}function ze(){if(X===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=ee===null?H.memoizedState:ee.next;if(t!==null)ee=t,X=e;else{if(e===null)throw Error(k(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},ee===null?H.memoizedState=ee=e:ee=ee.next=e}return ee}function rr(e,t){return typeof t=="function"?t(e):t}function lo(e){var t=ze(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=X,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,u=null,c=o;do{var f=c.lane;if((_t&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=d,l=r):u=u.next=d,H.lanes|=f,Ot|=f}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=s,Oe(r,t.memoizedState)||(he=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,H.lanes|=o,Ot|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ao(e){var t=ze(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Oe(o,t.memoizedState)||(he=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function lc(){}function ac(e,t){var n=H,r=ze(),i=t(),o=!Oe(r.memoizedState,i);if(o&&(r.memoizedState=i,he=!0),r=r.queue,Yl(cc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,ir(9,uc.bind(null,n,r,i,t),void 0,null),te===null)throw Error(k(349));_t&30||sc(n,t,i)}return i}function sc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function uc(e,t,n,r){t.value=n,t.getSnapshot=r,dc(t)&&pc(e)}function cc(e,t,n){return n(function(){dc(t)&&pc(e)})}function dc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Oe(e,n)}catch{return!0}}function pc(e){var t=Ze(e,1);t!==null&&_e(t,e,1,-1)}function Za(e){var t=Fe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rr,lastRenderedState:e},t.queue=e,e=e.dispatch=yf.bind(null,H,e),[t.memoizedState,e]}function ir(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function fc(){return ze().memoizedState}function Wr(e,t,n,r){var i=Fe();H.flags|=e,i.memoizedState=ir(1|t,n,void 0,r===void 0?null:r)}function bi(e,t,n,r){var i=ze();r=r===void 0?null:r;var o=void 0;if(X!==null){var l=X.memoizedState;if(o=l.destroy,r!==null&&Bl(r,l.deps)){i.memoizedState=ir(t,n,o,r);return}}H.flags|=e,i.memoizedState=ir(1|t,n,o,r)}function Xa(e,t){return Wr(8390656,8,e,t)}function Yl(e,t){return bi(2048,8,e,t)}function hc(e,t){return bi(4,2,e,t)}function mc(e,t){return bi(4,4,e,t)}function gc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vc(e,t,n){return n=n!=null?n.concat([e]):null,bi(4,4,gc.bind(null,t,e),n)}function Ql(){}function xc(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function yc(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function wc(e,t,n){return _t&21?(Oe(n,t)||(n=Nu(),H.lanes|=n,Ot|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=n)}function vf(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var r=oo.transition;oo.transition={};try{e(!1),t()}finally{A=n,oo.transition=r}}function kc(){return ze().memoizedState}function xf(e,t,n){var r=gt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jc(e))Sc(t,n);else if(n=rc(e,t,n,r),n!==null){var i=ce();_e(n,e,r,i),Cc(n,t,r)}}function yf(e,t,n){var r=gt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jc(e))Sc(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,Oe(s,l)){var u=t.interleaved;u===null?(i.next=i,Ol(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=rc(e,t,i,r),n!==null&&(i=ce(),_e(n,e,r,i),Cc(n,t,r))}}function jc(e){var t=e.alternate;return e===H||t!==null&&t===H}function Sc(e,t){Dn=ui=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Cc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sl(e,n)}}var ci={readContext:Pe,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},wf={readContext:Pe,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:Xa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wr(4194308,4,gc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wr(4,2,e,t)},useMemo:function(e,t){var n=Fe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Fe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=xf.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:Za,useDebugValue:Ql,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=Za(!1),t=e[0];return e=vf.bind(null,e[1]),Fe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,i=Fe();if(U){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),te===null)throw Error(k(349));_t&30||sc(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Xa(cc.bind(null,r,o,e),[e]),r.flags|=2048,ir(9,uc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Fe(),t=te.identifierPrefix;if(U){var n=Qe,r=Ye;n=(r&~(1<<32-Ae(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=nr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=gf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},kf={readContext:Pe,useCallback:xc,useContext:Pe,useEffect:Yl,useImperativeHandle:vc,useInsertionEffect:hc,useLayoutEffect:mc,useMemo:yc,useReducer:lo,useRef:fc,useState:function(){return lo(rr)},useDebugValue:Ql,useDeferredValue:function(e){var t=ze();return wc(t,X.memoizedState,e)},useTransition:function(){var e=lo(rr)[0],t=ze().memoizedState;return[e,t]},useMutableSource:lc,useSyncExternalStore:ac,useId:kc,unstable_isNewReconciler:!1},jf={readContext:Pe,useCallback:xc,useContext:Pe,useEffect:Yl,useImperativeHandle:vc,useInsertionEffect:hc,useLayoutEffect:mc,useMemo:yc,useReducer:ao,useRef:fc,useState:function(){return ao(rr)},useDebugValue:Ql,useDeferredValue:function(e){var t=ze();return X===null?t.memoizedState=e:wc(t,X.memoizedState,e)},useTransition:function(){var e=ao(rr)[0],t=ze().memoizedState;return[e,t]},useMutableSource:lc,useSyncExternalStore:ac,useId:kc,unstable_isNewReconciler:!1};function Te(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Yo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pi={isMounted:function(e){return(e=e._reactInternals)?Ut(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),i=gt(e),o=Ge(r,i);o.payload=t,n!=null&&(o.callback=n),t=ht(e,o,i),t!==null&&(_e(t,e,i,r),Fr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),i=gt(e),o=Ge(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ht(e,o,i),t!==null&&(_e(t,e,i,r),Fr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=gt(e),i=Ge(n,r);i.tag=2,t!=null&&(i.callback=t),t=ht(e,i,r),t!==null&&(_e(t,e,r,n),Fr(t,e,r))}};function Ja(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Zn(n,r)||!Zn(i,o):!0}function Nc(e,t,n){var r=!1,i=wt,o=t.contextType;return typeof o=="object"&&o!==null?o=Pe(o):(i=ge(t)?Mt:se.current,r=t.contextTypes,o=(r=r!=null)?un(e,i):wt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function qa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Pi.enqueueReplaceState(t,t.state,null)}function Qo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Dl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Pe(o):(o=ge(t)?Mt:se.current,i.context=un(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Yo(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Pi.enqueueReplaceState(i,i.state,null),ai(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function fn(e,t){try{var n="",r=t;do n+=$d(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function so(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Go(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Sf=typeof WeakMap=="function"?WeakMap:Map;function Ec(e,t,n){n=Ge(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){pi||(pi=!0,rl=r),Go(e,t)},n}function bc(e,t,n){n=Ge(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Go(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Go(e,t),typeof r!="function"&&(mt===null?mt=new Set([this]):mt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function es(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Sf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Of.bind(null,e,t,n),t.then(e,e))}function ts(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ns(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ge(-1,1),t.tag=2,ht(n,t,1))),n.lanes|=1),e)}var Cf=Je.ReactCurrentOwner,he=!1;function ue(e,t,n,r){t.child=e===null?nc(t,null,n,r):dn(t,e.child,n,r)}function rs(e,t,n,r,i){n=n.render;var o=t.ref;return ln(t,i),r=Hl(e,t,n,r,o,i),n=Vl(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xe(e,t,i)):(U&&n&&Rl(t),t.flags|=1,ue(e,t,r,i),t.child)}function is(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ea(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Pc(e,t,o,r,i)):(e=Yr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Zn,n(l,r)&&e.ref===t.ref)return Xe(e,t,i)}return t.flags|=1,e=vt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Pc(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Zn(o,r)&&e.ref===t.ref)if(he=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,Xe(e,t,i)}return Ko(e,t,n,r,i)}function zc(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_(en,xe),xe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_(en,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,_(en,xe),xe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,_(en,xe),xe|=r;return ue(e,t,i,n),t.child}function Lc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ko(e,t,n,r,i){var o=ge(n)?Mt:se.current;return o=un(t,o),ln(t,i),n=Hl(e,t,n,r,o,i),r=Vl(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xe(e,t,i)):(U&&r&&Rl(t),t.flags|=1,ue(e,t,n,i),t.child)}function os(e,t,n,r,i){if(ge(n)){var o=!0;ni(t)}else o=!1;if(ln(t,i),t.stateNode===null)Br(e,t),Nc(t,n,r),Qo(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Pe(c):(c=ge(n)?Mt:se.current,c=un(t,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&qa(t,l,r,c),nt=!1;var m=t.memoizedState;l.state=m,ai(t,r,l,i),u=t.memoizedState,s!==r||m!==u||me.current||nt?(typeof f=="function"&&(Yo(t,n,f,r),u=t.memoizedState),(s=nt||Ja(t,n,s,r,m,u,c))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,ic(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Te(t.type,s),l.props=c,d=t.pendingProps,m=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Pe(u):(u=ge(n)?Mt:se.current,u=un(t,u));var x=n.getDerivedStateFromProps;(f=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==d||m!==u)&&qa(t,l,r,u),nt=!1,m=t.memoizedState,l.state=m,ai(t,r,l,i);var y=t.memoizedState;s!==d||m!==y||me.current||nt?(typeof x=="function"&&(Yo(t,n,x,r),y=t.memoizedState),(c=nt||Ja(t,n,c,r,m,y,u)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return $o(e,t,n,r,o,i)}function $o(e,t,n,r,i,o){Lc(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Va(t,n,!1),Xe(e,t,o);r=t.stateNode,Cf.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=dn(t,e.child,null,o),t.child=dn(t,null,s,o)):ue(e,t,s,o),t.memoizedState=r.state,i&&Va(t,n,!0),t.child}function Rc(e){var t=e.stateNode;t.pendingContext?Ha(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ha(e,t.context,!1),Fl(e,t.containerInfo)}function ls(e,t,n,r,i){return cn(),Il(i),t.flags|=256,ue(e,t,n,r),t.child}var Zo={dehydrated:null,treeContext:null,retryLane:0};function Xo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tc(e,t,n){var r=t.pendingProps,i=B.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),_(B,i&1),e===null)return Ho(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Ri(l,r,0,null),e=It(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Xo(n),t.memoizedState=Zo,e):Gl(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Nf(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=vt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=vt(s,o):(o=It(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Xo(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Zo,r}return o=e.child,e=o.sibling,r=vt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Gl(e,t){return t=Ri({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Lr(e,t,n,r){return r!==null&&Il(r),dn(t,e.child,null,n),e=Gl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nf(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=so(Error(k(422))),Lr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ri({mode:"visible",children:r.children},i,0,null),o=It(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&dn(t,e.child,null,l),t.child.memoizedState=Xo(l),t.memoizedState=Zo,o);if(!(t.mode&1))return Lr(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(k(419)),r=so(o,r,void 0),Lr(e,t,l,r)}if(s=(l&e.childLanes)!==0,he||s){if(r=te,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ze(e,i),_e(r,e,i,-1))}return ql(),r=so(Error(k(421))),Lr(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Df.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ye=ft(i.nextSibling),we=t,U=!0,Me=null,e!==null&&(Ce[Ne++]=Ye,Ce[Ne++]=Qe,Ce[Ne++]=At,Ye=e.id,Qe=e.overflow,At=t),t=Gl(t,r.children),t.flags|=4096,t)}function as(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Vo(e.return,t,n)}function uo(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ic(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ue(e,t,r.children,n),r=B.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&as(e,n,t);else if(e.tag===19)as(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_(B,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&si(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),uo(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&si(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}uo(t,!0,n,null,o);break;case"together":uo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Br(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ot|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ef(e,t,n){switch(t.tag){case 3:Rc(t),cn();break;case 5:oc(t);break;case 1:ge(t.type)&&ni(t);break;case 4:Fl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;_(oi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(_(B,B.current&1),t.flags|=128,null):n&t.child.childLanes?Tc(e,t,n):(_(B,B.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);_(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ic(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,zc(e,t,n)}return Xe(e,t,n)}var Mc,Jo,Ac,_c;Mc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jo=function(){};Ac=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Rt(Be.current);var o=null;switch(n){case"input":i=wo(e,i),r=wo(e,r),o=[];break;case"select":i=V({},i,{value:void 0}),r=V({},r,{value:void 0}),o=[];break;case"textarea":i=So(e,i),r=So(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ei)}No(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Hn.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Hn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&O("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};_c=function(e,t,n,r){n!==r&&(t.flags|=4)};function bn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function bf(e,t,n){var r=t.pendingProps;switch(Tl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return ge(t.type)&&ti(),le(t),null;case 3:return r=t.stateNode,pn(),F(me),F(se),Wl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(ll(Me),Me=null))),Jo(e,t),le(t),null;case 5:Ul(t);var i=Rt(tr.current);if(n=t.type,e!==null&&t.stateNode!=null)Ac(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return le(t),null}if(e=Rt(Be.current),Pr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ue]=t,r[qn]=o,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(i=0;i<Tn.length;i++)O(Tn[i],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":ga(r,o),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},O("invalid",r);break;case"textarea":xa(r,o),O("invalid",r)}No(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&br(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&br(r.textContent,s,e),i=["children",""+s]):Hn.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&O("scroll",r)}switch(n){case"input":yr(r),va(r,o,!0);break;case"textarea":yr(r),ya(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ei)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ue]=t,e[qn]=r,Mc(e,t,!1,!1),t.stateNode=e;e:{switch(l=Eo(n,r),n){case"dialog":O("cancel",e),O("close",e),i=r;break;case"iframe":case"object":case"embed":O("load",e),i=r;break;case"video":case"audio":for(i=0;i<Tn.length;i++)O(Tn[i],e);i=r;break;case"source":O("error",e),i=r;break;case"img":case"image":case"link":O("error",e),O("load",e),i=r;break;case"details":O("toggle",e),i=r;break;case"input":ga(e,r),i=wo(e,r),O("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=V({},r,{value:void 0}),O("invalid",e);break;case"textarea":xa(e,r),i=So(e,r),O("invalid",e);break;default:i=r}No(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?fu(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&du(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Vn(e,u):typeof u=="number"&&Vn(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Hn.hasOwnProperty(o)?u!=null&&o==="onScroll"&&O("scroll",e):u!=null&&vl(e,o,u,l))}switch(n){case"input":yr(e),va(e,r,!1);break;case"textarea":yr(e),ya(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?tn(e,!!r.multiple,o,!1):r.defaultValue!=null&&tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ei)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)_c(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Rt(tr.current),Rt(Be.current),Pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ue]=t,(o=r.nodeValue!==n)&&(e=we,e!==null))switch(e.tag){case 3:br(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&br(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ue]=t,t.stateNode=r}return le(t),null;case 13:if(F(B),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&ye!==null&&t.mode&1&&!(t.flags&128))ec(),cn(),t.flags|=98560,o=!1;else if(o=Pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[Ue]=t}else cn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),o=!1}else Me!==null&&(ll(Me),Me=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?J===0&&(J=3):ql())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return pn(),Jo(e,t),e===null&&Xn(t.stateNode.containerInfo),le(t),null;case 10:return _l(t.type._context),le(t),null;case 17:return ge(t.type)&&ti(),le(t),null;case 19:if(F(B),o=t.memoizedState,o===null)return le(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)bn(o,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=si(e),l!==null){for(t.flags|=128,bn(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _(B,B.current&1|2),t.child}e=e.sibling}o.tail!==null&&K()>hn&&(t.flags|=128,r=!0,bn(o,!1),t.lanes=4194304)}else{if(!r)if(e=si(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),bn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!U)return le(t),null}else 2*K()-o.renderingStartTime>hn&&n!==1073741824&&(t.flags|=128,r=!0,bn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=K(),t.sibling=null,n=B.current,_(B,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return Jl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Pf(e,t){switch(Tl(t),t.tag){case 1:return ge(t.type)&&ti(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pn(),F(me),F(se),Wl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ul(t),null;case 13:if(F(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(B),null;case 4:return pn(),null;case 10:return _l(t.type._context),null;case 22:case 23:return Jl(),null;case 24:return null;default:return null}}var Rr=!1,ae=!1,zf=typeof WeakSet=="function"?WeakSet:Set,N=null;function qt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(e,t,r)}else n.current=null}function qo(e,t,n){try{n()}catch(r){Y(e,t,r)}}var ss=!1;function Lf(e,t){if(_o=Xr,e=Wu(),Ll(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,c=0,f=0,d=e,m=null;t:for(;;){for(var x;d!==n||i!==0&&d.nodeType!==3||(s=l+i),d!==o||r!==0&&d.nodeType!==3||(u=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(x=d.firstChild)!==null;)m=d,d=x;for(;;){if(d===e)break t;if(m===n&&++c===i&&(s=l),m===o&&++f===r&&(u=l),(x=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=x}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Oo={focusedElem:e,selectionRange:n},Xr=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,C=y.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:Te(t.type,w),C);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(v){Y(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return y=ss,ss=!1,y}function Fn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&qo(t,n,o)}i=i.next}while(i!==r)}}function zi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function el(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Oc(e){var t=e.alternate;t!==null&&(e.alternate=null,Oc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ue],delete t[qn],delete t[Uo],delete t[pf],delete t[ff])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dc(e){return e.tag===5||e.tag===3||e.tag===4}function us(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ei));else if(r!==4&&(e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}var ne=null,Ie=!1;function qe(e,t,n){for(n=n.child;n!==null;)Fc(e,t,n),n=n.sibling}function Fc(e,t,n){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(ki,n)}catch{}switch(n.tag){case 5:ae||qt(n,t);case 6:var r=ne,i=Ie;ne=null,qe(e,t,n),ne=r,Ie=i,ne!==null&&(Ie?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Ie?(e=ne,n=n.stateNode,e.nodeType===8?no(e.parentNode,n):e.nodeType===1&&no(e,n),Kn(e)):no(ne,n.stateNode));break;case 4:r=ne,i=Ie,ne=n.stateNode.containerInfo,Ie=!0,qe(e,t,n),ne=r,Ie=i;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&qo(n,t,l),i=i.next}while(i!==r)}qe(e,t,n);break;case 1:if(!ae&&(qt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Y(n,t,s)}qe(e,t,n);break;case 21:qe(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,qe(e,t,n),ae=r):qe(e,t,n);break;default:qe(e,t,n)}}function cs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new zf),t.forEach(function(r){var i=Ff.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Re(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ne=s.stateNode,Ie=!1;break e;case 3:ne=s.stateNode.containerInfo,Ie=!0;break e;case 4:ne=s.stateNode.containerInfo,Ie=!0;break e}s=s.return}if(ne===null)throw Error(k(160));Fc(o,l,i),ne=null,Ie=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Y(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Uc(t,e),t=t.sibling}function Uc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),De(e),r&4){try{Fn(3,e,e.return),zi(3,e)}catch(w){Y(e,e.return,w)}try{Fn(5,e,e.return)}catch(w){Y(e,e.return,w)}}break;case 1:Re(t,e),De(e),r&512&&n!==null&&qt(n,n.return);break;case 5:if(Re(t,e),De(e),r&512&&n!==null&&qt(n,n.return),e.flags&32){var i=e.stateNode;try{Vn(i,"")}catch(w){Y(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&su(i,o),Eo(s,l);var c=Eo(s,o);for(l=0;l<u.length;l+=2){var f=u[l],d=u[l+1];f==="style"?fu(i,d):f==="dangerouslySetInnerHTML"?du(i,d):f==="children"?Vn(i,d):vl(i,f,d,c)}switch(s){case"input":ko(i,o);break;case"textarea":uu(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?tn(i,!!o.multiple,x,!1):m!==!!o.multiple&&(o.defaultValue!=null?tn(i,!!o.multiple,o.defaultValue,!0):tn(i,!!o.multiple,o.multiple?[]:"",!1))}i[qn]=o}catch(w){Y(e,e.return,w)}}break;case 6:if(Re(t,e),De(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){Y(e,e.return,w)}}break;case 3:if(Re(t,e),De(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Kn(t.containerInfo)}catch(w){Y(e,e.return,w)}break;case 4:Re(t,e),De(e);break;case 13:Re(t,e),De(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Zl=K())),r&4&&cs(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(c=ae)||f,Re(t,e),ae=c):Re(t,e),De(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(N=e,f=e.child;f!==null;){for(d=N=f;N!==null;){switch(m=N,x=m.child,m.tag){case 0:case 11:case 14:case 15:Fn(4,m,m.return);break;case 1:qt(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){Y(r,n,w)}}break;case 5:qt(m,m.return);break;case 22:if(m.memoizedState!==null){ps(d);continue}}x!==null?(x.return=m,N=x):ps(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=d.stateNode,u=d.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=pu("display",l))}catch(w){Y(e,e.return,w)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(w){Y(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Re(t,e),De(e),r&4&&cs(e);break;case 21:break;default:Re(t,e),De(e)}}function De(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Dc(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vn(i,""),r.flags&=-33);var o=us(e);nl(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=us(e);tl(e,s,l);break;default:throw Error(k(161))}}catch(u){Y(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rf(e,t,n){N=e,Wc(e)}function Wc(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Rr;if(!l){var s=i.alternate,u=s!==null&&s.memoizedState!==null||ae;s=Rr;var c=ae;if(Rr=l,(ae=u)&&!c)for(N=i;N!==null;)l=N,u=l.child,l.tag===22&&l.memoizedState!==null?fs(i):u!==null?(u.return=l,N=u):fs(i);for(;o!==null;)N=o,Wc(o),o=o.sibling;N=i,Rr=s,ae=c}ds(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):ds(e)}}function ds(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||zi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Te(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&$a(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}$a(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Kn(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ae||t.flags&512&&el(t)}catch(m){Y(t,t.return,m)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function ps(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function fs(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zi(4,t)}catch(u){Y(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Y(t,i,u)}}var o=t.return;try{el(t)}catch(u){Y(t,o,u)}break;case 5:var l=t.return;try{el(t)}catch(u){Y(t,l,u)}}}catch(u){Y(t,t.return,u)}if(t===e){N=null;break}var s=t.sibling;if(s!==null){s.return=t.return,N=s;break}N=t.return}}var Tf=Math.ceil,di=Je.ReactCurrentDispatcher,Kl=Je.ReactCurrentOwner,be=Je.ReactCurrentBatchConfig,M=0,te=null,$=null,re=0,xe=0,en=jt(0),J=0,or=null,Ot=0,Li=0,$l=0,Un=null,fe=null,Zl=0,hn=1/0,He=null,pi=!1,rl=null,mt=null,Tr=!1,at=null,fi=0,Wn=0,il=null,Hr=-1,Vr=0;function ce(){return M&6?K():Hr!==-1?Hr:Hr=K()}function gt(e){return e.mode&1?M&2&&re!==0?re&-re:mf.transition!==null?(Vr===0&&(Vr=Nu()),Vr):(e=A,e!==0||(e=window.event,e=e===void 0?16:Tu(e.type)),e):1}function _e(e,t,n,r){if(50<Wn)throw Wn=0,il=null,Error(k(185));ur(e,n,r),(!(M&2)||e!==te)&&(e===te&&(!(M&2)&&(Li|=n),J===4&&ot(e,re)),ve(e,r),n===1&&M===0&&!(t.mode&1)&&(hn=K()+500,Ei&&St()))}function ve(e,t){var n=e.callbackNode;hp(e,t);var r=Zr(e,e===te?re:0);if(r===0)n!==null&&ja(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ja(n),t===1)e.tag===0?hf(hs.bind(null,e)):Xu(hs.bind(null,e)),cf(function(){!(M&6)&&St()}),n=null;else{switch(Eu(r)){case 1:n=jl;break;case 4:n=Su;break;case 16:n=$r;break;case 536870912:n=Cu;break;default:n=$r}n=$c(n,Bc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Bc(e,t){if(Hr=-1,Vr=0,M&6)throw Error(k(327));var n=e.callbackNode;if(an()&&e.callbackNode!==n)return null;var r=Zr(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=hi(e,r);else{t=r;var i=M;M|=2;var o=Vc();(te!==e||re!==t)&&(He=null,hn=K()+500,Tt(e,t));do try{Af();break}catch(s){Hc(e,s)}while(!0);Al(),di.current=o,M=i,$!==null?t=0:(te=null,re=0,t=J)}if(t!==0){if(t===2&&(i=Ro(e),i!==0&&(r=i,t=ol(e,i))),t===1)throw n=or,Tt(e,0),ot(e,r),ve(e,K()),n;if(t===6)ot(e,r);else{if(i=e.current.alternate,!(r&30)&&!If(i)&&(t=hi(e,r),t===2&&(o=Ro(e),o!==0&&(r=o,t=ol(e,o))),t===1))throw n=or,Tt(e,0),ot(e,r),ve(e,K()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Pt(e,fe,He);break;case 3:if(ot(e,r),(r&130023424)===r&&(t=Zl+500-K(),10<t)){if(Zr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Fo(Pt.bind(null,e,fe,He),t);break}Pt(e,fe,He);break;case 4:if(ot(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ae(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Tf(r/1960))-r,10<r){e.timeoutHandle=Fo(Pt.bind(null,e,fe,He),r);break}Pt(e,fe,He);break;case 5:Pt(e,fe,He);break;default:throw Error(k(329))}}}return ve(e,K()),e.callbackNode===n?Bc.bind(null,e):null}function ol(e,t){var n=Un;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=hi(e,t),e!==2&&(t=fe,fe=n,t!==null&&ll(t)),e}function ll(e){fe===null?fe=e:fe.push.apply(fe,e)}function If(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Oe(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ot(e,t){for(t&=~$l,t&=~Li,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ae(t),r=1<<n;e[n]=-1,t&=~r}}function hs(e){if(M&6)throw Error(k(327));an();var t=Zr(e,0);if(!(t&1))return ve(e,K()),null;var n=hi(e,t);if(e.tag!==0&&n===2){var r=Ro(e);r!==0&&(t=r,n=ol(e,r))}if(n===1)throw n=or,Tt(e,0),ot(e,t),ve(e,K()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pt(e,fe,He),ve(e,K()),null}function Xl(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(hn=K()+500,Ei&&St())}}function Dt(e){at!==null&&at.tag===0&&!(M&6)&&an();var t=M;M|=1;var n=be.transition,r=A;try{if(be.transition=null,A=1,e)return e()}finally{A=r,be.transition=n,M=t,!(M&6)&&St()}}function Jl(){xe=en.current,F(en)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,uf(n)),$!==null)for(n=$.return;n!==null;){var r=n;switch(Tl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ti();break;case 3:pn(),F(me),F(se),Wl();break;case 5:Ul(r);break;case 4:pn();break;case 13:F(B);break;case 19:F(B);break;case 10:_l(r.type._context);break;case 22:case 23:Jl()}n=n.return}if(te=e,$=e=vt(e.current,null),re=xe=t,J=0,or=null,$l=Li=Ot=0,fe=Un=null,Lt!==null){for(t=0;t<Lt.length;t++)if(n=Lt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Lt=null}return e}function Hc(e,t){do{var n=$;try{if(Al(),Ur.current=ci,ui){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ui=!1}if(_t=0,ee=X=H=null,Dn=!1,nr=0,Kl.current=null,n===null||n.return===null){J=1,or=t,$=null;break}e:{var o=e,l=n.return,s=n,u=t;if(t=re,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=s,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var x=ts(l);if(x!==null){x.flags&=-257,ns(x,l,s,o,t),x.mode&1&&es(o,c,t),t=x,u=c;var y=t.updateQueue;if(y===null){var w=new Set;w.add(u),t.updateQueue=w}else y.add(u);break e}else{if(!(t&1)){es(o,c,t),ql();break e}u=Error(k(426))}}else if(U&&s.mode&1){var C=ts(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),ns(C,l,s,o,t),Il(fn(u,s));break e}}o=u=fn(u,s),J!==4&&(J=2),Un===null?Un=[o]:Un.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Ec(o,u,t);Ka(o,h);break e;case 1:s=u;var p=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(mt===null||!mt.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=bc(o,s,t);Ka(o,v);break e}}o=o.return}while(o!==null)}Qc(n)}catch(S){t=S,$===n&&n!==null&&($=n=n.return);continue}break}while(!0)}function Vc(){var e=di.current;return di.current=ci,e===null?ci:e}function ql(){(J===0||J===3||J===2)&&(J=4),te===null||!(Ot&268435455)&&!(Li&268435455)||ot(te,re)}function hi(e,t){var n=M;M|=2;var r=Vc();(te!==e||re!==t)&&(He=null,Tt(e,t));do try{Mf();break}catch(i){Hc(e,i)}while(!0);if(Al(),M=n,di.current=r,$!==null)throw Error(k(261));return te=null,re=0,J}function Mf(){for(;$!==null;)Yc($)}function Af(){for(;$!==null&&!op();)Yc($)}function Yc(e){var t=Kc(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?Qc(e):$=t,Kl.current=null}function Qc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Pf(n,t),n!==null){n.flags&=32767,$=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,$=null;return}}else if(n=bf(n,t,xe),n!==null){$=n;return}if(t=t.sibling,t!==null){$=t;return}$=t=e}while(t!==null);J===0&&(J=5)}function Pt(e,t,n){var r=A,i=be.transition;try{be.transition=null,A=1,_f(e,t,n,r)}finally{be.transition=i,A=r}return null}function _f(e,t,n,r){do an();while(at!==null);if(M&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(mp(e,o),e===te&&($=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Tr||(Tr=!0,$c($r,function(){return an(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=be.transition,be.transition=null;var l=A;A=1;var s=M;M|=4,Kl.current=null,Lf(e,n),Uc(n,e),tf(Oo),Xr=!!_o,Oo=_o=null,e.current=n,Rf(n),lp(),M=s,A=l,be.transition=o}else e.current=n;if(Tr&&(Tr=!1,at=e,fi=i),o=e.pendingLanes,o===0&&(mt=null),up(n.stateNode),ve(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(pi)throw pi=!1,e=rl,rl=null,e;return fi&1&&e.tag!==0&&an(),o=e.pendingLanes,o&1?e===il?Wn++:(Wn=0,il=e):Wn=0,St(),null}function an(){if(at!==null){var e=Eu(fi),t=be.transition,n=A;try{if(be.transition=null,A=16>e?16:e,at===null)var r=!1;else{if(e=at,at=null,fi=0,M&6)throw Error(k(331));var i=M;for(M|=4,N=e.current;N!==null;){var o=N,l=o.child;if(N.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(N=c;N!==null;){var f=N;switch(f.tag){case 0:case 11:case 15:Fn(8,f,o)}var d=f.child;if(d!==null)d.return=f,N=d;else for(;N!==null;){f=N;var m=f.sibling,x=f.return;if(Oc(f),f===c){N=null;break}if(m!==null){m.return=x,N=m;break}N=x}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}N=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,N=l;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Fn(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,N=h;break e}N=o.return}}var p=e.current;for(N=p;N!==null;){l=N;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,N=g;else e:for(l=p;N!==null;){if(s=N,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:zi(9,s)}}catch(S){Y(s,s.return,S)}if(s===l){N=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,N=v;break e}N=s.return}}if(M=i,St(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(ki,e)}catch{}r=!0}return r}finally{A=n,be.transition=t}}return!1}function ms(e,t,n){t=fn(n,t),t=Ec(e,t,1),e=ht(e,t,1),t=ce(),e!==null&&(ur(e,1,t),ve(e,t))}function Y(e,t,n){if(e.tag===3)ms(e,e,n);else for(;t!==null;){if(t.tag===3){ms(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mt===null||!mt.has(r))){e=fn(n,e),e=bc(t,e,1),t=ht(t,e,1),e=ce(),t!==null&&(ur(t,1,e),ve(t,e));break}}t=t.return}}function Of(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(J===4||J===3&&(re&130023424)===re&&500>K()-Zl?Tt(e,0):$l|=n),ve(e,t)}function Gc(e,t){t===0&&(e.mode&1?(t=jr,jr<<=1,!(jr&130023424)&&(jr=4194304)):t=1);var n=ce();e=Ze(e,t),e!==null&&(ur(e,t,n),ve(e,n))}function Df(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gc(e,n)}function Ff(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Gc(e,n)}var Kc;Kc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)he=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return he=!1,Ef(e,t,n);he=!!(e.flags&131072)}else he=!1,U&&t.flags&1048576&&Ju(t,ii,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Br(e,t),e=t.pendingProps;var i=un(t,se.current);ln(t,n),i=Hl(null,t,r,e,i,n);var o=Vl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(o=!0,ni(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Dl(t),i.updater=Pi,t.stateNode=i,i._reactInternals=t,Qo(t,r,e,n),t=$o(null,t,r,!0,o,n)):(t.tag=0,U&&o&&Rl(t),ue(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Br(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Wf(r),e=Te(r,e),i){case 0:t=Ko(null,t,r,e,n);break e;case 1:t=os(null,t,r,e,n);break e;case 11:t=rs(null,t,r,e,n);break e;case 14:t=is(null,t,r,Te(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Te(r,i),Ko(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Te(r,i),os(e,t,r,i,n);case 3:e:{if(Rc(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,ic(e,t),ai(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=fn(Error(k(423)),t),t=ls(e,t,r,n,i);break e}else if(r!==i){i=fn(Error(k(424)),t),t=ls(e,t,r,n,i);break e}else for(ye=ft(t.stateNode.containerInfo.firstChild),we=t,U=!0,Me=null,n=nc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cn(),r===i){t=Xe(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return oc(t),e===null&&Ho(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Do(r,i)?l=null:o!==null&&Do(r,o)&&(t.flags|=32),Lc(e,t),ue(e,t,l,n),t.child;case 6:return e===null&&Ho(t),null;case 13:return Tc(e,t,n);case 4:return Fl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=dn(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Te(r,i),rs(e,t,r,i,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,_(oi,r._currentValue),r._currentValue=l,o!==null)if(Oe(o.value,l)){if(o.children===i.children&&!me.current){t=Xe(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Ge(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Vo(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(k(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Vo(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ue(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ln(t,n),i=Pe(i),r=r(i),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,i=Te(r,t.pendingProps),i=Te(r.type,i),is(e,t,r,i,n);case 15:return Pc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Te(r,i),Br(e,t),t.tag=1,ge(r)?(e=!0,ni(t)):e=!1,ln(t,n),Nc(t,r,i),Qo(t,r,i,n),$o(null,t,r,!0,e,n);case 19:return Ic(e,t,n);case 22:return zc(e,t,n)}throw Error(k(156,t.tag))};function $c(e,t){return ju(e,t)}function Uf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new Uf(e,t,n,r)}function ea(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wf(e){if(typeof e=="function")return ea(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yl)return 11;if(e===wl)return 14}return 2}function vt(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yr(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")ea(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Vt:return It(n.children,i,o,t);case xl:l=8,i|=8;break;case go:return e=Ee(12,n,t,i|2),e.elementType=go,e.lanes=o,e;case vo:return e=Ee(13,n,t,i),e.elementType=vo,e.lanes=o,e;case xo:return e=Ee(19,n,t,i),e.elementType=xo,e.lanes=o,e;case ou:return Ri(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ru:l=10;break e;case iu:l=9;break e;case yl:l=11;break e;case wl:l=14;break e;case tt:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ee(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function It(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function Ri(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=ou,e.lanes=n,e.stateNode={isHidden:!1},e}function co(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function po(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bf(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yi(0),this.expirationTimes=Yi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ta(e,t,n,r,i,o,l,s,u){return e=new Bf(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ee(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dl(o),e}function Hf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ht,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Zc(e){if(!e)return wt;e=e._reactInternals;e:{if(Ut(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(ge(n))return Zu(e,n,t)}return t}function Xc(e,t,n,r,i,o,l,s,u){return e=ta(n,r,!0,e,i,o,l,s,u),e.context=Zc(null),n=e.current,r=ce(),i=gt(n),o=Ge(r,i),o.callback=t??null,ht(n,o,i),e.current.lanes=i,ur(e,i,r),ve(e,r),e}function Ti(e,t,n,r){var i=t.current,o=ce(),l=gt(i);return n=Zc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ge(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ht(i,t,l),e!==null&&(_e(e,i,l,o),Fr(e,i,l)),l}function mi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function na(e,t){gs(e,t),(e=e.alternate)&&gs(e,t)}function Vf(){return null}var Jc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ra(e){this._internalRoot=e}Ii.prototype.render=ra.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Ti(e,t,null,null)};Ii.prototype.unmount=ra.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dt(function(){Ti(null,e,null,null)}),t[$e]=null}};function Ii(e){this._internalRoot=e}Ii.prototype.unstable_scheduleHydration=function(e){if(e){var t=zu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<it.length&&t!==0&&t<it[n].priority;n++);it.splice(n,0,e),n===0&&Ru(e)}};function ia(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function vs(){}function Yf(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=mi(l);o.call(c)}}var l=Xc(t,r,e,0,null,!1,!1,"",vs);return e._reactRootContainer=l,e[$e]=l.current,Xn(e.nodeType===8?e.parentNode:e),Dt(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=mi(u);s.call(c)}}var u=ta(e,0,!1,null,null,!1,!1,"",vs);return e._reactRootContainer=u,e[$e]=u.current,Xn(e.nodeType===8?e.parentNode:e),Dt(function(){Ti(t,u,n,r)}),u}function Ai(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var u=mi(l);s.call(u)}}Ti(t,l,e,i)}else l=Yf(n,t,e,i,r);return mi(l)}bu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Rn(t.pendingLanes);n!==0&&(Sl(t,n|1),ve(t,K()),!(M&6)&&(hn=K()+500,St()))}break;case 13:Dt(function(){var r=Ze(e,1);if(r!==null){var i=ce();_e(r,e,1,i)}}),na(e,1)}};Cl=function(e){if(e.tag===13){var t=Ze(e,134217728);if(t!==null){var n=ce();_e(t,e,134217728,n)}na(e,134217728)}};Pu=function(e){if(e.tag===13){var t=gt(e),n=Ze(e,t);if(n!==null){var r=ce();_e(n,e,t,r)}na(e,t)}};zu=function(){return A};Lu=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};Po=function(e,t,n){switch(t){case"input":if(ko(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ni(r);if(!i)throw Error(k(90));au(r),ko(r,i)}}}break;case"textarea":uu(e,n);break;case"select":t=n.value,t!=null&&tn(e,!!n.multiple,t,!1)}};gu=Xl;vu=Dt;var Qf={usingClientEntryPoint:!1,Events:[dr,Kt,Ni,hu,mu,Xl]},Pn={findFiberByHostInstance:zt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gf={bundleType:Pn.bundleType,version:Pn.version,rendererPackageName:Pn.rendererPackageName,rendererConfig:Pn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wu(e),e===null?null:e.stateNode},findFiberByHostInstance:Pn.findFiberByHostInstance||Vf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ir=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ir.isDisabled&&Ir.supportsFiber)try{ki=Ir.inject(Gf),We=Ir}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qf;je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ia(t))throw Error(k(200));return Hf(e,t,null,n)};je.createRoot=function(e,t){if(!ia(e))throw Error(k(299));var n=!1,r="",i=Jc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ta(e,1,!1,null,null,n,!1,r,i),e[$e]=t.current,Xn(e.nodeType===8?e.parentNode:e),new ra(t)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=wu(t),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return Dt(e)};je.hydrate=function(e,t,n){if(!Mi(t))throw Error(k(200));return Ai(null,e,t,!0,n)};je.hydrateRoot=function(e,t,n){if(!ia(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Jc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Xc(t,null,e,1,n??null,i,!1,o,l),e[$e]=t.current,Xn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ii(t)};je.render=function(e,t,n){if(!Mi(t))throw Error(k(200));return Ai(null,e,t,!1,n)};je.unmountComponentAtNode=function(e){if(!Mi(e))throw Error(k(40));return e._reactRootContainer?(Dt(function(){Ai(null,null,e,!1,function(){e._reactRootContainer=null,e[$e]=null})}),!0):!1};je.unstable_batchedUpdates=Xl;je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Mi(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Ai(e,t,n,!1,r)};je.version="18.3.1-next-f1338f8080-20240426";function qc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qc)}catch(e){console.error(e)}}qc(),qs.exports=je;var Kf=qs.exports,ed,xs=Kf;ed=xs.createRoot,xs.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lr(){return lr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lr.apply(this,arguments)}var st;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(st||(st={}));const ys="popstate";function $f(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:s}=r.location;return al("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:gi(i)}return Xf(t,n,null,e)}function Z(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function td(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Zf(){return Math.random().toString(36).substr(2,8)}function ws(e,t){return{usr:e.state,key:e.key,idx:t}}function al(e,t,n,r){return n===void 0&&(n=null),lr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?xn(t):t,{state:n,key:t&&t.key||r||Zf()})}function gi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function xn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Xf(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,s=st.Pop,u=null,c=f();c==null&&(c=0,l.replaceState(lr({},l.state,{idx:c}),""));function f(){return(l.state||{idx:null}).idx}function d(){s=st.Pop;let C=f(),h=C==null?null:C-c;c=C,u&&u({action:s,location:w.location,delta:h})}function m(C,h){s=st.Push;let p=al(w.location,C,h);c=f()+1;let g=ws(p,c),v=w.createHref(p);try{l.pushState(g,"",v)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(v)}o&&u&&u({action:s,location:w.location,delta:1})}function x(C,h){s=st.Replace;let p=al(w.location,C,h);c=f();let g=ws(p,c),v=w.createHref(p);l.replaceState(g,"",v),o&&u&&u({action:s,location:w.location,delta:0})}function y(C){let h=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof C=="string"?C:gi(C);return p=p.replace(/ $/,"%20"),Z(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let w={get action(){return s},get location(){return e(i,l)},listen(C){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(ys,d),u=C,()=>{i.removeEventListener(ys,d),u=null}},createHref(C){return t(i,C)},createURL:y,encodeLocation(C){let h=y(C);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:x,go(C){return l.go(C)}};return w}var ks;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ks||(ks={}));function Jf(e,t,n){return n===void 0&&(n="/"),qf(e,t,n,!1)}function qf(e,t,n,r){let i=typeof t=="string"?xn(t):t,o=oa(i.pathname||"/",n);if(o==null)return null;let l=nd(e);eh(l);let s=null;for(let u=0;s==null&&u<l.length;++u){let c=dh(o);s=uh(l[u],c,r)}return s}function nd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,s)=>{let u={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};u.relativePath.startsWith("/")&&(Z(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=xt([r,u.relativePath]),f=n.concat(u);o.children&&o.children.length>0&&(Z(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),nd(o.children,t,f,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:ah(c,o.index),routesMeta:f})};return e.forEach((o,l)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,l);else for(let u of rd(o.path))i(o,l,u)}),t}function rd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=rd(r.join("/")),s=[];return s.push(...l.map(u=>u===""?o:[o,u].join("/"))),i&&s.push(...l),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function eh(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:sh(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const th=/^:[\w-]+$/,nh=3,rh=2,ih=1,oh=10,lh=-2,js=e=>e==="*";function ah(e,t){let n=e.split("/"),r=n.length;return n.some(js)&&(r+=lh),t&&(r+=rh),n.filter(i=>!js(i)).reduce((i,o)=>i+(th.test(o)?nh:o===""?ih:oh),r)}function sh(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function uh(e,t,n){let{routesMeta:r}=e,i={},o="/",l=[];for(let s=0;s<r.length;++s){let u=r[s],c=s===r.length-1,f=o==="/"?t:t.slice(o.length)||"/",d=Ss({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),m=u.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Ss({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!d)return null;Object.assign(i,d.params),l.push({params:i,pathname:xt([o,d.pathname]),pathnameBase:mh(xt([o,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(o=xt([o,d.pathnameBase]))}return l}function Ss(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ch(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,f,d)=>{let{paramName:m,isOptional:x}=f;if(m==="*"){let w=s[d]||"";l=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const y=s[d];return x&&!y?c[m]=void 0:c[m]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:l,pattern:e}}function ch(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),td(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function dh(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return td(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function oa(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ph(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?xn(e):e;return{pathname:n?n.startsWith("/")?n:fh(n,t):t,search:gh(r),hash:vh(i)}}function fh(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function fo(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function hh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function id(e,t){let n=hh(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function od(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=xn(e):(i=lr({},e),Z(!i.pathname||!i.pathname.includes("?"),fo("?","pathname","search",i)),Z(!i.pathname||!i.pathname.includes("#"),fo("#","pathname","hash",i)),Z(!i.search||!i.search.includes("#"),fo("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,s;if(l==null)s=n;else{let d=t.length-1;if(!r&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),d-=1;i.pathname=m.join("/")}s=d>=0?t[d]:"/"}let u=ph(i,s),c=l&&l!=="/"&&l.endsWith("/"),f=(o||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const xt=e=>e.join("/").replace(/\/\/+/g,"/"),mh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),gh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,vh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function xh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ld=["post","put","patch","delete"];new Set(ld);const yh=["get",...ld];new Set(yh);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ar(){return ar=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ar.apply(this,arguments)}const la=j.createContext(null),wh=j.createContext(null),Wt=j.createContext(null),_i=j.createContext(null),Ct=j.createContext({outlet:null,matches:[],isDataRoute:!1}),ad=j.createContext(null);function kh(e,t){let{relative:n}=t===void 0?{}:t;fr()||Z(!1);let{basename:r,navigator:i}=j.useContext(Wt),{hash:o,pathname:l,search:s}=ud(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:xt([r,l])),i.createHref({pathname:u,search:s,hash:o})}function fr(){return j.useContext(_i)!=null}function hr(){return fr()||Z(!1),j.useContext(_i).location}function sd(e){j.useContext(Wt).static||j.useLayoutEffect(e)}function jh(){let{isDataRoute:e}=j.useContext(Ct);return e?_h():Sh()}function Sh(){fr()||Z(!1);let e=j.useContext(la),{basename:t,future:n,navigator:r}=j.useContext(Wt),{matches:i}=j.useContext(Ct),{pathname:o}=hr(),l=JSON.stringify(id(i,n.v7_relativeSplatPath)),s=j.useRef(!1);return sd(()=>{s.current=!0}),j.useCallback(function(c,f){if(f===void 0&&(f={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let d=od(c,JSON.parse(l),o,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:xt([t,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[t,r,l,o,e])}function Ch(){let{matches:e}=j.useContext(Ct),t=e[e.length-1];return t?t.params:{}}function ud(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=j.useContext(Wt),{matches:i}=j.useContext(Ct),{pathname:o}=hr(),l=JSON.stringify(id(i,r.v7_relativeSplatPath));return j.useMemo(()=>od(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function Nh(e,t){return Eh(e,t)}function Eh(e,t,n,r){fr()||Z(!1);let{navigator:i}=j.useContext(Wt),{matches:o}=j.useContext(Ct),l=o[o.length-1],s=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let c=hr(),f;if(t){var d;let C=typeof t=="string"?xn(t):t;u==="/"||(d=C.pathname)!=null&&d.startsWith(u)||Z(!1),f=C}else f=c;let m=f.pathname||"/",x=m;if(u!=="/"){let C=u.replace(/^\//,"").split("/");x="/"+m.replace(/^\//,"").split("/").slice(C.length).join("/")}let y=Jf(e,{pathname:x}),w=Rh(y&&y.map(C=>Object.assign({},C,{params:Object.assign({},s,C.params),pathname:xt([u,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:xt([u,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),o,n,r);return t&&w?j.createElement(_i.Provider,{value:{location:ar({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:st.Pop}},w):w}function bh(){let e=Ah(),t=xh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:i},n):null,null)}const Ph=j.createElement(bh,null);class zh extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(Ct.Provider,{value:this.props.routeContext},j.createElement(ad.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Lh(e){let{routeContext:t,match:n,children:r}=e,i=j.useContext(la);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Ct.Provider,{value:t},r)}function Rh(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let f=l.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);f>=0||Z(!1),l=l.slice(0,Math.min(l.length,f+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<l.length;f++){let d=l[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=f),d.route.id){let{loaderData:m,errors:x}=n,y=d.route.loader&&m[d.route.id]===void 0&&(!x||x[d.route.id]===void 0);if(d.route.lazy||y){u=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((f,d,m)=>{let x,y=!1,w=null,C=null;n&&(x=s&&d.route.id?s[d.route.id]:void 0,w=d.route.errorElement||Ph,u&&(c<0&&m===0?(y=!0,C=null):c===m&&(y=!0,C=d.route.hydrateFallbackElement||null)));let h=t.concat(l.slice(0,m+1)),p=()=>{let g;return x?g=w:y?g=C:d.route.Component?g=j.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=f,j.createElement(Lh,{match:d,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?j.createElement(zh,{location:n.location,revalidation:n.revalidation,component:w,error:x,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var cd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(cd||{}),vi=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(vi||{});function Th(e){let t=j.useContext(la);return t||Z(!1),t}function Ih(e){let t=j.useContext(wh);return t||Z(!1),t}function Mh(e){let t=j.useContext(Ct);return t||Z(!1),t}function dd(e){let t=Mh(),n=t.matches[t.matches.length-1];return n.route.id||Z(!1),n.route.id}function Ah(){var e;let t=j.useContext(ad),n=Ih(vi.UseRouteError),r=dd(vi.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function _h(){let{router:e}=Th(cd.UseNavigateStable),t=dd(vi.UseNavigateStable),n=j.useRef(!1);return sd(()=>{n.current=!0}),j.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ar({fromRouteId:t},o)))},[e,t])}function et(e){Z(!1)}function Oh(e){let{basename:t="/",children:n=null,location:r,navigationType:i=st.Pop,navigator:o,static:l=!1,future:s}=e;fr()&&Z(!1);let u=t.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:u,navigator:o,static:l,future:ar({v7_relativeSplatPath:!1},s)}),[u,s,o,l]);typeof r=="string"&&(r=xn(r));let{pathname:f="/",search:d="",hash:m="",state:x=null,key:y="default"}=r,w=j.useMemo(()=>{let C=oa(f,u);return C==null?null:{location:{pathname:C,search:d,hash:m,state:x,key:y},navigationType:i}},[u,f,d,m,x,y,i]);return w==null?null:j.createElement(Wt.Provider,{value:c},j.createElement(_i.Provider,{children:n,value:w}))}function Dh(e){let{children:t,location:n}=e;return Nh(sl(t),n)}new Promise(()=>{});function sl(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,i)=>{if(!j.isValidElement(r))return;let o=[...t,i];if(r.type===j.Fragment){n.push.apply(n,sl(r.props.children,o));return}r.type!==et&&Z(!1),!r.props.index||!r.props.children||Z(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=sl(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ul(){return ul=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ul.apply(this,arguments)}function Fh(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Uh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Wh(e,t){return e.button===0&&(!t||t==="_self")&&!Uh(e)}const Bh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Hh="6";try{window.__reactRouterVersion=Hh}catch{}const Vh="startTransition",Cs=_d[Vh];function Yh(e){let{basename:t,children:n,future:r,window:i}=e,o=j.useRef();o.current==null&&(o.current=$f({window:i,v5Compat:!0}));let l=o.current,[s,u]=j.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},f=j.useCallback(d=>{c&&Cs?Cs(()=>u(d)):u(d)},[u,c]);return j.useLayoutEffect(()=>l.listen(f),[l,f]),j.createElement(Oh,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}const Qh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Gh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rt=j.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:s,target:u,to:c,preventScrollReset:f,viewTransition:d}=t,m=Fh(t,Bh),{basename:x}=j.useContext(Wt),y,w=!1;if(typeof c=="string"&&Gh.test(c)&&(y=c,Qh))try{let g=new URL(window.location.href),v=c.startsWith("//")?new URL(g.protocol+c):new URL(c),S=oa(v.pathname,x);v.origin===g.origin&&S!=null?c=S+v.search+v.hash:w=!0}catch{}let C=kh(c,{relative:i}),h=Kh(c,{replace:l,state:s,target:u,preventScrollReset:f,relative:i,viewTransition:d});function p(g){r&&r(g),g.defaultPrevented||h(g)}return j.createElement("a",ul({},m,{href:y||C,onClick:w||o?r:p,ref:n,target:u}))});var Ns;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ns||(Ns={}));var Es;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Es||(Es={}));function Kh(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,viewTransition:s}=t===void 0?{}:t,u=jh(),c=hr(),f=ud(e,{relative:l});return j.useCallback(d=>{if(Wh(d,n)){d.preventDefault();let m=r!==void 0?r:gi(c)===gi(f);u(e,{replace:m,state:i,preventScrollReset:o,relative:l,viewTransition:s})}},[c,u,f,r,i,n,e,o,l,s])}const ho="theme-preference",$h=()=>window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;function pd(){const[e,t]=j.useState(()=>{const r=typeof window<"u"?localStorage.getItem(ho):null;return r==="light"||r==="dark"?r:$h()?"dark":"light"});return j.useEffect(()=>{document.documentElement.setAttribute("data-theme",e);try{localStorage.setItem(ho,e)}catch{}},[e]),j.useEffect(()=>{const r=window.matchMedia("(prefers-color-scheme: dark)"),i=o=>{localStorage.getItem(ho)||t(o.matches?"dark":"light")};return r.addEventListener("change",i),()=>r.removeEventListener("change",i)},[]),{theme:e,setTheme:t,toggleTheme:()=>t(r=>r==="light"?"dark":"light")}}var fd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},bs=ut.createContext&&ut.createContext(fd),Zh=["attr","size","title"];function Xh(e,t){if(e==null)return{};var n=Jh(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Jh(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function xi(){return xi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xi.apply(this,arguments)}function Ps(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function yi(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ps(Object(n),!0).forEach(function(r){qh(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ps(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function qh(e,t,n){return t=em(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function em(e){var t=tm(e,"string");return typeof t=="symbol"?t:t+""}function tm(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function hd(e){return e&&e.map((t,n)=>ut.createElement(t.tag,yi({key:n},t.attr),hd(t.child)))}function W(e){return t=>ut.createElement(nm,xi({attr:yi({},e.attr)},t),hd(e.child))}function nm(e){var t=n=>{var{attr:r,size:i,title:o}=e,l=Xh(e,Zh),s=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),ut.createElement("svg",xi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:u,style:yi(yi({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&ut.createElement("title",null,o),e.children)};return bs!==void 0?ut.createElement(bs.Consumer,null,n=>t(n)):t(fd)}function zs(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"},child:[]},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"},child:[]}]})(e)}function rm(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(e)}function Ls(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"},child:[]}]})(e)}function Rs(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"},child:[]}]})(e)}function im(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"},child:[]}]})(e)}function Ts(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(e)}function om(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(e)}function lm(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"7 10 12 15 17 10"},child:[]},{tag:"line",attr:{x1:"12",y1:"15",x2:"12",y2:"3"},child:[]}]})(e)}function am(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"},child:[]},{tag:"polyline",attr:{points:"15 3 21 3 21 9"},child:[]},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"},child:[]}]})(e)}function sm(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(e)}function aa(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(e)}function md(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(e)}function cl(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(e)}function Is(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(e)}function sa(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"},child:[]},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"},child:[]},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"},child:[]}]})(e)}function Bn(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(e)}function gd(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(e)}function Ms(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(e)}function um(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"},child:[]}]})(e)}function cm(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(e)}function As(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(e)}function dm(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(e)}function _s(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(e)}function pm(e){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(e)}const fm=()=>{const[e,t]=j.useState(new Date);j.useEffect(()=>{const o=setInterval(()=>t(new Date),1e3);return()=>clearInterval(o)},[]);const n=o=>o.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),r=o=>{const l=o.split("/");return l[l.length-1].replace("_"," ")},i=n(e);return r(Intl.DateTimeFormat().resolvedOptions().timeZone),e.toLocaleDateString([],{month:"short",day:"numeric"}),a.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",lineHeight:"1.2",color:"var(--text-secondary)",textAlign:"right",letterSpacing:"0.5px",fontWeight:"500"},children:a.jsx("div",{style:{fontSize:"1.2rem",fontWeight:"bold",color:"var(--accent-color)",marginBottom:"1px"},children:i})})},hm=()=>{const[e,t]=j.useState(!1);j.useState(!1);const[n,r]=j.useState(typeof window<"u"?window.innerWidth:768);j.useEffect(()=>{const s=()=>{const c=window.scrollY>50;c!==e&&t(c)},u=()=>{r(window.innerWidth)};return window.addEventListener("scroll",s),window.addEventListener("resize",u),()=>{window.removeEventListener("scroll",s),window.removeEventListener("resize",u)}},[e]);const i=n<=768,{theme:o,toggleTheme:l}=pd();return a.jsxs(a.Fragment,{children:[!i&&a.jsxs("header",{className:"navbar",style:{position:"fixed",top:0,width:"100%",zIndex:100,padding:"0 1rem",height:"70px",display:"flex",justifyContent:"center",alignItems:"center",transition:"var(--transition)"},children:[a.jsx("div",{className:"logo",style:{position:"absolute",left:16,fontFamily:"var(--font-mono)",fontWeight:"bold",fontSize:"1.2rem",color:"var(--accent-color)"},children:a.jsx("a",{href:"/",children:"0x4nku5h"})}),a.jsxs("nav",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[a.jsxs("ul",{style:{display:"flex",flexDirection:"row",position:"static",margin:0,background:o==="light"?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.08)",backdropFilter:"blur(10px)",border:o==="light"?"1px solid rgba(0,0,0,0.06)":"1px solid rgba(255,255,255,0.15)",boxShadow:o==="light"?"0 6px 18px rgba(0,0,0,0.12)":"0 8px 24px rgba(0,0,0,0.2)",borderRadius:"9999px",minWidth:320,height:"48px",alignItems:"center",justifyContent:"center",padding:"0 8px",gap:"4px"},className:"nav-links",children:[a.jsx("li",{style:{padding:"6px"},children:a.jsx(rt,{to:"/",style:{width:36,height:36,borderRadius:9999,display:"grid",placeItems:"center",background:o==="light"?"#efefef":"rgba(0,0,0,0.08)",color:"var(--text-color)"},children:a.jsx(Is,{})})}),a.jsx("li",{"aria-hidden":!0,style:{width:1,height:24,background:o==="light"?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.15)"}}),a.jsx("li",{children:a.jsxs(rt,{to:"/about",style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",borderRadius:9999},children:[a.jsx(_s,{})," ",a.jsx("span",{children:"About"})]})}),a.jsx("li",{children:a.jsxs(rt,{to:"/work",style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",borderRadius:9999},children:[a.jsx(cl,{})," ",a.jsx("span",{children:"Work"})]})}),a.jsx("li",{"aria-hidden":!0,style:{width:1,height:24,background:o==="light"?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.15)"}}),a.jsx("li",{children:a.jsx("button",{"aria-label":"Toggle theme",onClick:l,style:{width:36,height:36,borderRadius:9999,display:"grid",placeItems:"center",background:o==="light"?"#efefef":"rgba(0,0,0,0.08)",color:"var(--text-color)",border:"none"},children:o==="light"?a.jsx(Ms,{}):a.jsx(As,{})})})]}),a.jsx("div",{style:{display:"flex",alignItems:"center",gap:"12px",position:"absolute",right:16},children:a.jsx("div",{"aria-label":"Clock",style:{fontSize:12,opacity:.85},children:a.jsx(fm,{})})})]})]}),i&&a.jsx("nav",{style:{position:"fixed",bottom:16,left:"50%",transform:"translateX(-50%)",zIndex:100,display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsxs("ul",{style:{display:"flex",flexDirection:"row",margin:0,listStyle:"none",background:"rgba(255,255,255,0.95)",backdropFilter:"blur(20px)",border:"1px solid rgba(0,0,0,0.06)",boxShadow:"0 8px 32px rgba(0,0,0,0.12)",borderRadius:"20px",height:"56px",alignItems:"center",justifyContent:"center",padding:"0 12px",gap:"6px",minWidth:"280px"},className:"nav-links-mobile",children:[a.jsx("li",{style:{padding:"4px"},children:a.jsx(rt,{to:"/",style:{width:40,height:40,borderRadius:9999,display:"grid",placeItems:"center",background:"#f5f5f5",color:"#333",textDecoration:"none",transition:"all 0.2s ease"},children:a.jsx(Is,{size:20})})}),a.jsx("li",{children:a.jsxs(rt,{to:"/about",style:{display:"flex",alignItems:"center",gap:6,padding:"10px 14px",borderRadius:9999,color:"#333",textDecoration:"none",fontSize:"15px",fontWeight:"500",transition:"all 0.2s ease"},children:[a.jsx(_s,{size:18})," ",a.jsx("span",{children:"About"})]})}),a.jsx("li",{children:a.jsxs(rt,{to:"/work",style:{display:"flex",alignItems:"center",gap:6,padding:"10px 14px",borderRadius:9999,color:"#333",textDecoration:"none",fontSize:"15px",fontWeight:"500",transition:"all 0.2s ease"},children:[a.jsx(cl,{size:18})," ",a.jsx("span",{children:"Work"})]})}),a.jsx("li",{style:{padding:"4px"},children:a.jsx("button",{"aria-label":"Toggle theme",onClick:l,style:{width:40,height:40,borderRadius:9999,display:"grid",placeItems:"center",background:"#f5f5f5",color:"#333",border:"none",cursor:"pointer",transition:"all 0.2s ease"},children:o==="light"?a.jsx(Ms,{size:18}):a.jsx(As,{size:18})})})]})})]})},mm="/assets/aboutme-Oj556feq.jpeg",gm="/assets/Ankush_Ananth_Bhat-BJdfXEni.pdf",vm="/assets/mentor-C2HEhyA9.png",Os="/assets/socio-D3Pn08Vi.svg",xm="/assets/suny-B0zW89-M.png",ym="/assets/abundance-CXZMXt_t.png",wm="/assets/associate-UCFx8Xra.png",km="/assets/sahyadri-BqB-FcSB.png",jm="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBEQACEQEDEQH/xAAbAAADAQADAQAAAAAAAAAAAAADBAUGAQIHAP/EAEYQAAIBAgMEBQYKBwgDAAAAAAECAwQRAAUhBhIxQRMiUWFxFDKBktLTFSNCQ1VicpGUoQdFUlOCsbIkNXN0osHC8BYlM//EABkBAAMBAQEAAAAAAAAAAAAAAAECAwQABf/EADIRAAIBAgIGCQQDAQEAAAAAAAABAgMREiEEMVFh0fAiMkFxgZGhscETFELhM3LxUiP/2gAMAwEAAhEDEQA/AMKuZVB+aovwMPsYyOVj2cC3+bDJmFQfmqL8DD7OJSqMOBcth0rqj93R/gofZxKVVhwLlsKtfNe25RX7PI4fZxJ1XsXkH6a3+bHsvTM8xlMVDR08zqLkLRw6DvJWw7O86Y6MpzdopeQssEVdv1YAVs5FxHSfg4vZwn1HsXkNgXLYeiGY19QKejpaaWUgsFFJCNALnUr/AN4YeEpzdkl5CyUIq7fqxaWrqUZleGlVlJDK1FECCOII3cD6jWTS8g4I8tgDXzHzUoz4UcPs4dVXs9DnBctgXr6j93R/gofZxWNVgwLlsA+Y1A+aovwMPsYtGYMC3+bBfClR+6ovwMHsYpiOwra/Ngo0xmlIcajjxCUglzZ6nopJ5PKzGZ90eSxTkrDI9/nGGoHYNATxIHEUnFvPw2CVHJLLV27SxBLtDIroWREVjEKNoYwjsDZkWK27ca304DwxRSrPhkTapLjn7ilTXdJFFDQ0y0VpRLIIHJ35R5pF9QBrZbmxJ7cRlUvlFW4jqGd27lJspfMiaioyjNqed9ZGpaIvHIf2gp3d0nnYkdluGHccebi09yJ48OSkmu8VzKlloKKWnhyyupoJbdPUVcJVpQDcLwsq3sbXJJAudLYWV4qyTW9jQak7trwPoq2eseI0tFC2ZbgE1bKA5sugezaKbWu2p0vprdo1HK2FZ7TnFLW8thzfNKisalzhYaymVDI8lSQoSO9ukWUDeUX4WvfQbp4YdSqN4Z5rntBaCV4ZPdwMxmENPHVzJRTPNTBiI5HTcLLyJHLEm0pWjqLRu1nrEJExWMgizJri6kAbiTGaUgjcSYg3cI5DCXZUVSzMbBQLkk8gMKC5q5vKZcynpUmhVEhQVs7oHAKxLHISeJ1uBbiT340ylJycb9/lZmdWwp+XndC/lxprxZQrUkdrGUH46TvLfJ+yth48cTx2yhl789w2G+cs/YCuXT1fxjjeJ+VISScBU3LMbEo5HKeWZY48nmlpyeBicqG+7jjulB5OwOjPWMU0i1tQpWOGDM9RFIqARzsQRusvmqxvow0J4jnh4yxPZL3/AGLJYVuFZzLU5NXEqBOlRAZ1C7vUVGQXUcADYHvIwG3KD23XkFWU14mdlTES4pKmKwkcKsuuNCYBqJcZpsKKeXOlPVRTSQJOiNdon4OOY7vHlhYuzu1cWSurJmtaKeOpnXK4KKkiIBhqIgRJIrrdFBdiVLA2uLahhfQ40u93gSX7M6assV2LSxGkyqCmsA9Q7TS7pBuqkoguNCLhz6RiLWGCW341fI6eKTewDFELje83n4YVIa5UqKKqrayGko+jDupIEjWQAdp5alVvrqw01xpVN1JWRFzUI3YGRTLlkbyBgxOgfzh3H88Tmmo2kMnnkTJIsRK3Kckc0tVT5pFUrA0sF6iQ2N2BKNdPlBrKSLW6+uLpNyU07XI3STg1cRr46ePLqyWryyjjquk6CFoJJLb9rubb5XqggaDiw00OBJJReJK+4aLbkkm7GVmXEE7GgUZdcXTAMwjEZMI9AvdhQM00NVURZRRT08hR4pHgdrAkgEOnEcOu+ndi6lJQTXd8r3ZBxTk0+ewLWJ8Vl3+TH9b4E/x7uJ0db7+AMo4iZol3nAuB2/ywqtfMNymMkjzWlT/20KoFKgrMsEgVrXUkM5HAXUqOHEWx6dKjhzUjJKs0+qBzSlNIIYY6uCdgQqxRBSETmSRISNOZGptwvpnr0VFYnIrSqYuwQlTGMuEqZZYMpoWgkeNi06kobG14zx9GHbcYxtv+BUk5O+4n5+zWo4HYsyQCWQniXlPSEn0Mg9GBUepbvV5jU1rfOWRn5lxIshNhriiZweHCPWcPwDAFLtId7I6leSVcJHpSW/8AIYos4Nb18k3113P4KFWPi8v/AMov9b4af493yxI6338A+WUzVtYlLEyoxK3ZhcKCbcOfhilGi6gtSooItZts/LlFOtUlQspkmigbcUwtd3CLqCbjeYX7Bc68DqejSguhIhGspuzQSv2TmpKGapSqhZ1UuydAVDH7W8fvtjp6HfPFmCOk52sZN2VwSOTFTftBIP5jGCUcLaZsTurnGZaZPQ/4k/8AwwZ9SPj8HQ678BLaYWzeoX9kIvoCKP8AbArfyPnsDS6iM/NiRVCbccOghIThZazh+A8MAUvZSRLQZhTjzjGs69/Rk3/0ux9GKw6sl4+ROetPnMelPSZdQTjUIrU79xDFh+Tj7jgvOKfgKspNDOR11PQZk1TVSIkcaRsSzqum+e0gY2aHqZDSE3ZIubRbX5NW5bEkNSpK11I5s6vYLURsdFJPAE9mnbjZJqxCnTkpeD9hzMNsMmqqWaliqo+lkUooM8XH0PfBchFTkszCBurJ/jS/1tjyK/8AJI9GHVQzV07VHwXlqG0ki7zfV6Rrg+qFOBKOLDDnMEXbFPnIi51VLWZjVVMfmSysyD6pOn5WxOcsUmysI4YpEec4QdCTccUQSnskcvqdo6CkzLo5KaeUwSIWsbuCq2I1BDFdcaKEf/S0lkyVbEqbcTUbS7EZhkTNPSB63Lxr0ireSMfXUcvrDTtAwa2iSjnDNEaWkxnlLJkfLaxqaohqYSpZDvC+oYcwe4i48DjIm4u5eUVJWZeRoKe7AO+VVnAjVoXGoH2luftKe/SuS/q/T9r1RLN/2XPOwFUUjUzpJIsciN/8p1F1cdx/24jnhXFx7gxakcF1YdYA+IwtxjiSRd0ggbvZyxxwSGmipIUqK2MR04F4qe26Z/Ack7W+7XFLW6U/9/W8Ru7tH/AdXUSU0U1XVN/b61TuLaxjjbQvblcdVR+ySezHNtXb1vn/AA5JPJakRKWkq8yq1pMvp5KidvkRjgO0ngo7zYYSnTlUdoorKcYK8mX9o9k6bZjZGWtzSWOXNKiSOGIX+LhJO8272tuq3WPoA1vuejxpUm9bM1OvKrVSjqPPekR9UYMO1TfGRQew2vI9V2G29nzUx5XmNB5XmRU9BPGgAlI/eadXvYad17A+lSrY8mszza+jqHSi8jay7PLOFqGraqOv1L1EMzosh7CgaxUWAA4gDjxJvYzY+zsMbtfsnNHC9ZS0FVLWb43no2Ro2XmzoRv3OvDeOupOM2kUVKLaV2aaFazs3kZOgzCSjllisrA9WemmGjdgZeIPYdCMeYnKDs0bZRUlcr0lTCN45dXGkMnn01X1o2/isVb+IDxOHi1+LtufNvOxOSf5K/cNBK5xcZTl8/1oipH+h7YdRm/xXPiL0V+T58DhmrYTcw5Xl5HB3KFh4AlmHoGB012JeX7O6L7W+fAnz19LTyNMkj19WTc1FQDuKe0K2rHvaw7sI5RWet7WOotq2pCmWUVXtBmMbdBX1cMkn9ompbbx7fjH6gN7cTyOKUKUpzvJNo6pONONk0mel5fsmsdKKbpJ6OlvcxU1QyySfbdN3lx0J+tj1FFJWR50qjbu82Hzaoh2Xop6uWnkqMrRd8xIu+0D91/knmeR14HqlvCrgjF1JWWs8lzf9Iu0NZXPLQ1XwdT8Ep4Y0YAd5ZTc/cO7GN6RJvI9CGjU0s1ch7NbQ5hs9XeV5ZIisw3ZEkQMsi9h5j0EYSM3Td0VqU41FZnruzv6UMnzFVjzQHLajmZDvQn+Pl/EB441Q0iEstRgqaJOPVzNzDLHPGssMiSRsLq6NcEeIxcykraWngloulny2nrwjAGOWEObEgXBPC17k8hfAaTWaHg2nk7GNXI8okh8rqcneEzNIYoqOukkcKmnmAbo5HjpvAE4g9HpPXEv9aoslI6/+N5D8Y06Z7T9HFHK6sImKq5IXzQTxUi3HTCfaUdgfuKnY0NR7KZGtQacUOc1MgTpCrSJFZbkcbpzBwVotHYD7irruj6ijySGGlmyzZymk35GTfrZy7RssbSEXIfrDcKsL6HTwrGEI9WIJSqO+KRt8rmlqMvp5p4o4WkjDdHGxYKCLgXsP5YqjO9Ynnm0uT5Et8zroontcQg70jeCDX04WU4xV2xoUpz6qPLtrP0o1mYRS0mSweR0zgq0swDyuvMW1VQfSfDGWek3yibqWiKOc8zzYtbQYikawcb4pKJw1HJ34zyiEpZZm1dlkm/ltbUUrXuehkKhj3rwPpBwIznDqsWUIz6yuamD9I2cvB5PmUdFmEBsWE8O6xINwQVIAINje3LFVpk11lcg9Ehri7FJf0hUk2XLRTZPJTKPnKWp6+vnEHdWxYXue/FFpsLZpk3ock7phJ9tchqYaeOWjztOhjSO8UsYMoQ3XpDvXe2uh06x7cN95S3g+1qLtR2n242cfMJswXZ2SSonAEvTLDaQr5pJ6xuBpp2+Fg9MpbDvtatrYiZXbdxOytQbO5fTPGGWJ3kZ91WUqRZd2wIJ0Btzwj01dkR1on/UiPmO2m0FbEIGzKWCAKFEVL8UAB3jrfniT0mrLcVjo9OOdrmbkkuzMTdmNyTxJ78Ik27ssLSPi0YgAFtcWSAffC8P0PQ+vP7zDB+nvfpwO6ZzFf8Auih9ef3mEaWwb6e9+nAajzaI/qqi9ef3mJytsB9Pe/TgHXNIvouj9eb3mJPDs9wYXt9uAUZpF9F0frTe8wvR2e42B7X6cDn4Ti+jKP15veYHR2e/EGB7fbgfHNIvouj9ab3mO6Oz34nYHt9uB0bNIvouj9eb3mGWHZ7nOD2+3AC+axD9VUXrze8w6w7Pc7A9vtwFpM4iH6povXn95iqtsCqe9+nAA2cRHjlFD68/vMUVtgHT3v04HHwvD9D0Hrz+8wbg+nvfpwP/2Q==",Sm="/assets/evalute-BX6yR2Ew.jpeg",Cm="/assets/intern-DjGF8j8F.jpeg",Nm="/assets/nivlogo-Cf5Yp-cx.svg",D={aboutme:mm,resume:gm,mentor:vm,socio:Os,suny:xm,abundance:ym,associate:wm,evoluteiqInternshipCert:Os,sahyadriLogo:km,indraprasthaLogo:jm,evalute:Sm,intern:Cm,nivlogo:Nm},Em=()=>{const[e,t]=j.useState(!1),n=j.useRef(null);return j.useEffect(()=>{const r=setTimeout(()=>t(!0),1200);return()=>clearTimeout(r)},[]),j.useEffect(()=>{const r=()=>{const i=window.scrollY,o=Math.min(12,i*.04);n.current&&(n.current.style.transform=`translateY(${o}px)`)};return window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[]),a.jsxs("section",{id:"home",style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",paddingTop:"80px",position:"relative",overflow:"hidden"},children:[a.jsx("div",{className:"container",style:{position:"relative",zIndex:1},children:a.jsxs("div",{style:{maxWidth:880,margin:"0 auto",textAlign:"center"},children:[a.jsx("style",{children:`
            .intro-up { opacity: 0; transform: translateY(20px); animation: intro 800ms ease forwards; }
            .intro-up.delay-1 { animation-delay: 200ms; }
            .intro-up.delay-2 { animation-delay: 400ms; }
            .intro-up.delay-3 { animation-delay: 600ms; }
            @keyframes intro { to { opacity: 1; transform: translateY(0); } }

            .avatar-ring {
              width: 160px; height: 160px; border-radius: 9999px; padding: 3px;
              background: conic-gradient(from 180deg at 50% 50%, #60a5fa, #22d3ee, #1e3a8a, #60a5fa);
              margin: 0 auto 18px; display: grid; place-items: center;
              transition: transform 400ms ease;
            }
            .avatar-ring:hover { transform: scale(1.03) rotate(2deg); }
            .avatar-img { width: 100%; height: 100%; border-radius: 9999px; object-fit: cover; display: block; }

            .scroll-indicator { position: absolute; bottom: 24px; left: 50%; transform: translateX(-50%); color: var(--text-color); opacity: 0.7; cursor:pointer; }
            .scroll-indicator span { display: inline-block; animation: bounce 1.2s infinite; }
            @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(4px); } }
          `}),a.jsx("div",{className:e?"intro-up":"",children:a.jsx("div",{className:"avatar-ring",ref:n,style:{width:132,height:132},children:a.jsx("img",{src:D.aboutme,alt:"Ankush Bhat",className:"avatar-img"})})}),a.jsx("h1",{className:`gradient-text ${e?"intro-up delay-1":""}`,style:{fontSize:"clamp(40px, 7vw, 72px)",fontWeight:800,letterSpacing:.5,marginTop:8},children:"Passionate Frontend Developer"}),a.jsx("h2",{className:e?"intro-up delay-2":"",style:{fontSize:"clamp(16px, 2.6vw, 22px)",color:"var(--text-secondary)",marginTop:8},children:"Full‑Stack & Cloud Enthusiast"}),a.jsxs("div",{className:e?"intro-up delay-3":"",style:{marginTop:28,display:"flex",gap:12,justifyContent:"center"},children:[a.jsx("a",{href:"#projects",className:"btn-gradient",style:{padding:"0.9rem 1.25rem",borderRadius:9999},children:"View Work"}),a.jsx("a",{href:"/case-studies/suny-art-school",className:"btn",style:{borderRadius:9999},children:"Featured Case Study"})]})]})}),a.jsx("a",{href:"#work","aria-label":"Scroll to Work",className:"scroll-indicator",children:a.jsx("span",{children:"↓"})})]})},bm=()=>{const e=[{title:"Cloud Explorer-Technology",company:"Niveus Solutions part of NTT Data",location:"Mangaluru, Karnataka, India",employmentType:"Full-time",logo:D.nivlogo,date:"May 2025 - Present",duration:"1 mo",skills:["React.js","Node.js","Google Cloud Platform (GCP)","Cascading Style Sheets (CSS)","PostgreSQL","Postman"],description:["Developed responsive UI components using React JS with Ant Design and PrimeReact libraries, ensuring consistent design patterns and optimal performance.","Contributed to the development of library for multiple functions of a table component.","Collaborated with cross-functional teams to gather requirements, debug issues, and implement front-end and back-end solutions aligned with needs of the project."]},{title:"Software Engineer-Intern",company:"Niveus Solutions part of NTT Data",location:"Mangaluru, Karnataka, India",employmentType:"Internship",logo:D.nivlogo,date:"November 2024 - May 2025",duration:"6 mos",skills:["React.js","Node.js","Google Cloud Platform (GCP)","Cascading Style Sheets (CSS)","PostgreSQL"],description:["Developed responsive UI components using React JS with Ant Design and PrimeReact libraries, ensuring consistent design patterns and optimal performance.","Contributed to the development of library for multiple functions of a table component.","Collaborated with cross-functional teams to gather requirements, debug issues, and implement front-end and back-end solutions aligned with needs of the project."],certificate:"Internship completion certificate",certificateUrl:D.intern},{title:"Intern",company:"EvoluteIQ",location:"Remote",employmentType:"Internship",logo:"https://evoluteiq.com/wp-content/uploads/2025/02/logo-n-evoluteiq.png",url:"https://evoluteiq.com/",date:"February 2024 - April 2024",duration:"3 mos",skills:["Robotic Process Automation (RPA)","UiPath","Automation Anywhere"],description:["Worked on automating business processes using the EvoluteIQ Hyperautomation platform combining RPA, AI, ML, and workflow orchestration.","Assisted in building UI components and integrations for low-code/no-code automation dashboards using React and Node.js.","Collaborated with senior engineers to streamline data flows and automate repetitive tasks, reducing manual effort by over 30%."],certificate:"Internship completion certificate",certificateUrl:D.evalute}],[t,n]=j.useState({}),r=o=>{n({...t,[o]:!t[o]})},i=(o,l)=>{const s=t[l],u=2;return o.length<=u||s?o.map((c,f)=>a.jsxs("div",{className:"skill-badge",children:[a.jsx("span",{className:"skill-icon",children:"♦"}),a.jsx("span",{children:c})]},f)):a.jsxs(a.Fragment,{children:[o.slice(0,u).map((c,f)=>a.jsxs("div",{className:"skill-badge",children:[a.jsx("span",{className:"skill-icon",children:"♦"}),a.jsx("span",{children:c})]},f)),a.jsx("div",{className:"skill-badge more-skills",onClick:()=>r(l),children:a.jsxs("span",{children:["+",o.length-u," more"]})})]})};return a.jsx("section",{id:"experience",style:{padding:"100px 0"},children:a.jsxs("div",{className:"container",children:[a.jsx("style",{children:`
            .experience-container {
              max-width: 800px;
              margin: 0 auto;
              font-family: var(--font-sans);
              color: var(--text-primary);
            }
            
            .experience-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 20px;
              padding-bottom: 10px;
              border-bottom: 1px solid var(--text-secondary);
            }
            
            .experience-title {
              font-size: 20px;
              font-weight: 600;
              margin: 0;
            }
            
            .job-entry {
              display: flex;
              margin-bottom: 24px;
              padding-bottom: 24px;
              border-bottom: 1px solid rgba(255, 255, 255, 0.1);
              position: relative;
            }
            
            .job-entry:last-child {
              border-bottom: none;
            }
            
            .logo-container {
              width: 48px;
              height: 48px;
              margin-right: 12px;
              border-radius: 8px;
              overflow: hidden;
              background-color: white;
              padding: 4px;
              flex-shrink: 0;
            }
            
            .job-details {
              flex: 1;
            }
            
            .job-company {
              font-size: 18px;
              font-weight: 600;
              margin-bottom: 4px;
              color: var(--text-primary);
            }
            
            .job-title {
              font-size: 16px;
              font-weight: 500;
              margin-bottom: 4px;
              color: var(--text-primary);
              display: flex;
              align-items: center;
              gap: 8px;
            }
            
            .job-meta {
              font-size: 14px;
              color: var(--text-secondary);
              margin-bottom: 4px;
            }
            
            .job-duration {
              display: flex;
              align-items: center;
              gap: 8px;
              margin-bottom: 8px;
              font-size: 14px;
              color: var(--text-secondary);
            }
            
            .job-skills {
              display: flex;
              align-items: center;
              margin-top: 12px;
              margin-bottom: 16px;
              flex-wrap: wrap;
              gap: 8px;
            }
            
            .skill-badge {
              background-color: var(--secondary-color);
              color: var(--accent-color);
              padding: 4px 8px;
              border-radius: 4px;
              font-size: 14px;
              font-weight: 500;
              display: flex;
              align-items: center;
              gap: 6px;
              border: 1px solid var(--accent-color);
            }
            
            .skill-icon {
              color: var(--accent-color);
            }
            
            .more-skills {
              cursor: pointer;
              background-color: rgba(100, 255, 218, 0.1);
              transition: all 0.2s ease;
            }
            
            .more-skills:hover {
              background-color: rgba(100, 255, 218, 0.2);
              transform: translateY(-2px);
            }
            
            .job-description {
              margin-top: 16px;
            }
            
            .job-bullet {
              position: relative;
              padding-left: 24px;
              margin-bottom: 12px;
              line-height: 1.5;
              color: var(--text-secondary);
            }
            
            .job-bullet:before {
              content: "▹";
              position: absolute;
              left: 0;
              color: var(--accent-color);
            }
            
            .job-bullet:hover {
              color: var(--text-primary);
            }
            
            .certificate-badge {
              display: inline-flex;
              align-items: center;
              gap: 8px;
              background-color: rgba(100, 255, 218, 0.1);
              color: var(--accent-color);
              border: 1px solid var(--accent-color);
              padding: 4px 12px;
              border-radius: 4px;
              font-size: 14px;
              margin-top: 12px;
              cursor: pointer;
              transition: all 0.2s ease;
            }
            
            .certificate-badge:hover {
              background-color: rgba(100, 255, 218, 0.2);
              transform: translateY(-2px);
            }
            
            .timeline-marker {
              position: absolute;
              left: 24px;
              top: 48px;
              bottom: 0;
              width: 2px;
              background-color: var(--accent-color);
              opacity: 0.3;
              z-index: 1;
            }
            
            .new-role-badge {
              background-color: var(--accent-color);
              color: var(--dark-navy);
              font-size: 12px;
              padding: 2px 8px;
              border-radius: 12px;
              font-weight: 500;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            
            .employment-type {
              font-size: 14px;
              color: var(--text-secondary);
              margin-bottom: 4px;
            }
          `}),a.jsxs("h2",{className:"section-title fade-in",style:{alignItems:"baseline",gap:8},children:[a.jsx("span",{className:"number",children:"02."}),a.jsx("span",{className:"gradient-text",style:{fontWeight:800},id:"work",children:"Work"}),a.jsx("span",{"aria-hidden":!0,style:{flex:1,height:2,background:"linear-gradient(90deg, transparent, var(--accent-color))",borderRadius:2}})]}),a.jsxs("div",{className:"experience-container fade-in",children:[a.jsx("div",{className:"experience-header",children:a.jsx("h3",{className:"experience-title",children:"Experience"})}),a.jsx("div",{className:"job-timeline",children:e.map((o,l)=>a.jsxs("div",{className:"job-entry",children:[l<e.length-1&&a.jsx("div",{className:"timeline-marker"}),a.jsx("div",{className:"logo-container",children:a.jsx("img",{src:o.logo,alt:`${o.company} logo`,style:{width:"100%",height:"100%",objectFit:"contain"},onError:s=>{s.currentTarget.src="/placeholder.svg"}})}),a.jsxs("div",{className:"job-details",children:[a.jsx("h4",{className:"job-company",children:o.company}),a.jsx("div",{className:"job-title",children:o.title}),a.jsx("div",{className:"employment-type",children:o.employmentType}),a.jsx("div",{className:"job-meta",children:o.location}),a.jsxs("div",{className:"job-duration",children:[a.jsx("span",{children:o.date}),a.jsx("span",{children:"·"}),a.jsx("span",{children:o.duration})]}),a.jsx("div",{className:"job-skills",children:i(o.skills,l)}),a.jsx("div",{className:"job-description",children:o.description.map((s,u)=>a.jsx("div",{className:"job-bullet",children:s},u))}),o.certificate&&a.jsxs("a",{href:o.certificateUrl,target:"_blank",rel:"noopener noreferrer",className:"certificate-badge",children:[a.jsx("span",{children:"📄"}),a.jsx("span",{children:o.certificate})]})]})]},l))})]})]})})},Pm=()=>{const[e,t]=j.useState("all"),r=[{caseStudyId:"suny-art-school",title:"Suny Art School",description:"Built a Website for a Art School using HTML, CSS, and JavaScript.",technologies:["HTML5","CSS3","JavaScript"],image:D.suny,github:"https://github.com/dileepbaliga/MyWebSite",external:"https://sunyartschool.netlify.app/",category:"frontend"},{caseStudyId:"mentor-mentee-dms",title:"Mentor-Mentee Database Management System",description:"A database management system designed for mentor-mentee interactions, allowing mentors to perform CRUD operations and mentees to view their updated marks and other relevant information.",technologies:["PHP","JavaScript","CSS","SCSS","Hack"],image:D.mentor,github:"https://github.com/BhatAnkush/Mentor-Mentee",external:null,category:"fullstack"},{caseStudyId:"socio",title:"SOCiO",description:"A social media application crafted with the power of React! Connect, share, and stay engaged with a vibrant community.",technologies:["Reactjs","Nodejs","CSS"],image:D.socio,github:"https://github.com/BhatAnkush/SOCiO",external:null,category:"fullstack"},{title:"Portfolio Website",description:"A responsive personal portfolio website built with HTML5 and custom CSS3 animations.",technologies:["HTML5","CSS3","JavaScript"],image:"https://imgs.search.brave.com/Gdgw6Ki6SWkjnLLa_mB3Zv9-XtGmjO2qjMbMC11EUco/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc1/NDMxOTQ3L3Bob3Rv/L3BvcnRmb2xpby5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/OXBiMEFxY1dxaktJ/MmJKSl9wUmlkWnli/NWNLeHBkU1ZCNmRn/WU9wREx3ST0",github:"https://github.com/BhatAnkush/BhatAnkush.github.io",external:"https://BhatAnkush.github.io",category:"frontend"},{title:"Diabetic Retinopathy Detection",description:"Machine learning techniques to detect diabetic retinopathy using fundus images of the retina.",technologies:["Python","Flask","TensorFlow/Keras","HTML5","CSS3","JavaScript"],image:"https://imgs.search.brave.com/1GYM3LOIdsP9KrvqzD-7UxIYyEwAvsDbwrF3826C1u4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2FuaXR5LmlvL2lt/YWdlcy8wdnY4bW9j/Ni9vcGh0YWxtb2xv/Z3kvZjhlMDdlNGI4/NzY1ZDRmMWU0MjBj/YThmZGMxZDNlYjFm/YzlmNDcyNS0xMjAw/eDgwMC5qcGc_Zml0/PWNyb3AmYXV0bz1m/b3JtYXQ",github:"https://github.com/BhatAnkush/Final_Project",external:null,category:"fullstack"},{title:"Netflix Clone",description:"A Netflix Clone application.",technologies:["HTML5","CSS3","JavaScript"],image:"https://imgs.search.brave.com/UY8xRCocZrirw5j2WNGUgusWU-Euxq_usIMlKGW5Ndc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTIuZGV2LnRvL2R5/bmFtaWMvaW1hZ2Uv/d2lkdGg9ODAwLGhl/aWdodD0sZml0PXNj/YWxlLWRvd24sZ3Jh/dml0eT1hdXRvLGZv/cm1hdD1hdXRvL2h0/dHBzOi8vZGV2LXRv/LXVwbG9hZHMuczMu/YW1hem9uYXdzLmNv/bS91cGxvYWRzL2Fy/dGljbGVzL3A5YnZp/MTJ3YnhuZXljNmV5/aHd6LlBORw",github:"https://github.com/BhatAnkush/netflix_clone",external:null,category:"frontend"}].filter(i=>e==="all"?!0:i.category===e);return a.jsx("section",{id:"projects",style:{padding:"100px 0"},children:a.jsxs("div",{className:"container",children:[a.jsx("style",{children:`
            .project-card {
              position: relative;
              background-color: var(--secondary-color);
              border-radius: 4px;
              box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
              transition: all 0.3s ease;
              overflow: hidden;
              height: 100%;
              display: flex;
              flex-direction: column;
            }
            
            .project-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
            }
            
            .project-image-container {
              position: relative;
              overflow: hidden;
              border-top-left-radius: 4px;
              border-top-right-radius: 4px;
            }
            .project-overlay { position: absolute; inset: 0; display: grid; place-items: center; background: rgba(0,0,0,0.35); opacity: 0; transition: opacity 0.3s ease; }
            .project-image-container:hover .project-overlay { opacity: 1; }
            
            .project-image {
              width: 100%;
              height: 200px;
              object-fit: cover;
              border-top-left-radius: 4px;
              border-top-right-radius: 4px;
              transition: transform 0.3s ease;
            }
            
            .project-image-container:hover .project-image {
              transform: scale(1.05);
            }
            
            .project-content {
              padding: 25px;
              flex-grow: 1;
              display: flex;
              flex-direction: column;
            }
            
            .project-title {
              font-size: 1.25rem;
              color: var(--white);
              margin-bottom: 10px;
            }
            
            .project-description {
              color: var(--text-secondary);
              font-size: 0.9rem;
              margin-bottom: 20px;
              flex-grow: 1;
            }
            
            .tech-list {
              display: flex;
              flex-wrap: wrap;
              gap: 10px;
              margin-bottom: 20px;
              padding: 0;
              list-style: none;
            }
            
            .tech-item {
              font-family: var(--font-mono);
              font-size: 0.7rem;
              color: var(--text-secondary);
              background-color: rgba(100, 255, 218, 0.1);
              padding: 3px 8px;
              border-radius: 3px;
              transition: all 0.2s ease;
            }
            
            .tech-item:hover {
              color: var(--accent-color);
              background-color: rgba(100, 255, 218, 0.2);
            }
            
            .project-links {
              display: flex;
              gap: 15px;
            }
            
            .project-link {
              color: var(--white);
              font-size: 1rem;
              transition: all 0.2s ease;
              text-decoration: none;
              display: flex;
              align-items: center;
              gap: 5px;
            }
            
            .project-link:hover {
              color: var(--accent-color);
              transform: translateY(-2px);
            }
            
            .filter-container {
              display: flex;
              justify-content: center;
              margin-bottom: 40px;
            }
            
            .filter-buttons {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 10px;
            }
            
            .filter-btn {
              font-size: 0.8rem;
              padding: 0.5rem 1rem;
              background-color: transparent;
              border: 1px solid var(--text-secondary);
              color: var(--text-secondary);
              border-radius: 4px;
              cursor: pointer;
              transition: all 0.3s ease;
            }
            
            .filter-btn:hover {
              background-color: rgba(100, 255, 218, 0.05);
              border-color: var(--accent-color);
              color: var(--accent-color);
            }
            
            .filter-btn.active {
              background-color: rgba(100, 255, 218, 0.1);
              border-color: var(--accent-color);
              color: var(--accent-color);
            }
            
            .projects-grid {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
              gap: 25px;
            }
            
            @media (max-width: 768px) {
              .projects-grid {
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
              }
            }
            
            @media (max-width: 480px) {
              .filter-buttons {
                gap: 5px;
              }
              
              .filter-btn {
                font-size: 0.7rem;
                padding: 0.4rem 0.8rem;
              }
            }
          `}),a.jsxs("h2",{className:"section-title fade-in",children:[a.jsx("span",{className:"number",children:"03."})," Some Things I've Built"]}),a.jsx("div",{className:"filter-container fade-in",children:a.jsxs("div",{className:"filter-buttons",children:[a.jsx("button",{className:`filter-btn ${e==="all"?"active":""}`,onClick:()=>t("all"),children:"All"}),a.jsx("button",{className:`filter-btn ${e==="frontend"?"active":""}`,onClick:()=>t("frontend"),children:"Frontend"}),a.jsx("button",{className:`filter-btn ${e==="fullstack"?"active":""}`,onClick:()=>t("fullstack"),children:"Full Stack"})]})}),a.jsx("div",{className:"projects-grid",children:r.map((i,o)=>a.jsxs("div",{className:"project-card fade-in",children:[a.jsxs("div",{className:"project-image-container",children:[a.jsx("img",{src:i.image,alt:i.title,className:"project-image",onError:l=>{l.currentTarget.src="/placeholder.svg"}}),a.jsx("div",{className:"project-overlay",children:a.jsx("a",{href:`/case-studies/${i.caseStudyId||i.title.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`,className:"btn-gradient",style:{padding:"0.45rem 0.8rem",borderRadius:8},children:"View Case Study"})})]}),a.jsxs("div",{className:"project-content",children:[a.jsx("h3",{className:"project-title",children:i.title}),a.jsx("p",{className:"project-description",children:i.description}),a.jsx("ul",{className:"tech-list",children:i.technologies.map((l,s)=>a.jsx("li",{className:"tech-item",children:l},s))}),a.jsxs("div",{className:"project-links",children:[i.github&&a.jsxs("a",{href:i.github,target:"_blank",rel:"noopener noreferrer","aria-label":`GitHub repository for ${i.title}`,className:"btn-gradient",style:{display:"inline-flex",alignItems:"center",gap:6,padding:"0.5rem 0.8rem",borderRadius:10},children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})}),"GitHub"]}),i.external&&a.jsxs("a",{href:i.external,target:"_blank",rel:"noopener noreferrer","aria-label":`Live demo for ${i.title}`,className:"btn-gradient",style:{display:"inline-flex",alignItems:"center",gap:6,padding:"0.5rem 0.8rem",borderRadius:10},children:[a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),a.jsx("polyline",{points:"15 3 21 3 21 9"}),a.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),"Live Demo"]})]})]})]},o))})]})})},zm=()=>{const[e,t]=j.useState({name:"",email:"",subject:"",message:""}),[n,r]=j.useState(""),[i,o]=j.useState(!1),l=f=>t({...e,[f.target.name]:f.target.value}),s=async f=>{f.preventDefault(),o(!0),r("Sending message..."),setTimeout(()=>{const d=new URLSearchParams({subject:e.subject||`Message from ${e.name}`,body:`From: ${e.name} (${e.email})

Message:
${e.message}`});window.location.href=`mailto:ankushbhataab@gmail.com?${d.toString()}`,r("Message sent successfully!"),t({name:"",email:"",subject:"",message:""}),o(!1),setTimeout(()=>r(""),3e3)},1500)},u=[{icon:Bn,label:"Email",value:"ankushbhataab@gmail.com",link:"mailto:ankushbhataab@gmail.com"},{icon:um,label:"Phone",value:"+91 6360751937",link:"tel:+916360751937"},{icon:gd,label:"Location",value:"Available for Remote Work",link:null}],c=[{icon:sa,label:"LinkedIn",link:"https://linkedin.com/in/ankush-bhat",color:"#0077B5"},{icon:aa,label:"GitHub",link:"https://github.com/BhatAnkush",color:"#333"}];return a.jsxs("section",{id:"contact",style:{padding:"100px 0",minHeight:"100vh"},children:[a.jsx("style",{children:`
          .contact-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }
          
          .contact-header {
            text-align: center;
            margin-bottom: 80px;
          }
          
          .contact-title {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 800;
            background: linear-gradient(135deg, var(--accent-color), #00d4ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 20px;
          }
          
          .contact-subtitle {
            font-size: 1.3rem;
            color: var(--text-secondary);
            max-width: 600px;
            margin: 0 auto 30px;
            line-height: 1.6;
          }
          
          .contact-description {
            color: var(--text-secondary);
            max-width: 500px;
            margin: 0 auto;
            line-height: 1.6;
          }
          
          .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: start;
          }
          
          .contact-form-section {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 40px;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
          }
          
          .contact-form-section:hover {
            border-color: rgba(100, 255, 218, 0.3);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }
          
          .form-title {
            font-size: 1.8rem;
            color: var(--white);
            margin-bottom: 10px;
          }
          
          .form-subtitle {
            color: var(--text-secondary);
            margin-bottom: 30px;
            line-height: 1.5;
          }
          
          .form-group {
            margin-bottom: 25px;
          }
          
          .form-label {
            display: block;
            color: var(--white);
            font-weight: 500;
            margin-bottom: 8px;
            font-size: 0.9rem;
          }
          
          .form-input, .form-textarea {
            width: 100%;
            padding: 15px 18px;
            border: 2px solid rgba(255, 255, 255, 0.1);
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            color: var(--white);
            font-size: 1rem;
            transition: all 0.3s ease;
            outline: none;
          }
          
          .form-input:focus, .form-textarea:focus {
            border-color: var(--accent-color);
            background: rgba(255, 255, 255, 0.08);
            box-shadow: 0 0 0 3px rgba(100, 255, 218, 0.1);
          }
          
          .form-textarea {
            resize: vertical;
            min-height: 120px;
            font-family: inherit;
          }
          
          .submit-btn {
            width: 100%;
            padding: 15px 20px;
            background: linear-gradient(135deg, var(--accent-color), #00d4ff);
            color: var(--primary-color);
            border: none;
            border-radius: 12px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
          }
          
          .submit-btn:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(100, 255, 218, 0.3);
          }
          
          .submit-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
          }
          
          .status-message {
            text-align: center;
            margin-top: 15px;
            padding: 10px;
            border-radius: 8px;
            font-weight: 500;
          }
          
          .status-success {
            color: #22c55e;
            background: rgba(34, 197, 94, 0.1);
          }
          
          .status-sending {
            color: var(--accent-color);
            background: rgba(100, 255, 218, 0.1);
          }
          
          .contact-info-section {
            display: flex;
            flex-direction: column;
            gap: 40px;
          }
          
          .contact-info-card {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 30px;
            transition: all 0.3s ease;
          }
          
          .contact-info-card:hover {
            border-color: rgba(100, 255, 218, 0.3);
            transform: translateY(-5px);
          }
          
          .info-title {
            font-size: 1.5rem;
            color: var(--white);
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          
          .contact-methods {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          
          .contact-method {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 15px;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.03);
            transition: all 0.3s ease;
            text-decoration: none;
            color: inherit;
          }
          
          .contact-method:hover {
            background: rgba(100, 255, 218, 0.1);
            transform: translateX(5px);
          }
          
          .method-icon {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, var(--accent-color), #00d4ff);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary-color);
            font-size: 1.1rem;
          }
          
          .method-info {
            flex: 1;
          }
          
          .method-label {
            font-size: 0.8rem;
            color: var(--text-secondary);
            margin-bottom: 2px;
          }
          
          .method-value {
            color: var(--white);
            font-weight: 500;
          }
          
          .social-links {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
          }
          
          .social-link {
            width: 50px;
            height: 50px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
            color: var(--white);
            font-size: 1.2rem;
          }
          
          .social-link:hover {
            transform: translateY(-3px);
            border-color: var(--accent-color);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          }
          
          .cta-section {
            text-align: center;
            margin-top: 60px;
            padding: 40px;
            background: linear-gradient(135deg, rgba(100, 255, 218, 0.1), rgba(0, 212, 255, 0.1));
            border-radius: 20px;
            border: 1px solid rgba(100, 255, 218, 0.2);
          }
          
          .cta-title {
            font-size: 1.8rem;
            color: var(--white);
            margin-bottom: 15px;
          }
          
          .cta-text {
            color: var(--text-secondary);
            margin-bottom: 25px;
            line-height: 1.6;
          }
          
          .cta-buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
            flex-wrap: wrap;
          }
          
          .cta-btn {
            padding: 12px 25px;
            border-radius: 25px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          
          .cta-primary {
            background: linear-gradient(135deg, var(--accent-color), #00d4ff);
            color: var(--primary-color);
          }
          
          .cta-secondary {
            background: transparent;
            color: var(--accent-color);
            border: 2px solid var(--accent-color);
          }
          
          .cta-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          }
          
          @media (max-width: 768px) {
            .contact-grid {
              grid-template-columns: 1fr;
              gap: 40px;
            }
            
            .contact-form-section,
            .contact-info-card {
              padding: 25px;
            }
            
            .contact-header {
              margin-bottom: 50px;
            }
            
            .social-links {
              justify-content: center;
            }
            
            .cta-buttons {
              flex-direction: column;
              align-items: center;
            }
            
            .cta-btn {
              width: 200px;
              justify-content: center;
            }
          }
          
          @media (max-width: 480px) {
            .contact-methods {
              gap: 15px;
            }
            
            .contact-method {
              padding: 12px;
            }
            
            .method-icon {
              width: 35px;
              height: 35px;
            }
          }
        `}),a.jsxs("div",{className:"contact-container",children:[a.jsxs("div",{className:"contact-header",children:[a.jsx("h1",{className:"contact-title",children:"Let's Work Together"}),a.jsx("p",{className:"contact-subtitle",children:"Ready to bring your ideas to life? Let's discuss your next project."}),a.jsx("p",{className:"contact-description",children:"I'm always interested in new opportunities, collaborations, and challenging projects. Whether you have a question or just want to say hi, feel free to reach out!"})]}),a.jsxs("div",{className:"contact-grid",children:[a.jsxs("div",{className:"contact-form-section",children:[a.jsx("h2",{className:"form-title",children:"Send a Message"}),a.jsx("p",{className:"form-subtitle",children:"Fill out the form below and I'll get back to you as soon as possible."}),a.jsxs("form",{onSubmit:s,children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"name",children:"Full Name *"}),a.jsx("input",{id:"name",name:"name",type:"text",required:!0,value:e.name,onChange:l,className:"form-input",placeholder:"Enter your full name"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"email",children:"Email Address *"}),a.jsx("input",{id:"email",name:"email",type:"email",required:!0,value:e.email,onChange:l,className:"form-input",placeholder:"your.email@example.com"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"subject",children:"Subject"}),a.jsx("input",{id:"subject",name:"subject",type:"text",value:e.subject,onChange:l,className:"form-input",placeholder:"Project inquiry, collaboration, etc."})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",htmlFor:"message",children:"Message *"}),a.jsx("textarea",{id:"message",name:"message",required:!0,value:e.message,onChange:l,className:"form-textarea",placeholder:"Tell me about your project, timeline, budget, or any questions you have...",rows:5})]}),a.jsxs("button",{type:"submit",className:"submit-btn",disabled:i,children:[a.jsx(cm,{}),i?"Sending...":"Send Message"]}),n&&a.jsx("div",{className:`status-message ${n.includes("success")?"status-success":"status-sending"}`,children:n})]})]}),a.jsxs("div",{className:"contact-info-section",children:[a.jsxs("div",{className:"contact-info-card",children:[a.jsxs("h3",{className:"info-title",children:[a.jsx(Bn,{}),"Contact Information"]}),a.jsx("div",{className:"contact-methods",children:u.map((f,d)=>f.link?a.jsxs("a",{href:f.link,className:"contact-method",children:[a.jsx("div",{className:"method-icon",children:a.jsx(f.icon,{})}),a.jsxs("div",{className:"method-info",children:[a.jsx("div",{className:"method-label",children:f.label}),a.jsx("div",{className:"method-value",children:f.value})]})]},d):a.jsxs("div",{className:"contact-method",children:[a.jsx("div",{className:"method-icon",children:a.jsx(f.icon,{})}),a.jsxs("div",{className:"method-info",children:[a.jsx("div",{className:"method-label",children:f.label}),a.jsx("div",{className:"method-value",children:f.value})]})]},d))})]}),a.jsxs("div",{className:"contact-info-card",children:[a.jsxs("h3",{className:"info-title",children:[a.jsx(pm,{}),"Connect With Me"]}),a.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"20px",lineHeight:1.5},children:"Follow me on social media for updates on my latest projects and tech insights."}),a.jsx("div",{className:"social-links",children:c.map((f,d)=>a.jsx("a",{href:f.link,target:"_blank",rel:"noopener noreferrer",className:"social-link",title:f.label,style:{"--hover-color":f.color},children:a.jsx(f.icon,{})},d))})]})]})]}),a.jsxs("div",{className:"cta-section",children:[a.jsx("h2",{className:"cta-title",children:"Ready to Start Your Project?"}),a.jsx("p",{className:"cta-text",children:"I'm currently available for new projects and collaborations. Let's discuss how we can work together to bring your vision to life."}),a.jsxs("div",{className:"cta-buttons",children:[a.jsxs("a",{href:"mailto:ankushbhataab@gmail.com",className:"cta-btn cta-primary",children:[a.jsx(Bn,{}),"Email Me"]}),a.jsxs("a",{href:"/work",className:"cta-btn cta-secondary",children:[a.jsx(cl,{}),"View My Work"]})]})]})]})]})},Lm=()=>{const[e,t]=j.useState(typeof window<"u"?window.innerWidth:768);j.useEffect(()=>{const i=()=>{t(window.innerWidth)};return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]);const n=e<=768,r=[{name:"GitHub",url:"https://github.com/BhatAnkush",icon:a.jsx(aa,{size:18})},{name:"LinkedIn",url:"https://www.linkedin.com/in/ankushab/",icon:a.jsx(sa,{size:18})},{name:"Website",url:"https://bhatankush.onrender.com/",icon:a.jsx(md,{size:18})},{name:"Email",url:"mailto:ankushbhataab@gmail.com",icon:a.jsx(Bn,{size:18})}];return n?a.jsx("footer",{"aria-label":"Site footer",style:{marginTop:60,marginBottom:100,padding:"20px 0",textAlign:"center"},children:a.jsxs("div",{className:"container",children:[a.jsx("div",{style:{color:"var(--text-secondary)",fontSize:14,marginBottom:16,fontFamily:"var(--font-mono)"},children:"© 2025 / 0x4nku5h"}),a.jsx("div",{style:{display:"flex",gap:16,justifyContent:"center",alignItems:"center"},children:r.map(i=>a.jsx("a",{href:i.url,target:"_blank",rel:"noopener noreferrer","aria-label":i.name,style:{width:40,height:40,borderRadius:9999,display:"grid",placeItems:"center",color:"var(--text-secondary)",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",transition:"all 0.2s ease"},children:i.icon},i.name))})]})}):a.jsx("footer",{"aria-label":"Site footer",style:{marginTop:60,borderTop:"1px solid rgba(255,255,255,0.12)"},children:a.jsxs("div",{className:"container",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 0"},children:[a.jsxs("div",{style:{color:"var(--text-secondary)",fontSize:14},children:["© ",new Date().getFullYear()," / 0x4nku5h"]}),a.jsx("div",{style:{display:"flex",gap:12},children:r.slice(0,3).map(i=>a.jsx("a",{href:i.url,target:"_blank",rel:"noopener noreferrer","aria-label":i.name,style:{width:32,height:32,borderRadius:9999,display:"grid",placeItems:"center",color:"var(--text-secondary)"},children:i.icon},i.name))})]})})},Ds=[{id:"suny-art-school",title:"Suny Art School",description:"Website for an art school built with HTML, CSS, and JavaScript.",details:"Developed a responsive marketing site with clean information architecture, optimized images, and accessible navigation.",tech:["HTML5","CSS3","JavaScript"],image:D.suny,github:"https://github.com/dileepbaliga/MyWebSite",external:"https://sunyartschool.netlify.app/"},{id:"socio",title:"SOCiO",description:"A social app crafted with React: connect, share, and engage.",details:"Built modular React components, state management, and API integration. Focused on responsiveness and UX.",tech:["React","Node.js","CSS"],image:D.socio,github:"https://github.com/BhatAnkush/SOCiO",external:null},{id:"abudance-solar",title:"Abudance Solar",description:"Corporate website for a solar energy solutions provider.",details:"Developed a clean, professional website highlighting solar solutions, services, and sustainability. Focused on responsive layouts and optimized performance.",tech:["React","Tailwind CSS","JavaScript"],image:D.abundance,github:null,external:"https://www.dhxnush.com/work/abudancesolar"}],Rm=()=>{const{id:e}=Ch(),t=r=>r.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");let n=Ds.find(r=>r.id===e);return n||(n=Ds.find(r=>t(r.title)===e)),n?a.jsx("section",{style:{padding:"100px 0"},children:a.jsxs("div",{className:"container",style:{maxWidth:960},children:[a.jsx("h1",{className:"gradient-text",style:{fontSize:"clamp(28px,6vw,48px)",fontWeight:800},children:n.title}),a.jsx("p",{style:{color:"var(--text-secondary)",marginTop:10},children:n.description}),a.jsx("div",{style:{marginTop:24},children:a.jsx("img",{src:n.image,alt:n.title,style:{width:"100%",borderRadius:12}})}),a.jsx("h2",{style:{marginTop:24},children:"Overview"}),a.jsx("p",{style:{marginTop:8,color:"var(--text-secondary)"},children:n.details}),a.jsx("h3",{style:{marginTop:24},children:"Tech Stack"}),a.jsx("ul",{style:{display:"flex",gap:10,flexWrap:"wrap",marginTop:8,padding:0,listStyle:"none"},children:n.tech.map(r=>a.jsx("li",{className:"btn-gradient",style:{padding:"6px 10px",borderRadius:9999},children:r},r))}),a.jsxs("div",{style:{display:"flex",gap:12,marginTop:24},children:[n.github&&a.jsx("a",{href:n.github,target:"_blank",rel:"noopener noreferrer",className:"btn-gradient",style:{padding:"0.6rem 0.9rem",borderRadius:10},children:"GitHub"}),n.external&&a.jsx("a",{href:n.external,target:"_blank",rel:"noopener noreferrer",className:"btn-gradient",style:{padding:"0.6rem 0.9rem",borderRadius:10},children:"Live Demo"}),a.jsx(rt,{to:"/",className:"btn",style:{borderRadius:10},children:"Back"})]})]})}):a.jsxs("div",{className:"container",style:{padding:"100px 0"},children:[a.jsx("h2",{children:"Case Study Not Found"}),a.jsx(rt,{to:"/",className:"btn-gradient",style:{padding:"0.6rem 0.9rem",borderRadius:10},children:"Back Home"})]})},Fs=()=>{const[e,t]=j.useState("overview"),n=[{title:"Cloud Explorer-Technology",company:"Niveus Solutions part of NTT Data",location:"Mangaluru, Karnataka, India",employmentType:"Full-time",logo:D.nivlogo,date:"May 2025 - Present",duration:"1 mo",skills:["React.js","Node.js","Google Cloud Platform (GCP)","Cascading Style Sheets (CSS)","PostgreSQL","Postman"],description:["Developed responsive UI components using React JS with Ant Design and PrimeReact libraries, ensuring consistent design patterns and optimal performance.","Contributed to the development of library for multiple functions of a table component.","Collaborated with cross-functional teams to gather requirements, debug issues, and implement front-end and back-end solutions aligned with needs of the project."]},{title:"Software Engineer-Intern",company:"Niveus Solutions part of NTT Data",location:"Mangaluru, Karnataka, India",employmentType:"Internship",logo:D.nivlogo,date:"November 2024 - May 2025",duration:"6 mos",skills:["React.js","Node.js","Google Cloud Platform (GCP)","Cascading Style Sheets (CSS)","PostgreSQL"],description:["Developed responsive UI components using React JS with Ant Design and PrimeReact libraries, ensuring consistent design patterns and optimal performance.","Contributed to the development of library for multiple functions of a table component.","Collaborated with cross-functional teams to gather requirements, debug issues, and implement front-end and back-end solutions aligned with needs of the project."],certificate:"Internship completion certificate",certificateUrl:D.intern},{title:"Intern",company:"EvoluteIQ",location:"Remote",employmentType:"Internship",logo:"https://evoluteiq.com/wp-content/uploads/2025/02/logo-n-evoluteiq.png",date:"February 2024 - April 2024",duration:"3 mos",skills:["Robotic Process Automation (RPA)","UiPath","Automation Anywhere"],description:["Worked on automating business processes using the EvoluteIQ Hyperautomation platform combining RPA, AI, ML, and workflow orchestration.","Assisted in building UI components and integrations for low-code/no-code automation dashboards using React and Node.js.","Collaborated with senior engineers to streamline data flows and automate repetitive tasks, reducing manual effort by over 30%."],certificate:"Internship completion certificate",certificateUrl:D.evalute}],r=[{degree:"Bachelor of Engineering - Information Science",school:"Sahyadri College of Engineering",period:"2020 — 2024",grade:"CGPA: 8.26/10",location:"Mangaluru, India",logo:D.sahyadriLogo,coursework:["Data Structures","Algorithms","Database Systems","Software Engineering","Web Technologies","Computer Networks"]},{degree:"Pre‑University Course (Science)",school:"Indraprastha PU College",period:"2018 — 2020",grade:"Percentage: 87.66%",location:"Mangaluru, India",logo:D.indraprasthaLogo,subjects:["Physics","Chemistry","Mathematics","Computer Science"]}],i=[{id:"ACEC",title:"Associate Cloud Engineer Certification",issuer:"Google Cloud",date:"July 21, 2025 - July 21, 2028",description:"Achieved Google Cloud Associate Cloud Engineer certification, validating expertise in deploying, managing, and securing scalable cloud solutions on GCP.",skills:["Cloud Architecture","Cloud Computing","Cloud Security","Cloud Storage","Compute Engine","GKE","Google Cloud Platform (GCP)","Identity And Access Management (IAM)","Infrastructure as Code (IaC)","Networking","Pub/sub","SQL"],image:D.associate,url:"https://www.credly.com/badges/48ac672d-cb2b-44cc-b67a-d72a9c697b3c/public_url"},{id:"evoluteiq-intern",title:"RPA Intern",issuer:"EvoluteIQ",date:"Feb 2024 - Apr 2024",description:"Completed internship in Robotic Process Automation with hands-on experience in UiPath and business process optimization.",skills:["UiPath","Process Automation","Python","Business Analysis"],image:D.evoluteiqInternshipCert,url:D.evalute}],o={frontend:{title:"Frontend Development",icon:Ts,items:["JavaScript","React.js","Tailwind CSS","HTML5","CSS3","Responsive Design"]},backend:{title:"Backend Development",icon:sm,items:["Node.js","Express.js","REST APIs","Authentication","JWT","OAuth","Microservices"]},databases:{title:"Databases",icon:om,items:["PostgreSQL","MySQL","Database Design","Query Optimization"]},cloud:{title:"Cloud & DevOps",icon:im,items:["Google Cloud Platform","Docker","Cloud Run","Firebase"]},tools:{title:"Tools & Technologies",icon:dm,items:["Git","GitHub","VS Code","Figma","ESLint","Prettier","Jest","Webpack","Vite"]}},l={location:"Mangaluru, Karnataka, India",timezone:"Asia/Kolkata (UTC+5:30)",languages:["English","Hindi","Kannada","Tulu"],availability:"Open to new opportunities",workType:"Remote, Hybrid, On-site"},s=[{icon:aa,label:"GitHub",url:"https://github.com/BhatAnkush",color:"#333"},{icon:sa,label:"LinkedIn",url:"https://www.linkedin.com/in/ankushab/",color:"#0077B5"},{icon:Bn,label:"Email",url:"mailto:ankushbhataab@gmail.com",color:"#EA4335"},{icon:md,label:"Portfolio",url:"#",color:"#00d4ff"}],u=[{id:"overview",label:"Overview",icon:Ls},{id:"experience",label:"Experience",icon:Ls},{id:"education",label:"Education",icon:rm},{id:"skills",label:"Skills",icon:Ts},{id:"certificates",label:"Certificates",icon:zs}];return a.jsxs("section",{style:{padding:"100px 0",minHeight:"100vh"},children:[a.jsx("style",{children:`
          .about-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }
          
          .about-header {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 40px;
            margin-bottom: 40px;
            backdrop-filter: blur(10px);
          }
          
          .profile-section {
            display: grid;
            grid-template-columns: auto 1fr auto;
            gap: 30px;
            align-items: center;
          }
          
          .profile-image {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid var(--accent-color);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }
          
          .profile-info h1 {
            font-size: clamp(2rem, 4vw, 3rem);
            margin: 0 0 10px 0;
            background: linear-gradient(135deg, var(--accent-color), #00d4ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .profile-title {
            font-size: 1.3rem;
            color: var(--text-secondary);
            margin-bottom: 15px;
          }
          
          .profile-meta {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            margin-bottom: 20px;
          }
          
          .meta-chip {
            background: rgba(100, 255, 218, 0.1);
            color: var(--accent-color);
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 6px;
          }
          
          .social-links {
            display: flex;
            gap: 15px;
          }
          
          .social-link {
            width: 45px;
            height: 45px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: var(--white);
            text-decoration: none;
            transition: all 0.3s ease;
            font-size: 1.1rem;
          }
          
          .social-link:hover {
            transform: translateY(-3px);
            border-color: var(--accent-color);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          }
          
          .download-resume {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 20px;
            background: linear-gradient(135deg, var(--accent-color), #00d4ff);
            color: var(--primary-color);
            text-decoration: none;
            border-radius: 12px;
            font-weight: 600;
            transition: all 0.3s ease;
          }
          
          .download-resume:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(100, 255, 218, 0.3);
          }
          
          .tabs-container {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            overflow: hidden;
          }
          
          .tabs-header {
            display: flex;
            background: rgba(255, 255, 255, 0.05);
            overflow-x: auto;
          }
          
          .tab-button {
            flex: 1;
            padding: 20px;
            background: none;
            border: none;
            color: var(--text-secondary);
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-weight: 500;
            min-width: max-content;
          }
          
          .tab-button.active {
            color: var(--accent-color);
            background: rgba(100, 255, 218, 0.1);
            border-bottom: 3px solid var(--accent-color);
          }
          
          .tab-button:hover:not(.active) {
            color: var(--white);
            background: rgba(255, 255, 255, 0.05);
          }
          
          .tab-content {
            padding: 40px;
          }
          
          .intro-text {
            font-size: 1.1rem;
            line-height: 1.8;
            color: var(--text-secondary);
            margin-bottom: 30px;
          }
          
          .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 30px;
          }
          
          .info-card {
            background: rgba(255, 255, 255, 0.03);
            padding: 20px;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .info-card h4 {
            color: var(--accent-color);
            margin: 0 0 10px 0;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          
          .info-card p {
            color: var(--text-secondary);
            margin: 0;
            line-height: 1.5;
          }
          
          .experience-item {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            padding: 30px;
            margin-bottom: 25px;
            transition: all 0.3s ease;
          }
          
          .experience-item:hover {
            border-color: rgba(100, 255, 218, 0.3);
            transform: translateY(-2px);
          }
          
          .experience-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 15px;
            flex-wrap: wrap;
            gap: 15px;
          }

          .experience-logo {
            width: 48px;
            height: 48px;
            border-radius: 8px;
            overflow: hidden;
            background-color: white;
            padding: 4px;
            flex-shrink: 0;
            margin-right: 15px;
          }

          .experience-logo img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }

          .experience-details {
            flex: 1;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 15px;
            flex-wrap: wrap;
          }
          
          .experience-title {
            flex: 1;
          }
          
          .experience-title h3 {
            color: var(--white);
            margin: 0 0 5px 0;
            font-size: 1.3rem;
          }
          
          .experience-title .company {
            color: var(--accent-color);
            font-weight: 600;
            margin-bottom: 5px;
          }
          
          .experience-meta {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            font-size: 0.8rem;
            color: var(--text-secondary);
          }
          
          .experience-period {
            background: rgba(100, 255, 218, 0.1);
            color: var(--accent-color);
            padding: 6px 12px;
            border-radius: 20px;
            font-weight: 500;
          }
          
          .experience-description {
            color: var(--text-secondary);
            line-height: 1.6;
            margin: 15px 0;
          }

          .description-point {
            color: var(--text-secondary);
            padding: 5px 0;
            padding-left: 20px;
            position: relative;
            line-height: 1.5;
          }

          .description-point:before {
            content: '▸';
            position: absolute;
            left: 0;
            color: var(--accent-color);
            font-weight: bold;
          }

          .certificate-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background-color: rgba(100, 255, 218, 0.1);
            color: var(--accent-color);
            border: 1px solid var(--accent-color);
            padding: 8px 16px;
            border-radius: 20px;
            text-decoration: none;
            font-size: 0.9rem;
            margin-top: 15px;
            transition: all 0.2s ease;
          }

          .certificate-badge:hover {
            background-color: rgba(100, 255, 218, 0.2);
            transform: translateY(-2px);
          }
          
          .achievements-list {
            margin: 20px 0;
            padding: 0;
            list-style: none;
          }
          
          .achievements-list li {
            color: var(--text-secondary);
            padding: 5px 0;
            padding-left: 20px;
            position: relative;
            line-height: 1.5;
          }
          
          .achievements-list li::before {
            content: '▸';
            position: absolute;
            left: 0;
            color: var(--accent-color);
            font-weight: bold;
          }
          
          .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 20px;
          }
          
          .tech-tag {
            background: rgba(100, 255, 218, 0.1);
            color: var(--accent-color);
            padding: 4px 10px;
            border-radius: 15px;
            font-size: 0.7rem;
            font-weight: 500;
          }
          
          .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
          }
          
          .skill-category {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            padding: 25px;
            transition: all 0.3s ease;
          }
          
          .skill-category:hover {
            border-color: rgba(100, 255, 218, 0.3);
            transform: translateY(-3px);
          }
          
          .skill-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 20px;
          }
          
          .skill-icon {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, var(--accent-color), #00d4ff);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary-color);
          }
          
          .skill-title {
            color: var(--white);
            font-size: 1.1rem;
            font-weight: 600;
            margin: 0;
          }
          
          .skill-items {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }
          
          .skill-item {
            background: rgba(255, 255, 255, 0.05);
            color: var(--text-secondary);
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            transition: all 0.2s ease;
          }
          
          .skill-item:hover {
            background: rgba(100, 255, 218, 0.1);
            color: var(--accent-color);
          }
          
          .certificates-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 25px;
          }
          
          .certificate-card {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(100, 255, 218, 0.2);
            border-radius: 15px;
            padding: 25px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .certificate-image {
            width: 100%;
            height: 200px;
            border-radius: 10px;
            overflow: hidden;
            margin-bottom: 20px;
            background: rgba(255, 255, 255, 0.1);
          }

          .certificate-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
          }

          .certificate-card:hover .certificate-image img {
            transform: scale(1.05);
          }          .certificate-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(135deg, var(--accent-color), #00d4ff);
          }
          
          .certificate-card:hover {
            border-color: rgba(100, 255, 218, 0.3);
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }
          
          .certificate-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 15px;
          }
          
          .certificate-title {
            color: var(--white);
            font-size: 1.2rem;
            font-weight: 600;
            margin: 0 0 5px 0;
          }
          
          .certificate-issuer {
            color: var(--accent-color);
            font-weight: 500;
            margin-bottom: 5px;
          }
          
          .certificate-date {
            color: var(--text-secondary);
            font-size: 0.8rem;
            display: flex;
            align-items: center;
            gap: 5px;
          }
          
          .certificate-description {
            color: var(--text-secondary);
            line-height: 1.6;
            margin: 15px 0;
          }
          
          .certificate-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--accent-color);
            text-decoration: none;
            font-weight: 500;
            font-size: 0.9rem;
            transition: all 0.2s ease;
          }
          
          .certificate-link:hover {
            color: #00d4ff;
            transform: translateX(3px);
          }
          
          @media (max-width: 768px) {
            .profile-section {
              grid-template-columns: 1fr;
              text-align: center;
              gap: 20px;
            }
            
            .tabs-header {
              flex-direction: column;
            }
            
            .tab-content {
              padding: 20px;
            }
            
            .experience-header {
              flex-direction: column;
              align-items: flex-start;
            }
            
            .skills-grid,
            .certificates-grid {
              grid-template-columns: 1fr;
            }
            
            .profile-meta {
              justify-content: center;
            }
            
            .social-links {
              justify-content: center;
            }
          }
        `}),a.jsxs("div",{className:"about-container",children:[a.jsx("div",{className:"about-header",children:a.jsxs("div",{className:"profile-section",children:[a.jsx("img",{src:D.aboutme,alt:"Ankush Bhat",className:"profile-image"}),a.jsxs("div",{className:"profile-info",children:[a.jsx("h1",{children:"Ankush Bhat"}),a.jsx("div",{className:"profile-title",children:"Full Stack Developer & Cloud Engineer"}),a.jsxs("div",{className:"profile-meta",children:[a.jsxs("div",{className:"meta-chip",children:[a.jsx(gd,{size:14}),l.location]}),a.jsxs("div",{className:"meta-chip",children:[a.jsx(Rs,{size:14}),l.availability]})]}),a.jsx("div",{className:"social-links",children:s.map((c,f)=>a.jsx("a",{href:c.url,target:"_blank",rel:"noopener noreferrer",className:"social-link",title:c.label,children:a.jsx(c.icon,{})},f))})]}),a.jsxs("a",{href:D.resume,className:"download-resume",download:!0,children:[a.jsx(lm,{}),"Download Resume"]})]})}),a.jsxs("div",{className:"tabs-container",children:[a.jsx("div",{className:"tabs-header",children:u.map(c=>a.jsxs("button",{className:`tab-button ${e===c.id?"active":""}`,onClick:()=>t(c.id),children:[a.jsx(c.icon,{size:18}),c.label]},c.id))}),a.jsxs("div",{className:"tab-content",children:[e==="overview"&&a.jsxs("div",{children:[a.jsx("p",{className:"intro-text",children:"Hello! I’m Ankush Ananth Bhat, a passionate Web Developer with a strong foundation in Information Science. I earned my Bachelor's in Engineering from Sahyadri College of Engineering & Management, Mangaluru, and have since been dedicated to crafting impactful web applications and solutions."}),a.jsx("p",{className:"intro-text",children:"Currently, I serve as a Cloud Explorer-Technology at Niveus Solutions, where I gain hands-on experience in developing real-world applications and enhancing my skills in modern web technologies. I thrive on taking on new projects and challenges that drive me to learn and innovate. From building responsive interfaces to developing robust backend systems, I’m dedicated to crafting solutions that are efficient, scalable, and user-centered."}),a.jsx("p",{className:"intro-text",children:"Thanks for taking the time to read a bit about me!"})]}),e==="experience"&&a.jsx("div",{children:n.map((c,f)=>a.jsxs("div",{className:"experience-item",children:[a.jsxs("div",{className:"experience-header",children:[a.jsx("div",{className:"experience-logo",children:a.jsx("img",{src:c.logo,alt:`${c.company} logo`,onError:d=>{d.currentTarget.src="/placeholder.svg"}})}),a.jsxs("div",{className:"experience-details",children:[a.jsxs("div",{className:"experience-title",children:[a.jsx("h3",{children:c.title}),a.jsx("div",{className:"company",children:c.company}),a.jsxs("div",{className:"experience-meta",children:[a.jsx("span",{children:c.employmentType}),a.jsx("span",{children:"•"}),a.jsx("span",{children:c.location})]})]}),a.jsxs("div",{className:"experience-period",children:[a.jsx("span",{children:c.date}),a.jsx("span",{children:"•"}),a.jsx("span",{children:c.duration})]})]})]}),a.jsx("div",{className:"experience-description",children:c.description.map((d,m)=>a.jsx("div",{className:"description-point",children:d},m))}),a.jsx("div",{className:"tech-tags",children:c.skills.map((d,m)=>a.jsx("span",{className:"tech-tag",children:d},m))}),c.certificate&&a.jsx("div",{className:"certificate-link",children:a.jsxs("a",{href:c.certificateUrl,target:"_blank",rel:"noopener noreferrer",className:"certificate-badge",children:[a.jsx(zs,{}),a.jsx("span",{children:c.certificate})]})})]},f))}),e==="education"&&a.jsx("div",{children:r.map((c,f)=>a.jsxs("div",{className:"experience-item",children:[a.jsxs("div",{className:"experience-header",children:[a.jsx("div",{className:"experience-logo",children:a.jsx("img",{src:c.logo,alt:`${c.school} logo`,onError:d=>{d.currentTarget.src="/placeholder.svg"}})}),a.jsxs("div",{className:"experience-details",children:[a.jsxs("div",{className:"experience-title",children:[a.jsx("h3",{children:c.degree}),a.jsx("div",{className:"company",children:c.school}),a.jsxs("div",{className:"experience-meta",children:[a.jsx("span",{children:c.location}),a.jsx("span",{children:"•"}),a.jsx("span",{children:c.grade})]})]}),a.jsx("div",{className:"experience-period",children:c.period})]})]}),c.coursework&&a.jsxs("div",{children:[a.jsx("h4",{style:{color:"var(--accent-color)",margin:"15px 0 10px 0"},children:"Key Coursework:"}),a.jsx("div",{className:"tech-tags",children:c.coursework.map((d,m)=>a.jsx("span",{className:"tech-tag",children:d},m))})]}),c.subjects&&a.jsxs("div",{children:[a.jsx("h4",{style:{color:"var(--accent-color)",margin:"15px 0 10px 0"},children:"Subjects:"}),a.jsx("div",{className:"tech-tags",children:c.subjects.map((d,m)=>a.jsx("span",{className:"tech-tag",children:d},m))})]})]},f))}),e==="skills"&&a.jsx("div",{className:"skills-grid",children:Object.values(o).map((c,f)=>a.jsxs("div",{className:"skill-category",children:[a.jsxs("div",{className:"skill-header",children:[a.jsx("div",{className:"skill-icon",children:a.jsx(c.icon,{size:20})}),a.jsx("h3",{className:"skill-title",children:c.title})]}),a.jsx("div",{className:"skill-items",children:c.items.map((d,m)=>a.jsx("span",{className:"skill-item",children:d},m))})]},f))}),e==="certificates"&&a.jsx("div",{className:"certificates-grid",children:i.map((c,f)=>a.jsxs("div",{className:"certificate-card",children:[a.jsx("div",{className:"certificate-image",children:a.jsx("img",{src:c.image,alt:`${c.title} certificate`,onError:d=>{d.currentTarget.src="/placeholder.svg"}})}),a.jsx("div",{className:"certificate-header",children:a.jsxs("div",{children:[a.jsx("h3",{className:"certificate-title",children:c.title}),a.jsx("div",{className:"certificate-issuer",children:c.issuer}),a.jsxs("div",{className:"certificate-date",children:[a.jsx(Rs,{size:14}),c.date]})]})}),a.jsx("div",{className:"certificate-description",children:c.description}),a.jsx("div",{className:"tech-tags",children:c.skills.map((d,m)=>a.jsx("span",{className:"tech-tag",children:d},m))}),c.url&&a.jsxs("a",{href:c.url,target:"_blank",rel:"noopener noreferrer",className:"certificate-link",children:[a.jsx(am,{size:14}),"View Certificate"]})]},f))})]})]})]})]})},Us=()=>{var u,c,f;const[e,t]=j.useState("all"),[n,r]=j.useState(null),i=[{id:"suny-art-school",title:"Suny Art School",category:"frontend",status:"Completed",duration:"2 weeks",year:"2023",description:"A modern, responsive website for an art school featuring clean design and intuitive navigation.",detailedDescription:"Developed a comprehensive marketing website for Suny Art School with a focus on showcasing artistic programs and student work. The site features a responsive design that adapts seamlessly across all devices, optimized image galleries, and accessible navigation patterns.",challenges:["Creating an engaging visual hierarchy for diverse art content","Implementing responsive image galleries with lazy loading","Ensuring accessibility compliance for educational institution standards","Optimizing performance for image-heavy content"],solutions:["Designed a modular CSS grid system for flexible content layouts","Implemented progressive image loading with placeholder effects","Added ARIA labels and keyboard navigation support","Optimized images with modern formats and compression techniques"],keyFeatures:["Responsive design across all devices","Interactive image galleries","Contact forms with validation","Course information sections","Student portfolio showcase","Accessibility-compliant navigation"],technologies:["HTML5","CSS3","JavaScript","Responsive Design"],image:D.suny,github:"https://github.com/dileepbaliga/MyWebSite",external:"https://sunyartschool.netlify.app/",featured:!0},{id:"mentor-mentee-dms",title:"Mentor-Mentee Database Management System",category:"fullstack",status:"Completed",duration:"1 month",year:"2023",description:"A comprehensive database management system designed for educational mentor-mentee programs.",detailedDescription:"Built a robust database management system to facilitate mentor-mentee interactions in educational settings. The system provides role-based access control, allowing mentors to perform CRUD operations on student data while giving mentees secure access to view their progress and updates.",challenges:["Designing a scalable relational database schema","Implementing secure role-based authentication","Creating intuitive interfaces for different user types","Ensuring data privacy and security compliance"],solutions:["Developed normalized database structure with proper indexing","Implemented JWT-based authentication with role middleware","Created separate dashboard interfaces for mentors and mentees","Added data encryption and audit logging features"],keyFeatures:["Role-based access control (Mentor/Mentee)","CRUD operations for mentor dashboard","Student progress tracking","Secure authentication system","Data visualization charts","Export functionality for reports","Real-time notifications","Responsive admin interface"],technologies:["PHP","MySQL","JavaScript","CSS","SCSS","Hack"],image:D.mentor,github:"https://github.com/BhatAnkush/Mentor-Mentee",external:null},{id:"socio",title:"SOCiO - Social Media Platform",category:"fullstack",status:"In Development",duration:"3 months",year:"2023",description:"A modern social media application built with React, focusing on community engagement and real-time interactions.",detailedDescription:"Developed a comprehensive social media platform that enables users to connect, share content, and engage with a vibrant community. The application features real-time messaging, content sharing, user profiles, and advanced interaction capabilities.",challenges:["Implementing real-time communication features","Managing complex state across multiple components","Optimizing performance for large datasets","Creating engaging user interaction patterns"],solutions:["Integrated WebSocket connections for real-time updates","Implemented Redux for centralized state management","Added virtualization for efficient list rendering","Designed intuitive UI/UX with micro-interactions"],keyFeatures:["User authentication and profiles","Real-time messaging system","Content posting and sharing","Like, comment, and share functionality","Friend connections and followers","News feed with infinite scroll","Image and media upload","Responsive mobile-first design","Dark/light theme toggle"],technologies:["React","Node.js","Express","MongoDB","Socket.io","CSS"],image:D.socio,github:"https://github.com/BhatAnkush/SOCiO",external:null},{id:"portfolio-website",title:"Personal Portfolio Website",category:"frontend",status:"Completed",duration:"3 weeks",year:"2023",description:"A responsive personal portfolio website showcasing projects and skills with modern animations.",detailedDescription:"Created a personal portfolio website to showcase development projects and professional experience. The site features smooth animations, responsive design, and optimized performance across all devices.",challenges:["Creating smooth, performant animations","Balancing visual appeal with loading speed","Ensuring cross-browser compatibility","Implementing SEO best practices"],solutions:["Used CSS transforms and GPU acceleration for smooth animations","Optimized images and implemented lazy loading","Added progressive enhancement and fallbacks","Implemented semantic HTML and meta tags"],keyFeatures:["Smooth scroll animations","Responsive grid layouts","Interactive project showcases","Contact form integration","SEO optimized structure","Fast loading performance"],technologies:["HTML5","CSS3","JavaScript","GSAP"],image:"https://imgs.search.brave.com/Gdgw6Ki6SWkjnLLa_mB3Zv9-XtGmjO2qjMbMC11EUco/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc1/NDMxOTQ3L3Bob3Rv/L3BvcnRmb2xpby5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/OXBiMEFxY1dxaktJ/MmJKSl9wUmlkWnli/NWNLeHBkU1ZCNmRn/WU9wREx3ST0",github:"https://github.com/BhatAnkush/BhatAnkush.github.io",external:"https://BhatAnkush.github.io"},{id:"diabetic-retinopathy-detection",title:"Diabetic Retinopathy Detection System",category:"ai-ml",status:"Completed",duration:"4 months",year:"2023",description:"An AI-powered system for early detection of diabetic retinopathy using deep learning and medical imaging.",detailedDescription:"Developed a machine learning solution to detect diabetic retinopathy from fundus images of the retina. The system uses convolutional neural networks to analyze retinal images and provide early diagnosis, potentially preventing vision loss in diabetic patients.",challenges:["Processing and analyzing high-resolution medical images","Achieving high accuracy for medical diagnosis","Handling imbalanced medical datasets","Creating an intuitive interface for medical professionals"],solutions:["Implemented data augmentation and preprocessing pipelines","Used transfer learning with pre-trained CNN models","Applied SMOTE and class weighting techniques","Designed a clean, professional web interface"],keyFeatures:["Deep learning image classification","Batch image processing capability","Confidence score reporting","Medical report generation","Image preprocessing tools","Result visualization and analysis","Secure patient data handling"],technologies:["Python","TensorFlow","Keras","Flask","OpenCV","HTML5","CSS3","JavaScript"],image:"https://imgs.search.brave.com/1GYM3LOIdsP9KrvqzD-7UxIYyEwAvsDbwrF3826C1u4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2FuaXR5LmlvL2lt/YWdlcy8wdnY4bW9j/Ni9vcGh0YWxtb2xv/Z3kvZjhlMDdlNGI4/NzY1ZDRmMWU0MjBj/YThmZGMxZDNlYjFm/YzlmNDcyNS0xMjAw/eDgwMC5qcGc_Zml0/PWNyb3AmYXV0bz1m/b3JtYXQ",github:"https://github.com/BhatAnkush/Final_Project",external:null},{id:"netflix-clone",title:"Netflix Clone",category:"frontend",status:"Completed",duration:"2 weeks",year:"2023",description:"A pixel-perfect recreation of Netflix's user interface with modern web technologies.",detailedDescription:"Built a comprehensive Netflix clone featuring the complete user interface, responsive design, and interactive elements. The project demonstrates advanced CSS skills, component architecture, and attention to detail in recreating a complex, production-quality interface.",challenges:["Recreating complex Netflix UI components","Implementing smooth carousel animations","Managing responsive breakpoints for various screen sizes","Optimizing performance for image-heavy content"],solutions:["Built modular CSS components with BEM methodology","Created custom carousel with touch/swipe support","Implemented CSS Grid and Flexbox for responsive layouts","Used intersection observer for lazy loading"],keyFeatures:["Pixel-perfect Netflix UI recreation","Responsive carousel components","Hover effects and animations","Mobile-first responsive design","Search functionality interface","Category browsing sections","Video preview overlays"],technologies:["HTML5","CSS3","JavaScript","Responsive Design"],image:"https://imgs.search.brave.com/UY8xRCocZrirw5j2WNGUgusWU-Euxq_usIMlKGW5Ndc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTIuZGV2LnRvL2R5/bmFtaWMvaW1hZ2Uv/d2lkdGg9ODAwLGhl/aWdodD0sZml0PXNj/YWxlLWRvd24sZ3Jh/dml0eT1hdXRvLGZv/cm1hdD1hdXRvL2h0/dHBzOi8vZGV2LXRv/LXVwbG9hZHMuczMu/YW1hem9uYXdzLmNv/bS91cGxvYWRzL2Fy/dGljbGVzL3A5YnZp/MTJ3YnhuZXljNmV5/aHd6LlBORw",github:"https://github.com/BhatAnkush/netflix_clone",external:null}],o=i.filter(d=>e==="all"?!0:d.category===e),l=[{id:"all",label:"All Projects",count:i.length},{id:"frontend",label:"Frontend",count:i.filter(d=>d.category==="frontend").length},{id:"fullstack",label:"Full Stack",count:i.filter(d=>d.category==="fullstack").length},{id:"ai-ml",label:"AI/ML",count:i.filter(d=>d.category==="ai-ml").length}],s=i.find(d=>d.featured);return j.useEffect(()=>{const d=m=>{m.key==="Escape"&&r(null)};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[]),a.jsxs("section",{style:{padding:"100px 0",minHeight:"100vh"},children:[a.jsx("style",{children:`
          .projects-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }
          
          .projects-header {
            text-align: center;
            margin-bottom: 60px;
          }
          
          .projects-title {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 800;
            background: linear-gradient(135deg, var(--accent-color), #00d4ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 20px;
          }
          
          .projects-subtitle {
            font-size: 1.2rem;
            color: var(--text-secondary);
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.6;
          }
          
          .filter-section {
            display: flex;
            justify-content: center;
            margin-bottom: 50px;
            flex-wrap: wrap;
            gap: 15px;
          }
          
          .filter-btn {
            padding: 12px 24px;
            border: 2px solid transparent;
            background: rgba(255, 255, 255, 0.05);
            color: var(--text-secondary);
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 500;
            position: relative;
            overflow: hidden;
          }
          
          .filter-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(100, 255, 218, 0.1), transparent);
            transition: left 0.5s ease;
          }
          
          .filter-btn:hover::before {
            left: 100%;
          }
          
          .filter-btn:hover {
            border-color: var(--accent-color);
            color: var(--accent-color);
            transform: translateY(-2px);
          }
          
          .filter-btn.active {
            background: linear-gradient(135deg, var(--accent-color), #00d4ff);
            color: var(--primary-color);
            border-color: var(--accent-color);
          }
          
          .filter-count {
            font-size: 0.8em;
            opacity: 0.7;
            margin-left: 8px;
          }
          
          .featured-project {
            margin-bottom: 80px;
            background: rgba(255, 255, 255, 0.02);
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
          }
          
          .featured-project:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          }
          
          .featured-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            padding: 40px;
            align-items: center;
          }
          
          .featured-image {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 15px;
            transition: transform 0.3s ease;
          }
          
          .featured-project:hover .featured-image {
            transform: scale(1.02);
          }
          
          .featured-info h3 {
            font-size: 2rem;
            margin-bottom: 15px;
            color: var(--white);
          }
          
          .featured-badge {
            display: inline-block;
            background: linear-gradient(135deg, var(--accent-color), #00d4ff);
            color: var(--primary-color);
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
            margin-bottom: 15px;
          }
          
          .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
            gap: 30px;
            margin-top: 40px;
          }
          
          .project-card {
            background: rgba(255, 255, 255, 0.02);
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
            cursor: pointer;
            height: 100%;
            display: flex;
            flex-direction: column;
          }
          
          .project-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
            border-color: var(--accent-color);
          }
          
          .project-image {
            width: 100%;
            height: 220px;
            object-fit: cover;
            transition: transform 0.3s ease;
          }
          
          .project-card:hover .project-image {
            transform: scale(1.05);
          }
          
          .project-content {
            padding: 25px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
          }
          
          .project-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 15px;
          }
          
          .project-title {
            font-size: 1.3rem;
            font-weight: 700;
            color: var(--white);
            line-height: 1.3;
          }
          
          .project-status {
            font-size: 0.7rem;
            padding: 4px 10px;
            border-radius: 12px;
            font-weight: 600;
            white-space: nowrap;
          }
          
          .status-completed {
            background: rgba(34, 197, 94, 0.2);
            color: #22c55e;
          }
          
          .status-development {
            background: rgba(249, 115, 22, 0.2);
            color: #f97316;
          }
          
          .project-description {
            color: var(--text-secondary);
            line-height: 1.6;
            margin-bottom: 20px;
            flex-grow: 1;
          }
          
          .project-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.8rem;
            color: var(--text-secondary);
            margin-bottom: 20px;
          }
          
          .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 20px;
          }
          
          .tech-tag {
            background: rgba(100, 255, 218, 0.1);
            color: var(--accent-color);
            padding: 4px 10px;
            border-radius: 15px;
            font-size: 0.7rem;
            font-weight: 500;
          }
          
          .project-links {
            display: flex;
            gap: 15px;
          }
          
          .project-link {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            border-radius: 8px;
            text-decoration: none;
            font-size: 0.8rem;
            font-weight: 500;
            transition: all 0.2s ease;
          }
          
          .link-github {
            background: rgba(255, 255, 255, 0.1);
            color: var(--white);
          }
          
          .link-github:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
          }
          
          .link-external {
            background: linear-gradient(135deg, var(--accent-color), #00d4ff);
            color: var(--primary-color);
          }
          
          .link-external:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(100, 255, 218, 0.3);
          }
          
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(10px);
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
          }
          
          .modal-content {
            background: var(--secondary-color);
            border-radius: 20px;
            max-width: 900px;
            max-height: 90vh;
            overflow-y: auto;
            border: 1px solid rgba(255, 255, 255, 0.1);
            position: relative;
          }
          
          .modal-header {
            padding: 30px 30px 0;
            position: sticky;
            top: 0;
            background: var(--secondary-color);
            z-index: 10;
          }
          
          .modal-close {
            position: absolute;
            top: 20px;
            right: 20px;
            background: none;
            border: none;
            color: var(--white);
            font-size: 1.5rem;
            cursor: pointer;
            padding: 10px;
            border-radius: 50%;
            transition: all 0.2s ease;
          }
          
          .modal-close:hover {
            background: rgba(255, 255, 255, 0.1);
          }
          
          .modal-body {
            padding: 0 30px 30px;
          }
          
          .modal-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-radius: 15px;
            margin-bottom: 25px;
          }
          
          .modal-title {
            font-size: 2rem;
            margin-bottom: 15px;
            color: var(--white);
          }
          
          .modal-section {
            margin-bottom: 30px;
          }
          
          .modal-section h4 {
            color: var(--accent-color);
            font-size: 1.1rem;
            margin-bottom: 15px;
            border-bottom: 1px solid rgba(100, 255, 218, 0.2);
            padding-bottom: 5px;
          }
          
          .modal-section ul {
            list-style: none;
            padding: 0;
          }
          
          .modal-section li {
            color: var(--text-secondary);
            line-height: 1.6;
            margin-bottom: 8px;
            padding-left: 20px;
            position: relative;
          }
          
          .modal-section li::before {
            content: '▸';
            position: absolute;
            left: 0;
            color: var(--accent-color);
          }
          
          @media (max-width: 768px) {
            .featured-content {
              grid-template-columns: 1fr;
              gap: 20px;
              padding: 20px;
            }
            
            .projects-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
            
            .project-card {
              margin: 0 10px;
            }
            
            .filter-section {
              padding: 0 10px;
            }
            
            .modal-content {
              margin: 10px;
              max-height: 95vh;
            }
            
            .modal-header,
            .modal-body {
              padding: 20px;
            }
          }
        `}),a.jsxs("div",{className:"projects-container",children:[a.jsxs("div",{className:"projects-header",children:[a.jsx("h1",{className:"projects-title",children:"My Work"}),a.jsx("p",{className:"projects-subtitle",children:"A collection of projects showcasing my journey in web development, from frontend interfaces to full-stack applications and AI solutions."})]}),a.jsx("div",{className:"filter-section",children:l.map(d=>a.jsxs("button",{className:`filter-btn ${e===d.id?"active":""}`,onClick:()=>t(d.id),children:[d.label,a.jsxs("span",{className:"filter-count",children:["(",d.count,")"]})]},d.id))}),s&&e==="all"&&a.jsx("div",{className:"featured-project",onClick:()=>r(s),children:a.jsxs("div",{className:"featured-content",children:[a.jsx("div",{children:a.jsx("img",{src:s.image,alt:s.title,className:"featured-image",onError:d=>{d.currentTarget.src="/placeholder.svg"}})}),a.jsxs("div",{className:"featured-info",children:[a.jsx("div",{className:"featured-badge",children:"Featured Project"}),a.jsx("h3",{children:s.title}),a.jsx("p",{style:{color:"var(--text-secondary)",lineHeight:1.6,marginBottom:"20px"},children:s.detailedDescription}),a.jsx("div",{className:"tech-stack",children:s.technologies.map((d,m)=>a.jsx("span",{className:"tech-tag",children:d},m))})]})]})}),a.jsx("div",{className:"projects-grid",children:o.map(d=>a.jsxs("div",{className:"project-card",onClick:()=>r(d),children:[a.jsx("img",{src:d.image,alt:d.title,className:"project-image",onError:m=>{m.currentTarget.src="/placeholder.svg"}}),a.jsxs("div",{className:"project-content",children:[a.jsxs("div",{className:"project-header",children:[a.jsx("h3",{className:"project-title",children:d.title}),a.jsx("span",{className:`project-status ${d.status==="Completed"?"status-completed":"status-development"}`,children:d.status})]}),a.jsx("p",{className:"project-description",children:d.description}),a.jsxs("div",{className:"project-meta",children:[a.jsxs("span",{children:["Duration: ",d.duration]}),a.jsx("span",{children:d.year})]}),a.jsxs("div",{className:"tech-stack",children:[d.technologies.slice(0,3).map((m,x)=>a.jsx("span",{className:"tech-tag",children:m},x)),d.technologies.length>3&&a.jsxs("span",{className:"tech-tag",children:["+",d.technologies.length-3," more"]})]}),a.jsxs("div",{className:"project-links",children:[d.github&&a.jsxs("a",{href:d.github,target:"_blank",rel:"noopener noreferrer",className:"project-link link-github",onClick:m=>m.stopPropagation(),children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),"Code"]}),d.external&&a.jsxs("a",{href:d.external,target:"_blank",rel:"noopener noreferrer",className:"project-link link-external",onClick:m=>m.stopPropagation(),children:[a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),a.jsx("polyline",{points:"15,3 21,3 21,9"}),a.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),"Live Demo"]})]})]})]},d.id))}),n&&a.jsx("div",{className:"modal-overlay",onClick:()=>r(null),children:a.jsxs("div",{className:"modal-content",onClick:d=>d.stopPropagation(),children:[a.jsx("div",{className:"modal-header",children:a.jsx("button",{className:"modal-close",onClick:()=>r(null),children:"×"})}),a.jsxs("div",{className:"modal-body",children:[a.jsx("img",{src:n.image,alt:n.title,className:"modal-image",onError:d=>{d.currentTarget.src="/placeholder.svg"}}),a.jsx("h2",{className:"modal-title",children:n.title}),a.jsxs("div",{className:"modal-section",children:[a.jsx("h4",{children:"Project Overview"}),a.jsx("p",{style:{color:"var(--text-secondary)",lineHeight:1.6},children:n.detailedDescription})]}),a.jsxs("div",{className:"modal-section",children:[a.jsx("h4",{children:"Key Features"}),a.jsx("ul",{children:(u=n.keyFeatures)==null?void 0:u.map((d,m)=>a.jsx("li",{children:d},m))})]}),a.jsxs("div",{className:"modal-section",children:[a.jsx("h4",{children:"Challenges & Solutions"}),a.jsxs("div",{style:{display:"grid",gap:"20px"},children:[a.jsxs("div",{children:[a.jsx("h5",{style:{color:"#f97316",marginBottom:"10px"},children:"Challenges:"}),a.jsx("ul",{children:(c=n.challenges)==null?void 0:c.map((d,m)=>a.jsx("li",{children:d},m))})]}),a.jsxs("div",{children:[a.jsx("h5",{style:{color:"#22c55e",marginBottom:"10px"},children:"Solutions:"}),a.jsx("ul",{children:(f=n.solutions)==null?void 0:f.map((d,m)=>a.jsx("li",{children:d},m))})]})]})]}),a.jsxs("div",{className:"modal-section",children:[a.jsx("h4",{children:"Technologies Used"}),a.jsx("div",{className:"tech-stack",children:n.technologies.map((d,m)=>a.jsx("span",{className:"tech-tag",children:d},m))})]}),a.jsxs("div",{className:"modal-section",children:[a.jsx("h4",{children:"Project Links"}),a.jsxs("div",{className:"project-links",children:[n.github&&a.jsxs("a",{href:n.github,target:"_blank",rel:"noopener noreferrer",className:"project-link link-github",children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),"View Source Code"]}),n.external&&a.jsxs("a",{href:n.external,target:"_blank",rel:"noopener noreferrer",className:"project-link link-external",children:[a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),a.jsx("polyline",{points:"15,3 21,3 21,9"}),a.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),"Visit Live Site"]})]})]})]})]})})]})]})};function vd(){return a.jsxs(a.Fragment,{children:[a.jsx(Em,{}),a.jsx(bm,{}),a.jsx(Pm,{}),a.jsx(zm,{})]})}function Tm({targetId:e}){const t=hr();return j.useEffect(()=>{const n=setTimeout(()=>{const r=document.getElementById(e);r&&r.scrollIntoView({behavior:"smooth",block:"start"})},50);return()=>clearTimeout(n)},[t,e]),a.jsx(vd,{})}function Im(){pd();const[e,t]=j.useState(!0);return j.useEffect(()=>{setTimeout(()=>t(!1),1e3)},[]),j.useEffect(()=>{if(!e){const n={threshold:.1,rootMargin:"0px 0px -100px 0px"},r=new IntersectionObserver((l,s)=>{l.forEach(u=>{u.isIntersecting&&(u.target.classList.add("appear"),s.unobserve(u.target))})},n),i=document.querySelectorAll(".fade-in"),o=document.querySelectorAll(".slide-in-left, .slide-in-right");return i.forEach(l=>r.observe(l)),o.forEach(l=>r.observe(l)),()=>{i.forEach(l=>r.unobserve(l)),o.forEach(l=>r.unobserve(l))}}},[e]),a.jsx(a.Fragment,{children:e?a.jsx("div",{className:"loading-screen",children:a.jsx("div",{className:"loader"})}):a.jsxs(a.Fragment,{children:[a.jsx(hm,{}),a.jsx("main",{children:a.jsxs(Dh,{children:[a.jsx(et,{path:"/",element:a.jsx(vd,{})}),a.jsx(et,{path:"/about",element:a.jsx(Fs,{})}),a.jsx(et,{path:"/About",element:a.jsx(Fs,{})}),a.jsx(et,{path:"/work",element:a.jsx(Us,{})}),a.jsx(et,{path:"/work",element:a.jsx(Us,{})}),a.jsx(et,{path:"/contact",element:a.jsx(Tm,{targetId:"contact"})}),a.jsx(et,{path:"/case-studies/:id",element:a.jsx(Rm,{})})]})}),a.jsx(Lm,{})]})})}const Ws=document.getElementById("root");Ws?ed(Ws).render(a.jsx(Yh,{children:a.jsx(Im,{})})):console.error("Root element not found");
