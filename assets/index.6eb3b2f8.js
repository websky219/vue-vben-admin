import{P as a,d as x,O as P,F as m,I as C,G as S,j as h,z as u,aa as j,n as z,v as N,x as I,R as $,K as B,D as R,cr as T}from"./index.de7a3c72.js";var k={prefixCls:a.string,disabled:a.looseBool.def(!1),checkedChildren:a.any,unCheckedChildren:a.any,tabindex:a.oneOfType([a.string,a.number]),checked:a.looseBool,defaultChecked:a.looseBool.def(!1),autofocus:a.looseBool.def(!1),loadingIcon:a.any};function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},s.apply(this,arguments)}var A=function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)n.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(t[i[o]]=e[i[o]]);return t},K=x({name:"VcSwitch",mixins:[P],inheritAttrs:!1,props:s(s({},k),{prefixCls:k.prefixCls.def("rc-switch")}),data:function(){var n=!1;return m(this,"checked")?n=!!this.checked:n=!!this.defaultChecked,{stateChecked:n}},watch:{checked:function(n){this.stateChecked=n}},mounted:function(){var n=this;this.$nextTick(function(){var t=n.autofocus,i=n.disabled;t&&!i&&n.focus()})},methods:{saveRef:function(n){this.refSwitchNode=n},setChecked:function(n,t){this.disabled||(m(this,"checked")||(this.stateChecked=n),this.__emit("change",n,t),this.__emit("update:checked",n))},handleClick:function(n){var t=!this.stateChecked;this.setChecked(t,n),this.__emit("click",t,n)},handleKeyDown:function(n){n.keyCode===37?this.setChecked(!1,n):n.keyCode===39&&this.setChecked(!0,n)},handleMouseUp:function(n){var t;(t=this.refSwitchNode)===null||t===void 0||t.blur(),this.__emit("mouseup",n)},focus:function(){var n;(n=this.refSwitchNode)===null||n===void 0||n.focus()},blur:function(){var n;(n=this.refSwitchNode)===null||n===void 0||n.blur()}},render:function(){var n,t=C(this),i=t.prefixCls,o=t.disabled,g=t.loadingIcon,c=A(t,["prefixCls","disabled","loadingIcon"]),l=this.stateChecked,d=this.$attrs,w=(n={},p(n,d.class,d.class),p(n,i,!0),p(n,"".concat(i,"-checked"),l),p(n,"".concat(i,"-disabled"),o),n),r=s(s(s({},S(c,["checkedChildren","unCheckedChildren","checked","autofocus","defaultChecked"])),d),{onKeydown:this.handleKeyDown,onClick:this.handleClick,onMouseup:this.handleMouseUp,type:"button",role:"switch","aria-checked":l,disabled:o,class:w,ref:this.saveRef});return h("button",r,[g,h("span",{class:"".concat(i,"-inner")},[l?u(this,"checkedChildren"):u(this,"unCheckedChildren")])])}});function f(){return f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},f.apply(this,arguments)}function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var M=function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)n.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(t[i[o]]=e[i[o]]);return t};function D(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!R(e)}var U=x({name:"ASwitch",__ANT_SWITCH:!0,inheritAttrs:!1,props:{prefixCls:a.string,size:a.oneOf(z("small","default","large")),disabled:a.looseBool,checkedChildren:a.any,unCheckedChildren:a.any,tabindex:a.oneOfType([a.string,a.number]),checked:a.looseBool,defaultChecked:a.looseBool,autofocus:a.looseBool,loading:a.looseBool,onChange:a.func,onClick:a.func,"onUpdate:checked":a.func},setup:function(){return{refSwitchNode:void 0,configProvider:N("configProvider",I)}},created:function(){$(m(this,"checked")||!("value"in this.$attrs),"Switch","`value` is not validate prop, do you mean `checked`?")},methods:{focus:function(){var n;(n=this.refSwitchNode)===null||n===void 0||n.focus()},blur:function(){var n;(n=this.refSwitchNode)===null||n===void 0||n.blur()},saveRef:function(n){this.refSwitchNode=n}},render:function(){var n,t,i=C(this),o=i.prefixCls,g=i.size,c=i.loading,l=i.disabled,d=M(i,["prefixCls","size","loading","disabled"]),w=this.configProvider.getPrefixCls,r=w("switch",o),b=this.$attrs,y=(t={},v(t,b.class,b.class),v(t,"".concat(r,"-small"),g==="small"),v(t,"".concat(r,"-loading"),c),t),_=c?h(B,{class:"".concat(r,"-loading-icon")},null):null,O=f(f(f({},d),b),{prefixCls:r,loadingIcon:_,checkedChildren:u(this,"checkedChildren"),unCheckedChildren:u(this,"unCheckedChildren"),disabled:l||c,class:y,ref:this.saveRef});return h(T,{insertExtraNode:!0},D(n=h(K,O,null))?n:{default:function(){return[n]}})}}),E=j(U),W=`/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
/* stylelint-disable no-duplicate-selectors */
/* stylelint-disable */
/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
.ant-switch {
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  min-width: 44px;
  height: 22px;
  line-height: 20px;
  vertical-align: middle;
  background-color: rgba(0, 0, 0, 0.25);
  border: 1px solid transparent;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.36s;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.ant-switch-inner {
  display: block;
  margin-right: 6px;
  margin-left: 24px;
  color: #fff;
  font-size: 12px;
}
.ant-switch-loading-icon,
.ant-switch::after {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 18px;
  height: 18px;
  background-color: #fff;
  border-radius: 18px;
  cursor: pointer;
  transition: all 0.36s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  content: ' ';
}
.ant-switch::after {
  box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
}
.ant-switch:not(.ant-switch-disabled):active::before,
.ant-switch:not(.ant-switch-disabled):active::after {
  width: 24px;
}
.ant-switch-loading-icon {
  z-index: 1;
  display: none;
  font-size: 12px;
  background: transparent;
}
.ant-switch-loading-icon svg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
.ant-switch-loading .ant-switch-loading-icon {
  display: inline-block;
  color: rgba(0, 0, 0, 0.85);
}
.ant-switch-checked.ant-switch-loading .ant-switch-loading-icon {
  color: #1890ff;
}
.ant-switch:focus {
  outline: 0;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}
.ant-switch:focus:hover {
  box-shadow: none;
}
.ant-switch-small {
  min-width: 28px;
  height: 16px;
  line-height: 14px;
}
.ant-switch-small .ant-switch-inner {
  margin-right: 3px;
  margin-left: 18px;
  font-size: 12px;
}
.ant-switch-small::after {
  width: 12px;
  height: 12px;
}
.ant-switch-small:active::before,
.ant-switch-small:active::after {
  width: 16px;
}
.ant-switch-small .ant-switch-loading-icon {
  width: 12px;
  height: 12px;
}
.ant-switch-small.ant-switch-checked .ant-switch-inner {
  margin-right: 18px;
  margin-left: 3px;
}
.ant-switch-small.ant-switch-checked .ant-switch-loading-icon {
  left: 100%;
  margin-left: -13px;
}
.ant-switch-small.ant-switch-loading .ant-switch-loading-icon {
  font-weight: bold;
  transform: scale(0.66667);
}
.ant-switch-checked {
  background-color: #1890ff;
}
.ant-switch-checked .ant-switch-inner {
  margin-right: 24px;
  margin-left: 6px;
}
.ant-switch-checked::after {
  left: 100%;
  margin-left: -1px;
  transform: translateX(-100%);
}
.ant-switch-checked .ant-switch-loading-icon {
  left: 100%;
  margin-left: -19px;
}
.ant-switch-loading,
.ant-switch-disabled {
  cursor: not-allowed;
  opacity: 0.4;
}
.ant-switch-loading *,
.ant-switch-disabled * {
  cursor: not-allowed;
}
.ant-switch-loading::before,
.ant-switch-disabled::before,
.ant-switch-loading::after,
.ant-switch-disabled::after {
  cursor: not-allowed;
}
@-webkit-keyframes AntSwitchSmallLoadingCircle {
  0% {
    transform: rotate(0deg) scale(0.66667);
    transform-origin: 50% 50%;
  }
  100% {
    transform: rotate(360deg) scale(0.66667);
    transform-origin: 50% 50%;
  }
}
@keyframes AntSwitchSmallLoadingCircle {
  0% {
    transform: rotate(0deg) scale(0.66667);
    transform-origin: 50% 50%;
  }
  100% {
    transform: rotate(360deg) scale(0.66667);
    transform-origin: 50% 50%;
  }
}
`;export{E as S};
