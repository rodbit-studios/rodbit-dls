import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { colorTokens, spacingTokens } from "@styles/theme/tokens";
import { disabledStyles, fontFamilyStyles } from "@styles/mixins";

export type BadgeStyles = FlattenSimpleInterpolation;

export const StyledBadge = styled.label<BadgeStyles>`
  background-color: ${colorTokens.blue.primary};
  border: 1px solid ${colorTokens.gray.primary};
  border-radius: ${spacingTokens.borderRadius.xLarge};
  font-size: ${spacingTokens.fontSizes.small};
  padding: ${spacingTokens.spacing.small};
  text-transform: uppercase;

  ${({ variant }) =>
    variant === "filled"
      ? css`
          background-color: ${colorTokens.blue.primary};
          color: ${colorTokens.white};
          border: none;
        `
      : css`
          background-color: transparent;
          color: ${colorTokens.blue.primary};
          border: 1px solid ${colorTokens.blue.primary};
        `}
  ${fontFamilyStyles}
`;

