(this["webpackJsonpcurrency-converter-react-ver-1"]=this["webpackJsonpcurrency-converter-react-ver-1"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(4),u=n.n(a),s=(n(9),n(2)),i=(n(10),n(0)),o=function(e){var t=e.title;return Object(i.jsx)("h1",{className:"header header__text",children:t})},l=(n(12),n(13),function(e){var t=e.buttonName;return Object(i.jsx)("button",{className:"button",children:t})}),j=(n(14),function(e){var t=e.amount,n=e.setAmount;return Object(i.jsx)("input",{className:"input",type:"number",min:"0.01",step:"0.01",placeholder:"0,00",required:!0,value:t,onChange:function(e){var t=e.target;return n(t.value)}})}),d=(n(15),function(e){var t=e.text;return Object(i.jsx)("p",{className:"paragraph",children:t})}),b=(n(16),[{id:"",name:"wybierz walut\u0119"},{id:"CHF",rate:4.136,name:"CHF - Frank szwajcarski"},{id:"EUR",rate:4.5027,name:"EUR - Euro"},{id:"GBP",rate:5.2369,name:"GBP - Funt szterling"},{id:"JPY",rate:3.3908,name:"JPY - Jen japo\u0144ski"},{id:"CZK",rate:.1769,name:"CZK - Korona czeska"},{id:"ISK",rate:3.0589,name:"ISK - Korona islandzka"},{id:"RUB",rate:.0514,name:"RUB - Rubel rosyjski"}]),m=function(e){var t=e.currency,n=e.setCurrency;return Object(i.jsx)("select",{className:"select",value:t,onChange:function(e){var t=e.target;return n(t.value)},children:b.map((function(e){return Object(i.jsx)("option",{value:e.id,children:e.name},e.id)}))})},f=(n(17),function(e){var t=e.result;return Object(i.jsx)("div",{className:"result",children:void 0!==t&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("p",{children:"Kwota wyliczona na podstawie kursu NBP "}),Object(i.jsx)("p",{children:" z dnia 14-06-2021:"}),Object(i.jsxs)("p",{className:"result result--paragraph",children:[t.sourceAmount.toFixed(2),"\xa0PLN\xa0="," ",t.targetAmount.toFixed(2),"\xa0",t.currency]})]})})}),x=function(e){var t=e.result,n=e.calculateResult,c=Object(r.useState)(""),a=Object(s.a)(c,2),u=a[0],o=a[1],x=Object(r.useState)(b[0].id),O=Object(s.a)(x,2),h=O[0],v=O[1];return Object(i.jsx)("form",{className:"form",onSubmit:function(e){e.preventDefault(),n(u,h)},children:Object(i.jsxs)("fieldset",{className:"form__field",children:[Object(i.jsx)(d,{text:"Kwota w PLN"}),Object(i.jsx)(j,{amount:u,setAmount:o}),Object(i.jsx)(d,{text:"Przelicz na"}),Object(i.jsx)(m,{currency:h,setCurrency:v}),Object(i.jsx)(l,{buttonName:"Policz kurs"}),Object(i.jsx)(f,{result:t})]})})},O=(n(18),function(e){var t=e.text;return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)(d,{text:t})})}),h=(n(19),function(e){var t=e.children;return Object(i.jsx)("main",{className:"container",children:t})});var v=function(){var e=Object(r.useState)(),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(h,{children:[Object(i.jsx)(o,{title:"Kalkulator walut"}),Object(i.jsx)(x,{calculateResult:function(e,t){var n=b.find((function(e){return e.id===t})).rate;c({sourceAmount:+e,targetAmount:e/n,currency:t})},result:n}),Object(i.jsx)(O,{text:"Coded by Trishya \xa9 2021"})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,u=t.getTTFB;n(e),r(e),c(e),a(e),u(e)}))};u.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root")),p()}],[[20,1,2]]]);
//# sourceMappingURL=main.bf0c6bef.chunk.js.map