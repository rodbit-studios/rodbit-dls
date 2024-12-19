import styled from "styled-components";
import { colorTokens, spacingTokens } from "@styles/theme/tokens";
import { fontFamilyStyles } from "@styles/mixins";
import { Tab } from "./Tabs";

export const TabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${colorTokens.neutral.gray};
`;

export const TabButton = styled.button<Tab>`
  padding: ${spacingTokens.spacing.sm} ${spacingTokens.spacing.md};
  border: none;
  background-color: transparent;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  
  color: ${props => props.active
    ? colorTokens.primary.blue.main
    : props.disabled
      ? colorTokens.neutral.gray
      : colorTokens.neutral.black};
  
  border-bottom: 2px solid ${props => props.active
    ? colorTokens.primary.blue.main
    : 'transparent'};
  
  &:hover:not(:disabled) {
    color: ${colorTokens.primary.blue.dark};
    border-bottom: 2px solid ${colorTokens.primary.blue.dark};
  }
`;

export const TabContent = styled.div`
  padding: ${spacingTokens.spacing.md};
  ${fontFamilyStyles}
`;
