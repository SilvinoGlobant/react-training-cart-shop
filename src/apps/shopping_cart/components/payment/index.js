import React from 'react';
import { connect } from 'react-redux';
import Payment from '../../../../ux/views/payment';
import { currentPaymentProductsSelector } from 'apps/shopping_cart/selectors';
import { paymentActions } from '../../actions'

function PaymentProxy({ productListPayment, vildateZip, vildateCard, removeProduct }) {
    return <Payment
        vildateZip={vildateZip}
        vildateCard={vildateCard}
        productListPayment={productListPayment}
        removeProduct={removeProduct}
    />
}

export default connect(
    state => ({
        productListPayment: currentPaymentProductsSelector(state)
    }),
    dispatch => ({
        vildateZip: (zip) => dispatch(paymentActions.validateZp(zip)),
        vildateCard: (card) => dispatch(paymentActions.validateCard(card))
    })
)(PaymentProxy);