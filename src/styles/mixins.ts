import { css } from "styled-components";
import theme from "./theme";

export const focusStyles = css`
  &:focus-visible {
    box-shadow: 0 0 2px 2px ${theme.colors.gray.primary};
  }
`;

export const hoverStyles = css`
  &:hover {
    border-color: ${theme.colors.blue.secondary};
  }
`;

export const inputBaseStyles = css`
  font-family: inherit;
  font-size: inherit;
  border-radius: ${theme.borderRadius.medium};

  &:focus {
    outline: none;
  }
`;

export const disabledStyles = css`
  color: ${theme.colors.gray.primary};
  cursor: not-allowed;
`;

export const fontFamilyStyles = css`
  font-family: ${theme.fontFamilies.body};
`;
