import React from 'react';
import { CartProductItemDemo } from '../cart/cart.stories'

export default {
  title: 'Core/ProductListPayment',
  // component: Header,
  parameters: {
    position: "1.0"
  }
};

const ProductListPayment = (args) => (
  <div className='product-list-payment'>
    <div>
      <div>
        <p>Products:</p>
      </div>
      <div>
        <CartProductItemDemo />
      </div>
      <div className='product-list-payment-subtotal d-flex align-items-center '>
        <p>Subtotal: </p>
        <strong>$105</strong>
      </div>

      <div className=''>
        <button className='w-100'>Pay Now</button>
      </div>
      <div className='product-list-payment-errors'>
        <p>Some fields are wrong!</p>
      </div>

    </div>
  </div>
);

export const ProductListPaymentDemo = ProductListPayment.bind({});
ProductListPayment.args = {

};


