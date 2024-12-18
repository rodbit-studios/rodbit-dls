import styled from 'styled-components';
import { colorTokens, spacingTokens } from '@styles/theme/tokens';
import { fontFamilyStyles, inputBaseStyles } from '@styles/mixins';

export const TextareaWrapper = styled.div<{ $fullWidth?: boolean }>`
  width: ${props => props.$fullWidth ? '100%' : 'auto'};
`;

export const StyledTextareaLabel = styled.label`
  display: block;
  margin-bottom: ${spacingTokens.spacing.sm};
  font-size: ${spacingTokens.fontSizes.md};
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
      ? colorTokens.error.main
      : props.$disabled
        ? colorTokens.neutral.gray
        : colorTokens.primary.blue.main
  };

  border-radius: ${spacingTokens.borderRadius.md};
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
  font-size: ${spacingTokens.fontSizes.md};
  padding: ${spacingTokens.spacing.sm};

  ${props => props.$startAdornment && 'padding-left: 40px;'}
  ${props => props.$endAdornment && 'padding-right: 40px;'}
`;

export const HelperText = styled.p<{ $error?: boolean }>`
  margin-top: ${spacingTokens.spacing.sm};
  font-size: ${spacingTokens.fontSizes.sm};
  color: ${props =>
    props.$error
      ? colorTokens.error.main
      : colorTokens.neutral.gray
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
