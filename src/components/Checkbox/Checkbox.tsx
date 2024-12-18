import React from "react";
import { StyledCheckbox, CheckboxLabel } from "./Checkbox.styles";

interface StyledCheckbox {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: () => void;
}

const Checkbox: React.FC<StyledCheckbox> = ({
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
