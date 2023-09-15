/*! For license information please see 63.e2039cbe.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkstore=self.webpackChunkstore||[]).push([[63],{63:function(t,r,e){e.r(r);var n=e(982),o=e(885),a=e(791),c=e(261),i=e(667),s=e(184);r.default=function(t){var r=t.status,e=(0,a.useState)(),u=(0,o.Z)(e,2),f=u[0],l=u[1],h=(0,i.Z)().getAllUsers;(0,a.useEffect)((function(){p()}),[r]);var p=function(){h().then((function(t){var r=[];t.users.forEach((function(t){var e=[(0,s.jsxs)("div",{className:"oneuser","data-id":t.id,children:[(0,s.jsxs)("figure",{children:[(0,s.jsx)("img",{className:"userimg",src:t.image,alt:"user"}),(0,s.jsx)("figcaption",{children:t.username})]}),(0,s.jsxs)("section",{className:"maininfo",children:[(0,s.jsx)("p",{children:t.firstName}),(0,s.jsx)("p",{children:t.lastName}),(0,s.jsx)("p",{children:t.maidenName}),(0,s.jsxs)("p",{children:["years: ",t.age]}),(0,s.jsxs)("p",{children:["birth-date:",(0,s.jsx)("br",{}),t.birthDate]})]}),(0,s.jsxs)("section",{className:"careerinfo",children:[(0,s.jsxs)("p",{children:["university:",(0,s.jsx)("br",{}),t.university]}),(0,s.jsxs)("p",{children:["company:",(0,s.jsx)("br",{}),t.company.name]}),(0,s.jsxs)("p",{children:["position:",(0,s.jsx)("br",{}),t.company.title]})]}),(0,s.jsxs)("section",{className:"contactinfo",children:[(0,s.jsxs)("p",{children:["phone:",(0,s.jsx)("br",{}),t.phone]}),(0,s.jsxs)("p",{children:["email:",(0,s.jsx)("br",{}),t.email]}),(0,s.jsxs)("p",{children:["address:",(0,s.jsx)("br",{}),t.address.address]}),(0,s.jsxs)("p",{children:["city:",(0,s.jsx)("br",{}),t.address.city]}),(0,s.jsxs)("p",{children:["postalCode:",(0,s.jsx)("br",{}),t.address.postalCode]}),(0,s.jsxs)("p",{children:["state:",(0,s.jsx)("br",{}),t.address.state]})]})]},c.Z)];r=[r].concat(e),l((0,n.Z)(r))}))}))};return(0,s.jsx)("div",{className:"community",children:(0,s.jsxs)("div",{className:"community__container",children:[(0,s.jsx)("div",{className:"close",onClick:r,children:"\u2716"}),f]})})}},667:function(t,r,e){e.d(r,{Z:function(){return i}});var n=e(165),o=e(861),a=e(885),c=e(791),i=function(){var t=function(){var t=(0,c.useState)("waiting"),r=(0,a.Z)(t,2),e=r[0],i=r[1],s=(0,c.useCallback)(function(){var t=(0,o.Z)((0,n.Z)().mark((function t(r){var e,o,a,c,s,u=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=u.length>1&&void 0!==u[1]?u[1]:"GET",o=u.length>2&&void 0!==u[2]?u[2]:null,a=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},i("loading"),t.prev=4,t.next=7,fetch(r,{method:e,body:o,headers:a});case 7:if((c=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(r,", status: ").concat(c.status));case 10:return t.next=12,c.json();case 12:return s=t.sent,t.abrupt("return",s);case 16:throw t.prev=16,t.t0=t.catch(4),i("error"),t.t0;case 20:case"end":return t.stop()}}),t,null,[[4,16]])})));return function(r){return t.apply(this,arguments)}}(),[]);return{request:s,clearError:(0,c.useCallback)((function(){i("loading")}),[]),process:e,setProcess:i}}(),r=t.request,e=t.clearError,i=t.process,s=t.setProcess,u="https://dummyjson.com",f="/products",l=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r("".concat(u).concat(f,"?limit=100"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(e){var o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r("".concat(u).concat(f,"/").concat(e));case 2:return o=t.sent,t.abrupt("return",o);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r("".concat(u).concat(f).concat("/categories"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(e){var o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r("".concat(u).concat(f).concat("/category","/").concat(e));case 2:return o=t.sent,t.abrupt("return",o);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),v=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(e){var o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r("".concat(u).concat(f,"/search?q=").concat(e));case 2:return o=t.sent,t.abrupt("return",o);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),y=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r("".concat(u).concat("/users","?limit=100"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r("".concat(u).concat("/posts","?limit=150"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{clearError:e,process:i,setProcess:s,getAllProducts:l,getSingleProduct:h,getAllCategories:p,getProductsOfCategory:d,getSearchedProducts:v,getAllUsers:y,getAllPosts:m}}},261:function(t,r,e){e.d(r,{Z:function(){return f}});var n,o={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},a=new Uint8Array(16);function c(){if(!n&&!(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(a)}for(var i=[],s=0;s<256;++s)i.push((s+256).toString(16).slice(1));function u(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(i[t[r+0]]+i[t[r+1]]+i[t[r+2]]+i[t[r+3]]+"-"+i[t[r+4]]+i[t[r+5]]+"-"+i[t[r+6]]+i[t[r+7]]+"-"+i[t[r+8]]+i[t[r+9]]+"-"+i[t[r+10]]+i[t[r+11]]+i[t[r+12]]+i[t[r+13]]+i[t[r+14]]+i[t[r+15]]).toLowerCase()}var f=function(t,r,e){if(o.randomUUID&&!r&&!t)return o.randomUUID();var n=(t=t||{}).random||(t.rng||c)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,r){e=e||0;for(var a=0;a<16;++a)r[e+a]=n[a];return r}return u(n)}},861:function(t,r,e){function n(t,r,e,n,o,a,c){try{var i=t[a](c),s=i.value}catch(u){return void e(u)}i.done?r(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,a){var c=t.apply(r,e);function i(t){n(c,o,a,i,s,"next",t)}function s(t){n(c,o,a,i,s,"throw",t)}i(void 0)}))}}e.d(r,{Z:function(){return o}})},165:function(t,r,e){e.d(r,{Z:function(){return o}});var n=e(2);function o(){o=function(){return r};var t,r={},e=Object.prototype,a=e.hasOwnProperty,c=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",f=i.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof x?r:x,a=Object.create(o.prototype),i=new U(n||[]);return c(a,"_invoke",{value:P(t,e,i)}),a}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var d="suspendedStart",v="suspendedYield",y="executing",m="completed",g={};function x(){}function w(){}function b(){}var j={};l(j,s,(function(){return this}));var Z=Object.getPrototypeOf,E=Z&&Z(Z(C([])));E&&E!==e&&a.call(E,s)&&(j=E);var L=b.prototype=x.prototype=Object.create(j);function k(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function N(t,r){function e(o,c,i,s){var u=p(t[o],t,c);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"==(0,n.Z)(l)&&a.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,i,s)}),(function(t){e("throw",t,i,s)})):r.resolve(l).then((function(t){f.value=t,i(f)}),(function(t){return e("throw",t,i,s)}))}s(u.arg)}var o;c(this,"_invoke",{value:function(t,n){function a(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(a,a):a()}})}function P(r,e,n){var o=d;return function(a,c){if(o===y)throw new Error("Generator is already running");if(o===m){if("throw"===a)throw c;return{value:t,done:!0}}for(n.method=a,n.arg=c;;){var i=n.delegate;if(i){var s=S(i,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=p(r,e,n);if("normal"===u.type){if(o=n.done?m:v,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=m,n.method="throw",n.arg=u.arg)}}}function S(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,S(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=p(o,r.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,g;var c=a.arg;return c?c.done?(e[r.resultName]=c.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):c:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function _(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function U(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function C(r){if(r||""===r){var e=r[s];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,c=function e(){for(;++o<r.length;)if(a.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return c.next=c}}throw new TypeError((0,n.Z)(r)+" is not iterable")}return w.prototype=b,c(L,"constructor",{value:b,configurable:!0}),c(b,"constructor",{value:w,configurable:!0}),w.displayName=l(b,f,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===w||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,f,"GeneratorFunction")),t.prototype=Object.create(L),t},r.awrap=function(t){return{__await:t}},k(N.prototype),l(N.prototype,u,(function(){return this})),r.AsyncIterator=N,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var c=new N(h(t,e,n,o),a);return r.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},k(L),l(L,f,"Generator"),l(L,s,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=C,U.prototype={constructor:U,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!r)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function n(n,o){return i.type="throw",i.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],i=c.completion;if("root"===c.tryLoc)return n("end");if(c.tryLoc<=this.prev){var s=a.call(c,"catchLoc"),u=a.call(c,"finallyLoc");if(s&&u){if(this.prev<c.catchLoc)return n(c.catchLoc,!0);if(this.prev<c.finallyLoc)return n(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return n(c.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return n(c.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=r,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(c)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:C(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),g}},r}},2:function(t,r,e){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}e.d(r,{Z:function(){return n}})}}]);
//# sourceMappingURL=63.e2039cbe.chunk.js.map