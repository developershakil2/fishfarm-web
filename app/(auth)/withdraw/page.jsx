'use client'
import Nav from "../../(components)/Nav";
import axios from 'axios';
import {useState, useEffect} from 'react'

const Withdraw =()=>{

    const [data, setData] = useState('');
    const [wres, setWres] = useState('');
    const [bankName, setBankName] = useState('');
    const [bank ,setBank] = useState('');
    const [amount, setAmount] = useState('');
    useEffect(()=>{
        const storedData = localStorage.getItem('usersOb');
        const data = JSON.parse(storedData);
        setData(data);
    },[])

    const postHandle = ()=>{
          
        const formData = new FormData();
        formData.append('amount', amount);
        formData.append('user', data.userId);
        formData.append('bank', bank);
        formData.append('type', 'withdraw');
          
           axios.post('http://192.168.0.109:5000/transaction', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }).then((res)=>{
            setWres(res.data);
           }).catch((err)=>{
            console.log(err);
        });
    }



    return(
        <>
        <div className="bg-gradient-to-t from-[#11292d] overflow-hidden h-screen to-sky-500 relative ">
       

       <img src="images/fish.png" alt="fish"  className="w-[140px] h-[140px] fish1 absolute"/>

       <img src="images/fish.png" alt="fish"  className="w-[120px] h-[120px] fish2 absolute"/>

       <img src="images/fish.png" alt="fish"  className="w-[90px] h-[90px] fish3 absolute"/>
  
       <img src="images/fish.png" alt="fish"  className="w-[70px] h-[70px] fish4 absolute"/>
       <img src="images/fish.png" alt="fish"  className="w-[160px] h-[160px] fish5 absolute"/>
       <img src="images/fish.png" alt="fish"  className="w-[200px] h-[200px] fish6 absolute"/>
 


    <div className="bubble_wrap ">
    <img src="images/b2.png" alt="bubble"  className="w-[25px] h-[25px] b1 rounded-full absolute"/>
    <img src="images/b2.png" alt="bubble"  className="w-[15px] h-[15px] b2 rounded-full absolute"/>
    <img src="images/b2.png" alt="bubble"  className="w-[15px] h-[15px] b3 rounded-full absolute"/>
    <img src="images/b2.png" alt="bubble"  className="w-[20px] h-[20px] b4 rounded-full absolute"/>
    <img src="images/b2.png" alt="bubble"  className="w-[10px] h-[10px] b5 rounded-full absolute"/>
    <img src="images/b2.png" alt="bubble"  className="w-[25px] h-[25px] b6 rounded-full absolute"/>
    <img src="images/b2.png" alt="bubble"  className="w-[13px] h-[13px] b7 rounded-full absolute"/>
    <img src="images/b2.png" alt="bubble"  className="w-[22px] h-[22px] b8 rounded-full absolute"/>
    <img src="images/b2.png" alt="bubble"  className="w-[15px] h-[15px] b9 rounded-full absolute"/>
    <img src="images/b2.png" alt="bubble"  className="w-[15px] h-[15px] b10 rounded-full absolute"/>
    <img src="images/b2.png" alt="bubble"  className="w-[15px] h-[15px] b11 rounded-full absolute"/>
 

    </div>

      <div className="h-screen w-full bg-[#00000069] flex-col flex justify-center items-center  absolute top-0 left-0">
        <div className="absolute top-0 left-0 w-full">
        <Nav color={'#fff'} visibility={'none'} vl={'block'}  wd={'30%'}/>
        </div>
  
  
   <div className="w-[350px] justify-center items-center my-4 mx-2 bg-[#0098ff75] rounded-xl">
              <div className="flex flex-col justify-center px-5 my-5 items-start">
                               <h2 className='text-center font-black pt-4 pb-5 text-white text-xl w-full'>Withdraw</h2>
                               <div className="flex flex-col justify-center px-5 w-full items-start">
                  <label  name="phone" className="text-white font-bold ml-3 text-sm">Your Bank Account Name *</label>
                  <input type="text" value={bankName} onChange={(e)=> setBankName(e.target.value)}  className="w-full text-white rounded-2xl py-3 bg-transparent border-[1px] outline-none  px-2 text-sm font-black" placeholder="bank Account Name*" />
              </div>
              <div className="flex flex-col mt-4 justify-center px-5 w-full items-start">
                  <label  name="phone" className="text-white font-bold ml-3 text-sm">Your Bank Account Number*</label>
                  <input value={bank} onChange={(e)=> setBank(e.target.value)} type="number" className="w-full text-white rounded-2xl py-3 bg-transparent border-[1px] outline-none  px-2 text-sm font-black" placeholder="bank Account Number*" />
              </div>
              <div className="flex flex-col mt-4 justify-center px-5 w-full items-start">
                  <label  name="phone" className="text-white font-bold ml-3 text-sm">Amount *</label>
                  <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} className="w-full text-white rounded-2xl py-3 bg-transparent border-[1px] outline-none  px-2 text-sm font-black" placeholder="Withdraw Amount*" />
              </div>
                   <h2 className="text-green-500 text-center">
                      {wres ? wres :''}
                   </h2>
              <div className="flex mt-3 flex-col justify-center px-5 w-full items-start">
                  <button onClick={()=> postHandle()} className="w-full rounded-2xl mt-5 text-white py-3 bg-transparent border-[1px] outline-none  px-2 text-md font-black" >
                      Send Request
                  </button>
                
              </div>
  
                    
              </div>
  
           
          </div>
      </div> 
   



 </div>
        </>
    )
}



export default Withdraw