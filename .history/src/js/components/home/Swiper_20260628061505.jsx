// Hooks
import { useState,useEffect } from "react"
//styling
import "../../../style/components/home/Swiper.css"
//imgs
import image1 from "../../../assests/imgs/image.png"
import image2 from "../../../assests/imgs/image1.png"
const images = [image1, image2];

export default function Swiper(){
    const [current, setCurrent] = useState(1);

    useEffect(
        () => {
        const interval = setInterval(() => {
        setCurrent((prev) =>{
            if(prev==1){
                return 2;
            }
            return 1;
        
        }, 3000);
    })
        return () => clearInterval(interval);
    
    },[])

    return(
        <section className="swiper-sec">
            <div className="container">
                <div className="img-window" >
                    {images.map((img, index) => (
                        <img  key={index} src={img} alt="" />
                    ))}
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