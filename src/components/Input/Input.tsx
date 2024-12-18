import React from "react";
import { StyledInput, InputLabel } from "./Input.styles";

interface InputProps {
  label: string;
  variant?: "default" | "filled";
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, variant = "default" }) => {
  return (
    <InputLabel>
      {label}
      <StyledInput variant={variant} />
    </InputLabel>
  )
};

export default Input;
