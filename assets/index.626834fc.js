import{d as C,aK as O,h as n,o as i,i as a,bw as $,j as t,aO as l,aP as m,l as d,k as y,m as f}from"./index.de7a3c72.js";import{L as c}from"./index.72d9c94b.js";import"./index.2419be78.js";import"./index.1f78b020.js";import"./index.2d5b3941.js";import{T as I}from"./index.ba5abcce.js";import{_ as k}from"./index.8685fc69.js";import{searchList as T,actions as w,schemas as L}from"./data.cec9f45c.js";import{_ as B}from"./index.46623d23.js";import"./SearchOutlined.5cd4b61b.js";import"./CheckOutlined.615f0fd5.js";import"./DownOutlined.2e949c36.js";import"./LeftOutlined.6e782dc0.js";import"./RightOutlined.dcad5eff.js";import"./DoubleLeftOutlined.d752e6dc.js";import"./DoubleRightOutlined.b4ab6685.js";import"./zh_CN.8094f4d6.js";import"./responsiveObserve.c545f1cc.js";import"./colors.e241e755.js";import"./index.2073522b.js";import"./findIndex.538683ff.js";import"./isEqual.42834150.js";import"./_baseProperty.74f89655.js";import"./toInteger.e48028d2.js";import"./index.9b1a81a2.js";import"./index.6eb3b2f8.js";import"./index.0b88e676.js";import"./UpOutlined.b1a0aa74.js";import"./index.2e0fefa1.js";import"./EyeOutlined.e4d8b81b.js";import"./RedoOutlined.d4a8b6b6.js";import"./index.55f43c00.js";import"./EllipsisOutlined.ba16b190.js";import"./types.ead79a33.js";import"./Tree.da704165.js";import"./util.0173355c.js";import"./useAttrs.5fb4b160.js";import"./index.95c10fda.js";import"./index.aa7240c2.js";import"./uuid.cdbe37ce.js";import"./index.69b2f2d2.js";import"./DeleteOutlined.e616faa6.js";import"./index.84a30426.js";import"./useTimeout.5494657f.js";import"./useWindowSizeFn.5bd3f00e.js";import"./index.b5f656c2.js";import"./index.cf88fb23.js";import"./domUtils.aa6aef94.js";import"./_stringToArray.9f34c09e.js";import"./useScrollTo.3c6228cf.js";import"./animation.29409132.js";import"./FullscreenOutlined.09f91c42.js";import"./index.b01ba49c.js";import"./index.967c47da.js";import"./index.56f02a82.js";import"./download.2e71cfcc.js";import"./index.492a2c9c.js";import"./index.22fd658f.js";import"./usePageContext.05da5891.js";import"./transButton.da8a2266.js";import"./ArrowLeftOutlined.ddcf4a87.js";var _=C({components:{Icon:O,Tag:I,BasicForm:k,PageWrapper:B,[c.name]:c,[c.Item.name]:c.Item,AListItemMeta:c.Item.Meta},setup(){return{prefixCls:"list-search",list:T,actions:w,schemas:L}}}),qe=`.list-search__header-form[data-v-55412aa0] {
  margin-bottom: -16px;
}
.list-search__container[data-v-55412aa0] {
  padding: 12px;
  background: #fff;
}
.list-search__title[data-v-55412aa0] {
  margin-bottom: 12px;
  font-size: 18px;
}
.list-search__content[data-v-55412aa0] {
  color: rgba(0, 0, 0, 0.65);
}
.list-search__action[data-v-55412aa0] {
  margin-top: 10px;
}
.list-search__action-item[data-v-55412aa0] {
  display: inline-block;
  padding: 0 16px;
  color: rgba(0, 0, 0, 0.45);
}
.list-search__action-item[data-v-55412aa0]:nth-child(1) {
  padding-left: 0;
}
.list-search__action-item[data-v-55412aa0]:nth-child(1),
.list-search__action-item[data-v-55412aa0]:nth-child(2) {
  border-right: 1px solid rgba(206, 206, 206, 0.4);
}
.list-search__action-icon[data-v-55412aa0] {
  margin-right: 3px;
}
.list-search__time[data-v-55412aa0] {
  position: absolute;
  right: 20px;
  color: rgba(0, 0, 0, 0.45);
}
`;const s=$("data-v-55412aa0"),F=s((e,P,A,D,S,W)=>{const j=n("BasicForm"),u=n("Icon"),b=n("Tag"),h=n("a-list-item-meta"),x=n("a-list-item"),g=n("a-list"),v=n("PageWrapper");return i(),a(v,{class:e.prefixCls,title:"\u641C\u7D22\u5217\u8868"},{headerContent:s(()=>[t(j,{class:`${e.prefixCls}__header-form`,labelWidth:100,schemas:e.schemas,showActionButtonGroup:!1},null,8,["class","schemas"])]),default:s(()=>[t("div",{class:`${e.prefixCls}__container`},[t(g,null,{default:s(()=>[(i(!0),a(l,null,m(e.list,r=>(i(),a(x,{key:r.id},{default:s(()=>[t(h,null,{description:s(()=>[t("div",{class:`${e.prefixCls}__content`},d(r.content),3),t("div",{class:`${e.prefixCls}__action`},[(i(!0),a(l,null,m(e.actions,(o,p)=>(i(),a("div",{key:p,class:`${e.prefixCls}__action-item`},[o.icon?(i(),a(u,{key:0,class:`${e.prefixCls}__action-icon`,icon:o.icon,color:o.color},null,8,["class","icon","color"])):y("",!0),f(" "+d(o.text),1)],2))),128)),t("span",{class:`${e.prefixCls}__time`},d(r.time),3)],2)]),title:s(()=>[t("p",{class:`${e.prefixCls}__title`},d(r.title),3),t("div",null,[(i(!0),a(l,null,m(r.description,(o,p)=>(i(),a(b,{key:p,class:"mb-2"},{default:s(()=>[f(d(o),1)]),_:2},1024))),128))])]),_:2},1024)]),_:2},1024))),128))]),_:1})],2)]),_:1},8,["class"])});_.render=F,_.__scopeId="data-v-55412aa0";export default _;
