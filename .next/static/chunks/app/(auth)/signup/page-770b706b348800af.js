(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[129],{4725:function(e,s,l){Promise.resolve().then(l.bind(l,3775))},3775:function(e,s,l){"use strict";l.r(s);var t=l(9268),a=l(6006),n=l(7518),r=l(4214),o=l(6008);s.default=()=>{let{push:e}=(0,o.useRouter)(),[s,l]=(0,a.useState)(""),[i,c]=(0,a.useState)(""),[x,d]=(0,a.useState)(""),[p,m]=(0,a.useState)(""),[u,h]=(0,a.useState)(""),[f,b]=(0,a.useState)(""),[g,j]=(0,a.useState)(""),[w,y]=(0,a.useState)(!1),[N,v]=(0,a.useState)(""),[k,C]=(0,a.useState)(""),[S,_]=(0,a.useState)("none"),F=e=>{let s=atob(e.split(",")[1]),l=e.split(",")[0].split(":")[1].split(";")[0],t=new ArrayBuffer(s.length),a=new Uint8Array(t);for(let e=0;e<s.length;e++)a[e]=s.charCodeAt(e);return new Blob([t],{type:l})},P=()=>{if(!u){alert("Please select an image and enter the amount.");return}let l=new FormData;l.append("phone",s),l.append("username",p),l.append("password",x),l.append("referralCode",g);let t=F(f),a="proofImg_".concat(Date.now(),".jpg");l.append("profilePicture",t,a),r.Z.post("http://api.isda.farm/user",l,{headers:{"Content-Type":"multipart/form-data"}}).then(s=>{c(s.data),200==s.status&&(_("flex"),C(s.data),setTimeout(()=>{e("/login")},2e3))}).catch(e=>{console.log(e)})};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{display:S},className:"absolute bg-[#000000bb] z-50 top-0 left-0 w-full h-screen flex justify-center items-center",children:(0,t.jsxs)("div",{className:"w-[320px] flex flex-col p-10 justify-center items-center h-[320px] rounded-xl bg-white",children:[(0,t.jsx)("h2",{className:"text-md font-bold text-center ",children:k}),(0,t.jsx)("button",{onClick:()=>{_("none"),setBuyWrap("none")},className:"bg-black p-5 mt-5 rounded-full text-white px-20 font-black",children:"Okay"})]})}),(0,t.jsxs)("div",{className:"bg-gradient-to-t from-[#11292d] overflow-hidden h-screen to-sky-500 relative ",children:[(0,t.jsx)("img",{src:"images/fish.png",alt:"fish",className:"w-[140px] h-[140px] fish1 absolute"}),(0,t.jsx)("img",{src:"images/fish.png",alt:"fish",className:"w-[120px] h-[120px] fish2 absolute"}),(0,t.jsx)("img",{src:"images/fish.png",alt:"fish",className:"w-[90px] h-[90px] fish3 absolute"}),(0,t.jsx)("img",{src:"images/fish.png",alt:"fish",className:"w-[70px] h-[70px] fish4 absolute"}),(0,t.jsx)("img",{src:"images/fish.png",alt:"fish",className:"w-[160px] h-[160px] fish5 absolute"}),(0,t.jsx)("img",{src:"images/fish.png",alt:"fish",className:"w-[200px] h-[200px] fish6 absolute"}),(0,t.jsxs)("div",{className:"bubble_wrap ",children:[(0,t.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[25px] h-[25px] b1 rounded-full absolute"}),(0,t.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[15px] h-[15px] b2 rounded-full absolute"}),(0,t.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[15px] h-[15px] b3 rounded-full absolute"}),(0,t.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[20px] h-[20px] b4 rounded-full absolute"}),(0,t.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[10px] h-[10px] b5 rounded-full absolute"}),(0,t.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[25px] h-[25px] b6 rounded-full absolute"}),(0,t.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[13px] h-[13px] b7 rounded-full absolute"}),(0,t.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[22px] h-[22px] b8 rounded-full absolute"}),(0,t.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[15px] h-[15px] b9 rounded-full absolute"}),(0,t.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[15px] h-[15px] b10 rounded-full absolute"}),(0,t.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[15px] h-[15px] b11 rounded-full absolute"})]}),(0,t.jsxs)("div",{className:"h-screen w-full bg-[#00000069] flex-col flex justify-center items-center  absolute top-0 left-0",children:[(0,t.jsx)("div",{className:"absolute top-0 left-0 w-full",children:(0,t.jsx)(n.default,{color:"#fff",visibility:"block",wd:"200px",vl:"none"})}),!1==w?"":(0,t.jsx)("div",{className:"absolute flex justify-center items-center z-50 bg-[#00000076] w-full h-screen left-0 top-0",children:(0,t.jsxs)("div",{className:"w-[350px] h-[350px] flex-col flex justify-center items-center p-8 rounded-lg bg-white",children:[(0,t.jsx)("h3",{className:"text-center font-black",children:"Verify Code"}),(0,t.jsx)("input",{type:"number",onChange:e=>v(e.target.value),placeholder:"enter otp code",className:"w-full my-10 outline-none border-[1px] h-[55px] px-3 rounded-lg"}),(0,t.jsx)("button",{onClick:()=>{r.Z.post("http://api.isda.farm/getCode",{phone:"+1".concat(s),code:N}).then(e=>{e&&200===e.status?(y(!1),P()):alert("your phone didn't verified")}).catch(e=>{console.log(e)})},type:"button",className:"w-full bg-black text-white rounded-lg py-3 px-7",children:"Verify Code"})]})}),(0,t.jsxs)("div",{className:"w-[350px]   bg-[#0098ff75] rounded-xl",children:[(0,t.jsx)("h2",{className:"text-center py-3 mt-4 text-xl text-white font-black",children:"Sign Up"}),(0,t.jsxs)("div",{className:"flex flex-col justify-center px-5 mb-2 items-start",children:[(0,t.jsx)("label",{name:"username",className:"text-white font-bold ml-3 text-sm",children:"Select Your Profile Photo *"}),(0,t.jsx)("input",{onChange:e=>{let s=e.target.files[0];h(s);let l=new FileReader;l.onloadend=()=>{b(l.result)},l.readAsDataURL(s)},type:"file",className:"w-full text-white rounded-2xl profile_photo py-3 bg-transparent border-[1px] outline-none  px-2 text-sm font-black",placeholder:"your full legal name"})]}),(0,t.jsxs)("div",{className:"flex flex-col justify-center px-5 mb-2 items-start",children:[(0,t.jsx)("label",{name:"username",className:"text-white font-bold ml-3 text-sm",children:"Your Full Legal Name *"}),(0,t.jsx)("input",{value:p,onChange:e=>m(e.target.value),type:"text",className:"w-full text-white rounded-2xl py-3 bg-transparent border-[1px] outline-none  px-2 text-sm font-black",placeholder:"your full legal name"})]}),(0,t.jsxs)("div",{className:"flex flex-col justify-center px-5 items-start",children:[(0,t.jsx)("label",{name:"phone",className:"text-white font-bold ml-3 text-sm",children:"Phone *"}),(0,t.jsx)("input",{value:s,onChange:e=>l(e.target.value),type:"number",className:"w-full text-white rounded-2xl py-3 bg-transparent border-[1px] outline-none  px-2 text-sm font-black",placeholder:" Phone with country code without + "})]}),(0,t.jsxs)("div",{className:"flex flex-col justify-center px-5 my-2 items-start",children:[(0,t.jsx)("label",{name:"phone",className:"text-white font-bold text-sm ml-3",children:"password *"}),(0,t.jsx)("input",{type:"password",value:x,onChange:e=>d(e.target.value),className:"w-full text-white rounded-2xl py-3 bg-transparent border-[1px] outline-none  px-2 text-sm font-black",placeholder:"your password"})]}),(0,t.jsxs)("div",{className:"flex flex-col justify-center px-5 my-2 items-start",children:[(0,t.jsx)("label",{name:"phone",className:"text-white font-bold text-sm ml-3",children:"refercode optional ! *"}),(0,t.jsx)("input",{type:"text",value:g,onChange:e=>j(e.target.value),className:"w-full text-white rounded-2xl py-3 bg-transparent border-[1px] outline-none  px-2 text-sm font-black",placeholder:"refer code optional !"})]}),(0,t.jsx)("h3",{className:"text-center text-white my-3",children:i}),(0,t.jsxs)("div",{className:"flex flex-col justify-center px-5  items-start",children:[(0,t.jsx)("button",{type:"button",onClick:()=>P(),className:"w-full rounded-2xl mt-4 text-white py-3 bg-transparent border-[1px] outline-none  px-2 text-md font-black",children:"Sign Up"}),(0,t.jsxs)("p",{className:"text-white mt-5 mb-10",children:["i don't have an account  ",(0,t.jsx)("a",{className:"text-blue-400",href:"/login",children:"Login"})]})]})]})]})]})]})}},7518:function(e,s,l){"use strict";l.r(s);var t=l(9268),a=l(6006);s.default=e=>{let{color:s,visibility:l,vl:n,wd:r}=e,[o,i]=(0,a.useState)("none");return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"w-full h-[70px]",children:(0,t.jsxs)("div",{className:"container naviwrap items-start justify-between flex mx-auto",children:[(0,t.jsxs)("div",{className:"h-[60px] m-3 flex items-center justify-start",children:[(0,t.jsx)("img",{className:"rounded-full h-[53px] w-[55px]",src:"images/logo.png",alt:"log"}),(0,t.jsx)("span",{className:"ml-2 font-black",style:{color:s},children:"FishFarm"})]}),(0,t.jsxs)("div",{className:"flex menu_wrap justify-between items-center h-[70px] ",style:{width:r,display:o},children:[(0,t.jsx)("button",{onClick:()=>i("none"),className:"w-full flex justify-end",children:(0,t.jsx)("img",{className:"w-[40] h-[40px] rounded-full",src:"images/close.png",alt:"close"})}),(0,t.jsx)("a",{href:"/",style:{color:s,display:l},className:"text-sm font-black",children:"Home"}),(0,t.jsx)("a",{href:"/signup",style:{color:s,display:l},className:"text-sm font-black",children:"Sign up"}),(0,t.jsx)("a",{href:"/login",style:{color:s,display:l},className:"text-sm font-black",children:"Login"}),(0,t.jsx)("a",{href:"/dashboard",style:{color:s,display:n},className:"text-sm font-black",children:"Dashboard"}),(0,t.jsx)("a",{href:"/wallet",style:{color:s,display:n},className:"text-sm font-black",children:"wallet"}),(0,t.jsx)("a",{href:"/referral",style:{color:s,display:n},className:"text-sm font-black",children:"referral"}),(0,t.jsx)("a",{href:"/profile",style:{color:s,display:n},className:"text-sm font-black",children:"profile"})]}),(0,t.jsx)("button",{onClick:()=>i("flex"),className:"w-[40px] navBtn flex justify-end m-4",children:(0,t.jsx)("img",{className:"w-[35px] h-[35px] rounded-md",src:"images/navicon.png",alt:"close"})}),(0,t.jsxs)("div",{className:"flex menu_wrap_web justify-between items-center h-[70px] ",style:{width:r},children:[(0,t.jsx)("a",{href:"/",style:{color:s,display:l},className:"text-sm font-black",children:"Home"}),(0,t.jsx)("a",{href:"/signup",style:{color:s,display:l},className:"text-sm font-black",children:"Sign up"}),(0,t.jsx)("a",{href:"/login",style:{color:s,display:l},className:"text-sm font-black",children:"Login"}),(0,t.jsx)("a",{href:"/dashboard",style:{color:s,display:n},className:"text-sm font-black",children:"Dashboard"}),(0,t.jsx)("a",{href:"/wallet",style:{color:s,display:n},className:"text-sm font-black",children:"wallet"}),(0,t.jsx)("a",{href:"/referral",style:{color:s,display:n},className:"text-sm font-black",children:"referral"}),(0,t.jsx)("a",{href:"/profile",style:{color:s,display:n},className:"text-sm font-black",children:"profile"})]})]})})})}}},function(e){e.O(0,[15,253,961,744],function(){return e(e.s=4725)}),_N_E=e.O()}]);