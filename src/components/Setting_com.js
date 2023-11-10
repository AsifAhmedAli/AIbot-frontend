import React, { useState } from 'react';

import Header_com from './Header_com';
import Image from 'next/image';

const Setting_com = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
        <div className="flex justify-between">
  <h1 className="text-[#0A0D26] ml-16 text-[28px] font-bold leading-8 pt-2">Settings</h1>

       <div className='flex justify-end gap-8'>
       
        <Header_com/>
       </div>
</div>
    <div className="w-full mt-5">
      <div className="bg-white shadow-lg p-4 rounded-lg">
        
        <div className="">
          <div className="flex w-full border-b">
            <div className="flex  space-x-3">
              <button
                className={`w-full text-[#4D4D4D] text-[17px] font-normal py-[8px] px-[16px] leading-5 border-b-2 ${activeTab === 'profile' ? 'border-[#151F6D] text-[#151F6D]' : 'border-transparent text-[#4D4D4D]'} hover:border-[#05081e]`}
                onClick={() => handleTabChange('profile')}
              >
                Profile
              </button>
              <button
                className={`w-full text-[17px] font-normal py-[8px] px-[16px] leading-5 border-b-2 ${activeTab === 'security' ? 'border-[#151F6D] text-[#151F6D] ' : 'border-transparent text-[#4D4D4D]'} hover:border-[#05081e]`}
                onClick={() => handleTabChange('security')}
              >
                Security
              </button>
            </div>
          </div>
          <div className="">
            {activeTab === 'profile' ? (
              <div className='md:flex my-5 '>
              <div className='w-full h-full md:w-[200px] md:h-[200px] mb-2 md:mb-0 mr-8  rounded-xl bg-[#E3E5E8] flex justify-center items-center'>
                <Image src="/profile.svg" width={200} height={200} alt="profile img" className='w-[200px] h-[200px' />
              </div>
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className='flex flex-col'>
                    <label className="text-[#4D4D4D] mb-2 text-[16px] leading-5 font-medium">First Name</label>
                    <input
                      type="text"
                      className="bg-[#F3F3FC] py-[14px] px-[32px] rounded-xl"
                      placeholder="John"
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className="text-[#4D4D4D] mb-2 text-[16px] leading-5 font-medium">Last Name</label>
                    <input
                      type="text"
                      className="bg-[#F3F3FC] py-[14px] px-[32px] rounded-xl"
                      placeholder="Doe"
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className="text-[#4D4D4D] mb-2 text-[16px] leading-5 font-medium">Email</label>
                    <input
                      type="email"
                      className="bg-[#F3F3FC] py-[14px] px-[32px] rounded-xl"
                      placeholder="name@mail.com"
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className="text-[#4D4D4D] mb-2 text-[16px] leading-5 font-medium">Phone</label>
                    <input
                      type="tel"
                      className="bg-[#F3F3FC] py-[14px] px-[32px] rounded-xl"
                      placeholder="Enter your phone"
                    />
                  </div>
                  {/* <div className='flex flex-col'>
                    <label className="text-[#4D4D4D] text-[16px] leading-5 font-medium">Profile Picture</label>
                    <input type="file" className='bg-[#F3F3FC] sm:w-[208%] md:w-[204%] py-[14px] px-[32px] rounded-xl' />
                  </div> */}
                  <div className='flex flex-col'>
  <label className="text-[#4D4D4D] mb-2 text-[16px] leading-5 font-medium">Profile Picture</label>
  <label className="relative bg-[#F3F3FC] sm:w-[208%] md:w-[204%] py-[14px] px-[32px] rounded-xl cursor-pointer">
    <span className="text-[#4D4D4D]">Upload</span>
    <input type="file" className="invisible" accept="image/*" />
  </label>
</div>

                  <div className='sm:mt-24 flex justify-end'>
                    <button className="bg-[#151F6D] text-white py-[14px] px-[32px] rounded-xl">Save Changes</button>
                  </div>
                </div>
              </div>
            ) : activeTab === 'security' ? (
              <div className='sm:w-full md:w-[339px]'>
                <h2 className="text-[#000000] text-[28px] font-bold leading-9 my-5">Change Password</h2>
                <div className='flex flex-col my-4'>
                  <label className="text-[#4D4D4D] mb-2 text-[16px] leading-4 font-medium">Old Password</label>
                  <input
                    type="password"
                    className="bg-[#F3F3FC] py-[14px] px-[32px] rounded-xl"
                    placeholder="Enter old password"
                  />
                </div>
                <div className='flex flex-col my-4'>
                  <label className="text-[#4D4D4D] mb-2 text-[16px] leading-4 font-medium">New Password</label>
                  <input
                    type="password"
                    className="bg-[#F3F3FC] py-[14px] px-[32px] rounded-xl"
                    placeholder="Enter new password"
                  />
                </div>
                <div className='flex flex-col my-4'>
                  <label className="text-[#4D4D4D] mb-2 text-[16px] leading-4 font-medium">Confirm New Password</label>
                  <input
                    type="password"
                    className="bg-[#F3F3FC] py-[14px] px-[32px] rounded-xl"
                    placeholder="Re-enter new password"
                  />
                </div>
                <div className='flex justify-end'>
                  <button className="bg-[#151F6D] text-white py-[14px] px-[32px] rounded-xl">Change Password</button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Setting_com;
