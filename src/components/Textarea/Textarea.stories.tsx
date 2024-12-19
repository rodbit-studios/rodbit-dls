import type { Meta, StoryObj } from '@storybook/react';
import Textarea from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: 'Description',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Textarea',
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Error State',
    error: 'Please provide a valid description',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Feedback',
    helperText: 'Please provide detailed feedback',
  },
};

