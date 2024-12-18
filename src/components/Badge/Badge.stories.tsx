import { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },

  },
  tags: ["autodocs"],
};

export default meta;

export const Info: StoryObj<typeof Badge> = {
  args: {
    label: "Info",
    variant: "info",
  },
};

export const Warning: StoryObj<typeof Badge> = {
  args: {
    label: "Warning",
    variant: "warning",
  },
};

export const Sucess: StoryObj<typeof Badge> = {
  args: {
    label: "Sucess",
    variant: "sucess",
  },
};

export const Error: StoryObj<typeof Badge> = {
  args: {
    label: "Error",
    variant: "error",
  },
};
