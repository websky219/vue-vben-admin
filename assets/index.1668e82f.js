import{P as a,aa as x,d as b,O as C,v as S,x as B,E,d8 as w,y as _,j as i,a4 as P,D as j,a5 as O,aL as v,aM as A,bh as L,h as f,o as h,i as m,k,aO as V}from"./index.de7a3c72.js";import{s as F,g as M}from"./scrollTo.c9242ea7.js";var Q=function(){return{visibilityHeight:a.number,target:a.func,prefixCls:a.string,onClick:a.func}};function r(){return r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},r.apply(this,arguments)}function R(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!j(t)}function c(){return window}var U=Q(),I=b({name:"ABackTop",mixins:[C],inheritAttrs:!1,props:r(r({},U),{visibilityHeight:a.number.def(400)}),emits:["click"],setup:function(){return{configProvider:S("configProvider",B)}},data:function(){return{visible:!1,scrollEvent:null}},mounted:function(){var n=this;E(function(){var e=n.target||c;n.scrollEvent=w(e(),"scroll",n.handleScroll),n.handleScroll()})},beforeUnmount:function(){this.scrollEvent&&this.scrollEvent.remove()},methods:{getCurrentScrollTop:function(){var n=this.target||c,e=n();return e===window?window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop:e.scrollTop},scrollToTop:function(n){var e=this.target,o=e===void 0?c:e;F(0,{getContainer:o}),this.$emit("click",n)},handleScroll:function(){var n=this.visibilityHeight,e=this.target,o=e===void 0?c:e,s=M(o(),!0);this.setState({visible:s>n})}},render:function(){var n,e=this.prefixCls,o=this.$slots,s=this.configProvider.getPrefixCls,l=s("back-top",e),p=_(l,this.$attrs.class),u=i("div",{class:"".concat(l,"-content")},[i("div",{class:"".concat(l,"-icon")},null)]),d=r(r({},this.$attrs),{onClick:this.scrollToTop,class:p}),g=this.visible?i("div",d,[((n=o.default)===null||n===void 0?void 0:n.call(o))||u]):null,y=P("fade");return i(O,y,R(g)?g:{default:function(){return[g]}})}}),J=x(I),$=`/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
/* stylelint-disable no-duplicate-selectors */
/* stylelint-disable */
/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
.ant-back-top {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  position: fixed;
  right: 100px;
  bottom: 50px;
  z-index: 10;
  width: 40px;
  height: 40px;
  cursor: pointer;
}
.ant-back-top-content {
  width: 40px;
  height: 40px;
  overflow: hidden;
  color: #fff;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.45);
  border-radius: 20px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-back-top-content:hover {
  background-color: rgba(0, 0, 0, 0.85);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-back-top-icon {
  width: 14px;
  height: 16px;
  margin: 12px auto;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAoCAYAAACWwljjAAAABGdBTUEAALGPC/xhBQAAAbtJREFUWAntmMtKw0AUhhMvS5cuxILgQlRUpIggIoKIIoigG1eC+AA+jo+i6FIXBfeuXIgoeKVeitVWJX5HWhhDksnUpp3FDPyZk3Nm5nycmZKkXhAEOXSA3lG7muTeRzmfy6HneUvIhnYkQK+Q9NhAA0Opg0vBEhjBKHiyb8iGMyQMOYuK41BcBSypAL+MYXSKjtFAW7EAGEO3qN4uMQbbAkXiSfRQJ1H6a+yhlkKRcAoVFYiweYNjtCVQJJpBz2GCiPt7fBOZQpFgDpUikse5HgnkM4Fi4QX0Fpc5wf9EbLqpUCy4jMoJSXWhFwbMNgWKhVbRhy5jirhs9fy/oFhgHVVTJEs7RLZ8sSEoJm6iz7SZDMbJ+/OKERQTttCXQRLToRUmrKWCYuA2+jbN0MB4OQobYShfdTCgn/sL1K36M7TLrN3n+758aPy2rrpR6+/od5E8tf/A1uLS9aId5T7J3CNYihkQ4D9PiMdMC7mp4rjB9kjFjZp8BlnVHJBuO1yFXIV0FdDF3RlyFdJVQBdv5AxVdIsq8apiZ2PyYO1EVykesGfZEESsCkweyR8MUW+V8uJ1gkYipmpdP1pm2aJVPEGzAAAAAElFTkSuQmCC) 100%/100% no-repeat;
}
@media screen and (max-width: 768px) {
  .ant-back-top {
    right: 60px;
  }
}
@media screen and (max-width: 480px) {
  .ant-back-top {
    right: 20px;
  }
}
`,T=b({name:"LayoutFeatures",components:{BackTop:J,LayoutLockPage:v(()=>A(()=>import("./index.998724df.js"),["/assets/index.998724df.js","/assets/LockPage.b2714079.js","/assets/LockPage.426e5e92.css","/assets/index.de7a3c72.js","/assets/index.3100f8d1.css","/assets/index.2e0fefa1.js","/assets/index.771b84bb.css","/assets/SearchOutlined.5cd4b61b.js","/assets/EyeOutlined.e4d8b81b.js","/assets/index.aa7240c2.js","/assets/index.17a17641.css","/assets/header.9f640cf1.js","/assets/LockOutlined.74a0835e.js"])),SettingDrawer:v(()=>A(()=>import("./index.253c3e5f.js").then(function(t){return t.i}),["/assets/index.253c3e5f.js","/assets/index.60acafd9.css","/assets/index.de7a3c72.js","/assets/index.3100f8d1.css","/assets/index.b01ba49c.js","/assets/index.2b38113f.css","/assets/index.b2e7aa8c.js","/assets/index.2f74f299.css","/assets/index.4e4cdfc2.js","/assets/index.864ac48e.css","/assets/index.b5f656c2.js","/assets/index.f0b9f139.css","/assets/index.cf88fb23.js","/assets/index.121e7eba.css","/assets/domUtils.aa6aef94.js","/assets/_stringToArray.9f34c09e.js","/assets/RightOutlined.dcad5eff.js","/assets/index.95c10fda.js","/assets/index.20066e29.css","/assets/useTimeout.5494657f.js","/assets/useScrollTo.3c6228cf.js","/assets/animation.29409132.js","/assets/ArrowLeftOutlined.ddcf4a87.js","/assets/useAttrs.5fb4b160.js","/assets/isEqual.42834150.js","/assets/useHeaderSetting.0d239ac1.js","/assets/SettingOutlined.198ffb5d.js"]))},setup(){const{getUseOpenBackTop:t,getShowSettingButton:n}=L();return{getTarget:()=>document.body,getUseOpenBackTop:t,getShowSettingButton:n}}});function K(t,n,e,o,s,l){const p=f("LayoutLockPage"),u=f("BackTop"),d=f("SettingDrawer");return h(),m(V,null,[i(p),t.getUseOpenBackTop?(h(),m(u,{key:0,target:t.getTarget},null,8,["target"])):k("",!0),t.getShowSettingButton?(h(),m(d,{key:1})):k("",!0)],64)}T.render=K;export default T;
