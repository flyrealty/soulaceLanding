import React from 'react'
import checkedIcon from "../../assets/checkbox.png"

function Modal() {
  return (
    <div className='flex flex-col items-center'>
        <img className='w-[3.3rem]' src={checkedIcon} alt="ckecked Icon" />
        <h2 className='text-[3rem] font-[800] leading-[2.8rem] mt-6'>Thanks</h2>
        <p className='leading-base mt-1 font-[300]'>For Showing Interest</p>
        <a href='/' style={{boxShadow: '1px 1px 4px 1px rgba(0,0,0,0.75)',}} className='bg-black text-white rounded-[12px] px-3.5 py-1.5 mt-10'>Back To Home</a>
    </div>
  )
}

export default Modal