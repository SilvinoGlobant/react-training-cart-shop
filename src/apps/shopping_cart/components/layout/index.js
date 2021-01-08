import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'ux/header/header';
import Sidebar from 'ux/sidebar';
import { CartViewDemo } from '../../../../ux/stories/views/cart_view/cart_view.stories'

export default function Layout() {

    const [isOpenCartView, setIsOpenCartView] = useState(false);

    const handleCartView = () => {
        setIsOpenCartView(!isOpenCartView)
    }


    return <div style={{ position: 'relative' }}>
        <Header handleCartView={handleCartView} />
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

        {isOpenCartView && <CartViewDemo />}

    </div>
}

