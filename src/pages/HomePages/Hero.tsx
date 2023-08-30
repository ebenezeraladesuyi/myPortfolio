// import React from 'react'
// import "./Hero.css"
// import BackgroundSlider from "react-background-slider";
// import image1 from "../../assets/Jpegs/opti1.jpg";
// import image2 from "../../assets/Jpegs/opti2.jpg";
// import image3 from "../../assets/Jpegs/opti3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Hero = () => {
    
//   render() {
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
    };


  return (
    <div className="w-full h-[120vh] overflow-hidden ">

        <div className="h-[118vh]">
        
        {/* <BackgroundSlider  
            images={[image1, image2, image3]}
            duration={10} transition={2}
         /> */}
         
         {/* <h2> Single Item</h2> */}
        <Slider {...settings}>

          <div>Helloo World</div>

        </Slider>

        </div>

    </div>
  )
}

export default Hero;