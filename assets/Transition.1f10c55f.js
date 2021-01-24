import{d as r,h as n,o as p,i as m,w as e,j as t}from"./index.de7a3c72.js";import{e as c,S as d}from"./index.b5f656c2.js";import l from"./TargetContent.3e8a904d.js";import{_ as f}from"./index.46623d23.js";import"./index.cf88fb23.js";import"./domUtils.aa6aef94.js";import"./_stringToArray.9f34c09e.js";import"./RightOutlined.dcad5eff.js";import"./index.95c10fda.js";import"./useTimeout.5494657f.js";import"./useScrollTo.3c6228cf.js";import"./animation.29409132.js";import"./index.19d232b1.js";import"./index.dad53a49.js";import"./UpOutlined.b1a0aa74.js";import"./LeftOutlined.6e782dc0.js";import"./DownOutlined.2e949c36.js";import"./PlusOutlined.20641b62.js";import"./index.9b1a81a2.js";import"./index.2d5b3941.js";import"./responsiveObserve.c545f1cc.js";import"./index.492a2c9c.js";import"./index.55f43c00.js";import"./EllipsisOutlined.ba16b190.js";import"./types.ead79a33.js";import"./isEqual.42834150.js";import"./toInteger.e48028d2.js";import"./index.22fd658f.js";import"./usePageContext.05da5891.js";import"./transButton.da8a2266.js";import"./ArrowLeftOutlined.ddcf4a87.js";var o=r({components:{LazyContainer:c,TargetContent:l,Skeleton:d,PageWrapper:f}}),nt=`.lazy-base-demo-wrap {
  display: flex;
  width: 50%;
  height: 2000px;
  margin: 20px auto;
  text-align: center;
  background: #fff;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.lazy-base-demo-box {
  width: 300px;
  height: 300px;
}
.lazy-base-demo h1 {
  height: 1300px;
  margin: 20px 0;
}
.custom-enter {
  opacity: 0;
  transform: scale(0.4) translate(100%);
}
.custom-enter-to {
  opacity: 1;
}
.custom-enter-active {
  position: absolute;
  top: 0;
  width: 100%;
  transition: all 0.5s;
}
.custom-leave {
  opacity: 1;
}
.custom-leave-to {
  opacity: 0;
  transform: scale(0.4) translate(-100%);
}
.custom-leave-active {
  transition: all 0.5s;
}
`;const u={class:"lazy-base-demo-wrap"},_=t("h1",null,"\u5411\u4E0B\u6EDA\u52A8",-1),j={class:"lazy-base-demo-box"};function x(g,b,h,y,v,C){const a=n("TargetContent"),i=n("LazyContainer"),s=n("PageWrapper");return p(),m(s,{title:"\u61D2\u52A0\u8F7D\u81EA\u5B9A\u4E49\u52A8\u753B\u793A\u4F8B",content:"\u61D2\u52A0\u8F7D\u7EC4\u4EF6\u663E\u793A\u52A8\u753B"},{default:e(()=>[t("div",u,[_,t("div",j,[t(i,{transitionName:"custom"},{default:e(()=>[t(a)]),_:1})])])]),_:1})}o.render=x;export default o;
