import{dj as e,c as s,a as i,h as o,i as r,o as t,j as a,k as n}from"./index.dc12d3c5.js";import"./xlsx.a48e520c.js";import"./index.41f60c4b.js";import"./Trigger.142edc1f.js";import"./omit.02e063d9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.6b76f1fa.js";import"./CheckOutlined.fffda28c.js";import{B as p,s as d}from"./index.fa3985b1.js";import"./colors.10f556e6.js";import"./RightOutlined.a70b4ee4.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.2cd2d3e8.js";import"./index.e86a54b9.js";import"./index.a172b251.js";import"./index.9f7110f0.js";import"./index.4d043235.js";import"./UpOutlined.b2b80e9e.js";import"./index.d2c7e5f0.js";import"./index.aab85027.js";import"./index.6cba0df7.js";import"./index.52dad374.js";import"./index.92b03691.js";import"./index.47ef10aa.js";import"./CloseOutlined.4f388f3b.js";import"./FullscreenOutlined.6da9f78b.js";import"./LoadingOutlined.f68cb32b.js";import"./RightOutlined.29e5aa33.js";import"./useTimeout.4b3d5646.js";import"./tsxHelper.bb7d9f89.js";import"./index.8bdaead9.js";import"./animation.b7c575cc.js";import"./useScrollTo.c17bccfb.js";import"./useAttrs.1918a6ca.js";import"./index.74fc0660.js";import"./index.75e7151a.js";import"./useWindowSizeFn.248d4164.js";import{u as m}from"./useForm.3e1c3265.js";const{uploadUrl:l=""}=s();function c(s,i){return e.uploadFile({url:l,onUploadProgress:i},s)}const j=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:c}}];var u=i({components:{BasicUpload:p,BasicForm:d},setup(){const{createMessage:e}=o(),[s]=m({labelWidth:120,schemas:j,actionColOptions:{span:16}});return{handleChange:s=>{e.info(`已上传文件${JSON.stringify(s)}`)},uploadApi:c,register:s}}});const f={class:"p-4"};u.render=function(e,s,i,o,p,d){const m=r("a-alert"),l=r("BasicUpload"),c=r("BasicForm");return t(),a("div",f,[n(m,{message:"基础示例",class:"my-5"}),n(l,{maxSize:20,maxNumber:10,onChange:e.handleChange,api:e.uploadApi},null,8,["onChange","api"]),n(m,{message:"嵌入表单,加入表单校验",class:"my-5"}),n(c,{onRegister:e.register},null,8,["onRegister"])])};export default u;