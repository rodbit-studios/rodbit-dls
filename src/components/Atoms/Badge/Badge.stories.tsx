import { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },

  },
  tags: ["autodocs"],
};

export default meta;

export const Filled: StoryObj<typeof Badge> = {
  args: {
    label: "Badge",
  },
};

export const Outline: StoryObj<typeof Badge> = {
  args: {
    label: "Badge",
    variant: "outline",
  },
};
