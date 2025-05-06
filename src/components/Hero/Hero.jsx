import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Slide1 from "../Swiper/Slide1";
import Slide2 from "../Swiper/Slide2";
import Slider3 from "../Swiper/Slider3";

const Hero = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        pagination={true}
        autoplay={true}
        modules={[Navigation, Pagination, Autoplay]}>
        <SwiperSlide>
          <Slide1></Slide1>
        </SwiperSlide>
        <SwiperSlide>
          <Slide2></Slide2>
        </SwiperSlide>
        <SwiperSlide>
          <Slider3></Slider3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
