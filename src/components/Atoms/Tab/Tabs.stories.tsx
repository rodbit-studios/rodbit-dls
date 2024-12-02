import { Meta, StoryObj } from "@storybook/react";
import Tabs from "./Tabs";

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
      { label: "Tab 2", content: "Content for Tab 2" },
      { label: "Tab 3", content: "Content for Tab 3" },
    ],
  },
};
