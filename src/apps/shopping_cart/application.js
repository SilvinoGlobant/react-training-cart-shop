import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { productsActions } from './actions';
import { currentListSelector } from './selectors';
import Layout from './components/layout';
import OurProductsProxy from './components/our_products';
import ProductsDetailProxy from '../shopping_cart/components/product_details'

function Application({ getProducts, productList }) {

    const navigate = useNavigate();

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
        <Route path='/' element={<Layout />}>
            <Route path='shopping' element={<OurProductsProxy productList={productList} />} />
            <Route path='shopping/:productId' element={<ProductsDetailProxy />} />
        </Route>
    </Routes>
}

export default connect(

    state => ({
        productList: currentListSelector(state)
    }),

    dispatch => ({
        getProducts: () => dispatch(productsActions.get())
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

