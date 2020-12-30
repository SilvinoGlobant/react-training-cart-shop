import React from 'react';

import { ProductItem } from '../../stories/product_item/product_item';

export const OurProducts = () => <div >
    <div className='our-products'>
        <div className='our-products-title'>
            <p>Our products:</p>
        </div>
        <div className='d-flex justify-content-between'>
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </div>
        <div className='d-flex justify-content-between'>
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </div>
    </div>
</div>;





