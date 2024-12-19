import styled, { css } from "styled-components";
import { colorTokens, spacingTokens } from "@styles/theme/tokens";
import { fontFamilyStyles } from "@styles/mixins";
import { AlertProps } from "./Alert";

export const StyledAlert = styled.div<AlertProps>`
  background-color: ${colorTokens.primary.blue.main};
  border-radius: ${spacingTokens.borderRadius.md};
  font-size: ${spacingTokens.fontSizes.sm};
  margin-bottom: ${spacingTokens.spacing.md};
  padding: ${spacingTokens.spacing.md};

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
          background-color: ${colorTokens.success.light};
        `
          : variant === "error"
            ? css`
          background-color: ${colorTokens.error.main};
          color: ${colorTokens.neutral.white};
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
  ${({ variant }) =>
    variant === "info" || variant === "error"
      ? css`
          color: ${colorTokens.neutral.white};
        `
      : css`
          background-color: transparent;
        `}
  ${fontFamilyStyles}

`;

export const AlertIcon = styled.div`
  margin-right: ${spacingTokens.spacing.sm};
`;

export const AlertBody = styled.main`
  font-size: ${spacingTokens.fontSizes.sm};
  margin-left: ${spacingTokens.spacing.lg};
`;
