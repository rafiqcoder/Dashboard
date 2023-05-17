import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Login = () => {
    const [phone,setPhone] = useState(false)


    return (
         <>
             <Head>
                <title key="title">Dashboard</title>
                <meta name="description" key="description" content="contact" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
              </Head>
                 <div className="overflow-x-hidden overflow-hidden ">
                     <div className="sm:flex  overflow-hidden  justify-around  w-screen mt-16 sm:m-0">
                <div className="  h-screen sm:w-[50vw] mt-10 sm:mt-0 sm:flex sm:flex-col sm:items-center sm:justify-center">
                <div className="flex items-center lg:w-7/12 w-11/12 px-6 mx-auto">
                    <div className="flex-1">
                        <div className="text-center">
                            <div className="flex justify-start mx-auto">
                                <h1 className='text-3xl font-bold'>Login</h1>
                            </div>
                            <p className="mt-3 text-gray-500 dark:text-gray-300 text-left">Dont&apos;t you have account? <Link href='/register' className='text-blue-600'>Register</Link></p>
                        </div>
                                    <div className='my-4 mt-6 flex gap-5 font-medium '> <span className={`text-gray-500 pb-2 px-1 ${!phone? 'border-b-2 border-blue-600':''}`} onClick={()=>setPhone(false)}>Email</span><span className={`text-gray-500 pb-2 px-1 ${phone? 'border-b-2 border-blue-600':''}`} onClick={()=>setPhone(true)}>Phone Number</span>
                                    </div>
                                    {
                                        phone?<div>
                                        <h1 className='font-bold text-xl'>Not Availale in the demo</h1>
                                        <p className="mt-1 text-gray-500 dark:text-gray-300 text-left w-[60%]">To prevent unnecessary costs we disabled this feature in the demo.</p>
                                    </div>:<div className="mt-8">
                            <form>
             
                               <div className="mt-7">
                                    <div className="flex justify-between mb-0 relative">
                                        <label htmlFor="email" className="text-sm text-gray-600 dark:text-gray-200 absolute top-2 left-4">Email</label>
             
                                    </div>
                                    <input type="email" name="email" id="email" placeholder="demo@devias.io" className="block w-full px-4 py-8 mt-0 text-black placeholder-black text-lg bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 pb-0" />
                                  
                                </div>
                                <div className="mt-7">
                                    <div className="flex justify-between mb-0 relative">
                                        <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200 absolute top-2 left-4">Password</label>
             
                                    </div>
                                    <input type="password" name="password" id="password" placeholder="......." className="block w-full px-4 py-0 mt-0 text-black placeholder-black text-5xl bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 pb-0" />
                                    <a href="#" className="text-sm text-black focus:text-blue-500 hover:text-blue-500 hover:underline">Optionally you can skip</a>
                                </div>
                                <div className="mt-7">
                                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-[#6366F1] rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Continue
                                    </button>
                                </div>
                            </form>
                        </div>
                                    }
             
                    </div>
                </div>
                        </div>
                        <div
                className="flex  flex-col items-center h-full min-h-screen sm:w-[50vw] overflow-hidden lg:pb-20 justify-center pt-20 lg:pt-0 p-10 lg:p-0"
                style={{
                    background:'radial-gradient(50% 50% at 50% 50%, rgb(18, 38, 71) 0%, rgb(9, 14, 35) 100%)',
                }}
                >
                            <div className='text-white text-3xl '>Welcome to Devias Kit </div>
                            <p className='text-white text-lg mt-2 font-smibold mb-10 text-center'>A professional kit that comes with ready-to-use MUI components.</p>
                            <Image width={500} height={100} src="/assets/img/loginbg.svg" className="img-fluid rounded-top" alt=""/>
             
                </div>
                     </div>
                 </div>
         </>
    );
};

export default Login;