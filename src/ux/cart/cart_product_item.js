import React from 'react';

import coffe from '../../assets/coffe.svg';
import recyclebin from '../../assets/recycle-bin.png';


export default function CartProductItem(params) {
    return (
        <div className='cart-product-item d-flex align-items-center'>
            <img src={coffe} alt="coffe" />
            <small className='badge-cart-product-item bg-third d-flex justify-content-center'>BASIC</small>
            <span>Coffe Maker</span>
            <p>$105</p>
            <img className='trash' src={recyclebin} alt="" />
        </div>
    )

}

