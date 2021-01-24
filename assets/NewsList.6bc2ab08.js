import{d as h,cp as j,cq as b,h as i,o as a,i as c,j as t,aO as w,aP as v,l as n,m as o,bw as x}from"./index.de7a3c72.js";import{L as l}from"./index.72d9c94b.js";import"./index.2419be78.js";import"./index.1f78b020.js";import"./index.2d5b3941.js";import{a as g,_ as I}from"./index.b5f656c2.js";import{h as L}from"./header.9f640cf1.js";import{n as C}from"./data.aa527d47.js";import"./SearchOutlined.5cd4b61b.js";import"./CheckOutlined.615f0fd5.js";import"./DownOutlined.2e949c36.js";import"./LeftOutlined.6e782dc0.js";import"./RightOutlined.dcad5eff.js";import"./DoubleLeftOutlined.d752e6dc.js";import"./DoubleRightOutlined.b4ab6685.js";import"./zh_CN.8094f4d6.js";import"./responsiveObserve.c545f1cc.js";import"./index.cf88fb23.js";import"./domUtils.aa6aef94.js";import"./_stringToArray.9f34c09e.js";import"./index.95c10fda.js";import"./useTimeout.5494657f.js";import"./useScrollTo.3c6228cf.js";import"./animation.29409132.js";var _=h({components:{List:l,ListItem:l.Item,ListItemMeta:l.Item.Meta,CollapseContainer:g,ScrollContainer:I},setup(){return{newList:C,headerImg:L}}}),ft=`.news-list__item-avatar[data-v-53ff159c] {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.news-list__item-title[data-v-53ff159c] {
  font-size: 14px;
  line-height: 22px;
  color: #000;
  opacity: 0.65;
}
.news-list__item-time[data-v-53ff159c] {
  font-size: 14px;
  line-height: 22px;
  color: #000;
  opacity: 0.45;
}
.news-list__item-light[data-v-53ff159c] {
  font-size: 14px;
  line-height: 22px;
  color: #000;
  opacity: 0.85;
}
.news-list__item-cnte[data-v-53ff159c] {
  background: #eef3fb;
  border-radius: 2px;
  opacity: 0.6;
}
.news-list__item-cnte__title[data-v-53ff159c] {
  font-size: 14px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.85);
}
`;const s=x("data-v-53ff159c");j("data-v-53ff159c");const S={class:"news-list__item-desc"},y={class:"news-list__item-time mb-1"},O={class:"news-list__item-title mb-1"},$={class:"news-list__item-light"},k=o("\u7533\u8BF7\u8FED\u4EE3 "),z={class:"news-list__item-light"},T=o("\u53D1\u5E03 "),D={class:"news-list__item-cnte p-2"},M={class:"news-list__item-cnte__title"},N=t("br",null,null,-1),R=t("br",null,null,-1),B=t("br",null,null,-1);b();const V=s((r,q,A,E,F,P)=>{const d=i("ListItemMeta"),p=i("ListItem"),m=i("List"),f=i("ScrollContainer"),u=i("CollapseContainer");return a(),c(u,{class:"news-list",title:"\u52A8\u6001",canExpan:!1},{default:s(()=>[t(f,null,{default:s(()=>[t(m,null,{default:s(()=>[(a(!0),c(w,null,v(r.newList,e=>(a(),c(p,{key:e.id,class:"news-list__item"},{default:s(()=>[t(d,null,{avatar:s(()=>[t("img",{src:r.headerImg,class:"news-list__item-avatar"},null,8,["src"])]),description:s(()=>[t("div",S,[t("div",y,n(e.sendTime),1),t("div",O,[t("span",$,n(e.sender)+"\xA0",1),k,t("span",z,"\xA0"+n(e.title)+"\xA0",1),T]),t("div",D,[t("span",M,n(e.cnteId),1),N,o(" Status: "+n(e.cnteStas)+" ",1),R,o(" Repository: "+n(e.cnteRepo)+" ",1),B])])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})});_.render=V,_.__scopeId="data-v-53ff159c";export default _;
