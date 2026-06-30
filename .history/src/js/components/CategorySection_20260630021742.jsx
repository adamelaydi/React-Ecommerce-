export default function CategorySection({title , type}){
    return(
        <section className="category">
            <div className="info">
                <h4>{title|| "Category Name"}</h4>
                
            </div>
        </section>
    )
}