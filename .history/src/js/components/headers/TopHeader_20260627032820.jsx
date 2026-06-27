// Routing
import { Link } from "react-router-dom"
export default function TopHeader(){
    return(
        <>
        <div className="container"> 
        <Link to={"/aci"}>
        <p><span>Adam</span>Shop</p>
        </Link>
        </div>
        </>
    )
}