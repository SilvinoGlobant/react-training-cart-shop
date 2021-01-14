import React from 'react';
import CartDemo from '../../cart';

export default function Cart({ handleCloseCartView, navigateToPayment, productListPayment }) {
    return (
        <div className='cart-view d-flex w-100'>
            <div className='cart-view-black w-100' />
            <CartDemo
                navigateToPayment={navigateToPayment}
                handleCloseCartView={handleCloseCartView}
                productListPayment={productListPayment}
            />
        </div>
    );
}