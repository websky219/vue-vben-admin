import{a as s,f as r,bB as t,b9 as e,dx as n,N as a}from"./index.dc12d3c5.js";import{g as o}from"./tsxHelper.bb7d9f89.js";var u=s({name:"Authority",props:{value:{type:[Number,Array,String],default:""}},setup(s,{slots:a}){const{getPermissionMode:u}=e(),{hasPermission:i}=n();return()=>{const e=r(u);return e===t.ROLE?function(){const{value:r}=s;return r?i(r)?o(a):null:o(a)}():e===t.BACK?function(){const{value:r}=s;return r?i(r)?o(a):null:o(a)}():o(a)}}});a(u);export{u as s};