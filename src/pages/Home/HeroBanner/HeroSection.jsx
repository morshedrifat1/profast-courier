
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './HeroSection.css';
import slide1 from "../../../assets/banner/banner1.png"
import slide2 from "../../../assets/banner/banner2.png"
import slide3 from "../../../assets/banner/banner3.png"

import { Autoplay,Pagination } from 'swiper/modules';

const HeroSection =()=> {
  return (
    <>
      <Swiper
      autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='h-50 sm:h-[350px] md:h-[450px] lg:h-[580px] w-full object-fill rounded-2xl' src={slide1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-50 sm:h-[350px] md:h-[450px] lg:h-[580px] w-full object-fill rounded-2xl' src={slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-50 sm:h-[350px] md:h-[450px] lg:h-[580px] w-full object-fill rounded-2xl' src={slide3} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
export default HeroSection