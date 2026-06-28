// Hooks
import { useState,useEffect } from "react"
//styling
import "../../../style/components/home/Swiper.css"
//imgs
import image2 from "../../../assests/imgs/image.png"
import image1 from "../../../assests/imgs/image1.png"
const images = [image1,image2,image1,image2,image1];

export default function Swiper(){
    const [current, setCurrent] = useState(1);
    const [cir, setCir] = useState([]);
    useEffect(
                () => {
            const interval = setInterval(() => {
        setCurrent((prev) => {
            if (prev<4) {
            return prev+1;
            }
            else if(prev==4){
                return 1;
            }
        });
        }, 5000);
        return () => clearInterval(interval);
    
    },[])
    
    useEffect(()=>{
    function setCircles(){
        for(let i=1;i<6;i++){
            (i==current)?
            setCir([...cir,1]):
            setCir([...cir,0]);
        }
    }
    setCircles();
    },[current])
    return(
        <section className="swiper-sec">
            <div className="container">
                <div className="img-window" >
                    <div className="slider"  style={{
                    transform: `translateX(-${(current * 100)}%)`,
                }}>
                    {images.map((img, index) => (
                        <img style={{
                            width:"670px"
                        }}  key={index} src={img} alt="" />
                    ))}

                    </div>
                    <div className="tracker">
                        {
                            cir.map((d)=>{
                                
                                <div ></div>
                            })
                            
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}