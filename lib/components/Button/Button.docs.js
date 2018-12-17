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
    },
    {
      label: 'Button Hyperlink',
      render: () => <Button color="hyperlink">Button</Button>
    },
    {
      label: 'Button Primary Disabled',
      render: () => (
        <Button color="primary" disabled>
          Button
        </Button>
      )
    },
    {
      label: 'Button Primary Compact',
      render: () => (
        <Button color="primary" compact>
          Button
        </Button>
      )
    }
  ]
};
