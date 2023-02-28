import{e as Z,f as x,P as ee,a as te,d as re}from"./PsLayout.dfd88468.js";import{d as oe,H as le,i as o,ac as d,C as ae,ag as N,r as c,o as n,c as h,b as s,w as l,a as b,p as u,t as p,f as H,g as v,F as V,q as E,n as U}from"./app.17cd73cb.js";import{P as se}from"./PsButton.e57c4d7d.js";import{P as ie}from"./PsBannerIcon.71d1b60f.js";import{P as ne}from"./PsBreadcrumb2.49a3f56a.js";import{P as de}from"./PsIcon.05949a2a.js";import{D as ce}from"./PsTableSearch.4ca5ffa6.js";import{P as ue}from"./PsIconButton.af329d7a.js";import{P as pe}from"./PsLabel.22ffb702.js";import{P as me}from"./PsLink1.148ec573.js";import{b as _e}from"./PsModal.bee9bcb9.js";import{P as fe}from"./PsTable2.559b3bb1.js";import{D as he}from"./DatePicker.55e143e0.js";import{P as be}from"./PsBadge.b81aaf9e.js";import{g as ge,f as ve}from"./psApiService.215afa15.js";import{_ as ye}from"./plugin-vue_export-helper.21dcd24c.js";import{P as we}from"./PsInputWithRightIcon.1f31b4ee.js";import"./PsIcon1.1b6f6944.js";import"./moment.9709ab41.js";const ke=oe({name:"Index",components:{Head:le,PsButton:se,PsTextButton:Z,PsBannerIcon:ie,PsBreadcrumb2:ne,PsDangerDialog:x,PsIcon:de,PsDropdown:ee,PsDropdownSelect:te,Dropdown:ce,PsIconButton:ue,PsLabel:pe,PsLink1:me,PsToggle:_e,PsTable2:fe,DatePicker:he,PsBadge:be,PsInputWithRightIcon:we},layout:re,props:{status:Object,items:Object,categories:Object,customizeHeaders:Object,customizeDetails:Object,hideShowFieldForFilterArr:Object,showCoreAndCustomFieldArr:Object,selectedCategory:{type:String,default:""},selectedPurchaseOption:{type:String,default:""},selectedDate:{type:String,default:""},authUser:Object,uis:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String,itmPurchasedOption:String,itmDealOption:String,itmConditionOfItem:String,itmItemType:String},setup(e){let i=o(!1);const A=e.selectedCategory||e.selectedPurchaseOption||e.selectedDate?o(!0):o(!1),z=o(!1),F=o(!0);let T=e.search?o(e.search):o(""),$=e.sort_field?o(e.sort_field):o(""),I=e.sort_order?o(e.sort_order):o("desc"),m=e.selectedCategory?o(e.selectedCategory.id):o(""),k=e.selectedPurchaseOption?o(e.selectedPurchaseOption.id):o(""),C=e.selectedDate?o(e.selectedDate):o(""),y=o([]),f=o(!1),P=o(),g=o(!1),S=o([]),O=o(!1),B=o();const R=o(),t=[{label:d("core__be_item_name"),field:"title",type:"String"},{label:d("core__be_seller_name"),field:"added_user_id@@name",type:"String",sort:!1},{label:d("core__be_email"),field:"added_user_id@@email",type:"String",sort:!1},{label:d("core__be_categories"),field:"category_id@@name",type:"String"},{label:d("core__be_item_price_title"),field:"price",type:"String"},{label:d("core__be_total_offer"),field:"total_offer",type:"String",sort:!1},{label:d("core__be_purchased_option"),field:e.itmPurchasedOption+"@@name",type:"String"},{label:d("core__be_item_type"),field:e.itmItemType+"@@name",type:"String"},{label:d("core__be_deal_option"),field:e.itmDealOption+"@@name",type:"String",action:"Action"},{label:d("core__be_sold_out_date"),field:"added_date",type:"Timestamp"},{label:d("detail_label"),field:"detail",type:"Action",sort:!1}];function j(r){$.value=r.field,I.value=r.sort_order,w()}function q(){m.value="all",k.value="all",C.value="",w(),F.value=!1,setTimeout(()=>{F.value=!0},100)}function W(r){m.value=r,w(1)}function G(r){C.value=r,w(1)}function J(r){k.value=r,w(1)}function K(r){T.value=r,w(1)}function M(r){w(1,r)}function w(r=null,a=null){N.Inertia.get(route("sold_out_item_report.index"),{sort_field:$.value,sort_order:I.value,page:r!=null?r:e.items.meta.current_page,row:a!=null?a:e.items.meta.per_page,search:T.value,category_filter:m.value,purchase_option_filter:k.value,date_filter:C.value},{preserveScroll:!0,preserveState:!0})}function L(r){f.value=!0,g.value=!0,ge(r,P.value,e.authUser.id).then(a=>{a.data.length?a.data.forEach(D=>{y.value.push(D)}):f.value=!1,g.value=!1})}function Q(r=null){let a=y.value?y.value.length:0;(a==0||r==!0)&&L(a)}ae(P,_.debounce((r,a)=>{let D=0;y.value=[],L(D)},500));function X(r){O.value=!0,g.value=!0,ve(r,e.authUser.id).then(a=>{a.data.length?a.data.forEach(D=>{S.value.push(D)}):O.value=!1,g.value=!1}).catch(function(a){a&&(g.value=!1,O.value=!1)})}function Y(r=null){let a=S.value?S.value.length:0;(a==0||r==!0)&&X(a)}return{reRenderDate:F,showFilter:A,clearFilter:z,columns:t,colFilterOptions:R,visible:i,handleSorting:j,handleSearchingSorting:w,handleCategoryfilter:W,handlePurchaseOptionFilter:J,handleDateFilter:G,handleClearFilter:q,handleRow:M,handleSearching:K,selected_cat:m,selected_purchase_option:k,selected_date:C,is_loading:g,dropdownClick:Q,categories:y,category_loadmore_visible:f,catSearch:P,purchaseOptions:S,purchaseOptions_loadmore_visible:O,purchaseOptionsSearch:B,purchaseOptionDropdownClick:Y}},created(){},methods:{handleDetail(e){this.$inertia.get(route("sold_out_item_report.show",e))},FilterOptionshandle(e){N.Inertia.put(route("sold_out_item_report.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.items.per_page,search:this.search.value,current_page:this.items.current_page},{preserveScroll:!0,preserveState:!0})}},computed:{breadcrumb(){return[{label:d("core__be_dashboard_label"),url:route("admin.index")},{label:d("sold_out_item_report_module"),color:"text-primary-500"}]}}}),Oe=["href"],Ce={class:"rounded-md shadow-xs w-56"},Se={class:"pt-2 z-30"},Pe=["onClick"],De={class:"flex flex-row items-center justify-between"},Fe={class:"mt-1 mx-1"},$e={class:"rounded-md shadow-xs w-56"},Ie={class:"pt-2 z-30"},je=["onClick"],He={class:"flex flex-row items-center justify-between"},Te={key:0},Be={key:1},Re={key:2,class:"flex flex-row"};function Ve(e,i,A,z,F,T){const $=c("Head"),I=c("ps-breadcrumb-2"),m=c("ps-icon"),k=c("ps-text-button"),C=c("ps-icon-button"),y=c("ps-dropdown-select"),f=c("ps-label"),P=c("ps-input-with-right-icon"),g=c("ps-dropdown"),S=c("date-picker"),O=c("ps-badge"),B=c("ps-table2"),R=c("ps-layout");return n(),h(V,null,[s($,{title:e.$t("sold_out_item_report_module")},null,8,["title"]),s(R,null,{default:l(()=>[s(I,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),s(B,{":row":e.row,search:e.search,object:this.items,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,globalSearchPlaceholder:e.$t("core__be_search_item"),onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter,eye_filter:!1},{searchLeft:l(()=>[b("a",{href:e.route("sold_out_item_report.csv.export"),class:"font-medium transition duration-150 ease-in-out px-2 py-1.75 ms-1 rounded text-primary-500 border border-primary-500 hover:outline-none hover:ring hover:ring-blue-100 focus:outline-none focus:ring focus:ring-blue-300 opacity-100 flex items-center"},[s(m,{name:"fileUpload",class:"mx-0.5 font-semibold"}),u(p(e.$t("core__be_export_btn")),1)],8,Oe)]),searchRight:l(()=>[e.showFilter?(n(),H(k,{key:0,onClick:i[0]||(i[0]=t=>e.handleClearFilter()),class:"flex text-sm items-center text-red-400",padding:"py-1 px-4"},{default:l(()=>[s(m,{name:"cross",class:"me-3"}),u(" "+p(e.$t("core__be_clear_filter")),1)]),_:1})):v("",!0),s(C,{colors:e.showFilter?"bg-primary-500 text-white dark:text-secondary-800":"",focus:"",padding:"py-1 px-4",hover:"hover:bg-primary-500 hover:text-white",border:e.showFilter?"border border-primary-500":" border border-secondary-200",leftIcon:"filter",onClick:i[1]||(i[1]=t=>e.showFilter=!e.showFilter)},{default:l(()=>[u(p(e.$t("core__be_filter")),1)]),_:1},8,["colors","border"])]),Filter:l(()=>[s(g,{onOnClick:e.dropdownClick,align:"",class:"h-10"},{select:l(()=>[s(y,{placeholder:e.$t("core__be_category"),border:e.selected_cat!==""&&e.selected_cat!=="all"?"border border-indigo-500/100":"border border-1 border-secondary-200",selectedValue:e.selected_cat==""||e.selected_cat=="all"?"":e.selectedCategory.name},null,8,["placeholder","border","selectedValue"])]),list:l(()=>[b("div",Ce,[b("div",Se,[b("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:i[2]||(i[2]=t=>e.handleCategoryfilter("all"))},[s(f,{class:"text-gray-200 ms-2"},{default:l(()=>[u(p(e.$t("core__be_select_all")),1)]),_:1})]),(n(!0),h(V,null,E(e.categories,t=>(n(),h("div",{key:t.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:j=>e.handleCategoryfilter(t.id)},[s(f,{class:U(["ms-2",t.id==e.selected_cat?" font-bold":""])},{default:l(()=>[u(p(t.name),1)]),_:2},1032,["class"])],8,Pe))),128))])])]),loadmore:l(()=>[e.category_loadmore_visible?(n(),h("div",{key:0,onClick:i[3]||(i[3]=t=>e.dropdownClick(!0)),class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[b("div",De,[s(f,{class:"ms-2"},{default:l(()=>[u(p(e.is_loading?e.$t("core__be_loading"):e.$t("core__be_load_more")),1)]),_:1}),s(m,{theme:"text-black dark:text-primary-900",name:"load",w:"16",h:"16"})])])):v("",!0)]),filter:l(()=>[b("div",Fe,[s(P,{class:"w-full h-10",theme:"bg-gray-100",rounded:"rounded-lg",value:e.catSearch,"onUpdate:value":i[4]||(i[4]=t=>e.catSearch=t),placeholder:e.$t("core__be_search")},{icon:l(()=>[s(m,{name:"search",class:"cursor-pointer"})]),_:1},8,["value","placeholder"])])]),_:1},8,["onOnClick"]),s(g,{onOnClick:e.purchaseOptionDropdownClick,align:"",class:"h-10"},{select:l(()=>[s(y,{placeholder:e.$t("core__be_purchased_option"),border:e.selected_purchase_option!==""&&e.selected_purchase_option!=="all"?"border border-indigo-500/100":"border border-1 border-secondary-200",selectedValue:e.selected_purchase_option==""||e.selected_purchase_option=="all"?"":e.selectedPurchaseOption.name},null,8,["placeholder","border","selectedValue"])]),list:l(()=>[b("div",$e,[b("div",Ie,[b("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:i[5]||(i[5]=t=>e.handlePurchaseOptionFilter("all"))},[s(f,{class:"text-gray-200 ms-2"},{default:l(()=>[u(p(e.$t("core__be_select_all")),1)]),_:1})]),(n(!0),h(V,null,E(e.purchaseOptions,t=>(n(),h("div",{key:t.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:j=>e.handlePurchaseOptionFilter(t.id)},[s(f,{class:U(["ms-2",t.id==e.selected_purchase_option?" font-bold":""])},{default:l(()=>[u(p(t.name),1)]),_:2},1032,["class"])],8,je))),128))])])]),loadmore:l(()=>[e.purchaseOptions_loadmore_visible?(n(),h("div",{key:0,onClick:i[6]||(i[6]=t=>e.purchaseOptionDropdownClick(!0)),class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[b("div",He,[s(f,{class:"ms-2"},{default:l(()=>[u(p(e.is_loading?e.$t("core__be_loading"):e.$t("core__be_load_more")),1)]),_:1}),s(m,{theme:"text-black dark:text-primary-900",name:"load",w:"16",h:"16"})])])):v("",!0)]),_:1},8,["onOnClick"]),e.reRenderDate?(n(),H(S,{key:0,onDatepick:e.handleDateFilter,class:U(["rounded shadow-sm pt-0.5 focus:outline-none focus:ring-1 focus:ring-primary-500",(e.selected_date==null||e.selected_date=="","w-full")]),value:e.selected_date,"onUpdate:value":i[7]||(i[7]=t=>e.selected_date=t),range:!0,inline:!1,autoApply:!1},null,8,["onDatepick","class","value"])):v("",!0)]),tableRow:l(t=>[t.field==e.itmPurchasedOption+"@@name"?(n(),h("span",Te,[t.row[e.itmPurchasedOption+"@@name"]?(n(),H(O,{key:0,class:""},{default:l(()=>[u(p(t.row[e.itmPurchasedOption+"@@name"]),1)]),_:2},1024)):v("",!0)])):v("",!0),t.field==e.itmItemType+"@@name"?(n(),h("span",Be,[t.row[e.itmItemType+"@@name"]?(n(),H(O,{key:0,theme:"text-red-500 bg-red-100",class:""},{default:l(()=>[u(p(t.row[e.itmItemType+"@@name"]),1)]),_:2},1024)):v("",!0)])):v("",!0),t.field=="detail"?(n(),h("div",Re,[s(k,{onClick:j=>e.handleDetail(t.row.id)},{default:l(()=>[u(p(e.$t("core__be_btn_detail")),1)]),_:2},1032,["onClick"])])):v("",!0)]),_:1},8,[":row","search","object","colFilterOptions","columns","sort_field","sort_order","globalSearchPlaceholder","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","searchable"])]),_:1})],64)}var rt=ye(ke,[["render",Ve]]);export{rt as default};
