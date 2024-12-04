import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

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

export const IconLeft: StoryObj<typeof Button> = {
  args: {
    children: "Button",
    leftIcon: <FaAngleLeft />,
  },
};
export const IconRight: StoryObj<typeof Button> = {
  args: {
    children: "Button",
    rightIcon: <FaAngleRight />,
  },
};
