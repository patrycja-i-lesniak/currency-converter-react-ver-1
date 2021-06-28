(this["webpackJsonpcurrency-converter-react-ver-1"]=this["webpackJsonpcurrency-converter-react-ver-1"]||[]).push([[0],{20:function(n,e,t){"use strict";t.r(e);var r,o,c,i,a,u,s,l,d,b,j,x,m,h=t(1),f=t.n(h),g=t(9),p=t.n(g),O=t(3),w=t(2),v=Object(w.b)(r||(r=Object(O.a)(["\n    html {\n      box-sizing: border-box;\n    }\n\n    *,\n    ::after,\n    ::before {\n      box-sizing: inherit;\n    }\n\n    .root {\n      font-size: 16px;\n    }\n"]))),k=w.d.h1(o||(o=Object(O.a)(["\n    background-color: ",";\n    color: white;\n    padding: 30px;\n    margin: auto;\n    text-transform: uppercase;\n    letter-spacing: 5px;\n    word-spacing: 15px;\n    text-align: center;\n\n    @media (max-width: ","px) {\n      font-size: 1.7em ;\n    }\n"])),(function(n){return n.theme.colors.BigStone}),(function(n){return n.theme.breakpoints.xsmall})),z=t(0),S=function(n){var e=n.title;return Object(z.jsx)(k,{children:e})},y=t(4),F=w.d.form(c||(c=Object(O.a)(["\n    background-color: ",";\n    justify-content: center;\n"])),(function(n){return n.theme.colors.FrenchPass})),C=w.d.fieldset(i||(i=Object(O.a)(["\n    display: flex;\n    flex-direction: column;\n    border: none ;\n    background-color: rgb(198, 233, 247);\n    min-width: 280px;\n"]))),P=w.d.input(a||(a=Object(O.a)(["\n    padding: 20px;\n    margin: 0 30px;\n    border: 1px solid #ddd;\n    box-shadow: ",";\n    color: hsl(0, 0%, 60%);\n"])),(function(n){return n.theme.shadow})),B=w.d.button(u||(u=Object(O.a)(["\n    background-color: ",";\n    border: none;\n    margin: 50px 30px 0px;\n    padding: 20px;\n    color: white;\n    box-shadow: ",";\n    transition: filter 0.5s;\n\n    &:hover {\n        filter: brightness(110%);\n    }\n\n    &:active {\n        filter: brightness(120%);\n    }\n"])),(function(n){return n.theme.colors.BigStone}),(function(n){return n.theme.shadow})),K=function(n){var e=n.buttonName;return Object(z.jsx)(B,{children:e})},E=w.d.p(s||(s=Object(O.a)(["\n    color: ",";\n    font-weight: bold;\n    padding: 10px;\n    text-align: center;\n"])),(function(n){return n.theme.colors.BigStone})),D=function(n){var e=n.text;return Object(z.jsx)(E,{children:e})},I=w.d.div(l||(l=Object(O.a)(["\n    text-align: center;\n    margin: 20px;\n    color:  ",";\n"])),(function(n){return n.theme.colors.BigStone})),L=w.d.p(d||(d=Object(O.a)(["\n    font-size: larger;\n\n    ","\n"])),(function(n){return n.bolder&&Object(w.c)(b||(b=Object(O.a)(["\n        font-weight: 900;\n    "])))})),R=function(n){var e=n.result;return Object(z.jsx)(I,{children:void 0!==e&&Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(L,{children:"Kwota wyliczona na podstawie kursu NBP "}),Object(z.jsx)(L,{children:" z dnia 14-06-2021:"}),Object(z.jsxs)(L,{bolder:!0,children:[e.sourceAmount.toFixed(2),"\xa0PLN\xa0="," ",e.targetAmount.toFixed(2),"\xa0",e.currency]})]})})},A=[{id:"CHF",rate:4.136,name:"CHF - Frank szwajcarski"},{id:"EUR",rate:4.5027,name:"EUR - Euro"},{id:"GBP",rate:5.2369,name:"GBP - Funt szterling"},{id:"JPY",rate:3.3908,name:"JPY - Jen japo\u0144ski"},{id:"CZK",rate:.1769,name:"CZK - Korona czeska"},{id:"ISK",rate:3.0589,name:"ISK - Korona islandzka"},{id:"RUB",rate:.0514,name:"RUB - Rubel rosyjski"}],J=w.d.p(j||(j=Object(O.a)(['\n    text-align: right;\n    font-family: "Source Code Pro", monospace;\n    font-size: smaller;\n    color: hsla(221, 51%, 25%, 0.749);\n    margin-right: 10px;\n\n    @media (max-width: ',"px) {\n      text-align: center;\n    }\n"])),(function(n){return n.theme.breakpoints.mall})),N=function(){var n=function(){var n=Object(h.useState)(new Date),e=Object(y.a)(n,2),t=e[0],r=e[1];return Object(h.useEffect)((function(){var n=setInterval((function(){r(new Date)}),1e3);return function(){return clearInterval(n)}}),[]),t}();return Object(z.jsxs)(J,{children:["Dzisiaj jest ",function(n){return n.toLocaleDateString(void 0,{weekday:"long",day:"numeric",month:"long",hour:"numeric",minute:"numeric",second:"numeric"})}(n)]})},U=function(){var n=Object(h.useState)(""),e=Object(y.a)(n,2),t=e[0],r=e[1],o=Object(h.useState)(A[0].id),c=Object(y.a)(o,2),i=c[0],a=c[1],u=Object(h.useState)(),s=Object(y.a)(u,2),l=s[0],d=s[1],b=Object(h.useRef)(null);return Object(z.jsx)(F,{onSubmit:function(n){n.preventDefault(),function(n,e){var t=A.find((function(n){return n.id===e})).rate;d({sourceAmount:+n,targetAmount:n/t,currency:e})}(t,i)},children:Object(z.jsxs)(C,{children:[Object(z.jsx)(N,{}),Object(z.jsx)(D,{text:"Kwota w PLN"}),Object(z.jsx)(P,{ref:b,type:"number",min:"0.01",step:"0.01",placeholder:"0,00",required:!0,value:t,onChange:function(n){var e=n.target;return r(e.value)}}),Object(z.jsx)(D,{text:"Przelicz na"}),Object(z.jsx)(P,{as:"select",value:i,onChange:function(n){var e=n.target;return a(e.value)},children:A.map((function(n){return Object(z.jsx)("option",{value:n.id,required:!0,children:n.name},n.id)}))}),Object(z.jsx)(K,{onClick:function(){return b.current.focus()},buttonName:"Policz kurs"}),Object(z.jsx)(R,{result:l})]})})},T=w.d.footer(x||(x=Object(O.a)(["\n    text-align: center;\n    font-size: smaller;\n    font-weight: 300;\n    color: ",";\n    font-weight: bold;\n    padding: 10px;\n    text-align: center;\n"])),(function(n){return n.theme.colors.BigStone})),q=w.d.main(m||(m=Object(O.a)(["\n    max-width: 650px;\n    margin: 15px auto;\n    box-shadow: ",';\n    font-family: "Lato", sans-serif;\n    min-width: 280px;\n\n    @media (max-width: ',"px) {\n      margin: 15px;\n    }\n"])),(function(n){return n.theme.shadow}),(function(n){return n.theme.breakpoints.small}));var G=function(){return Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)(q,{children:[Object(z.jsx)(S,{title:"Kalkulator walut"}),Object(z.jsx)(U,{}),Object(z.jsx)(T,{children:"Coded by Trishya \xa9 2021"})]})})},H=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,21)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),r(n),o(n),c(n),i(n)}))};p.a.render(Object(z.jsx)(f.a.StrictMode,{children:Object(z.jsxs)(w.a,{theme:{colors:{BigStone:"#18243A",FrenchPass:"#C9EEFC"},breakpoints:{xsmall:576,small:768,medium:992,large:1200},shadow:"5px 5px 7px hsl(0, 0%, 50%)"},children:[Object(z.jsx)(v,{}),Object(z.jsx)(G,{})]})}),document.getElementById("root")),H()}},[[20,1,2]]]);
//# sourceMappingURL=main.4794d9f7.chunk.js.map