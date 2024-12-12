import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { colorTokens, spacingTokens } from "@styles/theme/tokens";
import { disabledStyles, fontFamilyStyles } from "@styles/mixins";

interface AlertHeaderProps {
  variant?: "filled" | "outline";
}

export type AlertStyles = FlattenSimpleInterpolation;

export const StyledAlert = styled.div<{ variant?: "filled" | "outline" }>`
  background-color: ${colorTokens.blue.muted};
  border-radius: ${spacingTokens.borderRadius.medium};
  font-size: ${spacingTokens.fontSizes.small};
  padding: ${spacingTokens.spacing.medium};
  margin-bottom: ${spacingTokens.spacing.medium};

  &:disabled {
    ${disabledStyles}
  }

  ${({ variant }) =>
    variant === "filled"
      ? css`
          background-color: ${colorTokens.blue.muted};
          color: ${colorTokens.gray.secondary};
        `
      : css`
          background-color: transparent;
          border: 1px solid ${colorTokens.blue.primary};
        `}
  ${fontFamilyStyles}
`;

export const AlertHeader = styled.header<AlertHeaderProps>`
  color: ${colorTokens.blue.primary};
  font-size: ${spacingTokens.fontSizes.medium};
  font-weight: bold;
  margin-bottom: ${spacingTokens.spacing.small};
`;

export const AlertBody = styled.main`
  font-size: ${spacingTokens.fontSizes.small};
`;
