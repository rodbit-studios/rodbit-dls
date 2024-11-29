import styled, { FlattenSimpleInterpolation } from "styled-components";
import { colorTokens, spacingTokens } from "../../../styles/theme/tokens";
import { fontFamilyStyles } from "../../../styles/mixins";

interface ToggleProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  checked?: boolean;
  disabled?: boolean;
}

export type ToggleStyles = FlattenSimpleInterpolation;

export const StyledToggle = styled.input.attrs({ type: "checkbox" }) <ToggleProps>`
  appearance: none;
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: ${spacingTokens.borderRadius.large};
  background-color: ${colorTokens.core.gray[300]};
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    border-radius: ${spacingTokens.borderRadius.large};
    background-color: ${colorTokens.core.gray[100]};
    transition: transform 0.2s ease;
  }

  &:checked {
    background-color: ${colorTokens.core.blue.primary};
    
    &::after {
      transform: translateX(20px);
      background-color: ${colorTokens.core.gray[100]};
    }
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${colorTokens.core.gray[200]};

    &::after {
      background-color: ${colorTokens.core.gray[300]};
    }
  }
`;

export const ToggleLabel = styled.label<ToggleProps>`
  display: inline-flex;
  align-items: center;
  gap: ${spacingTokens.spacing.small};
  
  color: ${props => props.disabled
    ? colorTokens.core.gray[300]
    : colorTokens.core.gray[900]};
  
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  
  ${fontFamilyStyles}
`;
