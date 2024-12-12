import styled, { FlattenSimpleInterpolation } from "styled-components";
import { spacingTokens } from "@styles/theme/tokens";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSource?: string
  imgWidth?: string
  imgHeight?: string
}

export type HeaderStyles = FlattenSimpleInterpolation;

export const StyledHeader = styled.header<HeaderProps>`
  widht: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacingTokens.spacing.small};
  cursor: pointer;
`;

export const StyledHeaderLogo = styled.img<HeaderProps>`
  width: ${(props) => props.imgWidth};
  height: ${(props) => props.imgHeight};
  content: url(${(props) => props.imgSource});
`;

export const StyledHeaderBody = styled.div<HeaderProps>`
  display: flex;
  gap: ${spacingTokens.spacing.medium};
`;

