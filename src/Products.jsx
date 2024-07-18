import React from 'react'

const Products = () => {
    return (
        <div className='product-container p-4'>
           
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 col-12 product-header">
                        <div className='product-title py-2'>Our Services</div>
                        <div className='product-descritpion py-2'>Discover our complete range of home services tailored to meet your need.</div>
                    </div>
                    <div className="col-md-6 col-12 d-flex justify-content-end">
                        <div className="product-more-btn">
                            {/* <button type='button' className='view-more-btn'>View More</button> */}
                        </div>
                        <div className="text-center">
                            Coming Soon....
                        </div>
                    </div>
                </div>
     
        </div>
    )
}

export default Products