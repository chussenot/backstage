/*! For license information please see d4287b29.c987d21b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[627248],{724112:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>i,toc:()=>s});var r=t(824246),o=t(511151);const u={id:"backend-plugin-api.backendpluginconfig",title:"BackendPluginConfig",description:"API reference for BackendPluginConfig"},c=void 0,i={id:"reference/backend-plugin-api.backendpluginconfig",title:"BackendPluginConfig",description:"API reference for BackendPluginConfig",source:"@site/../docs/reference/backend-plugin-api.backendpluginconfig.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.backendpluginconfig",permalink:"/docs/reference/backend-plugin-api.backendpluginconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-plugin-api.backendpluginconfig.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-api.backendpluginconfig",title:"BackendPluginConfig",description:"API reference for BackendPluginConfig"}},a={},s=[];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-plugin-api",children:(0,r.jsx)(n.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.backendpluginconfig",children:(0,r.jsx)(n.code,{children:"BackendPluginConfig"})})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Warning: This API is now obsolete."}),"\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.createbackendpluginoptions",children:"CreateBackendPluginOptions"})," instead."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export type BackendPluginConfig = CreateBackendPluginOptions;\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"References:"})," ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.createbackendpluginoptions",children:"CreateBackendPluginOptions"})]})]})}function f(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},371426:(e,n,t)=>{var r=t(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,t){var r,u={},s=null,l=null;for(r in void 0!==t&&(s=""+t),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,r)&&!a.hasOwnProperty(r)&&(u[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===u[r]&&(u[r]=n[r]);return{$$typeof:o,type:e,key:s,ref:l,props:u,_owner:i.current}}n.Fragment=u,n.jsx=s,n.jsxs=s},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),a=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,b={};function h(e,n,t){this.props=e,this.context=n,this.refs=b,this.updater=t||y}function k(){}function m(e,n,t){this.props=e,this.context=n,this.refs=b,this.updater=t||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=h.prototype;var _=m.prototype=new k;_.constructor=m,g(_,h.prototype),_.isPureReactComponent=!0;var v=Array.isArray,j=Object.prototype.hasOwnProperty,x={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,n,r){var o,u={},c=null,i=null;if(null!=n)for(o in void 0!==n.ref&&(i=n.ref),void 0!==n.key&&(c=""+n.key),n)j.call(n,o)&&!S.hasOwnProperty(o)&&(u[o]=n[o]);var a=arguments.length-2;if(1===a)u.children=r;else if(1<a){for(var s=Array(a),l=0;l<a;l++)s[l]=arguments[l+2];u.children=s}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===u[o]&&(u[o]=a[o]);return{$$typeof:t,type:e,key:c,ref:i,props:u,_owner:x.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var E=/\/+/g;function w(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function R(e,n,o,u,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var a=!1;if(null===e)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case t:case r:a=!0}}if(a)return c=c(a=e),e=""===u?"."+w(a,0):u,v(c)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),R(c,n,o,"",(function(e){return e}))):null!=c&&(P(c)&&(c=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||a&&a.key===c.key?"":(""+c.key).replace(E,"$&/")+"/")+e)),n.push(c)),1;if(a=0,u=""===u?".":u+":",v(e))for(var s=0;s<e.length;s++){var l=u+w(i=e[s],s);a+=R(i,n,o,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(i=e.next()).done;)a+=R(i=i.value,n,o,l=u+w(i,s++),c);else if("object"===i)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function $(e,n,t){if(null==e)return e;var r=[],o=0;return R(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function O(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},B={transition:null},T={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:B,ReactCurrentOwner:x};n.Children={map:$,forEach:function(e,n,t){$(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return $(e,(function(){n++})),n},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=h,n.Fragment=o,n.Profiler=c,n.PureComponent=m,n.StrictMode=u,n.Suspense=l,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=g({},e.props),u=e.key,c=e.ref,i=e._owner;if(null!=n){if(void 0!==n.ref&&(c=n.ref,i=x.current),void 0!==n.key&&(u=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)j.call(n,s)&&!S.hasOwnProperty(s)&&(o[s]=void 0===n[s]&&void 0!==a?a[s]:n[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){a=Array(s);for(var l=0;l<s;l++)a[l]=arguments[l+2];o.children=a}return{$$typeof:t,type:e.type,key:u,ref:c,props:o,_owner:i}},n.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},n.createElement=C,n.createFactory=function(e){var n=C.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:s,render:e}},n.isValidElement=P,n.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},n.memo=function(e,n){return{$$typeof:f,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=B.transition;B.transition={};try{e()}finally{B.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return I.current.useCallback(e,n)},n.useContext=function(e){return I.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return I.current.useDeferredValue(e)},n.useEffect=function(e,n){return I.current.useEffect(e,n)},n.useId=function(){return I.current.useId()},n.useImperativeHandle=function(e,n,t){return I.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return I.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return I.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return I.current.useMemo(e,n)},n.useReducer=function(e,n,t){return I.current.useReducer(e,n,t)},n.useRef=function(e){return I.current.useRef(e)},n.useState=function(e){return I.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return I.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return I.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>c});var r=t(667294);const o={},u=r.createContext(o);function c(e){const n=r.useContext(u);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(u.Provider,{value:n},e.children)}}}]);