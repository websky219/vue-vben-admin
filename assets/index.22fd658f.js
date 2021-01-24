import{d as L,P as o,n as V,v as q,x as F,E as m,z as H,j as u,D,aa as U}from"./index.de7a3c72.js";function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},c.apply(this,arguments)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!D(e)}var X=L({name:"AAvatar",props:{prefixCls:o.string,shape:o.oneOf(V("circle","square")),size:{type:[Number,String],default:"default"},src:o.string,srcset:o.string,srcSet:o.string,icon:o.VNodeChild,alt:o.string,loadError:{type:Function}},setup:function(){return{configProvider:q("configProvider",F)}},data:function(){return{isImgExist:!0,isMounted:!1,scale:1,lastChildrenWidth:void 0,lastNodeWidth:void 0}},watch:{src:function(){var t=this;m(function(){t.isImgExist=!0,t.scale=1,t.$forceUpdate()})}},mounted:function(){var t=this;m(function(){t.setScale(),t.isMounted=!0})},updated:function(){var t=this;m(function(){t.setScale()})},methods:{setScale:function(){if(!(!this.$refs.avatarChildren||!this.$refs.avatarNode)){var t=this.$refs.avatarChildren.offsetWidth,n=this.$refs.avatarNode.offsetWidth;t===0||n===0||this.lastChildrenWidth===t&&this.lastNodeWidth===n||(this.lastChildrenWidth=t,this.lastNodeWidth=n,this.scale=n-8<t?(n-8)/t:1)}},handleImgLoadError:function(){var t=this.$props.loadError,n=t?t():void 0;n!==!1&&(this.isImgExist=!1)}},render:function(){var t,n,l,h,s=this.$props,$=s.prefixCls,b=s.shape,r=s.size,p=s.src,w=s.alt,z=s.srcset,E=s.srcSet,f=H(this,"icon"),P=this.configProvider.getPrefixCls,i=P("avatar",$),v=this.$data,y=v.isImgExist,C=v.scale,S=v.isMounted,W=(t={},d(t,"".concat(i,"-lg"),r==="large"),d(t,"".concat(i,"-sm"),r==="small"),t),N=c(c(d({},i,!0),W),(n={},d(n,"".concat(i,"-").concat(b),b),d(n,"".concat(i,"-image"),p&&y),d(n,"".concat(i,"-icon"),f),n)),I=typeof r=="number"?{width:"".concat(r,"px"),height:"".concat(r,"px"),lineHeight:"".concat(r,"px"),fontSize:f?"".concat(r/2,"px"):"18px"}:{},a=(h=(l=this.$slots).default)===null||h===void 0?void 0:h.call(l);if(p&&y)a=u("img",{src:p,srcset:z||E,onError:this.handleImgLoadError,alt:w},null);else if(f)a=f;else{var j=this.$refs.avatarChildren;if(j||C!==1){var g="scale(".concat(C,") translateX(-50%)"),O={msTransform:g,WebkitTransform:g,transform:g},A=typeof r=="number"?{lineHeight:"".concat(r,"px")}:{},M=function(){return a}();a=u("span",{class:"".concat(i,"-string"),ref:"avatarChildren",style:c(c({},A),O)},x(a)?a:{default:function(){return[M]}})}else{var T={};S||(T.opacity=0);var k=function(){return a}();a=u("span",{class:"".concat(i,"-string"),ref:"avatarChildren",style:{opacity:0}},x(a)?a:{default:function(){return[k]}})}}return u("span",{ref:"avatarNode",class:N,style:I},x(a)?a:{default:function(){return[a]}})}}),B=U(X),J=`/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
/* stylelint-disable no-duplicate-selectors */
/* stylelint-disable */
/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
.ant-avatar {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum';
  position: relative;
  display: inline-block;
  overflow: hidden;
  color: #fff;
  white-space: nowrap;
  text-align: center;
  vertical-align: middle;
  background: #ccc;
  width: 32px;
  height: 32px;
  line-height: 32px;
  border-radius: 50%;
}
.ant-avatar-image {
  background: transparent;
}
.ant-avatar-string {
  position: absolute;
  left: 50%;
  transform-origin: 0 center;
}
.ant-avatar.ant-avatar-icon {
  font-size: 18px;
}
.ant-avatar-lg {
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
}
.ant-avatar-lg-string {
  position: absolute;
  left: 50%;
  transform-origin: 0 center;
}
.ant-avatar-lg.ant-avatar-icon {
  font-size: 24px;
}
.ant-avatar-sm {
  width: 24px;
  height: 24px;
  line-height: 24px;
  border-radius: 50%;
}
.ant-avatar-sm-string {
  position: absolute;
  left: 50%;
  transform-origin: 0 center;
}
.ant-avatar-sm.ant-avatar-icon {
  font-size: 14px;
}
.ant-avatar-square {
  border-radius: 2px;
}
.ant-avatar > img {
  display: block;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
`;export{B as A};
