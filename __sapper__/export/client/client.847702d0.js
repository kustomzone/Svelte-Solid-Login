import{S as e,i as t,s,e as r,t as n,a,c as o,b as l,d as c,f as i,g as u,h as p,n as f,j as m,m as g,k as h,l as d,o as v,p as $,q as S,r as y,u as E,v as _,w as b,x as j}from"./chunk.4ceeafff.js";import{l as w,w as P}from"./chunk.fe94475d.js";const R={},L=()=>({});function N(e){var t,s,m,g,h,d,v,$,S,y,E,_,b,j,w,P;return{c(){t=r("nav"),s=r("ul"),m=r("li"),g=r("a"),h=n("home"),v=a(),$=r("li"),S=r("a"),y=n("login"),_=a(),b=r("li"),j=r("a"),w=n("logout"),this.h()},l(e){t=o(e,"NAV",{class:!0},!1);var r=l(t);s=o(r,"UL",{class:!0},!1);var n=l(s);m=o(n,"LI",{class:!0},!1);var a=l(m);g=o(a,"A",{class:!0,href:!0},!1);var u=l(g);h=c(u,"home"),u.forEach(i),a.forEach(i),v=c(n,"\n\t\t"),$=o(n,"LI",{class:!0},!1);var p=l($);S=o(p,"A",{class:!0,href:!0},!1);var f=l(S);y=c(f,"login"),f.forEach(i),p.forEach(i),_=c(n,"\n\t\t"),b=o(n,"LI",{class:!0},!1);var d=l(b);j=o(d,"A",{class:!0,href:!0},!1);var E=l(j);w=c(E,"logout"),E.forEach(i),d.forEach(i),n.forEach(i),r.forEach(i),this.h()},h(){g.className=d=(void 0===e.segment?"selected":"")+" svelte-11jlnvr",g.href=".",m.className="svelte-11jlnvr",S.className=E=("login"===e.segment||"register"===e.segment?"selected":"")+" "+(e.loggedInState?"hide":"")+" svelte-11jlnvr",S.href="login",$.className="svelte-11jlnvr",j.className=P=("logout"===e.segment?"selected":"")+" "+(e.loggedInState?"":"hide")+" svelte-11jlnvr",j.href="logout",b.className="svelte-11jlnvr",s.className="svelte-11jlnvr",t.className="svelte-11jlnvr"},m(e,r){u(e,t,r),p(t,s),p(s,m),p(m,g),p(g,h),p(s,v),p(s,$),p($,S),p(S,y),p(s,_),p(s,b),p(b,j),p(j,w)},p(e,t){e.segment&&d!==(d=(void 0===t.segment?"selected":"")+" svelte-11jlnvr")&&(g.className=d),(e.segment||e.loggedInState)&&E!==(E=("login"===t.segment||"register"===t.segment?"selected":"")+" "+(t.loggedInState?"hide":"")+" svelte-11jlnvr")&&(S.className=E),(e.segment||e.loggedInState)&&P!==(P=("logout"===t.segment?"selected":"")+" "+(t.loggedInState?"":"hide")+" svelte-11jlnvr")&&(j.className=P)},i:f,o:f,d(e){e&&i(t)}}}function A(e,t,s){let r,{segment:n}=t;w.subscribe(e=>{s("loggedInState",r=e)});return e.$set=(e=>{"segment"in e&&s("segment",n=e.segment)}),{segment:n,loggedInState:r}}class C extends e{constructor(e){super(),t(this,e,A,N,s,["segment"])}}function x(e){var t,s,n,p=new C({props:{segment:e.segment}});const f=e.$$slots.default,v=m(f,e,null);return{c(){p.$$.fragment.c(),t=a(),s=r("main"),v&&v.c(),this.h()},l(e){p.$$.fragment.l(e),t=c(e,"\n\n"),s=o(e,"MAIN",{class:!0},!1);var r=l(s);v&&v.l(r),r.forEach(i),this.h()},h(){s.className="svelte-1qric9m"},m(e,r){g(p,e,r),u(e,t,r),u(e,s,r),v&&v.m(s,null),n=!0},p(e,t){var s={};e.segment&&(s.segment=t.segment),p.$set(s),v&&v.p&&e.$$scope&&v.p(h(f,t,e,null),d(f,t,null))},i(e){n||(p.$$.fragment.i(e),v&&v.i&&v.i(e),n=!0)},o(e){p.$$.fragment.o(e),v&&v.o&&v.o(e),n=!1},d(e){p.$destroy(e),e&&(i(t),i(s)),v&&v.d(e)}}}function I(e,t,s){let{segment:r}=t,{$$slots:n={},$$scope:a}=t;return e.$set=(e=>{"segment"in e&&s("segment",r=e.segment),"$$scope"in e&&s("$$scope",a=e.$$scope)}),{segment:r,$$slots:n,$$scope:a}}class q extends e{constructor(e){super(),t(this,e,I,x,s,["segment"])}}function O(e){var t,s,a=e.error.stack;return{c(){t=r("pre"),s=n(a)},l(e){t=o(e,"PRE",{},!1);var r=l(t);s=c(r,a),r.forEach(i)},m(e,r){u(e,t,r),p(t,s)},p(e,t){e.error&&a!==(a=t.error.stack)&&v(s,a)},d(e){e&&i(t)}}}function U(e){var t,s,m,g,h,d,S,y,E,_=e.error.message;document.title=t=e.status;var b=e.dev&&e.error.stack&&O(e);return{c(){s=a(),m=r("h1"),g=n(e.status),h=a(),d=r("p"),S=n(_),y=a(),b&&b.c(),E=$(),this.h()},l(t){s=c(t,"\n\n"),m=o(t,"H1",{class:!0},!1);var r=l(m);g=c(r,e.status),r.forEach(i),h=c(t,"\n\n"),d=o(t,"P",{class:!0},!1);var n=l(d);S=c(n,_),n.forEach(i),y=c(t,"\n\n"),b&&b.l(t),E=$(),this.h()},h(){m.className="svelte-8od9u6",d.className="svelte-8od9u6"},m(e,t){u(e,s,t),u(e,m,t),p(m,g),u(e,h,t),u(e,d,t),p(d,S),u(e,y,t),b&&b.m(e,t),u(e,E,t)},p(e,s){e.status&&t!==(t=s.status)&&(document.title=t),e.status&&v(g,s.status),e.error&&_!==(_=s.error.message)&&v(S,_),s.dev&&s.error.stack?b?b.p(e,s):((b=O(s)).c(),b.m(E.parentNode,E)):b&&(b.d(1),b=null)},i:f,o:f,d(e){e&&(i(s),i(m),i(h),i(d),i(y)),b&&b.d(e),e&&i(E)}}}function k(e,t,s){let{status:r,error:n}=t;return e.$set=(e=>{"status"in e&&s("status",r=e.status),"error"in e&&s("error",n=e.error)}),{status:r,error:n,dev:!1}}class D extends e{constructor(e){super(),t(this,e,k,U,s,["status","error"])}}function H(e){var t,s,r=[e.level1.props],n=e.level1.component;function a(e){let t={};for(var s=0;s<r.length;s+=1)t=S(t,r[s]);return{props:t}}if(n)var o=new n(a());return{c(){o&&o.$$.fragment.c(),t=$()},l(e){o&&o.$$.fragment.l(e),t=$()},m(e,r){o&&g(o,e,r),u(e,t,r),s=!0},p(e,s){var l=e.level1?y(r,[s.level1.props]):{};if(n!==(n=s.level1.component)){if(o){j();const e=o;_(()=>{e.$destroy()}),e.$$.fragment.o(1),b()}n?((o=new n(a())).$$.fragment.c(),o.$$.fragment.i(1),g(o,t.parentNode,t)):o=null}else n&&o.$set(l)},i(e){s||(o&&o.$$.fragment.i(e),s=!0)},o(e){o&&o.$$.fragment.o(e),s=!1},d(e){e&&i(t),o&&o.$destroy(e)}}}function J(e){var t,s=new D({props:{error:e.error,status:e.status}});return{c(){s.$$.fragment.c()},l(e){s.$$.fragment.l(e)},m(e,r){g(s,e,r),t=!0},p(e,t){var r={};e.error&&(r.error=t.error),e.status&&(r.status=t.status),s.$set(r)},i(e){t||(s.$$.fragment.i(e),t=!0)},o(e){s.$$.fragment.o(e),t=!1},d(e){s.$destroy(e)}}}function V(e){var t,s,r,n,a=[J,H],o=[];function l(e){return e.error?0:1}return t=l(e),s=o[t]=a[t](e),{c(){s.c(),r=$()},l(e){s.l(e),r=$()},m(e,s){o[t].m(e,s),u(e,r,s),n=!0},p(e,n){var c=t;(t=l(n))===c?o[t].p(e,n):(j(),_(()=>{o[c].d(1),o[c]=null}),s.o(1),b(),(s=o[t])||(s=o[t]=a[t](n)).c(),s.i(1),s.m(r.parentNode,r))},i(e){n||(s&&s.i(),n=!0)},o(e){s&&s.o(),n=!1},d(e){o[t].d(e),e&&i(r)}}}function B(e){var t,s=[{segment:e.segments[0]},e.level0.props];let r={$$slots:{default:[V]},$$scope:{ctx:e}};for(var n=0;n<s.length;n+=1)r=S(r,s[n]);var a=new q({props:r});return{c(){a.$$.fragment.c()},l(e){a.$$.fragment.l(e)},m(e,s){g(a,e,s),t=!0},p(e,t){var r=e.segments||e.level0?y(s,[e.segments&&{segment:t.segments[0]},e.level0&&t.level0.props]):{};(e.$$scope||e.error||e.status||e.level1)&&(r.$$scope={changed:e,ctx:t}),a.$set(r)},i(e){t||(a.$$.fragment.i(e),t=!0)},o(e){a.$$.fragment.o(e),t=!1},d(e){a.$destroy(e)}}}function K(e,t,s){let{stores:r,error:n,status:a,segments:o,level0:l,level1:c=null}=t;return E(R,r),e.$set=(e=>{"stores"in e&&s("stores",r=e.stores),"error"in e&&s("error",n=e.error),"status"in e&&s("status",a=e.status),"segments"in e&&s("segments",o=e.segments),"level0"in e&&s("level0",l=e.level0),"level1"in e&&s("level1",c=e.level1)}),{stores:r,error:n,status:a,segments:o,level0:l,level1:c}}class T extends e{constructor(e){super(),t(this,e,K,B,s,["stores","error","status","segments","level0","level1"])}}const G=[],M=[{js:()=>import("./index.83336b02.js"),css:["index.83336b02.css"]},{js:()=>import("./registration-success.8db07afb.js"),css:["registration-success.8db07afb.css","chunk.fbd8dd8c.css"]},{js:()=>import("./register.707bb26f.js"),css:["register.707bb26f.css","chunk.fbd8dd8c.css"]},{js:()=>import("./logout.4c09387e.js"),css:["logout.4c09387e.css"]},{js:()=>import("./about.fcf90b5c.js"),css:[]},{js:()=>import("./login.315962fc.js"),css:["login.315962fc.css","chunk.fbd8dd8c.css"]}],W=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/registration-success\/?$/,parts:[{i:1}]},{pattern:/^\/register\/?$/,parts:[{i:2}]},{pattern:/^\/logout\/?$/,parts:[{i:3}]},{pattern:/^\/about\/?$/,parts:[{i:4}]},{pattern:/^\/login\/?$/,parts:[{i:5}]}];const X="undefined"!=typeof __SAPPER__&&__SAPPER__;let Y,z,F,Q=!1,Z=[],ee="{}";const te={page:P({}),preloading:P(null),session:P(X&&X.session)};let se,re;te.session.subscribe(async e=>{if(se=e,!Q)return;re=!0;const t=pe(new URL(location.href)),s=z={},{redirect:r,props:n,branch:a}=await he(t);s===z&&await ge(r,a,n,t.page)});let ne,ae=null;let oe,le=1;const ce="undefined"!=typeof history?history:{pushState:(e,t,s)=>{},replaceState:(e,t,s)=>{},scrollRestoration:""},ie={};function ue(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,s,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[s]&&(t[s]=[t[s]]),"object"==typeof t[s]?t[s].push(r):t[s]=r}),t}function pe(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(X.baseUrl))return null;let t=e.pathname.slice(X.baseUrl.length);if(""===t&&(t="/"),!G.some(e=>e.test(t)))for(let s=0;s<W.length;s+=1){const r=W[s],n=r.pattern.exec(t);if(n){const s=ue(e.search),a=r.parts[r.parts.length-1],o=a.params?a.params(n):{},l={path:t,query:s,params:o};return{href:e.href,route:r,match:n,page:l}}}}function fe(){return{x:pageXOffset,y:pageYOffset}}async function me(e,t,s,r){if(t)oe=t;else{const e=fe();ie[oe]=e,t=oe=++le,ie[oe]=s?e:{x:0,y:0}}oe=t,Y&&te.preloading.set(!0);const n=ae&&ae.href===e.href?ae.promise:he(e);ae=null;const a=z={},{redirect:o,props:l,branch:c}=await n;if(a===z&&(await ge(o,c,l,e.page),document.activeElement&&document.activeElement.blur(),!s)){let e=ie[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}ie[oe]=e,e&&scrollTo(e.x,e.y)}}async function ge(e,t,s,r){if(e)return function(e,t={replaceState:!1}){const s=pe(new URL(e,document.baseURI));return s?(ce[t.replaceState?"replaceState":"pushState"]({id:oe},"",e),me(s,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(te.page.set(r),te.preloading.set(!1),Y)Y.$set(s);else{s.stores={page:{subscribe:te.page.subscribe},preloading:{subscribe:te.preloading.subscribe},session:te.session},s.level0={props:await F};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)ve(e.nextSibling);ve(e),ve(t)}Y=new T({target:ne,props:s,hydrate:!0})}Z=t,ee=JSON.stringify(r.query),Q=!0,re=!1}async function he(e){const{route:t,page:s}=e,r=s.path.split("/").filter(Boolean);let n=null;const a={error:null,status:200,segments:[r[0]]},o={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(n&&(n.statusCode!==e||n.location!==t))throw new Error("Conflicting redirects");n={statusCode:e,location:t}},error:(e,t)=>{a.error="string"==typeof t?new Error(t):t,a.status=e}};let l;F||(F=X.preloaded[0]||L.call(o,{path:s.path,query:s.query,params:{}},se));let c=1;try{const n=JSON.stringify(s.query),i=t.pattern.exec(s.path);let u=!1;l=await Promise.all(t.parts.map(async(t,l)=>{const p=r[l];if(function(e,t,s,r){if(r!==ee)return!0;const n=Z[e];return!!n&&(t!==n.segment||!(!n.match||JSON.stringify(n.match.slice(1,e+2))===JSON.stringify(s.slice(1,e+2)))||void 0)}(l,p,i,n)&&(u=!0),a.segments[c]=r[l+1],!t)return{segment:p};const f=c++;if(!re&&!u&&Z[l]&&Z[l].part===t.i)return Z[l];u=!1;const{default:m,preload:g}=await function(e){const t="string"==typeof e.css?[]:e.css.map(de);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(M[t.i]);let h;return h=Q||!X.preloaded[l+1]?g?await g.call(o,{path:s.path,query:s.query,params:t.params?t.params(e.match):{}},se):{}:X.preloaded[l+1],a[`level${f}`]={component:m,props:h,segment:p,match:i,part:t.i}}))}catch(e){a.error=e,a.status=500,l=[]}return{redirect:n,props:a,branch:l}}function de(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,s)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=(()=>e()),r.onerror=s,document.head.appendChild(r)})}function ve(e){e.parentNode.removeChild(e)}function $e(e){const t=pe(new URL(e,document.baseURI));if(t)return ae&&e===ae.href||function(e,t){ae={href:e,promise:t}}(e,he(t)),ae.promise}let Se;function ye(e){clearTimeout(Se),Se=setTimeout(()=>{Ee(e)},20)}function Ee(e){const t=be(e.target);t&&"prefetch"===t.rel&&$e(t.href)}function _e(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=be(e.target);if(!t)return;if(!t.href)return;const s="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(s?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(s?t.target.baseVal:t.target)return;const n=new URL(r);if(n.pathname===location.pathname&&n.search===location.search)return;const a=pe(n);if(a){me(a,null,t.hasAttribute("sapper-noscroll"),n.hash),e.preventDefault(),ce.pushState({id:oe},"",n.href)}}function be(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function je(e){if(ie[oe]=fe(),e.state){const t=pe(new URL(location.href));t?me(t,e.state.id):location.href=location.href}else(function(e){oe=e})(le=le+1),ce.replaceState({id:oe},"",location.href)}!function(e){var t;"scrollRestoration"in ce&&(ce.scrollRestoration="manual"),t=e.target,ne=t,addEventListener("click",_e),addEventListener("popstate",je),addEventListener("touchstart",Ee),addEventListener("mousemove",ye),Promise.resolve().then(()=>{const{hash:e,href:t}=location;ce.replaceState({id:le},"",t);const s=new URL(location.href);if(X.error)return function(e){const{pathname:t,search:s}=location,{session:r,preloaded:n,status:a,error:o}=X;F||(F=n&&n[0]),ge(null,[],{error:o,status:a,session:r,level0:{props:F},level1:{props:{status:a,error:o},component:D},segments:n},{path:t,query:ue(s),params:{}})}();const r=pe(s);return r?me(r,le,!0,e):void 0})}({target:document.querySelector("#sapper")});
//# sourceMappingURL=client.847702d0.js.map
