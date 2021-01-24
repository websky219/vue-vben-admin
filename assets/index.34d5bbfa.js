import{d as j,u as b,aT as v,aN as _,a0 as g,bg as y,e as d,bh as h,cp as S,cq as F,h as p,o as w,i as C,j as t,l,k as L,bw as k}from"./index.de7a3c72.js";import{L as I}from"./index.56e996f0.js";import{D as x,G as R,S as U}from"./siteSetting.2daee9f0.js";import{G as O}from"./GithubFilled.735e6ccc.js";import"./isNumeric.2bec345d.js";import"./RightOutlined.dcad5eff.js";import"./LeftOutlined.6e782dc0.js";import"./index.55f43c00.js";import"./EllipsisOutlined.ba16b190.js";import"./types.ead79a33.js";import"./isEqual.42834150.js";import"./toInteger.e48028d2.js";import"./index.95c10fda.js";import"./useTimeout.5494657f.js";import"./useHeaderSetting.0d239ac1.js";import"./domUtils.aa6aef94.js";import"./_stringToArray.9f34c09e.js";import"./useSortable.10178c08.js";import"./index.b5f656c2.js";import"./index.cf88fb23.js";import"./useScrollTo.3c6228cf.js";import"./animation.29409132.js";import"./index.2865f037.js";import"./useWindowSizeFn.5bd3f00e.js";import"./usePageContext.05da5891.js";import"./index.4e4cdfc2.js";import"./clickOutside.5a8b0ef7.js";import"./index.dad53a49.js";import"./UpOutlined.b1a0aa74.js";import"./DownOutlined.2e949c36.js";import"./PlusOutlined.20641b62.js";import"./index.967c47da.js";var s=j({name:"LayoutFooter",components:{Footer:I.Footer,GithubFilled:O},setup(){const{t:o}=b(),{getShowFooter:e}=h(),{currentRoute:i}=v(),{prefixCls:a}=_("layout-footer");return{getShowLayoutFooter:g(()=>{var n;return d(e)&&!((n=d(i).meta)==null?void 0:n.hiddenFooter)}),prefixCls:a,t:o,DOC_URL:x,GITHUB_URL:R,SITE_URL:U,openWindow:y}}}),fo=`.vben-layout-footer[data-v-47369c67] {
  color: rgba(0, 0, 0, 0.45);
  text-align: center;
}
.vben-layout-footer__links[data-v-47369c67] {
  margin-bottom: 8px;
}
.vben-layout-footer__links a[data-v-47369c67] {
  color: rgba(0, 0, 0, 0.45);
}
.vben-layout-footer__links a[data-v-47369c67]:hover {
  color: rgba(0, 0, 0, 0.85);
}
.vben-layout-footer__github[data-v-47369c67] {
  margin: 0 30px;
}
.vben-layout-footer__github[data-v-47369c67]:hover {
  color: rgba(0, 0, 0, 0.85);
}
`;const u=k("data-v-47369c67");S("data-v-47369c67");const $=t("div",null,"Copyright \xA92020 Vben Admin",-1);F();const G=u((o,e,i,a,m,n)=>{const c=p("GithubFilled"),f=p("Footer");return o.getShowLayoutFooter?(w(),C(f,{key:0,class:o.prefixCls},{default:u(()=>[t("div",{class:`${o.prefixCls}__links`},[t("a",{onClick:e[1]||(e[1]=r=>o.openWindow(o.SITE_URL))},l(o.t("layout.footer.onlinePreview")),1),t(c,{onClick:e[2]||(e[2]=r=>o.openWindow(o.GITHUB_URL)),class:`${o.prefixCls}__github`},null,8,["class"]),t("a",{onClick:e[3]||(e[3]=r=>o.openWindow(o.DOC_URL))},l(o.t("layout.footer.onlineDocument")),1)],2),$]),_:1},8,["class"])):L("",!0)});s.render=G,s.__scopeId="data-v-47369c67";export default s;
