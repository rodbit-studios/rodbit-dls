import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { colorTokens, spacingTokens } from "../../../styles/theme/tokens";
import { disabledStyles, fontFamilyStyles } from "../../../styles/mixins";

interface AlertHeaderProps {
  variant?: "filled" | "outline";
}

export type AlertStyles = FlattenSimpleInterpolation;

export const StyledAlert = styled.div<{ variant?: "filled" | "outline" }>`
  background-color: ${colorTokens.core.blue.muted};
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
          background-color: ${colorTokens.core.blue.primary};
          color: ${colorTokens.core.gray[100]};
        `
      : css`
          background-color: ${colorTokens.core.gray[100]};
          border: 1px solid ${colorTokens.core.blue.primary};
        `}
  ${fontFamilyStyles}
`;

export const AlertHeader = styled.header<AlertHeaderProps>`
  color: ${({ variant }) => variant === "filled" ? colorTokens.core.gray[100] : colorTokens.core.blue.primary};
  font-size: ${spacingTokens.fontSizes.medium};
  font-weight: bold;
  margin-bottom: ${spacingTokens.spacing.small};
`;

export const AlertBody = styled.main`
  font-size: ${spacingTokens.fontSizes.small};
`;
