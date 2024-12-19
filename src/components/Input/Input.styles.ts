import styled, { css } from "styled-components";
import { colorTokens, spacingTokens } from "@styles/theme/tokens.ts";
import { fontFamilyStyles } from "@styles/mixins";
import { InputProps } from "./Input";

export const StyledInput = styled.input<InputProps>`
  padding: ${spacingTokens.spacing.sm};
  font-size: ${spacingTokens.spacing.md};

  ${({ variant }) =>
    variant === "default"
      ? css`
          border: 1px solid ${colorTokens.primary.blue.main};
          border-radius: ${spacingTokens.borderRadius.sm};
          margin-top: ${spacingTokens.spacing.sm};

          &:hover {
            border: 1px solid ${colorTokens.primary.blue.dark};
          }
        `
      : css`
          background-color: ${colorTokens.neutral.lightgray};
          border-radius: ${spacingTokens.borderRadius.sm};
          border: 1px solid ${colorTokens.neutral.gray};
          &:hover {
            border: 1px solid ${colorTokens.primary.blue.dark};
          }
          margin-top: ${spacingTokens.spacing.sm};
        `}
  ${fontFamilyStyles}
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: ${colorTokens.neutral.black};
  font-size: ${spacingTokens.spacing.md};
  ${fontFamilyStyles}
`;
