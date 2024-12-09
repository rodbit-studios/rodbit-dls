import { forwardRef, ReactNode } from 'react';
import {
  TextareaWrapper,
  StyledTextareaLabel,
  TextareaContainer,
  StyledTextarea,
  HelperText,
  AdornmentContainer
} from './Textarea.styles';

export interface TextareaProps {
  label?: string;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  required?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  label,
  error,
  helperText,
  disabled = false,
  fullWidth = false,
  required = false,
  startAdornment,
  endAdornment,
  ...props
}, ref) => {
  return (
    <TextareaWrapper $fullWidth={fullWidth}>
      {label && (
        <StyledTextareaLabel>
          {label}
          {required && <span aria-hidden="true"> *</span>}
        </StyledTextareaLabel>
      )}
      <TextareaContainer
        $error={!!error}
        $disabled={disabled}
      >
        {startAdornment && (
          <AdornmentContainer className="start-adornment">
            {startAdornment}
          </AdornmentContainer>
        )}
        <StyledTextarea
          ref={ref}
          $startAdornment={!!startAdornment}
          $endAdornment={!!endAdornment}
          disabled={disabled}
          aria-invalid={!!error}
          aria-required={required}
          {...props}
        />
        {endAdornment && (
          <AdornmentContainer className="end-adornment">
            {endAdornment}
          </AdornmentContainer>
        )}
      </TextareaContainer>
      {helperText && (
        <HelperText $error={!!error}>
          {error || helperText}
        </HelperText>
      )}
    </TextareaWrapper>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
