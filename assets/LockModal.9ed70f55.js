import{d as b,u as _,aN as h,a0 as x,dD as g,f as k,h as a,o as v,i as w,w as c,j as o,l as f,m as y,T as C}from"./index.de7a3c72.js";import{_ as O,a as $}from"./index.84a30426.js";import{_ as F}from"./index.8685fc69.js";import{h as S}from"./header.9f640cf1.js";import{u as B}from"./useForm.0d0b0437.js";import"./useTimeout.5494657f.js";import"./useAttrs.5fb4b160.js";import"./useWindowSizeFn.5bd3f00e.js";import"./index.b5f656c2.js";import"./index.cf88fb23.js";import"./domUtils.aa6aef94.js";import"./_stringToArray.9f34c09e.js";import"./RightOutlined.dcad5eff.js";import"./index.95c10fda.js";import"./useScrollTo.3c6228cf.js";import"./animation.29409132.js";import"./FullscreenOutlined.09f91c42.js";import"./isEqual.42834150.js";import"./index.2d5b3941.js";import"./responsiveObserve.c545f1cc.js";import"./index.2073522b.js";import"./findIndex.538683ff.js";import"./_baseProperty.74f89655.js";import"./toInteger.e48028d2.js";import"./index.9b1a81a2.js";import"./index.2419be78.js";import"./SearchOutlined.5cd4b61b.js";import"./CheckOutlined.615f0fd5.js";import"./DownOutlined.2e949c36.js";import"./index.6eb3b2f8.js";import"./index.0b88e676.js";import"./UpOutlined.b1a0aa74.js";import"./index.2e0fefa1.js";import"./EyeOutlined.e4d8b81b.js";import"./index.ba5abcce.js";import"./colors.e241e755.js";import"./RedoOutlined.d4a8b6b6.js";import"./index.55f43c00.js";import"./EllipsisOutlined.ba16b190.js";import"./types.ead79a33.js";import"./Tree.da704165.js";import"./util.0173355c.js";import"./index.aa7240c2.js";import"./uuid.cdbe37ce.js";import"./index.69b2f2d2.js";import"./DeleteOutlined.e616faa6.js";import"./index.b01ba49c.js";import"./index.967c47da.js";import"./index.56f02a82.js";import"./LeftOutlined.6e782dc0.js";import"./download.2e71cfcc.js";var u=b({name:"LockModal",components:{BasicModal:O,BasicForm:F},setup(){const{t:e}=_(),{prefixCls:n}=h("header-lock-modal"),d=x(()=>{var i;return(i=k.getUserInfoState)==null?void 0:i.realName}),[l,{closeModal:p}]=$(),[m,{validateFields:s,resetFields:r}]=B({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});async function t(){const j=(await s()).password;p(),g.commitLockInfoState({isLock:!0,pwd:j}),await r()}return{t:e,prefixCls:n,getRealName:d,register:l,registerForm:m,handleLock:t,headerImg:S}}}),Se=`.vben-header-lock-modal__entry {
  position: relative;
  height: 240px;
  padding: 130px 30px 60px 30px;
  background: #fff;
  border-radius: 10px;
}
.vben-header-lock-modal__header {
  position: absolute;
  top: 0;
  left: calc(50% - 45px);
  width: auto;
  text-align: center;
}
.vben-header-lock-modal__header-img {
  width: 70px;
  border-radius: 50%;
}
.vben-header-lock-modal__header-name {
  margin-top: 5px;
}
.vben-header-lock-modal__footer {
  text-align: center;
}
`;function I(e,n,d,l,p,m){const s=a("BasicForm"),r=a("a-button"),t=a("BasicModal");return v(),w(t,C({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:c(()=>[o("div",{class:`${e.prefixCls}__entry`},[o("div",{class:`${e.prefixCls}__header`},[o("img",{src:e.headerImg,class:`${e.prefixCls}__header-img`},null,10,["src"]),o("p",{class:`${e.prefixCls}__header-name`},f(e.getRealName),3)],2),o(s,{onRegister:e.registerForm},null,8,["onRegister"]),o("div",{class:`${e.prefixCls}__footer`},[o(r,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:c(()=>[y(f(e.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}u.render=I;export default u;
