import styled, { FlattenSimpleInterpolation } from "styled-components";
import { colorTokens } from "../../../styles/theme/tokens";
import { semanticTokens } from "../../../styles/theme/semantic";

interface CheckboxProps {
  checked?: boolean;
}

export type CheckboxStyles = FlattenSimpleInterpolation;

export const StyledCheckbox = styled.input.attrs({ type: "checkbox" }) <CheckboxProps>`
  width: ${colorTokens.fontSizes.medium};
  height: ${colorTokens.fontSizes.medium};
  border: 1px solid ${colorTokens.core.gray[500]};
  cursor: pointer;

  &:checked {
    border-color: ${semanticTokens.state.success.text};
    background-color: ${semanticTokens.state.success.background};
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px ${semanticTokens.button.primary.text};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const CheckboxLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: ${colorTokens.spacing.small};
`;
