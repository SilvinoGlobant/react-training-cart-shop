import React from 'react';

import { ProductItem } from '../../product_item';

export const OurProducts = ({ list, navigateToDetails }) => <div >
    <div className='our-products'>
        <div className='our-products-title'>
            <p>Our products:</p>
        </div>
        <div className='d-flex flex-wrap'>
            {list.map(item => <ProductItem key={`item-${item.id}`} {...item} navigateToDetails={navigateToDetails} />)}

        </div>

    </div>
</div>;





