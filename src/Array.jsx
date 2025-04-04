function Array({products}){
    return(
        <>
        <div className="container">
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>React Container</h1>
            <div className="cards">
                {products.map((item) => (
                     <div key={item.id} className="product-card">
                            <img src={item.image} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <h5>{item.price}</h5>
                    </div>
                ))}
                </div>
        </div>
        </>
    )
}

export default Array