import{d as j,O as Q,P as a,F as D,I as q,z as k,c3 as xt,B as be,a3 as ee,J as N,j as g,D as ne,c4 as cn,n as Oe,v as _,x as We,p as F,y as he,M as Be,c5 as Pt,c6 as Mt,c0 as St,Z as _t,$ as It,ap as kt,a0 as z,aW as Ce,q as dn,s as pn,a as le,c7 as xe,c8 as ve,bL as H,a4 as fn,H as Kt,b9 as At,a5 as Tt,c9 as bn,G as hn,b0 as vn,an as $t,ca as Et,X as jt,cb as Dt,cc as Nt,r as Ue,t as gn,m as zt,cd as ge,E as Rt,b2 as Lt,bd as Wt,R as Bt}from"./index.de7a3c72.js";import{R as Ut}from"./RightOutlined.dcad5eff.js";import{E as Vt}from"./EllipsisOutlined.ba16b190.js";import{p as Ft}from"./types.ead79a33.js";import{i as Ht}from"./isEqual.42834150.js";import{t as Gt}from"./toInteger.e48028d2.js";var me={adjustX:1,adjustY:1},ce=[0,0],Xt={topLeft:{points:["bl","tl"],overflow:me,offset:[0,-4],targetOffset:ce},topCenter:{points:["bc","tc"],overflow:me,offset:[0,-4],targetOffset:ce},topRight:{points:["br","tr"],overflow:me,offset:[0,-4],targetOffset:ce},bottomLeft:{points:["tl","bl"],overflow:me,offset:[0,4],targetOffset:ce},bottomCenter:{points:["tc","bc"],overflow:me,offset:[0,4],targetOffset:ce},bottomRight:{points:["tr","br"],overflow:me,offset:[0,4],targetOffset:ce}};function Pe(){return Pe=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Pe.apply(this,arguments)}var Yt=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function qt(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!ne(t)}var Jt=j({mixins:[Q],props:{minOverlayWidthMatchTrigger:a.looseBool,prefixCls:a.string.def("rc-dropdown"),transitionName:a.string,overlayClassName:a.string.def(""),openClassName:a.string,animation:a.any,align:a.object,overlayStyle:a.object.def(function(){return{}}),placement:a.string.def("bottomLeft"),overlay:a.any,trigger:a.array.def(["hover"]),alignPoint:a.looseBool,showAction:a.array.def([]),hideAction:a.array.def([]),getPopupContainer:a.func,visible:a.looseBool,defaultVisible:a.looseBool.def(!1),mouseEnterDelay:a.number.def(.15),mouseLeaveDelay:a.number.def(.1)},data:function(){var e=this.defaultVisible;return D(this,"visible")&&(e=this.visible),{sVisible:e}},watch:{visible:function(e){e!==void 0&&this.setState({sVisible:e})}},methods:{onClick:function(e){var n=this.getOverlayElement().props;D(this,"visible")||this.setState({sVisible:!1}),this.__emit("overlayClick",e),n.onClick&&n.onClick(e)},onVisibleChange:function(e){D(this,"visible")||this.setState({sVisible:e}),this.__emit("update:visible",e),this.__emit("visibleChange",e)},getMinOverlayWidthMatchTrigger:function(){var e=q(this),n=e.minOverlayWidthMatchTrigger,r=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?n:!r},getOverlayElement:function(){var e=k(this,"overlay");return Array.isArray(e)?e[0]:e},getMenuElement:function(){var e=this,n=this.onClick,r=this.prefixCls,i=this.getOverlayElement(),o={prefixCls:"".concat(r,"-menu"),getPopupContainer:function(){return e.getPopupDomNode()},onClick:n};return i&&i.type===xt&&delete o.prefixCls,be(i,o)},getMenuElementOrLambda:function(){var e=this.overlay||this.$slots.overlay;return typeof e=="function"?this.getMenuElement:this.getMenuElement()},getPopupDomNode:function(){return this.triggerRef.getPopupDomNode()},getOpenClassName:function(){var e=this.$props,n=e.openClassName,r=e.prefixCls;return n!==void 0?n:"".concat(r,"-open")},afterVisibleChange:function(e){if(e&&this.getMinOverlayWidthMatchTrigger()){var n=this.getPopupDomNode(),r=ee(this);r&&n&&r.offsetWidth>n.offsetWidth&&(n.style.minWidth="".concat(r.offsetWidth,"px"),this.triggerRef&&this.triggerRef._component&&this.triggerRef._component.alignInstance&&this.triggerRef._component.alignInstance.forceAlign())}},renderChildren:function(){var e=N(this),n=this.sVisible;return n&&e?be(e[0],{class:this.getOpenClassName()},!1):e},saveTrigger:function(e){this.triggerRef=e}},render:function(){var e,n=this.$props,r=n.prefixCls,i=n.transitionName,o=n.animation,u=n.align,s=n.placement,l=n.getPopupContainer,m=n.showAction,c=n.hideAction,f=n.overlayClassName,b=n.overlayStyle,y=n.trigger,v=Yt(n,["prefixCls","transitionName","animation","align","placement","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","trigger"]),d=c;!d&&y.indexOf("contextmenu")!==-1&&(d=["click"]);var C=Pe(Pe({},v),{prefixCls:r,popupClassName:f,popupStyle:b,builtinPlacements:Xt,action:y,showAction:m,hideAction:d||[],popupPlacement:s,popupAlign:u,popupTransitionName:i,popupAnimation:o,popupVisible:this.sVisible,afterPopupVisibleChange:this.afterVisibleChange,getPopupContainer:l,onPopupVisibleChange:this.onVisibleChange,popup:this.getMenuElementOrLambda(),ref:this.saveTrigger});return g(cn,C,qt(e=this.renderChildren())?e:{default:function(){return[e]}})}}),yn=function(){return{trigger:{type:Array,default:function(){return["hover"]}},overlay:a.any,visible:a.looseBool,disabled:a.looseBool,align:a.object,getPopupContainer:a.func,prefixCls:a.string,transitionName:a.string,placement:a.oneOf(Oe("topLeft","topCenter","topRight","bottomLeft","bottomCenter","bottomRight")),overlayClassName:a.string,overlayStyle:a.style,forceRender:a.looseBool,mouseEnterDelay:a.number,mouseLeaveDelay:a.number,openClassName:a.string,minOverlayWidthMatchTrigger:a.looseBool}};function wn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function On(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?wn(Object(n),!0).forEach(function(r){Zt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):wn(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Zt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function G(){return G=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},G.apply(this,arguments)}var Qt=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function Ve(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!ne(t)}var er=Pt(),Cn=yn(),nr=Be.Group,tr=G(G(G({},Mt),Cn),{type:a.oneOf(Oe("primary","ghost","dashed","danger","default")).def("default"),size:a.oneOf(Oe("small","large","default")).def("default"),htmlType:er.htmlType,href:a.string,disabled:a.looseBool,prefixCls:a.string,placement:Cn.placement.def("bottomRight"),icon:a.any,title:a.string,onClick:a.func,onVisibleChange:a.func,"onUpdate:visible":a.func}),xn=j({name:"ADropdownButton",inheritAttrs:!1,props:tr,emits:["click","visibleChange","update:visible"],setup:function(){return{configProvider:_("configProvider",We),popupRef:null}},created:function(){F("savePopupRef",this.savePopupRef)},methods:{savePopupRef:function(e){this.popupRef=e},handleClick:function(e){this.$emit("click",e)},handleVisibleChange:function(e){this.$emit("update:visible",e),this.$emit("visibleChange",e)}},render:function(){var e=this,n,r,i=G(G({},this.$props),this.$attrs),o=i.type,u=i.disabled;i.onClick;var s=i.htmlType,l=i.class,m=i.prefixCls;i.overlay;var c=i.trigger,f=i.align,b=i.visible;i.onVisibleChange;var y=i.placement,v=i.getPopupContainer,d=i.href,C=i.title,S=Qt(i,["type","disabled","onClick","htmlType","class","prefixCls","overlay","trigger","align","visible","onVisibleChange","placement","getPopupContainer","href","title"]),h=k(this,"icon")||g(Vt,null,null),x=this.configProvider.getPopupContainer,P=this.configProvider.getPrefixCls,V=P("dropdown-button",m),A={align:f,disabled:u,trigger:u?[]:c,placement:y,getPopupContainer:v||x,onVisibleChange:this.handleVisibleChange};D(this,"visible")&&(A.visible=b);var ue=G(G({},S),{class:he(V,l)});return g(nr,ue,{default:function(){return[g(Be,{type:o,disabled:u,onClick:e.handleClick,htmlType:s,href:d,title:C},Ve(n=N(e))?n:{default:function(){return[n]}}),g(Fe,On(On({},A),{},{overlay:k(e,"overlay")}),Ve(r=g(Be,{type:o},Ve(h)?h:{default:function(){return[h]}}))?r:{default:function(){return[r]}})]}})}});function te(){return te=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},te.apply(this,arguments)}function rr(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!ne(t)}var Pn=yn(),Fe=j({name:"ADropdown",inheritAttrs:!1,props:te(te({},Pn),{prefixCls:a.string,mouseEnterDelay:a.number.def(.15),mouseLeaveDelay:a.number.def(.1),placement:Pn.placement.def("bottomLeft"),onVisibleChange:a.func,"onUpdate:visible":a.func}),emits:["visibleChange","update:visible"],setup:function(){return{configProvider:_("configProvider",We),popupRef:null}},created:function(){F("savePopupRef",this.savePopupRef)},methods:{savePopupRef:function(e){this.popupRef=e},getTransitionName:function(){var e=this.$props,n=e.placement,r=n===void 0?"":n,i=e.transitionName;return i!==void 0?i:r.indexOf("top")>=0?"slide-down":"slide-up"},renderOverlay:function(e){var n=k(this,"overlay"),r=Array.isArray(n)?n[0]:n,i=r&&St(r),o=i||{},u=o.selectable,s=u===void 0?!1:u,l=o.focusable,m=l===void 0?!0:l,c=g("span",{class:"".concat(e,"-menu-submenu-arrow")},[g(Ut,{class:"".concat(e,"-menu-submenu-arrow-icon")},null)]),f=_t(r)?It(r,{mode:"vertical",selectable:s,focusable:m,expandIcon:c}):n;return f},handleVisibleChange:function(e){this.$emit("update:visible",e),this.$emit("visibleChange",e)}},render:function(){var e,n=q(this),r=n.prefixCls,i=n.trigger,o=n.disabled,u=n.getPopupContainer,s=this.configProvider.getPopupContainer,l=this.configProvider.getPrefixCls,m=l("dropdown",r),c=N(this)[0],f=be(c,{class:he((e=c==null?void 0:c.props)===null||e===void 0?void 0:e.class,"".concat(m,"-trigger")),disabled:o}),b=o?[]:i,y;b&&b.indexOf("contextmenu")!==-1&&(y=!0);var v=te(te(te({alignPoint:y},n),this.$attrs),{prefixCls:m,getPopupContainer:u||s,transitionName:this.getTransitionName(),trigger:b,overlay:this.renderOverlay(m),onVisibleChange:this.handleVisibleChange});return g(Jt,v,rr(f)?f:{default:function(){return[f]}})}});Fe.Button=xn;function Me(){return Me=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Me.apply(this,arguments)}function Mn(t,e){return ur(t)||or(t,e)||ar(t,e)||ir()}function ir(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ar(t,e){if(!!t){if(typeof t=="string")return Sn(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Sn(t,e)}}function Sn(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function or(t,e){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(t)))){var n=[],r=!0,i=!1,o=void 0;try{for(var u=t[Symbol.iterator](),s;!(r=(s=u.next()).done)&&(n.push(s.value),!(e&&n.length===e));r=!0);}catch(l){i=!0,o=l}finally{try{!r&&u.return!=null&&u.return()}finally{if(i)throw o}}return n}}function ur(t){if(Array.isArray(t))return t}var He=/iPhone/i,_n=/iPod/i,In=/iPad/i,Ge=/\bAndroid(?:.+)Mobile\b/i,kn=/Android/i,de=/\bAndroid(?:.+)SD4930UR\b/i,Se=/\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i,X=/Windows Phone/i,Kn=/\bWindows(?:.+)ARM\b/i,An=/BlackBerry/i,Tn=/BB10/i,$n=/Opera Mini/i,En=/\b(CriOS|Chrome)(?:.+)Mobile/i,jn=/Mobile(?:.+)Firefox\b/i;function p(t,e){return t.test(e)}function Dn(t){var e=t||(typeof navigator!="undefined"?navigator.userAgent:""),n=e.split("[FBAN");if(typeof n[1]!="undefined"){var r=n,i=Mn(r,1);e=i[0]}if(n=e.split("Twitter"),typeof n[1]!="undefined"){var o=n,u=Mn(o,1);e=u[0]}var s={apple:{phone:p(He,e)&&!p(X,e),ipod:p(_n,e),tablet:!p(He,e)&&p(In,e)&&!p(X,e),device:(p(He,e)||p(_n,e)||p(In,e))&&!p(X,e)},amazon:{phone:p(de,e),tablet:!p(de,e)&&p(Se,e),device:p(de,e)||p(Se,e)},android:{phone:!p(X,e)&&p(de,e)||!p(X,e)&&p(Ge,e),tablet:!p(X,e)&&!p(de,e)&&!p(Ge,e)&&(p(Se,e)||p(kn,e)),device:!p(X,e)&&(p(de,e)||p(Se,e)||p(Ge,e)||p(kn,e))||p(/\bokhttp\b/i,e)},windows:{phone:p(X,e),tablet:p(Kn,e),device:p(X,e)||p(Kn,e)},other:{blackberry:p(An,e),blackberry10:p(Tn,e),opera:p($n,e),firefox:p(jn,e),chrome:p(En,e),device:p(An,e)||p(Tn,e)||p($n,e)||p(jn,e)||p(En,e)},any:null,phone:null,tablet:null};return s.any=s.apple.device||s.android.device||s.windows.device||s.other.device,s.phone=s.apple.phone||s.android.phone||s.windows.phone,s.tablet=s.apple.tablet||s.android.tablet||s.windows.tablet,s}var sr=Me(Me({},Dn()),{isMobile:Dn});function _e(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_e=function(n){return typeof n}:_e=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_e(t)}function T(){}function lr(t,e,n){var r=e||"";return t.key===null?"".concat(r,"item_").concat(n):t.key}function mr(t){return"".concat(t,"-menu-")}function Nn(t,e,n){!t||n.find||t.forEach(function(r){if(!n.find){var i=r.type;if(i&&kt(i)){if(!i||!(i.isSubMenu||i.isMenuItem||i.isMenuItemGroup||i.isMenuProvider))return;e.indexOf(r.key)!==-1?n.find=!0:r.children&&r.children.default&&Nn(r.children.default(),e,n)}}})}var Ie=["defaultSelectedKeys","selectedKeys","defaultOpenKeys","openKeys","mode","getPopupContainer","openTransitionName","openAnimation","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","triggerSubMenuAction","level","selectable","multiple","visible","focusable","defaultActiveFirst","prefixCls","inlineIndent","title","rootPrefixCls","eventKey","active","popupAlign","popupOffset","isOpen","renderMenuItem","manualRef","subMenuKey","disabled","index","isSelected","store","activeKey","builtinPlacements","overflowedIndicator","attribute","value","popupClassName","inlineCollapsed","menu","theme","itemIcon","expandIcon","onSelect","onDeselect","onDestroy","onOpenChange","onItemHover","onTitleMouseenter","onTitleMouseleave","onTitleClick","slots","ref","isRootMenu","parentUniKeys","parentUniKey"],Xe=function(e){var n=e&&typeof e.getBoundingClientRect=="function"&&e.getBoundingClientRect().width;return n&&(n=+n.toFixed(6)),n||0},ke=function(e,n,r){e&&_e(e.style)==="object"&&(e.style[n]=r)},cr=function(){return sr.any},Ke={adjustX:1,adjustY:1},zn={topLeft:{points:["bl","tl"],overflow:Ke,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Ke,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Ke,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Ke,offset:[4,0]}},J=Symbol(),dr={inheritAttrs:!1,isMenuProvider:!0,props:{extraProps:Ft.object},setup:function(e,n){var r=n.slots;return F(J,z(function(){return e.extraProps})),function(){var i;return(i=r.default)===null||i===void 0?void 0:i.call(r)}}};function Y(){return Y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Y.apply(this,arguments)}function Rn(t){var e=t.props||{},n={};Object.keys(e).forEach(function(i){n[i]=Y(Y({},e[i]),{required:!1})});var r={name:"Connect_".concat(t.name),inheritAttrs:!1,props:n,setup:function(o){F(J,void 0);var u=J?_(J,function(){return{}}):{};return Ce(u,function(){}),{props:o,injectExtraProps:u}},methods:{getWrappedInstance:function(){return this.$refs.wrappedInstance}},render:function(){var o=this.$slots,u=o===void 0?{}:o,s=this.$attrs,l=Y(Y({},this.props),this.injectExtraProps),m=Y(Y(Y({},s),l),{ref:"wrappedInstance"});return g(t,m,u)}};return j(r)}var R;function Ln(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ye(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ln(Object(n),!0).forEach(function(r){w(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ln(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ae(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ae=function(n){return typeof n}:Ae=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ae(t)}function M(){return M=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},M.apply(this,arguments)}function pr(t){return vr(t)||hr(t)||br(t)||fr()}function fr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function br(t,e){if(!!t){if(typeof t=="string")return qe(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qe(t,e)}}function hr(t){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(t))return Array.from(t)}function vr(t){if(Array.isArray(t))return qe(t)}function qe(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Wn(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!ne(t)}var gr=0,yr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"},ye=function(e,n,r){var i=mr(n);e.defaultActiveFirst[i]=r},wr=0,Or=j((R={name:"SubMenu",mixins:[Q],inheritAttrs:!1,isSubMenu:!0,props:{title:a.any,openKeys:a.array.def([]),openChange:a.func.def(T),rootPrefixCls:a.string,eventKey:a.oneOfType([a.string,a.number]),multiple:a.looseBool,isRootMenu:a.looseBool.def(!1),index:a.number,triggerSubMenuAction:a.string,popupClassName:a.string,getPopupContainer:a.func,forceSubMenuRender:a.looseBool.def(!1),openAnimation:a.oneOfType([a.string,a.object]),disabled:a.looseBool,subMenuOpenDelay:a.number.def(.1),subMenuCloseDelay:a.number.def(.1),level:a.number.def(1),inlineIndent:a.number.def(24),openTransitionName:a.string,popupOffset:a.array,mode:a.oneOf(["horizontal","vertical","vertical-left","vertical-right","inline"]).def("vertical"),manualRef:a.func.def(T),builtinPlacements:a.object.def(function(){return{}}),itemIcon:a.any,expandIcon:a.any,subMenuKey:a.string,theme:a.string,parentUniKeys:a.array.def(function(){return[]}),parentUniKey:a.string,isOverflowedSubMenu:a.looseBool.def(!1)}},w(R,"isSubMenu",!0),w(R,"setup",function(e){var n=e.isOverflowedSubMenu?"MENUITEM_OVERFLOWED_UNI_KEY":"sub_menu_".concat(++wr),r=_("menuStore",function(){return{}});dn(function(){r.addChildrenInfo(n,z(function(){return{parentUniKeys:e.parentUniKeys,parentUniKey:e.parentUniKey,eventKey:e.eventKey,disabled:e.disabled}}))}),pn(function(){r.removeChildrenInfo(n)});var i=z(function(){return r.selectedParentUniKeys.indexOf(n)!==-1}),o=vn(),u=function(){return o.vnode.el};return F("parentMenu",le({isRootMenu:z(function(){return e.isRootMenu}),getPopupContainer:e.getPopupContainer,getEl:u})),{parentMenu:_("parentMenu",void 0),store:r,isChildrenSelected:i,childrenUniKeys:[].concat(pr(e.parentUniKeys),[n]),uniKey:n,isOpen:z(function(){return r.openKeys.indexOf(e.eventKey)>-1}),active:z(function(){return r.activeKey[e.subMenuKey]===e.eventKey})}}),w(R,"data",function(){var e=this.$props,n=this.store,r=e.eventKey,i=n.defaultActiveFirst,o=!1;return i&&(o=i[r]),ye(n,r,o),this.internalMenuId=void 0,this.haveRendered=void 0,this.haveOpened=void 0,this.subMenuTitle=void 0,{}}),w(R,"mounted",function(){var e=this;this.$nextTick(function(){e.handleUpdated()})}),w(R,"updated",function(){var e=this;this.$nextTick(function(){e.handleUpdated()})}),w(R,"beforeUnmount",function(){var e=this.eventKey;this.__emit("destroy",e),this.minWidthTimeout&&(xe(this.minWidthTimeout),this.minWidthTimeout=null),this.mouseenterTimeout&&(xe(this.mouseenterTimeout),this.mouseenterTimeout=null)}),w(R,"methods",{isChildrenSelected2:function(){if(this.haveOpened)return this.isChildrenSelected;var e={find:!1};return Nn(N(this),this.store.selectedKeys,e),e.find},handleUpdated:function(){var e=this,n=this.$props,r=n.mode,i=n.manualRef;i&&i(this),!(r!=="horizontal"||!this.parentMenu.isRootMenu||!this.isOpen)&&(this.minWidthTimeout=ve(function(){return e.adjustWidth()},0))},onKeyDown:function(e){var n=e.keyCode,r=this.menuInstance,i=this.isOpen;if(n===H.ENTER)return this.onTitleClick(e),ye(this.store,this.$props.eventKey,!0),!0;if(n===H.RIGHT)return i?r.onKeyDown(e):(this.triggerOpenChange(!0),ye(this.store,this.$props.eventKey,!0)),!0;if(n===H.LEFT){var o;if(i)o=r.onKeyDown(e);else return;return o||(this.triggerOpenChange(!1),o=!0),o}if(i&&(n===H.UP||n===H.DOWN))return r.onKeyDown(e)},onPopupVisibleChange:function(e){this.triggerOpenChange(e,e?"mouseenter":"mouseleave")},onMouseEnter:function(e){var n=this.$props.eventKey;ye(this.store,n,!1),this.__emit("mouseenter",{key:n,domEvent:e})},onMouseLeave:function(e){var n=this.$props.eventKey;this.__emit("mouseleave",{key:n,domEvent:e})},onTitleMouseEnter:function(e){var n=this.$props.eventKey;this.__emit("itemHover",{key:n,hover:!0}),this.__emit("titleMouseenter",{key:n,domEvent:e})},onTitleMouseLeave:function(e){var n=this.$props.eventKey;this.__emit("itemHover",{key:n,hover:!1}),this.__emit("titleMouseleave",{key:n,domEvent:e})},onTitleClick:function(e){var n=this.$props,r=n.triggerSubMenuAction,i=n.eventKey;this.__emit("titleClick",{key:i,domEvent:e}),r!=="hover"&&(this.triggerOpenChange(!this.isOpen,"click"),ye(this.store,i,!1))},onSubMenuClick:function(e){this.__emit("click",this.addKeyPath(e))},getPrefixCls:function(){return"".concat(this.$props.rootPrefixCls,"-submenu")},getActiveClassName:function(){return"".concat(this.getPrefixCls(),"-active")},getDisabledClassName:function(){return"".concat(this.getPrefixCls(),"-disabled")},getSelectedClassName:function(){return"".concat(this.getPrefixCls(),"-selected")},getOpenClassName:function(){return"".concat(this.$props.rootPrefixCls,"-submenu-open")},saveMenuInstance:function(e){this.menuInstance=e},addKeyPath:function(e){return M(M({},e),{keyPath:(e.keyPath||[]).concat(this.$props.eventKey)})},triggerOpenChange:function(e,n){var r=this,i=this.$props.eventKey,o=function(){r.__emit("openChange",{key:i,item:r.$props,trigger:n,open:e})};n==="mouseenter"?this.mouseenterTimeout=ve(function(){o()},0):o()},adjustWidth:function(){if(!(!this.subMenuTitle||!this.menuInstance)){var e=ee(this.menuInstance);e.offsetWidth>=this.subMenuTitle.offsetWidth||(e.style.minWidth="".concat(this.subMenuTitle.offsetWidth,"px"))}},saveSubMenuTitle:function(e){this.subMenuTitle=e},renderChildren:function(){var e,n=M(M({},this.$props),this.$attrs),r={mode:n.mode==="horizontal"?"vertical":n.mode,visible:this.isOpen,level:n.level+1,inlineIndent:n.inlineIndent,focusable:!1,eventKey:"".concat(n.eventKey,"-menu-"),openKeys:n.openKeys,openTransitionName:n.openTransitionName,openAnimation:n.openAnimation,subMenuOpenDelay:n.subMenuOpenDelay,subMenuCloseDelay:n.subMenuCloseDelay,forceSubMenuRender:n.forceSubMenuRender,triggerSubMenuAction:n.triggerSubMenuAction,builtinPlacements:n.builtinPlacements,multiple:n.multiple,prefixCls:n.rootPrefixCls,manualRef:this.saveMenuInstance,itemIcon:k(this,"itemIcon"),expandIcon:k(this,"expandIcon"),onClick:this.onSubMenuClick,onSelect:n.onSelect||T,onDeselect:n.onDeselect||T,onOpenChange:n.onOpenChange||T,id:this.internalMenuId,parentUniKeys:this.childrenUniKeys,parentUniKey:this.uniKey},i=this.haveRendered;if(this.haveRendered=!0,this.haveOpened=this.haveOpened||r.visible||r.forceSubMenuRender,!this.haveOpened)return g("div",null,null);var o=i||!r.visible||!r.mode==="inline";r.class=" ".concat(r.prefixCls,"-sub");var u={appear:o,css:!1};return r.openTransitionName?u=fn(r.openTransitionName,{appear:o}):Ae(r.openAnimation)==="object"?(u=M(M({},u),r.openAnimation||{}),o||(u.appear=!1)):typeof r.openAnimation=="string"&&(u=fn(r.openAnimation,{appear:o})),g(Tt,u,Wn(e=Kt(g(Xn,r,Ye({},this.$slots)),[[At,this.isOpen]]))?e:{default:function(){return[e]}})}}),w(R,"render",function(){var e,n,r=M(M({},this.$props),this.$attrs),i=bn(r),o=i.onEvents,u=this.isOpen,s=this.getPrefixCls(),l=r.mode==="inline";this.internalMenuId||(r.eventKey?this.internalMenuId="".concat(r.eventKey,"$Menu"):this.internalMenuId="$__$".concat(++gr,"$Menu"));var m=this.renderChildren(),c=(e={},w(e,s,!0),w(e,"".concat(s,"-").concat(r.mode),!0),w(e,r.class,!!r.class),w(e,this.getOpenClassName(),u),w(e,this.getActiveClassName(),this.active||u&&!l),w(e,this.getDisabledClassName(),r.disabled),w(e,this.getSelectedClassName(),this.isChildrenSelected||this.isChildrenSelected2()),e),f={},b={},y={};r.disabled||(f={onMouseleave:this.onMouseLeave,onMouseenter:this.onMouseEnter},b={onClick:this.onTitleClick},y={onMouseenter:this.onTitleMouseEnter,onMouseleave:this.onTitleMouseLeave});var v={};l&&(v.paddingLeft="".concat(r.inlineIndent*r.level,"px"));var d={};u&&(d={"aria-owns":this.internalMenuId});var C=M(M(M(M(M({"aria-expanded":u},d),{"aria-haspopup":"true",title:typeof r.title=="string"?r.title:void 0}),y),b),{style:v,class:"".concat(s,"-title"),ref:this.saveSubMenuTitle}),S=null;r.mode!=="horizontal"&&(S=k(this,"expandIcon",r));var h=g("div",C,[k(this,"title"),S||g("i",{class:"".concat(s,"-arrow")},null)]),x=this.parentMenu.isRootMenu?this.parentMenu.getPopupContainer:function(se){return se.parentNode},P=yr[r.mode],V=r.popupOffset?{offset:r.popupOffset}:{},A=r.mode==="inline"?"":r.popupClassName||"";A="".concat(s,"-popup ").concat(A);var ue=M(M(M({},hn(o,["onClick"])),f),{class:c,style:r.style});return g("li",Ye(Ye({},ue),{},{role:"menuitem"}),[l&&h,l&&m,!l&&g(cn,(n={prefixCls:s,popupClassName:A,getPopupContainer:x,builtinPlacements:zn},w(n,"builtinPlacements",M({},zn,r.builtinPlacements)),w(n,"popupPlacement",P),w(n,"popupVisible",u),w(n,"popupAlign",V),w(n,"action",r.disabled?[]:[r.triggerSubMenuAction]),w(n,"mouseEnterDelay",r.subMenuOpenDelay),w(n,"mouseLeaveDelay",r.subMenuCloseDelay),w(n,"onPopupVisibleChange",this.onPopupVisibleChange),w(n,"forceRender",r.forceSubMenuRender),w(n,"popup",m),n),Wn(h)?h:{default:function(){return[h]}})])}),R)),Te=Rn(Or);function Bn(t){return Mr(t)||Pr(t)||xr(t)||Cr()}function Cr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xr(t,e){if(!!t){if(typeof t=="string")return Je(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Je(t,e)}}function Pr(t){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(t))return Array.from(t)}function Mr(t){if(Array.isArray(t))return Je(t)}function Je(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function L(){return L=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},L.apply(this,arguments)}var Sr=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function Un(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!ne(t)}var Vn="menuitem-overflowed",_r=.5,Ze="MENUITEM_OVERFLOWED_UNI_KEY",Fn=[Ze],Hn={name:"DOMWrap",mixins:[Q],data:function(){return this.resizeObserver=null,this.mutationObserver=null,this.originalTotalWidth=0,this.overflowedItems=[],this.menuItemSizes=[],{lastVisibleIndex:void 0}},mounted:function(){var e=this;this.$nextTick(function(){if(e.setChildrenWidthAndResize(),e.level===1&&e.mode==="horizontal"){var n=ee(e);if(!n)return;e.resizeObserver=new $t(function(r){r.forEach(e.setChildrenWidthAndResize)}),[].slice.call(n.children).concat(n).forEach(function(r){e.resizeObserver.observe(r)}),typeof MutationObserver!="undefined"&&(e.mutationObserver=new MutationObserver(function(){e.resizeObserver.disconnect(),[].slice.call(n.children).concat(n).forEach(function(r){e.resizeObserver.observe(r)}),e.setChildrenWidthAndResize()}),e.mutationObserver.observe(n,{attributes:!1,childList:!0,subTree:!1}))}})},beforeUnmount:function(){this.resizeObserver&&this.resizeObserver.disconnect(),this.mutationObserver&&this.mutationObserver.disconnect()},methods:{getMenuItemNodes:function(){var e=this.$props.prefixCls,n=ee(this);return n?[].slice.call(n.children).filter(function(r){return r.className.split(" ").indexOf("".concat(e,"-overflowed-submenu"))<0}):[]},getOverflowedSubMenuItem:function(e,n,r){var i=this.$props,o=i.overflowedIndicator,u=i.level,s=i.mode,l=i.prefixCls,m=i.theme;if(u!==1||s!=="horizontal")return null;var c=N(this)[0],f=Et(c)||{},b=L(L({},f),f.extraProps);b.title,b.extraProps;var y=Sr(b,["title","extraProps"]),v={},d="".concat(e,"-overflowed-indicator"),C="".concat(e,"-overflowed-indicator");n.length===0&&r!==!0?v={display:"none"}:r&&(v={visibility:"hidden",position:"absolute"},d="".concat(d,"-placeholder"),C="".concat(C,"-placeholder"));var S=m?"".concat(l,"-").concat(m):"",h={};Ie.forEach(function(P){y[P]!==void 0&&(h[P]=y[P])});var x=L(L({title:o,popupClassName:S},h),{eventKey:C,disabled:!1,class:"".concat(l,"-overflowed-submenu"),key:d,style:v,isOverflowedSubMenu:!0});return g(Te,x,Un(n)?n:{default:function(){return[n]}})},setChildrenWidthAndResize:function(){if(this.mode==="horizontal"){var e=ee(this);if(!!e){var n=e.children;if(!(!n||n.length===0)){var r=e.children[n.length-1];ke(r,"display","inline-block");var i=this.getMenuItemNodes(),o=i.filter(function(u){return u.className.split(" ").indexOf(Vn)>=0});o.forEach(function(u){ke(u,"display","inline-block")}),this.menuItemSizes=i.map(function(u){return Xe(u)}),o.forEach(function(u){ke(u,"display","none")}),this.overflowedIndicatorWidth=Xe(e.children[e.children.length-1]),this.originalTotalWidth=this.menuItemSizes.reduce(function(u,s){return u+s},0),this.handleResize(),ke(r,"display","none")}}}},handleResize:function(){var e=this;if(this.mode==="horizontal"){var n=ee(this);if(!!n){var r=Xe(n);this.overflowedItems=[];var i=0,o;this.originalTotalWidth>r+_r&&(o=-1,this.menuItemSizes.forEach(function(u){i+=u,i+e.overflowedIndicatorWidth<=r&&(o+=1)})),this.setState({lastVisibleIndex:o})}}},renderChildren:function(e){var n=this,r=this.$data.lastVisibleIndex,i=this.$attrs.class||"";return(e||[]).reduce(function(o,u,s){var l=u,m=l.props||{},c=m.extraProps,f=c===void 0?{}:c,b=f.eventKey;if(n.mode==="horizontal"){var y=n.getOverflowedSubMenuItem(b,[]);r!==void 0&&i.indexOf("".concat(n.prefixCls,"-root"))!==-1&&(s>r&&(l=be(u,{extraProps:L(L({},f),{style:{display:"none"},eventKey:"".concat(b,"-hidden"),class:Vn,parentUniKey:Ze,parentUniKeys:Fn})})),s===r+1&&(n.overflowedItems=e.slice(r+1).map(function(d){var C=d.props||{},S=C.extraProps,h=S===void 0?{}:S,x=h.eventKey;return be(d,{extraProps:L(L({},h),{key:x,mode:"vertical-left",parentUniKey:Ze,parentUniKeys:Fn})})}),y=n.getOverflowedSubMenuItem(b,n.overflowedItems)));var v=[].concat(Bn(o),[y,l]);return s===e.length-1&&v.push(n.getOverflowedSubMenuItem(b,[],!0)),v}return[].concat(Bn(o),[l])},[])}},render:function(){var e,n=this.$props.tag;return g(n,null,Un(e=this.renderChildren(N(this)))?e:{default:function(){return[e]}})}};Hn.props={mode:a.oneOf(["horizontal","vertical","vertical-left","vertical-right","inline"]),prefixCls:a.string,level:a.number,theme:a.string,overflowedIndicator:a.any,visible:a.looseBool,hiddenClassName:a.string,tag:a.string.def("div")};function W(){return W=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},W.apply(this,arguments)}function Gn(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!ne(t)}function Ir(t){return t.length?t.every(function(e){return!!e.disabled}):!0}function $e(t,e,n){t.activeKey[e]=n}function re(t){return t.eventKey||"0-menu-"}function kr(t,e){if(e){var n=this.instanceArrayKeyIndexMap[t];this.instanceArray[n]=e}}var Xn={name:"SubPopupMenu",inheritAttrs:!1,props:jt({prefixCls:a.string,openTransitionName:a.string,openAnimation:a.oneOfType([a.string,a.object]),openKeys:a.arrayOf(a.oneOfType([a.string,a.number])),visible:a.looseBool,eventKey:a.string,focusable:a.looseBool,multiple:a.looseBool,defaultActiveFirst:a.looseBool,activeKey:a.oneOfType([a.string,a.number]),defaultSelectedKeys:a.arrayOf(a.oneOfType([a.string,a.number])),defaultOpenKeys:a.arrayOf(a.oneOfType([a.string,a.number])),level:a.number,mode:a.oneOf(["horizontal","vertical","vertical-left","vertical-right","inline"]),triggerSubMenuAction:a.oneOf(["click","hover"]),inlineIndent:a.oneOfType([a.number,a.string]),manualRef:a.func,itemIcon:a.any,expandIcon:a.any,overflowedIndicator:a.any,children:a.any.def([]),subMenuOpenDelay:a.number.def(.1),subMenuCloseDelay:a.number.def(.1),forceSubMenuRender:a.looseBool.def(!1),parentUniKeys:a.array.def(function(){return[]}),parentUniKey:a.string,theme:a.string},{prefixCls:"rc-menu",mode:"vertical",level:1,inlineIndent:24,visible:!0,focusable:!0,manualRef:T}),mixins:[Q],setup:function(){var e=_("menuStore",function(){return{}});return{store:e}},created:function(){var e=q(this);this.prevProps=W({},e),this.store.activeKey[e.eventKey]=this.store.getActiveKey(e.activeKey),this.instanceArray=[]},mounted:function(){this.manualRef&&this.manualRef(this)},updated:function(){var e=q(this),n=this.prevProps,r="activeKey"in e?e.activeKey:this.store.activeKey[re(e)],i=this.store.getActiveKey(r);if(i!==r)$e(this.store,re(e),i);else if("activeKey"in n){var o=this.store.getActiveKey(n.activeKey);i!==o&&$e(this.store,re(e),i)}this.prevProps=W({},e)},methods:{onKeyDown:function(e,n){var r=e.keyCode,i;if(this.getFlatInstanceArray().forEach(function(u){u&&u.active&&u.onKeyDown&&(i=u.onKeyDown(e))}),i)return 1;var o=null;if((r===H.UP||r===H.DOWN)&&(o=this.step(r===H.UP?-1:1)),o)return e.preventDefault(),$e(this.store,re(this.$props),o.eventKey),typeof n=="function"&&n(o),1},onItemHover:function(e){var n=e.key,r=e.hover;$e(this.store,re(this.$props),r?n:null)},onDeselect:function(e){this.__emit("deselect",e)},onSelect:function(e){this.__emit("select",e)},onClick:function(e){this.__emit("click",e)},onOpenChange:function(e){this.__emit("openChange",e)},onDestroy:function(e){this.__emit("destroy",e)},getFlatInstanceArray:function(){return this.instanceArray},getOpenTransitionName:function(){return this.$props.openTransitionName},step:function(e){var n=this.getFlatInstanceArray(),r=this.store.activeKey[re(this.$props)],i=n.length;if(!i)return null;e<0&&(n=n.concat().reverse());var o=-1;if(n.every(function(m,c){return m&&m.eventKey===r?(o=c,!1):!0}),!(!this.defaultActiveFirst&&o!==-1&&Ir(n.slice(o,i-1)))){var u=(o+1)%i,s=u;do{var l=n[s];if(!l||l.disabled)s=(s+1)%i;else return l}while(s!==u);return null}},getIcon:function(e,n){return k(e,n)},renderCommonMenuItem:function(e,n,r){var i=this;if(e.type===Dt)return e;var o=this.store,u=this.$props,s=lr(e,u.eventKey,n),l=e.props||{},m=s===o.activeKey[re(this.$props)];l.disabled||(this.instanceArrayKeyIndexMap[s]=Object.keys(this.instanceArrayKeyIndexMap).length);var c=W(W({mode:l.mode||u.mode,level:u.level,inlineIndent:u.inlineIndent,renderMenuItem:this.renderMenuItem,rootPrefixCls:u.prefixCls,index:n,manualRef:l.disabled?T:kr.bind(this,s),eventKey:s,active:!l.disabled&&m,multiple:u.multiple,openTransitionName:this.getOpenTransitionName(),openAnimation:u.openAnimation,subMenuOpenDelay:u.subMenuOpenDelay,subMenuCloseDelay:u.subMenuCloseDelay,builtinPlacements:u.builtinPlacements,itemIcon:this.getIcon(e,"itemIcon")||this.getIcon(this,"itemIcon"),expandIcon:this.getIcon(e,"expandIcon")||this.getIcon(this,"expandIcon")},r),{onClick:function(b){(l.onClick||T)(b),i.onClick(b)},onItemHover:this.onItemHover,onOpenChange:this.onOpenChange,onDeselect:this.onDeselect,onSelect:this.onSelect,parentUniKeys:this.parentUniKeys,parentUniKey:this.parentUniKey});return u.forceSubMenuRender!==void 0&&(c.forceSubMenuRender=u.forceSubMenuRender),(u.mode==="inline"||cr())&&(c.triggerSubMenuAction="click"),g(dr,{extraProps:c},Gn(e)?e:{default:function(){return[e]}})},renderMenuItem:function(e,n,r){if(!e)return null;var i=this.store,o={openKeys:i.openKeys,selectedKeys:i.selectedKeys,triggerSubMenuAction:this.triggerSubMenuAction,isRootMenu:!1,subMenuKey:r};return this.renderCommonMenuItem(e,n,o)}},render:function(){var e,n=this,r=W({},this.$props),i=bn(this.$attrs),o=i.onEvents,u=i.extraAttrs,s=r.eventKey,l=r.prefixCls,m=r.visible,c=r.level,f=r.mode,b=r.theme;this.instanceArray=[],this.instanceArrayKeyIndexMap={};var y=he(u.class,r.prefixCls,"".concat(r.prefixCls,"-").concat(r.mode));Ie.forEach(function(d){return delete r[d]}),delete o.onClick;var v=W(W(W({},r),{tag:"ul",visible:m,prefixCls:l,level:c,mode:f,theme:b,overflowedIndicator:k(this,"overflowedIndicator"),role:r.role||"menu",class:y,style:u.style}),o);return u.id!==void 0&&(v.id=u.id),r.focusable&&(v.tabindex="0",v.onKeydown=this.onKeyDown),delete v.children,g(Hn,v,Gn(e=N(this).map(function(d,C){return n.renderMenuItem(d,C,s||"0-menu-")}))?e:{default:function(){return[e]}})}},Yn={prefixCls:a.string.def("rc-menu"),focusable:a.looseBool.def(!0),multiple:a.looseBool,visible:a.looseBool.def(!0),activeKey:a.oneOfType([a.string,a.number]),selectedKeys:a.arrayOf(a.oneOfType([a.string,a.number])),defaultSelectedKeys:a.arrayOf(a.oneOfType([a.string,a.number])).def([]),defaultOpenKeys:a.arrayOf(a.oneOfType([a.string,a.number])).def([]),openKeys:a.arrayOf(a.oneOfType([a.string,a.number])),openAnimation:a.oneOfType([a.string,a.object]),mode:a.oneOf(["horizontal","vertical","vertical-left","vertical-right","inline"]).def("vertical"),triggerSubMenuAction:a.string.def("hover"),subMenuOpenDelay:a.number.def(.1),subMenuCloseDelay:a.number.def(.1),level:a.number.def(1),inlineIndent:a.number.def(24),theme:a.oneOf(["light","dark"]).def("light"),getPopupContainer:a.func,openTransitionName:a.string,forceSubMenuRender:a.looseBool.def(!1),selectable:a.looseBool,isRootMenu:a.looseBool.def(!0),builtinPlacements:a.object.def(function(){return{}}),itemIcon:a.any,expandIcon:a.any,overflowedIndicator:a.any,onClick:a.func,onSelect:a.func,onDeselect:a.func},Kr=Math.max;function Qe(t,e,n){var r=t==null?0:t.length;if(!r)return-1;var i=n==null?0:Gt(n);return i<0&&(i=Kr(r+i,0)),Nt(t,e,i)}function qn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ar(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?qn(Object(n),!0).forEach(function(r){Tr(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):qn(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Tr(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Jn(t){return Dr(t)||jr(t)||Er(t)||$r()}function $r(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Er(t,e){if(!!t){if(typeof t=="string")return en(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return en(t,e)}}function jr(t){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(t))return Array.from(t)}function Dr(t){if(Array.isArray(t))return en(t)}function en(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function $(){return $=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$.apply(this,arguments)}var Nr={name:"Menu",inheritAttrs:!1,props:$($({},Yn),{onClick:a.func,selectable:a.looseBool.def(!0)}),mixins:[Q],setup:function(e){var n=le({}),r=Ue(e.selectedKeys||e.defaultSelectedKeys||[]),i=Ue(e.openKeys||e.defaultOpenKeys||[]);Ce(function(){return e.selectedKeys},function(){r.value=e.selectedKeys}),Ce(function(){return e.openKeys},function(){i.value=e.openKeys||[]});var o=le({"0-menu-":e.activeKey}),u=le({}),s=function(d,C){n[d]=C},l=function(d){delete n[d]},m=function(d){return d},c=Ue([]);Ce(n,function(){var v=Object.values(n).filter(function(d){return d.isSelected}).reduce(function(d,C){var S=C.parentUniKeys,h=S===void 0?[]:S;return[].concat(Jn(d),Jn(gn(h)))},[]);Ht(c.value,v)||(c.value=v||[])});var f=le({selectedKeys:r,openKeys:i,activeKey:o,defaultActiveFirst:u,menuChildrenInfo:n,selectedParentUniKeys:c,addChildrenInfo:s,removeChildrenInfo:l,getActiveKey:m}),b=vn(),y=function(){return b.vnode.el};return F("menuStore",f),F("parentMenu",le({isRootMenu:z(function(){return e.isRootMenu}),getPopupContainer:z(function(){return e.getPopupContainer}),getEl:y})),{store:f}},methods:{handleSelect:function(e){var n=this.$props;if(n.selectable){var r=this.store.selectedKeys,i=e.key;n.multiple?r=r.concat([i]):r=[i],D(this,"selectedKeys")||(this.store.selectedKeys=r),this.__emit("select",$($({},e),{selectedKeys:r}))}},handleClick:function(e){this.__emit("click",e)},onKeyDown:function(e,n){this.innerMenu.getWrappedInstance().onKeyDown(e,n)},onOpenChange:function(e){var n=this.store.openKeys.concat(),r=!1,i=function(u){var s=!1;if(u.open)s=n.indexOf(u.key)===-1,s&&n.push(u.key);else{var l=n.indexOf(u.key);s=l!==-1,s&&n.splice(l,1)}r=r||s};Array.isArray(e)?e.forEach(i):i(e),r&&(D(this,"openKeys")||(this.store.openKeys=n),this.__emit("openChange",n))},handleDeselect:function(e){var n=this.$props;if(n.selectable){var r=this.store.selectedKeys.concat(),i=e.key,o=r.indexOf(i);o!==-1&&r.splice(o,1),D(this,"selectedKeys")||(this.store.selectedKeys=r),this.__emit("deselect",$($({},e),{selectedKeys:r}))}},getOpenTransitionName:function(){var e=this.$props,n=e.openTransitionName,r=e.openAnimation;return!n&&typeof r=="string"&&(n="".concat(e.prefixCls,"-open-").concat(r)),n},saveInnerMenu:function(e){this.innerMenu=e}},render:function(){var e=$($({},q(this)),this.$attrs);e.class=e.class?"".concat(e.class," ").concat(e.prefixCls,"-root"):"".concat(e.prefixCls,"-root");var n=$($({},e),{itemIcon:k(this,"itemIcon",e),expandIcon:k(this,"expandIcon",e),overflowedIndicator:k(this,"overflowedIndicator",e)||g("span",null,[zt("\xB7\xB7\xB7")]),openTransitionName:this.getOpenTransitionName(),onClick:this.handleClick,onOpenChange:this.onOpenChange,onDeselect:this.handleDeselect,onSelect:this.handleSelect,ref:this.saveInnerMenu,store:this.store});return g(Xn,n,Ar({},this.$slots))}},Zn=j(Nr);function Ee(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ee=function(e){return typeof e}:Ee=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ee(t)}function zr(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Qn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Rr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Qn(n,!0).forEach(function(r){zr(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Qn(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}var Lr=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;function Wr(t){var e,n,r,i=t.ownerDocument,o=i.body,u=i&&i.documentElement;return e=t.getBoundingClientRect(),n=e.left,r=e.top,n-=u.clientLeft||o.clientLeft||0,r-=u.clientTop||o.clientTop||0,{left:n,top:r}}function et(t,e){var n=t["page".concat(e?"Y":"X","Offset")],r="scroll".concat(e?"Top":"Left");if(typeof n!="number"){var i=t.document;n=i.documentElement[r],typeof n!="number"&&(n=i.body[r])}return n}function nn(t){return et(t)}function tn(t){return et(t,!0)}function nt(t){var e=Wr(t),n=t.ownerDocument,r=n.defaultView||n.parentWindow;return e.left+=nn(r),e.top+=tn(r),e}function Br(t,e,n){var r="",i=t.ownerDocument,o=n||i.defaultView.getComputedStyle(t,null);return o&&(r=o.getPropertyValue(e)||o[e]),r}var Ur=new RegExp("^(".concat(Lr,")(?!px)[a-z%]+$"),"i"),Vr=/^(top|right|bottom|left)$/,rn="currentStyle",an="runtimeStyle",ie="left",Fr="px";function Hr(t,e){var n=t[rn]&&t[rn][e];if(Ur.test(n)&&!Vr.test(e)){var r=t.style,i=r[ie],o=t[an][ie];t[an][ie]=t[rn][ie],r[ie]=e==="fontSize"?"1em":n||0,n=r.pixelLeft+Fr,r[ie]=i,t[an][ie]=o}return n===""?"auto":n}var ae;typeof window!="undefined"&&(ae=window.getComputedStyle?Br:Hr);function on(t,e){for(var n=0;n<t.length;n++)e(t[n])}function tt(t){return ae(t,"boxSizing")==="border-box"}var Gr=["margin","border","padding"],un=-1,Xr=2,sn=1,Yr=0;function qr(t,e,n){var r={},i=t.style,o;for(o in e)e.hasOwnProperty(o)&&(r[o]=i[o],i[o]=e[o]);n.call(t);for(o in e)e.hasOwnProperty(o)&&(i[o]=r[o])}function we(t,e,n){var r=0,i,o,u;for(o=0;o<e.length;o++)if(i=e[o],i)for(u=0;u<n.length;u++){var s=void 0;i==="border"?s="".concat(i+n[u],"Width"):s=i+n[u],r+=parseFloat(ae(t,s))||0}return r}function je(t){return t!=null&&t==t.window}var B={};on(["Width","Height"],function(t){B["doc".concat(t)]=function(e){var n=e.document;return Math.max(n.documentElement["scroll".concat(t)],n.body["scroll".concat(t)],B["viewport".concat(t)](n))},B["viewport".concat(t)]=function(e){var n="client".concat(t),r=e.document,i=r.body,o=r.documentElement,u=o[n];return r.compatMode==="CSS1Compat"&&u||i&&i[n]||u}});function rt(t,e,n){if(je(t))return e==="width"?B.viewportWidth(t):B.viewportHeight(t);if(t.nodeType===9)return e==="width"?B.docWidth(t):B.docHeight(t);var r=e==="width"?["Left","Right"]:["Top","Bottom"],i=e==="width"?t.offsetWidth:t.offsetHeight;ae(t);var o=tt(t),u=0;(i==null||i<=0)&&(i=void 0,u=ae(t,e),(u==null||Number(u)<0)&&(u=t.style[e]||0),u=parseFloat(u)||0),n===void 0&&(n=o?sn:un);var s=i!==void 0||o,l=i||u;if(n===un)return s?l-we(t,["border","padding"],r):u;if(s){var m=n===Xr?-we(t,["border"],r):we(t,["margin"],r);return l+(n===sn?0:m)}return u+we(t,Gr.slice(n),r)}var Jr={position:"absolute",visibility:"hidden",display:"block"};function it(t){var e,n=arguments;return t.offsetWidth!==0?e=rt.apply(void 0,n):qr(t,Jr,function(){e=rt.apply(void 0,n)}),e}function pe(t,e,n){var r=n;if(Ee(e)==="object"){for(var i in e)e.hasOwnProperty(i)&&pe(t,i,e[i]);return}if(typeof r!="undefined"){typeof r=="number"&&(r+="px"),t.style[e]=r;return}return ae(t,e)}on(["width","height"],function(t){var e=t.charAt(0).toUpperCase()+t.slice(1);B["outer".concat(e)]=function(r,i){return r&&it(r,t,i?Yr:sn)};var n=t==="width"?["Left","Right"]:["Top","Bottom"];B[t]=function(r,i){if(i!==void 0){if(r){ae(r);var o=tt(r);return o&&(i+=we(r,["padding","border"],n)),pe(r,t,i)}return}return r&&it(r,t,un)}});function Zr(t,e){pe(t,"position")==="static"&&(t.style.position="relative");var n=nt(t),r={},i,o;for(o in e)e.hasOwnProperty(o)&&(i=parseFloat(pe(t,o))||0,r[o]=i+e[o]-n[o]);pe(t,r)}var O=Rr({getWindow:function(e){var n=e.ownerDocument||e;return n.defaultView||n.parentWindow},offset:function(e,n){if(typeof n!="undefined")Zr(e,n);else return nt(e)},isWindow:je,each:on,css:pe,clone:function(e){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=e[r]);var i=e.overflow;if(i)for(var o in e)e.hasOwnProperty(o)&&(n.overflow[o]=e.overflow[o]);return n},scrollLeft:function(e,n){if(je(e)){if(n===void 0)return nn(e);window.scrollTo(n,tn(e))}else{if(n===void 0)return e.scrollLeft;e.scrollLeft=n}},scrollTop:function(e,n){if(je(e)){if(n===void 0)return tn(e);window.scrollTo(nn(e),n)}else{if(n===void 0)return e.scrollTop;e.scrollTop=n}},viewportWidth:0,viewportHeight:0},B);function at(t,e,n){n=n||{},e.nodeType===9&&(e=O.getWindow(e));var r=n.allowHorizontalScroll,i=n.onlyScrollIfNeeded,o=n.alignWithTop,u=n.alignWithLeft,s=n.offsetTop||0,l=n.offsetLeft||0,m=n.offsetBottom||0,c=n.offsetRight||0;r=r===void 0?!0:r;var f=O.isWindow(e),b=O.offset(t),y=O.outerHeight(t),v=O.outerWidth(t),d,C,S,h,x,P,V,A,ue,se;f?(V=e,se=O.height(V),ue=O.width(V),A={left:O.scrollLeft(V),top:O.scrollTop(V)},x={left:b.left-A.left-l,top:b.top-A.top-s},P={left:b.left+v-(A.left+ue)+c,top:b.top+y-(A.top+se)+m},h=A):(d=O.offset(e),C=e.clientHeight,S=e.clientWidth,h={left:e.scrollLeft,top:e.scrollTop},x={left:b.left-(d.left+(parseFloat(O.css(e,"borderLeftWidth"))||0))-l,top:b.top-(d.top+(parseFloat(O.css(e,"borderTopWidth"))||0))-s},P={left:b.left+v-(d.left+S+(parseFloat(O.css(e,"borderRightWidth"))||0))+c,top:b.top+y-(d.top+C+(parseFloat(O.css(e,"borderBottomWidth"))||0))+m}),x.top<0||P.top>0?o===!0?O.scrollTop(e,h.top+x.top):o===!1?O.scrollTop(e,h.top+P.top):x.top<0?O.scrollTop(e,h.top+x.top):O.scrollTop(e,h.top+P.top):i||(o=o===void 0?!0:!!o,o?O.scrollTop(e,h.top+x.top):O.scrollTop(e,h.top+P.top)),r&&(x.left<0||P.left>0?u===!0?O.scrollLeft(e,h.left+x.left):u===!1?O.scrollLeft(e,h.left+P.left):x.left<0?O.scrollLeft(e,h.left+x.left):O.scrollLeft(e,h.left+P.left):i||(u=u===void 0?!0:!!u,u?O.scrollLeft(e,h.left+x.left):O.scrollLeft(e,h.left+P.left)))}function ot(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ut(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ot(Object(n),!0).forEach(function(r){fe(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ot(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function fe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function K(){return K=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},K.apply(this,arguments)}var Qr=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n},st={attribute:a.object,rootPrefixCls:a.string,eventKey:a.oneOfType([a.string,a.number]),active:a.looseBool,selectedKeys:a.array,disabled:a.looseBool,title:a.any,index:a.number,inlineIndent:a.number.def(24),level:a.number.def(1),mode:a.oneOf(["horizontal","vertical","vertical-left","vertical-right","inline"]),multiple:a.looseBool,value:a.any,manualRef:a.func.def(T),role:a.any,subMenuKey:a.string,itemIcon:a.any,parentUniKeys:a.array.def(function(){return[]}),parentUniKey:a.string},ei=0,ni=j({name:"AMenuItem",mixins:[Q],inheritAttrs:!1,props:st,isMenuItem:!0,setup:function(e){var n="menu_item_".concat(++ei),r=_("menuStore",function(){return{}}),i=z(function(){return r.selectedKeys.indexOf(e.eventKey)!==-1});return dn(function(){r.addChildrenInfo(n,z(function(){return{parentUniKeys:e.parentUniKeys,parentUniKey:e.parentUniKey,eventKey:e.eventKey,isSelected:i.value,disabled:e.disabled}}))}),pn(function(){r.removeChildrenInfo(n)}),{parentMenu:_("parentMenu",void 0),isSelected:i}},created:function(){this.prevActive=this.active,this.callRef()},updated:function(){var e=this;this.$nextTick(function(){var n=e.active,r=e.parentMenu,i=e.eventKey;!e.prevActive&&n&&(!r||!r["scrolled-".concat(i)])?(at(ee(e.node),r.getEl(),{onlyScrollIfNeeded:!0}),r["scrolled-".concat(i)]=!0):r&&r["scrolled-".concat(i)]&&delete r["scrolled-".concat(i)],e.prevActive=n}),this.callRef()},methods:{onKeyDown:function(e){var n=e.keyCode;if(n===H.ENTER)return this.onClick(e),!0},onMouseLeave:function(e){var n=this.$props.eventKey;this.__emit("itemHover",{key:n,hover:!1}),this.__emit("mouseleave",{key:n,domEvent:e})},onMouseEnter:function(e){var n=this.eventKey;this.__emit("itemHover",{key:n,hover:!0}),this.__emit("mouseenter",{key:n,domEvent:e})},onClick:function(e){var n=this.$props,r=n.eventKey,i=n.multiple,o=this.isSelected,u={key:r,keyPath:[r],item:K(K({},gn(this.$props)),{isSelected:o}),domEvent:e};this.__emit("click",u),i?o?this.__emit("deselect",u):this.__emit("select",u):o||this.__emit("select",u)},getPrefixCls:function(){return"".concat(this.$props.rootPrefixCls,"-item")},getActiveClassName:function(){return"".concat(this.getPrefixCls(),"-active")},getSelectedClassName:function(){return"".concat(this.getPrefixCls(),"-selected")},getDisabledClassName:function(){return"".concat(this.getPrefixCls(),"-disabled")},saveNode:function(e){this.node=e},callRef:function(){this.manualRef&&this.manualRef(this)}},render:function(){var e,n=K(K({},this.$props),this.$attrs),r=n.class,i=n.style,o=Qr(n,["class","style"]),u=(e={},fe(e,r,!!r),fe(e,this.getPrefixCls(),!0),fe(e,this.getActiveClassName(),!o.disabled&&this.active),fe(e,this.getSelectedClassName(),this.isSelected),fe(e,this.getDisabledClassName(),o.disabled),e),s=K(K({},o.attribute),{title:o.title,role:o.role||"menuitem","aria-disabled":o.disabled});o.role==="option"?s=K(K({},s),{role:"option","aria-selected":this.isSelected}):(o.role===null||o.role==="none")&&(s.role="none");var l={onClick:o.disabled?T:this.onClick,onMouseleave:o.disabled?T:this.onMouseLeave,onMouseenter:o.disabled?T:this.onMouseEnter},m=K({},i||{});o.mode==="inline"&&(m.paddingLeft="".concat(o.inlineIndent*o.level,"px")),Ie.forEach(function(f){return delete o[f]});var c=K(K(K(K({},o),s),l),{ref:this.saveNode});return g("li",ut(ut({},c),{},{style:m,class:u}),[N(this),k(this,"itemIcon",o)])}}),lt=Rn(ni);function mt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ct(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?mt(Object(n),!0).forEach(function(r){ti(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):mt(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ti(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function oe(){return oe=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},oe.apply(this,arguments)}var ri={name:"MenuItemGroup",inheritAttrs:!1,setup:function(){return{injectExtraProps:_(J,function(){return{}})}},props:{renderMenuItem:a.func,index:a.number,className:a.string,subMenuKey:a.string,rootPrefixCls:a.string,disabled:a.looseBool.def(!0),title:a.any},isMenuItemGroup:!0,methods:{renderInnerMenuItem:function(e){var n=oe(oe({},this.$props),this.injectExtraProps),r=n.renderMenuItem,i=n.index,o=n.subMenuKey;return r(e,i,o)}},render:function(){var e=oe(oe(oe({},this.$props),this.injectExtraProps),this.$attrs),n=e.class,r=n===void 0?"":n,i=e.rootPrefixCls,o=e.title,u="".concat(i,"-item-group-title"),s="".concat(i,"-item-group-list");Ie.forEach(function(m){return delete e[m]}),delete e.onClick;var l=N(this);return g("li",ct(ct({},e),{},{class:he(r,"".concat(i,"-item-group"))}),[g("div",{class:u,title:typeof o=="string"?o:void 0},[k(this,"title")]),g("ul",{class:s},[l&&l.map(this.renderInnerMenuItem)])])}},ii=j(ri);function De(){return De=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},De.apply(this,arguments)}var ai={name:"MenuDivider",inheritAttrs:!1,props:{disabled:{type:Boolean,default:!0},rootPrefixCls:String},setup:function(){return{injectExtraProps:_(J,function(){return{}})}},render:function(){var e=De(De({},this.$props),this.injectExtraProps),n=e.rootPrefixCls,r=this.$attrs,i=r.class,o=i===void 0?"":i,u=r.style;return g("li",{class:[o,"".concat(n,"-item-divider")],style:u},null)}};function dt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function oi(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?dt(Object(n),!0).forEach(function(r){ui(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):dt(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ui(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Z(){return Z=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Z.apply(this,arguments)}var si=j({name:"ASubMenu",isSubMenu:!0,inheritAttrs:!1,props:Z({},Te.props),setup:function(){return{menuPropsContext:_("menuPropsContext",{}),injectExtraProps:_(J,function(){return{}})}},methods:{onKeyDown:function(e){this.$refs.subMenu.onKeyDown(e)}},render:function(){var e=this.$slots,n=this.$attrs,r=Z(Z({},this.$props),this.injectExtraProps),i=r.rootPrefixCls,o=r.popupClassName,u=this.menuPropsContext.theme,s=Z(Z(Z({},this.$props),{popupClassName:he("".concat(i,"-").concat(u),o),ref:"subMenu"}),n);return g(Te,s,oi({},e))}});function li(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function pt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function mi(t,e,n){return e&&pt(t.prototype,e),n&&pt(t,n),t}var ci=/\s+/,di=function(){function t(e){if(li(this,t),!e||!e.nodeType)throw new Error("A DOM element reference is required");this.el=e,this.list=e.classList}return mi(t,[{key:"array",value:function(){var n=this.el.getAttribute("class")||"",r=n.replace(/^\s+|\s+$/g,""),i=r.split(ci);return i[0]===""&&i.shift(),i}},{key:"add",value:function(n){if(this.list)return this.list.add(n),this;var r=this.array(),i=Qe(r,n);return~i||r.push(n),this.el.className=r.join(" "),this}},{key:"remove",value:function(n){if(toString.call(n)==="[object RegExp]")return this._removeMatching(n);if(this.list)return this.list.remove(n),this;var r=this.array(),i=Qe(r,n);return~i&&r.splice(i,1),this.el.className=r.join(" "),this}},{key:"_removeMatching",value:function(n){for(var r=this.array(),i=0;i<r.length;i++)n.test(r[i])&&this.remove(r[i]);return this}},{key:"toggle",value:function(n,r){return this.list?(typeof r!="undefined"?r!==this.list.toggle(n,r)&&this.list.toggle(n):this.list.toggle(n),this):(typeof r!="undefined"?r?this.add(n):this.remove(n):this.has(n)?this.remove(n):this.add(n),this)}},{key:"has",value:function(n){return this.list?this.list.contains(n):!!~Qe(this.array(),n)}},{key:"contains",value:function(n){return this.has(n)}}]),t}();function ft(t){return new di(t)}function Ne(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ne=function(n){return typeof n}:Ne=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ne(t)}var bt=ge.endEvents.length!==0,pi=["Webkit","Moz","O","ms"],ht=["-webkit-","-moz-","-o-","ms-",""];function ze(t,e){for(var n=window.getComputedStyle(t,null),r="",i=0;i<ht.length&&(r=n.getPropertyValue(ht[i]+e),!r);i++);return r}function vt(t){if(bt){var e=parseFloat(ze(t,"transition-delay"))||0,n=parseFloat(ze(t,"transition-duration"))||0,r=parseFloat(ze(t,"animation-delay"))||0,i=parseFloat(ze(t,"animation-duration"))||0,o=Math.max(n+e,i+r);t.rcEndAnimTimeout=setTimeout(function(){t.rcEndAnimTimeout=null,t.rcEndListener&&t.rcEndListener()},o*1e3+200)}}function gt(t){t.rcEndAnimTimeout&&(clearTimeout(t.rcEndAnimTimeout),t.rcEndAnimTimeout=null)}var Re=function(e,n,r){var i=Ne(n)==="object",o=i?n.name:n,u=i?n.active:"".concat(n,"-active"),s=r,l,m,c=ft(e);return r&&Object.prototype.toString.call(r)==="[object Object]"&&(s=r.end,l=r.start,m=r.active),e.rcEndListener&&e.rcEndListener(),e.rcEndListener=function(f){f&&f.target!==e||(e.rcAnimTimeout&&(xe(e.rcAnimTimeout),e.rcAnimTimeout=null),gt(e),c.remove(o),c.remove(u),ge.removeEndEventListener(e,e.rcEndListener),e.rcEndListener=null,s&&s())},ge.addEndEventListener(e,e.rcEndListener),l&&l(),c.add(o),e.rcAnimTimeout=ve(function(){e.rcAnimTimeout=null,c.add(o),c.add(u),m&&ve(m,0),vt(e)},30),{stop:function(){e.rcEndListener&&e.rcEndListener()}}};Re.style=function(t,e,n){t.rcEndListener&&t.rcEndListener(),t.rcEndListener=function(r){r&&r.target!==t||(t.rcAnimTimeout&&(xe(t.rcAnimTimeout),t.rcAnimTimeout=null),gt(t),ge.removeEndEventListener(t,t.rcEndListener),t.rcEndListener=null,n&&n())},ge.addEndEventListener(t,t.rcEndListener),t.rcAnimTimeout=ve(function(){for(var r in e)e.hasOwnProperty(r)&&(t.style[r]=e[r]);t.rcAnimTimeout=null,vt(t)},0)},Re.setTransition=function(t,e,n){var r=e,i=n;n===void 0&&(i=r,r=""),r=r||"",pi.forEach(function(o){t.style["".concat(o,"Transition").concat(r)]=i})},Re.isCssAnimationSupported=bt;function yt(t,e,n){var r,i,o;return Re(t,"ant-motion-collapse-legacy",{start:function(){o&&cancelAnimationFrame(o),e?(r=t.offsetHeight,r===0?o=requestAnimationFrame(function(){r=t.offsetHeight,t.style.height="0px",t.style.opacity="0"}):(t.style.height="0px",t.style.opacity="0")):(t.style.height="".concat(t.offsetHeight,"px"),t.style.opacity="1")},active:function(){i&&cancelAnimationFrame(i),i=requestAnimationFrame(function(){t.style.height="".concat(e?r:0,"px"),t.style.opacity=e?"1":"0"})},end:function(){o&&cancelAnimationFrame(o),i&&cancelAnimationFrame(i),t.style.height="",t.style.opacity="",n&&n()}})}var wt={onEnter:function(e,n){Rt(function(){yt(e,!0,n)})},onLeave:function(e,n){return yt(e,!1,n)}};function U(){return U=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},U.apply(this,arguments)}function Ot(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!ne(t)}var fi=j({name:"MenuItem",inheritAttrs:!1,props:st,isMenuItem:!0,setup:function(){return{getInlineCollapsed:_("getInlineCollapsed",function(){return!1}),layoutSiderContext:_("layoutSiderContext",{}),injectExtraProps:_(J,function(){return{}})}},methods:{onKeyDown:function(e){this.$refs.menuItem.onKeyDown(e)}},render:function(){var e=q(this),n=U(U({},e),this.injectExtraProps),r=n.level,i=n.title,o=n.rootPrefixCls,u=this.getInlineCollapsed,s=this.$attrs,l=u(),m=i,c=N(this);typeof i=="undefined"?m=r===1?c:"":i===!1&&(m="");var f={title:m},b=this.layoutSiderContext.sCollapsed;!b&&!l&&(f.title=null,f.visible=!1);var y=U(U(U(U({},e),{title:i}),s),{ref:"menuItem"}),v=U(U({},f),{placement:"right",overlayClassName:"".concat(o,"-inline-collapsed-tooltip")}),d=g(lt,y,Ot(c)?c:{default:function(){return[c]}});return g(Lt,v,Ot(d)?d:{default:function(){return[d]}})}});function Ct(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ln(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ct(Object(n),!0).forEach(function(r){Le(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ct(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Le(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function I(){return I=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},I.apply(this,arguments)}var bi=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n},hi=a.oneOf(["vertical","vertical-left","vertical-right","horizontal","inline"]),vi=I(I({},Yn),{theme:a.oneOf(Oe("light","dark")).def("light"),mode:hi.def("vertical"),selectable:a.looseBool,selectedKeys:a.arrayOf(a.oneOfType([a.string,a.number])),defaultSelectedKeys:a.arrayOf(a.oneOfType([a.string,a.number])),openKeys:a.arrayOf(a.oneOfType([a.string,a.number])),defaultOpenKeys:a.arrayOf(a.oneOfType([a.string,a.number])),openAnimation:a.oneOfType([a.string,a.object]),openTransitionName:a.string,prefixCls:a.string,multiple:a.looseBool,inlineIndent:a.number.def(24),inlineCollapsed:a.looseBool,isRootMenu:a.looseBool.def(!0),focusable:a.looseBool.def(!1),onOpenChange:a.func,onSelect:a.func,onDeselect:a.func,onClick:a.func,onMouseenter:a.func,onSelectChange:a.func}),E=j({name:"AMenu",mixins:[Q],inheritAttrs:!1,props:vi,Divider:I(I({},ai),{name:"AMenuDivider"}),Item:I(I({},fi),{name:"AMenuItem"}),SubMenu:I(I({},si),{name:"ASubMenu"}),ItemGroup:I(I({},ii),{name:"AMenuItemGroup"}),emits:["update:selectedKeys","update:openKeys","mouseenter","openChange","click","selectChange","select","deselect"],setup:function(){var e=_("layoutSiderContext",{}),n=Wt(e,"sCollapsed");return{configProvider:_("configProvider",We),layoutSiderContext:e,layoutSiderCollapsed:n,propsUpdating:!1,switchingModeFromInline:!1,leaveAnimationExecutedWhenInlineCollapsed:!1,inlineOpenKeys:[]}},data:function(){var e=q(this);Bt(!("inlineCollapsed"in e&&e.mode!=="inline"),"Menu","`inlineCollapsed` should only be used when Menu's `mode` is inline.");var n;return"openKeys"in e?n=e.openKeys:"defaultOpenKeys"in e&&(n=e.defaultOpenKeys),{sOpenKeys:n}},watch:{mode:function(e,n){n==="inline"&&e!=="inline"&&(this.switchingModeFromInline=!0)},openKeys:function(e){this.setState({sOpenKeys:e})},inlineCollapsed:function(e){this.collapsedChange(e)},layoutSiderCollapsed:function(e){this.collapsedChange(e)}},created:function(){F("getInlineCollapsed",this.getInlineCollapsed),F("menuPropsContext",this.$props)},updated:function(){this.propsUpdating=!1},methods:{collapsedChange:function(e){this.propsUpdating||(this.propsUpdating=!0,D(this,"openKeys")?e&&(this.switchingModeFromInline=!0):e?(this.switchingModeFromInline=!0,this.inlineOpenKeys=this.sOpenKeys,this.setState({sOpenKeys:[]})):(this.setState({sOpenKeys:this.inlineOpenKeys}),this.inlineOpenKeys=[]))},restoreModeVerticalFromInline:function(){this.switchingModeFromInline&&(this.switchingModeFromInline=!1,this.$forceUpdate())},handleMouseEnter:function(e){this.restoreModeVerticalFromInline(),this.$emit("mouseenter",e)},handleTransitionEnd:function(e){var n=e.propertyName==="width"&&e.target===e.currentTarget,r=e.target.className,i=Object.prototype.toString.call(r)==="[object SVGAnimatedString]"?r.animVal:r,o=e.propertyName==="font-size"&&i.indexOf("anticon")>=0;(n||o)&&this.restoreModeVerticalFromInline()},handleClick:function(e){this.handleOpenChange([]),this.$emit("click",e)},handleSelect:function(e){this.$emit("update:selectedKeys",e.selectedKeys),this.$emit("select",e),this.$emit("selectChange",e.selectedKeys)},handleDeselect:function(e){this.$emit("update:selectedKeys",e.selectedKeys),this.$emit("deselect",e),this.$emit("selectChange",e.selectedKeys)},handleOpenChange:function(e){this.setOpenKeys(e),this.$emit("update:openKeys",e),this.$emit("openChange",e)},setOpenKeys:function(e){D(this,"openKeys")||this.setState({sOpenKeys:e})},getRealMenuMode:function(){var e=this.getInlineCollapsed();if(this.switchingModeFromInline&&e)return"inline";var n=this.$props.mode;return e?"vertical":n},getInlineCollapsed:function(){var e=this.$props.inlineCollapsed;return this.layoutSiderContext.sCollapsed!==void 0?this.layoutSiderContext.sCollapsed:e},getMenuOpenAnimation:function(e){var n=this.$props,r=n.openAnimation,i=n.openTransitionName,o=r||i;return r===void 0&&i===void 0&&(e==="horizontal"?o="slide-up":e==="inline"?o=wt:this.switchingModeFromInline?(o="",this.switchingModeFromInline=!1):o="zoom-big"),o}},render:function(){var e,n=this,r=this.layoutSiderContext,i=r.collapsedWidth,o=this.configProvider.getPopupContainer,u=q(this),s=u.prefixCls,l=u.theme,m=u.getPopupContainer,c=this.configProvider.getPrefixCls,f=c("menu",s),b=this.getRealMenuMode(),y=this.getMenuOpenAnimation(b),v=this.$attrs,d=v.class,C=bi(v,["class"]),S=(e={},Le(e,d,d),Le(e,"".concat(f,"-").concat(l),!0),Le(e,"".concat(f,"-inline-collapsed"),this.getInlineCollapsed()),e),h=I(I(I(I({},hn(u,["inlineCollapsed","onUpdate:selectedKeys","onUpdate:openKeys","onSelectChange"])),{getPopupContainer:m||o,openKeys:this.sOpenKeys,mode:b,prefixCls:f}),C),{onSelect:this.handleSelect,onDeselect:this.handleDeselect,onOpenChange:this.handleOpenChange,onMouseenter:this.handleMouseEnter,onTransitionend:this.handleTransitionEnd});D(this,"selectedKeys")||delete h.selectedKeys,b!=="inline"?(h.onClick=this.handleClick,h.openTransitionName=y):(h.onClick=function(P){n.$emit("click",P)},h.openAnimation=y);var x=this.getInlineCollapsed()&&(i===0||i==="0"||i==="0px");return x&&(h.openKeys=[]),g(Zn,ln(ln({},h),{},{class:S}),ln({},this.$slots))}});E.install=function(t){return t.component(E.name,E),t.component(E.Item.name,E.Item),t.component(E.SubMenu.name,E.SubMenu),t.component(E.Divider.name,E.Divider),t.component(E.ItemGroup.name,E.ItemGroup),t};var Pi=`/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
/* stylelint-disable no-duplicate-selectors */
/* stylelint-disable */
/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
.ant-dropdown {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  position: absolute;
  top: -9999px;
  left: -9999px;
  z-index: 1050;
  display: block;
}
.ant-dropdown::before {
  position: absolute;
  top: -4px;
  right: 0;
  bottom: -4px;
  left: -7px;
  z-index: -9999;
  opacity: 0.0001;
  content: ' ';
}
.ant-dropdown-wrap {
  position: relative;
}
.ant-dropdown-wrap .ant-btn > .anticon-down {
  display: inline-block;
  font-size: 12px;
  font-size: 10px \\9;
  transform: scale(0.83333333) rotate(0deg);
}
:root .ant-dropdown-wrap .ant-btn > .anticon-down {
  font-size: 12px;
}
.ant-dropdown-wrap .anticon-down::before {
  transition: transform 0.2s;
}
.ant-dropdown-wrap-open .anticon-down::before {
  transform: rotate(180deg);
}
.ant-dropdown-hidden,
.ant-dropdown-menu-hidden {
  display: none;
}
.ant-dropdown-menu {
  position: relative;
  margin: 0;
  padding: 4px 0;
  text-align: left;
  list-style-type: none;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 2px;
  outline: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  -webkit-transform: translate3d(0, 0, 0);
}
.ant-dropdown-menu-item-group-title {
  padding: 5px 12px;
  color: rgba(0, 0, 0, 0.45);
  transition: all 0.3s;
}
.ant-dropdown-menu-submenu-popup {
  position: absolute;
  z-index: 1050;
}
.ant-dropdown-menu-submenu-popup > .ant-dropdown-menu {
  transform-origin: 0 0;
}
.ant-dropdown-menu-submenu-popup ul,
.ant-dropdown-menu-submenu-popup li {
  list-style: none;
}
.ant-dropdown-menu-submenu-popup ul {
  margin-right: 0.3em;
  margin-left: 0.3em;
  padding: 0;
}
.ant-dropdown-menu-item,
.ant-dropdown-menu-submenu-title {
  clear: both;
  margin: 0;
  padding: 5px 12px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s;
}
.ant-dropdown-menu-item > .anticon:first-child,
.ant-dropdown-menu-submenu-title > .anticon:first-child,
.ant-dropdown-menu-item > span > .anticon:first-child,
.ant-dropdown-menu-submenu-title > span > .anticon:first-child {
  min-width: 12px;
  margin-right: 8px;
  font-size: 12px;
}
.ant-dropdown-menu-item > a,
.ant-dropdown-menu-submenu-title > a {
  display: block;
  margin: -5px -12px;
  padding: 5px 12px;
  color: rgba(0, 0, 0, 0.85);
  transition: all 0.3s;
}
.ant-dropdown-menu-item > a:hover,
.ant-dropdown-menu-submenu-title > a:hover {
  color: rgba(0, 0, 0, 0.85);
}
.ant-dropdown-menu-item-selected,
.ant-dropdown-menu-submenu-title-selected,
.ant-dropdown-menu-item-selected > a,
.ant-dropdown-menu-submenu-title-selected > a {
  color: #1890ff;
  background-color: #e6f7ff;
}
.ant-dropdown-menu-item:hover,
.ant-dropdown-menu-submenu-title:hover {
  background-color: #f5f5f5;
}
.ant-dropdown-menu-item-disabled,
.ant-dropdown-menu-submenu-title-disabled {
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
}
.ant-dropdown-menu-item-disabled:hover,
.ant-dropdown-menu-submenu-title-disabled:hover {
  color: rgba(0, 0, 0, 0.25);
  background-color: #fff;
  cursor: not-allowed;
}
.ant-dropdown-menu-item-divider,
.ant-dropdown-menu-submenu-title-divider {
  height: 1px;
  margin: 4px 0;
  overflow: hidden;
  line-height: 0;
  background-color: #f0f0f0;
}
.ant-dropdown-menu-item .ant-dropdown-menu-submenu-arrow,
.ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-arrow {
  position: absolute;
  right: 8px;
}
.ant-dropdown-menu-item .ant-dropdown-menu-submenu-arrow-icon,
.ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-arrow-icon {
  color: rgba(0, 0, 0, 0.45);
  font-style: normal;
  display: inline-block;
  font-size: 12px;
  font-size: 10px \\9;
  transform: scale(0.83333333) rotate(0deg);
}
:root .ant-dropdown-menu-item .ant-dropdown-menu-submenu-arrow-icon,
:root .ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-arrow-icon {
  font-size: 12px;
}
.ant-dropdown-menu-item-group-list {
  margin: 0 8px;
  padding: 0;
  list-style: none;
}
.ant-dropdown-menu-submenu-title {
  padding-right: 26px;
}
.ant-dropdown-menu-submenu-vertical {
  position: relative;
}
.ant-dropdown-menu-submenu-vertical > .ant-dropdown-menu {
  position: absolute;
  top: 0;
  left: 100%;
  min-width: 100%;
  margin-left: 4px;
  transform-origin: 0 0;
}
.ant-dropdown-menu-submenu.ant-dropdown-menu-submenu-disabled .ant-dropdown-menu-submenu-title,
.ant-dropdown-menu-submenu.ant-dropdown-menu-submenu-disabled .ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-arrow-icon {
  color: rgba(0, 0, 0, 0.25);
  background-color: #fff;
  cursor: not-allowed;
}
.ant-dropdown-menu-submenu-selected .ant-dropdown-menu-submenu-title {
  color: #1890ff;
}
.ant-dropdown.slide-down-enter.slide-down-enter-active.ant-dropdown-placement-bottomLeft,
.ant-dropdown.slide-down-appear.slide-down-appear-active.ant-dropdown-placement-bottomLeft,
.ant-dropdown.slide-down-enter.slide-down-enter-active.ant-dropdown-placement-bottomCenter,
.ant-dropdown.slide-down-appear.slide-down-appear-active.ant-dropdown-placement-bottomCenter,
.ant-dropdown.slide-down-enter.slide-down-enter-active.ant-dropdown-placement-bottomRight,
.ant-dropdown.slide-down-appear.slide-down-appear-active.ant-dropdown-placement-bottomRight {
  -webkit-animation-name: antSlideUpIn;
          animation-name: antSlideUpIn;
}
.ant-dropdown.slide-up-enter.slide-up-enter-active.ant-dropdown-placement-topLeft,
.ant-dropdown.slide-up-appear.slide-up-appear-active.ant-dropdown-placement-topLeft,
.ant-dropdown.slide-up-enter.slide-up-enter-active.ant-dropdown-placement-topCenter,
.ant-dropdown.slide-up-appear.slide-up-appear-active.ant-dropdown-placement-topCenter,
.ant-dropdown.slide-up-enter.slide-up-enter-active.ant-dropdown-placement-topRight,
.ant-dropdown.slide-up-appear.slide-up-appear-active.ant-dropdown-placement-topRight {
  -webkit-animation-name: antSlideDownIn;
          animation-name: antSlideDownIn;
}
.ant-dropdown.slide-down-leave.slide-down-leave-active.ant-dropdown-placement-bottomLeft,
.ant-dropdown.slide-down-leave.slide-down-leave-active.ant-dropdown-placement-bottomCenter,
.ant-dropdown.slide-down-leave.slide-down-leave-active.ant-dropdown-placement-bottomRight {
  -webkit-animation-name: antSlideUpOut;
          animation-name: antSlideUpOut;
}
.ant-dropdown.slide-up-leave.slide-up-leave-active.ant-dropdown-placement-topLeft,
.ant-dropdown.slide-up-leave.slide-up-leave-active.ant-dropdown-placement-topCenter,
.ant-dropdown.slide-up-leave.slide-up-leave-active.ant-dropdown-placement-topRight {
  -webkit-animation-name: antSlideDownOut;
          animation-name: antSlideDownOut;
}
.ant-dropdown-trigger > .anticon.anticon-down,
.ant-dropdown-link > .anticon.anticon-down {
  display: inline-block;
  font-size: 12px;
  font-size: 10px \\9;
  transform: scale(0.83333333) rotate(0deg);
}
:root .ant-dropdown-trigger > .anticon.anticon-down,
:root .ant-dropdown-link > .anticon.anticon-down {
  font-size: 12px;
}
.ant-dropdown-button {
  white-space: nowrap;
}
.ant-dropdown-button.ant-btn-group > .ant-btn:last-child:not(:first-child) {
  padding-right: 8px;
  padding-left: 8px;
}
.ant-dropdown-button .anticon.anticon-down {
  display: inline-block;
  font-size: 12px;
  font-size: 10px \\9;
  transform: scale(0.83333333) rotate(0deg);
}
:root .ant-dropdown-button .anticon.anticon-down {
  font-size: 12px;
}
.ant-dropdown-menu-dark,
.ant-dropdown-menu-dark .ant-dropdown-menu {
  background: #001529;
}
.ant-dropdown-menu-dark .ant-dropdown-menu-item,
.ant-dropdown-menu-dark .ant-dropdown-menu-submenu-title,
.ant-dropdown-menu-dark .ant-dropdown-menu-item > a {
  color: rgba(255, 255, 255, 0.65);
}
.ant-dropdown-menu-dark .ant-dropdown-menu-item .ant-dropdown-menu-submenu-arrow::after,
.ant-dropdown-menu-dark .ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-arrow::after,
.ant-dropdown-menu-dark .ant-dropdown-menu-item > a .ant-dropdown-menu-submenu-arrow::after {
  color: rgba(255, 255, 255, 0.65);
}
.ant-dropdown-menu-dark .ant-dropdown-menu-item:hover,
.ant-dropdown-menu-dark .ant-dropdown-menu-submenu-title:hover,
.ant-dropdown-menu-dark .ant-dropdown-menu-item > a:hover {
  color: #fff;
  background: transparent;
}
.ant-dropdown-menu-dark .ant-dropdown-menu-item-selected,
.ant-dropdown-menu-dark .ant-dropdown-menu-item-selected:hover,
.ant-dropdown-menu-dark .ant-dropdown-menu-item-selected > a {
  color: #fff;
  background: #1890ff;
}
`,Mi=`/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
/* stylelint-disable no-duplicate-selectors */
/* stylelint-disable */
/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
.ant-menu {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  font-feature-settings: 'tnum';
  margin-bottom: 0;
  padding-left: 0;
  color: rgba(0, 0, 0, 0.85);
  line-height: 0;
  list-style: none;
  background: #fff;
  outline: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: background 0.3s, width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
  zoom: 1;
}
.ant-menu::before,
.ant-menu::after {
  display: table;
  content: '';
}
.ant-menu::after {
  clear: both;
}
.ant-menu ul,
.ant-menu ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
.ant-menu-hidden {
  display: none;
}
.ant-menu-item-group-title {
  padding: 8px 16px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  line-height: 1.5715;
  transition: all 0.3s;
}
.ant-menu-submenu,
.ant-menu-submenu-inline {
  transition: border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-menu-submenu-selected {
  color: #1890ff;
}
.ant-menu-item:active,
.ant-menu-submenu-title:active {
  background: #e6f7ff;
}
.ant-menu-submenu .ant-menu-sub {
  cursor: initial;
  transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-menu-item > a {
  display: block;
  color: rgba(0, 0, 0, 0.85);
}
.ant-menu-item > a:hover {
  color: #1890ff;
}
.ant-menu-item > a::before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: transparent;
  content: '';
}
.ant-menu-item > .ant-badge > a {
  color: rgba(0, 0, 0, 0.85);
}
.ant-menu-item > .ant-badge > a:hover {
  color: #1890ff;
}
.ant-menu-item-divider {
  height: 1px;
  overflow: hidden;
  line-height: 0;
  background-color: #f0f0f0;
}
.ant-menu-item:hover,
.ant-menu-item-active,
.ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
.ant-menu-submenu-active,
.ant-menu-submenu-title:hover {
  color: #1890ff;
}
.ant-menu-horizontal .ant-menu-item,
.ant-menu-horizontal .ant-menu-submenu {
  margin-top: -1px;
}
.ant-menu-horizontal > .ant-menu-item:hover,
.ant-menu-horizontal > .ant-menu-item-active,
.ant-menu-horizontal > .ant-menu-submenu .ant-menu-submenu-title:hover {
  background-color: transparent;
}
.ant-menu-item-selected {
  color: #1890ff;
}
.ant-menu-item-selected > a,
.ant-menu-item-selected > a:hover {
  color: #1890ff;
}
.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
  background-color: #e6f7ff;
}
.ant-menu-inline,
.ant-menu-vertical,
.ant-menu-vertical-left {
  border-right: 1px solid #f0f0f0;
}
.ant-menu-vertical-right {
  border-left: 1px solid #f0f0f0;
}
.ant-menu-vertical.ant-menu-sub,
.ant-menu-vertical-left.ant-menu-sub,
.ant-menu-vertical-right.ant-menu-sub {
  min-width: 160px;
  padding: 0;
  border-right: 0;
  transform-origin: 0 0;
}
.ant-menu-vertical.ant-menu-sub .ant-menu-item,
.ant-menu-vertical-left.ant-menu-sub .ant-menu-item,
.ant-menu-vertical-right.ant-menu-sub .ant-menu-item {
  left: 0;
  margin-left: 0;
  border-right: 0;
}
.ant-menu-vertical.ant-menu-sub .ant-menu-item::after,
.ant-menu-vertical-left.ant-menu-sub .ant-menu-item::after,
.ant-menu-vertical-right.ant-menu-sub .ant-menu-item::after {
  border-right: 0;
}
.ant-menu-vertical.ant-menu-sub > .ant-menu-item,
.ant-menu-vertical-left.ant-menu-sub > .ant-menu-item,
.ant-menu-vertical-right.ant-menu-sub > .ant-menu-item,
.ant-menu-vertical.ant-menu-sub > .ant-menu-submenu,
.ant-menu-vertical-left.ant-menu-sub > .ant-menu-submenu,
.ant-menu-vertical-right.ant-menu-sub > .ant-menu-submenu {
  transform-origin: 0 0;
}
.ant-menu-horizontal.ant-menu-sub {
  min-width: 114px;
}
.ant-menu-item,
.ant-menu-submenu-title {
  position: relative;
  display: block;
  margin: 0;
  padding: 0 20px;
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-menu-item .anticon,
.ant-menu-submenu-title .anticon {
  min-width: 14px;
  margin-right: 10px;
  font-size: 14px;
  transition: font-size 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), margin 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-menu-item .anticon + span,
.ant-menu-submenu-title .anticon + span {
  opacity: 1;
  transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-menu > .ant-menu-item-divider {
  height: 1px;
  margin: 1px 0;
  padding: 0;
  overflow: hidden;
  line-height: 0;
  background-color: #f0f0f0;
}
.ant-menu-submenu-popup {
  position: absolute;
  z-index: 1050;
  border-radius: 2px;
}
.ant-menu-submenu-popup .submenu-title-wrapper {
  padding-right: 20px;
}
.ant-menu-submenu-popup::before {
  position: absolute;
  top: -7px;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.0001;
  content: ' ';
}
.ant-menu-submenu > .ant-menu {
  background-color: #fff;
  border-radius: 2px;
}
.ant-menu-submenu > .ant-menu-submenu-title::after {
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-menu-submenu-vertical > .ant-menu-submenu-title .ant-menu-submenu-arrow,
.ant-menu-submenu-vertical-left > .ant-menu-submenu-title .ant-menu-submenu-arrow,
.ant-menu-submenu-vertical-right > .ant-menu-submenu-title .ant-menu-submenu-arrow,
.ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow {
  position: absolute;
  top: 50%;
  right: 16px;
  width: 10px;
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-menu-submenu-vertical > .ant-menu-submenu-title .ant-menu-submenu-arrow::before,
.ant-menu-submenu-vertical-left > .ant-menu-submenu-title .ant-menu-submenu-arrow::before,
.ant-menu-submenu-vertical-right > .ant-menu-submenu-title .ant-menu-submenu-arrow::before,
.ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow::before,
.ant-menu-submenu-vertical > .ant-menu-submenu-title .ant-menu-submenu-arrow::after,
.ant-menu-submenu-vertical-left > .ant-menu-submenu-title .ant-menu-submenu-arrow::after,
.ant-menu-submenu-vertical-right > .ant-menu-submenu-title .ant-menu-submenu-arrow::after,
.ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow::after {
  position: absolute;
  width: 6px;
  height: 1.5px;
  background: #fff;
  background: rgba(0, 0, 0, 0.85) \\9;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85));
  background-image: none \\9;
  border-radius: 2px;
  transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  content: '';
}
.ant-menu-submenu-vertical > .ant-menu-submenu-title .ant-menu-submenu-arrow::before,
.ant-menu-submenu-vertical-left > .ant-menu-submenu-title .ant-menu-submenu-arrow::before,
.ant-menu-submenu-vertical-right > .ant-menu-submenu-title .ant-menu-submenu-arrow::before,
.ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow::before {
  transform: rotate(45deg) translateY(-2px);
}
.ant-menu-submenu-vertical > .ant-menu-submenu-title .ant-menu-submenu-arrow::after,
.ant-menu-submenu-vertical-left > .ant-menu-submenu-title .ant-menu-submenu-arrow::after,
.ant-menu-submenu-vertical-right > .ant-menu-submenu-title .ant-menu-submenu-arrow::after,
.ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow::after {
  transform: rotate(-45deg) translateY(2px);
}
.ant-menu-submenu-vertical > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow::after,
.ant-menu-submenu-vertical-left > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow::after,
.ant-menu-submenu-vertical-right > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow::after,
.ant-menu-submenu-inline > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow::after,
.ant-menu-submenu-vertical > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow::before,
.ant-menu-submenu-vertical-left > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow::before,
.ant-menu-submenu-vertical-right > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow::before,
.ant-menu-submenu-inline > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow::before {
  background: linear-gradient(to right, #1890ff, #1890ff);
}
.ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow::before {
  transform: rotate(-45deg) translateX(2px);
}
.ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow::after {
  transform: rotate(45deg) translateX(-2px);
}
.ant-menu-submenu-open.ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow {
  transform: translateY(-2px);
}
.ant-menu-submenu-open.ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow::after {
  transform: rotate(-45deg) translateX(-2px);
}
.ant-menu-submenu-open.ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow::before {
  transform: rotate(45deg) translateX(2px);
}
.ant-menu-vertical .ant-menu-submenu-selected,
.ant-menu-vertical-left .ant-menu-submenu-selected,
.ant-menu-vertical-right .ant-menu-submenu-selected {
  color: #1890ff;
}
.ant-menu-vertical .ant-menu-submenu-selected > a,
.ant-menu-vertical-left .ant-menu-submenu-selected > a,
.ant-menu-vertical-right .ant-menu-submenu-selected > a {
  color: #1890ff;
}
.ant-menu-horizontal {
  line-height: 46px;
  white-space: nowrap;
  border: 0;
  border-bottom: 1px solid #f0f0f0;
  box-shadow: none;
}
.ant-menu-horizontal > .ant-menu-item,
.ant-menu-horizontal > .ant-menu-submenu {
  position: relative;
  top: 1px;
  display: inline-block;
  vertical-align: bottom;
  border-bottom: 2px solid transparent;
}
.ant-menu-horizontal > .ant-menu-item:hover,
.ant-menu-horizontal > .ant-menu-submenu:hover,
.ant-menu-horizontal > .ant-menu-item-active,
.ant-menu-horizontal > .ant-menu-submenu-active,
.ant-menu-horizontal > .ant-menu-item-open,
.ant-menu-horizontal > .ant-menu-submenu-open,
.ant-menu-horizontal > .ant-menu-item-selected,
.ant-menu-horizontal > .ant-menu-submenu-selected {
  color: #1890ff;
  border-bottom: 2px solid #1890ff;
}
.ant-menu-horizontal > .ant-menu-item > a {
  display: block;
  color: rgba(0, 0, 0, 0.85);
}
.ant-menu-horizontal > .ant-menu-item > a:hover {
  color: #1890ff;
}
.ant-menu-horizontal > .ant-menu-item > a::before {
  bottom: -2px;
}
.ant-menu-horizontal > .ant-menu-item-selected > a {
  color: #1890ff;
}
.ant-menu-horizontal::after {
  display: block;
  clear: both;
  height: 0;
  content: '\\20';
}
.ant-menu-vertical .ant-menu-item,
.ant-menu-vertical-left .ant-menu-item,
.ant-menu-vertical-right .ant-menu-item,
.ant-menu-inline .ant-menu-item {
  position: relative;
}
.ant-menu-vertical .ant-menu-item::after,
.ant-menu-vertical-left .ant-menu-item::after,
.ant-menu-vertical-right .ant-menu-item::after,
.ant-menu-inline .ant-menu-item::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  border-right: 3px solid #1890ff;
  transform: scaleY(0.0001);
  opacity: 0;
  transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
  content: '';
}
.ant-menu-vertical .ant-menu-item,
.ant-menu-vertical-left .ant-menu-item,
.ant-menu-vertical-right .ant-menu-item,
.ant-menu-inline .ant-menu-item,
.ant-menu-vertical .ant-menu-submenu-title,
.ant-menu-vertical-left .ant-menu-submenu-title,
.ant-menu-vertical-right .ant-menu-submenu-title,
.ant-menu-inline .ant-menu-submenu-title {
  height: 40px;
  margin-top: 4px;
  margin-bottom: 4px;
  padding: 0 16px;
  overflow: hidden;
  font-size: 14px;
  line-height: 40px;
  text-overflow: ellipsis;
}
.ant-menu-vertical .ant-menu-submenu,
.ant-menu-vertical-left .ant-menu-submenu,
.ant-menu-vertical-right .ant-menu-submenu,
.ant-menu-inline .ant-menu-submenu {
  padding-bottom: 0.02px;
}
.ant-menu-vertical .ant-menu-item:not(:last-child),
.ant-menu-vertical-left .ant-menu-item:not(:last-child),
.ant-menu-vertical-right .ant-menu-item:not(:last-child),
.ant-menu-inline .ant-menu-item:not(:last-child) {
  margin-bottom: 8px;
}
.ant-menu-vertical > .ant-menu-item,
.ant-menu-vertical-left > .ant-menu-item,
.ant-menu-vertical-right > .ant-menu-item,
.ant-menu-inline > .ant-menu-item,
.ant-menu-vertical > .ant-menu-submenu > .ant-menu-submenu-title,
.ant-menu-vertical-left > .ant-menu-submenu > .ant-menu-submenu-title,
.ant-menu-vertical-right > .ant-menu-submenu > .ant-menu-submenu-title,
.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
  height: 40px;
  line-height: 40px;
}
.ant-menu-inline {
  width: 100%;
}
.ant-menu-inline .ant-menu-selected::after,
.ant-menu-inline .ant-menu-item-selected::after {
  transform: scaleY(1);
  opacity: 1;
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-menu-inline .ant-menu-item,
.ant-menu-inline .ant-menu-submenu-title {
  width: calc(100% + 1px);
}
.ant-menu-inline .ant-menu-submenu-title {
  padding-right: 34px;
}
.ant-menu-inline-collapsed {
  width: 80px;
}
.ant-menu-inline-collapsed > .ant-menu-item,
.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-item,
.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-submenu > .ant-menu-submenu-title,
.ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title {
  left: 0;
  padding: 0 32px !important;
  text-overflow: clip;
}
.ant-menu-inline-collapsed > .ant-menu-item .ant-menu-submenu-arrow,
.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-item .ant-menu-submenu-arrow,
.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-submenu > .ant-menu-submenu-title .ant-menu-submenu-arrow,
.ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title .ant-menu-submenu-arrow {
  display: none;
}
.ant-menu-inline-collapsed > .ant-menu-item .anticon,
.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-item .anticon,
.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-submenu > .ant-menu-submenu-title .anticon,
.ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title .anticon {
  margin: 0;
  font-size: 16px;
  line-height: 40px;
}
.ant-menu-inline-collapsed > .ant-menu-item .anticon + span,
.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-item .anticon + span,
.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-submenu > .ant-menu-submenu-title .anticon + span,
.ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title .anticon + span {
  display: inline-block;
  max-width: 0;
  opacity: 0;
}
.ant-menu-inline-collapsed-tooltip {
  pointer-events: none;
}
.ant-menu-inline-collapsed-tooltip .anticon {
  display: none;
}
.ant-menu-inline-collapsed-tooltip a {
  color: rgba(255, 255, 255, 0.85);
}
.ant-menu-inline-collapsed .ant-menu-item-group-title {
  padding-right: 4px;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ant-menu-item-group-list {
  margin: 0;
  padding: 0;
}
.ant-menu-item-group-list .ant-menu-item,
.ant-menu-item-group-list .ant-menu-submenu-title {
  padding: 0 16px 0 28px;
}
.ant-menu-root.ant-menu-vertical,
.ant-menu-root.ant-menu-vertical-left,
.ant-menu-root.ant-menu-vertical-right,
.ant-menu-root.ant-menu-inline {
  box-shadow: none;
}
.ant-menu-sub.ant-menu-inline {
  padding: 0;
  border: 0;
  border-radius: 0;
  box-shadow: none;
}
.ant-menu-sub.ant-menu-inline > .ant-menu-item,
.ant-menu-sub.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
  height: 40px;
  line-height: 40px;
  list-style-position: inside;
  list-style-type: disc;
}
.ant-menu-sub.ant-menu-inline .ant-menu-item-group-title {
  padding-left: 32px;
}
.ant-menu-item-disabled,
.ant-menu-submenu-disabled {
  color: rgba(0, 0, 0, 0.25) !important;
  background: none;
  border-color: transparent !important;
  cursor: not-allowed;
}
.ant-menu-item-disabled > a,
.ant-menu-submenu-disabled > a {
  color: rgba(0, 0, 0, 0.25) !important;
  pointer-events: none;
}
.ant-menu-item-disabled > .ant-menu-submenu-title,
.ant-menu-submenu-disabled > .ant-menu-submenu-title {
  color: rgba(0, 0, 0, 0.25) !important;
  cursor: not-allowed;
}
.ant-menu-item-disabled > .ant-menu-submenu-title > .ant-menu-submenu-arrow::before,
.ant-menu-submenu-disabled > .ant-menu-submenu-title > .ant-menu-submenu-arrow::before,
.ant-menu-item-disabled > .ant-menu-submenu-title > .ant-menu-submenu-arrow::after,
.ant-menu-submenu-disabled > .ant-menu-submenu-title > .ant-menu-submenu-arrow::after {
  background: rgba(0, 0, 0, 0.25) !important;
}
.ant-menu-dark,
.ant-menu-dark .ant-menu-sub {
  color: rgba(255, 255, 255, 0.65);
  background: #001529;
}
.ant-menu-dark .ant-menu-submenu-title .ant-menu-submenu-arrow,
.ant-menu-dark .ant-menu-sub .ant-menu-submenu-title .ant-menu-submenu-arrow {
  opacity: 0.45;
  transition: all 0.3s;
}
.ant-menu-dark .ant-menu-submenu-title .ant-menu-submenu-arrow::after,
.ant-menu-dark .ant-menu-sub .ant-menu-submenu-title .ant-menu-submenu-arrow::after,
.ant-menu-dark .ant-menu-submenu-title .ant-menu-submenu-arrow::before,
.ant-menu-dark .ant-menu-sub .ant-menu-submenu-title .ant-menu-submenu-arrow::before {
  background: #fff;
}
.ant-menu-dark.ant-menu-submenu-popup {
  background: transparent;
}
.ant-menu-dark .ant-menu-inline.ant-menu-sub {
  background: #000c17;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45) inset;
}
.ant-menu-dark.ant-menu-horizontal {
  border-bottom: 0;
}
.ant-menu-dark.ant-menu-horizontal > .ant-menu-item,
.ant-menu-dark.ant-menu-horizontal > .ant-menu-submenu {
  top: 0;
  margin-top: 0;
  border-color: #001529;
  border-bottom: 0;
}
.ant-menu-dark.ant-menu-horizontal > .ant-menu-item > a::before {
  bottom: 0;
}
.ant-menu-dark .ant-menu-item,
.ant-menu-dark .ant-menu-item-group-title,
.ant-menu-dark .ant-menu-item > a {
  color: rgba(255, 255, 255, 0.65);
}
.ant-menu-dark.ant-menu-inline,
.ant-menu-dark.ant-menu-vertical,
.ant-menu-dark.ant-menu-vertical-left,
.ant-menu-dark.ant-menu-vertical-right {
  border-right: 0;
}
.ant-menu-dark.ant-menu-inline .ant-menu-item,
.ant-menu-dark.ant-menu-vertical .ant-menu-item,
.ant-menu-dark.ant-menu-vertical-left .ant-menu-item,
.ant-menu-dark.ant-menu-vertical-right .ant-menu-item {
  left: 0;
  margin-left: 0;
  border-right: 0;
}
.ant-menu-dark.ant-menu-inline .ant-menu-item::after,
.ant-menu-dark.ant-menu-vertical .ant-menu-item::after,
.ant-menu-dark.ant-menu-vertical-left .ant-menu-item::after,
.ant-menu-dark.ant-menu-vertical-right .ant-menu-item::after {
  border-right: 0;
}
.ant-menu-dark.ant-menu-inline .ant-menu-item,
.ant-menu-dark.ant-menu-inline .ant-menu-submenu-title {
  width: 100%;
}
.ant-menu-dark .ant-menu-item:hover,
.ant-menu-dark .ant-menu-item-active,
.ant-menu-dark .ant-menu-submenu-active,
.ant-menu-dark .ant-menu-submenu-open,
.ant-menu-dark .ant-menu-submenu-selected,
.ant-menu-dark .ant-menu-submenu-title:hover {
  color: #fff;
  background-color: transparent;
}
.ant-menu-dark .ant-menu-item:hover > a,
.ant-menu-dark .ant-menu-item-active > a,
.ant-menu-dark .ant-menu-submenu-active > a,
.ant-menu-dark .ant-menu-submenu-open > a,
.ant-menu-dark .ant-menu-submenu-selected > a,
.ant-menu-dark .ant-menu-submenu-title:hover > a {
  color: #fff;
}
.ant-menu-dark .ant-menu-item:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow,
.ant-menu-dark .ant-menu-item-active > .ant-menu-submenu-title > .ant-menu-submenu-arrow,
.ant-menu-dark .ant-menu-submenu-active > .ant-menu-submenu-title > .ant-menu-submenu-arrow,
.ant-menu-dark .ant-menu-submenu-open > .ant-menu-submenu-title > .ant-menu-submenu-arrow,
.ant-menu-dark .ant-menu-submenu-selected > .ant-menu-submenu-title > .ant-menu-submenu-arrow,
.ant-menu-dark .ant-menu-submenu-title:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow,
.ant-menu-dark .ant-menu-item:hover > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow,
.ant-menu-dark .ant-menu-item-active > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow,
.ant-menu-dark .ant-menu-submenu-active > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow,
.ant-menu-dark .ant-menu-submenu-open > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow,
.ant-menu-dark .ant-menu-submenu-selected > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow,
.ant-menu-dark .ant-menu-submenu-title:hover > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow {
  opacity: 1;
}
.ant-menu-dark .ant-menu-item:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow::after,
.ant-menu-dark .ant-menu-item-active > .ant-menu-submenu-title > .ant-menu-submenu-arrow::after,
.ant-menu-dark .ant-menu-submenu-active > .ant-menu-submenu-title > .ant-menu-submenu-arrow::after,
.ant-menu-dark .ant-menu-submenu-open > .ant-menu-submenu-title > .ant-menu-submenu-arrow::after,
.ant-menu-dark .ant-menu-submenu-selected > .ant-menu-submenu-title > .ant-menu-submenu-arrow::after,
.ant-menu-dark .ant-menu-submenu-title:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow::after,
.ant-menu-dark .ant-menu-item:hover > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow::after,
.ant-menu-dark .ant-menu-item-active > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow::after,
.ant-menu-dark .ant-menu-submenu-active > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow::after,
.ant-menu-dark .ant-menu-submenu-open > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow::after,
.ant-menu-dark .ant-menu-submenu-selected > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow::after,
.ant-menu-dark .ant-menu-submenu-title:hover > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow::after,
.ant-menu-dark .ant-menu-item:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow::before,
.ant-menu-dark .ant-menu-item-active > .ant-menu-submenu-title > .ant-menu-submenu-arrow::before,
.ant-menu-dark .ant-menu-submenu-active > .ant-menu-submenu-title > .ant-menu-submenu-arrow::before,
.ant-menu-dark .ant-menu-submenu-open > .ant-menu-submenu-title > .ant-menu-submenu-arrow::before,
.ant-menu-dark .ant-menu-submenu-selected > .ant-menu-submenu-title > .ant-menu-submenu-arrow::before,
.ant-menu-dark .ant-menu-submenu-title:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow::before,
.ant-menu-dark .ant-menu-item:hover > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow::before,
.ant-menu-dark .ant-menu-item-active > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow::before,
.ant-menu-dark .ant-menu-submenu-active > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow::before,
.ant-menu-dark .ant-menu-submenu-open > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow::before,
.ant-menu-dark .ant-menu-submenu-selected > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow::before,
.ant-menu-dark .ant-menu-submenu-title:hover > .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow::before {
  background: #fff;
}
.ant-menu-dark .ant-menu-item:hover {
  background-color: transparent;
}
.ant-menu-dark .ant-menu-item-selected {
  color: #fff;
  border-right: 0;
}
.ant-menu-dark .ant-menu-item-selected::after {
  border-right: 0;
}
.ant-menu-dark .ant-menu-item-selected > a,
.ant-menu-dark .ant-menu-item-selected > a:hover {
  color: #fff;
}
.ant-menu-dark .ant-menu-item-selected .anticon {
  color: #fff;
}
.ant-menu-dark .ant-menu-item-selected .anticon + span {
  color: #fff;
}
.ant-menu.ant-menu-dark .ant-menu-item-selected,
.ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
  background-color: #1890ff;
}
.ant-menu-dark .ant-menu-item-disabled,
.ant-menu-dark .ant-menu-submenu-disabled,
.ant-menu-dark .ant-menu-item-disabled > a,
.ant-menu-dark .ant-menu-submenu-disabled > a {
  color: rgba(255, 255, 255, 0.35) !important;
  opacity: 0.8;
}
.ant-menu-dark .ant-menu-item-disabled > .ant-menu-submenu-title,
.ant-menu-dark .ant-menu-submenu-disabled > .ant-menu-submenu-title {
  color: rgba(255, 255, 255, 0.35) !important;
}
.ant-menu-dark .ant-menu-item-disabled > .ant-menu-submenu-title > .ant-menu-submenu-arrow::before,
.ant-menu-dark .ant-menu-submenu-disabled > .ant-menu-submenu-title > .ant-menu-submenu-arrow::before,
.ant-menu-dark .ant-menu-item-disabled > .ant-menu-submenu-title > .ant-menu-submenu-arrow::after,
.ant-menu-dark .ant-menu-submenu-disabled > .ant-menu-submenu-title > .ant-menu-submenu-arrow::after {
  background: rgba(255, 255, 255, 0.35) !important;
}
`;export{Fe as D,E as M,Te as S,xn as a,lt as b,ft as c,Zn as d,wt as e,at as s};
