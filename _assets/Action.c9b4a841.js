let s=document.createElement("style");s.innerHTML=".scroll-wrap[data-v-6aa17979]{width:50%;height:300px;background:#fff}",document.head.appendChild(s);import{a as o,r as a,f as l,d5 as r,d6 as t,i as e,o as c,j as i,k as n,aM as d,aW as m,n as p,bo as f,p as u}from"./index.dc12d3c5.js";import"./xlsx.a48e520c.js";import"./Trigger.142edc1f.js";import"./_baseSlice.1123a25b.js";import{A as j}from"./index.4b8f6811.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.2cd2d3e8.js";import"./index.9f7110f0.js";import{a as b,s as x}from"./index.47ef10aa.js";import"./RightOutlined.29e5aa33.js";import"./useTimeout.4b3d5646.js";import"./tsxHelper.bb7d9f89.js";import"./index.8bdaead9.js";import"./animation.b7c575cc.js";import"./useScrollTo.c17bccfb.js";var T=o({components:{CollapseContainer:b,ScrollContainer:x,Alert:j},setup(){const s=a(null),o=()=>{const o=l(s);if(!o)throw new Error("scroll is Null");return o};return{scrollTo:function(s){o().scrollTo(s)},scrollRef:s,scrollBottom:function(){o().scrollBottom()}}}});const C=f("data-v-6aa17979");r("data-v-6aa17979");const _={class:"p-4"},v={class:"my-4"},g=u("滚动到100px位置"),h=u("滚动到800px位置"),k=u("滚动到顶部"),y=u("滚动到底部"),w={class:"scroll-wrap"},A={class:"p-3"};t();const S=C(((s,o,a,l,r,t)=>{const f=e("Alert"),u=e("a-button"),j=e("ScrollContainer");return c(),i("div",_,[n(f,{message:"抽取el-scrollbar，并对其进行扩展,滚动条美化,适用于各个浏览器",type:"info"}),n("div",v,[n(u,{onClick:o[1]||(o[1]=o=>s.scrollTo(100)),class:"mr-2"},{default:C((()=>[g])),_:1}),n(u,{onClick:o[2]||(o[2]=o=>s.scrollTo(800)),class:"mr-2"},{default:C((()=>[h])),_:1}),n(u,{onClick:o[3]||(o[3]=o=>s.scrollTo(0)),class:"mr-2"},{default:C((()=>[k])),_:1}),n(u,{onClick:o[4]||(o[4]=o=>s.scrollBottom()),class:"mr-2"},{default:C((()=>[y])),_:1})]),n("div",w,[n(j,{class:"mt-4",ref:"scrollRef"},{default:C((()=>[n("ul",A,[(c(),i(d,null,m(100,(s=>n("li",{key:s,class:"p-2",style:{border:"1px solid #eee"}},p(s),1))),64))])])),_:1},512)])])}));T.render=S,T.__scopeId="data-v-6aa17979";export default T;