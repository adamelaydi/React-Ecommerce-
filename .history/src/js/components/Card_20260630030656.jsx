import imge from "../../assests/imgs/image.png"
export default function Card({image,title,discribtion,price}){
    return(
        <div className="card">
            <img src={image||imge} alt="" />
            <div className="info">
                <h5>{title||"loading"}</h5>
                <p className="discribtion">{discribtion||"loading"}</p>
                <p className="price">{price||}</p>
            </div>
        </div>
    )
}