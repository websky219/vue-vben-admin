import{j as O,T as P,U as $,d as I,aK as R,aG as S,r as w,aT as V,aN as x,dF as L,a_ as M,bh as D,bR as A,aV as N,t as T,aC as g,bI as z,aD as G,h as v,o as b,i as f,w as j,k as q,l as B,m as F}from"./index.de7a3c72.js";import{B as C}from"./index.492a2c9c.js";import"./index.55f43c00.js";import"./index.95c10fda.js";import"./DownOutlined.2e949c36.js";import"./RightOutlined.dcad5eff.js";import"./EllipsisOutlined.ba16b190.js";import"./types.ead79a33.js";import"./isEqual.42834150.js";import"./toInteger.e48028d2.js";var U={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]},name:"home",theme:"outlined"};function J(t){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?Object(arguments[r]):{},s=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(s=s.concat(Object.getOwnPropertySymbols(i).filter(function(l){return Object.getOwnPropertyDescriptor(i,l).enumerable}))),s.forEach(function(l){Q(t,l,i[l])})}return t}function Q(t,r,i){return r in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i,t}var y=function(r,i){var s=J({},r,i.attrs);return O($,P(s,{icon:U}),null)};y.displayName="HomeOutlined",y.inheritAttrs=!1;var E=I({name:"LayoutBreadcrumb",components:{HomeOutlined:y,Icon:R,[C.name]:C},props:{theme:S.oneOf(["dark","light"])},setup(){const t=w([]),{currentRoute:r}=V(),{prefixCls:i}=x("layout-breadcrumb"),{getShowBreadCrumbIcon:s}=D(),{t:l}=L();M(()=>{var a,o;if(r.value.name===N)return;const c=(a=r.value)==null?void 0:a.matched;if(!c||c.length===0)return;let n=k(T(c));const e=n.filter(u=>u.path!==g.BASE_HOME);e.length===n.length&&e.unshift({path:g.BASE_HOME,meta:{title:l("layout.header.home"),isLink:!0}}),((o=r.value.meta)==null?void 0:o.currentActiveMenu)&&e.push(r.value),t.value=e});function k(c){let n=z(c,e=>{const{meta:a}=e;if(!a)return!1;const{title:o,hideBreadcrumb:u,hideMenu:d}=a;return!(!o||u||d)}).filter(e=>{var a,o;return!((a=e.meta)==null?void 0:a.hideBreadcrumb)||!((o=e.meta)==null?void 0:o.hideMenu)});return n=n.filter(e=>e.path!==g.BASE_HOME),n}function p(c,n,e){e==null||e.preventDefault();const{children:a,redirect:o,meta:u}=c;if((a==null?void 0:a.length)&&!o){e==null||e.stopPropagation();return}if(u==null?void 0:u.carryParam)return;const d=G();if(o&&A(o))d(o);else{const _=n.slice(1),H=_.pop()||"";let m=`${_.pop()||""}/${H}`;m=/^\//.test(m)?m:`/${m}`,d(m)}}function h(c,n){var e;return((e=n==null?void 0:n.meta)==null?void 0:e.isLink)?!0:c.indexOf(n)!==c.length-1}return{routes:t,t:l,prefixCls:i,getShowBreadCrumbIcon:s,handleClick:p,hasRedirect:h}}}),se=`.vben-layout-breadcrumb {
  display: flex;
  padding: 0 8px;
  align-items: center;
}
.vben-layout-breadcrumb .ant-breadcrumb-link .anticon {
  margin-right: 4px;
  margin-bottom: 2px;
}
.vben-layout-breadcrumb--light .ant-breadcrumb-link {
  color: #999;
}
.vben-layout-breadcrumb--light .ant-breadcrumb-link a {
  color: rgba(0, 0, 0, 0.65);
}
.vben-layout-breadcrumb--light .ant-breadcrumb-link a:hover {
  color: #018ffb;
}
.vben-layout-breadcrumb--light .ant-breadcrumb-separator {
  color: #999;
}
.vben-layout-breadcrumb--dark .ant-breadcrumb-link {
  color: rgba(255, 255, 255, 0.6);
}
.vben-layout-breadcrumb--dark .ant-breadcrumb-link a {
  color: rgba(255, 255, 255, 0.8);
}
.vben-layout-breadcrumb--dark .ant-breadcrumb-link a:hover {
  color: #fff;
}
.vben-layout-breadcrumb--dark .ant-breadcrumb-separator,
.vben-layout-breadcrumb--dark .anticon {
  color: rgba(255, 255, 255, 0.8);
}
`;const W={key:1};function X(t,r,i,s,l,k){const p=v("Icon"),h=v("router-link"),c=v("a-breadcrumb");return b(),f("div",{class:[t.prefixCls,`${t.prefixCls}--${t.theme}`]},[O(c,{routes:t.routes},{itemRender:j(({route:n,routes:e,paths:a})=>[t.getShowBreadCrumbIcon&&n.meta.icon?(b(),f(p,{key:0,icon:n.meta.icon},null,8,["icon"])):q("",!0),t.hasRedirect(e,n)?(b(),f(h,{key:2,to:"",onClick:o=>t.handleClick(n,a,o)},{default:j(()=>[F(B(t.t(n.meta.title)),1)]),_:2},1032,["onClick"])):(b(),f("span",W,B(t.t(n.meta.title)),1))]),_:1},8,["routes"])],2)}E.render=X;export default E;
