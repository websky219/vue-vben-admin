import{d as v,aL as w,aM as b,aK as C,aG as D,aN as x,u as y,a0 as k,f as c,bg as I,h as a,o as m,i as h,w as s,j as n,k as j,l as M}from"./index.de7a3c72.js";import{D as $,M as f}from"./index.55f43c00.js";import"./index.95c10fda.js";import"./index.967c47da.js";import{D as O}from"./siteSetting.2daee9f0.js";import{d as S}from"./useHeaderSetting.0d239ac1.js";import{h as L}from"./header.9f640cf1.js";import"./RightOutlined.dcad5eff.js";import"./EllipsisOutlined.ba16b190.js";import"./types.ead79a33.js";import"./isEqual.42834150.js";import"./toInteger.e48028d2.js";var g=v({name:"UserDropdown",components:{Dropdown:$,Menu:f,MenuItem:w(()=>b(()=>import("./DropMenuItem.264da34e.js"),["/assets/DropMenuItem.264da34e.js","/assets/index.de7a3c72.js","/assets/index.3100f8d1.css","/assets/index.55f43c00.js","/assets/index.45c1fb22.css","/assets/RightOutlined.dcad5eff.js","/assets/EllipsisOutlined.ba16b190.js","/assets/types.ead79a33.js","/assets/isEqual.42834150.js","/assets/toInteger.e48028d2.js","/assets/index.95c10fda.js","/assets/index.20066e29.css"])),MenuDivider:f.Divider,Icon:C},props:{theme:D.oneOf(["dark","light"])},setup(){const{prefixCls:e}=x("header-user-dropdown"),{t}=y(),{getShowDoc:i}=S(),p=k(()=>{const{realName:o="",desc:d}=c.getUserInfoState||{};return{realName:o,desc:d}});function l(){c.confirmLoginOut()}function u(){I(O)}function r(o){switch(o.key){case"loginOut":l();break;case"doc":u();break}}return{prefixCls:e,t,getUserInfo:p,handleMenuClick:r,getShowDoc:i,headerImg:L}}}),K=`.vben-header-user-dropdown {
  display: flex;
  height: 48px;
  min-width: 100px;
  padding: 0 0 0 10px;
  padding-right: 10px;
  overflow: hidden;
  font-size: 12px;
  cursor: pointer;
  align-items: center;
}
.vben-header-user-dropdown:hover {
  background: #f6f6f6;
}
.vben-header-user-dropdown img {
  width: 26px;
  height: 26px;
  margin-right: 12px;
}
.vben-header-user-dropdown__header {
  border-radius: 50%;
}
.vben-header-user-dropdown__name {
  font-size: 14px;
}
.vben-header-user-dropdown--dark:hover {
  background: var(--header-bg-hover-color);
}
.vben-header-user-dropdown--light .vben-header-user-dropdown__name {
  color: rgba(0, 0, 0, 0.85);
}
.vben-header-user-dropdown--light .vben-header-user-dropdown__desc {
  color: #7c8087;
}
.vben-header-user-dropdown-dropdown-overlay .ant-dropdown-menu-item {
  min-width: 160px;
}
`;function N(e,t,i,p,l,u){const r=a("MenuItem"),o=a("MenuDivider"),d=a("Menu"),_=a("Dropdown");return m(),h(_,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:s(()=>[n(d,{onClick:e.handleMenuClick},{default:s(()=>[e.getShowDoc?(m(),h(r,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"gg:loadbar-doc"},null,8,["text"])):j("",!0),n(o),n(r,{key:"loginOut",text:e.t("layout.header.dropdownItemLoginOut"),icon:"carbon:power"},null,8,["text"])]),_:1},8,["onClick"])]),default:s(()=>[n("span",{class:[e.prefixCls,`${e.prefixCls}--${e.theme}`]},[n("img",{class:`${e.prefixCls}__header`,src:e.headerImg},null,10,["src"]),n("span",{class:`${e.prefixCls}__info`},[n("span",{class:`${e.prefixCls}__name anticon`},M(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"])}g.render=N;export default g;
