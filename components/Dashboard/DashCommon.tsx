import Image from "next/image";
import { BiRightArrowAlt } from 'react-icons/bi';
import { RiListSettingsFill } from 'react-icons/ri';

type Card={
  id : number,
  name : string,
  tasks : number,
  done? : number,
  image : string,
  navigationText : string

}

const DashCommon = () => {

  const card1:Card[] =[
    {
      id : 1,
      name : 'Summery Task',
      tasks : 32,
      done: 12,
      image : "https://i.ibb.co/Qn6W82q/3123473-removebg-preview.png",
      navigationText : "See All Activity"
    },
    {
      id : 2,
      name : 'Overdue Tasks',
      tasks : 16,
      image : "https://i.ibb.co/Qn6W82q/3123473-removebg-preview.png",
      navigationText : "Go to Kanban"
    },
    {
      id : 3,
      name : 'Open Issues',
      tasks : 21,
      image : "https://i.ibb.co/Qn6W82q/3123473-removebg-preview.png",
      navigationText : "Go to Issues"
    },
  ]

  return (
<div>
    <div className=" mx-auto pt-2  bg-white overflow-hidden">
{/* overview page        */}
    <div className="flex justify-between items-center">
      <h3 className="text-[25px] font-semibold">Overview</h3>
      <button className="bg-primary-color px-3 py-2 rounded-lg text-white mr-10">+ New App</button>
    </div>
{/* overview page end       */}

{/* summary cards  */}
    <div className="my-[20px] gap-3 flex flex-col lg:flex-row w-full">
      {
        card1?.map(card => <div key={card?.id} className="  border border-gray-200 hover:border-gray-300 shadow-lg rounded-xl w-full divide-y">
          <div className="flex gap-2 px-3">
          <Image src={card.image} alt="Image" className="w-[120px] h-[120px]" width={120} height={120} />
          <div className="py-4 flex flex-col gap-3">
            <p className="text-gray-500 text-[14px]">{card.name}</p>
            <h4 className="text-[36px] font-bold">{card.tasks}</h4>
          </div>
          </div>

    {/* footer  */}
          <div className="px-3 py-3">
          <p className="text-[12px] text-black font-semibold flex gap-2 items-center">{card.navigationText} <BiRightArrowAlt className="text-[16px]"/></p>
          </div>

        </div> )
      }

    </div>
{/* summary cards end */}


{/* update cards  */}

    <div className="my-[20px] w-full lg:grid grid-cols-3 gap-4">
      {/* card1  */}
      <div className="px-3 py-2 bg-[#F5F7FF] rounded-lg md:flex gap-3 col-span-2 ">
      <Image src='/assets/img/girlwithleptop.png' priority={true}  width={256} height={324} alt="Image" placeholder = 'empty'  className="h-auto w-auto" />

      <div className="flex flex-col gap-3 justify-between py-[50px]">
        <p className="text-[14px] text-blue-700 font-medium">NEW V6 UPDATE</p>
        <div className="flex flex-col gap-2">
          <h2 className="text-[25px] font-semibold">New update available!</h2>
          <p className="text-[14px]">Your favorite template has a new trendy look, more customization options, screens & more.</p>
        </div>

        <button className="flex gap-2 p-2 md:w-[210px] items-center rounded-lg text-white bg-primary-color"> <RiListSettingsFill/> Open Theme Settings</button>

      </div>


      </div>
      {/* card1 end */}

      {/* card2  */}
      <div className="px-3 py-2 rounded-lg flex justify-center h-full w-full shadow">
      <div className="flex flex-col  gap-2 p-5" >
                  <Image width={100} height={50} src="/assets/img/next-tip.jpg" alt="next tip carousel" />
                  <div className='flex justify-start gap-2'> <span className="w-2 h-2 bg-blue-700 rounded-full"></span> <span className="w-2 h-2 bg-gray-200 rounded-full"></span> <span className="w-2 h-2 bg-gray-200 rounded-full"></span></div>
                  <h2 className="text-[20px] font-semibold">
                    New fresh design
                  </h2>
                  <p className="text-[16px] text-gray-400">
                    Your favorite template has a new trendy lookmore customization options, screens & more
                  </p>
        </div>
      </div>
              
      {/* card2 end */}

    </div>
{/* update cards end */}

      
  </div>




      
</div>
  );
};

export default DashCommon;
