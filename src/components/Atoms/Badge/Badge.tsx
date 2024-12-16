import React from "react";
import { StyledBadge } from "./Badge.styles";

export interface BadgeProps {
  label?: string;
  disabled?: boolean;
  variant?: "info" | "warning" | "sucess" | "error";
}

const Badge: React.FC<BadgeProps> = ({
  label,
  disabled,
  variant,
}) => {
  return (
    <StyledBadge disabled={disabled} variant={variant}>
      {label}
    </StyledBadge>
  );
};

export default Badge;
