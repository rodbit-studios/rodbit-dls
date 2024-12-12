import styled, { FlattenSimpleInterpolation } from "styled-components";
import { colorTokens, spacingTokens } from "@styles/theme/tokens";
import { fontFamilyStyles } from "@styles/mixins";

export type SelectStyles = FlattenSimpleInterpolation;

export const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyledSelect = styled.select`
  appearance: none;
  cursor: pointer;
  border: 1px solid ${colorTokens.blue.primary};
  border-radius: ${spacingTokens.borderRadius.medium};
  font-size: ${spacingTokens.fontSizes.medium};
  padding: ${spacingTokens.spacing.small};

  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 8px center;
  padding-right: 30px; // Make room for the arrow

  ${fontFamilyStyles}

  &:disabled {
    color: ${colorTokens.gray.primary};
    border: 1px solid ${colorTokens.gray.primary};
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 512 512' fill='${encodeURIComponent(colorTokens.gray.primary)}'%3e%3cpath d='M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z'/%3e%3c/svg%3e");
    cursor: not-allowed;
  }
`;

export const SelectLabel = styled.label`
  display: block;
  font-size: ${spacingTokens.fontSizes.medium};
  margin-bottom: ${spacingTokens.spacing.small};
  ${fontFamilyStyles}
`;

export const SelectOption = styled.option`
  padding: ${spacingTokens.spacing.small};
  font-size: ${spacingTokens.fontSizes.medium};
`;

