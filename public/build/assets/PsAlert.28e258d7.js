import{i as n,r as a,m as l,v as m,o as c,c as u,l as p,b as f,n as o}from"./app.17cd73cb.js";import{P as d}from"./PsIcon.05949a2a.js";import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";const h={components:{PsIcon:d},props:{theme:{type:String,default:"bg-primary-100"},textTheme:{type:String,default:"text-primary-100"},duration:{type:Number,default:3e3},visible:{type:Boolean,default:!0}},data(){const e=n(this.visible);this.visible&&(setTimeout(()=>{e.value=!1},this.duration),this.$emit("update:visible",!1));function t(){if(this.visible==!0)return this.visible=!1}return{close:t,openAlertBox:e}}};function b(e,t,s,x,i,_){const r=a("ps-icon");return l((c(),u("div",{class:o(["rounded py-3 px-3 text-base inline-flex items-center w-full border-t-2",s.theme])},[p(e.$slots,"default"),f(r,{onClick:t[0]||(t[0]=y=>i.close()),class:o([[s.textTheme],"text-sm ms-auto my-auto focus:shadow-none hover:text-purple-500"]),name:"close"},null,8,["class"])],2)),[[m,this.visible]])}var S=v(h,[["render",b]]);export{S as P};
