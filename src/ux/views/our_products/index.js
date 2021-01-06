import React from 'react';

import { ProductItem } from '../../product_item';

export const OurProducts = ({ list }) => <div >
    <div className='our-products'>
        <div className='our-products-title'>
            <p>Our products:</p>
        </div>
        <div className='d-flex flex-wrap'>
            {list.map(item => <ProductItem {...item} />)}

        </div>

    </div>
</div>;





