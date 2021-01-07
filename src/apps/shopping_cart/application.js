import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { productsActions } from './actions';
import { currentListSelector } from './selectors';
import Layout from './components/layout';
import MainPage from './components/main_page'

function Application({ getProducts, productList }) {

    const navigate = useNavigate();

    const [productListLocal, setProductListLocal] = useState([]);
    const [isBasic, setIsBasic] = useState(false);
    const [radioButtonActive, setRadioButtonActive] = useState(1);

    const handleFilterList = (event) => {

        const isBasics = event.target.checked;

        setIsBasic(isBasics);

        if (isBasics) {
            const filteredList = productListLocal.filter(item => item.basics);
            setProductListLocal(filteredList);
            return;
        }

        setRadioButtonActive(0);
        setProductListLocal(productList.records);

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

            setProductListLocal(filteredList);
            return;
        }

        const filteredList = productList.records.filter(element => {
            if (item === 1 && (element.price >= 1 && element.price <= 50)) return item;
            if (item === 2 && (element.price >= 51 && element.price <= 100)) return item;
            if (item === 3 && (element.price >= 101 && element.price <= 200)) return item;
        });

        setProductListLocal(filteredList);

    }

    const handleSortBy = (item) => {
        const copyArray = productListLocal.map((el) => el);
        // const copyArray = productListLocal.sort((a, b) => a[item] - b[item]);
        // console.log('copyArray', copyArray)
        setProductListLocal(copyArray.sort((a, b) => b[item] - a[item]));
    }

    useEffect(() => {
        if (!productList.records) {
            getProducts();
        }
    }, [productList.records, getProducts])

    useEffect(() => {
        if (productList?.records?.length > 0) {
            setProductListLocal(productList?.records);
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
                handleSortBy={handleSortBy}

            />}>
            <Route path='shopping' element={<MainPage productList={productListLocal} />} />
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

