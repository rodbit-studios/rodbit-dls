import React from "react";
import { StyledSelect, SelectOption, SelectLabel, SelectWrapper } from "./Select.styles";

export interface SelectProps {
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
    <SelectWrapper>
      <SelectLabel>{label}</SelectLabel>
      <StyledSelect value={value} onChange={onChange} disabled={disabled}>
        {options.map((option) => (
          <SelectOption key={option.value} value={option.value}>
            {option.label}
          </SelectOption>
        ))}
      </StyledSelect>
    </SelectWrapper>
  );
};

export default Select;
