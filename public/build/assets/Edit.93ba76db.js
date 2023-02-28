import{d as S,H as D,L as E,i as m,aB as B,ac as r,r as n,o as u,c as L,b as s,w as l,a as c,h as I,p as i,t as _,f as h,g as y,F as M}from"./app.17cd73cb.js";import{f as F,d as U}from"./PsLayout.dfd88468.js";import H from"./FlashMessage.b567a6e6.js";import{u as N}from"./Validators.52e283a4.js";import{P as T}from"./PsInput.1d284888.js";import{P as V}from"./PsLabel.22ffb702.js";import{P as z}from"./PsButton.e57c4d7d.js";import{P as A}from"./PsTextarea.a073ad3a.js";import{P as q}from"./PsLabelHeader4.58b3b4f9.js";import{P as G}from"./PsLabelCaption.88f9aeab.js";import{P as J}from"./PsIcon.05949a2a.js";import{P as K}from"./PsLoading.6ac4d83e.js";import{P as O}from"./PsBreadcrumb2.49a3f56a.js";import{a as Q,P as R}from"./PsActionModal.f014cce2.js";import{P as W}from"./PsImageUpload.30e55671.js";import{_ as X}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsModal.bee9bcb9.js";import"./PsInputWithRightIcon.1f31b4ee.js";import"./PsIcon1.1b6f6944.js";import"./PsModal.8d00ec01.js";import"./PsDraggable.e6494ff8.js";import"./PsLabelTitle3.d3f1b34d.js";const Y=S({name:"Edit",components:{FlashMessage:H,Head:D,PsInput:T,PsLabel:V,PsButton:z,PsTextarea:A,PsLabelHeader4:q,PsLabelCaption:G,PsIcon:J,PsLoading:K,PsBreadcrumb2:O,Link:E,PsActionModal:Q,PsImageIconModal:R,PsDangerDialog:F,PsImageUpload:W},layout:U,props:["errors","project","status"],setup(e){const o=m(!1),p=m(!1),k=m(),P=m(),x=m();let f=B({project_url:e.project.project_url,project_code:e.project.project_code,_method:"put"});const{isEmail:C}=N(),d=(t,a)=>{e.errors[t]=a?C(t,a):""},b=t=>{let a=t.keyCode?t.keyCode:t.which;(a<48||a>57)&&t.preventDefault()};function v(t){title.value=t}function g(){this.$inertia.get(route("license.index"))}function j(t){this.$inertia.post(route("license.update",t),f,{forceFormData:!0,onBefore:()=>{o.value=!0},onSuccess:()=>{o.value=!1,p.value=!0,setTimeout(()=>{p.value=!1},2e3)},onError:()=>{o.value=!1}})}function w(t){k.value.openModal(r("conf_modal_label"),r("replace_img_label"),r("remove_img_label"),"image","trash","24","24",()=>{P.value.openModal(r("core__be_upload_photo"),"cloudUpload",a=>{let $=B({image:a,_method:"put"});this.$inertia.post(route("image.replace",t),$)})},()=>{x.value.openModal(r("remove_label"),r("are_u_sure_remove_photo"),r("btn_confirm"),r("btn_cancel"),()=>{this.$inertia.delete(route("image.destroy",t),{onBefore:()=>{o.value=!0},onSuccess:()=>{o.value=!1,p.value=!0,setTimeout(()=>{p.value=!1},2e3)},onError:()=>{o.value=!1}})},()=>{})})}return{validateEmailInput:d,handleCancel:g,onlyNumber:b,form:f,changeSection:v,handleSubmit:j,loading:o,success:p,replaceImageClicked:w,ps_danger_dialog:x,ps_image_icon_modal:P,ps_action_modal:k}},computed:{breadcrumb(){return[{label:r("core__be_dashboard_label"),url:route("admin.index")},{label:r("license_module"),color:"text-primary-500"}]}}}),Z={class:""},ee={class:"w-full grid grid-cols-2 gap-x-20 mt-8 rounded-lg bg-whitedark:bg-secondaryDark-black shadow-sm"},oe=i(" Edit License "),te={class:""},ae={class:"px-4 py-3"},se=i("Backend Url"),re={class:"px-4 py-3"},le=i("Purchased Code"),ne={class:"flex flex-row px-4 py-3 justify-end mb-2.5 mt-4"};function ie(e,o,p,k,P,x){const f=n("Head"),C=n("ps-breadcrumb-2"),d=n("ps-label"),b=n("ps-input"),v=n("ps-label-caption"),g=n("ps-button"),j=n("ps-loading"),w=n("ps-icon"),t=n("ps-layout");return u(),L(M,null,[s(f,{title:e.$t("license_module")},null,8,["title"]),s(t,null,{default:l(()=>[c("div",Z,[s(C,{items:e.breadcrumb,class:"mt-4 mb-7"},null,8,["items"]),c("div",ee,[s(d,{class:"col-span-2 text-lg px-4 py-3.5 bg-primary-50 dark:bg-primary-900"},{default:l(()=>[oe]),_:1}),c("div",te,[c("form",{onSubmit:o[3]||(o[3]=I(a=>e.handleSubmit(e.project.id),["prevent"]))},[c("div",ae,[s(d,{class:"text-base mb-1"},{default:l(()=>[se]),_:1}),s(b,{type:"text",value:e.form.project_url,"onUpdate:value":o[0]||(o[0]=a=>e.form.project_url=a),placeholder:"Backend Url"},null,8,["value"]),s(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:l(()=>[i(_(e.errors.project_url),1)]),_:1})]),c("div",re,[s(d,{class:"text-base mb-1"},{default:l(()=>[le]),_:1}),s(b,{type:"text",value:e.form.project_code,"onUpdate:value":o[1]||(o[1]=a=>e.form.project_code=a),placeholder:"Purchased Code"},null,8,["value"]),s(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:l(()=>[i(_(e.errors.project_code),1)]),_:1})]),c("div",ne,[s(g,{onClick:o[2]||(o[2]=a=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:l(()=>[i(_(e.$t("btn_cancel")),1)]),_:1}),s(g,{class:"transition-all duration-300 min-w-3xs",padding:"px-6 py-2",rounded:"rounded",hover:"",focus:""},{default:l(()=>[e.loading?(u(),h(j,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):y("",!0),e.success?(u(),h(w,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):y("",!0),e.success?(u(),h(d,{key:2,class:"transition-all duration-300",textColor:"text-white dark:text-secondaryDark-black"},{default:l(()=>[i(_(e.$t("btn_saved")),1)]),_:1})):y("",!0),!e.loading&&!e.success?(u(),h(d,{key:3,textColor:"text-white dark:text-secondaryDark-black"},{default:l(()=>[i(_(e.$t("btn_save")),1)]),_:1})):y("",!0)]),_:1})])],32)])])])]),_:1})],64)}var Ee=X(Y,[["render",ie]]);export{Ee as default};