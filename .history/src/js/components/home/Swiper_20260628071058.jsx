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
    const [cir, setCir] = useState([0,0,0,0,0]);
    useEffect(
                () => {
            const interval = setInterval(() => {
        setCurrent((prev) => {
            if (prev<4) {
            return prev+1;
            }
            else if(prev==5){
                return 1;
            }
        });
        }, 5000);
        return () => clearInterval(interval);
    
    },[])
    
    useEffect(()=>{
    function setCircles(){
        let updated=[];
        for(let i=1;i<6;i++){
            if(i==current){
                updated.push(1)
            }
            else{
                updated.push(0);
            }
        }
        setCir(updated)
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
                                return d==1?
                                <div style={{
                                    width:" 7px",
                                    height: "7px",
                                    borderRadius:" 50%",
                                    border:` 2px solid black`,
                                    backgroundColor: "#4B9DA9"
                                }}></div>:
                                <div  style={{
                                    width:" 7px",
                                    height: "7px",
                                    borderRadius:" 50%",
                                    border:` 2px solid black`,
                                }} ></div>
                            })
                            
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}