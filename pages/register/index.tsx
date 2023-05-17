import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const register = () => {
    
    return (
        <div className="overflow-x-hidden overflow-hidden ">


      <div className="sm:flex  overflow-hidden  justify-around  w-screen mt-16 sm:m-0">
        
        
        <div className="  h-screen sm:w-[50vw] mt-10 sm:mt-0 sm:flex sm:flex-col sm:items-center sm:justify-center">
        

        

        <div className="flex items-center lg:w-7/12 px-6 mx-auto">
            <div className="flex-1">
                <div className="text-center">
                    <div className="flex justify-start mx-auto">
                        <h1 className='text-3xl font-bold'>Register</h1>
                    </div>

                    <p className="mt-3 text-gray-500 dark:text-gray-300 text-left">Already have account? <Link href='/login' className='text-blue-600'>Login</Link></p>
                </div>
               
                <div className="mt-8">
                                <form>
                                    <div className='mb-4'>
                      
                            <input type="email" name="email" id="email" value="Name" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div>
                           
                            <input type="email" name="email" id="email" placeholder="Email" className="block w-full px-4 py-2 mt-2  bg-white border placeholder-black text-black border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="mt-4">
                            
                            <input type="password" name="password" id="password" placeholder="Password" className="block w-full px-4 py-2 mt-2 text-black placeholder-black bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="mt-6">
                           <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-[#6366F1] rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Continue
                                    </button>
                        </div>

                    </form>

                </div>
            </div>
        </div>

                </div>
                <div
          className="hidden sm:flex  flex-col items-center h-full min-h-screen sm:w-[50vw] overflow-hidden lg:pb-20 justify-center"
          style={{
            background:'radial-gradient(50% 50% at 50% 50%, rgb(18, 38, 71) 0%, rgb(9, 14, 35) 100%)',
          }}
        >
                    <div className='text-white text-3xl '>Welcome to Devias Kit </div>
                    <p className='text-white text-lg mt-2 font-smibold mb-10'>A professional kit that comes with ready-to-use MUI components.</p>
                    <Image width={500} height={100} src="/assets/img/loginbg.svg" className="img-fluid rounded-top" alt=""/>
          
        </div>
      </div>
    </div>
    );
};

export default register;