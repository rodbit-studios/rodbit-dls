import styled from "styled-components";
import { colorTokens, fontFamilyTokens, spacingTokens } from "@styles/theme/tokens";
import { disabledStyles } from "@styles/mixins";
import { RadioProps } from "./Radio";

export const StyledRadio = styled.input.attrs({ type: "radio" }) <RadioProps>`
  width: ${spacingTokens.spacing.md};
  height: ${spacingTokens.spacing.md};
  border-radius: ${spacingTokens.borderRadius.md};
  border: 1px solid ${colorTokens.primary.blue.main};
  cursor: pointer;

  &:checked {
    appearance: none;
    background-color: ${colorTokens.primary.blue.main};
    background-image: url("data:image/svg+xml,%3csvg  viewBox='0 0 16 16' width='16' height='16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
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
  gap: ${spacingTokens.spacing.sm};
  font-size: ${spacingTokens.fontSizes.md};
  font-family: ${fontFamilyTokens.body};
  color: ${props => props.disabled
    ? colorTokens.neutral.gray
    : colorTokens.neutral.black};
`;
