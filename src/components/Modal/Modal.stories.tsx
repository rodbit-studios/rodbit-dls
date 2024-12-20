import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import Button from "../Button/Button";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    isOpen: { control: "boolean" },
    onClose: { action: "onClose" },
    title: { control: "text" },
  },
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Modal> = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <p>Modal content goes here</p>
        </Modal>
      </>
    );
  },
  args: {
    title: "Modal Title",
    footer: "Modal Footer",
  },
};
