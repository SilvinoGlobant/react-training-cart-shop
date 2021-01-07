import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'ux/header/header';
import Sidebar from 'ux/sidebar';

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

    return <>
        <Header
            handleIsOpenSidebar={handleIsOpenSidebar}
        />
        <Sidebar
            isOpen={isOpenSidebar}
            handleFilterList={handleFilterList}
            handlePricesOptions={handlePricesOptions}
            radioButtonActive={radioButtonActive}
            setRadioButtonActive={setRadioButtonActive}
            handleSortBy={handleSortBy}
        />
        <div
            style={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                marginTop: 90,
                marginLeft: 347,
            }}
            onClick={handleCloseSidebar}
        >
            <Outlet />
        </div>

    </>
}

