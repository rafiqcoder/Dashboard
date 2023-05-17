import DashHeader from "@/components/Dashboard/DashHeader";
import Sidebar from "@/components/Dashboard/Sidebar";
import Head from "next/head";

const DashboardLayout = ({ children }: { children: any }) => {
  return (
     <>
       <Head>
              <title key="title">Dashboard</title>
              <meta name="description" key="description" content="Dashboard" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
           <div className='box-border p-0 m-0 font-sans flex bg-white w-[100vw] overflow-hidden'>
          <div className='w-[15vw] bg-gray-700 text-white '>
            <Sidebar />
          </div>
          <div className="w-[85vw] mx-auto ">
           <DashHeader></DashHeader>
            <div className=" px-2">{children}</div>
          </div>
        </div>
     </>
  );
};

export default DashboardLayout;
