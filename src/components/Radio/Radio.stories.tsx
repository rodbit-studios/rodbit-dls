import { Meta, StoryObj } from "@storybook/react";
import Radio from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  argTypes: {
    label: { control: "text" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    onChange: { action: "onChange" },
  },
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Radio> = {
  args: {
    label: "Default",
  },
};

export const Checked: StoryObj<typeof Radio> = {
  args: {
    label: "Checked",
    checked: true,
    disabled: false,
  },
};

export const Disabled: StoryObj<typeof Radio> = {
  args: {
    label: "Disabled",
    checked: false,
    disabled: true,
  },
};
