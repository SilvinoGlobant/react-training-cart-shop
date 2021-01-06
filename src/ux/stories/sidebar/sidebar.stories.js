import React from 'react';

import Sidebar from '../../sidebar';

export default {
  title: 'Core/Sidebar',
  component: Sidebar,
  parameters: {
    position: "1.0"
  }
};

const Template = (args) => <Sidebar {...args} />;

export const SidebarDemo = Template.bind({});



