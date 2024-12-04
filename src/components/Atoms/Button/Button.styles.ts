import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { theme } from "../../../styles/theme/index.ts";
import { colorTokens, spacingTokens } from "../../../styles/theme/tokens";

interface ButtonProps {
  variant?: "filled" | "outline" | "text";
  size?: "small" | "medium" | "large";
  theme: typeof theme;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export type ButtonStyles = FlattenSimpleInterpolation;

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem ${({ size }) =>
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
  border-radius: ${spacingTokens.borderRadius.xLarge};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: none;

  ${({ variant }) =>
    variant === "filled"
      ? css`
          background-color: ${colorTokens.core.blue.primary};
          color: ${colorTokens.core.gray[100]};

          &:hover {
            background-color: ${colorTokens.core.blue.dark};
          }
        `
      : variant === "outline"
        ? css`
            background-color: transparent;
            color: ${colorTokens.core.blue.primary};
            border: 1px solid ${colorTokens.core.blue.primary};

            &:hover {
              background-color: ${colorTokens.core.blue.dark};
              color: ${colorTokens.core.gray[100]};
              border: 1px solid ${colorTokens.core.blue.dark};
            }
          `
        : css`
            background-color: transparent;
            color: ${colorTokens.core.blue.primary};

            &:hover {
              color: ${colorTokens.core.blue.dark};
            }
          `}
`;
