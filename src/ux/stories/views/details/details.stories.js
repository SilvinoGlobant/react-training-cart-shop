import React from 'react';
import { CommentsDemo } from '../../comments/comments.stories';
import { ProductDatailDemo } from '../../product_detail/product_detail.stories';

export default {
    title: 'Views/Details',
    // component: OurProducts,
    parameters: {
        position: "1.0"
    }
};

const Details = () => (

    <div className='details w-100 d-flex flex-column align-items-center'>
        <ProductDatailDemo />
        <CommentsDemo />
    </div>

)


export const DetailsDemo = Details.bind({});
