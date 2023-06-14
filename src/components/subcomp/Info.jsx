import React from 'react'

import bs1 from "../../assets/images/bs1.png"

const Info = () => {
  return (
    
    <div className="section flex items-center justify-center md:flex-row flex-col md:gap-32  my-52 md:my-32 ">
      <div>

    <div className=" w-64 h-64 transition-all ease-in-out rounded-full bg-white shadow-2xl overflow-hidden  hover:scale-105">

    <img className="w-[13rem] hover:w-[14rem] rounded-3xl mx-auto  " loading='lazy' src={bs1} alt="picture" />
    </div>
    <div className="info text-center mt-6 z-50 ">
      <h1 className="font-bold text-xl" >Bishop Sukhdev Jonathan</h1>
    </div>
      </div>

    <div className="mt-14 md:mt-0 text-center md:text-left ">
      <h1 className="font-bold text-3xl font-serif text-red-500 border-b-red-500 border-b-2   inline-block">

        VISION
      </h1>
      <p className="text-lg">
"Go through, go through the gates; <br /> prepare ye the way of the people; <br /> cast up, cast up the highway; <br /> gather out the stones;<br /> lift up an ensign for the peoples." <br />
<span className="font-bold text-xl">

-Isaiah 62:10
</span>

</p>
    </div>
  </div>
  

  )
}

export default Info