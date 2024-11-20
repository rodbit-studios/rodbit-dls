import { Meta, StoryObj } from "@storybook/react";
import Radio from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "Atoms/Radio",
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
    label: "Option A",
    checked: false,
    disabled: false,
  },
};

export const Checked: StoryObj<typeof Radio> = {
  args: {
    label: "Option B",
    checked: true,
    disabled: false,
  },
};

export const Disabled: StoryObj<typeof Radio> = {
  args: {
    label: "Option C",
    checked: false,
    disabled: true,
  },
};
