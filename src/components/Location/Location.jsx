import React from 'react'
import LoginButton from '../LoginButton/LoginButton'
import locationImg from "../../assets/location.png"



function Location() {

  return (
    <div className='px-[5%] md:px-0 md:pl-20 h-[100vh] pt-[9.9rem] relative overflow-hidden'>
        <h1 className='text-[5.9vw] lg:text-[3.5rem] font-[800]  md:leading-[4.4rem]'>All you need to<br />know about the <span style={{color: "#E21013"}}>Location</span></h1>

        <div className='mt-8 md:mt-16'>
            <LoginButton direction="row" />
        </div>

        <div className="pricing mt-24 flex justify-between w-[50%]">
          <div className="price bg-black rounded-3xl w-28 h-20"></div>
          <div className="price bg-black rounded-3xl w-28 h-20"></div>
          <div className="price bg-black rounded-3xl w-28 h-20"></div>
        </div>

        <div className="img absolute bottom-0 w-[95%] sm:w-[80%] md:w-[73%] -right-[9.7rem] -z-10">
            <img src={locationImg} alt="communityImg"/>
        </div>
    </div>
  )
}

export default Location