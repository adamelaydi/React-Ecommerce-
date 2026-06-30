import imge from "../../assests/imgs/image.png"
// Font awsome library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart, faShare,faCartShopping} from "@fortawesome/free-solid-svg-icons";
//styling
import "../../style/components/Card.css"
export default function Card({image,title,discribtion,price}){
    return(
        <div className="card">
            <div className="image">
                <img src={image||imge} alt="" />

            </div>
            <div className="Card-info">
                <h5>{title||"loading"}</h5>
                <p className="discribtion">{discribtion||"loading"}</p>
                <p className="price">{price||"loading"}$</p>
                <div className="Card-btns">
                    <button><FontAwesomeIcon icon={faHeart} /></button>
                    <button><FontAwesomeIcon icon={faShare} /></button>
                    <button><FontAwesomeIcon icon={faCartShopping} /></button>
                </div>
            </div>
        </div>
    )
}