(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),i=n.n(c),o=n(9),a=n.n(o),u=(n(18),n(3)),s=(n(19),n(12)),d=n(6),l=function(e,t){switch(t){case"desc":return e.sort((function(e,t){return t.amount-e.amount}));case"alph":return e.sort((function(e,t){return t.name>e.name?-1:1}));default:return e}},j="/names",b={listStyle:"none",padding:0},h={padding:"1em",marginBottom:".5em",background:"#eee",display:"flex",justifyContent:"space-between",alignItems:"center",color:"#333",borderRadius:".1em"},m={backgroundColor:"rebeccapurple",color:"#fff",fontWeight:"bold",fontSize:"80%",borderRadius:"10em",minWidth:"1.5em",padding:".25em",textAlign:"center"},p=function(){var e=Object(d.b)(j,[]),t=e.loading,n=e.error,i=e.data,o=Object(c.useState)("desc"),a=Object(u.a)(o,2),p=a[0],f=a[1];return n?(console.log(n),Object(r.jsx)("p",{children:"An error occured while loading data from the server."})):t?Object(r.jsx)("p",{children:"loading..."}):Object(r.jsxs)("div",{children:[Object(r.jsxs)("p",{children:["Total count: ",i.count]}),Object(r.jsx)("span",{children:"Order by: "}),Object(r.jsx)("button",{onClick:function(){return f("desc")},children:"Amount"}),Object(r.jsx)("button",{onClick:function(){return f("alph")},children:"Alphabetic"}),Object(r.jsx)("ul",{style:b,children:l(Object(s.a)(i.names),p).map((function(e){return Object(r.jsxs)("li",{style:h,children:[e.name,Object(r.jsx)("span",{style:m,children:e.amount})]},e.name)}))})]})},f=n(8),O=n.n(f),g=n(11),x={backgroundColor:"rebeccapurple",color:"#fff",fontWeight:"bold",borderRadius:"10em",minWidth:"1.5em",padding:".25em",textAlign:"center"},v={textAlign:"center",marginTop:"2em"},y=function(){var e=Object(d.b)(j),t=e.get,n=e.loading,i=e.error,o=Object(c.useState)(),a=Object(u.a)(o,2),s=a[0],l=a[1],b=Object(c.useState)(""),h=Object(u.a)(b,2),m=h[0],p=h[1];if(i)return Object(r.jsx)("p",{children:"An error occured while loading data from the server."});if(n)return Object(r.jsx)("p",{children:"loading..."});var f=function(){var e=Object(g.a)(O.a.mark((function e(n){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,t("/"+m);case 3:return r=e.sent,l(r),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{children:[Object(r.jsxs)("form",{onSubmit:function(e){return f(e)},children:[Object(r.jsx)("p",{children:"Find name:"}),Object(r.jsx)("input",{value:m,onChange:function(e){return p(e.target.value)}}),Object(r.jsx)("input",{type:"submit"})]}),s&&Object(r.jsxs)("div",{children:[Object(r.jsxs)("h3",{style:v,children:["number of ",null===s||void 0===s?void 0:s.name,"s"]}),Object(r.jsx)("div",{style:x,children:Object(r.jsx)("p",{children:null===s||void 0===s?void 0:s.amount})})]})]})},k={margin:"auto",maxWidth:"500px",padding:"1em",background:"grey",backgroundImage:'url("https://image.freepik.com/free-vector/geometric-grey-background_1055-3147.jpg")'},C=function(){var e=Object(c.useState)(!0),t=Object(u.a)(e,2),n=t[0],i=t[1];return Object(r.jsxs)("div",{style:k,children:[Object(r.jsx)("h1",{children:"dev-academy-2021 exercise - Name Application"}),Object(r.jsx)("button",{onClick:function(){return i(!0)},children:"Show All"}),Object(r.jsx)("button",{onClick:function(){return i(!1)},children:"Search by Name"}),Object(r.jsx)("hr",{}),n?Object(r.jsx)(p,{}):Object(r.jsx)(y,{})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),i(e),o(e)}))};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(C,{})}),document.getElementById("root")),S()}},[[21,1,2]]]);
//# sourceMappingURL=main.e1f32104.chunk.js.map