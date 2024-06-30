/*! For license information please see 8fb1bed7.318ed393.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[817710],{118635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=n(824246),i=n(511151);const o={id:"integrating-plugin-into-software-catalog",title:"Integrate into the Software Catalog",description:"How to integrate a plugin into software catalog"},a=void 0,u={id:"plugins/integrating-plugin-into-software-catalog",title:"Integrate into the Software Catalog",description:"How to integrate a plugin into software catalog",source:"@site/../docs/plugins/integrating-plugin-into-software-catalog.md",sourceDirName:"plugins",slug:"/plugins/integrating-plugin-into-software-catalog",permalink:"/docs/plugins/integrating-plugin-into-software-catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/plugins/integrating-plugin-into-software-catalog.md",tags:[],version:"current",frontMatter:{id:"integrating-plugin-into-software-catalog",title:"Integrate into the Software Catalog",description:"How to integrate a plugin into software catalog"},sidebar:"docs",previous:{title:"Structure of a Plugin",permalink:"/docs/plugins/structure-of-a-plugin"},next:{title:"Integrating Search into a plugin",permalink:"/docs/plugins/integrating-search-into-plugins"}},s={},c=[{value:"Steps",id:"steps",level:2},{value:"Create a plugin",id:"create-a-plugin",level:3},{value:"Reading entities from within your plugin",id:"reading-entities-from-within-your-plugin",level:3},{value:"Import your plugin and embed in the entities page",id:"import-your-plugin-and-embed-in-the-entities-page",level:3}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"This is an advanced use case and currently is an experimental feature. Expect\nAPI to change over time"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#create-a-plugin",children:"Create a plugin"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#reading-entities-from-within-your-plugin",children:"Reading entities from within your plugin"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#import-your-plugin-and-embed-in-the-entities-page",children:"Import your plugin and embed in the entities page"})}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"create-a-plugin",children:"Create a plugin"}),"\n",(0,r.jsxs)(t.p,{children:["Follow the ",(0,r.jsx)(t.a,{href:"/docs/plugins/create-a-plugin",children:"same process"})," as for standalone plugin. You\nshould have a separate package in a folder, which represents your plugin."]}),"\n",(0,r.jsx)(t.p,{children:"Example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"$ yarn new --select plugin\n> ? Enter an ID for the plugin [required] my-plugin\n> ? Enter the owner(s) of the plugin. If specified, this will be added to CODEOWNERS for the plugin path. [optional]\n\nCreating the plugin...\n"})}),"\n",(0,r.jsx)(t.h3,{id:"reading-entities-from-within-your-plugin",children:"Reading entities from within your plugin"}),"\n",(0,r.jsxs)(t.p,{children:["You can access the currently selected entity using the backstage api\n",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-react.useentity",children:(0,r.jsx)(t.code,{children:"useEntity"})}),". For example,"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useEntity } from '@backstage/plugin-catalog-react';\n\nexport const MyPluginEntityContent = () => {\n  const entity = useEntity();\n\n  // Do something with the entity data...\n};\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Internally ",(0,r.jsx)(t.code,{children:"useEntity"})," makes use of\n",(0,r.jsxs)(t.a,{href:"https://reactjs.org/docs/context.html",children:["react ",(0,r.jsx)(t.code,{children:"Context"}),"s"]}),". The entity context is\nprovided by the entity page into which your plugin will be embedded."]}),"\n",(0,r.jsx)(t.h3,{id:"import-your-plugin-and-embed-in-the-entities-page",children:"Import your plugin and embed in the entities page"}),"\n",(0,r.jsxs)(t.p,{children:["To begin, you will need to import your plugin in the entities page. Located at\n",(0,r.jsx)(t.code,{children:"packages/app/src/components/Catalog/EntityPage.tsx"})," from the root package of\nyour backstage app."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { MyPluginEntityContent } from '@backstage/plugin-my-plugin;\n"})}),"\n",(0,r.jsxs)(t.p,{children:["To add your component to the Entity view, you will need to modify the\n",(0,r.jsx)(t.code,{children:"packages/app/src/components/Catalog/EntityPage.tsx"}),". Depending on the needs of\nyour plugin, you may only care about certain kinds of\n",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/descriptor-format",children:"entities"}),",\neach of which has its own\n",(0,r.jsx)(t.a,{href:"https://reactjs.org/docs/rendering-elements.html",children:"element"})," for rendering. This\nfunctionality is handled by the ",(0,r.jsx)(t.code,{children:"EntitySwitch"})," component:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"export const entityPage = (\n  <EntitySwitch>\n    <EntitySwitch.Case if={isKind('component')} children={componentPage} />\n    <EntitySwitch.Case if={isKind('api')} children={apiPage} />\n    <EntitySwitch.Case if={isKind('group')} children={groupPage} />\n    <EntitySwitch.Case if={isKind('user')} children={userPage} />\n    <EntitySwitch.Case if={isKind('system')} children={systemPage} />\n    <EntitySwitch.Case if={isKind('domain')} children={domainPage} />\n\n    <EntitySwitch.Case>{defaultEntityPage}</EntitySwitch.Case>\n  </EntitySwitch>\n);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["At this point, you will need to modify the specific page where you want your\ncomponent to appear. If you are extending the Software Catalog model you will\nneed to add a new case to the ",(0,r.jsx)(t.code,{children:"EntitySwitch"}),". For adding a plugin to an existing\ncomponent type, you modify the existing page. For example, if you want to add\nyour plugin to the ",(0,r.jsx)(t.code,{children:"systemPage"}),", you can add a new tab by adding an\n",(0,r.jsx)(t.code,{children:"EntityLayout.Route"})," such as below:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'const systemPage = (\n  <EntityLayout>\n    <EntityLayout.Route path="/" title="Overview">\n      <Grid container spacing={3} alignItems="stretch">\n        <Grid item md={6}>\n          <EntityAboutCard variant="gridItem" />\n        </Grid>\n        <Grid item md={6}>\n          <EntityHasComponentsCard variant="gridItem" />\n        </Grid>\n        <Grid item md={6}>\n          <EntityHasApisCard variant="gridItem" />\n        </Grid>\n        <Grid item md={6}>\n          <EntityHasResourcesCard variant="gridItem" />\n        </Grid>\n      </Grid>\n    </EntityLayout.Route>\n    <EntityLayout.Route path="/diagram" title="Diagram">\n      <EntityCatalogGraphCard variant="gridItem" height={400} />\n    </EntityLayout.Route>\n\n    {/* Adding a new tab to the system view */}\n    <EntityLayout.Route path="/your-custom-route" title="CustomTitle">\n      <MyPluginEntityContent />\n    </EntityLayout.Route>\n  </EntityLayout>\n);\n'})})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},371426:(e,t,n)=>{var r=n(827378),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,l=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:l,props:o,_owner:u.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function m(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||y}function w(){}function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=m.prototype;var b=x.prototype=new w;b.constructor=x,h(b,m.prototype),b.isPureReactComponent=!0;var v=Array.isArray,E=Object.prototype.hasOwnProperty,j={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var i,o={},a=null,u=null;if(null!=t)for(i in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)E.call(t,i)&&!_.hasOwnProperty(i)&&(o[i]=t[i]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var c=Array(s),l=0;l<s;l++)c[l]=arguments[l+2];o.children=c}if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===o[i]&&(o[i]=s[i]);return{$$typeof:n,type:e,key:a,ref:u,props:o,_owner:j.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var k=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,i,o,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var s=!1;if(null===e)s=!0;else switch(u){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return a=a(s=e),e=""===o?"."+R(s,0):o,v(a)?(i="",null!=e&&(i=e.replace(k,"$&/")+"/"),P(a,t,i,"",(function(e){return e}))):null!=a&&(C(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(k,"$&/")+"/")+e)),t.push(a)),1;if(s=0,o=""===o?".":o+":",v(e))for(var c=0;c<e.length;c++){var l=o+R(u=e[c],c);s+=P(u,t,i,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(u=e.next()).done;)s+=P(u=u.value,t,i,l=o+R(u,c++),a);else if("object"===u)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function I(e,t,n){if(null==e)return e;var r=[],i=0;return P(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},L={transition:null},T={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:L,ReactCurrentOwner:j};t.Children={map:I,forEach:function(e,t,n){I(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return I(e,(function(){t++})),t},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=i,t.Profiler=a,t.PureComponent=x,t.StrictMode=o,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=h({},e.props),o=e.key,a=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,u=j.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)E.call(t,c)&&!_.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){s=Array(c);for(var l=0;l<c;l++)s[l]=arguments[l+2];i.children=s}return{$$typeof:n,type:e.type,key:o,ref:a,props:i,_owner:u}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return O.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>u,a:()=>a});var r=n(667294);const i={},o=r.createContext(i);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);