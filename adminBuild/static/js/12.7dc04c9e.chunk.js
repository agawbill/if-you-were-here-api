(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[12],{101:function(e,a,t){"use strict";var n=t(3),r=t(5),l=t(7),s=t.n(l),c=t(0),i=t.n(c),o=t(8),u=["xl","lg","md","sm","xs"],m=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,c=e.as,m=void 0===c?"div":c,d=Object(r.a)(e,["bsPrefix","className","as"]),f=Object(o.b)(t,"col"),b=[],p=[];return u.forEach((function(e){var a,t,n,r=d[e];if(delete d[e],null!=r&&"object"===typeof r){var l=r.span;a=void 0===l||l,t=r.offset,n=r.order}else a=r;var s="xs"!==e?"-"+e:"";null!=a&&b.push(!0===a?""+f+s:""+f+s+"-"+a),null!=n&&p.push("order"+s+"-"+n),null!=t&&p.push("offset"+s+"-"+t)})),b.length||b.push(f),i.a.createElement(m,Object(n.a)({},d,{ref:a,className:s.a.apply(void 0,[l].concat(b,p))}))}));m.displayName="Col",a.a=m},102:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(104),s=t.n(l);a.a=function(){return r.a.createElement("div",{className:s.a.loader})}},104:function(e,a,t){e.exports={loader:"FormSpinner_loader__1L2La",load1:"FormSpinner_load1__NnjDF"}},105:function(e,a,t){"use strict";var n=t(3),r=t(5),l=t(7),s=t.n(l),c=t(0),i=t.n(c),o=(t(77),t(9)),u=t.n(o),m={type:u.a.string.isRequired,as:u.a.elementType},d=i.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"div":t,c=e.className,o=e.type,u=Object(r.a)(e,["as","className","type"]);return i.a.createElement(l,Object(n.a)({},u,{ref:a,className:s()(c,o&&o+"-feedback")}))}));d.displayName="Feedback",d.propTypes=m,d.defaultProps={type:"valid"};var f=d,b=i.a.createContext({controlId:void 0}),p=t(8),v=i.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,o=e.bsCustomPrefix,u=e.className,m=e.isValid,d=e.isInvalid,f=e.isStatic,v=e.as,O=void 0===v?"input":v,j=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),E=Object(c.useContext)(b),x=E.controlId,N=E.custom?[o,"custom-control-input"]:[l,"form-check-input"],y=N[0],P=N[1];return l=Object(p.b)(y,P),i.a.createElement(O,Object(n.a)({},j,{ref:a,id:t||x,className:s()(u,l,m&&"is-valid",d&&"is-invalid",f&&"position-static")}))}));v.displayName="FormCheckInput",v.defaultProps={type:"checkbox"};var O=v,j=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.bsCustomPrefix,o=e.className,u=e.htmlFor,m=Object(r.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),d=Object(c.useContext)(b),f=d.controlId,v=d.custom?[l,"custom-control-label"]:[t,"form-check-label"],O=v[0],j=v[1];return t=Object(p.b)(O,j),i.a.createElement("label",Object(n.a)({},m,{ref:a,htmlFor:u||f,className:s()(o,t)}))}));j.displayName="FormCheckLabel";var E=j,x=i.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,o=e.bsCustomPrefix,u=e.inline,m=e.disabled,d=e.isValid,v=e.isInvalid,j=e.feedback,x=e.className,N=e.style,y=e.title,P=e.type,h=e.label,F=e.children,I=e.custom,g=e.as,w=void 0===g?"input":g,C=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),k="switch"===P||I,_=k?[o,"custom-control"]:[l,"form-check"],S=_[0],R=_[1];l=Object(p.b)(S,R);var V=Object(c.useContext)(b).controlId,L=Object(c.useMemo)((function(){return{controlId:t||V,custom:k}}),[V,k,t]),B=null!=h&&!1!==h&&!F,D=i.a.createElement(O,Object(n.a)({},C,{type:"switch"===P?"checkbox":P,ref:a,isValid:d,isInvalid:v,isStatic:!B,disabled:m,as:w}));return i.a.createElement(b.Provider,{value:L},i.a.createElement("div",{style:N,className:s()(x,l,k&&"custom-"+P,u&&l+"-inline")},F||i.a.createElement(i.a.Fragment,null,D,B&&i.a.createElement(E,{title:y},h),(d||v)&&i.a.createElement(f,{type:d?"valid":"invalid"},j))))}));x.displayName="FormCheck",x.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},x.Input=O,x.Label=E;var N=x,y=i.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,o=e.bsCustomPrefix,u=e.className,m=e.isValid,d=e.isInvalid,f=e.lang,v=e.as,O=void 0===v?"input":v,j=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),E=Object(c.useContext)(b),x=E.controlId,N=E.custom?[o,"custom-file-input"]:[l,"form-control-file"],y=N[0],P=N[1];return l=Object(p.b)(y,P),i.a.createElement(O,Object(n.a)({},j,{ref:a,id:t||x,type:"file",lang:f,className:s()(u,l,m&&"is-valid",d&&"is-invalid")}))}));y.displayName="FormFileInput";var P=y,h=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.bsCustomPrefix,o=e.className,u=e.htmlFor,m=Object(r.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),d=Object(c.useContext)(b),f=d.controlId,v=d.custom?[l,"custom-file-label"]:[t,"form-file-label"],O=v[0],j=v[1];return t=Object(p.b)(O,j),i.a.createElement("label",Object(n.a)({},m,{ref:a,htmlFor:u||f,className:s()(o,t),"data-browse":m["data-browse"]}))}));h.displayName="FormFileLabel";var F=h,I=i.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,o=e.bsCustomPrefix,u=e.disabled,m=e.isValid,d=e.isInvalid,v=e.feedback,O=e.className,j=e.style,E=e.label,x=e.children,N=e.custom,y=e.lang,h=e["data-browse"],I=e.as,g=void 0===I?"div":I,w=e.inputAs,C=void 0===w?"input":w,k=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),_=N?[o,"custom"]:[l,"form-file"],S=_[0],R=_[1];l=Object(p.b)(S,R);var V=Object(c.useContext)(b).controlId,L=Object(c.useMemo)((function(){return{controlId:t||V,custom:N}}),[V,N,t]),B=null!=E&&!1!==E&&!x,D=i.a.createElement(P,Object(n.a)({},k,{ref:a,isValid:m,isInvalid:d,disabled:u,as:C,lang:y}));return i.a.createElement(b.Provider,{value:L},i.a.createElement(g,{style:j,className:s()(O,l,N&&"custom-file")},x||i.a.createElement(i.a.Fragment,null,N?i.a.createElement(i.a.Fragment,null,D,B&&i.a.createElement(F,{"data-browse":h},E)):i.a.createElement(i.a.Fragment,null,B&&i.a.createElement(F,null,E),D),(m||d)&&i.a.createElement(f,{type:m?"valid":"invalid"},v))))}));I.displayName="FormFile",I.defaultProps={disabled:!1,isValid:!1,isInvalid:!1},I.Input=P,I.Label=F;var g=I,w=(t(47),i.a.forwardRef((function(e,a){var t,l,o=e.bsPrefix,u=e.bsCustomPrefix,m=e.type,d=e.size,f=e.id,v=e.className,O=e.isValid,j=e.isInvalid,E=e.plaintext,x=e.readOnly,N=e.custom,y=e.as,P=void 0===y?"input":y,h=Object(r.a)(e,["bsPrefix","bsCustomPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),F=Object(c.useContext)(b).controlId,I=N?[u,"custom"]:[o,"form-control"],g=I[0],w=I[1];if(o=Object(p.b)(g,w),E)(l={})[o+"-plaintext"]=!0,t=l;else if("file"===m){var C;(C={})[o+"-file"]=!0,t=C}else if("range"===m){var k;(k={})[o+"-range"]=!0,t=k}else if("select"===P&&N){var _;(_={})[o+"-select"]=!0,_[o+"-select-"+d]=d,t=_}else{var S;(S={})[o]=!0,S[o+"-"+d]=d,t=S}return i.a.createElement(P,Object(n.a)({},h,{type:m,ref:a,readOnly:x,id:f||F,className:s()(v,t,O&&"is-valid",j&&"is-invalid")}))})));w.displayName="FormControl",w.Feedback=f;var C=w,k=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,o=e.children,u=e.controlId,m=e.as,d=void 0===m?"div":m,f=Object(r.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(p.b)(t,"form-group");var v=Object(c.useMemo)((function(){return{controlId:u}}),[u]);return i.a.createElement(b.Provider,{value:v},i.a.createElement(d,Object(n.a)({},f,{ref:a,className:s()(l,t)}),o))}));k.displayName="FormGroup";var _=k,S=t(101),R=i.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"label":t,o=e.bsPrefix,u=e.column,m=e.srOnly,d=e.className,f=e.htmlFor,v=Object(r.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),O=Object(c.useContext)(b).controlId;o=Object(p.b)(o,"form-label");var j="col-form-label";"string"===typeof u&&(j=j+"-"+u);var E=s()(d,o,m&&"sr-only",u&&j);return f=f||O,u?i.a.createElement(S.a,Object(n.a)({as:"label",className:E,htmlFor:f},v)):i.a.createElement(l,Object(n.a)({ref:a,className:E,htmlFor:f},v))}));R.displayName="FormLabel",R.defaultProps={column:!1,srOnly:!1};var V=R,L=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,c=e.as,o=void 0===c?"small":c,u=e.muted,m=Object(r.a)(e,["bsPrefix","className","as","muted"]);return t=Object(p.b)(t,"form-text"),i.a.createElement(o,Object(n.a)({},m,{ref:a,className:s()(l,t,u&&"text-muted")}))}));L.displayName="FormText";var B=L,D=i.a.forwardRef((function(e,a){return i.a.createElement(N,Object(n.a)({},e,{ref:a,type:"switch"}))}));D.displayName="Switch",D.Input=N.Input,D.Label=N.Label;var H=D,M=t(34),A=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.inline,c=e.className,o=e.validated,u=e.as,m=void 0===u?"form":u,d=Object(r.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(p.b)(t,"form"),i.a.createElement(m,Object(n.a)({},d,{ref:a,className:s()(c,o&&"was-validated",l&&t+"-inline")}))}));A.displayName="Form",A.defaultProps={inline:!1},A.Row=Object(M.a)("form-row"),A.Group=_,A.Control=C,A.Check=N,A.File=g,A.Switch=H,A.Label=V,A.Text=B;a.a=A},116:function(e,a,t){"use strict";var n=t(4),r=t.n(n),l=t(6),s=t(12),c=t(40),i=t(0),o=t.n(i),u=t(18),m=t(117),d=t.n(m),f=t(105),b=t(54),p=t(102);a.a=function(e){var a=Object(i.useState)(null),t=Object(c.a)(a,2),n=t[0],m=t[1],v=Object(u.c)((function(e){return e.auth.user})),O=Object(u.c)((function(e){return e.auth.token})),j=Object(u.c)((function(e){return e.person.loading})),E=e.currentPerson,x=e.id,N=e.type,y=e.submitHandler,P=e.setValidations,h=Object(u.b)();Object(i.useEffect)((function(){E&&m(E.name)}),[h,E]);var F=function(){var e=[];return(null===n||n.length<1)&&(e=[].concat(Object(s.a)(e),["Make sure no fields are blank"])),e.length>0?(P(e),!1):(P(null),!0)},I=function(){var e=Object(l.a)(r.a.mark((function e(){var a,t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="edit"===N?{name:n,modifiedBy:v.id,position:E.position,token:O,id:x}:{name:n,createdBy:v.id,token:O},t=F(),e.next=4,y(F,a);case 4:t&&"add"===N&&m("");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=j?o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null)," Submitting..."):"Submit";return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,null,o.a.createElement("div",{className:d.a.Option},o.a.createElement("b",null,"Name:")),o.a.createElement(f.a.Control,{type:"text",placeholder:"PERSON NAME",value:n||"",onChange:function(e){return a=e.target.value,void m(a);var a}})),o.a.createElement("br",null),o.a.createElement("center",null,o.a.createElement(b.a,{variant:"primary",disabled:!!j,onClick:function(){return I()}},g)))}},117:function(e,a,t){e.exports={Option:"PersonForm_Option__1-5cD"}},180:function(e,a,t){e.exports={validations:"Person_validations__2wfhd",success:"Person_success__1pJ_T",Option:"Person_Option__vJLWx"}},181:function(e,a,t){e.exports={link:"PersonInfoHeader_link__147cW",User:"PersonInfoHeader_User__a5ZOG",Option:"PersonInfoHeader_Option__2Gmc3",Name:"PersonInfoHeader_Name__2xcZk"}},200:function(e,a,t){"use strict";t.r(a);var n=t(4),r=t.n(n),l=t(6),s=t(40),c=t(0),i=t.n(c),o=t(10),u=t(18),m=t(22),d=t(180),f=t.n(d),b=t(181),p=t.n(b),v=t(107),O=t(103),j=function(e){var a=e.person,t=a&&a.createdBy?i.a.createElement(i.a.Fragment,null,i.a.createElement("b",null,"Created"," ",i.a.createElement(v.a,{icon:O.e,size:"1x",style:{color:"green"}})," ","by ",i.a.createElement("span",{className:p.a.User},a.createdBy.email)," on"," ",new Date(a.createdAt).toDateString()),i.a.createElement("br",null)):null,n=a&&a.modifiedBy?i.a.createElement(i.a.Fragment,null,i.a.createElement("b",null,"Modified"," ",i.a.createElement(v.a,{icon:O.c,size:"1x",style:{color:"orange"}})," ","by ",i.a.createElement("span",{className:p.a.User}," ",a.modifiedBy.email," ")," on"," ",new Date(a.updatedAt).toDateString())):null;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:p.a.Option},t,n),i.a.createElement("hr",null))},E=t(116),x=t(106),N=t(101),y=t(55),P=t(41);a.default=Object(o.h)((function(e){var a=Object(c.useState)(null),t=Object(s.a)(a,2),n=t[0],d=t[1],b=Object(c.useState)(e.location.passedPerson),p=Object(s.a)(b,2),v=p[0],O=p[1],h=Object(c.useState)(null),F=Object(s.a)(h,2),I=F[0],g=F[1],w=Object(u.c)((function(e){return e.person.currentPerson})),C=Object(u.c)((function(e){return e.person.editPersonSuccess})),k=Object(u.c)((function(e){return e.person.error})),_=Object(u.b)(),S=Object(o.g)().id;Object(c.useEffect)((function(){w||v||!S?d(w||v):_(Object(m.E)(S))}),[_,S,w,v]),Object(c.useEffect)((function(){return function(){return _(Object(m.x)())}}),[_]),Object(c.useEffect)((function(){w&&v&&O(null)}),[w,v]);var R=function(){var e=Object(l.a)(r.a.mark((function e(a,t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a()){e.next=4;break}return e.next=4,_(Object(m.v)(t));case 4:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),V=i.a.createElement(P.a,null);return n&&(V=i.a.createElement(i.a.Fragment,null,i.a.createElement(N.a,{lg:"5"},i.a.createElement(j,{person:n}),i.a.createElement(E.a,{currentPerson:n,setValidations:g,submitHandler:R,id:S,type:"edit"}),i.a.createElement("br",null),i.a.createElement("span",{className:f.a.validations},I?i.a.createElement(i.a.Fragment,null,I.join(", ")," ",i.a.createElement("br",null)):null,k),i.a.createElement("span",{className:f.a.success},C&&!I?"SUCCESS! Person updated.":null)))),i.a.createElement(y.a,null,i.a.createElement(x.a,null,i.a.createElement("center",null,i.a.createElement("h1",null,"Person"),i.a.createElement("br",null),V)))}))}}]);
//# sourceMappingURL=12.7dc04c9e.chunk.js.map