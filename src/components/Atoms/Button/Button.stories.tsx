import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "text"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
  tags: ["autodocs"],
};

export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Text: StoryObj<typeof Button> = {
  args: {
    variant: "text",
    children: "Text Button",
  },
};
