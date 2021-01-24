var x=Object.assign;import{aa as L,P as c,d as j,v as R,x as D,I as W,z as b,J as M,j as i,D as E,cA as G,aN as z,aS as J,o as $,i as F,b1 as f,bw as q,aG as k,r as T,a0 as H,aW as K,cy as V,e as _,E as Q,h as A,bx as U,aP as X,w as S,T as Y,k as Z,aO as ee,m as ne,l as te,aL as ae,aM as re}from"./index.de7a3c72.js";import{B as oe}from"./index.492a2c9c.js";import"./index.55f43c00.js";import"./index.95c10fda.js";import{A as ie}from"./index.22fd658f.js";import{u as se}from"./usePageContext.05da5891.js";import{T as de}from"./transButton.da8a2266.js";import{A as le}from"./ArrowLeftOutlined.ddcf4a87.js";function pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!E(e)}var ge={backIcon:c.VNodeChild,prefixCls:c.string,title:c.VNodeChild,subTitle:c.VNodeChild,breadcrumb:c.object,tags:c.any,footer:c.VNodeChild,extra:c.VNodeChild,avatar:c.object,ghost:c.looseBool,onBack:c.func},ce=function(t,n,r,a){return!r||!a?null:i(G,{componentName:"PageHeader",children:function(o){var s=o.back;return i("div",{class:"".concat(n,"-back")},[i(de,{onClick:function(g){t.$emit("back",g)},class:"".concat(n,"-back-button"),"aria-label":s},v(r)?r:{default:function(){return[r]}})])}},null)},fe=function(t){return i(oe,t,null)},ue=function(t,n){var r=n.avatar,a=b(n,"title"),d=b(n,"subTitle"),o=b(n,"tags"),s=b(n,"extra"),p=b(n,"backIcon")!==void 0?b(n,"backIcon"):i(le,null,null),g=n.onBack,l="".concat(t,"-heading");if(a||d||o||s){var m=ce(n,t,p,g);return i("div",{class:l},[m,r&&i(ie,r,null),a&&i("span",{class:"".concat(l,"-title")},v(a)?a:{default:function(){return[a]}}),d&&i("span",{class:"".concat(l,"-sub-title")},v(d)?d:{default:function(){return[d]}}),o&&i("span",{class:"".concat(l,"-tags")},v(o)?o:{default:function(){return[o]}}),s&&i("span",{class:"".concat(l,"-extra")},v(s)?s:{default:function(){return[s]}})])}return null},he=function(t,n){return n?i("div",{class:"".concat(t,"-footer")},v(n)?n:{default:function(){return[n]}}):null},be=function(t,n){return i("div",{class:"".concat(t,"-content")},v(n)?n:{default:function(){return[n]}})},ve=j({name:"APageHeader",props:ge,setup:function(){return{configProvider:R("configProvider",D)}},render:function(){var t=this.configProvider,n=t.getPrefixCls,r=t.pageHeader,a=W(this),d=a.prefixCls,o=a.breadcrumb,s=b(this,"footer"),p=M(this),g=!0;"ghost"in a?g=a.ghost:r&&"ghost"in r&&(g=r.ghost);var l=n("page-header",d),m=o&&o.routes?fe(o):null,u=[l,pe({"has-breadcrumb":m,"has-footer":s},"".concat(l,"-ghost"),g)];return i("div",{class:u},[m,ue(l,this),p.length?be(l,p):null,he(l,s)])}}),me=L(ve),Te=`/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
/* stylelint-disable no-duplicate-selectors */
/* stylelint-disable */
/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
.ant-page-header {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  position: relative;
  padding: 16px 24px;
  background-color: #fff;
}
.ant-page-header-ghost {
  background-color: inherit;
}
.ant-page-header.has-breadcrumb {
  padding-top: 12px;
}
.ant-page-header.has-footer {
  padding-bottom: 0;
}
.ant-page-header-back {
  float: left;
  margin: 8px 0;
  margin-right: 16px;
  font-size: 16px;
  line-height: 1;
}
.ant-page-header-back-button {
  color: #1890ff;
  text-decoration: none;
  outline: none;
  transition: color 0.3s;
  color: #000;
  cursor: pointer;
}
.ant-page-header-back-button:focus,
.ant-page-header-back-button:hover {
  color: #40a9ff;
}
.ant-page-header-back-button:active {
  color: #096dd9;
}
.ant-page-header .ant-divider-vertical {
  height: 14px;
  margin: 0 12px;
  vertical-align: middle;
}
.ant-breadcrumb + .ant-page-header-heading {
  margin-top: 8px;
}
.ant-page-header-heading {
  width: 100%;
  overflow: hidden;
}
.ant-page-header-heading-title {
  display: block;
  float: left;
  margin-bottom: 0;
  padding-right: 12px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
}
.ant-page-header-heading .ant-avatar {
  float: left;
  margin-right: 12px;
}
.ant-page-header-heading-sub-title {
  float: left;
  margin: 5px 0;
  margin-right: 12px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  line-height: 22px;
}
.ant-page-header-heading-tags {
  float: left;
  margin: 4px 0;
}
.ant-page-header-heading-extra {
  float: right;
}
.ant-page-header-heading-extra > * {
  margin-left: 8px;
}
.ant-page-header-heading-extra > *:first-child {
  margin-left: 0;
}
.ant-page-header-content {
  padding-top: 12px;
  overflow: hidden;
}
.ant-page-header-footer {
  margin-top: 16px;
}
.ant-page-header-footer .ant-tabs-bar {
  margin-bottom: 1px;
  border-bottom: 0;
}
.ant-page-header-footer .ant-tabs-bar .ant-tabs-nav .ant-tabs-tab {
  padding: 8px;
  font-size: 16px;
}
@media (max-width: 576px) {
  .ant-page-header-heading-extra {
    display: block;
    float: unset;
    width: 100%;
    padding-top: 12px;
    overflow: hidden;
  }
}
`,B=j({name:"PageFooter",setup(){const{prefixCls:e}=z("page-footer"),{getCalcContentWidth:t}=J();return{prefixCls:e,getCalcContentWidth:t}}}),Ne=`.vben-page-footer[data-v-7b16399c] {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 99;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 24px;
  line-height: 44px;
  background: #fff;
  border-top: 1px solid #f0f0f0;
  box-shadow: 0 -6px 16px -8px rgba(0, 0, 0, 0.08), 0 -9px 28px 0 rgba(0, 0, 0, 0.05), 0 -12px 48px 16px rgba(0, 0, 0, 0.03);
  transition: width 0.4s;
}
.vben-page-footer__left[data-v-7b16399c] {
  flex: 1 1;
}
`;const xe=q("data-v-7b16399c"),_e=xe((e,t,n,r,a,d)=>($(),F("div",{class:e.prefixCls,style:{width:e.getCalcContentWidth}},[i("div",{class:`${e.prefixCls}__left`},[f(e.$slots,"left")],2),f(e.$slots,"default"),i("div",{class:`${e.prefixCls}__right`},[f(e.$slots,"right")],2)],6)));B.render=_e,B.__scopeId="data-v-7b16399c";var Ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:B}),I=j({name:"PageWrapper",components:{PageFooter:B,PageHeader:me},props:{dense:k.bool,ghost:k.bool,content:k.string,contentStyle:{type:Object},contentBackground:k.bool,contentFullHeight:k.bool},setup(e,{slots:t}){const n=T(null),r=T(null),a=T(0),{prefixCls:d}=z("page-wrapper"),{contentHeight:o,setPageHeight:s,pageHeight:p}=se(),g=H(()=>[d,{[`${d}--dense`]:e.dense}]),l=H(()=>(t==null?void 0:t.leftFooter)||(t==null?void 0:t.rightFooter)),m=H(()=>Object.keys(V(t,"default","leftFooter","rightFooter","headerContent"))),u=H(()=>{const{contentBackground:C,contentFullHeight:P,contentStyle:h}=e,y=C?{backgroundColor:"#fff"}:{};return P?x(x(x({},y),h),{minHeight:`${_(p)}px`,paddingBottom:`${_(a)}px`}):x(x({},y),h)});return K(()=>[o==null?void 0:o.value,l.value],()=>{!e.contentFullHeight||Q(()=>{var N,O;const C=_(r),P=_(n);a.value=0;const h=C==null?void 0:C.$el;h&&(a.value+=(N=h==null?void 0:h.offsetHeight)!=null?N:0);let y=0;const w=P==null?void 0:P.$el;w&&(y+=(O=w==null?void 0:w.offsetHeight)!=null?O:0),s==null||s(_(o)-_(a)-y)})},{immediate:!0}),{getContentStyle:u,footerRef:r,headerRef:n,getClass:g,getHeaderSlots:m,prefixCls:d,getShowFooter:l,pageHeight:p,omit:V}}}),Oe=`.vben-page-wrapper {
  position: relative;
}
.vben-page-wrapper .ant-page-header:empty {
  padding: 0;
}
.vben-page-wrapper-content {
  margin: 16px;
}
.vben-page-wrapper--dense .vben-page-wrapper-content {
  margin: 0;
}
`;function Pe(e,t,n,r,a,d){const o=A("PageHeader"),s=A("PageFooter");return $(),F("div",{class:e.getClass},[i(o,Y({ghost:e.ghost},e.$attrs,{ref:"headerRef"}),U({default:S(()=>[e.content?($(),F(ee,{key:0},[ne(te(e.content),1)],64)):f(e.$slots,"headerContent",{key:1})]),_:2},[X(e.getHeaderSlots,p=>({name:p,fn:S(g=>[f(e.$slots,p,g)])}))]),1040,["ghost"]),i("div",{class:[`${e.prefixCls}-content`,e.$attrs.contentClass],style:e.getContentStyle},[f(e.$slots,"default")],6),e.getShowFooter?($(),F(s,{key:0,ref:"footerRef"},{left:S(()=>[f(e.$slots,"leftFooter")]),right:S(()=>[f(e.$slots,"rightFooter")]),_:1},512)):Z("",!0)],2)}I.render=Pe,ae(()=>re(()=>Promise.resolve().then(function(){return Ce}),"__VITE_PRELOAD__"));export{I as _};
