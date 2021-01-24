import{d as l,aN as p,h as i,o as n,i as a,j as u,w as d,k as c,aO as g,aP as f}from"./index.de7a3c72.js";import{I as r}from"./index.56f02a82.js";import"./LeftOutlined.6e782dc0.js";import"./RightOutlined.dcad5eff.js";var s=l({name:"TableImage",components:{Image:r,PreviewGroup:r.PreviewGroup},props:{imgList:{type:Array,default:null},size:{type:Number,default:40}},setup(){const{prefixCls:e}=p("basic-table-img");return{prefixCls:e}}}),j=`.vben-basic-table-img {
  display: flex;
}
.vben-basic-table-img .ant-image {
  margin-right: 4px;
  cursor: zoom-in;
}
.vben-basic-table-img .ant-image img {
  border-radius: 2px;
}
`;function b(e,v,_,h,w,y){const o=i("Image"),m=i("PreviewGroup");return e.imgList&&e.imgList.length?(n(),a("div",{key:0,class:e.prefixCls},[u(m,null,{default:d(()=>[(n(!0),a(g,null,f(e.imgList,t=>(n(),a(o,{key:t,width:e.size,src:t},null,8,["width","src"]))),128))]),_:1})],2)):c("",!0)}s.render=b;export default s;
