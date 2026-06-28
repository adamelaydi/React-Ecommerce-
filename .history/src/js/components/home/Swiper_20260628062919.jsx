// Hooks
import { useState,useEffect } from "react"
//styling
import "../../../style/components/home/Swiper.css"
//imgs
import image1 from "../../../assests/imgs/image.png"
import image2 from "../../../assests/imgs/image1.png"
const images = [image1, image2,image1, image2,image1];

export default function Swiper(){
    const [current, setCurrent] = useState(1);

    useEffect(
                () => {
            const interval = setInterval(() => {
        setCurrent((prev) => {
            if (prev<5) {
            return prev+1;
            }
            else if(prev==5){
                return 1;
            }
        });
        }, 5000);
        return () => clearInterval(interval);
    
    },[])

    return(
        <section className="swiper-sec">
            <div className="container">
                <div className="img-window" >
                    <div className="slider"  style={{
                    transform: `translateX(-${current * 100}%)`,
                }}>
                    {images.map((img, index) => (
                        <img style={{
                            width
                        }}  key={index} src={img} alt="" />
                    ))}

                    </div>
                    <div className="tracker">
                        <div className="circle active"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}