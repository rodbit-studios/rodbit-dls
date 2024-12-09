import { Meta, StoryObj } from "@storybook/react";
import Alert from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Atoms/Alert",
  component: Alert,
  argTypes: {},
  tags: ["autodocs"],
};

export default meta;

export const Filled: StoryObj<typeof Alert> = {
  args: {
    title: "Alert",
    body: "This is an alert",
  },
};

export const Outline: StoryObj<typeof Alert> = {
  args: {
    title: "Alert",
    body: "This is an alert",
    variant: "outline",
  },
};

