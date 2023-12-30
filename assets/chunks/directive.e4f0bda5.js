import{V as w,u as y}from"./component.53c0919a.js";import{h as c,E as h,o as e,c as o,k as m,J as g,w as b,F as u,G as v,t as _,l as f,a0 as J}from"./framework.0e5cb531.js";import{v as $}from"./directive.e03fd251.js";const k={class:"flex"},U={class:"flex justify-between"},N={__name:"demo",setup(x){const a=c([{name:"Joao",id:"1"},{name:"Jean",id:"2"},{name:"Johanna",id:"3"},{name:"Juan",id:"4"}]),n=c(a.value.map(i=>({name:`${i.name}-2`,id:`${i.id}-2`})));function d(){console.log("update")}function r(){console.log("add")}function t(){console.log("remove")}return(i,p)=>{const s=h("preview-list");return e(),o(u,null,[m("div",k,[g(f(w),{class:"flex flex-col gap-2 p-4 w-300px h-300px m-auto bg-gray-500/5 rounded overflow-auto",modelValue:a.value,"onUpdate:modelValue":p[0]||(p[0]=l=>a.value=l),animation:"150",ghostClass:"ghost",group:"people",onUpdate:d,onAdd:r,onRemove:t},{default:b(()=>[(e(!0),o(u,null,v(a.value,l=>(e(),o("div",{key:l.id,class:"cursor-move h-30 bg-gray-500/5 rounded p-3"},_(l.name),1))),128))]),_:1},8,["modelValue"]),g(f(w),{class:"flex flex-col gap-2 p-4 w-300px h-300px m-auto bg-gray-500/5 rounded overflow-auto",modelValue:n.value,"onUpdate:modelValue":p[1]||(p[1]=l=>n.value=l),animation:"150",group:"people",ghostClass:"ghost",onUpdate:d,onAdd:r,onRemove:t},{default:b(()=>[(e(!0),o(u,null,v(n.value,l=>(e(),o("div",{key:l.id,class:"cursor-move h-30 bg-gray-500/5 rounded p-3"},_(l.name),1))),128))]),_:1},8,["modelValue"])]),m("div",U,[g(s,{list:a.value},null,8,["list"]),g(s,{list:n.value},null,8,["list"])])],64)}}},V={class:"flex"},A={class:"flex justify-between"},G={__name:"function",setup(x){const a=c([{name:"Joao",id:"1"},{name:"Jean",id:"2"},{name:"Johanna",id:"3"},{name:"Juan",id:"4"}]),n=c(a.value.map(t=>({name:`${t.name}-2`,id:`${t.id}-2`}))),d=c(),r=c();return y(d,a,{animation:150,ghostClass:"ghost",group:"people",onUpdate:()=>{console.log("update list1")},onAdd:()=>{console.log("add list1")},remove:()=>{console.log("remove list1")}}),y(r,n,{animation:150,ghostClass:"ghost",group:"people",onUpdate:()=>{console.log("update list2")},onAdd:()=>{console.log("add list2")},remove:()=>{console.log("remove list2")}}),(t,i)=>{const p=h("preview-list");return e(),o(u,null,[m("div",V,[m("section",{class:"flex flex-col gap-2 p-4 w-300px h-300px m-auto bg-gray-500/5 rounded overflow-auto",ref_key:"el1",ref:d},[(e(!0),o(u,null,v(a.value,s=>(e(),o("div",{key:s.id,class:"cursor-move h-30 bg-gray-500/5 rounded p-3"},_(s.name),1))),128))],512),m("section",{class:"flex flex-col gap-2 p-4 w-300px h-300px m-auto bg-gray-500/5 rounded overflow-auto",ref_key:"el2",ref:r},[(e(!0),o(u,null,v(n.value,s=>(e(),o("div",{key:s.id,class:"cursor-move h-30 bg-gray-500/5 rounded p-3"},_(s.name),1))),128))],512)]),m("div",A,[g(p,{list:a.value},null,8,["list"]),g(p,{list:n.value},null,8,["list"])])],64)}}},C={class:"flex"},D={class:"flex flex-col gap-2 p-4 w-300px h-300px m-auto bg-gray-500/5 rounded overflow-auto"},R={class:"flex flex-col gap-2 p-4 w-300px h-300px m-auto bg-gray-500/5 rounded overflow-auto"},j={class:"flex justify-between"},L={__name:"directive",setup(x){const a=c([{name:"Joao",id:"1"},{name:"Jean",id:"2"},{name:"Johanna",id:"3"},{name:"Juan",id:"4"}]),n=c(a.value.map(i=>({name:`${i.name}-2`,id:`${i.id}-2`})));function d(){console.log("update")}function r(){console.log("add")}function t(){console.log("remove")}return(i,p)=>{const s=h("preview-list");return e(),o(u,null,[m("div",C,[J((e(),o("section",D,[(e(!0),o(u,null,v(a.value,l=>(e(),o("div",{key:l.id,class:"h-30 bg-gray-500/5 rounded p-3"},_(l.name),1))),128))])),[[f($),[a.value,{animation:150,ghostClass:"ghost",group:"people",onUpdate:d,onAdd:r,onRemove:t}]]]),J((e(),o("section",R,[(e(!0),o(u,null,v(n.value,l=>(e(),o("div",{key:l.id,class:"h-30 bg-gray-500/5 rounded p-3"},_(l.name),1))),128))])),[[f($),[n.value,{animation:150,ghostClass:"ghost",group:"people",onUpdate:d,onAdd:r,onRemove:t}]]])]),m("div",j,[g(s,{list:a.value},null,8,["list"]),g(s,{list:n.value},null,8,["list"])])],64)}}};export{N as _,G as a,L as b};
