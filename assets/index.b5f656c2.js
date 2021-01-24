var ee=Object.assign;var ke;import{P as l,n as ne,d as m,a9 as ze,y as H,j as f,D as Ce,aa as Te,S as M,X as Pe,v as te,x as Oe,F as Be,aG as u,aN as A,a0 as O,h as k,o as v,i as b,bw as ae,b2 as re,bP as S,e as z,bQ as Ae,bR as Ie,bS as He,bT as Re,bU as We,b1 as $,k as D,aL as Le,aM as je,w as C,aO as oe,m as Ee,l as Me,r as _,a_ as De,a as Fe,q as se,bd as ie,aE as Ue,T as F,bV as Ne,H as Ve,b9 as Xe,an as qe,bW as Ye,b0 as Ge,E as U,s as Ke,p as Qe,bs as Je,bX as le}from"./index.de7a3c72.js";import{C as Ze}from"./index.cf88fb23.js";import{R as en}from"./RightOutlined.dcad5eff.js";import"./index.95c10fda.js";import{u as N}from"./useTimeout.5494657f.js";import{o as ce,b as ue}from"./domUtils.aa6aef94.js";import{u as pe}from"./useScrollTo.3c6228cf.js";function R(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var de={prefixCls:l.string,size:l.oneOfType([l.oneOf(ne("large","small","default")),l.number]),shape:l.oneOf(ne("circle","square"))},nn=l.shape(de).loose,tn=m({props:ze(de,{size:"large"}),render:function(){var n,t,a=this.$props,r=a.prefixCls,o=a.size,s=a.shape,c=H((n={},R(n,"".concat(r,"-lg"),o==="large"),R(n,"".concat(r,"-sm"),o==="small"),n)),i=H((t={},R(t,"".concat(r,"-circle"),s==="circle"),R(t,"".concat(r,"-square"),s==="square"),t)),g=typeof o=="number"?{width:"".concat(o,"px"),height:"".concat(o,"px"),lineHeight:"".concat(o,"px")}:{};return f("span",{class:H(r,c,i),style:g},null)}}),fe={prefixCls:l.string,width:l.oneOfType([l.number,l.string])},an=l.shape(fe),rn=m({props:fe,render:function(){var n=this.$props,t=n.prefixCls,a=n.width,r=typeof a=="number"?"".concat(a,"px"):a;return f("h3",{class:t,style:{width:r}},null)}});function on(e){return un(e)||cn(e)||ln(e)||sn()}function sn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ln(e,n){if(!!e){if(typeof e=="string")return V(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return V(e,n)}}function cn(e){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(e))return Array.from(e)}function un(e){if(Array.isArray(e))return V(e)}function V(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function pn(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ce(e)}var ve=l.oneOfType([l.number,l.string]),be={prefixCls:l.string,width:l.oneOfType([ve,l.arrayOf(ve)]),rows:l.number},dn=l.shape(be),fn=m({props:be,methods:{getWidth:function(n){var t=this.width,a=this.rows,r=a===void 0?2:a;if(Array.isArray(t))return t[n];if(r-1===n)return t}},render:function(){var n=this,t=this.$props,a=t.prefixCls,r=t.rows,o=on(Array(r)).map(function(s,c){var i=n.getWidth(c);return f("li",{key:c,style:{width:typeof i=="number"?"".concat(i,"px"):i}},null)});return f("ul",{class:a},pn(o)?o:{default:function(){return[o]}})}});function ge(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function T(){return T=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},T.apply(this,arguments)}function W(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?W=function(t){return typeof t}:W=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},W(e)}var vn={active:l.looseBool,loading:l.looseBool,prefixCls:l.string,children:l.any,avatar:M(l.oneOfType([l.string,nn,l.looseBool])),title:M(l.oneOfType([l.looseBool,l.string,an])),paragraph:M(l.oneOfType([l.looseBool,l.string,dn]))};function X(e){return e&&W(e)==="object"?e:{}}function bn(e,n){return e&&!n?{shape:"square"}:{shape:"circle"}}function gn(e,n){return!e&&n?{width:"38%"}:e&&n?{width:"50%"}:{}}function hn(e,n){var t={};return(!e||!n)&&(t.width="61%"),!e&&n?t.rows=3:t.rows=2,t}var mn=m({name:"ASkeleton",props:Pe(vn,{avatar:!1,title:!0,paragraph:!0}),setup:function(){return{configProvider:te("configProvider",Oe)}},render:function(){var n,t,a=this.$props,r=a.prefixCls,o=a.loading,s=a.avatar,c=a.title,i=a.paragraph,g=a.active,h=this.configProvider.getPrefixCls,d=h("skeleton",r);if(o||!Be(this,"loading")){var p,y=!!s||s==="",w=!!c,x=!!i,P;if(y){var I=T(T({prefixCls:"".concat(d,"-avatar")},bn(w,x)),X(s));P=f("div",{class:"".concat(d,"-header")},[f(tn,I,null)])}var B;if(w||x){var J;if(w){var $e=T(T({prefixCls:"".concat(d,"-title")},gn(y,x)),X(c));J=f(rn,$e,null)}var Z;if(x){var xe=T(T({prefixCls:"".concat(d,"-paragraph")},hn(y,w)),X(i));Z=f(fn,xe,null)}B=f("div",{class:"".concat(d,"-content")},[J,Z])}var Se=H(d,(p={},ge(p,"".concat(d,"-with-avatar"),y),ge(p,"".concat(d,"-active"),g),p));return f("div",{class:Se},[P,B])}return(t=(n=this.$slots).default)===null||t===void 0?void 0:t.call(n)}}),q=Te(mn),Gn=`/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
/* stylelint-disable no-duplicate-selectors */
/* stylelint-disable */
/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
.ant-skeleton {
  display: table;
  width: 100%;
}
.ant-skeleton-header {
  display: table-cell;
  padding-right: 16px;
  vertical-align: top;
}
.ant-skeleton-header .ant-skeleton-avatar {
  display: inline-block;
  vertical-align: top;
  background: #f2f2f2;
  width: 32px;
  height: 32px;
  line-height: 32px;
}
.ant-skeleton-header .ant-skeleton-avatar.ant-skeleton-avatar-circle {
  border-radius: 50%;
}
.ant-skeleton-header .ant-skeleton-avatar-lg {
  width: 40px;
  height: 40px;
  line-height: 40px;
}
.ant-skeleton-header .ant-skeleton-avatar-lg.ant-skeleton-avatar-circle {
  border-radius: 50%;
}
.ant-skeleton-header .ant-skeleton-avatar-sm {
  width: 24px;
  height: 24px;
  line-height: 24px;
}
.ant-skeleton-header .ant-skeleton-avatar-sm.ant-skeleton-avatar-circle {
  border-radius: 50%;
}
.ant-skeleton-content {
  display: table-cell;
  width: 100%;
  vertical-align: top;
}
.ant-skeleton-content .ant-skeleton-title {
  width: 100%;
  height: 16px;
  margin-top: 16px;
  background: #f2f2f2;
}
.ant-skeleton-content .ant-skeleton-title + .ant-skeleton-paragraph {
  margin-top: 24px;
}
.ant-skeleton-content .ant-skeleton-paragraph {
  padding: 0;
}
.ant-skeleton-content .ant-skeleton-paragraph > li {
  width: 100%;
  height: 16px;
  list-style: none;
  background: #f2f2f2;
}
.ant-skeleton-content .ant-skeleton-paragraph > li:last-child:not(:first-child):not(:nth-child(2)) {
  width: 61%;
}
.ant-skeleton-content .ant-skeleton-paragraph > li + li {
  margin-top: 16px;
}
.ant-skeleton-with-avatar .ant-skeleton-content .ant-skeleton-title {
  margin-top: 12px;
}
.ant-skeleton-with-avatar .ant-skeleton-content .ant-skeleton-title + .ant-skeleton-paragraph {
  margin-top: 28px;
}
.ant-skeleton.ant-skeleton-active .ant-skeleton-content .ant-skeleton-title,
.ant-skeleton.ant-skeleton-active .ant-skeleton-content .ant-skeleton-paragraph > li {
  background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
  background-size: 400% 100%;
  -webkit-animation: ant-skeleton-loading 1.4s ease infinite;
          animation: ant-skeleton-loading 1.4s ease infinite;
}
.ant-skeleton.ant-skeleton-active .ant-skeleton-avatar {
  background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
  background-size: 400% 100%;
  -webkit-animation: ant-skeleton-loading 1.4s ease infinite;
          animation: ant-skeleton-loading 1.4s ease infinite;
}
@-webkit-keyframes ant-skeleton-loading {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
@keyframes ant-skeleton-loading {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
`,L=m({name:"BasicArrow",components:{RightOutlined:en},props:{expand:u.bool,top:u.bool,bottom:u.bool,inset:u.bool},setup(e){const{prefixCls:n}=A("basic-arrow");return{getClass:O(()=>{const{expand:a,top:r,bottom:o,inset:s}=e;return[n,{[`${n}--active`]:a,top:r,inset:s,bottom:o}]})}}}),Kn=`.vben-basic-arrow[data-v-44d629a5] {
  display: inline-block;
  transform: rotate(0deg);
  transition: all 0.3s ease 0.1s;
  transform-origin: center center;
}
.vben-basic-arrow--active[data-v-44d629a5] {
  transform: rotate(90deg);
}
.vben-basic-arrow.inset[data-v-44d629a5] {
  line-height: 0px;
}
.vben-basic-arrow.top[data-v-44d629a5] {
  transform: rotate(-90deg);
}
.vben-basic-arrow.bottom[data-v-44d629a5] {
  transform: rotate(90deg);
}
.vben-basic-arrow.top.vben-basic-arrow--active[data-v-44d629a5] {
  transform: rotate(90deg);
}
.vben-basic-arrow.bottom.vben-basic-arrow--active[data-v-44d629a5] {
  transform: rotate(-90deg);
}
`;const _n=ae("data-v-44d629a5"),yn=_n((e,n,t,a,r,o)=>{const s=k("RightOutlined");return v(),b("span",{class:e.getClass},[f(s)],2)});L.render=yn,L.__scopeId="data-v-44d629a5";var he=m({name:"BasicHelp",components:{Tooltip:re},props:{maxWidth:u.string.def("600px"),showIndex:u.bool,color:u.string.def("#ffffff"),fontSize:u.string.def("14px"),placement:u.string.def("right"),absolute:u.bool,text:{type:[Array,String]},position:{type:[Object],default:()=>({position:"absolute",left:0,bottom:0})}},setup(e,{slots:n}){const{prefixCls:t}=A("basic-help"),a=O(()=>({maxWidth:e.maxWidth})),r=O(()=>({color:e.color,fontSize:e.fontSize})),o=O(()=>e.absolute?e.position:{}),s=()=>{const c=e.text;return Ie(c)?S("p",c):He(c)?c.map((i,g)=>S("p",{key:i},[e.showIndex?`${g+1}. `:"",i])):null};return()=>S(re,{title:S("div",{style:z(r)},[s()]),overlayClassName:`${t}__wrap`,autoAdjustOverflow:!0,overlayStyle:z(a),placement:e.placement,getPopupContainer:()=>Ae()},{default:()=>S("span",{class:t,style:z(o)},Re(n)||S(We))})}}),Qn=`.vben-basic-help {
  display: inline-block;
  margin-left: 6px;
  font-size: 14px;
  color: #909399;
  cursor: pointer;
}
.vben-basic-help:hover {
  color: #018ffb;
}
.vben-basic-help__wrap p {
  margin-bottom: 0;
}
`,j=m({name:"BasicTitle",components:{BasicHelp:he},props:{helpMessage:{type:[String,Array],default:""},span:u.bool},setup(){const{prefixCls:e}=A("basic-title");return{prefixCls:e}}}),Jn=`.vben-basic-title[data-v-47df45bb] {
  position: relative;
  display: flex;
  padding-left: 7px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.vben-basic-title.show-span[data-v-47df45bb]::before {
  position: absolute;
  top: 4px;
  left: 0;
  width: 3px;
  height: 16px;
  margin-right: 4px;
  background: #018ffb;
  content: '';
}
.vben-basic-title__help[data-v-47df45bb] {
  margin-left: 10px;
}
`;const wn=ae("data-v-47df45bb"),kn=wn((e,n,t,a,r,o)=>{const s=k("BasicHelp");return v(),b("span",{class:[e.prefixCls,{"show-span":e.span&&e.$slots.default}]},[$(e.$slots,"default"),e.helpMessage?(v(),b(s,{key:0,class:`${e.prefixCls}__help`,text:e.helpMessage},null,8,["class","text"])):D("",!0)],2)});j.render=kn,j.__scopeId="data-v-47df45bb";const $n=Le(()=>je(()=>import("./BasicHelp.54ffda78.js"),["/assets/BasicHelp.54ffda78.js","/assets/index.de7a3c72.js","/assets/index.3100f8d1.css","/assets/index.cf88fb23.js","/assets/index.121e7eba.css","/assets/domUtils.aa6aef94.js","/assets/_stringToArray.9f34c09e.js","/assets/RightOutlined.dcad5eff.js","/assets/index.95c10fda.js","/assets/index.20066e29.css","/assets/useTimeout.5494657f.js","/assets/useScrollTo.3c6228cf.js","/assets/animation.29409132.js"]));var me=m({inheritAttrs:!1,components:{BasicArrow:L,BasicTitle:j},props:{prefixCls:String}});function xn(e,n,t,a,r,o){const s=k("BasicTitle"),c=k("BasicArrow");return v(),b("div",{class:`${e.prefixCls}__header`},[f(s,{helpMessage:e.$attrs.helpMessage},{default:C(()=>[e.$attrs.title?(v(),b(oe,{key:0},[Ee(Me(e.$attrs.title),1)],64)):$(e.$slots,"title",{key:1})]),_:1},8,["helpMessage"]),f("div",{class:`${e.prefixCls}__action`},[$(e.$slots,"action"),e.$attrs.canExpan?(v(),b(c,{key:0,top:"",expand:e.$attrs.show,onClick:n[1]||(n[1]=i=>e.$emit("expand"))},null,8,["expand"])):D("",!0)],2)],2)}me.render=xn;function Sn({target:e,root:n,onIntersect:t,rootMargin:a="0px",threshold:r=.1}){let o=()=>{};const s=_(null),c=De(()=>{o(),s.value=new IntersectionObserver(t,{root:n?n.value:null,rootMargin:a,threshold:r});const i=e.value;i&&s.value.observe(i),o=()=>{s.value&&(s.value.disconnect(),e.value&&s.value.unobserve(e.value))}});return{observer:s,stop:()=>{o(),c()}}}var E=m({name:"LazyContainer",inheritAttrs:!1,components:{Skeleton:q},props:{timeout:u.number,viewport:{type:typeof window!="undefined"?window.HTMLElement:Object,default:()=>null},threshold:u.string.def("0px"),direction:u.oneOf(["vertical","horizontal"]).def("vertical"),tag:u.string.def("div"),maxWaitingTime:u.number.def(80),transitionName:u.string.def("lazy-container")},emits:["init"],setup(e,{emit:n}){const t=_(null),a=Fe({isInit:!1,loading:!1,intersectionObserverInstance:null}),{prefixCls:r}=A("lazy-container");se(()=>{o(),c()});function o(){const{timeout:i}=e;i&&N(()=>{s()},i)}function s(){a.loading=!0,N(()=>{a.isInit||(a.isInit=!0,n("init"))},e.maxWaitingTime||80)}function c(){const{timeout:i,direction:g,threshold:h}=e;if(i)return;let d="0px";switch(g){case"vertical":d=`${h} 0px`;break;case"horizontal":d=`0px ${h}`;break}try{const{stop:p,observer:y}=Sn({rootMargin:d,target:ie(t.value,"$el"),onIntersect:w=>{(w[0].isIntersecting||w[0].intersectionRatio)&&(s(),y&&p())},root:ie(e,"viewport")})}catch(p){s()}}return ee({elRef:t,prefixCls:r},Ue(a))}}),Zn=`.vben-lazy-container {
  width: 100%;
  height: 100%;
}
`;const zn={key:"component"},Cn={key:"skeleton",name:"lazy-skeleton"};function Tn(e,n,t,a,r,o){const s=k("Skeleton");return v(),b(Ne,F({class:e.prefixCls},e.$attrs,{ref:"elRef",name:e.transitionName,tag:e.tag,mode:"out-in"}),{default:C(()=>[e.isInit?(v(),b("div",zn,[$(e.$slots,"default",{loading:e.loading})])):(v(),b("div",Cn,[e.$slots.skeleton?$(e.$slots,"skeleton",{key:0}):(v(),b(s,{key:1}))]))]),_:1},16,["class","name","tag"])}E.render=Tn;function Pn(){const e=document.createEvent("HTMLEvents");e.initEvent("resize",!0,!0),e.eventType="message",window.dispatchEvent(e)}var Y=m({name:"CollapseContainer",components:{Skeleton:q,LazyContainer:E,CollapseHeader:me,CollapseTransition:Ze},props:{title:u.string.def(""),canExpan:u.bool.def(!0),helpMessage:{type:[Array,String],default:""},triggerWindowResize:u.bool,loading:u.bool,lazy:u.bool,lazyTime:u.number.def(0)},setup(e){const n=_(!0),{prefixCls:t}=A("collapse-container");function a(){n.value=!n.value,e.triggerWindowResize&&N(Pn,200)}return{show:n,handleExpand:a,prefixCls:t}}}),et=`.vben-collapse-container {
  background: #fff;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
}
.vben-collapse-container__header {
  display: flex;
  height: 32px;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;
}
.vben-collapse-container__action {
  display: flex;
  text-align: right;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
}
`;function On(e,n,t,a,r,o){const s=k("CollapseHeader"),c=k("Skeleton"),i=k("LazyContainer"),g=k("CollapseTransition");return v(),b("div",{class:["p-2",e.prefixCls]},[f(s,F(e.$props,{prefixCls:e.prefixCls,show:e.show,onExpand:e.handleExpand}),{title:C(()=>[$(e.$slots,"title")]),_:1},16,["prefixCls","show","onExpand"]),f(g,{enable:e.canExpan},{default:C(()=>[e.loading?(v(),b(c,{key:0})):Ve((v(),b("div",{key:1,class:`${e.prefixCls}__body`},[e.lazy?(v(),b(i,{key:0,timeout:e.lazyTime},{skeleton:C(()=>[$(e.$slots,"lazySkeleton")]),default:C(()=>[$(e.$slots,"default")]),_:3},8,["timeout"])):$(e.$slots,"default",{key:1})],2)),[[Xe,e.show]])]),_:1},8,["enable"])],2)}Y.render=On;const Bn=typeof window=="undefined";function An(e){for(const n of e){const t=n.target.__resizeListeners__||[];t.length&&t.forEach(a=>{a()})}}function _e(e,n){Bn||(e.__resizeListeners__||(e.__resizeListeners__=[],e.__ro__=new qe(An),e.__ro__.observe(e)),e.__resizeListeners__.push(n))}function ye(e,n){!e||!e.__resizeListeners__||(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(n),1),e.__resizeListeners__.length||e.__ro__.disconnect())}var we={table:{fetchSetting:{pageField:"page",sizeField:"pageSize",listField:"items",totalField:"total"},pageSizeOptions:["10","50","80","100"],defaultPageSize:10,defaultSortFn:e=>{const{field:n,order:t}=e;return{field:n,order:t}},defaultFilterFn:e=>e},scrollbar:{native:!1}};const In={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}};function Hn({move:e,size:n,bar:t}){const a={},r=`translate${t.axis}(${e}%)`;return a[t.size]=n,a.transform=r,a.msTransform=r,a.webkitTransform=r,a}function Rn(e,n){return Object.assign(e,n)}function Wn(e){const n={};for(let t=0;t<e.length;t++)e[t]&&Rn(n,e[t]);return n}var Ln=m({name:"Bar",props:{vertical:Boolean,size:String,move:Number},setup(e){const n=Ge(),t=_(null),a=te("scroll-bar-wrap",{}),r=O(()=>In[e.vertical?"vertical":"horizontal"]),o=_({}),s=_(null),c=p=>{p.ctrlKey||p.button===2||(g(p),o.value[r.value.axis]=p.currentTarget[r.value.offset]-(p[r.value.client]-p.currentTarget.getBoundingClientRect()[r.value.direction]))},i=p=>{var P;const y=Math.abs(p.target.getBoundingClientRect()[r.value.direction]-p[r.value.client]),w=t.value[r.value.offset]/2,x=(y-w)*100/((P=n==null?void 0:n.vnode.el)==null?void 0:P[r.value.offset]);a.value[r.value.scroll]=x*a.value[r.value.scrollSize]/100},g=p=>{p.stopImmediatePropagation(),s.value=!0,ue(document,"mousemove",h),ue(document,"mouseup",d),document.onselectstart=()=>!1},h=p=>{var I,B;if(s.value===!1)return;const y=o.value[r.value.axis];if(!y)return;const w=(((I=n==null?void 0:n.vnode.el)==null?void 0:I.getBoundingClientRect()[r.value.direction])-p[r.value.client])*-1,x=t.value[r.value.offset]-y,P=(w-x)*100/((B=n==null?void 0:n.vnode.el)==null?void 0:B[r.value.offset]);a.value[r.value.scroll]=P*a.value[r.value.scrollSize]/100};function d(){s.value=!1,o.value[r.value.axis]=0,ce(document,"mousemove",h),document.onselectstart=null}return Ye(()=>{ce(document,"mouseup",d)}),()=>S("div",{class:["scrollbar__bar","is-"+r.value.key],onMousedown:i},S("div",{ref:t,class:"scrollbar__thumb",onMousedown:c,style:Hn({size:e.size,move:e.move,bar:r.value})}))}});const{scrollbar:G}=we;var K=m({name:"Scrollbar",components:{Bar:Ln},props:{native:{type:Boolean,default:(ke=G==null?void 0:G.native)!=null?ke:!1},wrapStyle:{type:[String,Array],default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array],default:""},noresize:Boolean,tag:{type:String,default:"div"}},setup(e){const n=_("0"),t=_("0"),a=_(0),r=_(0),o=_(null),s=_(null);Qe("scroll-bar-wrap",o);const c=()=>{e.native||(r.value=o.value.scrollTop*100/o.value.clientHeight,a.value=o.value.scrollLeft*100/o.value.clientWidth)},i=()=>{if(!o.value)return;const h=o.value.clientHeight*100/o.value.scrollHeight,d=o.value.clientWidth*100/o.value.scrollWidth;t.value=h<100?h+"%":"",n.value=d<100?d+"%":""};se(()=>{e.native||(U(i),e.noresize||(_e(s.value,i),_e(o.value,i)))}),Ke(()=>{e.native||e.noresize||(ye(s.value,i),ye(o.value,i))});const g=O(()=>{let h=e.wrapStyle;return Array.isArray(e.wrapStyle)&&(h=Wn(e.wrapStyle)),h});return{moveX:a,moveY:r,sizeWidth:n,sizeHeight:t,style:g,wrap:o,resize:s,update:i,handleScroll:c}}}),nt=`.scrollbar {
  position: relative;
  height: 100%;
  overflow: hidden;
}
.scrollbar__wrap {
  height: 100%;
  overflow: auto;
}
.scrollbar__wrap--hidden-default {
  scrollbar-width: none;
}
.scrollbar__wrap--hidden-default::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
  opacity: 0;
}
.scrollbar__thumb {
  position: relative;
  display: block;
  width: 0;
  height: 0;
  cursor: pointer;
  background-color: rgba(144, 147, 153, 0.3);
  border-radius: inherit;
  transition: 0.3s background-color;
}
.scrollbar__thumb:hover {
  background-color: rgba(144, 147, 153, 0.5);
}
.scrollbar__bar {
  position: absolute;
  right: 2px;
  bottom: 2px;
  z-index: 1;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 80ms ease;
}
.scrollbar__bar.is-vertical {
  top: 2px;
  width: 6px;
}
.scrollbar__bar.is-vertical > div {
  width: 100%;
}
.scrollbar__bar.is-horizontal {
  left: 2px;
  height: 6px;
}
.scrollbar__bar.is-horizontal > div {
  height: 100%;
}
.scrollbar:active > .scrollbar__bar,
.scrollbar:focus > .scrollbar__bar,
.scrollbar:hover > .scrollbar__bar {
  opacity: 1;
  transition: opacity 340ms ease-out;
}
`;const jn={class:"scrollbar"};function En(e,n,t,a,r,o){const s=k("bar");return v(),b("div",jn,[f("div",{ref:"wrap",class:[e.wrapClass,"scrollbar__wrap",e.native?"":"scrollbar__wrap--hidden-default"],style:e.style,onScroll:n[1]||(n[1]=(...c)=>e.handleScroll&&e.handleScroll(...c))},[(v(),b(Je(e.tag),{ref:"resize",class:["scrollbar__view",e.viewClass],style:e.viewStyle},{default:C(()=>[$(e.$slots,"default")]),_:3},8,["class","style"]))],38),e.native?D("",!0):(v(),b(oe,{key:0},[f(s,{move:e.moveX,size:e.sizeWidth},null,8,["move","size"]),f(s,{vertical:"",move:e.moveY,size:e.sizeHeight},null,8,["move","size"])],64))])}K.render=En,le(K);var Q=m({name:"ScrollContainer",components:{Scrollbar:K},setup(){const e=_(null);function n(r,o=500){const s=z(e);!s||U(()=>{const c=z(s.wrap);if(!c)return;const{start:i}=pe({el:c,to:r,duration:o});i()})}function t(){const r=z(e);return r?r.wrap:null}function a(){const r=z(e);!r||U(()=>{const o=z(r.wrap);if(!o)return;const s=o.scrollHeight,{start:c}=pe({el:o,to:s});c()})}return{scrollbarRef:e,scrollTo:n,scrollBottom:a,getScrollWrap:t}}}),tt=`.scroll-container {
  width: 100%;
  height: 100%;
}
.scroll-container .scrollbar__wrap {
  margin-bottom: 18px !important;
  overflow-x: hidden;
}
.scroll-container .scrollbar__view {
  box-sizing: border-box;
}
`;function Mn(e,n,t,a,r,o){const s=k("Scrollbar");return v(),b(s,F({ref:"scrollbarRef",class:"scroll-container"},e.$attrs),{default:C(()=>[$(e.$slots,"default")]),_:3},16)}Q.render=Mn,le(Q,Y,E);export{$n as B,q as S,Q as _,Y as a,L as b,we as c,j as d,E as e,he as f};
