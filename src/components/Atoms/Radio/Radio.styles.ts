import styled, { FlattenSimpleInterpolation } from "styled-components";
import { colorTokens, fontFamilyTokens, spacingTokens } from "../../../styles/theme/tokens";
import { semanticTokens } from "../../../styles/theme/semantic";
import { disabledStyles } from "../../../styles/mixins";

interface RadioProps {
  checked?: boolean;
  disabled?: boolean
}

export type RadioStyles = FlattenSimpleInterpolation;

export const StyledRadio = styled.input.attrs({ type: "radio" }) <RadioProps>`
  width: ${spacingTokens.spacing.medium};
  height: ${spacingTokens.spacing.medium};
  border-radius: ${spacingTokens.borderRadius.medium};
  border: 1px solid ${colorTokens.core.gray[500]};
  cursor: pointer;

  &:checked {
    appearance: none;
    background-color: ${colorTokens.core.blue.primary};
    border-color: ${colorTokens.core.blue.primary};
    background-image: url("data:image/svg+xml,%3csvg  viewBox='0 0 16 16' width='16' height='16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: center center;
  }

  &:disabled {
    ${disabledStyles}
  }
`;

export const RadioLabel = styled.label<RadioProps>`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  gap: ${spacingTokens.spacing.small};
  font-size: ${spacingTokens.fontSizes.medium};
  font-family: ${fontFamilyTokens.fontFamilies.body};
  color: ${props => props.disabled
    ? colorTokens.core.gray[300]
    : colorTokens.core.gray[900]};
`;
