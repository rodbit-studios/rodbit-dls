import styled from "styled-components";
import { colorTokens, spacingTokens } from "@styles/theme/tokens";
import { fontFamilyStyles } from "@styles/mixins";

interface TabProps {
  active?: boolean;
  disabled?: boolean;
}

export const TabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${colorTokens.gray.primary};
`;

export const TabButton = styled.button<TabProps>`
  padding: ${spacingTokens.spacing.small} ${spacingTokens.spacing.medium};
  border: none;
  background-color: transparent;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  
  color: ${props => props.active
    ? colorTokens.blue.primary
    : props.disabled
      ? colorTokens.gray.primary
      : colorTokens.gray.secondary};
  
  border-bottom: 2px solid ${props => props.active
    ? colorTokens.blue.primary
    : 'transparent'};
  
  &:hover:not(:disabled) {
    color: ${colorTokens.blue.secondary};
    border-bottom: 2px solid ${colorTokens.blue.secondary};
  }
`;

export const TabContent = styled.div`
  padding: ${spacingTokens.spacing.medium};
  ${fontFamilyStyles}
`;
