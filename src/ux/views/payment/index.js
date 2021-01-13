import React from 'react';
import FormPayment from '../../form_payment';
import ProductListPayment from '../../product_list_payment';


export default function Payment(params) {
    return (
        <div className='payment d-flex w-100 justify-content-between'>
            <FormPayment />
            <ProductListPayment />
        </div>
    )
}



