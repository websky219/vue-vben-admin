import{d as $,aK as T,cp as k,cq as y,h as i,o,i as s,j as a,aO as p,aP as l,bw as O,m as b,l as d,bs as I}from"./index.de7a3c72.js";import"./index.2d5b3941.js";import{T as j}from"./index.dad53a49.js";import{T as w}from"./index.ba5abcce.js";import{R as x,C as v}from"./index.9b1a81a2.js";import{a as P}from"./index.b5f656c2.js";import S from"./Article.31b2c3f3.js";import A from"./Application.be9cb104.js";import D from"./Project.9e948efd.js";import{h as L}from"./header.9f640cf1.js";import{tags as R,teams as z,details as N,achieveList as B}from"./data.e5606aff.js";import"./responsiveObserve.c545f1cc.js";import"./UpOutlined.b1a0aa74.js";import"./LeftOutlined.6e782dc0.js";import"./DownOutlined.2e949c36.js";import"./RightOutlined.dcad5eff.js";import"./PlusOutlined.20641b62.js";import"./colors.e241e755.js";import"./index.cf88fb23.js";import"./domUtils.aa6aef94.js";import"./_stringToArray.9f34c09e.js";import"./index.95c10fda.js";import"./useTimeout.5494657f.js";import"./useScrollTo.3c6228cf.js";import"./animation.29409132.js";import"./index.72d9c94b.js";import"./index.1f78b020.js";import"./index.2419be78.js";import"./SearchOutlined.5cd4b61b.js";import"./CheckOutlined.615f0fd5.js";import"./DoubleLeftOutlined.d752e6dc.js";import"./DoubleRightOutlined.b4ab6685.js";import"./zh_CN.8094f4d6.js";import"./index.19d232b1.js";var m=$({components:{CollapseContainer:P,Icon:T,Tag:w,Tabs:j,TabPane:j.TabPane,Article:S,Application:A,Project:D,[x.name]:x,[v.name]:v},setup(){return{prefixCls:"account-center",headerImg:L,tags:R,teams:z,details:N,achieveList:B}}}),Oa=`.account-center-col[data-v-a3a1334a]:not(:last-child) {
  padding: 0 10px;
}
.account-center-col[data-v-a3a1334a]:not(:last-child):not(:last-child) {
  border-right: 1px dashed #cecece;
}
.account-center-top[data-v-a3a1334a] {
  padding: 10px;
  margin: 16px 16px 12px 16px;
  background: #fff;
  border-radius: 3px;
}
.account-center-top__avatar[data-v-a3a1334a] {
  text-align: center;
}
.account-center-top__avatar img[data-v-a3a1334a] {
  border-radius: 50%;
}
.account-center-top__avatar span[data-v-a3a1334a] {
  display: block;
  font-size: 20px;
  font-weight: 500;
}
.account-center-top__avatar div[data-v-a3a1334a] {
  margin-top: 3px;
  font-size: 12px;
}
.account-center-top__detail[data-v-a3a1334a] {
  padding-left: 20px;
  margin-top: 15px;
}
.account-center-top__team-item[data-v-a3a1334a] {
  display: inline-block;
  padding: 4px 24px;
}
.account-center-top__team span[data-v-a3a1334a] {
  margin-left: 3px;
}
.account-center-bottom[data-v-a3a1334a] {
  padding: 10px;
  margin: 0 16px 16px 16px;
  background: #fff;
  border-radius: 3px;
}
`;const e=O("data-v-a3a1334a");k("data-v-a3a1334a");const E=a("span",null,"Serati Ma",-1),U=a("div",null,"\u6D77\u7EB3\u767E\u5DDD\uFF0C\u6709\u5BB9\u4E43\u5927",-1);y();const V=e((n,q,F,K,M,G)=>{const r=i("a-col"),f=i("Icon"),u=i("a-row"),g=i("Tag"),_=i("CollapseContainer"),h=i("TabPane"),C=i("Tabs");return o(),s("div",{class:n.prefixCls},[a(u,{class:`${n.prefixCls}-top`},{default:e(()=>[a(r,{span:9,class:`${n.prefixCls}-col`},{default:e(()=>[a(u,null,{default:e(()=>[a(r,{span:8},{default:e(()=>[a("div",{class:`${n.prefixCls}-top__avatar`},[a("img",{width:"70",src:n.headerImg},null,8,["src"]),E,U],2)]),_:1}),a(r,{span:16},{default:e(()=>[a("div",{class:`${n.prefixCls}-top__detail`},[(o(!0),s(p,null,l(n.details,(t,c)=>(o(),s("p",{key:c},[a(f,{icon:t.icon},null,8,["icon"]),b(" "+d(t.title),1)]))),128))],2)]),_:1})]),_:1})]),_:1},8,["class"]),a(r,{span:7,class:`${n.prefixCls}-col`},{default:e(()=>[a(_,{title:"\u6807\u7B7E",canExpan:!1},{default:e(()=>[(o(!0),s(p,null,l(n.tags,(t,c)=>(o(),s(g,{key:c,class:"mb-2"},{default:e(()=>[b(d(t),1)]),_:2},1024))),128))]),_:1})]),_:1},8,["class"]),a(r,{span:8,class:`${n.prefixCls}-col`},{default:e(()=>[a(_,{class:`${n.prefixCls}-top__team`,title:"\u56E2\u961F",canExpan:!1},{default:e(()=>[(o(!0),s(p,null,l(n.teams,(t,c)=>(o(),s("div",{key:c,class:`${n.prefixCls}-top__team-item`},[a(f,{icon:t.icon,color:t.color},null,8,["icon","color"]),a("span",null,d(t.title),1)],2))),128))]),_:1},8,["class"])]),_:1},8,["class"])]),_:1},8,["class"]),a("div",{class:`${n.prefixCls}-bottom`},[a(C,null,{default:e(()=>[(o(!0),s(p,null,l(n.achieveList,t=>(o(),s(h,{key:t.key,tab:t.name},{default:e(()=>[(o(),s(I(t.component)))]),_:2},1032,["tab"]))),128))]),_:1})],2)],2)});m.render=V,m.__scopeId="data-v-a3a1334a";export default m;
