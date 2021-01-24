var S=Object.assign;import{j as y,T as j,U as A,d as I,a9 as Z,P as i,v as ee,x as te,K as ve,B as Oe,I as N,z as ne,J as D,y as re,O as _e,c1 as Ke,G as L,e as m,a2 as Se,co as Pe,a as $e,r as Ee,a0 as z,cy as ae,aX as je,a_ as Te,q as Ce,cW as Ae,m as Ne}from"./index.de7a3c72.js";import{T as M}from"./Tree.da704165.js";import{T as De,F as ie,a as oe,n as ze,d as Fe}from"./util.0173355c.js";import{e as Be}from"./index.55f43c00.js";import{C as Ie}from"./CaretDownFilled.186d011f.js";import{u as Le}from"./useContextMenu.0dc7551b.js";import{u as Me}from"./useExpose.1d889469.js";import{D as He}from"./DownOutlined.2e949c36.js";import"./RightOutlined.dcad5eff.js";import"./EllipsisOutlined.ba16b190.js";import"./types.ead79a33.js";import"./isEqual.42834150.js";import"./toInteger.e48028d2.js";import"./index.b01ba49c.js";import"./index.95c10fda.js";var Ue={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}},{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}}]},name:"minus-square",theme:"outlined"};function Ve(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),r.forEach(function(a){qe(e,a,n[a])})}return e}function qe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var H=function(t,n){var r=Ve({},t,n.attrs);return y(A,j(r,{icon:Ue}),null)};H.displayName="MinusSquareOutlined",H.inheritAttrs=!1;var Re={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}},{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}}]},name:"plus-square",theme:"outlined"};function We(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),r.forEach(function(a){Ge(e,a,n[a])})}return e}function Ge(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var U=function(t,n){var r=We({},t,n.attrs);return y(A,j(r,{icon:Re}),null)};U.displayName="PlusSquareOutlined",U.inheritAttrs=!1,M.TreeNode=De;function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ce(Object(n),!0).forEach(function(r){V(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(){return k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(this,arguments)}var le=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},Je=M.TreeNode;function de(){return{showLine:i.looseBool,multiple:i.looseBool,autoExpandParent:i.looseBool,checkStrictly:i.looseBool,checkable:i.looseBool,disabled:i.looseBool,defaultExpandAll:i.looseBool,defaultExpandParent:i.looseBool,defaultExpandedKeys:i.arrayOf(i.oneOfType([i.string,i.number])),expandedKeys:i.arrayOf(i.oneOfType([i.string,i.number])),checkedKeys:i.oneOfType([i.arrayOf(i.oneOfType([i.string,i.number])),i.shape({checked:i.arrayOf(i.oneOfType([i.string,i.number])),halfChecked:i.arrayOf(i.oneOfType([i.string,i.number]))}).loose]),defaultCheckedKeys:i.arrayOf(i.oneOfType([i.string,i.number])),selectedKeys:i.arrayOf(i.oneOfType([i.string,i.number])),defaultSelectedKeys:i.arrayOf(i.oneOfType([i.string,i.number])),selectable:i.looseBool,filterAntTreeNode:i.func,loadData:i.func,loadedKeys:i.arrayOf(i.oneOfType([i.string,i.number])),draggable:i.looseBool,showIcon:i.looseBool,icon:i.func,switcherIcon:i.any,prefixCls:i.string,filterTreeNode:i.func,openAnimation:i.any,treeData:{type:Array},replaceFields:i.object,blockNode:i.looseBool,onExpand:i.func,onCheck:i.func,onSelect:i.func,onClick:i.func,onDoubleclick:i.func,onDblclick:i.func,"onUpdate:selectedKeys":i.func,"onUpdate:checkedKeys":i.func,"onUpdate:expandedKeys":i.func}}var v=I({name:"ATree",inheritAttrs:!1,props:Z(de(),{checkable:!1,showIcon:!1,openAnimation:k(k({},Be),{appear:null}),blockNode:!1}),setup:function(){return{tree:null,configProvider:ee("configProvider",te)}},TreeNode:Je,methods:{renderSwitcherIcon:function(t,n,r){var a=r.isLeaf,l=r.loading,o=r.expanded,s=this.$props.showLine;if(l)return y(ve,{class:"".concat(t,"-switcher-loading-icon")},null);if(a)return s?y(ie,{class:"".concat(t,"-switcher-line-icon")},null):null;var d="".concat(t,"-switcher-icon");return n?Oe(n,{class:d}):s?o?y(H,{class:"".concat(t,"-switcher-line-icon")},null):y(U,{class:"".concat(t,"-switcher-line-icon")},null):y(Ie,{class:d},null)},updateTreeData:function(t){var n=this,r=this.$slots,a={children:"children",title:"title",key:"key"},l=k(k({},a),this.$props.replaceFields);return t.map(function(o){var s=o[l.key],d=o[l.children],c=o.slots,f=c===void 0?{}:c,h=o.class,p=o.style,u=le(o,["slots","class","style"]),w=k(k({},u),{icon:r[f.icon]||u.icon,switcherIcon:r[f.switcherIcon]||u.switcherIcon,title:r[f.title]||r.title||u[l.title],dataRef:o,key:s,class:h,style:p});return d?k(k({},w),{children:n.updateTreeData(d)}):w})},setTreeRef:function(t){this.tree=t},handleCheck:function(t,n){this.$emit("update:checkedKeys",t),this.$emit("check",t,n)},handleExpand:function(t,n){this.$emit("update:expandedKeys",t),this.$emit("expand",t,n)},handleSelect:function(t,n){this.$emit("update:selectedKeys",t),this.$emit("select",t,n)}},render:function(){var t=this,n,r=N(this),a=r.prefixCls,l=r.showIcon,o=r.treeNodes,s=r.blockNode,d=this.configProvider.getPrefixCls,c=d("tree",a),f=ne(this,"switcherIcon"),h=r.checkable,p=r.treeData||o;p&&(p=this.updateTreeData(p));var u=this.$attrs,w=u.class,x=le(u,["class"]),_=k(k(k(k({},r),{prefixCls:c,checkable:h&&y("span",{class:"".concat(c,"-checkbox-inner")},null),children:D(this),switcherIcon:function(B){return t.renderSwitcherIcon(c,f,B)},ref:this.setTreeRef}),x),{class:re(w,(n={},V(n,"".concat(c,"-icon-hide"),!l),V(n,"".concat(c,"-block-node"),s),n)),onCheck:this.handleCheck,onExpand:this.handleExpand,onSelect:this.handleSelect});return p&&(_.treeData=p),y(M,se(se({},_),{},{__propsSymbol__:[]}),null)}}),Xe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"}}]},name:"folder-open",theme:"outlined"};function Qe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),r.forEach(function(a){Ye(e,a,n[a])})}return e}function Ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q=function(t,n){var r=Qe({},t,n.attrs);return y(A,j(r,{icon:Xe}),null)};q.displayName="FolderOpenOutlined",q.inheritAttrs=!1;var Ze={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"}}]},name:"folder",theme:"outlined"};function et(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),r.forEach(function(a){tt(e,a,n[a])})}return e}function tt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var R=function(t,n){var r=et({},t,n.attrs);return y(A,j(r,{icon:Ze}),null)};R.displayName="FolderOutlined",R.inheritAttrs=!1;function F(e){return it(e)||at(e)||rt(e)||nt()}function nt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rt(e,t){if(!!e){if(typeof e=="string")return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return W(e,t)}}function at(e){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(e))return Array.from(e)}function it(e){if(Array.isArray(e))return W(e)}function W(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var K;(function(e){e[e.None=0]="None",e[e.Start=1]="Start",e[e.End=2]="End"})(K||(K={}));function G(e,t){var n=ze(e)||[];function r(a){var l=a.key,o=D(a);t(l,a)!==!1&&G(o,t)}n.forEach(r)}function ot(e){var t=oe(e),n=t.keyEntities;return F(n.keys())}function ct(e,t,n,r){var a=[],l=K.None;if(n&&n===r)return[n];if(!n||!r)return[];function o(s){return s===n||s===r}return G(e,function(s){if(l===K.End)return!1;if(o(s)){if(a.push(s),l===K.None)l=K.Start;else if(l===K.Start)return l=K.End,!1}else l===K.Start&&a.push(s);return t.indexOf(s)!==-1}),a}function pe(e,t){var n=F(t),r=[];return G(e,function(a,l){var o=n.indexOf(a);return o!==-1&&(r.push(l),n.splice(o,1)),!!n.length}),r}function he(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=[],r=t(e||[]).forEach(function(d){n.push(d[l]),d[s]&&(n=[].concat(F(n),F(he(d[s],t))))}),a=r.key,l=a===void 0?"key":a,o=r.children,s=o===void 0?"children":o;return n}function fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function st(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?fe(Object(n),!0).forEach(function(r){lt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fe(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function lt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ue(e){return ft(e)||ht(e)||pt(e)||dt()}function dt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pt(e,t){if(!!e){if(typeof e=="string")return J(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return J(e,t)}}function ht(e){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(e))return Array.from(e)}function ft(e){if(Array.isArray(e))return J(e)}function J(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function O(){return O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O.apply(this,arguments)}var be=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function ut(e){var t=e.isLeaf,n=e.expanded;return t?y(ie,null,null):n?y(q,null,null):y(R,null,null)}var X=I({name:"ADirectoryTree",mixins:[_e],inheritAttrs:!1,props:Z(O(O({},de()),{expandAction:i.oneOf([!1,"click","doubleclick","dblclick"])}),{showIcon:!0,expandAction:"click"}),setup:function(){return{children:null,onDebounceExpand:null,tree:null,lastSelectedKey:"",cachedSelectedKeys:[],configProvider:ee("configProvider",te)}},data:function(){var t=N(this),n=t.defaultExpandAll,r=t.defaultExpandParent,a=t.expandedKeys,l=t.defaultExpandedKeys,o=D(this),s=oe(o),d=s.keyEntities,c={};return c._selectedKeys=t.selectedKeys||t.defaultSelectedKeys||[],n?t.treeData?c._expandedKeys=he(t.treeData,t.replaceFields):c._expandedKeys=ot(o):r?c._expandedKeys=Fe(a||l,d):c._expandedKeys=a||l,O({_selectedKeys:[],_expandedKeys:[]},c)},watch:{expandedKeys:function(t){this.setState({_expandedKeys:t})},selectedKeys:function(t){this.setState({_selectedKeys:t})}},created:function(){this.onDebounceExpand=Ke(this.expandFolderNode,200,{leading:!0})},methods:{handleExpand:function(t,n){this.setUncontrolledState({_expandedKeys:t}),this.$emit("update:expandedKeys",t),this.$emit("expand",t,n)},handleClick:function(t,n){var r=this.$props.expandAction;r==="click"&&this.onDebounceExpand(t,n),this.$emit("click",t,n)},handleDoubleClick:function(t,n){var r=this.$props.expandAction;(r==="dblclick"||r==="doubleclick")&&this.onDebounceExpand(t,n),this.$emit("doubleclick",t,n),this.$emit("dblclick",t,n)},hanldeSelect:function(t,n){var r=this.$props.multiple,a=this.children||[],l=this.$data._expandedKeys,o=l===void 0?[]:l,s=n.node,d=n.nativeEvent,c=s.eventKey,f=c===void 0?"":c,h={},p=O(O({},n),{selected:!0}),u=d.ctrlKey||d.metaKey,w=d.shiftKey,x;r&&u?(x=t,this.lastSelectedKey=f,this.cachedSelectedKeys=x,p.selectedNodes=pe(a,x)):r&&w?(x=Array.from(new Set([].concat(ue(this.cachedSelectedKeys||[]),ue(ct(a,o,f,this.lastSelectedKey))))),p.selectedNodes=pe(a,x)):(x=[f],this.lastSelectedKey=f,this.cachedSelectedKeys=x,p.selectedNodes=[n.node]),h._selectedKeys=x,this.$emit("update:selectedKeys",x),this.$emit("select",x,p),this.setUncontrolledState(h)},setTreeRef:function(t){this.tree=t},expandFolderNode:function(t,n){var r=n.isLeaf;if(!(r||t.shiftKey||t.metaKey||t.ctrlKey)&&this.tree.tree){var a=this.tree.tree;a.onNodeExpand(t,n)}},setUncontrolledState:function(t){var n=L(t,Object.keys(N(this)).map(function(r){return"_".concat(r)}));Object.keys(n).length&&this.setState(n)},handleCheck:function(t,n){this.$emit("update:checkedKeys",t),this.$emit("check",t,n)}},render:function(){var t=this;this.children=D(this);var n=N(this),r=n.prefixCls,a=be(n,["prefixCls"]),l=this.configProvider.getPrefixCls,o=l("tree",r),s=this.$data,d=s._expandedKeys,c=s._selectedKeys,f=this.$attrs,h=f.class,p=be(f,["class"]),u=re("".concat(o,"-directory"),h),w=O(O(O({icon:ut},p),L(a,["onUpdate:selectedKeys","onUpdate:checkedKeys","onUpdate:expandedKeys"])),{prefixCls:o,expandedKeys:d,selectedKeys:c,switcherIcon:ne(this,"switcherIcon"),ref:this.setTreeRef,class:u,onSelect:this.hanldeSelect,onClick:this.handleClick,onDblclick:this.handleDoubleClick,onExpand:this.handleExpand,onCheck:this.handleCheck});return y(v,w,st({default:function(){return[t.children]}},L(this.$slots,["default"])))}});v.TreeNode.name="ATreeNode",v.DirectoryTree=X,v.install=function(e){return e.component(v.name,v),e.component(v.TreeNode.name,v.TreeNode),e.component(X.name,X),e};var Nt=`/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
/* stylelint-disable no-duplicate-selectors */
/* stylelint-disable */
/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
@-webkit-keyframes antCheckboxEffect {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
}
@keyframes antCheckboxEffect {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
}
.ant-tree.ant-tree-directory {
  position: relative;
}
.ant-tree.ant-tree-directory > li span.ant-tree-switcher,
.ant-tree.ant-tree-directory .ant-tree-child-tree > li span.ant-tree-switcher {
  position: relative;
  z-index: 1;
}
.ant-tree.ant-tree-directory > li span.ant-tree-switcher.ant-tree-switcher-noop,
.ant-tree.ant-tree-directory .ant-tree-child-tree > li span.ant-tree-switcher.ant-tree-switcher-noop {
  pointer-events: none;
}
.ant-tree.ant-tree-directory > li span.ant-tree-checkbox,
.ant-tree.ant-tree-directory .ant-tree-child-tree > li span.ant-tree-checkbox {
  position: relative;
  z-index: 1;
}
.ant-tree.ant-tree-directory > li span.ant-tree-node-content-wrapper,
.ant-tree.ant-tree-directory .ant-tree-child-tree > li span.ant-tree-node-content-wrapper {
  border-radius: 0;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.ant-tree.ant-tree-directory > li span.ant-tree-node-content-wrapper:hover,
.ant-tree.ant-tree-directory .ant-tree-child-tree > li span.ant-tree-node-content-wrapper:hover {
  background: transparent;
}
.ant-tree.ant-tree-directory > li span.ant-tree-node-content-wrapper:hover::before,
.ant-tree.ant-tree-directory .ant-tree-child-tree > li span.ant-tree-node-content-wrapper:hover::before {
  background: #f5f5f5;
}
.ant-tree.ant-tree-directory > li span.ant-tree-node-content-wrapper.ant-tree-node-selected,
.ant-tree.ant-tree-directory .ant-tree-child-tree > li span.ant-tree-node-content-wrapper.ant-tree-node-selected {
  color: #fff;
  background: transparent;
}
.ant-tree.ant-tree-directory > li span.ant-tree-node-content-wrapper::before,
.ant-tree.ant-tree-directory .ant-tree-child-tree > li span.ant-tree-node-content-wrapper::before {
  position: absolute;
  right: 0;
  left: 0;
  height: 24px;
  transition: all 0.3s;
  content: '';
}
.ant-tree.ant-tree-directory > li span.ant-tree-node-content-wrapper > span,
.ant-tree.ant-tree-directory .ant-tree-child-tree > li span.ant-tree-node-content-wrapper > span {
  position: relative;
  z-index: 1;
}
.ant-tree.ant-tree-directory > li.ant-tree-treenode-selected > span.ant-tree-switcher,
.ant-tree.ant-tree-directory .ant-tree-child-tree > li.ant-tree-treenode-selected > span.ant-tree-switcher {
  color: #fff;
}
.ant-tree.ant-tree-directory > li.ant-tree-treenode-selected > span.ant-tree-checkbox .ant-tree-checkbox-inner,
.ant-tree.ant-tree-directory .ant-tree-child-tree > li.ant-tree-treenode-selected > span.ant-tree-checkbox .ant-tree-checkbox-inner {
  border-color: #1890ff;
}
.ant-tree.ant-tree-directory > li.ant-tree-treenode-selected > span.ant-tree-checkbox.ant-tree-checkbox-checked::after,
.ant-tree.ant-tree-directory .ant-tree-child-tree > li.ant-tree-treenode-selected > span.ant-tree-checkbox.ant-tree-checkbox-checked::after {
  border-color: #fff;
}
.ant-tree.ant-tree-directory > li.ant-tree-treenode-selected > span.ant-tree-checkbox.ant-tree-checkbox-checked .ant-tree-checkbox-inner,
.ant-tree.ant-tree-directory .ant-tree-child-tree > li.ant-tree-treenode-selected > span.ant-tree-checkbox.ant-tree-checkbox-checked .ant-tree-checkbox-inner {
  background: #fff;
}
.ant-tree.ant-tree-directory > li.ant-tree-treenode-selected > span.ant-tree-checkbox.ant-tree-checkbox-checked .ant-tree-checkbox-inner::after,
.ant-tree.ant-tree-directory .ant-tree-child-tree > li.ant-tree-treenode-selected > span.ant-tree-checkbox.ant-tree-checkbox-checked .ant-tree-checkbox-inner::after {
  border-color: #1890ff;
}
.ant-tree.ant-tree-directory > li.ant-tree-treenode-selected > span.ant-tree-node-content-wrapper::before,
.ant-tree.ant-tree-directory .ant-tree-child-tree > li.ant-tree-treenode-selected > span.ant-tree-node-content-wrapper::before {
  background: #1890ff;
}
.ant-tree-checkbox {
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
  top: -0.09em;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  vertical-align: middle;
  outline: none;
  cursor: pointer;
}
.ant-tree-checkbox-wrapper:hover .ant-tree-checkbox-inner,
.ant-tree-checkbox:hover .ant-tree-checkbox-inner,
.ant-tree-checkbox-input:focus + .ant-tree-checkbox-inner {
  border-color: #1890ff;
}
.ant-tree-checkbox-checked::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid #1890ff;
  border-radius: 2px;
  visibility: hidden;
  -webkit-animation: antCheckboxEffect 0.36s ease-in-out;
          animation: antCheckboxEffect 0.36s ease-in-out;
  -webkit-animation-fill-mode: backwards;
          animation-fill-mode: backwards;
  content: '';
}
.ant-tree-checkbox:hover::after,
.ant-tree-checkbox-wrapper:hover .ant-tree-checkbox::after {
  visibility: visible;
}
.ant-tree-checkbox-inner {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  width: 16px;
  height: 16px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  border-collapse: separate;
  transition: all 0.3s;
}
.ant-tree-checkbox-inner::after {
  position: absolute;
  top: 50%;
  left: 22%;
  display: table;
  width: 5.71428571px;
  height: 9.14285714px;
  border: 2px solid #fff;
  border-top: 0;
  border-left: 0;
  transform: rotate(45deg) scale(0) translate(-50%, -50%);
  opacity: 0;
  transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
  content: ' ';
}
.ant-tree-checkbox-input {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
}
.ant-tree-checkbox-checked .ant-tree-checkbox-inner::after {
  position: absolute;
  display: table;
  border: 2px solid #fff;
  border-top: 0;
  border-left: 0;
  transform: rotate(45deg) scale(1) translate(-50%, -50%);
  opacity: 1;
  transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
  content: ' ';
}
.ant-tree-checkbox-checked .ant-tree-checkbox-inner {
  background-color: #1890ff;
  border-color: #1890ff;
}
.ant-tree-checkbox-disabled {
  cursor: not-allowed;
}
.ant-tree-checkbox-disabled.ant-tree-checkbox-checked .ant-tree-checkbox-inner::after {
  border-color: rgba(0, 0, 0, 0.25);
  -webkit-animation-name: none;
          animation-name: none;
}
.ant-tree-checkbox-disabled .ant-tree-checkbox-input {
  cursor: not-allowed;
}
.ant-tree-checkbox-disabled .ant-tree-checkbox-inner {
  background-color: #f5f5f5;
  border-color: #d9d9d9 !important;
}
.ant-tree-checkbox-disabled .ant-tree-checkbox-inner::after {
  border-color: #f5f5f5;
  border-collapse: separate;
  -webkit-animation-name: none;
          animation-name: none;
}
.ant-tree-checkbox-disabled + span {
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
}
.ant-tree-checkbox-disabled:hover::after,
.ant-tree-checkbox-wrapper:hover .ant-tree-checkbox-disabled::after {
  visibility: hidden;
}
.ant-tree-checkbox-wrapper {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  display: inline-block;
  line-height: unset;
  cursor: pointer;
}
.ant-tree-checkbox-wrapper.ant-tree-checkbox-wrapper-disabled {
  cursor: not-allowed;
}
.ant-tree-checkbox-wrapper + .ant-tree-checkbox-wrapper {
  margin-left: 8px;
}
.ant-tree-checkbox + span {
  padding-right: 8px;
  padding-left: 8px;
}
.ant-tree-checkbox-group {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  display: inline-block;
}
.ant-tree-checkbox-group-item {
  display: inline-block;
  margin-right: 8px;
}
.ant-tree-checkbox-group-item:last-child {
  margin-right: 0;
}
.ant-tree-checkbox-group-item + .ant-tree-checkbox-group-item {
  margin-left: 0;
}
.ant-tree-checkbox-indeterminate .ant-tree-checkbox-inner {
  background-color: #fff;
  border-color: #d9d9d9;
}
.ant-tree-checkbox-indeterminate .ant-tree-checkbox-inner::after {
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  background-color: #1890ff;
  border: 0;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  content: ' ';
}
.ant-tree-checkbox-indeterminate.ant-tree-checkbox-disabled .ant-tree-checkbox-inner::after {
  background-color: rgba(0, 0, 0, 0.25);
  border-color: rgba(0, 0, 0, 0.25);
}
.ant-tree {
  /* see https://github.com/ant-design/ant-design/issues/16259 */
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  margin: 0;
  padding: 0;
}
.ant-tree-checkbox-checked::after {
  position: absolute;
  top: 16.67%;
  left: 0;
  width: 100%;
  height: 66.67%;
}
.ant-tree ol,
.ant-tree ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.ant-tree li {
  margin: 0;
  padding: 4px 0;
  white-space: nowrap;
  list-style: none;
  outline: 0;
}
.ant-tree li span[draggable],
.ant-tree li span[draggable='true'] {
  line-height: 20px;
  border-top: 2px transparent solid;
  border-bottom: 2px transparent solid;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  /* Required to make elements draggable in old WebKit */
  -khtml-user-drag: element;
  -webkit-user-drag: element;
}
.ant-tree li.drag-over > span[draggable] {
  color: white;
  background-color: #1890ff;
  opacity: 0.8;
}
.ant-tree li.drag-over-gap-top > span[draggable] {
  border-top-color: #1890ff;
}
.ant-tree li.drag-over-gap-bottom > span[draggable] {
  border-bottom-color: #1890ff;
}
.ant-tree li.filter-node > span {
  color: #ff4d4f !important;
  font-weight: 500 !important;
}
.ant-tree li.ant-tree-treenode-loading span.ant-tree-switcher.ant-tree-switcher_open .ant-tree-switcher-loading-icon,
.ant-tree li.ant-tree-treenode-loading span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-loading-icon {
  position: absolute;
  left: 0;
  display: inline-block;
  width: 24px;
  height: 24px;
  color: #1890ff;
  font-size: 14px;
  transform: none;
}
.ant-tree li.ant-tree-treenode-loading span.ant-tree-switcher.ant-tree-switcher_open .ant-tree-switcher-loading-icon svg,
.ant-tree li.ant-tree-treenode-loading span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-loading-icon svg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
:root .ant-tree li.ant-tree-treenode-loading span.ant-tree-switcher.ant-tree-switcher_open::after,
:root .ant-tree li.ant-tree-treenode-loading span.ant-tree-switcher.ant-tree-switcher_close::after {
  opacity: 0;
}
.ant-tree li ul {
  margin: 0;
  padding: 0 0 0 18px;
}
.ant-tree li .ant-tree-node-content-wrapper {
  display: inline-block;
  height: 24px;
  margin: 0;
  padding: 0 5px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 24px;
  text-decoration: none;
  vertical-align: top;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.3s;
}
.ant-tree li .ant-tree-node-content-wrapper:hover {
  background-color: #f5f5f5;
}
.ant-tree li .ant-tree-node-content-wrapper.ant-tree-node-selected {
  background-color: #bae7ff;
}
.ant-tree li span.ant-tree-checkbox {
  top: initial;
  height: 24px;
  margin: 0 4px 0 2px;
  padding: 4px 0;
}
.ant-tree li span.ant-tree-switcher,
.ant-tree li span.ant-tree-iconEle {
  display: inline-block;
  width: 24px;
  height: 24px;
  margin: 0;
  line-height: 24px;
  text-align: center;
  vertical-align: top;
  border: 0 none;
  outline: none;
  cursor: pointer;
}
.ant-tree li span.ant-tree-iconEle:empty {
  display: none;
}
.ant-tree li span.ant-tree-switcher {
  position: relative;
}
.ant-tree li span.ant-tree-switcher.ant-tree-switcher-noop {
  cursor: default;
}
.ant-tree li span.ant-tree-switcher.ant-tree-switcher_open .ant-tree-switcher-icon,
.ant-tree li span.ant-tree-switcher.ant-tree-switcher_open .ant-select-switcher-icon {
  font-size: 12px;
  font-size: 10px \\9;
  transform: scale(0.83333333) rotate(0deg);
  display: inline-block;
  font-weight: bold;
}
:root .ant-tree li span.ant-tree-switcher.ant-tree-switcher_open .ant-tree-switcher-icon,
:root .ant-tree li span.ant-tree-switcher.ant-tree-switcher_open .ant-select-switcher-icon {
  font-size: 12px;
}
.ant-tree li span.ant-tree-switcher.ant-tree-switcher_open .ant-tree-switcher-icon svg,
.ant-tree li span.ant-tree-switcher.ant-tree-switcher_open .ant-select-switcher-icon svg {
  transition: transform 0.3s;
}
.ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon,
.ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-select-switcher-icon {
  font-size: 12px;
  font-size: 10px \\9;
  transform: scale(0.83333333) rotate(0deg);
  display: inline-block;
  font-weight: bold;
}
:root .ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon,
:root .ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-select-switcher-icon {
  font-size: 12px;
}
.ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon svg,
.ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-select-switcher-icon svg {
  transition: transform 0.3s;
}
.ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon svg {
  transform: rotate(-90deg);
}
.ant-tree li:last-child > span.ant-tree-switcher::before,
.ant-tree li:last-child > span.ant-tree-iconEle::before {
  display: none;
}
.ant-tree > li:first-child {
  padding-top: 7px;
}
.ant-tree > li:last-child {
  padding-bottom: 7px;
}
.ant-tree-child-tree > li:first-child {
  padding-top: 8px;
}
.ant-tree-child-tree > li:last-child {
  padding-bottom: 0;
}
li.ant-tree-treenode-disabled > span:not(.ant-tree-switcher),
li.ant-tree-treenode-disabled > .ant-tree-node-content-wrapper,
li.ant-tree-treenode-disabled > .ant-tree-node-content-wrapper span {
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
}
li.ant-tree-treenode-disabled > .ant-tree-node-content-wrapper:hover {
  background: transparent;
}
.ant-tree-icon__open {
  margin-right: 2px;
  vertical-align: top;
}
.ant-tree-icon__close {
  margin-right: 2px;
  vertical-align: top;
}
.ant-tree.ant-tree-show-line li {
  position: relative;
}
.ant-tree.ant-tree-show-line li span.ant-tree-switcher {
  color: rgba(0, 0, 0, 0.45);
  background: #fff;
}
.ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher-noop .ant-tree-switcher-icon,
.ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher-noop .ant-select-switcher-icon {
  display: inline-block;
  font-weight: normal;
  font-size: 12px;
}
.ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher-noop .ant-tree-switcher-icon svg,
.ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher-noop .ant-select-switcher-icon svg {
  transition: transform 0.3s;
}
.ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_open .ant-tree-switcher-icon,
.ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_open .ant-select-switcher-icon {
  display: inline-block;
  font-weight: normal;
  font-size: 12px;
}
.ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_open .ant-tree-switcher-icon svg,
.ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_open .ant-select-switcher-icon svg {
  transition: transform 0.3s;
}
.ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon,
.ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_close .ant-select-switcher-icon {
  display: inline-block;
  font-weight: normal;
  font-size: 12px;
}
.ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon svg,
.ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_close .ant-select-switcher-icon svg {
  transition: transform 0.3s;
}
.ant-tree.ant-tree-show-line li:not(:last-child)::before {
  position: absolute;
  left: 12px;
  width: 1px;
  height: 100%;
  height: calc(100% - 22px);
  margin: 22px 0 0;
  border-left: 1px solid #d9d9d9;
  content: ' ';
}
.ant-tree.ant-tree-icon-hide .ant-tree-treenode-loading .ant-tree-iconEle {
  display: none;
}
.ant-tree.ant-tree-block-node li .ant-tree-node-content-wrapper {
  width: calc(100% - 24px);
}
.ant-tree.ant-tree-block-node li span.ant-tree-checkbox + .ant-tree-node-content-wrapper {
  width: calc(100% - 46px);
}
`,Dt=`.basic-tree {
  position: relative;
}
.basic-tree-title {
  position: relative;
  display: inline-block;
  width: 100%;
  padding-right: 10px;
}
.basic-tree-title:hover .basic-tree__action {
  visibility: visible;
}
.basic-tree__content {
  display: inline-block;
  overflow: hidden;
}
.basic-tree__actions {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
}
.basic-tree__action {
  margin-left: 4px;
  visibility: hidden;
}
`;const bt={replaceFields:{type:Object},treeData:{type:Array},actionList:{type:Array,default:()=>[]},expandedKeys:{type:Array,default:()=>[]},selectedKeys:{type:Array,default:()=>[]},checkedKeys:{type:Array,default:()=>[]},beforeRightClick:{type:Function,default:null},rightMenuList:{type:Array}};function yt(e,t){function n(o,s,d){if(!o)return;const c=d||m(e),{key:f,children:h}=m(t);if(!(!h||!f))for(let p=0;p<c.length;p++){const u=c[p],w=u[h];if(u[f]===o){c[p]=S(S({},c[p]),s);break}else w&&w.length&&n(o,s,u[h])}}function r(o=1,s,d=1){if(!o)return[];const c=[],f=s||m(e)||[];for(let h=0;h<f.length;h++){const p=f[h],{key:u,children:w}=m(t),x=u?p[u]:"",_=w?p[w]:[];c.push(x),_&&_.length&&d<o&&(d+=1,c.push(...r(o,_,d)))}return c}function a({parentKey:o=null,node:s,push:d="push"}){const c=Se(m(e));if(!o){c[d](s),e.value=c;return}const{key:f,children:h}=m(t);!h||!f||(Pe(c,p=>{p[f]===o&&(p[h]=p[h]||[],p[h][d](s))}),e.value=c)}function l(o,s){if(!o)return;const d=s||m(e),{key:c,children:f}=m(t);if(!(!f||!c))for(let h=0;h<d.length;h++){const p=d[h],u=p[f];if(p[c]===o){d.splice(h,1);break}else u&&u.length&&l(o,p[f])}}return{deleteNodeByKey:l,insertNodeByKey:a,filterByLevel:r,updateNodeByKey:n}}const C="basic-tree";var gt=I({name:"BasicTree",props:bt,emits:["update:expandedKeys","update:selectedKeys","update:value","get"],setup(e,{attrs:t,slots:n,emit:r}){const a=$e({expandedKeys:e.expandedKeys||[],selectedKeys:e.selectedKeys||[],checkedKeys:e.checkedKeys||[]}),l=Ee([]),[o]=Le(),s=z(()=>{const{replaceFields:b}=e;return S({children:"children",title:"title",key:"key"},b)}),d=z(()=>{const{actionList:b}=e;return{width:`calc(100% - ${b.length*18}px)`}}),c=z(()=>{let b=S(S(S({blockNode:!0},t),e),{expandedKeys:a.expandedKeys,selectedKeys:a.selectedKeys,checkedKeys:a.checkedKeys,replaceFields:m(s),"onUpdate:expandedKeys":g=>{a.expandedKeys=g,r("update:expandedKeys",g)},"onUpdate:selectedKeys":g=>{a.selectedKeys=g,r("update:selectedKeys",g)},onCheck:g=>{a.checkedKeys=g,r("update:value",g)},onRightClick:Q});return b=ae(b,"treeData"),b}),f=z(()=>m(l)),{deleteNodeByKey:h,insertNodeByKey:p,filterByLevel:u,updateNodeByKey:w}=yt(l,s);function x(b){const{actionList:g}=e;if(!(!g||g.length===0))return g.map((E,P)=>y("span",{key:P,class:`${C}__action`},[E.render(b)]))}function _({data:b}){return b?b.map(g=>{const{title:E,key:P,children:$}=m(s),ke=ae(g,"title"),T=g;return y(v.TreeNode,j(ke,{key:T==null?void 0:T[P]}),{title:()=>y("span",{class:`${C}-title`},[y("span",{class:`${C}__content`,style:m(d)},[E&&T[E]]),y("span",{class:`${C}__actions`},[Ne(" "),x(g)])]),default:()=>_({data:$?T[$]:[]})})}):null}async function Q({event:b,node:g}){const{rightMenuList:E=[],beforeRightClick:P}=e;let $=[];P&&je(P)?$=await P(g):$=E,!!$.length&&o({event:b,items:$})}function B(b){a.expandedKeys=b}function ye(){return a.expandedKeys}function ge(b){a.selectedKeys=b}function xe(){return a.selectedKeys}function we(b){a.checkedKeys=b}function me(){return a.checkedKeys}Te(()=>{l.value=e.treeData,a.expandedKeys=e.expandedKeys,a.selectedKeys=e.selectedKeys,a.checkedKeys=e.checkedKeys});const Y={setExpandedKeys:B,getExpandedKeys:ye,setSelectedKeys:ge,getSelectedKeys:xe,setCheckedKeys:we,getCheckedKeys:me,insertNodeByKey:p,deleteNodeByKey:h,updateNodeByKey:w,filterByLevel:b=>{a.expandedKeys=u(b)}};return Me(Y),Ce(()=>{r("get",Y)}),()=>y(v,j(m(c),{class:C}),S({switcherIcon:()=>y(He,null,null),default:()=>_({data:m(f)})},Ae(n)))}});export default gt;
