import React from 'react'

import BishopJiPic from "../../assets/images/bishopji.png"
const Info = () => {
  return (
    
    <div className="section flex items-center justify-center md:flex-row flex-col md:gap-32  my-10 md:my-32">
    <div className=" w-64 h-64  rounded-full bg-red-500  ">

    <img className="w-40 rounded-3xl mx-auto   " loading='lazy' src={BishopJiPic} alt="picture" />
    <div className="info text-center mt-6 ">
      <h1 className="font-bold text-xl" >Bishop Sukhdev Jonathan</h1>
    </div>
    </div>

    <div className="mt-14 md:mt-0 text-center md:text-left">
      <h1 className="font-bold text-3xl font-serif">

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