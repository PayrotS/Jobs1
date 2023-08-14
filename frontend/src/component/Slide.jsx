import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../asset/img1.jpg'
import img2 from '../asset/img2.jpeg'
import img3 from '../asset/img3.jpg'

const Slideshow = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500
  };

  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 py-20 rounded-b-xl mt-36 max-w-md mx-auto md:max-w-7xl'>
      <Slider {...settings} className="">
        <div className="flex items-center justify-center">  
          <img src={img1} alt="" className="object-cover h-full w-auto pl-80" /> 
        </div>
        <div className="flex items-center justify-center"> 
          <img src={img2} alt="" className="object-cover h-full w-auto px-96" /> 
       </div>
       <div className="flex items-center justify-center"> 
         <img src={img3} alt="" className="object-cover h-1/2 w-auto px-96" /> 
      </div>
      </Slider>
    </div>
  );
};

export default Slideshow;

