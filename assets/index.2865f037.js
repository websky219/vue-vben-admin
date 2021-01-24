import{d as u,cf as h,r as i,q as _,a0 as v,E as w,e as c,h as S,o as y,i as b,j as l,bw as x}from"./index.de7a3c72.js";import{g as $}from"./domUtils.aa6aef94.js";import{u as j}from"./useWindowSizeFn.5bd3f00e.js";import"./_stringToArray.9f34c09e.js";var p=u({name:"IFrame",components:{Spin:h},props:{frameSrc:{type:String}},setup(){const e=i(!1),f=i(50),o=i(window.innerHeight),t=i(null);function r(){const n=c(t);if(!n)return;let{top:a}=$(n);a+=20,f.value=a,o.value=window.innerHeight-a;const m=document.documentElement.clientHeight-a;n.style.height=`${m}px`}j(r,150,{immediate:!0});function s(){e.value=!1,r()}function d(){w(()=>{const n=c(t);!n||(n.attachEvent?n.attachEvent("onload",()=>{s()}):n.onload=()=>{s()})})}return _(()=>{e.value=!0,d()}),{getWrapStyle:v(()=>({height:`${c(o)}px`})),loading:e,frameRef:t}}}),E=`.iframe-page .ant-spin-nested-loading[data-v-50ce1274] {
  position: relative;
  height: 100%;
}
.iframe-page .ant-spin-nested-loading .ant-spin-container[data-v-50ce1274] {
  width: 100%;
  height: 100%;
  padding: 10px;
}
.iframe-page__mask[data-v-50ce1274] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.iframe-page__main[data-v-50ce1274] {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #fff;
  border: 0;
  box-sizing: border-box;
}
`;const g=x("data-v-50ce1274"),k=g((e,f,o,t,r,s)=>{const d=S("Spin");return y(),b("div",{class:"iframe-page",style:e.getWrapStyle},[l(d,{spinning:e.loading,size:"large",style:e.getWrapStyle},{default:g(()=>[l("iframe",{src:e.frameSrc,class:"iframe-page__main",ref:"frameRef"},null,8,["src"])]),_:1},8,["spinning","style"])],4)});p.render=k,p.__scopeId="data-v-50ce1274";export default p;
