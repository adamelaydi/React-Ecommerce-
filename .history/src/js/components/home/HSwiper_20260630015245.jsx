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
import imge1 from "../../../assests/imgs/banner_Hero1.jpg"
import imge2 from "../../../assests/imgs/banner_Hero2.jpg"
import imge3 from "../../../assests/imgs/banner_Hero3.jpg"

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
            >
                <SwiperSlide className='swiper-slide'>
                    <div className="card">
                        <img src={imge1} alt="" />
                        <div className="content">
                            <h3>item title</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, fugiat!   </p>
                            <Link className='btn'>GET It</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <div className="card">
                        <img src={imge2} alt="" />
                        <div className="content">
                            <h3>item title</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, fugiat!   </p>
                            <Link className='btn'>GET It</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <div className="card">
                        <img src={imge} alt="" />
                        <div className="content">
                            <h3>item title</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, fugiat!   </p>
                            <Link className='btn'>get it</Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
        </>
    );

}   