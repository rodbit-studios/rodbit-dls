import styled, { FlattenSimpleInterpolation } from "styled-components";
import { colorTokens } from "../../../styles/theme/tokens";
import { semanticTokens } from "../../../styles/theme/semantic";


export type SelectStyles = FlattenSimpleInterpolation;

export const StyledSelect = styled.select`
  background-color: ${semanticTokens.background.contrast};
  border: 1px solid ${colorTokens.core.gray[500]};
  border-radius: ${colorTokens.borderRadius.small};
  font-size: ${colorTokens.fontSizes.medium};
  padding: ${colorTokens.spacing.small};
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
  font-size: ${colorTokens.fontSizes.medium};
  font-weight: 600;
  margin-bottom: ${colorTokens.spacing.small};
`;;
