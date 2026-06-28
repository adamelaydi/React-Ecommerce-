//styling
import "../../../style/components/home/Swiper.css"
//imgs
import {img} from "../../../assests/imgs/image.png"
export default function Swiper(){
    return(
        <section className="swiper-sec">
            <div className="container">
                <div className="img-window">
                    <img src={img} />
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