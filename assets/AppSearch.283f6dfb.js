import{r as C,cl as ne,cm as ae,q as te,s as oe,aX as G,e as f,bR as se,cn as V,bS as N,u as I,bu as re,b6 as ie,a2 as de,co as le,bI as pe,E as ce,aD as ue,d as D,aN as E,h as v,o as S,i as $,j as t,l as x,bw as R,a0 as W,bA as fe,b3 as q,H as O,b9 as X,aO as he,aP as me,k as F,b5 as be,bN as ve,b2 as ge,m as _e}from"./index.de7a3c72.js";import"./index.95c10fda.js";import{I as J}from"./index.2e0fefa1.js";import{b as xe,u as we,d as ye}from"./useHeaderSetting.0d239ac1.js";import{u as Ce}from"./useScrollTo.3c6228cf.js";import{C as Se}from"./clickOutside.5a8b0ef7.js";import{S as Q}from"./SearchOutlined.5cd4b61b.js";import"./EyeOutlined.e4d8b81b.js";import"./animation.29409132.js";import"./domUtils.aa6aef94.js";import"./_stringToArray.9f34c09e.js";function $e(){const e=C([]);return ne(()=>{e.value=[]}),[e,s=>a=>{e.value[s]=a}]}const ke=["keydown"],Ae={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},Me={esc:"Escape",tab:"Tab",enter:"Enter",space:" ",up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete"]},Ie={ctrl:e=>e.ctrlKey,shift:e=>e.shiftKey,alt:e=>e.altKey,meta:e=>e.metaKey};function Y(e,n){if(!e.key)return!1;if(V(n))return e.keyCode===n;const s=n.split(".");let a=0;for(const l of s){const o=Ie[l],r=Me[l],d=Ae[l];(o&&o(e)||(r&&N(r)?r.includes(e.key):r===e.key)||(d&&N(d)?d.includes(e.keyCode):d===e.keyCode)||e.key.toUpperCase()===l.toUpperCase())&&a++}return a===s.length}function Te(e){return G(e)?e:se(e)||V(e)?n=>Y(n,e):N(e)?n=>e.some(s=>Y(n,s)):e?()=>!0:()=>!1}function je(e,n=ae,s={}){const{events:a=ke,target:l}=s;let o;function r(d){if(Te(e)(d))return n(d)}te(()=>{if(o=Ne(l,window),!!o)for(const d of a)o.addEventListener(d,r)}),oe(()=>{if(!!o)for(const d of a)o.removeEventListener(d,r)})}function Ne(e,n){if(!e)return n;let s;return G(e)?s=e():s=f(e),s}var Z;(function(e){e[e.UP=38]="UP",e[e.DOWN=40]="DOWN",e[e.ENTER=13]="ENTER",e[e.ESC=27]="ESC"})(Z||(Z={}));function De(e){return["$","(",")","*","+",".","[","]","?","\\","^","{","}","|"].includes(e)?`\\${e}`:e}function Ee(e){const n=[...e].map(a=>De(a)),s=["",...n,""].join(".*");return new RegExp(s)}function Re(e,n,s){const a=C([]),l=C(""),o=C(-1);let r=[];const{t:d}=I(),h=ue(),[m]=re(k,200);ie(async()=>{const i=await xe();r=de(i),le(r,p=>{p.name=d(p.name)})});function k(i){i==null||i.stopPropagation();const p=i.target.value;if(l.value=p.trim(),!p){a.value=[];return}const c=Ee(f(l)),b=pe(r,w=>c.test(w.name));a.value=u(b,c),o.value=0}function u(i,p,c){const b=[];return i.forEach(w=>{const{name:A,path:j,icon:ee,children:y}=w;p.test(A)&&!(y==null?void 0:y.length)&&b.push({name:(c==null?void 0:c.name)?`${c.name} > ${A}`:A,path:j,icon:ee}),Array.isArray(y)&&y.length&&b.push(...u(y,p,w))}),b}function g(i){const p=i.target.dataset.index;o.value=Number(p)}function _(){!a.value.length||(o.value--,o.value<0&&(o.value=a.value.length-1),M())}function T(){!a.value.length||(o.value++,o.value>a.value.length-1&&(o.value=0),M())}function M(){const i=f(e);if(!i||!Array.isArray(i)||i.length===0||!f(n))return;const p=f(o),c=i[p];if(!c)return;const b=f(n);if(!b)return;const w=c.offsetTop+c.offsetHeight,A=b.offsetHeight,{start:j}=Ce({el:b,duration:100,to:w-A});j()}async function K(){if(!a.value.length)return;const i=f(a),p=f(o);if(i.length===0||p<0)return;const c=i[p];P(),await ce(),h(c.path)}function P(){a.value=[],s("close")}return je(["enter","up","down","esc"],i=>{switch(i.keyCode){case 38:_();break;case 40:T();break;case 13:K();break;case 27:P();break}}),{handleSearch:m,searchResult:a,keyword:l,activeIndex:o,handleMouseenter:g,handleEnter:K}}var U=D({name:"AppSearchFooter",components:{},setup(){const{prefixCls:e}=E("app-search-footer"),{t:n}=I();return{prefixCls:e,t:n}}}),Qe=`.vben-app-search-footer[data-v-8d332632] {
  position: relative;
  display: flex;
  height: 44px;
  padding: 0 16px;
  font-size: 12px;
  color: #666;
  background: #ffffff;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 -1px 0 0 #e0e3e8, 0 -3px 6px 0 rgba(69, 98, 155, 0.12);
  align-items: center;
  flex-shrink: 0;
}
.vben-app-search-footer__item[data-v-8d332632] {
  display: flex;
  width: 20px;
  height: 18px;
  padding-bottom: 2px;
  margin-right: 0.4em;
  background: linear-gradient(-225deg, #d5dbe4, #f8f8f8);
  border-radius: 2px;
  box-shadow: inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff, 0 1px 2px 1px rgba(30, 35, 90, 0.4);
  align-items: center;
  justify-content: center;
}
.vben-app-search-footer__item[data-v-8d332632]:nth-child(2),
.vben-app-search-footer__item[data-v-8d332632]:nth-child(3),
.vben-app-search-footer__item[data-v-8d332632]:nth-child(6) {
  margin-left: 14px;
}
`;const Oe=R("data-v-8d332632"),Ue=Oe((e,n,s,a,l,o)=>{const r=v("g-icon");return S(),$("div",{class:`${e.prefixCls}`},[t("span",{class:`${e.prefixCls}__item`},[t(r,{icon:"ant-design:enter-outlined"})],2),t("span",null,x(e.t("component.app.toSearch")),1),t("span",{class:`${e.prefixCls}__item`},[t(r,{icon:"bi:arrow-up"})],2),t("span",{class:`${e.prefixCls}__item`},[t(r,{icon:"bi:arrow-down"})],2),t("span",null,x(e.t("component.app.toNavigate")),1),t("span",{class:`${e.prefixCls}__item`},[t(r,{icon:"mdi:keyboard-esc"})],2),t("span",null,x(e.t("common.closeText")),1)],2)});U.render=Ue,U.__scopeId="data-v-8d332632";var z=D({name:"AppSearchModal",components:{SearchOutlined:Q,AppSearchFooter:U,[J.name]:J},emits:["close"],props:{visible:Boolean},directives:{clickOutside:Se},setup(e,{emit:n}){const s=C(null),{prefixCls:a}=E("app-search-modal"),{t:l}=I(),[o,r]=$e(),{getIsMobile:d}=we(),{handleSearch:h,searchResult:m,keyword:k,activeIndex:u,handleEnter:g,handleMouseenter:_}=Re(o,s,n),T=W(()=>!k||f(m).length===0),M=W(()=>[a,{[`${a}--mobile`]:f(d)}]);return{t:l,prefixCls:a,getClass:M,handleSearch:h,searchResult:m,activeIndex:u,getIsNotData:T,handleEnter:g,setRefs:r,scrollWrap:s,handleMouseenter:_,handleClose:()=>{m.value=[],n("close")}}}}),Ye=`.vben-app-search-modal[data-v-4d302d6b] {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 800;
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  background: rgba(0, 0, 0, 0.25);
  justify-content: center;
}
.vben-app-search-modal--mobile[data-v-4d302d6b] {
  padding: 0;
}
.vben-app-search-modal--mobile > div[data-v-4d302d6b] {
  width: 100%;
}
.vben-app-search-modal--mobile .vben-app-search-modal-input[data-v-4d302d6b] {
  width: calc(100% - 38px);
}
.vben-app-search-modal--mobile .vben-app-search-modal-cancel[data-v-4d302d6b] {
  display: inline-block;
}
.vben-app-search-modal--mobile .vben-app-search-modal-content[data-v-4d302d6b] {
  width: 100%;
  height: 100%;
  border-radius: 0;
}
.vben-app-search-modal--mobile .vben-app-search-footer[data-v-4d302d6b] {
  display: none;
}
.vben-app-search-modal--mobile .vben-app-search-modal-list[data-v-4d302d6b] {
  height: calc(100% - 80px);
  max-height: unset;
}
.vben-app-search-modal--mobile .vben-app-search-modal-list__item-enter[data-v-4d302d6b] {
  opacity: 0 !important;
}
.vben-app-search-modal-content[data-v-4d302d6b] {
  position: relative;
  width: 632px;
  margin: 0 auto auto auto;
  background: #f5f6f7;
  border-radius: 16px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  flex-direction: column;
}
.vben-app-search-modal-input__wrapper[data-v-4d302d6b] {
  display: flex;
  padding: 14px 14px 0 14px;
  justify-content: space-between;
  align-items: center;
}
.vben-app-search-modal-input[data-v-4d302d6b] {
  width: 100%;
  height: 48px;
  font-size: 1.5em;
  color: #1c1e21;
  border-radius: 6px;
}
.vben-app-search-modal-input span[role='img'][data-v-4d302d6b] {
  color: #999;
}
.vben-app-search-modal-cancel[data-v-4d302d6b] {
  display: none;
  font-size: 1em;
  color: #666;
}
.vben-app-search-modal-not-data[data-v-4d302d6b] {
  display: flex;
  width: 100%;
  height: 100px;
  font-size: 0.9;
  color: #969faf;
  align-items: center;
  justify-content: center;
}
.vben-app-search-modal-list[data-v-4d302d6b] {
  max-height: 472px;
  padding: 0 14px;
  padding-bottom: 20px;
  margin: 0 auto;
  margin-top: 14px;
  overflow: auto;
}
.vben-app-search-modal-list__item[data-v-4d302d6b] {
  position: relative;
  display: flex;
  width: 100%;
  height: 56px;
  padding-bottom: 4px;
  padding-left: 14px;
  margin-top: 8px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 #d4d9e1;
  align-items: center;
}
.vben-app-search-modal-list__item--active[data-v-4d302d6b] {
  color: #fff;
  background: #018ffb;
}
.vben-app-search-modal-list__item--active .vben-app-search-modal-list__item-enter[data-v-4d302d6b] {
  opacity: 1;
}
.vben-app-search-modal-list__item-icon[data-v-4d302d6b] {
  width: 30px;
}
.vben-app-search-modal-list__item-text[data-v-4d302d6b] {
  flex: 1;
}
.vben-app-search-modal-list__item-enter[data-v-4d302d6b] {
  width: 30px;
  opacity: 0;
}
`;const L=R("data-v-4d302d6b"),ze=L((e,n,s,a,l,o)=>{const r=v("SearchOutlined"),d=v("a-input"),h=v("g-icon"),m=v("AppSearchFooter"),k=fe("click-outside");return S(),$(ve,{to:"body"},[t(be,{name:"zoom-fade",mode:"out-in"},{default:L(()=>[e.visible?(S(),$("div",{key:0,class:e.getClass,onClick:n[4]||(n[4]=q(()=>{},["stop"]))},[O(t("div",{class:`${e.prefixCls}-content`},[t("div",{class:`${e.prefixCls}-input__wrapper`},[t(d,{class:`${e.prefixCls}-input`,placeholder:e.t("common.searchText"),"allow-clear":"",onChange:e.handleSearch},{prefix:L(()=>[t(r)]),_:1},8,["class","placeholder","onChange"]),t("span",{class:`${e.prefixCls}-cancel`,onClick:n[1]||(n[1]=(...u)=>e.handleClose&&e.handleClose(...u))},x(e.t("common.cancelText")),3)],2),O(t("div",{class:`${e.prefixCls}-not-data`},x(e.t("component.app.searchNotData")),3),[[X,e.getIsNotData]]),O(t("ul",{class:`${e.prefixCls}-list`,ref:"scrollWrap"},[(S(!0),$(he,null,me(e.searchResult,(u,g)=>(S(),$("li",{ref:e.setRefs(g),key:u.path,"data-index":g,onMouseenter:n[2]||(n[2]=(..._)=>e.handleMouseenter&&e.handleMouseenter(..._)),onClick:n[3]||(n[3]=(..._)=>e.handleEnter&&e.handleEnter(..._)),class:[`${e.prefixCls}-list__item`,{[`${e.prefixCls}-list__item--active`]:e.activeIndex===g}]},[t("div",{class:`${e.prefixCls}-list__item-icon`},[t(h,{icon:u.icon||"mdi:form-select",size:20},null,8,["icon"])],2),t("div",{class:`${e.prefixCls}-list__item-text`},x(u.name),3),t("div",{class:`${e.prefixCls}-list__item-enter`},[t(h,{icon:"ant-design:enter-outlined",size:20})],2)],42,["data-index"]))),128))],2),[[X,!e.getIsNotData]]),t(m)],2),[[k,e.handleClose]])],2)):F("",!0)]),_:1})])});z.render=ze,z.__scopeId="data-v-4d302d6b";var B=D({name:"AppSearch",components:{AppSearchModal:z,Tooltip:ge,SearchOutlined:Q},setup(){const e=C(!1),{prefixCls:n}=E("app-search"),{getShowSearch:s}=ye(),{t:a}=I();function l(){e.value=!0}return{t:a,prefixCls:n,showModal:e,getShowSearch:s,handleClose:()=>{e.value=!1},handleSearch:l}}}),Ze=`.vben-app-search[data-v-43b34150] {
  padding: 2px;
}
`;const H=R("data-v-43b34150"),Le=H((e,n,s,a,l,o)=>{const r=v("SearchOutlined"),d=v("Tooltip"),h=v("AppSearchModal");return e.getShowSearch?(S(),$("div",{key:0,class:e.prefixCls,onClick:n[1]||(n[1]=q((...m)=>e.handleSearch&&e.handleSearch(...m),["stop"]))},[t(d,null,{title:H(()=>[_e(x(e.t("common.searchText")),1)]),default:H(()=>[t(r)]),_:1}),t(h,{onClose:e.handleClose,visible:e.showModal},null,8,["onClose","visible"])],2)):F("",!0)});B.render=Le,B.__scopeId="data-v-43b34150";export default B;
