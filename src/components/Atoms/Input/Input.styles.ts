import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { semanticTokens } from "../../../styles/theme/semantic.ts";
import { colorTokens, spacingTokens } from "../../../styles/theme/tokens.ts";
import { disabledStyles, focusStyles, fontFamilyStyles, hoverStyles, inputBaseStyles } from "../../../styles/mixins.ts";

interface InputProps {
  variant?: "default" | "filled";
}

export type InputStyles = FlattenSimpleInterpolation;

export const StyledInput = styled.input<InputProps>`
  ${inputBaseStyles}
  padding: ${spacingTokens.spacing.small};
  font-size: ${spacingTokens.spacing.medium};
  font-weight: 600;

  ${({ variant }) =>
    variant === "default"
      ? css`
          border: 1px solid ${colorTokens.core.blue.primary};
          border-radius: ${spacingTokens.borderRadius.medium};
          &:hover {
            border: 1px solid ${colorTokens.core.blue.dark};
          }
        `
      : css`
          color: ${semanticTokens.text.primary};
          background-color: ${semanticTokens.button.primary.background};
          border-radius: ${spacingTokens.borderRadius.medium};
          border: 1px solid ${colorTokens.core.blue.primary};
          &:hover {
            border: 1px solid ${colorTokens.core.blue.dark};
          }

        `}
  ${focusStyles}
  ${hoverStyles}
  ${fontFamilyStyles}
`;
