import React from "react";
import { StyledSelect, SelectOption, SelectLabel } from "./Select.styles";

interface SelectProps {
  label?: string;
  options: { label: string; value: string }[];
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  disabled,
}) => {
  return (
    <div>
      {label && <SelectLabel>{label}</SelectLabel>}
      <StyledSelect value={value} onChange={onChange} disabled={disabled}>
        <SelectOption value="">Select an option</SelectOption>
        {options.map((option) => (
          <SelectOption key={option.value} value={option.value}>
            {option.label}
          </SelectOption>
        ))}
      </StyledSelect>
    </div>
  );
};

export default Select;