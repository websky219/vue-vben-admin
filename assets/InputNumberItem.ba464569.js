import{d as o,aN as p,h as m,o as d,i as u,j as r,l as c,T as l,bw as b}from"./index.de7a3c72.js";import{I as f}from"./index.0b88e676.js";import{b as j}from"./index.253c3e5f.js";import"./UpOutlined.b1a0aa74.js";import"./DownOutlined.2e949c36.js";import"./index.b01ba49c.js";import"./index.b2e7aa8c.js";import"./index.4e4cdfc2.js";import"./index.b5f656c2.js";import"./index.cf88fb23.js";import"./domUtils.aa6aef94.js";import"./_stringToArray.9f34c09e.js";import"./RightOutlined.dcad5eff.js";import"./index.95c10fda.js";import"./useTimeout.5494657f.js";import"./useScrollTo.3c6228cf.js";import"./animation.29409132.js";import"./ArrowLeftOutlined.ddcf4a87.js";import"./useAttrs.5fb4b160.js";import"./isEqual.42834150.js";import"./useHeaderSetting.0d239ac1.js";import"./SettingOutlined.198ffb5d.js";var t=o({name:"InputNumberItem",components:{InputNumber:f},props:{event:{type:Number,default:()=>{}},title:{type:String}},setup(e){const{prefixCls:n}=p("setting-input-number-item");function s(i){e.event&&j(e.event,i)}return{prefixCls:n,handleChange:s}}}),V=`.vben-setting-input-number-item[data-v-c7d8b828] {
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
}
.vben-setting-input-number-item-input-number[data-v-c7d8b828] {
  width: 126px;
}
`;const g=b("data-v-c7d8b828"),_=g((e,n,s,i,v,x)=>{const a=m("InputNumber");return d(),u("div",{class:e.prefixCls},[r("span",null,c(e.title),1),r(a,l(e.$attrs,{size:"small",class:`${e.prefixCls}-input-number`,onChange:e.handleChange}),null,16,["class","onChange"])],2)});t.render=_,t.__scopeId="data-v-c7d8b828";export default t;
