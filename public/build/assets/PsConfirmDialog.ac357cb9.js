import{P as y}from"./PsModal.bee9bcb9.js";import{P}from"./PsLabel.22ffb702.js";import{P as B}from"./PsButton.e57c4d7d.js";import{d as w,i as a,ac as r,r as g,o as $,f as S,w as t,a as x,b as i,p as d,t as c}from"./app.17cd73cb.js";import{_ as z}from"./plugin-vue_export-helper.21dcd24c.js";const D=w({name:"PsConfirmDialog",components:{PsModal:y,PsLabel:P,PsButton:B},setup(){const e=a(),o=a(r("ps_confirm_dialog__confirm")),m=a(r("ps_confirm_dialog__are_you_confirm")),f=a(r("ps_confirm_dialog__yes")),p=a(r("ps_confirm_dialog__no"));let _,s;function l(n){n=="yes"?_():s(),e.value.toggle(!1)}function u(n,v,b,k,C,h){o.value=n,m.value=v.toString(),f.value=b,p.value=k,e.value.toggle(!0),_=C,s=h}return{psmodal:e,title:o,message:m,openModal:u,actionClicked:l,okButton:f,cancelButton:p}}}),N={class:"w-full text-start"},V={class:"w-full text-start mt-2"},M={class:"flex flex-row justify-end"};function j(e,o,m,f,p,_){const s=g("ps-label"),l=g("ps-button"),u=g("ps-modal");return $(),S(u,{ref:"psmodal",maxWidth:"480px",line:"hidden",isClickOut:!1,theme:" px-6 py-6 rounded-lg shadow-xl",class:"z-50 h-56 bg-white"},{title:t(()=>[x("div",N,[i(s,{class:"text-lg font-semibold"},{default:t(()=>[d(c(e.title),1)]),_:1})])]),body:t(()=>[x("div",V,[i(s,{class:"font-light text-sm lg:text-base"},{default:t(()=>[d(c(e.message),1)]),_:1})])]),footer:t(()=>[x("div",M,[i(l,{rounded:"rounded",onClick:o[0]||(o[0]=n=>e.actionClicked("no")),textSize:"text-xs lg:text-sm",class:"me-4",border:"border border-gray-200",colors:"bg-none",hover:"hover:outline-none hover:ring hover:ring-gray-100"},{default:t(()=>[d(c(e.cancelButton),1)]),_:1}),i(l,{rounded:"rounded",onClick:o[1]||(o[1]=n=>e.actionClicked("yes")),textSize:"text-xs lg:text-sm",class:""},{default:t(()=>[d(c(e.okButton),1)]),_:1})])]),_:1},512)}var A=z(D,[["render",j]]);export{A as P};
