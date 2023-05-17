import React from 'react';
import PersonalInfo from '../../../components/Dashboard/Profile/PersonalInfo';
import DashboardLayout from '@/Layout/DashboardLayout';
import DashCommon from '@/components/Dashboard/DashCommon';

const index = () => {
    return (
        <DashboardLayout>

        <div className=' mx-auto'>
          
               <div className="grid md:grid-cols-3 gap-4 mt-5 w-full">
                <div className="col-span-2">
                    <PersonalInfo></PersonalInfo>
                </div>
                <div className="col-span-1">
                    <PersonalInfo></PersonalInfo>
                </div>
            
            </div>
        </div>
        </DashboardLayout>
    );
};

export default index;