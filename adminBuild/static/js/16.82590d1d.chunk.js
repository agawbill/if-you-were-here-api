(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[16],{102:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(104),c=a.n(l);t.a=function(){return r.a.createElement("div",{className:c.a.loader})}},104:function(e,t,a){e.exports={loader:"FormSpinner_loader__1L2La",load1:"FormSpinner_load1__NnjDF"}},158:function(e,t,a){e.exports={validations:"FullMessagePage_validations__38plK",success:"FullMessagePage_success__3gLvv"}},159:function(e,t,a){e.exports={link:"MessageInfoHeader_link__328n_",User:"MessageInfoHeader_User__3l1ni"}},160:function(e,t,a){e.exports={MessageWrapper:"MessageForm_MessageWrapper__2OJGj"}},198:function(e,t,a){"use strict";a.r(t);var n=a(40),r=a(0),l=a.n(r),c=a(10),s=a(18),u=a(22),i=a(158),o=a.n(i),m=a(4),d=a.n(m),b=a(6),p=a(159),E=a.n(p),g=a(107),f=a(103),j=function(e){var t=e.message,a=Object(s.b)(),n=function(){var t=Object(b.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(Object(u.j)({id:e.id,user:e.user,token:e.token}));case 2:return t.next=4,a(Object(u.C)(e.id));case 4:return t.next=6,a(Object(u.D)());case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),r=null,c=t&&t.flagged?l.a.createElement(l.a.Fragment,null,l.a.createElement("b",null,"Flagged:")," ",l.a.createElement(g.a,{icon:f.d,size:"1x",style:{color:"red"}}),l.a.createElement("br",null)):null,i=t&&t.modifiedBy?l.a.createElement(l.a.Fragment,null,l.a.createElement("b",null,"Modified"," ",l.a.createElement(g.a,{icon:f.c,size:"1x",style:{color:"orange"}})," ","by ",l.a.createElement("span",{className:E.a.User}," ",t.modifiedBy.email)," on"," ",new Date(t.updatedAt).toDateString())):null;return t&&t.approved?r=l.a.createElement(l.a.Fragment,null,l.a.createElement("b",null,"Approved"," ",l.a.createElement(g.a,{icon:f.a,size:"1x",style:{color:"green"}})," ","by ",l.a.createElement("span",{className:E.a.User},t.approvedBy.email)),l.a.createElement("br",null),l.a.createElement("br",null)):t&&!t.approved&&(r=l.a.createElement(l.a.Fragment,null,l.a.createElement("b",null,"Not approved ")," ",l.a.createElement(g.a,{icon:f.h,size:"lg",style:{color:"red"}})," ",l.a.createElement("br",null),l.a.createElement("span",{onClick:function(){return n()},className:E.a.link},l.a.createElement("b",null,"Approve?")),l.a.createElement("br",null),l.a.createElement("br",null))),l.a.createElement(l.a.Fragment,null,c,r,i,l.a.createElement("hr",null))},O=a(12),v=a(2),y=a(160),h=a.n(y),_=a(161),k=a.n(_),w=a(163),M=a.n(w),F=a(105),S=a(101),x=a(54),C=a(102),N={who:{name:"",id:""},identity:{name:"",id:""},message:""},B=function(e,t){switch(t.type){case"who":return Object(v.a)(Object(v.a)({},e),{},{who:Object(v.a)(Object(v.a)({},e.who),t.value)});case"identity":return Object(v.a)(Object(v.a)({},e),{},{identity:Object(v.a)(Object(v.a)({},e.identity),t.value)});case"message":return Object(v.a)(Object(v.a)({},e),{},{message:t.value});case"reset":return Object(v.a)({},N)}},L=function(e){var t=Object(r.useReducer)(B,N),a=Object(n.a)(t,2),c=a[0],i=a[1],o=Object(s.c)((function(e){return e.persons.persons})).sort((function(e,t){return e.position-t.position})),m=Object(s.c)((function(e){return e.message.editLoading})),p=Object(s.b)(),E=e.setValidations,g=e.message,f=e.token,j=e.id,v=e.user;Object(r.useEffect)((function(){return g&&(i({type:"message",value:g.message}),i({type:"who",value:{name:g.who.name,id:g.who._id}}),i({type:"identity",value:{name:g.identity.name,id:g.identity._id}})),function(){return i({type:"reset"})}}),[j,g]);var y=function(e,t){var a=t.split(","),r=Object(n.a)(a,2),l=r[0],c=r[1];i({type:e,value:{name:l,id:c}})},_=function(){var e=[];return c.message&&c.who.id&&c.identity.id||(e=[].concat(Object(O.a)(e),["Make sure no fields are blank"])),e.length>0?(E(e),!1):(E(null),!0)},w=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!_()){e.next=4;break}return e.next=4,p(Object(u.t)({message:c.message,who:c.who.id,identity:c.identity.id,token:f,id:j,flagged:g.flagged,approved:g.approved,approvedBy:g.approvedBy,modifiedBy:v.id}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=l.a.createElement("select",{onChange:function(e){return y("who",e.target.value)}},o.map((function(e,t){return l.a.createElement("option",{key:t,selected:c.who.id===e._id?"selected":null,value:"".concat(e.name,",").concat(e._id)},e.name)}))),U=l.a.createElement("select",{onChange:function(e){return y("identity",e.target.value)}},o.map((function(e,t){return l.a.createElement("option",{selected:c.identity.id===e._id?"selected":null,key:t,value:"".concat(e.name,",").concat(e._id)},e.name)}))),D=m?l.a.createElement(C.a,null):"Submit";return l.a.createElement(l.a.Fragment,null,l.a.createElement(F.a,null,l.a.createElement(S.a,{sm:"13"},l.a.createElement("b",null,"Who:")," ",L,l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement(S.a,{sm:"13"},l.a.createElement("b",null,"Message:"),l.a.createElement("div",{className:h.a.MessageWrapper},l.a.createElement(k.a,{editor:M.a,data:c.message,config:{toolbar:["bold","italic","|","undo","redo"]},onChange:function(e,t){var a=t.getData();i({type:"message",value:a})}})),l.a.createElement("br",null)),l.a.createElement(S.a,{sm:"13"},l.a.createElement("b",null,"Identity:")," ",U,l.a.createElement("br",null))),l.a.createElement("center",null,l.a.createElement("br",null),l.a.createElement(x.a,{variant:"primary",disabled:!!m,onClick:function(){return w()}},D)))},U=a(106),D=a(55),z=a(41);t.default=Object(c.h)((function(e){var t=Object(r.useState)(null),a=Object(n.a)(t,2),i=a[0],m=a[1],d=Object(r.useState)(null),b=Object(n.a)(d,2),p=b[0],E=b[1],g=Object(r.useState)(e.location.passedMessage),f=Object(n.a)(g,2),O=f[0],v=f[1],y=Object(s.c)((function(e){return e.message.currentMessage})),h=Object(s.c)((function(e){return e.auth.token})),_=Object(s.c)((function(e){return e.auth.user})),k=Object(s.c)((function(e){return e.message.editSuccess})),w=Object(s.c)((function(e){return e.message.approveSuccess})),M=Object(s.c)((function(e){return e.message.editLoading})),F=Object(s.c)((function(e){return e.message.approveLoading})),S=Object(s.c)((function(e){return e.message.error})),x=Object(c.g)().id,C=Object(s.b)();Object(r.useEffect)((function(){return function(){return C(Object(u.u)())}}),[C]),Object(r.useEffect)((function(){y||O||!x?E(y||O):C(Object(u.C)(x))}),[C,x,y,O]),Object(r.useEffect)((function(){y&&O&&v(null)}),[y,O]);var N=null,B=null;return N=y||O||!S?M?l.a.createElement(z.a,null):l.a.createElement(l.a.Fragment,null,l.a.createElement(L,{user:_,token:h,id:x,setValidations:m,message:p}),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("span",{className:o.a.validations},i?l.a.createElement(l.a.Fragment,null,i.join(", ")," ",l.a.createElement("br",null)):null,S),l.a.createElement("span",{className:o.a.success},k&&!i?"SUCCESS! Message updated.":null,w?"SUCCESS! Message approved.":null))):l.a.createElement("center",null,l.a.createElement("span",{className:o.a.validations},"ERROR: ",S)),B=M||F?l.a.createElement(z.a,null):l.a.createElement(j,{user:_,token:h,id:x,message:p}),l.a.createElement(D.a,null,l.a.createElement(U.a,null,l.a.createElement("center",null,l.a.createElement("h1",null,"Edit Message")),l.a.createElement("br",null),B,N))}))}}]);
//# sourceMappingURL=16.82590d1d.chunk.js.map