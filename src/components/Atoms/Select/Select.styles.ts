import styled, { FlattenSimpleInterpolation } from "styled-components";
import { colorTokens, spacingTokens } from "../../../styles/theme/tokens";
import { semanticTokens } from "../../../styles/theme/semantic";


export type SelectStyles = FlattenSimpleInterpolation;

export const StyledSelect = styled.select`
  border: 1px solid ${colorTokens.core.blue.primary};
  border-radius: ${spacingTokens.borderRadius.medium};
  font-size: ${spacingTokens.fontSizes.medium};
  padding: ${spacingTokens.spacing.small};
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${semanticTokens.button.primary.background};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const SelectOption = styled.option`
  background-color: ${semanticTokens.background.contrast};
  color: ${semanticTokens.text.primary};
`;

export const SelectLabel = styled.label`
  display: block;
  font-size: ${spacingTokens.fontSizes.medium};
  font-weight: 600;
  margin-bottom: ${spacingTokens.spacing.small};
`;;
