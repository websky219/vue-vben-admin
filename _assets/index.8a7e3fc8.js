let e=document.createElement("style");e.innerHTML=".qrcode-demo-item[data-v-727cd0d1]{width:30%;margin-right:1%}",document.head.appendChild(e);import{aU as o,a as t,r as l,l as a,f as r,d5 as d,d6 as s,i,o as n,j as c,k as m,bo as u,p}from"./index.dc12d3c5.js";import"./xlsx.a48e520c.js";import"./Trigger.142edc1f.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.2cd2d3e8.js";import"./index.9f7110f0.js";import{a as g}from"./index.47ef10aa.js";import"./RightOutlined.29e5aa33.js";import"./useTimeout.4b3d5646.js";import"./tsxHelper.bb7d9f89.js";import"./index.8bdaead9.js";import"./animation.b7c575cc.js";import"./useScrollTo.c17bccfb.js";const b=o((()=>import("./index.31c6aaf1.js")));var v=t({components:{CollapseContainer:g,QrCode:b},setup(){const e=l(null);return{qrCodeUrl:"https://www.vvbin.cn",LogoImg:a,download:function(){const o=r(e);o&&o.download("文件名")},qrRef:e}}});const f=u("data-v-727cd0d1");d("data-v-727cd0d1");const q={class:"p-4 flex flex-wrap"},x=p(" 下载 "),C=m("div",{class:"msg"},"(在线logo会导致图片跨域，需要下载图片需要自行解决跨域问题)",-1);s();const j=f(((e,o,t,l,a,r)=>{const d=i("QrCode"),s=i("CollapseContainer"),u=i("a-button");return n(),c("div",q,[m(s,{title:"基础示例",canExpan:!0,class:"text-center mb-6 qrcode-demo-item"},{default:f((()=>[m(d,{value:e.qrCodeUrl},null,8,["value"])])),_:1}),m(s,{title:"渲染成img标签示例",class:"text-center mb-6 qrcode-demo-item"},{default:f((()=>[m(d,{value:e.qrCodeUrl,tag:"img"},null,8,["value"])])),_:1}),m(s,{title:"配置样式示例",class:"text-center mb-6 qrcode-demo-item"},{default:f((()=>[m(d,{value:e.qrCodeUrl,options:{color:{dark:"#55D187"}}},null,8,["value"])])),_:1}),m(s,{title:"本地logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:f((()=>[m(d,{value:e.qrCodeUrl,logo:e.LogoImg},null,8,["value","logo"])])),_:1}),m(s,{title:"在线logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:f((()=>[m(d,{value:e.qrCodeUrl,logo:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",options:{color:{dark:"#55D187"}}},null,8,["value"])])),_:1}),m(s,{title:"logo配置示例",class:"text-center mb-6 qrcode-demo-item"},{default:f((()=>[m(d,{value:e.qrCodeUrl,logo:{src:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",logoSize:.2,borderSize:.05,borderRadius:50,bgColor:"blue"}},null,8,["value","logo"])])),_:1}),m(s,{title:"下载示例",class:"text-center qrcode-demo-item"},{default:f((()=>[m(d,{value:e.qrCodeUrl,ref:"qrRef",logo:e.LogoImg},null,8,["value","logo"]),m(u,{class:"mb-2",type:"primary",onClick:e.download},{default:f((()=>[x])),_:1},8,["onClick"]),C])),_:1}),m(s,{title:"配置大小示例",class:"text-center qrcode-demo-item"},{default:f((()=>[m(d,{value:e.qrCodeUrl,width:300},null,8,["value"])])),_:1})])}));v.render=j,v.__scopeId="data-v-727cd0d1";export default v;