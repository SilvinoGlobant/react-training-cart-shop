import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from 'ux/header/header';
import CartView from 'ux/views/cart'
import { currentPaymentProductsSelector } from 'apps/shopping_cart/selectors';

function Layout({ navigateToShopping, productListPayment, removeProduct }) {

    const navigate = useNavigate();
    const [isOpenCartView, setIsOpenCartView] = useState(false);

    const handleCartView = () => {
        setIsOpenCartView(!isOpenCartView)
    }

    const handleCloseCartView = () => {
        setIsOpenCartView(false)
    }

    const navigateToPayment = () => {
        handleCloseCartView();
        navigate('/payment');
    }


    return <div style={{ position: 'relative' }}>
        <Header
            handleCartView={handleCartView}
            navigateToShopping={navigateToShopping}
            productListPayment={productListPayment}
        />
        <div
            style={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                marginTop: 90,
                marginLeft: 259,
            }}
        >
            <Outlet />
        </div>

        {isOpenCartView && <CartView
            handleCloseCartView={handleCloseCartView}
            navigateToPayment={navigateToPayment}
            productListPayment={productListPayment}
            removeProduct={removeProduct}
        />}

    </div>
}

export default connect(
    state => ({
        productListPayment: currentPaymentProductsSelector(state)
    })
)(Layout);

