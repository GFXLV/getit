import{d as T,H as G,L as j,i as E,aB as q,ac as K,r as p,o as u,c as a,b as o,w as r,a as l,p as m,t as d,h as A,F as y,q as g,g as b,f as C,n as L}from"./app.17cd73cb.js";import{e as J,P as O,a as Q,d as R}from"./PsLayout.dfd88468.js";import{u as W}from"./Validators.52e283a4.js";import{P as X}from"./PsInput.1d284888.js";import{P as Y}from"./PsLabel.22ffb702.js";import{P as Z}from"./PsButton.e57c4d7d.js";import{P as N}from"./PsTextarea.a073ad3a.js";import{P as F}from"./PsLabelHeader4.58b3b4f9.js";import{P as x}from"./PsIcon.05949a2a.js";import{P as ee}from"./PsLoading.6ac4d83e.js";import{P as ne}from"./PsBreadcrumb2.49a3f56a.js";import{P as oe}from"./PsCheckboxValue.e5e75bc0.js";import{_ as se}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsModal.bee9bcb9.js";import"./PsInputWithRightIcon.1f31b4ee.js";import"./PsIcon1.1b6f6944.js";const re=T({name:"Create",components:{PsBreadcrumb2:ne,Head:G,PsInput:X,PsLabel:Y,PsButton:Z,PsTextarea:N,PsLabelHeader4:F,PsIcon:x,PsLoading:ee,PsTextButton:J,PsCheckboxValue:oe,PsDropdown:O,PsDropdownSelect:Q,Link:j},layout:R,props:["errors","sub_menu_group","coreFieldFilterSettings","menu_groups","icons","modules","forSelectedModules"],setup(e){const{isEmpty:s,minLength:M}=W(),P=E(!1),S=E(!1),I=E(!1),k=E(!1),h=E(!1),$=E(!1);let i=q({sub_menu_name:e.sub_menu_group.sub_menu_name,sub_menu_icon:e.sub_menu_group.sub_menu_icon,sub_menu_lang_key:e.sub_menu_group.sub_menu_lang_key,icon_id:e.icons.find(t=>t.id==e.sub_menu_group.icon_id)?e.sub_menu_group.icon_id:"",is_dropdown:e.sub_menu_group.is_dropdown,module_id:e.forSelectedModules.find(t=>t.id==e.sub_menu_group.module_id)?e.sub_menu_group.module_id:"",sub_menu_desc:e.sub_menu_group.sub_menu_desc,ordering:e.sub_menu_group.ordering,core_menu_group_id:e.menu_groups.find(t=>t.id==e.sub_menu_group.core_menu_group_id)?e.sub_menu_group.core_menu_group_id:"",is_show_on_menu:e.sub_menu_group.is_show_on_menu==!0?1:0,_method:"put"});const w=(t,c)=>{e.errors[t]=c?M(t,c,3):s(t,c)},v=(t,c,V="")=>{e.errors[t]=c?"":s(t,c,V),e.errors[t]==""?(t=="sub_menu_name"&&(I.value.isError=!1),t=="sub_menu_desc"&&($.value.isError=!1),t=="sub_menu_icon"&&(k.value.isError=!1),t=="sub_menu_lang_key"&&(h.value.isError=!1)):(t=="sub_menu_name"&&(I.value.isError=!0),t=="sub_menu_desc"&&($.value.isError=!0),t=="sub_menu_icon"&&(k.value.isError=!0),t=="sub_menu_lang_key"&&(h.value.isError=!0))};function B(t){this.$inertia.post(route("sub_menu_group.update",t),i,{forceFormData:!0,onBefore:()=>{P.value=!0},onSuccess:()=>{P.value=!1,S.value=!0,setTimeout(()=>{S.value=!1},2e3)},onError:()=>{e.errors.sub_menu_name!=null&&e.errors.sub_menu_name!=""&&(I.value.isError=!0),e.errors.sub_menu_desc!=null&&e.errors.sub_menu_desc!=""&&($.value.isError=!0),e.errors.sub_menu_icon!=null&&e.errors.sub_menu_icon!=""&&(k.value.isError=!0),e.errors.sub_menu_lang_key!=null&&e.errors.sub_menu_lang_key!=""&&(h.value.isError=!0),P.value=!1}})}return{validateNameInput:w,validateEmptyInput:v,route,form:i,handleSubmit:B,loading:P,success:S,input_name:I,input_icon:k,input_lang:h,input_desc:$}},computed:{breadcrumb(){return[{label:K("core__be_dashboard_label"),url:route("admin.index")},{label:K("sub_menu_group_module"),url:route("sub_menu_group.index")},{label:K("edit_sub_menu_group"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("sub_menu_group.index"))}}}),ue={class:"rounded-xl"},te={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},le={class:"px-4 pt-6 dark:bg-backgroundDark"},ae={class:"grid w-1/2 gap-6"},de={key:0,class:"text-red-800 font-medium ms-1"},me=m("Select Menu Group"),ie=l("span",{class:"text-red-800 font-medium ms-1"},"*",-1),_e={class:"rounded-md shadow-xs w-56"},pe={class:"pt-2 z-30"},be=["onClick"],fe={key:0,class:"text-red-800 font-medium ms-1"},ve={key:0,class:"text-red-800 font-medium ms-1"},ce=l("span",{class:"text-red-800 font-medium ms-1"},"*",-1),ye={class:"rounded-md shadow-xs w-56"},ge={class:"pt-2 z-30"},ke=["onClick"],he={key:0,class:"text-red-800 font-medium ms-1"},$e={key:0},we=l("span",{class:"text-red-800 font-medium ms-1"},"*",-1),Ee={class:"rounded-md shadow-xs w-56"},Ce={class:"pt-2 z-30"},Pe=m("Select Sub Menu Group"),Ie=["onClick"],Be={class:"mb-2.5 flex flex-row justify-end"},Se={key:2,class:"transition-all duration-300"},Ve={key:3,class:""};function Ke(e,s,M,P,S,I){const k=p("Head"),h=p("ps-breadcrumb-2"),$=p("ps-label-header-6"),i=p("ps-label"),w=p("ps-input"),v=p("ps-label-caption"),B=p("ps-dropdown-select"),t=p("ps-dropdown"),c=p("ps-checkbox-value"),V=p("ps-button"),z=p("ps-loading"),U=p("ps-icon"),D=p("ps-card"),H=p("ps-layout");return u(),a(y,null,[o(k,{title:e.$t("edit_sub_menu_group")},null,8,["title"]),o(H,null,{default:r(()=>[o(h,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),o(D,{class:"w-full h-auto"},{default:r(()=>[l("div",ue,[l("div",te,[o($,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:r(()=>[m(d(e.$t("core__sub_menu_group_info")),1)]),_:1})]),l("div",le,[l("form",{onSubmit:s[14]||(s[14]=A(n=>e.handleSubmit(e.sub_menu_group.id),["prevent"]))},[l("div",ae,[l("div",null,[(u(!0),a(y,null,g(e.coreFieldFilterSettings.filter(n=>n.original_field_name==="sub_menu_name"&&n.enable===1&&n.is_delete===0),(n,f)=>(u(),a("div",{key:f},[o(i,{class:"text-base mb-2"},{default:r(()=>[m(d(e.$t(n.label_name))+" ",1),(n.mandatory=1)?(u(),a("span",de,"*")):b("",!0)]),_:2},1024),o(w,{ref_for:!0,ref:"sub_menu_name",type:"text",value:e.form.sub_menu_name,"onUpdate:value":s[0]||(s[0]=_=>e.form.sub_menu_name=_),placeholder:e.$t(n.placeholder),onKeyup:_=>n.mandatory==1?e.validateEmptyInput("sub_menu_name",e.form.sub_menu_name):"",onBlur:_=>n.mandatory==1?e.validateEmptyInput("sub_menu_name",e.form.sub_menu_name):""},null,8,["value","placeholder","onKeyup","onBlur"]),n.mandatory==1?(u(),C(v,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[m(d(e.errors.sub_menu_name),1)]),_:1})):b("",!0)]))),128))]),l("div",null,[o(i,{class:"text-base mb-2"},{default:r(()=>[me,ie]),_:1}),o(t,{align:"left",class:"w-full"},{select:r(()=>[o(B,{placeholder:"Select Menu Group",selectedValue:e.form.core_menu_group_id==""?"":e.menu_groups.filter(n=>n.id==e.form.core_menu_group_id)[0].group_name,onChange:s[1]||(s[1]=n=>e.validateEmptyInput("core_menu_group_id",e.form.core_menu_group_id)),onBlur:s[2]||(s[2]=n=>e.validateEmptyInput("core_menu_group_id",e.form.core_menu_group_id))},null,8,["selectedValue"])]),list:r(()=>[l("div",_e,[l("div",pe,[(u(!0),a(y,null,g(e.menu_groups,n=>(u(),a("div",{key:n.id,class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:f=>[e.form.core_menu_group_id=n.id,e.validateEmptyInput("core_menu_group_id",e.form.core_menu_group_id)]},[o(i,{class:L(["ms-2",n.id==e.form.core_menu_group_id?" font-bold":""])},{default:r(()=>[m(d(n.group_name),1)]),_:2},1032,["class"])],8,be))),128))])])]),_:1}),o(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[m(d(e.errors.core_menu_group_id),1)]),_:1})]),l("div",null,[(u(!0),a(y,null,g(e.coreFieldFilterSettings.filter(n=>n.original_field_name==="sub_menu_desc"&&n.enable===1&&n.is_delete===0),(n,f)=>(u(),a("div",{key:f},[o(i,{class:"text-base mb-2"},{default:r(()=>[m(d(e.$t(n.label_name))+" ",1),(n.mandatory=1)?(u(),a("span",fe,"*")):b("",!0)]),_:2},1024),o(w,{ref_for:!0,ref:"sub_menu_desc",type:"text",value:e.form.sub_menu_desc,"onUpdate:value":s[3]||(s[3]=_=>e.form.sub_menu_desc=_),placeholder:e.$t(n.placeholder),onKeyup:_=>n.mandatory==1?e.validateEmptyInput("sub_menu_desc",e.form.sub_menu_desc):"",onBlur:_=>n.mandatory==1?e.validateEmptyInput("sub_menu_desc",e.form.sub_menu_desc):""},null,8,["value","placeholder","onKeyup","onBlur"]),n.mandatory==1?(u(),C(v,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[m(d(e.errors.sub_menu_desc),1)]),_:1})):b("",!0)]))),128))]),l("div",null,[(u(!0),a(y,null,g(e.coreFieldFilterSettings.filter(n=>n.original_field_name==="sub_menu_lang_key"&&n.enable===1&&n.is_delete===0),(n,f)=>(u(),a("div",{key:f},[o(i,{class:"text-base mb-2"},{default:r(()=>[m(d(e.$t(n.label_name))+" ",1),(n.mandatory=1)?(u(),a("span",ve,"*")):b("",!0)]),_:2},1024),o(w,{ref_for:!0,ref:"sub_menu_lang_key",type:"text",value:e.form.sub_menu_lang_key,"onUpdate:value":s[4]||(s[4]=_=>e.form.sub_menu_lang_key=_),placeholder:e.$t(n.placeholder),onKeyup:_=>n.mandatory==1?e.validateEmptyInput("sub_menu_lang_key",e.form.sub_menu_lang_key):"",onBlur:_=>n.mandatory==1?e.validateEmptyInput("sub_menu_lang_key",e.form.sub_menu_lang_key):""},null,8,["value","placeholder","onKeyup","onBlur"]),n.mandatory==1?(u(),C(v,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[m(d(e.errors.sub_menu_lang_key),1)]),_:1})):b("",!0)]))),128))]),l("div",null,[o(i,{class:"text-base"},{default:r(()=>[m(d(e.$t("select_icon")),1),ce]),_:1}),o(t,{align:"left",class:"lg:mt-2 mt-1 w-full"},{select:r(()=>[o(B,{placeholder:e.$t("select_icon"),selectedValue:e.form.icon_id==""||e.form.icon_id===null?"":e.icons.filter(n=>n.id==e.form.icon_id)[0].icon_name,onChange:s[5]||(s[5]=n=>e.validateEmptyInput("icon_id",e.form.icon_id)),onBlur:s[6]||(s[6]=n=>e.validateEmptyInput("icon_id",e.form.icon_id))},null,8,["placeholder","selectedValue"])]),list:r(()=>[l("div",ye,[l("div",ge,[(u(!0),a(y,null,g(e.icons,n=>(u(),a("div",{key:n.id,class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:f=>[e.form.icon_id=n.id,e.validateEmptyInput("icon_id",e.form.icon_id)]},[o(i,{class:L(["ms-2",n.id==e.form.icon_id?" font-bold":""])},{default:r(()=>[m(d(n.icon_name),1)]),_:2},1032,["class"])],8,ke))),128))])])]),_:1}),o(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[m(d(e.errors.icon_id),1)]),_:1})]),l("div",null,[(u(!0),a(y,null,g(e.coreFieldFilterSettings.filter(n=>n.original_field_name==="ordering"&&n.enable===1&&n.is_delete===0),(n,f)=>(u(),a("div",{key:f},[o(i,{class:"text-base mb-2"},{default:r(()=>[m(d(e.$t(n.label_name))+" ",1),(n.mandatory=1)?(u(),a("span",he,"*")):b("",!0)]),_:2},1024),o(w,{ref_for:!0,ref:"ordering",type:"number",value:e.form.ordering,"onUpdate:value":s[7]||(s[7]=_=>e.form.ordering=_),placeholder:e.$t(n.placeholder),onKeyup:_=>n.mandatory==1?e.validateEmptyInput("ordering",e.form.ordering):"",onBlur:_=>n.mandatory==1?e.validateEmptyInput("ordering",e.form.ordering):""},null,8,["value","placeholder","onKeyup","onBlur"]),n.mandatory==1?(u(),C(v,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[m(d(e.errors.ordering),1)]),_:1})):b("",!0)]))),128))]),l("div",null,[o(i,{class:"text-base mb-2"},{default:r(()=>[m(d(e.$t("has_child_label")),1)]),_:1}),o(c,{value:e.form.is_dropdown,"onUpdate:value":s[8]||(s[8]=n=>e.form.is_dropdown=n),class:"font-normal",title:e.$t("has_child")},null,8,["value","title"])]),e.form.is_dropdown?b("",!0):(u(),a("div",$e,[o(i,{class:"text-base mb-2"},{default:r(()=>[m(d(e.$t("select_module")),1),we]),_:1}),o(t,{align:"left",class:"w-full"},{select:r(()=>[o(B,{placeholder:e.$t("select_module"),selectedValue:e.form.module_id==""||e.form.module_id===null?"":e.forSelectedModules.filter(n=>n.id==e.form.module_id)[0].title,onChange:s[9]||(s[9]=n=>e.validateEmptyInput("module_id",e.form.module_id)),onBlur:s[10]||(s[10]=n=>e.validateEmptyInput("module_id",e.form.module_id))},null,8,["placeholder","selectedValue"])]),list:r(()=>[l("div",Ee,[l("div",Ce,[l("div",{class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:s[11]||(s[11]=n=>[e.form.module_id="",e.validateEmptyInput("module_id",e.form.module_id)])},[o(i,{class:"text-gray-200"},{default:r(()=>[Pe]),_:1})]),(u(!0),a(y,null,g(e.modules,n=>(u(),a("div",{key:n.id,class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:f=>[e.form.module_id=n.id,e.validateEmptyInput("module_id",e.form.module_id)]},[o(i,{class:L(["ms-2",n.id==e.form.module_id?" font-bold":""])},{default:r(()=>[m(d(n.title),1)]),_:2},1032,["class"])],8,Ie))),128))])])]),_:1}),o(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[m(d(e.errors.module_id),1)]),_:1})])),l("div",null,[o(i,{class:"text-base mb-2"},{default:r(()=>[m(d(e.$t("status")),1)]),_:1}),o(c,{value:e.form.is_show_on_menu,"onUpdate:value":s[12]||(s[12]=n=>e.form.is_show_on_menu=n),class:"font-normal",title:e.$t("publish")},null,8,["value","title"])]),l("div",Be,[o(V,{onClick:s[13]||(s[13]=n=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:r(()=>[m(d(e.$t("core__be_btn_cancel")),1)]),_:1}),o(V,{class:"transition-all duration-300 min-w-3xs",padding:"px-5 py-2",rounded:"rounded",hover:"",focus:""},{default:r(()=>[e.loading?(u(),C(z,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):b("",!0),e.success?(u(),C(U,{key:1,name:"check",viewBox:"0 0 18 14",w:"14",h:"10",class:"me-1.5 transition-all duration-300"})):b("",!0),e.success?(u(),a("span",Se,d(e.$t("core__be_btn_saved")),1)):b("",!0),!e.loading&&!e.success?(u(),a("span",Ve,d(e.$t("core__be_btn_save")),1)):b("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var Xe=se(re,[["render",Ke]]);export{Xe as default};
