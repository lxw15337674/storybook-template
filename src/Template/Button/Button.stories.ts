import { Meta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Template/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Displays an image that represents a user or organization',
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
  },
  tags: ['autodocs'],
} as Meta<typeof Button>

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};
