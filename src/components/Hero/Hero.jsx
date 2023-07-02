import React, {useState, useEffect} from "react";
import arrow from "../../assets/arrow.png";
import { imgUrls, mobileImgUrls } from "../../data/sliderImages";
import LoginButton from "../LoginButton/LoginButton";
import Nav from "../Nav/Nav";



function Navbar() {

  const [currentState, setCurrentState] = useState(0)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeImgArr,setActiveImgArr] = useState(mobileImgUrls)

  const nextSlide = () => {
    const newIndex = currentState === activeImgArr.length - 1 ? 0 : currentState + 1 
    console.log(newIndex)
    setCurrentState(newIndex)
  }

  // move the image to particular position

  const moveToExactIndex = (index) => {
    setCurrentState(index)
  }

  // changing the image on mobile screen

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    windowWidth > 640 ? setActiveImgArr(imgUrls) : setActiveImgArr(mobileImgUrls)

    console.log(windowWidth)

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div
      className="flex relative items-start justify-between p-[5vw] lg:px-20 pt-8 h-[100vh] text-white transition-all duration-500"
      style={{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${activeImgArr[currentState].url})`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      ></div>

      <div className="z-10 absolute right-6 w-5 lg:right-20 top-[50%]" onClick={nextSlide}>
        <img src={arrow} alt="arrow" />
      </div>

      {/* image indicator */}
      <div className="z-10 absolute bottom-5 flex gap-2 right-8 lg:right-24">
      {activeImgArr.map((_, index) => (
        <div key={index} onClick={() => moveToExactIndex(index)} className={`w-2.5 h-2.5 rounded-full ${currentState === index ? "bg-white" : "bg-gray-400"}`}>
        </div>
      ))}
      </div>

      {/* navbar */}
      
      <Nav iconColor="white"/>

      <main className="absolute flex flex-col items-start">
      <h1 className="text-[1.75rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.6rem] xl:text-[4.2rem] font-[900] mt-[30%] lg:mt-[17%] leading-[2.6rem] lg:leading-tight">All you need To<br />know about the project</h1>
      <h1 className="text-[15px] lg:text-xl font-[400]">Off Sarjapura Main Road 3 Cr onwards</h1>
      <div className="mt-16">
      <LoginButton direction={"col"} />
      </div>
        </main>
        </div>
  );
}

export default Navbar;
