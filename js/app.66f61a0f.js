(function(e){function t(t){for(var r,c,i=t[0],a=t[1],p=t[2],f=0,s=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&s.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);l&&l(t);while(s.length)s.shift()();return u.push.apply(u,p||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,i=1;i<n.length;i++){var a=n[i];0!==o[a]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},u=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/composition-api-tailwindcss-sample-1/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var l=a;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},ba8c:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o=Object(r["d"])({expose:[],props:{cookie:String},setup:function(e,t){var n=t.emit,o=function(){n("doge","barking")};return function(e,t){return Object(r["f"])(),Object(r["c"])("button",{onClick:o,class:"p-4 mt-60 border rounded-lg cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300"},[Object(r["i"])(e.$slots,"default")])}}}),u=o,c=Object(r["d"])({expose:[],setup:function(e){var t=Object(r["g"])({name:"bob",age:999});Object(r["e"])((function(){t.age=100}));var n=function(){t.age++},o=function(e){console.log(e)};return{doge:t,countUp:n,getDoge:o,ref:r["h"],reactive:r["g"],onMounted:r["e"],computed:r["a"],Button:u}}}),i=c;n("ba8c");Object(r["b"])(i).mount("#app")}});
//# sourceMappingURL=app.66f61a0f.js.map