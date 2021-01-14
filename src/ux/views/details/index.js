import React from 'react';
import Comments from '../../comments';
import ProductDetail from '../../product_detail';

export default function ProductDetails({ product, addProduct }) {

    if (!product) return <h4>Loading...</h4>

    const { comments } = product;

    return (
        <div className='details-container'>
            <div className='details w-100 d-flex flex-column'>
                <ProductDetail {...product} addProduct={addProduct} />
                <Comments comments={comments} />
            </div>
        </div>
    );
} 
