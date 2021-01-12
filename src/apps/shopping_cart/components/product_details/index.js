import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { productActions } from '../../actions';
import ProductDetails from 'ux/views/details';
import { currentProductSelector } from 'apps/shopping_cart/selectors';

function ProductsDetailProxy({ getProductsDetail, currentProduct }) {

    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        if (!productId) return;
        getProductsDetail(productId)
    }, [productId, getProductsDetail])

    useEffect(() => {
        if (!currentProduct || currentProduct.isLoading) return;
        setProduct(currentProduct.record)
    }, [currentProduct])

    return <ProductDetails product={product} />

}
export default connect(
    state => ({
        currentProduct: currentProductSelector(state)
    }),
    dispatch => ({
        getProductsDetail: (productId) => dispatch(productActions.getDetails(productId))
    })
)(ProductsDetailProxy)