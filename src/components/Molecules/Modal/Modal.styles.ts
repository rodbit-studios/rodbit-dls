import styled from "styled-components";
import { colorTokens, spacingTokens } from "@styles/theme/tokens";
import { fontFamilyStyles } from "@styles/mixins";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: ${colorTokens.white};
  border-radius: ${spacingTokens.borderRadius.large};
  width: 50%;
  max-width: 90%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacingTokens.spacing.medium};
  border-bottom: 1px solid ${colorTokens.gray.primary};
  ${fontFamilyStyles}
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
`;

export const ModalCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${colorTokens.gray.primary};
  
  &:hover {
    color: ${colorTokens.gray.secondary};
  }
`;

export const ModalContent = styled.div`
  padding: ${spacingTokens.spacing.medium};
  ${fontFamilyStyles}
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: ${spacingTokens.spacing.medium};
  border-top: 1px solid ${colorTokens.gray.primary};
  ${fontFamilyStyles}
`;

