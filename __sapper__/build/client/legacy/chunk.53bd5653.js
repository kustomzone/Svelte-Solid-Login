import{s as n,n as r}from"./chunk.fec452ba.js";function t(t){var e,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,i=[];function f(r){if(n(t,r)){if(t=r,!e)return;i.forEach(function(n){return n[1]()}),i.forEach(function(n){return n[0](t)})}}return{set:f,update:function(n){f(n(t))},subscribe:function(n){var o=[n,arguments.length>1&&void 0!==arguments[1]?arguments[1]:r];return i.push(o),1===i.length&&(e=u(f)||r),n(t),function(){var n=i.indexOf(o);-1!==n&&i.splice(n,1),0===i.length&&e()}}}}var e=t(!1);export{e as l,t as w};
//# sourceMappingURL=chunk.53bd5653.js.map