(this["webpackJsonpcurrency-converter-react-ver-1"]=this["webpackJsonpcurrency-converter-react-ver-1"]||[]).push([[0],{50:function(e,n,t){"use strict";t.r(n);var r,o,c,i,a,s,u,l,d,b,j,x,h,f,m,g,p=t(1),O=t.n(p),w=t(20),v=t.n(w),k=t(3),y=t(2),z=Object(y.b)(r||(r=Object(k.a)(["\n    html {\n      box-sizing: border-box;\n    }\n\n    *,\n    ::after,\n    ::before {\n      box-sizing: inherit;\n    }\n\n    .root {\n      font-size: 16px;\n    }\n\n    body {\n      background-color: ",";\n    }\n"])),(function(e){return e.theme.colors.white})),F=y.d.h1(o||(o=Object(k.a)(["\n    background-color: ",";\n    color: ",";\n    padding: 30px;\n    margin: auto;\n    text-transform: uppercase;\n    letter-spacing: 5px;\n    word-spacing: 15px;\n    text-align: center;\n    font-family: 'Secular One', sans-serif;\n    font-size: 40px;\n"])),(function(e){return e.theme.colors.selectiveYellow}),(function(e){return e.theme.colors.woodsmoke})),C=t(0),S=function(e){var n=e.title;return Object(C.jsx)(F,{children:n})},B=t(5),E=t.p+"static/media/loading.b90130d5.gif",D=t.p+"static/media/nointernet.548de0ba.gif",P=y.d.form(c||(c=Object(k.a)(["\n    background-color: ",";\n    justify-content: center;\n"])),(function(e){return e.theme.colors.woodsmoke})),A=y.d.fieldset(i||(i=Object(k.a)(["\n    min-height: 550px;\n    display: flex;\n    flex-direction: column;\n    border: none ;\n    background-color: ",";\n    min-width: 280px;\n"])),(function(e){return e.theme.colors.woodsmoke})),L=y.d.input(a||(a=Object(k.a)(["\n    padding: 10px;\n    margin: 0 30px;\n    border: 1px solid ",";\n    box-shadow: ",";\n    color: hsl(0, 0%, 60%);\n    border-radius: 5px;\n"])),(function(e){return e.theme.colors.alto}),(function(e){return e.theme.shadow})),N=y.d.img.attrs({src:E})(s||(s=Object(k.a)(["\n        align-self: center;\n        width: 300px;\n        margin-bottom: 60px;\n"]))),I=y.d.img.attrs({src:D})(u||(u=Object(k.a)(["\n        align-self: center;\n        width: 300px;\n        margin-bottom: 60px;\n"]))),T=y.d.button(l||(l=Object(k.a)(["\n    background-color: ",";\n    border: none;\n    margin: 50px 30px 0px;\n    padding: 15px;\n    border-radius: 5px;\n    color: ",";\n    font-weight: 600;\n    box-shadow: ",";\n    transition: filter 0.5s;\n\n    &:hover {\n        filter: brightness(110%);\n    }\n\n    &:active {\n        filter: brightness(120%);\n    }\n"])),(function(e){return e.theme.colors.robinsEggBlue}),(function(e){return e.theme.colors.woodsmoke}),(function(e){return e.theme.shadow})),Y=function(e){var n=e.buttonName;return Object(C.jsx)(T,{children:n})},K=y.d.p(d||(d=Object(k.a)(["\n    color: ",";\n    font-weight: 700;\n    padding: 10px;\n    text-align: center;\n"])),(function(e){return e.theme.colors.robinsEggBlue})),q=function(e){var n=e.text;return Object(C.jsx)(K,{children:n})},J=y.d.div(b||(b=Object(k.a)(["\n    text-align: center;\n    margin: 20px;\n"]))),R=y.d.p(j||(j=Object(k.a)(["\n    font-size: 16px;\n\n    ","\n\n    ","\n"])),(function(e){return e.result&&Object(y.c)(x||(x=Object(k.a)(["\n        font-weight: 200;\n        font-size: 14px;\n        color:  ",";\n    "])),(function(e){return e.theme.colors.selectiveYellow}))}),(function(e){return e.highlight&&Object(y.c)(h||(h=Object(k.a)(["\n        font-weight: 600;\n        font-size: 20px;\n        color:  ",";\n    "])),(function(e){return e.theme.colors.crimson}))})),U=function(e){var n=e.result,t=e.date;return Object(C.jsx)(J,{children:void 0!==n&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(R,{result:!0,children:"Kursy walut pobierane s\u0105 z Europejskiego Banku Centralnego. "}),Object(C.jsxs)(R,{result:!0,children:["Kurs aktualny na dzie\u0144: ",t," "]}),Object(C.jsxs)(R,{highlight:!0,children:[n.sourceAmount.toFixed(2),"\xa0\xa0PLN\xa0\xa0=","  ",n.targetAmount.toFixed(2),"\xa0\xa0",n.currency]})]})})},M=y.d.p(f||(f=Object(k.a)(['\n    text-align: right;\n    font-family: "Source Code Pro", monospace;\n    font-size: 12px;\n    color: ',";\n    margin-right: 10px;\n\n    @media (max-width: ","px) {\n      text-align: center;\n    }\n"])),(function(e){return e.theme.colors.crimson}),(function(e){return e.theme.breakpoints.small})),W=function(){var e=function(){var e=Object(p.useState)(new Date),n=Object(B.a)(e,2),t=n[0],r=n[1];return Object(p.useEffect)((function(){var e=setInterval((function(){r(new Date)}),1e3);return function(){return clearInterval(e)}}),[]),t}();return Object(C.jsxs)(M,{children:["Dzisiaj jest ",function(e){return e.toLocaleDateString(void 0,{weekday:"long",day:"numeric",month:"long",hour:"numeric",minute:"numeric",second:"numeric"})}(e)]})},G=t(9),H=t.n(G),Q=t(24),V=t(25),X=t.n(V),Z=function(){var e=Object(p.useState)(),n=Object(B.a)(e,2),t=n[0],r=n[1],o=Object(p.useState)("EUR"),c=Object(B.a)(o,2),i=c[0],a=c[1],s=Object(p.useState)(),u=Object(B.a)(s,2),l=u[0],d=u[1],b=Object(p.useRef)(null),j=function(){var e=Object(p.useState)({status:"loading"}),n=Object(B.a)(e,2),t=n[0],r=n[1];return Object(p.useEffect)((function(){setTimeout(function(){var e=Object(Q.a)(H.a.mark((function e(){var n,t,o,c;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X.a.get("https://api.exchangerate.host/latest?base=PLN");case 3:n=e.sent,t=n.data,o=t.date,c=t.rates,r({date:o,rates:c,status:"ready"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),r({status:"error"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),3e3)}),[]),t}(),x=j.status;return Object(C.jsx)(P,{onSubmit:function(e){e.preventDefault();var n=t.trim();n&&(r([]),function(){var e=j.rates[i];console.log(e),d({sourceAmount:+t,targetAmount:t*e,currency:i})}(),b.current.focus())},children:Object(C.jsx)(A,{children:"loading"===x?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(N,{}),Object(C.jsx)(q,{text:"\u0141aduj\u0119 kursy walut z Europejskiego Banku Centralnego"})]}):"error"===x?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(I,{}),Object(C.jsx)(q,{text:"Ups.. mamy problem. Sprawd\u017a po\u0142\u0105czenie z internetem lub wr\xf3\u0107 za chwil\u0119."})]}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(W,{}),Object(C.jsx)(q,{text:"Wpisz kwot\u0119 w PLN"}),Object(C.jsx)(L,{ref:b,type:"number",min:"0.01",step:"0.01",placeholder:"0,00",required:!0,value:t,onChange:function(e){var n=e.target;return r(n.value)}}),Object(C.jsx)(q,{text:"Przelicz na"}),Object(C.jsx)(L,{as:"select",onChange:function(e){var n=e.target;return a(n.value)},required:!0,value:i,children:Object.keys(j.rates).map((function(e){return Object(C.jsx)("option",{value:e,children:e},e)}))}),Object(C.jsx)(Y,{buttonName:"Policz kurs"}),Object(C.jsx)(U,{result:l,date:j.date})]})})})},$=y.d.footer(m||(m=Object(k.a)(["\n    text-align: center;\n    font-size: smaller;\n    font-weight: 300;\n    color: ",";\n    font-weight: 700;\n    padding: 15px;\n    text-align: center;\n"])),(function(e){return e.theme.colors.woodsmoke})),_=y.d.main(g||(g=Object(k.a)(["\n    max-width: 450px;\n    margin: 15px auto;\n    box-shadow: ",';\n    font-family: "Lato", sans-serif;\n    min-width: 280px;\n    background-color: ',";\n"])),(function(e){return e.theme.shadow}),(function(e){return e.theme.colors.selectiveYellow}));var ee=function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(_,{children:[Object(C.jsx)(S,{title:"Kalkulator walut"}),Object(C.jsx)(Z,{}),Object(C.jsx)($,{children:"Coded by Trishya \xa9 2021"})]})})},ne=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,51)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),r(e),o(e),c(e),i(e)}))};v.a.render(Object(C.jsx)(O.a.StrictMode,{children:Object(C.jsxs)(y.a,{theme:{colors:{selectiveYellow:"#FFBB00",woodsmoke:"#1A191A",white:"#FFFFFF",alto:"#DCDCDA",robinsEggBlue:"#00C5B5",crimson:"#EC1336"},breakpoints:{xsmall:576,small:768,medium:992,large:1200},shadow:"5px 5px 20px #303030"},children:[Object(C.jsx)(z,{}),Object(C.jsx)(ee,{})]})}),document.getElementById("root")),ne()}},[[50,1,2]]]);
//# sourceMappingURL=main.ea6943cc.chunk.js.map