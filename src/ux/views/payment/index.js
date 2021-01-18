import React from 'react';
import FormPayment from '../../form_payment';
import ProductListPayment from '../../product_list_payment';


export default function Payment({ vildateZip, vildateCard, productListPayment, removeProduct }) {
    return (
        <div className='payment d-flex w-100'>
            <FormPayment vildateZip={vildateZip} vildateCard={vildateCard} />
            <ProductListPayment productListPayment={productListPayment} removeProduct={removeProduct} />
        </div>
    )
}



