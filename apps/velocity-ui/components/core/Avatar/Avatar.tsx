import React, { FunctionComponent, ImgHTMLAttributes } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  size?: number;
  variant?: 'rounded' | 'square';
}

const Avatar: FunctionComponent<AvatarProps> = ({
  alt,
  size,
  variant = 'rounded',
  ...props
}) => (
  <img
    alt={alt}
    css={{
      borderRadius: variant === 'rounded' ? '50%' : 6,
      height: size,
      width: size,
    }}
    data-testid="avatar"
    {...props}
  />
);

export default Avatar;
