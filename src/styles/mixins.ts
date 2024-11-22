import { css } from "styled-components";
import theme from "./theme";

export const focusStyles = css`
  &:focus-visible {
    box-shadow: 0 0 0 2px ${theme.colors.gray[500]};
  }
`;

export const hoverStyles = css`
  &:hover {
  }
`;

export const inputBaseStyles = css`
  font-family: inherit;
  font-size: inherit;
  border-radius: ${theme.colors.medium};

  &:focus {
    outline: none;
  }
`;
