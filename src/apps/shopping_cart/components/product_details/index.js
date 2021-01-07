import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { productActions } from '../../actions';

function ProductsDetailProxy({ getProductsDetail }) {

    const { productId } = useParams();

    useEffect(() => {
        if (!productId) return;
        getProductsDetail(productId)
    }, [productId, getProductsDetail])

    return <div>
        <h1>Poducts details (proxy )</h1>
    </div>

}
export default connect(
    state => ({}),
    dispatch => ({
        getProductsDetail: (productId) => dispatch(productActions.getDetails(productId))
    })
)(ProductsDetailProxy)