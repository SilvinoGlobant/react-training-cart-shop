import React from 'react';

import { ProductItem } from './product_item';

export default {
    title: 'Core/ProductItem',
    component: ProductItem,
    parameters: {
        position: "2.0"
    }
};

const Template = (args) => <ProductItem {...args} />;

export const ProductItemA = Template.bind({});
ProductItemA.args = {
    user: {},
};


