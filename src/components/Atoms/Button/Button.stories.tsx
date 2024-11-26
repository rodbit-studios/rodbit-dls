import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["filled", "outline", "text"],
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

export const Filled: StoryObj<typeof Button> = {
  args: {
    variant: "filled",
    children: "Button",
  },
};

export const Outline: StoryObj<typeof Button> = {
  args: {
    variant: "outline",
    children: "Button",
  },
};

export const Text: StoryObj<typeof Button> = {
  args: {
    variant: "text",
    children: "Button",
  },
};
