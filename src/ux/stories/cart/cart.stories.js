import React from 'react';
import coffe from '../../../assets/coffe.svg';
import recyclebin from '../../../assets/recycle-bin.png';
import close from '../../../assets/close.png';

export default {
    title: 'Core/Cart',
    // component: ProductItem,
    parameters: {
        position: "1.0"
    }
};

const CartProductItem = () => (
    <div className='cart-product-item d-flex align-items-center'>
        <img src={coffe} alt="coffe" />
        <small className='badge-cart-product-item bg-third d-flex justify-content-center'>BASIC</small>
        <span>Coffe Maker</span>
        <p>$105</p>
        <img className='trash' src={recyclebin} alt="" />
    </div>
);

export const CartProductItemDemo = CartProductItem.bind({});
CartProductItem.args = {};


const Cart = (args) => (
    <div className='cart d-flex flex-column'>
        <img className='cart-close' src={close} alt="" />
        <span>Cart:</span>
        <div className='cart-subtotal d-flex align-items-center'>
            <p>Subtotal: </p>
            <span>$315</span>
        </div>
        <button>Proceed to payment</button>
        <div className='cart-product-list'>
            <CartProductItemDemo />
            <CartProductItemDemo />
            <CartProductItemDemo />
        </div>
    </div>
);

export const CartDemo = Cart.bind({});
Cart.args = {};

