import styled from "styled-components";
import { colorTokens, spacingTokens } from "@styles/theme/tokens";
import { fontFamilyStyles, } from "@styles/mixins";
import { CheckboxProps } from "./Checkbox";

export const StyledCheckbox = styled.input.attrs({ type: "checkbox" }) <CheckboxProps>`
  appearance: none;
  cursor: pointer;
  width: ${spacingTokens.spacing.md};
  height: ${spacingTokens.spacing.md};
  border: 1px solid ${colorTokens.neutral.black};
  border-radius: ${spacingTokens.borderRadius.xs};
  
  &:checked {
    border-color: ${colorTokens.primary.blue.main};
    background-color: ${colorTokens.primary.blue.main};
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='12' height='12' fill='none' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='20 6 9 17 4 12'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: center center;
  }

  &:disabled:not(:checked) {
    border-color: ${colorTokens.neutral.gray};
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled):not(:checked) {
    border-color: ${colorTokens.primary.blue.dark};
  }
`;

export const CheckboxLabel = styled.label<CheckboxProps>`
  display: inline-flex;
  align-items: center;
  gap: ${spacingTokens.spacing.sm};
  color: ${props => props.disabled
    ? colorTokens.neutral.gray
    : colorTokens.neutral.black};
  ${fontFamilyStyles}
`;
