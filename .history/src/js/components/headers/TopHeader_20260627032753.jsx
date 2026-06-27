// Routing
import { Link } from "react-router-dom"
export default function TopHeader(){
    return(
        <>
        <div className="container">
        <Link to={"/"}>
        <p><span>Adam</span>S</p>
        </Link>
        </div>
        </>
    )
}