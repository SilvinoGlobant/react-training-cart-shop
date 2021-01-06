import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { productsActions } from './actions';
import { currentListSelector } from './selectors';
import Layout from './components/layout';
import MainPage from './components/main_page'
// import { productsActions } from '../shopping_cart/actions';


function Application({ getProducts, productList }) {

    const navigate = useNavigate();

    const [productListA, setProductListA] = useState([]);

    const handleFilterList = (event) => {

        const isBasics = event.target.checked;

        if (isBasics) {
            const filteredList = productListA.filter(item => item.basics);
            setProductListA(filteredList);
            return;
        }

        setProductListA(productList.records);

    }

    useEffect(() => {
        if (!productList.records) {
            getProducts();
        }
    }, [])

    useEffect(() => {
        if (productList?.records?.length > 0) {
            setProductListA(productList?.records);
            navigate('/shopping')
        }
    }, [productList])

    return <Routes>
        <Route path='/' element={<Layout handleFilterList={handleFilterList} />}>
            <Route path='shopping' element={<MainPage productList={productListA} />} />
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