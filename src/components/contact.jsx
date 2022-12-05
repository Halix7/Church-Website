import React from 'react'

const contact = () => {
  return (
    <div className='bg-[rgba(0,0,0,0.4)] backdrop-blur-sm  text-center flex  flex-col py-12 '>
        <div className='text-white font-semibold text-2xl md:3xl'>
           <h1>Contact Us</h1>
        </div>
        <div className='bg-white mx-12 mt-6 flex flex-col justify-center items-center'>
        <h1 className='text-lg font-semibold'>Find Out More Ways To Help!</h1>
        <p className='text-sm'>There are so many ways to support our mission. <br /> Contact us to find out more about volunteer opportunities, <br /> fundraising events, and ways to get our message to your friends and family.</p>
        <h2 className='font-semibold mt-6'>National Church Of India GD</h2>
        <span className='text-red-500'>+91-9896210674</span>
        <button className="bg-white  border border-black  mb-2 relative z-10 font-mono text-xl text-black px-5 py-3 mt-10 after:content-['']     after:absolute after:-z-10 after:bg-black after:top-0 after:left-0 after:h-0 after:w-[100%]  hover:text-white hover:after:h-[100%] hover:after:top-auto hover:after:bottom-0 after:transition-all after:ease after:duration-350  "><a href="/prayer">
          Prayer Request</a></button>
        </div>

    </div>
  )
}

export default contact