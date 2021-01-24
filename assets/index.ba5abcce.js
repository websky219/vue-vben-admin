import{d as S,P as i,v as $,x as F,y as R,j as d,r as J,a_ as K,D as L,aO as M,cr as Q,bO as U}from"./index.de7a3c72.js";import{P as X,a as Y}from"./colors.e241e755.js";function V(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}var P=S({name:"ACheckableTag",props:{prefixCls:i.string,checked:i.looseBool,onChange:{type:Function},onClick:{type:Function}},emits:["update:checked","change","click"],setup:function(n,a){var r=a.slots,s=a.emit,C=$("configProvider",F),m=C.getPrefixCls,x=function(l){var f=n.checked;s("update:checked",!f),s("change",!f),s("click",l)};return function(){var c,l,f=n.checked,t=n.prefixCls,o=m("tag",t),u=R(o,(c={},V(c,"".concat(o,"-checkable"),!0),V(c,"".concat(o,"-checkable-checked"),f),c));return d("span",{class:u,onClick:x},[(l=r.default)===null||l===void 0?void 0:l.call(r)])}}});function _(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function w(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!L(e)}var Z=new RegExp("^(".concat(X.join("|"),")(-inverse)?$")),nn=new RegExp("^(".concat(Y.join("|"),")$")),en={prefixCls:i.string,color:{type:String},closable:i.looseBool.def(!1),closeIcon:i.VNodeChild,visible:i.looseBool,onClose:{type:Function},icon:i.VNodeChild},b=S({name:"ATag",emits:["update:visible","close"],setup:function(n,a){var r=a.slots,s=a.emit,C=a.attrs,m=$("configProvider",F),x=m.getPrefixCls,c=J(!0);K(function(){n.visible!==void 0&&(c.value=n.visible)});var l=function(o){o.stopPropagation(),s("update:visible",!1),s("close",o),!o.defaultPrevented&&n.visible===void 0&&(c.value=!1)},f=function(){var o=n.color;return o?Z.test(o)||nn.test(o):!1};return function(){var t,o,u,y,B=n.prefixCls,N=n.icon,E=N===void 0?(o=r.icon)===null||o===void 0?void 0:o.call(r):N,v=n.color,z=n.closeIcon,k=z===void 0?(u=r.closeIcon)===null||u===void 0?void 0:u.call(r):z,T=n.closable,A=T===void 0?!1:T,j=f(),g=x("tag",B),W=function(){return A?k?d("div",{class:"".concat(g,"-close-icon"),onClick:l},w(k)?k:{default:function(){return[k]}}):d(U,{class:"".concat(g,"-close-icon"),onClick:l},null):null},D={backgroundColor:v&&!f()?v:void 0},q=R(g,(t={},_(t,"".concat(g,"-").concat(v),j),_(t,"".concat(g,"-has-color"),v&&!j),_(t,"".concat(g,"-hidden"),!c.value),t)),I=E||null,p=(y=r.default)===null||y===void 0?void 0:y.call(r),G=I?d(M,null,[I,d("span",null,w(p)?p:{default:function(){return[p]}})]):p,H="onClick"in C,h=d("span",{class:q,style:D},[G,W()]);return H?d(Q,null,w(h)?h:{default:function(){return[h]}}):h}}});b.props=en,b.CheckableTag=P,b.install=function(e){return e.component(b.name,b),e.component(P.name,P),e};var cn=`/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
/* stylelint-disable no-duplicate-selectors */
/* stylelint-disable */
/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
.ant-tag {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  display: inline-block;
  height: auto;
  margin-right: 8px;
  padding: 0 7px;
  font-size: 12px;
  line-height: 20px;
  white-space: nowrap;
  background: #fafafa;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  cursor: default;
  opacity: 1;
  transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
}
.ant-tag:hover {
  opacity: 0.85;
}
.ant-tag,
.ant-tag a,
.ant-tag a:hover {
  color: rgba(0, 0, 0, 0.85);
}
.ant-tag > a:first-child:last-child {
  display: inline-block;
  margin: 0 -8px;
  padding: 0 8px;
}
.ant-tag .anticon-close {
  display: inline-block;
  font-size: 12px;
  font-size: 10px \\9;
  transform: scale(0.83333333) rotate(0deg);
  margin-left: 3px;
  color: rgba(0, 0, 0, 0.45);
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
}
:root .ant-tag .anticon-close {
  font-size: 12px;
}
.ant-tag .anticon-close:hover {
  color: rgba(0, 0, 0, 0.85);
}
.ant-tag-has-color {
  border-color: transparent;
}
.ant-tag-has-color,
.ant-tag-has-color a,
.ant-tag-has-color a:hover,
.ant-tag-has-color .anticon-close,
.ant-tag-has-color .anticon-close:hover {
  color: #fff;
}
.ant-tag-checkable {
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
}
.ant-tag-checkable:not(.ant-tag-checkable-checked):hover {
  color: #1890ff;
}
.ant-tag-checkable:active,
.ant-tag-checkable-checked {
  color: #fff;
}
.ant-tag-checkable-checked {
  background-color: #1890ff;
}
.ant-tag-checkable:active {
  background-color: #096dd9;
}
.ant-tag-hidden {
  display: none;
}
.ant-tag-pink {
  color: #eb2f96;
  background: #fff0f6;
  border-color: #ffadd2;
}
.ant-tag-pink-inverse {
  color: #fff;
  background: #eb2f96;
  border-color: #eb2f96;
}
.ant-tag-magenta {
  color: #eb2f96;
  background: #fff0f6;
  border-color: #ffadd2;
}
.ant-tag-magenta-inverse {
  color: #fff;
  background: #eb2f96;
  border-color: #eb2f96;
}
.ant-tag-red {
  color: #f5222d;
  background: #fff1f0;
  border-color: #ffa39e;
}
.ant-tag-red-inverse {
  color: #fff;
  background: #f5222d;
  border-color: #f5222d;
}
.ant-tag-volcano {
  color: #fa541c;
  background: #fff2e8;
  border-color: #ffbb96;
}
.ant-tag-volcano-inverse {
  color: #fff;
  background: #fa541c;
  border-color: #fa541c;
}
.ant-tag-orange {
  color: #fa8c16;
  background: #fff7e6;
  border-color: #ffd591;
}
.ant-tag-orange-inverse {
  color: #fff;
  background: #fa8c16;
  border-color: #fa8c16;
}
.ant-tag-yellow {
  color: #fadb14;
  background: #feffe6;
  border-color: #fffb8f;
}
.ant-tag-yellow-inverse {
  color: #fff;
  background: #fadb14;
  border-color: #fadb14;
}
.ant-tag-gold {
  color: #faad14;
  background: #fffbe6;
  border-color: #ffe58f;
}
.ant-tag-gold-inverse {
  color: #fff;
  background: #faad14;
  border-color: #faad14;
}
.ant-tag-cyan {
  color: #13c2c2;
  background: #e6fffb;
  border-color: #87e8de;
}
.ant-tag-cyan-inverse {
  color: #fff;
  background: #13c2c2;
  border-color: #13c2c2;
}
.ant-tag-lime {
  color: #a0d911;
  background: #fcffe6;
  border-color: #eaff8f;
}
.ant-tag-lime-inverse {
  color: #fff;
  background: #a0d911;
  border-color: #a0d911;
}
.ant-tag-green {
  color: #52c41a;
  background: #f6ffed;
  border-color: #b7eb8f;
}
.ant-tag-green-inverse {
  color: #fff;
  background: #52c41a;
  border-color: #52c41a;
}
.ant-tag-blue {
  color: #1890ff;
  background: #e6f7ff;
  border-color: #91d5ff;
}
.ant-tag-blue-inverse {
  color: #fff;
  background: #1890ff;
  border-color: #1890ff;
}
.ant-tag-geekblue {
  color: #2f54eb;
  background: #f0f5ff;
  border-color: #adc6ff;
}
.ant-tag-geekblue-inverse {
  color: #fff;
  background: #2f54eb;
  border-color: #2f54eb;
}
.ant-tag-purple {
  color: #722ed1;
  background: #f9f0ff;
  border-color: #d3adf7;
}
.ant-tag-purple-inverse {
  color: #fff;
  background: #722ed1;
  border-color: #722ed1;
}
.ant-tag-success {
  color: #52c41a;
  background: #f6ffed;
  border-color: #b7eb8f;
}
.ant-tag-processing {
  color: #1890ff;
  background: #e6f7ff;
  border-color: #91d5ff;
}
.ant-tag-error {
  color: #f5222d;
  background: #fff1f0;
  border-color: #ffa39e;
}
.ant-tag-warning {
  color: #fa8c16;
  background: #fff7e6;
  border-color: #ffd591;
}
.ant-tag > .anticon + span,
.ant-tag > span + .anticon {
  margin-left: 7px;
}
`;export{b as T};
