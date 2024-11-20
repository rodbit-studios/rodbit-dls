import React from "react";
import { StyledRadio, RadioLabel } from "./Radio.styles";

interface RadioProps {
  label?: string;
  variant?: "filled" | "outline";
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio: React.FC<RadioProps> = ({
  label,
  checked,
  disabled,
  onChange,
}) => {
  return (
    <RadioLabel>
      <StyledRadio
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      {label}
    </RadioLabel>
  );
};

export default Radio;
