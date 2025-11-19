import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import casioImg from '../../../assets/brands/casio.png'
import amazonImg from '../../../assets/brands/amazon.png';
import moonImg from '../../../assets/brands/moonstar.png';
import starImg from '../../../assets/brands/star.png';
import startImg from '../../../assets/brands/start_people.png';
import randImg from '../../../assets/brands/randstad.png';
import { Autoplay } from 'swiper/modules';



const Brands = () => {
    return (
        <Swiper
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
                delay: 1000,
                disableOnInteraction: false,
            }}
        >
            <SwiperSlide><img src={casioImg} alt="" /></SwiperSlide>
            <SwiperSlide><img src={amazonImg} alt="" /></SwiperSlide>
            <SwiperSlide><img src={moonImg} alt="" /></SwiperSlide>
            <SwiperSlide><img src={starImg} alt="" /></SwiperSlide>
            <SwiperSlide><img src={startImg} alt="" /></SwiperSlide>
            <SwiperSlide><img src={randImg} alt="" /></SwiperSlide>
            
        </Swiper>
    );
};

export default Brands;