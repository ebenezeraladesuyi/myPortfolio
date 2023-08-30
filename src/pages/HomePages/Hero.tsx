// import React from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

import eben from "../../assets/images/eben-bg.png";


const Hero = () => {
    
//   render() {
    // const settings = {
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //   dots: true,
    //   infinite: true,
    //   speed: 700,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    // };


  return (
    <div className="w-full min-h-[100vh] overflow-hidden flex justify-center items-center font-gFont relative">

        <div className="w-[85%] h-full flex flex-wrap justify-between">

          <div className="flex flex-col justify-center items-center md:items-baseline h-[] w-full md:w-[40%] ">
            <div className="text-[30px] text-gHover font-bold text-center animate-pulse md:text-[33px] lg:text-[70px]">EBENEZER <br/>ALADESUYI</div>
            <div className="text-[] text-gColor text-center animate-pulse md:text-left text-[13px] lg:text-[22px]">Software Engineer (Full-Stack, MERN-Stack)</div>

            <button className="bg-gColor text-white mt-[10px] lg:mt-[20px] md:w-[110px] md:text-[13px] lg:w-[150px] cursor-pointer ">Contact Me</button>
          </div>

          <div className="flex flex-col justify-between items-center justify-self-end h-[100px] w-full relative md:flex-row md:justify-center md:w-[60%]  z-[20]" >
            {/* <div></div> */}
            <img className="absolute top-0 w-[320px] md:w-[400px] md:mr-[100px] lg:w-[550px]" src={eben} alt="eben" />
          </div>

        </div>

        <div className="absolute w-[300px] h-[300px] rounded-full bg-gColor bottom-[-60px] right-[-60px] md:w-[450px] md:h-[450px] md:bottom-[-80px] md:right-[-120px] lg:w-[550px] lg:h-[550px] lg:bottom-[-100px] lg:right-[-140px]"></div>

    </div>
  )
}

export default Hero;