import{d as C,aK as k,cp as w,cq as I,h as o,o as i,i as e,bw as y,j as t,aO as O,aP as $,k as p,l,m as _}from"./index.de7a3c72.js";import{L as c}from"./index.72d9c94b.js";import"./index.2419be78.js";import"./index.1f78b020.js";import"./index.2d5b3941.js";import{P}from"./index.69b2f2d2.js";import{R as f,C as m}from"./index.9b1a81a2.js";import{cardList as L}from"./data.a96915dc.js";import{_ as S}from"./index.46623d23.js";import"./SearchOutlined.5cd4b61b.js";import"./CheckOutlined.615f0fd5.js";import"./DownOutlined.2e949c36.js";import"./LeftOutlined.6e782dc0.js";import"./RightOutlined.dcad5eff.js";import"./DoubleLeftOutlined.d752e6dc.js";import"./DoubleRightOutlined.b4ab6685.js";import"./zh_CN.8094f4d6.js";import"./responsiveObserve.c545f1cc.js";import"./types.ead79a33.js";import"./index.492a2c9c.js";import"./index.55f43c00.js";import"./EllipsisOutlined.ba16b190.js";import"./isEqual.42834150.js";import"./toInteger.e48028d2.js";import"./index.95c10fda.js";import"./index.22fd658f.js";import"./usePageContext.05da5891.js";import"./transButton.da8a2266.js";import"./ArrowLeftOutlined.ddcf4a87.js";var r=C({components:{Icon:k,Progress:P,PageWrapper:S,[c.name]:c,[c.Item.name]:c.Item,AListItemMeta:c.Item.Meta,[f.name]:f,[m.name]:m},setup(){return{prefixCls:"list-basic",list:L,pagination:{show:!0,pageSize:3}}}}),It=`.list-basic__top[data-v-6a8874f4] {
  padding: 24px;
  text-align: center;
  background: #fff;
}
.list-basic__top-col[data-v-6a8874f4]:not(:last-child) {
  border-right: 1px dashed rgba(206, 206, 206, 0.4);
}
.list-basic__top-col div[data-v-6a8874f4] {
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.45);
}
.list-basic__top-col p[data-v-6a8874f4] {
  margin: 0;
  font-size: 24px;
  line-height: 32px;
  color: rgba(0, 0, 0, 0.85);
}
.list-basic__content[data-v-6a8874f4] {
  padding: 24px;
  margin-top: 12px;
  background: #fff;
}
.list-basic__content .list[data-v-6a8874f4] {
  position: relative;
}
.list-basic__content .icon[data-v-6a8874f4] {
  font-size: 40px !important;
}
.list-basic__content .extra[data-v-6a8874f4] {
  position: absolute;
  top: 20px;
  right: 15px;
  font-weight: normal;
  color: #1890ff;
  cursor: pointer;
}
.list-basic__content .description[data-v-6a8874f4] {
  display: inline-block;
  width: 40%;
}
.list-basic__content .info[data-v-6a8874f4] {
  display: inline-block;
  width: 30%;
  text-align: center;
}
.list-basic__content .info div[data-v-6a8874f4] {
  display: inline-block;
  padding: 0 20px;
}
.list-basic__content .info div span[data-v-6a8874f4] {
  display: block;
}
.list-basic__content .progress[data-v-6a8874f4] {
  display: inline-block;
  width: 15%;
  vertical-align: top;
}
`;const s=y("data-v-6a8874f4");w("data-v-6a8874f4");const z=t("div",null,"\u6211\u7684\u5F85\u529E",-1),D=t("p",null,"8\u4E2A\u4EFB\u52A1",-1),N=t("div",null,"\u672C\u5468\u4EFB\u52A1\u5E73\u5747\u5904\u7406\u65F6\u95F4",-1),R=t("p",null,"32\u5206\u949F",-1),B=t("div",null,"\u672C\u5468\u5B8C\u6210\u4EFB\u52A1\u6570",-1),V=t("p",null,"24\u4E2A\u4EFB\u52A1",-1),W={key:0,class:"extra"},q={class:"description"},A={class:"info"},E=t("span",null,"Owner",-1),M=t("span",null,"\u5F00\u59CB\u65F6\u95F4",-1),F={class:"progress"};I();const K=s((a,T,G,H,J,Q)=>{const d=o("a-col"),u=o("a-row"),b=o("Icon"),v=o("Progress"),g=o("a-list-item-meta"),h=o("a-list-item"),x=o("a-list"),j=o("PageWrapper");return i(),e(j,{class:a.prefixCls,title:"\u6807\u51C6\u5217\u8868"},{default:s(()=>[t("div",{class:`${a.prefixCls}__top`},[t(u,{gutter:12},{default:s(()=>[t(d,{span:8,class:`${a.prefixCls}__top-col`},{default:s(()=>[z,D]),_:1},8,["class"]),t(d,{span:8,class:`${a.prefixCls}__top-col`},{default:s(()=>[N,R]),_:1},8,["class"]),t(d,{span:8,class:`${a.prefixCls}__top-col`},{default:s(()=>[B,V]),_:1},8,["class"])]),_:1})],2),t("div",{class:`${a.prefixCls}__content`},[t(x,{pagination:a.pagination},{default:s(()=>[(i(!0),e(O,null,$(a.list,n=>(i(),e(h,{key:n.id,class:"list"},{default:s(()=>[t(g,null,{avatar:s(()=>[n.icon?(i(),e(b,{key:0,class:"icon",icon:n.icon,color:n.color},null,8,["icon","color"])):p("",!0)]),title:s(()=>[t("span",null,l(n.title),1),n.extra?(i(),e("div",W,l(n.extra),1)):p("",!0)]),description:s(()=>[t("div",q,l(n.description),1),t("div",A,[t("div",null,[E,_(l(n.author),1)]),t("div",null,[M,_(l(n.datetime),1)])]),t("div",F,[t(v,{percent:n.percent,status:"active"},null,8,["percent"])])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["pagination"])],2)]),_:1},8,["class"])});r.render=K,r.__scopeId="data-v-6a8874f4";export default r;
