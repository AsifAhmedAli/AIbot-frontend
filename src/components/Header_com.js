import React from 'react'
import Button from './Button'
import Image from 'next/image'


const Header_com = () => {
  return (
    <>
      <div className='flex gap-8'>
       <div className='flex justify-center items-center gap-4'>
       <h1 className='text-[#0A0D26] text-[17px] leading-5 font-medium hidden md:block'>hello, (User)</h1>
        <Image src="/profile.svg" width={50} height={50} alt="Link 1" className='' />
       </div>
      </div>
    </>
  )
}

export default Header_com