import { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  argTypes: {
    label: { control: "text" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    onChange: { action: "onChange" },
  },
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Checkbox> = {
  args: {
    label: "Option A",
  },
};

export const Checked: StoryObj<typeof Checkbox> = {
  args: {
    label: "Option B",
    checked: true,
    disabled: false,
  },
};

export const Disabled: StoryObj<typeof Checkbox> = {
  args: {
    label: "Option C",
    checked: false,
    disabled: true,
  },
};
