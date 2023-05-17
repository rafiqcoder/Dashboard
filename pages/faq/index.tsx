
import Image from "next/image";
import styles from "../../styles/Faq.module.css";
import { FaList, FaPhoneAlt, FaRegEnvelope, FaRegUser } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import Head from "next/head";

const faq = () => {
  return (
    <>
      <Head>
              <title key="title">FAQ</title>
              <meta name="description" key="description" content="FAQ" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
      <div className="h-screen bg-white overflow-hidden pt-10">
        <div className="container mx-auto md:w-[960px] w-100 ">
          <div>
            <h1 className="md:text-5xl text-3xl text-center font-semibold mt-4">
              Have Some Question?
            </h1>
            <p className="text-sm text-center md:w-3/5 w-4/5 mx-auto mt-2">
              Thank you for your interest in our service. Please fill out the form
              below or e-mail us at admin@yourwebsite.com and we will get back to
              you promtly regarding your request.
            </p>
          </div>
          <div className="flex lf:flex-row md:flex-row flex-col mt-[60px]">
            <div className="md:w-1/2 lg:w-1/2 w-100">
              <div className="md:w-[calc(100%-140px)] w-[calc(100%-40px)] mx-auto py-4">
                <Image className="w-100 mx-auto" src="assets/img/support.svg" width={200} height={200} priority={true} alt="" />
                <div className="mt-4">
                  <h2 className="text-4xl mb-3">Get in touch</h2>
                  <hr className="mb-4" />
                  <div className="flex flex-row items-center mb-3 mt-2">
                    <span className="w-[40px] h-[40px]  border-2 border-[#373AAA] flex flex-row justify-center items-center rounded-full mr-4">
                      <i className="fa-solid fa-phone text-[#373AAA]"></i>
                       <FaPhoneAlt className="text-[#373AAA]"></FaPhoneAlt>
                    </span>
                    <p className="text-[#8E8E8E]">+890162564946</p>
                  </div>
                  <div className="flex flex-row items-center mb-3">
                    <span className="w-[40px] h-[40px]  border-2 border-[#373AAA] flex flex-row justify-center items-center rounded-full mr-4">
                      <FaRegEnvelope className="text-[#373AAA]"></FaRegEnvelope>
                    </span>
                    <p className="text-[#8E8E8E]">admin@yourwebsite.com</p>
                  </div>
                  <div className="flex flex-row items-center">
                    <span className="w-[40px] h-[40px]  border-2 border-[#373AAA] flex flex-row justify-center items-center rounded-full mr-4">
                    <GoLocation className="text-[#373AAA]"></GoLocation>
                    </span>
                    <p className="text-[#8E8E8E]">
                      3375 Libby Ln
                      <br />
                      Yuba City, California(CA), 95993
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 lgw-1/2 w-100">
              <div className="w-100 flex flex-col items-end">
                <form
                  className="md:w-[calc(100%-60px)] w-[calc(100%-40px)] mx-auto px-[30px] py-[40px]  rounded-xl border border-[#F8F8F8] shadow-md"
      
                >
                  <div
                    className={`bg-[#F8F8F8]  w-100 rounded-md ${styles.custom_form_element_css_1}`}
                  >
                    <span className={`text-[#8E8E8E] ${styles.form_icon_custom}`}>
                      <FaRegUser/>
                    </span>
                    <input type="text" className="w-100 input_field" required />
                    <label className={`font-semibold text-[#8E8E8E] ${styles.custom_form_item_caption}`}>
                      First Name <span className="text-[red]">*</span>
                    </label>
                  </div>
                  <div
                    className={`bg-[#F8F8F8] w-100 rounded-md ${styles.custom_form_element_css_1} `}
                  >
                    <span className={`text-[#8E8E8E] ${styles.form_icon_custom}`}>
                      <FaRegUser/>
                    </span>
                    <input type="text" className="w-100 input_field" required />
                    <label className={`font-semibold text-[#8E8E8E] ${styles.custom_form_item_caption}`}>
                      Last Name <span className="text-[red]">*</span>
                    </label>
                  </div>
                  <div
                    className={`bg-[#F8F8F8] w-100 rounded-md ${styles.custom_form_element_css_1}`}
                  >
                    <span className={`text-[#8E8E8E] ${styles.form_icon_custom}`}>
                      <FaPhoneAlt></FaPhoneAlt>
                    </span>
                    <input type="text" className="w-100 input_field" required />
                    <label className={`font-semibold text-[#8E8E8E] ${styles.custom_form_item_caption}`}>
                      Phone <span className="text-[red]">*</span>
                    </label>
                  </div>
                  <div
                    className={`bg-[#F8F8F8] w-100 rounded-md ${styles.custom_form_element_css_1}`}
                  >
                    <span className={`text-[#8E8E8E] ${styles.form_icon_custom}`}>
      
                       <FaRegEnvelope></FaRegEnvelope>
                      <i className="fa-solid fa-phone"></i>
                    </span>
                    <input type="text" className="w-100 input_field" required />
                    <label className={`font-semibold text-[#8E8E8E] ${styles.custom_form_item_caption}`}>
                      Email <span className="text-[red]">*</span>
                    </label>
                  </div>
      
                  <div
                    className={`bg-[#F8F8F8] w-100 rounded-md  ${styles.custom_form_element_css_1}`}
                  >
                    <span className={`text-[#8E8E8E] ${styles.form_icon_custom}`}>
                     <FaList></FaList>
                    </span>
                    <textarea
                      name=""
                      rows={5}
                      cols={40}
                      className="w-100 input_field bg-transparent focus:outline-none"
                      required
                    ></textarea>
                    <span className={`font-semibold text-[#8E8E8E] ${styles.custom_form_item_caption}`}>
                      Message <span className="text-[red]">*</span>
                    </span>
                  </div>
                  <div className="w-100">
                    <button className="btn w-[100%] upper-case bg-[#79AE1A] text-white border-0 rounded-md font-bold text-md tracking-wide py-3">
                      SEND MESSAGE
                    </button>
                  </div>
                  <div className="w-100">
                    <p className="text-xs font-semibold text-[#8E8E8E] tracking-wide text-center mt-4">
                      Your Name, Email, Phone & all other information is important
                      to us. We dont share any personal information with others.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    
  );
};

export default faq;
