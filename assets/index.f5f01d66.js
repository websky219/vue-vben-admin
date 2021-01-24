import{d as $,O as I,v as D,x as O,j as f,y,D as _,B as T,G as E,P as o,X as H,z as P,H as M,J as V,a4 as W,a5 as L,n as Y,b9 as U,aa as G}from"./index.de7a3c72.js";import{P as J}from"./colors.e241e755.js";import{i as R}from"./isNumeric.2bec345d.js";function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},g.apply(this,arguments)}function Z(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!_(e)}function C(e){return e?e.toString().split("").reverse().map(function(t){var n=Number(t);return isNaN(n)?t:n}):[]}var X={prefixCls:o.string,count:o.any,component:o.string,title:o.oneOfType([o.number,o.string,null]),displayComponent:o.any,onAnimated:o.func},q=$({name:"ScrollNumber",mixins:[I],inheritAttrs:!1,props:X,emits:["animated"],setup:function(){return{configProvider:D("configProvider",O),lastCount:void 0,timeout:void 0}},data:function(){return{animateStarted:!0,sCount:this.count}},watch:{count:function(){this.lastCount=this.sCount,this.setState({animateStarted:!0})}},updated:function(){var t=this,n=this.animateStarted,a=this.count;n&&(this.clearTimeout(),this.timeout=setTimeout(function(){t.setState({animateStarted:!1,sCount:a},t.handleAnimated)}))},beforeUnmount:function(){this.clearTimeout()},methods:{clearTimeout:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0)}),getPositionByNum:function(t,n){var a=this.sCount,r=Math.abs(Number(a)),i=Math.abs(Number(this.lastCount)),s=Math.abs(C(a)[n]),c=Math.abs(C(this.lastCount)[n]);return this.animateStarted?10+t:r>i?s>=c?10+t:20+t:s<=c?10+t:t},handleAnimated:function(){this.$emit("animated")},renderNumberList:function(t,n){for(var a=[],r=0;r<30;r++)a.push(f("p",{key:r.toString(),class:y(n,{current:t===r})},[r%10]));return a},renderCurrentNumber:function(t,n,a){if(typeof n=="number"){var r=this.getPositionByNum(n,a),i=this.animateStarted||C(this.lastCount)[a]===void 0,s={transition:i?"none":void 0,msTransform:"translateY(".concat(-r*100,"%)"),WebkitTransform:"translateY(".concat(-r*100,"%)"),transform:"translateY(".concat(-r*100,"%)")};return f("span",{class:"".concat(t,"-only"),style:s,key:a},[this.renderNumberList(r,"".concat(t,"-only-unit"))])}return f("span",{key:"symbol",class:"".concat(t,"-symbol")},Z(n)?n:{default:function(){return[n]}})},renderNumberElement:function(t){var n=this,a=this.sCount;return a&&Number(a)%1==0?C(a).map(function(r,i){return n.renderCurrentNumber(t,r,i)}).reverse():a}},render:function(){var t,n=this.prefixCls,a=this.title,r=this.component,i=r===void 0?"sup":r,s=this.displayComponent,c=this.configProvider.getPrefixCls,u=c("scroll-number",n),b=this.$attrs,d=b.class,p=b.style,l=p===void 0?{}:p;if(s)return T(s,{class:y("".concat(u,"-custom-component"),s.props&&s.props.class)});var w=E(g(g({},this.$props),this.$attrs),["count","onAnimated","component","prefixCls","displayComponent"]),k=g({},l),h=g(g({},w),{title:a,style:k,class:y(u,d)});return l&&l.borderColor&&(h.style.boxShadow="0 0 0 1px ".concat(l.borderColor," inset")),f(i,h,Z(t=this.renderNumberElement(u))?t:{default:function(){return[t]}})}});function x(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?x=function(n){return typeof n}:x=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},x(e)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(){return S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},S.apply(this,arguments)}function B(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!_(e)}var F={count:o.VNodeChild,showZero:o.looseBool,overflowCount:o.number,dot:o.looseBool,prefixCls:o.string,scrollNumberPrefixCls:o.string,status:o.oneOf(Y("success","processing","default","error","warning")),color:o.string,text:o.VNodeChild,offset:o.arrayOf(o.oneOfType([String,Number])),numberStyle:o.style,title:o.string};function N(e){return J.indexOf(e)!==-1}var K=$({name:"ABadge",props:H(F,{showZero:!1,dot:!1,overflowCount:99}),setup:function(){return{configProvider:D("configProvider",O),badgeCount:void 0}},methods:{getNumberedDispayCount:function(){var t=this.$props.overflowCount,n=this.badgeCount,a=n>t?"".concat(t,"+"):n;return a},getDispayCount:function(){var t=this.isDot();return t?"":this.getNumberedDispayCount()},getScrollNumberTitle:function(){var t=this.$props.title,n=this.badgeCount;return t||(typeof n=="string"||typeof n=="number"?n:void 0)},getStyleWithOffset:function(){var t=this.$props,n=t.offset,a=t.numberStyle;return S(n?{right:"".concat(-parseInt(n[0],10),"px"),marginTop:R(n[1])?"".concat(n[1],"px"):n[1]}:{},a)},getBadgeClassName:function(t,n){var a,r=this.hasStatus();return y(t,(a={},m(a,"".concat(t,"-status"),r),m(a,"".concat(t,"-dot-status"),r&&this.dot&&!this.isZero()),m(a,"".concat(t,"-not-a-wrapper"),!n.length),a))},hasStatus:function(){var t=this.$props,n=t.status,a=t.color;return!!n||!!a},isZero:function(){var t=this.getNumberedDispayCount();return t==="0"||t===0},isDot:function(){var t=this.$props.dot,n=this.isZero();return t&&!n||this.hasStatus()},isHidden:function(){var t=this.$props.showZero,n=this.getDispayCount(),a=this.isZero(),r=this.isDot(),i=n==null||n==="";return(i||a&&!t)&&!r},renderStatusText:function(t){var n=P(this,"text"),a=this.isHidden();return a||!n?null:f("span",{class:"".concat(t,"-status-text")},B(n)?n:{default:function(){return[n]}})},renderDispayComponent:function(){var t=this.badgeCount,n=t;if(!(!n||x(n)!=="object"))return T(n,{style:this.getStyleWithOffset()},!1)},renderBadgeNumber:function(t,n){var a,r=this.$props,i=r.status,s=r.color,c=this.badgeCount,u=this.getDispayCount(),b=this.isDot(),d=this.isHidden(),p=(a={},m(a,"".concat(t,"-dot"),b),m(a,"".concat(t,"-count"),!b),m(a,"".concat(t,"-multiple-words"),!b&&c&&c.toString&&c.toString().length>1),m(a,"".concat(t,"-status-").concat(i),!!i),m(a,"".concat(t,"-status-").concat(s),N(s)),a),l=this.getStyleWithOffset();return s&&!N(s)&&(l=l||{},l.background=s),d?null:M(f(q,{prefixCls:n,"data-show":!d,class:p,count:u,displayComponent:this.renderDispayComponent(),title:this.getScrollNumberTitle(),style:l,key:"scrollNumber"},null),[[U,!d]])}},render:function(){var t,n=this.prefixCls,a=this.scrollNumberPrefixCls,r=this.status,i=this.color,s=P(this,"text"),c=this.configProvider.getPrefixCls,u=c("badge",n),b=c("scroll-number",a),d=V(this),p=P(this,"count");Array.isArray(p)&&(p=p[0]),this.badgeCount=p;var l=this.renderBadgeNumber(u,b),w=this.renderStatusText(u),k=y((t={},m(t,"".concat(u,"-status-dot"),this.hasStatus()),m(t,"".concat(u,"-status-").concat(r),!!r),m(t,"".concat(u,"-status-").concat(i),N(i)),t)),h={};if(i&&!N(i)&&(h.background=i),!d.length&&this.hasStatus()){var v=this.getStyleWithOffset(),z=v&&v.color;return f("span",{class:this.getBadgeClassName(u,d),style:v},[f("span",{class:k,style:h},null),f("span",{style:{color:z},class:"".concat(u,"-status-text")},B(s)?s:{default:function(){return[s]}})])}var j=W(d.length?"".concat(u,"-zoom"):"");return f("span",{class:this.getBadgeClassName(u,d)},[d,f(L,j,B(l)?l:{default:function(){return[l]}}),w])}}),Q=G(K),at=`/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
/* stylelint-disable no-duplicate-selectors */
/* stylelint-disable */
/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
.ant-badge {
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
  display: inline-block;
  color: unset;
  line-height: 1;
}
.ant-badge-count {
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  color: #fff;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  white-space: nowrap;
  text-align: center;
  background: #ff4d4f;
  border-radius: 10px;
  box-shadow: 0 0 0 1px #fff;
}
.ant-badge-count a,
.ant-badge-count a:hover {
  color: #fff;
}
.ant-badge-multiple-words {
  padding: 0 8px;
}
.ant-badge-dot {
  width: 6px;
  height: 6px;
  background: #ff4d4f;
  border-radius: 100%;
  box-shadow: 0 0 0 1px #fff;
}
.ant-badge-count,
.ant-badge-dot,
.ant-badge .ant-scroll-number-custom-component {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  transform: translate(50%, -50%);
  transform-origin: 100% 0%;
}
.ant-badge-status {
  line-height: inherit;
  vertical-align: baseline;
}
.ant-badge-status-dot {
  position: relative;
  top: -1px;
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: middle;
  border-radius: 50%;
}
.ant-badge-status-success {
  background-color: #52c41a;
}
.ant-badge-status-processing {
  position: relative;
  background-color: #1890ff;
}
.ant-badge-status-processing::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid #1890ff;
  border-radius: 50%;
  -webkit-animation: antStatusProcessing 1.2s infinite ease-in-out;
          animation: antStatusProcessing 1.2s infinite ease-in-out;
  content: '';
}
.ant-badge-status-default {
  background-color: #d9d9d9;
}
.ant-badge-status-error {
  background-color: #ff4d4f;
}
.ant-badge-status-warning {
  background-color: #faad14;
}
.ant-badge-status-pink {
  background: #eb2f96;
}
.ant-badge-status-magenta {
  background: #eb2f96;
}
.ant-badge-status-red {
  background: #f5222d;
}
.ant-badge-status-volcano {
  background: #fa541c;
}
.ant-badge-status-orange {
  background: #fa8c16;
}
.ant-badge-status-yellow {
  background: #fadb14;
}
.ant-badge-status-gold {
  background: #faad14;
}
.ant-badge-status-cyan {
  background: #13c2c2;
}
.ant-badge-status-lime {
  background: #a0d911;
}
.ant-badge-status-green {
  background: #52c41a;
}
.ant-badge-status-blue {
  background: #1890ff;
}
.ant-badge-status-geekblue {
  background: #2f54eb;
}
.ant-badge-status-purple {
  background: #722ed1;
}
.ant-badge-status-text {
  margin-left: 8px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
}
.ant-badge-zoom-appear,
.ant-badge-zoom-enter {
  -webkit-animation: antZoomBadgeIn 0.3s cubic-bezier(0.12, 0.4, 0.29, 1.46);
          animation: antZoomBadgeIn 0.3s cubic-bezier(0.12, 0.4, 0.29, 1.46);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}
.ant-badge-zoom-leave {
  -webkit-animation: antZoomBadgeOut 0.3s cubic-bezier(0.71, -0.46, 0.88, 0.6);
          animation: antZoomBadgeOut 0.3s cubic-bezier(0.71, -0.46, 0.88, 0.6);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}
.ant-badge-not-a-wrapper:not(.ant-badge-status) {
  vertical-align: middle;
}
.ant-badge-not-a-wrapper .ant-scroll-number {
  position: relative;
  top: auto;
  display: block;
}
.ant-badge-not-a-wrapper .ant-badge-count {
  transform: none;
}
@-webkit-keyframes antStatusProcessing {
  0% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  100% {
    transform: scale(2.4);
    opacity: 0;
  }
}
@keyframes antStatusProcessing {
  0% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  100% {
    transform: scale(2.4);
    opacity: 0;
  }
}
.ant-scroll-number {
  overflow: hidden;
}
.ant-scroll-number-only {
  display: inline-block;
  height: 20px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-scroll-number-only > p.ant-scroll-number-only-unit {
  height: 20px;
  margin: 0;
}
.ant-scroll-number-symbol {
  vertical-align: top;
}
@-webkit-keyframes antZoomBadgeIn {
  0% {
    transform: scale(0) translate(50%, -50%);
    opacity: 0;
  }
  100% {
    transform: scale(1) translate(50%, -50%);
  }
}
@keyframes antZoomBadgeIn {
  0% {
    transform: scale(0) translate(50%, -50%);
    opacity: 0;
  }
  100% {
    transform: scale(1) translate(50%, -50%);
  }
}
@-webkit-keyframes antZoomBadgeOut {
  0% {
    transform: scale(1) translate(50%, -50%);
  }
  100% {
    transform: scale(0) translate(50%, -50%);
    opacity: 0;
  }
}
@keyframes antZoomBadgeOut {
  0% {
    transform: scale(1) translate(50%, -50%);
  }
  100% {
    transform: scale(0) translate(50%, -50%);
    opacity: 0;
  }
}
`;export{Q as B};
