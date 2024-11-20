import React from "react";
import { StyledInput } from "./Input.styles";

interface InputProps {
  variant?: "default" | "filled";
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ variant = "default" }) => {
  return <StyledInput variant={variant} />;
};

export default Input;
