import styled, { keyframes, css } from 'styled-components';
import { colorTokens, spacingTokens } from '@styles/theme/tokens';
import { SkeletonProps } from './Skeleton';

const pulseAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const waveAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const StyledSkeleton = styled.div<SkeletonProps>`
  background-color: ${colorTokens.neutral.gray};
  border-radius: ${({ variant }) =>
    variant === 'circular' ? '50%' :
      variant === 'rectangular' ? spacingTokens.borderRadius.md :
        'none'
  };
  
  width: ${({ width }) =>
    typeof width === 'number' ? `${width}px` :
      width || '100%'
  };
  
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` :
      height || '20px'
  };

  position: relative;
  overflow: hidden;

  ${({ animation }) =>
    animation === 'pulse' && css`
      animation: ${pulseAnimation} 1.5s ease-in-out infinite;
    `}

  ${({ animation }) =>
    animation === 'wave' && css`
      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateX(-100%);
        background-image: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0) 0,
          rgba(255, 255, 255, 0.2) 20%,
          rgba(255, 255, 255, 0.5) 60%,
          rgba(255, 255, 255, 0)
        );
        animation: ${waveAnimation} 1.5s infinite;
      }
    `}
`;
