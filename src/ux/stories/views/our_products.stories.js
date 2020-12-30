import React from 'react';

import { OurProducts } from '../../views/our_products';

export default {
  title: 'Views/OurProducts',
  component: OurProducts,
  parameters: {
    position: "1.0"
  }
};

const Template = (args) => <OurProducts {...args} />


export const OurProductsDemo = Template.bind({});



