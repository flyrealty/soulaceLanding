import React from 'react'
import LoginButton from '../LoginButton/LoginButton'
import communityImg from "../../assets/communityImg.png"
import CommunityIconWrapper from '../CommunityIconWrapper/CommunityIconWrapper'
import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon3.png"
import icon4 from "../../assets/icon4.png"

// import { useScroll, motion, useTransform } from "framer-motion";


function Community() {
  // const vh = window.screen.height;

  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["end end", "end start"]
  // });

  // function useParallax(value, distance) {
  //   return useTransform(value, [0, 1], [0, distance]);
  // }

  // const y = useParallax(scrollYProgress, vh);

  return (
    <div className='px-[5%] md:px-0 md:pl-20 h-[100vh] pt-[9.9rem] relative'>
        <h1 className='text-[5.9vw] lg:text-[3.5rem] font-[800]  md:leading-[4.4rem]'>All you need to<br />know about the <span style={{color: "#EDA225"}}>Community</span></h1>

        <div className='mt-8 md:mt-16'>
            <LoginButton direction="row" />
        </div>

        <div className="communityIcons flex flex-col gap-4 md:gap-0 md:flex-row flex-wrap  sm:w-[50%] md:w-[62%] min-[570px]:mt-16 mt-20">
          <div className='w-full md:w-1/2'>
          <CommunityIconWrapper>
            <div className='flex items-center md:items-end gap-2'>
              <img src={icon1} className="w-[8vw] sm:w-[6vw] md:w-12" alt="icon" />
              <p className='text-[.85rem] min-[570px]:text-[1rem] lg:text-xl'>Project Size<br />38 acres, 267 units</p>
            </div>
          </CommunityIconWrapper>
          </div>

          <div className='w-full md:w-1/2'>
          <CommunityIconWrapper>
            <div className='flex items-center md:items-end gap-2'>
              <img src={icon2} className="w-[8vw] sm:w-[6vw] md:w-12" alt="icon" />
              <p className='text-[.85rem] min-[570px]:text-[1rem] lg:text-xl'>BMRDA/ E- Katha</p>
            </div>
          </CommunityIconWrapper>
          </div>

          <div className='w-full md:w-1/2 md:mt-12'>
          <CommunityIconWrapper>
            <div className='flex items-center md:items-end gap-2'>
              <img src={icon3} className="w-[8.9vw] sm:w-[6vw] md:w-12" alt="icon" />
              <p className='text-[.85rem] min-[570px]:text-[1rem] lg:text-xl'>40000 Sft<br />Clubhouse</p>
            </div>
          </CommunityIconWrapper>
          </div>

          <div className='w-full md:w-1/2 md:mt-12'>
          <CommunityIconWrapper>
            <div className='flex items-center md:items-end'>
              <img src={icon4} className="w-[10vw] sm:w-[6vw] md:w-[3.7rem] md:relative -left-2" alt="icon" />
              <p className='text-[.85rem] min-[570px]:text-[1rem] lg:text-xl'>4 & 5 BHK Villas<br />3100 Sft to 4500 Sft</p>
            </div>
          </CommunityIconWrapper>
          </div>
        </div>
        <div className="img absolute bottom-0 w-[95%] sm:w-[80%] md:w-[70%] right-0 -z-10">
            <img src={communityImg} alt="communityImg"/>
        </div>
    </div>
  )
}

export default Community