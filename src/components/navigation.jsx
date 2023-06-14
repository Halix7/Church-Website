import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
// import DownIcon from "../assets/images/downArrow.svg";
import Logo from "../assets/images/logo.png";
const navigation = () => {
    const [showNav,getShowNav]=useState(false);
    const btn="flex active:font-bold  lg:items-center after:content-[''] relative text-xl after:absolute after:-bottom-[0.2rem] after:right-0  after:w-0 lg:after:h-[0.4rem] hover:after:w-[100%] hover:after:right-auto hover:after:left-0 cursor-pointer after:bg-black after:transition-all after:duration-300 after:ease " ;
 
    const Nav=' flex fixed justify-between lg:justify-evenly w-[100%]   bg-white  p-3 lg:p-0  lg:flex-row   lg:justify-between z-40  shadow-xl'
    const activeBtn="border-r-2 border-black font-bold lg:text-xl lg:border-r-0 lg:my-auto" 
  return (
    

      <nav className={Nav}>
         <Link
                    to="/"
                    className='flex items-center'
                    >
         <img className={"cursor-pointer w-12 h-12 rounded-full my-auto"} src={Logo} alt="Logo"/>

                    </Link>
        <div>

    
          <button className={`relative lg:hidden w-full h-[100%] `} onClick={()=>{
              getShowNav(prev => !prev);
          }}>
  <svg className={`h-6 w-6 fill-current ${showNav ===true ?" hidden ":" static" } `} viewBox="0 0 24 24">
          <path  fillRule="evenodd"  clipRule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"/>
     
        </svg>
        <svg className={`h-6 w-6 fill-current  ${showNav ===true ?" static ":" hidden" } `}  viewBox="0 0 50 50">
  <line x1="10" y1="10" x2="40" y2="40" stroke="black" strokeWidth="5" />
  <line x1="10" y1="40" x2="40" y2="10" stroke="black" strokeWidth="5" />
</svg>
          </button>
        
          <div className={`${showNav === true?"  text-lg right-0    ":"-right-[100%] " }
          absolute lg:static duration-400 ease-in-out transition-all w-1/2 lg:w-full 
           `}>
              <div className=" flex flex-col lg:flex-row gap-8 lg:gap-10 bg-white w-full p-5 h-screen lg:h-[100%] shadow-2xl">
                  
                    <NavLink
                    to="/"
                    className={
                      ({isActive})=>isActive ? activeBtn : btn
                      
                  }

                    >
Home
                    </NavLink>
                  
                  <NavLink className={
                    ({isActive})=>isActive ? activeBtn : btn
                      
                  }
                    to="/branches"
                  >
                    
                    
Branches
                    
                    </NavLink>
                  <NavLink className={
                      ({isActive})=>isActive ? activeBtn : btn
                      
                  }
                  
                    to="/links"
                  >
                   

                    

Links
                 
                    </NavLink>
           
             
                 
             
                    <NavLink
                    className={
                      ({isActive})=>isActive ? activeBtn : btn
                      
                  }
                    to="/about"
                    >
About Us
                    </NavLink>
        
                  <NavLink
                  className={
                    ({isActive})=>isActive ? activeBtn : btn
                    
                }
                    to="/prayer"
                    >
Prayer
                    </NavLink>
                  
              <button className="bg-black  hover:border-2 border-black  hover:bg-white hover:text-black text-white font-bold py-2 px-4  shadow-md hover:shadow-xl transition-all ease-in-out text-[1rem] lg:text-[1rem] ">
                <Link
                to="/prayerpartner"
                >
                
                Become A Prayer Partner
                </Link>

</button>
              <button className="bg-black   hover:border-2 border-black  hover:bg-white hover:text-black text-white font-bold py-2 px-4  shadow-md hover:shadow-xl transition-all ease-in-out ">
                Donation
</button>
              </div>
              </div>
          </div>
      </nav>
      
   
    
  )
}

export default navigation