

// export default Sidebar;
'use client'
import React, { useState,useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'
import { useThemeContext } from '../app/Context/theme'




const Sidebar = () => {

  const pathname = usePathname()
  const { isOpen, setIsOpen} = useThemeContext();
  // Create a custom class for the background gradient
const active = 'bg-gradient-to-r from-[#E1E5FF] to-[#FFE6F4] rounded-[10px] py-[10px] px-[16px]';

 
const toggleSidebar = () => {
  setIsOpen(!isOpen);
};
  useEffect(() => {
    // Check the screen size and close the sidebar by default for medium screens
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    if (mediaQuery.matches) {
      setIsOpen(false);
    }
  }, [setIsOpen]);

  const handleLinkClick = () => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    if (mediaQuery.matches) {
      // Close the sidebar when a link is clicked on screens with max-width 768px
      setIsOpen(false);
    }
  };
  

  return (

    <>

 
    <div className={`bg-white min-h-[950px] h-screen ${isOpen ? "w-[294px] translate-x-0 mr-4" : "-translate-x-full w-0"} h-[950px] py-[48px] rounded-xl flex flex-col justify-between items-center duration-300 `} >
      <div className=''>
      <button onClick={toggleSidebar} className={`w-[48px] h-[48px] rounded-full bg-white p-3 relative ${isOpen ? "left-52": "left-0"} ml-12 bottom-12`}>
    {isOpen ? (
      <Image src="/burger.svg" width={24} height={24} alt="Close" />
    ) : (
      <Image src="/burger.svg" width={24} height={24} alt="Open" />
    )}
  </button>
      <div className={`${isOpen ? "" : "w-0 hidden"}`}>
        
      <div>
      <h1 className='text-[#000000] text-[40px] leading-[48px] font-black text-center -mt-14'>Logo</h1>
        <Link href="/bots" onClick={handleLinkClick} className={`py-[10px] px-[16px] flex gap-3 mt-12  ${pathname === '/bots' ? `${active}` : ''}`}>
          <Image src="/message-circle.svg" width={18} height={18} alt="Link 1" />
          <h1 className='text-[17px] text-[#0A0D26] leading-5 font-normal'>Bots</h1>
        </Link>
        <Link href="/phone" onClick={handleLinkClick} className={`py-[10px] px-[16px] flex gap-3 ${pathname === '/phone' ? `${active}` : ''}`}>
          <Image src="/phone.svg" width={18} height={18} alt="Link 2" />
          <h1 className='text-[17px] text-[#0A0D26] leading-5 font-normal'>Phone Numbers</h1>
        </Link>
        <Link href="/agents" onClick={handleLinkClick} className={`py-[10px] px-[16px] flex gap-3 ${pathname === '/agents' ? `${active}` : ''}`}>
          <Image src="/user.svg" width={18} height={18} alt="Link 3" />
          <h1 className='text-[17px] text-[#0A0D26] leading-5 font-normal'>Agents</h1>
        </Link>
      </div>
      
      </div>
    </div>
    <div className={`${isOpen ? "flex flex-col justify-end" : "w-0 hidden"}`}>
        <Link href="/setting" onClick={handleLinkClick} className={`py-[10px] px-[16px] flex gap-3 mx-auto w-[202px] ${pathname === '/setting' ? `${active}` : ''}`}>
          <Image src="/setting.svg" width={18} height={18} alt="Link 4" />
          <h1 className='text-[17px] text-[#0A0D26] leading-5 font-normal'>Settings</h1>
        </Link>
        <button className='flex py-[10px] px-[16px] gap-3 w-[202px]'>
          <Image src="/log-out.svg" width={18} height={18} alt="Link 4" />
          <h1 className='text-[17px] text-[#FF453A] leading-5 font-normal'>Logout</h1>
        </button>
      </div>
      </div>
      
          </>
  );
};

export default Sidebar;
