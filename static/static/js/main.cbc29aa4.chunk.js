(this["webpackJsonpfront-lamar"]=this["webpackJsonpfront-lamar"]||[]).push([[1],{114:function(e,t,n){},116:function(e,t,n){var s={"./ion-action-sheet.entry.js":[159,7],"./ion-alert.entry.js":[160,8],"./ion-app_8.entry.js":[161,9],"./ion-avatar_3.entry.js":[162,19],"./ion-back-button.entry.js":[163,20],"./ion-backdrop.entry.js":[164,45],"./ion-button_2.entry.js":[165,21],"./ion-card_5.entry.js":[166,22],"./ion-checkbox.entry.js":[167,23],"./ion-chip.entry.js":[168,24],"./ion-col_3.entry.js":[169,46],"./ion-datetime_3.entry.js":[170,12],"./ion-fab_3.entry.js":[171,25],"./ion-img.entry.js":[172,47],"./ion-infinite-scroll_2.entry.js":[173,48],"./ion-input.entry.js":[174,26],"./ion-item-option_3.entry.js":[175,27],"./ion-item_8.entry.js":[176,28],"./ion-loading.entry.js":[177,29],"./ion-menu_3.entry.js":[178,30],"./ion-modal.entry.js":[179,10],"./ion-nav_2.entry.js":[180,16],"./ion-popover.entry.js":[181,11],"./ion-progress-bar.entry.js":[182,31],"./ion-radio_2.entry.js":[183,32],"./ion-range.entry.js":[184,33],"./ion-refresher_2.entry.js":[185,13],"./ion-reorder_2.entry.js":[186,18],"./ion-ripple-effect.entry.js":[187,49],"./ion-route_4.entry.js":[188,34],"./ion-searchbar.entry.js":[189,35],"./ion-segment_2.entry.js":[190,36],"./ion-select_3.entry.js":[191,37],"./ion-slide_2.entry.js":[192,50],"./ion-spinner.entry.js":[193,15],"./ion-split-pane.entry.js":[194,51],"./ion-tab-bar_2.entry.js":[195,38],"./ion-tab_2.entry.js":[196,17],"./ion-text.entry.js":[197,39],"./ion-textarea.entry.js":[198,40],"./ion-toast.entry.js":[199,41],"./ion-toggle.entry.js":[200,14],"./ion-virtual-scroll.entry.js":[201,52]};function c(e){if(!n.o(s,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=s[e],c=t[0];return n.e(t[1]).then((function(){return n(c)}))}c.keys=function(){return Object.keys(s)},c.id=116,e.exports=c},118:function(e,t,n){var s={"./ion-icon.entry.js":[202,67]};function c(e){if(!n.o(s,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=s[e],c=t[0];return n.e(t[1]).then((function(){return n(c)}))}c.keys=function(){return Object.keys(s)},c.id=118,e.exports=c},129:function(e,t,n){},152:function(e,t,n){},153:function(e,t,n){},154:function(e,t,n){},155:function(e,t,n){var s={"./pwa-action-sheet.entry.js":[206,59],"./pwa-camera-modal-instance.entry.js":[207,60],"./pwa-camera-modal.entry.js":[208,61],"./pwa-camera.entry.js":[209,62],"./pwa-toast.entry.js":[210,63]};function c(e){if(!n.o(s,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=s[e],c=t[0];return n.e(t[1]).then((function(){return n(c)}))}c.keys=function(){return Object.keys(s)},c.id=155,e.exports=c},157:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),r=n(34),i=n.n(r),a=(n(104),n(105),n(106),n(107),n(108),n(109),n(110),n(111),n(112),n(113),n(114),n(3)),o=n(18),j=function(e){return function(t){t({type:"ON_MESSAGE",value:e})}},l=n(1),u=function(){var e=Object(o.c)((function(e){return e.effects})).loadding,t=void 0!==e&&e,n=Object(o.b)();return Object(l.jsx)(a.s,{isOpen:t,onDidDismiss:function(){return n((function(e){e({type:"OFF_LOADDING"})}))},message:"cargando..."})},d=n(213),b=function(){var e=Object(o.c)((function(e){return e.effects})).message;return e.status?Object(l.jsx)(d.a,{style:{position:"fixed",top:10,left:20},variant:e.type,children:e.text}):null},O=n(53),p=n(9),x=n(8),h=n(26),f=n(214),m=n(87),v=(n(129),n.p+"static/media/mar_1.a2d79190.jpg"),g=n(5),y=n.n(g),w=n(20),k=n(85),D={email:"",password:"",statusPass:!1,statusRes:!1,statusAlert:!1,messageAlert:"este es un mensaje",loading:!1},N=function(){var e=Object(s.useState)(D),t=Object(h.a)(e,2),n=t[0],c=t[1],r=Object(o.b)();return Object(l.jsx)(a.x,{children:Object(l.jsx)(a.j,{children:Object(l.jsx)("div",{id:"container_div",children:Object(l.jsxs)(a.e,{id:"card_login",children:[Object(l.jsx)(a.m,{src:v}),Object(l.jsxs)(a.g,{children:[" ",Object(l.jsx)(a.i,{children:"Ingresar"})]}),Object(l.jsx)(a.f,{children:Object(l.jsxs)(f.a,{onSubmit:function(e){e.preventDefault(),r(function(e){var t=e.email,n=void 0===t?"":t,s=e.password,c=void 0===s?"":s;return function(){var e=Object(w.a)(y.a.mark((function e(t){var s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t((function(e){e({type:"ON_LOADDING"})})),e.next=3,Object(k.a)(n,c);case 3:s=e.sent,t((function(e){e({type:"OFF_LOADDING"})})),t(j({status:!0,text:s.message,title:"",type:s.status?"info":"danger"})),setTimeout((function(){return t((function(e){e({type:"OFF_MESSAGE"})}))}),2e3),s.status&&t({type:"ADD_SESION",value:Object(x.a)(Object(x.a)({},s.sesion),{},{status:s.status})});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(n))},children:[Object(l.jsxs)(f.a.Group,{children:[Object(l.jsx)(f.a.Label,{children:"Correo"}),Object(l.jsx)(m.a,{required:!0,minLength:8,type:"email",placeholder:"usuario@dominio",value:n.email,onChange:function(e){return c(Object(x.a)(Object(x.a)({},n),{},{email:e.target.value}))}})]}),Object(l.jsxs)(f.a.Group,{children:[Object(l.jsx)(f.a.Label,{children:"Contrase\xf1a"}),Object(l.jsx)(m.a,{required:!0,type:n.statusPass?"":"password",placeholder:"contrase\xf1a",minLength:6,value:n.password,onChange:function(e){return c(Object(x.a)(Object(x.a)({},n),{},{password:e.target.value}))}})]}),Object(l.jsxs)(f.a.Check,{children:[Object(l.jsx)(f.a.Check.Input,{checked:n.statusPass,onChange:function(){return c(Object(x.a)(Object(x.a)({},n),{},{statusPass:!n.statusPass}))}}),Object(l.jsx)(f.a.Check.Label,{children:"mostrar contrase\xf1a"})]}),Object(l.jsx)("br",{}),Object(l.jsx)(a.c,{disabled:n.loading,fill:"solid",type:"submit",expand:"block",children:n.loading?Object(l.jsx)(a.y,{value:.25,buffer:.5,type:"indeterminate"}):"Entrar"})]})})]})})})})},_=function(){return Object(l.jsxs)(O.a,{children:[Object(l.jsx)(p.b,{path:"/page/login",exact:!0,component:N}),Object(l.jsx)(p.b,{path:"/",children:Object(l.jsx)(p.a,{to:"/page/login"})})]})},I=n(10),A=(n(152),n(40)),S=[{title:"Inicio",url:"/page/Inicio",iosIcon:I.m,mdIcon:I.n},{title:"Destinos",url:"/page/Destinos",iosIcon:I.s,mdIcon:I.r},{title:"Platillos",url:"/page/Platillos",iosIcon:I.l,mdIcon:I.l},{title:"Actividades",url:"/page/Actividades",iosIcon:I.a,mdIcon:I.b},{title:"Gastos",url:"/page/Gastos",iosIcon:I.d,mdIcon:I.e},{title:"Usuarios",url:"/page/Usuarios",iosIcon:I.u,mdIcon:I.t}],C=function(){var e=Object(o.c)((function(e){return e.sesion})),t=e.name,n=void 0===t?"":t,s=e.email,c=void 0===s?"":s,r=Object(p.g)();return Object(l.jsx)(a.t,{contentId:"main",type:"overlay",children:Object(l.jsx)(a.j,{children:Object(l.jsxs)(a.q,{id:"inbox-list",children:[Object(l.jsx)(a.r,{children:A.name}),Object(l.jsx)(a.w,{children:n}),Object(l.jsx)("hr",{}),Object(l.jsx)(a.w,{children:c}),S.map((function(e,t){return Object(l.jsx)(a.v,{autoHide:!1,children:Object(l.jsxs)(a.o,{className:r.pathname.includes(e.url)?"selected":"",routerLink:e.url,routerDirection:"none",lines:"none",detail:!1,children:[Object(l.jsx)(a.l,{slot:"start",ios:e.iosIcon,md:e.mdIcon}),Object(l.jsx)(a.p,{children:e.title})]})},t)}))]})})})},E=function(){var e=Object(o.b)();return Object(l.jsx)(a.c,{color:"danger",title:"salir",shape:"round",size:"small",slot:"end",onClick:function(){return e((function(e){e({type:"REMOVE_SESION"})}))},children:Object(l.jsx)(a.l,{icon:I.v})})},G=function(e){var t=e.name,n=void 0===t?"":t;return Object(l.jsx)(a.k,{children:Object(l.jsxs)(a.J,{children:[Object(l.jsx)(a.d,{slot:"start",children:Object(l.jsx)(a.u,{})}),Object(l.jsx)(a.G,{children:n}),Object(l.jsx)(E,{})]})})},F=(n(153),function(e){var t=e.children,n=e.name;return Object(l.jsxs)(a.x,{children:[Object(l.jsx)(G,{name:n}),Object(l.jsx)(a.j,{fullscreen:!0,children:Object(l.jsx)("div",{className:"container-app",children:t})})]})}),L=function(e){var t=e.acceso;return Object(l.jsxs)(a.o,{routerLink:t.route,children:[Object(l.jsx)(a.l,{slot:"start",icon:I.o}),Object(l.jsx)(a.p,{children:t.title}),Object(l.jsx)(a.l,{slot:"end",icon:I.B})]})},P=function(e){var t=e.name,n=void 0===t?"":t;return Object(l.jsx)(a.J,{children:Object(l.jsxs)(a.G,{children:[n," "]})})},U=n(88),M=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(P,{name:"Men\xfa"}),Object(l.jsx)(a.q,{className:"lista-menus",children:U.map((function(e){return Object(l.jsx)(L,{acceso:e},e.route)}))})]})},T=function(){return Object(l.jsx)(F,{name:"Actividades",children:Object(l.jsx)(p.d,{children:Object(l.jsx)(p.b,{path:"/page/Actividades/",exact:!0,component:M})})})},q=n(89),J=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(P,{name:"Men\xfa"}),Object(l.jsx)(a.q,{className:"lista-menus",children:q.map((function(e){return Object(l.jsx)(L,{acceso:e},e.route)}))})]})},R=function(){return Object(l.jsx)(F,{name:"Destinos",children:Object(l.jsx)(p.d,{children:Object(l.jsx)(p.b,{path:"/page/Destinos/",exact:!0,component:J})})})},B=n(90),W=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(P,{name:"Men\xfa"}),Object(l.jsx)(a.q,{className:"lista-menus",children:B.map((function(e){return Object(l.jsx)(L,{acceso:e},e.route)}))})]})},z=function(e){return function(){var t=Object(w.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"addTipo",value:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},V=function(e){return function(){var t=Object(w.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"addDesc",value:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},$=function(e){return function(){var t=Object(w.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"addCosto",value:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},H=function(e){return function(){var t=Object(w.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"addImage",value:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},K=function(){var e=Object(o.c)((function(e){return e.formGasto})),t=e.descripcion,n=void 0===t?"":t,s=e.costo,c=void 0===s?0:s,r=Object(o.b)();return Object(l.jsxs)(a.q,{className:"lista",children:[Object(l.jsx)("br",{}),Object(l.jsx)(a.e,{children:Object(l.jsxs)(a.o,{children:[Object(l.jsx)(a.l,{icon:I.C,slot:"start"}),Object(l.jsx)(a.p,{position:"fixed",children:"gasto $ "}),Object(l.jsx)(a.n,{type:"number",min:"0",value:c,onIonChange:function(e){return t=e.detail.value,void r($(t));var t}})]})}),Object(l.jsx)("br",{}),Object(l.jsxs)(a.e,{children:[Object(l.jsxs)(a.o,{children:[Object(l.jsx)(a.l,{slot:"start",icon:I.w}),Object(l.jsx)(a.i,{children:" Descripcion"})]}),Object(l.jsx)(a.F,{rows:6,maxlength:150,value:n,onIonChange:function(e){return t=e.detail.value,void r(V(t));var t}})]})]})},Q=function(){var e=Object(o.c)((function(e){return e.formGasto})),t=e.lista,n=void 0===t?[]:t,s=e.tipo,c=void 0===s?"":s,r=Object(o.b)();return Object(l.jsx)(a.q,{className:"lista",children:n.map((function(e){var t=e.id==c;return Object(l.jsxs)(a.o,{type:"button",onClick:function(){return function(e){return r(z(e))}(e.id)},lines:"none",detail:!1,color:t?"light":"",children:[Object(l.jsx)(a.p,{children:e.text}),Object(l.jsx)(a.I,{color:"primary",checked:t})]},e.id)}))})},X=n(91),Y=n(64),Z=n.p+"static/media/foto.8ba1c3b1.png",ee=function(){var e=Object(o.c)((function(e){return e.formGasto})).imgComp,t=void 0===e?"":e,n=Object(o.b)(),s=function(){var e=Object(w.a)(y.a.mark((function e(){var t,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.a.getPhoto({quality:10,allowEditing:!1,resultType:Y.b.DataUrl,height:160,width:400});case 2:t=e.sent,s=t.dataUrl||"",n(H(s));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center"},className:"lista",children:Object(l.jsxs)(a.e,{onClick:s,style:{width:260},children:[Object(l.jsx)(a.m,{src:t||Z}),Object(l.jsx)(a.h,{style:{textAlign:"center"},children:"SELECCIONAR IMAGEN"}),Object(l.jsx)("br",{}),Object(l.jsx)(a.b,{style:{width:"100%"},color:"dark",children:"nota o ticket de compra"})]})})},te=function(){var e=Object(o.c)((function(e){return e.formGasto})),t=e.lista,n=void 0===t?[]:t,c=e.tipo,r=void 0===c?"":c,i=e.descripcion,j=void 0===i?"":i,u=e.costo,d=void 0===u?0:u,b=e.imgComp,O=Object(o.b)(),x=Object(p.f)(),f=Object(s.useState)(!1),m=Object(h.a)(f,2),v=m[0],g=m[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(a.q,{className:"lista",children:[Object(l.jsx)(a.o,{children:Object(l.jsxs)(a.p,{className:"ion-text-wrap",children:[Object(l.jsx)(a.E,{children:"Tipo Gasto:"}),Object(l.jsx)(a.E,{color:"primary",children:Object(l.jsx)("p",{children:function(){var e=n.find((function(e,t,n){return e.id==r}));return e?e.text:""}()})})]})}),Object(l.jsx)(a.o,{children:Object(l.jsxs)(a.p,{className:"ion-text-wrap",children:[Object(l.jsx)(a.E,{children:"Descripcion Gasto:"}),Object(l.jsx)(a.E,{color:"primary",children:Object(l.jsx)("p",{children:j})})]})}),Object(l.jsx)(a.o,{children:Object(l.jsxs)(a.p,{className:"ion-text-wrap",children:[Object(l.jsx)(a.E,{children:"Costo de gasto:"}),Object(l.jsx)(a.E,{color:"primary",children:Object(l.jsxs)("p",{children:["$ ",d]})})]})}),Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(l.jsx)(a.e,{style:{width:300},children:Object(l.jsx)(a.m,{src:b||Z})})})]}),Object(l.jsx)("br",{}),Object(l.jsx)(a.c,{expand:"block",color:"success",onClick:function(){g(!0)},children:" GUARDAR"}),Object(l.jsx)(a.H,{isOpen:v,onDidDismiss:function(){O(z("")),O(V("")),O($("0")),O(H("")),g(!1),setTimeout((function(){return x.goBack()}),1e3)},position:"bottom",message:"Se ha guardado el gasto",duration:1e3})]})},ne=["Tipo","Descripcion","Comprobante","Resumen"],se=function(){var e=Object(s.useState)("Tipo"),t=Object(h.a)(e,2),n=t[0],c=t[1],r=Object(o.b)();Object(s.useEffect)((function(){var e;r((e=X,function(){var t=Object(w.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"addLista",value:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}),[]);var i=function(){return"Tipo"==n?Object(l.jsx)(Q,{}):"Descripcion"==n?Object(l.jsx)(K,{}):"Comprobante"==n?Object(l.jsx)(ee,{}):"Resumen"==n?Object(l.jsx)(te,{}):null};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(P,{name:n}),Object(l.jsx)(a.B,{onIonChange:function(e){c(e.detail.value)},value:"".concat(n),color:"primary",children:ne.map((function(e,t){return function(e,t){return Object(l.jsx)(a.C,{value:e,title:e,children:Object(l.jsx)(a.p,{children:t+1})},e)}(e,t)}))}),Object(l.jsx)("br",{}),Object(l.jsx)(i,{}),Object(l.jsx)("br",{}),"Resumen"!=n&&Object(l.jsx)(a.c,{expand:"full",onClick:function(){switch(n){case ne[0]:c(ne[1]);break;case ne[1]:c(ne[2]);break;case ne[2]:c(ne[3])}},children:"Siguiente"})]})},ce=(n(154),function(){return Object(l.jsx)(F,{name:"Gastos",children:Object(l.jsxs)(p.d,{children:[Object(l.jsx)(p.b,{path:"/page/Gastos/",exact:!0,component:W}),Object(l.jsx)(p.b,{path:"/page/Gastos/nuevo",exact:!0,component:se})]})})}),re=function(){return Object(l.jsxs)(F,{name:"Inicio",children:[Object(l.jsxs)(a.e,{children:[Object(l.jsx)(a.g,{children:Object(l.jsx)(a.i,{children:"Datos aplicacion"})}),Object(l.jsxs)(a.f,{children:[Object(l.jsx)(a.h,{children:A.title}),Object(l.jsx)("br",{}),Object(l.jsx)(a.p,{children:A.description})]})]}),Object(l.jsx)(a.G,{children:"Descripcion accesos:"}),Object(l.jsx)(a.q,{children:A.data_access.map((function(e,t){return Object(l.jsxs)(a.o,{slot:"start",children:[Object(l.jsxs)("label",{children:[e.name,":",Object(l.jsx)(a.h,{children:e.desc})]}),Object(l.jsx)(a.l,{slot:"end",icon:I.o})]},t)}))})]})},ie=n(93),ae=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(P,{name:"Men\xfa"}),Object(l.jsx)(a.q,{className:"lista-menus",children:ie.map((function(e){return Object(l.jsx)(L,{acceso:e},e.route)}))})]})},oe=function(){return Object(l.jsx)(F,{name:"Platillos",children:Object(l.jsx)(p.d,{children:Object(l.jsx)(p.b,{path:"/page/Platillos",exact:!0,component:ae})})})},je=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(P,{name:"Nuevo"}),Object(l.jsxs)("form",{children:[Object(l.jsxs)(a.o,{children:[Object(l.jsx)(a.p,{position:"floating",children:"Nombre"}),Object(l.jsx)(a.n,{})]}),Object(l.jsxs)(a.o,{children:[Object(l.jsx)(a.p,{position:"floating",children:"Ap. paterno"}),Object(l.jsx)(a.n,{})]}),Object(l.jsxs)(a.o,{children:[Object(l.jsx)(a.p,{position:"floating",children:"Ap. materno"}),Object(l.jsx)(a.n,{})]})]})]})},le=n(94),ue=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(P,{name:"Men\xfa"}),Object(l.jsx)(a.q,{className:"lista-menus",children:le.map((function(e){return Object(l.jsx)(L,{acceso:e},e.route)}))})]})},de=function(){return Object(l.jsx)(F,{name:"Usuarios",children:Object(l.jsxs)(p.d,{children:[Object(l.jsx)(p.b,{path:"/page/Usuarios/",exact:!0,component:ue}),Object(l.jsx)(p.b,{path:"/page/Usuarios/nuevo",exact:!0,component:je})]})})},be=function(){return Object(l.jsx)(O.a,{children:Object(l.jsxs)(a.D,{contentId:"main",children:[Object(l.jsx)(C,{}),Object(l.jsx)(a.A,{id:"main",children:Object(l.jsxs)(p.d,{children:[Object(l.jsx)(p.b,{path:"/",exact:!0,children:Object(l.jsx)(p.a,{to:"/page/Inicio"})}),Object(l.jsx)(p.b,{path:"/page/login",exact:!0,children:Object(l.jsx)(p.a,{to:"/page/Inicio"})}),Object(l.jsx)(p.b,{path:"/page",exact:!0,children:Object(l.jsx)(p.a,{to:"/page/Inicio"})}),Object(l.jsx)(p.b,{path:"/page/Inicio",exact:!0,component:re}),Object(l.jsx)(p.b,{path:"/page/Platillos",component:oe}),Object(l.jsx)(p.b,{path:"/page/Actividades",component:T}),Object(l.jsx)(p.b,{path:"/page/Destinos",component:R}),Object(l.jsx)(p.b,{path:"/page/Gastos",component:ce}),Object(l.jsx)(p.b,{path:"/page/Usuarios",component:de})]})})]})})},Oe=function(){var e=Object(o.c)((function(e){return e.sesion})).status,t=void 0!==e&&e;return Object(l.jsxs)(a.a,{children:[t?Object(l.jsx)(be,{}):Object(l.jsx)(_,{}),Object(l.jsx)(u,{}),Object(l.jsx)(b,{})]})},pe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function xe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var he=function(e){e&&e instanceof Function&&n.e(68).then(n.bind(null,230)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),r(e),i(e)}))},fe=n(39),me=n(95),ve={loadding:!1,message:{status:!1,text:"",title:"",type:"info"},toask:{status:!1,text:"",title:"",type:"info"}},ge={tipo:"",descripcion:"",costo:0,imgComp:"",lista:[]},ye={create:"",email:"",id:"",lastName:"",name:"",token:"",status:!1},we=Object(fe.c)({formGasto:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"addTipo":return Object(x.a)(Object(x.a)({},e),{},{tipo:t.value});case"addDesc":return Object(x.a)(Object(x.a)({},e),{},{descripcion:t.value});case"addCosto":return Object(x.a)(Object(x.a)({},e),{},{costo:t.value});case"addImage":return Object(x.a)(Object(x.a)({},e),{},{imgComp:t.value});case"addLista":return Object(x.a)(Object(x.a)({},e),{},{lista:t.value});default:return e}},sesion:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_SESION":return Object(x.a)(Object(x.a)({},e),t.value);case"REMOVE_SESION":return Object(x.a)(Object(x.a)({},e),ye);default:return e}},effects:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ON_LOADDING":return Object(x.a)(Object(x.a)({},e),{},{loadding:!0});case"OFF_LOADDING":return Object(x.a)(Object(x.a)({},e),{},{loadding:!1});case"ON_MESSAGE":return Object(x.a)(Object(x.a)({},e),{},{message:t.value});case"OFF_MESSAGE":return Object(x.a)(Object(x.a)({},e),{},{message:ve.message});case"ON_TOASK":return Object(x.a)(Object(x.a)({},e),{},{toask:t.value});case"OFF_TOASK":return Object(x.a)(Object(x.a)({},e),{},{toask:ve.message});default:return e}}}),ke={formGasto:ge,sesion:ye,effects:ve},De=Object(fe.d)(we,ke,Object(fe.a)(me.a)),Ne=n(97);n(156);i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(o.a,{store:De,children:Object(l.jsx)(Oe,{})})}),document.getElementById("root")),Object(Ne.a)(window),function(e){if("serviceWorker"in navigator){if(new URL("/static",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/static","/service-worker.js");pe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var s=n.headers.get("content-type");404===n.status||null!=s&&-1===s.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):xe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):xe(t,e)}))}}(),he()},40:function(e){e.exports=JSON.parse('{"name":"SDCI LaMar","creator":"mya-app.tech","title":"Sistema de control interno LaMar","description":"Este es el sistema de control interno para manejo de persona.En etste sistema se veran diferentes opciones ","data_access":[{"name":"Destinos","desc":"Programa los destinos actializa datos y verifica tus destinos asignados."},{"name":"Platillos","desc":"Alta, bajas y cambios de los platillos asigna a destino y modifica los existentes."},{"name":"Actividades","desc":"Da de alta las actividades verifica  y asigna los articulos  necesarios para estas por destino."},{"name":"Gastos","desc":"Verifica gastos generales por usuario y por destino da de alta nuevos gastos."},{"name":"Usuarios","desc":"Alta baja y cambios de usuarios en el sistema asi como sus accesos a este"},{"name":"Comentarios","desc":"Revisa y administra los comentarios y las fotos publicadas por destino."}]}')},85:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o}));var s=n(5),c=n.n(s),r=n(20),i=n(86),a=n.n(i),o=function(){var t=Object(r.a)(c.a.mark((function t(){var n,s,r,i,o,j=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=j.length>0&&void 0!==j[0]?j[0]:"",s=j.length>1&&void 0!==j[1]?j[1]:"",r=e.from("".concat(n,":").concat(s),"utf8").toString("base64"),t.prev=3,t.next=6,a.a.post("/api/v1/sesion/login",{email:n},{headers:{Authorization:"Basic ".concat(r)}});case 6:return i=t.sent,o=i.data,t.abrupt("return",o);case 11:return t.prev=11,t.t0=t.catch(3),t.abrupt("return",{message:t.t0.toString(),status:!1,sesion:null});case 14:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(){return t.apply(this,arguments)}}()}).call(this,n(130).Buffer)},88:function(e){e.exports=JSON.parse('[{"route":"Actividades/nuevo","title":"Nueva Actividad"},{"route":"Actividades/lista","title":"Lista Actividades"},{"route":"Actividades/filtro","title":"Mis Actividades"},{"route":"Actividades/asignar_destino","title":"Actividades por Destino"}]')},89:function(e){e.exports=JSON.parse('[{"route":"Destinos/nuevo","title":"Nuevo Destino"},{"route":"Destinos/lista","title":"Lista Destino"},{"route":"Destinos/filtro","title":"Mis Destino"}]')},90:function(e){e.exports=JSON.parse('[{"route":"Gastos/nuevo","title":"Nuevo Gasto"},{"route":"Gastos/lista","title":"Mis Gatos"},{"route":"Gastos/lista/filtro","title":"Gasto por usuario"},{"route":"Gastos/Tipos","title":"Tipos de Gastos"}]')},91:function(e){e.exports=JSON.parse('[{"id":"001","text":"gasto insumo"},{"id":"002","text":"gasto actividades"},{"id":"003","text":"gasto personal"},{"id":"004","text":"gasto otros"}]')},93:function(e){e.exports=JSON.parse('[{"route":"Platillos/nuevo","title":"Nuevo Platillo por destino"},{"route":"Platillos/lista","title":"Lista Platillos"},{"route":"Platillos/filtro","title":"Mis Platillos"}]')},94:function(e){e.exports=JSON.parse('[{"route":"Usuarios/nuevo","title":"Nuevo Usuario"},{"route":"Usuarios/lista","title":"Lista Usuarios"}]')}},[[157,3,6]]]);
//# sourceMappingURL=main.cbc29aa4.chunk.js.map