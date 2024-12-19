import { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  argTypes: {},
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Select> = {
  args: {
    label: "Select an option",
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
  },
};

export const Disabled: StoryObj<typeof Select> = {
  args: {
    label: "Disabled Select",
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
    disabled: true,
  },
};
