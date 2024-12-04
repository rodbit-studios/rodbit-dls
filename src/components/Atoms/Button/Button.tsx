import React from "react";
import { StyledButton } from "./Button.styles";

interface ButtonProps {
  variant?: "filled" | "outline" | "text";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  onClick?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "filled",
  size = "medium",
  children,
  onClick,
  leftIcon,
  rightIcon
}) => {
  return (
    <StyledButton variant={variant} size={size} onClick={onClick} >
      {leftIcon}
      {children}
      {rightIcon}
    </StyledButton>
  );
};

export default Button;
