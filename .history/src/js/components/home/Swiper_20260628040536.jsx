//styling
import "../../../style/components/home/Swiper.css"
//imgs
import {image} from "../../../assets/imgs/image"
export default function Swiper(){
    return(
        <section className="swiper-sec">
            <div className="container">
                <div className="img-window">
                    <img src={image} />
                </div>
                <div className="tracker">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </div>
        </section>
    )
}