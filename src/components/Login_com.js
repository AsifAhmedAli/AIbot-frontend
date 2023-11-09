import Image from 'next/image';
import React from 'react';

const Login_com = () => {
  return (
    <>
      <div
        className="w-full h-screen bg-cover bg-no-repeat login-bg"
        style={{
          backgroundImage: `url("/login-bg.svg")`,
        }}
      >

      <div className='w-[251px] h-[251px] bg-white rounded-full flex justify-center items-center relative -top-[85px] -left-[15px]'>
        <Image src={'/logo.svg'} width={92} height={48} alt='Logo' className='mt-10'/>
      </div>
        {/* Login Page  */}
        <div className='sm:w-[414px] w-[95%] flex mx-auto bg-[#FFFFFF80] rounded-xl p-8'>
        <div className='flex flex-col w-full'>
        <h1 className='text-[#0A0D26] text-[28px] leading-8 font-bold'>Login to AI Bots</h1>

                 <div className='flex flex-col my-3'>
                    <label className="text-[#0A0D26] mb-2 text-[16px] leading-5 font-medium">Phone</label>
                   
                  <input type="email" placeholder='someone@mail.com' className='bg-[#F3F3FC] py-[14px] px-[32px] rounded-xl' />
                   
                  </div>

                  <div className='flex flex-col my-3'>
                    <div className='flex justify-between'>
                    <label className="text-[#0A0D26] mb-2 text-[16px] leading-5 font-medium">Phone</label>
                    <a href="#" className='#0A0D26 text-[16px] leading-5 font-normal underline'>Forgot Password?</a>
                    </div>
                   
                  <input type="password" placeholder='Enter your password' className='bg-[#F3F3FC] py-[14px] px-[32px] rounded-xl' />
                   
                  </div>
                  <div className='mt-4'>
                    
                   
                  <button className='bg-[#151F6D] w-full text-white text-[17px] leading-4 font-normal py-[14px] px-[32px] rounded-xl'>Login</button>
                   
                  </div>

                  
        </div>
      </div>
        
      </div>
      
    </>
  );
};

export default Login_com;
