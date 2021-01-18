import React from 'react';
import close from '../../assets/close.png';
import CartProductItem from './cart_product_item';

export default function Cart({ handleCloseCartView, navigateToPayment, productListPayment, removeProduct }) {

    let { records } = productListPayment;
    if (!records) {
        return null;
    }

    const amount = records.reduce((total, record) => {
        return total + (+record.price)
    }, 0)

    return (
        <div className='cart d-flex flex-column'>
            <img onClick={handleCloseCartView} className='cart-close' src={close} alt="" />
            <span>Cart:</span>
            <div className='cart-subtotal d-flex align-items-center'>
                <p>Subtotal: </p>
                <span>${amount}</span>
            </div>
            <button onClick={navigateToPayment}>Proceed to payment</button>
            <div className='cart-product-list'>
                {amount === 0 && <span> The list is empty</span>}
                {records.map(record => {
                    return <CartProductItem key={record.uuid}  {...record} removeProduct={removeProduct} />
                })}
            </div>
        </div>
    )

}


