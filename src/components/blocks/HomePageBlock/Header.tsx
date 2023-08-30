// import React from 'react';


import { ImMenu } from "react-icons/im"
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {

  const [out, setOut] = useState(false)

  const outMobile = () => {
    setOut(!out)
  }

  return (
    <div className="w-full h-[70px] z-50 top-2 flex justify-center items-center relative">

      <div className="w-[85%] h-[]  z-[100] flex justify-between items-center ">

      <div className="text-gColor font-bold text-[23px] font-gFont">
          eben.
      </div>

              { out ?
                <div className="md:hidden text-gColor text-[19px]" onClick={outMobile}>
                  <CgClose />
                </div>
              :
                <div className="md:hidden text-gColor text-[19px]"  onClick={outMobile}>
                  <ImMenu />
                </div>
              }

        <div className="hidden md:flex items-center text-gColor font-gFont">

          <Link offset={-100} smooth={true} duration={500} to="/">
            <div className="hidden md:flex items-center text-gColor text-[16px] font-bold hover:text-gHover cursor-pointer transition-all ease-in-out">Projects</div>
          </Link>

          <Link offset={-100} smooth={true} duration={500} to="/">
            <div className="hidden md:flex items-center text-gColor text-[16px] font-bold hover:text-gHover cursor-pointer ml-[15px] transition-all ease-in-out">Experience</div>
          </Link>

          <Link offset={-100} smooth={true} duration={500} to="/">
            <div className="hidden md:flex items-center text-gColor text-[16px] font-bold hover:text-gHover cursor-pointer ml-[15px] transition-all ease-in-out">Education</div>
          </Link>

          <Link offset={-100} smooth={true} duration={500} to="/">
            <div className="hidden md:flex items-center text-gColor text-[16px] font-bold hover:text-gHover cursor-pointer ml-[15px] transition-all ease-in-out">Contact</div>
          </Link>

        </div>

        { out ?
          <div className="absolute w-full h-[100vh] flex justify-between top-[75px] transition-all ease-in-out " onClick={outMobile}>

            <div></div>

            <div className="w-[250px] h-[300px] bg-white p-4 shadow-md backdrop-blur-md mr-[60px] flex flex-col justify-evenly items-center text-[17px] rounded-md">

                <Link offset={-100} smooth={true} duration={500} to="/">
                  <div className=" text-gColor font-bold hover:text-gHover cursor-pointer transition-all ease-in-out">Projects</div>
                </Link>

                <Link offset={-100} smooth={true} duration={500} to="/">
                  <div className=" text-gColor font-bold hover:text-gHover cursor-pointer transition-all ease-in-out">Experience</div>
                </Link>

                <Link offset={-100} smooth={true} duration={500} to="/">
                  <div className=" text-gColor font-bold hover:text-gHover cursor-pointer transition-all ease-in-out">Education</div>
                </Link>

                <Link offset={-100} smooth={true} duration={500} to="/">
                  <div className="text-gColor font-bold hover:text-gHover cursor-pointer  transition-all ease-in-out">Contact</div>
                </Link>

                <button className="bg-gColor text-white w-full cursor-pointer">Download CV.</button>

            </div>

          </div>
        : 
          null
        }



      </div>

    </div>
  )
}

export default Header