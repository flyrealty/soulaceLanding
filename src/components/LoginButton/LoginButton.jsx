import React from 'react'
import dailer from "../../assets/dailer.png"


function LoginButton({direction}) {
  return (
    <div className={`flex ${direction === "col" ? "flex-col items-start gap-2" : "items-center gap-[2vw]"}`}>
        <a className='bg-black text-white rounded-3xl px-2 lg:px-3 py-[3px] font-semibold flex items-center gap-1 lg:gap-2 text-[3.5vw] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.4rem] cursor-pointer' href="tel:+919844473355">
          <img className='filter invert w-3.5 lg:w-5' src={dailer} alt="icon" />
          984447 3355
          </a>
        <a className='border-b-2 text-[3.5vw] sm:text-[1.1rem] md:text-[15px] lg:text-[1.2rem] cursor-pointer' href="/login">Login to get exclusive offers</a>
    </div>
  )
}

export default LoginButton