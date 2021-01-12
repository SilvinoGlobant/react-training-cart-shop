import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'ux/header/header';
import { CartViewDemo } from '../../../../ux/stories/views/cart_view/cart_view.stories'

export default function Layout({ navigateToShopping }) {

    const [isOpenCartView, setIsOpenCartView] = useState(false);

    const handleCartView = () => {
        setIsOpenCartView(!isOpenCartView)
    }

    const handleCloseCartView = () => {
        setIsOpenCartView(false)
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

        {isOpenCartView && <CartViewDemo handleCloseCartView={handleCloseCartView} />}

    </div>
}

