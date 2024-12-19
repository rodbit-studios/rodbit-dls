import React from "react";
import { StyledCheckbox, CheckboxLabel } from "./Checkbox.styles";

export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  disabled,
  onChange,
}) => {
  return (
    <CheckboxLabel disabled={disabled}>
      <StyledCheckbox
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      {label}
    </CheckboxLabel>
  );
};

export default Checkbox;
