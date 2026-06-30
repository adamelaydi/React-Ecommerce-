import imge from "../../assests/imgs/image.png"
export default function Card({image,title,discribtion,id,}){
    return(
        <div className="card">
            <img src={image||imge} alt="" />
        </div>
    )
}