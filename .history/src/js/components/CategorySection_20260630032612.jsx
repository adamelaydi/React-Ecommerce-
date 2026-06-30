
import Card from "../components/Card"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import {Autoplay,FreeMode, Navigation } from 'swiper/modules';
import "../../style/components/CategorySection.css"
export default function CategorySection({title , type}){
    return(
        <section className="category">
            <div className="category-container">
                <div className="info">
                    <h4>{title|| "Category Name"}</h4>
                    <p>Choose the best you want !</p>
                    <hr />
                </div>
                <div className="product-Swiper">
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={0}
                        freeMode={true}
                        pagination={{
                        clickable: true,
                        }}
                                    // autoplay={{
                                    //     delay: 2500,
                                    //     disableOnInteraction: false,
                                    //     }}
                        modules={[Autoplay,FreeMode, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide className='swiper-slide'><Card />  </SwiperSlide>
                        <SwiperSlide className='swiper-slide'><Card /> </SwiperSlide>
                        <SwiperSlide className='swiper-slide'>Slide 3</SwiperSlide>
                        <SwiperSlide className='swiper-slide'>Slide 4</SwiperSlide>
                        <SwiperSlide className='swiper-slide'>Slide 5</SwiperSlide>
                        <SwiperSlide className='swiper-slide'>Slide 6</SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}