import{j as i,D as V,I as K,z as Q,J as W,dq as X,dr as Y,aO as Z,P as p,d as B,n as F,v as nn,x as en,r as tn,q as on,s as rn,c2 as an,B as ln,R as sn}from"./index.de7a3c72.js";import{r as M,a as U}from"./responsiveObserve.c545f1cc.js";function q(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!V(e)}function A(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function E(e){return e!=null}var R=function(n){var t=n.itemPrefixCls,o=n.component,l=n.span,s=n.bordered,r=n.label,c=n.content,d=n.colon,u=o;if(s){var a;return i(u,{class:[(a={},A(a,"".concat(t,"-item-label"),E(r)),A(a,"".concat(t,"-item-content"),E(c)),a)],colSpan:l},{default:function(){return[E(r)?r:c]}})}return i(u,{class:["".concat(t,"-item")],colSpan:l},{default:function(){return[r&&i("span",{class:["".concat(t,"-item-label"),A({},"".concat(t,"-item-no-colon"),!d)]},q(r)?r:{default:function(){return[r]}}),c&&i("span",{class:"".concat(t,"-item-content")},q(c)?c:{default:function(){return[c]}})]}})},cn=function(n){var t=function(u,a,b){var w=a.colon,k=a.prefixCls,C=a.bordered,v=b.component,N=b.type,$=b.showLabel,L=b.showContent;return u.map(function(m,O){var S=K(m),y=S.prefixCls,P=y===void 0?k:y,x=S.span,f=x===void 0?1:x,j=Q(m,"label"),I=W(m),z=X(m),g=Y(m),_=m.key;return typeof v=="string"?i(R,{key:"".concat(N,"-").concat(_||O),class:z,style:g,span:f,colon:w,component:v,itemPrefixCls:P,bordered:C,label:$?j:null,content:L?I:null},null):[i(R,{key:"label-".concat(_||O),class:z,style:g,span:1,colon:w,component:v[0],itemPrefixCls:P,bordered:C,label:j},null),i(R,{key:"content-".concat(_||O),class:z,style:g,span:f*2-1,component:v[1],itemPrefixCls:P,bordered:C,content:I},null)]})},o=n.prefixCls,l=n.vertical,s=n.row,r=n.index,c=n.bordered;return l?i(Z,null,[i("tr",{key:"label-".concat(r),class:"".concat(o,"-row")},[t(s,n,{component:"th",type:"label",showLabel:!0})]),i("tr",{key:"content-".concat(r),class:"".concat(o,"-row")},[t(s,n,{component:"td",type:"content",showContent:!0})])]):i("tr",{key:r,class:"".concat(o,"-row")},[t(s,n,{component:c?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0})])};function T(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function D(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?D=function(t){return typeof t}:D=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(e)}function J(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!V(e)}p.string,p.any,p.number;var dn=B({name:"ADescriptionsItem",props:{prefixCls:p.string,label:p.VNodeChild,span:p.number.def(1)},render:function(){return null}}),G={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function pn(e,n){if(typeof e=="number")return e;if(D(e)==="object")for(var t=0;t<U.length;t++){var o=U[t];if(n[o]&&e[o]!==void 0)return e[o]||G[o]}return 3}function H(e,n,t){var o=e;return(n===void 0||n>t)&&(o=ln(e,{span:t}),sn(n===void 0,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),o}function un(e,n){var t=an(e),o=[],l=[],s=n;return t.forEach(function(r,c){var d,u=(d=r.props)===null||d===void 0?void 0:d.span,a=u||1;if(c===t.length-1){l.push(H(r,u,s)),o.push(l);return}a<s?(s-=a,l.push(r)):(l.push(H(r,a,s)),o.push(l),s=n,l=[])}),o}var fn={prefixCls:p.string,bordered:p.looseBool,size:p.oneOf(F("default","middle","small")).def("default"),title:p.VNodeChild,extra:p.VNodeChild,column:{type:[Number,Object],default:function(){return G}},layout:p.oneOf(F("horizontal","vertical")),colon:p.looseBool},h=B({name:"ADescriptions",Item:dn,setup:function(n,t){var o=t.slots,l=nn("configProvider",en),s=l.getPrefixCls,r,c=tn({});return on(function(){r=M.subscribe(function(d){D(n.column)==="object"&&(c.value=d)})}),rn(function(){M.unsubscribe(r)}),function(){var d,u,a,b,w=n.prefixCls,k=n.column,C=n.size,v=n.bordered,N=v===void 0?!1:v,$=n.layout,L=$===void 0?"horizontal":$,m=n.colon,O=m===void 0?!0:m,S=n.title,y=S===void 0?(u=o.title)===null||u===void 0?void 0:u.call(o):S,P=n.extra,x=P===void 0?(a=o.extra)===null||a===void 0?void 0:a.call(o):P,f=s("descriptions",w),j=pn(k,c.value),I=(b=o.default)===null||b===void 0?void 0:b.call(o),z=un(I,j);return i("div",{class:[f,(d={},T(d,"".concat(f,"-").concat(C),C!=="default"),T(d,"".concat(f,"-bordered"),!!N),d)]},[(y||x)&&i("div",{class:"".concat(f,"-header")},[i("div",{class:"".concat(f,"-title")},J(y)?y:{default:function(){return[y]}}),i("div",{class:"".concat(f,"-extra")},J(x)?x:{default:function(){return[x]}})]),i("div",{class:"".concat(f,"-view")},[i("table",null,[i("tbody",null,[z.map(function(g,_){return i(cn,{key:_,index:_,colon:O,prefixCls:f,vertical:L==="vertical",bordered:N,row:g},null)})])])])])}}});h.props=fn,h.install=function(e){return e.component(h.name,h),e.component(h.Item.name,h.Item),e};var vn=`/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
/* stylelint-disable no-duplicate-selectors */
/* stylelint-disable */
/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
.ant-descriptions-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.ant-descriptions-title {
  flex: auto;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.85);
  font-weight: bold;
  font-size: 16px;
  line-height: 1.5715;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ant-descriptions-extra {
  margin-left: auto;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
}
.ant-descriptions-view {
  width: 100%;
  overflow: hidden;
  border-radius: 2px;
}
.ant-descriptions-view table {
  width: 100%;
  table-layout: fixed;
}
.ant-descriptions-row > th,
.ant-descriptions-row > td {
  padding-bottom: 16px;
}
.ant-descriptions-row:last-child {
  border-bottom: none;
}
.ant-descriptions-item-label {
  color: rgba(0, 0, 0, 0.85);
  font-weight: normal;
  font-size: 14px;
  line-height: 1.5715;
  text-align: start;
}
.ant-descriptions-item-label::after {
  content: ':';
  position: relative;
  top: -0.5px;
  margin: 0 8px 0 2px;
}
.ant-descriptions-item-label.ant-descriptions-item-no-colon::after {
  content: ' ';
}
.ant-descriptions-item-no-label::after {
  margin: 0;
  content: '';
}
.ant-descriptions-item-content {
  display: table-cell;
  flex: 1;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  line-height: 1.5715;
  overflow-wrap: break-word;
}
.ant-descriptions-item {
  padding-bottom: 0;
  vertical-align: top;
}
.ant-descriptions-item > span {
  display: inline-flex;
  align-items: baseline;
}
.ant-descriptions-item-container {
  display: flex;
}
.ant-descriptions-middle .ant-descriptions-row > th,
.ant-descriptions-middle .ant-descriptions-row > td {
  padding-bottom: 12px;
}
.ant-descriptions-small .ant-descriptions-row > th,
.ant-descriptions-small .ant-descriptions-row > td {
  padding-bottom: 8px;
}
.ant-descriptions-bordered .ant-descriptions-view {
  border: 1px solid #f0f0f0;
}
.ant-descriptions-bordered .ant-descriptions-view > table {
  table-layout: auto;
}
.ant-descriptions-bordered .ant-descriptions-item-label,
.ant-descriptions-bordered .ant-descriptions-item-content {
  padding: 16px 24px;
  border-right: 1px solid #f0f0f0;
}
.ant-descriptions-bordered .ant-descriptions-item-label:last-child,
.ant-descriptions-bordered .ant-descriptions-item-content:last-child {
  border-right: none;
}
.ant-descriptions-bordered .ant-descriptions-item-label {
  background-color: #fafafa;
}
.ant-descriptions-bordered .ant-descriptions-item-label::after {
  display: none;
}
.ant-descriptions-bordered .ant-descriptions-row {
  border-bottom: 1px solid #f0f0f0;
}
.ant-descriptions-bordered .ant-descriptions-row:last-child {
  border-bottom: none;
}
.ant-descriptions-bordered.ant-descriptions-middle .ant-descriptions-item-label,
.ant-descriptions-bordered.ant-descriptions-middle .ant-descriptions-item-content {
  padding: 12px 24px;
}
.ant-descriptions-bordered.ant-descriptions-small .ant-descriptions-item-label,
.ant-descriptions-bordered.ant-descriptions-small .ant-descriptions-item-content {
  padding: 8px 16px;
}
`;export{h as D};
