import styled, { FlattenSimpleInterpolation } from "styled-components";
import { colorTokens, fontFamilyTokens, spacingTokens } from "../../../styles/theme/tokens";
import { semanticTokens } from "../../../styles/theme/semantic";
import { disabledStyles } from "../../../styles/mixins";

interface RadioProps {
  checked?: boolean;
  disabled?: boolean
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
    ${disabledStyles}
  }
`;

export const RadioLabel = styled.label<RadioProps>`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  gap: ${spacingTokens.spacing.small};
  font-size: ${spacingTokens.fontSizes.medium};
  font-family: ${fontFamilyTokens.fontFamilies.body};
  color: ${props => props.disabled
    ? colorTokens.core.gray[300]
    : colorTokens.core.gray[900]};
`;
