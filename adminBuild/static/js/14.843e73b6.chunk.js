(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[14],{101:function(e,t,a){"use strict";var n=a(3),r=a(5),l=a(7),c=a.n(l),u=a(0),s=a.n(u),i=a(8),o=["xl","lg","md","sm","xs"],m=s.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,u=e.as,m=void 0===u?"div":u,d=Object(r.a)(e,["bsPrefix","className","as"]),f=Object(i.b)(a,"col"),E=[],b=[];return o.forEach((function(e){var t,a,n,r=d[e];if(delete d[e],null!=r&&"object"===typeof r){var l=r.span;t=void 0===l||l,a=r.offset,n=r.order}else t=r;var c="xs"!==e?"-"+e:"";null!=t&&E.push(!0===t?""+f+c:""+f+c+"-"+t),null!=n&&b.push("order"+c+"-"+n),null!=a&&b.push("offset"+c+"-"+a)})),E.length||E.push(f),s.a.createElement(m,Object(n.a)({},d,{ref:t,className:c.a.apply(void 0,[l].concat(E,b))}))}));m.displayName="Col",t.a=m},102:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(104),c=a.n(l);t.a=function(){return r.a.createElement("div",{className:c.a.loader})}},104:function(e,t,a){e.exports={loader:"FormSpinner_loader__1L2La",load1:"FormSpinner_load1__NnjDF"}},120:function(e,t,a){"use strict";var n=a(4),r=a.n(n),l=a(6),c=a(12),u=a(40),s=a(0),i=a.n(s),o=a(18),m=a(135),d=a(121),f=a.n(d),E=a(105),b=a(54),p=a(102);t.a=function(e){var t=Object(s.useState)(""),a=Object(u.a)(t,2),n=a[0],d=a[1],v=Object(s.useState)(""),O=Object(u.a)(v,2),j=O[0],g=O[1],_=Object(s.useState)(""),N=Object(u.a)(_,2),h=N[0],y=N[1],U=Object(s.useState)(""),S=Object(u.a)(U,2),x=S[0],F=S[1],k=Object(o.c)((function(e){return e.auth.user})),C=Object(o.c)((function(e){return e.auth.token})),I=Object(o.c)((function(e){return e.user.editLoading})),A=e.currentUser,H=e.id,w=e.type,R=e.submitHandler,B=e.setValidations,D=Object(o.b)(),P=Object(s.useMemo)((function(){return[{value:"ADMIN",label:"Admin"},{value:"SUPER_ADMIN",label:"Super Admin"}]}),[]);Object(s.useEffect)((function(){if(A){d(A.email);var e=P.findIndex((function(e){return e.value===A.role}));g(P[e])}}),[D,P,A]);var M=function(){var e=[];(null===n||n.length<1||j.length<1)&&(e=[].concat(Object(c.a)(e),["Make sure no fields are blank"]));var t=new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"i");return n.match(t)||(e=[].concat(Object(c.a)(e),["Make sure to enter a valid Email"])),e.length>0?(B(e),!1):(B(null),!0)},L=function(e,t){"first"===t?y(e):F(e)},z=function(){var e=Object(l.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="edit"===w?{email:n,modifiedBy:k.id,role:j.value,token:C,id:H}:{firstName:h,lastName:x,email:n,role:j.value,createdBy:k.id,token:C},a=M(),e.next=4,R(M,t);case 4:a&&"add"===w&&(d(""),g(""),y(""),F(""));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=I?i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,null)," Submitting..."):"Submit",W=null;return W="add"===w?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:f.a.Option},i.a.createElement("b",null,"First Name: ")),i.a.createElement(E.a.Control,{type:"text",placeholder:"First Name",value:h,onChange:function(e){return L(e.target.value,"first")},style:{}}),i.a.createElement("br",null),i.a.createElement("div",{className:f.a.Option},i.a.createElement("b",null,"Last Name: ")),i.a.createElement(E.a.Control,{type:"text",placeholder:"Last Name",value:x,onChange:function(e){return L(e.target.value,"last")},style:{}}),i.a.createElement("br",null)):i.a.createElement("div",{className:f.a.Option},i.a.createElement("b",null,"Name:")," ",A.firstName," ",A.lastName,i.a.createElement("br",null),i.a.createElement("br",null)),i.a.createElement(i.a.Fragment,null,i.a.createElement(E.a,null,W,i.a.createElement("div",{className:f.a.Option},i.a.createElement("b",null,"Email: ")),i.a.createElement(E.a.Control,{type:"text",placeholder:"Email",value:n,disabled:!!A&&A.providerId,onChange:function(e){return t=e.target.value,void d(t);var t}}),i.a.createElement("br",null),i.a.createElement("div",{className:f.a.Option},i.a.createElement("b",null,"Role: ")),i.a.createElement(m.a,{defaultValue:j,value:j,options:P,onChange:function(e){g(e)}})),i.a.createElement("br",null),i.a.createElement("center",null,i.a.createElement(b.a,{variant:"primary",onClick:function(){return z()}},V)))}},121:function(e,t,a){e.exports={Option:"UserForm_Option__6w_dS"}},190:function(e,t,a){e.exports={validations:"EditUserPage_validations__2vHXX",success:"EditUserPage_success__2Yiqt",Option:"EditUserPage_Option__3ctoa",UserHeader:"EditUserPage_UserHeader__3yYWl"}},191:function(e,t,a){e.exports={link:"UserInfoHeader_link__ddyt9",User:"UserInfoHeader_User__1gmpu",Option:"UserInfoHeader_Option__WWmN1",Name:"UserInfoHeader_Name__2HYO1"}},203:function(e,t,a){"use strict";a.r(t);var n=a(40),r=a(0),l=a.n(r),c=a(18),u=a(10),s=a(22),i=a(190),o=a.n(i),m=a(106),d=a(101),f=a(55),E=a(120),b=a(191),p=a.n(b),v=a(107),O=a(103),j=function(e){var t=e.user,a=t?l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{style:{color:t.providerId?"green":"red"}},l.a.createElement("b",null,t.providerId?"Registered":"Not Registered")," ",l.a.createElement("br",null))):null,n=t&&t.createdBy?l.a.createElement(l.a.Fragment,null,l.a.createElement("b",null,"Created"," ",l.a.createElement(v.a,{icon:O.e,size:"1x",style:{color:"green"}})," ","by ",l.a.createElement("span",{className:p.a.User},t.createdBy.email)," on"," ",new Date(t.createdAt).toDateString()),l.a.createElement("br",null)):null,r=t&&t.modifiedBy?l.a.createElement(l.a.Fragment,null,l.a.createElement("b",null,"Modified"," ",l.a.createElement(v.a,{icon:O.c,size:"1x",style:{color:"orange"}})," ","by ",l.a.createElement("span",{className:p.a.User}," ",t.modifiedBy.email," ")," on"," ",new Date(t.updatedAt).toDateString())):null;return l.a.createElement(l.a.Fragment,null,a,l.a.createElement("br",null),l.a.createElement("div",{className:p.a.Option},n,r),l.a.createElement("hr",null))},g=a(41);t.default=Object(u.h)((function(e){var t=Object(r.useState)(null),a=Object(n.a)(t,2),i=a[0],b=a[1],p=Object(r.useState)(null),v=Object(n.a)(p,2),O=v[0],_=v[1],N=Object(r.useState)(e.location.passedUser),h=Object(n.a)(N,2),y=h[0],U=h[1],S=Object(c.c)((function(e){return e.user.currentUser})),x=Object(c.c)((function(e){return e.user.editUserSuccess})),F=Object(c.c)((function(e){return e.user.loading})),k=Object(c.c)((function(e){return e.user.error})),C=Object(c.b)(),I=Object(u.g)().id;Object(r.useEffect)((function(){return function(){return C(Object(s.B)())}}),[C]),Object(r.useEffect)((function(){if(S||y||!I){if(!k){b(S||y)}}else C(Object(s.I)(I))}),[C,I,k,S,y]),Object(r.useEffect)((function(){y&&S&&U(null)}),[y,S]);var A=l.a.createElement(g.a,null);return i&&!F&&(A=l.a.createElement(l.a.Fragment,null,l.a.createElement(j,{user:i}),l.a.createElement(E.a,{currentUser:i,id:I,setValidations:_,submitHandler:function(e,t){e()&&C(Object(s.A)(t))},type:"edit"}),l.a.createElement("br",null),l.a.createElement("span",{className:o.a.validations},O?l.a.createElement(l.a.Fragment,null,O.join(", ")," ",l.a.createElement("br",null)):null,k),l.a.createElement("span",{className:o.a.success},x&&!O?"SUCCESS! User updated.":null))),S||y||!k||(A=l.a.createElement("span",{className:o.a.validations},"ERROR: ",k)),l.a.createElement(f.a,null,l.a.createElement(m.a,null,l.a.createElement("center",null,l.a.createElement("h1",null,"Edit Admin"),l.a.createElement("br",null),l.a.createElement(d.a,{lg:"5"},A))))}))}}]);
//# sourceMappingURL=14.843e73b6.chunk.js.map