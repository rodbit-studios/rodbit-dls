import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import Skeleton from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    variant: 'rectangular',
    width: '100%',
    height: '50px',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    width: '200px',
    height: '20px',
  },
};

export const Circular: Story = {
  args: {
    variant: 'circular',
    width: '50px',
    height: '50px',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Skeleton variant="rectangular" width="200px" height="100px" />
      <Skeleton variant="circular" width="50px" height="50px" />
      <Skeleton variant="text" width="150px" height="20px" />
    </div>
  ),
};

export const Animations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Skeleton animation="wave" />
      <Skeleton animation="pulse" />
      <Skeleton animation="none" />
    </div>
  ),
};
