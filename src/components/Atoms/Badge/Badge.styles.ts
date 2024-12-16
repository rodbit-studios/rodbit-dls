import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { colorTokens, spacingTokens } from "@styles/theme/tokens";
import { fontFamilyStyles } from "@styles/mixins";

export type BadgeStyles = FlattenSimpleInterpolation;

export const StyledBadge = styled.label<BadgeStyles>`
  background-color: ${colorTokens.blue.primary};
  border-radius: ${spacingTokens.borderRadius.xLarge};
  font-size: ${spacingTokens.fontSizes.small};
  padding: ${spacingTokens.spacing.small} ${spacingTokens.spacing.medium};
  text-transform: uppercase;

  ${({ variant }) =>
    variant === "info"
      ? css`
          background-color: ${colorTokens.blue.muted};
        `
      : variant === "warning"
        ? css`
          background-color: ${colorTokens.yellow.muted};
        `
        : variant === "sucess"
          ? css`
          background-color: ${colorTokens.green.muted};
        `
          : variant === "error"
            ? css`
          background-color: ${colorTokens.red.muted};
        `
            : css`
          background-color: transparent;
        `}
  ${fontFamilyStyles}
`;

