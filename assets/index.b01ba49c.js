import{aa as g,d as b,v as w,x as z,a0 as s,aF as y,j as f,D as m}from"./index.de7a3c72.js";function d(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function C(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!m(n)}var P=b({name:"ADivider",props:{prefixCls:String,type:{type:String,default:"horizontal"},dashed:{type:Boolean,default:!1},orientation:{type:String,default:"center"}},setup:function(e,r){var o=r.slots,c=w("configProvider",z),p=c.getPrefixCls,h=s(function(){return p("divider",e.prefixCls)}),x=s(function(){var t,i=e.type,v=e.dashed,l=e.orientation,u=l.length>0?"-"+l:l,a=h.value;return t={},d(t,a,!0),d(t,"".concat(a,"-").concat(i),!0),d(t,"".concat(a,"-with-text").concat(u),o.default),d(t,"".concat(a,"-dashed"),!!v),t});return function(){var t,i=y((t=o.default)===null||t===void 0?void 0:t.call(o));return f("div",{class:x.value,role:"separator"},[i.length?f("span",{class:"".concat(h.value,"-inner-text")},C(i)?i:{default:function(){return[i]}}):null])}}}),k=g(P),_=`/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
/* stylelint-disable no-duplicate-selectors */
/* stylelint-disable */
/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
.ant-divider {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  background: #f0f0f0;
}
.ant-divider,
.ant-divider-vertical {
  position: relative;
  top: -0.06em;
  display: inline-block;
  width: 1px;
  height: 0.9em;
  margin: 0 8px;
  vertical-align: middle;
}
.ant-divider-horizontal {
  display: block;
  clear: both;
  width: 100%;
  min-width: 100%;
  height: 1px;
  margin: 24px 0;
}
.ant-divider-horizontal.ant-divider-with-text-center,
.ant-divider-horizontal.ant-divider-with-text-left,
.ant-divider-horizontal.ant-divider-with-text-right {
  display: table;
  margin: 16px 0;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  text-align: center;
  background: transparent;
}
.ant-divider-horizontal.ant-divider-with-text-center::before,
.ant-divider-horizontal.ant-divider-with-text-left::before,
.ant-divider-horizontal.ant-divider-with-text-right::before,
.ant-divider-horizontal.ant-divider-with-text-center::after,
.ant-divider-horizontal.ant-divider-with-text-left::after,
.ant-divider-horizontal.ant-divider-with-text-right::after {
  position: relative;
  top: 50%;
  display: table-cell;
  width: 50%;
  border-top: 1px solid #f0f0f0;
  transform: translateY(50%);
  content: '';
}
.ant-divider-horizontal.ant-divider-with-text-left .ant-divider-inner-text,
.ant-divider-horizontal.ant-divider-with-text-right .ant-divider-inner-text {
  display: inline-block;
  padding: 0 10px;
}
.ant-divider-horizontal.ant-divider-with-text-left::before {
  top: 50%;
  width: 5%;
}
.ant-divider-horizontal.ant-divider-with-text-left::after {
  top: 50%;
  width: 95%;
}
.ant-divider-horizontal.ant-divider-with-text-right::before {
  top: 50%;
  width: 95%;
}
.ant-divider-horizontal.ant-divider-with-text-right::after {
  top: 50%;
  width: 5%;
}
.ant-divider-inner-text {
  display: inline-block;
  padding: 0 1em;
}
.ant-divider-dashed {
  background: none;
  border-color: rgba(0, 0, 0, 0.06);
  border-style: dashed;
  border-width: 1px 0 0;
}
.ant-divider-horizontal.ant-divider-with-text-center.ant-divider-dashed,
.ant-divider-horizontal.ant-divider-with-text-left.ant-divider-dashed,
.ant-divider-horizontal.ant-divider-with-text-right.ant-divider-dashed {
  border-top: 0;
}
.ant-divider-horizontal.ant-divider-with-text-center.ant-divider-dashed::before,
.ant-divider-horizontal.ant-divider-with-text-left.ant-divider-dashed::before,
.ant-divider-horizontal.ant-divider-with-text-right.ant-divider-dashed::before,
.ant-divider-horizontal.ant-divider-with-text-center.ant-divider-dashed::after,
.ant-divider-horizontal.ant-divider-with-text-left.ant-divider-dashed::after,
.ant-divider-horizontal.ant-divider-with-text-right.ant-divider-dashed::after {
  border-style: dashed none none;
}
.ant-divider-vertical.ant-divider-dashed {
  border-width: 0 0 0 1px;
}
`;export{k as D};
