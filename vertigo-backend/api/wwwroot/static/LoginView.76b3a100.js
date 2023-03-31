import{P as k,A as l}from"./PanelCardItem.19c0d15f.js";import{_ as v,k as b,l as w,r as d,m as _,o as u,d as p,f as a,w as c,t as S,h as I,e as g,q as m,T as L,p as V,j as T}from"./index.61ae94fe.js";const C=s=>(V("data-v-913efbac"),s=s(),T(),s),U={class:"flex justify-center items-center h-screen"},B=C(()=>g("h1",{class:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"}," Sign in to your account ",-1)),N={key:0,class:"error py-3"},j={class:"text-sm font-light text-gray-500 dark:text-gray-400"},q={__name:"LoginView",setup(s){const n=b(),h=w(),t=d("");d();async function f(r){const o={"Content-Type":"application/json",Authorization:`Basic ${btoa(r.username)+btoa(":"+r.password)}`};try{const e=await l.login({headers:o});if(console.log(e),n.addToken(e.data.access_token),localStorage.getItem("token")){const y=L.getTokenHeader();try{const i=await l.getUser({headers:y});n.addUser(i.data.id)}catch{t.value=e}h.push("home")}else n.isUserLoggedIn=!1}catch(e){t.value=e}console.log(t)}return(r,x)=>{const o=_("FormKit"),e=_("RouterLink");return u(),p("div",U,[a(k,null,{default:c(()=>[B,a(o,{type:"form","submit-label":"Login",onSubmit:f},{default:c(()=>[a(o,{type:"text",name:"username",label:"Username",validation:"required","label-class":"mx-5"}),a(o,{type:"password",name:"password",label:"Password",validation:"required"}),t.value!=""?(u(),p("h1",N,S(t.value),1)):I("",!0)]),_:1}),g("p",j,[m(" Don\u2019t have an account yet? "),a(e,{to:"/register",class:"text-blue-500 underline"},{default:c(()=>[m("Sign up")]),_:1})])]),_:1})])}}},R=v(q,[["__scopeId","data-v-913efbac"]]);export{R as default};
