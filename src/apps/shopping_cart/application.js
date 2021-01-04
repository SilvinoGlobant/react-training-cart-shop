import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { productsActions } from '../shopping_cart/actions';


function Application({ getProducts, list }) {

    useEffect(() => {
        getProducts();
    }, [])

    return <h1>App started</h1>
}

export default connect(
    state => ({
        list: state.shopping.api.productsList
    }),
    dispatch => ({
        getProducts: () => dispatch(productsActions.get())
    })

)(Application);