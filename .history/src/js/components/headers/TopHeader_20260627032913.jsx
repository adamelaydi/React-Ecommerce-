// Routing
import { Link } from "react-router-dom"
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
        </div>
        </>
    )
}