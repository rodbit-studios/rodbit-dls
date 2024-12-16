import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { colorTokens, spacingTokens } from "@styles/theme/tokens";
import { disabledStyles, fontFamilyStyles } from "@styles/mixins";
import { AlertProps } from "./Alert";

export type AlertStyles = FlattenSimpleInterpolation;

export const StyledAlert = styled.div<AlertProps>`
  background-color: ${colorTokens.blue.muted};
  border-radius: ${spacingTokens.borderRadius.medium};
  font-size: ${spacingTokens.fontSizes.small};
  padding: ${spacingTokens.spacing.medium};
  margin-bottom: ${spacingTokens.spacing.medium};

  &:disabled {
    ${disabledStyles}
  }

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
          border: 1px solid ${colorTokens.blue.primary};
        `}
  ${fontFamilyStyles}
`;


export const AlertHeader = styled.header<AlertProps>`
  display: flex;
  color: ${colorTokens.black};
  font-size: ${spacingTokens.fontSizes.medium};
  font-weight: bold;
  margin-bottom: ${spacingTokens.spacing.small};
`;

export const AlertIcon = styled.div`
  margin-right: ${spacingTokens.spacing.small};
`;

export const AlertBody = styled.main`
  font-size: ${spacingTokens.fontSizes.small};
  margin-left: ${spacingTokens.spacing.large};
`;
