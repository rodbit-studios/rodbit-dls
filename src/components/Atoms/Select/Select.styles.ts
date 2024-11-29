import styled, { FlattenSimpleInterpolation } from "styled-components";
import { colorTokens, spacingTokens } from "../../../styles/theme/tokens";
import { fontFamilyStyles, inputBaseStyles } from "../../../styles/mixins";

export type SelectStyles = FlattenSimpleInterpolation;

export const StyledSelect = styled.select`
  border: 1px solid ${colorTokens.core.blue.primary};
  border-radius: ${spacingTokens.borderRadius.medium};
  font-size: ${spacingTokens.fontSizes.medium};
  padding: ${spacingTokens.spacing.small};
  cursor: pointer;
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
