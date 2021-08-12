(this["webpackJsonpminecraft-server-app"]=this["webpackJsonpminecraft-server-app"]||[]).push([[0],{113:function(e,t){},114:function(e,t){},144:function(e,t,n){"use strict";n.r(t);var a=n(11),c=n.n(a),r=n(18),o=n(47),i=n(82),s=n(83),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_NAMES":return t.data;default:return e}},j=n(91),u=n(22),d=n.n(u),b=n(36),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log("ACTION.DATA: ",t.data),t.type){case"GET_DATA":return[].concat(Object(j.a)(e),[t.data]);default:return e}},O=function(e){return{type:"SET_FILTER",data:e}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"NO_FILTER",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TEXT_FILTER":case"SET_FILTER":case"NO_FILTER":return t.data;default:return e}},p=Object(o.combineReducers)({names:l,data:f,filter:h}),x=Object(o.createStore)(p,Object(s.composeWithDevTools)(Object(o.applyMiddleware)(i.a))),m=n(41),v=n(0),g=n(61),y=n(44),T=n.n(y),A="https://fast-thicket-91718.herokuapp.com/api",E=function(e){return!1===e.online?"N/A":e.players.online},k=function(e){return!1===e.online?"N/A":e.players.max},L=function(e){return!0===e?"yes":"no"},w=function(e){if(null!==e){var t=new Date(e),n=t.getDate(),a=t.getMonth()+1;return n<10&&(n="0"+n),a<10&&(a="0"+a),a+"/"+n+"/"+t.getFullYear()}return"N/A"},I={fetchData:function(){var e=Object(b.a)(d.a.mark((function e(t){var n,a,c,r,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetchData name: ",t),e.next=3,T.a.get("".concat(A,"/serverinfo/").concat(t));case 3:return n=e.sent,a=n.data,e.next=7,T.a.get("".concat(A,"/blockinfo/").concat(t));case 7:return c=e.sent,r=c.data,console.log("fetch data: ",a,r),o={name:t,hostname:a.hostname,online:(i=a.online,!0===i?"yes":"no"),ip:a.ip,version:a.version||"N/A",playersOnline:E(a),playersMax:k(a),blocked:L(r.blocked),blockTime:w(r.lastBlocked),offlineMode:"N/A"},console.log("allData: ",o),e.abrupt("return",o);case 13:case"end":return e.stop()}var i}),e)})));return function(t){return e.apply(this,arguments)}}()},R=n(181),N=n(188),F=n(189),_=n(183),C=n(190),S=n(191),D=n(186),B=n(184),M=n(192),V=n(2),P=function(){return Object(V.jsx)("h1",{children:"Minecraft Server Audit"})},G=function(){return Object(V.jsxs)("h3",{children:["Upload CSV File w/ Server URLs in a Single Column",Object(V.jsx)("br",{}),Object(V.jsx)("a",{href:"https://api.mcsrvstat.us/",target:"_blank",rel:"noopener noreferrer",children:"Link to Server Info API"})," ",Object(V.jsx)("br",{}),Object(V.jsx)("a",{href:"https://ismyserverblocked.com/",target:"_blank",rel:"noopener noreferrer",children:"Link to Block & Offline Data API"})]})},K=n(177),U=n(88),H=n.n(U),J=function(e){var t=e.onChange;return Object(V.jsxs)(K.a,{variant:"contained",color:"primary",component:"label",children:[Object(V.jsx)("input",{type:"file",accept:".csv, .xlsx, .xls",style:{display:"none"},onChange:t,multiple:!0}),"Upload File ",Object(V.jsx)(H.a,{})]})},W=n(193),X=n(89),q=n.n(X),z=Object(R.a)((function(){return{filterTextField:{width:"33%"},filterSearch:{width:"75%"}}})),Y=function(){var e=z(),t=Object(r.b)();return Object(V.jsxs)("form",{className:e.filterSearch,noValidate:!0,autoComplete:"off",children:[Object(V.jsx)(W.a,{className:e.filterTextField,id:"standard-basic",label:"Search Names",onChange:function(e){e.preventDefault();var n=e.target.value;t(function(e){return{type:"TEXT_FILTER",data:e}}(n))}}),Object(V.jsx)(q.a,{color:"primary"})]})},Q=n(182),Z=n(195),$=n(196),ee=n(194),te=Object(R.a)((function(){return{filterCheckBox:{margin:"0 auto"}}})),ne=function(){var e=te(),t=Object(r.b)();return Object(V.jsx)(Q.a,{className:e.filterCheckBox,component:"fieldset",children:Object(V.jsxs)(Z.a,{row:!0,"aria-label":"position",name:"position",defaultValue:"top",children:[Object(V.jsx)($.a,{value:"NO_FILTER",control:Object(V.jsx)(ee.a,{color:"primary"}),label:"All",labelPlacement:"top",onClick:function(){return t(O("NO_FILTER"))}}),Object(V.jsx)($.a,{value:"BLOCKED_FILTER",control:Object(V.jsx)(ee.a,{color:"primary"}),label:"Blocked",labelPlacement:"top",onClick:function(){return t(O("BLOCKED_FILTER"))}}),Object(V.jsx)($.a,{value:"AVAILABLE_FILTER",control:Object(V.jsx)(ee.a,{color:"primary"}),label:"Available",labelPlacement:"top",onClick:function(){return t(O("AVAILABLE_FILTER"))}})]})})},ae=n(185),ce=n(90),re=n.n(ce),oe=Object(R.a)((function(){return{buttonLoading:{color:"white"}}})),ie=function(e){var t=e.hostname,n=Object(v.useState)(!1),a=Object(m.a)(n,2),c=a[0],r=a[1],o=Object(v.useState)(!1),i=Object(m.a)(o,2),s=i[0],l=i[1],j=Object(v.useState)(""),u=Object(m.a)(j,2),f=u[0],O=u[1],h=oe(),p=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,T.a.get("https://fast-thicket-91718.herokuapp.com/api/offlineinfo/".concat(t));case 4:n=e.sent,a=n.data,console.log("ACTIVE BUTTON response: ",a),a.success?a.offlineMode?O("Server is using offline mode"):(O("Server aborted the join process, it's either using online mode or a whitelist"),a.reason&&f.concat("reason was: ".concat(a.reason))):O("Error while checking offline-mode status"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),O("error connecting to server - please try again later");case 13:r(!c),l(!1);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return console.log("fetchResponse: ",f),Object(V.jsxs)(B.a,{children:[Object(V.jsx)(K.a,{variant:"contained",color:"primary",onClick:function(){return p(t)},children:s?Object(V.jsx)(ae.a,{className:h.buttonLoading}):"Active?"}),Object(V.jsx)("div",{children:Object(V.jsxs)(re.a,{isOpen:c,onRequestClose:function(){return r(!1)},ariaHideApp:!1,style:{content:{fontFamily:"Roboto",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},children:[Object(V.jsx)("h2",{children:"Active Status"}),f,Object(V.jsx)("br",{}),Object(V.jsx)("br",{}),Object(V.jsx)(K.a,{variant:"outlined",color:"secondary",size:"small",onClick:function(){return r(!c)},children:"close"})]})})]})},se=Object(R.a)((function(){return{hidden:{display:"none"},rows:{backgroundColor:"white"}}})),le=function(e){var t=e.data,n=e.loading;console.log("DATAROW DATA: ",t);var a=se(),c=n?a.hidden:a.rows;return Object(V.jsxs)(D.a,{className:"".concat(c),children:[Object(V.jsx)(B.a,{position:"sticky",children:t.name}),Object(V.jsx)(B.a,{children:t.hostname}),Object(V.jsx)(B.a,{children:t.online}),Object(V.jsx)(B.a,{children:t.ip}),Object(V.jsx)(B.a,{children:t.version}),Object(V.jsx)(B.a,{children:t.playersOnline}),Object(V.jsx)(B.a,{children:t.playersMax}),Object(V.jsx)(B.a,{children:t.blocked}),Object(V.jsx)(B.a,{children:t.blockTime}),Object(V.jsx)(ie,{hostname:t.hostname})]})},je=n(187),ue=Object(R.a)((function(){return{hidden:{display:"none"},rows:{backgroundColor:"white"}}})),de=function(e){var t=e.loading,n=e.name,a=ue(),c=t?a.rows:a.hidden;return Object(V.jsxs)(D.a,{className:"".concat(c),children:[Object(V.jsx)(B.a,{children:Object(V.jsx)(je.a,{})}),Object(V.jsx)(B.a,{children:Object(V.jsx)(je.a,{})}),Object(V.jsx)(B.a,{children:Object(V.jsx)(je.a,{})}),Object(V.jsx)(B.a,{children:Object(V.jsx)(je.a,{})}),Object(V.jsx)(B.a,{children:Object(V.jsx)(je.a,{})}),Object(V.jsx)(B.a,{children:Object(V.jsx)(je.a,{})}),Object(V.jsx)(B.a,{children:Object(V.jsx)(je.a,{})}),Object(V.jsx)(B.a,{children:Object(V.jsx)(je.a,{})}),Object(V.jsx)(B.a,{children:Object(V.jsx)(je.a,{})}),Object(V.jsx)(B.a,{children:Object(V.jsx)(je.a,{})})]},n)},be=Object(R.a)((function(){return{container:{fontFamily:"Roboto",border:"0"},headers:{fontStyle:"bold"},filterRow:{display:"flex",flexDirection:"row"}}})),fe=function(){var e=Object(v.useState)(!1),t=Object(m.a)(e,2),n=t[0],a=t[1],c=be(),o=Object(r.b)(),i=Object(r.c)((function(e){return e.filter})),s=Object(r.c)((function(e){return e.names})),l=Object(r.c)((function(e){return"NO_FILTER"===i?e.data:"BLOCKED_FILTER"===i?e.data.filter((function(e){return"yes"===e.blocked})):"AVAILABLE_FILTER"===i?e.data.filter((function(e){return"no"===e.blocked})):"NO_FILTER"!==i&&"BLOCKED_FILTER"!==i&&"AVAILABLE_FILTER"!==i?e.data.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())})):void 0}));Object(v.useEffect)((function(){s.map((function(e){return I.fetchData(e).then((function(e){return o(function(e){return function(){var t=Object(b.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"GET_DATA",data:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))})).catch((function(e){return console.log("error: ",e.message)}))})),console.log("firing useEffect")}),[s,o]),Object(v.useEffect)((function(){j(s,l)}));var j=function(e,t){e.length>0&&t.length>0&&e.length===t.length&&a(!1)};return console.log("App component names: ",s),console.log("App component data: ",l),console.log("loading status: ",n),Object(V.jsx)(N.a,{className:c.container,children:Object(V.jsxs)("div",{children:[Object(V.jsx)(P,{}),Object(V.jsx)(G,{}),Object(V.jsx)(J,{onChange:function(e){e.preventDefault(),a(!0);var t=e.target.files[0],n=new FileReader;n.onload=function(e){var t=e.target.result,n=g.read(t,{type:"binary"}),a=n.SheetNames[0],c=n.Sheets[a],r=g.utils.sheet_to_csv(c,{header:1});console.log("data from file upload: ",r);var i=r.split(/\r\n|\n/).filter((function(e){return""!==e&&void 0!==e}));o(function(e){return{type:"GET_NAMES",data:e}}(i))},n.readAsBinaryString(t)}}),Object(V.jsxs)("div",{className:c.filterRow,children:[Object(V.jsx)(Y,{}),Object(V.jsx)(ne,{})]}),Object(V.jsx)(F.a,{component:_.a,children:Object(V.jsxs)(C.a,{"aria-label":"Server Info",children:[Object(V.jsx)(S.a,{className:c.headers,children:Object(V.jsxs)(D.a,{children:[Object(V.jsx)(B.a,{children:"Name"}),Object(V.jsx)(B.a,{children:"Hostname"}),Object(V.jsx)(B.a,{children:"Online"}),Object(V.jsx)(B.a,{children:"Ip"}),Object(V.jsx)(B.a,{children:"Version"}),Object(V.jsx)(B.a,{children:"Players Online"}),Object(V.jsx)(B.a,{children:"Players Max"}),Object(V.jsx)(B.a,{children:"Blocked"}),Object(V.jsx)(B.a,{children:"Blocked Time"}),Object(V.jsx)(B.a,{children:"Offline Mode"})]},"headers")}),Object(V.jsxs)(M.a,{children:[s.map((function(e){return Object(V.jsx)(de,{loading:n},e)})),l.map((function(e){return Object(V.jsx)(le,{data:e,loading:n},e.name)}))]})]})})]})})};c.a.render(Object(V.jsx)(r.a,{store:x,children:Object(V.jsx)(fe,{})}),document.getElementById("root"))},66:function(e,t){}},[[144,1,2]]]);
//# sourceMappingURL=main.6c4101aa.chunk.js.map