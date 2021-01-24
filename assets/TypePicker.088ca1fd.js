import{d,b2 as s,aN as f,cp as b,cq as c,h as m,o as t,i,aO as u,aP as v,j as a,bw as l}from"./index.de7a3c72.js";import"./index.95c10fda.js";var r=d({name:"MenuTypePicker",components:{Tooltip:s},props:{menuTypeList:{type:Array,defualt:[]},handler:{type:Function,default:()=>{}},def:{type:String}},setup(){const{prefixCls:e}=f("setting-menu-type-picker");return{prefixCls:e}}}),I=`.vben-setting-menu-type-picker[data-v-8f0b3658] {
  display: flex;
}
.vben-setting-menu-type-picker__item[data-v-8f0b3658] {
  position: relative;
  width: 56px;
  height: 48px;
  margin-right: 16px;
  overflow: hidden;
  cursor: pointer;
  background-color: #f0f2f5;
  border-radius: 4px;
  box-shadow: 0 1px 2.5px 0 rgba(0, 0, 0, 0.18);
}
.vben-setting-menu-type-picker__item[data-v-8f0b3658]::before,
.vben-setting-menu-type-picker__item[data-v-8f0b3658]::after {
  position: absolute;
  content: '';
}
.vben-setting-menu-type-picker__item--sidebar[data-v-8f0b3658]::before {
  top: 0;
  left: 0;
  z-index: 1;
  width: 33%;
  height: 100%;
  background-color: #273352;
  border-radius: 4px 0 0 4px;
}
.vben-setting-menu-type-picker__item--sidebar[data-v-8f0b3658]::after {
  top: 0;
  left: 0;
  width: 100%;
  height: 25%;
  background-color: #fff;
}
.vben-setting-menu-type-picker__item--mix[data-v-8f0b3658]::before {
  top: 0;
  left: 0;
  width: 33%;
  height: 100%;
  background-color: #fff;
  border-radius: 4px 0 0 4px;
}
.vben-setting-menu-type-picker__item--mix[data-v-8f0b3658]::after {
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 25%;
  background-color: #273352;
}
.vben-setting-menu-type-picker__item--top-menu[data-v-8f0b3658]::after {
  top: 0;
  left: 0;
  width: 100%;
  height: 25%;
  background-color: #273352;
}
.vben-setting-menu-type-picker__item--mix-sidebar[data-v-8f0b3658]::before {
  top: 0;
  left: 0;
  z-index: 1;
  width: 25%;
  height: 100%;
  background-color: #273352;
  border-radius: 4px 0 0 4px;
}
.vben-setting-menu-type-picker__item--mix-sidebar[data-v-8f0b3658]::after {
  top: 0;
  left: 0;
  width: 100%;
  height: 25%;
  background-color: #fff;
}
.vben-setting-menu-type-picker__item--mix-sidebar .mix-sidebar[data-v-8f0b3658] {
  position: absolute;
  left: 25%;
  width: 15%;
  height: 100%;
  background-color: #fff;
}
.vben-setting-menu-type-picker__item[data-v-8f0b3658]:hover,
.vben-setting-menu-type-picker__item--active[data-v-8f0b3658] {
  padding: 12px;
  border: 2px solid #018ffb;
}
.vben-setting-menu-type-picker__item[data-v-8f0b3658]:hover::before,
.vben-setting-menu-type-picker__item--active[data-v-8f0b3658]::before,
.vben-setting-menu-type-picker__item[data-v-8f0b3658]:hover::after,
.vben-setting-menu-type-picker__item--active[data-v-8f0b3658]::after {
  border-radius: 0;
}
.vben-setting-menu-type-picker img[data-v-8f0b3658] {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
`;const o=l("data-v-8f0b3658");b("data-v-8f0b3658");const _=a("div",{class:"mix-sidebar"},null,-1);c();const g=o((e,h,k,y,x,w)=>{const p=m("Tooltip");return t(),i("div",{class:e.prefixCls},[(t(!0),i(u,null,v(e.menuTypeList||[],n=>(t(),i(p,{key:n.title,title:n.title,placement:"bottom"},{default:o(()=>[a("div",{onClick:C=>e.handler(n),class:[`${e.prefixCls}__item`,`${e.prefixCls}__item--${n.type}`,{[`${e.prefixCls}__item--active`]:e.def===n.type}]},[_],10,["onClick"])]),_:2},1032,["title"]))),128))],2)});r.render=g,r.__scopeId="data-v-8f0b3658";export default r;
