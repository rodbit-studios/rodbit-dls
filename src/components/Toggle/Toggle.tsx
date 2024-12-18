import React from "react";
import { StyledToggle, ToggleLabel } from "./Toggle.styles";

interface ToggleProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: () => void;
}

const Toggle: React.FC<ToggleProps> = ({
  label,
  checked,
  disabled,
  onChange,
}) => {
  return (
    <ToggleLabel disabled={disabled}>
      <StyledToggle
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      {label}
    </ToggleLabel>
  );
};

export default Toggle;
