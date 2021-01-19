import React from 'react';
import { connect } from 'react-redux';
import Payment from '../../../../ux/views/payment';
import { currentPaymentProductsSelector } from 'apps/shopping_cart/selectors';
import { paymentActions, orderActions } from '../../actions'

function PaymentProxy({ productListPayment, validateZip, validateCard, removeProduct, createOrder }) {
    return <Payment
        validateZip={validateZip}
        validateCard={validateCard}
        productListPayment={productListPayment}
        removeProduct={removeProduct}
        createOrder={createOrder}
    />
}

export default connect(
    state => ({
        productListPayment: currentPaymentProductsSelector(state)
    }),
    dispatch => ({
        validateZip: (zip) => dispatch(paymentActions.validateZp(zip)),
        validateCard: (card) => dispatch(paymentActions.validateCard(card)),
        createOrder: (order) => dispatch(orderActions.createOrder(order))

    })
)(PaymentProxy);