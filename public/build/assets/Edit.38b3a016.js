import{az as $,aA as k,d as w,H as D,ac as i,r as d,o as m,c as I,b as s,w as o,a as t,p as a,t as r,f as p,g as u,F as T}from"./app.17cd73cb.js";import{b as B,P as F,a as H,f as L,d as V}from"./PsLayout.dfd88468.js";import S from"./CheckBox.0cd71903.js";import{P as E}from"./PsRadioValue.7f90f225.js";import{D as A}from"./DatePicker.55e143e0.js";import{P as N}from"./PsInput.1d284888.js";import{P as O}from"./PsLabel.22ffb702.js";import{P as z}from"./PsButton.e57c4d7d.js";import{P as M}from"./PsTextarea.a073ad3a.js";import{P as R}from"./PsLabelHeader5.5d183f9e.js";import{P as U}from"./PsBreadcrumb2.49a3f56a.js";import{P as j}from"./PsCard.ad8f8108.js";import{P as G}from"./PsLabelCaption.88f9aeab.js";import{P as q}from"./PsVideoUpload.78c651a5.js";import{P as J}from"./PsLabelTitle3.d3f1b34d.js";import{P as K}from"./PsIcon.05949a2a.js";import{P as Q}from"./PsBadge.b81aaf9e.js";import{h as W}from"./moment.9709ab41.js";import{P as X}from"./PsLoading.6ac4d83e.js";import{P as Y}from"./PsCheckboxValue.e5e75bc0.js";import{a as Z,P as ee}from"./PsActionModal.f014cce2.js";import{P as b}from"./PsImageUpload.30e55671.js";import{P as te}from"./PsTable2.559b3bb1.js";import{P as se}from"./PsDataTable.64bff3a2.js";import{_ as oe}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsModal.bee9bcb9.js";import"./PsInputWithRightIcon.1f31b4ee.js";import"./PsIcon1.1b6f6944.js";import"./PsDraggable.e6494ff8.js";import"./PsModal.8d00ec01.js";import"./PsLabelHeader4.58b3b4f9.js";import"./PsTableSearch.4ca5ffa6.js";import"./PsInputWithRightIcon.4c565b4c.js";const f=$(()=>k(()=>import("./GoogleMapPinPicker.58b9f2fc.js"),["assets/GoogleMapPinPicker.58b9f2fc.js","assets/index.0117fec4.js","assets/app.17cd73cb.js","assets/app.3d908103.css","assets/plugin-vue_export-helper.21dcd24c.js"])),ae=w({name:"Edit",components:{Head:D,CheckBox:S,DatePicker:A,PsInput:N,PsRadioValue:E,PsLabel:O,PsButton:z,PsTextarea:M,PsLabelHeader6:B,PsLabelHeader5:R,PsDropdown:F,PsDropdownSelect:H,PsCard:j,PsBreadcrumb2:U,PsLabelCaption:G,PsImageUpload:b,GoogleMapPinPicker:f,PsIcon:K,PsBadge:Q,PsLoading:X,PsCheckboxValue:Y,PsActionModal:Z,PsImageIconModal:ee,PsDangerDialog:L,PsImageUpload:b,GoogleMapPinPicker:f,PsVideoUpload:q,PsLabelTitle3:J,PsTable2:te,PsDataTable:se},layout:V,props:["errors","coreFieldFilterSettings","item","user_boughts","customizeHeaders","customizeDetails","itmItemType","itmPurchasedOption"],data(){return{moment:W}},setup(e){return{columns:[{label:i("core__be_buyer_name"),field:"added_user_id",relation:"buyer",relationField:"name",type:"String"},{label:i("core__be_buyer_email"),field:"added_user_id",relation:"buyer",relationField:"email",type:"String"},{label:i("core__be_buyer_phone"),field:"added_user_id",relation:"buyer",relationField:"user_phone",type:"String"},{label:i("core__be_offer_amount"),field:"offer_amount",type:"Integer"},{label:i("core__be_buy_date"),field:"added_date",type:"Date"}]}},computed:{breadcrumb(){return[{label:i("core__be_dashboard_label"),url:route("admin.index")},{label:i("sold_out_item_report_module"),url:route("sold_out_item_report.index")},{label:i("core__be_sold_out_item_report_detail"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("sold_out_item_report.index"))}}}),re={class:"rounded-xl"},le={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},de={class:"px-4 pt-6 dark:bg-backgroundDark"},ie={class:"grid grid-cols-1 md:grid-cols-2 gap-2 w-full"},_e={class:"grid gap-3"},ne={class:"grid grid-cols-3 mt-1"},me=t("span",{class:"me-2"}," :",-1),ce={class:"grid grid-cols-3 mt-1"},pe=t("span",{class:"me-2"}," :",-1),ue={class:"grid grid-cols-3 mt-1"},be=t("span",{class:"me-2"}," :",-1),fe={class:"grid grid-cols-3 mt-1"},ge=t("span",{class:"me-2"}," :",-1),he={class:"grid grid-cols-3 mt-1"},Pe=t("span",{class:"me-2"}," :",-1),ye={class:"grid gap-6"},xe={class:"grid grid-cols-3 mt-1"},ve=t("span",{class:"me-2"}," :",-1),Ce={class:"grid grid-cols-3 mt-1"},$e=t("span",{class:"me-2"}," :",-1),ke={class:"grid grid-cols-3 mt-1"},we=t("span",{class:"me-2"}," :",-1),De={class:"grid grid-cols-3 mt-1"},Ie=t("span",{class:"me-2"}," :",-1),Te={class:"grid grid-cols-3 mt-1"},Be=t("span",{class:"me-2"}," :",-1),Fe={class:"mb-2.5 flex flex-row justify-end mt-5"};function He(e,_,Le,Ve,Se,Ee){const g=d("Head"),h=d("ps-breadcrumb-2"),P=d("ps-label-header-5"),n=d("ps-label-header-6"),l=d("ps-label"),c=d("ps-badge"),y=d("ps-data-table"),x=d("ps-button"),v=d("ps-card"),C=d("ps-layout");return m(),I(T,null,[s(g,{title:e.$t("core__be_sold_out_item_report_detail")},null,8,["title"]),s(C,null,{default:o(()=>[s(h,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),s(v,{class:"w-full h-auto"},{default:o(()=>[t("div",re,[t("div",le,[s(P,null,{default:o(()=>[a(r(e.$t("core__be_sold_out_item_information")),1)]),_:1})]),t("div",de,[t("form",null,[t("div",ie,[t("div",_e,[t("div",null,[s(n,{class:"font-semibold",textColor:"text-secondary-800 dark:text-secondary-100"},{default:o(()=>[a(r(e.$t("core__be_seller_info_lbl")),1)]),_:1})]),t("div",null,[t("div",ne,[s(l,{class:"text-base",textColor:"text-secondary-500"},{default:o(()=>[a(r(e.$t("core__be_user_name")),1)]),_:1}),s(l,{class:"text-base col-span-2"},{default:o(()=>[me,a(r(e.item.owner.name),1)]),_:1})]),t("div",ce,[s(l,{class:"text-base",textColor:"text-secondary-500"},{default:o(()=>[a(r(e.$t("core__be_user_email")),1)]),_:1}),s(l,{class:"text-base col-span-2"},{default:o(()=>[pe,a(r(e.item.owner.email),1)]),_:1})]),t("div",ue,[s(l,{class:"text-base",textColor:"text-secondary-500"},{default:o(()=>[a(r(e.$t("core__be_user_contact_number")),1)]),_:1}),s(l,{class:"text-base col-span-2"},{default:o(()=>[be,a(r(e.item.owner.user_phone),1)]),_:1})]),t("div",fe,[s(l,{class:"text-base",textColor:"text-secondary-500"},{default:o(()=>[a(r(e.$t("core__be_user_address")),1)]),_:1}),s(l,{class:"text-base col-span-2"},{default:o(()=>[ge,a(r(e.item.owner.user_address),1)]),_:1})]),t("div",he,[s(l,{class:"text-base",textColor:"text-secondary-500"},{default:o(()=>[a(r(e.$t("core__be_user_registered_date")),1)]),_:1}),s(l,{class:"text-base col-span-2"},{default:o(()=>[Pe,a(r(e.moment(e.item.owner.added_date).format(e.$page.props.dateFormat)),1)]),_:1})])])]),t("div",ye,[t("div",null,[s(n,{class:"font-semibold mt-8 md:mt-0",textColor:"text-secondary-800 dark:text-secondary-100"},{default:o(()=>[a(r(e.$t("core__be_item_info_lbl")),1)]),_:1})]),t("div",null,[t("div",xe,[s(l,{class:"text-base",textColor:"text-secondary-500"},{default:o(()=>[a(r(e.$t("core__be_item_name")),1)]),_:1}),s(l,{class:"text-base col-span-2"},{default:o(()=>[ve,a(r(e.item.title),1)]),_:1})]),t("div",Ce,[s(l,{class:"text-base",textColor:"text-secondary-500"},{default:o(()=>[a(r(e.$t("core__be_item_category")),1)]),_:1}),s(l,{class:"text-base col-span-2"},{default:o(()=>[$e,a(r(e.item["category_id@@name"]),1)]),_:1})]),t("div",ke,[s(l,{class:"text-base",textColor:"text-secondary-500"},{default:o(()=>[a(r(e.$t("core__be_item_price_title")),1)]),_:1}),s(l,{class:"text-base col-span-2"},{default:o(()=>[we,a(r(e.item.price),1)]),_:1})]),t("div",De,[s(l,{class:"text-base",textColor:"text-secondary-500"},{default:o(()=>[a(r(e.$t("core__be_item_purchased_option")),1)]),_:1}),s(l,{class:"text-base col-span-2"},{default:o(()=>[Ie,e.item[e.itmPurchasedOption]?(m(),p(c,{key:0},{default:o(()=>[a(r(e.item[e.itmPurchasedOption+"@@name"]),1)]),_:1})):u("",!0)]),_:1})]),t("div",Te,[s(l,{class:"text-base",textColor:"text-secondary-500"},{default:o(()=>[a(r(e.$t("core__be_item_type")),1)]),_:1}),s(l,{class:"text-base col-span-2"},{default:o(()=>[Be,e.item[e.itmItemType]?(m(),p(c,{key:0,theme:"text-red-500 bg-red-100"},{default:o(()=>[a(r(e.item[e.itmItemType+"@@name"]),1)]),_:1})):u("",!0)]),_:1})])])])]),s(n,{class:"font-semibold mt-8 lg:mt-10"},{default:o(()=>[a(r(e.$t("core__be_buyer_details")),1)]),_:1}),s(y,{margin:"mt-4",rows:this.item.user_boughts,columns:e.columns,searchHide:!0},null,8,["rows","columns"]),t("div",Fe,[s(x,{type:"button",onClick:_[0]||(_[0]=Ae=>e.handleCancel())},{default:o(()=>[a(r(e.$t("core__be_btn_back")),1)]),_:1})])])])])]),_:1})]),_:1})],64)}var gt=oe(ae,[["render",He]]);export{gt as default};
