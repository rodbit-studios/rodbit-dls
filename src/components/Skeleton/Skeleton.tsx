import React from 'react';
import { StyledSkeleton } from './Skeleton.styles';

export interface SkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
}

const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'rectangular',
  width = '100%',
  height = '20px',
  animation = 'wave',
  ...props
}) => {
  return (
    <StyledSkeleton
      variant={variant}
      width={width}
      height={height}
      animation={animation}
      {...props}
    />
  );
};

export default Skeleton;
