(this["webpackJsonpif-you-were-here"]=this["webpackJsonpif-you-were-here"]||[]).push([[1],{1:function(e,n,t){"use strict";t.d(n,"E",(function(){return r})),t.d(n,"F",(function(){return a})),t.d(n,"C",(function(){return c})),t.d(n,"D",(function(){return u})),t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return s})),t.d(n,"v",(function(){return l})),t.d(n,"e",(function(){return f})),t.d(n,"f",(function(){return d})),t.d(n,"d",(function(){return E})),t.d(n,"u",(function(){return S})),t.d(n,"k",(function(){return p})),t.d(n,"h",(function(){return m})),t.d(n,"j",(function(){return h})),t.d(n,"i",(function(){return g})),t.d(n,"g",(function(){return _})),t.d(n,"A",(function(){return O})),t.d(n,"x",(function(){return b})),t.d(n,"z",(function(){return j})),t.d(n,"y",(function(){return y})),t.d(n,"w",(function(){return T})),t.d(n,"B",(function(){return v})),t.d(n,"l",(function(){return C})),t.d(n,"o",(function(){return A})),t.d(n,"p",(function(){return R})),t.d(n,"m",(function(){return w})),t.d(n,"n",(function(){return x})),t.d(n,"s",(function(){return M})),t.d(n,"t",(function(){return G})),t.d(n,"q",(function(){return F})),t.d(n,"r",(function(){return k}));var r="SUBMIT_MESSAGE_START",a="SUBMIT_MESSAGE_SUCCESS",c="SUBMIT_MESSAGE_FAIL",u="SUBMIT_MESSAGE_RESET",o="FETCH_MESSAGES_START",i="FETCH_MESSAGES_SUCCESS",s="FETCH_MESSAGES_FAIL",l="RESET_MESSAGES",f="FETCH_MESSAGE_START",d="FETCH_MESSAGE_SUCCESS",E="FETCH_MESSAGE_FAIL",S="RESET_MESSAGE",p="FILTER_MESSAGES_START",m="FILTER_MESSAGES_ADD",h="FILTER_MESSAGES_REMOVE",g="FILTER_MESSAGES_FAIL",_="FILTER_MESSAGES",O="SORT_MESSAGES_START",b="SORT_MESSAGES_ADD",j="SORT_MESSAGES_REMOVE",y="SORT_MESSAGES_FAIL",T="SORT_MESSAGES",v="SORT_RESET",C="FILTER_RESET",A="GET_PERSONS_START",R="GET_PERSONS_SUCCESS",w="GET_PERSONS_FAIL",x="GET_PERSONS_RESET",M="GET_RESOURCES_START",G="GET_RESOURCES_SUCCESS",F="GET_RESOURCES_FAIL",k="GET_RESOURCES_RESET"},16:function(e,n,t){e.exports={HeaderContainer:"ContentContainer_HeaderContainer__aV_-9",ChildrenContainer:"ContentContainer_ChildrenContainer__PK4-d",Header:"ContentContainer_Header__NIG8l",BackButton:"ContentContainer_BackButton__3cF5k"}},25:function(e,n,t){"use strict";var r=t(6),a=t.n(r),c=t(10),u=t(1),o=function(){return function(){var e=Object(c.a)(a.a.mark((function e(n){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(i()),e.next=4,fetch("/api/messages",{method:"GET",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"}});case 4:return t=e.sent,e.next=7,t.json();case 7:r=e.sent,n(s(r.data)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),n(l(e.t0));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n){return e.apply(this,arguments)}}()},i=function(){return{type:u.b}},s=function(e){var n=e.filter((function(e){return e.approved}));return{type:u.c,messages:n}},l=function(e){return{type:u.a,error:e}},f=function(e){return function(){var n=Object(c.a)(a.a.mark((function n(t){var r,c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t(d()),n.next=4,fetch("/api/messages/".concat(e),{method:"GET",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"}});case 4:return r=n.sent,n.next=7,r.json();case 7:if((c=n.sent).success){n.next=10;break}throw new Error;case 10:t(E(c.data)),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),t(S("Either this message doesn't exist or has been deleted."));case 16:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(e){return n.apply(this,arguments)}}()},d=function(){return{type:u.e}},E=function(e){return{type:u.f,message:e}},S=function(e){return{type:u.d,error:e}},p=function(){return{type:u.u}},m=function(e){return function(){var n=Object(c.a)(a.a.mark((function n(t){var r,c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t(h()),n.next=4,fetch("/api/messages",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 4:return r=n.sent,n.next=7,r.json();case 7:c=n.sent,t(g(c)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),t(_(n.t0));case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()},h=function(){return{type:u.E}},g=function(e){return{type:u.F,message:e}},_=function(e){return{type:u.C,error:e.message}},O=function(){return{type:u.D}},b=function(e,n,t,r){return function(a){try{a(C()),a(y(e,n)),a(v()),r&&a(G(t))}catch(c){a(A(c))}}},j=function(e,n,t,r){return function(a){try{a(C()),a(T(e,n)),a(v()),r&&a(G(t))}catch(c){a(A(c))}}},y=function(e,n){return{type:u.h,filter:e,name:n}},T=function(e,n){return{type:u.j,filter:e,name:n}},v=function(){return{type:u.g}},C=function(){return{type:u.k}},A=function(e){return{type:u.i,error:e}},R=function(e,n){return function(t){try{t(F()),t(x(e)),t(G(n))}catch(r){t(k(r))}}},w=function(e,n){return function(t){try{t(F()),t(M(e)),t(G(n))}catch(r){t(k(r))}}},x=function(e){return{type:u.x,filter:e}},M=function(e){return{type:u.z,filter:e}},G=function(e){return{type:u.w,filtered:e}},F=function(){return{type:u.A}},k=function(e){return{type:u.y,error:e}},I=function(){return function(){var e=Object(c.a)(a.a.mark((function e(n){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n(L());case 3:return e.next=5,fetch("/api/persons",{method:"GET",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"}});case 5:return t=e.sent,e.next=8,t.json();case 8:return r=e.sent,e.next=11,n(N(r.data));case 11:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(0),e.next=17,n(B(e.t0));case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n){return e.apply(this,arguments)}}()},L=function(){return{type:u.o}},N=function(e){return{type:u.p,persons:e}},B=function(e){return{type:u.m,error:e.message}},U=function(){return function(){var e=Object(c.a)(a.a.mark((function e(n){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n(D());case 3:return e.next=5,fetch("/api/resources",{method:"GET",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"}});case 5:return t=e.sent,e.next=8,t.json();case 8:return r=e.sent,e.next=11,n(H(r.data));case 11:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(0),e.next=17,n(P(e.t0));case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n){return e.apply(this,arguments)}}()},D=function(){return{type:u.s}},H=function(e){return{type:u.t,resources:e}},P=function(e){return{type:u.q,error:e.message}};t.d(n,"d",(function(){return o})),t.d(n,"c",(function(){return f})),t.d(n,"i",(function(){return p})),t.d(n,"k",(function(){return m})),t.d(n,"l",(function(){return O})),t.d(n,"a",(function(){return b})),t.d(n,"g",(function(){return j})),t.d(n,"b",(function(){return R})),t.d(n,"h",(function(){return w})),t.d(n,"j",(function(){return G})),t.d(n,"e",(function(){return I})),t.d(n,"f",(function(){return U}))},31:function(e,n,t){"use strict";var r=t(0),a=t.n(r),c=t(38),u=t.n(c);n.a=function(){return a.a.createElement("div",{className:u.a.loader})}},38:function(e,n,t){e.exports={loader:"FormSpinner_loader__Ac1sN",load8:"FormSpinner_load8__27LER"}},41:function(e,n,t){e.exports={ContentContainer:"Layout_ContentContainer__1flrp"}},43:function(e,n,t){e.exports=t(60)},49:function(e,n,t){},59:function(e,n,t){},60:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(22),u=t.n(c),o=(t(48),t(49),t(12)),i=t(25),s=t(21),l=t(31),f=t(16),d=t.n(f),E=t(34),S=t(35),p=Object(o.g)((function(e){return a.a.createElement(E.a,{icon:S.a,size:e.size,style:{color:"orange"},onClick:function(){return n=e.path,void e.history.push(n);var n}})})),m=t(24),h=function(e){return a.a.createElement("div",{className:d.a.ContentContainer},a.a.createElement("div",{className:d.a.HeaderContainer},a.a.createElement("span",{className:d.a.BackButton},a.a.createElement(p,{size:"2x",path:"/"})," "),a.a.createElement("span",{className:d.a.Header},"If You Were Here...")),a.a.createElement(m.a,{className:d.a.ChildrenContainer},e.children))},g=Object(o.g)((function(e){return Object(r.useEffect)((function(){var n=e.history.listen((function(){window.scrollTo(0,0)}));return function(){n()}}),[e.history]),null})),_=a.a.lazy((function(){return Promise.all([t.e(0),t.e(5),t.e(4)]).then(t.bind(null,126))})),O=a.a.lazy((function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,124))})),b=a.a.lazy((function(){return t.e(7).then(t.bind(null,125))})),j=function(e){var n=Object(s.b)();return Object(r.useEffect)((function(){Promise.all([n(Object(i.e)()),n(Object(i.d)())])}),[n]),a.a.createElement(a.a.Fragment,null,a.a.createElement(g,null),a.a.createElement(r.Suspense,{fallback:a.a.createElement(l.a,null)},a.a.createElement(o.c,null,a.a.createElement(o.a,{exact:!0,path:"/message/:id"},a.a.createElement(h,null,a.a.createElement(O,e))),a.a.createElement(o.a,{exact:!0,path:"/resources"},a.a.createElement(h,null,a.a.createElement(b,e))),a.a.createElement(o.a,{path:"/"},a.a.createElement(_,e)))))},y=t(32),T=t(33),v=t(41),C=t.n(v),A=function(e){return a.a.createElement(m.a,{className:C.a.ContentContainer},a.a.createElement(T.a,null,a.a.createElement(y.a,null,e.children)))},R=t(17);t(59);var w=function(){return a.a.createElement(R.a,null,a.a.createElement(A,null,a.a.createElement(j,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=t(20),M=t(9),G=t(3),F=t(1),k={messages:[],filteredMessages:[],filters:{who:null,identity:null},sort:null,loading:!1,error:null},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case F.b:return Object(G.a)({},e,{loading:!0,error:null});case F.c:return Object(G.a)({},e,{messages:Object(M.a)(n.messages),loading:!1,error:null});case F.a:return Object(G.a)({},e,{loading:!1,error:"".concat(n.error)});case F.v:return{loading:!1,error:null};case F.k:return Object(G.a)({},e,{loading:!0,error:null});case F.i:return Object(G.a)({},e,{loading:!1,error:n.error});case F.h:return Object(G.a)({},e,{filters:Object(G.a)({},e.filters,Object(x.a)({},n.name,n.filter))});case F.j:return Object(G.a)({},e,{filters:Object(G.a)({},e.filters,Object(x.a)({},n.name,null))});case F.g:var t=e.filters,r=t.who,a=t.identity,c=Object(M.a)(e.messages),u=r&&a?c.filter((function(e){return e.who.name===r&&e.identity.name===a})):c.filter((function(e){return e.who.name===r||e.identity.name===a}));return Object(G.a)({},e,{filteredMessages:Object(M.a)(u),loading:!1,error:null});case F.l:return Object(G.a)({},e,{filteredMessages:[],loading:!1,error:null});case F.A:return Object(G.a)({},e,{loading:!0,error:null});case F.y:return Object(G.a)({},e,{loading:!1,error:n.error});case F.x:return Object(G.a)({},e,{sort:n.filter});case F.z:return Object(G.a)({},e,{sort:!1});case F.w:var o=n.filtered?Object(M.a)(e.filteredMessages):Object(M.a)(e.messages),i="Oldest"===e.sort?o.sort((function(e,n){return new Date(e.createdAt)-new Date(n.createdAt)})):o.sort((function(e,n){return new Date(n.createdAt)-new Date(e.createdAt)}));return Object(G.a)({},e,{filteredMessages:Object(M.a)(i),loading:!1,error:null});case F.B:return Object(G.a)({},e,{sort:null,loading:!1,error:null});default:return e}},L={currentMessage:null,messageSuccess:null,setSuccess:null,loading:!1,error:null},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case F.e:return Object(G.a)({},e,{loading:!0});case F.f:return Object(G.a)({},e,{currentMessage:n.message,loading:!1});case F.d:return Object(G.a)({},e,{loading:!1,currentMessage:null,error:"".concat(n.error)});case F.u:return Object(G.a)({},e,{currentMessage:null,error:null,loading:!1});case F.E:return Object(G.a)({},e,{loading:!0,error:null});case F.F:return Object(G.a)({},e,{messageSuccess:!0,loading:!0});case F.C:return Object(G.a)({},e,{loading:!1,error:n.error});case F.D:return Object(G.a)({},e,{loading:!1,error:null,messageSuccess:null});default:return e}},B={persons:[],loading:!1,error:null},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case F.o:return Object(G.a)({},e,{loading:!0});case F.p:return Object(G.a)({},e,{persons:Object(M.a)(n.persons),loading:!1});case F.m:return Object(G.a)({},e,{loading:!1,error:n.error});case F.n:return Object(G.a)({},e,{loading:!1,error:null});default:return e}},D={resources:[],loading:!1,error:null},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case F.s:return Object(G.a)({},e,{loading:!0});case F.t:return Object(G.a)({},e,{resources:Object(M.a)(n.resources),loading:!1});case F.q:return Object(G.a)({},e,{loading:!1,error:n.error});case F.r:return Object(G.a)({},e,{loading:!1,error:null});default:return e}},P=t(13),z=t(42),V=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||P.d,q=Object(P.c)({messages:I,message:N,persons:U,resources:H}),J=Object(P.e)(q,V(Object(P.a)(z.a))),W=a.a.createElement(s.a,{store:J},a.a.createElement(w,null));u.a.render(W,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,2,3]]]);
//# sourceMappingURL=main.95889094.chunk.js.map