import{d as j,b2 as g,cp as v,cq as L,h as e,o as a,i as l,j as t,aO as T,aP as I,l as s,m as i,bw as O}from"./index.de7a3c72.js";import"./index.95c10fda.js";import{T as C}from"./index.ba5abcce.js";import{L as d}from"./index.72d9c94b.js";import"./index.2419be78.js";import"./index.1f78b020.js";import"./index.2d5b3941.js";import{a as k}from"./index.b5f656c2.js";import{t as w}from"./data.aa527d47.js";import{E as y}from"./EllipsisOutlined.ba16b190.js";import"./colors.e241e755.js";import"./SearchOutlined.5cd4b61b.js";import"./CheckOutlined.615f0fd5.js";import"./DownOutlined.2e949c36.js";import"./LeftOutlined.6e782dc0.js";import"./RightOutlined.dcad5eff.js";import"./DoubleLeftOutlined.d752e6dc.js";import"./DoubleRightOutlined.b4ab6685.js";import"./zh_CN.8094f4d6.js";import"./responsiveObserve.c545f1cc.js";import"./index.cf88fb23.js";import"./domUtils.aa6aef94.js";import"./_stringToArray.9f34c09e.js";import"./useTimeout.5494657f.js";import"./useScrollTo.3c6228cf.js";import"./animation.29409132.js";var c=j({name:"TodoList",components:{CollapseContainer:k,List:d,ListItem:d.Item,ListItemMeta:d.Item.Meta,Tag:C,Tooltip:g,EllipsisOutlined:y},setup(){return{todoList:w}}}),bt=`.todo-list[data-v-5ec25b45] {
  position: relative;
}
.todo-list__total[data-v-5ec25b45] {
  display: inline-block;
  width: 20px;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  background: rgba(255, 0, 0, 0.7);
  border-radius: 50%;
}
.todo-list__all[data-v-5ec25b45] {
  position: absolute;
  top: 0;
  right: 10px;
  height: 56px;
  font-size: 24px;
  line-height: 56px;
  text-align: center;
  cursor: pointer;
}
.todo-list__item[data-v-5ec25b45] {
  padding: 8px;
}
.todo-list__item-title[data-v-5ec25b45] {
  font-size: 14px;
  font-weight: normal;
  line-height: 22px;
  color: #1c1d21;
}
.todo-list__item-memo[data-v-5ec25b45] {
  font-size: 12px;
  font-weight: normal;
  line-height: 22px;
  color: #7c8087;
}
.todo-list__item-desc[data-v-5ec25b45] {
  font-size: 12px;
  line-height: 22px;
  color: #7c8087;
}
`;const o=O("data-v-5ec25b45");v("data-v-5ec25b45");const z=t("span",null,[i(" \u5F85\u529E\u4E8B\u9879 "),t("span",{class:"todo-list__total"},"30")],-1),E={class:"todo-list__item-title"},S={class:"todo-list__item-memo"},$={class:"todo-list__item-desc"},D=t("br",null,null,-1),M=i("\u5F85\u5BA1\u6279"),N={class:"todo-list__all"},R=i("\u67E5\u770B\u66F4\u591A");L();const B=o((p,V,q,A,F,P)=>{const r=e("ListItemMeta"),_=e("Tag"),m=e("a-button"),u=e("ListItem"),f=e("List"),b=e("EllipsisOutlined"),h=e("Tooltip"),x=e("CollapseContainer");return a(),l(x,{class:"todo-list",title:"\u5F85\u529E\u4E8B\u9879",canExpan:!1},{title:o(()=>[z]),default:o(()=>[t(f,null,{default:o(()=>[(a(!0),l(T,null,I(p.todoList,n=>(a(),l(u,{key:n.id,class:"todo-list__item"},{default:o(()=>[t(r,null,{title:o(()=>[t("div",null,[t("span",E,s(n.title),1),t("span",S,s(n.memo),1)])]),description:o(()=>[t("div",$,[i(" \u63D0\u4EA4\u4EBA\uFF1A"+s(n.sbmter)+" ",1),D,i(" \u63D0\u4EA4\u65F6\u95F4\uFF1A"+s(n.sbmtTime),1)])]),_:2},1024),t(m,{type:"link"},{default:o(()=>[t(_,{color:"blue"},{default:o(()=>[M]),_:1})]),_:1})]),_:2},1024))),128))]),_:1}),t("div",N,[t(h,{placement:"topRight"},{title:o(()=>[R]),default:o(()=>[t(b)]),_:1})])]),_:1})});c.render=B,c.__scopeId="data-v-5ec25b45";export default c;
