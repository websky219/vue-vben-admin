import{cB as Q,cg as $,j as i,D as R,d as x,a9 as A,v as tt,x as et,z as w,P as l,cC as _,cD as O,h as I,o as nt,i as rt,l as D,w as ot}from"./index.de7a3c72.js";import{h as E,c as at,s as it}from"./_stringToArray.9f34c09e.js";import{b as st}from"./_baseProperty.74f89655.js";import{t as N}from"./toInteger.e48028d2.js";import{C as ut}from"./index.5cb114df.js";var ft=9007199254740991,ct=Math.floor;function z(t,e){var n="";if(!t||e<1||e>ft)return n;do e%2&&(n+=t),e=ct(e/2),e&&(t+=t);while(e);return n}var lt=st("length"),M="\\ud800-\\udfff",pt="\\u0300-\\u036f",dt="\\ufe20-\\ufe2f",mt="\\u20d0-\\u20ff",vt=pt+dt+mt,gt="\\ufe0e\\ufe0f",bt="["+M+"]",j="["+vt+"]",C="\\ud83c[\\udffb-\\udfff]",yt="(?:"+j+"|"+C+")",V="[^"+M+"]",F="(?:\\ud83c[\\udde6-\\uddff]){2}",H="[\\ud800-\\udbff][\\udc00-\\udfff]",ht="\\u200d",U=yt+"?",k="["+gt+"]?",wt="(?:"+ht+"(?:"+[V,F,H].join("|")+")"+k+U+")*",St=k+U+wt,xt="(?:"+[V+j+"?",j,F,H,bt].join("|")+")",L=RegExp(C+"(?="+C+")|"+xt+St,"g");function _t(t){for(var e=L.lastIndex=0;L.test(t);)++e;return e}function P(t){return E(t)?_t(t):lt(t)}var Ot=Math.ceil;function B(t,e){e=e===void 0?" ":Q(e);var n=e.length;if(n<2)return n?z(e,t):e;var r=z(e,Ot(t/P(e)));return E(e)?at(it(r),0,t).join(""):r.slice(0,t)}function jt(t,e,n){t=$(t),e=N(e);var r=e?P(t):0;return e&&r<e?t+B(e-r,n):t}function Ct(t,e,n){t=$(t),e=N(e);var r=e?P(t):0;return e&&r<e?B(e-r,n)+t:t}function G(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!R(t)}var J=function(e){var n=e.value,r=e.formatter,a=e.precision,p=e.decimalSeparator,s=e.groupSeparator,d=s===void 0?"":s,o=e.prefixCls,f;if(typeof r=="function")f=r({value:n});else{var m=String(n),c=m.match(/^(-?)(\d*)(\.(\d+))?$/);if(!c)f=m;else{var b=c[1],v=c[2]||"0",u=c[4]||"";v=v.replace(/\B(?=(\d{3})+(?!\d))/g,d),typeof a=="number"&&(u=jt(u,a,"0").slice(0,a)),u&&(u="".concat(p).concat(u)),f=[i("span",{key:"int",class:"".concat(o,"-content-value-int")},[b,v]),u&&i("span",{key:"decimal",class:"".concat(o,"-content-value-decimal")},G(u)?u:{default:function(){return[u]}})]}}return i("span",{class:"".concat(o,"-content-value")},G(f)?f:{default:function(){return[f]}})};J.displayName="StatisticNumber";function K(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function Pt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?K(Object(n),!0).forEach(function(r){Tt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function S(){return S=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},S.apply(this,arguments)}function T(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!R(t)}var W={prefixCls:l.string,decimalSeparator:l.string,groupSeparator:l.string,format:l.string,value:{type:[String,Number,Object]},valueStyle:l.style,valueRender:l.any,formatter:l.any,precision:l.number,prefix:l.VNodeChild,suffix:l.VNodeChild,title:l.VNodeChild,onFinish:l.func},g=x({name:"AStatistic",props:A(W,{decimalSeparator:".",groupSeparator:","}),setup:function(){return{configProvider:tt("configProvider",et)}},render:function(){var e=this.$props,n=e.prefixCls,r=e.value,a=r===void 0?0:r,p=e.valueStyle,s=e.valueRender,d=this.configProvider.getPrefixCls,o=d("statistic",n),f=w(this,"title"),m=w(this,"prefix"),c=w(this,"suffix"),b=w(this,"formatter",{},!1),v=S(S({},this.$props),{prefixCls:o,value:a,formatter:b}),u=i(J,Pt({"data-for-update":Date.now()},v),null);return s&&(u=s(u)),i("div",{class:o},[f&&i("div",{class:"".concat(o,"-title")},T(f)?f:{default:function(){return[f]}}),i("div",{style:p,class:"".concat(o,"-content")},[m&&i("span",{class:"".concat(o,"-content-prefix")},T(m)?m:{default:function(){return[m]}}),u,c&&i("span",{class:"".concat(o,"-content-suffix")},T(c)?c:{default:function(){return[c]}})])])}});function $t(t,e){return Dt(t)||It(t,e)||At(t,e)||Rt()}function Rt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function At(t,e){if(!!t){if(typeof t=="string")return q(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return q(t,e)}}function q(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function It(t,e){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(t)))){var n=[],r=!0,a=!1,p=void 0;try{for(var s=t[Symbol.iterator](),d;!(r=(d=s.next()).done)&&(n.push(d.value),!(e&&n.length===e));r=!0);}catch(o){a=!0,p=o}finally{try{!r&&s.return!=null&&s.return()}finally{if(a)throw p}}return n}}function Dt(t){if(Array.isArray(t))return t}var Et=[["Y",1e3*60*60*24*365],["M",1e3*60*60*24*30],["D",1e3*60*60*24],["H",1e3*60*60],["m",1e3*60],["s",1e3],["S",1]];function Nt(t,e){var n=t,r=/\[[^\]]*\]/g,a=(e.match(r)||[]).map(function(o){return o.slice(1,-1)}),p=e.replace(r,"[]"),s=Et.reduce(function(o,f){var m=$t(f,2),c=m[0],b=m[1];if(o.indexOf(c)!==-1){var v=Math.floor(n/b);return n-=v*b,o.replace(new RegExp("".concat(c,"+"),"g"),function(u){var y=u.length;return Ct(v.toString(),y,"0")})}return o},p),d=0;return s.replace(r,function(){var o=a[d];return d+=1,o})}function zt(t,e){var n=e.format,r=n===void 0?"":n,a=_(O)(t).valueOf(),p=_(O)().valueOf(),s=Math.max(a-p,0);return Nt(s,r)}function X(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function Mt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?X(Object(n),!0).forEach(function(r){Vt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Vt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(){return h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},h.apply(this,arguments)}var Ft=1e3/30;function Y(t){return _(O)(t).valueOf()}var Ht=x({name:"AStatisticCountdown",props:A(W,{format:"HH:mm:ss"}),setup:function(){return{countdownId:void 0}},mounted:function(){this.syncTimer()},updated:function(){this.syncTimer()},beforeUnmount:function(){this.stopTimer()},methods:{syncTimer:function(){var e=this.$props.value,n=Y(e);n>=Date.now()?this.startTimer():this.stopTimer()},startTimer:function(){var e=this;this.countdownId||(this.countdownId=window.setInterval(function(){e.$refs.statistic.$forceUpdate(),e.syncTimer()},Ft))},stopTimer:function(){var e=this.$props.value;if(this.countdownId){clearInterval(this.countdownId),this.countdownId=void 0;var n=Y(e);n<Date.now()&&this.$emit("finish")}},formatCountdown:function(e){var n=e.value,r=e.config,a=this.$props.format;return zt(n,h(h({},r),{format:a}))},valueRenderHtml:function(e){return e}},render:function(){return i(g,Mt({ref:"statistic"},h(h({},this.$props),{valueRender:this.valueRenderHtml,formatter:this.formatCountdown})),null)}});g.Countdown=Ht,g.install=function(t){return t.component(g.name,g),t.component(g.Countdown.name,g.Countdown),t};var Qt=`/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
/* stylelint-disable no-duplicate-selectors */
/* stylelint-disable */
/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
.ant-statistic {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
}
.ant-statistic-title {
  margin-bottom: 4px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}
.ant-statistic-content {
  color: rgba(0, 0, 0, 0.85);
  font-size: 24px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}
.ant-statistic-content-value-decimal {
  font-size: 16px;
}
.ant-statistic-content-prefix,
.ant-statistic-content-suffix {
  display: inline-block;
}
.ant-statistic-content-prefix {
  margin-right: 4px;
}
.ant-statistic-content-suffix {
  margin-left: 4px;
  font-size: 16px;
}
`,Ut='/assets/analysis-rise.8267119c.svg";var downSvg = "__VITE_ASSET__1f863ae1',Z=x({components:{Statistic:g,CountTo:ut},props:{info:{type:Object,default:null}},setup(){return{riseSvg:Ut,downSvg}}}),te=`.grow-card {
  display: flex;
  width: calc(100% - 12px);
  height: 158px;
  padding: 16px 16px 12px 16px;
  cursor: pointer;
  background: #fff;
  border-radius: 4px;
  box-shadow: 6px 6px 54px 0 rgba(0, 0, 0, 0.05);
  flex-direction: column;
}
.grow-card:hover {
  box-shadow: 6px 6px 54px 0 rgba(0, 0, 0, 0.1);
}
.grow-card-header {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.grow-card__title {
  font-family: PingFangSC-Regular;
  font-size: 16px;
  letter-spacing: 0;
  color: rgba(0, 0, 0, 0.85);
  opacity: 0.7;
}
.grow-card__info span {
  font-family: NeoSans;
  font-size: 26px;
  line-height: 38px;
}
.grow-card-footer {
  display: flex;
  width: 100%;
  margin-top: 24px;
  align-items: center;
}
.grow-card-footer .ant-statistic-content-value {
  color: #ED6F6F;
}
.grow-card-footer .ant-statistic-content-prefix svg {
  width: 0.98rem !important;
  height: 0.98rem !important;
}
.grow-card-footer.is-up .ant-statistic-content-value {
  color: #55D187;
}
.grow-card__mom {
  display: inline-block;
  padding-left: 10px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0;
  color: #606060;
}
`;const kt={class:"grow-card"},Lt={class:"grow-card-header"},Bt={class:"grow-card__info"},Gt={class:"grow-card__title"},Jt={class:"grow-card__mom"};function Kt(t,e,n,r,a,p){const s=I("CountTo"),d=I("Statistic");return nt(),rt("div",kt,[i("div",Lt,[i("div",Bt,[i("p",Gt,D(t.info.title),1),i(s,{prefix:"$",startVal:1,endVal:t.info.price},null,8,["endVal"])]),i("img",{src:t.info.icon},null,8,["src"])]),i("div",{class:["grow-card-footer",{"is-up":t.info.up}]},[i(d,{value:t.info.percent},{prefix:ot(()=>[i("img",{src:t.info.up?t.riseSvg:t.downSvg},null,8,["src"])]),_:1},8,["value"]),i("span",Jt,D(t.info.mom),1)],2)])}Z.render=Kt;export default Z;
