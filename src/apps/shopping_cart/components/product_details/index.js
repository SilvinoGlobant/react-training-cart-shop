import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { productActions } from '../../actions';
import { DetailsDemo } from 'ux/stories/views/details/details.stories';

function ProductsDetailProxy({ getProductsDetail }) {

    const { productId } = useParams();

    useEffect(() => {
        if (!productId) return;
        getProductsDetail(productId)
    }, [productId, getProductsDetail])

    return <DetailsDemo />


}
export default connect(
    state => ({}),
    dispatch => ({
        getProductsDetail: (productId) => dispatch(productActions.getDetails(productId))
    })
)(ProductsDetailProxy)