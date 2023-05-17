import DashboardLayout from "@/Layout/DashboardLayout";
import AppChat from "@/components/Dashboard/AppChat";
import AppLimit from "@/components/Dashboard/AppLimit";
import AppUsage from "@/components/Dashboard/AppUsage";
import DashCommon from "@/components/Dashboard/DashCommon";
import Feature from "@/components/Dashboard/Feature";
import Head from "next/head";
import { RiErrorWarningLine, RiShoppingBagFill } from "react-icons/ri";

export interface features  {
  icon?: string | any,
  heading: string,
  title : string,
  description: string,
  footerText: string,
};


const analytics = () => {
  const data = [
    {
      icon : <RiShoppingBagFill></RiShoppingBagFill>,
      heading: 'Jobs',
      title: 'Find your dream job',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.',
      footerText: 'Search Jobs',
    },
    {
         icon : <RiErrorWarningLine></RiErrorWarningLine>,
      heading: 'Help',
      title: 'Need help figuring things out?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.',
      footerText: 'Help Center',
    }
  ]
  return (
    <DashboardLayout>
     
      <div>
        <DashCommon></DashCommon>
        
           <div className="lg:grid lg:grid-cols-3 gap-4 mt-5">
            <AppUsage></AppUsage>
            <AppLimit></AppLimit>
          </div>
          <AppChat className="mt-5"></AppChat>
          
            
          <div className="grid lg:grid-cols-2 gap-4 mt-5">
            {
              data?.map((data:features, index) => <Feature key={index} {...data}></Feature>)
            }
          
              
            </div>
        
        
     </div>
    </DashboardLayout>
  );
};

export default analytics;
