import { Meta, StoryObj } from "@storybook/react";
import Toggle from "./Toggle";

const meta: Meta<typeof Toggle> = {
  title: "Atoms/Toggle",
  component: Toggle,
  argTypes: {
    label: { control: "text" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    onChange: { action: "onChange" },
  },
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
