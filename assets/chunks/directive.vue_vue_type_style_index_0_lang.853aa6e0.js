import{f as y,g,r as s,o as l,c as u,d as c,b as t,w as h,T as b,F as _,h as k,u as $,i as x,v as w,k as V}from"../app.0c81e99c.js";import{V as U}from"./component.5c00f318.js";import{u as j}from"./useDraggable.ed159e0a.js";import{v as A}from"./directive.3840d0ad.js";const I={class:"flex justify-between"},S=["onUpdate:modelValue"],M=y({__name:"demo",setup(C){const e=g([{name:"Joao",id:"1"},{name:"Jean",id:"2"},{name:"Johanna",id:"3"},{name:"Juan",id:"4"}]);function d(){const n=e.value.length+1;e.value.push({name:`Juan ${n}`,id:`${n}`})}function p(n){e.value.splice(n,1)}return(n,a)=>{const f=s("IconSort"),m=s("iconClose"),v=s("preview-list");return l(),u(_,null,[c("button",{onClick:d},"Add"),c("div",I,[t($(U),{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=o=>e.value=o),class:"flex flex-col gap-2 p-4 w-300px bg-gray-500/5 rounded h-300px overflow-auto",target:".sort-target",scroll:!0},{default:h(()=>[t(b,{type:"transition",tag:"ul",name:"fade",class:"sort-target"},{default:h(()=>[(l(!0),u(_,null,k(e.value,(o,i)=>(l(),u("li",{key:o.id,class:"h-50px bg-gray-500/5 rounded flex items-center justify-between px-2"},[t(f,{class:"handle cursor-move"}),x(c("input",{type:"text","onUpdate:modelValue":r=>o.name=r},null,8,S),[[w,o.name]]),t(m,{class:"cursor-pointer",onClick:r=>p(i)},null,8,["onClick"])]))),128))]),_:1})]),_:1},8,["modelValue"]),t(v,{list:e.value},null,8,["list"])])],64)}}});const B={class:"flex justify-between"},D=["onUpdate:modelValue"],q=y({__name:"hooks",setup(C){const e=g([{name:"Joao",id:"1"},{name:"Jean",id:"2"},{name:"Johanna",id:"3"},{name:"Juan",id:"4"}]),d=g();j(d,e);function p(){const a=e.value.length+1;e.value.push({name:`Juan ${a}`,id:`${a}`})}function n(a){e.value.splice(a,1)}return(a,f)=>{const m=s("IconSort"),v=s("iconClose"),o=s("preview-list");return l(),u(_,null,[c("button",{onClick:p},"Add"),c("div",B,[t(b,{ref_key:"el",ref:d,type:"transition",tag:"ul",name:"fade",class:"flex flex-col gap-2 p-4 w-300px bg-gray-500/5 rounded"},{default:h(()=>[(l(!0),u(_,null,k(e.value,(i,r)=>(l(),u("li",{key:i.id,class:"h-50px bg-gray-500/5 rounded flex items-center justify-between px-2"},[t(m,{class:"handle cursor-move"}),x(c("input",{type:"text","onUpdate:modelValue":J=>i.name=J},null,8,D),[[w,i.name]]),t(v,{class:"cursor-pointer",onClick:J=>n(r)},null,8,["onClick"])]))),128))]),_:1},512),t(o,{list:e.value},null,8,["list"])])],64)}}});const T={class:"flex justify-between"},F=["onUpdate:modelValue"],z=y({__name:"directive",setup(C){const e=g([{name:"Joao",id:"1"},{name:"Jean",id:"2"},{name:"Johanna",id:"3"},{name:"Juan",id:"4"}]);function d(){const n=e.value.length+1;e.value.push({name:`Juan ${n}`,id:`${n}`})}function p(n){e.value.splice(n,1)}return(n,a)=>{const f=s("IconSort"),m=s("iconClose"),v=s("preview-list");return l(),u(_,null,[c("button",{onClick:d},"Add"),c("div",T,[x((l(),V(b,{type:"transition",tag:"ul",name:"fade",class:"flex flex-col gap-2 p-4 w-300px bg-gray-500/5 rounded"},{default:h(()=>[(l(!0),u(_,null,k(e.value,(o,i)=>(l(),u("li",{key:o.id,class:"h-50px bg-gray-500/5 rounded flex items-center justify-between px-2"},[t(f,{class:"handle cursor-move"}),x(c("input",{type:"text","onUpdate:modelValue":r=>o.name=r},null,8,F),[[w,o.name]]),t(m,{class:"cursor-pointer",onClick:r=>p(i)},null,8,["onClick"])]))),128))]),_:1})),[[$(A),[e.value,{animation:150}]]]),t(v,{list:e.value},null,8,["list"])])],64)}}});export{M as _,q as a,z as b};
