import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'ux/header/header';
import { Sidebar } from 'ux/sidebar';
import { ProductItem } from 'ux/stories/product_item/product_item';
export default function Layout() {

    const [isOpenSidebar, setIsOpenSidebar] = useState(false);

    const handleIsOpenSidebar = () => {
        setIsOpenSidebar(!isOpenSidebar)
    }
    const handleCloseSidebar = () => {
        if (!isOpenSidebar) return;
        setIsOpenSidebar(false)
    }

    return <>
        <Header handleIsOpenSidebar={handleIsOpenSidebar} />
        <Sidebar isOpen={isOpenSidebar} />
        <div
            className='main-container d-flex flex-wrap'
            style={{ width: '100%', height: '100vh', marginTop: 156, left: 347, position: 'relative' }}
            onClick={handleCloseSidebar}
        >
            <Outlet />
        </div>

    </>
}

