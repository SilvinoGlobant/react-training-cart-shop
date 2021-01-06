import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { productsActions } from './actions';
import { currentListSelector } from './selectors';
import Layout from './components/layout';
import MainPage from './components/main_page'

function Application({ getProducts, productList }) {

    const navigate = useNavigate();

    const [productListA, setProductListA] = useState([]);
    const [isBasic, setIsBasic] = useState(false);
    const [radioButtonActive, setRadioButtonActive] = useState(1);

    const handleFilterList = (event) => {

        const isBasics = event.target.checked;

        setIsBasic(isBasics);

        if (isBasics) {
            const filteredList = productListA.filter(item => item.basics);
            setProductListA(filteredList);
            return;
        }

        setRadioButtonActive(0);
        setProductListA(productList.records);

    }

    const handlePricesOptions = (item) => {

        if (isBasic) {
            const filteredList = productList.records
                .filter(item => item.basics)
                .filter(element => {
                    if (item === 1 && (element.price >= 1 && element.price <= 50)) return item;
                    if (item === 2 && (element.price >= 51 && element.price <= 100)) return item;
                    if (item === 3 && (element.price >= 101 && element.price <= 200)) return item;
                });

            setProductListA(filteredList);
            return;
        }

        const filteredList = productList.records.filter(element => {
            if (item === 1 && (element.price >= 1 && element.price <= 50)) return item;
            if (item === 2 && (element.price >= 51 && element.price <= 100)) return item;
            if (item === 3 && (element.price >= 101 && element.price <= 200)) return item;
        });

        setProductListA(filteredList);

    }

    useEffect(() => {
        if (!productList.records) {
            getProducts();
        }
    }, [productList.records, getProducts])

    useEffect(() => {
        if (productList?.records?.length > 0) {
            setProductListA(productList?.records);
            navigate('/shopping')
        }
    }, [productList, navigate])

    return <Routes>
        <Route path='/'
            element={<Layout
                handleFilterList={handleFilterList}
                handlePricesOptions={handlePricesOptions}
                radioButtonActive={radioButtonActive}
                setRadioButtonActive={setRadioButtonActive}

            />}>
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

