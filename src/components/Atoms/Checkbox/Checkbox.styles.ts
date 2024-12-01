import styled, { FlattenSimpleInterpolation } from "styled-components";
import { colorTokens, spacingTokens } from "../../../styles/theme/tokens";
import { fontFamilyStyles, hoverStyles } from "../../../styles/mixins";

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
  border: 1px solid ${colorTokens.core.gray[900]};
  border-radius: 4px;
  background-color: ${colorTokens.core.gray[100]};
  
  &:checked {
    border-color: ${colorTokens.core.blue.primary};
    background-color: ${colorTokens.core.blue.primary};
    color: ${colorTokens.core.gray[100]};
  }
  &:disabled {
    border-color: ${colorTokens.core.gray[300]};
    cursor: not-allowed;
  }
  ${hoverStyles}
`;

export const CheckboxLabel = styled.label<CheckboxProps>`
  display: inline-flex;
  align-items: center;
  gap: ${spacingTokens.spacing.small};
  color: ${props => props.disabled
    ? colorTokens.core.gray[300]
    : colorTokens.core.gray[900]};

  ${fontFamilyStyles}
  
`;
