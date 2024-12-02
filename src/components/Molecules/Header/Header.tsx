import React from "react";
import { StyledHeader, StyledHeaderLogo, StyledHeaderBody } from "./Header.styles";
import Button from "../../Atoms/Button/Button";

interface HeaderProps {
  imgSource?: string
  imgWidth?: string
  imgHeight?: string
}

const Toggle: React.FC<HeaderProps> = ({
  imgSource,
  imgWidth,
  imgHeight

}) => {
  return (
    <StyledHeader>
      <StyledHeaderLogo imgSource={imgSource} imgWidth={imgWidth} imgHeight={imgHeight} />
      <StyledHeaderBody>
        <Button variant="text">Home</Button>
        <Button variant="text">About</Button>
        <Button variant="text">Contact</Button>
      </StyledHeaderBody>
    </StyledHeader>
  );
};

export default Toggle;
