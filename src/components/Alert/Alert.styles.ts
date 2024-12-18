import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { colorTokens, spacingTokens } from "@styles/theme/tokens";
import { disabledStyles, fontFamilyStyles } from "@styles/mixins";
import { AlertProps } from "./Alert";

export type AlertStyles = FlattenSimpleInterpolation;

export const StyledAlert = styled.div<AlertProps>`
  background-color: ${colorTokens.primary.blue.main};
  border-radius: ${spacingTokens.borderRadius.md};
  font-size: ${spacingTokens.fontSizes.sm};
  padding: ${spacingTokens.spacing.md};
  margin-bottom: ${spacingTokens.spacing.md};

  &:disabled {
    ${disabledStyles}
  }

  ${({ variant }) =>
    variant === "info"
      ? css`
          background-color: ${colorTokens.primary.blue.main};
        `
      : variant === "warning"
        ? css`
          background-color: ${colorTokens.warning.main};
        `
        : variant === "sucess"
          ? css`
          background-color: ${colorTokens.success.light};
        `
          : variant === "error"
            ? css`
          background-color: ${colorTokens.error.main};
        `
            : css`
          background-color: transparent;
          border: 1px solid ${colorTokens.primary.blue.main};
        `}
  ${fontFamilyStyles}
`;


export const AlertHeader = styled.header<AlertProps>`
  display: flex;
  color: ${colorTokens.neutral.black};
  font-size: ${spacingTokens.fontSizes.md};
  font-weight: bold;
  margin-bottom: ${spacingTokens.spacing.sm};
`;

export const AlertIcon = styled.div`
  margin-right: ${spacingTokens.spacing.sm};
`;

export const AlertBody = styled.main`
  font-size: ${spacingTokens.fontSizes.sm};
  margin-left: ${spacingTokens.spacing.lg};
`;
