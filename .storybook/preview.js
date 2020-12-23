import React from 'react';
import '../src/stories/_shopping_cart_universe.scss'

export const parameters = {
  viewport: {
    viewports: {
      mobile: {
        name: 'Mobile (540)',
        styles: {
          width: '540px',
          heigth: '768px'
        },
        type: 'mobile'
      },
      desktop: {
        name: 'Desktop (1024)',
        styles: {
          width: '1024px',
          heigth: '768px'
        },
        type: 'tablet'
      }
    }
  },

}

export const decorators = [
  (Story) => (
    <Story />
  )
]