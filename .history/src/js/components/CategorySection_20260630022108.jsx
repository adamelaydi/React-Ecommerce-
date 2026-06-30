
// styling 
    // swiper
    box-shadow: 2px 4px 27px 5px rgba(0, 0, 0, 0.30);
border-radius: 15px;
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