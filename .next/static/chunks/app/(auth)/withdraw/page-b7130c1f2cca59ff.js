(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[485],{179:function(e,s,l){Promise.resolve().then(l.bind(l,9500))},9500:function(e,s,l){"use strict";l.r(s);var t=l(9268),a=l(7518),n=l(4214),r=l(6006),c=l(6008);s.default=()=>{let{push:e}=(0,c.useRouter)(),[s,l]=(0,r.useState)(""),[i,o]=(0,r.useState)("block"),[x,m]=(0,r.useState)(""),[d,u]=(0,r.useState)(""),[f,p]=(0,r.useState)(""),[b,h]=(0,r.useState)(""),[g,j]=(0,r.useState)(""),[N,w]=(0,r.useState)("none");(0,r.useEffect)(()=>{let e=localStorage.getItem("usersOb"),s=JSON.parse(e);l(s)},[]);let y=()=>{if(""===x)j("please enter bank name"),w("flex");else if(""===f)j("please enter bank number"),w("flex");else if(""===b)j("please enter amount"),w("flex");else if(""===d)j("please enter account holder name"),w("flex");else{let l=new FormData;l.append("amount",b),l.append("user",s.userId),l.append("bank",f),l.append("type","withdraw"),l.append("bankName",x),l.append("des",d),n.Z.post("https://fishfarm.onrender.com/transaction",l,{headers:{"Content-Type":"multipart/form-data"}}).then(s=>{s.data&&(j(s.data),w("flex"),setTimeout(()=>{e("/dashboard")},1e3))}).catch(e=>{console.log(e)}),o("none"),setTimeout(()=>{o("block")},3e3)}};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{display:N},className:"absolute bg-[#000000bb] z-50 top-0 left-0 w-full h-screen flex justify-center items-center",children:(0,t.jsxs)("div",{className:"w-[320px] flex flex-col p-10 justify-center items-center h-[320px] rounded-xl bg-white",children:[(0,t.jsx)("h2",{className:"text-md font-bold text-center ",children:g}),(0,t.jsx)("button",{onClick:()=>{w("none")},className:"bg-black p-5 mt-5 rounded-full text-white px-20 font-black",children:"Okay"})]})}),(0,t.jsxs)("div",{className:"bg-gradient-to-t from-[#11292d] overflow-hidden h-screen to-sky-500 relative ",children:[(0,t.jsx)("img",{src:"images/fish.png",alt:"fish",className:"w-[140px] h-[140px] fish1 absolute"}),(0,t.jsx)("img",{src:"images/fish.png",alt:"fish",className:"w-[120px] h-[120px] fish2 absolute"}),(0,t.jsx)("img",{src:"images/fish.png",alt:"fish",className:"w-[90px] h-[90px] fish3 absolute"}),(0,t.jsx)("img",{src:"images/fish.png",alt:"fish",className:"w-[70px] h-[70px] fish4 absolute"}),(0,t.jsx)("img",{src:"images/fish.png",alt:"fish",className:"w-[160px] h-[160px] fish5 absolute"}),(0,t.jsx)("img",{src:"images/fish.png",alt:"fish",className:"w-[200px] h-[200px] fish6 absolute"}),(0,t.jsxs)("div",{className:"bubble_wrap ",children:[(0,t.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[25px] h-[25px] b1 rounded-full absolute"}),(0,t.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[15px] h-[15px] b2 rounded-full absolute"}),(0,t.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[15px] h-[15px] b3 rounded-full absolute"}),(0,t.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[20px] h-[20px] b4 rounded-full absolute"}),(0,t.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[10px] h-[10px] b5 rounded-full absolute"}),(0,t.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[25px] h-[25px] b6 rounded-full absolute"}),(0,t.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[13px] h-[13px] b7 rounded-full absolute"}),(0,t.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[22px] h-[22px] b8 rounded-full absolute"}),(0,t.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[15px] h-[15px] b9 rounded-full absolute"}),(0,t.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[15px] h-[15px] b10 rounded-full absolute"}),(0,t.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[15px] h-[15px] b11 rounded-full absolute"})]}),(0,t.jsxs)("div",{className:"h-screen w-full bg-[#00000069] flex-col flex justify-center items-center  absolute top-0 left-0",children:[(0,t.jsx)("div",{className:"absolute top-0 left-0 w-full",children:(0,t.jsx)(a.default,{color:"#fff",visibility:"none",vl:"block",wd:"30%"})}),(0,t.jsx)("div",{className:"w-[350px] justify-center items-center my-4 mx-2 bg-[#0098ff75] rounded-xl",children:(0,t.jsxs)("div",{className:"flex flex-col justify-center px-5 my-5 items-start",children:[(0,t.jsx)("h2",{className:"text-center font-black pt-4 pb-5 text-white text-xl w-full",children:"Withdraw"}),(0,t.jsxs)("div",{className:"flex flex-col justify-center px-5 w-full items-start",children:[(0,t.jsx)("label",{name:"phone",className:"text-white font-bold ml-3 text-sm",children:"Your Bank Name *"}),(0,t.jsx)("input",{type:"text",value:x,onChange:e=>m(e.target.value),className:"w-full text-white rounded-2xl py-3 bg-transparent border-[1px] outline-none  px-2 text-sm font-black",placeholder:"Bank Account Name*"})]}),(0,t.jsxs)("div",{className:"flex flex-col mt-4 justify-center px-5 w-full items-start",children:[(0,t.jsx)("label",{name:"phone",className:"text-white font-bold ml-3 text-sm",children:"Your Bank account holder Name*"}),(0,t.jsx)("input",{value:d,onChange:e=>u(e.target.value),type:"text",className:"w-full text-white rounded-2xl py-3 bg-transparent border-[1px] outline-none  px-2 text-sm font-black",placeholder:"Bank account holder Name*"})]}),(0,t.jsxs)("div",{className:"flex flex-col mt-4 justify-center px-5 w-full items-start",children:[(0,t.jsx)("label",{name:"phone",className:"text-white font-bold ml-3 text-sm",children:"Your Bank Account Number*"}),(0,t.jsx)("input",{value:f,onChange:e=>p(e.target.value),type:"number",className:"w-full text-white rounded-2xl py-3 bg-transparent border-[1px] outline-none  px-2 text-sm font-black",placeholder:"Bank Account Number*"})]}),(0,t.jsxs)("div",{className:"flex flex-col mt-4 justify-center px-5 w-full items-start",children:[(0,t.jsx)("label",{name:"phone",className:"text-white font-bold ml-3 text-sm",children:"Amount *"}),(0,t.jsx)("input",{type:"number",value:b,onChange:e=>h(e.target.value),className:"w-full text-white rounded-2xl py-3 bg-transparent border-[1px] outline-none  px-2 text-sm font-black",placeholder:"Withdraw Amount*"})]}),(0,t.jsx)("div",{className:"flex mt-3 flex-col justify-center px-5 w-full items-start",children:(0,t.jsx)("button",{style:{display:i},onClick:()=>y(),className:"w-full rounded-2xl mt-5 text-white py-3 bg-transparent border-[1px] outline-none  px-2 text-md font-black",children:"Send Request"})})]})})]})]})]})}},7518:function(e,s,l){"use strict";l.r(s);var t=l(9268),a=l(6006);s.default=e=>{let{color:s,visibility:l,vl:n,wd:r}=e,[c,i]=(0,a.useState)("none");return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"w-full h-[70px]",children:(0,t.jsxs)("div",{className:"container naviwrap items-start justify-between flex mx-auto",children:[(0,t.jsxs)("div",{className:"h-[60px] m-3 flex items-center justify-start",children:[(0,t.jsx)("img",{className:"rounded-full h-[53px] w-[55px]",src:"images/logo.png",alt:"log"}),(0,t.jsx)("span",{className:"ml-2 font-black",style:{color:s},children:"Isda Farm"})]}),(0,t.jsxs)("div",{className:"flex menu_wrap justify-between items-center h-[70px] ",style:{width:r,display:c},children:[(0,t.jsx)("button",{onClick:()=>i("none"),className:"w-full flex justify-end",children:(0,t.jsx)("img",{className:"w-[40] h-[40px] rounded-full",src:"images/close.png",alt:"close"})}),(0,t.jsx)("a",{href:"/",style:{color:s,display:l},className:"text-sm font-black",children:"Home"}),(0,t.jsx)("a",{href:"/register",style:{color:s,display:l},className:"text-sm font-black",children:"Sign up"}),(0,t.jsx)("a",{href:"/login",style:{color:s,display:l},className:"text-sm font-black",children:"Login"}),(0,t.jsx)("a",{href:"/dashboard",style:{color:s,display:n},className:"text-sm font-black",children:"Dashboard"}),(0,t.jsx)("a",{href:"/wallet",style:{color:s,display:n},className:"text-sm font-black",children:"wallet"}),(0,t.jsx)("a",{href:"/referral",style:{color:s,display:n},className:"text-sm font-black",children:"referral"}),(0,t.jsx)("a",{href:"/profile",style:{color:s,display:n},className:"text-sm font-black",children:"profile"})]}),(0,t.jsx)("button",{onClick:()=>i("flex"),className:"w-[40px] navBtn flex justify-end m-4",children:(0,t.jsx)("img",{className:"w-[35px] h-[35px] rounded-md",src:"images/navicon.png",alt:"close"})}),(0,t.jsxs)("div",{className:"flex menu_wrap_web justify-between items-center h-[70px] ",style:{width:r},children:[(0,t.jsx)("a",{href:"/",style:{color:s,display:l},className:"text-sm font-black",children:"Home"}),(0,t.jsx)("a",{href:"/register",style:{color:s,display:l},className:"text-sm font-black",children:"Sign up"}),(0,t.jsx)("a",{href:"/login",style:{color:s,display:l},className:"text-sm font-black",children:"Login"}),(0,t.jsx)("a",{href:"/dashboard",style:{color:s,display:n},className:"text-sm font-black",children:"Dashboard"}),(0,t.jsx)("a",{href:"/wallet",style:{color:s,display:n},className:"text-sm font-black",children:"wallet"}),(0,t.jsx)("a",{href:"/referral",style:{color:s,display:n},className:"text-sm font-black",children:"referral"}),(0,t.jsx)("a",{href:"/profile",style:{color:s,display:n},className:"text-sm font-black",children:"profile"})]})]})})})}}},function(e){e.O(0,[15,253,961,744],function(){return e(e.s=179)}),_N_E=e.O()}]);