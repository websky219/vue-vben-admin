import{d as D,_ as R,A,r as v,u as T,a as b,L as $,b as E,c as V,e as B,f as N,t as q,g as O,h as a,o as x,i as j,j as n,k as U,l as p,w as e,m as w}from"./index.de7a3c72.js";import"./index.2d5b3941.js";import{I as u}from"./index.2e0fefa1.js";import{C as L,F as g}from"./index.2073522b.js";import{R as S,C as I}from"./index.9b1a81a2.js";import"./responsiveObserve.c545f1cc.js";import"./SearchOutlined.5cd4b61b.js";import"./EyeOutlined.e4d8b81b.js";import"./findIndex.538683ff.js";import"./isEqual.42834150.js";import"./_baseProperty.74f89655.js";import"./toInteger.e48028d2.js";var C=D({components:{[L.name]:L,[g.name]:g,[g.Item.name]:g.Item,[u.name]:u,[u.Password.name]:u.Password,AButton:R,AppLocalePicker:A,[S.name]:S,[I.name]:I},setup(){const o=v(null),t=v(!1),f=E(),{locale:y}=V(),{notification:k}=O(),{t:i}=T(),_=b({account:"vben",password:"123456"}),l=b({loading:!1}),s=b({account:[{required:!0,message:i("sys.login.accountPlaceholder"),trigger:"blur"}],password:[{required:!0,message:i("sys.login.passwordPlaceholder"),trigger:"blur"}]});async function h(){const m=B(o);if(!!m){l.loading=!0;try{const r=await m.validate(),d=await N.login(q({password:r.password,username:r.account}));d&&k.success({message:i("sys.login.loginSuccessTitle"),description:`${i("sys.login.loginSuccessDesc")}: ${d.realName}`,duration:3})}catch(r){}finally{l.loading=!1}}}return{formRef:o,formData:_,formState:l,formRules:s,login:h,autoLogin:t,title:f&&f.title,logo:$,t:i,showLocale:y.show}}}),ln=`.login-form__locale {
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 1;
}
.login {
  position: relative;
  height: 100vh;
  background: url(__VITE_ASSET__8e82a683__) no-repeat;
  background-size: 100% 100%;
}
.login-mask {
  display: none;
  height: 100%;
  background: url(__VITE_ASSET__2ee8a3c2__) no-repeat;
  background-position: 30% 30%;
  background-size: 80% 80%;
}
@media only screen and (min-width: 1200px) {
.login-mask {
    display: block;
}
}
.login-form {
  position: relative;
  bottom: 60px;
  width: 400px;
  background: #fff;
  border: 10px solid rgba(255, 255, 255, 0.5);
  border-width: 8px;
  border-radius: 4px;
  background-clip: padding-box;
}
@media only screen and (min-width: 1200px) {
.login-form {
    margin: 0 120px 0 50px;
}
}
.login-form__main {
  margin: 30px auto 0 auto !important;
}
.login-form-wrap {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
@media only screen and (min-width: 1200px) {
.login-form-wrap {
    justify-content: flex-end;
}
}
.login-form__content {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 60px 0 40px 0;
  border: 1px solid #999;
  border-radius: 2px;
}
.login-form__content header {
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form__content header img {
  display: inline-block;
  width: 48px;
}
.login-form__content header h1 {
  margin-bottom: 0;
  font-size: 24px;
  text-align: center;
}
.login-form__content form {
  width: 80%;
}
`;const F={class:"login"},G=n("div",{class:"login-mask"},null,-1),M={class:"login-form-wrap"},H={class:"login-form mx-6"},J={class:"login-form__content px-2 py-10"};function K(o,t,f,y,k,i){const _=a("AppLocalePicker"),l=a("a-input"),s=a("a-form-item"),h=a("a-input-password"),m=a("a-checkbox"),r=a("a-col"),d=a("a-button"),P=a("a-row"),z=a("a-form");return x(),j("div",F,[G,n("div",M,[n("div",H,[o.showLocale?(x(),j(_,{key:0,class:"login-form__locale"})):U("",!0),n("div",J,[n("header",null,[n("img",{src:o.logo,class:"mr-4"},null,8,["src"]),n("h1",null,p(o.title),1)]),n(z,{class:"login-form__main",model:o.formData,rules:o.formRules,ref:"formRef"},{default:e(()=>[n(s,{name:"account"},{default:e(()=>[n(l,{size:"large",value:o.formData.account,"onUpdate:value":t[1]||(t[1]=c=>o.formData.account=c),placeholder:"username: vben"},null,8,["value"])]),_:1}),n(s,{name:"password"},{default:e(()=>[n(h,{size:"large",visibilityToggle:"",value:o.formData.password,"onUpdate:value":t[2]||(t[2]=c=>o.formData.password=c),placeholder:"password: 123456"},null,8,["value"])]),_:1}),n(P,null,{default:e(()=>[n(r,{span:12},{default:e(()=>[n(s,null,{default:e(()=>[n(m,{checked:o.autoLogin,"onUpdate:checked":t[3]||(t[3]=c=>o.autoLogin=c),size:"small"},{default:e(()=>[w(p(o.t("sys.login.autoLogin")),1)]),_:1},8,["checked"])]),_:1})]),_:1}),n(r,{span:12},{default:e(()=>[n(s,{style:{"text-align":"right"}},{default:e(()=>[n(d,{type:"link",size:"small"},{default:e(()=>[w(p(o.t("sys.login.forgetPassword")),1)]),_:1})]),_:1})]),_:1})]),_:1}),n(s,null,{default:e(()=>[n(d,{type:"primary",size:"large",class:"rounded-sm",block:!0,onClick:o.login,loading:o.formState.loading},{default:e(()=>[w(p(o.t("sys.login.loginButton")),1)]),_:1},8,["onClick","loading"])]),_:1})]),_:1},8,["model","rules"])])])])])}C.render=K;export default C;
