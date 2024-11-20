import React from "react";
import { StyledButton } from "./Button.styles";

interface ButtonProps {
  variant?: "primary" | "secondary" | "text";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  children,
  onClick,
}) => {
  return (
    <StyledButton variant={variant} size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
