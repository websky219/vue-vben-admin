var b=Object.assign;import{u as I,aG as i,d as S,aN as j,a0 as g,h as _,o as w,i as h,aO as ae,b1 as v,T as F,w as C,m as H,l as O,k as B,j as y,r as k,a_ as q,aW as ie,b0 as M,e as a,aX as x,cU as z,t as U,cn as le,E as W,bA as de,bx as X,H as ce,aP as ue,a as Z,cY as pe,bZ as G,cZ as fe,cT as L,bX as be}from"./index.de7a3c72.js";import{D as ge}from"./index.4e4cdfc2.js";import{d as we,_ as he}from"./index.b5f656c2.js";import{A as ve}from"./ArrowLeftOutlined.ddcf4a87.js";import{u as me}from"./useAttrs.5fb4b160.js";import{i as Ce}from"./isEqual.42834150.js";const{t:Y}=I(),J={confirmLoading:i.bool,showCancelBtn:i.bool.def(!0),cancelButtonProps:Object,cancelText:i.string.def(Y("common.cancelText")),showOkBtn:i.bool.def(!0),okButtonProps:Object,okText:i.string.def(Y("common.okText")),okType:i.string.def("primary"),showFooter:i.bool,footerHeight:{type:[String,Number],default:60}},De=b({isDetail:i.bool,title:i.string.def(""),loadingText:i.string,showDetailBack:i.bool.def(!0),visible:i.bool,loading:i.bool,maskClosable:i.bool.def(!0),getContainer:{type:[Object,String]},scrollOptions:{type:Object,default:null},closeFunc:{type:[Function,Object],default:null},triggerWindowResize:i.bool,destroyOnClose:i.bool},J);var K=S({name:"BasicDrawerFooter",props:b(b({},J),{height:{type:String,default:"60px"}}),emits:["ok","close"],setup(e,{emit:s}){const{prefixCls:t}=j("basic-drawer-footer"),d=g(()=>{const n=`${e.height}`;return{height:n,lineHeight:n}});function l(){s("ok")}function u(){s("close")}return{handleOk:l,prefixCls:t,handleClose:u,getStyle:d}}}),Re=`.vben-basic-drawer-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 12px 0 20px;
  text-align: right;
  background: #fff;
  border-top: 1px solid #F0F0F0;
}
.vben-basic-drawer-footer > * {
  margin-right: 8px;
}
`;function _e(e,s,t,d,l,u){const n=_("a-button");return e.showFooter||e.$slots.footer?(w(),h("div",{key:0,class:e.prefixCls,style:e.getStyle},[e.$slots.footer?v(e.$slots,"footer",{key:1}):(w(),h(ae,{key:0},[v(e.$slots,"insertFooter"),e.showCancelBtn?(w(),h(n,F({key:0},e.cancelButtonProps,{onClick:e.handleClose,class:"mr-2"}),{default:C(()=>[H(O(e.cancelText),1)]),_:1},16,["onClick"])):B("",!0),v(e.$slots,"centerFooter"),e.showOkBtn?(w(),h(n,F({key:1,type:e.okType,onClick:e.handleOk},e.okButtonProps,{class:"mr-2",loading:e.confirmLoading}),{default:C(()=>[H(O(e.okText),1)]),_:1},16,["type","onClick","loading"])):B("",!0),v(e.$slots,"appendFooter")],64))],6)):B("",!0)}K.render=_e;var Q=S({name:"BasicDrawerHeader",components:{BasicTitle:we,ArrowLeftOutlined:ve},props:{isDetail:i.bool,showDetailBack:i.bool,title:i.string},setup(e,{emit:s}){const{prefixCls:t}=j("basic-drawer-header");function d(){s("close")}return{prefixCls:t,handleClose:d}}}),Ve=`.vben-basic-drawer-header {
  display: flex;
  height: 100%;
  align-items: center;
}
.vben-basic-drawer-header__back {
  padding: 0 12px;
  cursor: pointer;
}
.vben-basic-drawer-header__back:hover {
  color: #018ffb;
}
.vben-basic-drawer-header__twrap {
  flex: 1;
}
.vben-basic-drawer-header__toolbar {
  padding-right: 50px;
}
`;const ke={key:1};function ye(e,s,t,d,l,u){const n=_("BasicTitle"),r=_("ArrowLeftOutlined");return e.isDetail?(w(),h("div",{key:1,class:[e.prefixCls,`${e.prefixCls}--detail`]},[y("span",{class:`${e.prefixCls}__twrap`},[e.showDetailBack?(w(),h("span",{key:0,onClick:s[1]||(s[1]=(...c)=>e.handleClose&&e.handleClose(...c))},[y(r,{class:`${e.prefixCls}__back`},null,8,["class"])])):B("",!0),e.title?(w(),h("span",ke,O(e.title),1)):B("",!0)],2),y("span",{class:`${e.prefixCls}__toolbar`},[v(e.$slots,"titleToolbar")],2)],2)):(w(),h(n,{key:0,class:e.prefixCls},{default:C(()=>[v(e.$slots,"title"),H(" "+O(e.$slots.title?"":e.title),1)]),_:3},8,["class"]))}Q.render=ye;var R=S({inheritAttrs:!1,components:{Drawer:ge,ScrollContainer:he,DrawerFooter:K,DrawerHeader:Q},props:De,emits:["visible-change","ok","close","register"],setup(e,{emit:s}){const t=k(!1),d=me(),l=k(null),{t:u}=I(),{prefixVar:n,prefixCls:r}=j("basic-drawer"),c={setDrawerProps:te,emitVisible:void 0},f=M();f&&s("register",c,f.uid);const D=g(()=>z(U(e),a(l))),m=g(()=>{const o=b(b(b({placement:"right"},a(d)),a(D)),{visible:a(t)});o.title=void 0;const{isDetail:p,width:P,wrapClassName:N,getContainer:se}=o;if(p){P||(o.width="100%");const E=`${r}__detail`;o.wrapClassName=N?`${N} ${E}`:E,se||(o.getContainer=`.${n}-layout-content`)}return o}),T=g(()=>b(b({},d),a(m))),A=g(()=>{const{footerHeight:o,showFooter:p}=a(m);return p&&o?le(o)?`${o}px`:`${o.replace("px","")}px`:"0px"}),ee=g(()=>{const o=a(A);return{position:"relative",height:`calc(100% - ${o})`}}),ne=g(()=>{var o;return!!((o=a(m))==null?void 0:o.loading)});q(()=>{t.value=e.visible}),ie(()=>t.value,o=>{W(()=>{var p;s("visible-change",o),f&&((p=c.emitVisible)==null||p.call(c,o,f.uid))})});async function re(o){const{closeFunc:p}=a(m);if(s("close",o),p&&x(p)){const P=await p();t.value=!P;return}t.value=!1}function te(o){l.value=z(a(l)||{},o),Reflect.has(o,"visible")&&(t.value=!!o.visible)}function oe(){s("ok")}return{onClose:re,t:u,prefixCls:r,getMergeProps:D,getScrollContentStyle:ee,getProps:m,getLoading:ne,getBindValues:T,getFooterHeight:A,handleOk:oe}}}),Ae=`.vben-basic-drawer .ant-drawer-wrapper-body {
  overflow: hidden;
}
.vben-basic-drawer .ant-drawer-close:hover {
  color: #ED6F6F;
}
.vben-basic-drawer .ant-drawer-body {
  height: calc(100% - 48px);
  padding: 0;
  background-color: #fff;
}
.vben-basic-drawer .ant-drawer-body .scrollbar__wrap {
  padding: 16px !important;
  margin-bottom: 0 !important;
}
.vben-basic-drawer .ant-drawer-body > .scrollbar > .scrollbar__bar.is-horizontal {
  display: none;
}
.vben-basic-drawer__detail {
  position: absolute;
}
.vben-basic-drawer__detail .ant-drawer-header {
  width: 100%;
  height: 40px;
  padding: 0;
  border-top: 1px solid #F0F0F0;
  box-sizing: border-box;
}
.vben-basic-drawer__detail .ant-drawer-title {
  height: 100%;
}
.vben-basic-drawer__detail .ant-drawer-close {
  height: 40px;
  line-height: 40px;
}
.vben-basic-drawer__detail .scrollbar__wrap {
  padding: 0 !important;
}
.vben-basic-drawer__detail .ant-drawer-body {
  height: calc(100% - 40px);
}
`;function $e(e,s,t,d,l,u){const n=_("DrawerHeader"),r=_("ScrollContainer"),c=_("DrawerFooter"),f=_("Drawer"),D=de("loading");return w(),h(f,F({class:e.prefixCls,onClose:e.onClose},e.getBindValues),X({default:C(()=>[ce(y(r,{style:e.getScrollContentStyle,"loading-tip":e.loadingText||e.t("common.loadingText")},{default:C(()=>[v(e.$slots,"default")]),_:3},8,["style","loading-tip"]),[[D,e.getLoading]]),y(c,F(e.getProps,{onClose:e.onClose,onOk:e.handleOk,height:e.getFooterHeight}),X({_:2},[ue(Object.keys(e.$slots),m=>({name:m,fn:C(T=>[v(e.$slots,m,T)])}))]),1040,["onClose","onOk","height"])]),_:2},[e.$slots.title?void 0:{name:"title",fn:C(()=>[y(n,{title:e.getMergeProps.title,isDetail:e.isDetail,showDetailBack:e.showDetailBack,onClose:e.onClose},{titleToolbar:C(()=>[v(e.$slots,"titleToolbar")]),_:1},8,["title","isDetail","showDetailBack","onClose"])])}]),1040,["class","onClose"])}R.render=$e;const $=Z({}),V=Z({});function Be(){pe();const e=k(null),s=k(!1),t=k("");function d(n,r){G(()=>{e.value=null,s.value=null,$[a(t)]=null}),!(a(s)&&fe()&&n===a(e))&&(t.value=r,e.value=n,s.value=!0,n.emitVisible=(c,f)=>{V[f]=c})}const l=()=>{const n=a(e);return n||L("useDrawer instance is undefined!"),n},u={setDrawerProps:n=>{var r;(r=l())==null||r.setDrawerProps(n)},getVisible:g(()=>V[~~a(t)]),openDrawer:(n=!0,r,c=!0)=>{var D;if((D=l())==null||D.setDrawerProps({visible:n}),!r)return;if(c){$[a(t)]=null,$[a(t)]=r;return}Ce(U($[a(t)]),r)||($[a(t)]=r)}};return[d,u]}const Fe=e=>{const s=k(null),t=M(),d=k("");t||L("useDrawerInner instance is undefined!");const l=()=>{const n=a(s);if(!n){L("useDrawerInner instance is undefined!");return}return n},u=(n,r)=>{G(()=>{s.value=null}),d.value=r,s.value=n,t==null||t.emit("register",n,r)};return q(()=>{const n=$[a(d)];!n||!e||!x(e)||W(()=>{e(n)})}),[u,{changeLoading:(n=!0)=>{var r;(r=l())==null||r.setDrawerProps({loading:n})},changeOkLoading:(n=!0)=>{var r;(r=l())==null||r.setDrawerProps({confirmLoading:n})},getVisible:g(()=>V[~~a(d)]),closeDrawer:()=>{var n;(n=l())==null||n.setDrawerProps({visible:!1})},setDrawerProps:n=>{var r;(r=l())==null||r.setDrawerProps(n)}}]};be(R);export{R as _,Fe as a,Be as u};
