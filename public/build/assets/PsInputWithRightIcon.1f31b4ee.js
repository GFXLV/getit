import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c as s,a as n,n as i,l as u}from"./app.17cd73cb.js";const c={name:"PsInputWithRightIcon",props:{value:{type:String,default:""},type:{type:String,default:"text"},theme:{type:String,default:"bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-100"},rounded:{type:String,default:"rounded-lg"},maxlength:{type:Number,default:99999999},placeholder:{type:String,default:""},placeholderColor:{type:String,default:"placeholder-secondary-800 dark:placeholder-secondary-300"},onInput:Function,disabled:{type:Boolean,default:!1},padding:{type:String,default:"py-2.25 px-4"},defaultBorder:{type:String,default:"border border-secondary-200 focus:outline-none focus:ring-1 focus:ring-primary-500"},disabledTheme:{type:String,default:"text-secondary-300 border-secondary-200 shadow-none placeholder-secondary-300"}},setup(d,{emit:t}){function e(a){t("update:value",a)}return{handleInput:e}}},h={class:"relative"},y=["disabled","type","value","maxlength","placeholder"],f={class:"absolute inset-y-0 flex items-center ms-2 me-4 right-0"};function g(d,t,e,a,m,p){return o(),s("div",h,[n("input",{class:i(["w-full text-sm shadow-sm",e.disabled?[e.rounded,e.disabledTheme,e.padding]:[e.theme,e.rounded,e.defaultBorder,e.placeholderColor,e.padding]]),disabled:e.disabled,type:e.type,value:e.value,maxlength:e.maxlength,onInput:t[0]||(t[0]=l=>a.handleInput(l.target.value)),placeholder:e.placeholder},null,42,y),n("div",f,[u(d.$slots,"icon")])])}var _=r(c,[["render",g]]);export{_ as P};