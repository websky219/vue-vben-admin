let t=document.createElement("style");t.innerHTML=".news-list__item-avatar[data-v-1006fc50]{width:35px;height:35px;border-radius:50%}.news-list__item-title[data-v-1006fc50]{font-size:14px;line-height:22px;color:#000;opacity:.65}.news-list__item-time[data-v-1006fc50]{font-size:14px;line-height:22px;color:#000;opacity:.45}.news-list__item-light[data-v-1006fc50]{font-size:14px;line-height:22px;color:#000;opacity:.85}.news-list__item-cnte[data-v-1006fc50]{background:#eef3fb;border-radius:2px;opacity:.6}.news-list__item-cnte__title[data-v-1006fc50]{font-size:14px;line-height:22px;color:rgba(0,0,0,.85)}",document.head.appendChild(t);import{a as e,d5 as s,d6 as i,i as a,o as l,j as n,k as o,aM as r,aW as d,n as c,p as m,bo as p}from"./index.dc12d3c5.js";import"./xlsx.a48e520c.js";import"./index.41f60c4b.js";import"./Trigger.142edc1f.js";import"./omit.02e063d9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.6b76f1fa.js";import"./CheckOutlined.fffda28c.js";import"./RightOutlined.a70b4ee4.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.2cd2d3e8.js";import"./index.9f7110f0.js";import"./LeftOutlined.fd1f9817.js";import"./index.d437983f.js";import"./zh_CN.0242bd16.js";import{L as _}from"./index.85627a98.js";import{a as f,s as u}from"./index.47ef10aa.js";import"./RightOutlined.29e5aa33.js";import"./useTimeout.4b3d5646.js";import"./tsxHelper.bb7d9f89.js";import"./index.8bdaead9.js";import"./animation.b7c575cc.js";import"./useScrollTo.c17bccfb.js";import{n as j}from"./data.edc06832.js";import{_ as b}from"./header.0299ae16.js";var x=e({components:{List:_,ListItem:_.Item,ListItemMeta:_.Item.Meta,CollapseContainer:f,ScrollContainer:u},setup:()=>({newList:j})});const h=p("data-v-1006fc50");s("data-v-1006fc50");const w=o("img",{src:b,class:"news-list__item-avatar"},null,-1),v={class:"news-list__item-desc"},g={class:"news-list__item-time mb-1"},L={class:"news-list__item-title mb-1"},C={class:"news-list__item-light"},y=m("申请迭代 "),I={class:"news-list__item-light"},S=m("发布 "),T={class:"news-list__item-cnte p-2"},z={class:"news-list__item-cnte__title"},M=o("br",null,null,-1),O=o("br",null,null,-1),k=o("br",null,null,-1);i();const R=h(((t,e,s,i,p,_)=>{const f=a("ListItemMeta"),u=a("ListItem"),j=a("List"),b=a("ScrollContainer"),x=a("CollapseContainer");return l(),n(x,{class:"news-list",title:"动态",canExpan:!1},{default:h((()=>[o(b,null,{default:h((()=>[o(j,null,{default:h((()=>[(l(!0),n(r,null,d(t.newList,(t=>(l(),n(u,{key:t.id,class:"news-list__item"},{default:h((()=>[o(f,null,{avatar:h((()=>[w])),description:h((()=>[o("div",v,[o("div",g,c(t.sendTime),1),o("div",L,[o("span",C,c(t.sender)+" ",1),y,o("span",I," "+c(t.title)+" ",1),S]),o("div",T,[o("span",z,c(t.cnteId),1),M,m(" Status: "+c(t.cnteStas)+" ",1),O,m(" Repository: "+c(t.cnteRepo)+" ",1),k])])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})}));x.render=R,x.__scopeId="data-v-1006fc50";export default x;