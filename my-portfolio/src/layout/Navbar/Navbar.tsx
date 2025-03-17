"use client"
import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useSidebar } from '@/context/useSidebar';
import Sidebar from './NavComponents/Sidebar';
import { CommonTexts } from '../../ui/CommonTexts';
import { NavbarItems } from './NavComponents/NavItems';
import { SelectLanguage } from './NavComponents/SelectLaguage';

const Navbar = () => {
  const {isSideBarActive, toggleSidebar } = useSidebar();

  return (
    <>
			<div className='fixed w-full h-[70px] bg-coalBlue z-[1000]'>
				<header className='relative max-w-5xl h-full flex justify-center lg:justify-between items-center mx-auto px-6'>
					<button 
            className='flex left-6 p-[6px] absolute cursor-pointer rounded-full hover:bg-gray-700 hover:bg-opacity-20 transition-colors duration-150 lg:hidden' 
            onClick={toggleSidebar}
          >
						<Bars3Icon className='text-lightSeaGreen w-6 h-6 sm:w-7 sm:h-7 text-start' />
					</button>
					<CommonTexts className='text-lg' />
					<div className='max-lg:hidden'>
            <NavbarItems />
          </div>
          <div className='max-lg:hidden'>
            <SelectLanguage />
          </div>
				</header>
			</div>

			<Sidebar />      
      {isSideBarActive && (
        <div 
          className="fixed inset-0 bg-black opacity-85 z-[1005] lg:hidden max-smx:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Navbar;