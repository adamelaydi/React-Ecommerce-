import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import "../../../style/components/home/swiper/Swiper.css"
export default function HSwiper(){
    return (
    <>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            // autoplay={{
            // delay: 2500,
            // disableOnInteraction: false,
            // }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide className='swiper-slide'>Slide 1</SwiperSlide>
            <SwiperSlide className='swiper-slide'>Slide 2</SwiperSlide>
            <SwiperSlide className='swiper-slide'>Slide 3</SwiperSlide>
            <SwiperSlide className='swiper-slide'>Slide 4</SwiperSlide>
            <SwiperSlide className='swiper-slide'>Slide 5</SwiperSlide>
            <SwiperSlide className='swiper-slide'>Slide 6</SwiperSlide>
            <SwiperSlide className='swiper-slide'>Slide 7</SwiperSlide>
            <SwiperSlide className='swiper-slide'>Slide 8</SwiperSlide>
            <SwiperSlide className='swiper-slide'>Slide 9</SwiperSlide>
        </Swiper>
        </>
    );

}