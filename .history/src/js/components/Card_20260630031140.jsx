import imge from "../../assests/imgs/image.png"
// Font awsome library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart, faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
//styling
export default function Card({image,title,discribtion,price}){
    return(
        <div className="card">
            <img src={image||imge} alt="" />
            <div className="info">
                <h5>{title||"loading"}</h5>
                <p className="discribtion">{discribtion||"loading"}</p>
                <p className="price">{price||"loading"}</p>
                <div className="btns">
                    <button><FontAwesomeIcon icon={faHeart}</button>
                </div>
            </div>
        </div>
    )
}