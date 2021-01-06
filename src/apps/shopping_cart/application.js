import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { productsActions } from './actions';
import { currentListSelector } from './selectors';
import Layout from './components/layout';
import MainPage from './components/main_page'
// import { productsActions } from '../shopping_cart/actions';


function Application({ getProducts, productList }) {

    const navigate = useNavigate();

    useEffect(() => {
        if (!productList.records) {
            getProducts();
        }
    }, [])

    useEffect(() => {
        if (productList?.records?.length > 0) {
            navigate('/shopping')
        }
    }, [productList])

    return <Routes>
        <Route path='/' element={<Layout />}>
            <Route path='shopping' element={<MainPage productList={productList} />} />
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
    return <h3>demo</h3>
}