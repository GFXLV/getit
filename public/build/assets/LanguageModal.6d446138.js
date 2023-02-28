import{P as w,b as C}from"./PsModal.bee9bcb9.js";import{P as $}from"./PsLabel.22ffb702.js";import{P}from"./PsButton.e57c4d7d.js";import{P as M}from"./PsIcon.05949a2a.js";import{d as S,i as k,ab as B,r as g,o as N,f as L,w as o,a as t,b as a,p as s,t as n,aB as j}from"./app.17cd73cb.js";import{_ as T}from"./plugin-vue_export-helper.21dcd24c.js";const V=S({name:"LanguageModal",components:{PsModal:w,PsLabel:$,PsButton:P,PsToggle:C,PsIcon:M},setup(){const e=k(),r=k(""),m=B({data:{}});let b;function h(f,p){r.value=f;let y=j({key:r.value,symbol:localStorage.activeLanguage});b=p,axios.post(route("language.languageTable",y)).then(d=>{m.data=d.data,e.value.toggle(!0)}).catch(d=>{})}function x(){e.value.toggle(!1),b(r.value)}function l(){e.value.toggle(!1)}return{psmodal:e,openModal:h,closeModal:l,key:r,table:m,handleEdit:x}}}),A={class:"w-full flex flex-row justify-between"},D={class:"table-auto w-full mt-6"},E={class:"bg-primary-500 text-white dark:text-black text-2xl justify-content"},z={class:"bg-white divide-y divide-gray-200 dark:bg-secondaryDark-black dark:divide-white border-b border-t"},F={class:"hover:bg-gray-100 dark:hover:bg-gray-700"},H={class:"py-2 pl-4"},I=s(n(1)),O={class:"py-2 pl-4"},W={class:"py-2 pl-4"},q={class:"py-2 pl-4"},G={class:"py-2 pl-4"},J={class:"py-2 pl-4"},K=t("div",{class:"flex flex-row justify-end"},null,-1);function Q(e,r,m,b,h,x){const l=g("ps-label"),f=g("ps-icon"),p=g("ps-button"),y=g("ps-modal");return N(),L(y,{ref:"psmodal",maxWidth:"960px",bodyHeight:"max-h-full",line:"hidden",isClickOut:!1,theme:" px-6 py-6 rounded-lg shadow-xl",class:"z-50 h-56 bg-white"},{title:o(()=>[t("div",A,[a(l,{class:"text-lg font-semibold"},{default:o(()=>[s(n(e.$t("core__be_language_string_label")),1)]),_:1}),a(f,{onClick:r[0]||(r[0]=d=>e.closeModal()),name:"cross",class:"me-1 font-semibold",theme:"text-secondary-400"})])]),body:o(()=>[t("table",D,[t("thead",E,[t("tr",null,[t("th",null,[a(l,{textColor:"flex text-secondary-50 dark:text-secondary-900 font-semibold my-2 ms-3"},{default:o(()=>[s(n(e.$t("core__be_no_label")),1)]),_:1})]),t("th",null,[a(l,{textColor:"flex text-secondary-50 dark:text-secondary-900 font-semibold my-2 ms-3"},{default:o(()=>[s(n(e.$t("core__be_language_label")),1)]),_:1})]),t("th",null,[a(l,{textColor:"flex text-secondary-50 dark:text-secondary-900 font-semibold my-2 ms-3"},{default:o(()=>[s(n(e.$t("core__be_key_label")),1)]),_:1})]),t("th",null,[a(l,{textColor:"flex text-secondary-50 dark:text-secondary-900 font-semibold my-2 ms-3"},{default:o(()=>[s(n(e.$t("core__be_value_label")),1)]),_:1})]),t("th",null,[a(l,{textColor:"flex text-secondary-50 dark:text-secondary-900 font-semibold my-2 ms-3"},{default:o(()=>[s(n(e.$t("core__be_select_label")),1)]),_:1})]),t("th",null,[a(l,{textColor:"flex text-secondary-50 dark:text-secondary-900 font-semibold my-2 ms-3"},{default:o(()=>[s(n(e.$t("core__be_action_label")),1)]),_:1})])])]),t("tbody",z,[t("tr",F,[t("td",H,[a(l,null,{default:o(()=>[I]),_:1})]),t("td",O,[a(l,null,{default:o(()=>{var d,i,c,u,_,v;return[s(n((c=(i=(d=e.table.data)==null?void 0:d.languageString)==null?void 0:i.language)!=null&&c.name?(v=(_=(u=e.table.data)==null?void 0:u.languageString)==null?void 0:_.language)==null?void 0:v.name:"N.A"),1)]}),_:1})]),t("td",W,[a(l,null,{default:o(()=>[s(n(e.key),1)]),_:1})]),t("td",q,[a(l,null,{default:o(()=>{var d,i,c,u,_;return[s(n((c=(i=(d=e.table)==null?void 0:d.data)==null?void 0:i.languageString)!=null&&c.value?(_=(u=e.table.data)==null?void 0:u.languageString)==null?void 0:_.value:"N.A"),1)]}),_:1})]),t("td",G,[a(l,{textColor:"text-secondary-300"},{default:o(()=>[s(n(e.$t("core__be_btn_selected")),1)]),_:1})]),t("td",J,[a(p,{onClick:r[1]||(r[1]=d=>e.handleEdit()),class:"me-4",colors:"bg-green-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:o(()=>[a(f,{theme:"text-white dark:text-primary-900",name:"editPencil",w:"16",h:"16"})]),_:1})])])])])]),footer:o(()=>[K]),_:1},512)}var te=T(V,[["render",Q]]);export{te as default};
