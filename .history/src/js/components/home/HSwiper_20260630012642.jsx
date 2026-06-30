import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination} from 'swiper/modules';
// Import Swiper styles
import "../../../style/components/home/swiper/Swiper.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
export default function HSwiper(){
    return (
    <>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide className='swiper-slide'>Slide 1</SwiperSlide>
            <SwiperSlide className='swiper-slide'>Slide 2</SwiperSlide>
            <SwiperSlide className='swiper-slide'>Slide 3</SwiperSlide>
        </Swiper>
        </>
    );

}