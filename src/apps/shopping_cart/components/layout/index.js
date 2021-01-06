import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'ux/header/header';
import { Sidebar } from 'ux/sidebar';
export default function Layout({ handleFilterList }) {

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
        <Sidebar isOpen={isOpenSidebar} handleFilterList={handleFilterList} />
        <div
            className='main-container d-flex flex-wrap'
            style={{ width: '100%', height: '100vh', marginTop: 90, left: 347, position: 'relative' }}
            onClick={handleCloseSidebar}
        >
            <Outlet />
        </div>

    </>
}

