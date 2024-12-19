import { fontFamilyStyles } from "@styles/mixins";
import { colorTokens, spacingTokens } from "@styles/theme/tokens";
import styled, { css } from "styled-components";
import { BadgeProps } from "./Badge";

export const StyledBadge = styled.label<BadgeProps>`
  display: inline-flex;
  background-color: ${colorTokens.success.main};
  border-radius: ${spacingTokens.borderRadius.xl};
  font-size: ${spacingTokens.fontSizes.xs};
  font-weight: 500;
  padding: ${spacingTokens.spacing.sm} ${spacingTokens.spacing.md};
  text-transform: uppercase;

  ${({ variant }) =>
    variant === "info"
      ? css`
          background-color: ${colorTokens.primary.blue.main};
          color: ${colorTokens.neutral.white};
        `
      : variant === "warning"
        ? css`
          background-color: ${colorTokens.warning.main};
        `
        : variant === "sucess"
          ? css`
          background-color: ${colorTokens.success.main};
          color: ${colorTokens.neutral.white};
        `
          : variant === "error"
            ? css`
          background-color: ${colorTokens.error.main};
          color: ${colorTokens.neutral.white};
        `
            : css`
          background-color: transparent;
        `}
  ${fontFamilyStyles}
`;

