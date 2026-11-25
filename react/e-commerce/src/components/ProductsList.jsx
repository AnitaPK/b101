import React from 'react'
import Product from './Product'

const ProductsList = ({ products }) => {
    console.log(products)
    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                    ASIDE BAR
                </div>
                <div className="col-10">
                    <div className="container">
                        <div className="row">
                            {
                                products?.length === 0 ?
                                    (<p>No products available</p>) :
                                    (<>
                                        {products?.map((prod, i) => (
                                            <Product key={i} product={prod} />
                                        ))}
                                    </>)
                            }

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductsList