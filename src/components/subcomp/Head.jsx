import React from 'react'

const Head = () => {
  return (
    <div className="main bg-croud bg-cover bg-no-repeat bg-right-bottom ">
        <div className="backdrop-blur-[3px] grid place-items-start text-white font-bold text-lg py-24  px-10 md:p-36 md:text-3xl">
        <span className="text-red-500 bg-white px-2 mb-3 font-serif ">Welcome</span>
          <h1 className="text-3xl font-serif ">Let's <br /> make our <br /> community a <br /> better place!</h1>
          <button className="bg-white relative z-10 font-mono text-2xl text-black px-5 py-3 mt-10 after:content-['']     after:absolute after:-z-10 after:bg-black after:top-0 after:left-0 after:h-0 after:w-[100%]  hover:text-white hover:after:h-[100%] hover:after:top-auto hover:after:bottom-0 after:transition-all after:ease after:duration-350  "><a href="/contact">
          GET INVOLVED </a> </button>
        </div>
      </div>
  )
}

export default Head