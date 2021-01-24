import{d as C,P as f,v as j,x as A,z as S,j as s,D,J as R,F as $,c2 as M,R as z,$ as V}from"./index.de7a3c72.js";import{D as F,M as I}from"./index.55f43c00.js";import{D as U}from"./DownOutlined.2e949c36.js";function g(r){return typeof r=="function"||Object.prototype.toString.call(r)==="[object Object]"&&!D(r)}var P=C({name:"ABreadcrumbItem",__ANT_BREADCRUMB_ITEM:!0,props:{prefixCls:f.string,href:f.string,separator:f.VNodeChild.def("/"),overlay:f.VNodeChild},setup:function(){return{configProvider:j("configProvider",A)}},methods:{renderBreadcrumbNode:function(e,t){var n=S(this,"overlay");if(n){var a;return s(F,{overlay:n,placement:"bottomCenter"},g(a=s("span",{class:"".concat(t,"-overlay-link")},[e,s(U,null,null)]))?a:{default:function(){return[a]}})}return e}},render:function(){var e=this.prefixCls,t=this.configProvider.getPrefixCls,n=t("breadcrumb",e),a=S(this,"separator"),o=R(this),i;return $(this,"href")?i=s("a",{class:"".concat(n,"-link")},g(o)?o:{default:function(){return[o]}}):i=s("span",{class:"".concat(n,"-link")},g(o)?o:{default:function(){return[o]}}),i=this.renderBreadcrumbNode(i,n),o?s("span",null,[i,a&&a!==""&&s("span",{class:"".concat(n,"-separator")},g(a)?a:{default:function(){return[a]}})]):null}});function _(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_=function(t){return typeof t}:_=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(r)}function K(r){return W(r)||L(r)||J(r)||H()}function H(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(r,e){if(!!r){if(typeof r=="string")return B(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return B(r,e)}}function L(r){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(r))return Array.from(r)}function W(r){if(Array.isArray(r))return B(r)}function B(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function p(r){return typeof r=="function"||Object.prototype.toString.call(r)==="[object Object]"&&!D(r)}var q={prefixCls:f.string,routes:{type:Array},params:f.any,separator:f.VNodeChild,itemRender:{type:Function}};function G(r,e){if(!r.breadcrumbName)return null;var t=Object.keys(e).join("|"),n=r.breadcrumbName.replace(new RegExp(":(".concat(t,")"),"g"),function(a,o){return e[o]||a});return n}function T(r){var e=r.route,t=r.params,n=r.routes,a=r.paths,o=n.indexOf(e)===n.length-1,i=G(e,t);return o?s("span",null,p(i)?i:{default:function(){return[i]}}):s("a",{href:"#/".concat(a.join("/"))},p(i)?i:{default:function(){return[i]}})}var m=C({name:"ABreadcrumb",props:q,setup:function(){return{configProvider:j("configProvider",A)}},methods:{getPath:function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach(function(n){e=e.replace(":".concat(n),t[n])}),e},addChildPath:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,a=K(e),o=this.getPath(t,n);return o&&a.push(o),a},genForRoutes:function(e){var t=this,n=e.routes,a=n===void 0?[]:n,o=e.params,i=o===void 0?{}:o,u=e.separator,v=e.itemRender,b=v===void 0?T:v,y=[];return a.map(function(l){var c,h=t.getPath(l.path,i);h&&y.push(h);var N=[].concat(y),E=null;if(l.children&&l.children.length){var O;E=s(I,null,p(O=l.children.map(function(d){var x;return s(I.Item,{key:d.path||d.breadcrumbName},p(x=b({route:d,params:i,routes:a,paths:t.addChildPath(N,d.path,i)}))?x:{default:function(){return[x]}})}))?O:{default:function(){return[O]}})}return s(P,{overlay:E,separator:u,key:h||l.breadcrumbName},p(c=b({route:l,params:i,routes:a,paths:N}))?c:{default:function(){return[c]}})})}},render:function(){var e,t=this.prefixCls,n=this.routes,a=this.params,o=a===void 0?{}:a,i=this.$slots,u=this.configProvider.getPrefixCls,v=u("breadcrumb",t),b=M(R(this)),y=S(this,"separator"),l=this.itemRender||i.itemRender||T;return n&&n.length>0?e=this.genForRoutes({routes:n,params:o,separator:y,itemRender:l}):b.length&&(e=b.map(function(c,h){return z(_(c.type)==="object"&&(c.type.__ANT_BREADCRUMB_ITEM||c.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),V(c,{separator:y,key:h})})),s("div",{class:v},p(e)?e:{default:function(){return[e]}})}});function k(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable})),t.push.apply(t,n)}return t}function Q(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?k(Object(t),!0).forEach(function(n){X(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function X(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Y=function(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(r);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(r,n[a])&&(t[n[a]]=r[n[a]]);return t},w=C({name:"ABreadcrumbSeparator",__ANT_BREADCRUMB_SEPARATOR:!0,inheritAttrs:!1,props:{prefixCls:f.string},setup:function(){return{configProvider:j("configProvider",A)}},render:function(){var e=this.prefixCls,t=this.$attrs;t.separator;var n=t.class,a=Y(t,["separator","class"]),o=this.configProvider.getPrefixCls,i=o("breadcrumb",e),u=R(this);return s("span",Q({class:["".concat(i,"-separator"),n]},a),[u.length>0?u:"/"])}});m.Item=P,m.Separator=w,m.install=function(r){return r.component(m.name,m),r.component(P.name,P),r.component(w.name,w),r};var nr=`/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
/* stylelint-disable no-duplicate-selectors */
/* stylelint-disable */
/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
.ant-breadcrumb {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}
.ant-breadcrumb .anticon {
  font-size: 14px;
}
.ant-breadcrumb a {
  color: rgba(0, 0, 0, 0.45);
  transition: color 0.3s;
}
.ant-breadcrumb a:hover {
  color: #40a9ff;
}
.ant-breadcrumb > span:last-child {
  color: rgba(0, 0, 0, 0.85);
}
.ant-breadcrumb > span:last-child a {
  color: rgba(0, 0, 0, 0.85);
}
.ant-breadcrumb > span:last-child .ant-breadcrumb-separator {
  display: none;
}
.ant-breadcrumb-separator {
  margin: 0 8px;
  color: rgba(0, 0, 0, 0.45);
}
.ant-breadcrumb-link > .anticon + span {
  margin-left: 4px;
}
.ant-breadcrumb-overlay-link > .anticon {
  margin-left: 4px;
}
`;export{m as B};
