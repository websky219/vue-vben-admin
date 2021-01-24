import{d as _,r as E,a as p,a0 as l,e as n,dI as a,aW as C,q as I,E as M,cF as k,j as h,bT as F}from"./index.de7a3c72.js";const L={height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String],bench:{type:[Number,String],default:0},itemHeight:{type:[Number,String],required:!0},items:{type:Array,default:()=>[]}};var q=`.virtual-scroll {
  position: relative;
  display: block;
  width: 100%;
  max-width: 100%;
  overflow: auto;
  flex: 1 1 auto;
}
.virtual-scroll__container {
  display: block;
}
.virtual-scroll__item {
  position: absolute;
  right: 0;
  left: 0;
}
`;const u="virtual-scroll";var $=_({name:"VirtualScroll",props:L,setup(e,{slots:y}){const o=E(null),r=p({first:0,last:0,scrollTop:0}),m=l(()=>parseInt(e.bench,10)),c=l(()=>parseInt(e.itemHeight,10)),g=l(()=>Math.max(0,r.first-n(m))),H=l(()=>Math.min((e.items||[]).length,r.last+n(m))),S=l(()=>({height:a((e.items||[]).length*n(c))})),W=l(()=>{const t={},i=a(e.height),s=a(e.minHeight),b=a(e.minWidth),v=a(e.maxHeight),x=a(e.maxWidth),w=a(e.width);return i&&(t.height=i),s&&(t.minHeight=s),b&&(t.minWidth=b),v&&(t.maxHeight=v),x&&(t.maxWidth=x),w&&(t.width=w),t});C([()=>e.itemHeight,()=>e.height],()=>{d()});function f(t){const i=n(o);if(!i)return 0;const s=parseInt(e.height||0,10)||i.clientHeight;return t+Math.ceil(s/n(c))}function N(){return Math.floor(r.scrollTop/n(c))}function d(){const t=n(o);!t||(r.scrollTop=t.scrollTop,r.first=N(),r.last=f(r.first))}function R(){const{items:t=[]}=e;return t.slice(n(g),n(H)).map(T)}function T(t,i){i+=n(g);const s=a(i*n(c));return h("div",{class:`${u}__item`,style:{top:s},key:i},[F(y,"default",{index:i,item:t})])}return I(()=>{r.last=f(0),M(()=>{const t=n(o);!t||k({el:t,name:"scroll",listener:d,wait:0})})}),()=>h("div",{class:u,style:n(W),ref:o},[h("div",{class:`${u}__container`,style:n(S)},[R()])])}});export default $;
