(this.webpackJsonpdongtalk=this.webpackJsonpdongtalk||[]).push([[0],{123:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),c=a.n(o),s=a(58),i=a(22),l=a(94),u=(a(123),a(35)),d=a(16),m=a(11),j="menu/RX_AUTHENTICATED",b="menu/RX_ALL_USERS",f="menu/RX_ME",p="menu/RX_CONNECTED",h="menu/RX_MYROOMLIST",g="menu/RX_ALLROOMLIST",x="menu/RX_ALLMSGLIST",O="menu/RX_FOCUSMSG",v="menu/RX_REMOVE",y="menu/RX_FOCUSROOM",w="menu/RX_LOADING1",_="menu/RX_LOADING2",C="menu/RX_LOADING3",k=function(e){return{type:O,result:e}},S=function(e){return{type:y,result:e}},N={authenticated:!1,all_users:[],me:{},all_connected:"",myroomlist:[],allroomlist:[],allmsglist:[],focusmsg:[],focusroom:"",loading1:!1,loading2:!1,loading3:!1};var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(m.a)(Object(m.a)({},e),{},{authenticated:t.result});case b:return Object(m.a)(Object(m.a)({},e),{},{all_users:t.result});case f:return Object(m.a)(Object(m.a)({},e),{},{me:t.result});case p:return Object(m.a)(Object(m.a)({},e),{},{all_connected:t.result});case h:return Object(m.a)(Object(m.a)({},e),{},{myroomlist:t.result});case g:return Object(m.a)(Object(m.a)({},e),{},{allroomlist:t.result});case x:return Object(m.a)(Object(m.a)({},e),{},{allmsglist:t.result});case O:return Object(m.a)(Object(m.a)({},e),{},{focusmsg:t.result});case v:return Object(m.a)(Object(m.a)({},e),{},{focusmsg:e.focusmsg.filter((function(e){return e.key!==t.key}))});case y:return Object(m.a)(Object(m.a)({},e),{},{focusroom:t.result});case w:return Object(m.a)(Object(m.a)({},e),{},{loading1:t.result});case _:return Object(m.a)(Object(m.a)({},e),{},{loading2:t.result});case C:return Object(m.a)(Object(m.a)({},e),{},{loading3:t.result});default:return e}},I=a(61);a(135),a(124),a(126);I.a.initializeApp({apiKey:"AIzaSyAtKM1gMUkzx8Al9G5Y6jozCsTTezqmo4M",authDomain:"dongtalk-82851.firebaseapp.com",databaseURL:"https://dongtalk-82851-default-rtdb.firebaseio.com",projectId:"dongtalk-82851",storageBucket:"dongtalk-82851.appspot.com",messagingSenderId:"63820293757",appId:"1:63820293757:web:1d2960afd6d6ddf589b314",measurementId:"G-E7K9VBW4D0"});var A=I.a,D=I.a.auth(),E=(I.a.firestore(),I.a.database());function U(e){if(!0===e){var t=D.currentUser.uid,a=E.ref("UsersConnection/".concat(t));E.ref(".info/connected").on("value",(function(e){!0===e.val()?(console.log("connected"),a.set({connection:!0,uid:t})):(console.log("not connected"),a.set({connection:!1,uid:t}))})),a.onDisconnect().set({connection:!1,uid:t})}}function T(e){console.log("member",e),D.setPersistence(A.auth.Auth.Persistence.SESSION).then((function(){return console.log("\ub85c\uadf8\uc778 \uc720\uc9c0 \uc911"),D.signInWithEmailAndPassword(e.email,e.password)})).catch((function(e){console.log("\ub85c\uadf8\uc778 \uc720\uc9c0 \uc2e4\ud328");var t=e.code,a=e.message;console.log("errorCode",t),console.log("errorMessage",a)}))}function B(e,t){if(""!==t){var a=E.ref("msg/".concat(t)).push().key,n={message:e.message,timestamp:e.timestamp,uid:e.uid,avatar:e.avatar,key:a,name:e.name},r={};return r["msg/".concat(t,"/").concat(a)]=n,E.ref().update(r)}alert("\ubc29\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694")}function L(e){return D.signInWithEmailAndPassword(e.email,e.password).then((function(){console.log("signIn()\ub85c\uadf8\uc778\uc131\uacf5")})).catch((function(e){console.log("signIn()\uc2e4\ud328")}))}function M(e){return D.createUserWithEmailAndPassword(e.email,e.password).then((function(){console.log("signUp()\uac00\uc785\uc131\uacf5",e.email,e.password);var t=E.ref("all_users").push().key,a={email:e.email,name:e.name,password:e.password,uid:D.currentUser.uid,avatar:e.avatar,key:t},n={};return n["/all_users/"+t]=a,E.ref().update(n)})).catch((function(e){alert("The email address is already in use by another account."===e.message&&"\uc774\ubbf8 \uc788\ub294 \uc544\uc774\ub514\uc785\ub2c8\ub2e4.")}))}function W(e,t){if(""!==e){var a=e.filter((function(e){return e.uid===t}));return a.length>0&&a[0].connection}}var F=a(76),X=a(4);var z=function(e){var t=e.component,a=e.authenticated,n=Object(F.a)(e,["component","authenticated"]);return Object(X.jsx)(d.b,Object(m.a)(Object(m.a)({},n),{},{render:function(e){return!1===a?Object(X.jsx)(t,Object(m.a)({},e)):Object(X.jsx)(d.a,{to:"/chat"})}}))};var P=function(e){var t=e.component,a=e.authenticated,n=Object(F.a)(e,["component","authenticated"]);return Object(X.jsx)(d.b,Object(m.a)(Object(m.a)({},n),{},{render:function(e){return!0===a?Object(X.jsx)(t,Object(m.a)({},e)):Object(X.jsx)(d.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},Y=a(43),G=a.n(Y),q=a(57),J=a(56),V=a(42),$=a(174),H=a(62),K=a(173),Z=a(175),Q=a(176),ee=a(196),te=a(177),ae=a(191),ne=a(178),re=a(197),oe=a(181),ce=a(193),se=a(192),ie=a(73),le=a.n(ie);function ue(){return Object(X.jsxs)(H.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(X.jsx)(K.a,{component:u.b,to:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var de=Object($.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));var me=function(){var e=de(),t=Object(n.useState)({email:"",name:"",password:"",avatar:""}),a=Object(V.a)(t,2),r=a[0],o=a[1],c=function(e){var t=e.target,a=t.name,n=t.value;o(Object(m.a)(Object(m.a)({},r),{},Object(J.a)({},a,n)))};console.log(r);var s=function(){var e=Object(q.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),""!==r.email&&""!==r.password&&""!==r.name&&M(r);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function i(e){var t=new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);return!(e.length>0)||t.test(e)}function l(e){var t=new RegExp(/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/g);return!(e.length>0)||t.test(e)}function d(e){var t=new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);return!(e.length>0)||t.test(e)}return Object(X.jsxs)(Z.a,{component:"main",maxWidth:"xs",children:[Object(X.jsx)(Q.a,{}),Object(X.jsxs)("div",{className:e.paper,children:[Object(X.jsx)(ee.a,{className:e.avatar,children:Object(X.jsx)(le.a,{})}),Object(X.jsx)(H.a,{component:"h1",variant:"h5",children:"\ud68c\uc6d0 \uac00\uc785"}),Object(X.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:s,children:[Object(X.jsxs)(te.a,{container:!0,spacing:2,children:[Object(X.jsx)(te.a,{item:!0,xs:12,children:Object(X.jsx)(ae.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:r.email,onChange:c,error:!i(r.email),helperText:!i(r.email)&&"emali \ud615\uc2dd\uc5d0 \ub9de\uac8c \uc785\ub825\ud574\uc8fc\uc138\uc694."})}),Object(X.jsx)(te.a,{item:!0,xs:12,children:Object(X.jsx)(ae.a,{variant:"outlined",required:!0,fullWidth:!0,id:"name",label:"name",name:"name",autoComplete:"name",value:r.name,onChange:c,error:!l(r.name),helperText:!l(r.name)&&"\ud55c\uae00\ub9cc \uc785\ub825\ud574\uc8fc\uc138\uc694."})}),Object(X.jsx)(te.a,{item:!0,xs:12,children:Object(X.jsx)(ae.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:r.password,onChange:c,error:!d(r.password),helperText:!d(r.password)&&"password\ub294 \ucd5c\uc18c 8 \uc790, \ucd5c\uc18c \ud558\ub098\uc758 \ubb38\uc790 \ubc0f \ud558\ub098\uc758 \uc22b\uc790"})}),Object(X.jsx)(te.a,{item:!0,xs:12,children:Object(X.jsxs)("div",{children:[Object(X.jsx)(ne.a,{component:"legend",children:"Avatar"}),Object(X.jsxs)(re.a,{"aria-label":"gender",name:"avatar",value:r.avatar,onChange:c,style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:[Object(X.jsx)(oe.a,{value:"https://material-ui.com/static/images/avatar/1.jpg",control:Object(X.jsx)(ce.a,{}),label:Object(X.jsx)(ee.a,{alt:"Remy Sharp",src:"https://material-ui.com/static/images/avatar/1.jpg"})}),Object(X.jsx)(oe.a,{value:"https://material-ui.com/static/images/avatar/2.jpg",control:Object(X.jsx)(ce.a,{}),label:Object(X.jsx)(ee.a,{alt:"Remy Sharp",src:"https://material-ui.com/static/images/avatar/2.jpg"})}),Object(X.jsx)(oe.a,{value:"https://material-ui.com/static/images/avatar/3.jpg",control:Object(X.jsx)(ce.a,{}),label:Object(X.jsx)(ee.a,{alt:"Remy Sharp",src:"https://material-ui.com/static/images/avatar/3.jpg"})})]})]})})]}),Object(X.jsx)(K.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"\uac00\uc785\ud558\uae30"}),Object(X.jsx)(te.a,{container:!0,justifyContent:"flex-end",children:Object(X.jsxs)(te.a,{item:!0,children:["\uc774\ubbf8 \ud68c\uc6d0\uc774\uc2e0\uac00?"," ",Object(X.jsx)(K.a,{component:u.b,to:"/login",children:"\ub85c\uadf8\uc778"})]})})]})]}),Object(X.jsx)(se.a,{mt:5,children:Object(X.jsx)(ue,{})})]})};function je(){return Object(X.jsxs)(H.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(X.jsx)(K.a,{component:u.b,to:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var be=Object($.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var fe=function(){var e=be(),t=Object(n.useState)({email:"",password:""}),a=Object(V.a)(t,2),r=a[0],o=a[1],c=function(e){var t=e.target,a=t.name,n=t.value;o(Object(m.a)(Object(m.a)({},r),{},Object(J.a)({},a,n)))},s=function(){var e=Object(q.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),""!==r.email&&""!==r.password&&L(r);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function i(e){var t=new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);return!(e.length>0)||t.test(e)}return Object(X.jsxs)(Z.a,{component:"main",maxWidth:"xs",children:[Object(X.jsx)(Q.a,{}),Object(X.jsxs)("div",{className:e.paper,children:[Object(X.jsx)(ee.a,{className:e.avatar,children:Object(X.jsx)(le.a,{})}),Object(X.jsx)(H.a,{component:"h1",variant:"h5",children:"\ub85c\uadf8\uc778"}),Object(X.jsxs)("form",{className:e.form,onSubmit:s,noValidate:!0,children:[Object(X.jsx)(ae.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694.",name:"email",autoComplete:"email",autoFocus:!0,value:r.email,onChange:c,error:!i(r.email),helperText:!i(r.email)&&"emali \uc81c\ub300\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694."}),Object(X.jsx)(ae.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:r.password,onChange:c,error:!1,helperText:!1}),Object(X.jsx)(K.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign In"}),Object(X.jsxs)(te.a,{container:!0,children:[Object(X.jsx)(te.a,{item:!0,xs:!0}),Object(X.jsx)(te.a,{item:!0,children:Object(X.jsx)(K.a,{component:u.b,to:"/signup",children:"\ud68c\uc6d0\uac00\uc785"})})]})]})]}),Object(X.jsx)(se.a,{mt:8,children:Object(X.jsx)(je,{})})]})},pe=a(179),he=a(189),ge=a(186),xe=a(7),Oe=a(182),ve=a(183),ye=a(184),we=a(185),_e=Object(xe.a)((function(e){return{badge:{backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px ".concat(e.palette.background.paper),"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"$ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}}))(Oe.a),Ce=Object(i.b)(null,(function(e){return{rx_focusroom:function(t){e(S(t))},rx_focusmsg:function(t){e(k(t))}}}))((function(e){var t=e.text,a=e.sub,n=e.uid,r=e.avatar,o=e.msg_key,c=e.me,s=e.invisible,i=e.event,l=e.rx_focusroom,u=e.rx_focusmsg;return Object(X.jsxs)("li",{style:{display:o?"flex":"block"},children:[Object(X.jsxs)(ve.a,{button:!0,onClick:function(){return i(o||n)},children:[Object(X.jsx)(ye.a,{children:Object(X.jsx)(_e,{invisible:s,overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",children:Object(X.jsx)(ee.a,{alt:"Remy Sharp",src:r})})}),Object(X.jsx)(we.a,{primary:t,secondary:a})]}),o&&Object(X.jsx)(K.a,{onClick:function(){return function(e,t,a,n){var r=prompt("\ubcf8\uc778\uc758 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694");t.password===r?(E.ref("room/".concat(e)).remove(),E.ref("msg/".concat(e)).remove(),a(""),n([]),alert("\uc0ad\uc81c\uac00 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")):alert("\ube44\ubc00\ubc88\ud638\uac00 \ud2c0\ub824\uc11c \uc0ad\uc81c \ubd88\uac00\ud569\ub2c8\ub2e4")}(o,c,l,u)},children:"\uc0ad\uc81c"})]})})),ke=a(180),Se=a(187),Ne=Object($.a)((function(e){return{root:{},list:{height:"240px",overflowY:"scroll"},divider:{}}})),Re=Object(i.b)((function(e){return{all_users:e.chats.all_users,all_connected:e.chats.all_connected,me:e.chats.me[0]}}),null)((function(e){var t=e.title,a=e.data,r=e.event,o=e.all_users,c=e.all_connected,s=e.me,i=e.loading,l=Ne();function u(e){return void 0!==e&&o.length>0&&o.filter((function(t){return t.uid===e}))[0].name}return Object(n.useEffect)((function(){console.log("[\ud45c\uc2dc]FriendList.js")}),[]),Object(X.jsxs)(se.a,{className:l.root,children:[Object(X.jsx)(ge.a,{children:t}),Object(X.jsxs)(ke.a,{className:l.list,children:[i&&Object(X.jsx)(se.a,{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(X.jsx)(Se.a,{color:"secondary"})}),a.length>0?a.map((function(e,t){return Object(X.jsx)(Ce,{invisible:!W(c,e.uid),text:Array.isArray(e.uid)?e.uid.map((function(e,t){return t>0?"/".concat(u(e)):u(e)})):u(e.uid),sub:void 0===e.email?"1:1 \ub300\ud654\ubc29":e.email,uid:e.uid,avatar:e.avatar,msg_key:e.msg_key,me:s,event:r},t)})):Object(X.jsx)("li",{children:"\ub9ac\uc2a4\ud2b8\uac00\uc5c6\uc2b5\ub2c8\ub2e4."})]})]})})),Ie=a(190),Ae=a(188),De=a(195),Ee=a(99),Ue=a.n(Ee),Te=a(78),Be=["username@gmail.com","user02@gmail.com"],Le=Object($.a)({avatar:{backgroundColor:Te.a[100],color:Te.a[600]}});function Me(e){var t=Le(),a=e.onClose,n=e.selectedValue,r=e.open,o=e.data,c=e.focusroom;return console.log("\uae4c\ub974\ub974\ub974\uad81",o),Object(X.jsxs)(De.a,{onClose:function(){a(n),console.log("\uae4c\ub974\ub974\ub974\uad81",o)},"aria-labelledby":"simple-dialog-title",open:r,children:[Object(X.jsx)(Ae.a,{id:"simple-dialog-title",children:"Set backup account"}),Object(X.jsx)(ke.a,{children:o.length>0?o.map((function(e,n){return Object(X.jsxs)(ve.a,{button:!0,onClick:function(){return t=e.uid,E.ref("room/".concat(c,"/uid")).once("value").then((function(e){var a=e.val();a.includes(t)?alert("\uc774\ubbf8 \ucd94\uac00\ub41c \uce5c\uad6c\uc785\ub2c8\ub2e4."):(a.push(t),E.ref("room/".concat(c)).update({uid:a}).then((function(){console.log("\uce5c\ucd94 \uc644\ub8cc",a)})).catch((function(e){console.log("\uce5c\ucd94 \uc2e4\ud328")})))})),void a(!1);var t},children:[Object(X.jsx)(ye.a,{children:Object(X.jsx)(ee.a,{className:t.avatar,children:Object(X.jsx)(Ue.a,{})})}),Object(X.jsx)(we.a,{primary:e.email})]},n)})):Object(X.jsx)("li",{children:"\ub9ac\uc2a4\ud2b8\uac00\uc5c6\uc2b5\ub2c8\ub2e4."})})]})}var We=Object(i.b)((function(e){return{all_users:e.chats.all_users,focusroom:e.chats.focusroom}}),null)((function(e){var t=e.all_users,a=e.focusroom,n=r.a.useState(!1),o=Object(V.a)(n,2),c=o[0],s=o[1],i=r.a.useState(Be[1]),l=Object(V.a)(i,2),u=l[0],d=l[1];return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(K.a,{variant:"outlined",color:"primary",onClick:function(){s(!0)},children:"\uce5c\uad6c\ucd94\uac00"}),Object(X.jsx)(Me,{data:t,focusroom:a,selectedValue:u,open:c,onClose:function(e){s(!1),d(e)}})]})})),Fe=Object($.a)((function(e){return{lBox:{flexDirection:"row-reverse",display:"flex",textAlign:"right"},rBox:{flexDirection:"row-reverse",display:"flex",textAlign:"right"},appBar:{top:"auto",bottom:0,left:0,width:"100%","& input,& button":{width:"100%",height:"50px"}},listBox:{display:"flex",flexDirection:"column"},listBoxItem:{display:"block"},listBoxItemavatar:{display:"flex"}}})),Xe=Object(i.b)((function(e){return{focusroom:e.chats.focusroom}}),(function(e){return{rx_remove:function(t){e({type:v,key:t})}}}))((function(e){var t=e.focusmsg,a=e.focusroom,o=e.rx_remove,c=e.loading,s=Fe();console.log("Message-focusroom",a);var i=Object(n.useRef)(null);return Object(n.useEffect)((function(){console.log("[\ud45c\uc2dc]Message.js"),function(){var e=i.current.scrollHeight-i.current.clientHeight;i.current.scrollTo(0,e)}()}),[t,a]),Object(X.jsxs)(se.a,{style:{height:"577px",overflowY:"scroll",paddingBottom:"15%"},ref:i,children:[c&&Object(X.jsx)(se.a,{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(X.jsx)(Se.a,{color:"secondary"})}),Object(X.jsxs)(ge.a,{style:{display:"flex",justifyContent:"space-between",backgroundColor:"#fff"},children:["\ucc44\ud305\ubc29",""!==a&&Object(X.jsx)(We,{})]}),Object(X.jsx)(ke.a,{className:s.listBox,children:t.length>0?t.map((function(e,t){return Object(X.jsx)(ve.a,{className:s.listBoxItem,children:Object(X.jsxs)(se.a,{style:{display:"flex",flexDirection:D.currentUser.uid===e.uid?"row-reverse":"row",textAlign:D.currentUser.uid===e.uid?"right":"left"},children:[Object(X.jsx)(ye.a,{className:s.listBoxItemavatar,style:{justifyContent:D.currentUser.uid===e.uid?"flex-end":"flex-start"},children:Object(X.jsx)(ee.a,{alt:"Remy Sharp",src:e.avatar})}),Object(X.jsx)(we.a,{primary:e.name,secondary:Object(X.jsxs)(r.a.Fragment,{children:[Object(X.jsx)(H.a,{component:"span",variant:"body2",color:"textPrimary",style:{wordBreak:"break-all"},children:e.message}),Object(X.jsx)("br",{}),Ie.a(e.timestamp,"yyyy-MM-dd-HH-mm-ss")]})}),Object(X.jsx)(K.a,{style:{display:D.currentUser.uid!==e.uid?"none":"inline-flex"},onClick:function(){return function(e,t,a){E.ref("msg/".concat(e,"/").concat(t)).remove(),a(t),console.log("[\uba54\uc2dc\uc9c0 \uc0ad\uc81c]removeChats",e,t)}(a,e.key,o)},children:"\uc0ad\uc81c"})]})},t)})):Object(X.jsx)("li",{children:"\ub9ac\uc2a4\ud2b8\uac00\uc5c6\uc2b5\ub2c8\ub2e4."})})]})})),ze=a(100),Pe=a.n(ze),Ye=Object($.a)((function(e){return{InputBox:{display:"flex",backgroundColor:"#fff",position:"absolute",bottom:"0",width:"93%",margin:"2%",padding:"2%",boxShadow:"1px 1px 5px #a0a0a0",borderRadius:"5px",justifyContent:"space-between"},button:{margin:e.spacing(1)}}})),Ge=Object(i.b)((function(e){return{focusroom:e.chats.focusroom,me:e.chats.me[0]}}),null)((function(e){var t=e.focusroom,a=e.me,r=Ye(),o=Object(n.useState)(""),c=Object(V.a)(o,2),s=c[0],i=c[1],l=function(){var e=Object(q.a)(G.a.mark((function e(n){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),i(""),B({message:s,timestamp:Date.now(),uid:D.currentUser.uid,avatar:a.avatar,name:null===D.currentUser.displayName?a.name:D.currentUser.displayName},t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(X.jsx)("form",{onSubmit:l,children:Object(X.jsxs)(se.a,{className:r.InputBox,children:[Object(X.jsx)(ae.a,{id:"outlined-basic",label:"\uba54\uc2dc\uc9c0",value:s,onChange:function(e){i(e.target.value)},style:{width:"100%"}}),Object(X.jsx)(K.a,{variant:"contained",color:"primary",type:"submit",className:r.button,endIcon:Object(X.jsx)(Pe.a,{}),children:"Send"})]})})})),qe=Object($.a)((function(e){return{root:{},chat_wrap:{width:"100%",backgroundColor:e.palette.background.paper,height:"577px"}}})),Je=Object(i.b)((function(e){return{all_users:e.chats.all_users,myroomlist:e.chats.myroomlist,allroomlist:e.chats.allroomlist,me:e.chats.me[0],focusroom:e.chats.focusroom,allmsglist:e.chats.allmsglist,focusmsg:e.chats.focusmsg,loading1:e.chats.loading1,loading2:e.chats.loading2,loading3:e.chats.loading3}}),(function(e){return{rx_all_users:function(t){e({type:b,result:t})},rx_me:function(t){e({type:f,result:t})},rx_myroomlist:function(t){e({type:h,result:t})},rx_allroomlist:function(t){e({type:g,result:t})},rx_focusroom:function(t){e(S(t))},rx_allmsglist:function(t){e({type:x,result:t})},rx_connected:function(t){e({type:p,result:t})},login_maintain:function(t){e(T(t))},rx_focusmsg:function(t){e(k(t))},rx_loading1:function(t){e({type:w,result:t})},rx_loading2:function(t){e({type:_,result:t})},rx_loading3:function(t){e({type:C,result:t})}}}))((function(e){var t=e.rx_all_users,a=e.all_users,o=e.rx_me,c=e.me,s=e.rx_myroomlist,i=e.myroomlist,l=e.rx_allroomlist,u=e.allroomlist,d=e.rx_focusroom,m=e.focusroom,j=e.rx_allmsglist,b=e.rx_connected,f=e.allmsglist,p=e.rx_focusmsg,h=e.focusmsg,g=e.rx_loading1,x=e.rx_loading2,O=e.rx_loading3,v=e.loading1,y=e.loading2,w=e.loading3,_=qe();return Object(n.useEffect)((function(){console.log("[\ud45c\uc2dc]Chat.js"),function(e){E.ref("UsersConnection").on("value",(function(t){console.log("sfajklas",Object.values(t.val())),e(Object.values(t.val()))}))}(b),g(!0),x(!0),O(!0),function(e,t,a){E.ref("all_users").on("value",(function(n){var r=Object.values(n.val());e(r),console.log("response",r);var o=r.filter((function(e){return e.uid.includes(D.currentUser.uid)}));t(o),T(o[0]),console.log("me",o),a(!1)}))}(t,o,g),function(e,t,a){E.ref("room").on("value",(function(n){if(null!==n.val()){var r=Object.values(n.val());console.log("roomListBox",r),e(r);var o=r.filter((function(e){return e.uid.some((function(e){return e===D.currentUser.uid}))}));t(o),console.log("found",o)}else console.log("else"),e([]),t([]);a(!1)}))}(l,s,x),function(e,t){E.ref("msg").on("value",(function(a){if(null!==a.val()){var n=a.val();e(n)}t(!1)}))}(j,O)}),[]),Object(n.useEffect)((function(){f[m]?p(Object.values(f[m])):p([])}),[f,m]),Object(X.jsxs)(r.a.Fragment,{children:[Object(X.jsx)(Q.a,{}),Object(X.jsx)(Z.a,{maxWidth:"md",className:_.root,children:Object(X.jsx)(pe.a,{className:_.chat_wrap,elevation:1,children:Object(X.jsxs)(te.a,{container:!0,spacing:0,children:[Object(X.jsxs)(te.a,{item:!0,xs:12,sm:4,className:_.sectionDesktop,children:[Object(X.jsx)(Re,{title:"\uc804\uccb4 \uce5c\uad6c \ub9ac\uc2a4\ud2b8",data:a,loading:v,event:function(e){!function(e,t,a){var n=[e.uid,t],r=[e.uid,t].sort();console.log("handleFriend",n[0],n[1]),console.log(a);var o=JSON.parse(JSON.stringify(a));if(!(o=o.some((function(e){return JSON.stringify(e.uid.sort())===JSON.stringify(r)})))){var c=E.ref("room").push().key,s={uid:[e.uid,t],name:[],avatar:e.avatar,msg_key:c},i={};return i["/room/"+c]=s,E.ref().update(i)}alert("\uc774\ubbf8 \ubc29\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4.")}(c,e,u)}}),Object(X.jsx)(he.a,{}),Object(X.jsx)(Re,{title:"\ub098\uc758 \ubc29 \ub9ac\uc2a4\ud2b8",data:i,loading:y,event:function(e){d(e)}})]}),Object(X.jsxs)(te.a,{item:!0,xs:12,sm:8,style:{position:"relative"},children:[Object(X.jsx)(Xe,{focusmsg:h,loading:w}),Object(X.jsx)(Ge,{})]})]})})})]})}));var Ve=Object(i.b)((function(e){return{authenticated:e.chats.authenticated}}),(function(e){return{rx_authenticated:function(t){e({type:j,result:t})}}}))((function(e){var t=e.rx_authenticated,a=e.authenticated;return Object(n.useEffect)((function(){console.log("[\ud45c\uc2dc]App.js"),function(e){D.onAuthStateChanged((function(t){t?(console.log("App/\ub85c\uadf8\uc778",t),U(!0),e(!0)):(console.log("App/\ub85c\uadf8\uc544\uc6c3",t),U(!1),e(!1))}))}(t)}),[]),Object(X.jsxs)(u.a,{children:[Object(X.jsxs)(d.d,{children:[Object(X.jsx)(P,{path:"/chat",authenticated:a,component:Je}),Object(X.jsx)(z,{path:"/signup",authenticated:a,component:me}),Object(X.jsx)(z,{path:["/","/login"],authenticated:a,component:fe})]}),a&&Object(X.jsx)("button",{onClick:function(){E.ref("UsersConnection/".concat(D.currentUser.uid)).set({connection:!1,uid:D.currentUser.uid}),D.signOut().then((function(){console.log("\ub85c\uadf8\uc544\uc6c3 \uc131\uacf5")})).catch((function(e){console.log("\ub85c\uadf8\uc544\uc6c3 \uc2e4\ud328")}))},children:"\ub85c\uadf8\uc544\uc6c3"})]})})),$e=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,200)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)}))},He=Object(s.combineReducers)({chats:R}),Ke=a(101),Ze=Object(Ke.createLogger)(),Qe=Object(s.createStore)(He,Object(l.composeWithDevTools)(Object(s.applyMiddleware)(Ze)));c.a.render(Object(X.jsx)(i.a,{store:Qe,children:Object(X.jsx)(Ve,{})}),document.getElementById("root")),$e()}},[[134,1,2]]]);
//# sourceMappingURL=main.05b1b184.chunk.js.map