import React from "react";
 import { FaEye } from "react-icons/fa";
 import { FaEyeSlash } from "react-icons/fa";
 import { FaArrowLeft } from "react-icons/fa";
 import {useNavigate} from "react-router-dom";
function SignUp(){

    let [show,setShow] = React.useState(false);
    const navigate = useNavigate();
    return (
        <div className='w-[100vw] h-[100vh] flex items-center justify-center relative'>
            <div className='w-[50px] h-[50px] bg-[red] absolute top-[10%] left-[20px] rounded-[50%] flex items-center justify-center' onClick={() => navigate("/")}>
                <FaArrowLeft className="w-[25px] h-[30px] text-[white]"/>
            </div>
            <form action="" className="max-w-[900px] w-[90%] h-[600px] flex items-center justify-center flex-col gap-[10px] border-black md:items-start">
     <h1 className="text-[30px] font-bold text-[black]">
      welcome to Airbnb
    </h1>
              <div className='w-[90%] flex items-start justify-start flex-col gap-[10px] mt-[30px]'>
                <label htmlFor="username" className="text-[20px] text-[black]">
                  Username:
                </label>
                <input type="text" id="name" name="name" className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg px-[20px]' />
                </div>
                <div className='w-[90%] flex items-start justify-start flex-col gap-[10px]'>
                <label htmlFor="email" className='text-[20px] text-[black]'>
                  email:
                </label>
                <input type="email" id="email" name="email" className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg px-[20px]' />
                </div>
                <div className='w-[90%] flex items-start justify-start flex-col gap-[10px] relative'>
                <label htmlFor="password" className='text-[20px] text-[black]'>
                  password:
                </label>
                <input type={show?"text":"password"} id="password" name="password" className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg px-[20px]' />
               {!show &&<FaEye className='w-[22px] h-[22px] absolute right-[12%] bottom-[10px] cursor-pointer' onClick={() => setShow(prev => !prev)}/>}
              {show && <FaEyeSlash className='w-[22px] h-[22px] absolute right-[12%] bottom-[10px] cursor-pointer' onClick={() => setShow(prev => !prev)}/>}
                </div>
                <button className='px-[50px] py-[10px] bg-[red] text-[white] rounded-lg hover:bg-[#005999] md:px[100px] '>
                  Sign Up
                </button>
                <p className="text-[16px] text-[black]">
                  Already have an account? <a href="/login" className="text-red-500 hover:underline">Login</a>
                </p>
              </form>
            </div>
    )
}
export default SignUp;