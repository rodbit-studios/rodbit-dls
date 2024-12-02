import { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";
import imgSrc from "../../../assets/images/logos/rodbit_logo_color.svg";

const meta: Meta<typeof Header> = {
  title: "Molecules/Header",
  component: Header,
  argTypes: {
  },
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Header> = {
  args: {
    imgSource: imgSrc,
    imgWidth: "100px",
    imgHeight: "100px",
  },
};

