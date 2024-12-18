import React from "react";
import { StyledButton } from "./Button.styles";
import { ColorVariant } from "@styles/theme/tokens";

export interface ButtonProps {
  variant?: "filled" | "outline" | "text";
  color?: ColorVariant;
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "filled",
  color = "primary",
  size = "medium",
  disabled,
  children,
  onClick,
  leftIcon,
  rightIcon
}) => {
  return (
    <StyledButton variant={variant} color={color} size={size} disabled={disabled} onClick={onClick} >
      {leftIcon}
      {children}
      {rightIcon}
    </StyledButton>
  );
};

export default Button;
