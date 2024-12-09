import styled from 'styled-components';
import { colorTokens, spacingTokens } from '../../../styles/theme/tokens';
import { fontFamilyStyles, inputBaseStyles } from '../../../styles/mixins';

export const TextareaWrapper = styled.div<{ $fullWidth?: boolean }>`
  width: ${props => props.$fullWidth ? '100%' : 'auto'};
`;

export const StyledTextareaLabel = styled.label`
  display: block;
  margin-bottom: ${spacingTokens.spacing.small};
  font-size: ${spacingTokens.fontSizes.medium};
  ${fontFamilyStyles}
`;

export const TextareaContainer = styled.div<{
  $error?: boolean,
  $disabled?: boolean,
}>`
  position: relative;
  display: flex;
  align-items: center;
  ${inputBaseStyles}

  border: 1px solid ${props =>
    props.$error
      ? colorTokens.core.red.primary
      : props.$disabled
        ? colorTokens.core.gray[300]
        : colorTokens.core.blue.primary
  };

  border-radius: ${spacingTokens.borderRadius.medium};
`;

export const StyledTextarea = styled.textarea<{
  $startAdornment?: boolean,
  $endAdornment?: boolean
}>`
  width: 100%;
  min-height: 100px;
  resize: vertical;
  border: none;
  outline: none;
  background: transparent;
  font-size: ${spacingTokens.fontSizes.medium};
  padding: ${spacingTokens.spacing.small};

  ${props => props.$startAdornment && 'padding-left: 40px;'}
  ${props => props.$endAdornment && 'padding-right: 40px;'}
`;

export const HelperText = styled.p<{ $error?: boolean }>`
  margin-top: ${spacingTokens.spacing.small};
  font-size: ${spacingTokens.fontSizes.small};
  color: ${props =>
    props.$error
      ? colorTokens.core.red.primary
      : colorTokens.core.gray[400]
  };
  ${fontFamilyStyles}
`;

export const AdornmentContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  
  &.start-adornment {
    left: 10px;
  }

  &.end-adornment {
    right: 10px;
  }
`;
