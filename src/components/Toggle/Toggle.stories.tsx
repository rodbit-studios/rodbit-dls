import { Meta, StoryObj } from "@storybook/react";
import Toggle from "./Toggle";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {},
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Toggle> = {
  args: {
    label: "Toggle Option",
  },
};

export const Checked: StoryObj<typeof Toggle> = {
  args: {
    label: "Checked Toggle",
    checked: true,
  },
};

export const Disabled: StoryObj<typeof Toggle> = {
  args: {
    label: "Disabled Toggle",
    disabled: true,
  },
};
