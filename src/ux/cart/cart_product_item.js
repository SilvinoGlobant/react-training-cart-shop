import React from 'react';

import coffe from '../../assets/coffe.svg';
import recyclebin from '../../assets/recycle-bin.png';


export default function CartProductItem({
    img,
    id,
    price,
    name,
}) {
    return (
        <div className='cart-product-item d-flex align-items-center'>
            <img src={img} alt="coffe" />
            <small className='badge-cart-product-item bg-third d-flex justify-content-center'>BASIC</small>
            <span>{name}</span>
            <p>${price}</p>
            <img className='trash' src={recyclebin} alt="" />
        </div>
    )

}

