import{b_ as v,r as a,cF as u,e as x,d as p,q as O,o as f,i as m,b1 as h,bX as g,h as _,j as k,l as $,bw as b}from"./index.de7a3c72.js";import{_ as w}from"./index.46623d23.js";import"./index.492a2c9c.js";import"./index.55f43c00.js";import"./RightOutlined.dcad5eff.js";import"./EllipsisOutlined.ba16b190.js";import"./types.ead79a33.js";import"./isEqual.42834150.js";import"./toInteger.e48028d2.js";import"./DownOutlined.2e949c36.js";import"./index.95c10fda.js";import"./index.22fd658f.js";import"./usePageContext.05da5891.js";import"./transButton.da8a2266.js";import"./ArrowLeftOutlined.ddcf4a87.js";function y(e,t,n="click"){if(v)return;const s=a(!1);u({el:document,name:"touchend",listener:o,options:!0}),u({el:document,name:n,listener:o,options:!0});function o(i){if(i.type==="touchend"&&(s.value=!0),i.type==="click"&&x(s))return;const r=e.value;r&&i.target&&!r.contains(i.target)&&t(i)}}var d=p({name:"ClickOutSide",emits:["mounted","clickOutside"],setup(e,{emit:t}){const n=a(null);return y(n,()=>{t("clickOutside")}),O(()=>{t("mounted")}),{wrap:n}}});const S={ref:"wrap"};function I(e,t,n,s,o,i){return f(),m("div",S,[h(e.$slots,"default")],512)}d.render=I,g(d);var c=p({components:{ClickOutSide:d,PageWrapper:w},setup(){const e=a("Click");function t(){e.value="Click Out Side"}function n(){e.value="Click Inner"}return{innerClick:n,handleClickOutside:t,text:e}}}),G=`.demo-box[data-v-7a637453] {
  display: flex;
  width: 100%;
  height: 300px;
  font-size: 24px;
  color: #fff;
  background: #408ede;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
}
`;const l=b("data-v-7a637453"),P=l((e,t,n,s,o,i)=>{const r=_("ClickOutSide"),C=_("PageWrapper");return f(),m(C,{title:"\u70B9\u5185\u5916\u90E8\u89E6\u53D1\u4E8B\u4EF6"},{default:l(()=>[k(r,{onClickOutside:e.handleClickOutside,class:"flex justify-center"},{default:l(()=>[k("div",{onClick:t[1]||(t[1]=(...j)=>e.innerClick&&e.innerClick(...j)),class:"demo-box"},$(e.text),1)]),_:1},8,["onClickOutside"])]),_:1})});c.render=P,c.__scopeId="data-v-7a637453";export default c;
