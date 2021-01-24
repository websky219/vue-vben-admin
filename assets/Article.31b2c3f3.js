import{d as x,aK as I,h as c,o as t,i as n,bw as L,aO as d,aP as p,j as o,l as s,m,k as C}from"./index.de7a3c72.js";import{T as $}from"./index.ba5abcce.js";import{L as _}from"./index.72d9c94b.js";import"./index.2419be78.js";import"./index.1f78b020.js";import"./index.2d5b3941.js";import{articleList as k,actions as y}from"./data.e5606aff.js";import"./colors.e241e755.js";import"./SearchOutlined.5cd4b61b.js";import"./CheckOutlined.615f0fd5.js";import"./DownOutlined.2e949c36.js";import"./LeftOutlined.6e782dc0.js";import"./RightOutlined.dcad5eff.js";import"./DoubleLeftOutlined.d752e6dc.js";import"./DoubleRightOutlined.b4ab6685.js";import"./zh_CN.8094f4d6.js";import"./responsiveObserve.c545f1cc.js";var f=x({components:{List:_,ListItem:_.Item,ListItemMeta:_.Item.Meta,Tag:$,Icon:I},setup(){return{prefixCls:"account-center-article",list:k,actions:y}}}),X=`.account-center-article__title[data-v-6042fefa] {
  margin-bottom: 12px;
  font-size: 18px;
}
.account-center-article__content[data-v-6042fefa] {
  color: rgba(0, 0, 0, 0.65);
}
.account-center-article__action[data-v-6042fefa] {
  display: inline-block;
  padding: 0 16px;
  color: rgba(0, 0, 0, 0.45);
}
.account-center-article__action[data-v-6042fefa]:nth-child(1),
.account-center-article__action[data-v-6042fefa]:nth-child(2) {
  border-right: 1px solid rgba(206, 206, 206, 0.4);
}
.account-center-article__action-icon[data-v-6042fefa] {
  margin-right: 3px;
}
.account-center-article__time[data-v-6042fefa] {
  position: absolute;
  right: 20px;
  color: rgba(0, 0, 0, 0.45);
}
`;const i=L("data-v-6042fefa"),O=i((e,T,w,D,M,N)=>{const u=c("Tag"),b=c("ListItemMeta"),v=c("Icon"),g=c("ListItem"),j=c("List");return t(),n(j,{"item-layout":"vertical",class:e.prefixCls},{default:i(()=>[(t(!0),n(d,null,p(e.list,(r,h)=>(t(),n(g,{key:h},{default:i(()=>[o(b,null,{description:i(()=>[o("div",{class:`${e.prefixCls}__content`},s(r.content),3)]),title:i(()=>[o("p",{class:`${e.prefixCls}__title`},s(r.title),3),o("div",null,[(t(!0),n(d,null,p(r.description,(a,l)=>(t(),n(u,{key:l,class:"mb-2"},{default:i(()=>[m(s(a),1)]),_:2},1024))),128))])]),_:2},1024),o("div",null,[(t(!0),n(d,null,p(e.actions,(a,l)=>(t(),n("div",{key:l,class:`${e.prefixCls}__action`},[a.icon?(t(),n(v,{key:0,class:`${e.prefixCls}__action-icon`,icon:a.icon,color:a.color},null,8,["class","icon","color"])):C("",!0),m(" "+s(a.text),1)],2))),128)),o("span",{class:`${e.prefixCls}__time`},s(r.time),3)])]),_:2},1024))),128))]),_:1},8,["class"])});f.render=O,f.__scopeId="data-v-6042fefa";export default f;
