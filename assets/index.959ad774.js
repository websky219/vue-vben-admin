import{d as I,O as E,P as i,S as $,c1 as L,J as F,j as a,c0 as Q,B as X,I as B,z as w,D as V,n as j,a9 as Y,v as Z,x as tt,bO as nt}from"./index.de7a3c72.js";import{C as et}from"./CheckOutlined.615f0fd5.js";function H(){if(typeof window!="undefined"&&window.document&&window.document.documentElement){var e=window.document.documentElement;return"flex"in e.style||"webkitFlex"in e.style||"Flex"in e.style||"msFlex"in e.style}return!1}function M(){return M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},M.apply(this,arguments)}function k(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var R=I({name:"Steps",mixins:[E],props:{type:i.string.def("default"),prefixCls:i.string.def("rc-steps"),iconPrefix:i.string.def("rc"),direction:i.string.def("horizontal"),labelPlacement:i.string.def("horizontal"),status:i.string.def("process"),size:i.string.def(""),progressDot:$(i.oneOfType([i.looseBool,i.func])),initial:i.number.def(0),current:i.number.def(0),icons:i.shape({finish:i.any,error:i.any}).loose,canClick:i.looseBool},data:function(){return this.calcStepOffsetWidth=L(this.calcStepOffsetWidth,150),{flexSupported:!0,lastStepOffsetWidth:0}},mounted:function(){var t=this;this.$nextTick(function(){t.calcStepOffsetWidth(),H()||t.setState({flexSupported:!1})})},updated:function(){var t=this;this.$nextTick(function(){t.calcStepOffsetWidth()})},beforeUnmount:function(){this.calcTimeout&&clearTimeout(this.calcTimeout),this.calcStepOffsetWidth&&this.calcStepOffsetWidth.cancel&&this.calcStepOffsetWidth.cancel()},methods:{onStepClick:function(t){var s=this.$props.current;s!==t&&this.__emit("change",t)},calcStepOffsetWidth:function(){var t=this;if(!H()){var s=this.$data.lastStepOffsetWidth,n=this.$refs.vcStepsRef;n.children.length>0&&(this.calcTimeout&&clearTimeout(this.calcTimeout),this.calcTimeout=setTimeout(function(){var o=(n.lastChild.offsetWidth||0)+1;s===o||Math.abs(s-o)<=3||t.setState({lastStepOffsetWidth:o})}))}}},render:function(){var t,s=this,n=this.prefixCls,o=this.direction,l=this.type,c=this.labelPlacement,r=this.iconPrefix,m=this.status,p=this.size,d=this.current,v=this.progressDot,f=this.initial,C=this.icons,h=this.canClick,b=l==="navigation",N=this.lastStepOffsetWidth,_=this.flexSupported,S=F(this),x=S.length-1,W=v?"vertical":c,q=(t={},k(t,n,!0),k(t,"".concat(n,"-").concat(o),!0),k(t,"".concat(n,"-").concat(p),p),k(t,"".concat(n,"-label-").concat(W),o==="horizontal"),k(t,"".concat(n,"-dot"),!!v),k(t,"".concat(n,"-navigation"),b),k(t,"".concat(n,"-flex-not-supported"),!_),t),G={class:q,ref:"vcStepsRef"};return a("div",G,[S.map(function(U,T){var A=Q(U),P=f+T,u=M({stepNumber:"".concat(P+1),stepIndex:P,prefixCls:n,iconPrefix:r,progressDot:v,icons:C},A);return h&&(u.onStepClick=s.onStepClick),!_&&o!=="vertical"&&(b?(u.itemWidth="".concat(100/(x+1),"%"),u.adjustMarginRight=0):T!==x&&(u.itemWidth="".concat(100/x,"%"),u.adjustMarginRight="".concat(-Math.round(N/x+1),"px"))),m==="error"&&T===d-1&&(u.class="".concat(n,"-next-error")),A.status||(P===d?u.status=m:P<d?u.status="finish":u.status="wait"),u.active=P===d,X(U,u)})])}});function J(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),s.push.apply(s,n)}return s}function D(e){for(var t=1;t<arguments.length;t++){var s=arguments[t]!=null?arguments[t]:{};t%2?J(Object(s),!0).forEach(function(n){g(e,n,s[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):J(Object(s)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))})}return e}function g(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function O(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!V(e)}function K(e){return typeof e=="string"}function st(){}var it=I({name:"Step",mixins:[E],props:{prefixCls:i.string,wrapperStyle:i.object,itemWidth:i.string,active:i.looseBool,disabled:i.looseBool,status:i.string,iconPrefix:i.string,icon:i.any,adjustMarginRight:i.string,stepNumber:i.string,stepIndex:i.number,description:i.any,title:i.any,subTitle:i.any,progressDot:$(i.oneOfType([i.looseBool,i.func])),tailContent:i.any,icons:i.shape({finish:i.any,error:i.any}).loose,onClick:i.func,onStepClick:i.func},methods:{onItemClick:function(){for(var t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];this.__emit.apply(this,["click"].concat(s)),this.__emit("stepClick",this.stepIndex)},renderIconNode:function(){var t,s=B(this),n=s.prefixCls,o=s.stepNumber,l=s.status,c=s.iconPrefix,r=s.icons,m=s.progressDot,p=w(this,"icon"),d=w(this,"title"),v=w(this,"description"),f,C=(t={},g(t,"".concat(n,"-icon"),!0),g(t,"".concat(c,"icon"),!0),g(t,"".concat(c,"icon-").concat(p),p&&K(p)),g(t,"".concat(c,"icon-check"),!p&&l==="finish"&&r&&!r.finish),g(t,"".concat(c,"icon-close"),!p&&l==="error"&&r&&!r.error),t),h=a("span",{class:"".concat(n,"-icon-dot")},null);return m?typeof m=="function"?f=a("span",{class:"".concat(n,"-icon")},[m({index:o-1,status:l,title:d,description:v,prefixCls:n})]):f=a("span",{class:"".concat(n,"-icon")},O(h)?h:{default:function(){return[h]}}):p&&!K(p)?f=a("span",{class:"".concat(n,"-icon")},O(p)?p:{default:function(){return[p]}}):r&&r.finish&&l==="finish"?f=a("span",{class:"".concat(n,"-icon")},[r.finish]):r&&r.error&&l==="error"?f=a("span",{class:"".concat(n,"-icon")},[r.error]):p||l==="finish"||l==="error"?f=a("span",{class:C},null):f=a("span",{class:"".concat(n,"-icon")},O(o)?o:{default:function(){return[o]}}),f}},render:function(){var t,s=B(this),n=s.prefixCls,o=s.itemWidth,l=s.active,c=s.status,r=c===void 0?"wait":c,m=s.tailContent,p=s.adjustMarginRight,d=s.disabled,v=s.onClick,f=s.onStepClick,C=w(this,"title"),h=w(this,"subTitle"),b=w(this,"description"),N=(t={},g(t,"".concat(n,"-item"),!0),g(t,"".concat(n,"-item-").concat(r),!0),g(t,"".concat(n,"-item-custom"),w(this,"icon")),g(t,"".concat(n,"-item-active"),l),g(t,"".concat(n,"-item-disabled"),d===!0),t),_={class:N},S={};o&&(S.width=o),p&&(S.marginRight=p);var x={onClick:v||st};return f&&!d&&(x.role="button",x.tabindex=0,x.onClick=this.onItemClick),a("div",D(D({},_),{},{style:S}),[a("div",D(D({},x),{},{class:"".concat(n,"-item-container")}),[a("div",{class:"".concat(n,"-item-tail")},O(m)?m:{default:function(){return[m]}}),a("div",{class:"".concat(n,"-item-icon")},[this.renderIconNode()]),a("div",{class:"".concat(n,"-item-content")},[a("div",{class:"".concat(n,"-item-title")},[C,h&&a("div",{title:h,class:"".concat(n,"-item-subtitle")},O(h)?h:{default:function(){return[h]}})]),b&&a("div",{class:"".concat(n,"-item-description")},O(b)?b:{default:function(){return[b]}})])])])}});R.Step=it;function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},y.apply(this,arguments)}function at(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!V(e)}var ot={prefixCls:i.string,iconPrefix:i.string,current:i.number,initial:i.number,labelPlacement:i.oneOf(j("horizontal","vertical")).def("horizontal"),status:i.oneOf(j("wait","process","finish","error")),size:i.oneOf(j("default","small")),direction:i.oneOf(j("horizontal","vertical")),progressDot:$(i.oneOfType([i.looseBool,i.func])),type:i.oneOf(j("default","navigation")),onChange:i.func,"onUpdate:current":i.func},z=I({name:"ASteps",inheritAttrs:!1,props:Y(ot,{current:0}),emits:["update:current","change"],setup:function(){return{configProvider:Z("configProvider",tt)}},Step:y(y({},R.Step),{name:"AStep"}),methods:{handleChange:function(t){this.$emit("update:current",t),this.$emit("change",t)}},render:function(){var t,s=y(y({},B(this)),this.$attrs),n=s.prefixCls,o=s.iconPrefix,l=this.configProvider.getPrefixCls,c=l("steps",n),r=l("",o),m=w(this,"progressDot",this,!1),p={finish:a(et,{class:"".concat(c,"-finish-icon")},null),error:a(nt,{class:"".concat(c,"-error-icon")},null)},d=y(y({icons:p,iconPrefix:r,prefixCls:c,progressDot:m},s),{canClick:!!(this.onChange||this["onUpdate:current"]),onChange:this.handleChange});return a(R,d,at(t=F(this))?t:{default:function(){return[t]}})}});z.install=function(e){return e.component(z.name,z),e.component(z.Step.name,z.Step),e};var lt=`/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
/* stylelint-disable no-duplicate-selectors */
/* stylelint-disable */
/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
.ant-steps {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  display: flex;
  width: 100%;
  font-size: 0;
}
.ant-steps-item {
  position: relative;
  display: inline-block;
  flex: 1;
  overflow: hidden;
  vertical-align: top;
}
.ant-steps-item-container {
  outline: none;
}
.ant-steps-item:last-child {
  flex: none;
}
.ant-steps-item:last-child > .ant-steps-item-container > .ant-steps-item-tail,
.ant-steps-item:last-child > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
  display: none;
}
.ant-steps-item-icon,
.ant-steps-item-content {
  display: inline-block;
  vertical-align: top;
}
.ant-steps-item-icon {
  width: 32px;
  height: 32px;
  margin-right: 8px;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  line-height: 32px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 32px;
  transition: background-color 0.3s, border-color 0.3s;
}
.ant-steps-item-icon > .ant-steps-icon {
  position: relative;
  top: -1px;
  color: #1890ff;
  line-height: 1;
}
.ant-steps-item-tail {
  position: absolute;
  top: 12px;
  left: 0;
  width: 100%;
  padding: 0 10px;
}
.ant-steps-item-tail::after {
  display: inline-block;
  width: 100%;
  height: 1px;
  background: #f0f0f0;
  border-radius: 1px;
  transition: background 0.3s;
  content: '';
}
.ant-steps-item-title {
  position: relative;
  display: inline-block;
  padding-right: 16px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 16px;
  line-height: 32px;
}
.ant-steps-item-title::after {
  position: absolute;
  top: 16px;
  left: 100%;
  display: block;
  width: 9999px;
  height: 1px;
  background: #f0f0f0;
  content: '';
}
.ant-steps-item-subtitle {
  display: inline;
  margin-left: 8px;
  color: rgba(0, 0, 0, 0.45);
  font-weight: normal;
  font-size: 14px;
}
.ant-steps-item-description {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}
.ant-steps-item-wait .ant-steps-item-icon {
  background-color: #fff;
  border-color: rgba(0, 0, 0, 0.25);
}
.ant-steps-item-wait .ant-steps-item-icon > .ant-steps-icon {
  color: rgba(0, 0, 0, 0.25);
}
.ant-steps-item-wait .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {
  background: rgba(0, 0, 0, 0.25);
}
.ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
  color: rgba(0, 0, 0, 0.45);
}
.ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
  background-color: #f0f0f0;
}
.ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-description {
  color: rgba(0, 0, 0, 0.45);
}
.ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-tail::after {
  background-color: #f0f0f0;
}
.ant-steps-item-process .ant-steps-item-icon {
  background-color: #fff;
  border-color: #1890ff;
}
.ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon {
  color: #1890ff;
}
.ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {
  background: #1890ff;
}
.ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
  color: rgba(0, 0, 0, 0.85);
}
.ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
  background-color: #f0f0f0;
}
.ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-description {
  color: rgba(0, 0, 0, 0.85);
}
.ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-tail::after {
  background-color: #f0f0f0;
}
.ant-steps-item-process .ant-steps-item-icon {
  background: #1890ff;
}
.ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon {
  color: #fff;
}
.ant-steps-item-process .ant-steps-item-title {
  font-weight: 500;
}
.ant-steps-item-finish .ant-steps-item-icon {
  background-color: #fff;
  border-color: #1890ff;
}
.ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon {
  color: #1890ff;
}
.ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {
  background: #1890ff;
}
.ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
  color: rgba(0, 0, 0, 0.85);
}
.ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
  background-color: #1890ff;
}
.ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-description {
  color: rgba(0, 0, 0, 0.45);
}
.ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-tail::after {
  background-color: #1890ff;
}
.ant-steps-item-error .ant-steps-item-icon {
  background-color: #fff;
  border-color: #ff4d4f;
}
.ant-steps-item-error .ant-steps-item-icon > .ant-steps-icon {
  color: #ff4d4f;
}
.ant-steps-item-error .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {
  background: #ff4d4f;
}
.ant-steps-item-error > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
  color: #ff4d4f;
}
.ant-steps-item-error > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
  background-color: #f0f0f0;
}
.ant-steps-item-error > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-description {
  color: #ff4d4f;
}
.ant-steps-item-error > .ant-steps-item-container > .ant-steps-item-tail::after {
  background-color: #f0f0f0;
}
.ant-steps-item.ant-steps-next-error .ant-steps-item-title::after {
  background: #ff4d4f;
}
.ant-steps .ant-steps-item:not(.ant-steps-item-active) > .ant-steps-item-container[role='button'] {
  cursor: pointer;
}
.ant-steps .ant-steps-item:not(.ant-steps-item-active) > .ant-steps-item-container[role='button'] .ant-steps-item-title,
.ant-steps .ant-steps-item:not(.ant-steps-item-active) > .ant-steps-item-container[role='button'] .ant-steps-item-description,
.ant-steps .ant-steps-item:not(.ant-steps-item-active) > .ant-steps-item-container[role='button'] .ant-steps-item-icon .ant-steps-icon {
  transition: color 0.3s;
}
.ant-steps .ant-steps-item:not(.ant-steps-item-active) > .ant-steps-item-container[role='button']:hover .ant-steps-item-title,
.ant-steps .ant-steps-item:not(.ant-steps-item-active) > .ant-steps-item-container[role='button']:hover .ant-steps-item-subtitle,
.ant-steps .ant-steps-item:not(.ant-steps-item-active) > .ant-steps-item-container[role='button']:hover .ant-steps-item-description {
  color: #1890ff;
}
.ant-steps .ant-steps-item:not(.ant-steps-item-active):not(.ant-steps-item-process) > .ant-steps-item-container[role='button']:hover .ant-steps-item-icon {
  border-color: #1890ff;
}
.ant-steps .ant-steps-item:not(.ant-steps-item-active):not(.ant-steps-item-process) > .ant-steps-item-container[role='button']:hover .ant-steps-item-icon .ant-steps-icon {
  color: #1890ff;
}
.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item {
  margin-right: 16px;
  white-space: nowrap;
}
.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:last-child {
  margin-right: 0;
}
.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:last-child .ant-steps-item-title {
  padding-right: 0;
}
.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item-tail {
  display: none;
}
.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item-description {
  max-width: 140px;
  white-space: normal;
}
.ant-steps-item-custom .ant-steps-item-icon {
  height: auto;
  background: none;
  border: 0;
}
.ant-steps-item-custom .ant-steps-item-icon > .ant-steps-icon {
  top: 0;
  left: 0.5px;
  width: 32px;
  height: 32px;
  font-size: 24px;
  line-height: 32px;
}
.ant-steps-item-custom.ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon {
  color: #1890ff;
}
.ant-steps:not(.ant-steps-vertical) .ant-steps-item-custom .ant-steps-item-icon {
  width: auto;
}
.ant-steps-small.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item {
  margin-right: 12px;
}
.ant-steps-small.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:last-child {
  margin-right: 0;
}
.ant-steps-small .ant-steps-item-icon {
  width: 24px;
  height: 24px;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  border-radius: 24px;
}
.ant-steps-small .ant-steps-item-title {
  padding-right: 12px;
  font-size: 14px;
  line-height: 24px;
}
.ant-steps-small .ant-steps-item-title::after {
  top: 12px;
}
.ant-steps-small .ant-steps-item-description {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}
.ant-steps-small .ant-steps-item-tail {
  top: 8px;
}
.ant-steps-small .ant-steps-item-custom .ant-steps-item-icon {
  width: inherit;
  height: inherit;
  line-height: inherit;
  background: none;
  border: 0;
  border-radius: 0;
}
.ant-steps-small .ant-steps-item-custom .ant-steps-item-icon > .ant-steps-icon {
  font-size: 24px;
  line-height: 24px;
  transform: none;
}
.ant-steps-vertical {
  display: block;
}
.ant-steps-vertical .ant-steps-item {
  display: block;
  overflow: visible;
}
.ant-steps-vertical .ant-steps-item-icon {
  float: left;
  margin-right: 16px;
}
.ant-steps-vertical .ant-steps-item-content {
  display: block;
  min-height: 48px;
  overflow: hidden;
}
.ant-steps-vertical .ant-steps-item-title {
  line-height: 32px;
}
.ant-steps-vertical .ant-steps-item-description {
  padding-bottom: 12px;
}
.ant-steps-vertical > .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail {
  position: absolute;
  top: 0;
  left: 16px;
  width: 1px;
  height: 100%;
  padding: 38px 0 6px;
}
.ant-steps-vertical > .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail::after {
  width: 1px;
  height: 100%;
}
.ant-steps-vertical > .ant-steps-item:not(:last-child) > .ant-steps-item-container > .ant-steps-item-tail {
  display: block;
}
.ant-steps-vertical > .ant-steps-item > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
  display: none;
}
.ant-steps-vertical.ant-steps-small .ant-steps-item-container .ant-steps-item-tail {
  position: absolute;
  top: 0;
  left: 12px;
  padding: 30px 0 6px;
}
.ant-steps-vertical.ant-steps-small .ant-steps-item-container .ant-steps-item-title {
  line-height: 24px;
}
@media (max-width: 480px) {
  .ant-steps-horizontal.ant-steps-label-horizontal {
    display: block;
  }
  .ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item {
    display: block;
    overflow: visible;
  }
  .ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item-icon {
    float: left;
    margin-right: 16px;
  }
  .ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item-content {
    display: block;
    min-height: 48px;
    overflow: hidden;
  }
  .ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item-title {
    line-height: 32px;
  }
  .ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item-description {
    padding-bottom: 12px;
  }
  .ant-steps-horizontal.ant-steps-label-horizontal > .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail {
    position: absolute;
    top: 0;
    left: 16px;
    width: 1px;
    height: 100%;
    padding: 38px 0 6px;
  }
  .ant-steps-horizontal.ant-steps-label-horizontal > .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail::after {
    width: 1px;
    height: 100%;
  }
  .ant-steps-horizontal.ant-steps-label-horizontal > .ant-steps-item:not(:last-child) > .ant-steps-item-container > .ant-steps-item-tail {
    display: block;
  }
  .ant-steps-horizontal.ant-steps-label-horizontal > .ant-steps-item > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
    display: none;
  }
  .ant-steps-horizontal.ant-steps-label-horizontal.ant-steps-small .ant-steps-item-container .ant-steps-item-tail {
    position: absolute;
    top: 0;
    left: 12px;
    padding: 30px 0 6px;
  }
  .ant-steps-horizontal.ant-steps-label-horizontal.ant-steps-small .ant-steps-item-container .ant-steps-item-title {
    line-height: 24px;
  }
}
.ant-steps-label-vertical .ant-steps-item {
  overflow: visible;
}
.ant-steps-label-vertical .ant-steps-item-tail {
  margin-left: 58px;
  padding: 3.5px 24px;
}
.ant-steps-label-vertical .ant-steps-item-content {
  display: block;
  width: 116px;
  margin-top: 8px;
  text-align: center;
}
.ant-steps-label-vertical .ant-steps-item-icon {
  display: inline-block;
  margin-left: 42px;
}
.ant-steps-label-vertical .ant-steps-item-title {
  padding-right: 0;
}
.ant-steps-label-vertical .ant-steps-item-title::after {
  display: none;
}
.ant-steps-label-vertical .ant-steps-item-subtitle {
  display: block;
  margin-bottom: 4px;
  margin-left: 0;
  line-height: 1.5715;
}
.ant-steps-label-vertical.ant-steps-small:not(.ant-steps-dot) .ant-steps-item-icon {
  margin-left: 46px;
}
.ant-steps-dot .ant-steps-item-title,
.ant-steps-dot.ant-steps-small .ant-steps-item-title {
  line-height: 1.5715;
}
.ant-steps-dot .ant-steps-item-tail,
.ant-steps-dot.ant-steps-small .ant-steps-item-tail {
  top: 2px;
  width: 100%;
  margin: 0 0 0 70px;
  padding: 0;
}
.ant-steps-dot .ant-steps-item-tail::after,
.ant-steps-dot.ant-steps-small .ant-steps-item-tail::after {
  width: calc(100% - 20px);
  height: 3px;
  margin-left: 12px;
}
.ant-steps-dot .ant-steps-item:first-child .ant-steps-icon-dot,
.ant-steps-dot.ant-steps-small .ant-steps-item:first-child .ant-steps-icon-dot {
  left: 2px;
}
.ant-steps-dot .ant-steps-item-icon,
.ant-steps-dot.ant-steps-small .ant-steps-item-icon {
  width: 8px;
  height: 8px;
  margin-left: 67px;
  padding-right: 0;
  line-height: 8px;
  background: transparent;
  border: 0;
}
.ant-steps-dot .ant-steps-item-icon .ant-steps-icon-dot,
.ant-steps-dot.ant-steps-small .ant-steps-item-icon .ant-steps-icon-dot {
  position: relative;
  float: left;
  width: 100%;
  height: 100%;
  border-radius: 100px;
  transition: all 0.3s;
  /* expand hover area */
}
.ant-steps-dot .ant-steps-item-icon .ant-steps-icon-dot::after,
.ant-steps-dot.ant-steps-small .ant-steps-item-icon .ant-steps-icon-dot::after {
  position: absolute;
  top: -12px;
  left: -26px;
  width: 60px;
  height: 32px;
  background: rgba(0, 0, 0, 0.001);
  content: '';
}
.ant-steps-dot .ant-steps-item-content,
.ant-steps-dot.ant-steps-small .ant-steps-item-content {
  width: 140px;
}
.ant-steps-dot .ant-steps-item-process .ant-steps-item-icon,
.ant-steps-dot.ant-steps-small .ant-steps-item-process .ant-steps-item-icon {
  width: 10px;
  height: 10px;
  line-height: 10px;
}
.ant-steps-dot .ant-steps-item-process .ant-steps-item-icon .ant-steps-icon-dot,
.ant-steps-dot.ant-steps-small .ant-steps-item-process .ant-steps-item-icon .ant-steps-icon-dot {
  top: -1px;
}
.ant-steps-vertical.ant-steps-dot .ant-steps-item-icon {
  margin-top: 8px;
  margin-left: 0;
}
.ant-steps-vertical.ant-steps-dot .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail {
  top: 2px;
  left: -9px;
  margin: 0;
  padding: 22px 0 4px;
}
.ant-steps-vertical.ant-steps-dot .ant-steps-item:first-child .ant-steps-icon-dot {
  left: 0;
}
.ant-steps-vertical.ant-steps-dot .ant-steps-item-process .ant-steps-icon-dot {
  left: -2px;
}
.ant-steps-navigation {
  padding-top: 12px;
}
.ant-steps-navigation.ant-steps-small .ant-steps-item-container {
  margin-left: -12px;
}
.ant-steps-navigation .ant-steps-item {
  overflow: visible;
  text-align: center;
}
.ant-steps-navigation .ant-steps-item-container {
  display: inline-block;
  height: 100%;
  margin-left: -16px;
  padding-bottom: 12px;
  text-align: left;
  transition: opacity 0.3s;
}
.ant-steps-navigation .ant-steps-item-container .ant-steps-item-content {
  max-width: auto;
}
.ant-steps-navigation .ant-steps-item-container .ant-steps-item-title {
  max-width: 100%;
  padding-right: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ant-steps-navigation .ant-steps-item-container .ant-steps-item-title::after {
  display: none;
}
.ant-steps-navigation .ant-steps-item:not(.ant-steps-item-active) .ant-steps-item-container[role='button'] {
  cursor: pointer;
}
.ant-steps-navigation .ant-steps-item:not(.ant-steps-item-active) .ant-steps-item-container[role='button']:hover {
  opacity: 0.85;
}
.ant-steps-navigation .ant-steps-item:last-child {
  flex: 1;
}
.ant-steps-navigation .ant-steps-item:last-child::after {
  display: none;
}
.ant-steps-navigation .ant-steps-item::after {
  position: absolute;
  top: 50%;
  left: 100%;
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-top: -14px;
  margin-left: -2px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-bottom: none;
  border-left: none;
  transform: rotate(45deg);
  content: '';
}
.ant-steps-navigation .ant-steps-item::before {
  position: absolute;
  bottom: 0;
  left: 50%;
  display: inline-block;
  width: 0;
  height: 3px;
  background-color: #1890ff;
  transition: width 0.3s, left 0.3s;
  transition-timing-function: ease-out;
  content: '';
}
.ant-steps-navigation .ant-steps-item.ant-steps-item-active::before {
  left: 0;
  width: 100%;
}
@media (max-width: 480px) {
  .ant-steps-navigation > .ant-steps-item {
    margin-right: 0 !important;
  }
  .ant-steps-navigation > .ant-steps-item::before {
    display: none;
  }
  .ant-steps-navigation > .ant-steps-item.ant-steps-item-active::before {
    top: 0;
    right: 0;
    left: unset;
    display: block;
    width: 3px;
    height: calc(100% - 24px);
  }
  .ant-steps-navigation > .ant-steps-item::after {
    position: relative;
    top: -2px;
    left: 50%;
    display: block;
    width: 8px;
    height: 8px;
    margin-bottom: 8px;
    text-align: center;
    transform: rotate(135deg);
  }
  .ant-steps-navigation > .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail {
    visibility: hidden;
  }
}
.ant-steps-flex-not-supported.ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item {
  margin-left: -16px;
  padding-left: 16px;
  background: #fff;
}
.ant-steps-flex-not-supported.ant-steps-horizontal.ant-steps-label-horizontal.ant-steps-small .ant-steps-item {
  margin-left: -12px;
  padding-left: 12px;
}
.ant-steps-flex-not-supported.ant-steps-dot .ant-steps-item:last-child {
  overflow: hidden;
}
.ant-steps-flex-not-supported.ant-steps-dot .ant-steps-item:last-child .ant-steps-icon-dot::after {
  right: -200px;
  width: 200px;
}
.ant-steps-flex-not-supported.ant-steps-dot .ant-steps-item .ant-steps-icon-dot::before,
.ant-steps-flex-not-supported.ant-steps-dot .ant-steps-item .ant-steps-icon-dot::after {
  position: absolute;
  top: 0;
  left: -10px;
  width: 10px;
  height: 8px;
  background: #fff;
  content: '';
}
.ant-steps-flex-not-supported.ant-steps-dot .ant-steps-item .ant-steps-icon-dot::after {
  right: -10px;
  left: auto;
}
.ant-steps-flex-not-supported.ant-steps-dot .ant-steps-item-wait .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {
  background: #ccc;
}
`;export{z as S};
