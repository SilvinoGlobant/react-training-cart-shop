import React from 'react';
import success from '../../../assets/success1.webp';


export default function PaymentSuccess() {
    return <div className='payment-success w-100 d-flex flex-column justify-content-center align-items-center'>
        <img src={success} alt="" />
        <h3>Congratulations! your order has shipped</h3>
    </div>
}




