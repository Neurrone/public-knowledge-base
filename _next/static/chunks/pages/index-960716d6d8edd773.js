(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{45301:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(14186)}])},1316:function(t,e,n){"use strict";n.d(e,{Z:function(){return H}});var r=n(34051),o=n.n(r),i=n(85893),a=n(4604),c=n(71230),u=n(15746),l=n(96486),s=n.n(l),f=n(67294),d=n(83931),p=n(41664),h=n(99490);function m(t){var e,n,r,o=t.note,a=t.noteIndex,c=(0,d.gt)({note:o,noteIndex:a});try{e=s().get(o,"custom.date",!1)?(n=o.custom.date,r=h.DateTime.DATE_SHORT,h.DateTime.fromISO(n).toLocaleString(r)):function(t,e){return h.DateTime.fromMillis(t).toLocaleString(e)}(o.created,h.DateTime.DATE_SHORT)}catch(u){throw Error("no date found for note ".concat(o.id))}return(0,i.jsx)("div",{children:(0,i.jsxs)("article",{itemScope:!0,itemType:"https://schema.org/CreativeWork",children:[(0,i.jsx)("h2",{itemProp:"headline",children:(0,i.jsx)(p.default,{href:c,children:o.title})}),!s().isUndefined(e)&&(0,i.jsx)("p",{children:e}),s().has(o,"custom.excerpt")&&(0,i.jsx)("p",{itemProp:"description",children:o.custom.excerpt})]})})}var v=n(9008),y=n(25935);function g(t){var e=t.content,n=(0,y.ZP)(e);return(0,i.jsx)(v.default,{children:n})}var x=n(25903),b=n(2962),j=n(64853),w=function(t){return x.Time.DateTime.fromMillis(s().toInteger(t)).setZone("utc").toLocaleString("yyyy-LL-dd")};function S(t){var e=t.note,n=t.config,r=(0,j.vm)().router.asPath;if(s().some(["403"],(function(t){return r==="/notes/".concat(t,"/")})))return null;var o,a=x.PublishUtils.getSEOPropsFromConfig(n),c=x.PublishUtils.getSEOPropsFromNote(e),u=s().defaults(c,a),l=u.title,f=u.excerpt,p=(null===u||void 0===u?void 0:u.image)?[u.image]:[],h=x.ConfigUtils.getPublishingConfig(n),m=function(t){var e=t.sitePath,n=t.seoProps,r=t.siteConfig;return n.canonicalBaseUrl?[r.siteUrl,e].join(""):n.canonicalUrl?n.canonicalUrl:[r.canonicalBaseUrl?r.canonicalBaseUrl:(0,d.N0)(r),e].join("")}({sitePath:r,seoProps:u,siteConfig:h}),v=u.twitter?{handle:u.twitter,site:u.twitter,cardType:"summary_large_image"}:void 0;return(0,i.jsx)(b.PB,{title:l,description:f,canonical:m,noindex:u.noindex,twitter:v,openGraph:{title:l,description:f,url:m,images:p,type:"article",article:{publishedTime:w(u.created),modifiedTime:w(u.updated),tags:(o=e,o.tags?Array.isArray(o.tags)?o.tags:[o.tags]:[])}}})}var O=n(91333),P=n(37802);function E(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function N(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){_(t,e,n[e])}))}return t}function T(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function A(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return E(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var I=P.Z.Link,L=function(t){t=(t=t.replace(/_/g,"-")).replace(/--/g,"-");var e=[];return t.split("-").forEach((function(t){e.push(t.substr(0,1).toUpperCase()+t.substr(1))})),e.join(" ")},U=function(t){var e,n=t.note,r=T(t,["note"]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(P.Z,N({style:{zIndex:1},className:"dendron-toc"},r,{children:Object.entries(null===n||void 0===n?void 0:n.anchors).map((function(t){var n=A(t,2),r=n[0],o=n[1];return"header"===(null===o||void 0===o?void 0:o.type)?(0,i.jsx)(I,{href:"#".concat(r),title:null!==(e=null===o||void 0===o?void 0:o.text)&&void 0!==e?e:L(null===o||void 0===o?void 0:o.value)},r):(0,i.jsx)(i.Fragment,{})}))}))})},C=n(14426),D=n(78455);function Z(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function k(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void n(l)}c.done?e(u):Promise.resolve(u).then(r,o)}function B(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return Z(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Z(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var F=n(41016).b.HEADER;function H(t){var e,n=t.note,r=t.body,l=t.collectionChildren,d=t.noteIndex,p=t.customHeadContent,h=t.config,v=(0,a.createLogger)("Note"),y=(0,j.vm)().getActiveNoteId,x=B(f.useState(void 0),2),b=x[0],w=x[1],P=y();"root"===P&&(P=d.id);var E=(0,C.$s)();v.info({ctx:"enter",id:P}),f.useEffect((function(){if(v.info({ctx:"updateNoteBody:enter",id:P}),s().isUndefined(P))v.info({ctx:"updateNoteBody:exit",id:P,state:"id undefined"});else{if(P===n.id)return E(D.w.Nw.setLoadingStatus(a.LoadingStatus.FULFILLED)),void v.info({ctx:"updateNoteBody:exit",id:P,state:"id = note.id"});v.info({ctx:"updateNoteBody:fetch:pre",id:P}),fetch("/data/notes/".concat(P,".html")).then(function(){var t,e=(t=o().mark((function t(e){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v.info({ctx:"updateNoteBody:fetch:post",id:P}),t.next=3,e.text();case 3:n=t.sent,w(n),E(D.w.Nw.setLoadingStatus(a.LoadingStatus.FULFILLED));case 6:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){k(i,r,o,a,c,"next",t)}function c(t){k(i,r,o,a,c,"throw",t)}a(void 0)}))});return function(t){return e.apply(this,arguments)}}())}}),[P]);var _=P===n.id?r:b;if(s().isUndefined(_))return(0,i.jsx)(O.Z,{});var N=(null===(e=n.custom)||void 0===e?void 0:e.has_collection)&&!s().isNull(l)?l.map((function(t){return m({note:t,noteIndex:d})})):null;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(S,{note:n,config:h}),p&&(0,i.jsx)(g,{content:p}),(0,i.jsx)(c.Z,{children:(0,i.jsx)(u.Z,{span:24,children:(0,i.jsxs)(c.Z,{gutter:20,children:[(0,i.jsxs)(u.Z,{xs:24,md:18,children:[(0,i.jsx)(a.DendronNote,{noteContent:_,config:h}),N]}),(0,i.jsx)(u.Z,{xs:0,md:6,children:(0,i.jsx)(U,{note:n,offsetTop:F.HEIGHT})})]})})})]})}},14186:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return o}});var r=n(1316),o=!0;e.default=r.Z}},function(t){t.O(0,[155,774,888,179],(function(){return e=45301,t(t.s=e);var e}));var e=t.O();_N_E=e}]);