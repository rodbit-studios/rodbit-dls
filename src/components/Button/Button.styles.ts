import styled, { css } from "styled-components";
import { colorTokens, spacingTokens, getColor } from "@styles/theme/tokens";
import { ButtonProps } from "./Button";

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  // Padding based on size
  padding: 0.5rem ${({ size }) =>
    size === "small"
      ? `${spacingTokens.spacing.sm}`
      : size === "medium"
        ? `${spacingTokens.spacing.md}`
        : `${spacingTokens.spacing.lg}`};
  
  // Font size based on size
  font-size: ${({ size }) =>
    size === "small"
      ? `${spacingTokens.fontSizes.sm}`
      : size === "medium"
        ? `${spacingTokens.fontSizes.md}`
        : `${spacingTokens.fontSizes.lg}`};
  
  border-radius: ${spacingTokens.borderRadius.xl};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  // Color and variant handling
  ${({ color, variant }) => {
    const baseColor = getColor(color, 'main');
    const darkColor = getColor(color, 'dark');

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
