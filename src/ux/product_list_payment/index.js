import React from 'react';
import CartProductItem from 'ux/cart/cart_product_item';


export default function ProductListPayment({ productListPayment, removeProduct }) {

    let { records } = productListPayment;
    if (!records) return null;

    const amount = records.reduce((total, record) => {
        return total + (+record.price)
    }, 0)

    return (
        <div className='product-list-payment'>
            <div>
                <div>
                    <p>Products:</p>
                </div>
                <div>
                    {amount === 0 && <span> The list is empty</span>}
                    {records.map((item, index) => <CartProductItem key={`item-to-pay${item.uuid}`}  {...item} removeProduct={removeProduct} />)}

                </div>
                <div className='product-list-payment-subtotal d-flex align-items-center '>
                    <p>Subtotal: </p>
                    <strong>${amount}</strong>
                </div>

                <div className=''>
                    {amount > 0 && <button className='w-100'>Pay Now</button>}
                </div>
                {/* <div className='product-list-payment-errors'>
                    <p>Some fields are wrong!</p>
                </div> */}
            </div>
        </div>
    );
}