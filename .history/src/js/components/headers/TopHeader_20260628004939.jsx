// Routing
import { Link } from "react-router-dom"
// Font awsome library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHeart, faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
//styling
import "../../../style/components/Headers/TopHeader.css"
export default function TopHeader(){
    return(
        <>
        <div className="container">
        <Link to={"/"} className="logo">
            <p><span>Adam </span>Shop</p>
        </Link>
        <div className="search">
            <input type="search" name="Asearch" />
            <button></button>
        </div>
        <div className="other-btns">
            <Link to={"/favorite"}>
                <button><FontAwesomeIcon icon={fa}/></button>
            </Link>
            <Link to={"/cart"}>
                <button>cart</button>
            </Link>
        </div>
        </div>
        </>
    )
}