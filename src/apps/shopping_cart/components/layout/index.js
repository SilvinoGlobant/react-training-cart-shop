import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Header } from 'ux/header/header';
import CartView from 'ux/views/cart'

export default function Layout({ navigateToShopping }) {

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
        <Header handleCartView={handleCartView} navigateToShopping={navigateToShopping} />
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

        {isOpenCartView && <CartView handleCloseCartView={handleCloseCartView} navigateToPayment={navigateToPayment} />}

    </div>
}

