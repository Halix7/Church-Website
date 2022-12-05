
import React from 'react';
import Vid from "../../assets/images/jesus.mp4";
const Activities = ({ setTurn}) => {
 
  return (
    <div className='my-4 relative'>
      <h1 className='text-center font-bold text-3xl'>Events</h1>
      <div className=" flex my-24  justify-center ">
      <div className="box flex  w-[24rem] justify-center  ">
        <video autoPlay loop   src={Vid} muted className="w-[100%] h-[100%] rounded-md  "  />
      <div className="circle flex items-center flex-col justify-center w-40 h-40 absolute top-64  text-white rounded-full bg-[rgba(0,0,0,0.4)] backdrop-blur-sm shadow-2xl text-center">
      
        <p className='font-semibold'>Christmas Eve .</p>
        <button className='bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-3 px-3 py-2' onClick={()=>{setTurn(true)}}>Explore</button>
      </div>
      </div>
      </div>
     
    </div>
  )
}

export default Activities