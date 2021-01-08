import React from 'react';
import { CartDemo } from '../../cart/cart.stories';
import { FormPaymentDemo } from '../../form_payment/form_payment.stories';
import { ProductListPaymentDemo } from '../../product_list_payment/product_list_payment.stories';

export default {
    title: 'Views/Payment',
    // component: OurProducts,
    parameters: {
        position: "1.0"
    }
};

const Payment = () => (
    <div className='payment d-flex w-100 justify-content-between'>
        <FormPaymentDemo />
        <ProductListPaymentDemo />
    </div>
)

export const PaymentDemo = Payment.bind({});
