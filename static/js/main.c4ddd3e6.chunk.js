(this["webpackJsonpcurrency-converter-react-ver-1"]=this["webpackJsonpcurrency-converter-react-ver-1"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(4),u=n.n(a),i=(n(9),n(2)),s=(n(10),n(0)),o=function(e){var t=e.title;return Object(s.jsx)("h1",{className:"header header__text",children:t})},l=(n(12),n(13),function(e){var t=e.buttonName;return Object(s.jsx)("button",{className:"button",children:t})}),j=(n(14),function(e){var t=e.amount,n=e.setAmount;return Object(s.jsx)("input",{className:"input",type:"number",min:"0.01",step:"0.01",placeholder:"0,00",required:!0,value:t,onChange:function(e){var t=e.target;return n(t.value)}})}),d=(n(15),function(e){var t=e.text;return Object(s.jsx)("p",{className:"paragraph",children:t})}),b=(n(16),[{id:"CHF",rate:4.136,name:"CHF - Frank szwajcarski"},{id:"EUR",rate:4.5027,name:"EUR - Euro"},{id:"GBP",rate:5.2369,name:"GBP - Funt szterling"},{id:"JPY",rate:3.3908,name:"JPY - Jen japo\u0144ski"},{id:"CZK",rate:.1769,name:"CZK - Korona czeska"},{id:"ISK",rate:3.0589,name:"ISK - Korona islandzka"},{id:"RUB",rate:.0514,name:"RUB - Rubel rosyjski"}]),m=function(e){var t=e.currency,n=e.setCurrency;return Object(s.jsx)("select",{className:"select",value:t,onChange:function(e){var t=e.target;return n(t.value)},children:b.map((function(e){return Object(s.jsx)("option",{value:e.id,required:!0,children:e.name},e.id)}))})},f=(n(17),function(e){var t=e.result;return Object(s.jsx)("div",{className:"result",children:void 0!==t&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("p",{children:"Kwota wyliczona na podstawie kursu NBP "}),Object(s.jsx)("p",{children:" z dnia 14-06-2021:"}),Object(s.jsxs)("p",{className:"result result--paragraph",children:[t.sourceAmount.toFixed(2),"\xa0PLN\xa0="," ",t.targetAmount.toFixed(2),"\xa0",t.currency]})]})})}),x=(n(18),function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){var e=setInterval((function(){c((new Date).toLocaleDateString(void 0,{weekday:"long",day:"numeric",month:"long",hour:"numeric",minute:"numeric",second:"numeric"}))}),0);return function(){clearInterval(e)}})),Object(s.jsxs)("p",{className:"clock",children:["Dzisiaj jest ",n]})}),O=function(e){var t=e.result,n=e.calculateResult,c=Object(r.useState)(""),a=Object(i.a)(c,2),u=a[0],o=a[1],O=Object(r.useState)(b[0].id),h=Object(i.a)(O,2),v=h[0],p=h[1];return Object(s.jsx)("form",{className:"form",onSubmit:function(e){e.preventDefault(),n(u,v)},children:Object(s.jsxs)("fieldset",{className:"form__field",children:[Object(s.jsx)(x,{}),Object(s.jsx)(d,{text:"Kwota w PLN"}),Object(s.jsx)(j,{amount:u,setAmount:o}),Object(s.jsx)(d,{text:"Przelicz na"}),Object(s.jsx)(m,{currency:v,setCurrency:p}),Object(s.jsx)(l,{buttonName:"Policz kurs"}),Object(s.jsx)(f,{result:t})]})})},h=(n(19),function(e){var t=e.text;return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)(d,{text:t})})}),v=(n(20),function(e){var t=e.children;return Object(s.jsx)("main",{className:"container",children:t})});var p=function(){var e=Object(r.useState)(),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(v,{children:[Object(s.jsx)(o,{title:"Kalkulator walut"}),Object(s.jsx)(O,{calculateResult:function(e,t){var n=b.find((function(e){return e.id===t})).rate;c({sourceAmount:+e,targetAmount:e/n,currency:t})},result:n}),Object(s.jsx)(h,{text:"Coded by Trishya \xa9 2021"})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,u=t.getTTFB;n(e),r(e),c(e),a(e),u(e)}))};u.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(p,{})}),document.getElementById("root")),g()}],[[21,1,2]]]);
//# sourceMappingURL=main.c4ddd3e6.chunk.js.map