import Image from "next/image";

import Layout from "@/Layout/Layout";
import contactbg from "@/public/assets/img/contact.png";
import supportImg from "@/public/assets/img/robot-icon.png";
import salesImg from "@/public/assets/img/support-icon.png";
import Head from "next/head";
/* eslint-disable react/no-unescaped-entities */
const contact = () => {
  return (
     <>
       <Head>
            <title key="title">Contact</title>
            <meta name="description" key="description" content="contact" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
           <div className="w-100 bg-[#F2F1EF] md:py-[150px] py-0">
        <div className="container mx-auto md:w-[1080px] w-100 bg-[#ffffff] z-0 overflow-hidden">
          <div className="flex md:flex-row flex-col relative">
            <div className="md:w-1/2 w-100 md:h-auto h-[650px]">
              <h1 className="lg:text-5xl text-3xl font-bold text-[#08353B] pl-[60px] pt-[40px]">
                Contact us
              </h1>
            </div>
            <Image 
              className="md:w-auto w-auto md:block hidden pointer-events-none" priority={true} width={540} height={650}
              src={contactbg}
              alt="contact Background"
            />
            <div className="absolute lg:top-[25%] md:top-[20%] top-[13%] left-[60px] flex md:flex-row flex-col">
              <div className="lg:py-[30px] py-[15px] lg:px-[40px] px-[15px] lg:w-[400px] w-[250px] bg-[#ffffff] shadow-xl flex flex-col justify-center items-center md:mr-4 mr-0 md:mb-0 mb-4 z-0">
                <Image
                  className="pointer-events-none w-[80px] rounded-full lg:mb-[20px] mb-[10px]"
                  width={100} height={100}
              src={salesImg}
                  alt="accout Support Icon"
                />
                <h1 className="lg:text-3xl text-xl font-semibold text-[#08353B] text-center lg:mb-[20px] mb-[10px]">
                  Talk to a member of our Sales team
                </h1>
                <p className="lg:text-sm text-xs text-[#08353B] text-center lg:mb-[20px] mb-[10px]">
                  We'll help you find the right products and pricing for your
                  business.
                </p>
                <button className="btn bg-[#08353B] text-[#ffffff] rounded-none normal-case w-[100%] lg:text-lg text-md font-medium">
                  Contact Sales
                </button>
              </div>
              <div className="lg:py-[30px] py-[15px] lg:px-[40px] px-[15px] lg:w-[400px] w-[250px] bg-[#ffffff] shadow-xl flex flex-col justify-center items-center">
                <Image
                  className="pointer-events-none w-[80px] rounded-full lg:mb-[20px] mb-[10px]"
                  width={100} height={100}
              src={supportImg}
                  alt=" Support Icon"
                />
                <h1 className="lg:text-3xl text-xl font-semibold text-[#08353B] text-center lg:mb-[20px] mb-[10px]">
                  Product and account support
                </h1>
                <p className="lg:text-sm text-xs text-[#08353B] text-center lg:mb-[20px] mb-[10px]">
                  Our help center is fresh and always open for business. We're
                  here for land a hand.
                </p>
                <button className="btn bg-[#08353B] text-[#ffffff] rounded-none normal-case w-[100%] lg:text-lg text-md font-medium">
                  Go to the help center
                </button>
              </div>
            </div>
          </div>
        </div>
           </div>
     </>
    
  );
};

export default contact;
