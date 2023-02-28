import{d as I,L as A,H as j,i as l,ab as B,ac as o,ag as P,r as i,o as m,c as H,b as a,w as r,f as b,p as C,t as F,g as _,F as D}from"./app.17cd73cb.js";import{f as R,d as N}from"./PsLayout.dfd88468.js";import{P as T}from"./PsLabel.22ffb702.js";import{P as V}from"./PsButton.e57c4d7d.js";import{P as z}from"./PsTable2.559b3bb1.js";import{P as E}from"./PsAlert.28e258d7.js";import{P as L}from"./PsBreadcrumb2.49a3f56a.js";import{b as M}from"./PsModal.bee9bcb9.js";import{P as U}from"./PsIcon.05949a2a.js";import{P as q}from"./PsCsvModal.f6f9d17d.js";import{P as G}from"./PsBannerIcon.71d1b60f.js";import{P as J}from"./PsIconButton.af329d7a.js";import{_ as K}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsInputWithRightIcon.1f31b4ee.js";import"./PsTableSearch.4ca5ffa6.js";import"./moment.9709ab41.js";import"./PsIcon1.1b6f6944.js";import"./PsModal.8d00ec01.js";import"./PsLabelHeader4.58b3b4f9.js";import"./PsLink1.148ec573.js";import"./PsDraggable.e6494ff8.js";const Q=I({name:"Index",components:{Link:A,Head:j,PsLabel:T,PsButton:V,PsTable2:z,PsAlert:E,PsBreadcrumb2:L,PsDangerDialog:R,PsToggle:M,PsIcon:U,PsCsvModal:q,PsBannerIcon:G,PsIconButton:J},layout:N,props:{can:Object,status:Object,offlinePayments:Object,hideShowFieldForFilterArr:Object,showCoreAndCustomFieldArr:Object,authUser:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String},setup(e){const s=l();let c=l(!1);const $=l(!1),O=l(!1);let y=e.search?l(e.search):l(""),p=e.sort_field?l(e.sort_field):l(""),h=e.sort_order?l(e.sort_order):l("desc");function v(n){p.value=n.field,h.value=n.sort_order,d()}function u(){selected_cat.value="all",selected_sub_cat.value="all",selected_city.value="all",selected_township.value="all",d()}function f(n){y.value=n,d(1)}function w(n){d(1,n)}function d(n=null,g=null){P.Inertia.get(route("offline_payment_setting.index"),{sort_field:p.value,sort_order:h.value,page:n!=null?n:e.offlinePayments.meta.current_page,row:g!=null?g:e.offlinePayments.meta.per_page,search:y.value},{preserveScroll:!0,preserveState:!0})}const S=B([{label:o("payment__offline_pmt_title"),key:"title",hidden:!1},{label:o("payment__offline_pmt_desc"),key:"description",hidden:!1},{label:o("payment__offline_pmt_status"),key:"status",hidden:!1}]),k=[{label:o("action_label"),field:"action",type:"Action"},{label:o("payment__offline_pmt_title"),field:"title",type:"String",action:"Action"},{label:o("payment__offline_pmt_desc"),field:"description",type:"String",action:"Action",sort:!1},{label:o("core__publish_label"),field:"status",type:"String",action:"Action"}];function t(n){s.value.openModal(o("core__be_delete_offline_pmt"),o("core__be_delete_offline_payment_info"),o("core__be_btn_confirm"),o("core__be_btn_cancel"),()=>{P.Inertia.delete(route("offline_payment_setting.destroy",n),{onSuccess:()=>{c.value=!0,setTimeout(()=>{c.value=!1},3e3)},onError:()=>{c.value=!0,setTimeout(()=>{c.value=!1},3e3)}})},()=>{})}return{columns:k,ps_danger_dialog:s,confirmDeleteClicked:t,colFilterOptions:S,showFilter:$,clearFilter:O,visible:c,handleSorting:v,handleSearchingSorting:d,handleClearFilter:u,handleRow:w,handleSearching:f}},computed:{breadcrumb(){return[{label:o("core__be_dashboard_label"),url:route("admin.index")},{label:o("offline_payment_setting_module"),color:"text-primary-500"}]}},methods:{handleCreate(){this.$inertia.get(route("offline_payment_setting.create"))},handleEdit(e){this.$inertia.get(route("offline_payment_setting.edit",e))},handlePublish(e,s){s&&this.$inertia.put(route("offline_payment_setting.statusChange",e))},FilterOptionshandle(e){P.Inertia.put(route("offline_payment_setting.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.offlinePayments.per_page,search:this.search.value,current_page:this.offlinePayments.current_page},{preserveScroll:!0,preserveState:!0})}}}),W={key:0,class:"flex flex-row"};function X(e,s,c,$,O,y){const p=i("Head"),h=i("ps-breadcrumb-2"),v=i("ps-banner-icon"),u=i("ps-icon"),f=i("ps-button"),w=i("ps-toggle"),d=i("ps-danger-dialog"),S=i("ps-table2"),k=i("ps-layout");return m(),H(D,null,[a(p,{title:e.$t("offline_payment_setting_module")},null,8,["title"]),a(k,null,{default:r(()=>[a(h,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(m(),b(v,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-4",iconColor:"white"},{default:r(()=>[C(F(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):_("",!0),a(S,{row:e.row,search:e.search,object:this.offlinePayments,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,globalSearchPlaceholder:e.$t("core__be_searches"),onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter,eye_filter:!1},{button:r(()=>[e.can.createItem?(m(),b(f,{key:0,onClick:s[0]||(s[0]=t=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:r(()=>[a(u,{name:"plus",class:"me-1 font-semibold"}),C(" "+F(e.$t("payment__add_offline_payment")),1)]),_:1})):_("",!0)]),responsive_button:r(()=>[e.can.createItem?(m(),b(f,{key:0,onClick:s[1]||(s[1]=t=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:r(()=>[a(u,{name:"plus",class:"me-1 font-semibold"}),C(" "+F(e.$t("payment__add_offline_payment")),1)]),_:1})):_("",!0)]),tableRow:r(t=>[t.field=="status"?(m(),b(w,{key:0,disabled:!t.row.authorizations.update,selectedValue:t.row.status==1,onClick:n=>e.handlePublish(t.row.core_keys_id,t.row.authorizations.update)},null,8,["disabled","selectedValue","onClick"])):_("",!0)]),tableActionRow:r(t=>[t.field=="action"?(m(),H("div",W,[a(f,{disabled:!t.row.authorizations.update,onClick:n=>e.handleEdit(t.row.id),class:"me-2",rounded:"rounded-lg",colors:"bg-green-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:r(()=>[a(u,{theme:"text-white dark:text-primary-900",name:"editPencil",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),a(f,{disabled:!t.row.authorizations.delete,onClick:n=>e.confirmDeleteClicked(t.row.id),rounded:"rounded-lg",colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:r(()=>[a(u,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),a(d,{ref:"ps_danger_dialog"},null,512)])):_("",!0)]),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","globalSearchPlaceholder","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","searchable"])]),_:1})],64)}var be=K(Q,[["render",X]]);export{be as default};