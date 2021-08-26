(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{182:function(t,e,n){"use strict";n.r(e);var a={};n.r(a),n.d(a,"fetchContacts",(function(){return C})),n.d(a,"addContact",(function(){return y})),n.d(a,"deleteContact",(function(){return N})),n.d(a,"default",(function(){return F}));var c=n(1),r=n.n(c),o=n(24),i=n.n(o),s=n(6),u=n(8),l=n(4),b=n(66),_=n(11),d=Object(u.b)("contacts/addFilter"),j=n(17),h=n.n(j),f=n(26),p=n(21),m=n.n(p),O=n(185);m.a.defaults.baseURL="http://localhost:4040";var x,v,C=Object(u.c)("contacts/fetchContacts",function(){var t=Object(f.a)(h.a.mark((function t(e,n){var a,c,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.rejectWithValue,t.prev=1,t.next=4,m.a.get("/contacts?_sort=id&_order=desc");case 4:return c=t.sent,r=c.data,t.abrupt("return",r);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",a(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),y=Object(u.c)("contacts/addContact",function(){var t=Object(f.a)(h.a.mark((function t(e,n){var a,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.rejectWithValue,c={name:e.name,number:e.number,id:Object(O.a)()},t.prev=2,t.next=5,m.a.post("/contacts",c);case 5:return t.abrupt("return",c);case 8:return t.prev=8,t.t0=t.catch(2),t.abrupt("return",a(t.t0));case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e,n){return t.apply(this,arguments)}}()),N=Object(u.c)("contacts/deleteContact",function(){var t=Object(f.a)(h.a.mark((function t(e,n){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.rejectWithValue,t.prev=1,t.next=4,m.a.delete("/contacts/".concat(e));case 4:return t.abrupt("return",e);case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",a(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),F={deleteContact:N,addContact:y,fetchContacts:C},g=Object(u.d)([],(x={},Object(l.a)(x,C.fulfilled,(function(t,e){return e.payload})),Object(l.a)(x,y.fulfilled,(function(t,e){return[e.payload].concat(Object(b.a)(t))})),Object(l.a)(x,N.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),x)),w=Object(u.d)("",Object(l.a)({},d,(function(t,e){return e.payload}))),k=Object(u.d)(!1,(v={},Object(l.a)(v,C.pending,(function(){return!0})),Object(l.a)(v,C.fulfilled,(function(){return!1})),Object(l.a)(v,C.rejected,(function(){return!1})),Object(l.a)(v,y.pending,(function(){return!0})),Object(l.a)(v,y.fulfilled,(function(){return!1})),Object(l.a)(v,y.rejected,(function(){return!1})),Object(l.a)(v,N.pending,(function(){return!0})),Object(l.a)(v,N.fulfilled,(function(){return!1})),Object(l.a)(v,N.rejected,(function(){return!1})),v)),S=Object(u.d)(null,{}),I=Object(_.b)({items:g,filter:w,loading:k,error:S}),G=Object(u.a)({reducer:{contacts:I}}),L=(n(96),n(36)),B=n(184),P=n(58),D=n.n(P),M=n(9),z=n.n(M),E=n(59),Q=function(t){return t.contacts.items},T=function(t){return t.contacts.filter},V=function(t){return t.contacts.loading},W=n.n(E)()((function(t){var e=Q(t),n=T(t);return function(t){var e=n.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(e)}))}(e)})),q=(n(161),n(2)),H={hidden:{opacity:0,scale:.5},visible:{opacity:1,scale:1}};var J=function(){var t=Object(s.c)(Q),e=Object(s.b)(),n=Object(c.useState)(""),r=Object(L.a)(n,2),o=r[0],i=r[1],u=Object(c.useState)(""),l=Object(L.a)(u,2),b=l[0],_=l[1],d=Object(c.useRef)(Object(O.a)());return Object(q.jsx)("div",{className:z.a.container,children:Object(q.jsxs)(B.a.form,{initial:"hidden",animate:"visible",variants:H,className:z.a.form,onSubmit:function(n){n.preventDefault(),function(t,e){return!e.some((function(e){return e.name===t}))||(alert("".concat(t," is already in contacts.")),!1)}(o,t)&&(!function(t,n){var c={name:t,number:n};e(a.default.addContact(c))}(o,b),i(""),_(""))},children:[Object(q.jsxs)("label",{htmlFor:d.current,children:[Object(q.jsx)("p",{className:z.a.form__label,children:"Name"}),Object(q.jsx)("input",{type:"text",name:"name",className:z.a.form__firstInput,value:o,onChange:function(t){var e=t.currentTarget.value;i(e)},id:d.current,placeholder:"Enter name",required:!0})]}),Object(q.jsxs)("label",{className:z.a.phoneLabel,children:[Object(q.jsx)("p",{className:z.a.form__label,children:"Number"}),Object(q.jsx)(D.a,{name:"number",value:b,onChange:function(t){return _(t)},country:"ua",placeholder:"+38068-555-55-55",enableSearch:!0,disableSearchIcon:!0,containerClass:z.a.phoneContainer,buttonClass:z.a.phoneButton,inputClass:z.a.phoneInput})]}),Object(q.jsx)("div",{className:z.a.submit__box,children:Object(q.jsx)("button",{className:z.a.form__button,type:"submit",disabled:""===o||""===b,children:"Add contact"})})]})})},R=n(34),U=n.n(R),X={hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1}},A=function(t){var e=t.title,n=t.children;return Object(q.jsxs)("section",{className:U.a.container,children:[Object(q.jsx)(B.a.h2,{initial:"hidden",animate:"visible",variants:X,className:U.a.container__title,children:e}),n]})},K=n(35),Y=n(0),Z=n(60),$=n.n(Z),tt=n(19),et=n.n(tt),nt=n(61),at=n(62),ct=n(67),rt=n(65),ot=n(63),it=n.n(ot),st=(n(181),n(64)),ut=n.n(st),lt=function(t){Object(ct.a)(n,t);var e=Object(rt.a)(n);function n(){return Object(nt.a)(this,n),e.apply(this,arguments)}return Object(at.a)(n,[{key:"render",value:function(){return Object(q.jsx)("div",{className:ut.a.loaderContainer,children:Object(q.jsx)(it.a,{type:"Oval",color:"#00BFFF",height:100,width:100,timeout:1e4})})}}]),n}(r.a.Component),bt={hidden:{opacity:0,scale:.7},visible:{opacity:1,scale:1}},_t=function(){var t,e=Object(s.b)(),n=Object(s.c)(W),c=Object(s.c)(V),r=$()((t={},Object(l.a)(t,et.a.list,!0),Object(l.a)(t,"list-border",n.length),t));return Object(q.jsxs)("div",{className:r,children:[c&&Object(q.jsx)(lt,{}),Object(q.jsx)("ul",{className:et.a.list__ul,children:n.map((function(t){return Object(q.jsxs)(B.a.li,{initial:"hidden",animate:"visible",variants:bt,className:et.a.search__contact,children:[Object(q.jsx)(Y.b.Provider,{value:{color:"black",size:"1.6em",className:"react-icons"},children:Object(q.jsx)(K.a,{})}),Object(q.jsxs)("p",{className:et.a.search__text,children:[t.name," : ",t.number]}),Object(q.jsx)("div",{className:et.a.trash,children:Object(q.jsx)(Y.b.Provider,{value:{color:"red",size:"1.1em",className:"react-icons"},children:Object(q.jsx)(K.b,{onClick:function(){return e(a.deleteContact(t.id))}})})})]},t.id)}))})]})},dt=n(27),jt=n.n(dt),ht=function(){var t=Object(s.b)(),e=Object(s.c)(T);return Object(q.jsxs)("label",{htmlFor:"search",className:jt.a.Search__box,children:[Object(q.jsx)("p",{className:jt.a.search__label,children:"Find contacts by name:"}),Object(q.jsx)("input",{className:jt.a.search__input,type:"search",name:"search",id:"search",onChange:function(e){return t(d(e.currentTarget.value))},value:e})]})};function ft(){var t=Object(s.b)();return r.a.useEffect((function(){t(F.fetchContacts())}),[t]),Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(A,{title:"Phonebook",children:Object(q.jsx)(J,{})}),Object(q.jsxs)(A,{title:"Contacts",children:[Object(q.jsx)(ht,{}),Object(q.jsx)(_t,{})]})]})}i.a.render(Object(q.jsx)(r.a.StrictMode,{children:Object(q.jsx)(s.a,{store:G,children:Object(q.jsx)(ft,{})})}),document.getElementById("root"))},19:function(t,e,n){t.exports={search__contact:"Contacts_search__contact__w0UcP",search__label:"Contacts_search__label__3bcyv",search__button:"Contacts_search__button__2Hl5h",list:"Contacts_list__BIdr4",list__ul:"Contacts_list__ul__3M8bb",trash:"Contacts_trash__xDgX3",search__text:"Contacts_search__text__2CLwm"}},27:function(t,e,n){t.exports={Search__box:"Filter_Search__box__eFjdC",search__label:"Filter_search__label__242OL",search__input:"Filter_search__input__1vHDQ"}},34:function(t,e,n){t.exports={container:"Section_container__1Qz2K",container__title:"Section_container__title__1G_1x"}},64:function(t,e,n){t.exports={loaderContainer:"Loader_loaderContainer__2GMgP"}},9:function(t,e,n){t.exports={container:"Form_container__1IguG",form:"Form_form__3GMnT",form__button:"Form_form__button__3hDpl",form__label:"Form_form__label__1MyI0",form__firstInput:"Form_form__firstInput__3oEoe",submit__box:"Form_submit__box__2YGq9",phoneContainer:"Form_phoneContainer__2QGzX",phoneButton:"Form_phoneButton__DSPkn",phoneInput:"Form_phoneInput__3GQ4O"}},96:function(t,e,n){}},[[182,1,2]]]);
//# sourceMappingURL=main.980a5901.chunk.js.map