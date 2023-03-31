import{_ as T,r as l,l as H,T as P,o as R,d as q,f as E,e,g as S,v as a,x as n,y as F,z as I,B as L,F as $,S as V,H as G,p as K,j as z}from"./index.a75baa4b.js";import{I as D}from"./IssueService.43d598f7.js";const r=i=>(K("data-v-cf85cccd"),i=i(),z(),i),O={class:"content"},W={class:"card w-[22rem] bg-base-100 shadow-xl"},J={class:"px-5 pt-5"},Q=["src"],X={class:"flex flex-col p-5"},Y=r(()=>e("label",{class:"label justify-center"},[e("span",{class:"label-text"},"Cover Image")],-1)),Z={class:"card h-full shadow-2xl bg-base-100"},ee={class:"card-body justify-between"},oe={class:"flex flex-row gap-16 mb-5 justify-around"},te={class:"form-control"},se={class:"form-control w-full"},le=r(()=>e("option",{disabled:"",value:""},"Pick Format",-1)),ae=r(()=>e("option",null,"TPB",-1)),ne=r(()=>e("option",null,"HC",-1)),re=r(()=>e("option",null,"OMNI",-1)),de=r(()=>e("option",null,"ABS",-1)),ie=r(()=>e("option",null,"MANGA",-1)),ue=[le,ae,ne,re,de,ie],ce={class:"form-control"},pe={class:"flex flex-row gap-16 my-5 justify-around"},ve={class:"form-control"},me={class:"form-control"},_e={class:"form-control"},fe={class:"flex flex-row gap-16 my-5 justify-around"},he={class:"form-control"},be={class:"form-control"},xe={class:"form-control"},ye={class:"flex flex-row gap-16 mb-3 justify-around"},we={class:"form-control w-full"},ge={class:"flex flex-row gap-16 mb-3 justify-around"},ke={class:"form-control w-full"},Se={class:"form-control"},Ie={class:"label cursor-pointer"},Ve=r(()=>e("span",{class:"text-emerald-400"},"Read Already?",-1)),Ue={class:"form-control w-full"},Ae={class:"form-control"},je={class:"label cursor-pointer"},Be=r(()=>e("span",{class:"text-emerald-400"},"All Bought?",-1)),Ne={class:"flex flex-row gap-16 justify-around"},Ce={class:"form-control w-full"},Me={__name:"AddNewView",setup(i){var u=l(new URL("/static/dummy.7d1be8db.webp",self.location).href);const U=H(),c=P.getTokenHeader(),p=l(""),v=l(""),m=l(""),_=l(""),f=l(""),h=l(""),b=l(""),x=l(""),y=l(""),d=l(0),w=l(0),g=l(0),k=l("");function A(s){s.target.value?u.value=s.target.value:u.value=new URL("/static/dummy.7d1be8db.webp",self.location).href,k.value=s.target.value}function j(){k.value="noimage"}async function B(){try{const s=await V.addSeries({title:p.value,publisher:v.value,writer:m.value,artist:_.value,editor:f.value,summary:h.value,genre:b.value,main_char:x.value,series_format:y.value,books_count:d.value,read_whole:w.value,have_whole:g.value,thumbnail:k.value},{headers:c});d.value>0?C(d.value):console.log("nothing to add"),N()}catch(s){console.log(s)}}async function N(){try{const s=await V.getSeriesKey({headers:c});localStorage.setItem("key",s.data)}catch(s){console.log(s)}}function C(s){for(var o=0;o<s;o++){var t=`Volume ${o}`;M(t),console.log(`Book ${o} Added`)}}async function M(s){var o=Number(localStorage.getItem("key"))+1;console.log(o);try{const t=await D.addIssues(o,{title:s,read_whole:0,have_whole:0},{headers:c})}catch(t){console.log(t)}}return(s,o)=>(R(),q($,null,[E(G),e("form",{onSubmit:o[13]||(o[13]=L(()=>{},["prevent"])),autocomplete:"on",class:"flex flex-row"},[e("div",O,[e("div",W,[e("figure",J,[e("img",{src:S(u),onError:j,alt:"Invalid Image Link",class:"rounded-xl w-[26rem] h-[29rem]",key:"imagesrc"},null,40,Q)]),e("div",X,[Y,e("input",{type:"text",onInput:A,placeholder:"paste image link here",class:"input input-bordered",required:""},null,32)])]),e("div",Z,[e("div",ee,[e("div",oe,[e("div",te,[a(e("input",{type:"text",placeholder:"Series Name","onUpdate:modelValue":o[0]||(o[0]=t=>p.value=t),class:"input input-bordered",required:""},null,512),[[n,p.value]])]),e("div",se,[a(e("select",{class:"select select-primary","onUpdate:modelValue":o[1]||(o[1]=t=>y.value=t),required:""},ue,512),[[F,y.value]])]),e("div",ce,[a(e("input",{type:"number","onUpdate:modelValue":o[2]||(o[2]=t=>d.value=t),placeholder:"Book Count",class:"input input-bordered"},null,512),[[n,d.value,void 0,{number:!0}]])])]),e("div",pe,[e("div",ve,[a(e("input",{type:"text",placeholder:"Publisher","onUpdate:modelValue":o[3]||(o[3]=t=>v.value=t),class:"input input-bordered"},null,512),[[n,v.value]])]),e("div",me,[a(e("input",{type:"text",placeholder:"Genre","onUpdate:modelValue":o[4]||(o[4]=t=>b.value=t),class:"input input-bordered"},null,512),[[n,b.value]])]),e("div",_e,[a(e("input",{type:"text","onUpdate:modelValue":o[5]||(o[5]=t=>x.value=t),placeholder:"Main Character/Team",class:"input input-bordered"},null,512),[[n,x.value]])])]),e("div",fe,[e("div",he,[a(e("input",{type:"text",placeholder:"Writer","onUpdate:modelValue":o[6]||(o[6]=t=>m.value=t),class:"input input-bordered"},null,512),[[n,m.value]])]),e("div",be,[a(e("input",{type:"text","onUpdate:modelValue":o[7]||(o[7]=t=>_.value=t),placeholder:"Artist",class:"input input-bordered"},null,512),[[n,_.value]])]),e("div",xe,[a(e("input",{type:"text","onUpdate:modelValue":o[8]||(o[8]=t=>f.value=t),placeholder:"Editor",class:"input input-bordered"},null,512),[[n,f.value]])])]),e("div",ye,[e("div",we,[a(e("textarea",{class:"textarea textarea-bordered h-24",placeholder:"Summary","onUpdate:modelValue":o[9]||(o[9]=t=>h.value=t)},null,512),[[n,h.value]])])]),e("div",ge,[e("div",ke,[e("div",Se,[e("label",Ie,[Ve,a(e("input",{type:"checkbox","true-value":"1","false-value":"0","onUpdate:modelValue":o[10]||(o[10]=t=>w.value=t),class:"checkbox checkbox-accent"},null,512),[[I,w.value,void 0,{number:!0}]])])])]),e("div",Ue,[e("div",Ae,[e("label",je,[Be,a(e("input",{type:"checkbox","true-value":"1","false-value":"0","onUpdate:modelValue":o[11]||(o[11]=t=>g.value=t),class:"checkbox checkbox-accent"},null,512),[[I,g.value,void 0,{number:!0}]])])])])]),e("div",Ne,[e("div",{class:"form-control w-full"},[e("button",{onClick:B,class:"btn btn-primary"}," Add Series ")]),e("div",Ce,[e("button",{type:"button",onClick:o[12]||(o[12]=t=>S(U).push("home")),class:"btn btn-danger"}," Cancel ")])])])])])],32)],64))}},Pe=T(Me,[["__scopeId","data-v-cf85cccd"]]);export{Pe as default};
