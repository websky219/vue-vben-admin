import{d,aN as m,h as c,o as t,i,aO as f,aP as l,j as u}from"./index.de7a3c72.js";import{b as j}from"./index.253c3e5f.js";import{C as _}from"./CheckOutlined.615f0fd5.js";import"./index.b01ba49c.js";import"./index.b2e7aa8c.js";import"./index.4e4cdfc2.js";import"./index.b5f656c2.js";import"./index.cf88fb23.js";import"./domUtils.aa6aef94.js";import"./_stringToArray.9f34c09e.js";import"./RightOutlined.dcad5eff.js";import"./index.95c10fda.js";import"./useTimeout.5494657f.js";import"./useScrollTo.3c6228cf.js";import"./animation.29409132.js";import"./ArrowLeftOutlined.ddcf4a87.js";import"./useAttrs.5fb4b160.js";import"./isEqual.42834150.js";import"./useHeaderSetting.0d239ac1.js";import"./SettingOutlined.198ffb5d.js";var o=d({name:"ThemePicker",components:{CheckOutlined:_},props:{colorList:{type:Array,defualt:[]},event:{type:Number,default:()=>{}},def:{type:String}},setup(e){const{prefixCls:r}=m("setting-theme-picker");function s(a){e.event&&j(e.event,a)}return{prefixCls:r,handleClick:s}}}),R=`.vben-setting-theme-picker {
  display: flex;
  flex-wrap: wrap;
  margin: 16px 0;
  justify-content: space-around;
}
.vben-setting-theme-picker__item {
  width: 20px;
  height: 20px;
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 2px;
}
.vben-setting-theme-picker__item svg {
  display: none;
}
.vben-setting-theme-picker__item--active {
  border: 1px solid #31a5fe;
}
.vben-setting-theme-picker__item--active svg {
  display: inline-block;
  margin: 0 0 3px 3px;
  font-size: 12px;
  fill: #fff !important;
}
`;function b(e,r,s,a,k,g){const p=c("CheckOutlined");return t(),i("div",{class:e.prefixCls},[(t(!0),i(f,null,l(e.colorList||[],n=>(t(),i("span",{key:n,onClick:h=>e.handleClick(n),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===n}],style:{background:n}},[u(p)],14,["onClick"]))),128))],2)}o.render=b;export default o;
