import React, { useState } from 'react';

import Select from 'react-select';
import ProfileInfo from './subcomp/ProfileInfo';
import {Sunkhwinder_Singh,Sanjay_Mathew,Sukhwinder_singh,Makhan,Ramesh_kumar,David,Mamta,Sheema_rani, jai_bhagwan, Shiv_kumar, Ramesh_chander, Reena,Sanjeev_kumar,Rev_Jitender_singh} from "../assets/pastor's_pic/index"

const options= [{value:"Jind",label:"Jind"},{value:"Chandigarh",label:"Chandigarh"},

{value:"Sangrur",label:"Sangrur"},
{value:"Patiala",label:"Patiala"},
{value:"Mohali",label:"Mohali"},
{value:"Mansa",label:"Mansa"},
{value:"Bhiwani",label:"Bhiwani"},
]
const userDetail=[
  
  {name:"Sunkhwinder Singh",image:Sunkhwinder_Singh,address:"Kanakwal Bhanguan, Punjab, 148028",branch:"Sangrur",nci:"Priest"},
  {name:"Sanjay Mathew",image:Sanjay_Mathew,address:"Cheema Mandi, 148029, punjab",branch:"Sangrur",nci:"Priest"},
  {name:"Rev.Dr.Jitender Singh",image:Rev_Jitender_singh,address:"#2368 Phase-2, Ramdarbar, Chandigarh UT,160002",branch:"Chandigarh",nci:"Priest"},
  {name:"Sukhwinder Singh",image:Sukhwinder_singh,address:"Vill.Kanakwal Bhaguan, Cheema Mandi, Punjab 148028",branch:"Sangrur",nci:"Priest"},
  {name:"Makhan",image:Makhan,address:"Vill. Nandanpur Colony Maqsudan, Punjab",branch:"Jalandhar",nci:"Priest"},
  {name:"David",image:David,address:"H.No. 175/2 GTBN, Near Bus Stand, Khara SAS Nagar, Punjab",branch:"Mohali",nci:"Priest"},
  {name:"Mamta",image:Mamta,address:"#1530, Block-C, Ward No.1, Janta Colony, Naya Gaon, SAS Nagar, Punjab",branch:"Mohali",nci:"Deaconess"},
  {name:"Ramesh Kumar",image:Ramesh_kumar,address:"#46, Gate No. HR Enclave Bahadurgarh Kasba Rurki, Punjab",branch:"Patiala",nci:"Deacon"},
  {name:"Seema Rani",image:Sheema_rani,address:"Doctor Ambedkar Nagar, Bhatha Basti, Ward Np. 15, Gali No. 1, Punjab",branch:"Mansa",nci:"Deaconess"},
  {name:"Jai Bhagwan",image:jai_bhagwan,address:"Vill. Taprana P/O Tikri,1320001, Haryana",branch:"Karnal",nci:"Prist/Archdeacon"},
  {name:"Shiv Kumar",image:Shiv_kumar,address:"Near Cilai Center, Ward No. 11, Budlada, 151502, Punjab",branch:"Mansa",nci:"Deacon"},
  {name:"Ramesh Chander",image:Ramesh_chander,address:"Vill. Mundal Khurd,(57), 127041,  Haryana,",branch:"Bhiwani",nci:"Deacon"},
  {name:"Reena",image:Reena,address:"Vill. Brah Kalan, Kharkramji, 126102, Haryana",branch:"Jind",nci:"Deaconess"},
  {name:"Sanjeev Kumar",image:Sanjeev_kumar,address:"Bhatha Basati, Ward No. 3, Punjab",branch:"Mansa",nci:"Priest"},

]

const Branches=() => {
  const [value, setValue] = useState("Kaithal");
  
  // console.log(value);
  return (
    <div className='md:pt-32 pt-20 w-full flex flex-col items-center '>
      <h1 className='text-2xl md:text-3xl  my-4 font-bold font-serif' >
        Select City
      </h1>
      <Select
        className="basic-single w-1/3"
        classNamePrefix="select"
        defaultValue={"default"}
        value={value}
        onChange={setValue}
        name="color"
        options={options}
        placeholder="Enter Your City."
  
      />
       <div className='grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4  mt-2 gap-3 place-items-center w-full'>
        {
          userDetail.map((details,index)=>(
            
            <ProfileInfo key={index} value={value.value} userDetail={details}/>
          ))
        }
       </div>
       <div className={`${!value?.value ? "mt-32  font-bold  text-2xl font-serif text-red-700":"hidden"}`}>
        <h1 >
          Enter Your City to Find Branch Nearby You.
        </h1>
       </div>
       
      
    </div>
  );
};

export default Branches;