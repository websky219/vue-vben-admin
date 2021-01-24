import{aa as N,P as r,n as I,d as _,O as V,v as D,x as E,a3 as Y,z as h,y as T,j as i,D as U,bO as $,Z as F,$ as B,a4 as M,H,a5 as K,a7 as L,c$ as Z,C as q,a8 as G,d0 as J,bU as Q,d1 as R,d2 as W,b9 as X}from"./index.de7a3c72.js";function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),n.push.apply(n,o)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?w(Object(n),!0).forEach(function(o){s(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!U(e)}function nn(){}var en={success:L,info:Z,error:q,warning:G},tn={success:J,info:Q,error:R,warning:W},an={type:r.oneOf(I("success","info","warning","error")),closable:r.looseBool,closeText:r.VNodeChild,message:r.VNodeChild,description:r.VNodeChild,afterClose:r.func.def(nn),showIcon:r.looseBool,prefixCls:r.string,banner:r.looseBool,icon:r.VNodeChild,onClose:r.VNodeChild},on=_({name:"AAlert",mixins:[V],inheritAttrs:!1,props:an,emits:["close"],setup:function(){return{configProvider:D("configProvider",E)}},data:function(){return{closing:!1,closed:!1}},methods:{handleClose:function(t){t.preventDefault();var n=Y(this);n.style.height="".concat(n.offsetHeight,"px"),n.style.height="".concat(n.offsetHeight,"px"),this.setState({closing:!0}),this.$emit("close",t)},animationEnd:function(){this.setState({closing:!1,closed:!0}),this.afterClose()}},render:function(){var t,n,o=this.prefixCls,c=this.banner,m=this.closing,O=this.closed,y=this.$attrs,P=this.configProvider.getPrefixCls,a=P("alert",o),x=this.closable,d=this.type,p=this.showIcon,f=h(this,"closeText"),u=h(this,"description"),v=h(this,"message"),l=h(this,"icon");p=c&&p===void 0?!0:p,d=c&&d===void 0?"warning":d||"info";var k=(u?tn:en)[d]||null;f&&(x=!0);var j=T(a,(n={},s(n,"".concat(a,"-").concat(d),!0),s(n,"".concat(a,"-closing"),m),s(n,"".concat(a,"-with-description"),!!u),s(n,"".concat(a,"-no-icon"),!p),s(n,"".concat(a,"-banner"),!!c),s(n,"".concat(a,"-closable"),x),n)),A=x?i("button",{type:"button",onClick:this.handleClose,class:"".concat(a,"-close-icon"),tabindex:0},[f?i("span",{class:"".concat(a,"-close-text")},b(f)?f:{default:function(){return[f]}}):i($,null,null)]):null,S=l&&(F(l)?B(l,{class:"".concat(a,"-icon")}):i("span",{class:"".concat(a,"-icon")},b(l)?l:{default:function(){return[l]}}))||i(k,{class:"".concat(a,"-icon")},null),z=M("".concat(a,"-slide-up"),{appear:!1,onAfterLeave:this.animationEnd});return O?null:i(K,z,b(t=H(i("div",C(C({},y),{},{class:[y.class,j],"data-show":!m}),[p?S:null,i("span",{class:"".concat(a,"-message")},b(v)?v:{default:function(){return[v]}}),i("span",{class:"".concat(a,"-description")},b(u)?u:{default:function(){return[u]}}),A]),[[X,!m]]))?t:{default:function(){return[t]}})}}),rn=N(on),ln=`/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
/* stylelint-disable no-duplicate-selectors */
/* stylelint-disable */
/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
.ant-alert {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  position: relative;
  padding: 8px 15px 8px 37px;
  word-wrap: break-word;
  border-radius: 2px;
}
.ant-alert.ant-alert-no-icon {
  padding: 8px 15px;
}
.ant-alert.ant-alert-closable {
  padding-right: 30px;
}
.ant-alert-icon {
  position: absolute;
  top: 12.0005px;
  left: 16px;
}
.ant-alert-description {
  display: none;
  font-size: 14px;
  line-height: 22px;
}
.ant-alert-success {
  background-color: #f6ffed;
  border: 1px solid #b7eb8f;
}
.ant-alert-success .ant-alert-icon {
  color: #52c41a;
}
.ant-alert-info {
  background-color: #e6f7ff;
  border: 1px solid #91d5ff;
}
.ant-alert-info .ant-alert-icon {
  color: #1890ff;
}
.ant-alert-warning {
  background-color: #fffbe6;
  border: 1px solid #ffe58f;
}
.ant-alert-warning .ant-alert-icon {
  color: #faad14;
}
.ant-alert-error {
  background-color: #fff2f0;
  border: 1px solid #ffccc7;
}
.ant-alert-error .ant-alert-icon {
  color: #ff4d4f;
}
.ant-alert-close-icon {
  position: absolute;
  top: 8px;
  right: 16px;
  padding: 0;
  overflow: hidden;
  font-size: 12px;
  line-height: 22px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}
.ant-alert-close-icon .anticon-close {
  color: rgba(0, 0, 0, 0.45);
  transition: color 0.3s;
}
.ant-alert-close-icon .anticon-close:hover {
  color: rgba(0, 0, 0, 0.75);
}
.ant-alert-close-text {
  color: rgba(0, 0, 0, 0.45);
  transition: color 0.3s;
}
.ant-alert-close-text:hover {
  color: rgba(0, 0, 0, 0.75);
}
.ant-alert-with-description {
  position: relative;
  padding: 15px 15px 15px 64px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 1.5715;
  border-radius: 2px;
}
.ant-alert-with-description.ant-alert-no-icon {
  padding: 15px;
}
.ant-alert-with-description .ant-alert-icon {
  position: absolute;
  top: 16px;
  left: 24px;
  font-size: 24px;
}
.ant-alert-with-description .ant-alert-close-icon {
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 14px;
  cursor: pointer;
}
.ant-alert-with-description .ant-alert-message {
  display: block;
  margin-bottom: 4px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 16px;
}
.ant-alert-message {
  color: rgba(0, 0, 0, 0.85);
}
.ant-alert-with-description .ant-alert-description {
  display: block;
}
.ant-alert.ant-alert-closing {
  height: 0 !important;
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
  transform-origin: 50% 0;
  transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
}
.ant-alert-slide-up-leave {
  -webkit-animation: antAlertSlideUpOut 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
          animation: antAlertSlideUpOut 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}
.ant-alert-banner {
  margin-bottom: 0;
  border: 0;
  border-radius: 0;
}
@-webkit-keyframes antAlertSlideUpIn {
  0% {
    transform: scaleY(0);
    transform-origin: 0% 0%;
    opacity: 0;
  }
  100% {
    transform: scaleY(1);
    transform-origin: 0% 0%;
    opacity: 1;
  }
}
@keyframes antAlertSlideUpIn {
  0% {
    transform: scaleY(0);
    transform-origin: 0% 0%;
    opacity: 0;
  }
  100% {
    transform: scaleY(1);
    transform-origin: 0% 0%;
    opacity: 1;
  }
}
@-webkit-keyframes antAlertSlideUpOut {
  0% {
    transform: scaleY(1);
    transform-origin: 0% 0%;
    opacity: 1;
  }
  100% {
    transform: scaleY(0);
    transform-origin: 0% 0%;
    opacity: 0;
  }
}
@keyframes antAlertSlideUpOut {
  0% {
    transform: scaleY(1);
    transform-origin: 0% 0%;
    opacity: 1;
  }
  100% {
    transform: scaleY(0);
    transform-origin: 0% 0%;
    opacity: 0;
  }
}
`;export{rn as A};
