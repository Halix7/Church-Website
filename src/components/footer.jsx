import React from 'react'

const footer = () => {
  return (
    <footer className='md:bg-black bg-gray-900 text-white px-10 md:px-36 py-12 '>
        <div className='text-center font-bold text-xl md:text-3xl mx-6  mb-36 '>
            <h1 className='py-4'>For God so loved the world that  he gave his one and only Son, <br /> that whoever believes in him shall not perish <br /> but have eternal life.</h1>
        
        </div>
        <hr className='bg-white'/>
        <div className='flex flex-col md:flex-row justify-between' >
            <div className='my-10'>
                <h1 className='my-4 text-xl md:text-2xl font-semibold '>
                    Sunday
                </h1>
                <p className=' text-lg md:text-xl'>From 10:30 A.M to 1:00 P.M <br />
                 <span className='my-4'>
                    
                     
                    </span>
                     </p>
            </div>
            <div className='my-10'>
                <h1 className='my-4 text-xl md:text-2xl font-semibold '>Find Us</h1>
                <p>VPO Kalarmajra,Cheeka <br /> (Distt. Kaithal)</p>
            </div>
           
            <div className='my-10'>
                <h1 className='my-4 text-xl md:text-2xl font-semibold '>Email Us</h1>
                <p>ncigdcheeka@gmail.com</p>
            </div>
        </div>
        <hr />
        <div className='text-center my-10 mx-auto'> 
            copyright © 2019-2022
        </div>
    </footer>
  )
}

export default footer