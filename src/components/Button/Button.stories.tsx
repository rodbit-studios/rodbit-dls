import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {},
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
    color: "success",
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

export const Sucess: StoryObj<typeof Button> = {
  args: {
    children: "Button",
    color: "success",
  },
};

export const Error: StoryObj<typeof Button> = {
  args: {
    children: "Button",
    color: "error",
  },
};

export const Disabled: StoryObj<typeof Button> = {
  args: {
    children: "Button",
    disabled: true,
  },
};

export const OutlineColor: StoryObj<typeof Button> = {
  args: {
    children: "Button",
    variant: "outline",
    color: "error",
  },
};

