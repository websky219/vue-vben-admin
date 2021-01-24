import{P as a,d as $,O as j,X as R,J as B,R as J,y as T,B as U,j as h,D as Y,I as D,bL as m,F as Q,aa as Z,n as nn,r as en,q as tn,E as rn,v as an,x as on}from"./index.de7a3c72.js";import{U as sn}from"./UpOutlined.b1a0aa74.js";import{D as un}from"./DownOutlined.2e949c36.js";var ln={disabled:a.looseBool,activeClassName:a.string,activeStyle:a.any};function P(){return P=Object.assign||function(r){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t])}return r},P.apply(this,arguments)}var pn=$({name:"TouchFeedback",mixins:[j],inheritAttrs:!1,props:R(ln,{disabled:!1}),data:function(){return this.child=null,{active:!1}},mounted:function(){var n=this;this.$nextTick(function(){n.disabled&&n.active&&n.setState({active:!1})})},methods:{triggerEvent:function(n,e,t){var i="on".concat(n),o=this.child;o.props[i]&&o.props[i](t),e!==this.active&&this.setState({active:e})},onTouchStart:function(n){this.triggerEvent("Touchstart",!0,n)},onTouchMove:function(n){this.triggerEvent("Touchmove",!1,n)},onTouchEnd:function(n){this.triggerEvent("Touchend",!1,n)},onTouchCancel:function(n){this.triggerEvent("Touchcancel",!1,n)},onMouseDown:function(n){this.triggerEvent("Mousedown",!0,n)},onMouseUp:function(n){this.triggerEvent("Mouseup",!1,n)},onMouseLeave:function(n){this.triggerEvent("Mouseleave",!1,n)}},render:function(){var n=this.$props,e=n.disabled,t=n.activeClassName,i=t===void 0?"":t,o=n.activeStyle,s=o===void 0?{}:o,u=B(this);if(u.length!==1)return J(!1,"m-feedback\u7EC4\u4EF6\u53EA\u80FD\u5305\u542B\u4E00\u4E2A\u5B50\u5143\u7D20"),null;var l=e?void 0:{onTouchstart:this.onTouchStart,onTouchmove:this.onTouchMove,onTouchend:this.onTouchEnd,onTouchcancel:this.onTouchCancel,onMousedown:this.onMouseDown,onMouseup:this.onMouseUp,onMouseleave:this.onMouseLeave};if(u=u[0],this.child=u,!e&&this.active){var p=u.props,d=p.style,c=p.class;return s!==!1&&(s&&(d=P(P({},d),s)),c=T(c,i)),U(u,P({class:c,style:d},l))}return U(u,l)}});function dn(r){return typeof r=="function"||Object.prototype.toString.call(r)==="[object Object]"&&!Y(r)}var K={name:"InputHandler",inheritAttrs:!1,props:{prefixCls:a.string,disabled:a.looseBool},render:function(){var n,e=this.$props,t=e.prefixCls,i=e.disabled,o={disabled:i,activeClassName:"".concat(t,"-handler-active")};return h(pn,o,dn(n=h("span",this.$attrs,[B(this)]))?n:{default:function(){return[n]}})}};function z(r,n){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),e.push.apply(e,t)}return e}function C(r){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?z(Object(e),!0).forEach(function(t){O(r,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):z(Object(e)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))})}return r}function O(r,n,e){return n in r?Object.defineProperty(r,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[n]=e,r}function f(){return f=Object.assign||function(r){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t])}return r},f.apply(this,arguments)}function k(r){r.preventDefault()}function cn(r){return r.replace(/[^\w\.-]+/g,"")}var hn=200,fn=600,bn=Number.MAX_SAFE_INTEGER||Math.pow(2,53)-1,S=function(n){return n!=null},M=function(n,e){return e===n||typeof e=="number"&&typeof n=="number"&&isNaN(e)&&isNaN(n)},mn={value:a.oneOfType([a.number,a.string]),defaultValue:a.oneOfType([a.number,a.string]),focusOnUpDown:a.looseBool,autofocus:a.looseBool,prefixCls:a.string,tabindex:a.oneOfType([a.string,a.number]),placeholder:a.string,disabled:a.looseBool,readonly:a.looseBool,max:a.number,min:a.number,step:a.oneOfType([a.number,a.string]),upHandler:a.any,downHandler:a.any,useTouch:a.looseBool,formatter:a.func,parser:a.func,precision:a.number,required:a.looseBool,pattern:a.string,decimalSeparator:a.string,autocomplete:a.string,title:a.string,name:a.string,id:a.string,type:a.string,maxlength:a.any},gn=$({name:"VCInputNumber",mixins:[j],inheritAttrs:!1,props:R(mn,{focusOnUpDown:!0,useTouch:!1,prefixCls:"rc-input-number",min:-bn,step:1,parser:cn,required:!1,autocomplete:"off"}),data:function(){var n=D(this);this.prevProps=f({},n);var e;"value"in n?e=this.value:e=this.defaultValue;var t=this.getValidValue(this.toNumber(e));return{inputValue:this.toPrecisionAsStep(t),sValue:t,focused:this.autofocus}},mounted:function(){var n=this;this.$nextTick(function(){n.updatedFunc()})},updated:function(){var n=this,e=this.$props,t=e.value,i=e.max,o=e.min,s=this.$data.focused,u=this.prevProps,l=D(this);if(u){if(!M(u.value,t)||!M(u.max,i)||!M(u.min,o)){var p=s?t:this.getValidValue(t),d;this.pressingUpOrDown?d=p:this.inputting?d=this.rawInput:d=this.toPrecisionAsStep(p),this.setState({sValue:p,inputValue:d})}var c="value"in l?t:this.$data.sValue;"max"in l&&u.max!==i&&typeof c=="number"&&c>i&&(this.__emit("update:value",i),this.__emit("change",i)),"min"in l&&u.min!==o&&typeof c=="number"&&c<o&&(this.__emit("update:value",o),this.__emit("change",o))}this.prevProps=f({},l),this.$nextTick(function(){n.updatedFunc()})},beforeUnmount:function(){this.stop()},methods:{updatedFunc:function(){var n=this.inputRef;try{if(this.cursorStart!==void 0&&this.$data.focused){if(!this.partRestoreByAfter(this.cursorAfter)&&this.$data.sValue!==this.value){var e=this.cursorStart+1;this.cursorAfter?this.lastKeyCode===m.BACKSPACE?e=this.cursorStart-1:this.lastKeyCode===m.DELETE&&(e=this.cursorStart):e=n.value.length,this.fixCaret(e,e)}else if(this.currentValue===n.value)switch(this.lastKeyCode){case m.BACKSPACE:this.fixCaret(this.cursorStart-1,this.cursorStart-1);break;case m.DELETE:this.fixCaret(this.cursorStart+1,this.cursorStart+1);break;default:}}}catch(t){}this.lastKeyCode=null,!!this.pressingUpOrDown&&(this.focusOnUpDown&&this.$data.focused&&document.activeElement!==n&&this.focus(),this.pressingUpOrDown=!1)},onKeyDown:function(n){if(n.keyCode===m.UP){var e=this.getRatio(n);this.up(n,e),this.stop()}else if(n.keyCode===m.DOWN){var t=this.getRatio(n);this.down(n,t),this.stop()}else n.keyCode===m.ENTER&&this.__emit("pressEnter",n);this.recordCursorPosition(),this.lastKeyCode=n.keyCode;for(var i=arguments.length,o=new Array(i>1?i-1:0),s=1;s<i;s++)o[s-1]=arguments[s];this.__emit.apply(this,["keydown",n].concat(o))},onKeyUp:function(n){this.stop(),this.recordCursorPosition();for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];this.__emit.apply(this,["keyup",n].concat(t))},onTrigger:function(n){if(n.target.composing)return!1;this.onChange(n)},onChange:function(n){this.$data.focused&&(this.inputting=!0),this.rawInput=this.parser(this.getValueFromEvent(n)),this.setState({inputValue:this.rawInput});var e=this.toNumber(this.rawInput);this.__emit("update:value",e),this.__emit("change",e)},onFocus:function(){this.setState({focused:!0});for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];this.__emit.apply(this,["focus"].concat(e))},onBlur:function(){this.inputting=!1,this.setState({focused:!1});var n=this.getCurrentValidValue(this.$data.inputValue),e=this.setValue(n);if(this.$attrs.onBlur){var t=this.inputRef.value,i=this.getInputDisplayValue({focused:!1,sValue:e});this.inputRef.value=i;for(var o=arguments.length,s=new Array(o),u=0;u<o;u++)s[u]=arguments[u];this.__emit.apply(this,["blur"].concat(s)),this.inputRef.value=t}},getCurrentValidValue:function(n){var e=n;return e===""?e="":this.isNotCompleteNumber(parseFloat(e,10))?e=this.$data.sValue:e=this.getValidValue(e),this.toNumber(e)},getRatio:function(n){var e=1;return n.metaKey||n.ctrlKey?e=.1:n.shiftKey&&(e=10),e},getValueFromEvent:function(n){var e=n.target.value.trim().replace(/。/g,".");return S(this.decimalSeparator)&&(e=e.replace(this.decimalSeparator,".")),e},getValidValue:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.min,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.max,i=parseFloat(n,10);return isNaN(i)?n:(i<e&&(i=e),i>t&&(i=t),i)},setValue:function(n,e){var t=this.$props.precision,i=this.isNotCompleteNumber(parseFloat(n,10))?null:parseFloat(n,10),o=this.$data,s=o.sValue,u=s===void 0?null:s,l=o.inputValue,p=l===void 0?null:l,d=typeof i=="number"?i.toFixed(t):"".concat(i),c=i!==u||d!=="".concat(p);return Q(this,"value")?this.setState({inputValue:this.toPrecisionAsStep(this.$data.sValue)},e):this.setState({sValue:i,inputValue:this.toPrecisionAsStep(n)},e),c&&(this.__emit("update:value",i),this.__emit("change",i)),i},getPrecision:function(n){if(S(this.precision))return this.precision;var e=n.toString();if(e.indexOf("e-")>=0)return parseInt(e.slice(e.indexOf("e-")+2),10);var t=0;return e.indexOf(".")>=0&&(t=e.length-e.indexOf(".")-1),t},getMaxPrecision:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;if(S(this.precision))return this.precision;var t=this.step,i=this.getPrecision(e),o=this.getPrecision(t),s=this.getPrecision(n);return n?Math.max(s,i+o):i+o},getPrecisionFactor:function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,t=this.getMaxPrecision(n,e);return Math.pow(10,t)},getInputDisplayValue:function(n){var e=n||this.$data,t=e.focused,i=e.inputValue,o=e.sValue,s;t?s=i:s=this.toPrecisionAsStep(o),s==null&&(s="");var u=this.formatWrapper(s);return S(this.$props.decimalSeparator)&&(u=u.toString().replace(".",this.$props.decimalSeparator)),u},recordCursorPosition:function(){try{var n=this.inputRef;this.cursorStart=n.selectionStart,this.cursorEnd=n.selectionEnd,this.currentValue=n.value,this.cursorBefore=n.value.substring(0,this.cursorStart),this.cursorAfter=n.value.substring(this.cursorEnd)}catch(e){}},fixCaret:function(n,e){if(!(n===void 0||e===void 0||!this.inputRef||!this.inputRef.value))try{var t=this.inputRef,i=t.selectionStart,o=t.selectionEnd;(n!==i||e!==o)&&t.setSelectionRange(n,e)}catch(s){}},restoreByAfter:function(n){if(n===void 0)return!1;var e=this.inputRef.value,t=e.lastIndexOf(n);if(t===-1)return!1;var i=this.cursorBefore.length;return this.lastKeyCode===m.DELETE&&this.cursorBefore.charAt(i-1)===n[0]?(this.fixCaret(i,i),!0):t+n.length===e.length?(this.fixCaret(t,t),!0):!1},partRestoreByAfter:function(n){var e=this;return n===void 0?!1:Array.prototype.some.call(n,function(t,i){var o=n.substring(i);return e.restoreByAfter(o)})},focus:function(){this.inputRef.focus(),this.recordCursorPosition()},blur:function(){this.inputRef.blur()},formatWrapper:function(n){return this.formatter?this.formatter(n):n},toPrecisionAsStep:function(n){if(this.isNotCompleteNumber(n)||n==="")return n;var e=Math.abs(this.getMaxPrecision(n));return isNaN(e)?n.toString():Number(n).toFixed(e)},isNotCompleteNumber:function(n){return isNaN(n)||n===""||n===null||n&&n.toString().indexOf(".")===n.toString().length-1},toNumber:function(n){var e=this.$props,t=e.precision,i=e.autofocus,o=this.$data.focused,s=o===void 0?i:o,u=n&&n.length>16&&s;return this.isNotCompleteNumber(n)||u?n:S(t)?Math.round(n*Math.pow(10,t))/Math.pow(10,t):Number(n)},upStep:function(n,e){var t=this.step,i=this.getPrecisionFactor(n,e),o=Math.abs(this.getMaxPrecision(n,e)),s=((i*n+i*t*e)/i).toFixed(o);return this.toNumber(s)},downStep:function(n,e){var t=this.step,i=this.getPrecisionFactor(n,e),o=Math.abs(this.getMaxPrecision(n,e)),s=((i*n-i*t*e)/i).toFixed(o);return this.toNumber(s)},stepFn:function(n,e){var t=this,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,o=arguments.length>3?arguments[3]:void 0;if(this.stop(),e&&e.preventDefault(),!this.disabled){var s=this.max,u=this.min,l=this.getCurrentValidValue(this.$data.inputValue)||0;if(!this.isNotCompleteNumber(l)){var p=this["".concat(n,"Step")](l,i),d=p>s||p<u;p>s?p=s:p<u&&(p=u),this.setValue(p),this.setState({focused:!0}),!d&&(this.autoStepTimer=setTimeout(function(){t[n](e,i,!0)},o?hn:fn))}}},stop:function(){this.autoStepTimer&&clearTimeout(this.autoStepTimer)},down:function(n,e,t){this.pressingUpOrDown=!0,this.stepFn("down",n,e,t)},up:function(n,e,t){this.pressingUpOrDown=!0,this.stepFn("up",n,e,t)},handleInputClick:function(){this.__emit("click")},saveUp:function(n){this.upHandlerRef=n},saveDown:function(n){this.downHandlerRef=n},saveInput:function(n){this.inputRef=n},onCompositionstart:function(n){n.target.composing=!0},onCompositionend:function(n){this.onChange(n),n.target.composing=!1}},render:function(){var n,e=f(f({},this.$props),this.$attrs),t=e.prefixCls,i=e.disabled,o=e.readonly,s=e.useTouch,u=e.autocomplete,l=e.upHandler,p=e.downHandler,d=e.class,c=T((n={},O(n,d,d),O(n,t,!0),O(n,"".concat(t,"-disabled"),i),O(n,"".concat(t,"-focused"),this.$data.focused),n)),b="",g="",y=this.$data.sValue;if(y||y===0)if(isNaN(y))b="".concat(t,"-handler-up-disabled"),g="".concat(t,"-handler-down-disabled");else{var _=Number(y);_>=this.max&&(b="".concat(t,"-handler-up-disabled")),_<=this.min&&(g="".concat(t,"-handler-down-disabled"))}var A={};for(var v in e)e.hasOwnProperty(v)&&(v.substr(0,5)==="data-"||v.substr(0,5)==="aria-"||v==="role")&&(A[v]=e[v]);var w=!this.readonly&&!this.disabled,q=this.getInputDisplayValue(),V,N;s?(V={onTouchstart:w&&!b&&this.up,onTouchend:this.stop},N={onTouchstart:w&&!g&&this.down,onTouchend:this.stop}):(V={onMousedown:w&&!b&&this.up,onMouseup:this.stop,onMouseleave:this.stop},N={onMousedown:w&&!g&&this.down,onMouseup:this.stop,onMouseleave:this.stop});var F=!!b||i||o,I=!!g||i||o,W=f(f({disabled:F,prefixCls:t,unselectable:"unselectable",role:"button","aria-label":"Increase Value","aria-disabled":!!F,class:"".concat(t,"-handler ").concat(t,"-handler-up ").concat(b)},V),{ref:this.saveUp}),X=f(f({disabled:I,prefixCls:t,unselectable:"unselectable",role:"button","aria-label":"Decrease Value","aria-disabled":!!I,class:"".concat(t,"-handler ").concat(t,"-handler-down ").concat(g)},N),{ref:this.saveDown});return h("div",{class:c,style:e.style,title:e.title,onMouseenter:e.onMouseenter,onMouseleave:e.onMouseleave,onMouseover:e.onMouseover,onMouseout:e.onMouseout},[h("div",{class:"".concat(t,"-handler-wrap")},[h("span",null,[h(K,C(C({},W),{},{key:"upHandler"}),{default:function(){return[l||h("span",{unselectable:"unselectable",class:"".concat(t,"-handler-up-inner"),onClick:k},null)]}})]),h(K,C(C({},X),{},{key:"downHandler"}),{default:function(){return[p||h("span",{unselectable:"unselectable",class:"".concat(t,"-handler-down-inner"),onClick:k},null)]}})]),h("div",{class:"".concat(t,"-input-wrap")},[h("input",C({role:"spinbutton","aria-valuemin":this.min,"aria-valuemax":this.max,"aria-valuenow":y,required:this.required,type:e.type,placeholder:this.placeholder,onClick:this.handleInputClick,class:"".concat(t,"-input"),tabindex:this.tabindex,autocomplete:u,onFocus:this.onFocus,onBlur:this.onBlur,onKeydown:w&&this.onKeyDown,onKeyup:w&&this.onKeyUp,autofocus:this.autofocus,maxlength:this.maxlength,readonly:this.readonly,disabled:this.disabled,max:this.max,min:this.min,step:this.step,name:this.name,title:this.title,id:this.id,onInput:this.onTrigger,onCompositionstart:this.onCompositionstart,onCompositionend:this.onCompositionend,ref:this.saveInput,value:q,pattern:this.pattern},A),null)])])}});function H(r,n){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),e.push.apply(e,t)}return e}function L(r){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?H(Object(e),!0).forEach(function(t){E(r,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):H(Object(e)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))})}return r}function E(r,n,e){return n in r?Object.defineProperty(r,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[n]=e,r}function x(){return x=Object.assign||function(r){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t])}return r},x.apply(this,arguments)}var vn=function(r,n){var e={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&n.indexOf(t)<0&&(e[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(r);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(r,t[i])&&(e[t[i]]=r[t[i]]);return e},wn={prefixCls:a.string,min:a.number,max:a.number,value:a.oneOfType([a.number,a.string]),step:a.oneOfType([a.number,a.string]).def(1),defaultValue:a.oneOfType([a.number,a.string]),tabindex:a.number,disabled:a.looseBool,size:a.oneOf(nn("large","small","default")),formatter:a.func,parser:a.func,decimalSeparator:a.string,placeholder:a.string,name:a.string,id:a.string,precision:a.number,autofocus:a.looseBool,onPressEnter:{type:Function},onChange:Function},xn=$({name:"AInputNumber",inheritAttrs:!1,props:wn,setup:function(n){var e=en(null),t=function(){e.value.focus()},i=function(){e.value.blur()};return tn(function(){rn(function(){})}),{configProvider:an("configProvider",on),inputNumberRef:e,focus:t,blur:i}},render:function(){var n,e=x(x({},D(this)),this.$attrs),t=e.prefixCls,i=e.size,o=e.class,s=vn(e,["prefixCls","size","class"]),u=this.configProvider.getPrefixCls,l=u("input-number",t),p=T((n={},E(n,"".concat(l,"-lg"),i==="large"),E(n,"".concat(l,"-sm"),i==="small"),n),o),d=h(sn,{class:"".concat(l,"-handler-up-inner")},null),c=h(un,{class:"".concat(l,"-handler-down-inner")},null),b=x(x({prefixCls:l,upHandler:d,downHandler:c},s),{class:p});return h(gn,L(L({},b),{},{ref:"inputNumberRef"}),null)}}),yn=Z(xn),Sn=`/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
/* stylelint-disable no-duplicate-selectors */
/* stylelint-disable */
/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
.ant-input-number {
  box-sizing: border-box;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: 'tnum';
  position: relative;
  width: 100%;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  line-height: 1.5715;
  background-color: #fff;
  background-image: none;
  transition: all 0.3s;
  display: inline-block;
  width: 90px;
  margin: 0;
  padding: 0;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
}
.ant-input-number::-moz-placeholder {
  color: #bfbfbf;
  opacity: 1;
}
.ant-input-number:-ms-input-placeholder {
  color: #bfbfbf;
}
.ant-input-number::-webkit-input-placeholder {
  color: #bfbfbf;
}
.ant-input-number:-moz-placeholder-shown {
  text-overflow: ellipsis;
}
.ant-input-number:-ms-input-placeholder {
  text-overflow: ellipsis;
}
.ant-input-number:placeholder-shown {
  text-overflow: ellipsis;
}
.ant-input-number:hover {
  border-color: #40a9ff;
  border-right-width: 1px !important;
}
.ant-input-number:focus {
  border-color: #40a9ff;
  border-right-width: 1px !important;
  outline: 0;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}
.ant-input-number-disabled {
  color: rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  cursor: not-allowed;
  opacity: 1;
}
.ant-input-number-disabled:hover {
  border-color: #d9d9d9;
  border-right-width: 1px !important;
}
.ant-input-number[disabled] {
  color: rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  cursor: not-allowed;
  opacity: 1;
}
.ant-input-number[disabled]:hover {
  border-color: #d9d9d9;
  border-right-width: 1px !important;
}
textarea.ant-input-number {
  max-width: 100%;
  height: auto;
  min-height: 32px;
  line-height: 1.5715;
  vertical-align: bottom;
  transition: all 0.3s, height 0s;
}
.ant-input-number-lg {
  padding: 6.5px 11px;
  font-size: 16px;
}
.ant-input-number-sm {
  padding: 0px 7px;
}
.ant-input-number-handler {
  position: relative;
  display: block;
  width: 100%;
  height: 50%;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.45);
  font-weight: bold;
  line-height: 0;
  text-align: center;
  transition: all 0.1s linear;
}
.ant-input-number-handler:active {
  background: #f4f4f4;
}
.ant-input-number-handler:hover .ant-input-number-handler-up-inner,
.ant-input-number-handler:hover .ant-input-number-handler-down-inner {
  color: #40a9ff;
}
.ant-input-number-handler-up-inner,
.ant-input-number-handler-down-inner {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  right: 4px;
  width: 12px;
  height: 12px;
  color: rgba(0, 0, 0, 0.45);
  line-height: 12px;
  transition: all 0.1s linear;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.ant-input-number-handler-up-inner > *,
.ant-input-number-handler-down-inner > * {
  line-height: 1;
}
.ant-input-number-handler-up-inner svg,
.ant-input-number-handler-down-inner svg {
  display: inline-block;
}
.ant-input-number-handler-up-inner::before,
.ant-input-number-handler-down-inner::before {
  display: none;
}
.ant-input-number-handler-up-inner .ant-input-number-handler-up-inner-icon,
.ant-input-number-handler-up-inner .ant-input-number-handler-down-inner-icon,
.ant-input-number-handler-down-inner .ant-input-number-handler-up-inner-icon,
.ant-input-number-handler-down-inner .ant-input-number-handler-down-inner-icon {
  display: block;
}
.ant-input-number:hover {
  border-color: #40a9ff;
  border-right-width: 1px !important;
}
.ant-input-number-focused {
  border-color: #40a9ff;
  border-right-width: 1px !important;
  outline: 0;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}
.ant-input-number-disabled {
  color: rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  cursor: not-allowed;
  opacity: 1;
}
.ant-input-number-disabled:hover {
  border-color: #d9d9d9;
  border-right-width: 1px !important;
}
.ant-input-number-disabled .ant-input-number-input {
  cursor: not-allowed;
}
.ant-input-number-disabled .ant-input-number-handler-wrap {
  display: none;
}
.ant-input-number-input {
  width: 100%;
  height: 30px;
  padding: 0 11px;
  text-align: left;
  background-color: transparent;
  border: 0;
  border-radius: 2px;
  outline: 0;
  transition: all 0.3s linear;
  -moz-appearance: textfield !important;
}
.ant-input-number-input::-moz-placeholder {
  color: #bfbfbf;
  opacity: 1;
}
.ant-input-number-input:-ms-input-placeholder {
  color: #bfbfbf;
}
.ant-input-number-input::-webkit-input-placeholder {
  color: #bfbfbf;
}
.ant-input-number-input:-moz-placeholder-shown {
  text-overflow: ellipsis;
}
.ant-input-number-input:-ms-input-placeholder {
  text-overflow: ellipsis;
}
.ant-input-number-input:placeholder-shown {
  text-overflow: ellipsis;
}
.ant-input-number-input[type='number']::-webkit-inner-spin-button,
.ant-input-number-input[type='number']::-webkit-outer-spin-button {
  margin: 0;
  -webkit-appearance: none;
}
.ant-input-number-lg {
  padding: 0;
  font-size: 16px;
}
.ant-input-number-lg input {
  height: 38px;
}
.ant-input-number-sm {
  padding: 0;
}
.ant-input-number-sm input {
  height: 22px;
  padding: 0 7px;
}
.ant-input-number-handler-wrap {
  position: absolute;
  top: 0;
  right: 0;
  width: 22px;
  height: 100%;
  background: #fff;
  border-left: 1px solid #d9d9d9;
  border-radius: 0 2px 2px 0;
  opacity: 0;
  transition: opacity 0.24s linear 0.1s;
}
.ant-input-number-handler-wrap .ant-input-number-handler .ant-input-number-handler-up-inner,
.ant-input-number-handler-wrap .ant-input-number-handler .ant-input-number-handler-down-inner {
  display: inline-block;
  font-size: 12px;
  font-size: 7px \\9;
  transform: scale(0.58333333) rotate(0deg);
  min-width: auto;
  margin-right: 0;
}
:root .ant-input-number-handler-wrap .ant-input-number-handler .ant-input-number-handler-up-inner,
:root .ant-input-number-handler-wrap .ant-input-number-handler .ant-input-number-handler-down-inner {
  font-size: 12px;
}
.ant-input-number-handler-wrap:hover .ant-input-number-handler {
  height: 40%;
}
.ant-input-number:hover .ant-input-number-handler-wrap {
  opacity: 1;
}
.ant-input-number-handler-up {
  border-top-right-radius: 2px;
  cursor: pointer;
}
.ant-input-number-handler-up-inner {
  top: 50%;
  margin-top: -5px;
  text-align: center;
}
.ant-input-number-handler-up:hover {
  height: 60% !important;
}
.ant-input-number-handler-down {
  top: 0;
  border-top: 1px solid #d9d9d9;
  border-bottom-right-radius: 2px;
  cursor: pointer;
}
.ant-input-number-handler-down-inner {
  top: 50%;
  margin-top: -6px;
  text-align: center;
}
.ant-input-number-handler-down:hover {
  height: 60% !important;
}
.ant-input-number-handler-up-disabled,
.ant-input-number-handler-down-disabled {
  cursor: not-allowed;
}
.ant-input-number-handler-up-disabled:hover .ant-input-number-handler-up-inner,
.ant-input-number-handler-down-disabled:hover .ant-input-number-handler-down-inner {
  color: rgba(0, 0, 0, 0.25);
}
`;export{yn as I};
