import styled from "styled-components";
import { colorTokens, spacingTokens } from "@styles/theme/tokens";
import { fontFamilyStyles } from "@styles/mixins";
import { ToggleProps } from "./Toggle";


export const StyledToggle = styled.input.attrs({ type: "checkbox" }) <ToggleProps>`
  appearance: none;
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: ${spacingTokens.borderRadius.lg};
  background-color: ${colorTokens.neutral.lightgray};
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    border-radius: ${spacingTokens.borderRadius.lg};
    background-color: ${colorTokens.primary.blue.main};
    transition: transform 0.2s ease;
  }

  &:checked {
    background-color: ${colorTokens.primary.blue.main};
    
    &::after {
      transform: translateX(20px);
      background-color: ${colorTokens.neutral.white};
    }
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${colorTokens.neutral.lightgray};

    &::after {
      background-color: ${colorTokens.neutral.gray};
    }
  }
`;

export const ToggleLabel = styled.label<ToggleProps>`
  display: inline-flex;
  align-items: center;
  gap: ${spacingTokens.spacing.sm};
  
  color: ${props => props.disabled
    ? colorTokens.neutral.gray
    : colorTokens.neutral.black};
  
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  
  ${fontFamilyStyles}
`;
