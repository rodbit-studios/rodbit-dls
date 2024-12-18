import React from "react";
import { StyledAlert, AlertHeader, AlertBody, AlertIcon } from "./Alert.styles";

export interface AlertProps {
  title?: string;
  body?: string;
  icon?: React.ReactNode;
  variant?: "info" | "warning" | "sucess" | "error";
}

const Alert: React.FC<AlertProps> = ({
  title,
  body,
  icon,
  variant,
}) => {
  return (
    <StyledAlert variant={variant}>
      <AlertHeader variant={variant}>
        <AlertIcon>{icon}</AlertIcon>
        {title}
      </AlertHeader>
      <AlertBody>
        {body}
      </AlertBody>
    </StyledAlert>
  );
};

export default Alert;
