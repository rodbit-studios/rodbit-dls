import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { colorTokens, spacingTokens } from "@styles/theme/tokens.ts";
import { focusStyles, fontFamilyStyles, inputBaseStyles } from "@styles/mixins";

interface InputProps {
  variant?: "default" | "filled";
}

export type InputStyles = FlattenSimpleInterpolation;

export const StyledInput = styled.input<InputProps>`
  ${inputBaseStyles}
  padding: ${spacingTokens.spacing.small};
  font-size: ${spacingTokens.spacing.medium};

  ${({ variant }) =>
    variant === "default"
      ? css`
          border: 1px solid ${colorTokens.blue.primary};
          border-radius: ${spacingTokens.borderRadius.medium};
          margin-top: ${spacingTokens.spacing.small};

          &:hover {
            border: 1px solid ${colorTokens.blue.secondary};
          }
        `
      : css`
          background-color: ${colorTokens.blue.muted};
          border-radius: ${spacingTokens.borderRadius.medium};
          border: 1px solid ${colorTokens.blue.primary};
          &:hover {
            border: 1px solid ${colorTokens.blue.secondary};
          }
          margin-top: ${spacingTokens.spacing.small};
        `}
  ${focusStyles}
  ${fontFamilyStyles}
`;

export const InputLabel = styled.label<InputProps>`
  display: flex;
  flex-direction: column;
  color: ${colorTokens.black};
  font-size: ${spacingTokens.spacing.medium};
  ${fontFamilyStyles}
`;
