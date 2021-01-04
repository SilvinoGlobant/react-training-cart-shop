import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { productsActions } from './actions';
import { currentListSelector } from './selectors';
// import { productsActions } from '../shopping_cart/actions';


function Application({ getProducts, list }) {

    // useEffect(() => {
    //     getProducts();
    // }, [])

    return <h1>App started</h1>
}

export default connect(

    state => ({
        productList: currentListSelector(state)
    }),

    dispatch => ({
        getProducts: () => dispatch(productsActions.get())
    })

)(Application);