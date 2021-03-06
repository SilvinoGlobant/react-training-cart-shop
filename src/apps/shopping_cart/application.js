import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { productsActions, cartActions } from './actions';
import { currentListSelector } from './selectors';
import Layout from './components/layout';
import OurProductsProxy from './components/our_products';
import ProductsDetailProxy from '../shopping_cart/components/product_details';
import PaymentProxy from 'apps/shopping_cart/components/payment'
import PaymentSuccessProxy from 'apps/shopping_cart/components/payment_success'

function Application({ getProducts, productList, addProduct, removeProduct }) {

    const navigate = useNavigate();

    const navigateToShopping = () => {
        navigate('/shopping');
    }
    const navigateToPaymentSuccess = () => {
        navigate('/payment-success');
    }

    useEffect(() => {
        if (!productList.records) {
            getProducts();
        }
    }, [productList.records, getProducts])

    useEffect(() => {
        if (productList?.records?.length > 0) {
            navigate('/shopping')
        }
    }, [productList, navigate])

    return <Routes>
        <Route path='/' element={<Layout navigateToShopping={navigateToShopping} removeProduct={removeProduct} />}>
            <Route
                path='shopping'
                element={<OurProductsProxy
                    productList={productList}
                    getProducts={getProducts}
                    addProduct={addProduct} />} />
            <Route path='shopping/:productId' element={<ProductsDetailProxy addProduct={addProduct} />} />
            <Route path='payment' element={<PaymentProxy removeProduct={removeProduct} navigateToPaymentSuccess={navigateToPaymentSuccess} />} />
            <Route path='payment-success' element={<PaymentSuccessProxy />} />
        </Route>
    </Routes>
}

export default connect(
    state => ({
        productList: currentListSelector(state)
    }),
    dispatch => ({
        getProducts: (params = {}) => dispatch(productsActions.get(params)),
        addProduct: (params = {}) => dispatch(cartActions.add(params)),
        removeProduct: (params = {}) => dispatch(cartActions.remove(params)),
    })
)(Application);

const Demo = () => {
    return <div>
        <h1>Details Products</h1>
        <h1>Details Products</h1>
        <h1>Details Products</h1>
        <h1>Details Products</h1>
    </div>
}

