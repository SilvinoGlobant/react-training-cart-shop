import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { OurProducts } from '../../../../ux/views/our_products';

export default function OurProductsProxy({ productList }) {

    const navigate = useNavigate();

    const [productListLocal, setProductListLocal] = useState([]);
    const [isBasic, setIsBasic] = useState(false);
    const [radioButtonActive, setRadioButtonActive] = useState(0);

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
        setProductListLocal(copyArray.sort((a, b) => b[item] - a[item]));
    }


    function navigateToDetails(id) {
        navigate(`/shopping/${id}`)
    }

    useEffect(() => {
        if (productList?.records?.length > 0) {
            setProductListLocal(productList?.records);
        }
    }, [productList])

    return <OurProducts
        list={productListLocal}
        navigateToDetails={navigateToDetails}
        handleFilterList={handleFilterList}
        handlePricesOptions={handlePricesOptions}
        radioButtonActive={radioButtonActive}
        setRadioButtonActive={setRadioButtonActive}
        handleSortBy={handleSortBy}

    />
}