(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),a=n.n(c),i=n(2),s=n(10),u=n(8),o=n.n(u),j=n(0),d=function(e){var t=e.setCategories,n=Object(r.useState)(""),c=Object(i.a)(n,2),a=c[0],u=c[1];return Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),a.trim().length>2&&(t((function(e){return[a].concat(Object(s.a)(e))})),u(""))},children:Object(j.jsx)("input",{type:"text",value:a,onChange:function(e){console.log(e.target.value),u(e.target.value)}})})};d.propType={setCategories:o.a.func.isRequired};var l=n(11),p=n(6),b=n.n(p),f=n(9),O=function(){var e=Object(f.a)(b.a.mark((function e(t){var n,r,c,a,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=y35gA6fc4qVWIvlkQZHDiWYVD8DmnFgG"),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,a=c.data,i=a.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){e.id;var t=e.title,n=e.url;return Object(j.jsxs)("div",{className:"card animate__animated animate__bounce",children:[Object(j.jsx)("img",{src:n,alt:t}),Object(j.jsx)("p",{children:t})]})},g=function(e){var t=e.category,n=function(e){var t=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){O(e).then((function(e){a({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,a=n.loading;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{children:t}),Object(j.jsx)("h3",{children:a?"Cargando...":""}),Object(j.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(j.jsx)(h,Object(l.a)({},e),e.id)}))})]})},x=function(e){var t=Object(r.useState)(["One Punch"]),n=Object(i.a)(t,2),c=n[0],a=n[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"GifExpertApp"}),Object(j.jsx)(d,{setCategories:a}),Object(j.jsx)("hr",{}),Object(j.jsx)("ol",{children:c.map((function(e){return Object(j.jsx)(g,{category:e},e)}))})]})};n(20);a.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.93f5cb31.chunk.js.map