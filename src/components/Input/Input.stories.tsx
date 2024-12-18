import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
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
    label: "Label"
  },
};

export const Filled: StoryObj<typeof Input> = {
  args: {
    variant: "filled",
    placeholder: "Input",
    label: "Label"
  },
};
