import React from "react";
import { AlertBody, AlertHeader, StyledAlert } from "./Alert.styles";

interface AlertProps {
  title?: string;
  body?: string;
  variant?: "filled" | "outline";
}

const Alert: React.FC<AlertProps> = ({
  title,
  body,
  variant = "filled",
}) => {
  return (
    <StyledAlert variant={variant}>
      <AlertHeader variant={variant}>
        {title}
      </AlertHeader>
      <AlertBody>
        {body}
      </AlertBody>
    </StyledAlert>
  );
};

export default Alert;
