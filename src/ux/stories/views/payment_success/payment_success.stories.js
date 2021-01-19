import React from 'react';
import success from '../../../../assets/success1.webp';

export default {
    title: 'Views/PaymentSuccess',
    // component: OurProducts,
    parameters: {
        position: "1.0"
    }
};

const PaymentSuccess = () => (
    <div className='payment-success w-100 d-flex flex-column justify-content-center align-items-center'>
        <div className=' w-100 d-flex flex-column justify-content-center align-items-center'>
            <img src={success} alt="" />
            <h3>Congratulations! your order has shipped</h3>
        </div>

    </div>
)

export const PaymentSuccessDemo = PaymentSuccess.bind({});
