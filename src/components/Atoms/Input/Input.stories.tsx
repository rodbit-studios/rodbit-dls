import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  argTypes: {
    variant: {
      options: ["default", "filled"],
      control: { type: "radio" },
    },
  },
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Input> = {
  args: {
    variant: "default",
    placeholder: "Input",
  },
};

export const Filled: StoryObj<typeof Input> = {
  args: {
    variant: "filled",
    placeholder: "Input",
  },
};
