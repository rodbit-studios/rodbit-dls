import { Meta, StoryObj } from "@storybook/react";
import { IoWarning, IoInformationCircle, IoAlertCircle, IoCheckmarkCircle } from "react-icons/io5";
import Alert from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Atoms/Alert",
  component: Alert,
  argTypes: {},
  tags: ["autodocs"],
};

export default meta;

export const Info: StoryObj<typeof Alert> = {
  args: {
    title: "Info",
    body: "This is an alert",
    icon: <IoInformationCircle />,
    variant: "info",
  },
};

export const Warning: StoryObj<typeof Alert> = {
  args: {
    title: "Warning",
    body: "This is an alert",
    icon: <IoWarning />,
    variant: "warning",
  },
};

export const Success: StoryObj<typeof Alert> = {
  args: {
    title: "Success",
    body: "This is an alert",
    icon: <IoCheckmarkCircle />,
    variant: "sucess",
  },
};

export const Error: StoryObj<typeof Alert> = {
  args: {
    title: "Error",
    body: "This is an alert",
    icon: <IoAlertCircle />,
    variant: "error",
  },
};
