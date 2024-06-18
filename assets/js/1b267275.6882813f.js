/*! For license information please see 1b267275.6882813f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[904453],{55875:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var t=r(824246),c=r(511151);const o={id:"plugin-search-backend-node.batchsearchengineindexer",title:"BatchSearchEngineIndexer",description:"API reference for BatchSearchEngineIndexer"},s=void 0,a={id:"reference/plugin-search-backend-node.batchsearchengineindexer",title:"BatchSearchEngineIndexer",description:"API reference for BatchSearchEngineIndexer",source:"@site/../docs/reference/plugin-search-backend-node.batchsearchengineindexer.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-node.batchsearchengineindexer",permalink:"/docs/reference/plugin-search-backend-node.batchsearchengineindexer",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-backend-node.batchsearchengineindexer.md",tags:[],version:"current",frontMatter:{id:"plugin-search-backend-node.batchsearchengineindexer",title:"BatchSearchEngineIndexer",description:"API reference for BatchSearchEngineIndexer"}},i={},u=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-search-backend-node"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.batchsearchengineindexer",children:(0,t.jsx)(n.code,{children:"BatchSearchEngineIndexer"})})]}),"\n",(0,t.jsx)(n.p,{children:"Base class encapsulating batch-based stream processing. Useful as a base class for search engine indexers."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"abstract class BatchSearchEngineIndexer extends Writable \n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Extends:"})," Writable"]}),"\n",(0,t.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constructor"}),(0,t.jsx)(n.th,{children:"Modifiers"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.batchsearchengineindexer._constructor_",children:"(constructor)(options)"})}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{children:["Constructs a new instance of the ",(0,t.jsx)(n.code,{children:"BatchSearchEngineIndexer"})," class"]})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Method"}),(0,t.jsx)(n.th,{children:"Modifiers"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.batchsearchengineindexer.finalize",children:"finalize()"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"abstract"})}),(0,t.jsx)(n.td,{children:"Any asynchronous teardown tasks can be performed here."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.batchsearchengineindexer.index",children:"index(documents)"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"abstract"})}),(0,t.jsx)(n.td,{children:"Receives an array of indexable documents (of size this.batchSize) which should be written to the search engine. This method won't be called again at least until it resolves."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.batchsearchengineindexer.initialize",children:"initialize()"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"abstract"})}),(0,t.jsx)(n.td,{children:"Any asynchronous setup tasks can be performed here."})]})]})]})]})}function d(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},371426:(e,n,r)=>{var t=r(827378),c=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,r){var t,o={},u=null,l=null;for(t in void 0!==r&&(u=""+r),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,t)&&!i.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:c,type:e,key:u,ref:l,props:o,_owner:a.current}}n.Fragment=o,n.jsx=u,n.jsxs=u},541535:(e,n)=>{var r=Symbol.for("react.element"),t=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),i=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,b={};function x(e,n,r){this.props=e,this.context=n,this.refs=b,this.updater=r||p}function m(){}function j(e,n,r){this.props=e,this.context=n,this.refs=b,this.updater=r||p}x.prototype.isReactComponent={},x.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=x.prototype;var g=j.prototype=new m;g.constructor=j,y(g,x.prototype),g.isPureReactComponent=!0;var _=Array.isArray,v=Object.prototype.hasOwnProperty,k={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,n,t){var c,o={},s=null,a=null;if(null!=n)for(c in void 0!==n.ref&&(a=n.ref),void 0!==n.key&&(s=""+n.key),n)v.call(n,c)&&!S.hasOwnProperty(c)&&(o[c]=n[c]);var i=arguments.length-2;if(1===i)o.children=t;else if(1<i){for(var u=Array(i),l=0;l<i;l++)u[l]=arguments[l+2];o.children=u}if(e&&e.defaultProps)for(c in i=e.defaultProps)void 0===o[c]&&(o[c]=i[c]);return{$$typeof:r,type:e,key:s,ref:a,props:o,_owner:k.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var C=/\/+/g;function R(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function I(e,n,c,o,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case t:i=!0}}if(i)return s=s(i=e),e=""===o?"."+R(i,0):o,_(s)?(c="",null!=e&&(c=e.replace(C,"$&/")+"/"),I(s,n,c,"",(function(e){return e}))):null!=s&&(w(s)&&(s=function(e,n){return{$$typeof:r,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(s,c+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(C,"$&/")+"/")+e)),n.push(s)),1;if(i=0,o=""===o?".":o+":",_(e))for(var u=0;u<e.length;u++){var l=o+R(a=e[u],u);i+=I(a,n,c,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(a=e.next()).done;)i+=I(a=a.value,n,c,l=o+R(a,u++),s);else if("object"===a)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function $(e,n,r){if(null==e)return e;var t=[],c=0;return I(e,t,"","",(function(e){return n.call(r,e,c++)})),t}function O(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},B={transition:null},A={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:B,ReactCurrentOwner:k};n.Children={map:$,forEach:function(e,n,r){$(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return $(e,(function(){n++})),n},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=x,n.Fragment=c,n.Profiler=s,n.PureComponent=j,n.StrictMode=o,n.Suspense=l,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,n.cloneElement=function(e,n,t){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var c=y({},e.props),o=e.key,s=e.ref,a=e._owner;if(null!=n){if(void 0!==n.ref&&(s=n.ref,a=k.current),void 0!==n.key&&(o=""+n.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(u in n)v.call(n,u)&&!S.hasOwnProperty(u)&&(c[u]=void 0===n[u]&&void 0!==i?i[u]:n[u])}var u=arguments.length-2;if(1===u)c.children=t;else if(1<u){i=Array(u);for(var l=0;l<u;l++)i[l]=arguments[l+2];c.children=i}return{$$typeof:r,type:e.type,key:o,ref:s,props:c,_owner:a}},n.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=E,n.createFactory=function(e){var n=E.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:u,render:e}},n.isValidElement=w,n.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:O}},n.memo=function(e,n){return{$$typeof:d,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=B.transition;B.transition={};try{e()}finally{B.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return P.current.useCallback(e,n)},n.useContext=function(e){return P.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return P.current.useDeferredValue(e)},n.useEffect=function(e,n){return P.current.useEffect(e,n)},n.useId=function(){return P.current.useId()},n.useImperativeHandle=function(e,n,r){return P.current.useImperativeHandle(e,n,r)},n.useInsertionEffect=function(e,n){return P.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return P.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return P.current.useMemo(e,n)},n.useReducer=function(e,n,r){return P.current.useReducer(e,n,r)},n.useRef=function(e){return P.current.useRef(e)},n.useState=function(e){return P.current.useState(e)},n.useSyncExternalStore=function(e,n,r){return P.current.useSyncExternalStore(e,n,r)},n.useTransition=function(){return P.current.useTransition()},n.version="18.2.0"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>s});var t=r(667294);const c={},o=t.createContext(c);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);