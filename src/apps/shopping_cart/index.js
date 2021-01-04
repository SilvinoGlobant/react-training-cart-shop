import React from 'react';
import { DynamicModuleLoader } from "redux-dynamic-modules-react";
import shoppingModule from './module';
import ShoppingCart from './application';
import '../../ux/stories/_shopping_cart_universe.scss'
function Cart() {
    return (<DynamicModuleLoader modules={[shoppingModule()]}>
        <ShoppingCart />
    </DynamicModuleLoader>)

}
export default Cart;