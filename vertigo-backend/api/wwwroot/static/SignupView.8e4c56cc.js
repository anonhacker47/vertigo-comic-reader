import{P as c,A as d}from"./PanelCardItem.c7faf557.js";import{r as o,m as p,o as n,d as i,f as e,w as l,t as u,h as _,e as f}from"./index.8ef724c0.js";const y={class:"flex justify-center items-center h-screen"},g=f("h1",{class:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"}," Create your Vertigo Account ",-1),h={key:0,class:"error py-5"},b={__name:"SignupView",setup(w){o(""),o(""),o("");const a=o("");async function m(r){try{const s=await d.register({username:r.username,email:r.email,password:r.password})}catch(s){a.value=s.response.data.errors}console.log(a)}return(r,s)=>{const t=p("FormKit");return n(),i("div",y,[e(c,null,{default:l(()=>[g,e(t,{type:"form","submit-label":"Sign up",onSubmit:m},{default:l(()=>[e(t,{type:"text",name:"username",label:"Username",validation:"required"}),e(t,{type:"email",name:"email",label:"Email Address",validation:"required|email|",placeholder:"demo@company.com"}),e(t,{type:"password",name:"password",label:"Password",validation:"required"}),e(t,{type:"password",name:"password_confirm",label:"Confirm Password",validation:"required|confirm","validation-label":"Password confirmation"}),a.value!=""?(n(),i("h1",h,u(a.value),1)):_("",!0)]),_:1})]),_:1})])}}};export{b as default};
