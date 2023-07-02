import React from 'react'
import LoginButton from '../LoginButton/LoginButton'
import pricingImg from "../../assets/pricingImg.png"



function Pricing() {

  return (
    <div className='px-[5%] md:px-0 md:pl-20 h-[100vh] pt-[9.9rem] relative overflow-hidden'>
        <h1 className='text-[5.9vw] lg:text-[3.5rem] font-[800]  md:leading-[4.4rem]'>All you need to<br />know about the <span style={{color: "#A64C23"}}>Pricing</span></h1>

        <div className='mt-8 md:mt-16'>
            <LoginButton direction="row" />
        </div>

        <div className="pricing mt-24 flex justify-between w-[60%]">
          <div className="price bg-black rounded-3xl w-36 h-36"></div>
          <div className="price bg-black rounded-3xl w-36 h-36"></div>
          <div className="price bg-black rounded-3xl w-36 h-36"></div>
        </div>

        <div className="img absolute bottom-20 w-[95%] sm:w-[80%] md:w-[63%] -right-[9.3rem] -z-10">
            <img src={pricingImg} alt="communityImg"/>
        </div>
    </div>
  )
}

export default Pricing