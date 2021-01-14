import React from 'react';
import { connect } from 'react-redux';
import Payment from '../../../../ux/views/payment';
import { currentPaymentProductsSelector } from 'apps/shopping_cart/selectors';

function PaymentProxy({ productListPayment }) {
    return <Payment />
}

export default connect(
    state => ({
        productListPayment: currentPaymentProductsSelector(state)
    })
)(PaymentProxy);