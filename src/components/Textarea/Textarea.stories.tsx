import type { Meta, StoryObj } from '@storybook/react';
import Textarea from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
    helperText: { control: 'text' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    required: { control: 'boolean' },
    startAdornment: { control: 'object' },
    endAdornment: { control: 'object' },
  },
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

