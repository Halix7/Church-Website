import React from 'react'
import { Input } from '@mui/material'
import Email from "emailjs-com";
const prayer = () => {
  function prayerProceed(e){
    e.preventDefault();
    Email.sendForm("service_9lbr59m","template_tedx4w9",e.target,"jVFy5s99KAovFa6gH").then(res=> console.log(res)).catch(err=>console.log(err));
  }
  return (
    <div className='flex justify-center items-center flex-col relative'>
      <div className='text-2xl md:3xl my-12 font-semibold'>
        <h1>Prayer Request</h1>
      </div>
      <form className='flex justify-center items-center flex-col gap-3 mx-1' onSubmit={prayerProceed}>
        <Input type="text" name="name"  placeholder='Name*' className='w-[100%]' />
        <Input type="email" name="email"  placeholder='Email*' className='w-[100%]'  />
        <Input type="text" name="address"  placeholder='Address*' className='w-[100%]' />
        <textarea className='border w-[100%]' name='message' rows={4} cols={50}  placeholder='Prayer Request*'/>
        <button className="bg-black  mb-2 relative z-10 font-mono text-xl text-white px-5 py-3 mt-10 after:content-['']  hover:border hover:border-black after:absolute after:-z-10 after:bg-white after:top-0 after:left-0 after:h-0 after:w-[100%]  hover:text-black hover:after:h-[100%] hover:after:top-auto hover:after:bottom-0 after:transition-all after:ease after:duration-350  ">Submit Application</button>
      </form>
    </div>
  )
}

export default prayer