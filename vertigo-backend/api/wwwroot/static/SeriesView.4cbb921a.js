import{T as n,u as l,r,a as d,o as i,b as u,d as m,e as g,n as p,C as b,H as v}from"./index.8dfad118.js";const _={class:"min-h-screen",style:{"background-color":"rgb(19, 25, 41,0.93)"}},f={__name:"SeriesView",props:{id:Number},setup(h){const t=n.getTokenHeader(""),o=l(),s=r(""),a=r();console.log("The id is: "+o.params.Id);async function c(){try{const e=await b.getcardbyid(o.params.Id,{headers:t});s.value=e.data,a.value=s.value.thumbnail,console.log(a.value)}catch(e){console.log(e)}}return d(()=>{c()}),(e,k)=>(i(),u("div",{class:"min-h-screen bg-no-repeat bg-top bg-cover",style:p({backgroundImage:"url("+a.value+")"})},[m("div",_,[g(v)])],4))}};export{f as default};
