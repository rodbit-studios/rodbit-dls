import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { colorTokens, spacingTokens } from "@styles/theme/tokens.ts";
import { fontFamilyStyles, inputBaseStyles } from "@styles/mixins";

interface InputProps {
  variant?: "default" | "filled";
}

export type InputStyles = FlattenSimpleInterpolation;

export const StyledInput = styled.input<InputProps>`
  ${inputBaseStyles}
  padding: ${spacingTokens.spacing.sm};
  font-size: ${spacingTokens.spacing.md};

  ${({ variant }) =>
    variant === "default"
      ? css`
          border: 1px solid ${colorTokens.primary.blue.main};
          border-radius: ${spacingTokens.borderRadius.md};
          margin-top: ${spacingTokens.spacing.sm};

          &:hover {
            border: 1px solid ${colorTokens.primary.blue.dark};
          }
        `
      : css`
          background-color: ${colorTokens.primary.blue.light};
          border-radius: ${spacingTokens.borderRadius.md};
          border: 1px solid ${colorTokens.primary.blue.main};
          &:hover {
            border: 1px solid ${colorTokens.primary.blue.dark};
          }
          margin-top: ${spacingTokens.spacing.sm};
        `}
  ${fontFamilyStyles}
`;

export const InputLabel = styled.label<InputProps>`
  display: flex;
  flex-direction: column;
  color: ${colorTokens.neutral.black};
  font-size: ${spacingTokens.spacing.md};
  ${fontFamilyStyles}
`;
