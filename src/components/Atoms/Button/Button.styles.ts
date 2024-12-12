import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { colorTokens, spacingTokens } from "@styles/theme/tokens";

interface ButtonProps {
  variant?: "filled" | "outline" | "text";
  size?: "small" | "medium" | "large";
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
          background-color: ${colorTokens.blue.primary};
          color: ${colorTokens.white};

          &:hover {
            background-color: ${colorTokens.blue.secondary};
          }
        `
      : variant === "outline"
        ? css`
            background-color: transparent;
            color: ${colorTokens.blue.primary};
            border: 1px solid ${colorTokens.blue.primary};

            &:hover {
              background-color: ${colorTokens.blue.secondary};
              color: ${colorTokens.white};
              border: 1px solid ${colorTokens.blue.secondary};
            }
          `
        : css`
            background-color: transparent;
            color: ${colorTokens.blue.primary};

            &:hover {
              color: ${colorTokens.blue.secondary};
            }
          `}
`;
