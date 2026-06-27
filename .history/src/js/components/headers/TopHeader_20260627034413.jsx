// Routing
import { Link } from "react-router-dom"
//styling
import ""
export default function TopHeader(){
    return(
        <>
        <div className="container">
        <Link to={"/"}>
            <p><span>Adam</span>Shop</p>
        </Link>
        <div className="search">
            <input type="search" name="Asearch" />
            <button></button>
        </div>
        <div className="other-btns">
            <Link to={"/favorite"}>
                <button>fav</button>
            </Link>
            <Link to={"/cart"}>
                <button>cart</button>
            </Link>
        </div>
        </div>
        </>
    )
}