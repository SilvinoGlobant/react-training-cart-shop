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
OurProductsDemo.args = {
  list: [
    {
      id: 1,
      name: 'Lava lamp',
      rate: '4.5',
      price: '120.00',
      comments: '2',
      basics: true
    }, {
      id: 2,
      name: 'Cup coffe',
      rate: '4.5',
      price: '20.00',
      comments: '12',
      basics: false
    }, {
      id: 3,
      name: 'Canada Pencil',
      rate: '2.5',
      price: '5.00',
      comments: '11',
      basics: false
    }, {
      id: 4,
      name: 'Cool Notebook',
      rate: '5.0',
      price: '11.00',
      comments: '8',
      basics: true
    }, {
      id: 5,
      name: 'Cool Notebook',
      rate: '5.0',
      price: '11.00',
      comments: '8',
      basics: false

    }, {
      id: 6,
      name: 'Bose Quiet Comfort II',
      rate: '5.0',
      price: '100.00',
      comments: '16',
      basics: false
    }, {
      id: 7,
      name: 'Keyboard Logitech',
      rate: '4.0',
      price: '80.00',
      comments: '26',
      basics: true
    }, {
      id: 8,
      name: 'MacBook Pro',
      rate: '4.5',
      price: '220.00',
      comments: '10',
      basics: false
    }, {
      id: 9,
      name: 'Hello Kitty toy',
      rate: '4.5',
      price: '20.00',
      comments: '10',
      basics: false
    }, {
      id: 10,
      name: 'Samsung Monitor',
      rate: '3.5',
      price: '120.00',
      comments: '13',
      basics: true
    }],
};



