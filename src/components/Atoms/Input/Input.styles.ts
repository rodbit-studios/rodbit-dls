import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { semanticTokens } from "../../../styles/theme/semantic.ts";
import { colorTokens } from "../../../styles/theme/tokens.ts";
import { focusStyles, inputBaseStyles } from "../../../styles/mixins.ts";

interface InputProps {
  variant?: "default" | "filled";
}

export type InputStyles = FlattenSimpleInterpolation;

export const StyledInput = styled.input<InputProps>`
  ${inputBaseStyles}
  padding: ${colorTokens.spacing.small};
  font-size: ${colorTokens.fontSizes.medium};
  font-weight: 600;

  ${({ variant }) =>
    variant === "default"
      ? css`
          color: ${semanticTokens.button.primary.text};
          border: 1px solid ${semanticTokens.button.primary.background};
          &:hover {
            border: 1px solid ${semanticTokens.button.primary.hover};
          }
          ${focusStyles}
        `
      : css`
          color: ${semanticTokens.button.primary.text};
          background-color: ${semanticTokens.button.primary.background};
          &:hover {
            background-color: ${semanticTokens.button.primary.hover};
          }
          &:focus-visible {
            background-color: ${semanticTokens.button.primary.background};
            border-color: ${semanticTokens.state.error.background};
          }
        `}
`;
