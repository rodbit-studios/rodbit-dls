import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { colorTokens, spacingTokens } from "../../../styles/theme/tokens";
import { semanticTokens } from "../../../styles/theme/semantic";


export type BadgeStyles = FlattenSimpleInterpolation;

export const StyledBadge = styled.label<BadgeStyles>`
  background-color: ${semanticTokens.background.contrast};
  border: 1px solid ${colorTokens.core.gray[500]};
  border-radius: ${spacingTokens.spacing.small};
  font-size: ${spacingTokens.fontSizes.small};
  padding: ${spacingTokens.spacing.small};
  text-transform: uppercase;

  &:focus {
    outline: none;
    border-color: ${semanticTokens.button.primary.background};
  }

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
          background-color: none;
          color: ${semanticTokens.text.inverse};
          border: 1px solid ${semanticTokens.border.contrast};
        `}
`;

