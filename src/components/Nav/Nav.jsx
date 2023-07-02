import hamburgerIcon from "../../assets/hamburger.png";
import closeIcon from "../../assets/close.png";
import React, { useState } from "react";
import userIcon from "../../assets/user.png"
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


function Nav({iconColor}) {
  const [isOpen, setIsOpen] = useState(true)

  const handleClick = () => {
    setIsOpen(prev => !prev)
  }

  // animation
  const variant1 = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 1.3
      }
    }
  }

  return (
    <nav className="z-10 flex items-center justify-between w-full text-[15px]  lg:text-xl overflow-x-hidden">
      <div className="logo cursor-pointer">Soulace by Modern Space</div>
      <div>
        <div className="lists list-none hidden lg:flex items-center justify-between w-[55vw]">
          <a href="/" className="list border-b-2 border-b-white cursor-pointer">
            Home
          </a>
          <a href="/" className="list border-b-2 border-b-white cursor-pointer">
            Community
          </a>
          <a href="/" className="list border-b-2 border-b-white cursor-pointer">
            Pricing
          </a>
          <a href="/" className="list border-b-2 border-b-white cursor-pointer">
            Location
          </a>
          <a href="/" className="list border-b-2 border-b-white cursor-pointer">
            Plans
          </a>
          <a href="/" className="list border-b-2 border-b-white cursor-pointer">
            Gallery
          </a>
          <Link to="/register">
            <img className="w-8" src={userIcon} alt="userIcon" />
          </Link>
        </div>
        <div className="icons absolute top-8 right-4 duration-500 z-50" onClick={handleClick}>
        <AnimatePresence>
  {isOpen ? (
    <motion.div
    key="hamburger"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <img
        className={`lg:hidden right-4 fixed filter ${iconColor === "white" ? "invert" : ""} w-5`}
        src={hamburgerIcon}
        alt="hamburger"
      />
    </motion.div>
  ) : (
    <motion.div
      key="close"
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration: 0.4, ease: "easeInOut" }}
    >
      <img
        className={`lg:hidden filter right-4 fixed ${iconColor === "white" ? "invert" : ""} w-5`}
        src={closeIcon}
        alt="closeIcon"
      />
    </motion.div>
  )}
</AnimatePresence>

        </div>
      </div>

      {/* drop-menu */}
      <AnimatePresence>
      {!isOpen &&
      <motion.div
      variants={variant1}
      initial={{opacity: 0, height: 0}}
      animate={{height: "100vh", opacity: 1}}
      transition={{duration: 0.3}}
      exit="exit"
      className={`${iconColor === "white" ? "bg-[#050505]" : "bg-white"}  opacity-[.99] dropMenu w-[100vw] flex flex-col items-center justify-center h-[100vh] absolute top-0 left-0 right-0 z-40 `}>
      <div className="lists flex flex-col items-center justify-between h-[70vh]">
      <motion.a
      initial={{y:80,opacity:0}}
      animate={{y:0, opacity:1}}
      transition={{delay:.8}}
      exit={{
       opacity:0,
       y:90,
         transition:{
           ease:"easeInOut",
           delay:1.2
         }
      }}
      href="/" className={`list border-b-[1px] ${iconColor === "white" ? "border-b-white" : "border-b-black"} cursor-pointer`}>
            Home
          </motion.a>
          <motion.a
          initial={{y:80,opacity:0}}
          animate={{y:0, opacity:1}}
          transition={{delay:.7}}
          exit={{
           opacity:0,
           y:90,
             transition:{
               ease:"easeInOut",
               delay:1
             }
          }}
          href="/" className={`list border-b-[1px] ${iconColor === "white" ? "border-b-white" : "border-b-black"} cursor-pointer`}>
            Community
          </motion.a>
          <motion.a
          initial={{y:80,opacity:0}}
          animate={{y:0, opacity:1}}
          transition={{delay:.6}}
          exit={{
           opacity:0,
           y:90,
             transition:{
               ease:"easeInOut",
               delay:.8
             }
          }}
          href="/" className={`list border-b-[1px] ${iconColor === "white" ? "border-b-white" : "border-b-black"} cursor-pointer`}>
            Pricing
          </motion.a>
          <motion.a
          initial={{y:80,opacity:0}}
          animate={{y:0, opacity:1}}
          transition={{delay:.5}}
          exit={{
           opacity:0,
           y:90,
             transition:{
               ease:"easeInOut",
               delay:.6
             }
          }}
          href="/" className={`list border-b-[1px] ${iconColor === "white" ? "border-b-white" : "border-b-black"} cursor-pointer`}>
            Location
          </motion.a>
          <motion.a
          initial={{y:80,opacity:0}}
          animate={{y:0, opacity:1}}
          transition={{delay:.4}}
          exit={{
           opacity:0,
           y:90,
             transition:{
               ease:"easeInOut",
               delay:.4
             }
          }}
          href="/" className={`list border-b-[1px] ${iconColor === "white" ? "border-b-white" : "border-b-black"} cursor-pointer`}>
            Plans
          </motion.a>
          <motion.a
          initial={{y:80,opacity:0}}
          animate={{y:0, opacity:1}}
          transition={{delay:.3}}
          exit={{
           opacity:0,
           y:90,
             transition:{
               ease:"easeInOut",
               delay:.2
             }
          }}
          href="/" className={`list border-b-[1px] ${iconColor === "white"}border-b-white cursor-pointer`}>
            Gallery
          </motion.a>
      </div>
      </motion.div>
}
      </AnimatePresence>
    </nav>
  );
}

export default Nav;
