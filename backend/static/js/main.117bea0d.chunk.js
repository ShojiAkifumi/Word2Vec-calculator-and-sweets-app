(this["webpackJsonpfast-calculator-app"]=this["webpackJsonpfast-calculator-app"]||[]).push([[0],{51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var s=n(2),c=n(19),a=n.n(c),i=n(3),r=n(0),l=function(e){e.mode;var t=e.setMode,n=function(e){t(e)};return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("div",{onClick:function(){return n("lang")},children:"\u81ea\u7136\u8a00\u8a9e\u8a08\u7b97"}),Object(r.jsx)("div",{onClick:function(){return n("sweet")},children:"\u304a\u83d3\u5b50\u691c\u7d22"})]})},u=function(e){var t=e.title;return Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:t})})},j=function(e){var t=e.handleSubmit;return Object(r.jsx)("button",{className:"equal-btn",value:"=",name:"=",onClick:t,children:"="})},o=function(e){var t=e.sentense,n=e.setSentense,s=e.setNextIsText,c=e.inputEl;return Object(r.jsx)("div",{className:"text-field",children:Object(r.jsx)("input",{type:"text",value:t,onChange:function(e){n(e.target.value),s(!1)},ref:c})})},d=function(e){var t=e.children,n=e.setSentense,s=e.nextIsText,c=e.setNextIsText,a=e.inputEl;return Object(r.jsx)("button",{onClick:function(){s||(n((function(e){return"".concat(e," ").concat(t," ")})),c(!0),a.current.focus())},children:t})},b=function(e){var t=e.sentense,n=e.setSentense,c=(e.setResults,e.handleSubmit),a=Object(s.useState)(!0),l=Object(i.a)(a,2),u=l[0],b=l[1],x=Object(s.useRef)(null);return Object(r.jsxs)("div",{className:"form-container",children:[Object(r.jsxs)("div",{className:"input-form",children:[Object(r.jsx)(o,{sentense:t,setSentense:n,setNextIsText:b,inputEl:x}),Object(r.jsx)(j,{handleSubmit:c})]}),Object(r.jsxs)("div",{className:"ope-btns",children:[Object(r.jsx)("button",{onClick:function(){n(""),b(!0)},children:"AC"}),Object(r.jsx)(d,{nextIsText:u,setNextIsText:b,setSentense:n,inputEl:x,children:"+"}),Object(r.jsx)(d,{nextIsText:u,setNextIsText:b,setSentense:n,inputEl:x,children:"-"})]})]})},x=n(21),O=function(e){var t=e.loading,n=e.results,s=[];for(var c in n)s=[].concat(Object(x.a)(s),[n[c]]);return Object(r.jsx)("div",{className:"results-container",children:t?Object(r.jsx)(h,{}):Object(r.jsx)("div",{children:s.map((function(e,t){return Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{children:e.value}),": ",e.score]},t)}))})})},h=function(){return Object(r.jsx)("div",{className:"loading"})},f=function(e){var t=e.loading,n=e.handleSubmit,s=e.sentense,c=e.setSentense,a=e.results,i=e.setResults,j=e.mode,o=e.setMode;return Object(r.jsx)("div",{className:"top-page-container",children:Object(r.jsxs)("div",{children:[Object(r.jsx)(l,{mode:j,setMode:o}),Object(r.jsx)(u,{title:"lang"===j?"Language Calculator":"Sweets search"}),Object(r.jsx)(b,{sentense:s,setSentense:c,setResults:i,handleSubmit:n}),Object(r.jsx)(O,{loading:t,results:a})]})})},v=n(20),m=n.n(v);n(51);var p=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(""),l=Object(i.a)(a,2),u=l[0],j=l[1],o=Object(s.useState)({}),d=Object(i.a)(o,2),b=d[0],x=d[1],O=Object(s.useState)("lang"),h=Object(i.a)(O,2),v=h[0],p=h[1];return Object(r.jsx)(f,{loading:n,handleSubmit:function(){if(c(!0),v){var e=new FormData;e.append("sentense",u+" ="),m.a.post("/data",e).then((function(e){x(e.data),console.log(e),c(!1)})).catch((function(e){alert("\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002\u30da\u30fc\u30b8\u3092\u30ea\u30ed\u30fc\u30c9\u3057\u3066\u3001\u3082\u3046\u4e00\u5ea6\u30c8\u30e9\u30a4\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),c(!1)}))}},sentense:u,setSentense:j,results:b,setResults:x,mode:v,setMode:p})};a.a.render(Object(r.jsx)(p,{}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.117bea0d.chunk.js.map