
// styling 
    
export default function CategorySection({title , type}){
    return(
        <section className="category">
            <div className="info">
                <h4>{title|| "Category Name"}</h4>
                <p>Choose the best you want !</p>
                <hr />
            </div>
            <div className="product-Swiper">

            </div>
        </section>
    )
}