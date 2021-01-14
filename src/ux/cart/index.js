import React from 'react';
import close from '../../assets/close.png';
import CartProductItem from './cart_product_item';

export default function Cart({ handleCloseCartView, navigateToPayment, productListPayment }) {

    let { records } = productListPayment;
    if (!records) return null;

    return (
        <div className='cart d-flex flex-column'>
            <img onClick={handleCloseCartView} className='cart-close' src={close} alt="" />
            <span>Cart:</span>
            <div className='cart-subtotal d-flex align-items-center'>
                <p>Subtotal: </p>
                <span>$315</span>
            </div>
            <button onClick={navigateToPayment}>Proceed to payment</button>
            <div className='cart-product-list'>

                {records.map(record => {
                    console.log('record', record)
                    return <CartProductItem key={record.uuid}  {...record} />
                })}
            </div>
        </div>
    )

}


