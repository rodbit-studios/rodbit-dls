import styled from "styled-components";
import { colorTokens, spacingTokens } from "@styles/theme/tokens";
import { fontFamilyStyles } from "@styles/mixins";

export const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyledSelect = styled.select`
  appearance: none;
  cursor: pointer;
  border: 1px solid ${colorTokens.primary.blue.main};
  border-radius: ${spacingTokens.borderRadius.sm};
  font-size: ${spacingTokens.fontSizes.md};
  padding: ${spacingTokens.spacing.sm};

  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 8px center;
  padding-right: 30px; // Make room for the arrow

  &:disabled {
    color: ${colorTokens.neutral.gray};
    border: 1px solid ${colorTokens.neutral.black};
    cursor: not-allowed;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 512 512' fill='${encodeURIComponent(colorTokens.neutral.gray)}'%3e%3cpath d='M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z'/%3e%3c/svg%3e");
  }
  ${fontFamilyStyles}
`;

export const SelectLabel = styled.label`
  display: block;
  font-size: ${spacingTokens.fontSizes.md};
  margin-bottom: ${spacingTokens.spacing.sm};
  ${fontFamilyStyles}
`;

export const SelectOption = styled.option`
  padding: ${spacingTokens.spacing.sm};
  font-size: ${spacingTokens.fontSizes.md};
`;

