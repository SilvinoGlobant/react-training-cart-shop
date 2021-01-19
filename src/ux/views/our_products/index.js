import React from 'react';
import Sidebar from 'ux/sidebar';

import { ProductItem } from '../../product_item';

export function OurProducts({
    addProduct,
    list,
    navigateToDetails,
    handleFilterList,
    handlePricesOptions,
    radioButtonActive,
    setRadioButtonActive,
    handleSortBy, referencia
}) {
    return <div className='our-products'>
        <Sidebar
            handleFilterList={handleFilterList}
            handlePricesOptions={handlePricesOptions}
            radioButtonActive={radioButtonActive}
            setRadioButtonActive={setRadioButtonActive}
            handleSortBy={handleSortBy}
        />
        <div className='our-products-title'>
            <p>Our products:</p>
        </div>
        <div ref={referencia} className='d-flex flex-wrap'>
            {list.map(item => <ProductItem key={`item-${item.id}`} {...item} navigateToDetails={navigateToDetails} addProduct={addProduct} />)}
        </div>
    </div>;
}






