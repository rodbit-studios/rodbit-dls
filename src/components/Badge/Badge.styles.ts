import { fontFamilyStyles } from "@styles/mixins";
import { colorTokens, spacingTokens } from "@styles/theme/tokens";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

export type BadgeStyles = FlattenSimpleInterpolation;

export const StyledBadge = styled.label<BadgeStyles>`
  background-color: ${colorTokens.success.main};
  border-radius: ${spacingTokens.borderRadius.xl};
  font-size: ${spacingTokens.fontSizes.xs};
  padding: ${spacingTokens.spacing.sm} ${spacingTokens.spacing.md};
  text-transform: uppercase;

  ${({ variant }) =>
    variant === "info"
      ? css`
          background-color: ${colorTokens.primary.blue.light};
        `
      : variant === "warning"
        ? css`
          background-color: ${colorTokens.warning.light};
        `
        : variant === "sucess"
          ? css`
          background-color: ${colorTokens.success.light};
        `
          : variant === "error"
            ? css`
          background-color: ${colorTokens.error.light};
        `
            : css`
          background-color: transparent;
        `}
  ${fontFamilyStyles}
`;

