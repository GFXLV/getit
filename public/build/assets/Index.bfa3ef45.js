import{e as _e,f as fe,P as he,a as be,d as ge}from"./PsLayout.dfd88468.js";import{d as ve,H as ye,i as a,ac as p,C as ke,ag as q,r as b,o as n,c as f,b as i,w as o,f as T,p as d,t as c,g,a as m,F as A,q as N,n as V}from"./app.17cd73cb.js";import{P as we}from"./PsButton.e57c4d7d.js";import{P as Oe}from"./PsBannerIcon.71d1b60f.js";import{P as Ce}from"./PsBreadcrumb2.49a3f56a.js";import{P as De}from"./PsIcon.05949a2a.js";import{D as $e}from"./PsTableSearch.4ca5ffa6.js";import{P as Se}from"./PsIconButton.af329d7a.js";import{P as Fe}from"./PsLabel.22ffb702.js";import{P as Ie}from"./PsLink1.148ec573.js";import{b as Pe}from"./PsModal.bee9bcb9.js";import{P as Te}from"./PsTable2.559b3bb1.js";import{P as je}from"./PsBadge.b81aaf9e.js";import{D as Ae}from"./DatePicker.55e143e0.js";import{g as Ve,f as He,h as Be,i as Re}from"./psApiService.215afa15.js";import{_ as Ue}from"./plugin-vue_export-helper.21dcd24c.js";import{P as ze}from"./PsInputWithRightIcon.1f31b4ee.js";import"./PsIcon1.1b6f6944.js";import"./moment.9709ab41.js";const Ee=ve({name:"Index",components:{Head:ye,PsButton:we,PsTextButton:_e,PsBannerIcon:Oe,PsBreadcrumb2:Ce,PsDangerDialog:fe,PsIcon:De,PsDropdown:he,PsDropdownSelect:be,Dropdown:$e,PsIconButton:Se,PsLabel:Fe,PsLink1:Ie,PsToggle:Pe,PsTable2:Te,PsBadge:je,DatePicker:Ae,PsInputWithRightIcon:ze},layout:ge,props:{status:Object,items:Object,categories:Object,subcategories:Object,customizeHeaders:Object,customizeDetails:Object,cities:Object,townships:Object,hideShowFieldForFilterArr:Object,showCoreAndCustomFieldArr:Object,selectedCategory:{type:String,default:""},selectedDealOption:{type:String,default:""},selectedPurchaseOption:{type:String,default:""},selectedItemType:{type:String,default:""},selectedDate:{type:String,default:""},authUser:Object,uis:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String,itmPurchasedOption:String,itmDealOption:String,itmConditionOfItem:String,itmItemType:String},data(){return{location_city:"",category:""}},setup(e){const s=e.selectedCategory||e.selectedDate||e.selectedDealOption||e.selectedPurchasedOption||e.selectedItemType?a(!0):a(!1),M=a(!1);let S=a(!1);const H=a(!0);let B=e.search?a(e.search):a(""),R=e.sort_field?a(e.sort_field):a(""),U=e.sort_order?a(e.sort_order):a("desc"),F=e.selectedCategory?a(e.selectedCategory.id):a(""),v=e.selectedDealOption?a(e.selectedDealOption.id):a(""),$=e.selectedPurchaseOption?a(e.selectedPurchaseOption.id):a(""),I=e.selectedItemType?a(e.selectedItemType.id):a(""),k=e.selectedDate?a(e.selectedDate):a(""),u=a([]),j=a(!1),C=a(),h=a(!1),D=a([]),P=a(!1),L=a(),t=a([]),w=a(!1),J=a(),z=a([]),E=a(!1),K=a();const Q=a(),X=[{label:p("core__be_seller_name"),field:"added_user_id@@name",type:"Integer",action:"Action"},{label:p("core__be_items"),field:"title",type:"String",action:"Action"},{label:p("core__be_item_categories"),field:"category_id@@name",type:"Integer",action:"Action"},{label:p("core__be_item_subcategories"),field:"subcategory_id@@name",type:"Integer",action:"Action"},{label:p("core__be_item_price"),field:"price",type:"Integer",action:"Action"},{label:p("core__be_purchased_option"),field:e.itmPurchasedOption+"@@name",type:"String"},{label:p("core__be_item_type"),field:e.itmItemType+"@@name",type:"String"},{label:p("core__be_deal_option"),field:e.itmDealOption+"@@name",type:"String",action:"Action"},{label:p("core__be_engagement"),field:"item_touch_count",type:"Integer",action:"Action"},{label:p("core__be_post_date"),field:"added_date",type:"Timestamp",action:"Action"},{label:p("core__be_detail_label"),field:"detail",type:"Action",sort:!1}],W=a();function Y(r){W.value.openModal(p("core__be_delete_item"),p("core__be_delete_item_info"),p("core__be_btn_confirm"),p("core__be_btn_cancel"),()=>{q.Inertia.delete(route("slow_moving_item_report.destroy",r),{onSuccess:()=>{S.value=!0,setTimeout(()=>{S.value=!1},3e3)},onError:()=>{S.value=!0,setTimeout(()=>{S.value=!1},3e3)}})},()=>{})}function Z(r){R.value=r.field,U.value=r.sort_order,y()}function x(){F.value="all",I.value="all",v.value="all",$.value="all",k.value="",B="",y(),H.value=!1,setTimeout(()=>{H.value=!0},100)}function ee(r){F.value=r,y(1)}function te(r){k.value=r,y(1)}function le(r){v.value=r,y(1)}function re(r){$.value=r,y(1)}function oe(r){I.value=r,y(1)}function ae(r){B.value=r,y(1)}function ie(r){y(1,r)}function y(r=null,l=null){q.Inertia.get(route("slow_moving_item_report.index"),{sort_field:R.value,sort_order:U.value,page:r!=null?r:e.items.meta.current_page,row:l!=null?l:e.items.meta.per_page,search:B.value,category_filter:F.value,deal_option_filter:v.value,item_type_filter:I.value,purchase_option_filter:$.value,date_filter:k.value},{preserveScroll:!0,preserveState:!0})}function G(r){j.value=!0,h.value=!0,Ve(r,C.value,e.authUser.id).then(l=>{l.data.length?l.data.forEach(O=>{u.value.push(O)}):j.value=!1,h.value=!1})}function se(r=null){let l=u.value?u.value.length:0;(l==0||r==!0)&&G(l)}ke(C,_.debounce((r,l)=>{let O=0;u.value=[],G(O)},500));function ne(r){P.value=!0,h.value=!0,He(r,e.authUser.id).then(l=>{l.data.length?l.data.forEach(O=>{D.value.push(O)}):P.value=!1,h.value=!1}).catch(function(l){l&&(h.value=!1,P.value=!1)})}function de(r=null){let l=D.value?D.value.length:0;(l==0||r==!0)&&ne(l)}function ce(r){w.value=!0,h.value=!0,Be(r,e.authUser.id).then(l=>{l.data.length?l.data.forEach(O=>{t.value.push(O)}):w.value=!1,h.value=!1}).catch(function(l){l&&(h.value=!1,w.value=!1)})}function ue(r=null){let l=t.value?t.value.length:0;(l==0||r==!0)&&ce(l)}function me(r){E.value=!0,h.value=!0,Re(r,e.authUser.id).then(l=>{l.data.length?l.data.forEach(O=>{z.value.push(O)}):E.value=!1,h.value=!1}).catch(function(l){l&&(h.value=!1,E.value=!1)})}function pe(r=null){let l=z.value?z.value.length:0;(l==0||r==!0)&&me(l)}return{reRenderDate:H,showFilter:s,clearFilter:M,columns:X,confirmDeleteClicked:Y,ps_danger_dialog:W,colFilterOptions:Q,visible:S,handleSorting:Z,handleSearchingSorting:y,handleCategoryfilter:ee,handleDealOptionFilter:le,handlePurchaseOptionFilter:re,handleItemTypeFilter:oe,handleDateFilter:te,handleClearFilter:x,handleRow:ie,handleSearching:ae,selected_cat:F,selected_deal_option:v,selected_item_type:I,selected_purchase_option:$,selected_date:k,is_loading:h,dropdownClick:se,categories:u,category_loadmore_visible:j,catSearch:C,purchaseOptions:D,purchaseOptions_loadmore_visible:P,purchaseOptionsSearch:L,purchaseOptionDropdownClick:de,dealOptions:t,dealOptions_loadmore_visible:w,dealOptionsSearch:J,dealOptionDropdownClick:ue,itemTypeOptions:z,itemTypeOptions_loadmore_visible:E,itemTypeOptionsSearch:K,itemTypeOptionDropdownClick:pe}},computed:{breadcrumb(){return[{label:p("core__be_dashboard_label"),url:route("admin.index")},{label:p("slow_moving_item_report_module"),color:"text-primary-500"}]}},created(){},methods:{handleDetail(e){this.$inertia.get(route("slow_moving_item_report.show",e))},FilterOptionshandle(e){q.Inertia.put(route("slow_moving_item_report.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.items.per_page,search:this.search.value,current_page:this.items.current_page},{preserveScroll:!0,preserveState:!0})}}}),Ne=["href"],Le={class:"rounded-md shadow-xs w-56"},qe={class:"pt-2 z-30"},Me=["onClick"],We={class:"flex flex-row items-center justify-between"},Ge={class:"mt-1 mx-1"},Je={class:"rounded-md shadow-xs w-56"},Ke={class:"pt-2 z-30"},Qe=["onClick"],Xe={class:"flex flex-row items-center justify-between"},Ye={class:"rounded-md shadow-xs w-56"},Ze={class:"pt-2 z-30"},xe=["onClick"],et={class:"flex flex-row items-center justify-between"},tt={class:"rounded-md shadow-xs w-56"},lt={class:"pt-2 z-30"},rt=["onClick"],ot={class:"flex flex-row items-center justify-between"},at={key:0},it={key:1},st={key:2},nt={key:3,class:"flex flex-row mb-2"};function dt(e,s,M,S,H,B){const R=b("Head"),U=b("ps-breadcrumb-2"),F=b("ps-banner-icon"),v=b("ps-icon"),$=b("ps-text-button"),I=b("ps-icon-button"),k=b("ps-dropdown-select"),u=b("ps-label"),j=b("ps-input-with-right-icon"),C=b("ps-dropdown"),h=b("date-picker"),D=b("ps-badge"),P=b("ps-table2"),L=b("ps-layout");return n(),f(A,null,[i(R,{title:e.$t("slow_moving_item_report_module")},null,8,["title"]),i(L,null,{default:o(()=>[i(U,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(n(),T(F,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:o(()=>[d(c(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):g("",!0),i(P,{row:e.row,search:e.search,object:this.items,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,globalSearchPlaceholder:e.$t("core__be_search_item"),onHandleRow:e.handleRow,searchable:e.showFilter,eye_filter:!1},{searchLeft:o(()=>[m("a",{href:e.route("slow_moving_item_report.csv.export"),class:"font-medium transition duration-150 ease-in-out px-2 py-1.75 ms-1 rounded text-primary-500 border border-primary-500 hover:outline-none hover:ring hover:ring-blue-100 focus:outline-none focus:ring focus:ring-blue-300 opacity-100 flex items-center"},[i(v,{name:"fileUpload",class:"mx-0.5 font-semibold"}),d(c(e.$t("core__be_export_btn")),1)],8,Ne)]),searchRight:o(()=>[e.showFilter?(n(),T($,{key:0,onClick:s[0]||(s[0]=t=>e.handleClearFilter()),class:"flex text-sm items-center text-red-400 dark:text-red-400",padding:"py-1 px-4"},{default:o(()=>[i(v,{theme:"dark:text-red-400",name:"cross",class:"me-3"}),d(" "+c(e.$t("core__be_clear_filter")),1)]),_:1})):g("",!0),i(I,{colors:e.showFilter?"bg-primary-500 text-white dark:text-secondary-800":"",focus:"",padding:"py-1 px-4",hover:"hover:bg-primary-500 hover:text-white",border:e.showFilter?"border border-primary-500":" border border-secondary-200",leftIcon:"filter",onClick:s[1]||(s[1]=t=>e.showFilter=!e.showFilter)},{default:o(()=>[d(c(e.$t("core__be_filter")),1)]),_:1},8,["colors","border"])]),Filter:o(()=>[i(C,{onOnClick:e.dropdownClick,align:"",class:"h-10"},{select:o(()=>[i(k,{placeholder:e.$t("core__be_category"),border:e.selected_cat!==""&&e.selected_cat!=="all"?"border border-indigo-500/100":"border border-1 border-secondary-200",selectedValue:e.selected_cat==""||e.selected_cat=="all"?"":e.selectedCategory.name},null,8,["placeholder","border","selectedValue"])]),list:o(()=>[m("div",Le,[m("div",qe,[m("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:s[2]||(s[2]=t=>e.handleCategoryfilter("all"))},[i(u,{class:"text-gray-200 ms-2"},{default:o(()=>[d(c(e.$t("core__be_select_all")),1)]),_:1})]),(n(!0),f(A,null,N(e.categories,t=>(n(),f("div",{key:t.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:w=>e.handleCategoryfilter(t.id)},[i(u,{class:V(["ms-2",t.id==e.selected_cat?" font-bold":""])},{default:o(()=>[d(c(t.name),1)]),_:2},1032,["class"])],8,Me))),128))])])]),loadmore:o(()=>[e.category_loadmore_visible?(n(),f("div",{key:0,onClick:s[3]||(s[3]=t=>e.dropdownClick(!0)),class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[m("div",We,[i(u,{class:"ms-2"},{default:o(()=>[d(c(e.is_loading?e.$t("core__be_loading"):e.$t("core__be_load_more")),1)]),_:1}),i(v,{theme:"text-black dark:text-primary-900",name:"load",w:"16",h:"16"})])])):g("",!0)]),filter:o(()=>[m("div",Ge,[i(j,{class:"w-full h-10",theme:"bg-gray-100",rounded:"rounded-lg",value:e.catSearch,"onUpdate:value":s[4]||(s[4]=t=>e.catSearch=t),placeholder:e.$t("core__be_search")},{icon:o(()=>[i(v,{name:"search",class:"cursor-pointer"})]),_:1},8,["value","placeholder"])])]),_:1},8,["onOnClick"]),i(C,{onOnClick:e.itemTypeOptionDropdownClick,align:"",class:"h-10"},{select:o(()=>[i(k,{placeholder:e.$t("core__be_item_type"),border:e.selected_item_type!==""&&e.selected_item_type!=="all"?"border border-indigo-500/100":"border border-1 border-secondary-200",selectedValue:e.selected_item_type==""||e.selected_item_type=="all"?"":e.selectedItemType.name},null,8,["placeholder","border","selectedValue"])]),list:o(()=>[m("div",Je,[m("div",Ke,[m("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:s[5]||(s[5]=t=>e.handleItemTypeFilter("all"))},[i(u,{class:"text-gray-200 ms-2"},{default:o(()=>[d(c(e.$t("core__be_select_all")),1)]),_:1})]),(n(!0),f(A,null,N(e.itemTypeOptions,t=>(n(),f("div",{key:t.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:w=>e.handleItemTypeFilter(t.id)},[i(u,{class:V(["ms-2",t.id==e.selected_item_type?" font-bold":""])},{default:o(()=>[d(c(t.name),1)]),_:2},1032,["class"])],8,Qe))),128))])])]),loadmore:o(()=>[e.itemTypeOptions_loadmore_visible?(n(),f("div",{key:0,onClick:s[6]||(s[6]=t=>e.itemTypeOptionDropdownClick(!0)),class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[m("div",Xe,[i(u,{class:"ms-2"},{default:o(()=>[d(c(e.is_loading?e.$t("core__be_loading"):e.$t("core__be_load_more")),1)]),_:1}),i(v,{theme:"text-black dark:text-primary-900",name:"load",w:"16",h:"16"})])])):g("",!0)]),_:1},8,["onOnClick"]),i(C,{onOnClick:e.purchaseOptionDropdownClick,align:"",class:"h-10"},{select:o(()=>[i(k,{placeholder:e.$t("core__be_purchased_option"),border:e.selected_purchase_option!==""&&e.selected_purchase_option!=="all"?"border border-indigo-500/100":"border border-1 border-secondary-200",selectedValue:e.selected_purchase_option==""||e.selected_purchase_option=="all"?"":e.selectedPurchaseOption.name},null,8,["placeholder","border","selectedValue"])]),list:o(()=>[m("div",Ye,[m("div",Ze,[m("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:s[7]||(s[7]=t=>e.handlePurchaseOptionFilter("all"))},[i(u,{class:"text-gray-200 ms-2"},{default:o(()=>[d(c(e.$t("core__be_select_all")),1)]),_:1})]),(n(!0),f(A,null,N(e.purchaseOptions,t=>(n(),f("div",{key:t.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:w=>e.handlePurchaseOptionFilter(t.id)},[i(u,{class:V(["ms-2",t.id==e.selected_purchase_option?" font-bold":""])},{default:o(()=>[d(c(t.name),1)]),_:2},1032,["class"])],8,xe))),128))])])]),loadmore:o(()=>[e.purchaseOptions_loadmore_visible?(n(),f("div",{key:0,onClick:s[8]||(s[8]=t=>e.purchaseOptionDropdownClick(!0)),class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[m("div",et,[i(u,{class:"ms-2"},{default:o(()=>[d(c(e.is_loading?e.$t("core__be_loading"):e.$t("core__be_load_more")),1)]),_:1}),i(v,{theme:"text-black dark:text-primary-900",name:"load",w:"16",h:"16"})])])):g("",!0)]),_:1},8,["onOnClick"]),i(C,{onOnClick:e.dealOptionDropdownClick,align:"",class:"h-10"},{select:o(()=>[i(k,{placeholder:e.$t("core__be_deal_option"),border:e.selected_deal_option!==""&&e.selected_deal_option!=="all"?"border border-indigo-500/100":"border border-1 border-secondary-200",selectedValue:e.selected_deal_option==""||e.selected_deal_option=="all"?"":e.selectedDealOption.name},null,8,["placeholder","border","selectedValue"])]),list:o(()=>[m("div",tt,[m("div",lt,[m("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:s[9]||(s[9]=t=>e.handleDealOptionFilter("all"))},[i(u,{class:"text-gray-200 ms-2"},{default:o(()=>[d(c(e.$t("core__be_select_all")),1)]),_:1})]),(n(!0),f(A,null,N(e.dealOptions,t=>(n(),f("div",{key:t.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:w=>e.handleDealOptionFilter(t.id)},[i(u,{class:V(["ms-2",t.id==e.selected_purchase_option?" font-bold":""])},{default:o(()=>[d(c(t.name),1)]),_:2},1032,["class"])],8,rt))),128))])])]),loadmore:o(()=>[e.dealOptions_loadmore_visible?(n(),f("div",{key:0,onClick:s[10]||(s[10]=t=>e.dealOptionDropdownClick(!0)),class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[m("div",ot,[i(u,{class:"ms-2"},{default:o(()=>[d(c(e.is_loading?e.$t("core__be_loading"):e.$t("core__be_load_more")),1)]),_:1}),i(v,{theme:"text-black dark:text-primary-900",name:"load",w:"16",h:"16"})])])):g("",!0)]),_:1},8,["onOnClick"]),e.reRenderDate?(n(),T(h,{key:0,placeholder:e.$t("core__be_post_date"),onDatepick:e.handleDateFilter,class:V(["rounded shadow-sm pt-0.5 focus:outline-none focus:ring-1 focus:ring-primary-500",(e.selected_date==null||e.selected_date=="","w-full")]),value:e.selected_date,"onUpdate:value":s[11]||(s[11]=t=>e.selected_date=t),range:!0,inline:!1,autoApply:!1},null,8,["placeholder","onDatepick","class","value"])):g("",!0)]),tableRow:o(t=>[t.field==e.itmPurchasedOption+"@@name"?(n(),f("span",at,[t.row[e.itmPurchasedOption+"@@name"]?(n(),T(D,{key:0,class:"m-2"},{default:o(()=>[d(c(t.row[e.itmPurchasedOption+"@@name"]),1)]),_:2},1024)):g("",!0)])):g("",!0),t.field==e.itmItemType+"@@name"?(n(),f("span",it,[t.row[e.itmItemType+"@@name"]?(n(),T(D,{key:0,theme:"text-red-500 bg-red-100",class:"m-2"},{default:o(()=>[d(c(t.row[e.itmItemType+"@@name"]),1)]),_:2},1024)):g("",!0)])):g("",!0),t.field==e.itmConditionOfItem+"@@name"?(n(),f("span",st,[t.row[e.itmConditionOfItem+"@@name"]?(n(),T(D,{key:0,theme:"text-red-500 bg-red-100",class:"m-2"},{default:o(()=>[d(c(t.row[e.itmConditionOfItem+"@@name"]),1)]),_:2},1024)):g("",!0)])):g("",!0),t.field=="detail"?(n(),f("div",nt,[i($,{onClick:w=>e.handleDetail(t.row.id)},{default:o(()=>[d(c(e.$t("core__be_btn_detail")),1)]),_:2},1032,["onClick"])])):g("",!0)]),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","globalSearchPlaceholder","onHandleRow","searchable"])]),_:1})],64)}var It=Ue(Ee,[["render",dt]]);export{It as default};
