import{P as i,bL as At,j as l,J as W,D as R,d as K,O as D,a as zt,a_ as Wt,p as Dt,B as j,b$ as ot,v as bt,z as N,c0 as ct,c1 as It,an as Ht,n as I,S as Ft,a3 as Lt,I as Ut,c2 as Gt,x as Vt,bO as Mt}from"./index.de7a3c72.js";import{U as qt}from"./UpOutlined.b1a0aa74.js";import{L as Xt}from"./LeftOutlined.6e782dc0.js";import{D as Zt}from"./DownOutlined.2e949c36.js";import{R as Jt}from"./RightOutlined.dcad5eff.js";import{P as Yt}from"./PlusOutlined.20641b62.js";var U={LEFT:37,UP:38,RIGHT:39,DOWN:40},Qt={width:0,height:0,overflow:"hidden",position:"absolute"},G={name:"Sentinel",props:{setRef:i.func,prevElement:i.any,nextElement:i.any},methods:{onKeyDown:function(t){var a=t.target,e=t.which,r=t.shiftKey,s=this.$props,o=s.nextElement,c=s.prevElement;e!==At.TAB||document.activeElement!==a||(!r&&o&&o.focus(),r&&c&&c.focus())}},render:function(){var t=this.$props.setRef;return l("div",{tabindex:0,ref:t,style:Qt,onKeydown:this.onKeyDown,role:"presentation"},[W(this)])}};function tn(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function nn(n){var t=[];return n.forEach(function(a){R(a)&&t.push(a)}),t}function lt(n,t){for(var a=nn(n),e=0;e<a.length;e++)if(a[e].key===t)return e;return-1}function V(n,t){n.transform=t,n.webkitTransform=t,n.mozTransform=t}function ft(n){return("transform"in n||"webkitTransform"in n||"MozTransform"in n)&&window.atob}function an(n){return{transform:n,WebkitTransform:n,MozTransform:n}}function M(n){return n==="left"||n==="right"}function en(n,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",e=M(t)?"translateY":"translateX";return!M(t)&&a==="rtl"?"".concat(e,"(").concat(n*100,"%) translateZ(0)"):"".concat(e,"(").concat(-n*100,"%) translateZ(0)")}function rn(n,t){var a=M(t)?"marginTop":"marginLeft";return tn({},a,"".concat(-n*100,"%"))}function dt(n,t){return+window.getComputedStyle(n).getPropertyValue(t).replace("px","")}function pt(n){return Object.keys(n).reduce(function(t,a){return(a.substr(0,5)==="aria-"||a.substr(0,5)==="data-"||a==="role")&&(t[a]=n[a]),t},{})}function H(n,t){return+n.getPropertyValue(t).replace("px","")}function ut(n,t,a,e,r){var s=dt(r,"padding-".concat(n));if(!e||!e.parentNode)return s;var o=e.parentNode.childNodes;return Array.prototype.some.call(o,function(c){if(!c.tagName)return!1;var b=window.getComputedStyle(c);return c!==e?(s+=H(b,"margin-".concat(n)),s+=c[t],s+=H(b,"margin-".concat(a)),b.boxSizing==="content-box"&&(s+=H(b,"border-".concat(n,"-width"))+H(b,"border-".concat(a,"-width"))),!1):(s+=H(b,"margin-".concat(n)),!0)}),s}function sn(n,t){return ut("left","offsetWidth","right",n,t)}function on(n,t){return ut("top","offsetHeight","bottom",n,t)}function q(){return q=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e])}return n},q.apply(this,arguments)}function X(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}var bn=function(n,t){var a={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(a[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(n);r<e.length;r++)t.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(n,e[r])&&(a[e[r]]=n[e[r]]);return a};function cn(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!R(n)}function vt(n){var t,a=n.children;return a.forEach(function(e){e&&!ot(t)&&!e.disabled&&(t=e.key)}),t}function ln(n,t){var a=n.children,e=a.map(function(r){return r&&r.key});return e.indexOf(t)>=0}var fn=K({name:"Tabs",mixins:[D],inheritAttrs:!1,props:{destroyInactiveTabPane:i.looseBool,renderTabBar:i.func.isRequired,renderTabContent:i.func.isRequired,navWrapper:i.func.def(function(n){return n}),children:i.any.def([]),prefixCls:i.string.def("ant-tabs"),tabBarPosition:i.string.def("top"),activeKey:i.oneOfType([i.string,i.number]),defaultActiveKey:i.oneOfType([i.string,i.number]),direction:i.string.def("ltr"),tabBarGutter:i.number},setup:function(t){var a;t.activeKey!==void 0?a=t.activeKey:t.defaultActiveKey!==void 0?a=t.defaultActiveKey:a=vt(t);var e=zt({_activeKey:a});return Wt(function(){t.activeKey!==void 0?e._activeKey=t.activeKey:ln(t,e._activeKey)||(e._activeKey=vt(t))},{flush:"sync"}),{state:e}},created:function(){this.panelSentinelStart=void 0,this.panelSentinelEnd=void 0,this.sentinelStart=void 0,this.sentinelEnd=void 0,Dt("sentinelContext",this)},beforeUnmount:function(){this.destroy=!0,cancelAnimationFrame(this.sentinelId)},methods:{onTabClick:function(t,a){this.tabBar.props&&this.tabBar.props.onTabClick&&this.tabBar.props.onTabClick(t,a),this.setActiveKey(t)},onNavKeyDown:function(t){var a=t.keyCode;if(a===U.RIGHT||a===U.DOWN){t.preventDefault();var e=this.getNextActiveKey(!0);this.onTabClick(e)}else if(a===U.LEFT||a===U.UP){t.preventDefault();var r=this.getNextActiveKey(!1);this.onTabClick(r)}},onScroll:function(t){var a=t.target,e=t.currentTarget;a===e&&a.scrollLeft>0&&(a.scrollLeft=0)},setSentinelStart:function(t){this.sentinelStart=t},setSentinelEnd:function(t){this.sentinelEnd=t},setPanelSentinelStart:function(t){t!==this.panelSentinelStart&&this.updateSentinelContext(),this.panelSentinelStart=t},setPanelSentinelEnd:function(t){t!==this.panelSentinelEnd&&this.updateSentinelContext(),this.panelSentinelEnd=t},setActiveKey:function(t){if(this.state._activeKey!==t){var a=this.$props;a.activeKey===void 0&&(this.state._activeKey=t),this.__emit("update:activeKey",t),this.__emit("change",t)}},getNextActiveKey:function(t){var a=this.state._activeKey,e=[];this.$props.children.forEach(function(o){var c,b;o&&!((c=o.props)===null||c===void 0?void 0:c.disabled)&&((b=o.props)===null||b===void 0?void 0:b.disabled)!==""&&(t?e.push(o):e.unshift(o))});var r=e.length,s=r&&e[0].key;return e.forEach(function(o,c){o.key===a&&(c===r-1?s=e[0].key:s=e[c+1].key)}),s},updateSentinelContext:function(){var t=this;this.destroy||(cancelAnimationFrame(this.sentinelId),this.sentinelId=requestAnimationFrame(function(){t.destroy||t.$forceUpdate()}))}},render:function(){var t,a=this.$props,e=a.prefixCls,r=a.navWrapper,s=a.tabBarPosition,o=a.renderTabContent,c=a.renderTabBar,b=a.destroyInactiveTabPane,f=a.direction,p=a.tabBarGutter,g=this.$attrs,d=g.class;g.onChange;var m=g.style,y=bn(g,["class","onChange","style"]),v=(t={},X(t,d,d),X(t,e,1),X(t,"".concat(e,"-").concat(s),1),X(t,"".concat(e,"-rtl"),f==="rtl"),t);this.tabBar=c();var x=j(this.tabBar,{prefixCls:e,navWrapper:r,tabBarPosition:s,panels:a.children,activeKey:this.state._activeKey,direction:f,tabBarGutter:p,onKeydown:this.onNavKeyDown,onTabClick:this.onTabClick,key:"tabBar"}),w=j(o(),{prefixCls:e,tabBarPosition:s,activeKey:this.state._activeKey,destroyInactiveTabPane:b,direction:f,onChange:this.setActiveKey,children:a.children,key:"tabContent"}),u=l(G,{key:"sentinelStart",setRef:this.setSentinelStart,nextElement:this.panelSentinelStart},null),O=l(G,{key:"sentinelEnd",setRef:this.setSentinelEnd,prevElement:this.panelSentinelEnd},null),h=[];s==="bottom"?h.push(u,w,O,x):h.push(x,u,w,O);var S=q(q({},pt(y)),{style:m,onScroll:this.onScroll,class:v});return l("div",S,cn(h)?h:{default:function(){return[h]}})}});function nt(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}var ht=K({name:"TabPane",props:{active:i.looseBool,destroyInactiveTabPane:i.looseBool,forceRender:i.looseBool,placeholder:i.any,rootPrefixCls:i.string,tab:i.any,closable:i.looseBool,disabled:i.looseBool},setup:function(){return{isActived:void 0,sentinelContext:bt("sentinelContext",{})}},render:function(){var t,a=this.$props,e=a.destroyInactiveTabPane,r=a.active,s=a.forceRender,o=a.rootPrefixCls,c=W(this),b=N(this,"placeholder");this.isActived=this.isActived||r;var f="".concat(o,"-tabpane"),p=(t={},nt(t,f,1),nt(t,"".concat(f,"-inactive"),!r),nt(t,"".concat(f,"-active"),r),t),g=e?r:this.isActived,d=g||s,m=this.sentinelContext,y=m.sentinelStart,v=m.sentinelEnd,x=m.setPanelSentinelStart,w=m.setPanelSentinelEnd,u,O;return r&&d&&(u=l(G,{setRef:x,prevElement:y},null),O=l(G,{setRef:w,nextElement:v},null)),l("div",{class:p,role:"tabpanel","aria-hidden":r?"false":"true"},[u,d?c:b,O])}});function E(){return E=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e])}return n},E.apply(this,arguments)}function at(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}var gt=K({name:"TabContent",inheritAttrs:!1,props:{animated:i.looseBool.def(!0),animatedWithMargin:i.looseBool.def(!0),prefixCls:i.string.def("ant-tabs"),activeKey:i.oneOfType([i.string,i.number]),tabBarPosition:i.string,direction:i.string,destroyInactiveTabPane:i.looseBool,children:i.any},computed:{classes:function(){var t,a=this.animated,e=this.prefixCls,r=this.$attrs.class;return t={},at(t,r,!!r),at(t,"".concat(e,"-content"),!0),at(t,a?"".concat(e,"-content-animated"):"".concat(e,"-content-no-animated"),!0),t}},methods:{getTabPanes:function(t){var a=this.$props,e=a.activeKey,r=[];return t.forEach(function(s){if(!!s){var o=s.key,c=e===o;r.push(j(s,{active:c,destroyInactiveTabPane:a.destroyInactiveTabPane,rootPrefixCls:a.prefixCls}))}}),r}},render:function(){var t=this.activeKey,a=this.tabBarPosition,e=this.animated,r=this.animatedWithMargin,s=this.direction,o=this.classes,c=this.children,b={};if(e&&c){var f=lt(c,t);if(f!==-1){var p=r?rn(f,a):an(en(f,a,s));b=E(E({},this.$attrs.style),p)}else b=E(E({},this.$attrs.style),{display:"none"})}return l("div",{class:o,style:b},[this.getTabPanes(c||[])])}}),dn=function(t){if(typeof window!="undefined"&&window.document&&window.document.documentElement){var a=Array.isArray(t)?t:[t],e=window.document.documentElement;return a.some(function(r){return r in e.style})}return!1},pn=dn(["flex","webkitFlex","Flex","msFlex"]);function mt(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function yt(n,t){var a=n.$props,e=a.styles,r=e===void 0?{}:e,s=a.panels,o=a.activeKey,c=a.direction,b=n.getRef("root"),f=n.getRef("nav")||b,p=n.getRef("inkBar"),g=n.getRef("activeTab"),d=p.style,m=n.$props.tabBarPosition,y=lt(s,o);if(t&&(d.display="none"),g){var v=g,x=ft(d);if(V(d,""),d.width="",d.height="",d.left="",d.top="",d.bottom="",d.right="",m==="top"||m==="bottom"){var w=sn(v,f),u=v.offsetWidth;u===b.offsetWidth?u=0:r.inkBar&&r.inkBar.width!==void 0&&(u=parseFloat(r.inkBar.width,10),u&&(w+=(v.offsetWidth-u)/2)),c==="rtl"&&(w=dt(v,"margin-left")-w),x?V(d,"translate3d(".concat(w,"px,0,0)")):d.left="".concat(w,"px"),d.width="".concat(u,"px")}else{var O=on(v,f),h=v.offsetHeight;r.inkBar&&r.inkBar.height!==void 0&&(h=parseFloat(r.inkBar.height,10),h&&(O+=(v.offsetHeight-h)/2)),x?(V(d,"translate3d(0,".concat(O,"px,0)")),d.top="0"):d.top="".concat(O,"px"),d.height="".concat(h,"px")}}d.display=y!==-1?"block":"none"}var un={name:"InkTabBarNode",mixins:[D],inheritAttrs:!1,props:{inkBarAnimated:{type:Boolean,default:!0},direction:i.string,prefixCls:String,styles:Object,tabBarPosition:String,saveRef:i.func.def(function(){}),getRef:i.func.def(function(){}),panels:i.array,activeKey:i.oneOfType([i.string,i.number])},updated:function(){var t=this;this.$nextTick(function(){yt(t)})},mounted:function(){var t=this;this.$nextTick(function(){yt(t,!0)})},render:function(){var t,a=this.prefixCls,e=this.styles,r=e===void 0?{}:e,s=this.inkBarAnimated,o="".concat(a,"-ink-bar"),c=(t={},mt(t,o,!0),mt(t,s?"".concat(o,"-animated"):"".concat(o,"-no-animated"),!0),t);return l("div",{style:r.inkBar,class:c,key:"inkBar",ref:this.saveRef("inkBar")},null)}};function xt(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),a.push.apply(a,e)}return a}function Ot(n){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?xt(Object(a),!0).forEach(function(e){wt(n,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):xt(Object(a)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))})}return n}function wt(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function Pt(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!R(n)}function et(){}var vn={name:"TabBarTabsNode",mixins:[D],inheritAttrs:!1,props:{activeKey:i.oneOfType([i.string,i.number]),panels:i.any.def([]),prefixCls:i.string.def(""),tabBarGutter:i.any.def(null),onTabClick:i.func,saveRef:i.func.def(et),getRef:i.func.def(et),renderTabBarNode:i.func,tabBarPosition:i.string,direction:i.string},render:function(){var t=this,a=this.$props,e=a.panels,r=a.activeKey,s=a.prefixCls,o=a.tabBarGutter,c=a.saveRef,b=a.tabBarPosition,f=a.direction,p=[],g=this.renderTabBarNode||this.$slots.renderTabBarNode;return e.forEach(function(d,m){if(!!d){var y=ct(d),v=d.key,x=r===v?"".concat(s,"-tab-active"):"";x+=" ".concat(s,"-tab");var w={},u=y.disabled;u?x+=" ".concat(s,"-tab-disabled"):w.onClick=function(){t.__emit("tabClick",v)};var O=N(d,"tab"),h=o&&m===e.length-1?0:o;h=typeof h=="number"?"".concat(h,"px"):h;var S=f==="rtl"?"marginLeft":"marginRight",L=wt({},M(b)?"marginBottom":S,h),_=l("div",Ot(Ot({role:"tab","aria-disabled":u?"true":"false","aria-selected":r===v?"true":"false"},w),{},{class:x.trim(),key:v,style:L,ref:r===v?c("activeTab"):et}),Pt(O)?O:{default:function(){return[O]}});g&&(_=g(_)),p.push(_)}}),l("div",{ref:this.saveRef("navTabsContainer")},Pt(p)?p:{default:function(){return[p]}})}};function Tt(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),a.push.apply(a,e)}return a}function hn(n){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Tt(Object(a),!0).forEach(function(e){it(n,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):Tt(Object(a)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))})}return n}function rt(){return rt=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e])}return n},rt.apply(this,arguments)}function it(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}var gn=function(n,t){var a={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(a[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(n);r<e.length;r++)t.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(n,e[r])&&(a[e[r]]=n[e[r]]);return a};function mn(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!R(n)}function Bt(){}var yn={name:"TabBarRootNode",mixins:[D],inheritAttrs:!1,props:{saveRef:i.func.def(Bt),getRef:i.func.def(Bt),prefixCls:i.string.def(""),tabBarPosition:i.string.def("top"),extraContent:i.any},methods:{onKeyDown:function(t){this.__emit("keydown",t)}},render:function(){var t,a=this.prefixCls,e=this.onKeyDown,r=this.tabBarPosition,s=this.extraContent,o=this.$attrs,c=o.class,b=o.style;o.onKeydown;var f=gn(o,["class","style","onKeydown"]),p=(t={},it(t,"".concat(a,"-bar"),!0),it(t,c,!!c),t),g=r==="top"||r==="bottom",d=g?{float:"right"}:{},m=W(this),y=m;return s&&(y=[j(s,{key:"extra",style:rt({},d)}),j(m,{key:"content"})],y=g?y:y.reverse()),l("div",hn({role:"tablist",class:p,tabindex:"0",onKeydown:e,style:b,ref:this.saveRef("root")},pt(f)),mn(y)?y:{default:function(){return[y]}})}};function P(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function Z(){return Z=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e])}return n},Z.apply(this,arguments)}var xn={name:"ScrollableTabBarNode",mixins:[D],inheritAttrs:!1,props:{activeKey:i.any,getRef:i.func.def(function(){}),saveRef:i.func.def(function(){}),tabBarPosition:i.oneOf(["left","right","top","bottom"]).def("left"),prefixCls:i.string.def(""),scrollAnimated:i.looseBool.def(!0),navWrapper:i.func.def(function(n){return n}),prevIcon:i.any,nextIcon:i.any,direction:i.string},data:function(){return this.offset=0,this.prevProps=Z({},this.$props),{next:!1,prev:!1}},watch:{tabBarPosition:function(){var t=this;this.tabBarPositionChange=!0,this.$nextTick(function(){t.setOffset(0)})}},mounted:function(){var t=this;this.$nextTick(function(){t.updatedCal(),t.debouncedResize=It(function(){t.setNextPrev(),t.scrollToActiveTab()},200),t.resizeObserver=new Ht(t.debouncedResize),t.resizeObserver.observe(t.$props.getRef("container"))})},updated:function(){var t=this;this.$nextTick(function(){t.updatedCal(t.prevProps),t.prevProps=Z({},t.$props)})},beforeUnmount:function(){this.resizeObserver&&this.resizeObserver.disconnect(),this.debouncedResize&&this.debouncedResize.cancel&&this.debouncedResize.cancel()},methods:{updatedCal:function(t){var a=this,e=this.$props;if(t&&t.tabBarPosition!==e.tabBarPosition){this.setOffset(0);return}this.isNextPrevShown(this.$data)!==this.isNextPrevShown(this.setNextPrev())?(this.$forceUpdate(),this.$nextTick(function(){a.scrollToActiveTab()})):(!t||e.activeKey!==t.activeKey)&&this.scrollToActiveTab()},setNextPrev:function(){var t=this.$props.getRef("nav"),a=this.$props.getRef("navTabsContainer"),e=this.getScrollWH(a||t),r=this.getOffsetWH(this.$props.getRef("container"))+1,s=this.getOffsetWH(this.$props.getRef("navWrap")),o=this.offset,c=r-e,b=this.next,f=this.prev;if(c>=0)b=!1,this.setOffset(0,!1),o=0;else if(c<o)b=!0;else{b=!1;var p=s-e;this.setOffset(p,!1),o=p}return o<0?f=!0:f=!1,this.setNext(b),this.setPrev(f),{next:b,prev:f}},getOffsetWH:function(t){var a=this.$props.tabBarPosition,e="offsetWidth";return(a==="left"||a==="right")&&(e="offsetHeight"),t[e]},getScrollWH:function(t){var a=this.tabBarPosition,e="scrollWidth";return(a==="left"||a==="right")&&(e="scrollHeight"),t[e]},getOffsetLT:function(t){var a=this.$props.tabBarPosition,e="left";return(a==="left"||a==="right")&&(e="top"),t.getBoundingClientRect()[e]},setOffset:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,e=Math.min(0,t);if(this.offset!==e){this.offset=e;var r={},s=this.$props.tabBarPosition,o=this.$props.getRef("nav").style,c=ft(o);s==="left"||s==="right"?c?r={value:"translate3d(0,".concat(e,"px,0)")}:r={name:"top",value:"".concat(e,"px")}:c?(this.$props.direction==="rtl"&&(e=-e),r={value:"translate3d(".concat(e,"px,0,0)")}):r={name:"left",value:"".concat(e,"px")},c?V(o,r.value):o[r.name]=r.value,a&&this.setNextPrev()}},setPrev:function(t){this.prev!==t&&(this.prev=t)},setNext:function(t){this.next!==t&&(this.next=t)},isNextPrevShown:function(t){return t?t.next||t.prev:this.next||this.prev},prevTransitionEnd:function(t){if(t.propertyName==="opacity"){var a=this.$props.getRef("container");this.scrollToActiveTab({target:a,currentTarget:a})}},scrollToActiveTab:function(t){var a=this.$props.getRef("activeTab"),e=this.$props.getRef("navWrap");if(!(t&&t.target!==t.currentTarget||!a)){var r=this.isNextPrevShown()&&this.lastNextPrevShown;if(this.lastNextPrevShown=this.isNextPrevShown(),!!r){var s=this.getScrollWH(a),o=this.getOffsetWH(e),c=this.offset,b=this.getOffsetLT(e),f=this.getOffsetLT(a);b>f?(c+=b-f,this.setOffset(c)):b+o<f+s&&(c-=f+s-(b+o),this.setOffset(c))}}},prevClick:function(t){this.__emit("prevClick",t);var a=this.$props.getRef("navWrap"),e=this.getOffsetWH(a),r=this.offset;this.setOffset(r+e)},nextClick:function(t){this.__emit("nextClick",t);var a=this.$props.getRef("navWrap"),e=this.getOffsetWH(a),r=this.offset;this.setOffset(r-e)}},render:function(){var t,a,e,r,s=this.next,o=this.prev,c=this.$props,b=c.prefixCls,f=c.scrollAnimated,p=c.navWrapper,g=N(this,"prevIcon"),d=N(this,"nextIcon"),m=o||s,y=l("span",{onClick:o&&this.prevClick,unselectable:"unselectable",class:(t={},P(t,"".concat(b,"-tab-prev"),1),P(t,"".concat(b,"-tab-btn-disabled"),!o),P(t,"".concat(b,"-tab-arrow-show"),m),t),onTransitionend:this.prevTransitionEnd},[g||l("span",{class:"".concat(b,"-tab-prev-icon")},null)]),v=l("span",{onClick:s&&this.nextClick,unselectable:"unselectable",class:(a={},P(a,"".concat(b,"-tab-next"),1),P(a,"".concat(b,"-tab-btn-disabled"),!s),P(a,"".concat(b,"-tab-arrow-show"),m),a)},[d||l("span",{class:"".concat(b,"-tab-next-icon")},null)]),x="".concat(b,"-nav"),w=(e={},P(e,x,!0),P(e,f?"".concat(x,"-animated"):"".concat(x,"-no-animated"),!0),e);return l("div",{class:(r={},P(r,"".concat(b,"-nav-container"),1),P(r,"".concat(b,"-nav-container-scrolling"),m),r),key:"container",ref:this.saveRef("container")},[y,v,l("div",{class:"".concat(b,"-nav-wrap"),ref:this.saveRef("navWrap")},[l("div",{class:"".concat(b,"-nav-scroll")},[l("div",{class:w,ref:this.saveRef("nav")},[p(W(this))])])])])}},On={props:{children:i.func.def(function(){return null})},methods:{getRef:function(t){return this[t]},saveRef:function(t){var a=this;return function(e){e&&(a[t]=e)}}},render:function(){var t=this,a=function(s){return t.saveRef(s)},e=function(s){return t.getRef(s)};return this.children(a,e)}};function Ct(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),a.push.apply(a,e)}return a}function J(n){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Ct(Object(a),!0).forEach(function(e){wn(n,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):Ct(Object(a)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))})}return n}function wn(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function Y(){return Y=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e])}return n},Y.apply(this,arguments)}function Pn(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!R(n)}var St=K({name:"ScrollableInkTabBar",inheritAttrs:!1,render:function(){var t=this,a=this.$attrs.children;return l(On,{children:function(r,s){var o;return l(yn,J({saveRef:r},t.$attrs),Pn(o=l(xn,J({saveRef:r,getRef:s},t.$attrs),{default:function(){return[l(vn,J({saveRef:r},Y(Y({},t.$attrs),{renderTabBarNode:a})),null),l(un,J({saveRef:r,getRef:s},t.$attrs),null)]}}))?o:{default:function(){return[o]}})}},null)}});function k(){return k=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e])}return n},k.apply(this,arguments)}function F(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function Q(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Q=function(a){return typeof a}:Q=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Q(n)}var Tn=K({name:"TabBar",inheritAttrs:!1,props:{prefixCls:i.string,centered:i.looseBool.def(!1),tabBarStyle:i.style,tabBarExtraContent:i.VNodeChild,type:i.oneOf(I("line","card","editable-card")),tabPosition:i.oneOf(I("top","right","bottom","left")).def("top"),tabBarPosition:i.oneOf(I("top","right","bottom","left")),size:i.oneOf(I("default","small","large")),animated:{type:[Boolean,Object],default:void 0},renderTabBar:i.func,panels:i.array.def([]),activeKey:i.oneOfType([i.string,i.number]),tabBarGutter:i.number},render:function(){var t,a=this.$props,e=a.centered,r=a.tabBarStyle,s=a.animated,o=s===void 0?!0:s,c=a.renderTabBar,b=a.tabBarExtraContent,f=a.tabPosition,p=a.prefixCls,g=a.type,d=g===void 0?"line":g,m=a.size,y=Q(o)==="object"?o.inkBar:o,v=f==="left"||f==="right",x=l("span",{class:"".concat(p,"-tab-prev-icon")},[v?l(qt,{class:"".concat(p,"-tab-prev-icon-target")},null):l(Xt,{class:"".concat(p,"-tab-prev-icon-target")},null)]),w=l("span",{class:"".concat(p,"-tab-next-icon")},[v?l(Zt,{class:"".concat(p,"-tab-next-icon-target")},null):l(Jt,{class:"".concat(p,"-tab-next-icon-target")},null)]),u=(t={},F(t,this.$attrs.class,this.$attrs.class),F(t,"".concat(p,"-centered-bar"),e),F(t,"".concat(p,"-").concat(f,"-bar"),!0),F(t,"".concat(p,"-").concat(m,"-bar"),!!m),F(t,"".concat(p,"-card-bar"),d&&d.indexOf("card")>=0),t),O=k(k(k({},this.$props),this.$attrs),{children:null,inkBarAnimated:y,extraContent:b,prevIcon:x,nextIcon:w,style:r,class:u});return c?c(k(k({},O),{DefaultTabBar:St})):l(St,O,null)}});function _t(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),a.push.apply(a,e)}return a}function Bn(n){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?_t(Object(a),!0).forEach(function(e){C(n,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):_t(Object(a)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))})}return n}function T(){return T=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e])}return n},T.apply(this,arguments)}function C(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function tt(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?tt=function(a){return typeof a}:tt=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},tt(n)}var Cn=function(n,t){var a={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(a[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(n);r<e.length;r++)t.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(n,e[r])&&(a[e[r]]=n[e[r]]);return a};function Sn(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!R(n)}var B=K({TabPane:ht,name:"ATabs",inheritAttrs:!1,props:{prefixCls:i.string,activeKey:i.oneOfType([i.string,i.number]),defaultActiveKey:i.oneOfType([i.string,i.number]),hideAdd:i.looseBool.def(!1),centered:i.looseBool.def(!1),tabBarStyle:i.object,tabBarExtraContent:i.any,destroyInactiveTabPane:i.looseBool.def(!1),type:i.oneOf(I("line","card","editable-card")),tabPosition:i.oneOf(["top","right","bottom","left"]).def("top"),size:i.oneOf(["default","small","large"]),animated:Ft(i.oneOfType([i.looseBool,i.object])),tabBarGutter:i.number,renderTabBar:i.func,onChange:{type:Function},onTabClick:i.func,onPrevClick:{type:Function},onNextClick:{type:Function},onEdit:{type:Function}},emits:["update:activeKey","edit","change"],setup:function(){return{configProvider:bt("configProvider",Vt)}},mounted:function(){var t=" no-flex",a=Lt(this);a&&!pn&&a.className.indexOf(t)===-1&&(a.className+=t)},methods:{removeTab:function(t,a){a.stopPropagation(),ot(t)&&this.$emit("edit",t,"remove")},handleChange:function(t){this.$emit("update:activeKey",t),this.$emit("change",t)},createNewTab:function(t){this.$emit("edit",t,"add")}},render:function(){var t,a=this,e,r=Ut(this),s=r.prefixCls,o=r.size,c=r.type,b=c===void 0?"line":c,f=r.tabPosition,p=r.animated,g=p===void 0?!0:p,d=r.hideAdd,m=r.renderTabBar,y=this.$attrs,v=y.class,x=Cn(y,["class"]),w=this.configProvider.getPrefixCls,u=w("tabs",s),O=Gt(W(this)),h=N(this,"tabBarExtraContent"),S=tt(g)==="object"?g.tabPane:g;b!=="line"&&(S="animated"in r?S:!1);var L=(t={},C(t,v,v),C(t,"".concat(u,"-vertical"),f==="left"||f==="right"),C(t,"".concat(u,"-").concat(o),!!o),C(t,"".concat(u,"-card"),b.indexOf("card")>=0),C(t,"".concat(u,"-").concat(b),!0),C(t,"".concat(u,"-no-animation"),!S),t),_=[];b==="editable-card"&&(_=[],O.forEach(function($,Kt){var jt=ct($),z=jt.closable;z=typeof z=="undefined"?!0:z;var Nt=z?l(Mt,{class:"".concat(u,"-close-x"),onClick:function(Et){return a.removeTab($.key,Et)}},null):null;_.push(j($,{tab:l("div",{class:z?void 0:"".concat(u,"-tab-unclosable")},[N($,"tab"),Nt]),key:$.key||Kt}))}),d||(h=l("span",null,[l(Yt,{class:"".concat(u,"-new-tab"),onClick:this.createNewTab},null),h]))),h=h?l("div",{class:"".concat(u,"-extra-content")},Sn(h)?h:{default:function(){return[h]}}):null;var st=m||this.$slots.renderTabBar,$t=T(T(T(T({},r),{prefixCls:u,tabBarExtraContent:h,renderTabBar:st}),x),{children:O}),kt=(e={},C(e,"".concat(u,"-").concat(f,"-content"),!0),C(e,"".concat(u,"-card-content"),b.indexOf("card")>=0),e),Rt=T(T(T(T({},r),{prefixCls:u,tabBarPosition:f,renderTabBar:function(){return l(Tn,Bn({key:"tabBar"},$t),null)},renderTabContent:function(){return l(gt,{class:kt,animated:S,animatedWithMargin:!0},null)},children:_.length>0?_:O}),x),{onChange:this.handleChange,class:L});return l(fn,Rt,null)}});function A(){return A=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e])}return n},A.apply(this,arguments)}B.TabPane=A(A({},ht),{name:"ATabPane",__ANT_TAB_PANE:!0}),B.TabContent=A(A({},gt),{name:"ATabContent"}),B.install=function(n){return n.component(B.name,B),n.component(B.TabPane.name,B.TabPane),n.component(B.TabContent.name,B.TabContent),n};var En=`/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
/* stylelint-disable no-duplicate-selectors */
/* stylelint-disable */
/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-nav-container {
  height: 40px;
}
.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-ink-bar {
  visibility: hidden;
}
.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab {
  height: 40px;
  margin: 0;
  margin-right: 2px;
  padding: 0 16px;
  line-height: 38px;
  background: #fafafa;
  border: 1px solid #f0f0f0;
  border-radius: 2px 2px 0 0;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active {
  height: 40px;
  color: #1890ff;
  background: #fff;
  border-color: #f0f0f0;
  border-bottom: 1px solid #fff;
}
.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active::before {
  border-top: 2px solid transparent;
}
.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-disabled {
  color: #1890ff;
  color: rgba(0, 0, 0, 0.25);
}
.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-inactive {
  padding: 0;
}
.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-nav-wrap {
  margin-bottom: 0;
}
.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab .ant-tabs-close-x {
  width: 16px;
  height: 16px;
  height: 14px;
  margin-right: -5px;
  margin-left: 3px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.45);
  font-size: 12px;
  vertical-align: middle;
  transition: all 0.3s;
}
.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab .ant-tabs-close-x:hover {
  color: rgba(0, 0, 0, 0.85);
}
.ant-tabs.ant-tabs-card .ant-tabs-card-content > .ant-tabs-tabpane,
.ant-tabs.ant-tabs-editable-card .ant-tabs-card-content > .ant-tabs-tabpane {
  transition: none !important;
}
.ant-tabs.ant-tabs-card .ant-tabs-card-content > .ant-tabs-tabpane-inactive,
.ant-tabs.ant-tabs-editable-card .ant-tabs-card-content > .ant-tabs-tabpane-inactive {
  overflow: hidden;
}
.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab:hover .anticon-close {
  opacity: 1;
}
.ant-tabs-extra-content {
  line-height: 46.001px;
}
.ant-tabs-extra-content .ant-tabs-new-tab {
  position: relative;
  width: 20px;
  height: 20px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.3s;
}
.ant-tabs-extra-content .ant-tabs-new-tab:hover {
  color: #1890ff;
  border-color: #1890ff;
}
.ant-tabs-extra-content .ant-tabs-new-tab svg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
.ant-tabs.ant-tabs-large .ant-tabs-extra-content {
  line-height: 57.144px;
}
.ant-tabs.ant-tabs-small .ant-tabs-extra-content {
  line-height: 38.001px;
}
.ant-tabs.ant-tabs-card .ant-tabs-extra-content {
  line-height: 40px;
}
.ant-tabs-vertical.ant-tabs-card .ant-tabs-card-bar.ant-tabs-left-bar .ant-tabs-nav-container,
.ant-tabs-vertical.ant-tabs-card .ant-tabs-card-bar.ant-tabs-right-bar .ant-tabs-nav-container {
  height: 100%;
}
.ant-tabs-vertical.ant-tabs-card .ant-tabs-card-bar.ant-tabs-left-bar .ant-tabs-tab,
.ant-tabs-vertical.ant-tabs-card .ant-tabs-card-bar.ant-tabs-right-bar .ant-tabs-tab {
  margin-bottom: 8px;
  border-bottom: 1px solid #f0f0f0;
}
.ant-tabs-vertical.ant-tabs-card .ant-tabs-card-bar.ant-tabs-left-bar .ant-tabs-tab-active,
.ant-tabs-vertical.ant-tabs-card .ant-tabs-card-bar.ant-tabs-right-bar .ant-tabs-tab-active {
  padding-bottom: 4px;
}
.ant-tabs-vertical.ant-tabs-card .ant-tabs-card-bar.ant-tabs-left-bar .ant-tabs-tab:last-child,
.ant-tabs-vertical.ant-tabs-card .ant-tabs-card-bar.ant-tabs-right-bar .ant-tabs-tab:last-child {
  margin-bottom: 8px;
}
.ant-tabs-vertical.ant-tabs-card .ant-tabs-card-bar.ant-tabs-left-bar .ant-tabs-new-tab,
.ant-tabs-vertical.ant-tabs-card .ant-tabs-card-bar.ant-tabs-right-bar .ant-tabs-new-tab {
  width: 90%;
}
.ant-tabs-vertical.ant-tabs-card.ant-tabs-left .ant-tabs-card-bar.ant-tabs-left-bar .ant-tabs-nav-wrap {
  margin-right: 0;
}
.ant-tabs-vertical.ant-tabs-card.ant-tabs-left .ant-tabs-card-bar.ant-tabs-left-bar .ant-tabs-tab {
  margin-right: 1px;
  border-right: 0;
  border-radius: 2px 0 0 2px;
}
.ant-tabs-vertical.ant-tabs-card.ant-tabs-left .ant-tabs-card-bar.ant-tabs-left-bar .ant-tabs-tab-active {
  margin-right: -1px;
  padding-right: 18px;
}
.ant-tabs-vertical.ant-tabs-card.ant-tabs-right .ant-tabs-card-bar.ant-tabs-right-bar .ant-tabs-nav-wrap {
  margin-left: 0;
}
.ant-tabs-vertical.ant-tabs-card.ant-tabs-right .ant-tabs-card-bar.ant-tabs-right-bar .ant-tabs-tab {
  margin-left: 1px;
  border-left: 0;
  border-radius: 0 2px 2px 0;
}
.ant-tabs-vertical.ant-tabs-card.ant-tabs-right .ant-tabs-card-bar.ant-tabs-right-bar .ant-tabs-tab-active {
  margin-left: -1px;
  padding-left: 18px;
}
.ant-tabs .ant-tabs-card-bar.ant-tabs-bottom-bar .ant-tabs-tab {
  height: auto;
  border-top: 0;
  border-bottom: 1px solid #f0f0f0;
  border-radius: 0 0 2px 2px;
}
.ant-tabs .ant-tabs-card-bar.ant-tabs-bottom-bar .ant-tabs-tab-active {
  padding-top: 1px;
  padding-bottom: 0;
  color: #1890ff;
}
.ant-tabs {
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
  overflow: hidden;
  zoom: 1;
}
.ant-tabs::before,
.ant-tabs::after {
  display: table;
  content: '';
}
.ant-tabs::after {
  clear: both;
}
.ant-tabs-ink-bar {
  position: absolute;
  bottom: 1px;
  left: 0;
  z-index: 1;
  box-sizing: border-box;
  width: 0;
  height: 2px;
  background-color: #1890ff;
  transform-origin: 0 0;
}
.ant-tabs-bar {
  margin: 0 0 16px 0;
  border-bottom: 1px solid #f0f0f0;
  outline: none;
  transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-tabs-nav-container {
  position: relative;
  box-sizing: border-box;
  margin-bottom: -1px;
  overflow: hidden;
  font-size: 14px;
  line-height: 1.5715;
  white-space: nowrap;
  transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  zoom: 1;
}
.ant-tabs-nav-container::before,
.ant-tabs-nav-container::after {
  display: table;
  content: '';
}
.ant-tabs-nav-container::after {
  clear: both;
}
.ant-tabs-nav-container-scrolling {
  padding-right: 32px;
  padding-left: 32px;
}
.ant-tabs-bottom .ant-tabs-bottom-bar {
  margin-top: 16px;
  margin-bottom: 0;
  border-top: 1px solid #f0f0f0;
  border-bottom: none;
}
.ant-tabs-bottom .ant-tabs-bottom-bar .ant-tabs-ink-bar {
  top: 1px;
  bottom: auto;
}
.ant-tabs-bottom .ant-tabs-bottom-bar .ant-tabs-nav-container {
  margin-top: -1px;
  margin-bottom: 0;
}
.ant-tabs-tab-prev,
.ant-tabs-tab-next {
  position: absolute;
  z-index: 2;
  width: 0;
  height: 100%;
  color: rgba(0, 0, 0, 0.45);
  text-align: center;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  opacity: 0;
  transition: width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  pointer-events: none;
}
.ant-tabs-tab-prev.ant-tabs-tab-arrow-show,
.ant-tabs-tab-next.ant-tabs-tab-arrow-show {
  width: 32px;
  height: 100%;
  opacity: 1;
  pointer-events: auto;
}
.ant-tabs-tab-prev:hover,
.ant-tabs-tab-next:hover {
  color: rgba(0, 0, 0, 0.85);
}
.ant-tabs-tab-prev-icon,
.ant-tabs-tab-next-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  font-weight: bold;
  font-style: normal;
  font-variant: normal;
  line-height: inherit;
  text-align: center;
  text-transform: none;
  transform: translate(-50%, -50%);
}
.ant-tabs-tab-prev-icon-target,
.ant-tabs-tab-next-icon-target {
  display: block;
  display: inline-block;
  font-size: 12px;
  font-size: 10px \\9;
  transform: scale(0.83333333) rotate(0deg);
}
:root .ant-tabs-tab-prev-icon-target,
:root .ant-tabs-tab-next-icon-target {
  font-size: 12px;
}
.ant-tabs-tab-btn-disabled {
  cursor: not-allowed;
}
.ant-tabs-tab-btn-disabled,
.ant-tabs-tab-btn-disabled:hover {
  color: rgba(0, 0, 0, 0.25);
}
.ant-tabs-tab-next {
  right: 2px;
}
.ant-tabs-tab-prev {
  left: 0;
}
:root .ant-tabs-tab-prev {
  filter: none;
}
.ant-tabs-nav-wrap {
  margin-bottom: -1px;
  overflow: hidden;
}
.ant-tabs-nav-scroll {
  overflow: hidden;
  white-space: nowrap;
}
.ant-tabs-nav {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  margin: 0;
  padding-left: 0;
  list-style: none;
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-tabs-nav::before,
.ant-tabs-nav::after {
  display: table;
  content: ' ';
}
.ant-tabs-nav::after {
  clear: both;
}
.ant-tabs-nav .ant-tabs-tab {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: 100%;
  margin: 0 32px 0 0;
  padding: 12px 16px;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-tabs-nav .ant-tabs-tab::before {
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  border-top: 2px solid transparent;
  border-radius: 2px 2px 0 0;
  transition: all 0.3s;
  content: '';
  pointer-events: none;
}
.ant-tabs-nav .ant-tabs-tab:last-child {
  margin-right: 0;
}
.ant-tabs-nav .ant-tabs-tab:hover {
  color: #40a9ff;
}
.ant-tabs-nav .ant-tabs-tab:active {
  color: #096dd9;
}
.ant-tabs-nav .ant-tabs-tab .anticon {
  margin-right: 8px;
}
.ant-tabs-nav .ant-tabs-tab-active {
  color: #1890ff;
  font-weight: 500;
}
.ant-tabs-nav .ant-tabs-tab-disabled,
.ant-tabs-nav .ant-tabs-tab-disabled:hover {
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
}
.ant-tabs .ant-tabs-large-bar .ant-tabs-nav-container {
  font-size: 16px;
}
.ant-tabs .ant-tabs-large-bar .ant-tabs-tab {
  padding: 16px;
}
.ant-tabs .ant-tabs-small-bar .ant-tabs-nav-container {
  font-size: 14px;
}
.ant-tabs .ant-tabs-small-bar .ant-tabs-tab {
  padding: 8px 16px;
}
.ant-tabs .ant-tabs-centered-bar .ant-tabs-nav-wrap {
  text-align: center;
}
.ant-tabs-content::before {
  display: block;
  overflow: hidden;
  content: '';
}
.ant-tabs .ant-tabs-top-content,
.ant-tabs .ant-tabs-bottom-content {
  width: 100%;
}
.ant-tabs .ant-tabs-top-content > .ant-tabs-tabpane,
.ant-tabs .ant-tabs-bottom-content > .ant-tabs-tabpane {
  flex-shrink: 0;
  width: 100%;
  -webkit-backface-visibility: hidden;
  opacity: 1;
  transition: opacity 0.45s;
}
.ant-tabs .ant-tabs-top-content > .ant-tabs-tabpane-inactive,
.ant-tabs .ant-tabs-bottom-content > .ant-tabs-tabpane-inactive {
  height: 0;
  padding: 0 !important;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
}
.ant-tabs .ant-tabs-top-content > .ant-tabs-tabpane-inactive input,
.ant-tabs .ant-tabs-bottom-content > .ant-tabs-tabpane-inactive input {
  visibility: hidden;
}
.ant-tabs .ant-tabs-top-content.ant-tabs-content-animated,
.ant-tabs .ant-tabs-bottom-content.ant-tabs-content-animated {
  display: flex;
  flex-direction: row;
  transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  will-change: margin-left;
}
.ant-tabs .ant-tabs-left-bar,
.ant-tabs .ant-tabs-right-bar {
  height: 100%;
  border-bottom: 0;
}
.ant-tabs .ant-tabs-left-bar .ant-tabs-tab-arrow-show,
.ant-tabs .ant-tabs-right-bar .ant-tabs-tab-arrow-show {
  width: 100%;
  height: 32px;
}
.ant-tabs .ant-tabs-left-bar .ant-tabs-tab,
.ant-tabs .ant-tabs-right-bar .ant-tabs-tab {
  display: block;
  float: none;
  margin: 0 0 16px 0;
  padding: 8px 24px;
}
.ant-tabs .ant-tabs-left-bar .ant-tabs-tab:last-child,
.ant-tabs .ant-tabs-right-bar .ant-tabs-tab:last-child {
  margin-bottom: 0;
}
.ant-tabs .ant-tabs-left-bar .ant-tabs-extra-content,
.ant-tabs .ant-tabs-right-bar .ant-tabs-extra-content {
  text-align: center;
}
.ant-tabs .ant-tabs-left-bar .ant-tabs-nav-scroll,
.ant-tabs .ant-tabs-right-bar .ant-tabs-nav-scroll {
  width: auto;
}
.ant-tabs .ant-tabs-left-bar .ant-tabs-nav-container,
.ant-tabs .ant-tabs-right-bar .ant-tabs-nav-container,
.ant-tabs .ant-tabs-left-bar .ant-tabs-nav-wrap,
.ant-tabs .ant-tabs-right-bar .ant-tabs-nav-wrap {
  height: 100%;
}
.ant-tabs .ant-tabs-left-bar .ant-tabs-nav-container,
.ant-tabs .ant-tabs-right-bar .ant-tabs-nav-container {
  margin-bottom: 0;
}
.ant-tabs .ant-tabs-left-bar .ant-tabs-nav-container.ant-tabs-nav-container-scrolling,
.ant-tabs .ant-tabs-right-bar .ant-tabs-nav-container.ant-tabs-nav-container-scrolling {
  padding: 32px 0;
}
.ant-tabs .ant-tabs-left-bar .ant-tabs-nav-wrap,
.ant-tabs .ant-tabs-right-bar .ant-tabs-nav-wrap {
  margin-bottom: 0;
}
.ant-tabs .ant-tabs-left-bar .ant-tabs-nav,
.ant-tabs .ant-tabs-right-bar .ant-tabs-nav {
  width: 100%;
}
.ant-tabs .ant-tabs-left-bar .ant-tabs-ink-bar,
.ant-tabs .ant-tabs-right-bar .ant-tabs-ink-bar {
  top: 0;
  bottom: auto;
  left: auto;
  width: 2px;
  height: 0;
}
.ant-tabs .ant-tabs-left-bar .ant-tabs-tab-next,
.ant-tabs .ant-tabs-right-bar .ant-tabs-tab-next {
  right: 0;
  bottom: 0;
  width: 100%;
  height: 32px;
}
.ant-tabs .ant-tabs-left-bar .ant-tabs-tab-prev,
.ant-tabs .ant-tabs-right-bar .ant-tabs-tab-prev {
  top: 0;
  width: 100%;
  height: 32px;
}
.ant-tabs .ant-tabs-left-content,
.ant-tabs .ant-tabs-right-content {
  width: auto;
  margin-top: 0 !important;
  overflow: hidden;
}
.ant-tabs .ant-tabs-left-bar {
  float: left;
  margin-right: -1px;
  margin-bottom: 0;
  border-right: 1px solid #f0f0f0;
}
.ant-tabs .ant-tabs-left-bar .ant-tabs-tab {
  text-align: right;
}
.ant-tabs .ant-tabs-left-bar .ant-tabs-nav-container {
  margin-right: -1px;
}
.ant-tabs .ant-tabs-left-bar .ant-tabs-nav-wrap {
  margin-right: -1px;
}
.ant-tabs .ant-tabs-left-bar .ant-tabs-ink-bar {
  right: 1px;
}
.ant-tabs .ant-tabs-left-content {
  padding-left: 24px;
  border-left: 1px solid #f0f0f0;
}
.ant-tabs .ant-tabs-right-bar {
  float: right;
  margin-bottom: 0;
  margin-left: -1px;
  border-left: 1px solid #f0f0f0;
}
.ant-tabs .ant-tabs-right-bar .ant-tabs-nav-container {
  margin-left: -1px;
}
.ant-tabs .ant-tabs-right-bar .ant-tabs-nav-wrap {
  margin-left: -1px;
}
.ant-tabs .ant-tabs-right-bar .ant-tabs-ink-bar {
  left: 1px;
}
.ant-tabs .ant-tabs-right-content {
  padding-right: 24px;
  border-right: 1px solid #f0f0f0;
}
.ant-tabs-top .ant-tabs-ink-bar-animated,
.ant-tabs-bottom .ant-tabs-ink-bar-animated {
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), width 0.2s cubic-bezier(0.645, 0.045, 0.355, 1), left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-tabs-left .ant-tabs-ink-bar-animated,
.ant-tabs-right .ant-tabs-ink-bar-animated {
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), height 0.2s cubic-bezier(0.645, 0.045, 0.355, 1), top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.no-flex > .ant-tabs-content > .ant-tabs-content-animated,
.ant-tabs-no-animation > .ant-tabs-content > .ant-tabs-content-animated {
  margin-left: 0 !important;
  transform: none !important;
}
.no-flex > .ant-tabs-content > .ant-tabs-tabpane-inactive,
.ant-tabs-no-animation > .ant-tabs-content > .ant-tabs-tabpane-inactive {
  height: 0;
  padding: 0 !important;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
}
.no-flex > .ant-tabs-content > .ant-tabs-tabpane-inactive input,
.ant-tabs-no-animation > .ant-tabs-content > .ant-tabs-tabpane-inactive input {
  visibility: hidden;
}
.ant-tabs-left-content > .ant-tabs-content-animated,
.ant-tabs-right-content > .ant-tabs-content-animated {
  margin-left: 0 !important;
  transform: none !important;
}
.ant-tabs-left-content > .ant-tabs-tabpane-inactive,
.ant-tabs-right-content > .ant-tabs-tabpane-inactive {
  height: 0;
  padding: 0 !important;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
}
.ant-tabs-left-content > .ant-tabs-tabpane-inactive input,
.ant-tabs-right-content > .ant-tabs-tabpane-inactive input {
  visibility: hidden;
}
`;export{B as T};
