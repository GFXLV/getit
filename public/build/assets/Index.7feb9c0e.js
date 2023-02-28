import{d as R,L as H,H as j,i as n,ac as d,ag as D,r as l,o as u,c as f,b as a,w as i,f as m,p as P,t as O,g as h,F as A}from"./app.17cd73cb.js";import{f as B,h as I,d as V}from"./PsLayout.dfd88468.js";import{P as z}from"./PsLabel.22ffb702.js";import{P as E}from"./PsButton.e57c4d7d.js";import{P as N}from"./PsTable2.559b3bb1.js";import{P as L}from"./PsAlert.28e258d7.js";import{P as M}from"./PsBreadcrumb2.49a3f56a.js";import{b as U}from"./PsModal.bee9bcb9.js";import{P as q}from"./PsIcon.05949a2a.js";import{P as G}from"./PsBannerIcon.71d1b60f.js";import{D as J}from"./PsTableSearch.4ca5ffa6.js";import{P as K}from"./PsIconButton.af329d7a.js";import{_ as Q}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsInputWithRightIcon.1f31b4ee.js";import"./moment.9709ab41.js";import"./PsIcon1.1b6f6944.js";const W=R({name:"Index",components:{Link:H,Head:j,PsLabel:z,PsButton:E,PsTable2:N,PsAlert:L,PsBreadcrumb2:M,PsDangerDialog:B,PsToggle:U,PsIcon:q,PsBannerIcon:G,Dropdown:J,PsIconButton:K,PsErrorDialog:I},layout:V,props:{can:Object,status:Object,phoneCountryCodes:Object,checkPermission:Object,hideShowFieldForFilterArr:Object,showCoreAndCustomFieldArr:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String},setup(e){let r=n(!1),g=e.search?n(e.search):n(""),b=e.sort_field?n(e.sort_field):n(""),y=e.sort_order?n(e.sort_order):n("desc");const v=n(),C=n(),k=n(),w=n(),s=n(!0);function _(t){v.value.openModal(d("core__delete_phone_country_code"),d("core__delete_phone_country_code_info"),d("core__be_btn_confirm"),d("core__be_btn_cancel"),()=>{this.$inertia.delete(route("phone_country_code.destroy",t.id)),r.value=!0,setTimeout(()=>{r.value=!1},3e3)},()=>{})}function S(t,c){c&&(this.$inertia.put(route("phone_country_code.statusChange",t)),setTimeout(()=>{s.value=!1,setTimeout(()=>{s.value=!0},200)},2e3))}function $(t,c){c&&(this.$inertia.put(route("phone_country_code.defaultChange",t),{onSuccess:()=>{r.value=!0,setTimeout(()=>{r.value=!1},3e3)},onError:()=>{r.value=!0,setTimeout(()=>{r.value=!1},3e3)}}),setTimeout(()=>{s.value=!1,setTimeout(()=>{s.value=!0},200)},2e3))}function p(t){b.value=t.field,y.value=t.sort_order,o()}function T(t){g.value=t,o(1)}function F(t){o(1,t)}function o(t=null,c=null){D.Inertia.get(route("phone_country_code.index"),{sort_field:b.value,sort_order:y.value,page:t!=null?t:e.phoneCountryCodes.meta.current_page,row:c!=null?c:e.phoneCountryCodes.meta.per_page,search:g.value},{preserveScroll:!0,preserveState:!0})}return{handleRow:F,handleSearchingSorting:o,handleSearching:T,handleSorting:p,handlePublish:S,handleDefault:$,visible:r,columns:w,ps_danger_dialog:v,confirmDeleteClicked:_,ps_error_dialog:k,colFilterOptions:C,reRenderToogle:s}},computed:{breadcrumb(){return[{label:d("core__be_dashboard_label"),url:route("admin.index")},{label:d("core__phone_country_code_module"),color:"text-primary-500"}]}},methods:{handleCreate(){this.$inertia.get(route("phone_country_code.create"))},handleEdit(e){this.$inertia.get(route("phone_country_code.edit",e))},FilterOptionshandle(e){D.Inertia.put(route("phone_country_code.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.phoneCountryCodes.per_page,search:this.search.value,current_page:this.phoneCountryCodes.current_page},{preserveScroll:!0,preserveState:!0})}},created(){this.columns=this.showCoreAndCustomFieldArr.map(e=>({action:e.action,field:e.field,label:d(e.label),sort:e.sort,type:e.type})),this.colFilterOptions=this.hideShowFieldForFilterArr.map(e=>({hidden:e.hidden,id:e.id,key:d(e.key),key_id:e.key_id,label:d(e.label),module_name:e.module_name}))}}),X={key:0,class:"flex flex-row"},Y={key:0},Z={key:1};function x(e,r,g,b,y,v){const C=l("Head"),k=l("ps-breadcrumb-2"),w=l("ps-banner-icon"),s=l("ps-icon"),_=l("ps-button"),S=l("ps-danger-dialog"),$=l("ps-error-dialog"),p=l("ps-toggle"),T=l("ps-table2"),F=l("ps-layout");return u(),f(A,null,[a(C,{title:e.$t("core__phone_country_code_module")},null,8,["title"]),a(F,null,{default:i(()=>[a(k,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(u(),m(w,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:i(()=>[P(O(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):h("",!0),a(T,{row:e.row,search:e.search,object:this.phoneCountryCodes,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter},{button:i(()=>[e.can.createPhoneCountryCode?(u(),m(_,{key:0,onClick:r[0]||(r[0]=o=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:i(()=>[a(s,{name:"plus",class:"me-1 font-semibold"}),P(" "+O(e.$t("core__create_phone_country_code")),1)]),_:1})):h("",!0)]),responsive_button:i(()=>[e.can.createPhoneCountryCode?(u(),m(_,{key:0,onClick:r[1]||(r[1]=o=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:i(()=>[a(s,{name:"plus",class:"me-1 font-semibold"}),P(" "+O(e.$t("core__create_phone_country_code")),1)]),_:1})):h("",!0)]),tableActionRow:i(o=>[o.field=="action"?(u(),f("div",X,[a(_,{disabled:!o.row.authorizations.upddate,onClick:t=>e.handleEdit(o.row.id),class:"me-2",colors:"bg-green-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:i(()=>[a(s,{theme:"text-white dark:text-primary-900",name:"editPencil",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),a(_,{disabled:!o.row.authorizations.delete,onClick:t=>e.confirmDeleteClicked(o.row),colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:i(()=>[a(s,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),a(S,{ref:"ps_danger_dialog"},null,512),a($,{ref:"ps_error_dialog"},null,512)])):h("",!0)]),tableRow:i(o=>[o.field=="status"&&e.reRenderToogle?(u(),f("div",Y,[e.reRenderToogle?(u(),m(p,{key:0,disabled:!o.row.authorizations.upddate,selectedValue:o.row.status==1,onClick:t=>e.handlePublish(o.row.id,o.row.authorizations.upddate),toggleOnTheme:"bg-primary-500 border-primary-500 "},null,8,["disabled","selectedValue","onClick"])):h("",!0)])):h("",!0),o.field=="is_default"&&e.reRenderToogle?(u(),f("div",Z,[e.reRenderToogle?(u(),m(p,{key:0,disabled:!o.row.authorizations.upddate,selectedValue:o.row.is_default==1,onClick:t=>e.handleDefault(o.row.id,o.row.authorizations.upddate),toggleOnTheme:"bg-primary-500 border-primary-500 "},null,8,["disabled","selectedValue","onClick"])):h("",!0)])):h("",!0)]),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","searchable"])]),_:1})],64)}var fe=Q(W,[["render",x]]);export{fe as default};