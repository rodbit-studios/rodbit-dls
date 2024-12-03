import { Meta, StoryObj } from "@storybook/react";
import Tabs from "./Tabs";
import { FaHouse, FaUser, FaCartShopping } from 'react-icons/fa6';

const meta: Meta<typeof Tabs> = {
  title: "Atoms/Tabs",
  component: Tabs,
  argTypes: {
    activeTab: { control: "select" },
    tabs: { control: "object" },
    onTabChange: { action: "onTabChange" },
  },
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Tabs> = {
  args: {
    tabs: [
      { label: "Tab 1", content: "Content for Tab 1" },
      { label: "Tab 1", content: "Content for Tab 2" },
      { label: "Tab 1", content: "Content for Tab 3" },
    ],
  },
};

export const Icons: StoryObj<typeof Tabs> = {
  args: {
    tabs: [
      { label: <FaHouse />, content: "Content for Tab 1" },
      { label: <FaUser />, content: "Content for Tab 2" },
      { label: <FaCartShopping />, content: "Content for Tab 3" },
    ],
  },
};
