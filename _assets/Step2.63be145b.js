let t=document.createElement("style");t.innerHTML=".step2[data-v-3e6a7e30]{width:450px;margin:0 auto}",document.head.appendChild(t);import{a as e,d5 as i,d6 as s,i as o,o as a,j as n,k as r,bo as d,p as m}from"./index.dc12d3c5.js";import"./xlsx.a48e520c.js";import"./index.41f60c4b.js";import"./Trigger.142edc1f.js";import"./omit.02e063d9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.6b76f1fa.js";import"./CheckOutlined.fffda28c.js";import{s as p}from"./index.fa3985b1.js";import"./colors.10f556e6.js";import"./RightOutlined.a70b4ee4.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.2cd2d3e8.js";import"./index.e86a54b9.js";import"./index.a172b251.js";import"./index.9f7110f0.js";import"./index.4d043235.js";import"./UpOutlined.b2b80e9e.js";import"./index.d2c7e5f0.js";import"./index.aab85027.js";import"./index.6cba0df7.js";import"./index.52dad374.js";import"./index.92b03691.js";import"./index.47ef10aa.js";import"./CloseOutlined.4f388f3b.js";import"./FullscreenOutlined.6da9f78b.js";import"./LoadingOutlined.f68cb32b.js";import"./RightOutlined.29e5aa33.js";import"./useTimeout.4b3d5646.js";import"./tsxHelper.bb7d9f89.js";import"./index.8bdaead9.js";import"./animation.b7c575cc.js";import"./useScrollTo.c17bccfb.js";import"./useAttrs.1918a6ca.js";import"./index.74fc0660.js";import"./index.75e7151a.js";import"./useWindowSizeFn.248d4164.js";import{u as c}from"./useForm.3e1c3265.js";import{step2Schemas as l}from"./data.d53db949.js";var u=e({components:{BasicForm:p},emits:["next","prev"],setup(t,{emit:e}){const[i,{validate:s,setProps:o}]=c({labelWidth:80,schemas:l,actionColOptions:{span:14},resetButtonOptions:{text:"上一步"},submitButtonOptions:{text:"提交"},resetFunc:async function(){e("prev")},submitFunc:async function(){try{const t=await s();o({submitButtonOptions:{loading:!0}}),setTimeout((()=>{o({submitButtonOptions:{loading:!1}}),e("next",t)}),1500)}catch(t){}}});return{register:i}}});const j=d("data-v-3e6a7e30");i("data-v-3e6a7e30");const b={class:"step2"},f=m(" ant-design@alipay.com "),x=m(" test@example.com "),g=m(" Vben "),O=m(" 500元 ");s();const h=j(((t,e,i,s,d,m)=>{const p=o("a-alert"),c=o("a-descriptions-item"),l=o("a-descriptions"),u=o("a-divider"),h=o("BasicForm");return a(),n("div",b,[r(p,{message:"确认转账后，资金将直接打入对方账户，无法退回。","show-icon":""}),r(l,{column:1,class:"mt-5"},{default:j((()=>[r(c,{label:"付款账户"},{default:j((()=>[f])),_:1}),r(c,{label:"收款账户"},{default:j((()=>[x])),_:1}),r(c,{label:"收款人姓名"},{default:j((()=>[g])),_:1}),r(c,{label:"转账金额"},{default:j((()=>[O])),_:1})])),_:1}),r(u),r(h,{onRegister:t.register},null,8,["onRegister"])])}));u.render=h,u.__scopeId="data-v-3e6a7e30";export default u;