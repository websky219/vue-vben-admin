import{_ as S}from"./index.46623d23.js";import{d as W,cp as A,cq as D,h as M,bA as X,o as Y,i as q,H as z,j as H,bw as V}from"./index.de7a3c72.js";import"./index.492a2c9c.js";import"./index.55f43c00.js";import"./RightOutlined.dcad5eff.js";import"./EllipsisOutlined.ba16b190.js";import"./types.ead79a33.js";import"./isEqual.42834150.js";import"./toInteger.e48028d2.js";import"./DownOutlined.2e949c36.js";import"./index.95c10fda.js";import"./index.22fd658f.js";import"./usePageContext.05da5891.js";import"./transButton.da8a2266.js";import"./ArrowLeftOutlined.ddcf4a87.js";var ut=`.ripple-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  overflow: hidden;
  pointer-events: none;
}
.ripple-effect {
  position: relative;
  z-index: 9999;
  width: 1px;
  height: 1px;
  margin-top: 0;
  margin-left: 0;
  pointer-events: none;
  border-radius: 50%;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
`;const m={event:"mousedown",transition:400},x={beforeMount:(e,t)=>{if(t.value===!1)return;const n=e.getAttribute("ripple-background");G(Object.keys(t.modifiers),m);const o=n||x.background,s=x.zIndex;e.addEventListener(m.event,c=>{F({event:c,el:e,background:o,zIndex:s})})},updated(e,t){var o,s;if(!t.value){(o=e==null?void 0:e.clearRipple)==null||o.call(e);return}const n=e.getAttribute("ripple-background");(s=e==null?void 0:e.setBackground)==null||s.call(e,n)}};function F({event:e,el:t,zIndex:n,background:o}){var E,R;const s=parseInt(getComputedStyle(t).borderWidth.replace("px","")),c=e.clientX||e.touches[0].clientX,f=e.clientY||e.touches[0].clientY,g=t.getBoundingClientRect(),{left:C,top:N}=g,{offsetWidth:_,offsetHeight:j}=t,{transition:O}=m,l=c-C,u=f-N,y=Math.max(l,_-l),w=Math.max(u,j-u),T=window.getComputedStyle(t),h=Math.sqrt(y*y+w*w),$=s>0?s:0,d=document.createElement("div"),r=document.createElement("div");Object.assign((E=d.style)!=null?E:{},{className:"ripple",marginTop:"0px",marginLeft:"0px",width:"1px",height:"1px",transition:`all ${O}ms cubic-bezier(0.4, 0, 0.2, 1)`,borderRadius:"50%",pointerEvents:"none",position:"relative",zIndex:n!=null?n:"9999",backgroundColor:o!=null?o:"rgba(0, 0, 0, 0.12)"}),Object.assign((R=r.style)!=null?R:{},{className:"ripple-container",position:"absolute",left:`${0-$}px`,top:`${0-$}px`,height:"0",width:"0",pointerEvents:"none",overflow:"hidden"});const v=t.style.position.length>0?t.style.position:getComputedStyle(t).position;v!=="relative"&&(t.style.position="relative"),r.appendChild(d),t.appendChild(r),Object.assign(d.style,{marginTop:`${u}px`,marginLeft:`${l}px`});const{borderTopLeftRadius:k,borderTopRightRadius:B,borderBottomLeftRadius:P,borderBottomRightRadius:I}=T;Object.assign(r.style,{width:`${_}px`,height:`${j}px`,direction:"ltr",borderTopLeftRadius:k,borderTopRightRadius:B,borderBottomLeftRadius:P,borderBottomRightRadius:I}),setTimeout(()=>{var p;const i=`${h*2}px`;Object.assign((p=d.style)!=null?p:{},{width:i,height:i,marginLeft:`${l-h}px`,marginTop:`${u-h}px`})},0);function a(){setTimeout(()=>{d.style.backgroundColor="rgba(0, 0, 0, 0)"},250),setTimeout(()=>{var i;(i=r==null?void 0:r.parentNode)==null||i.removeChild(r)},850),t.removeEventListener("mouseup",a,!1),t.removeEventListener("mouseleave",a,!1),t.removeEventListener("dragstart",a,!1),setTimeout(()=>{let i=!0;for(let p=0;p<t.childNodes.length;p++)t.childNodes[p].className==="ripple-container"&&(i=!1);i&&(t.style.position=v!=="static"?v:"")},m.transition+260)}e.type==="mousedown"?(t.addEventListener("mouseup",a,!1),t.addEventListener("mouseleave",a,!1),t.addEventListener("dragstart",a,!1)):a(),t.setBackground=i=>{!i||(d.style.backgroundColor=i)}}function G(e,t){e.forEach(n=>{isNaN(Number(n))?t.event=n:t.transition=n})}var b=W({components:{PageWrapper:S},directives:{Ripple:x}}),mt=`.demo-box[data-v-d699c812] {
  display: flex;
  width: 300px;
  height: 300px;
  font-size: 24px;
  color: #fff;
  background: #408ede;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
}
`;const L=V("data-v-d699c812");A("data-v-d699c812");const J={class:"demo-box"};D();const K=L((e,t,n,o,s,c)=>{const f=M("PageWrapper"),g=X("ripple");return Y(),q(f,{title:"Ripple\u793A\u4F8B"},{default:L(()=>[z(H("div",J,"content",512),[[g]])]),_:1})});b.render=K,b.__scopeId="data-v-d699c812";export default b;
