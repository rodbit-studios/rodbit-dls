import styled, { FlattenSimpleInterpolation } from "styled-components";
import { colorTokens, fontFamilyTokens, spacingTokens } from "../../../styles/theme/tokens";
import { semanticTokens } from "../../../styles/theme/semantic";

interface RadioProps {
  checked?: boolean;
}

export type RadioStyles = FlattenSimpleInterpolation;

export const StyledRadio = styled.input.attrs({ type: "radio" }) <RadioProps>`
  width: ${spacingTokens.spacing.medium};
  height: ${spacingTokens.spacing.medium};
  border-radius: ${spacingTokens.borderRadius.medium};
  border: 1px solid ${colorTokens.core.gray[500]};
  cursor: pointer;

  &:checked {
    border-color: ${semanticTokens.button.primary.background};
    background-color: ${semanticTokens.button.primary.background};
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px ${semanticTokens.button.primary.text};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const RadioLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: ${spacingTokens.spacing.medium};
  cursor: pointer;
  font-size: ${spacingTokens.fontSizes.medium};
`;
