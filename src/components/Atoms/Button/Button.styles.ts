import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { theme } from "../../../styles/theme/index.ts";
import { colorTokens, spacingTokens } from "../../../styles/theme/tokens";
import { semanticTokens } from "../../../styles/theme/semantic";

interface ButtonProps {
  variant?: "filled" | "outline" | "text";
  size?: "small" | "medium" | "large";
  theme: typeof theme;
}

export type ButtonStyles = FlattenSimpleInterpolation;

export const StyledButton = styled.button<ButtonProps>`
  padding: ${({ size }) =>
    size === "small"
      ? spacingTokens.spacing.small
      : size === "medium"
        ? spacingTokens.spacing.medium
        : spacingTokens.spacing.large};
  font-size: ${({ size }) =>
    size === "small"
      ? spacingTokens.fontSizes.small
      : size === "medium"
        ? spacingTokens.fontSizes.medium
        : spacingTokens.fontSizes.large};
  border-radius: ${spacingTokens.borderRadius.small};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
          border: none;

  ${({ variant }) =>
    variant === "filled"
      ? css`
          background-color: ${colorTokens.core.blue.primary};
          color: ${semanticTokens.text.primary};

          &:hover {
            background-color: ${semanticTokens.button.primary.hover};
          }
        `
      : variant === "outline"
        ? css`
            background-color: ${colorTokens.core.blue.muted};
            color: ${semanticTokens.text.primary};

            &:hover {
              background-color: ${colorTokens.core.blue.dark};
            }
          `
        : css`
            background-color: transparent;
            color: ${theme.colors.blue.primary};

            &:hover {
              color: ${theme.colors.blue.dark};
            }
          `}
`;
