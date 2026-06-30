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
// routing
import { Link } from 'react-router-dom';
// img
import image from "../../../assests/imgs/"
export default function HSwiper(){
    return (
    <>
    <section className="swiper">
        <div className="container">
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
            >a
                <SwiperSlide className='swiper-slide'>
                    <div className="card">
                        <img src="" alt="" />
                        <div className="content">
                            <h3>item title</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, fugiat!   </p>
                            <Link>GET It</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>Slide 2</SwiperSlide>
                <SwiperSlide className='swiper-slide'>Slide 3</SwiperSlide>
            </Swiper>
        </div>
    </section>
        </>
    );

}   