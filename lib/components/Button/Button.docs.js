import React from 'react';
import Button from './Button';
import Text from '../Text/Text';

export default {
  component: Button,
  examples: [
    {
      label: 'Button Primary',
      render: () => (
        <Button color="primary">
          <Text>Button</Text>
        </Button>
      )
    },
    {
      label: 'Button Secondary',
      render: () => (
        <Button color="secondary">
          <Text>Button</Text>
        </Button>
      )
    },
    {
      label: 'Button CallToAction',
      render: () => (
        <Button color="callToAction">
          <Text>Button</Text>
        </Button>
      )
    },
    {
      label: 'Button Hyperlink',
      render: () => (
        <Button color="hyperlink">
          <Text>Button</Text>
        </Button>
      )
    }
  ]
};
