import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { colorTokens, spacingTokens } from "../../../styles/theme/tokens";
import { semanticTokens } from "../../../styles/theme/semantic";
import { fontFamilyStyles } from "../../../styles/mixins";

export type BadgeStyles = FlattenSimpleInterpolation;

export const StyledBadge = styled.label<BadgeStyles>`
  background-color: ${colorTokens.core.blue.primary};
  border: 1px solid ${colorTokens.core.gray[500]};
  border-radius: ${spacingTokens.borderRadius.medium};
  font-size: ${spacingTokens.fontSizes.small};
  padding: ${spacingTokens.spacing.small};
  text-transform: uppercase;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ variant }) =>
    variant === "filled"
      ? css`
          background-color: ${colorTokens.core.blue.primary};
          color: ${semanticTokens.text.primary};
          border: none;
        `
      : css`
          background-color: transparent;
          color: ${colorTokens.core.blue.primary};
          border: 1px solid ${colorTokens.core.blue.primary};
        `}
  ${fontFamilyStyles}
`;

