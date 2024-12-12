import styled, { FlattenSimpleInterpolation } from "styled-components";
import { colorTokens, spacingTokens } from "@styles/theme/tokens";
import { fontFamilyStyles, hoverStyles } from "@styles/mixins";

interface CheckboxProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  checked?: boolean;
  disabled?: boolean;
}

export type CheckboxStyles = FlattenSimpleInterpolation;

export const StyledCheckbox = styled.input.attrs({ type: "checkbox" }) <CheckboxProps>`
  appearance: none;
  cursor: pointer;
  width: ${spacingTokens.spacing.medium};
  height: ${spacingTokens.spacing.medium};
  border: 1px solid ${colorTokens.black};
  border-radius: 4px;
  
  &:checked {
    border-color: ${colorTokens.blue.primary};
    background-color: ${colorTokens.blue.primary};
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='12' height='12' fill='none' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='20 6 9 17 4 12'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: center center;
  }

  &:disabled:not(:checked) {
    border-color: ${colorTokens.gray.primary};
    cursor: not-allowed;
  }
  ${hoverStyles}
`;

export const CheckboxLabel = styled.label<CheckboxProps>`
  display: inline-flex;
  align-items: center;
  gap: ${spacingTokens.spacing.small};
  color: ${props => props.disabled
    ? colorTokens.gray.primary
    : colorTokens.gray.secondary};
  ${fontFamilyStyles}
`;
