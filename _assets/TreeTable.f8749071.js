import{a as i,i as e,o as t,j as s,k as o}from"./index.dc12d3c5.js";import"./xlsx.a48e520c.js";import"./useSortable.21535c0e.js";import"./index.41f60c4b.js";import"./Trigger.142edc1f.js";import"./omit.02e063d9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.6b76f1fa.js";import"./CheckOutlined.fffda28c.js";import"./index.fa3985b1.js";import"./colors.10f556e6.js";import"./index.0616d603.js";import"./RightOutlined.a70b4ee4.js";import"./index.d9af1a5a.js";import"./types.6d681d3e.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.2cd2d3e8.js";import"./_baseFor.f4e5f03f.js";import"./index.e86a54b9.js";import"./index.a172b251.js";import"./index.9f7110f0.js";import"./index.4d043235.js";import"./UpOutlined.b2b80e9e.js";import"./LeftOutlined.fd1f9817.js";import"./index.d2c7e5f0.js";import"./index.aab85027.js";import"./index.599b5919.js";import"./index.6cba0df7.js";import"./index.d437983f.js";import"./zh_CN.0242bd16.js";import"./index.52dad374.js";import"./index.92b03691.js";import"./CaretDownFilled.9cd05574.js";import"./index.47ef10aa.js";import"./CheckOutlined.9bb6282e.js";import"./CloseOutlined.4f388f3b.js";import{s as r}from"./index.bb73e3b0.js";import"./FullscreenOutlined.6da9f78b.js";import"./LeftOutlined.db5f23aa.js";import"./LoadingOutlined.f68cb32b.js";import"./TableAction.8167910e.js";import"./RightOutlined.29e5aa33.js";import"./SettingOutlined.86be5837.js";import"./useTimeout.4b3d5646.js";import"./tsxHelper.bb7d9f89.js";import"./index.8bdaead9.js";import"./animation.b7c575cc.js";import"./useScrollTo.c17bccfb.js";import"./useAttrs.1918a6ca.js";import"./index.74fc0660.js";import"./index.75e7151a.js";import"./useWindowSizeFn.248d4164.js";import"./useForm.3e1c3265.js";import"./uuid.40269c00.js";import"./useExpose.97caf2e5.js";import{getBasicColumns as d,getTreeTableData as m}from"./tableData.124b9e81.js";var p=i({components:{BasicTable:r},setup:()=>({columns:d(),data:m()})});const a={class:"p-4"};p.render=function(i,r,d,m,p,n){const j=e("BasicTable");return t(),s("div",a,[o(j,{rowSelection:{type:"checkbox"},title:"树形表格",titleHelpMessage:"树形组件不能和序列号列同时存在",columns:i.columns,dataSource:i.data,rowKey:"id",indentSize:20,isTreeTable:""},null,8,["columns","dataSource"])])};export default p;