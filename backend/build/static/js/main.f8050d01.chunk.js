(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{62:function(e,t,n){"use strict";n.r(t);var r,c,i,a,o,u,s,l=n(0),d=n(20),j=n.n(d),b=n(4),f=n(11),h=n(2),O=n(1),p=function(){var e=Object(b.c)((function(e){return e.blogs}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"blogs"}),Object(O.jsx)("div",{id:"blogs",children:e.map((function(e){return Object(O.jsx)("div",{children:Object(O.jsxs)(f.b,{to:"/blogs/".concat(e.id),children:[e.title," by ",e.author]})},e.id)}))})]})},x=n(10),g=n(7),v=n(3),m=n.n(v),y=n(12),w=n(13),k=n.n(w),S=null,C="loggedBlogAppUser",z=function(e){window.localStorage.setItem(C,JSON.stringify(e)),S=e.token},W=function(){var e=window.localStorage.getItem(C);if(e){var t=JSON.parse(e);return S=t.token,t}return null},U=function(){localStorage.clear(),S=null},B=function(){return S},N="/api/blogs",R=function(){return{headers:{Authorization:"bearer ".concat(B())}}},A=function(){var e=Object(g.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post(N,t,R());case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I={getAll:function(){return k.a.get(N).then((function(e){return e.data}))},create:A,update:function(e,t){return k.a.put("".concat(N,"/").concat(e),t).then((function(e){return e.data}))},remove:function(e){return k.a.delete("".concat(N,"/").concat(e),R())}},J=Object(y.b)({name:"notification",initialState:null,reducers:{notifyWith:function(e,t){return t.payload}}}),L=function(e){return function(){var t=Object(g.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(E(e)),setTimeout((function(){n(E(null))}),5e3);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=J.actions.notifyWith,q=J.reducer,D=function(e,t){return t.likes>e.likes?1:-1},T=Object(y.b)({name:"blog",initialState:[],reducers:{initializeWith:function(e,t){return t.payload.sort(D)},addNew:function(e,t){var n=t.payload;return e.concat(n).sort(D)},removeOne:function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n})).sort(D)},update:function(e,t){var n=t.payload;return e.map((function(e){return e.id===n.id?n:e})).sort(D)}}}),V=function(e,t){return function(){var n=Object(g.a)(m.a.mark((function n(r){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:I.update(e.id,e).then((function(n){r(M(n)),r(L({message:"you ".concat(t," '").concat(e.title,"' by ").concat(e.author),type:"info"}))}));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},F=T.actions,H=F.initializeWith,G=F.addNew,K=F.removeOne,M=F.update,P=T.reducer,Q=n(8),X=function(e){var t=Object(l.useState)(""),n=Object(Q.a)(t,2),r=n[0],c=n[1];return{reset:function(){c("")},fields:{type:e,value:r,onChange:function(e){c(e.target.value)}}}},Y=n(14),Z=n(15),$=Z.a.button(r||(r=Object(Y.a)(["\n  background: Bisque;\n  font-size: 1em;\n  margin-top: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid Chocolate;\n  border-radius: 3px;\n"]))),_=Z.a.button(c||(c=Object(Y.a)(["\n  background: Bisque;\n  font-size: 1em;\n  border: 1px solid Chocolate;\n  border-radius: 3px;\n"]))),ee=Z.a.input(i||(i=Object(Y.a)(["\n  margin: 0.25em;\n"]))),te=Z.a.div(a||(a=Object(Y.a)(["\n  padding: 1em;\n  background: papayawhip;\n"]))),ne=Z.a.div(o||(o=Object(Y.a)(["\n  background: BurlyWood;\n  padding: 1em;\n"]))),re=Z.a.div(u||(u=Object(Y.a)(["\n  background: Chocolate;\n  padding: 1em;\n  margin-top: 2em;\n"]))),ce=Z.a.div(s||(s=Object(Y.a)(["\n  color: ",";\n  background: white;\n  font-size: 20px;\n  border-style: solid;\n  border-radius: 5px;\n  padding: 10px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n"])),(function(e){return e.alert?"red":"green"})),ie=function(){var e=Object(h.g)().id,t=Object(b.c)((function(t){return t.blogs.find((function(t){return t.id===e}))})),n=Object(b.b)(),r=Object(h.f)(),c=X("text"),i=Object(b.c)((function(e){return e.user}));if(!t)return null;var a=i&&t.user&&i.username===t.user.username,o=t.user&&t.user.name?t.user.name:"anonymous",u=function(){var e=Object(g.a)(m.a.mark((function e(){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=Object(x.a)(Object(x.a)({},t),{},{likes:(t.likes||0)+1,user:t.user.id}),n(V(r,"liked"));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h2",{children:[t.title," ",t.author]}),Object(O.jsx)("div",{children:Object(O.jsx)("a",{href:t.url,children:t.url})}),Object(O.jsxs)("div",{children:[t.likes," likes ",Object(O.jsx)($,{onClick:u,children:"like"})]}),Object(O.jsxs)("div",{children:["added by ",o]}),a&&Object(O.jsx)($,{onClick:function(){window.confirm("remove '".concat(t.title,"' by ").concat(t.author,"?"))&&(n(function(e){return function(){var t=Object(g.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:I.remove(e).then((function(){n(K(e))}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t.id)),r("/"))},children:"remove"}),Object(O.jsx)("h3",{children:"comments"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("input",Object(x.a)({},c.fields))," ",Object(O.jsx)($,{onClick:function(){console.log(c.fields.value);var e=Object(x.a)(Object(x.a)({},t),{},{comments:t.comments.concat(c.fields.value),user:t.user.id});n(V(e,"commented")),c.reset()},children:" add comment"})]}),Object(O.jsx)("ul",{children:t.comments.map((function(e,t){return Object(O.jsx)("li",{children:e},t)}))})]})},ae=function(){var e=Object(g.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe={login:ae},ue=Object(y.b)({name:"user",initialState:null,reducers:{loginUser:function(e,t){return t.payload},logoutUser:function(e,t){t.payload;return null}}}),se=ue.actions,le=se.loginUser,de=se.logoutUser,je=ue.reducer,be=function(){var e=X("text"),t=X("password"),n=Object(b.b)(),r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info";n(L({message:e,type:t}))};return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Log in to application"}),Object(O.jsxs)("form",{onSubmit:function(c){c.preventDefault(),oe.login({username:e.fields.value,password:t.fields.value}).then((function(e){z(e),n(le(e)),r("".concat(e.name," logged in!"))})).catch((function(){r("wrong username/password","alert")}))},children:[Object(O.jsxs)("div",{children:["username",Object(O.jsx)(ee,Object(x.a)({},e.fields))]}),Object(O.jsxs)("div",{children:["password",Object(O.jsx)(ee,Object(x.a)({},t.fields))]}),Object(O.jsx)($,{id:"login-button",type:"submit",children:"login"})]})]})},fe=function(e){var t=e.togglableRef,n=Object(l.useState)(""),r=Object(Q.a)(n,2),c=r[0],i=r[1],a=Object(l.useState)(""),o=Object(Q.a)(a,2),u=o[0],s=o[1],d=Object(l.useState)(""),j=Object(Q.a)(d,2),f=j[0],h=j[1],p=Object(b.b)();return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Create new"}),Object(O.jsxs)("form",{onSubmit:function(e){var n;e.preventDefault(),t.current.toggleVisibility(),p((n={title:c,author:u,url:f,likes:0},function(){var e=Object(g.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:I.create(n).then((function(e){t(G(e)),t(L({message:"a new blog '".concat(n.title,"' by ").concat(n.author," added"),type:"info"}))})).catch((function(e){t(L({message:"creating a blog failed: "+e.response.data.error,type:"alert"}))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),s(""),i(""),h("")},children:[Object(O.jsxs)("div",{children:["title",Object(O.jsx)("input",{value:c,onChange:function(e){var t=e.target;return i(t.value)},id:"title",placeholder:"title of the blog"})]}),Object(O.jsxs)("div",{children:["author",Object(O.jsx)("input",{value:u,onChange:function(e){var t=e.target;return s(t.value)},id:"author",placeholder:"author of the blog"})]}),Object(O.jsxs)("div",{children:["url",Object(O.jsx)("input",{value:f,onChange:function(e){var t=e.target;return h(t.value)},id:"url",placeholder:"url of the blog"})]}),Object(O.jsx)("button",{id:"create-butto",type:"submit",children:"create"})]})]})},he=function(){var e=Object(b.c)((function(e){return e.notification}));return null===e?null:Object(O.jsx)(ce,{alert:"alert"===e.type,children:e.message})},Oe=Object(l.forwardRef)((function(e,t){var n=Object(l.useState)(!1),r=Object(Q.a)(n,2),c=r[0],i=r[1],a={display:c?"none":""},o={display:c?"":"none"},u=function(){i(!c)};return Object(l.useImperativeHandle)(t,(function(){return{toggleVisibility:u}})),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{style:a,children:Object(O.jsx)($,{onClick:u,children:e.buttonLabel})}),Object(O.jsxs)("div",{style:o,children:[e.children,Object(O.jsx)($,{onClick:u,children:"cancel"})]})]})}));Oe.displayName="Togglable";var pe=Oe,xe=function(){var e=Object(b.c)((function(e){return e.users}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Users"}),Object(O.jsx)("table",{children:Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{}),Object(O.jsx)("td",{children:Object(O.jsx)("strong",{children:"blogs created"})})]}),e.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)(f.b,{to:"/users/".concat(e.id),children:e.name})}),Object(O.jsx)("td",{children:e.blogs.length})]},e.username)}))]})})]})},ge=function(){var e=Object(h.g)().id,t=Object(b.c)((function(t){return t.users.find((function(t){return t.id===e}))}));return t?Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:t.name}),Object(O.jsx)("h3",{children:"added blogs"}),Object(O.jsx)("ul",{children:t.blogs.map((function(e){return Object(O.jsx)("li",{children:e.title},e.id)}))})]}):null},ve=function(){return k.a.get("/api/users").then((function(e){return e.data}))},me=Object(y.b)({name:"users",initialState:[],reducers:{initializeWith:function(e,t){return t.payload}}}),ye=me.actions.initializeWith,we=me.reducer,ke=function(){var e=Object(l.useRef)(),t=Object(b.b)(),n=Object(b.c)((function(e){return e.user}));Object(l.useEffect)((function(){t(function(){var e=Object(g.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:I.getAll().then((function(e){t(H(e))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t(function(){var e=Object(g.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ve().then((function(e){t(ye(e))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(l.useEffect)((function(){var e=W();e&&t(le(e))}),[]);if(null===n)return Object(O.jsxs)(te,{children:[Object(O.jsx)(he,{}),Object(O.jsx)(be,{})]});var r={padding:5};return Object(O.jsxs)(te,{children:[Object(O.jsxs)(ne,{children:[Object(O.jsx)(f.b,{style:r,to:"/",children:"blogs"}),Object(O.jsx)(f.b,{style:r,to:"/users",children:"users"}),Object(O.jsxs)("span",{style:{paddingLeft:5,paddingRight:5},children:[n.name," logged in"]}),Object(O.jsx)(_,{onClick:function(){U(),t(de()),t(L({message:"good bye!",type:"info"}))},children:"logout"})]}),Object(O.jsx)(he,{}),Object(O.jsx)(pe,{buttonLabel:"create new blog",ref:e,children:Object(O.jsx)(fe,{togglableRef:e})}),Object(O.jsx)(h.c,{children:Object(O.jsx)(h.a,{path:"/",element:Object(O.jsx)(p,{})})}),Object(O.jsx)(h.c,{children:Object(O.jsx)(h.a,{path:"/blogs/:id",element:Object(O.jsx)(ie,{})})}),Object(O.jsx)(h.c,{children:Object(O.jsx)(h.a,{path:"/users",element:Object(O.jsx)(xe,{})})}),Object(O.jsx)(h.c,{children:Object(O.jsx)(h.a,{path:"/users/:id",element:Object(O.jsx)(ge,{})})}),Object(O.jsx)(re,{children:"Full stack open"})]})},Se=Object(y.a)({reducer:{notification:q,blogs:P,user:je,users:we}});j.a.render(Object(O.jsx)(b.a,{store:Se,children:Object(O.jsx)(f.a,{children:Object(O.jsx)(ke,{})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.f8050d01.chunk.js.map