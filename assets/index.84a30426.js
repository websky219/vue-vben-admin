var h=Object.assign;import{u as re,aG as a,a_ as x,e as r,d as T,aE as ie,j as O,cW as ce,D as de,cX as ue,aY as fe,aZ as me,cf as pe,r as g,a0 as H,aW as Y,q as ge,bW as U,E as N,h as b,bA as he,o as y,i as F,w as v,H as be,b1 as w,bO as ve,aN as Ce,aO as ye,k as A,T as E,m as I,l as L,bd as Fe,cy as Me,aX as Z,b0 as G,cU as $e,bx as J,aP as K,a as Q,cY as He,cZ as Se,t as ke,cT as ee,bZ as Oe,bX as we}from"./index.de7a3c72.js";import{u as Pe}from"./useTimeout.5494657f.js";import{u as Te}from"./useAttrs.5fb4b160.js";import{u as Re}from"./useWindowSizeFn.5bd3f00e.js";import{_ as De,d as We}from"./index.b5f656c2.js";import{F as _e,a as Ee}from"./FullscreenOutlined.09f91c42.js";import{i as je}from"./isEqual.42834150.js";var ln=`.fullscreen-modal {
  overflow: hidden;
}
.fullscreen-modal .ant-modal {
  top: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100%;
}
.fullscreen-modal .ant-modal-content {
  height: 100%;
}
.ant-modal {
  width: 520px;
  padding-bottom: 0;
}
.ant-modal .scrollbar {
  padding: 14px;
}
.ant-modal-title {
  font-size: 16px;
  font-weight: bold;
  line-height: 16px;
}
.ant-modal-title .base-title {
  cursor: move !important;
}
.ant-modal .ant-modal-body {
  padding: 0;
}
.ant-modal .ant-modal-body > .scrollbar > .scrollbar__bar.is-horizontal {
  display: none;
}
.ant-modal-large {
  top: 60px;
}
.ant-modal-large--mini {
  top: 16px;
}
.ant-modal-header {
  padding: 16px;
}
.ant-modal-content {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.ant-modal-footer button + button {
  margin-left: 10px;
}
.ant-modal-close {
  font-weight: normal;
  outline: none;
}
.ant-modal-close-x {
  display: inline-block;
  width: 96px;
  height: 56px;
  line-height: 56px;
}
.ant-modal-confirm-body .ant-modal-confirm-content > * {
  color: #909399;
}
.ant-modal-confirm-confirm.error .ant-modal-confirm-body > .anticon {
  color: #ED6F6F;
}
.ant-modal-confirm-btns .ant-btn:last-child {
  margin-right: 0;
}
.ant-modal-confirm-info .ant-modal-confirm-body > .anticon {
  color: #EFBD47;
}
.ant-modal-confirm-confirm.success .ant-modal-confirm-body > .anticon {
  color: #55D187;
}
.ant-modal-confirm .ant-modal-body {
  padding: 24px !important;
}
@media screen and (max-height: 600px) {
  .ant-modal {
    top: 60px;
  }
}
@media screen and (max-height: 540px) {
  .ant-modal {
    top: 30px;
  }
}
@media screen and (max-height: 480px) {
  .ant-modal {
    top: 10px;
  }
}
`;const{t:ne}=re(),Be={visible:a.bool,height:a.number,minHeight:a.number,draggable:a.bool.def(!0),centered:a.bool,cancelText:a.string.def(ne("common.cancelText")),okText:a.string.def(ne("common.okText")),closeFunc:Function},V=Object.assign({},Be,{defaultFullscreen:a.bool,canFullscreen:a.bool.def(!0),wrapperFooterOffset:a.number.def(0),helpMessage:[String,Array],useWrapper:a.bool.def(!0),loading:a.bool,loadingTip:a.string,showCancelBtn:a.bool.def(!0),showOkBtn:a.bool.def(!0),wrapperProps:Object,afterClose:Function,bodyStyle:Object,closable:a.bool.def(!0),closeIcon:Object,confirmLoading:a.bool,destroyOnClose:a.bool,footer:Object,getContainer:Function,mask:a.bool.def(!0),maskClosable:a.bool.def(!0),keyboard:a.bool.def(!0),maskStyle:Object,okType:a.string.def("primary"),okButtonProps:Object,cancelButtonProps:Object,title:a.string,visible:a.bool,width:[String,Number],wrapClassName:a.string,zIndex:a.number});function xe(e){const l=(o,c)=>getComputedStyle(o)[c],s=o=>{if(!o)return;o.setAttribute("data-drag",r(e.draggable));const c=o.querySelector(".ant-modal-header"),n=o.querySelector(".ant-modal");!c||!n||!r(e.draggable)||(c.style.cursor="move",c.onmousedown=t=>{if(!t)return;const u=t.clientX,f=t.clientY,m=document.body.clientWidth,p=document.documentElement.clientHeight,C=n.offsetWidth,S=n.offsetHeight,M=n.offsetLeft,k=m-n.offsetLeft-C,j=n.offsetTop,B=p-n.offsetTop-S,P=l(n,"left"),D=l(n,"top");let d=+P,$=+D;P.includes("%")?(d=+document.body.clientWidth*(+P.replace(/%/g,"")/100),$=+document.body.clientHeight*(+D.replace(/%/g,"")/100)):(d=+P.replace(/px/g,""),$=+D.replace(/px/g,"")),document.onmousemove=function(X){let W=X.clientX-u,_=X.clientY-f;-W>M?W=-M:W>k&&(W=k),-_>j?_=-j:_>B&&(_=B),n.style.cssText+=`;left:${W+d}px;top:${_+$}px;`},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null}})},i=()=>{const o=document.querySelectorAll(".ant-modal-wrap");for(const c of Array.from(o)){if(!c)continue;const n=l(c,"display"),t=c.getAttribute("data-drag");n!=="none"&&(t===null||r(e.destroyOnClose))&&s(c)}};x(()=>{!r(e.visible)||!r(e.draggable)||Pe(()=>{i()},30)})}function Ne(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!de(e)}var Ae=T({name:"Modal",inheritAttrs:!1,props:V,setup(e,{slots:l}){const{visible:s,draggable:i,destroyOnClose:o}=ie(e),c=Te();return xe({visible:s,destroyOnClose:o,draggable:i}),()=>{let n;const t=h(h({},r(c)),e);return O(ue,t,Ne(n=ce(l))?n:{default:()=>[n]})}}});const oe=Symbol();function Ie(e){return fe(e,oe)}function Le(){return me(oe)}var te=T({name:"ModalWrapper",inheritAttrs:!1,components:{Spin:pe,ScrollContainer:De},props:{loading:a.bool,useWrapper:a.bool.def(!0),modalHeaderHeight:a.number.def(57),modalFooterHeight:a.number.def(74),minHeight:a.number.def(200),height:a.number,footerOffset:a.number.def(0),visible:a.bool,fullScreen:a.bool,loadingTip:a.string},emits:["height-change","ext-height"],setup(e,{emit:l}){const s=g(null),i=g(null),o=g(0),c=g(0);let n=0;Re(u),Ie({redoModalHeight:u});const t=H(()=>({minHeight:`${e.minHeight}px`,height:`${r(o)}px`}));x(()=>{e.useWrapper&&u()}),Y(()=>e.fullScreen,f=>{u(),f?c.value=o.value:o.value=c.value}),ge(()=>{const{modalHeaderHeight:f,modalFooterHeight:m}=e;l("ext-height",f+m)}),U(()=>{});async function u(){if(!e.visible)return;const f=r(s);if(!f)return;const m=f.$el.parentElement;if(!!m){m.style.padding="0",await N();try{const p=m.parentElement&&m.parentElement.parentElement;if(!p)return;const C=getComputedStyle(p).top,S=Number.parseInt(C);let M=window.innerHeight-S*2+(e.footerOffset||0)-e.modalFooterHeight-e.modalHeaderHeight;S<40&&(M-=26),await N();const k=r(i);if(!k)return;await N(),n=k.scrollHeight,e.fullScreen?o.value=window.innerHeight-e.modalFooterHeight-e.modalHeaderHeight-28:o.value=e.height?e.height:n>M?M:n,l("height-change",r(o))}catch(p){console.log(p)}}}return{wrapperRef:s,spinRef:i,spinStyle:t}}});function Ve(e,l,s,i,o,c){const n=b("ScrollContainer"),t=he("loading");return y(),F(n,{ref:"wrapperRef"},{default:v(()=>[be(O("div",{ref:"spinRef",style:e.spinStyle,"loading-tip":e.loadingTip},[w(e.$slots,"default")],12,["loading-tip"]),[[t,e.loading]])]),_:3},512)}te.render=Ve;var ae=T({name:"ModalClose",components:{FullscreenExitOutlined:_e,FullscreenOutlined:Ee,CloseOutlined:ve},props:{canFullscreen:a.bool.def(!0),fullScreen:a.bool},emits:["cancel","fullscreen"],setup(e,{emit:l}){const{prefixCls:s}=Ce("basic-modal-close"),i=H(()=>[s,`${s}--custom`,{[`${s}--can-full`]:e.canFullscreen}]);function o(){l("cancel")}function c(n){n==null||n.stopPropagation(),n==null||n.preventDefault(),l("fullscreen")}return{getClass:i,prefixCls:s,handleCancel:o,handleFullScreen:c}}}),sn=`.vben-basic-modal-close {
  display: flex;
  height: 95%;
  align-items: center;
}
.vben-basic-modal-close > span {
  margin-left: 48px;
  font-size: 16px;
}
.vben-basic-modal-close--can-full > span {
  margin-left: 12px;
}
.vben-basic-modal-close:not(.vben-basic-modal-close--can-full) > span:nth-child(1):hover {
  font-weight: 700;
}
.vben-basic-modal-close span:nth-child(1) {
  display: inline-block;
  padding: 10px;
}
.vben-basic-modal-close span:nth-child(1):hover {
  color: #018ffb;
}
.vben-basic-modal-close span:nth-child(2):hover {
  color: #ED6F6F;
}
`;function qe(e,l,s,i,o,c){const n=b("FullscreenExitOutlined"),t=b("FullscreenOutlined"),u=b("CloseOutlined");return y(),F("div",{class:e.getClass},[e.canFullscreen?(y(),F(ye,{key:0},[e.fullScreen?(y(),F(n,{key:0,role:"full",onClick:e.handleFullScreen},null,8,["onClick"])):(y(),F(t,{key:1,role:"close",onClick:e.handleFullScreen},null,8,["onClick"]))],64)):A("",!0),O(u,{onClick:e.handleCancel},null,8,["onClick"])],2)}ae.render=qe;var le=T({name:"BasicModalFooter",props:V,emits:["ok","cancel"],setup(e,{emit:l}){function s(){l("ok")}function i(){l("cancel")}return{handleOk:s,handleCancel:i}}});function ze(e,l,s,i,o,c){const n=b("a-button");return y(),F("div",null,[w(e.$slots,"insertFooter"),e.showCancelBtn?(y(),F(n,E({key:0},e.cancelButtonProps,{onClick:e.handleCancel}),{default:v(()=>[I(L(e.cancelText),1)]),_:1},16,["onClick"])):A("",!0),w(e.$slots,"centerFooter"),e.showOkBtn?(y(),F(n,E({key:1,type:e.okType,onClick:e.handleOk,loading:e.confirmLoading},e.okButtonProps),{default:v(()=>[I(L(e.okText),1)]),_:1},16,["type","onClick","loading"])):A("",!0),w(e.$slots,"appendFooter")])}le.render=ze;var se=T({name:"BasicModalHeader",components:{BasicTitle:We},props:{helpMessage:{type:[String,Array]},title:a.string}});function Xe(e,l,s,i,o,c){const n=b("BasicTitle");return y(),F(n,{helpMessage:e.helpMessage},{default:v(()=>[I(L(e.title),1)]),_:1},8,["helpMessage"])}se.render=Xe;function Ye(e){const l=g(!1),s=H(()=>{const o=r(e.wrapClassName)||"";return r(l)?`fullscreen-modal ${o} `:r(o)});function i(o){o&&o.stopPropagation(),l.value=!r(l)}return{getWrapClassName:s,handleFullScreen:i,fullScreenRef:l}}var q=T({name:"BasicModal",inheritAttrs:!1,components:{Modal:Ae,ModalWrapper:te,ModalClose:ae,ModalFooter:le,ModalHeader:se},props:V,emits:["visible-change","height-change","cancel","ok","register"],setup(e,{emit:l,attrs:s}){const i=g(!1),o=g(null),c=g(null),n=g(0),t={setModalProps:j,emitVisible:void 0},u=G();u&&l("register",t,u.uid);const f=H(()=>h(h({},e),r(o))),{handleFullScreen:m,getWrapClassName:p,fullScreenRef:C}=Ye({modalWrapperRef:c,extHeightRef:n,wrapClassName:Fe(f.value,"wrapClassName")}),S=H(()=>{const d=h(h({},r(f)),{visible:r(i),title:void 0});return h(h({},d),{wrapClassName:r(p)})}),M=H(()=>h(h({},s),r(S)));x(()=>{i.value=!!e.visible,C.value=!!e.defaultFullscreen}),Y(()=>r(i),d=>{var $;l("visible-change",d),u&&(($=t.emitVisible)==null||$.call(t,d,u.uid))},{immediate:!1});async function k(d){if(d==null||d.stopPropagation(),e.closeFunc&&Z(e.closeFunc)){const $=await e.closeFunc();i.value=!$;return}i.value=!1,l("cancel")}function j(d){o.value=$e(r(o)||{},d),!!Reflect.has(d,"visible")&&(i.value=!!d.visible)}function B(){l("ok")}function P(d){l("height-change",d)}function D(d){n.value=d}return{handleCancel:k,getBindValue:M,getProps:S,handleFullScreen:m,fullScreenRef:C,getMergeProps:f,handleOk:B,visibleRef:i,omit:Me,modalWrapperRef:c,handleExtHeight:D,handleHeightChange:P}}});function Ue(e,l,s,i,o,c){const n=b("ModalClose"),t=b("ModalHeader"),u=b("ModalFooter"),f=b("ModalWrapper"),m=b("Modal");return y(),F(m,E({onCancel:e.handleCancel},e.getBindValue),J({default:v(()=>[O(f,E({useWrapper:e.getProps.useWrapper,footerOffset:e.wrapperFooterOffset,fullScreen:e.fullScreenRef,ref:"modalWrapperRef",loading:e.getProps.loading,minHeight:e.getProps.minHeight,height:e.getProps.height,visible:e.visibleRef,modalFooterHeight:e.footer!==void 0&&!e.footer?0:void 0},e.omit(e.getProps.wrapperProps,"visible","height"),{onExtHeight:e.handleExtHeight,onHeightChange:e.handleHeightChange}),{default:v(()=>[w(e.$slots,"default")]),_:3},16,["useWrapper","footerOffset","fullScreen","loading","minHeight","height","visible","modalFooterHeight","onExtHeight","onHeightChange"])]),_:2},[e.$slots.closeIcon?void 0:{name:"closeIcon",fn:v(()=>[O(n,{canFullscreen:e.getProps.canFullscreen,fullScreen:e.fullScreenRef,onCancel:e.handleCancel,onFullscreen:e.handleFullScreen},null,8,["canFullscreen","fullScreen","onCancel","onFullscreen"])])},e.$slots.title?void 0:{name:"title",fn:v(()=>[O(t,{helpMessage:e.getProps.helpMessage,title:e.getMergeProps.title},null,8,["helpMessage","title"])])},e.$slots.footer?void 0:{name:"footer",fn:v(()=>[O(u,E(e.getProps,{onOk:e.handleOk,onCancel:e.handleCancel}),J({_:2},[K(Object.keys(e.$slots),p=>({name:p,fn:v(C=>[w(e.$slots,p,C)])}))]),1040,["onOk","onCancel"])])},K(Object.keys(e.omit(e.$slots,"default")),p=>({name:p,fn:v(C=>[w(e.$slots,p,C)])}))]),1040,["onCancel"])}q.render=Ue;const R=Q({}),z=Q({});function Ze(){He();const e=g(null),l=g(!1),s=g("");function i(n,t){s.value=t,U(()=>{e.value=null,l.value=!1,R[r(s)]=null}),!(r(l)&&Se()&&n===r(e))&&(e.value=n,n.emitVisible=(u,f)=>{z[f]=u})}const o=()=>{const n=r(e);return n||ee("useModal instance is undefined!"),n},c={setModalProps:n=>{var t;(t=o())==null||t.setModalProps(n)},getVisible:H(()=>z[~~r(s)]),openModal:(n=!0,t,u=!0)=>{var m;if((m=o())==null||m.setModalProps({visible:n}),!t)return;if(u){R[r(s)]=null,R[r(s)]=t;return}je(ke(R[r(s)]),t)||(R[r(s)]=t)}};return[i,c]}const Ge=e=>{const l=g(null),s=G(),i=g(""),o=()=>{const n=r(l);return n||ee("useModalInner instance is undefined!"),n},c=(n,t)=>{Oe(()=>{l.value=null}),i.value=t,l.value=n,s==null||s.emit("register",n,t)};return x(()=>{const n=R[r(i)];!n||!e||!Z(e)||N(()=>{e(n)})}),[c,{changeLoading:(n=!0)=>{var t;(t=o())==null||t.setModalProps({loading:n})},getVisible:H(()=>z[~~r(i)]),changeOkLoading:(n=!0)=>{var t;(t=o())==null||t.setModalProps({confirmLoading:n})},closeModal:()=>{var n;(n=o())==null||n.setModalProps({visible:!1})},setModalProps:n=>{var t;(t=o())==null||t.setModalProps(n)}}]};we(q);export{q as _,Ge as a,Ze as b,Le as u};
