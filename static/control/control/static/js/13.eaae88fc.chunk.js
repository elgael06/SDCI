(this["webpackJsonpfront-sdci"]=this["webpackJsonpfront-sdci"]||[]).push([[13],{241:function(e,t,n){"use strict";n.d(t,"g",(function(){return j})),n.d(t,"h",(function(){return v})),n.d(t,"e",(function(){return h})),n.d(t,"c",(function(){return O})),n.d(t,"b",(function(){return x})),n.d(t,"d",(function(){return m})),n.d(t,"f",(function(){return y})),n.d(t,"a",(function(){return g}));var r=n(14),a=n.n(r),c=n(22),u=n(5),s=n(46),i=n.n(s),o=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/api/v1/user");case 3:return t=e.sent,n=t.data,r=t.status,e.abrupt("return",200===r?n:[]);case 9:return e.prev=9,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("/api/v1/user/",t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("/api/v1/user/".concat(t),n);case 2:return r=e.sent,c=r.data,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n,r,c,s=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:"",e.prev=1,e.next=4,i.a.get("/api/v1/user/".concat(t));case 4:return n=e.sent,r=n.data,c=n.status,e.abrupt("return",200===c?Object(u.a)(Object(u.a)({},r.user),{},{puesto:r.data.puesto}):null);case 10:return e.prev=10,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),b=n(25),d=n(42),j=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(b.b)()),t({type:d.a.REMOVE_USUARIOS}),e.prev=2,e.next=5,o();case 5:n=e.sent,t(Object(b.d)({status:!0,text:"Total ".concat(n.length," usuarios..."),title:"",type:"info"})),t({type:d.a.LISTA_USUARIOS,value:n}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),t(Object(b.d)({status:!0,text:"Error al descargar usuarios!!!",title:"",type:"danger"}));case 13:setTimeout((function(){t(Object(b.c)())}),2e3),t(Object(b.a)());case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(b.b)()),t.prev=1,t.next=4,f(e);case 4:r=t.sent,console.log("usuario id: ",r),r?(n(Object(b.d)({status:!0,text:"usuario: ".concat(e,"..."),title:"",type:"info"})),n({type:d.a.SELECTED_USER_ID,value:r})):n(Object(b.d)({status:!0,text:"Error al descargar usuario!!!",title:"",type:"danger"})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:setTimeout((function(){n(Object(b.c)())}),2e3),n(Object(b.a)());case 14:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(t){t({type:d.a.USER_NAME,value:e})}},O=function(e){return function(t){t({type:d.a.USER_LAST_NAME,value:e})}},x=function(e){return function(t){t({type:d.a.USER_EMAIL,value:e})}},m=function(e){return function(t){t({type:d.a.USER_PUESTO,value:e})}},y=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(Object(b.b)()),n.prev=1,n.next=4,l(e);case 4:c=n.sent,r(Object(b.d)({status:!0,text:c.message,title:"",type:c.status?"info":"danger"})),c.status&&(r({type:d.a.DEFAULT_USER_ID}),t()),n.next=11;break;case 9:n.prev=9,n.t0=n.catch(1);case 11:r(Object(b.a)()),setTimeout((function(){r(Object(b.c)())}),2e3);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()},g=function(e,t,n){return function(){var r=Object(c.a)(a.a.mark((function r(c){var u;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c(Object(b.b)()),r.prev=1,r.next=4,p(e,t).catch();case 4:u=r.sent,c(Object(b.d)({status:!0,text:u.message,title:"",type:u.status?"info":"danger"})),u.status&&(c({type:d.a.DEFAULT_USER_ID}),n()),r.next=11;break;case 9:r.prev=9,r.t0=r.catch(1);case 11:c(Object(b.a)()),setTimeout((function(){c(Object(b.c)())}),2e3);case 13:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(e){return r.apply(this,arguments)}}()}},247:function(e,t,n){"use strict";var r=n(4),a=n(7),c=n(6),u=n.n(c),s=n(0),i=n.n(s),o=n(8);var l=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)};function p(e){return!e||"#"===e.trim()}var f=i.a.forwardRef((function(e,t){var n=e.as,c=void 0===n?"a":n,u=e.disabled,s=e.onKeyDown,o=Object(a.a)(e,["as","disabled","onKeyDown"]),f=function(e){var t=o.href,n=o.onClick;(u||p(t))&&e.preventDefault(),u?e.stopPropagation():n&&n(e)};return p(o.href)&&(o.role=o.role||"button",o.href=o.href||"#"),u&&(o.tabIndex=-1,o["aria-disabled"]=!0),i.a.createElement(c,Object(r.a)({ref:t},o,{onClick:f,onKeyDown:l((function(e){" "===e.key&&(e.preventDefault(),f(e))}),s)}))}));f.displayName="SafeAnchor";var b=f,d=i.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.variant,s=e.size,l=e.active,p=e.className,f=e.block,d=e.type,j=e.as,v=Object(a.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),h=Object(o.a)(n,"btn"),O=u()(p,h,l&&"active",c&&h+"-"+c,f&&h+"-block",s&&h+"-"+s);if(v.href)return i.a.createElement(b,Object(r.a)({},v,{as:j,ref:t,className:u()(O,v.disabled&&"disabled")}));t&&(v.ref=t),d?v.type=d:j||(v.type="button");var x=j||"button";return i.a.createElement(x,Object(r.a)({},v,{className:O}))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1};t.a=d},278:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(13),c=n(0),u=n(225),s=n(111),i=n(226),o=n(105),l=n(247),p=n(24),f=n(9),b=n(62),d=(n(14),n(22),n(42)),j=n(241),v=n(37),h=n(1),O="6";t.default=function(){var e=Object(f.h)().idUser,t=Object(f.f)(),n=Object(p.b)(),x=Object(p.c)((function(e){return e.usurioSeleccionado})),m=x.name,y=void 0===m?"":m,g=x.lastName,E=void 0===g?"":g,w=x.email,k=void 0===w?"":w,A=x.puesto,S=void 0===A?"":A;Object(c.useEffect)((function(){n((function(e){e({type:d.a.DEFAULT_USER_ID})})),e&&n(Object(j.h)(e))}),[e]);return Object(h.jsxs)(u.a,{children:[Object(h.jsx)(b.a,{name:Object(h.jsxs)("div",{style:{justifyContent:"center",display:"flex",alignItems:"flex-end",paddingBottom:20},children:[Object(h.jsx)(r.l,{icon:e?a.r:a.I,style:{fontSize:40,paddingRight:10}}),Object(h.jsxs)("label",{children:[" ",e?"Editar":"Crear"]})]})}),Object(h.jsx)(s.a,{onSubmit:function(r){r.preventDefault(),console.log(y,E,k,S);var a={name:y,lastname:E,email:k,puesto:S};n(e?Object(j.a)(e,a,t.goBack):Object(j.f)(a,t.goBack))},children:Object(h.jsxs)(i.a,{sm:"12",children:[Object(h.jsx)(o.a,{sm:O,children:Object(h.jsx)(v.a,{title:"Nombre(s)",required:!0,minLength:4,type:"text",name:"nombre",placeholder:"Nombre(s)...",value:y,onChange:function(e){return n(Object(j.e)(e.target.value))}})}),Object(h.jsx)(o.a,{sm:O,children:Object(h.jsx)(v.a,{title:"Apeidos",required:!0,minLength:4,type:"text",name:"apP",placeholder:"Apeidos...",value:E,onChange:function(e){return n(Object(j.c)(e.target.value))}})}),Object(h.jsx)(o.a,{sm:O,children:Object(h.jsx)(v.a,{title:"Correo",required:!0,minLength:8,type:"email",name:"user",placeholder:"usuario@dominio.abc",value:k,onChange:function(e){return n(Object(j.b)(e.target.value))}})}),Object(h.jsx)(o.a,{sm:O,children:Object(h.jsxs)(s.a.Group,{children:[Object(h.jsx)(s.a.Label,{children:"Puesto"}),Object(h.jsxs)(s.a.Control,{as:"select",value:S,required:!0,onChange:function(e){return n(Object(j.d)(e.target.value))},children:[Object(h.jsx)("option",{value:"",children:" -- "}),Object(h.jsx)("option",{children:"Administrador"}),Object(h.jsx)("option",{children:"Direccion"}),Object(h.jsx)("option",{children:"Finanzas"}),Object(h.jsx)("option",{children:"Recursos humanos"}),Object(h.jsx)("option",{children:"Produccion"}),Object(h.jsx)("option",{children:"Ventas"}),Object(h.jsx)("option",{children:"Operaciones"}),Object(h.jsx)("option",{children:"Logistica"})]})]})}),Object(h.jsx)(o.a,{xs:O,children:Object(h.jsx)(l.a,{variant:"light",block:!0,onClick:t.goBack,type:"reset",children:" cancelar"})}),Object(h.jsx)(o.a,{xs:O,children:Object(h.jsxs)(l.a,{block:!0,type:"submit",children:[" ",e?"ACTUALIZAR":"GUARDAR"]})})]})})]})}}}]);
//# sourceMappingURL=13.eaae88fc.chunk.js.map