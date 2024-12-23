import { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {},
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
    label: "Checked",
    checked: true,
    disabled: false,
  },
};

export const Disabled: StoryObj<typeof Checkbox> = {
  args: {
    label: "Disabled",
    disabled: true,
  },
};
