import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { theme } from "../../../styles/theme/index.ts";

interface ButtonProps {
  variant?: "primary" | "secondary" | "text";
  size?: "small" | "medium" | "large";
  theme: typeof theme;
}

export type ButtonStyles = FlattenSimpleInterpolation;

export const StyledButton = styled.button<ButtonProps>`
  padding: ${({ size }) =>
    size === "small"
      ? theme.colors.medium
      : size === "medium"
        ? theme.colors.medium
        : theme.colors.large};
  font-size: ${({ size }) =>
    size === "small"
      ? theme.colors.small
      : size === "medium"
        ? theme.colors.medium
        : theme.colors.large};
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition:
    background-color 0.2s,
    color 0.2s;

  ${({ variant }) =>
    variant === "primary"
      ? css`
          background-color: ${theme.colors.button.primary.background};
          color: ${theme.colors.gray[100]};
          border: none;

          &:hover {
            background-color: ${theme.colors.background.base};
          }
        `
      : variant === "secondary"
        ? css`
            background-color: ${theme.colors.background.base};
            color: ${theme.colors.gray[900]};
            border: none;

            &:hover {
              background-color: ${theme.colors.blue.dark};
            }
          `
        : css`
            background-color: transparent;
            color: ${theme.colors.blue.primary};
            border: 1px solid ${theme.colors.blue.primary};

            &:hover {
              color: ${theme.colors.blue.dark};
              background-color: ${theme.colors.background.base};
            }
          `}
`;
