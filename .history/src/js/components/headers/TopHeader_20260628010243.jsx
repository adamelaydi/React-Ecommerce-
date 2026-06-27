// Routing
import { Link } from "react-router-dom"
// Font awsome library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart, faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
//styling
import "../../../style/components/Headers/TopHeader.css"
export default function TopHeader(){
    return(
        <div className="top">
        <div className="container">
        <Link to={"/"} className="logo">
            <p><span>Adam </span>Shop</p>
        </Link>
        <div className="search">
            <input type="search" name="Asearch" />
            <button><FontAwesomeIcon icon={faSearch}/></button>
        </div>
        <div className="other-btns">
            <Link to={"/favorite"}>
                <button><FontAwesomeIcon icon={faHeart}/></button>
            </Link>
            <Link to={"/cart"}>
                <button><FontAwesomeIcon icon={faCartShopping}/></button>
            </Link>
        </div>
        </div>
        </.>
    )
}