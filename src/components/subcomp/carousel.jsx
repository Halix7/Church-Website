import React, { useState } from 'react'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import CloseIcon from '@mui/icons-material/Close';
const Carousel = ({colabedPic, setTurn}) => {

  const [presentIndex,setPresentIndex]=useState(0);
  let count =0;
 
  function handleNext(){
    count = ( presentIndex + 1) % colabedPic.length;
    setPresentIndex(count); 
  }
  function handlePrev(){
    const lengthPics =colabedPic.length;
    count =(presentIndex + lengthPics - 1) % lengthPics;
    setPresentIndex(count); 
  }
  return (
    
    
    <div className='fixed w-[100%] top-0  h-[100%]  z-50 flex items-center justify-center left-0 bg-[rgba(0,0,0,0.8)] '>
    <div className="cross absolute z-[60] top-12 right-4 text-white" onClick={()=>{
      setTurn(false)
    }}><CloseIcon className='!w-12 !h-12 '/></div>
     <div className="flex   justify-center">
       
       <img loading='lazy'  className='w-1/2 ' src={colabedPic[presentIndex]} alt="this is image" />
    
       
     </div>
     <div className='absolute top-1/2  w-full flex justify-between '>
       <button className="prev w-10 h-10 rounded-full bg-white" onClick={handlePrev}>
         <ArrowBackIosIcon/>
       </button>
       <button className="next  w-10 h-10 rounded-full bg-white" onClick={handleNext}>
 <ArrowForwardIosIcon/>
       </button>
     </div>
    </div>
    
  )
}

export default Carousel;