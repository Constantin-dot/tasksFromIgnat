(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,a){e.exports={back:"EleventhTask_back__2sC4N"}},101:function(e,t,a){e.exports={block:"TwelfthTask_block__332qH"}},102:function(e,t,a){e.exports={block:"JuniorPlus_block__lGzcj"}},103:function(e,t,a){e.exports={block:"ThirteenthTask_block__2gEFY"}},104:function(e,t,a){},118:function(e,t,a){e.exports=a(147)},123:function(e,t,a){},147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),l=(a(123),a(54)),i=a.n(l),s=a(89),m=a.n(s),u=a(42),d=a.n(u),v=function(e){return r.a.createElement("div",{className:d.a.wrap},r.a.createElement("div",{className:d.a.ava},r.a.createElement("img",{src:e.state.img,alt:"ava"})),r.a.createElement("div",{className:d.a.messageBox},r.a.createElement("div",{className:d.a.authorName},e.state.name),r.a.createElement("div",{className:d.a.message},e.state.message),r.a.createElement("div",{className:d.a.time},e.state.time)))},E=function(){return r.a.createElement(v,{state:{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSz3oe7au6Voj7bwkAdVqEhbemBlvOSDNsybGBb-1nN_q4gPhB3&usqp=CAU",name:"Constantin",message:"Hi!What's up?",time:"15:23"}})},f=a(41),p=a(11),b=a(43),h=a.n(b),_=a(201),g=function(e){return r.a.createElement(_.a,{color:e.color,inputProps:{"aria-label":"checkbox with default color"},checked:e.isDone,onChange:e.onChange})},k=a(148),C=a(185),O=function(e){return r.a.createElement(k.a,{onClick:function(){e.onClick(e.id)}},r.a.createElement(C.a,{color:e.color}))},j=a(186),N=function(e){return r.a.createElement(j.a,{variant:"outlined",onClick:e.onClick,style:{margin:"5px"}},e.value)},T=a(204);var y=function(e){return r.a.createElement("div",{className:h.a.wrap},r.a.createElement("div",{className:h.a.ava},r.a.createElement("img",{src:e.state.img,alt:"ava"})),r.a.createElement("div",{className:h.a.messageBox},r.a.createElement("div",{className:h.a.authorName},e.state.name),r.a.createElement("div",{className:h.a.cases},e.cases.map((function(t){return r.a.createElement("div",{key:t.id,className:t.isDone?"is-done":""},r.a.createElement(T.a,{control:r.a.createElement(g,{onChange:function(){return e.changeStatus(t.id,!t.isDone)},isDone:t.isDone,color:"primary"}),label:t.case+" - "+t.level}),r.a.createElement(O,{onClick:e.removeCases,id:t.id,color:"primary"}))}))),r.a.createElement("div",null,r.a.createElement(N,{onClick:function(){return e.changeCases("low")},value:"low"}),r.a.createElement(N,{onClick:function(){return e.changeCases("middle")},value:"middle"}),r.a.createElement(N,{onClick:function(){return e.changeCases("high")},value:"high"}),r.a.createElement(N,{onClick:function(){return e.changeCases("highest")},value:"highest"}),r.a.createElement(N,{onClick:function(){return e.changeCases("active")},value:"active"}),r.a.createElement(N,{onClick:function(){return e.changeCases("completed")},value:"completed"}),r.a.createElement(N,{onClick:function(){return e.changeCases("all")},value:"all"})),r.a.createElement("div",{className:h.a.time},e.state.time)))};var w=function(){var e=Object(n.useState)([{id:1,case:"work",level:"middle",isDone:!1},{id:2,case:"study",level:"highest",isDone:!0},{id:3,case:"reading",level:"high",isDone:!1},{id:4,case:"walks",level:"low",isDone:!0}]),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)("all"),l=Object(p.a)(o,2),i=l[0],s=l[1],m=a;return"low"===i&&(m=a.filter((function(e){return"low"===e.level}))),"middle"===i&&(m=a.filter((function(e){return"middle"===e.level}))),"high"===i&&(m=a.filter((function(e){return"high"===e.level}))),"highest"===i&&(m=a.filter((function(e){return"highest"===e.level}))),"active"===i&&(m=a.filter((function(e){return!e.isDone}))),"completed"===i&&(m=a.filter((function(e){return!e.isDone}))),r.a.createElement(y,{state:{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSz3oe7au6Voj7bwkAdVqEhbemBlvOSDNsybGBb-1nN_q4gPhB3&usqp=CAU",name:"Constantin",time:"15:25"},cases:m,removeCases:function(e){var t=a.filter((function(t){return t.id!==e}));c(t)},changeCases:function(e){s(e)},changeStatus:function(e,t){var n=a.find((function(t){return t.id===e}));n&&(n.isDone=t),c(Object(f.a)(a))},filter:i})},S=a(44),x=a.n(S),D=a(187),I=function(e){return r.a.createElement(k.a,{onClick:function(){""!==e.item.trim()?e.addItem(e.item):e.setError("Field is empty!"),e.setItem("")},color:"primary"},r.a.createElement(D.a,null))},A=a(205),B=r.a.memo((function(e){return r.a.createElement(A.a,{variant:"outlined",label:"New item",type:"text",value:e.item,onChange:function(t){e.setError(""),e.setItem(t.currentTarget.value)},error:!!e.error,helperText:e.error,onKeyPress:function(t){e.setError(""),13===t.charCode&&(""!==e.item.trim()?e.addItem(e.item):e.setError("Field is empty!"))},autoFocus:!0,onBlur:null===e||void 0===e?void 0:e.offEditMode})})),L=function(e){var t=Object(n.useState)(""),a=Object(p.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(""),i=Object(p.a)(l,2),s=i[0],m=i[1];return r.a.createElement("div",{className:x.a.wrap},r.a.createElement("div",{className:x.a.ava},r.a.createElement("img",{src:e.state.img,alt:"ava"})),r.a.createElement("div",{className:x.a.messageBox},r.a.createElement("div",{className:x.a.authorName},e.state.myName),r.a.createElement("div",{className:x.a.message},r.a.createElement(B,{addItem:e.addItem,item:c,setItem:o,error:s,setError:m}),r.a.createElement(I,{addItem:function(){""!==c.trim()&&(e.addItem(c),o(""))},item:c,setItem:o,setError:m}),r.a.createElement("span",null," ",e.state.namesArr.length," ")),r.a.createElement("div",{className:x.a.time},e.state.time)))},q=a(203),P=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1];var o={img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSz3oe7au6Voj7bwkAdVqEhbemBlvOSDNsybGBb-1nN_q4gPhB3&usqp=CAU",myName:"Constantin",namesArr:a,time:"15:27"};return r.a.createElement(L,{state:o,namesArr:a,addItem:function(e){var t={id:Object(q.a)(),followerName:e},a=[t].concat(Object(f.a)(o.namesArr));c(a),alert("Hello, "+t.followerName)}})},J=function(){return r.a.createElement("div",{className:m.a.block},r.a.createElement(E,null),r.a.createElement(w,null),r.a.createElement(P,null))};var V=function(e){var t=Object(n.useState)(!1),a=Object(p.a)(t,2),c=a[0],o=a[1];return c?r.a.createElement(B,{item:e.item,addItem:e.addItem,setItem:e.setItem,offEditMode:function(){o(!1),e.setItem(e.item)},error:e.error,setError:e.setError}):r.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.item)},G=a(93),F=a.n(G);var H=function(){var e=Object(n.useState)("This is EditableSpan."),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),l=Object(p.a)(o,2),i=l[0],s=l[1];return r.a.createElement("div",{className:F.a.sixth},r.a.createElement("div",null,r.a.createElement(V,{item:a,addItem:c,setItem:c,error:i,setError:s})),r.a.createElement("div",null,r.a.createElement(N,{onClick:function(){!function(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}("test",{x:a,y:1})},value:"Save"}),r.a.createElement(N,{onClick:function(){var e=function(e,t){var a=localStorage.getItem(e);return null!==a&&(t=JSON.parse(a)),t}("test",{x:"",y:0});c(e.x)},value:"Set"})))},R=a(94),W=a.n(R),M=a(95),K=a.n(M),U=a(190),Y=a(149),z=a(202),Q=a(200),X=function(e){return r.a.createElement(U.a,{component:"fieldset"},r.a.createElement(Y.a,{component:"legend"},e.title),r.a.createElement(z.a,{"aria-label":e.title,name:e.title,value:e.value,onChange:function(t){e.onChange(t.target.value)}},e.list.map((function(t){return r.a.createElement(T.a,{key:t.id,value:t.item,control:r.a.createElement(Q.a,{color:e.color}),label:t.item})}))))},$=a(194),Z=a(207),ee=a(191),te=a(197),ae=a(195),ne=Object($.a)((function(e){return Object(Z.a)({formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}})})),re=function(e){var t=ne();return r.a.createElement(U.a,{className:t.formControl},r.a.createElement(ee.a,{id:"demo-simple-select-outlined-label"},e.title),r.a.createElement(te.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:e.value,onChange:function(t){e.onChange(t.target.value)},label:"Age"},e.list.map((function(e){return r.a.createElement(ae.a,{key:e.id,value:e.item},e.item)}))))},ce=r.a.memo((function(){var e=Object(n.useState)("Minsk"),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)("car"),l=Object(p.a)(o,2),i=l[0],s=l[1],m=Object(n.useCallback)((function(e){c(e)}),[]),u=Object(n.useCallback)((function(e){e&&s(e)}),[]);return r.a.createElement("div",{className:K.a.seventh},r.a.createElement(X,{color:"secondary",value:a,title:"Cities",list:[{id:1,item:"Minsk"},{id:2,item:"Moscow"},{id:3,item:"Kiev"},{id:4,item:"Paris"},{id:5,item:"Budapest"},{id:6,item:"Berlin"},{id:7,item:"London"},{id:8,item:"Madrid"}],onChange:m}),r.a.createElement(re,{title:"Transport",list:[{id:1,item:"car"},{id:2,item:"bus"},{id:3,item:"train"},{id:4,item:"plane"}],onChange:u,value:i}),"Your are going to travel to ".concat(a," on a ").concat(i,"."))})),oe=a(96),le=a.n(oe),ie=function(e,t){switch(t.type){case"SORT":var a=Object(f.a)(e);return"up"===t.payload?a.sort((function(e,t){var a=e.name.toLowerCase(),n=t.name.toLowerCase();return a<n?-1:a>n?1:0})):"down"===t.payload?a.sort((function(e,t){var a=e.name.toLowerCase(),n=t.name.toLowerCase();return a<n?1:a>n?-1:0})):e;case"CHECK":var n=Object(f.a)(e);return 18===t.payload?n.filter((function(e){return e.age>17})):e;default:return e}},se=function(e){return{type:"SORT",payload:e}},me=function(){var e=Object(n.useReducer)(ie,[{id:Object(q.a)(),name:"Ivanov_Ivan",age:32},{id:Object(q.a)(),name:"Petrova_Mariya",age:16},{id:Object(q.a)(),name:"Sholohov_Dmitriy",age:28},{id:Object(q.a)(),name:"Novinskaya_Anna",age:26},{id:Object(q.a)(),name:"Kuznetsov_German",age:13}]),t=Object(p.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:le.a.eighth},a.map((function(e){return r.a.createElement("div",null,e.name)})),r.a.createElement(N,{onClick:function(){c(se("up"))},value:"Up"}),r.a.createElement(N,{onClick:function(){c(se("down"))},value:"Down"}),r.a.createElement(N,{onClick:function(){c(function(e){return{type:"CHECK",payload:e}}(18))},value:"18+"}))},ue=a(68),de=a.n(ue),ve=a(69),Ee=a.n(ve),fe=r.a.memo((function(){var e=de()().format("LTS"),t=Object(n.useState)(1),a=Object(p.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(e),i=Object(p.a)(l,2),s=i[0],m=i[1];return r.a.createElement("div",{className:Ee.a.back},r.a.createElement("div",{className:Ee.a.time},s,r.a.createElement("div",{className:Ee.a.date},de()().format("LL"))),r.a.createElement(N,{onClick:function(){var e=setInterval((function(){m(de()().format("LTS"))}),1e3);o(Number(e))},value:"Start"}),r.a.createElement(N,{onClick:function(){clearInterval(c)},value:"Stop"}))})),pe=a(97),be=a.n(pe),he=a(20),_e=a(23),ge=a(99),ke=a.n(ge).a.create({baseURL:"https://neko-cafe-back.herokuapp.com/"}),Ce=function(e){return ke.post("auth/test",{success:e})},Oe={isLoading:!1,isChecked:!1,error:null},je=function(e){return{type:"SET_LOADING",isLoading:e}},Ne=function(e){return{type:"SET_ERROR",error:e}},Te=r.a.memo((function(){var e=Object(he.b)(),t=function(){e(je(!1))},a=Object(n.useCallback)((function(){e(je(!0)),setTimeout(t,3e3)}),[]);return r.a.createElement("div",{className:be.a.block},r.a.createElement(N,{onClick:a,value:"start loader"}))})),ye=a(100),we=a.n(ye),Se=a(208),xe=r.a.memo((function(e){return r.a.createElement("div",null,r.a.createElement(Se.a,{value:e.value,min:e.minValue,max:e.maxValue,onChange:e.onChange,step:1,valueLabelDisplay:"auto",color:"secondary"}))})),De=r.a.memo((function(e){return r.a.createElement("div",null,r.a.createElement(Se.a,{value:e.value,onChange:e.onChange,min:e.minValue,max:e.maxValue,"aria-labelledby":"range-slider",step:1,valueLabelDisplay:"auto",color:"secondary"}))})),Ie=r.a.memo((function(){var e=r.a.useState(10),t=Object(p.a)(e,2),a=t[0],c=t[1],o=r.a.useState([1,10]),l=Object(p.a)(o,2),i=l[0],s=l[1],m=Object(n.useCallback)((function(e,t){c(t)}),[]),u=Object(n.useCallback)((function(e,t){s(t)}),[]);return r.a.createElement("div",{className:we.a.back},r.a.createElement(xe,{minValue:0,maxValue:20,value:a,onChange:m}),r.a.createElement(De,{minValue:0,maxValue:20,value:i,onChange:u}))})),Ae=function(){return r.a.createElement("div",{className:W.a.block},r.a.createElement(H,null),r.a.createElement(ce,null),r.a.createElement(me,null),r.a.createElement(fe,null),r.a.createElement(Te,null),r.a.createElement(Ie,null))},Be=a(101),Le=a.n(Be),qe={theme:"Light"},Pe=r.a.memo((function(){var e=Object(he.c)((function(e){return e.themes.theme})),t=Object(he.b)(),a=Object(n.useCallback)((function(e){t(function(e){return{type:"SET_THEME",theme:e}}(e))}),[]);return r.a.createElement("div",{className:Le.a.block},r.a.createElement(X,{color:"default",value:e,title:"Theme",list:[{id:1,item:"Light"},{id:2,item:"Dark"},{id:3,item:"Bright"}],onChange:a}))})),Je=a(102),Ve=a.n(Je),Ge=a(103),Fe=a.n(Ge),He=r.a.memo((function(){var e=Object(he.c)((function(e){return e.tasks.error})),t=Object(he.c)((function(e){return e.tasks.isChecked})),a=Object(he.b)(),c=Object(n.useCallback)((function(){a(function(e){return{type:"SET_CHECKBOX",isChecked:e}}(!t))}),[t]),o=Object(n.useCallback)((function(){a(function(e){return function(t){Ce(e).then((function(e){t(Ne(e.data.errorText+". "+e.data.info))})).catch((function(e){t(Ne(e.response.data.errorText+". "+e.response.data.info))}))}}(t))}),[t]);return r.a.createElement("div",{className:Fe.a.block},e,r.a.createElement(g,{onChange:c,isDone:t,color:"default"}),r.a.createElement(N,{onClick:o,value:"check it"}))})),Re=function(){return r.a.createElement("div",{className:Ve.a.block},r.a.createElement(Pe,null),r.a.createElement(He,null))},We=a(104),Me=a.n(We),Ke=a(58),Ue=a(53),Ye=a(193),ze=a(150),Qe=a(198),Xe=a(3),$e=Object($.a)({list:{width:250},fullList:{width:"auto"},button:{margin:10},item:{color:"black",textDecoration:"none"}});var Ze=function(){var e=$e(),t=r.a.useState({top:!1,left:!1,bottom:!1,right:!1}),a=Object(p.a)(t,2),n=a[0],c=a[1],o=function(e,t){return function(a){(!a||"keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&c(Object(_e.a)(Object(_e.a)({},n),{},Object(Ke.a)({},e,t)))}};return r.a.createElement("div",null,["left","right","top","bottom"].map((function(t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(j.a,{variant:"contained",className:e.button,onClick:o(t,!0)},t),r.a.createElement(Qe.a,{anchor:t,open:n[t],onClose:o(t,!1),onOpen:o(t,!0),className:e.item},function(t){return r.a.createElement("div",{className:Object(Xe.a)(e.list,Object(Ke.a)({},e.fullList,"top"===t||"bottom"===t)),role:"presentation",onClick:o(t,!1),onKeyDown:o(t,!1)},r.a.createElement(Ye.a,null,r.a.createElement(ze.a,{key:"PreJunior"},r.a.createElement(Ue.b,{to:"/pre_junior",className:e.item},"Pre Junior")),r.a.createElement(ze.a,{key:"Junior"},r.a.createElement(Ue.b,{to:"/junior",className:e.item},"Junior")),r.a.createElement(ze.a,{key:"JuniorPlus"},r.a.createElement(Ue.b,{to:"/junior_plus",className:e.item},"Junior Plus"))))}(t)))})))};var et=function(){return r.a.createElement("nav",{className:Me.a.nav},r.a.createElement(Ze,null))},tt=a(15),at=a(196),nt=function(){var e=Object(he.c)((function(e){return e.tasks.isLoading})),t=Object(he.c)((function(e){return e.themes.theme}));return e?r.a.createElement("div",{className:i.a.loader},r.a.createElement(at.a,{color:"secondary"})):r.a.createElement(Ue.a,null,r.a.createElement("div",{className:"".concat(i.a.appWrapper," ").concat(i.a[t])},r.a.createElement("div",{className:i.a.nav},r.a.createElement(et,null)),r.a.createElement("div",{className:i.a.appWrapperContent},r.a.createElement(tt.a,{path:"/pre_junior",component:J}),r.a.createElement(tt.a,{path:"/junior",component:Ae}),r.a.createElement(tt.a,{path:"/junior_plus",component:Re}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var rt=a(52),ct=a(105),ot=Object(rt.c)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOADING":return Object(_e.a)(Object(_e.a)({},e),{},{isLoading:t.isLoading});case"SET_CHECKBOX":return Object(_e.a)(Object(_e.a)({},e),{},{isChecked:t.isChecked});case"SET_ERROR":return Object(_e.a)(Object(_e.a)({},e),{},{error:t.error});default:return e}},themes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_THEME":return Object(_e.a)(Object(_e.a)({},e),{},{theme:t.theme});default:return e}}}),lt=Object(rt.d)(ot,Object(rt.a)(ct.a));window.store=lt,o.a.render(r.a.createElement(he.a,{store:lt},r.a.createElement(nt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},42:function(e,t,a){e.exports={wrap:"FirstTask_wrap__1HviR",ava:"FirstTask_ava__1FQ06",messageBox:"FirstTask_messageBox__3An4H",authorName:"FirstTask_authorName__2dTu5",message:"FirstTask_message__1J0so",time:"FirstTask_time__3Vwbp"}},43:function(e,t,a){e.exports={wrap:"SecondTask_wrap__2Q94b",ava:"SecondTask_ava__mM9j_",messageBox:"SecondTask_messageBox__1lxF0",authorName:"SecondTask_authorName__2wGcc",cases:"SecondTask_cases__IpGqI",time:"SecondTask_time__32r6r"}},44:function(e,t,a){e.exports={wrap:"ThirdTask_wrap__2GDUL",ava:"ThirdTask_ava__2-SqG",messageBox:"ThirdTask_messageBox__1DwHv",authorName:"ThirdTask_authorName__wC6Ea",message:"ThirdTask_message__petY-",time:"ThirdTask_time__1PB6o"}},54:function(e,t,a){e.exports={appWrapper:"App_appWrapper__m_I9r",Light:"App_Light__Rbp-L",Dark:"App_Dark__27vww",Bright:"App_Bright__3mPa0",nav:"App_nav__TYb6P",appWrapperContent:"App_appWrapperContent__3YL45",loader:"App_loader__1kIqr"}},69:function(e,t,a){e.exports={back:"NinthTask_back__3w9Hu",time:"NinthTask_time__3tBeD",date:"NinthTask_date__1xA1O"}},89:function(e,t,a){e.exports={block:"PreJunior_block__2BDaY"}},93:function(e,t,a){e.exports={sixth:"SixthTask_sixth__AW_J6"}},94:function(e,t,a){e.exports={block:"Junior_block__2kQCy"}},95:function(e,t,a){e.exports={seventh:"SeventhTask_seventh__1l4fq"}},96:function(e,t,a){e.exports={eighth:"EighthTask_eighth__97j4R"}},97:function(e,t,a){e.exports={block:"TenthTask_block__1WEAs"}}},[[118,1,2]]]);
//# sourceMappingURL=main.5e5dfdfa.chunk.js.map