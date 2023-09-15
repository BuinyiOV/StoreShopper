"use strict";(self.webpackChunkstore=self.webpackChunkstore||[]).push([[544],{544:function(t,e,a){a.r(e);var s=a(982),n=a(885),r=a(791),i=a(261),l=a(184);e.default=function(t){var e=t.onClearBasket,a=t.status,c=t.besketItems,o=t.onDeleteFromBasket,d=(0,r.useState)([]),u=(0,n.Z)(d,2),h=u[0],m=u[1];(0,r.useEffect)((function(){v(c)}),[c]);var v=function(t){var e=[];t.forEach((function(t,a){var n=[(0,l.jsxs)("div",{className:"basket__item","data-title":t.title,children:[(0,l.jsx)("img",{className:"basket__img",src:t.thumbnail,alt:"#"}),(0,l.jsxs)("div",{className:"basket__content",children:[(0,l.jsx)("div",{className:"basket__title"}),(0,l.jsxs)("div",{className:"basket__priceandrate",children:[(0,l.jsxs)("div",{className:"basket__price",children:[t.price,".00$"]}),(0,l.jsx)("div",{className:"basket__rate",children:f(t.rating)})]}),(0,l.jsxs)("section",{className:"setqty",children:[(0,l.jsx)("div",{className:"qtyfield",children:t.amount}),(0,l.jsx)("div",{className:"basket__dlt",onClick:o,children:"\u2716"})]})]})]},i.Z+a)];e=[].concat((0,s.Z)(e),n)})),m((0,s.Z)(e))},f=function(t){for(var e=[],a=5;a>0;a--){var n=[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"gold",className:"bi bi-star-fill",viewBox:"0 0 16 16",children:(0,l.jsx)("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})},i.Z+a)],r=[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"gold",className:"bi bi-star-half",viewBox:"0 0 16 16",children:(0,l.jsx)("path",{d:"M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"})},i.Z+a)],c=[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"gold",className:"bi bi-star",viewBox:"0 0 16 16",children:(0,l.jsx)("path",{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"})},i.Z+a)];a-t>=1?e=[].concat(c,(0,s.Z)(e)):a-t>=.5?e=[].concat(r,(0,s.Z)(e)):a-t<=.5&&(e=[].concat(n,(0,s.Z)(e)))}return e};return(0,l.jsx)("section",{className:"basket",children:(0,l.jsxs)("div",{className:"basket__container",children:[(0,l.jsx)("div",{className:"close",onClick:a,children:"\u2716"}),h,c.length?(0,l.jsx)("div",{className:"btn__buy basketbuy",onClick:e,style:{width:"95%",margin:"0 auto"},children:"buy"}):(0,l.jsx)("div",{className:"btn__buy basketbuy",onClick:a,style:{width:"95%",margin:"10vh auto"},children:"cart is empty..."})]})})}},261:function(t,e,a){a.d(e,{Z:function(){return d}});var s,n={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},r=new Uint8Array(16);function i(){if(!s&&!(s="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(r)}for(var l=[],c=0;c<256;++c)l.push((c+256).toString(16).slice(1));function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(l[t[e+0]]+l[t[e+1]]+l[t[e+2]]+l[t[e+3]]+"-"+l[t[e+4]]+l[t[e+5]]+"-"+l[t[e+6]]+l[t[e+7]]+"-"+l[t[e+8]]+l[t[e+9]]+"-"+l[t[e+10]]+l[t[e+11]]+l[t[e+12]]+l[t[e+13]]+l[t[e+14]]+l[t[e+15]]).toLowerCase()}var d=function(t,e,a){if(n.randomUUID&&!e&&!t)return n.randomUUID();var s=(t=t||{}).random||(t.rng||i)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,e){a=a||0;for(var r=0;r<16;++r)e[a+r]=s[r];return e}return o(s)}}}]);
//# sourceMappingURL=544.6901f5a2.chunk.js.map