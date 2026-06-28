// Hooks
import { useState,useEffect } from "react"
//styling
import "../../../style/components/home/Swiper.css"
//imgs
import image1 from "../../../assests/imgs/image.png"
import image2 from "../../../assests/imgs/image1.png"

export default function Swiper(){
    const [time,setTime]=useState(true);
    useEffect(()=>{
        setTimeout(() => {
            setTime(true);
            
        }, 3);
    },[])
    return(
        <section className="swiper-sec">
            <div className="container">
                <div className="img-window">
                    <img src={image1} />
                    <img src={image2} />
                    <img src={image1} />
                    <img src={image2} />
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