import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { colorTokens, spacingTokens, ColorVariant, getColor } from "@styles/theme/tokens";
import { ButtonProps } from "./Button";

export type ButtonStyles = FlattenSimpleInterpolation;

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  // Padding based on size
  padding: 0.5rem ${({ size }) =>
    size === "small"
      ? `${spacingTokens.spacing.sm}px`
      : size === "medium"
        ? `${spacingTokens.spacing.md}px`
        : `${spacingTokens.spacing.lg}px`};
  
  // Font size based on size
  font-size: ${({ size }) =>
    size === "small"
      ? `${spacingTokens.fontSizes.sm}px`
      : size === "medium"
        ? `${spacingTokens.fontSizes.md}px`
        : `${spacingTokens.fontSizes.lg}px`};
  
  border-radius: ${spacingTokens.borderRadius.xl}px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  // Color and variant handling
  ${({ color = 'primary', variant = 'filled' }) => {
    // Determine base colors based on variant and color
    const baseColor = getColor(color);
    const darkColor = color === 'neutral'
      ? colorTokens.neutral.text
      : getColor(color, 'dark');

    // Variant-specific styles
    return css`
      ${variant === 'filled' && css`
        background-color: ${baseColor};
        color: ${colorTokens.neutral.white};

        &:hover:not(:disabled) {
          filter: brightness(1.1);
        }

        &:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          background-color: ${darkColor};
        }
      `}

      ${variant === 'outline' && css`
        background-color: transparent;
        color: ${baseColor};
        border: 1px solid ${baseColor};

        &:hover:not(:disabled) {
          background-color: ${baseColor}20; // 20% opacity
          border-color: ${darkColor};
          color: ${darkColor};
        }

        &:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          border-color: ${darkColor};
          color: ${darkColor};
        }
      `}

      ${variant === 'text' && css`
        background-color: transparent;
        color: ${baseColor};

        &:hover:not(:disabled) {
          color: ${darkColor};
        }

        &:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          color: ${darkColor};
        }
      `}
    `;
  }}
`;
