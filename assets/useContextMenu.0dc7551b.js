var b=Object.assign;import{aG as y,d as L,r as w,a0 as D,q as $,E as O,bW as k,e as h,j as s,aO as S,D as N,aK as P,dt as V,du as W,b0 as z}from"./index.de7a3c72.js";import{D as A}from"./index.b01ba49c.js";import{M as g}from"./index.55f43c00.js";import"./index.95c10fda.js";var Y=`.context-menu {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  display: block;
  width: 156px;
  margin: 0;
  list-style: none;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 0.25rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.1), 0 1px 5px 0 rgba(0, 0, 0, 0.06);
  background-clip: padding-box;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.context-menu li {
  display: inline-block;
  width: 100%;
  height: 42px !important;
  margin: 0 !important;
  line-height: 42px !important;
}
.context-menu li span {
  line-height: 42px !important;
}
.context-menu li > div {
  margin: 0 !important;
}
.context-menu li:not(.ant-menu-item-disabled):hover {
  color: rgba(0, 0, 0, 0.85);
  background: #eee;
}
.context-menu .ant-divider {
  margin: 0 0;
}
.context-menu__popup .ant-divider {
  margin: 0 0;
}
.context-menu__popup li {
  display: inline-block;
  width: 100%;
  height: 42px !important;
  margin: 0 !important;
  line-height: 42px !important;
}
.context-menu__popup li span {
  line-height: 42px !important;
}
.context-menu__popup li > div {
  margin: 0 !important;
}
.context-menu__popup li:not(.ant-menu-item-disabled):hover {
  color: rgba(0, 0, 0, 0.85);
  background: #eee;
}
`;const H={width:y.number.def(156),customEvent:{type:Object,default:null},styles:y.style,showIcon:y.bool.def(!0),axis:{type:Object,default(){return{x:0,y:0}}},items:{type:Array,default(){return[]}}};function C(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!N(n)}const v="context-menu",M=n=>{const{item:t}=n;return s("span",{style:"display: inline-block; width: 100%;",onClick:n.handler.bind(null,t)},[n.showIcon&&t.icon&&s(P,{class:"mr-2",icon:t.icon},null),s("span",null,[t.label])])};var R=L({name:"ContextMenu",props:H,setup(n){const t=w(null),d=w(!1),l=D(()=>{const{axis:o,items:e,styles:r,width:i}=n,{x:c,y:f}=o||{x:0,y:0},x=(e||[]).length*40,p=i,_=document.body,j=_.clientWidth<c+p?c-p:c,E=_.clientHeight<f+x?f-x:f;return b(b({},r),{width:`${i}px`,left:`${j+1}px`,top:`${E+1}px`})});$(()=>{O(()=>d.value=!0)}),k(()=>{const o=h(t);o&&document.body.removeChild(o)});function m(o,e){const{handler:r,disabled:i}=o;i||(d.value=!1,e==null||e.stopPropagation(),e==null||e.preventDefault(),r==null||r())}function a(o){return o.map(e=>{const{disabled:r,label:i,children:c,divider:f=!1}=e,x=f?s(A,{key:`d-${i}`},null):null;if(!c||c.length===0){let p;return s(S,null,[s(g.Item,{disabled:r,class:`${v}__item`,key:i},C(p=s(M,{showIcon:n.showIcon,item:e,handler:m},null))?p:{default:()=>[p]}),x])}return h(d)?s(g.SubMenu,{key:i,disabled:r,popupClassName:`${v}__popup`},{title:()=>s(M,{showIcon:n.showIcon,item:e,handler:m},null),default:()=>a(c)}):null})}return()=>{let o;const{items:e}=n;return h(d)?s(g,{inlineIndent:12,mode:"vertical",class:v,ref:t,style:h(l)},C(o=a(e))?o:{default:()=>[o]}):null}}});const u={domList:[],resolve:()=>{}},T=function(n){const{event:t}=n||{};if(t&&(t==null||t.preventDefault()),!!V)return new Promise(d=>{const l=document.body,m=document.createElement("div"),a={};n.styles&&(a.styles=n.styles),n.items&&(a.items=n.items),n.event&&(a.customEvent=t,a.axis={x:t.clientX,y:t.clientY});const o=s(R,a);W(o,m);const e=function(){u.resolve("")};u.domList.push(m);const r=function(){u.domList.forEach(i=>{try{i&&l.removeChild(i)}catch(c){}}),l.removeEventListener("click",e),l.removeEventListener("scroll",e)};u.resolve=function(...i){r(),d(i[0])},r(),l.appendChild(m),l.addEventListener("click",e),l.addEventListener("scroll",e)})},I=function(){u&&(u.resolve(""),u.domList=[])};function q(n=!0){return z()&&n&&k(()=>{I()}),[T,I]}export{q as u};
