import styled from "styled-components";
import { colorTokens, spacingTokens } from "../../../styles/theme/tokens";

interface TabProps {
  active?: boolean;
  disabled?: boolean;
}

export const TabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${colorTokens.core.gray[300]};
`;

export const TabButton = styled.button<TabProps>`
  padding: ${spacingTokens.spacing.small} ${spacingTokens.spacing.medium};
  border: none;
  background-color: transparent;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  
  color: ${props => props.active
    ? colorTokens.core.blue.primary
    : props.disabled
      ? colorTokens.core.gray[300]
      : colorTokens.core.gray[900]};
  
  border-bottom: 2px solid ${props => props.active
    ? colorTokens.core.blue.primary
    : 'transparent'};
  
  &:hover:not(:disabled) {
    background-color: ${colorTokens.core.gray[100]};
  }
`;

export const TabContent = styled.div`
  padding: ${spacingTokens.spacing.medium};
`;
