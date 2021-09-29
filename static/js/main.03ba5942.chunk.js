(this["webpackJsonphomework-react.js-8"]=this["webpackJsonphomework-react.js-8"]||[]).push([[0],{17:function(t,e,n){t.exports={form:"registation_form__1fctq",input:"registation_input__3e1SE",label:"registation_label__1rZ0M",button:"registation_button__20AOC",Preloader:"registation_Preloader__lwk94"}},22:function(t,e,n){t.exports={form:"login_form__3jh1R",input:"login_input__2ZLra",label:"login_label__3u1Qf",button:"login_button__3boX8",Preloader:"login_Preloader__BoI12"}},24:function(t,e,n){t.exports={list:"ContactList_list__23uem",listItem:"ContactList_listItem__24E3u",button:"ContactList_button__nNssT",name:"ContactList_name__30i4D",number:"ContactList_number__3w4CT"}},25:function(t,e,n){t.exports={BoxLoginRegistration:"header_BoxLoginRegistration__1pcyK",LoginRegistration:"header_LoginRegistration__3UoEe",active:"header_active__3FV1i"}},34:function(t,e,n){t.exports={box:"App_box__2LQzJ",title:"App_title__k_TtO"}},35:function(t,e,n){t.exports={transparent:"AddContact_transparent__K2yME",formInner:"AddContact_formInner__1zOQL",button:"AddContact_button__3-Xom"}},36:function(t,e,n){t.exports={boxUser:"hasEntered_boxUser__3tSlT",name:"hasEntered_name__l71Tr",button:"hasEntered_button__3x85q"}},43:function(t,e,n){},53:function(t,e,n){t.exports={lable:"Filter_lable___H-U_"}},54:function(t,e,n){t.exports={Preloader:"Preloader_Preloader__2YMqs"}},62:function(t,e,n){},89:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),c=n(28),o=n.n(c),s=(n(62),n(43),n(34)),u=n.n(s),i=n(90),b=n(16),l=n(35),j=n.n(l),O=n(5),d=n(9),f=n.n(d),p=n(18),m=n(14),h=n.n(m),x=n(3),v=Object(x.b)("fetchContactRequest"),g=Object(x.b)("fetchContactSuccess"),_=Object(x.b)("fetchContactError"),C=Object(x.b)("addContactRequest"),R=Object(x.b)("addContactSuccess"),y=Object(x.b)("addContactError"),k=Object(x.b)("deleteContactRequest"),w=Object(x.b)("deleteContactSuccess"),N=Object(x.b)("deleteContactError"),z=(Object(x.b)("filterContactRequest"),Object(x.b)("filterContactSuccess"),Object(x.b)("filterContactError"),Object(x.b)("filterContact")),E=(n(39),n(8)),L=(n(40),n(30)),S=function(t){return t.contact},T=function(t){return t.contact.filter},A=Object(L.a)([function(t){return t.contact.items},T],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e)}))})),q=n(0),P=function(t){var e=t.contacts,n=t.stateTransfer,a=t.uuidv4,c=Object(r.useState)(""),o=Object(b.a)(c,2),s=o[0],u=o[1],i=Object(r.useState)(""),l=Object(b.a)(i,2),O=l[0],d=l[1],f=function(t){var e=t.currentTarget,n=e.value;switch(e.name){case"name":u(n);break;case"number":d(n);break;default:console.log("error")}};return Object(q.jsx)("form",{onSubmit:function(t){t.preventDefault(),e.items.find((function(t){return t.name===s}))?Object(E.notice)({text:"".concat(s," is alreaady in contacts")}):(n({number:O,name:s}),u(""),d(""))},htmlFor:a(),className:j.a.transparent,children:Object(q.jsxs)("div",{className:j.a.formInner,children:[Object(q.jsxs)("label",{children:["Name",Object(q.jsx)("input",{onChange:f,type:"text",value:s,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(q.jsxs)("label",{children:["Number",Object(q.jsx)("input",{onChange:f,type:"tel",value:O,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(q.jsx)("button",{className:j.a.button,type:"submit",children:"Add contact"})]})})};P.defaultProps={contacts:[]};var F=Object(O.b)((function(t){return{contacts:S(t)}}),(function(t){return{stateTransfer:function(e){return t(function(t){var e=t.name,n=t.number;return function(){var t=Object(p.a)(f.a.mark((function t(r){var a,c,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={name:e,number:n,id:Object(i.a)()},r(C()),t.prev=2,t.next=5,h.a.post("/contacts",a);case 5:c=t.sent,o=c.data,r(R(o)),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),400===t.t0.response.status&&Object(E.error)({text:"ERROR, Contact creation error"}),r(y(t.t0.message));case 14:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()}(e))}}}))(P),B=n(53),I=n.n(B),U=Object(O.b)((function(t){return{filter:T(t)}}),(function(t){return{filterContact:function(e){return t(z(e.target.value))}}}))((function(t){var e=t.filterContact,n=t.filter;return Object(q.jsx)("input",{className:I.a.lable,type:"text",onChange:e,value:n})})),Z=n(24),M=n.n(Z),D=Object(O.b)((function(t){return{filterTodos:A(t)}}),(function(t){return{deleteTodo:function(e){return t(function(t){return function(){var e=Object(p.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(k()),e.prev=1,e.next=4,h.a.delete("/contacts/".concat(t));case 4:n(w(t)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),404===e.t0.response.status?Object(E.error)({text:"ERROR, there is no such owner's collection"}):500===e.t0.response.status&&Object(E.error)({text:"ERROR server"}),n(N(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}(e))},fetchContacts:function(){return t(function(){var t=Object(p.a)(f.a.mark((function t(e){var n,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(v()),t.prev=1,t.next=4,h.a.get("/contacts");case 4:n=t.sent,r=n.data,e(g(r)),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),404===t.t0.response.status?Object(E.error)({text:"ERROR, there is no such owner's collection"}):500===t.t0.response.status&&Object(E.error)({text:"ERROR server"}),e(_(t.t0.message));case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}())}}}))((function(t){var e=t.fetchContacts,n=t.filterTodos,a=t.deleteTodo,c=t.uuidv4;return Object(r.useEffect)((function(){return e()}),[e]),Object(q.jsx)(q.Fragment,{children:Object(q.jsx)("ul",{className:M.a.list,children:n.map((function(t){var e=t.name,n=t.number,r=t.id;return Object(q.jsxs)("li",{className:M.a.listItem,children:[Object(q.jsx)("p",{className:M.a.name,children:e}),Object(q.jsx)("span",{className:M.a.number,children:n}),Object(q.jsx)("button",{className:M.a.button,type:"button",onClick:function(){return a(r)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},c())}))})})})),J=function(){return Object(q.jsxs)("div",{className:u.a.box,children:[Object(q.jsx)("h1",{className:u.a.title,children:"Phonebook"}),Object(q.jsx)(F,{uuidv4:i.a}),Object(q.jsx)("h2",{className:u.a.title,children:"Contacts"}),Object(q.jsx)(U,{uuidv4:i.a}),Object(q.jsx)(D,{uuidv4:i.a})]})},Q=Object(x.b)("/authorization/registerReauest"),G=Object(x.b)("/authorization/registerSuccsess"),K=Object(x.b)("/authorization/registerError"),X=Object(x.b)("/authorization/loginReauest"),$=Object(x.b)("/authorization/loginSuccsess"),H=Object(x.b)("/authorization/loginError"),V=Object(x.b)("/authorization/logoutReauest"),Y=Object(x.b)("/authorization/logoutSuccsess"),W=Object(x.b)("/authorization/logoutError"),tt=Object(x.b)("/authorization/getContactsReauest"),et=Object(x.b)("/authorization/getContactsSuccsess"),nt=Object(x.b)("/authorization/getContactsError");h.a.defaults.baseURL="https://connections-api.herokuapp.com";var rt,at,ct,ot,st,ut,it,bt=function(t){h.a.defaults.headers.common.Authorization="Bearer ".concat(t)},lt=function(){h.a.defaults.headers.common.Authorization=""},jt=n(17),Ot=n.n(jt),dt={onRegister:function(t){return function(){var e=Object(p.a)(f.a.mark((function e(n){var r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Q()),e.prev=1,e.next=4,h.a.post("/users/signup",t);case 4:r=e.sent,a=r.data,bt(a.token),n(G(a)),Object(E.success)({text:"Created!"}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),400===e.t0.response.status?Object(E.error)({text:"ERROR, user creation error"}):500===e.t0.response.status&&Object(E.error)({text:"ERROR server"}),n(K(e.t0.payload));case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()}},ft=Object(O.b)(null,dt)((function(t){var e=t.onRegister,n=Object(r.useState)(""),a=Object(b.a)(n,2),c=a[0],o=a[1],s=Object(r.useState)(""),u=Object(b.a)(s,2),i=u[0],l=u[1],j=Object(r.useState)(""),O=Object(b.a)(j,2),d=O[0],f=O[1],p=function(t){var e=t.currentTarget,n=e.value;switch(e.name){case"name":o(n);break;case"email":l(n);break;case"password":f(n);break;default:console.log("error")}};return Object(q.jsx)("div",{className:Ot.a.boxForm,children:Object(q.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({name:c,email:i,password:d})},className:Ot.a.form,children:[Object(q.jsxs)("label",{className:Ot.a.label,children:["Name",Object(q.jsx)("input",{className:Ot.a.input,type:"name",name:"name",onChange:p,value:c,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(q.jsxs)("label",{className:Ot.a.label,children:["Email",Object(q.jsx)("input",{className:Ot.a.input,type:"email",name:"email",value:i,onChange:p,title:"Enter your email"})]}),Object(q.jsxs)("label",{className:Ot.a.label,children:["Password",Object(q.jsx)("input",{className:Ot.a.input,type:"password",name:"password",value:d,onChange:p,title:"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u0431\u0443\u043a\u0432",required:!0})]}),Object(q.jsx)("button",{type:"submit",className:Ot.a.button,children:"Register"})]})})})),pt=n(22),mt=n.n(pt),ht={onLogin:function(t){return function(){var e=Object(p.a)(f.a.mark((function e(n){var r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(X()),e.prev=1,e.next=4,h.a.post("/users/login",t);case 4:r=e.sent,a=r.data,bt(a.token),n($(a)),Object(E.success)({text:"Success!"}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),Object(E.error)({text:"ERROR, wrong login or password"}),n(H(e.t0.payload));case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()}},xt=Object(O.b)(null,ht)((function(t){var e=t.onLogin,n=Object(r.useState)(""),a=Object(b.a)(n,2),c=a[0],o=a[1],s=Object(r.useState)(""),u=Object(b.a)(s,2),i=u[0],l=u[1],j=function(t){var e=t.currentTarget,n=e.value;switch(e.name){case"email":o(n);break;case"password":l(n);break;default:console.log("error")}};return Object(q.jsx)("div",{className:mt.a.boxForm,children:Object(q.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({email:c,password:i})},className:mt.a.form,children:[Object(q.jsxs)("label",{className:mt.a.label,children:["Email",Object(q.jsx)("input",{className:mt.a.input,type:"email",name:"email",value:c,title:"Enter your email",onChange:j,required:!0})]}),Object(q.jsxs)("label",{className:mt.a.label,children:["Password",Object(q.jsx)("input",{className:mt.a.input,type:"password",name:"password",value:i,onChange:j,title:"Enter your password",required:!0})]}),Object(q.jsx)("button",{type:"submit",className:mt.a.button,children:"Sing in"})]})})})),vt=n(21),gt=n(33),_t=n(6),Ct=function(t){return t.authorization.authorization},Rt=function(t){return t.authorization.user.name},yt=function(t){return t.contact.loading},kt=["component","authorized"],wt=Object(O.b)((function(t){return{authorized:Ct(t)}}))((function(t){var e=t.component,n=t.authorized,r=Object(gt.a)(t,kt);return Object(q.jsx)(_t.b,Object(vt.a)(Object(vt.a)({},r),{},{render:function(t){return n?Object(q.jsx)(e,Object(vt.a)({},t)):Object(q.jsx)(_t.a,{to:"/Login"})}}))})),Nt=["component","authorized","redirectTo"],zt=Object(O.b)((function(t){return{authorized:Ct(t)}}))((function(t){var e=t.component,n=t.authorized,r=t.redirectTo,a=Object(gt.a)(t,Nt);return Object(q.jsx)(_t.b,Object(vt.a)(Object(vt.a)({},a),{},{render:function(t){return n&&a.restricted?Object(q.jsx)(_t.a,{to:r}):Object(q.jsx)(e,Object(vt.a)({},t))}}))})),Et=n(36),Lt=n.n(Et),St={logOut:function(){return function(){var t=Object(p.a)(f.a.mark((function t(e){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(V()),t.prev=1,t.next=4,h.a.post("/users/logout");case 4:lt(),e(Y()),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),Object(E.error)({text:"ERROR, failed to exit"}),e(W(t.t0.payload));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}},Tt=Object(O.b)((function(t){return{name:Rt(t)}}),St)((function(t){var e=t.name,n=t.logOut;return Object(q.jsxs)("div",{className:Lt.a.boxUser,children:[Object(q.jsx)("h3",{className:Lt.a.name,children:e}),Object(q.jsx)("button",{type:"button",onClick:n,className:Lt.a.button,children:"logout"})]})})),At=n(20),qt=n(25),Pt=n.n(qt),Ft=Object(O.b)((function(t){return{authorized:Ct(t)}}))((function(t){var e=t.authorized;return Object(q.jsx)(q.Fragment,{children:e?Object(q.jsx)(Tt,{}):Object(q.jsxs)("ul",{className:Pt.a.BoxLoginRegistration,children:[Object(q.jsx)("li",{children:Object(q.jsx)(At.b,{to:"/Registration",activeClassName:Pt.a.active,className:Pt.a.LoginRegistration,children:"Registration"})}),Object(q.jsx)("li",{children:Object(q.jsx)(At.b,{to:"/Login",activeClassName:Pt.a.active,className:Pt.a.LoginRegistration,children:"sing in"})})]})})})),Bt=n(54),It=n.n(Bt),Ut=function(){return Object(q.jsxs)("div",{className:It.a.Preloader,children:[Object(q.jsx)("div",{}),Object(q.jsx)("div",{}),Object(q.jsx)("div",{}),Object(q.jsx)("div",{}),Object(q.jsx)("div",{}),Object(q.jsx)("div",{}),Object(q.jsx)("div",{}),Object(q.jsx)("div",{}),Object(q.jsx)("div",{}),Object(q.jsx)("div",{}),Object(q.jsx)("div",{}),Object(q.jsx)("div",{})]})},Zt={onGetCurrentUser:function(){return function(){var t=Object(p.a)(f.a.mark((function t(e,n){var r,a,c,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n(),a=r.authorization.token){t.next=3;break}return t.abrupt("return");case 3:return e(tt()),t.prev=4,bt(a),t.next=8,h.a.get("/users/current");case 8:c=t.sent,o=c.data,e(et(o)),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(4),Object(E.error)({text:"ERROR, the request failed"}),e(nt(t.t0.payload));case 17:case"end":return t.stop()}}),t,null,[[4,13]])})));return function(e,n){return t.apply(this,arguments)}}()}},Mt=Object(O.b)((function(t){return{logger:yt(t)}}),Zt)((function(t){var e=t.logger,n=t.onGetCurrentUser;return Object(r.useEffect)((function(){return n()}),[n]),Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(Ft,{}),e&&Object(q.jsx)(Ut,{}),Object(q.jsxs)(_t.d,{children:[Object(q.jsx)(wt,{exact:!0,path:"/",component:J}),Object(q.jsx)(zt,{class:!0,path:"/Registration",redirectTo:"/",restricted:!0,component:ft}),Object(q.jsx)(zt,{path:"/Login",redirectTo:"/",restricted:!0,component:xt})]})]})})),Dt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,91)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),r(t),a(t),c(t),o(t)}))},Jt=n(55),Qt=n(32),Gt=n(2),Kt=n(7),Xt=Object(x.c)([],(rt={},Object(Gt.a)(rt,g,(function(t,e){return e.payload})),Object(Gt.a)(rt,R,(function(t,e){var n=e.payload;return[].concat(Object(Qt.a)(t),[n])})),Object(Gt.a)(rt,w,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),rt)),$t=Object(x.c)(!1,(at={},Object(Gt.a)(at,C,(function(){return!0})),Object(Gt.a)(at,R,(function(){return!1})),Object(Gt.a)(at,y,(function(){return!1})),Object(Gt.a)(at,k,(function(){return!0})),Object(Gt.a)(at,w,(function(){return!1})),Object(Gt.a)(at,N,(function(){return!1})),Object(Gt.a)(at,v,(function(){return!0})),Object(Gt.a)(at,g,(function(){return!1})),Object(Gt.a)(at,_,(function(){return!1})),at)),Ht=Object(x.c)("",Object(Gt.a)({},z,(function(t,e){return e.payload}))),Vt=Object(Kt.b)({items:Xt,filter:Ht,loading:$t}),Yt={name:null,email:null},Wt=Object(x.c)(Yt,(ct={},Object(Gt.a)(ct,G,(function(t,e){return e.payload.user})),Object(Gt.a)(ct,$,(function(t,e){return e.payload.user})),Object(Gt.a)(ct,Y,(function(){return Yt})),Object(Gt.a)(ct,et,(function(t,e){return e.payload})),ct)),te=Object(x.c)(null,(ot={},Object(Gt.a)(ot,G,(function(t,e){return e.payload.token})),Object(Gt.a)(ot,$,(function(t,e){return e.payload.token})),Object(Gt.a)(ot,Y,(function(){return null})),ot)),ee=Object(x.c)(null,(st={},Object(Gt.a)(st,K,(function(t,e){return e.payload})),Object(Gt.a)(st,H,(function(t,e){return e.payload})),Object(Gt.a)(st,W,(function(t,e){return e.payload})),Object(Gt.a)(st,nt,(function(t,e){return e.payload})),st)),ne=Object(x.c)(!1,(ut={},Object(Gt.a)(ut,G,(function(){return!0})),Object(Gt.a)(ut,$,(function(){return!0})),Object(Gt.a)(ut,et,(function(){return!0})),Object(Gt.a)(ut,Y,(function(){return!1})),Object(Gt.a)(ut,K,(function(){return!1})),Object(Gt.a)(ut,H,(function(){return!1})),Object(Gt.a)(ut,W,(function(){return!1})),Object(Gt.a)(ut,nt,(function(){return!1})),ut)),re=Object(x.c)(!1,(it={},Object(Gt.a)(it,Q,(function(){return!0})),Object(Gt.a)(it,G,(function(){return!1})),Object(Gt.a)(it,K,(function(){return!1})),Object(Gt.a)(it,X,(function(){return!0})),Object(Gt.a)(it,$,(function(){return!1})),Object(Gt.a)(it,H,(function(){return!1})),Object(Gt.a)(it,V,(function(){return!0})),Object(Gt.a)(it,Y,(function(){return!1})),Object(Gt.a)(it,W,(function(){return!1})),Object(Gt.a)(it,tt,(function(){return!0})),Object(Gt.a)(it,et,(function(){return!1})),Object(Gt.a)(it,nt,(function(){return!1})),it)),ae=Object(Kt.b)({loadingLogReg:re,authorization:ne,user:Wt,token:te,error:ee}),ce=n(19),oe=n(56),se=n.n(oe),ue=Object(Qt.a)(Object(x.d)({serializableCheck:{ignoredActions:[ce.a,ce.f,ce.b,ce.c,ce.d,ce.e]}})),ie={key:"token",storage:se.a,whitelist:["token"]},be=Object(x.a)({reducer:{contact:Vt,authorization:Object(ce.g)(ie,ae)},middleware:ue,devTools:!1}),le={store:be,persistor:Object(ce.h)(be)};o.a.render(Object(q.jsx)(a.a.StrictMode,{children:Object(q.jsx)(At.a,{children:Object(q.jsx)(O.a,{store:le.store,children:Object(q.jsx)(Jt.a,{loading:null,persistor:le.persistor,children:Object(q.jsx)(Mt,{})})})})}),document.getElementById("root")),Dt()}},[[89,1,2]]]);
//# sourceMappingURL=main.03ba5942.chunk.js.map