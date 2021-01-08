import React from 'react';
import { CartDemo } from '../../cart/cart.stories';

export default {
    title: 'Views/CartView',
    // component: OurProducts,
    parameters: {
        position: "1.0"
    }
};

const CartView = () => (
    <div className='cart-view d-flex w-100'>
        <div className='cart-view-black w-100' />
        <CartDemo />
    </div>
)

export const CartViewDemo = CartView.bind({});
