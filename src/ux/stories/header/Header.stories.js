import React from 'react';

import { Header } from './Header';

export default {
  title: 'Core/Header',
  component: Header,
  parameters: {
    position: "1.0"
  }
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};


