import React from "react";
import { StyledInput, InputLabel } from "./Input.styles";

export interface InputProps {
  label?: string;
  variant?: "default" | "filled";
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ variant = "default", label, placeholder }) => {
  return (
    <InputLabel>
      {label}
      <StyledInput variant={variant} placeholder={placeholder} />
    </InputLabel>
  )
};

export default Input;
