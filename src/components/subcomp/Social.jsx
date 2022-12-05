import React from 'react'
import Fb from "../../assets/images/fb.jpg";
import Yt from "../../assets/images/Youtube.png";
import Insta from "../../assets/images/instagram.png";
const Social = () => {
  return (
    <div className="social  text-center font-semibold my-6  md:my-32">
    <div>

    <h1 className="font-semibold text-2xl md:text-4xl font-serif ">Get Connected !</h1>
    </div>
    <div className="flex flex-col md:flex-row items-center justify-center md:space-x-16 md:space-y-0  space-y-4 mt-4 md:mt-12">

    <div className="flex flex-col items-center"><img className="md:w-36 w-24 " src={Fb}  loading="lazy" alt="Facebook" />
    <button className="bg-black relative z-10 font-mono text-xl md:text-2xl text-white px-5 py-3 mt-2 md:mt-6 after:content-['']     after:absolute after:-z-10 after:bg-white after:top-0 after:left-0 after:h-0 after:w-[100%]  hover:text-black hover:after:h-[100%] hover:after:top-auto hover:after:bottom-0 after:transition-all after:ease after:duration-350  "><a href="https://www.facebook.com/bishopsukhdevjonathanministries">Facebook</a></button>
    </div>
    <div className="flex flex-col items-center"><img className="md:w-52 w-36" src={Yt} loading="lazy" alt="YouTube" />
    <button className="bg-black relative z-10 font-mono   text-xl md:text-2xl text-white px-5 py-3 mt-2 md:mt-6 after:content-['']     after:absolute after:-z-10 after:bg-white after:top-0 after:left-0 after:h-0 after:w-[100%]  hover:text-black hover:after:h-[100%] hover:after:top-auto hover:after:bottom-0 after:transition-all after:ease after:duration-350  "><a href="https://youtube.com/@BishopSukhdevJonathan">YouTube</a></button></div>
    <div className="flex flex-col items-center"><img className="md:w-36 w-24 rounded-full "  loading="lazy" src={Insta} alt="Instagram" />
    <button className="bg-black relative z-10 font-mono  text-xl  md:text-2xl text-white px-5 py-3 mt-2 md:mt-6 after:content-['']     after:absolute after:-z-10 after:bg-white after:top-0 after:left-0 after:h-0 after:w-[100%]  hover:text-black hover:after:h-[100%] hover:after:top-auto hover:after:bottom-0 after:transition-all after:ease after:duration-350  "><a href="/">Instagram</a></button></div>
    </div>
  </div>
  )
}

export default Social