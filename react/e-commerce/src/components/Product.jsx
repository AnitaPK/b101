import React from 'react'

const Product = ({ product }) => {
    console.log(product)
    return (
        <div className="col-12 col-md-6 col-lg-3">
            <div className="card" style={{width: "18rem;"}}>
                <img src={product.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className='lead'>
                            Price : &#8377; {product.price}
                        </p>
                        <a href="#" className="btn btn-primary">View More</a>
                        <button>Add To Cart</button>
                    </div>
            </div>
        </div>
    )
}

export default Product