import React from "react";
import { StyledBadge } from "./Badge.styles";

interface BadgeProps {
  label?: string;
  disabled?: boolean;
  variant?: "filled" | "outline";
}

const Badge: React.FC<BadgeProps> = ({
  label,
  disabled,
  variant = "filled",
}) => {
  return (
    <StyledBadge disabled={disabled} variant={variant}>
      {label}
    </StyledBadge>
  );
};

export default Badge;
