import{d as D,L as H,H as P,i as o,ac as i,ag as O,r as s,o as d,c as A,b as n,w as l,f as _,p as $,t as F,g as h,F as T}from"./app.17cd73cb.js";import{f as j,d as B}from"./PsLayout.dfd88468.js";import{P as I}from"./PsLabel.22ffb702.js";import{P as V}from"./PsButton.e57c4d7d.js";import{P as z}from"./PsTable2.559b3bb1.js";import{P as R}from"./PsAlert.28e258d7.js";import{P as E}from"./PsBreadcrumb2.49a3f56a.js";import{b as N}from"./PsModal.bee9bcb9.js";import{P as L}from"./PsIcon.05949a2a.js";import{P as M}from"./PsBannerIcon.71d1b60f.js";import{D as U}from"./PsTableSearch.4ca5ffa6.js";import{P as q}from"./PsIconButton.af329d7a.js";import{_ as G}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsInputWithRightIcon.1f31b4ee.js";import"./moment.9709ab41.js";import"./PsIcon1.1b6f6944.js";const J=D({name:"Index",components:{Link:H,Head:P,PsLabel:I,PsButton:V,PsTable2:z,PsAlert:R,PsBreadcrumb2:E,PsDangerDialog:j,PsToggle:N,PsIcon:L,PsBannerIcon:M,Dropdown:U,PsIconButton:q},layout:B,props:{can:Object,status:Object,currencies:Object,checkPermission:Object,hideShowFieldForFilterArr:Object,showCoreAndCustomFieldArr:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String},setup(e){let r=o(!1),b=e.search?o(e.search):o(""),p=e.sort_field?o(e.sort_field):o(""),g=e.sort_order?o(e.sort_order):o("desc");const v=o(),y=o(),k=o();function w(t){v.value.openModal(i("core__delete_payment_currency"),i("core__delete_payment_currency_info"),i("core__be_btn_confirm"),i("core__be_btn_cancel"),()=>{this.$inertia.delete(route("available_currency.destroy",t)),r.value=!0,setTimeout(()=>{r.value=!1},3e3)},()=>{})}function u(t,a){a&&this.$inertia.put(route("available_currency.statusChange",t),{onSuccess:()=>{r.value=!0,setTimeout(()=>{r.value=!1},3e3)},onError:()=>{r.value=!0,setTimeout(()=>{r.value=!1},3e3)}})}function c(t,a){a&&this.$inertia.put(route("available_currency.defaultChange",t),{onSuccess:()=>{r.value=!0,setTimeout(()=>{r.value=!1},3e3)},onError:()=>{r.value=!0,setTimeout(()=>{r.value=!1},3e3)}})}function C(t){p.value=t.field,g.value=t.sort_order,m()}function f(t){b.value=t,m(1)}function S(t){m(1,t)}function m(t=null,a=null){O.Inertia.get(route("available_currency.index"),{sort_field:p.value,sort_order:g.value,page:t!=null?t:e.currencies.meta.current_page,row:a!=null?a:e.currencies.meta.per_page,search:b.value},{preserveScroll:!0,preserveState:!0})}return{handleRow:S,handleSearchingSorting:m,handleSearching:f,handleSorting:C,handlePublish:u,handleDefault:c,visible:r,columns:k,ps_danger_dialog:v,confirmDeleteClicked:w,colFilterOptions:y}},computed:{breadcrumb(){return[{label:i("core__be_dashboard_label"),url:route("admin.index")},{label:i("core__payment_currency_group"),color:"text-primary-500"}]}},methods:{handleCreate(){this.$inertia.get(route("available_currency.create"))},handleEdit(e){this.$inertia.get(route("available_currency.edit",e))},FilterOptionshandle(e){O.Inertia.put(route("available_currency.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.currencies.per_page,search:this.search.value,current_page:this.currencies.current_page},{preserveScroll:!0,preserveState:!0})}},created(){this.columns=this.showCoreAndCustomFieldArr.map(e=>({action:e.action,field:e.field,label:i(e.label),type:e.type})),this.colFilterOptions=this.hideShowFieldForFilterArr.map(e=>({hidden:e.hidden,id:e.id,key:i(e.key),key_id:e.key_id,label:i(e.label),module_name:e.module_name}))}}),K={key:0,class:"flex flex-row mb-2"};function Q(e,r,b,p,g,v){const y=s("Head"),k=s("ps-breadcrumb-2"),w=s("ps-banner-icon"),u=s("ps-icon"),c=s("ps-button"),C=s("ps-danger-dialog"),f=s("ps-toggle"),S=s("ps-table2"),m=s("ps-layout");return d(),A(T,null,[n(y,{title:e.$t("core__payment_currency_group")},null,8,["title"]),n(m,null,{default:l(()=>[n(k,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(d(),_(w,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:l(()=>[$(F(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):h("",!0),n(S,{row:e.row,search:e.search,object:this.currencies,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter},{button:l(()=>[e.can.createAvailableCurrency?(d(),_(c,{key:0,onClick:r[0]||(r[0]=t=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:l(()=>[n(u,{name:"plus",class:"me-1 font-semibold"}),$(" "+F(e.$t("core__create_payment_currency")),1)]),_:1})):h("",!0)]),responsive_button:l(()=>[e.can.createAvailableCurrency?(d(),_(c,{key:0,onClick:r[1]||(r[1]=t=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:l(()=>[n(u,{name:"plus",class:"me-1 font-semibold"}),$(" "+F(e.$t("core__create_payment_currency")),1)]),_:1})):h("",!0)]),tableActionRow:l(t=>[t.field=="action"?(d(),A("div",K,[n(c,{disabled:!t.row.authorization.update,onClick:a=>e.handleEdit(t.row.id),class:"me-2",colors:"bg-green-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:l(()=>[n(u,{theme:"text-white dark:text-primary-900",name:"editPencil",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),n(c,{disabled:!t.row.authorization.delete,onClick:a=>e.confirmDeleteClicked(t.row.id),colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:l(()=>[n(u,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),n(C,{ref:"ps_danger_dialog"},null,512)])):h("",!0)]),tableRow:l(t=>[t.field=="status"?(d(),_(f,{key:0,disabled:!t.row.authorization.update,selectedValue:t.row.status==1,onClick:a=>e.handlePublish(t.row.id,t.row.authorization.update),toggleOnTheme:"bg-primary-500 border-primary-500 "},null,8,["disabled","selectedValue","onClick"])):h("",!0),t.field=="is_default"?(d(),_(f,{key:1,disabled:!t.row.authorization.update,selectedValue:t.row.is_default==1,onClick:a=>e.handleDefault(t.row.id,t.row.authorization.update),toggleOnTheme:"bg-primary-500 border-primary-500 "},null,8,["disabled","selectedValue","onClick"])):h("",!0)]),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","searchable"])]),_:1})],64)}var ce=G(J,[["render",Q]]);export{ce as default};