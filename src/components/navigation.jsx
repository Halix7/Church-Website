import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DownIcon from "../assets/images/downArrow.svg";
import Logo from "../assets/images/logo.png";
const navigation = () => {
    const [showNav,getShowNav]=useState(false);
  return (
    

      <nav className='bg-black text-white md:text-black md:bg-white flex flex-col justify-center text-center  fixed  w-[100%]  bottom-0  p-3 rounded-t-3xl md:rounded-none md:flex-row  md:relative md:justify-between z-40 md:px-32'>
         <img className={showNav===true ? "hidden md:static cursor-pointer w-12 h-12 rounded-full":"static cursor-pointer my-auto w-10 h-10 rounded-full mx-auto md:mx-0 "} src={Logo} alt="Logo"/>
        
          <button className={showNav === true ? "bg-gray-600  transition-all rounded-full   absolute -right-2 -bottom-4 p-8 duration-200 ease-in-out md:hidden ":'bg-gray-700 transition-all rounded-full absolute right-4  bottom-2 p-1 duration-200 ease-in-out md:hidden md:transition-none '} onClick={()=>{
              getShowNav(prev => !prev);
          }}>
  
          <img className={showNav === true ? "w-10 rotate-180 transition-all duration-300  ":" transition-all duration-300 "}  src={DownIcon} alt="down arrow" />
          </button>
          <div className={showNav === true?  "pb-16 space-y-10 static font-bold text-lg md:space-y-0 md:pb-0  transition-all duration-400 md:flex md:items-center   md:space-x-5  ":"md:static absolute -bottom-52 overflow-hidden left-36  md:flex md:items-center md:space-x-5    transition-all duration-400 ease-in-out"}>
              <ul className="pt-4 space-y-6 md:space-x-7 md:space-y-0 md:flex md:pt-0 relative  ">
                  <li className="after:content-[''] relative text-xl after:absolute after:-bottom-[0.2rem] after:right-0  after:w-0 md:after:h-1 hover:after:w-[100%] hover:after:right-auto hover:after:left-0 cursor-pointer after:bg-black after:transition-all after:duration-300 after:ease" >
                    <Link
                    to="/"
                    >
Home
                    </Link>
                    </li>
                  <li className="after:content-[''] relative text-xl after:absolute after:-bottom-[0.2rem] after:right-0  after:w-0 md:after:h-1 hover:after:w-[100%] hover:after:right-auto hover:after:left-0 cursor-pointer after:bg-black after:transition-all after:duration-300 after:ease">
                  <Link
                    to="/contact"
                    >
Contact Us
                    </Link>
                    </li>
                  <li className="after:content-[''] relative text-xl after:absolute after:-bottom-[0.2rem] after:right-0  after:w-0 md:after:h-1 hover:after:w-[100%] hover:after:right-auto hover:after:left-0 cursor-pointer after:bg-black after:transition-all after:duration-300 after:ease" >
                  <Link
                    to="/prayer"
                    >
Prayer
                    </Link>
                    </li>
              </ul>
          <button className='bg-white md:bg-black  text-black md:text-white py-2 px-6 font-mono md:px-4  font-medium active:pt-[2px] '>Become Our Memeber</button>
          </div>
      </nav>
      
   
    
  )
}

export default navigation