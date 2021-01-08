import React from 'react';
import Sidebar from 'ux/sidebar';

import { ProductItem } from '../../product_item';

export const OurProducts = ({ list, navigateToDetails }) =>
    <div className='our-products'>
        <Sidebar />
        <div className='our-products-title'>
            <p>Our products:</p>
        </div>
        <div className='d-flex flex-wrap'>
            {list.map(item => <ProductItem key={`item-${item.id}`} {...item} navigateToDetails={navigateToDetails} />)}
        </div>
    </div>;





