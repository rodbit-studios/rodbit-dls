import styled, { FlattenSimpleInterpolation } from "styled-components";
import { colorTokens, spacingTokens } from "../../../styles/theme/tokens";
import { semanticTokens } from "../../../styles/theme/semantic";
import { fontFamilyStyles, hoverStyles, inputBaseStyles } from "../../../styles/mixins";


export type SelectStyles = FlattenSimpleInterpolation;

export const StyledSelect = styled.select`
  border: 1px solid ${colorTokens.core.blue.primary};
  border-radius: ${spacingTokens.borderRadius.medium};
  font-size: ${spacingTokens.fontSizes.medium};
  padding: ${spacingTokens.spacing.small};
  cursor: pointer;
`;

export const SelectOption = styled.option`
  background-color: ${semanticTokens.background.contrast};
  color: ${semanticTokens.text.primary};
`;

export const SelectLabel = styled.label`
  display: block;
  font-size: ${spacingTokens.fontSizes.medium};
  margin-bottom: ${spacingTokens.spacing.small};
  ${fontFamilyStyles}
`;
