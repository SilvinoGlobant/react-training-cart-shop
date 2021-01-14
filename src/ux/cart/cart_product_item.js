import React from 'react';

import coffe from '../../assets/coffe.svg';
import recyclebin from '../../assets/recycle-bin.png';


export default function CartProductItem({
    uuid,
    id,
    name,
    rate,
    price,
    comments,
    basic,
    img,
    removeProduct
}) {

    const hnadleRemoveProduct = () => {
        if (!removeProduct) return;
        removeProduct(
            {
                product: {
                    uuid
                }
            }
        )
    }
    return (
        <div className='cart-product-item d-flex align-items-center'>
            <img src={img} alt="coffe" />
            {basic && <small className='badge-cart-product-item bg-third d-flex justify-content-center'>BASIC</small>}
            <span className='cart-product-name'>{name}</span>
            <p>${price}</p>
            <img className='trash' src={recyclebin} alt="" onClick={hnadleRemoveProduct} />
        </div>
    )

}

