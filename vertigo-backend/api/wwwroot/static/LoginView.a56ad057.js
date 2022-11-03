import{P as f,A as x}from"./PanelCardItem.9ab9d544.js";import{_ as y,f as k,g as v,r as l,h as d,o as _,b as u,e as o,w as r,t as w,i as S,d as g,j as p,p as b,k as I}from"./index.b3c8bb86.js";const L=s=>(b("data-v-a1d2547f"),s=s(),I(),s),V={class:"flex justify-center items-center h-screen"},C=L(()=>g("h1",{class:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"}," Sign in to your account ",-1)),B={key:0,class:"error py-3"},N={class:"text-sm font-light text-gray-500 dark:text-gray-400"},U={__name:"LoginView",setup(s){const c=k(),m=v(),a=l("");l();async function h(n){const i=btoa(n.username)+btoa(":"+n.password),t={"Content-Type":"application/json",Authorization:`Basic ${i}`};try{const e=await x.login({headers:t});console.log(e),c.addToken(e.data.access_token,e.data.refresh_token),localStorage.getItem("token")?(localStorage.setItem("isUserLoggedIn",!0),console.log("logging in"),m.push("home")):c.isUserLoggedIn=!1}catch(e){a.value=e}console.log(a)}return(n,i)=>{const t=d("FormKit"),e=d("RouterLink");return _(),u("div",V,[o(f,null,{default:r(()=>[C,o(t,{type:"form","submit-label":"Login",onSubmit:h},{default:r(()=>[o(t,{type:"text",name:"username",label:"Username",validation:"required","label-class":"mx-5"}),o(t,{type:"password",name:"password",label:"Password",validation:"required"}),a.value!=""?(_(),u("h1",B,w(a.value),1)):S("",!0)]),_:1}),g("p",N,[p(" Don\u2019t have an account yet? "),o(e,{to:"/register",class:"text-blue-500 underline"},{default:r(()=>[p("Sign up")]),_:1})])]),_:1})])}}},P=y(U,[["__scopeId","data-v-a1d2547f"]]);export{P as default};
