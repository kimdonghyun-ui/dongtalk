(this.webpackJsonpdongtalk=this.webpackJsonpdongtalk||[]).push([[0],{117:function(e,t,a){},128:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),s=a(54),i=a(21),l=a(87),u=(a(117),a(32)),m=a(16),d=a(57);a(130),a(118),a(120);d.a.initializeApp({apiKey:"AIzaSyAtKM1gMUkzx8Al9G5Y6jozCsTTezqmo4M",authDomain:"dongtalk-82851.firebaseapp.com",databaseURL:"https://dongtalk-82851-default-rtdb.firebaseio.com",projectId:"dongtalk-82851",storageBucket:"dongtalk-82851.appspot.com",messagingSenderId:"63820293757",appId:"1:63820293757:web:1d2960afd6d6ddf589b314",measurementId:"G-E7K9VBW4D0"});d.a;var j=d.a.auth(),b=(d.a.firestore(),d.a.database()),p=a(12),f="menu/RX_AUTHENTICATED",h="menu/RX_ALL_USERS",O="menu/RX_ME",x="menu/RX_CONNECTED",g="menu/RX_MYROOMLIST",v="menu/RX_ALLROOMLIST",y="menu/RX_MSGLIST",w="menu/RX_REMOVE",_="menu/RX_FOCUSROOM",k={authenticated:!1,all_users:[],me:{},all_connected:"",myroomlist:[],allroomlist:[],msglist:[],focusroom:""};var C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(p.a)(Object(p.a)({},e),{},{authenticated:t.result});case h:return Object(p.a)(Object(p.a)({},e),{},{all_users:t.result});case O:return Object(p.a)(Object(p.a)({},e),{},{me:t.result});case x:return Object(p.a)(Object(p.a)({},e),{},{all_connected:t.result});case g:return Object(p.a)(Object(p.a)({},e),{},{myroomlist:t.result});case v:return Object(p.a)(Object(p.a)({},e),{},{allroomlist:t.result});case y:return Object(p.a)(Object(p.a)({},e),{},{msglist:t.result});case w:return Object(p.a)(Object(p.a)({},e),{},{msglist:e.msglist.filter((function(e){return e.key!==t.key}))});case _:return Object(p.a)(Object(p.a)({},e),{},{focusroom:t.result});default:return e}};function S(e){return j.createUserWithEmailAndPassword(e.email,e.password).then((function(){console.log("signUp()\uac00\uc785\uc131\uacf5",e.email,e.password);var t=b.ref("all_users").push().key,a={email:e.email,name:e.name,password:e.password,uid:j.currentUser.uid,key:t},n={};return n["/all_users/"+t]=a,b.ref().update(n)})).catch((function(e){alert("The email address is already in use by another account."===e.message&&"\uc774\ubbf8 \uc788\ub294 \uc544\uc774\ub514\uc785\ub2c8\ub2e4.")}))}function N(e){return j.signInWithEmailAndPassword(e.email,e.password).then((function(){console.log("signIn()\ub85c\uadf8\uc778\uc131\uacf5")})).catch((function(e){console.log("signIn()\uc2e4\ud328")}))}function I(e,t){if(""!==t){var a=b.ref("msg/".concat(t)).push().key,n={message:e.message,timestamp:e.timestamp,uid:e.uid,key:a,name:e.name},r={};return r["msg/".concat(t,"/").concat(a)]=n,b.ref().update(r)}alert("\ubc29\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694")}var R=a(71),A=a(4);var D=function(e){var t=e.component,a=e.authenticated,n=Object(R.a)(e,["component","authenticated"]);return Object(A.jsx)(m.b,Object(p.a)(Object(p.a)({},n),{},{render:function(e){return!1===a?Object(A.jsx)(t,Object(p.a)({},e)):Object(A.jsx)(m.a,{to:"/chat"})}}))};var U=function(e){var t=e.component,a=e.authenticated,n=Object(R.a)(e,["component","authenticated"]);return Object(A.jsx)(m.b,Object(p.a)(Object(p.a)({},n),{},{render:function(e){return!0===a?Object(A.jsx)(t,Object(p.a)({},e)):Object(A.jsx)(m.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},B=a(39),E=a.n(B),T=a(53),W=a(52),F=a(29),L=a(168),M=a(61),X=a(167),Y=a(169),P=a(170),q=a(185),z=a(171),J=a(181),V=a(182),G=a(69),K=a.n(G);function H(){return Object(A.jsxs)(M.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(A.jsx)(X.a,{component:u.b,to:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var $=Object(L.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));var Q=Object(i.b)((function(e){return{authenticated:e.chats.authenticated}}),null)((function(e){e.me;var t=$(),a=Object(n.useState)({email:"",name:"",password:""}),r=Object(F.a)(a,2),c=r[0],o=r[1],s=function(e){var t=e.target,a=t.name,n=t.value;o(Object(p.a)(Object(p.a)({},c),{},Object(W.a)({},a,n)))},i=function(){var e=Object(T.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),""!==c.email&&""!==c.password&&""!==c.name&&S(c);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsxs)(Y.a,{component:"main",maxWidth:"xs",children:[Object(A.jsx)(P.a,{}),Object(A.jsxs)("div",{className:t.paper,children:[Object(A.jsx)(q.a,{className:t.avatar,children:Object(A.jsx)(K.a,{})}),Object(A.jsx)(M.a,{component:"h1",variant:"h5",children:"\ud68c\uc6d0 \uac00\uc785"}),Object(A.jsxs)("form",{className:t.form,noValidate:!0,onSubmit:i,children:[Object(A.jsxs)(z.a,{container:!0,spacing:2,children:[Object(A.jsx)(z.a,{item:!0,xs:12,children:Object(A.jsx)(J.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:c.email,onChange:s})}),Object(A.jsx)(z.a,{item:!0,xs:12,children:Object(A.jsx)(J.a,{variant:"outlined",required:!0,fullWidth:!0,id:"name",label:"name",name:"name",autoComplete:"name",value:c.name,onChange:s})}),Object(A.jsx)(z.a,{item:!0,xs:12,children:Object(A.jsx)(J.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:c.password,onChange:s})})]}),Object(A.jsx)(X.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"\uac00\uc785\ud558\uae30"}),Object(A.jsx)(z.a,{container:!0,justifyContent:"flex-end",children:Object(A.jsxs)(z.a,{item:!0,children:["\uc774\ubbf8 \ud68c\uc6d0\uc774\uc2e0\uac00?"," ",Object(A.jsx)(X.a,{component:u.b,to:"/login",children:"\ub85c\uadf8\uc778"})]})})]})]}),Object(A.jsx)(V.a,{mt:5,children:Object(A.jsx)(H,{})})]})}));function Z(){return Object(A.jsxs)(M.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(A.jsx)(X.a,{component:u.b,to:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var ee=Object(L.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var te=function(e){e.me;var t=ee(),a=Object(n.useState)({email:"",password:""}),r=Object(F.a)(a,2),c=r[0],o=r[1],s=function(e){var t=e.target,a=t.name,n=t.value;o(Object(p.a)(Object(p.a)({},c),{},Object(W.a)({},a,n)))},i=function(){var e=Object(T.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),""!==c.email&&""!==c.password&&N(c);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsxs)(Y.a,{component:"main",maxWidth:"xs",children:[Object(A.jsx)(P.a,{}),Object(A.jsxs)("div",{className:t.paper,children:[Object(A.jsx)(q.a,{className:t.avatar,children:Object(A.jsx)(K.a,{})}),Object(A.jsx)(M.a,{component:"h1",variant:"h5",children:"\ub85c\uadf8\uc778"}),Object(A.jsxs)("form",{className:t.form,onSubmit:i,noValidate:!0,children:[Object(A.jsx)(J.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694.",name:"email",autoComplete:"email",autoFocus:!0,value:c.email,onChange:s}),Object(A.jsx)(J.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:c.password,onChange:s}),Object(A.jsx)(X.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Sign In"}),Object(A.jsxs)(z.a,{container:!0,children:[Object(A.jsx)(z.a,{item:!0,xs:!0}),Object(A.jsx)(z.a,{item:!0,children:Object(A.jsx)(X.a,{component:u.b,to:"/signup",children:"\ud68c\uc6d0\uac00\uc785"})})]})]})]}),Object(A.jsx)(V.a,{mt:8,children:Object(A.jsx)(Z,{})})]})},ae=a(172),ne=a(180),re=a(178),ce=a(7),oe=a(174),se=a(175),ie=a(176),le=a(177),ue=Object(ce.a)((function(e){return{badge:{backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px ".concat(e.palette.background.paper),"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"$ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}}))(oe.a),me=function(e){var t=e.img,a=e.text,n=e.sub,r=e.uid,c=e.msg_key,o=e.event;return Object(A.jsxs)(se.a,{button:!0,onClick:function(){return o(c||r)},children:[Object(A.jsx)(ie.a,{children:Object(A.jsx)(ue,{invisible:!1,overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",children:Object(A.jsx)(q.a,{alt:"Remy Sharp",src:t})})}),Object(A.jsx)(le.a,{primary:a,secondary:n})]})},de=a(173),je=Object(L.a)((function(e){return{root:{},list:{height:"240px",overflowY:"scroll"},divider:{}}})),be=Object(i.b)((function(e){return{all_users:e.chats.all_users}}),null)((function(e){var t=e.title,a=e.data,r=e.event,c=e.all_users,o=je();function s(e){return void 0!==e&&c.length>0&&c.filter((function(t){return t.uid===e}))[0].name}return Object(n.useEffect)((function(){console.log("[\ud45c\uc2dc]FriendList.js")}),[]),Object(A.jsxs)(V.a,{className:o.root,children:[Object(A.jsx)(re.a,{children:t}),Object(A.jsx)(de.a,{className:o.list,children:a.length>0?a.map((function(e,t){return Object(A.jsx)(me,{img:"https://material-ui.com/static/images/avatar/1.jpg",text:Array.isArray(e.uid)?e.uid.map((function(e,t){return t>0?"/".concat(s(e)):s(e)})):s(e.uid),sub:void 0===e.email?"1:1 \ub300\ud654\ubc29":e.email,uid:e.uid,msg_key:e.msg_key,event:r},t)})):Object(A.jsx)("li",{children:"\ub9ac\uc2a4\ud2b8\uac00\uc5c6\uc2b5\ub2c8\ub2e4."})})]})})),pe=a(179),fe=a(184),he=a(92),Oe=a.n(he),xe=a(73),ge=["username@gmail.com","user02@gmail.com"],ve=Object(L.a)({avatar:{backgroundColor:xe.a[100],color:xe.a[600]}});function ye(e){var t=ve(),a=e.onClose,n=e.selectedValue,r=e.open,c=e.data,o=e.focusroom;return console.log("\uae4c\ub974\ub974\ub974\uad81",c),Object(A.jsxs)(fe.a,{onClose:function(){a(n),console.log("\uae4c\ub974\ub974\ub974\uad81",c)},"aria-labelledby":"simple-dialog-title",open:r,children:[Object(A.jsx)(pe.a,{id:"simple-dialog-title",children:"Set backup account"}),Object(A.jsx)(de.a,{children:c.length>0?c.map((function(e,n){return Object(A.jsxs)(se.a,{button:!0,onClick:function(){return t=e.uid,b.ref("room/".concat(o,"/uid")).once("value").then((function(e){var a=e.val();a.includes(t)?alert("\uc774\ubbf8 \ucd94\uac00\ub41c \uce5c\uad6c\uc785\ub2c8\ub2e4."):(a.push(t),b.ref("room/".concat(o)).update({uid:a}).then((function(){console.log("\uce5c\ucd94 \uc644\ub8cc",a)})).catch((function(e){console.log("\uce5c\ucd94 \uc2e4\ud328")})))})),void a(!1);var t},children:[Object(A.jsx)(ie.a,{children:Object(A.jsx)(q.a,{className:t.avatar,children:Object(A.jsx)(Oe.a,{})})}),Object(A.jsx)(le.a,{primary:e.email})]},n)})):Object(A.jsx)("li",{children:"\ub9ac\uc2a4\ud2b8\uac00\uc5c6\uc2b5\ub2c8\ub2e4."})})]})}var we=Object(i.b)((function(e){return{all_users:e.chats.all_users,focusroom:e.chats.focusroom}}),null)((function(e){var t=e.all_users,a=e.focusroom,n=r.a.useState(!1),c=Object(F.a)(n,2),o=c[0],s=c[1],i=r.a.useState(ge[1]),l=Object(F.a)(i,2),u=l[0],m=l[1];return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(X.a,{variant:"outlined",color:"primary",onClick:function(){s(!0)},children:"\uce5c\uad6c\ucd94\uac00"}),Object(A.jsx)(ye,{data:t,focusroom:a,selectedValue:u,open:o,onClose:function(e){s(!1),m(e)}})]})})),_e=Object(L.a)((function(e){return{lBox:{flexDirection:"row-reverse",display:"flex",textAlign:"right"},rBox:{flexDirection:"row-reverse",display:"flex",textAlign:"right"},appBar:{top:"auto",bottom:0,left:0,width:"100%","& input,& button":{width:"100%",height:"50px"}},listBox:{display:"flex",flexDirection:"column"},listBoxItem:{},listBoxItemavatar:{display:"flex"}}})),ke=Object(i.b)((function(e){return{focusroom:e.chats.focusroom,msglist:e.chats.msglist}}),(function(e){return{rx_remove:function(t){e({type:w,key:t})}}}))((function(e){var t=e.focusroom,a=e.rx_remove,c=e.msglist,o=_e();return console.log("Message-focusroom",t),Object(n.useEffect)((function(){console.log("[\ud45c\uc2dc]Message.js")}),[c,t]),Object(A.jsxs)(V.a,{style:{height:"577px",overflowY:"scroll",paddingBottom:"15%"},children:[Object(A.jsxs)(re.a,{children:["\ud558\ud558\ud558",""!==t&&Object(A.jsx)(we,{})]}),Object(A.jsx)(de.a,{className:o.listBox,children:c.length>0?c.map((function(e,n){return Object(A.jsxs)(se.a,{className:o.listBoxItem,children:[Object(A.jsx)(ie.a,{className:o.listBoxItemavatar,style:{justifyContent:"flex-start"},children:Object(A.jsx)(q.a,{alt:"Remy Sharp",src:"/static/images/avatar/1.jpg"})}),Object(A.jsx)(le.a,{primary:e.name,secondary:Object(A.jsxs)(r.a.Fragment,{children:[Object(A.jsx)(M.a,{component:"span",variant:"body2",color:"textPrimary",style:{wordBreak:"break-all"},children:e.message}),Object(A.jsx)("br",{}),e.timestamp]})}),Object(A.jsx)(X.a,{style:{display:"inline-flex"},onClick:function(){return function(e,t,a){b.ref("msg/".concat(e,"/").concat(t)).remove(),a(t),console.log("\uba54\ub871",e,t)}(t,e.key,a)},children:"\uc0ad\uc81c"})]},n)})):Object(A.jsx)("li",{children:"\ub9ac\uc2a4\ud2b8\uac00\uc5c6\uc2b5\ub2c8\ub2e4."})})]})})),Ce=a(93),Se=a.n(Ce),Ne=Object(L.a)((function(e){return{InputBox:{display:"flex",backgroundColor:"#fff",position:"absolute",bottom:"0",width:"93%",margin:"2%",padding:"2%",boxShadow:"1px 1px 5px #a0a0a0",borderRadius:"5px",justifyContent:"space-between"},button:{margin:e.spacing(1)}}})),Ie=Object(i.b)((function(e){return{focusroom:e.chats.focusroom,me:e.chats.me[0]}}),null)((function(e){var t=e.focusroom,a=e.me,r=Ne(),c=Object(n.useState)(""),o=Object(F.a)(c,2),s=o[0],i=o[1],l=function(){var e=Object(T.a)(E.a.mark((function e(n){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),i(""),I({message:s,timestamp:Date.now(),uid:j.currentUser.uid,name:null===j.currentUser.displayName?a.name:j.currentUser.displayName},t),console.log({message:s,timestamp:Date.now(),uid:j.currentUser.uid,name:null===j.currentUser.displayName?a.name:j.currentUser.displayName},t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsx)("form",{onSubmit:l,children:Object(A.jsxs)(V.a,{className:r.InputBox,children:[Object(A.jsx)(J.a,{id:"outlined-basic",label:"\uba54\uc2dc\uc9c0",value:s,onChange:function(e){i(e.target.value)},style:{width:"100%"}}),Object(A.jsx)(X.a,{variant:"contained",color:"primary",type:"submit",className:r.button,endIcon:Object(A.jsx)(Se.a,{}),children:"Send"})]})})})),Re=Object(L.a)((function(e){return{root:{},chat_wrap:{width:"100%",backgroundColor:e.palette.background.paper,height:"577px"}}})),Ae=Object(i.b)((function(e){return{all_users:e.chats.all_users,myroomlist:e.chats.myroomlist,allroomlist:e.chats.allroomlist,me:e.chats.me[0],focusroom:e.chats.focusroom}}),(function(e){return{rx_all_users:function(t){e({type:h,result:t})},rx_me:function(t){e({type:O,result:t})},rx_myroomlist:function(t){e({type:g,result:t})},rx_allroomlist:function(t){e({type:v,result:t})},rx_focusroom:function(t){e({type:_,result:t})},rx_msglist:function(t){e({type:y,result:t})}}}))((function(e){var t=e.rx_all_users,a=e.all_users,c=e.rx_me,o=e.me,s=e.rx_myroomlist,i=e.myroomlist,l=e.rx_allroomlist,u=e.allroomlist,m=e.rx_focusroom,d=e.focusroom,p=e.rx_msglist,f=Re(),h=Object(n.useState)([]),O=Object(F.a)(h,2),x=O[0],g=O[1];return Object(n.useEffect)((function(){console.log("[\ud45c\uc2dc]Chat.js"),b.ref("all_users").on("value",(function(e){var a=Object.values(e.val());t(a),console.log("response",a);var n=a.filter((function(e){return e.uid.includes(j.currentUser.uid)}));c(n),console.log("me",n)})),b.ref("room").on("value",(function(e){if(null!==e.val()){var t=Object.values(e.val());console.log("roomListBox",t),l(t);var a=t.filter((function(e){return e.uid.some((function(e){return e===j.currentUser.uid}))}));s(a),console.log("found",a)}})),b.ref("msg").on("value",(function(e){if(null!==e.val()){var t=e.val();g(t)}}))}),[]),console.log("all_users",a),console.log("focusroom",d),Object(n.useEffect)((function(){x&&d&&p(x[d]?Object.values(x[d]):[])}),[x,d]),Object(A.jsxs)(r.a.Fragment,{children:[Object(A.jsx)(P.a,{}),Object(A.jsx)(Y.a,{maxWidth:"md",className:f.root,children:Object(A.jsx)(ae.a,{className:f.chat_wrap,elevation:1,children:Object(A.jsxs)(z.a,{container:!0,spacing:0,children:[Object(A.jsxs)(z.a,{item:!0,xs:12,sm:4,className:f.sectionDesktop,children:[Object(A.jsx)(be,{title:"\uc804\uccb4 \uce5c\uad6c \ub9ac\uc2a4\ud2b8",data:a,event:function(e){var t=[o.uid,e],a=[o.uid,e].sort();console.log("handleFriend",t[0],t[1]),console.log(u);var n=JSON.parse(JSON.stringify(u));if(!(n=n.some((function(e){return JSON.stringify(e.uid.sort())===JSON.stringify(a)})))){var r=b.ref("room").push().key,c={uid:[o.uid,e],name:[],msg_key:r},s={};return s["/room/"+r]=c,b.ref().update(s)}alert("\uc774\ubbf8 \ubc29\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4.")}}),Object(A.jsx)(ne.a,{}),Object(A.jsx)(be,{title:"\ub098\uc758 \ubc29 \ub9ac\uc2a4\ud2b8",data:i,event:function(e){m(e)}})]}),Object(A.jsxs)(z.a,{item:!0,xs:12,sm:8,style:{position:"relative"},children:[Object(A.jsx)(ke,{}),Object(A.jsx)(Ie,{})]})]})})})]})}));var De=Object(i.b)((function(e){return{authenticated:e.chats.authenticated}}),(function(e){return{rx_authenticated:function(t){e({type:f,result:t})}}}))((function(e){var t=e.rx_authenticated,a=e.authenticated;return Object(n.useEffect)((function(){console.log("[\ud45c\uc2dc]App.js"),j.onAuthStateChanged((function(e){e?(console.log("App/\ub85c\uadf8\uc778",e),t(!0)):(console.log("App/\ub85c\uadf8\uc544\uc6c3",e),t(!1))}))}),[]),Object(A.jsxs)(u.a,{children:[Object(A.jsxs)(m.d,{children:[Object(A.jsx)(U,{path:"/chat",authenticated:a,component:Ae}),Object(A.jsx)(D,{path:"/signup",authenticated:a,component:Q}),Object(A.jsx)(D,{path:["/","/login"],authenticated:a,component:te})]}),a&&Object(A.jsx)("button",{onClick:function(){b.ref("UsersConnection/".concat(j.currentUser.uid)).set({connection:!1,uid:j.currentUser.uid}),j.signOut().then((function(){console.log("\ub85c\uadf8\uc544\uc6c3 \uc131\uacf5")})).catch((function(e){console.log("\ub85c\uadf8\uc544\uc6c3 \uc2e4\ud328")}))},children:"\ub85c\uadf8\uc544\uc6c3"})]})})),Ue=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,188)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))},Be=Object(s.combineReducers)({chats:C}),Ee=a(94),Te=Object(Ee.createLogger)(),We=Object(s.createStore)(Be,Object(l.composeWithDevTools)(Object(s.applyMiddleware)(Te)));o.a.render(Object(A.jsx)(i.a,{store:We,children:Object(A.jsx)(De,{})}),document.getElementById("root")),Ue()}},[[128,1,2]]]);
//# sourceMappingURL=main.1be6b0ad.chunk.js.map