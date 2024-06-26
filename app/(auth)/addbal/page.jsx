
'use client'
import axios from "axios";
import Nav from "../../(components)/Nav";
import { useState, useEffect } from "react";
const AddBal =()=>{
  const [userData, setUserData] = useState();
  const [amount, setAmount] = useState('');
  const [selectImage, setSelectImage] = useState(null);
  const [res, setRes] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('usersOb');
    setUserData(JSON.parse(data));
  }, []);

  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  const postHandle = () => {
    try {
      if (!selectImage || !amount) {
        console.log('Please select an image and enter the amount.');
        return;
      }

      const formData = new FormData();
      formData.append('user', userData.userId);
      formData.append('amount', amount);
      formData.append('type', 'deposit');
      const blob = dataURItoBlob(previewUrl);
               const uniqueFilename = `proofImg_${Date.now()}.jpg`;

               formData.append('proofImg', blob, uniqueFilename);

      axios
        .post('https://fishfarm.onrender.com/transaction', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          setRes(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectImage(file);

    // Create a preview URL for the selected image
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };


  

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
 <div className="flex justify-between bl_wrap items-center">
 <div className="w-[350px]  my-4 mx-2 bg-[#0098ff75] mt-10 rounded-xl">
            <div className="flex flex-col justify-center px-5 my-5 items-start">
               <p className="font-black text-white">Payment Type*</p>
               <div className="border-[1px] rounded-lg p-2 flex w-[160px] mb-4  ">
                   <img src="images/bank.png"  alt="bank" className="w-[40px] rounded-lg h-[40px]" />
                   <p className="leading-4 ml-3 text-white font-[400]">Asia United <br/>Bank</p>
              
                   {previewUrl && <img src={previewUrl} alt="Preview" style={{ width: '120px', marginLeft:'100px', height: '70px' }} />}
 
               </div>


               <div className="bg-[#00b8ff70] rounded-xl p-5 ">
                 <h2 className="font-black text-white ">Payment Details</h2>
                 <p className="text-sm text-white font-[400]">Asia United Bank Details</p>
                 <p className="text-sm text-white font-[400]">project psalms web dev services</p>
                 <p className="font-black text-white">319010001974</p>
               </div>
            </div>

         
        </div>

 </div>
     
 
 <div className="w-[350px] justify-center items-center my-4 mx-2 bg-[#0098ff75] rounded-xl">
            <div className="flex flex-col justify-center px-5 my-5 items-start">
                              <h3 className="text-green-400">{res == "" ? "": res}</h3>   
            <div className="flex flex-col justify-center px-5 mb-4 items-start">
                <label  name="username" className="text-white font-bold ml-3 text-sm">Select Proof of transaction Photo</label>
                <input name="proofImg" type="file" accept="image/*" onChange={handleImageChange} className="w-full text-white rounded-2xl profile_photo py-3 bg-transparent border-[1px] outline-none  px-2 text-sm font-black" placeholder="your full legal name" />
            </div>
            <div className="flex flex-col justify-center px-5 w-full items-start">
                <label  name="phone" className="text-white font-bold ml-3 text-sm">Amount *</label>
                <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} className="w-full text-white rounded-2xl py-3 bg-transparent border-[1px] outline-none  px-2 text-sm font-black" placeholder="Amount:" />
            </div>

            <div className="flex flex-col justify-center px-5 w-full items-start">
                <button type="button" onClick={()=> postHandle()} className="w-full rounded-2xl mt-5 text-white py-3 bg-transparent border-[1px] outline-none  px-2 text-md font-black" >
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



export default AddBal