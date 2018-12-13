import React from 'react';
import Button from './Button';

export default {
  component: Button,
  examples: [
    {
      label: 'Button Primary',
      render: () => <Button color="primary">Button</Button>
    },
    {
      label: 'Button Secondary',
      render: () => <Button color="secondary">Button</Button>
    },
    {
      label: 'Button CallToAction',
      render: () => <Button color="callToAction">Button</Button>
    }
  ]
};
