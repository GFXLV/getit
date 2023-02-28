import{d as C,H as D,i,aB as E,ac as y,r as u,o as w,c as B,b as e,w as t,a as n,p as o,t as s,h as S,F}from"./app.17cd73cb.js";import{b as I,f as L,P as H,a as T,d as V}from"./PsLayout.dfd88468.js";import{P as j}from"./PsBreadcrumb2.49a3f56a.js";import{u as x}from"./Validators.52e283a4.js";import{P as A}from"./PsInput.1d284888.js";import{P as M}from"./PsLabel.22ffb702.js";import{P as N}from"./PsButton.e57c4d7d.js";import{P as O}from"./PsCard.ad8f8108.js";import{P as R}from"./PsIcon.05949a2a.js";import{P as U}from"./PsLoading.6ac4d83e.js";import{P as W}from"./PsCheckboxValue.e5e75bc0.js";import{a as q,P as z}from"./PsActionModal.f014cce2.js";import{P as G}from"./PsImageUpload.30e55671.js";import{P as J}from"./PsLabelCaption.88f9aeab.js";import{P as K}from"./PsLabelTitle3.d3f1b34d.js";import{P as Q}from"./PsTextarea.a073ad3a.js";import{D as X}from"./DatePicker.55e143e0.js";import{h as Y}from"./moment.9709ab41.js";import{_ as Z}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsModal.bee9bcb9.js";import"./PsInputWithRightIcon.1f31b4ee.js";import"./PsIcon1.1b6f6944.js";import"./PsModal.8d00ec01.js";import"./PsLabelHeader4.58b3b4f9.js";import"./PsDraggable.e6494ff8.js";const aa=C({name:"Edit",components:{Head:D,PsBreadcrumb2:j,PsImageUpload:G,PsInput:A,PsLabel:M,PsButton:N,PsLabelHeader6:I,PsCard:O,PsIcon:R,PsLoading:U,PsCheckboxValue:W,PsActionModal:q,PsImageIconModal:z,PsDangerDialog:L,PsLabelCaption:J,PsLabelTitle3:K,PsTextarea:Q,PsDropdown:H,PsDropdownSelect:T,DatePicker:X},data(){return{moment:Y}},layout:V,props:["errors","transaction","packages"],setup(a){const l=i(!1),c=i(!1),P=i(),v=i(),h=i(),_=i(),m=i();let d=i(a.transaction.user.user_relation.filter(p=>p.core_keys_id==="ps-usr00004")),r=i(0);Object.keys(d.value).length>0&&(r.value=d.value[0].value);const{isEmpty:g}=x(),b=(p,$)=>{a.errors[p]=$?"":g(p,$),p=="payment_status"&&(m.value.isError=a.errors.payment_status!="")};let f=E({package_id:a.transaction.package_id,user_id:a.transaction.user_id,status:String(a.transaction.status),payment_method:"offline",_method:"put"});function k(p){this.$inertia.post(route("package_report.update",p),f,{forceFormData:!0,onBefore:()=>{l.value=!0},onSuccess:()=>{l.value=!1,c.value=!0,setTimeout(()=>{c.value=!1},2e3)},onError:()=>{_.value.isError=a.errors.date_range!="",m.value.isError=a.errors.payment_status!="",l.value=!1}})}return{types:[{id:"0",name:"Waiting For Approval"},{id:"1",name:"Approved"},{id:"2",name:"Rejected"}],date_range:_,payment_status:m,validateEmptyInput:b,handleSubmit:k,ps_action_modal:P,form:f,loading:l,success:c,ps_danger_dialog:h,ps_image_icon_modal:v,post_count_filter:d,post_count:r}},computed:{breadcrumb(){return[{label:y("core__be_dashboard_label"),url:route("admin.index")},{label:y("package_report_module"),url:route("package_report.index")},{label:y("package_report_detail"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("package_report.index"))}}}),ea={class:"rounded-lg"},ta={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4"},oa={class:"px-4 pt-6 dark:bg-backgroundDark"},sa={class:"grid grid-cols-2 gap-6"},ra={class:"grid grid-cols-2 gap-3 mt-6"},na={class:"grid grid-cols-2 gap-3 mt-6"},la={class:"mb-2.5 flex flex-row justify-end"};function ia(a,l,c,P,v,h){const _=u("Head"),m=u("ps-breadcrumb-2"),d=u("ps-label-header6"),r=u("ps-label"),g=u("ps-button"),b=u("ps-card"),f=u("ps-layout");return w(),B(F,null,[e(_,{title:a.$t("package_detail")},null,8,["title"]),e(f,null,{default:t(()=>[e(m,{items:a.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e(b,{class:"w-full h-auto"},{default:t(()=>[n("div",ea,[n("div",ta,[e(d,null,{default:t(()=>[o(s(a.$t("package_detail")),1)]),_:1})]),n("div",oa,[n("form",{onSubmit:l[1]||(l[1]=S(k=>a.handleSubmit(a.transaction.id),["prevent"]))},[n("div",sa,[n("div",null,[e(d,null,{default:t(()=>[o(s(a.$t("package_info")),1)]),_:1}),n("div",ra,[e(r,{textColor:"text-secondary-400"},{default:t(()=>[o(s(a.$t("package_name")),1)]),_:1}),e(r,null,{default:t(()=>[o(" : "+s(a.transaction.package.value),1)]),_:1}),e(r,{textColor:"text-secondary-400"},{default:t(()=>[o(s(a.$t("package_price")),1)]),_:1}),e(r,null,{default:t(()=>[o(" : "+s(a.transaction.price),1)]),_:1}),e(r,{textColor:"text-secondary-400"},{default:t(()=>[o(s(a.$t("package_posts")),1)]),_:1}),e(r,null,{default:t(()=>[o(" : "+s(a.post_count),1)]),_:1}),e(r,{textColor:"text-secondary-400"},{default:t(()=>[o(s(a.$t("package_payment")),1)]),_:1}),e(r,null,{default:t(()=>[o(" : "+s(a.transaction.payment_method),1)]),_:1})])]),n("div",null,[e(d,null,{default:t(()=>[o(s(a.$t("package_transition_info")),1)]),_:1}),n("div",na,[e(r,{textColor:"text-secondary-400"},{default:t(()=>[o(s(a.$t("package_user_name")),1)]),_:1}),e(r,null,{default:t(()=>[o(" : "+s(a.transaction.user.name),1)]),_:1}),e(r,{textColor:"text-secondary-400"},{default:t(()=>[o(s(a.$t("package_amount")),1)]),_:1}),e(r,null,{default:t(()=>[o(" : "+s(a.transaction.price),1)]),_:1}),e(r,{textColor:"text-secondary-400"},{default:t(()=>[o(s(a.$t("package_payment")),1)]),_:1}),e(r,null,{default:t(()=>[o(" : "+s(a.transaction.payment_method),1)]),_:1}),e(r,{textColor:"text-secondary-400"},{default:t(()=>[o(s(a.$t("package_date")),1)]),_:1}),e(r,null,{default:t(()=>[o(" : "+s(a.moment(a.transaction.added_date).format(a.$page.props.dateFormat)),1)]),_:1})])])]),n("div",la,[e(g,{type:"button",onClick:l[0]||(l[0]=k=>a.handleCancel())},{default:t(()=>[o(s(a.$t("core_be_btn_back")),1)]),_:1})])],32)])])]),_:1})]),_:1})],64)}var Va=Z(aa,[["render",ia]]);export{Va as default};