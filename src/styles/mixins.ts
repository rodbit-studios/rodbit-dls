import { css } from "styled-components";
import theme from "./theme";

export const focusStyles = css`
  &:focus-visible {
    box-shadow: 0 0 0 2px ${theme.background.muted};
  }
`;

export const hoverStyles = css`
  &:hover {
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
  color: ${theme.colors.gray[400]}
  cursor: not-allowed;
`;

export const fontFamilyStyles = css`
  font-family: ${theme.fontFamilies.body};
`;
