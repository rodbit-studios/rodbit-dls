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
  background-color: ${colorTokens.neutral.white};
  border-radius: ${spacingTokens.borderRadius.lg};
  width: 50%;
  max-width: 90%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacingTokens.spacing.md};
  border-bottom: 1px solid ${colorTokens.neutral.gray};
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
  color: ${colorTokens.neutral.gray};
  
  &:hover {
    color: ${colorTokens.neutral.black};
  }
`;

export const ModalContent = styled.div`
  padding: ${spacingTokens.spacing.md};
  ${fontFamilyStyles}
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: ${spacingTokens.spacing.md};
  border-top: 1px solid ${colorTokens.neutral.black};
  ${fontFamilyStyles}
`;

