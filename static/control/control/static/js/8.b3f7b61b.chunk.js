(this["webpackJsonpfront-sdci"]=this["webpackJsonpfront-sdci"]||[]).push([[8],{234:function(e,t,n){"use strict";t.a=n.p+"control/static/media/foto.8ba1c3b1.png"},241:function(e,t,n){"use strict";var c=n(5),r=n(7),a=n(6),s=n.n(a),i=n(0),o=n.n(i),l=n(8);var u=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];e.apply(this,c),t.apply(this,c)}}),null)};function j(e){return!e||"#"===e.trim()}var b=o.a.forwardRef((function(e,t){var n=e.as,a=void 0===n?"a":n,s=e.disabled,i=e.onKeyDown,l=Object(r.a)(e,["as","disabled","onKeyDown"]),b=function(e){var t=l.href,n=l.onClick;(s||j(t))&&e.preventDefault(),s?e.stopPropagation():n&&n(e)};return j(l.href)&&(l.role=l.role||"button",l.href=l.href||"#"),s&&(l.tabIndex=-1,l["aria-disabled"]=!0),o.a.createElement(a,Object(c.a)({ref:t},l,{onClick:b,onKeyDown:u((function(e){" "===e.key&&(e.preventDefault(),b(e))}),i)}))}));b.displayName="SafeAnchor";var d=b,O=o.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.variant,i=e.size,u=e.active,j=e.className,b=e.block,O=e.type,h=e.as,f=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),x=Object(l.a)(n,"btn"),m=s()(j,x,u&&"active",a&&x+"-"+a,b&&x+"-block",i&&x+"-"+i);if(f.href)return o.a.createElement(d,Object(c.a)({},f,{as:h,ref:t,className:s()(m,f.disabled&&"disabled")}));t&&(f.ref=t),O?f.type=O:h||(f.type="button");var p=h||"button";return o.a.createElement(p,Object(c.a)({},f,{className:m}))}));O.displayName="Button",O.defaultProps={variant:"primary",active:!1,disabled:!1};t.a=O},247:function(e,t,n){},264:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(24),a=n(226),s=n(227),i=n(106),o=n(35),l=function(e,t){return console.log("values ",e,t),{type:e,value:t}},u=n(38),j=n(14),b=n.n(j),d=n(22),O=n(4),h=n(240),f=n(234),x=n(1),m=function(){var e=Object(r.c)((function(e){return e.producto})).urlPhoto,t=void 0===e?"":e,n=Object(r.b)(),c=function(){var e=Object(d.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.getPhoto({quality:10,allowEditing:!1,resultType:h.b.DataUrl,height:160,width:400});case 2:t=e.sent,c=t.dataUrl||"",n(l(o.k,c));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)(i.a,{sm:3,children:[Object(x.jsx)(O.m,{style:{height:65},src:t||f.a,onClick:c}),Object(x.jsx)("hr",{})]})},p=function(){var e=Object(r.c)((function(e){return e.producto})),t=Object(r.b)();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(m,{}),Object(x.jsx)(i.a,{sm:6,children:Object(x.jsx)(u.a,{title:"Descripcion",required:!0,minLength:4,type:"text",name:"producto",onChange:function(e){t(l(o.d,e.target.value))},value:e.description,placeholder:"Descripcion..."})}),Object(x.jsx)(i.a,{xs:6,sm:3,children:Object(x.jsx)(u.a,{title:"IVA",name:"IVA",disabled:!0,value:"16.00 %",className:"numeric"})})]})},v=n(13),g=n(241),y=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(i.a,{xs:6,sm:9,children:Object(x.jsx)("h5",{children:"Editar Producto:"})}),Object(x.jsx)(i.a,{xs:6,sm:3,children:Object(x.jsxs)(g.a,{block:!0,variant:"success",type:"submit",children:[" ",Object(x.jsx)(O.l,{icon:v.O,slot:"start"}),"  Guardar"]})})]})},C=n(112),k=function(){var e=Object(r.c)((function(e){return e.producto})),t=Object(r.b)(),n=function(e){return function(n){t(l(e,n.target.value))}};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(i.a,{xs:6,sm:3,children:Object(x.jsxs)(C.a.Group,{children:[Object(x.jsx)(C.a.Label,{children:"Medida"}),Object(x.jsxs)(C.a.Control,{as:"select",onChange:n(o.f),value:e.medida,children:[Object(x.jsx)("option",{value:"",children:"--"}),Object(x.jsx)("option",{value:"KILO",children:"KILO"}),Object(x.jsx)("option",{value:"LITRO",children:"LITRO"}),Object(x.jsx)("option",{value:"PIEZA",children:"PIEZA"})]})]})}),Object(x.jsx)(i.a,{xs:6,sm:3,children:Object(x.jsx)(u.a,{title:"Unidades",required:!0,maxLength:5,type:"number",onChange:n(o.j),value:e.unidades,name:"unidad",placeholder:"0.000",className:"numeric"})})]})},w=function(){var e=Object(r.c)((function(e){return e.producto})),t=Object(r.b)(),n=function(e){return function(n){t(l(e,n.target.value))}};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(i.a,{xs:6,sm:3,children:Object(x.jsx)(u.a,{title:"Costo",required:!0,maxLength:8,step:.01,type:"number",name:"Costo",placeholder:"0.00",className:"numeric",onChange:n(o.c),value:e.costo})}),Object(x.jsx)(i.a,{xs:6,sm:3,children:Object(x.jsx)(u.a,{title:"Precio",required:!0,maxLength:8,step:.01,type:"number",name:"Precio",placeholder:"0.00",className:"numeric",onChange:n(o.g),value:e.precio})}),Object(x.jsx)(i.a,{xs:6,sm:3,children:Object(x.jsx)(u.a,{title:"Margen (%)",required:!0,maxLength:5,type:"number",step:.01,name:"margen",placeholder:"0.000 %",className:"numeric",onChange:n(o.e),value:e.margen})})]})},N=n(30),P=n(228),A=function(){var e=Object(r.c)((function(e){return e.producto})),t=Object(r.b)(),n=Object(c.useState)(!1),a=Object(N.a)(n,2),s=a[0],l=a[1],j=Object(c.useState)(""),b=Object(N.a)(j,2),d=b[0],h=b[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(i.a,{sm:3,className:"content-barcode",children:Object(x.jsxs)(g.a,{block:!0,onClick:function(){return l(!0)},children:[Object(x.jsx)(O.l,{icon:v.d,slot:"start"}),"Codigos Alternos"]})}),Object(x.jsxs)(P.a,{show:s,title:"Barcodes",onHide:function(){l(!1),h("")},centered:!0,size:"sm",scrolllable:!0,children:[Object(x.jsx)(P.a.Header,{closeButton:!0,children:"Codigos Alternos"}),Object(x.jsx)(P.a.Body,{children:Object(x.jsx)(O.q,{children:e.barcodes.map((function(e,n){return Object(x.jsxs)(O.o,{button:!0,lines:"full",children:[Object(x.jsx)(O.l,{slot:"start",icon:v.d}),Object(x.jsx)(O.p,{children:e}),Object(x.jsx)(O.c,{color:"danger",slot:"end",onClick:function(){return t((e=n,{type:o.i,value:e}));var e},children:Object(x.jsx)(O.l,{icon:v.S})})]},n)}))})}),Object(x.jsx)("form",{children:Object(x.jsxs)(P.a.Footer,{style:{alignItems:"flex-end",justifyContent:"center"},children:[Object(x.jsx)(u.a,{size:"sm",placeholder:"000000",value:d,onChange:function(e){return h(e.target.value)},style:{textAlign:"right"}}),Object(x.jsx)(g.a,{size:"sm",onClick:function(){var e;t((e=d,{type:o.a,value:e})),h("")},type:"submit",children:Object(x.jsx)(O.l,{icon:v.d,slot:"start"})})]})})]})]})};n(247),t.default=function(){var e=Object(r.b)();Object(c.useEffect)((function(){return console.log("Producto"),function(){e({type:o.h,value:""})}}),[]);return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(a.a,{children:Object(x.jsx)("form",{onSubmit:function(e){e.preventDefault()},children:Object(x.jsxs)(s.a,{children:[Object(x.jsx)(y,{}),Object(x.jsx)(i.a,{sm:12,children:Object(x.jsx)("hr",{})}),Object(x.jsx)(p,{}),Object(x.jsx)(k,{}),Object(x.jsx)(w,{}),Object(x.jsx)(A,{})]})})})})}}}]);
//# sourceMappingURL=8.b3f7b61b.chunk.js.map