import{d as H,H as j,aB as z,ab as N,i as x,ac as B,r as d,o as a,c as n,b as r,w as i,a as m,p as c,t as u,h as T,F as P,q as g,g as h,f as k,m as V,J as U}from"./app.17cd73cb.js";import{b as K,P as q,a as J,f as R,d as G}from"./PsLayout.dfd88468.js";import O from"./CheckBox.0cd71903.js";import{P as Q}from"./PsRadioValue.7f90f225.js";import{D as W}from"./DatePicker.55e143e0.js";import{P as X}from"./PsInput.1d284888.js";import{P as Y}from"./PsLabel.22ffb702.js";import{P as Z}from"./PsButton.e57c4d7d.js";import{P as F}from"./PsTextarea.a073ad3a.js";import{P as ee}from"./PsBreadcrumb2.49a3f56a.js";import{P as te}from"./PsCard.ad8f8108.js";import{P as oe}from"./PsLabelCaption.88f9aeab.js";import{P as se}from"./PsVideoUpload.78c651a5.js";import{P as ae}from"./PsLabelTitle3.d3f1b34d.js";import{P as re}from"./PsIcon.05949a2a.js";import{P as le}from"./PsLoading.6ac4d83e.js";import{P as ne}from"./PsCheckboxValue.e5e75bc0.js";import{a as ie,P as de}from"./PsActionModal.f014cce2.js";import{P as me}from"./PsImageUpload.30e55671.js";import{_ as ue}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsModal.bee9bcb9.js";import"./PsInputWithRightIcon.1f31b4ee.js";import"./PsIcon1.1b6f6944.js";import"./PsDraggable.e6494ff8.js";import"./PsModal.8d00ec01.js";import"./PsLabelHeader4.58b3b4f9.js";const ce=H({name:"Edit",components:{Head:j,CheckBox:O,DatePicker:W,PsInput:X,PsRadioValue:Q,PsLabel:Y,PsButton:Z,PsTextarea:F,PsLabelHeader6:K,PsDropdown:q,PsDropdownSelect:J,PsCard:te,PsBreadcrumb2:ee,PsLabelCaption:oe,PsImageUpload:me,PsIcon:re,PsLoading:le,PsCheckboxValue:ne,PsActionModal:ie,PsImageIconModal:de,PsDangerDialog:R,PsVideoUpload:se,PsLabelTitle3:ae},layout:G,props:["errors","coreFieldFilterSettings","role","modules","customizeHeaders","customizeDetails","permissions","rolePermissions"],setup(e){let s=z({name:e.role.name,description:e.role.description,permissions:[],_method:"put"}),f=N([]),w=x(!1);const y=x(!1),v=x(!1);for(let o=0;o<e.modules.length;o++)f[e.modules[o].id]=[];for(let o=0;o<e.modules.length;o++)for(let l=0;l<e.rolePermissions.length;l++)e.rolePermissions[l].module_id==e.modules[o].id&&(f[e.modules[o].id]=e.rolePermissions[l].permission_id.split(","),s.permissions[e.modules[o].id]=e.rolePermissions[l].permission_id);function $(o){s.permissions[o]=f[o].toString()}function S(){this.$inertia.get(route("user_role.index"))}function C(){this.$inertia.post(route("user_role.update",e.role.id),s,{forceFormData:!0,onBefore:()=>{y.value=!0},onSuccess:()=>{y.value=!1,v.value=!0,setTimeout(()=>{v.value=!1},2e3)},onError:()=>{y.value=!1}})}function _(){for(let o=0;o<e.modules.length;o++){for(let l=0;l<e.permissions.length;l++)w.value?f[e.modules[o].id][l]=e.permissions[l].id:f[e.modules[o].id]=[];s.permissions[e.modules[o].id]=f[e.modules[o].id].toString()}}return{handleUserMultiSelect:$,handleSubmit:C,toogleSelectAll:_,form:s,booleanPermission:f,selectAll:w,handleCancel:S,loading:y,success:v}},computed:{breadcrumb(){return[{label:B("core__be_dashboard_label"),url:route("admin.index")},{label:B("user_role_module"),url:route("user_role.index")},{label:B("core__be_edit_user_role"),color:"text-primary-500"}]}}}),pe={class:"rounded-xl"},fe={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},_e={class:"px-4 pt-6 dark:bg-backgroundDark"},be={class:"grid w-full sm:w-1/2 gap-6"},he={key:0,class:"text-red-800 font-medium ms-1"},ye={key:0,class:"text-red-800 font-medium ms-1"},Pe={class:"px-4 pb-6 flex flex-row justify-between items-center"},ve=c("Allow Modules"),ge={class:"flex flex-row items-center"},ke=c("Select all "),we={class:"flex flex-row items-center"},$e=["onUpdate:modelValue","onChange","id","value"],Se={class:"flex flex-row justify-end mb-2.5"},Ce={key:2,class:"transition-all duration-300"},xe={key:3,class:""};function Be(e,s,f,w,y,v){const $=d("Head"),S=d("ps-breadcrumb-2"),C=d("ps-label-header-6"),_=d("ps-label"),o=d("ps-input"),l=d("ps-label-caption"),A=d("ps-textarea"),D=d("ps-button"),I=d("ps-loading"),L=d("ps-icon"),M=d("ps-card"),E=d("ps-layout");return a(),n(P,null,[r($,{title:e.$t("core__be_edit_user_role")},null,8,["title"]),r(E,null,{default:i(()=>[r(S,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),r(M,{class:"w-full h-auto"},{default:i(()=>[m("div",pe,[m("div",fe,[r(C,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:i(()=>[c(u(e.$t("core__be_user_role_info")),1)]),_:1})]),m("div",_e,[m("form",{onSubmit:s[5]||(s[5]=T((...t)=>e.handleSubmit&&e.handleSubmit(...t),["prevent"]))},[m("div",be,[(a(!0),n(P,null,g(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="name"&&t.enable===1&&t.is_delete===0),(t,p)=>(a(),n("div",{key:p},[r(_,{class:"text-base"},{default:i(()=>[c(u(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(a(),n("span",he,"*")):h("",!0)]),_:2},1024),r(o,{ref_for:!0,ref:"name",type:"text",value:e.form.name,"onUpdate:value":s[0]||(s[0]=b=>e.form.name=b),placeholder:e.$t(t.placeholder),onKeyup:b=>t.mandatory==1?e.validateEmptyInput("name",e.form.name):"",onBlur:b=>t.mandatory==1?e.validateEmptyInput("name",e.form.name):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(a(),k(l,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:i(()=>[c(u(e.errors.name),1)]),_:1})):h("",!0)]))),128)),(a(!0),n(P,null,g(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="description"&&t.enable===1&&t.is_delete===0),(t,p)=>(a(),n("div",{key:p},[r(_,{class:"text-base"},{default:i(()=>[c(u(e.$t(t.label_name))+" ",1),t.mandatory==1?(a(),n("span",ye,"*")):h("",!0)]),_:2},1024),r(A,{rows:"4",value:e.form.description,"onUpdate:value":s[1]||(s[1]=b=>e.form.description=b),placeholder:e.$t(t.description)},null,8,["value","placeholder"]),t.mandatory==1?(a(),k(l,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:i(()=>[c(u(e.errors.description),1)]),_:1})):h("",!0)]))),128)),m("div",Pe,[r(_,{class:"text-base font-medium"},{default:i(()=>[ve]),_:1}),m("div",ge,[V(m("input",{"onUpdate:modelValue":s[2]||(s[2]=t=>e.selectAll=t),onChange:s[3]||(s[3]=t=>e.toogleSelectAll()),class:"mr-2 border-1 border-secondary-200 rounded",type:"checkbox"},null,544),[[U,e.selectAll]]),r(_,{class:"text-base font-light"},{default:i(()=>[ke]),_:1})])]),m("div",null,[(a(!0),n(P,null,g(e.modules,t=>(a(),n("div",{class:"px-4 pb-5 flex flex-row justify-between items-center",key:t.id},[r(_,{class:"text-sm"},{default:i(()=>[c(u(e.$t(t.lang_key)),1)]),_:2},1024),m("div",we,[(a(!0),n(P,null,g(e.permissions,p=>(a(),n("div",{class:"flex flex-row mr-2 items-center",key:p.id},[V(m("input",{"onUpdate:modelValue":b=>e.booleanPermission[t.id]=b,onChange:b=>e.handleUserMultiSelect(t.id),class:"mr-2 border-1 border-secondary-200 rounded",type:"checkbox",id:p.id,value:p.id},null,40,$e),[[U,e.booleanPermission[t.id]]]),r(_,{class:"text-base font-light",for:p.id},{default:i(()=>[c(u(p.title),1)]),_:2},1032,["for"])]))),128))])]))),128))]),m("div",Se,[r(D,{onClick:s[4]||(s[4]=t=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:i(()=>[c(u(e.$t("core__be_btn_cancel")),1)]),_:1}),r(D,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:i(()=>[e.loading?(a(),k(I,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):h("",!0),e.success?(a(),k(L,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):h("",!0),e.success?(a(),n("span",Ce,u(e.$t("core__be_btn_saved")),1)):h("",!0),!e.loading&&!e.success?(a(),n("span",xe,u(e.$t("core__be_btn_save")),1)):h("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var tt=ue(ce,[["render",Be]]);export{tt as default};