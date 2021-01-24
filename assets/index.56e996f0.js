var te=Object.assign;import{P as B,d as O,aE as ae,j as v,r as I,p as ke,y as bn,v as Me,x as gn,aF as pt,D as bt,T as D,U as Be,O as gt,a9 as vt,I as vn,E as ve,F as ft,G as ht,z as yt,J as _t,n as fn,aG as w,aH as ee,aI as hn,aJ as xt,u as fe,aK as Te,aL as W,aM as K,aN as z,a0 as p,h as y,o as b,i as g,k as M,m as Ct,l as ne,w as $,aO as j,aP as oe,e as o,t as $e,aQ as yn,aR as Fe,aS as V,a as he,aT as De,aU as Oe,aV as je,aW as ie,aX as _n,aY as St,aZ as wt,a_ as xn,q as We,a$ as Cn,b0 as Ke,b1 as Q,b2 as kt,b3 as Sn,b4 as Mt,b5 as Ve,b6 as Tt,b7 as $t,b8 as Ot,H as ue,b9 as ye,ba as It,bb as G,bc as wn,bd as Lt,be as Ue,bf as Pt,bg as Ht,aD as qe,bh as Ie,A as Et,bi as At,bj as zt,bk as Nt,bl as de,bm as Le,bn as Y,bo as Rt,bp as Bt,bq as kn,br as Ft,bs as Mn,bt as Dt,bu as jt,bv as Tn,bw as $n,bx as On,b as Wt,by as Kt,bz as Vt,bA as Ut,bB as qt,c as Gt,bC as In,f as Yt,bD as Qt}from"./index.de7a3c72.js";import{i as Xt}from"./isNumeric.2bec345d.js";import{R as Ge}from"./RightOutlined.dcad5eff.js";import{L as Ln}from"./LeftOutlined.6e782dc0.js";import{M as Pe}from"./index.55f43c00.js";import"./index.95c10fda.js";import{u as Pn}from"./useTimeout.5494657f.js";import{g as He,u as re,a as Ye,b as Zt,c as Hn,d as Qe}from"./useHeaderSetting.0d239ac1.js";import{a as En,r as An}from"./domUtils.aa6aef94.js";import{P as Jt,u as ea}from"./useSortable.10178c08.js";import{_ as zn}from"./index.b5f656c2.js";import na from"./index.2865f037.js";import{c as ta}from"./usePageContext.05da5891.js";import{u as aa}from"./useWindowSizeFn.5bd3f00e.js";import{D as oa}from"./index.4e4cdfc2.js";import{C as ia}from"./clickOutside.5a8b0ef7.js";import{T as Nn}from"./index.dad53a49.js";import{_ as ra}from"./index.967c47da.js";function sa(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function la(e){return ma(e)||ca(e)||da(e)||ua()}function ua(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function da(e,n){if(!!e){if(typeof e=="string")return Xe(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Xe(e,n)}}function ca(e){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(e))return Array.from(e)}function ma(e){if(Array.isArray(e))return Xe(e)}function Xe(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function Ee(){return Ee=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ee.apply(this,arguments)}function pa(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!bt(e)}var Ze={prefixCls:B.string,hasSider:B.looseBool,tagName:B.string};function Ae(e){var n=e.suffixCls,t=e.tagName,a=e.name;return function(i){var r=O({name:a,setup:function(d,s){var u=s.slots,c=Me("configProvider",gn),h=c.getPrefixCls;return function(){var m,_,f=d.prefixCls,x=h(n,f),S=Ee(Ee({prefixCls:x},d),{tagName:t});return v(i,S,pa(m=pt((_=u.default)===null||_===void 0?void 0:_.call(u)))?m:{default:function(){return[m]}})}}});return r.props=Ze,r}}var Je=O({props:Ze,setup:function(n,t){var a=t.slots,i=ae(n),r=i.prefixCls,l=i.tagName;return function(){var d;return v(l.value,{class:r.value},(d=a.default)===null||d===void 0?void 0:d.call(a))}}}),ba=O({props:Ze,setup:function(n,t){var a=t.slots,i=I([]),r={addSider:function(d){i.value=[].concat(la(i.value),[d])},removeSider:function(d){i.value=i.value.filter(function(s){return s!==d})}};return ke("siderHook",r),function(){var l,d=n.prefixCls,s=n.hasSider,u=n.tagName,c=bn(d,sa({},"".concat(d,"-has-sider"),typeof s=="boolean"?s:i.value.length>0));return v(u,{class:c},(l=a.default)===null||l===void 0?void 0:l.call(a))}}}),N=Ae({suffixCls:"layout",tagName:"section",name:"ALayout"})(ba),ga=Ae({suffixCls:"layout-header",tagName:"header",name:"ALayoutHeader"})(Je),va=Ae({suffixCls:"layout-footer",tagName:"footer",name:"ALayoutFooter"})(Je),fa=Ae({suffixCls:"layout-content",tagName:"main",name:"ALayoutContent"})(Je);N.Header=ga,N.Footer=va,N.Content=fa;var ha={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"};function ya(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?Object(arguments[n]):{},a=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),a.forEach(function(i){_a(e,i,t[i])})}return e}function _a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var en=function(n,t){var a=ya({},n,t.attrs);return v(Be,D(a,{icon:ha}),null)};en.displayName="BarsOutlined",en.inheritAttrs=!1;function Rn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,a)}return t}function Bn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Rn(Object(t),!0).forEach(function(a){_e(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Rn(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function _e(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ce(){return ce=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},ce.apply(this,arguments)}var xa=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)n.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t},Fn={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},Ca={prefixCls:B.string,collapsible:B.looseBool,collapsed:B.looseBool,defaultCollapsed:B.looseBool,reverseArrow:B.looseBool,zeroWidthTriggerStyle:B.style,trigger:B.VNodeChild,width:B.oneOfType([B.number,B.string]),collapsedWidth:B.oneOfType([B.number,B.string]),breakpoint:B.oneOf(fn("xs","sm","md","lg","xl","xxl")),theme:B.oneOf(fn("light","dark")).def("dark"),onBreakpoint:Function,onCollapse:Function},Sa=function(){var e=0;return function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return e+=1,"".concat(n).concat(e)}}(),wa=O({name:"ALayoutSider",mixins:[gt],inheritAttrs:!1,__ANT_LAYOUT_SIDER:!0,props:vt(Ca,{collapsible:!1,defaultCollapsed:!1,reverseArrow:!1,width:200,collapsedWidth:80}),emits:["breakpoint","update:collapsed","collapse"],setup:function(){return{siderHook:Me("siderHook",{}),configProvider:Me("configProvider",gn)}},data:function(){var n=Sa("ant-sider-"),t;typeof window!="undefined"&&(t=window.matchMedia);var a=vn(this),i;t&&a.breakpoint&&a.breakpoint in Fn&&(i=t("(max-width: ".concat(Fn[a.breakpoint],")")));var r;return"collapsed"in a?r=a.collapsed:r=a.defaultCollapsed,{sCollapsed:r,below:!1,belowShow:!1,uniqueId:n,mql:i}},watch:{collapsed:function(n){this.setState({sCollapsed:n})}},created:function(){ke("layoutSiderContext",this)},mounted:function(){var n=this;ve(function(){n.mql&&(n.mql.addListener(n.responsiveHandler),n.responsiveHandler(n.mql)),n.siderHook.addSider&&n.siderHook.addSider(n.uniqueId)})},beforeUnmount:function(){this.mql&&this.mql.removeListener(this.responsiveHandler),this.siderHook.removeSider&&this.siderHook.removeSider(this.uniqueId)},methods:{responsiveHandler:function(n){this.setState({below:n.matches}),this.$emit("breakpoint",n.matches),this.sCollapsed!==n.matches&&this.setCollapsed(n.matches,"responsive")},setCollapsed:function(n,t){ft(this,"collapsed")||this.setState({sCollapsed:n}),this.$emit("update:collapsed",n),this.$emit("collapse",n,t)},toggle:function(){var n=!this.sCollapsed;this.setCollapsed(n,"clickTrigger")},belowShowChange:function(){this.setState({belowShow:!this.belowShow})}},render:function(){var n,t=ce(ce({},vn(this)),this.$attrs),a=t.prefixCls,i=t.class,r=t.theme,l=t.collapsible,d=t.reverseArrow,s=t.style,u=t.width,c=t.collapsedWidth,h=t.zeroWidthTriggerStyle,m=xa(t,["prefixCls","class","theme","collapsible","reverseArrow","style","width","collapsedWidth","zeroWidthTriggerStyle"]),_=this.configProvider.getPrefixCls,f=_("layout-sider",a),x=ht(m,["collapsed","defaultCollapsed","onCollapse","breakpoint","onBreakpoint","siderHook","zeroWidthTriggerStyle","trigger"]),S=yt(this,"trigger"),C=this.sCollapsed?c:u,k=Xt(C)?"".concat(C,"px"):String(C),A=parseFloat(String(c||0))===0?v("span",{onClick:this.toggle,class:"".concat(f,"-zero-width-trigger ").concat(f,"-zero-width-trigger-").concat(d?"right":"left"),style:h},[v(en,null,null)]):null,R={expanded:d?v(Ge,null,null):v(Ln,null,null),collapsed:d?v(Ln,null,null):v(Ge,null,null)},F=this.sCollapsed?"collapsed":"expanded",L=R[F],P=S!==null?A||v("div",{class:"".concat(f,"-trigger"),onClick:this.toggle,style:{width:k}},[S||L]):null,T=ce(ce({},s),{flex:"0 0 ".concat(k),maxWidth:k,minWidth:k,width:k}),q=bn(i,f,"".concat(f,"-").concat(r),(n={},_e(n,"".concat(f,"-collapsed"),!!this.sCollapsed),_e(n,"".concat(f,"-has-trigger"),l&&S!==null&&!A),_e(n,"".concat(f,"-below"),!!this.below),_e(n,"".concat(f,"-zero-width"),parseFloat(k)===0),n));return v("aside",Bn(Bn({class:q},x),{},{style:T}),[v("div",{class:"".concat(f,"-children")},[_t(this)]),l||this.below&&A?P:null])}});N.Sider=wa,N.install=function(e){return e.component(N.name,N),e.component(N.Header.name,N.Header),e.component(N.Footer.name,N.Footer),e.component(N.Sider.name,N.Sider),e.component(N.Content.name,N.Content),e};var ka={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z"}}]},name:"menu-fold",theme:"outlined"};function Ma(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?Object(arguments[n]):{},a=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),a.forEach(function(i){Ta(e,i,t[i])})}return e}function Ta(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var nn=function(n,t){var a=Ma({},n,t.attrs);return v(Be,D(a,{icon:ka}),null)};nn.displayName="MenuFoldOutlined",nn.inheritAttrs=!1;var $a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z"}}]},name:"menu-unfold",theme:"outlined"};function Oa(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?Object(arguments[n]):{},a=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),a.forEach(function(i){Ia(e,i,t[i])})}return e}function Ia(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var tn=function(n,t){var a=Oa({},n,t.attrs);return v(Be,D(a,{icon:$a}),null)};tn.displayName="MenuUnfoldOutlined",tn.inheritAttrs=!1;var Xo=`/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
/* stylelint-disable no-duplicate-selectors */
/* stylelint-disable */
/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
.ant-layout {
  display: flex;
  flex: auto;
  flex-direction: column;
  /* fix firefox can't set height smaller than content on flex item */
  min-height: 0;
  background: #f0f2f5;
}
.ant-layout,
.ant-layout * {
  box-sizing: border-box;
}
.ant-layout.ant-layout-has-sider {
  flex-direction: row;
}
.ant-layout.ant-layout-has-sider > .ant-layout,
.ant-layout.ant-layout-has-sider > .ant-layout-content {
  overflow-x: hidden;
}
.ant-layout-header,
.ant-layout-footer {
  flex: 0 0 auto;
}
.ant-layout-header {
  height: 64px;
  padding: 0 50px;
  line-height: 64px;
  background: #001529;
}
.ant-layout-footer {
  padding: 24px 50px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  background: #f0f2f5;
}
.ant-layout-content {
  flex: auto;
  /* fix firefox can't set height smaller than content on flex item */
  min-height: 0;
}
.ant-layout-sider {
  position: relative;
  /* fix firefox can't set width smaller than content on flex item */
  min-width: 0;
  background: #001529;
  transition: all 0.2s;
}
.ant-layout-sider-children {
  height: 100%;
  margin-top: -0.1px;
  padding-top: 0.1px;
}
.ant-layout-sider-has-trigger {
  padding-bottom: 48px;
}
.ant-layout-sider-right {
  order: 1;
}
.ant-layout-sider-trigger {
  position: fixed;
  bottom: 0;
  z-index: 1;
  height: 48px;
  color: #fff;
  line-height: 48px;
  text-align: center;
  background: #002140;
  cursor: pointer;
  transition: all 0.2s;
}
.ant-layout-sider-zero-width > * {
  overflow: hidden;
}
.ant-layout-sider-zero-width-trigger {
  position: absolute;
  top: 64px;
  right: -36px;
  z-index: 1;
  width: 36px;
  height: 42px;
  color: #fff;
  font-size: 18px;
  line-height: 42px;
  text-align: center;
  background: #001529;
  border-radius: 0 2px 2px 0;
  cursor: pointer;
  transition: background 0.3s ease;
}
.ant-layout-sider-zero-width-trigger:hover {
  background: #192c3e;
}
.ant-layout-sider-zero-width-trigger-right {
  left: -36px;
  border-radius: 2px 0 0 2px;
}
.ant-layout-sider-light {
  background: #fff;
}
.ant-layout-sider-light .ant-layout-sider-trigger {
  color: rgba(0, 0, 0, 0.85);
  background: #fff;
}
.ant-layout-sider-light .ant-layout-sider-zero-width-trigger {
  color: rgba(0, 0, 0, 0.85);
  background: #fff;
}
`,Zo=`.vben-layout-menu-logo {
  height: 48px;
  padding: 10px 4px 10px 10px;
}
.vben-layout-menu-logo img {
  width: 32px;
  height: 32px;
}
.vben-layout-menu--mobile .vben-app-logo__title {
  opacity: 1;
}
`;const La={items:{type:Array,default:()=>[]},collapsedShowTitle:w.bool,inlineIndent:w.number.def(20),mode:{type:String,default:ee.INLINE},type:{type:String,default:hn.MIX},theme:w.string.def(xt.DARK),inlineCollapsed:w.bool,mixSider:w.bool,isHorizontal:w.bool,accordion:w.bool.def(!0),beforeClickFn:{type:Function}},Dn={item:{type:Object,default:{}},level:w.number,theme:w.oneOf(["dark","light"]),showTitle:w.bool,isHorizontal:w.bool},jn={item:{type:Object,default:null},showTitle:w.bool.def(!0),level:w.number.def(0),isHorizontal:w.bool.def(!0)},{t:Pa}=fe();var an=O({name:"MenuItemContent",components:{Icon:Te,MenuItemTag:W(()=>K(()=>import("./MenuItemTag.5ee79f22.js"),["/assets/MenuItemTag.5ee79f22.js","/assets/index.de7a3c72.js","/assets/index.3100f8d1.css","/assets/isNumeric.2bec345d.js","/assets/RightOutlined.dcad5eff.js","/assets/LeftOutlined.6e782dc0.js","/assets/index.55f43c00.js","/assets/index.45c1fb22.css","/assets/EllipsisOutlined.ba16b190.js","/assets/types.ead79a33.js","/assets/isEqual.42834150.js","/assets/toInteger.e48028d2.js","/assets/index.95c10fda.js","/assets/index.20066e29.css","/assets/useTimeout.5494657f.js","/assets/useHeaderSetting.0d239ac1.js","/assets/domUtils.aa6aef94.js","/assets/_stringToArray.9f34c09e.js","/assets/useSortable.10178c08.js","/assets/index.b5f656c2.js","/assets/index.f0b9f139.css","/assets/index.cf88fb23.js","/assets/index.121e7eba.css","/assets/useScrollTo.3c6228cf.js","/assets/animation.29409132.js","/assets/index.2865f037.js","/assets/index.821438c4.css","/assets/useWindowSizeFn.5bd3f00e.js","/assets/usePageContext.05da5891.js","/assets/index.4e4cdfc2.js","/assets/index.864ac48e.css","/assets/clickOutside.5a8b0ef7.js","/assets/index.dad53a49.js","/assets/index.26261c72.css","/assets/UpOutlined.b1a0aa74.js","/assets/DownOutlined.2e949c36.js","/assets/PlusOutlined.20641b62.js","/assets/index.967c47da.js"]))},props:jn,setup(e){const{prefixCls:n}=z("basic-menu-item-content"),t=p(()=>{var r;return Pa((r=e.item)==null?void 0:r.name)}),a=p(()=>{var r;return(r=e.item)==null?void 0:r.icon}),i=p(()=>{const{showTitle:r}=e;return{[`${n}--show-title`]:r,[`${n}__name`]:!r}});return{prefixCls:n,getNameClass:i,getI18nName:t,getIcon:a}}});function Ha(e,n,t,a,i,r){const l=y("Icon"),d=y("MenuItemTag");return b(),g("span",{class:`${e.prefixCls}-wrapper`},[e.getIcon?(b(),g(l,{key:0,icon:e.getIcon,size:18,class:`${e.prefixCls}-wrapper__icon`},null,8,["icon","class"])):M("",!0),v("span",{class:e.getNameClass},[Ct(ne(e.getI18nName)+" ",1),v(d,e.$props,null,16)],2)],2)}an.render=Ha;var Wn=O({name:"BasicMenuItem",components:{MenuItem:Pe.Item,MenuItemContent:an},props:Dn,setup(e){const{prefixCls:n}=z("basic-menu-item"),t=p(()=>{const{level:a,theme:i}=e;return[`${n}__level${a}`,i]});return{prefixCls:n,getLevelClass:t}}});function Ea(e,n,t,a,i,r){const l=y("MenuItemContent"),d=y("MenuItem");return b(),g(d,{class:e.getLevelClass},{default:$(()=>[v(l,D(e.$props,{item:e.item}),null,16,["item"])]),_:1},8,["class"])}Wn.render=Ea;var Kn=O({name:"BasicSubMenuItem",isSubMenu:!0,components:{BasicMenuItem:Wn,SubMenu:Pe.SubMenu,MenuItem:Pe.Item,MenuItemContent:an},props:Dn,setup(e){const{prefixCls:n}=z("basic-menu-item"),t=p(()=>{var i;return!((i=e.item.meta)==null?void 0:i.hideMenu)});function a(i){return Reflect.has(i,"children")&&!!i.children&&i.children.length>0}return{prefixCls:n,menuHasChildren:a,getShowMenu:t}}});function Aa(e,n,t,a,i,r){const l=y("BasicMenuItem"),d=y("MenuItemContent"),s=y("_self"),u=y("SubMenu");return b(),g(j,null,[!e.menuHasChildren(e.item)&&e.getShowMenu?(b(),g(l,D({key:0},e.$props),null,16)):M("",!0),e.menuHasChildren(e.item)&&e.getShowMenu?(b(),g(u,{key:1,class:[`${e.prefixCls}__level${e.level}`,e.theme]},{title:$(()=>[v(d,D(e.$props,{item:e.item}),null,16,["item"])]),default:$(()=>[(b(!0),g(j,null,oe(e.item.children||[],c=>(b(),g(s,D({key:c.path},e.$props,{item:c,level:e.level+1}),null,16,["item","level"]))),128))]),_:1},8,["class"])):M("",!0)],64)}Kn.render=Aa;function za(e,n,t,a){const{getCollapsed:i,getIsMixSidebar:r}=V();async function l(c){if(t.value===ee.HORIZONTAL)return;const h=o(r);Pn(()=>{const m=$e(n.value);if((m==null?void 0:m.length)===0){e.openKeys=[];return}o(a)?e.openKeys=Fe(m,c):e.openKeys=yn([...e.openKeys,...Fe(m,c)])},16,!h)}const d=p(()=>(o(r)?!1:o(i))?e.collapsedOpenKeys:e.openKeys);function s(){e.selectedKeys=[],e.openKeys=[]}function u(c){if(o(t)===ee.HORIZONTAL||!o(a)||o(r))e.openKeys=c;else{const h=[];for(const{children:m,path:_}of o(n))m&&m.length>0&&h.push(_);if(o(i))e.collapsedOpenKeys=c;else{const m=c.find(_=>e.openKeys.indexOf(_)===-1);h.indexOf(m)===-1?e.openKeys=c:e.openKeys=m?[m]:[]}}}return{setOpenKeys:l,resetKeys:s,getOpenKeys:d,handleOpenChange:u}}var Vn=O({name:"BasicMenu",components:{Menu:Pe,BasicSubMenuItem:Kn},props:La,emits:["menuClick"],setup(e,{emit:n}){const t=I(!1),a=I(""),i=he({defaultSelectedKeys:[],openKeys:[],selectedKeys:[],collapsedOpenKeys:[]}),{prefixCls:r}=z("basic-menu"),{items:l,mode:d,accordion:s}=ae(e),{getCollapsed:u,getIsHorizontal:c,getTopMenuAlign:h,getSplit:m}=V(),{currentRoute:_}=De(),{handleOpenChange:f,setOpenKeys:x,getOpenKeys:S}=za(i,l,d,s),C=p(()=>{const{type:P,mode:T}=e;return P===hn.TOP_MENU&&T===ee.HORIZONTAL||e.isHorizontal&&o(m)}),k=p(()=>{const P=e.isHorizontal&&o(m)?"start":o(h);return[r,`justify-${P}`,{[`${r}--hide-title`]:!o(A),[`${r}--collapsed-show-title`]:e.collapsedShowTitle,[`${r}__second`]:!e.isHorizontal&&o(m),[`${r}__sidebar-hor`]:o(C)}]}),A=p(()=>e.collapsedShowTitle&&o(u)),R=p(()=>{const P=e.mode===ee.INLINE,T={};return P&&(T.inlineCollapsed=e.mixSider?!1:o(u)),T});Oe(P=>{var T;P.name!==je&&(L(P),a.value=(T=P.meta)==null?void 0:T.currentActiveMenu,o(a)&&(i.selectedKeys=[o(a)],x(o(a))))}),!e.mixSider&&ie(()=>e.items,()=>{L()});async function F({key:P,keyPath:T}){const{beforeClickFn:q}=e;q&&_n(q)&&!await q(P)||(n("menuClick",P),t.value=!0,i.openKeys=T,i.selectedKeys=[P])}async function L(P){if(o(t)){t.value=!1;return}const T=(P||o(_)).path;if(x(T),!o(a))if(e.isHorizontal&&o(m)){const q=await He(T);i.selectedKeys=[q]}else i.selectedKeys=[T]}return te({prefixCls:r,getIsHorizontal:c,handleMenuClick:F,getInlineCollapseOptions:R,getMenuClass:k,handleOpenChange:f,getOpenKeys:S,showTitle:A},ae(i))}}),Jo=`.vben-basic-menu {
  width: 100%;
}
.vben-basic-menu .vben-basic-menu-item-content--show-title {
  max-width: unset !important;
  opacity: 1 !important;
}
.vben-basic-menu--hide-title.ant-menu-inline-collapsed > .ant-menu-item,
.vben-basic-menu--hide-title.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-item,
.vben-basic-menu--hide-title.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-submenu > .ant-menu-submenu-title,
.vben-basic-menu--hide-title.ant-menu-inline-collapsed .ant-menu-submenu-title {
  padding-right: 16px !important;
  padding-left: 16px !important;
}
.vben-basic-menu--collapsed-show-title.ant-menu-inline-collapsed .vben-basic-menu-item__level1 {
  padding: 2px 0;
  justify-content: center !important;
}
.vben-basic-menu--collapsed-show-title.ant-menu-inline-collapsed .vben-basic-menu-item__level1.ant-menu-item {
  display: flex;
  align-items: center;
  height: 60px !important;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  line-height: 60px !important;
}
.vben-basic-menu--collapsed-show-title.ant-menu-inline-collapsed .vben-basic-menu-item__level1.ant-menu-item > span {
  margin-top: 10px;
}
.vben-basic-menu--collapsed-show-title.ant-menu-inline-collapsed > li[role='menuitem']:not(.ant-menu-submenu),
.vben-basic-menu--collapsed-show-title.ant-menu-inline-collapsed > li > .ant-menu-submenu-title {
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  flex-direction: column;
  align-items: center;
  line-height: 24px;
}
.vben-basic-menu--collapsed-show-title.ant-menu-inline-collapsed > li > .ant-menu-submenu-title {
  line-height: 24px;
}
.vben-basic-menu--collapsed-show-title.ant-menu-inline-collapsed .vben-basic-menu-item-content-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.vben-basic-menu--collapsed-show-title.ant-menu-inline-collapsed .vben-basic-menu-item-content-wrapper .vben-basic-menu-item-content--show-title {
  line-height: 30px;
}
.vben-basic-menu.ant-menu-inline-collapsed > .ant-menu-item,
.vben-basic-menu.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-item,
.vben-basic-menu.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-submenu > .ant-menu-submenu-title,
.vben-basic-menu.ant-menu-inline-collapsed .ant-menu-submenu-title {
  padding-right: 16px !important;
  padding-left: 16px !important;
}
.vben-basic-menu .vben-basic-menu-item-content-wrapper {
  width: 100%;
  margin-top: 4px;
}
.vben-basic-menu .vben-basic-menu-item-content-wrapper__icon {
  vertical-align: text-top;
}
.vben-basic-menu .ant-menu-item {
  transition: unset;
}
.vben-basic-menu__sidebar-hor.ant-menu-horizontal {
  display: flex;
  align-items: center;
}
.vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark {
  background: transparent;
}
.vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-submenu:hover,
.vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-item-open,
.vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-submenu-open,
.vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-item-selected,
.vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-submenu-selected,
.vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-item:hover,
.vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-item-active,
.vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
.vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-submenu-active,
.vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-submenu-title:hover {
  color: #fff;
  background: var(--header-active-menu-bg-color) !important;
}
.vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-item:hover,
.vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-item-active,
.vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
.vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-submenu-active,
.vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-submenu-title:hover {
  background: var(--header-active-menu-bg-color);
}
.vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .vben-basic-menu-item__level1 {
  background: transparent;
}
.vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .vben-basic-menu-item__level1.ant-menu-item-selected,
.vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .vben-basic-menu-item__level1.ant-menu-submenu-selected {
  background: var(--header-active-menu-bg-color) !important;
}
.vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-item.vben-basic-menu-item__level1,
.vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-submenu.vben-basic-menu-item__level1,
.vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-item .ant-menu-submenu-title,
.vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-submenu .ant-menu-submenu-title {
  height: 48px;
  line-height: 48px;
}
.vben-basic-menu.ant-menu-dark:not(.vben-basic-menu__sidebar-hor):not(.vben-basic-menu__second) .ant-menu-item:not(.vben-basic-menu-item__level1),
.vben-basic-menu.ant-menu-dark:not(.vben-basic-menu__sidebar-hor):not(.vben-basic-menu__second) .ant-menu-sub.ant-menu-inline > .ant-menu-item,
.vben-basic-menu.ant-menu-dark:not(.vben-basic-menu__sidebar-hor):not(.vben-basic-menu__second) .ant-menu-sub.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
  height: 42px;
  margin: 0;
  line-height: 42px;
}
.vben-basic-menu.ant-menu-dark:not(.vben-basic-menu__sidebar-hor):not(.vben-basic-menu__second) .ant-menu-item.vben-basic-menu-item__level1 {
  height: 42px;
  line-height: 42px;
}
.vben-basic-menu.ant-menu-dark:not(.vben-basic-menu__sidebar-hor) {
  overflow: hidden;
  background: var(--sider-dark-bg-color);
}
.vben-basic-menu.ant-menu-dark:not(.vben-basic-menu__sidebar-hor) .ant-menu-item-selected,
.vben-basic-menu.ant-menu-dark:not(.vben-basic-menu__sidebar-hor) .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
  color: #fff;
  background: linear-gradient(118deg, rgba(1, 143, 251, 0.8), #018ffb) !important;
}
.vben-basic-menu.ant-menu-dark:not(.vben-basic-menu__sidebar-hor) .ant-menu-item.ant-menu-item-selected.vben-basic-menu-menu-item__level1,
.vben-basic-menu.ant-menu-dark:not(.vben-basic-menu__sidebar-hor) .ant-menu-submenu-selected.vben-basic-menu-menu-item__level1 {
  color: #fff;
}
.vben-basic-menu.ant-menu-dark:not(.vben-basic-menu__sidebar-hor) .vben-basic-menu-item__level1 {
  background-color: var(--sider-dark-bg-color);
}
.vben-basic-menu.ant-menu-dark:not(.vben-basic-menu__sidebar-hor) .vben-basic-menu-item__level1 > .ant-menu-sub > li {
  background-color: var(--sider-dark-lighten-1-bg-color);
}
.vben-basic-menu.ant-menu-dark:not(.vben-basic-menu__sidebar-hor) .vben-basic-menu-item__level2:not(.ant-menu-item-selected),
.vben-basic-menu.ant-menu-dark:not(.vben-basic-menu__sidebar-hor) .ant-menu-sub {
  background-color: var(--sider-dark-lighten-1-bg-color);
}
.vben-basic-menu.ant-menu-dark:not(.vben-basic-menu__sidebar-hor) .vben-basic-menu-item__level3:not(.ant-menu-item-selected) {
  background-color: var(--sider-dark-lighten-2-bg-color);
}
.vben-basic-menu.ant-menu-dark:not(.vben-basic-menu__sidebar-hor) .vben-basic-menu-item__level3:not(.ant-menu-item-selected) .ant-menu-item {
  background-color: var(--sider-dark-lighten-2-bg-color);
}
.vben-basic-menu.ant-menu-dark:not(.vben-basic-menu__sidebar-hor) .ant-menu-submenu-title {
  display: flex;
  height: 42px;
  align-items: center;
}
.vben-basic-menu.ant-menu-dark:not(.vben-basic-menu__sidebar-hor).ant-menu-inline-collapsed .ant-menu-submenu-selected,
.vben-basic-menu.ant-menu-dark:not(.vben-basic-menu__sidebar-hor).ant-menu-inline-collapsed .ant-menu-item-selected {
  position: relative;
  font-weight: 500;
  color: #fff;
  background: var(--sider-dark-darken-bg-color) !important;
}
.vben-basic-menu.ant-menu-dark:not(.vben-basic-menu__sidebar-hor).ant-menu-inline-collapsed .ant-menu-submenu-selected::before,
.vben-basic-menu.ant-menu-dark:not(.vben-basic-menu__sidebar-hor).ant-menu-inline-collapsed .ant-menu-item-selected::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: #018ffb;
  content: '';
}
.vben-basic-menu.ant-menu-light:not(.vben-basic-menu__sidebar-hor) {
  border-right: none;
}
.vben-basic-menu.ant-menu-light:not(.vben-basic-menu__sidebar-hor) .ant-menu-item.ant-menu-item-selected.vben-basic-menu-menu-item__level1,
.vben-basic-menu.ant-menu-light:not(.vben-basic-menu__sidebar-hor) .ant-menu-submenu-selected.vben-basic-menu-menu-item__level1 {
  color: #018ffb;
}
.vben-basic-menu.vben-basic-menu__second.ant-menu-inline-collapsed:not(.vben-basic-menu__sidebar-hor) .vben-basic-menu-item__level1 {
  display: flex;
  height: 58.8px;
  padding: 6px 0 !important;
  margin: 0;
  font-size: 12px;
  line-height: 42px;
  align-items: center;
  text-align: center;
}
.vben-basic-menu.vben-basic-menu__second.ant-menu-inline-collapsed:not(.vben-basic-menu__sidebar-hor) .vben-basic-menu-item__level1 > div {
  padding: 6px 0 !important;
  font-size: 12px;
}
.vben-basic-menu.vben-basic-menu__second.ant-menu-inline-collapsed:not(.vben-basic-menu__sidebar-hor) .vben-basic-menu-item__level1 .vben-basic-menu-item-content__name {
  display: inline-block;
  width: 50%;
  overflow: hidden;
}
.vben-basic-menu .ant-menu-submenu,
.vben-basic-menu .ant-menu-submenu-inline {
  transition: unset;
}
.vben-basic-menu .ant-menu-inline.ant-menu-sub {
  box-shadow: unset !important;
  transition: unset;
}
.ant-menu-dark.ant-menu-submenu-popup > ul {
  background: var(--sider-dark-bg-color);
}
.ant-menu-dark.ant-menu-submenu-popup .ant-menu-item-selected,
.ant-menu-dark.ant-menu-submenu-popup .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
  color: #fff;
  background: linear-gradient(118deg, rgba(1, 143, 251, 0.8), #018ffb) !important;
}
.ant-menu-item > .vben-basic-menu-item-content__name,
.ant-menu-submenu-title > .vben-basic-menu-item-content__name {
  width: 100%;
}
.ant-menu-item > .vben-basic-menu-item-content__name .vben-basic-menu-item-tag,
.ant-menu-submenu-title > .vben-basic-menu-item-content__name .vben-basic-menu-item-tag {
  float: right;
  margin-top: 42px / 2;
  transform: translate(0%, -50%);
}
.vben-basic-menu-item-tag {
  position: absolute;
  top: calc(50% - 8px);
  right: 30px;
  display: inline-block;
  padding: 2px 4px;
  margin-right: 4px;
  font-size: 12px;
  line-height: 14px;
  color: #fff;
  border-radius: 2px;
}
.vben-basic-menu-item-tag--dot {
  top: calc(50% - 4px);
  width: 6px;
  height: 6px;
  padding: 0;
  border-radius: 50%;
}
.vben-basic-menu-item-tag--primary {
  background: #018ffb;
}
.vben-basic-menu-item-tag--error {
  background: #ED6F6F;
}
.vben-basic-menu-item-tag--success {
  background: #55D187;
}
.vben-basic-menu-item-tag--warn {
  background: #EFBD47;
}
`;function Na(e,n,t,a,i,r){const l=y("BasicSubMenuItem"),d=y("Menu");return b(),g(d,D({selectedKeys:e.selectedKeys,defaultSelectedKeys:e.defaultSelectedKeys,mode:e.mode,openKeys:e.getOpenKeys,inlineIndent:e.inlineIndent,theme:e.theme,onOpenChange:e.handleOpenChange,class:e.getMenuClass,onClick:e.handleMenuClick,subMenuOpenDelay:.2},e.getInlineCollapseOptions),{default:$(()=>[(b(!0),g(j,null,oe(e.items,s=>(b(),g(l,{key:s.path,item:s,theme:e.theme,level:1,showTitle:e.showTitle,isHorizontal:e.isHorizontal},null,8,["item","theme","showTitle","isHorizontal"]))),128))]),_:1},16,["selectedKeys","defaultSelectedKeys","mode","openKeys","inlineIndent","theme","onOpenChange","class","onClick","subMenuOpenDelay"])}Vn.render=Na;const Ra=W(()=>K(()=>import("./MenuItemTag.5ee79f22.js"),["/assets/MenuItemTag.5ee79f22.js","/assets/index.de7a3c72.js","/assets/index.3100f8d1.css","/assets/isNumeric.2bec345d.js","/assets/RightOutlined.dcad5eff.js","/assets/LeftOutlined.6e782dc0.js","/assets/index.55f43c00.js","/assets/index.45c1fb22.css","/assets/EllipsisOutlined.ba16b190.js","/assets/types.ead79a33.js","/assets/isEqual.42834150.js","/assets/toInteger.e48028d2.js","/assets/index.95c10fda.js","/assets/index.20066e29.css","/assets/useTimeout.5494657f.js","/assets/useHeaderSetting.0d239ac1.js","/assets/domUtils.aa6aef94.js","/assets/_stringToArray.9f34c09e.js","/assets/useSortable.10178c08.js","/assets/index.b5f656c2.js","/assets/index.f0b9f139.css","/assets/index.cf88fb23.js","/assets/index.121e7eba.css","/assets/useScrollTo.3c6228cf.js","/assets/animation.29409132.js","/assets/index.2865f037.js","/assets/index.821438c4.css","/assets/useWindowSizeFn.5bd3f00e.js","/assets/usePageContext.05da5891.js","/assets/index.4e4cdfc2.js","/assets/index.864ac48e.css","/assets/clickOutside.5a8b0ef7.js","/assets/index.dad53a49.js","/assets/index.26261c72.css","/assets/UpOutlined.b1a0aa74.js","/assets/DownOutlined.2e949c36.js","/assets/PlusOutlined.20641b62.js","/assets/index.967c47da.js"])),Un=Symbol();function Ba(e){return St(e,Un,{readonly:!1,native:!0})}function qn(){return wt(Un)}var Gn=O({name:"Menu",props:{theme:w.oneOf(["light","dark"]).def("light"),activeName:w.oneOfType([w.string,w.number]),openNames:{type:Array,default:[]},accordion:w.bool.def(!0),width:w.string.def("100%"),collapsedWidth:w.string.def("48px"),indentSize:w.number.def(16),collapse:w.bool.def(!0),activeSubMenuNames:{type:Array,default:[]}},emits:["select","open-change"],setup(e,{emit:n}){const t=new Cn,a=Ke(),i=I(""),r=I([]),{prefixCls:l}=z("menu"),d=I(!1);Ba({rootMenuEmitter:t,activeName:i});const s=p(()=>{const{theme:f}=e;return[l,`${l}-${f}`,`${l}-vertical`,{[`${l}-collapse`]:e.collapse}]});xn(()=>{r.value=e.openNames}),xn(()=>{e.activeName&&(i.value=e.activeName)}),ie(()=>e.openNames,()=>{ve(()=>{u()})});function u(){t.emit("on-update-opened",r.value)}function c(f){r.value.includes(f)||(r.value.push(f),u())}function h(f){r.value=r.value.filter(x=>x!==f),u()}function m(){r.value=[],u()}function _(f){f!==-1&&(r.value=r.value.slice(0,f+1),u())}return ke(`subMenu:${a==null?void 0:a.uid}`,{addSubMenu:c,removeSubMenu:h,getOpenNames:()=>r.value,removeAll:m,isRemoveAllPopup:d,sliceIndex:_,level:0,props:e}),We(()=>{r.value=e.collapse?[]:[...e.openNames],u(),t.on("on-menu-item-select",f=>{i.value=f,ve(()=>{e.collapse&&m()}),n("select",f)})}),{getClass:s,openedNames:r}}}),ei=`.light-border::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: block;
  width: 2px;
  background: #018ffb;
  content: '';
}
.vben-menu-menu-popover .ant-popover-arrow {
  display: none;
}
.vben-menu-menu-popover .ant-popover-inner-content {
  padding: 0;
}
.vben-menu-menu-popover .vben-menu-opened > * > .vben-menu-menu-popover .vben-menu-submenu-title-icon {
  transform: translateY(-50%) rotate(90deg) !important;
}
.vben-menu-menu-popover .vben-menu-item,
.vben-menu-menu-popover .vben-menu-submenu-title {
  position: relative;
  z-index: 1;
  padding: 12px 20px;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.vben-menu-menu-popover .vben-menu-item-icon,
.vben-menu-menu-popover .vben-menu-submenu-title-icon {
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%) rotate(-90deg);
  transition: transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.vben-menu-menu-popover .vben-menu-dark .vben-menu-item,
.vben-menu-menu-popover .vben-menu-dark .vben-menu-submenu-title {
  color: rgba(255, 255, 255, 0.7);
}
.vben-menu-menu-popover .vben-menu-dark .vben-menu-item:hover,
.vben-menu-menu-popover .vben-menu-dark .vben-menu-submenu-title:hover {
  color: #fff;
}
.vben-menu-menu-popover .vben-menu-dark .vben-menu-item-selected,
.vben-menu-menu-popover .vben-menu-dark .vben-menu-submenu-title-selected {
  color: #fff;
  background: #018ffb !important;
}
.vben-menu-menu-popover .vben-menu-light .vben-menu-item,
.vben-menu-menu-popover .vben-menu-light .vben-menu-submenu-title {
  color: rgba(0, 0, 0, 0.85);
}
.vben-menu-menu-popover .vben-menu-light .vben-menu-item:hover,
.vben-menu-menu-popover .vben-menu-light .vben-menu-submenu-title:hover {
  color: #018ffb;
}
.vben-menu-menu-popover .vben-menu-light .vben-menu-item-selected,
.vben-menu-menu-popover .vben-menu-light .vben-menu-submenu-title-selected {
  z-index: 2;
  color: #018ffb;
  background: rgba(1, 143, 251, 0.08);
}
.vben-menu-menu-popover .vben-menu-light .vben-menu-item-selected::after,
.vben-menu-menu-popover .vben-menu-light .vben-menu-submenu-title-selected::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: block;
  width: 2px;
  background: #018ffb;
  content: '';
}
.vben-menu {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.85);
  list-style: none;
  outline: none;
}
.vben-menu .collapse-transition {
  transition: 0.2s height ease-in-out, 0.2s padding-top ease-in-out, 0.2s padding-bottom ease-in-out;
}
.vben-menu-light {
  background: #fff;
}
.vben-menu-light .vben-menu-submenu-active {
  color: #018ffb !important;
}
.vben-menu-light .vben-menu-submenu-active-border::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: block;
  width: 2px;
  background: #018ffb;
  content: '';
}
.vben-menu-dark .vben-menu-submenu-active {
  color: #fff !important;
}
.vben-menu-item {
  position: relative;
  z-index: 1;
  display: flex;
  font-size: 14px;
  color: inherit;
  list-style: none;
  cursor: pointer;
  outline: none;
  align-items: center;
}
.vben-menu-item:hover,
.vben-menu-item:active {
  color: inherit;
}
.vben-menu-item > i {
  margin-right: 6px;
}
.vben-menu-submenu-title > i,
.vben-menu-submenu-title span > i {
  margin-right: 8px;
}
.vben-menu-vertical .vben-menu-item,
.vben-menu-vertical .vben-menu-submenu-title {
  position: relative;
  z-index: 1;
  padding: 12px 24px;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.vben-menu-vertical .vben-menu-item:hover,
.vben-menu-vertical .vben-menu-submenu-title:hover {
  color: #018ffb;
}
.vben-menu-vertical .vben-menu-item .vben-menu-tooltip,
.vben-menu-vertical .vben-menu-submenu-title .vben-menu-tooltip {
  width: calc(100% - 0px);
  padding: 12px 0;
  text-align: center;
}
.vben-menu-vertical .vben-menu-item .vben-menu-submenu-popup,
.vben-menu-vertical .vben-menu-submenu-title .vben-menu-submenu-popup {
  padding: 12px 0;
}
.vben-menu-vertical .vben-menu-submenu-collapse .vben-menu-submenu-popup {
  display: flex;
  justify-content: center;
  align-items: center;
}
.vben-menu-vertical .vben-menu-submenu-collapse .vben-menu-submenu-collapsed-show-tit {
  flex-direction: column;
}
.vben-menu-vertical.vben-menu-collapse .vben-menu-item,
.vben-menu-vertical.vben-menu-collapse .vben-menu-submenu-title {
  padding: 0 0;
}
.vben-menu-vertical .vben-menu-submenu-title-icon {
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
}
.vben-menu-submenu-title-icon {
  transition: transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.vben-menu-vertical .vben-menu-opened > * > .vben-menu-submenu-title-icon {
  transform: translateY(-50%) rotate(180deg);
}
.vben-menu-vertical .vben-menu-submenu-nested {
  padding-left: 20px;
}
.vben-menu-vertical .vben-menu-submenu .vben-menu-item {
  padding-left: 43px;
}
.vben-menu-light.vben-menu-vertical .vben-menu-item-active:not(.vben-menu-submenu) {
  z-index: 2;
  color: #018ffb;
  background: rgba(1, 143, 251, 0.08);
}
.vben-menu-light.vben-menu-vertical .vben-menu-item-active:not(.vben-menu-submenu)::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: block;
  width: 2px;
  background: #018ffb;
  content: '';
}
.vben-menu-light.vben-menu-vertical .vben-menu-item-active.vben-menu-submenu {
  color: #018ffb;
}
.vben-menu-light.vben-menu-vertical.vben-menu-collapse > li.vben-menu-item-active,
.vben-menu-light.vben-menu-vertical.vben-menu-collapse .vben-menu-submenu-active {
  position: relative;
  background: rgba(1, 143, 251, 0.03);
}
.vben-menu-light.vben-menu-vertical.vben-menu-collapse > li.vben-menu-item-active::after,
.vben-menu-light.vben-menu-vertical.vben-menu-collapse .vben-menu-submenu-active::after {
  display: none;
}
.vben-menu-light.vben-menu-vertical.vben-menu-collapse > li.vben-menu-item-active::before,
.vben-menu-light.vben-menu-vertical.vben-menu-collapse .vben-menu-submenu-active::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: #018ffb;
  content: '';
}
.vben-menu-dark.vben-menu-vertical .vben-menu-item,
.vben-menu-dark.vben-menu-vertical .vben-menu-submenu-title {
  color: rgba(255, 255, 255, 0.7);
}
.vben-menu-dark.vben-menu-vertical .vben-menu-item-active:not(.vben-menu-submenu),
.vben-menu-dark.vben-menu-vertical .vben-menu-submenu-title-active:not(.vben-menu-submenu) {
  color: #fff !important;
  background: #018ffb !important;
}
.vben-menu-dark.vben-menu-vertical .vben-menu-item:hover,
.vben-menu-dark.vben-menu-vertical .vben-menu-submenu-title:hover {
  color: #fff;
}
.vben-menu-dark.vben-menu-vertical.vben-menu-collapse > li.vben-menu-item-active,
.vben-menu-dark.vben-menu-vertical.vben-menu-collapse .vben-menu-submenu-active {
  position: relative;
  color: #fff !important;
  background-color: var(--sider-dark-darken-bg-color) !important;
}
.vben-menu-dark.vben-menu-vertical.vben-menu-collapse > li.vben-menu-item-active::before,
.vben-menu-dark.vben-menu-vertical.vben-menu-collapse .vben-menu-submenu-active::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: #018ffb;
  content: '';
}
.vben-menu-dark.vben-menu-vertical.vben-menu-collapse > li.vben-menu-item-active .vben-menu-submenu-collapse,
.vben-menu-dark.vben-menu-vertical.vben-menu-collapse .vben-menu-submenu-active .vben-menu-submenu-collapse {
  background-color: transparent;
}
.vben-menu-dark.vben-menu-vertical .vben-menu-submenu .vben-menu-item-active,
.vben-menu-dark.vben-menu-vertical .vben-menu-submenu .vben-menu-item-active:hover {
  color: #fff;
  border-right: none;
}
.vben-menu-dark.vben-menu-vertical .vben-menu-child-item-active > .vben-menu-submenu-title {
  color: #fff;
}
.vben-menu-dark.vben-menu-vertical .vben-menu-opened .vben-menu-submenu-has-parent-submenu .vben-menu-submenu-title {
  background: transparent;
}
`;function Fa(e,n,t,a,i,r){return b(),g("ul",{class:e.getClass},[Q(e.$slots,"default")],2)}Gn.render=Fa;function Yn(e){const n=p(()=>r(["Menu","SubMenu"])),t=p(()=>r(["Menu"])),a=p(()=>r(["SubMenu"])),i=p(()=>{var h,m,_;let s=e==null?void 0:e.parent;if(!s)return{};const u=(m=(h=o(t))==null?void 0:h.props.indentSize)!=null?m:20;let c=u;if((_=o(t))==null?void 0:_.props.collapse)c=u;else for(;s&&s.type.name!=="Menu";)s.type.name==="SubMenu"&&(c+=u),s=s.parent;return{paddingLeft:c+"px"}});function r(s){let u=e==null?void 0:e.parent;if(!u)return null;for(;u&&s.indexOf(u.type.name)===-1;)u=u.parent;return u}function l(){let s=e;if(!s)return{uidList:[],list:[]};const u=[];for(;s&&s.type.name!=="Menu";)s.type.name==="SubMenu"&&u.push(s),s=s.parent;return{uidList:u.map(c=>c.uid),list:u}}function d(s,u="SubMenu"){let c=s.parent;for(;c;){if(c.type.name!==u)return c;c=c.parent}return c}return{getParentMenu:n,getParentInstance:d,getParentRootMenu:t,getParentList:l,getParentSubMenu:a,getItemStyle:i}}var Qn=O({name:"MenuItem",components:{Tooltip:kt},props:{name:{type:[String,Number],required:!0},disabled:w.bool},setup(e,{slots:n}){const t=Ke(),a=I(!1),{getItemStyle:i,getParentList:r,getParentMenu:l,getParentRootMenu:d}=Yn(t),{prefixCls:s}=z("menu"),{rootMenuEmitter:u,activeName:c}=qn(),h=p(()=>[`${s}-item`,{[`${s}-item-active`]:o(a),[`${s}-item-selected`]:o(a),[`${s}-item-disabled`]:!!e.disabled}]),m=p(()=>{var x;return(x=o(d))==null?void 0:x.props.collapse}),_=p(()=>{var x;return((x=o(l))==null?void 0:x.type.name)==="Menu"&&o(m)&&n.title});function f(){const{disabled:x}=e;if(x||(u.emit("on-menu-item-select",e.name),o(m)))return;const{uidList:S}=r();u.emit("on-update-opened",{opend:!1,parent:t==null?void 0:t.parent,uidList:S})}return ie(()=>c.value,x=>{if(x===e.name){const{list:S,uidList:C}=r();a.value=!0,S.forEach(k=>{k.proxy&&(k.proxy.active=!0)}),u.emit("on-update-active-name:submenu",C)}else a.value=!1},{immediate:!0}),{getClass:h,prefixCls:s,getItemStyle:i,getCollapse:m,handleClickItem:f,showTooptip:_}}});function Da(e,n,t,a,i,r){const l=y("Tooltip");return b(),g("li",{class:e.getClass,onClick:n[1]||(n[1]=Sn((...d)=>e.handleClickItem&&e.handleClickItem(...d),["stop"])),style:e.getCollapse?{}:e.getItemStyle},[e.showTooptip?(b(),g(l,{key:0,placement:"right"},{title:$(()=>[Q(e.$slots,"title")]),default:$(()=>[v("div",{class:`${e.prefixCls}-tooltip`},[Q(e.$slots,"default")],2)]),_:3})):(b(),g(j,{key:1},[Q(e.$slots,"default"),Q(e.$slots,"title")],64))],6)}Qn.render=Da;var Xn=O({name:"MenuCollapseTransition",setup(){return{on:{beforeEnter(e){En(e,"collapse-transition"),e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.height="0",e.style.paddingTop=0,e.style.paddingBottom=0},enter(e){e.dataset.oldOverflow=e.style.overflow,e.scrollHeight!==0?(e.style.height=e.scrollHeight+"px",e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom):(e.style.height="",e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom),e.style.overflow="hidden"},afterEnter(e){An(e,"collapse-transition"),e.style.height="",e.style.overflow=e.dataset.oldOverflow},beforeLeave(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.height=e.scrollHeight+"px",e.style.overflow="hidden"},leave(e){e.scrollHeight!==0&&(En(e,"collapse-transition"),e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0)},afterLeave(e){An(e,"collapse-transition"),e.style.height="",e.style.overflow=e.dataset.oldOverflow,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom}}}}});function ja(e,n,t,a,i,r){return b(),g(Ve,D({mode:"out-in"},Mt(e.on)),{default:$(()=>[Q(e.$slots,"default")]),_:3},16)}Xn.render=ja;const Zn=200;var Jn=O({name:"SubMenu",components:{Icon:Te,MenuCollapseTransition:Xn,Popover:Jt},props:{name:{type:[String,Number],required:!0},disabled:w.bool,collapsedShowTitle:w.bool},setup(e){var we;const n=Ke(),t=he({active:!1,opened:!1}),a=he({timeout:null,mouseInChild:!1,isChild:!1}),{getParentSubMenu:i,getItemStyle:r,getParentMenu:l,getParentList:d}=Yn(n),{prefixCls:s}=z("menu"),u=new Cn,{rootMenuEmitter:c}=qn(),{addSubMenu:h,removeSubMenu:m,removeAll:_,getOpenNames:f,isRemoveAllPopup:x,sliceIndex:S,level:C,props:k,handleMouseleave:A}=Me(`subMenu:${(we=l.value)==null?void 0:we.uid}`),R=p(()=>[`${s}-submenu`,{[`${s}-item-active`]:t.active,[`${s}-opened`]:t.opened,[`${s}-submenu-disabled`]:e.disabled,[`${s}-submenu-has-parent-submenu`]:o(i),[`${s}-child-item-active`]:t.active}]),F=p(()=>k.accordion),L=p(()=>k.collapse),P=p(()=>k.theme),T=p(()=>({minWidth:"200px"})),q=p(()=>{const E=e.name;return o(L)?f().includes(E):t.opened}),Ce=p(()=>{const E=k.activeSubMenuNames.includes(e.name);return[`${s}-submenu-title`,{[`${s}-submenu-active`]:E,[`${s}-submenu-active-border`]:E&&C===0,[`${s}-submenu-collapse`]:o(L)&&C===0}]});function ze(E){return o(L)?{onMouseenter:Se,onMouseleave:()=>se(E)}:{}}function Ne(){const{disabled:E}=e;if(E||o(L))return;const J=t.opened;if(o(F)){const{uidList:X}=d();c.emit("on-update-opened",{opend:!1,parent:n==null?void 0:n.parent,uidList:X})}t.opened=!J}function Se(){if(e.disabled)return;u.emit("submenu:mouse-enter-child");const J=f().findIndex(Z=>Z===e.name);S(J),C===0&&f().length===2&&_(),a.isChild=f().includes(e.name),clearTimeout(a.timeout),a.timeout=setTimeout(()=>{h(e.name)},Zn)}function se(E=!1){var X;((X=l.value)==null?void 0:X.props.name)||(x.value=!0),f().slice(-1)[0]===e.name&&(a.isChild=!1),u.emit("submenu:mouse-leave-child"),a.timeout&&(clearTimeout(a.timeout),a.timeout=setTimeout(()=>{x.value?_():a.mouseInChild||m(e.name)},Zn)),E&&i.value&&(A==null||A(!0))}Tt(()=>{u.on("submenu:mouse-enter-child",()=>{a.mouseInChild=!0,x.value=!1,clearTimeout(a.timeout)}),u.on("submenu:mouse-leave-child",()=>{a.isChild||(a.mouseInChild=!1,clearTimeout(a.timeout))}),c.on("on-update-opened",E=>{if(!o(L)){if($t(E)){t.opened=E;return}if(Ot(E)){const{opend:J,parent:X,uidList:Z}=E;X===(n==null?void 0:n.parent)?t.opened=J:Z.includes(n==null?void 0:n.uid)||(t.opened=!1);return}e.name&&Array.isArray(E)&&(t.opened=E.includes(e.name))}}),c.on("on-update-active-name:submenu",E=>{t.active=E.includes(n==null?void 0:n.uid)})});function pe(E){t.opened=E}return ke(`subMenu:${n==null?void 0:n.uid}`,{addSubMenu:h,removeSubMenu:m,getOpenNames:f,removeAll:_,isRemoveAllPopup:x,sliceIndex:S,level:C+1,handleMouseleave:se,props:k}),te(te({getClass:R,prefixCls:s,getCollapse:L,getItemStyle:r,handleClick:Ne,handleVisibleChange:pe,getParentSubMenu:i,getOverlayStyle:T,getTheme:P,getIsOpend:q,getEvents:ze,getSubClass:Ce},ae(t)),ae(a))}});function Wa(e,n,t,a,i,r){const l=y("Icon"),d=y("MenuCollapseTransition"),s=y("Popover");return b(),g("li",{class:e.getClass},[e.getCollapse?(b(),g(s,{key:1,placement:"right",overlayClassName:`${e.prefixCls}-menu-popover`,visible:e.getIsOpend,onVisibleChange:e.handleVisibleChange,overlayStyle:e.getOverlayStyle,align:{offset:[0,0]}},{content:$(()=>[v("div",e.getEvents(!0),[v("ul",{class:[e.prefixCls,`${e.prefixCls}-${e.getTheme}`,`${e.prefixCls}-popup`]},[Q(e.$slots,"default")],2)],16)]),default:$(()=>[v("div",D({class:e.getSubClass},e.getEvents(!1)),[v("div",{class:[{[`${e.prefixCls}-submenu-popup`]:!e.getParentSubMenu,[`${e.prefixCls}-submenu-collapsed-show-tit`]:e.collapsedShowTitle}]},[Q(e.$slots,"title")],2),e.getParentSubMenu?(b(),g(l,{key:0,icon:"eva:arrow-ios-downward-outline",size:14,class:`${e.prefixCls}-submenu-title-icon`},null,8,["class"])):M("",!0)],16)]),_:3},8,["overlayClassName","visible","onVisibleChange","overlayStyle"])):(b(),g(j,{key:0},[v("div",{class:`${e.prefixCls}-submenu-title`,onClick:n[1]||(n[1]=Sn((...u)=>e.handleClick&&e.handleClick(...u),["stop"])),style:e.getItemStyle},[Q(e.$slots,"title"),v(l,{icon:"eva:arrow-ios-downward-outline",size:14,class:`${e.prefixCls}-submenu-title-icon`},null,8,["class"])],6),v(d,null,{default:$(()=>[ue(v("ul",{class:e.prefixCls},[Q(e.$slots,"default")],2),[[ye,e.opened]])]),_:3})],64))],2)}Jn.render=Wa;const{t:Ka}=fe();var et=O({name:"SimpleSubMenu",components:{SubMenu:Jn,MenuItem:Qn,SimpleMenuTag:W(()=>K(()=>import("./SimpleMenuTag.391aa2b1.js"),["/assets/SimpleMenuTag.391aa2b1.js","/assets/index.de7a3c72.js","/assets/index.3100f8d1.css"])),Icon:Te},props:{item:{type:Object,default:{}},parent:w.bool,collapsedShowTitle:w.bool,collapse:w.bool,theme:w.oneOf(["dark","light"])},setup(e){const{prefixCls:n}=z("simple-menu"),t=p(()=>{var u;return!((u=e.item)==null?void 0:u.hideMenu)}),a=p(()=>{var u;return(u=e.item)==null?void 0:u.icon}),i=p(()=>{var u;return Ka((u=e.item)==null?void 0:u.name)}),r=p(()=>!e.collapse||!e.parent),l=p(()=>!!e.collapse&&!!e.parent),d=p(()=>[{[`${n}__parent`]:e.parent,[`${n}__children`]:!e.parent}]);function s(u){return Reflect.has(u,"children")&&!!u.children&&u.children.length>0}return{prefixCls:n,menuHasChildren:s,getShowMenu:t,getIcon:a,getI18nName:i,getShowSubTitle:r,getLevelClass:d,getIsCollapseParent:l}}});const Va={key:1,class:"mt-1 collapse-title"},Ua={key:1,class:"mt-2 collapse-title"};function qa(e,n,t,a,i,r){const l=y("Icon"),d=y("SimpleMenuTag"),s=y("MenuItem"),u=y("_self"),c=y("SubMenu");return b(),g(j,null,[!e.menuHasChildren(e.item)&&e.getShowMenu?(b(),g(s,D({key:0,name:e.item.path},e.$props,{class:e.getLevelClass}),{title:$(()=>[v("span",{class:["ml-2",`${e.prefixCls}-sub-title`]},ne(e.getI18nName),3),v(d,{item:e.item,collapseParent:e.getIsCollapseParent},null,8,["item","collapseParent"])]),default:$(()=>[e.getIcon?(b(),g(l,{key:0,icon:e.getIcon,size:16},null,8,["icon"])):M("",!0),e.collapsedShowTitle&&e.getIsCollapseParent?(b(),g("div",Va,ne(e.getI18nName),1)):M("",!0)]),_:1},16,["name","class"])):M("",!0),e.menuHasChildren(e.item)&&e.getShowMenu?(b(),g(c,{key:1,name:e.item.path,class:[e.getLevelClass,e.theme],collapsedShowTitle:e.collapsedShowTitle},{title:$(()=>[e.getIcon?(b(),g(l,{key:0,icon:e.getIcon,size:16},null,8,["icon"])):M("",!0),e.collapsedShowTitle&&e.getIsCollapseParent?(b(),g("div",Ua,ne(e.getI18nName),1)):M("",!0),ue(v("span",{class:["ml-2",`${e.prefixCls}-sub-title`]},ne(e.getI18nName),3),[[ye,e.getShowSubTitle]]),v(d,{item:e.item,collapseParent:!!e.collapse&&!!e.parent},null,8,["item","collapseParent"])]),default:$(()=>[(b(!0),g(j,null,oe(e.item.children||[],h=>(b(),g(u,D({key:h.path},e.$props,{item:h,parent:!1}),null,16,["item"]))),128))]),_:1},8,["name","class","collapsedShowTitle"])):M("",!0)],64)}et.render=qa;function Ga(e,n,t,a,i){async function r(d){const s=!a.value;Pn(()=>{const u=$e(n.value);if((u==null?void 0:u.length)===0){e.activeSubMenuNames=[],e.openNames=[];return}const c=Fe(u,d);o(t)?e.openNames=c:e.openNames=yn([...e.openNames,...c]),e.activeSubMenuNames=e.openNames},16,s)}const l=p(()=>o(i)?[]:e.openNames);return{setOpenKeys:r,getOpenKeys:l}}var on=O({name:"SimpleMenu",inheritAttrs:!1,components:{Menu:Gn,SimpleSubMenu:et},props:{items:{type:Array,default:()=>[]},collapse:w.bool,mixSider:w.bool,theme:w.string,accordion:w.bool.def(!0),collapsedShowTitle:w.bool,beforeClickFn:{type:Function}},setup(e,{attrs:n,emit:t}){const a=I(""),i=I(!1),r=he({activeName:"",openNames:[],activeSubMenuNames:[]}),{currentRoute:l}=De(),{prefixCls:d}=z("simple-menu"),{items:s,accordion:u,mixSider:c,collapse:h}=ae(e),{setOpenKeys:m,getOpenKeys:_}=Ga(r,s,u,c,h),f=p(()=>te(te({},n),e));ie(()=>e.collapse,C=>{C?r.openNames=[]:m(l.value.path)},{immediate:!0}),Oe(C=>{var k;C.name!==je&&(a.value=(k=C.meta)==null?void 0:k.currentActiveMenu,x(C),o(a)&&(r.activeName=o(a),m(o(a))))});async function x(C){if(o(i)){i.value=!1;return}const k=(C||o(l)).path;r.activeName=k,m(k)}async function S(C){const{beforeClickFn:k}=e;k&&_n(k)&&!await k(C)||(t("menuClick",C),i.value=!0,m(C),r.activeName=C)}return te({prefixCls:d,getBindValues:f,handleSelect:S,getOpenKeys:_},ae(r))}}),ni=`.vben-menu-dark.vben-menu-vertical .vben-simple-menu__parent {
  background-color: var(--sider-dark-bg-color);
}
.vben-menu-dark.vben-menu-vertical .vben-simple-menu__parent > .vben-menu-submenu-title {
  background-color: var(--sider-dark-bg-color);
}
.vben-menu-dark.vben-menu-vertical .vben-simple-menu__children,
.vben-menu-dark.vben-menu-popup .vben-simple-menu__children {
  background-color: var(--sider-dark-lighten-1-bg-color);
}
.vben-menu-dark.vben-menu-vertical .vben-simple-menu__children > .vben-menu-submenu-title,
.vben-menu-dark.vben-menu-popup .vben-simple-menu__children > .vben-menu-submenu-title {
  background-color: var(--sider-dark-lighten-1-bg-color);
}
.vben-menu .collapse-title {
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.vben-simple-menu-sub-title {
  transition: all 0.3s;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.vben-simple-menu-tag {
  position: absolute;
  top: calc(50% - 10px);
  right: 30px;
  display: inline-block;
  padding: 2px 3px;
  margin-right: 4px;
  font-size: 10px;
  line-height: 14px;
  color: #fff;
  border-radius: 2px;
}
.vben-simple-menu-tag--collapse {
  top: 6px !important;
  right: 2px;
}
.vben-simple-menu-tag--dot {
  top: calc(50% - 4px);
  width: 6px;
  height: 6px;
  padding: 0;
  border-radius: 50%;
}
.vben-simple-menu-tag--primary {
  background: #018ffb;
}
.vben-simple-menu-tag--error {
  background: #ED6F6F;
}
.vben-simple-menu-tag--success {
  background: #55D187;
}
.vben-simple-menu-tag--warn {
  background: #EFBD47;
}
`;function Ya(e,n,t,a,i,r){const l=y("SimpleSubMenu"),d=y("Menu");return b(),g(d,D(e.getBindValues,{onSelect:e.handleSelect,activeName:e.activeName,openNames:e.getOpenKeys,class:e.prefixCls,activeSubMenuNames:e.activeSubMenuNames}),{default:$(()=>[(b(!0),g(j,null,oe(e.items,s=>(b(),g(l,{key:s.path,item:s,parent:!0,collapsedShowTitle:e.collapsedShowTitle,collapse:e.collapse},null,8,["item","collapsedShowTitle","collapse"]))),128))]),_:1},16,["onSelect","activeName","openNames","class","activeSubMenuNames"])}on.render=Ya;function Qa(e){const n=I([]),{currentRoute:t}=De(),{getIsMobile:a}=re(),{setMenuSetting:i,getIsHorizontal:r,getSplit:l}=V(),[d]=It(m,50),s=p(()=>o(e)!==G.LEFT&&!o(r)),u=p(()=>!o(l)||o(e)!==G.LEFT),c=p(()=>o(e)===G.TOP),h=p(()=>o(e)===G.NONE||!o(l));ie([()=>o(t).path,()=>o(e)],async([f])=>{if(o(s)||o(a))return;const{meta:x}=o(t),S=x.currentActiveMenu;let C=await He(f);C||(C=await He(S)),C&&d(C)},{immediate:!0}),ie([()=>wn.getLastBuildMenuTimeState,()=>wn.getBackMenuListState],()=>{_()},{immediate:!0}),ie([()=>l.value],()=>{o(s)||_()});async function m(f){if(console.log("======================"),console.log(o(u)),console.log("======================"),o(u)||o(a))return;const x=await Ye(f);if(!x||!x.length){i({hidden:!0}),n.value=[];return}i({hidden:!1}),n.value=x}async function _(){if(o(h)||o(a)){n.value=await Zt();return}if(o(c)){const f=await Hn();n.value=f;return}}return{menusRef:n}}var nt=O({name:"LayoutMenu",props:{theme:w.oneOf(["light","dark"]),splitType:{type:Number,default:G.NONE},isHorizontal:w.bool,menuMode:{type:[String],default:""}},setup(e){const n=qe(),{getMenuMode:t,getMenuType:a,getMenuTheme:i,getCollapsed:r,getCollapsedShowTitle:l,getAccordion:d,getIsHorizontal:s,getIsSidebarType:u}=V(),{getShowLogo:c}=Ie(),{prefixCls:h}=z("layout-menu"),{menusRef:m}=Qa(Lt(e,"splitType")),{getIsMobile:_}=re(),f=p(()=>o(_)?ee.INLINE:e.menuMode||o(t)),x=p(()=>e.theme||o(i)),S=p(()=>o(c)&&o(u)),C=p(()=>!o(s)&&(o(u)||e.splitType===G.LEFT||e.splitType===G.NONE)),k=p(()=>({height:`calc(100% - ${o(S)?"48px":"0px"})`})),A=p(()=>[`${h}-logo`,o(x),{[`${h}--mobile`]:o(_)}]);function R(T){n(T)}async function F(T){return Pt(T)?(Ht(T),!1):!0}function L(){return!o(S)&&!o(_)?null:v(Ue,{showTitle:!o(r),class:o(A),theme:o(x)},null)}function P(){const T=o(m);return!T||!T.length?null:e.isHorizontal?v(Vn,{beforeClickFn:F,isHorizontal:e.isHorizontal,type:o(a),collapsedShowTitle:o(l),showLogo:o(S),mode:o(f),theme:o(x),items:T,accordion:o(d),onMenuClick:R},null):v(on,{beforeClickFn:F,items:T,theme:o(x),accordion:o(d),collapse:o(r),collapsedShowTitle:o(l),onMenuClick:R},null)}return()=>v(j,null,[L(),o(C)?v(zn,{style:o(k)},{default:()=>P()}):P()])}}),rn=O({name:"SiderTrigger",components:{MenuUnfoldOutlined:tn,MenuFoldOutlined:nn},props:{theme:w.oneOf(["light","dark"])},setup(){const{getCollapsed:e,toggleCollapsed:n}=V(),{prefixCls:t}=z("layout-header-trigger");return{getCollapsed:e,toggleCollapsed:n,prefixCls:t}}});function Xa(e,n,t,a,i,r){const l=y("MenuUnfoldOutlined"),d=y("MenuFoldOutlined");return b(),g("span",{class:[e.prefixCls,e.theme],onClick:n[1]||(n[1]=(...s)=>e.toggleCollapsed&&e.toggleCollapsed(...s))},[e.getCollapsed?(b(),g(l,{key:0})):(b(),g(d,{key:1}))],2)}rn.render=Xa;var sn=O({name:"LayoutTrigger",components:{SiderTrigger:W(()=>K(()=>import("./SiderTrigger.79359b9c.js"),["/assets/SiderTrigger.79359b9c.js","/assets/index.de7a3c72.js","/assets/index.3100f8d1.css","/assets/DoubleRightOutlined.b4ab6685.js","/assets/DoubleLeftOutlined.d752e6dc.js"])),HeaderTrigger:rn},props:{sider:w.bool.def(!0),theme:w.oneOf(["light","dark"])}});function Za(e,n,t,a,i,r){const l=y("SiderTrigger"),d=y("HeaderTrigger");return e.sider?(b(),g(l,{key:0})):(b(),g(d,{key:1,theme:e.theme},null,8,["theme"]))}sn.render=Za;const Ja=W(()=>K(()=>import("./index.c1797ad8.js"),["/assets/index.c1797ad8.js","/assets/index.28524fca.css","/assets/index.de7a3c72.js","/assets/index.3100f8d1.css","/assets/index.55f43c00.js","/assets/index.45c1fb22.css","/assets/RightOutlined.dcad5eff.js","/assets/EllipsisOutlined.ba16b190.js","/assets/types.ead79a33.js","/assets/isEqual.42834150.js","/assets/toInteger.e48028d2.js","/assets/index.95c10fda.js","/assets/index.20066e29.css","/assets/index.967c47da.js","/assets/siteSetting.2daee9f0.js","/assets/useHeaderSetting.0d239ac1.js","/assets/header.9f640cf1.js"]),{loading:!0}),eo=W(()=>K(()=>import("./Breadcrumb.16114ec6.js"),["/assets/Breadcrumb.16114ec6.js","/assets/Breadcrumb.88da54d6.css","/assets/index.de7a3c72.js","/assets/index.3100f8d1.css","/assets/index.492a2c9c.js","/assets/index.6cdab262.css","/assets/index.55f43c00.js","/assets/index.45c1fb22.css","/assets/RightOutlined.dcad5eff.js","/assets/EllipsisOutlined.ba16b190.js","/assets/types.ead79a33.js","/assets/isEqual.42834150.js","/assets/toInteger.e48028d2.js","/assets/DownOutlined.2e949c36.js","/assets/index.95c10fda.js","/assets/index.20066e29.css"])),no=W(()=>K(()=>import("./FullScreen.35365da5.js"),["/assets/FullScreen.35365da5.js","/assets/index.de7a3c72.js","/assets/index.3100f8d1.css","/assets/index.95c10fda.js","/assets/index.20066e29.css","/assets/useFullScreen.1ca0532c.js","/assets/FullscreenOutlined.09f91c42.js"])),to=W(()=>K(()=>import("./index.4e1cb6b6.js"),["/assets/index.4e1cb6b6.js","/assets/index.1603e54f.css","/assets/index.de7a3c72.js","/assets/index.3100f8d1.css","/assets/index.f5f01d66.js","/assets/index.e6588021.css","/assets/colors.e241e755.js","/assets/isNumeric.2bec345d.js","/assets/index.dad53a49.js","/assets/index.26261c72.css","/assets/UpOutlined.b1a0aa74.js","/assets/LeftOutlined.6e782dc0.js","/assets/DownOutlined.2e949c36.js","/assets/RightOutlined.dcad5eff.js","/assets/PlusOutlined.20641b62.js","/assets/useSortable.10178c08.js","/assets/index.ba5abcce.js","/assets/index.c7b34b4b.css","/assets/index.22fd658f.js","/assets/index.053bfee8.css","/assets/index.72d9c94b.js","/assets/index.d60873d9.css","/assets/index.1f78b020.js","/assets/index.c5255485.css","/assets/index.2419be78.js","/assets/index.1ba2f6be.css","/assets/SearchOutlined.5cd4b61b.js","/assets/CheckOutlined.615f0fd5.js","/assets/DoubleLeftOutlined.d752e6dc.js","/assets/DoubleRightOutlined.b4ab6685.js","/assets/zh_CN.8094f4d6.js","/assets/index.2d5b3941.js","/assets/index.0edc9df2.css","/assets/responsiveObserve.c545f1cc.js"])),ao=W(()=>K(()=>import("./index.5110fb49.js"),["/assets/index.5110fb49.js","/assets/index.de7a3c72.js","/assets/index.3100f8d1.css","/assets/index.95c10fda.js","/assets/index.20066e29.css","/assets/index.84a30426.js","/assets/index.ca1a8c37.css","/assets/useTimeout.5494657f.js","/assets/useAttrs.5fb4b160.js","/assets/useWindowSizeFn.5bd3f00e.js","/assets/index.b5f656c2.js","/assets/index.f0b9f139.css","/assets/index.cf88fb23.js","/assets/index.121e7eba.css","/assets/domUtils.aa6aef94.js","/assets/_stringToArray.9f34c09e.js","/assets/RightOutlined.dcad5eff.js","/assets/useScrollTo.3c6228cf.js","/assets/animation.29409132.js","/assets/FullscreenOutlined.09f91c42.js","/assets/isEqual.42834150.js","/assets/LockOutlined.74a0835e.js"])),oo=W(()=>K(()=>import("./ErrorAction.1a20a113.js"),["/assets/ErrorAction.1a20a113.js","/assets/index.de7a3c72.js","/assets/index.3100f8d1.css","/assets/index.f5f01d66.js","/assets/index.e6588021.css","/assets/colors.e241e755.js","/assets/isNumeric.2bec345d.js","/assets/index.95c10fda.js","/assets/index.20066e29.css","/assets/BugOutlined.4d928015.js"]));var ln=O({name:"LayoutHeader",components:{Header:N.Header,AppLogo:Ue,LayoutTrigger:sn,LayoutBreadcrumb:eo,LayoutMenu:nt,UserDropDown:Ja,AppLocalePicker:Et,FullScreen:no,Notify:to,LockItem:ao,AppSearch:At,ErrorAction:oo},props:{fixed:w.bool},setup(e){const{prefixCls:n}=z("layout-header"),{getShowTopMenu:t,getShowHeaderTrigger:a,getSplit:i,getIsMixMode:r,getMenuWidth:l,getIsMixSidebar:d}=V(),{getShowLocale:s}=zt(),{getUseErrorHandle:u}=Ie(),{getHeaderTheme:c,getUseLockPage:h,getShowFullScreen:m,getShowNotice:_,getShowContent:f,getShowBread:x,getShowHeaderLogo:S}=Qe(),{getIsMobile:C}=re(),k=p(()=>{const L=o(c);return[n,{[`${n}--fixed`]:e.fixed,[`${n}--mobile`]:o(C),[`${n}--${L}`]:L}]}),A=p(()=>!o(r)||o(C)?{}:{width:`${o(l)<180?180:o(l)}px`}),R=p(()=>o(i)?G.TOP:G.NONE),F=p(()=>o(i)?ee.HORIZONTAL:null);return{prefixCls:n,getHeaderClass:k,getShowHeaderLogo:S,getHeaderTheme:c,getShowHeaderTrigger:a,getIsMobile:C,getShowBread:x,getShowContent:f,getSplitType:R,getSplit:i,getMenuMode:F,getShowTopMenu:t,getShowLocale:s,getShowFullScreen:m,getShowNotice:_,getUseLockPage:h,getUseErrorHandle:u,getLogoWidth:A,getIsMixSidebar:d}}}),ti=`.vben-layout-header {
  display: flex;
  height: 48px;
  padding: 0;
  margin-left: -1px;
  line-height: 48px;
  color: #fff;
  background: #fff;
  align-items: center;
  justify-content: space-between;
}
.vben-layout-header--mobile .vben-layout-breadcrumb,
.vben-layout-header--mobile .error-action,
.vben-layout-header--mobile .notify-item,
.vben-layout-header--mobile .fullscreen-item {
  display: none;
}
.vben-layout-header--mobile .vben-app-logo {
  min-width: unset;
  padding-right: 0;
}
.vben-layout-header--mobile .vben-app-logo__title {
  display: none;
}
.vben-layout-header--mobile .vben-layout-header-trigger {
  padding: 0 4px 0 8px !important;
}
.vben-layout-header--mobile .vben-layout-header-action {
  padding-right: 4px;
}
.vben-layout-header--fixed {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
  width: 100%;
}
.vben-layout-header-logo {
  height: 48px;
  min-width: 192px;
  padding: 0 10px;
  font-size: 14px;
}
.vben-layout-header-logo img {
  width: 32px;
  height: 32px;
  margin-right: 2px;
}
.vben-layout-header-left {
  display: flex;
  height: 100%;
  align-items: center;
}
.vben-layout-header-left .vben-layout-header-trigger {
  display: flex;
  height: 100%;
  padding: 1px 10px 0 16px;
  cursor: pointer;
  align-items: center;
}
.vben-layout-header-left .vben-layout-header-trigger .anticon {
  font-size: 16px;
}
.vben-layout-header-left .vben-layout-header-trigger.light:hover {
  background: #f6f6f6;
}
.vben-layout-header-left .vben-layout-header-trigger.light svg {
  fill: #000;
}
.vben-layout-header-left .vben-layout-header-trigger.dark:hover {
  background: var(--header-bg-hover-color);
}
.vben-layout-header-menu {
  height: 100%;
  min-width: 0;
  flex: 1;
  align-items: center;
}
.vben-layout-header-action {
  display: flex;
  min-width: 180px;
  padding-right: 12px;
  align-items: center;
}
.vben-layout-header-action__item {
  display: flex !important;
  height: 48px;
  padding: 0 2px;
  font-size: 1.2em;
  cursor: pointer;
  align-items: center;
}
.vben-layout-header-action__item .ant-badge {
  height: 48px;
  line-height: 48px;
}
.vben-layout-header-action__item .ant-badge-dot {
  top: 10px;
  right: 2px;
}
.vben-layout-header-action span[role='img'] {
  padding: 0 8px;
}
.vben-layout-header--light {
  background: #fff;
  border-bottom: 1px solid #eee;
  border-left: 1px solid #eee;
}
.vben-layout-header--light .vben-layout-header-logo {
  color: rgba(0, 0, 0, 0.85);
}
.vben-layout-header--light .vben-layout-header-logo:hover {
  background: #f6f6f6;
}
.vben-layout-header--light .vben-layout-header-action__item:hover {
  background: #f6f6f6;
}
.vben-layout-header--light .vben-layout-header-action__item .vben-app-locale-picker {
  padding: 0 6px;
  color: rgba(0, 0, 0, 0.65);
}
.vben-layout-header--light .vben-layout-header-action-icon,
.vben-layout-header--light .vben-layout-header-action span[role='img'] {
  color: rgba(0, 0, 0, 0.85);
}
.vben-layout-header--dark {
  background: var(--header-bg-color);
}
.vben-layout-header--dark .vben-layout-header-logo:hover {
  background: var(--header-bg-hover-color);
}
.vben-layout-header--dark .vben-layout-header-action__item:hover {
  background: var(--header-bg-hover-color);
}
`;function io(e,n,t,a,i,r){const l=y("AppLogo"),d=y("LayoutTrigger"),s=y("LayoutBreadcrumb"),u=y("LayoutMenu"),c=y("AppSearch"),h=y("ErrorAction"),m=y("LockItem"),_=y("Notify"),f=y("FullScreen"),x=y("UserDropDown"),S=y("AppLocalePicker"),C=y("Header");return b(),g(C,{class:e.getHeaderClass},{default:$(()=>[v("div",{class:`${e.prefixCls}-left`},[e.getShowHeaderLogo||e.getIsMobile?(b(),g(l,{key:0,class:`${e.prefixCls}-logo`,theme:e.getHeaderTheme,style:e.getLogoWidth},null,8,["class","theme","style"])):M("",!0),e.getShowContent&&e.getShowHeaderTrigger&&!e.getSplit&&!e.getIsMixSidebar||e.getIsMobile?(b(),g(d,{key:1,theme:e.getHeaderTheme,sider:!1},null,8,["theme"])):M("",!0),e.getShowContent&&e.getShowBread?(b(),g(s,{key:2,theme:e.getHeaderTheme},null,8,["theme"])):M("",!0)],2),e.getShowTopMenu&&!e.getIsMobile?(b(),g("div",{key:0,class:`${e.prefixCls}-menu`},[v(u,{isHorizontal:!0,theme:e.getHeaderTheme,splitType:e.getSplitType,menuMode:e.getMenuMode},null,8,["theme","splitType","menuMode"])],2)):M("",!0),v("div",{class:`${e.prefixCls}-action`},[v(c,{class:`${e.prefixCls}-action__item `},null,8,["class"]),e.getUseErrorHandle?(b(),g(h,{key:0,class:`${e.prefixCls}-action__item error-action`},null,8,["class"])):M("",!0),e.getUseLockPage?(b(),g(m,{key:1,class:`${e.prefixCls}-action__item lock-item`},null,8,["class"])):M("",!0),e.getShowNotice?(b(),g(_,{key:2,class:`${e.prefixCls}-action__item notify-item`},null,8,["class"])):M("",!0),e.getShowFullScreen?(b(),g(f,{key:3,class:`${e.prefixCls}-action__item fullscreen-item`},null,8,["class"])):M("",!0),v(x,{theme:e.getHeaderTheme},null,8,["theme"]),e.getShowLocale?(b(),g(S,{key:4,reload:!0,showText:!1,class:`${e.prefixCls}-action__item`},null,8,["class"])):M("",!0)],2)]),_:1},8,["class"])}ln.render=io;function ro(){const{currentRoute:e}=de,{getShowMultipleTab:n}=Le(),t=p(()=>i($e(de.getRoutes()))||[]),a=p(()=>Y.getTabsState.reduce((d,s)=>(s.meta&&Reflect.has(s.meta,"frameSrc")&&d.push(s.name),d),[]));function i(d){let s=[];for(const u of d){const{meta:{frameSrc:c}={},children:h}=u;c&&s.push(u),h&&h.length&&s.push(...i(h))}return s=Nt(s,"name"),s}function r(d){return d.name===o(e).name}function l(d){return o(n)?o(a).includes(d):de.currentRoute.value.name===d}return{hasRenderFrame:l,getFramePages:t,showIframe:r,getAllFramePages:i}}var tt=O({name:"FrameLayout",components:{FramePage:na},setup(){const{getFramePages:e,hasRenderFrame:n,showIframe:t}=ro(),a=p(()=>o(e).length>0);return{getFramePages:e,hasRenderFrame:n,showIframe:t,showFrame:a}}});const so={key:0};function lo(e,n,t,a,i,r){const l=y("FramePage");return e.showFrame?(b(),g("div",so,[(b(!0),g(j,null,oe(e.getFramePages,d=>(b(),g(j,{key:d.path},[d.meta.frameSrc&&e.hasRenderFrame(d.name)?ue((b(),g(l,{key:0,frameSrc:d.meta.frameSrc},null,8,["frameSrc"])),[[ye,e.showIframe(d)]]):M("",!0)],64))),128))])):M("",!0)}tt.render=lo;var at=O({name:"PageLayout",components:{FrameLayout:tt},setup(){const{getCaches:e}=Rt(!0),{getShowMultipleTab:n}=Le(),{getOpenKeepAlive:t,getCanEmbedIFramePage:a}=Ie(),{getBasicTransition:i,getEnableTransition:r}=kn(),l=p(()=>o(t)&&o(n));function d(s,u){return(s==null?void 0:s.type.parentView)?{}:{key:u.fullPath}}return{getTransitionName:Bt,openCache:l,getEnableTransition:r,getBasicTransition:i,getCaches:e,getCanEmbedIFramePage:a,getKey:d}}});function uo(e,n,t,a,i,r){const l=y("router-view"),d=y("FrameLayout");return b(),g("div",null,[v(l,null,{default:$(({Component:s,route:u})=>[v(Ve,{name:e.getTransitionName({route:u,openCache:e.openCache,enableTransition:e.getEnableTransition,cacheTabs:e.getCaches,def:e.getBasicTransition}),mode:"out-in",appear:""},{default:$(()=>[e.openCache?(b(),g(Ft,{key:0,include:e.getCaches},[(b(),g(Mn(s),e.getKey(s,u),null,16))],1032,["include"])):(b(),g(Mn(s),D({key:1},e.getKey(s,u)),null,16))]),_:2},1032,["name"])]),_:1}),e.getCanEmbedIFramePage?(b(),g(d,{key:0})):M("",!0)])}at.render=uo;const ot=I(0);function co(){const e=I(window.innerHeight),n=I(window.innerHeight),t=p(()=>o(e)-o(ot)||0);aa(()=>{e.value=window.innerHeight},100,{immediate:!0});async function a(i){n.value=i}ta({contentHeight:t,setPageHeight:a,pageHeight:n})}var it=O({name:"LayoutContent",components:{PageLayout:at,Loading:Dt},setup(){const{prefixCls:e}=z("layout-content"),{getOpenPageLoading:n}=kn(),{getLayoutContentMode:t,getPageLoading:a}=Ie();return co(),{prefixCls:e,getOpenPageLoading:n,getLayoutContentMode:t,getPageLoading:a}}}),ai=`.vben-layout-content {
  position: relative;
  flex: 1 1 auto;
  min-height: 0;
}
.vben-layout-content.fixed {
  width: 1200px;
  margin: 0 auto;
}
.vben-layout-content-loading {
  position: absolute;
  top: 200px;
  z-index: 10000;
}
`;function mo(e,n,t,a,i,r){const l=y("Loading"),d=y("PageLayout");return b(),g("div",{class:[e.prefixCls,e.getLayoutContentMode]},[v(Ve,{name:"fade"},{default:$(()=>[e.getOpenPageLoading?(b(),g(l,{key:0,loading:e.getPageLoading,background:"rgba(240, 242, 245, 0.6)",absolute:"",class:`${e.prefixCls}-loading`},null,8,["loading","class"])):M("",!0)]),_:1}),v(d)],2)}it.render=mo;function po(){const e=I(!1),n=I(!1),t=I(!0),{setMenuSetting:a,getCollapsed:i,getMiniWidthNumber:r}=V(),l=p(()=>o(n)?0:o(r));function d(u){e.value?(t.value=u,a({collapsed:u})):!o(i)&&a({collapsed:u}),e.value=!0}function s(u){n.value=u}return{getCollapsedWidth:l,onCollapseChange:d,onBreakpointChange:s}}function bo(e){const{getTrigger:n,getSplit:t}=V(),a=p(()=>{const r=o(n);return r!==Tn.NONE&&!o(e)&&(r===Tn.FOOTER||o(t))});return{getTriggerAttr:p(()=>o(a)?{}:{trigger:null}),getShowTrigger:a}}function rt(e,n,t=!1){const{getMiniWidthNumber:a,getCollapsed:i,setMenuSetting:r}=V();We(()=>{ve(()=>{const[c]=jt(u,80);c()})});function l(c){var m;const h=o(c);return h?Reflect.has(h,"$el")?(m=o(c))==null?void 0:m.$el:o(c):null}function d(c,h,m){document.onmousemove=function(_){let f=c.left+(_.clientX-m);_=_||window.event;const x=800,S=o(a);return f<0&&(f=0),f>x&&(f=x),f<S&&(f=S),c.style.left=h.style.width=f+"px",!1}}function s(c){const h=l(e);document.onmouseup=function(){var _;document.onmousemove=null,document.onmouseup=null,h.style.transition="width 0.2s";const m=parseInt(h.style.width);if(t)r({menuWidth:m});else{const f=o(a);o(i)?m>f&&r({collapsed:!1,menuWidth:m}):m>f+20?r({menuWidth:m}):r({collapsed:!0})}(_=c.releaseCapture)==null||_.call(c)}}function u(){const c=l(n);if(!c)return;const h=l(e);!h||(c.onmousedown=m=>{var f;h.style.transition="unset";const _=m==null?void 0:m.clientX;return c.left=c.offsetLeft,d(c,h,_),s(c),(f=c.setCapture)==null||f.call(c),!1})}return{}}var un=O({name:"DargBar",props:{mobile:Boolean},setup(e){const{getMiniWidthNumber:n,getCollapsed:t,getCanDrag:a}=V(),{prefixCls:i}=z("darg-bar"),r=p(()=>o(t)?{left:`${o(n)}px`}:{}),l=p(()=>[i,{[`${i}--hide`]:!o(a)||e.mobile}]);return{prefixCls:i,getDragBarStyle:r,getClass:l}}}),oi=`.vben-darg-bar[data-v-146c2d8a] {
  position: absolute;
  top: 0;
  right: -2px;
  z-index: 200;
  width: 2px;
  height: 100%;
  cursor: col-resize;
  border-top: none;
  border-bottom: none;
}
.vben-darg-bar--hide[data-v-146c2d8a] {
  display: none;
}
.vben-darg-bar[data-v-146c2d8a]:hover {
  background: #018ffb;
  box-shadow: 0 0 4px 0 rgba(28, 36, 56, 0.15);
}
`;const go=$n("data-v-146c2d8a"),vo=go((e,n,t,a,i,r)=>(b(),g("div",{class:e.getClass,style:e.getDragBarStyle},null,6)));un.render=vo,un.__scopeId="data-v-146c2d8a";var st=O({name:"LayoutSideBar",components:{Sider:N.Sider,LayoutMenu:nt,DragBar:un,LayoutTrigger:sn},setup(){const e=I(null),n=I(null),{getCollapsed:t,getMenuWidth:a,getSplit:i,getMenuTheme:r,getRealWidth:l,getMenuHidden:d,getMenuFixed:s,getIsMixMode:u}=V(),{prefixCls:c}=z("layout-sideBar"),{getIsMobile:h}=re(),{getTriggerAttr:m,getShowTrigger:_}=bo(h);rt(n,e);const{getCollapsedWidth:f,onBreakpointChange:x,onCollapseChange:S}=po(),C=p(()=>o(i)?ee.INLINE:null),k=p(()=>o(i)?G.LEFT:G.NONE),A=p(()=>o(i)?!o(d):!0),R=p(()=>[c,{[`${c}--fixed`]:o(s),hidden:!o(A),[`${c}--mix`]:o(u)&&!o(h)}]),F=p(()=>{const L=`${o(l)}px`;return{width:L,overflow:"hidden",flex:`0 0 ${L}`,maxWidth:L,minWidth:L,transition:"all 0.2s"}});return{prefixCls:c,sideRef:n,dragBarRef:e,getIsMobile:h,getHiddenDomStyle:F,getSiderClass:R,getTriggerAttr:m,getCollapsedWidth:f,getMenuFixed:s,showClassSideBarRef:A,getMenuWidth:a,getCollapsed:t,getMenuTheme:r,onBreakpointChange:x,getMode:C,getSplitType:k,onCollapseChange:S,getShowTrigger:_}}}),ii=`.vben-layout-sideBar {
  z-index: 510;
}
.vben-layout-sideBar--fixed {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
}
.vben-layout-sideBar--mix {
  top: 48px;
  height: calc(100% - 48px);
}
.vben-layout-sideBar.ant-layout-sider-dark {
  background: var(--sider-dark-bg-color);
}
.vben-layout-sideBar.ant-layout-sider-dark .ant-layout-sider-trigger {
  color: #bfbfbf;
  background: rgba(255, 255, 255, 0.1);
}
.vben-layout-sideBar.ant-layout-sider-dark .ant-layout-sider-trigger:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
}
.vben-layout-sideBar:not(.ant-layout-sider-dark) .ant-layout-sider-trigger {
  color: rgba(0, 0, 0, 0.85);
  border-top: 1px solid #ebeef5;
}
.vben-layout-sideBar .ant-layout-sider-zero-width-trigger {
  top: 40%;
  z-index: 10;
}
.vben-layout-sideBar .ant-layout-sider-trigger {
  height: 36px;
  line-height: 36px;
}
`;function fo(e,n,t,a,i,r){const l=y("LayoutTrigger"),d=y("LayoutMenu"),s=y("DragBar"),u=y("Sider");return b(),g(j,null,[e.getMenuFixed&&!e.getIsMobile?(b(),g("div",{key:0,style:e.getHiddenDomStyle,class:{hidden:!e.showClassSideBarRef}},null,6)):M("",!0),v(u,D({ref:"sideRef",breakpoint:"lg",collapsible:"",class:e.getSiderClass,width:e.getMenuWidth,collapsed:e.getIsMobile?!1:e.getCollapsed,collapsedWidth:e.getCollapsedWidth,theme:e.getMenuTheme,onCollapse:e.onCollapseChange,onBreakpoint:e.onBreakpointChange},e.getTriggerAttr),On({default:$(()=>[v(d,{theme:e.getMenuTheme,menuMode:e.getMode,splitType:e.getSplitType},null,8,["theme","menuMode","splitType"]),v(s,{ref:"dragBarRef"},null,512)]),_:2},[e.getShowTrigger?{name:"trigger",fn:$(()=>[v(l)])}:void 0]),1040,["class","width","collapsed","collapsedWidth","theme","onCollapse","onBreakpoint"])],64)}st.render=fo;var lt=O({name:"LayoutMixSider",components:{ScrollContainer:zn,AppLogo:Ue,SimpleMenu:on,MenuTag:Ra,Icon:Te,Trigger:rn},directives:{clickOutside:ia},setup(){let e=I([]);const n=I(""),t=I([]),a=I(!1),i=I(null),r=I(null),l=I(null),{prefixCls:d}=z("layout-mix-sider"),s=qe(),{t:u}=fe(),{getMenuWidth:c,getCanDrag:h,getCloseMixSidebarOnChange:m,getMenuTheme:_,getMixSideTrigger:f,getRealWidth:x,getMixSideFixed:S,mixSideHasChildren:C,setMenuSetting:k,getIsMixSidebar:A,getCollapsed:R}=V(),{title:F}=Wt();rt(r,i,!0);const L=p(()=>({width:o(a)?`${o(c)}px`:0,left:`${o(T)}px`})),P=p(()=>{C.value=o(t).length>0;const H=o(S)&&o(C);return H&&(a.value=!0),H}),T=p(()=>o(R)?Kt:Vt),q=p(()=>{const H=o(P)?o(x):0,le=`${o(T)+H}px`;return Se(le)}),Ce=p(()=>{const H=`${o(T)}px`;return Se(H)}),ze=p(()=>o(S)?{}:{onMouseleave:()=>{Z()}}),Ne=p(()=>o(h));We(async()=>{e.value=await Hn()}),Oe(H=>{l.value=H,pe(!0),o(m)&&Z()});function Se(H){return{width:H,maxWidth:H,minWidth:H,flex:`0 0 ${H}`}}async function se(H,le=!1){const be=await Ye(H);if(o(n)===H?(le||(o(a)?Z():a.value=!0),o(a)||pe()):(a.value=!0,n.value=H),!be||be.length===0){s(H),t.value=[],Z();return}t.value=be}async function pe(H=!1){var mn;const le=(mn=l.value)==null?void 0:mn.path;if(!le)return;const be=await He(le);if(n.value=be,o(A)){const Re=o(e).find(ge=>ge.path===o(n)),pn=Re==null?void 0:Re.path;if(pn){const ge=await Ye(pn);H&&(t.value=ge,o(S)&&(a.value=ge.length>0)),ge.length===0&&(t.value=[])}}}function we(H){s(H)}function E(){pe(!0),Z()}function J(H){return o(f)==="hover"?{onMouseenter:()=>se(H.path,!0)}:{onClick:()=>se(H.path)}}function X(){k({mixSideFixed:!o(P)})}function Z(){o(P)||(a.value=!1)}return{t:u,prefixCls:d,menuModules:e,hanldeModuleClick:se,activePath:n,chilrenMenus:t,getShowDragBar:Ne,handleMenuClick:we,getMenuStyle:L,handleClickOutside:E,sideRef:r,dragBarRef:i,title:F,openMenu:a,getMenuTheme:_,getItemEvents:J,getMenuEvents:ze,getDomStyle:q,handleFixedMenu:X,getMixSideFixed:S,getWrapStyle:Ce,getCollapsed:R}}}),ri=`.vben-layout-mix-sider {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 550;
  height: 100%;
  overflow: hidden;
  background: var(--sider-dark-bg-color);
  transition: all 0.2s ease 0s;
}
.vben-layout-mix-sider .vben-basic-menu-item-tag {
  position: absolute;
  top: 6px;
  right: 2px;
}
.vben-layout-mix-sider .vben-menu {
  width: 100% !important;
}
.vben-layout-mix-sider-dom {
  height: 100%;
  overflow: hidden;
  transition: all 0.2s ease 0s;
}
.vben-layout-mix-sider-logo {
  display: flex;
  height: 48px;
  padding-left: 0 !important;
  justify-content: center;
}
.vben-layout-mix-sider-logo img {
  width: 32px;
  height: 32px;
}
.vben-layout-mix-sider.light .vben-layout-mix-sider-logo {
  border-bottom: 1px solid #eeeeee;
}
.vben-layout-mix-sider.light.open > .scrollbar {
  border-right: 1px solid #eeeeee;
}
.vben-layout-mix-sider.light .vben-layout-mix-sider-module__item {
  font-weight: normal;
  color: rgba(0, 0, 0, 0.65);
}
.vben-layout-mix-sider.light .vben-layout-mix-sider-module__item--active {
  color: #018ffb;
  background: unset;
}
.vben-layout-mix-sider.light .vben-layout-mix-sider-menu-list__content {
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
}
.vben-layout-mix-sider.light .vben-layout-mix-sider-menu-list__title .pushpin {
  color: rgba(0, 0, 0, 0.35);
}
.vben-layout-mix-sider.light .vben-layout-mix-sider-menu-list__title .pushpin:hover {
  color: rgba(0, 0, 0, 0.85);
}
.vben-layout-mix-sider.dark.open .vben-layout-mix-sider-logo {
  border-bottom: 1px solid var(--sider-dark-lighten-1-bg-color);
}
.vben-layout-mix-sider.dark.open > .scrollbar {
  border-right: 1px solid var(--sider-dark-lighten-1-bg-color);
}
.vben-layout-mix-sider.dark .vben-layout-mix-sider-menu-list {
  background: var(--sider-dark-bg-color);
}
.vben-layout-mix-sider.dark .vben-layout-mix-sider-menu-list__title {
  color: #fff;
  border-bottom: none;
  border-bottom: 1px solid var(--sider-dark-lighten-1-bg-color);
}
.vben-layout-mix-sider > .scrollbar {
  height: calc(100% - 48px - 38px);
}
.vben-layout-mix-sider.mini .vben-layout-mix-sider-module__name {
  display: none;
}
.vben-layout-mix-sider.mini .vben-layout-mix-sider-module__icon {
  margin-bottom: 0;
}
.vben-layout-mix-sider-module {
  position: relative;
  padding-top: 1px;
}
.vben-layout-mix-sider-module__item {
  position: relative;
  padding: 12px 0;
  color: rgba(255, 255, 255, 0.65);
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}
.vben-layout-mix-sider-module__item:hover {
  color: #fff;
}
.vben-layout-mix-sider-module__item--active {
  font-weight: 700;
  color: #fff;
  background: var(--sider-dark-darken-bg-color);
}
.vben-layout-mix-sider-module__item--active::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: #018ffb;
  content: '';
}
.vben-layout-mix-sider-module__icon {
  margin-bottom: 8px;
  font-size: 24px;
  transition: all 0.2s;
}
.vben-layout-mix-sider-module__name {
  margin-bottom: 0;
  font-size: 12px;
  transition: all 0.2s;
}
.vben-layout-mix-sider-trigger {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 6px;
  padding-left: 12px;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.65);
  cursor: pointer;
  background: var(--sider-dark-bg-color);
}
.vben-layout-mix-sider.light .vben-layout-mix-sider-trigger {
  color: rgba(0, 0, 0, 0.65);
  background: #fff;
}
.vben-layout-mix-sider-menu-list {
  position: fixed;
  top: 0;
  width: 0;
  width: 200px;
  height: calc(100%);
  background: #fff;
  transition: all 0.2s;
}
.vben-layout-mix-sider-menu-list .vben-basic-menu-item-tag {
  position: absolute;
  top: 10px;
  right: 30px;
}
.vben-layout-mix-sider-menu-list .vben-basic-menu-item-tag--dot {
  top: 50%;
  margin-top: -3px;
}
.vben-layout-mix-sider-menu-list__title {
  display: flex;
  height: 48px;
  font-size: 18px;
  color: #018ffb;
  border-bottom: 1px solid #eeeeee;
  opacity: 0;
  transition: unset;
  align-items: center;
  justify-content: space-between;
}
.vben-layout-mix-sider-menu-list__title.show {
  min-width: 130px;
  opacity: 1;
  transition: all 0.5s ease;
}
.vben-layout-mix-sider-menu-list__title .pushpin {
  margin-right: 6px;
  color: rgba(255, 255, 255, 0.65);
  cursor: pointer;
}
.vben-layout-mix-sider-menu-list__title .pushpin:hover {
  color: #fff;
}
.vben-layout-mix-sider-menu-list__content {
  height: calc(100% - 48px) !important;
}
.vben-layout-mix-sider-menu-list__content .scrollbar__wrap {
  height: 100%;
  overflow-x: hidden;
}
.vben-layout-mix-sider-menu-list__content .scrollbar__bar.is-horizontal {
  display: none;
}
.vben-layout-mix-sider-menu-list__content .ant-menu {
  height: 100%;
}
.vben-layout-mix-sider-menu-list__content .ant-menu-inline,
.vben-layout-mix-sider-menu-list__content .ant-menu-vertical,
.vben-layout-mix-sider-menu-list__content .ant-menu-vertical-left {
  border-right: 1px solid transparent;
}
.vben-layout-mix-sider-drag-bar {
  position: absolute;
  top: 50px;
  right: -1px;
  width: 1px;
  height: calc(100% - 50px);
  cursor: ew-resize;
  background: #f8f8f9;
  border-top: none;
  border-bottom: none;
  box-shadow: 0 0 4px 0 rgba(28, 36, 56, 0.15);
}
`;const ho={class:"text"};function yo(e,n,t,a,i,r){const l=y("AppLogo"),d=y("Trigger"),s=y("MenuTag"),u=y("Icon"),c=y("ScrollContainer"),h=y("SimpleMenu"),m=Ut("click-outside");return b(),g(j,null,[v("div",{class:`${e.prefixCls}-dom`,style:e.getDomStyle},null,6),ue(v("div",D({style:e.getWrapStyle,class:[e.prefixCls,e.getMenuTheme,{open:e.openMenu,mini:e.getCollapsed}]},e.getMenuEvents),[v(l,{showTitle:!1,class:`${e.prefixCls}-logo`},null,8,["class"]),v(d,{class:`${e.prefixCls}-trigger`},null,8,["class"]),v(c,null,{default:$(()=>[v("ul",{class:`${e.prefixCls}-module`},[(b(!0),g(j,null,oe(e.menuModules,_=>(b(),g("li",D({class:[`${e.prefixCls}-module__item `,{[`${e.prefixCls}-module__item--active`]:_.path===e.activePath}],key:_.path},e.getItemEvents(_)),[v(s,{item:_,showTitle:!1,isHorizontal:!1},null,8,["item"]),v(u,{class:`${e.prefixCls}-module__icon`,size:e.getCollapsed?16:20,icon:_.meta&&_.meta.icon},null,8,["class","size","icon"]),v("p",{class:`${e.prefixCls}-module__name`},ne(e.t(_.name)),3)],16))),128))],2)]),_:1}),v("div",{class:`${e.prefixCls}-menu-list`,ref:"sideRef",style:e.getMenuStyle},[ue(v("div",{class:[`${e.prefixCls}-menu-list__title`,{show:e.openMenu}]},[v("span",ho,ne(e.title),1),v(u,{size:16,icon:e.getMixSideFixed?"ri:pushpin-2-fill":"ri:pushpin-2-line",class:"pushpin",onClick:e.handleFixedMenu},null,8,["icon","onClick"])],2),[[ye,e.openMenu]]),v(c,{class:`${e.prefixCls}-menu-list__content`},{default:$(()=>[v(h,{items:e.chilrenMenus,theme:e.getMenuTheme,mixSider:"",onMenuClick:e.handleMenuClick},null,8,["items","theme","onMenuClick"])]),_:1},8,["class"]),ue(v("div",{class:`${e.prefixCls}-drag-bar`,ref:"dragBarRef"},null,2),[[ye,e.getShowDragBar&&e.openMenu]])],6)],16),[[m,e.handleClickOutside]])],64)}lt.render=yo;var ut=O({name:"SiderWrapper",components:{Sider:st,Drawer:oa,MixSider:lt},setup(){const{prefixCls:e}=z("layout-sider-wrapper"),{getIsMobile:n}=re(),{setMenuSetting:t,getCollapsed:a,getMenuWidth:i,getIsMixSidebar:r}=V();function l(){t({collapsed:!0})}return{prefixCls:e,getIsMobile:n,getCollapsed:a,handleClose:l,getMenuWidth:i,getIsMixSidebar:r}}}),si=`.vben-layout-sider-wrapper .ant-drawer-body {
  height: 100vh;
  padding: 0;
}
.vben-layout-sider-wrapper .ant-drawer-header-no-title {
  display: none;
}
`;function _o(e,n,t,a,i,r){const l=y("Sider"),d=y("Drawer"),s=y("MixSider");return e.getIsMobile?(b(),g(d,{key:0,placement:"left",class:e.prefixCls,width:e.getMenuWidth,getContainer:null,visible:!e.getCollapsed,onClose:e.handleClose},{default:$(()=>[v(l)]),_:1},8,["class","width","visible","onClose"])):e.getIsMixSidebar?(b(),g(s,{key:1})):(b(),g(l,{key:2}))}ut.render=_o;var xe;(function(e){e[e.TAB_TYPE=0]="TAB_TYPE",e[e.EXTRA_TYPE=1]="EXTRA_TYPE"})(xe||(xe={}));var U;(function(e){e[e.REFRESH_PAGE=0]="REFRESH_PAGE",e[e.CLOSE_CURRENT=1]="CLOSE_CURRENT",e[e.CLOSE_LEFT=2]="CLOSE_LEFT",e[e.CLOSE_RIGHT=3]="CLOSE_RIGHT",e[e.CLOSE_OTHER=4]="CLOSE_OTHER",e[e.CLOSE_ALL=5]="CLOSE_ALL",e[e.SCALE=6]="SCALE"})(U||(U={}));const{t:me}=fe();function xo(e){const n=he({current:null,currentIndex:0}),{currentRoute:t}=de,a=p(()=>e.type===xe.TAB_TYPE),i=p(()=>o(a)?e.tabItem:o(t)),r=p(()=>{if(!o(i))return;const{meta:u}=o(i),{path:c}=o(t),h=n.current,m=n.currentIndex,_=h?h.path!==c:!0,f=m===0,x=Y.getTabsState.length===1,S=m===Y.getTabsState.length-1&&Y.getLastDragEndIndexState>=0;return[{icon:"ion:reload-sharp",event:U.REFRESH_PAGE,text:me("layout.multipleTab.reload"),disabled:_},{icon:"clarity:close-line",event:U.CLOSE_CURRENT,text:me("layout.multipleTab.close"),disabled:(u==null?void 0:u.affix)||x,divider:!0},{icon:"line-md:arrow-close-left",event:U.CLOSE_LEFT,text:me("layout.multipleTab.closeLeft"),disabled:f,divider:!1},{icon:"line-md:arrow-close-right",event:U.CLOSE_RIGHT,text:me("layout.multipleTab.closeRight"),disabled:S,divider:!0},{icon:"dashicons:align-center",event:U.CLOSE_OTHER,text:me("layout.multipleTab.closeOther"),disabled:x},{icon:"clarity:minus-line",event:U.CLOSE_ALL,text:me("layout.multipleTab.closeAll"),disabled:x}]}),l=p(()=>o(a)?["contextmenu"]:["click"]);function d(u){return c=>{if(!u)return;c==null||c.preventDefault();const h=Y.getTabsState.findIndex(m=>m.path===u.path);n.current=u,n.currentIndex=h}}function s(u){const{refreshPage:c,closeAll:h,close:m,closeLeft:_,closeOther:f,closeRight:x}=qt(),{event:S}=u;switch(S){case U.SCALE:scaleScreen();break;case U.REFRESH_PAGE:c();break;case U.CLOSE_CURRENT:m(e.tabItem);break;case U.CLOSE_LEFT:_();break;case U.CLOSE_RIGHT:x();break;case U.CLOSE_OTHER:f();break;case U.CLOSE_ALL:h();break}}return{getDropMenuList:r,handleMenuEvent:s,handleContextMenu:d,getTrigger:l,isTabs:a}}var dn=O({name:"TabContent",components:{Dropdown:ra,RightOutlined:Ge},props:{tabItem:{type:Object,default:null},type:{type:Number,default:xe.TAB_TYPE}},setup(e){const{prefixCls:n}=z("multiple-tabs-content"),{t}=fe(),a=p(()=>{const{tabItem:{meta:c}={}}=e;return c&&t(c.title)}),{getDropMenuList:i,handleMenuEvent:r,handleContextMenu:l,getTrigger:d,isTabs:s}=xo(e);function u(c){e.tabItem&&l(e.tabItem)(c)}return{prefixCls:n,getDropMenuList:i,handleMenuEvent:r,handleContext:u,getTrigger:d,isTabs:s,getTitle:a}}});const Co={class:"ml-1"};function So(e,n,t,a,i,r){const l=y("RightOutlined"),d=y("Dropdown");return b(),g(d,{dropMenuList:e.getDropMenuList,trigger:e.getTrigger,onMenuEvent:e.handleMenuEvent},{default:$(()=>[e.isTabs?(b(),g("div",{key:0,class:`${e.prefixCls}__info`,onContextmenu:n[1]||(n[1]=(...s)=>e.handleContext&&e.handleContext(...s))},[v("span",Co,ne(e.getTitle),1)],34)):(b(),g("span",{key:1,class:`${e.prefixCls}__extra-quick`,onClick:n[2]||(n[2]=(...s)=>e.handleContext&&e.handleContext(...s))},[v(l)],2))]),_:1},8,["dropMenuList","trigger","onMenuEvent"])}dn.render=So;function wo(){const e=I([]);function n(i){const r=[];return i&&i.forEach(l=>{l.meta&&l.meta.affix&&r.push($e(l))}),r}function t(){const i=n(de.getRoutes());e.value=i;for(const r of i)Y.addTabAction({meta:r.meta,name:r.name,path:r.path})}let a=!1;return a||(t(),a=!0),e.value.map(i=>{var r;return(r=i.meta)==null?void 0:r.title}).filter(Boolean)}function ko(e){const{multiTabsSetting:n}=Gt(),{prefixCls:t}=z("multiple-tabs");ve(()=>{var r;if(!n.canDrag)return;const a=(r=document.querySelectorAll(`.${t} .ant-tabs-nav > div`))==null?void 0:r[0],{initSortable:i}=ea(a,{filter:l=>{var s;const d=(s=l==null?void 0:l.target)==null?void 0:s.innerText;return d?e.includes(d):!1},onEnd:l=>{const{oldIndex:d,newIndex:s}=l;In(d)||In(s)||d===s||Y.commitSortTabs({oldIndex:d,newIndex:s})}});i()})}var dt=O({name:"MultipleTabs",components:{QuickButton:W(()=>K(()=>import("./QuickButton.bcf26d3d.js"),["/assets/QuickButton.bcf26d3d.js","/assets/index.de7a3c72.js","/assets/index.3100f8d1.css","/assets/isNumeric.2bec345d.js","/assets/RightOutlined.dcad5eff.js","/assets/LeftOutlined.6e782dc0.js","/assets/index.55f43c00.js","/assets/index.45c1fb22.css","/assets/EllipsisOutlined.ba16b190.js","/assets/types.ead79a33.js","/assets/isEqual.42834150.js","/assets/toInteger.e48028d2.js","/assets/index.95c10fda.js","/assets/index.20066e29.css","/assets/useTimeout.5494657f.js","/assets/useHeaderSetting.0d239ac1.js","/assets/domUtils.aa6aef94.js","/assets/_stringToArray.9f34c09e.js","/assets/useSortable.10178c08.js","/assets/index.b5f656c2.js","/assets/index.f0b9f139.css","/assets/index.cf88fb23.js","/assets/index.121e7eba.css","/assets/useScrollTo.3c6228cf.js","/assets/animation.29409132.js","/assets/index.2865f037.js","/assets/index.821438c4.css","/assets/useWindowSizeFn.5bd3f00e.js","/assets/usePageContext.05da5891.js","/assets/index.4e4cdfc2.js","/assets/index.864ac48e.css","/assets/clickOutside.5a8b0ef7.js","/assets/index.dad53a49.js","/assets/index.26261c72.css","/assets/UpOutlined.b1a0aa74.js","/assets/DownOutlined.2e949c36.js","/assets/PlusOutlined.20641b62.js","/assets/index.967c47da.js"])),TabRedo:W(()=>K(()=>import("./TabRedo.997f79b6.js"),["/assets/TabRedo.997f79b6.js","/assets/index.de7a3c72.js","/assets/index.3100f8d1.css","/assets/index.95c10fda.js","/assets/index.20066e29.css","/assets/RedoOutlined.d4a8b6b6.js"])),FoldButton:W(()=>K(()=>import("./FoldButton.398a3ac5.js"),["/assets/FoldButton.398a3ac5.js","/assets/index.de7a3c72.js","/assets/index.3100f8d1.css","/assets/index.95c10fda.js","/assets/index.20066e29.css","/assets/useHeaderSetting.0d239ac1.js","/assets/RedoOutlined.d4a8b6b6.js"])),Tabs:Nn,TabPane:Nn.TabPane,TabContent:dn},setup(){const e=wo(),n=I("");ko(e);const{prefixCls:t}=z("multiple-tabs"),a=qe(),{getShowQuick:i,getShowRedo:r,getShowFold:l}=Le(),d=p(()=>Y.getTabsState.filter(m=>{var _;return!((_=m.meta)==null?void 0:_.hideTab)})),s=p(()=>o(d).length===1),u=p(()=>[t,{[`${t}--hide-close`]:o(s)}]);Oe(m=>{const{name:_}=m;if(_===je||!m||!Yt.getTokenState)return;const{path:f,fullPath:x,meta:S={}}=m,{currentActiveMenu:C,hideTab:k}=S,A=k?C:null,R=A||x||f;if(n.value!==R&&(n.value=R),A){const F=de.getRoutes().find(L=>L.path===C);F&&Y.addTabAction(F)}else Y.addTabAction(o(m))});function c(m){n.value=m,a(m,!1)}function h(m){o(s)||Y.closeTabByKeyAction(m)}return{prefixCls:t,unClose:s,getWrapClass:u,handleEdit:h,handleChange:c,activeKeyRef:n,getTabsState:d,getShowQuick:i,getShowRedo:r,getShowFold:l}}}),li=`.vben-multiple-tabs {
  z-index: 10;
  height: 32px;
  line-height: 32px;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(29, 35, 41, 0.05);
}
.vben-multiple-tabs .ant-tabs-small {
  height: 30px;
}
.vben-multiple-tabs .ant-tabs.ant-tabs-card .ant-tabs-card-bar {
  height: 30px;
  margin: 0;
  background: #fff;
  border: 0;
  box-shadow: none;
}
.vben-multiple-tabs .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-nav-container {
  height: 30px;
  padding-top: 2px;
}
.vben-multiple-tabs .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab {
  height: calc(30px - 2px);
  padding-right: 12px;
  line-height: calc(30px - 2px);
  color: #606266;
  background: #fff;
  border: 1px solid #d7ddeb;
  transition: none;
}
.vben-multiple-tabs .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab:hover .ant-tabs-close-x {
  opacity: 1;
}
.vben-multiple-tabs .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab .ant-tabs-close-x {
  width: 8px;
  height: 12px;
  font-size: 12px;
  color: inherit;
  opacity: 0;
  transition: none;
}
.vben-multiple-tabs .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab .ant-tabs-close-x:hover svg {
  width: 0.8em;
}
.vben-multiple-tabs .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab > div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.vben-multiple-tabs .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab svg {
  fill: rgba(0, 0, 0, 0.85);
}
.vben-multiple-tabs .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active {
  position: relative;
  padding-left: 26px;
  color: #fff;
  background: #018ffb;
  border: 0;
  transition: none;
}
.vben-multiple-tabs .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active::before {
  position: absolute;
  top: calc(50% - 3px);
  left: 8px;
  width: 6px;
  height: 6px;
  background: #fff;
  border-radius: 50%;
  content: '';
  transition: none;
}
.vben-multiple-tabs .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active .ant-tabs-close-x {
  opacity: 1;
}
.vben-multiple-tabs .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active svg {
  width: 0.7em;
  fill: #fff;
}
.vben-multiple-tabs .ant-tabs.ant-tabs-card .ant-tabs-nav > div:nth-child(1) {
  padding: 0 6px;
}
.vben-multiple-tabs .ant-tabs.ant-tabs-card .ant-tabs-nav > div:nth-child(1) .ant-tabs-tab {
  margin-right: 3px !important;
}
.vben-multiple-tabs .ant-tabs-tab:not(.ant-tabs-tab-active) .anticon-close {
  font-size: 12px;
}
.vben-multiple-tabs .ant-tabs-tab:not(.ant-tabs-tab-active) .anticon-close svg {
  width: 0.6em;
}
.vben-multiple-tabs .ant-tabs-extra-content {
  margin-top: 2px;
  line-height: 30px !important;
}
.vben-multiple-tabs .ant-dropdown-trigger {
  display: inline-flex;
}
.vben-multiple-tabs--hide-close .ant-tabs-close-x {
  opacity: 0 !important;
}
.vben-multiple-tabs-content__extra-quick,
.vben-multiple-tabs-content__extra-redo,
.vben-multiple-tabs-content__extra-fold {
  display: inline-block;
  width: 36px;
  height: 30px;
  line-height: 30px;
  color: #666;
  text-align: center;
  cursor: pointer;
  border-left: 1px solid #eee;
}
.vben-multiple-tabs-content__extra-quick:hover,
.vben-multiple-tabs-content__extra-redo:hover,
.vben-multiple-tabs-content__extra-fold:hover {
  color: rgba(0, 0, 0, 0.85);
}
.vben-multiple-tabs-content__extra-quick span[role='img'],
.vben-multiple-tabs-content__extra-redo span[role='img'],
.vben-multiple-tabs-content__extra-fold span[role='img'] {
  transform: rotate(90deg);
}
.vben-multiple-tabs-content__extra-redo span[role='img'] {
  transform: rotate(0deg);
}
.vben-multiple-tabs-content__info {
  display: inline-block;
  width: 100%;
  height: 28px;
  padding-left: 0;
  margin-left: -10px;
  font-size: 12px;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
`;function Mo(e,n,t,a,i,r){const l=y("TabContent"),d=y("TabPane"),s=y("TabRedo"),u=y("QuickButton"),c=y("FoldButton"),h=y("Tabs");return b(),g("div",{class:e.getWrapClass},[v(h,{type:"editable-card",size:"small",animated:!1,hideAdd:!0,tabBarGutter:3,activeKey:e.activeKeyRef,onChange:e.handleChange,onEdit:e.handleEdit},On({default:$(()=>[(b(!0),g(j,null,oe(e.getTabsState,m=>(b(),g(d,{key:m.query?m.fullPath:m.path,closable:!(m&&m.meta&&m.meta.affix)},{tab:$(()=>[v(l,{tabItem:m},null,8,["tabItem"])]),_:2},1032,["closable"]))),128))]),_:2},[e.getShowRedo||e.getShowQuick?{name:"tabBarExtraContent",fn:$(()=>[e.getShowRedo?(b(),g(s,{key:0})):M("",!0),e.getShowQuick?(b(),g(u,{key:1})):M("",!0),e.getShowFold?(b(),g(c,{key:2})):M("",!0)])}:void 0]),1032,["activeKey","onChange","onEdit"])],2)}dt.render=Mo;const ct=48,To=32;var cn=O({name:"LayoutMultipleHeader",components:{LayoutHeader:ln,MultipleTabs:dt},setup(){const{prefixCls:e}=z("layout-multiple-header"),{getCalcContentWidth:n,getSplit:t}=V(),{getIsMobile:a}=re(),{getFixed:i,getShowInsetHeaderRef:r,getShowFullHeaderRef:l,getHeaderTheme:d,getShowHeader:s}=Qe(),{getFullContent:u}=Qt(),{getShowMultipleTab:c}=Le(),h=p(()=>o(c)&&!o(u)),m=p(()=>o(i)||o(l)),_=p(()=>{const C={};return o(i)&&(C.width=o(a)?"100%":o(n)),o(l)&&(C.top=`${ct}px`),C}),f=p(()=>o(i)||o(l)),x=p(()=>{let C=0;return(o(l)||!o(t))&&o(s)&&!o(u)&&(C+=ct),o(c)&&!o(u)&&(C+=To),ot.value=C,{height:`${C}px`}});return{getClass:p(()=>[e,`${e}--${o(d)}`,{[`${e}--fixed`]:o(f)}]),prefixCls:e,getPlaceholderDomStyle:x,getIsFixed:f,getWrapStyle:_,getIsShowPlaceholderDom:m,getShowTabs:h,getShowInsetHeaderRef:r}}}),ui=`.vben-layout-multiple-header[data-v-7402cd89] {
  transition: width 0.2s;
  flex: 0 0 auto;
}
.vben-layout-multiple-header--dark[data-v-7402cd89] {
  margin-left: 0;
}
.vben-layout-multiple-header--fixed[data-v-7402cd89] {
  position: fixed;
  top: 0;
  z-index: 505;
  width: 100%;
}
`;const $o=$n("data-v-7402cd89"),Oo=$o((e,n,t,a,i,r)=>{const l=y("LayoutHeader"),d=y("MultipleTabs");return b(),g(j,null,[e.getIsShowPlaceholderDom?(b(),g("div",{key:0,style:e.getPlaceholderDomStyle},null,4)):M("",!0),v("div",{style:e.getWrapStyle,class:e.getClass},[e.getShowInsetHeaderRef?(b(),g(l,{key:0})):M("",!0),e.getShowTabs?(b(),g(d,{key:1})):M("",!0)],6)],64)});cn.render=Oo,cn.__scopeId="data-v-7402cd89";var mt=O({name:"DefaultLayout",components:{LayoutFeatures:W(()=>K(()=>import("./index.1668e82f.js"),["/assets/index.1668e82f.js","/assets/index.a8d6d60f.css","/assets/index.de7a3c72.js","/assets/index.3100f8d1.css","/assets/scrollTo.c9242ea7.js"])),LayoutFooter:W(()=>K(()=>import("./index.34d5bbfa.js"),["/assets/index.34d5bbfa.js","/assets/index.824af691.css","/assets/index.de7a3c72.js","/assets/index.3100f8d1.css","/assets/siteSetting.2daee9f0.js","/assets/GithubFilled.735e6ccc.js","/assets/isNumeric.2bec345d.js","/assets/RightOutlined.dcad5eff.js","/assets/LeftOutlined.6e782dc0.js","/assets/index.55f43c00.js","/assets/index.45c1fb22.css","/assets/EllipsisOutlined.ba16b190.js","/assets/types.ead79a33.js","/assets/isEqual.42834150.js","/assets/toInteger.e48028d2.js","/assets/index.95c10fda.js","/assets/index.20066e29.css","/assets/useTimeout.5494657f.js","/assets/useHeaderSetting.0d239ac1.js","/assets/domUtils.aa6aef94.js","/assets/_stringToArray.9f34c09e.js","/assets/useSortable.10178c08.js","/assets/index.b5f656c2.js","/assets/index.f0b9f139.css","/assets/index.cf88fb23.js","/assets/index.121e7eba.css","/assets/useScrollTo.3c6228cf.js","/assets/animation.29409132.js","/assets/index.2865f037.js","/assets/index.821438c4.css","/assets/useWindowSizeFn.5bd3f00e.js","/assets/usePageContext.05da5891.js","/assets/index.4e4cdfc2.js","/assets/index.864ac48e.css","/assets/clickOutside.5a8b0ef7.js","/assets/index.dad53a49.js","/assets/index.26261c72.css","/assets/UpOutlined.b1a0aa74.js","/assets/DownOutlined.2e949c36.js","/assets/PlusOutlined.20641b62.js","/assets/index.967c47da.js"])),LayoutHeader:ln,LayoutContent:it,LayoutSideBar:ut,LayoutMultipleHeader:cn,Layout:N},setup(){const{prefixCls:e}=z("default-layout"),{getIsMobile:n}=re(),{getShowFullHeaderRef:t}=Qe(),{getShowSidebar:a,getIsMixSidebar:i}=V();return{getShowFullHeaderRef:t,getShowSidebar:a,prefixCls:e,getIsMobile:n,getIsMixSidebar:i}}}),di=`.vben-default-layout {
  display: flex;
  width: 100%;
  min-height: 100%;
  background: #f4f7f9;
  flex-direction: column;
}
.vben-default-layout > .ant-layout {
  min-height: 100%;
}
.vben-default-layout__main {
  margin-left: 1px;
}
`;function Io(e,n,t,a,i,r){const l=y("LayoutFeatures"),d=y("LayoutHeader"),s=y("LayoutSideBar"),u=y("LayoutMultipleHeader"),c=y("LayoutContent"),h=y("LayoutFooter"),m=y("Layout");return b(),g(m,{class:e.prefixCls},{default:$(()=>[v(l),e.getShowFullHeaderRef?(b(),g(d,{key:0,fixed:""})):M("",!0),v(m,{class:{"ant-layout-has-sider":e.getIsMixSidebar}},{default:$(()=>[e.getShowSidebar||e.getIsMobile?(b(),g(s,{key:0})):M("",!0),v(m,{class:`${e.prefixCls}__main`},{default:$(()=>[v(u),v(c),v(h)]),_:1},8,["class"])]),_:1},8,["class"])]),_:1},8,["class"])}mt.render=Io;var Lo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:mt});export{N as L,xe as T,dn as _,jn as c,Lo as i};
