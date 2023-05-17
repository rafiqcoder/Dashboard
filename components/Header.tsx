"use client";
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx'

import Link from 'next/link';
// exclude header from faq page
const toExclude = ['/dashboard']
 
const Header = () => {
    const [menuState, setMenuState] = useState(false)


   const router = useRouter()
  //current route 
  const { pathname,params,asPath } = router as any;
       let currentPath = `/${pathname.split('/')[1]}`

     if (toExclude.includes(currentPath)) return <></>
    return (
        <div className=" bg-[#D85460] z-10">
            <div className="flex justify-between items-center h-[70px] p-2 w-[97%] mx-auto lg:max-w-[1400px]">
               <h2 className='lg:block hidden text-2xl uppercase text-white'>Logo</h2>
                <ul className="lg:flex hidden justify-around items-center w-[30%] text-lg">
                    <Link href='/' className={`hover:text-white hover:border-b-2 pb-1 hover:border-amber-600 duration-300 cursor-pointer hover:font-semibold   ${
                      pathname === "/"
                        ? " text-white border-amber-600 border-b-2 font-semibold"
                        : ""
                    }`}>Home</Link>
                    <li className="hover:text-white hover:border-b-2 pb-1 hover:border-amber-600 duration-300 cursor-pointer hover:font-semibold w-[50px]">About</li>
                    <li className="hover:text-white hover:border-b-2 pb-1 hover:border-amber-600 duration-300 cursor-pointer hover:font-semibold w-[50px]">Services</li>
                   <Link href='/faq'  className={`hover:text-white hover:border-b-2 pb-1 hover:border-amber-600 duration-300 cursor-pointer hover:font-semibold  ${
                      pathname === "/faq"
                        ? " text-white border-amber-600 border-b-2 font-semibold"
                        : ""
                    }`}>Faq</Link>
                    <Link  href='/contact'  className={`hover:text-white hover:border-b-2 pb-1 hover:border-amber-600 duration-300 cursor-pointer   hover:font-semibold w-[50px]${
                      pathname === "/contact"
                        ? " text-white border-amber-600 border-b-2 font-semibold"
                        : ""
                    }`}>Contact</Link>
                    <Link  href='/login'  className={`hover:text-white hover:border-b-2 pb-1 hover:border-amber-600 duration-300 cursor-pointer   hover:font-semibold w-[50px]${
                      pathname === "/login"
                        ? " text-white border-amber-600 border-b-2 font-semibold"
                        : "  "
                    }`}>Login</Link>
                   
                </ul>
            
                <div className="flex justify-between w-full lg:hidden overflow-hidden z-10">
                    <div className="flex ">
                         <h2 className=' lg:hidden text-white font-bold'>Logo</h2>
                        <div className={`absolute w-[250px] min-h-screen  p-2 rounded-md  bg-gray-700 top-0 right-0 ${!menuState && 'hidden'} duration-300 lg:hidden block z-0`}>
            
                            <ul className='gap-2 flex justify-center items-center flex-col min-h-screen sticky top-0 w-[200px] z-0'>
                                <Link href='/' className={`hover:text-amber-400  text-2xl font-semibold hover:bg-white p-1 rounded-md${
                      pathname === "/"
                        ? " text-amber-400 border-amber-600 bg-white border-b-2 font-semibold"
                        : " text-gray-50 "
                    }`}>Home</Link>
                                <Link href='/about' className='hover:text-amber-400 text-gray-50 text-2xl font-semibold hover:bg-white p-1 rounded-md'>About</Link>
                                <Link href='/services' className='hover:text-amber-400 text-gray-50 text-2xl font-semibold hover:bg-white p-1 rounded-md'>Services</Link>
                                <Link href='faq' className={`hover:text-amber-400 text-2xl font-semibold hover:bg-white p-1 rounded-md ${
                      pathname === "/faq"
                        ? " text-amber-400 border-amber-600 bg-white border-b-2 font-semibold"
                        : " text-gray-50  "
                    }`}>FAQ</Link>
                                <Link href="/contact" className={`hover:text-amber-400 text-2xl font-semibold hover:bg-white p-1 rounded-md ${
                      pathname === "/contact"
                        ? " text-amber-400 border-amber-600 bg-white border-b-2 font-semibold"
                        : " text-gray-50  "
                    }`}>Contact</Link>
                                <Link href="/login" className={`hover:text-amber-400  text-2xl font-semibold hover:bg-white p-1 rounded-md ${
                      pathname === "/login"
                        ? " text-amber-400 border-amber-600 bg-white border-b-2 font-semibold"
                        : " text-gray-50  "
                    }`}>Login</Link>
                            </ul>
                        </div>
                    </div>
                    <div onClick={() => setMenuState(!menuState)} className='lg:hidden block'>
                        {
                            menuState ? <RxCross2 className='text-2xl font-light text-white absolute right-2 z-10' /> : <HiOutlineMenu className='text-2xl font-light text-white' />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;