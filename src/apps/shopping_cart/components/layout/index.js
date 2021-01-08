import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'ux/header/header';
import Sidebar from 'ux/sidebar';
import { CartViewDemo } from '../../../../ux/stories/views/cart_view/cart_view.stories'

export default function Layout({
    handleFilterList,
    handlePricesOptions,
    radioButtonActive,
    setRadioButtonActive,
    handleSortBy
}) {

    const [isOpenSidebar, setIsOpenSidebar] = useState(false);

    const handleIsOpenSidebar = () => {
        setIsOpenSidebar(!isOpenSidebar)
    }
    const handleCloseSidebar = () => {
        if (!isOpenSidebar) return;
        setIsOpenSidebar(false)
    }

    return <div style={{ position: 'relative' }}>
        <Header handleIsOpenSidebar={handleIsOpenSidebar} />
        <div
            style={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                marginTop: 90,
                marginLeft: 259,
            }}
            onClick={handleCloseSidebar}
        >
            <Outlet />
        </div>

        <CartViewDemo />

    </div>
}

