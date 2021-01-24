var f=Object.assign;import{u as C}from"./useTimeout.5494657f.js";import{u as V,d as X,a as z,r as v,aW as F,a_ as A,a0 as b,cF as H,e as r,j as g,bT as O}from"./index.de7a3c72.js";import{u as q}from"./useExpose.1d889469.js";import{C as G}from"./CheckOutlined.615f0fd5.js";import{D as J}from"./DoubleRightOutlined.b4ab6685.js";const{t:R}=V(),_={value:{type:Boolean,default:!1},isSlot:{type:Boolean,default:!1},text:{type:[String],default:R("component.verify.dragText")},successText:{type:[String],default:R("component.verify.successText")},height:{type:[Number,String],default:40},width:{type:[Number,String],default:220},circle:{type:Boolean,default:!1},wrapStyle:{type:Object,default:{}},contentStyle:{type:Object,default:{}},barStyle:{type:Object,default:{}},actionStyle:{type:Object,default:{}}},K=f(f({},_),{src:{type:String},imgWidth:{type:Number,default:260},imgWrapStyle:{type:Object,default:{}},minDegree:{type:Number,default:90},maxDegree:{type:Number,default:270},diffDegree:{type:Number,default:20}});var se=`.darg-verify {
  position: relative;
  overflow: hidden;
  text-align: center;
  background-color: #eeeeee;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.darg-verify-bar {
  position: absolute;
  width: 0;
  height: 36px;
  background: #55D187;
  border-radius: 4px;
}
.darg-verify-bar.to-left {
  width: 0 !important;
  transition: width 0.3s;
}
.darg-verify-content {
  position: absolute;
  top: 0;
  font-size: 12px;
  -webkit-text-size-adjust: none;
  background: -webkit-gradient(linear, left top, right top, color-stop(0, #333), color-stop(0.4, #333), color-stop(0.5, #fff), color-stop(0.6, #333), color-stop(1, #333));
  -webkit-animation: slidetounlock 3s infinite;
          animation: slidetounlock 3s infinite;
  -webkit-background-clip: text;
  -moz-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-text-fill-color: transparent;
}
.darg-verify-content.success {
  -webkit-text-fill-color: #fff;
}
.darg-verify-content > * {
  -webkit-text-fill-color: #333;
}
.darg-verify-action {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  cursor: move;
  background: #fff;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
}
.darg-verify-action__icon {
  cursor: inherit;
}
.darg-verify-action.to-left {
  left: 0 !important;
  transition: left 0.3s;
}
@-webkit-keyframes slidetounlock {
  0% {
    background-position: -120px 0;
  }
  100% {
    background-position: 120px 0;
  }
}
`,N=X({name:"BaseDargVerify",props:_,emits:["success","update:value","change","start","move","end"],setup(c,{emit:u,slots:k}){const n=z({isMoving:!1,isPassing:!1,moveDistance:0,toLeft:!1,startTime:0,endTime:0}),P=v(null),m=v(null),x=v(null),p=v(null);F(()=>n.isPassing,e=>{if(e){const{startTime:s,endTime:o}=n,t=(o-s)/1e3;u("success",{isPassing:e,time:t.toFixed(1)}),u("update:value",e),u("change",e)}}),A(()=>{n.isPassing=!!c.value});const B=b(()=>{const{height:e,actionStyle:s}=c,o=`${parseInt(e)}px`;return f({left:0,width:o,height:o},s)}),L=b(()=>{const{height:e,width:s,circle:o,wrapStyle:t}=c,i=parseInt(e),a=`${parseInt(s)}px`;return f({width:a,height:`${i}px`,lineHeight:`${i}px`,borderRadius:o?i/2+"px":0},t)}),W=b(()=>{const{height:e,circle:s,barStyle:o}=c,t=parseInt(e);return f({height:`${t}px`,borderRadius:s?t/2+"px 0 0 "+t/2+"px":0},o)}),D=b(()=>{const{height:e,width:s,contentStyle:o}=c,t=`${parseInt(e)}px`,i=`${parseInt(s)}px`;return f({height:t,width:i},o)});function w(e){return e.pageX||e.touches[0].pageX}H({el:document,name:"mouseup",listener:()=>{n.isMoving&&h()}});function T(e){if(n.isPassing)return;const s=r(p);!s||(u("start",e),n.moveDistance=w(e)-parseInt(s.style.left.replace("px",""),10),n.startTime=new Date().getTime(),n.isMoving=!0)}function E(e){const s=parseInt(e.style.width),{width:o}=c,t=parseInt(o);return{offset:t-s-6,widthNum:t,actionWidth:s}}function $(e){const{isMoving:s,moveDistance:o}=n;if(s){const t=r(p),i=r(m);if(!t||!i)return;const{offset:a,widthNum:d,actionWidth:y}=E(t),l=w(e)-o;u("move",{event:e,moveDistance:o,moveX:l}),l>0&&l<=a?(t.style.left=`${l}px`,i.style.width=`${l+y/2}px`):l>a&&(t.style.left=`${d-y}px`,i.style.width=`${d-y/2}px`,c.isSlot||j())}}function S(e){const{isMoving:s,isPassing:o,moveDistance:t}=n;if(s&&!o){u("end",e);const i=r(p),a=r(m);if(!i||!a)return;const d=w(e)-t,{offset:y,widthNum:l,actionWidth:M}=E(i);d<y?c.isSlot?setTimeout(()=>{if(!c.value)h();else{const I=r(x);I&&(I.style.width=`${parseInt(a.style.width)}px`)}},0):h():(i.style.left=`${l-M}px`,a.style.width=`${l-M/2}px`,j()),n.isMoving=!1}}function j(){if(c.isSlot){h();return}n.endTime=new Date().getTime(),n.isPassing=!0,n.isMoving=!1}function h(){n.isMoving=!1,n.isPassing=!1,n.moveDistance=0,n.toLeft=!1,n.startTime=0,n.endTime=0;const e=r(p),s=r(m),o=r(x);!e||!s||!o||(n.toLeft=!0,C(()=>{n.toLeft=!1,e.style.left="0",s.style.width="0"},300),o.style.width=r(D).width)}return q({resume:h}),()=>{const e=()=>{const t=["darg-verify-bar"];return n.toLeft&&t.push("to-left"),g("div",{class:t,ref:m,style:r(W)},null)},s=()=>{const t=["darg-verify-content"],{isPassing:i}=n,{text:a,successText:d}=c;return i&&t.push("success"),g("div",{class:t,ref:x,style:r(D)},[O(k,"text",i)||(i?d:a)])},o=()=>{const t=["darg-verify-action"],{toLeft:i,isPassing:a}=n;return i&&t.push("to-left"),g("div",{class:t,onMousedown:T,onTouchstart:T,style:r(B),ref:p},[O(k,"actionIcon",a)||(a?g(G,{class:"darg-verify-action__icon"},null):g(J,{class:"darg-verify-action__icon"},null))])};return g("div",{class:"darg-verify",ref:P,style:r(L),onMousemove:$,onTouchmove:$,onMouseleave:S,onMouseup:S,onTouchend:S},[e(),s(),o()])}}}),Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:N});export{N as B,Q as D,K as r};
