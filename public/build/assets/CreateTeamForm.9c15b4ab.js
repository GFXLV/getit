import{J as _}from"./Button.bf454095.js";import{J as f}from"./FormSection.98aadf28.js";import{J as h}from"./Input.8ac2e531.js";import{J as g}from"./InputError.739f64cd.js";import{J as b}from"./Label.9bfe4a02.js";import{_ as j}from"./plugin-vue_export-helper.21dcd24c.js";import{d as v,r as t,o as J,f as $,w as s,a as o,b as a,t as l,n as T,p as r}from"./app.17cd73cb.js";import"./SectionTitle.786d2fe4.js";const w=v({components:{JetButton:_,JetFormSection:f,JetInput:h,JetInputError:g,JetLabel:b},data(){return{form:this.$inertia.form({name:""})}},methods:{createTeam(){this.form.post(route("teams.store"),{errorBag:"createTeam",preserveScroll:!0})}}}),C=r(" Team Details "),V=r(" Create a new team to collaborate with others on projects. "),B={class:"col-span-6"},S={class:"flex items-center mt-2"},y=["src","alt"],N={class:"ml-4 leading-tight"},k={class:"text-sm text-gray-700"},D={class:"col-span-6 sm:col-span-4"},F=r(" Create ");function I(e,n,z,E,L,O){const m=t("jet-label"),i=t("jet-input"),p=t("jet-input-error"),c=t("jet-button"),d=t("jet-form-section");return J(),$(d,{onSubmitted:e.createTeam},{title:s(()=>[C]),description:s(()=>[V]),form:s(()=>[o("div",B,[a(m,{value:"Team Owner"}),o("div",S,[o("img",{class:"object-cover w-12 h-12 rounded-full",src:e.$page.props.user.profile_photo_url,alt:e.$page.props.user.name},null,8,y),o("div",N,[o("div",null,l(e.$page.props.user.name),1),o("div",k,l(e.$page.props.user.email),1)])])]),o("div",D,[a(m,{for:"name",value:"Team Name"}),a(i,{id:"name",type:"text",class:"block w-full mt-1",modelValue:e.form.name,"onUpdate:modelValue":n[0]||(n[0]=u=>e.form.name=u),autofocus:""},null,8,["modelValue"]),a(p,{message:e.form.errors.name,class:"mt-2"},null,8,["message"])])]),actions:s(()=>[a(c,{class:T({"opacity-25":e.form.processing}),disabled:e.form.processing},{default:s(()=>[F]),_:1},8,["class","disabled"])]),_:1},8,["onSubmitted"])}var Q=j(w,[["render",I]]);export{Q as default};
