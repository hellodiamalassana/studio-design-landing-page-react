import{j as n,R as u,a as p}from"./vendor.410199ae.js";const v=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function h(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function d(s){if(s.ep)return;s.ep=!0;const i=h(s);fetch(s.href,i)}};v();var g="/assets/landing-bg.4dffcfcc.png",o="/assets/dots.f3122c65.svg",x="/assets/box-search.9d89d2af.svg",f="/assets/chart-square.5fa78ca3.svg",N="/assets/code.4c854c59.svg",b="/assets/empty-wallet.a6f80f1b.svg";const e=n.exports.jsx,l=n.exports.jsxs;function m({children:a,className:c}){return e("button",{className:`bg-primary text-white py-[20px] px-[40px] rounded-full whitespace-nowrap ${c}`,children:a})}function t(a){return e("div",{className:a.className,children:e("div",{className:"h-[379px] w-[308px] drop-shadow-md rounded-3xl bg-white",children:e("div",{className:"flex items-center h-full w-full px-5 py-10",children:l("div",{className:"flex flex-col justify-between h-full items-center",children:[e("div",{className:`border h-[121px] w-[121px] flex justify-center items-center rounded-xl ${a.color}`,children:e("img",{src:a.icon})}),e("div",{className:"title text-[24px] text-center w-4/5",children:a.title}),e("div",{className:"pt-5 text-center",children:a.subtitle})]})})})})}function w(){return e("div",{className:"bg-white font-averta h-full ",children:l("div",{className:"container   overflow-x-hidden px-5 scroll-smooth lg:mx-auto",children:[l("div",{className:"flex justify-between py-8",children:[e("h1",{className:"font-bold",children:"A+ Studio"}),e("div",{className:"hidden md:block",children:l("ul",{className:"flex flex-col md:flex-row",children:[e("li",{className:"mr-10",children:e("a",{children:"Home"})}),e("li",{className:"mr-10",children:e("a",{children:"What We Do"})}),e("li",{className:"mr-10",children:e("a",{children:"Service"})}),e("li",{className:"mr-10",children:e("a",{children:"Project"})}),e("li",{className:"mr-10",children:e("a",{children:"Blog"})}),e("li",{className:"mr-10",children:e("a",{children:"Contact"})})]})})]}),l("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-0 md:gap-4 items-center",children:[l("div",{className:"col-span-5 relative",children:[l("div",{className:"relative z-20",children:[e("div",{className:"text-black text-4xl",children:"A Digital Product Agency"}),e("div",{className:"py-10 w-full lg:w-3/5",children:e("p",{className:"text-sx text-[16px] font-thin text-[#565656]",children:"Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services."})}),e("div",{children:e(m,{children:"Contact Now"})})]}),e("div",{className:"absolute -bottom-28 z-10 -left-20",children:e("img",{src:o})})]}),l("div",{className:"col-span-7 relative pt-10",children:[e("div",{className:"h-40 w-40 rounded-full bg-[#DAE9FF] absolute -left-20 z-10"}),e("div",{className:"relative z-20 ",children:e("img",{src:g,alt:"",className:"rounded-tr-2xl"})}),e("div",{className:"h-40 w-40 bg-[#FFF5DB] rounded-br-[100px] absolute right-20 -bottom-24 z-10"})]})]}),l("div",{children:[l("section",{className:"md:flex pt-40",children:[l("div",{children:[e("div",{className:"text-black text-4xl",children:"Our Client"}),l("p",{className:"text-grey",children:[" ","Several selected clients, who already believe in ourr service"]})]}),e("div",{className:"flex items-center md:items-end w-full pt-10 lg:pt-0",children:l("div",{className:"flex flex-col md:flex-row justify-center md:justify-evenly items-center w-full space-y-10 lg:space-y-0",children:[e("div",{children:e("img",{src:"./src/assets/clients/google.png",alt:""})}),e("div",{children:e("img",{src:"./src/assets/clients/airbnb.png",alt:""})}),e("div",{children:e("img",{src:"./src/assets/clients/ubereats.png",alt:""})}),e("div",{children:e("img",{src:"./src/assets/clients/amazon.png",alt:""})})]})})]}),l("section",{className:"relative",children:[e("div",{className:"absolute w-[1047px] h-[619px] bg-[#F4F9FF] rounded-tl-[150px] -right-[5vw]"}),l("div",{className:"flex  flex-col lg:flex-row items-center justify-between w-full pt-40",children:[l("div",{className:"relative z-20",children:[e("div",{className:"text-black text-4xl",children:"How can we help your Business ?"}),l("p",{className:"text-grey",children:[" ","We build readymade websites, mobile applications, and elaborate online business services."]}),e("div",{className:"absolute -bottom-28 z-10 -left-20",children:e("img",{src:o})})]}),e("div",{className:"flex items-center justify-center w-full",children:l("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 relative",children:[l("div",{className:"flex flex-col space-y-8 mt-20",children:[e(t,{className:"pt-0 lg:pt-20",color:"bg-[#F1F7FF]",icon:x,title:"Business Idea Planning",subtitle:"We present you a proposal and discuss niffty-gritty like"}),e(t,{icon:N,color:"bg-[#FFF2F8]",title:"Business Idea Planning",subtitle:"We present you a proposal and discuss niffty-gritty like"})]}),l("div",{className:"flex flex-col space-y-8",children:[e(t,{className:"pt-20",color:"bg-[#FFF7E3]",icon:b,title:"Business Idea Planning",subtitle:"We present you a proposal and discuss niffty-gritty like"}),e(t,{icon:f,color:"bg-[#DEFFEE]",title:"Business Idea Planning",subtitle:"We present you a proposal and discuss niffty-gritty like"})]})]})})]})]}),e("section",{className:"pt-40",children:l("div",{className:"flex  flex-col-reverse space-y-20 space-y-reverse lg-space-y-0 lg:flex-row w-full items-center",children:[l("div",{className:"w-full relative",children:[e("div",{className:"relative z-20",children:e("iframe",{className:"rounded-3xl shadow-xl w-full lg:w-4/5 h-[372px]",src:"https://www.youtube.com/embed/lxvKgxw-P-4",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"})}),e("div",{className:"h-24 w-24 bg-[#FFF5DB] rounded-full absolute right-28 -bottom-12 z-10"})]}),e("div",{className:"w-full relative",children:l("div",{children:[e("div",{className:"h-40 w-40 bg-[#EFF1FF] rounded-br-[150px] absolute -left-10 -top-10 z-10"}),l("div",{className:"relative z-20",children:[l("div",{className:"text-black text-4xl",children:["Great Digital Product ",e("br",{})," Agency since 2016"," "]}),l("p",{className:"text-grey pt-5",children:[" ","Our Business Plan is a written document describing a company's core business activites, Objectives, and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea accordingly their budgets and according thir reuirements."]})]})]})})]})}),l("section",{className:"pt-40",children:[e("div",{className:"flex justify-center",children:l("div",{children:[e("div",{className:"text-black text-4xl",children:"What our happy client say"}),e("p",{className:"text-grey pt-5",children:"Several selected clients, who already believe in our service."})]})}),l("div",{className:"flex flex-col space-x-2 justify-between lg:flex-row h-full w-full items-center",children:[e("div",{className:"w-full lg:w-2/3",children:l("div",{className:"flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center space-x-10",children:[e("div",{className:"w-2/3 lg:w-full",children:l("div",{className:"relative",children:[e("img",{src:"./src/assets/avatar/9.png",className:"rounded-br-full relative rounded-bl-full rounded-tl-full z-10",alt:""}),e("div",{className:"absolute bottom-2",children:e("div",{className:"w-[120px] h-[120px] border-8 border-[#FF007A] rounded-full"})})]})}),l("div",{className:"w-full",children:[e("div",{className:"text-black font-bold text-2xl",children:"Matthew Paul"}),e("div",{className:"font-normal text-sm leading-relaxed text-[#565656] pt-5",children:"Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend."}),e("div",{className:"pt-[40px]",children:e("div",{className:"h-4 w-4 rounded-full bg-blue-700"})})]})]})}),l("div",{className:"w-[340px] relative",children:[e("div",{className:"animate-spin-slow relative z-20",children:l("div",{className:" w-[600px] h-[415px]",children:[e("div",{className:"absolute left-[40%] ",children:e("div",{className:"animate-neg-spin-slow",children:e("img",{src:"./src/assets/avatar/1.png",alt:""})})}),e("div",{className:"absolute top-[20%]",children:e("div",{className:"animate-neg-spin-slow",children:e("img",{src:"./src/assets/avatar/5.png",className:"w-[98px] h-[98px]",alt:""})})}),e("div",{className:"absolute top-[60%]",children:e("div",{className:"animate-neg-spin-slow",children:e("img",{src:"./src/assets/avatar/3.png",className:"w-[68px] h-[68px]",alt:""})})}),e("div",{className:"absolute bottom-0 left-[30%]",children:e("div",{className:"animate-neg-spin-slow",children:e("img",{src:"./src/assets/avatar/6.png",className:"w-[98px] h-[98px]",alt:""})})}),e("div",{className:"absolute bottom-[20%] right-[10%]",children:e("div",{className:"animate-neg-spin-slow",children:e("img",{src:"./src/assets/avatar/7.png",className:"w-[68px] h-[68px]",alt:""})})}),e("div",{className:"absolute top-[15%] right-[10%]",children:e("div",{className:"animate-neg-spin-slow",children:e("img",{src:"./src/assets/avatar/4.png",className:"w-[54px] h-[54px]",alt:""})})}),e("div",{className:"absolute top-[40%] right-0",children:e("div",{className:"animate-neg-spin-slow",children:e("img",{src:"./src/assets/avatar/2.png",className:"w-[54px] h-[54px]",alt:""})})}),e("div",{className:"absolute top-[40%] right-0",children:e("div",{className:"animate-neg-spin-slow",children:e("img",{src:"./src/assets/avatar/2.png",className:"w-[54px] h-[54px]",alt:""})})}),e("div",{className:"absolute top-[50%] left-[50%] -mt-[50px] -ml-[50px]",children:e("div",{className:"animate-neg-spin-slow",children:e("img",{src:"./src/assets/avatar/8.png",className:"w-[120px] h-[120px]",alt:""})})})]})}),e("div",{className:"absolute bottom-16 left-10",children:e("div",{className:"w-[184px] h-[184px] rounded-full bg-[#FFF5DB]"})})]})]})]}),e("section",{className:"pt-40",children:l("div",{className:"relative h-[292px]",children:[e("div",{className:"border-0 rounded-3xl h-full  bg-[#F4F9FF] rounded-br-[100px] rounded-tr-[100px]",children:l("div",{className:"flex",children:[e("div",{className:"w-full"}),e("div",{className:"w-full",children:e("div",{className:"flex justify-end",children:e("div",{className:"h-[292px] rounded-br-[100px] rounded-tr-[100px] rounded-tl-[190px] rounded-bl-[240px] w-3/4 bg-blue-700"})})})]})}),e("div",{className:"absolute z-10 top-0 h-full w-full",children:l("div",{className:"flex w-full items-center h-full justify-around",children:[l("div",{className:"flex flex-col space-y-4",children:[e("div",{className:"text-4xl font-extrabold",children:"Subscribe Newsletter"}),e("div",{className:"text-[#757575]",children:"I will update good news and promotion service not spam"})]}),e("div",{className:"w-1/2",children:l("div",{className:"flex items-center space-x-2 p-3 w-full rounded-full justify-between bg-white h-full shadow-3xl",children:[e("div",{className:"w-full h-full pl-4",children:e("input",{className:"w-full h-full focus:outline-0",placeholder:"Enter your email address..."})}),e("div",{children:e(m,{className:"whitespace-nowrap",children:"Contact Now"})})]})})]})})]})}),l("section",{className:"pt-40 pb-20",children:[e("div",{className:"border-t border-b",children:e("div",{className:"pt-16 pb-16",children:l("div",{className:"grid grid-cols-1 lg:grid-cols-6",children:[l("div",{className:"lg:col-span-2",children:[e("div",{className:"pb-7",children:"A+ Studio"}),e("div",{className:"w-1/2",children:"Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services."})]}),l("div",{children:[e("div",{className:"font-extrabold pb-7 ",children:"What We do"}),e("div",{children:l("ul",{className:"font-thin text-xs leading-8",children:[e("li",{children:"Web Design"}),e("li",{children:"App Design"}),e("li",{children:"Social Media Manage"}),e("li",{children:"Market Analysis Project"})]})})]}),l("div",{children:[e("div",{className:"font-extrabold pb-7 ",children:"Company"}),e("div",{children:l("ul",{className:"font-thin text-xs leading-8",children:[e("li",{children:"Web Design"}),e("li",{children:"App Design"}),e("li",{children:"Social Media Manage"}),e("li",{children:"Market Analysis Project"})]})})]}),l("div",{children:[e("div",{className:"font-extrabold pb-7 ",children:"Support"}),e("div",{children:l("ul",{className:"font-thin text-xs leading-8",children:[e("li",{children:"Web Design"}),e("li",{children:"App Design"}),e("li",{children:"Social Media Manage"}),e("li",{children:"Market Analysis Project"})]})})]}),l("div",{children:[e("div",{className:"font-extrabold pb-7 ",children:"Contact"}),e("div",{children:l("ul",{className:"font-thin text-xs leading-8",children:[e("li",{children:"Web Design"}),e("li",{children:"App Design"}),e("li",{children:"Social Media Manage"}),e("li",{children:"Market Analysis Project"})]})})]})]})})}),e("div",{className:"flex w-full justify-center items-center",children:l("div",{className:"p-4 text-[#A4A4A4] text-xs text-center",children:["Design by ",e("a",{children:"Avi Yansah"})," and made with love by Simeon Nortey \u2764\uFE0F"]})})]})]})]})})}u.render(e(p.StrictMode,{children:e(w,{})}),document.getElementById("root"));
