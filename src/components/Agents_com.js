'use client'
import React,{useState} from 'react'
import Header_com from './Header_com'
import Image from 'next/image'
import Button from './Button'


const Agents_com = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <div className="flex justify-between">
  <h1 className="text-[#0A0D26] ml-16 text-[28px] font-bold leading-8 pt-2">Agents</h1>

  <div className='flex justify-end gap-8'>
       {/* <Button text="New Bot" onClick={openModal} /> */}
       <button className="bg-[#151F6D] text-white rounded-xl py-[14px] px-[32px] text-[17px] leading-5 font-normal" onClick={openModal}>
          New Agent
        </button>
        <Header_com/>
       </div>
</div>
<div className="bg-white  h-auto rounded-xl p-6 mt-5">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="text-[#151F6D] text-[16px] leading-5 font-bold w-[224px] p-3 text-start">Agent Name</th>
            <th className="text-[#151F6D] text-[16px] leading-5 font-bold w-[224px] p-3 text-start">Phone#</th>
            <th className="text-[#151F6D] text-[16px] leading-5 font-bold w-[224px] p-3 text-start">Bot</th>
            <th className="text-[#151F6D] text-[16px] leading-5 font-bold w-[224px] p-3 text-start"></th>
            <th className="text-[#151F6D] text-[16px] leading-5 font-bold w-[224px] p-3 flex justify-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-[#0A0D26] text-[16px] font-normal leading-5 w-[224px] p-3 text-start">Agent Name</td>
            <td className="text-[#0A0D26] text-[16px] font-normal leading-5 w-[224px] p-3 text-start">123 456 789</td>
            <td className="text-[#0A0D26] text-[16px] font-normal leading-5 w-[224px] p-3 text-start">Bot 1</td>
            <td className="text-[#0A0D26] text-[16px] font-normal leading-5 w-[224px] p-3 text-start"></td>
            <td className="text-[#0A0D26] text-[16px] font-normal leading-5 w-[224px] p-3 flex justify-center items-center"><Image src="/edit.svg" width={24} height={24} alt="Close" /></td>
          </tr>
          <tr>
            <td className="text-[#0A0D26] text-[16px] font-normal leading-5 w-[224px] p-3 text-start">Agent Name</td>
            <td className="text-[#0A0D26] text-[16px] font-normal leading-5 w-[224px] p-3 text-start">123 456 789</td>
            <td className="text-[#0A0D26] text-[16px] font-normal leading-5 w-[224px] p-3 text-start">Bot 2</td>
            <td className="text-[#0A0D26] text-[16px] font-normal leading-5 w-[224px] p-3 text-start"></td>
            <td className="text-[#0A0D26] text-[16px] font-normal leading-5 w-[224px] p-3 flex justify-center items-center"><Image src="/edit.svg" width={24} height={24} alt="Close" /></td>
          </tr>
         
        </tbody>
      </table>
    </div>

    {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-700 opacity-75"></div>
          <div className="relative bg-white w-full md:w-[500px] rounded-xl p-4">
          <h1 className='text-[#424D5B] text-[20px] leading-6 font-semibold mb-5'>New Agent / Edit Agent</h1>
            <button
              className="absolute top-4 right-4 text-[#0A0D26] text-xl cursor-pointer"
              onClick={closeModal}
            >
              &#215;
            </button>
            
            <div>

            <div className='flex flex-col my-3'>
                    <label className="text-[#0A0D26] mb-2 text-[16px] leading-5 font-medium">Agent Name</label>
                   
                  <input type="text" placeholder='Enter Here' className='bg-[#F3F3FC] py-[14px] px-[32px] rounded-xl' />
                   
                  </div>
            <div className='flex flex-col my-3'>
                    <label className="text-[#0A0D26] mb-2 text-[16px] leading-5 font-medium">Bot</label>
                   <div className='bg-[#F3F3FC] py-[14px] pl-[45px] pr-[32px] rounded-xl'>
                   <select name="" id="" className='bg-[#F3F3FC] w-full -ml-2 outline-none'>
                   <option value="" disabled selected>Select</option>
                      <option value="">Bot 1</option>
                      <option value="">Bot 2</option>
                    </select>
                   </div>
                  </div>
            <div className='flex flex-col my-3'>
                    <label className="text-[#0A0D26] mb-2 text-[16px] leading-5 font-medium">Phone#</label>
                   <div className='bg-[#F3F3FC] py-[14px] pl-[45px] pr-[32px] rounded-xl'>
                   <select name="" id="" className='bg-[#F3F3FC] w-full -ml-2 outline-none'>
                      <option value="" disabled selected>Select</option>
                      <option value="" >123 456 789</option>
                      <option value="">123 456 789</option>
                    </select>
                   </div>
                  </div>

                  

                  <div className='flex justify-end mt-14'>
                    <button className='bg-[#151F6D] py-[14px] px-[32px] rounded-xl text-white text-[17px] leading-5 font-normal my-3'>Save</button>
                  </div>
            </div>
          </div>
        </div>
      )}

    </>
    
  )
}

export default Agents_com