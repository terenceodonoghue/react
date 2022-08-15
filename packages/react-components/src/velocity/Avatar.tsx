/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from '@emotion/react';
import { FunctionComponent, ImgHTMLAttributes } from 'react';

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
  variant?: 'rounded' | 'square';
}

const Avatar: FunctionComponent<AvatarProps> = ({
  alt,
  size,
  variant = 'rounded',
  ...props
}) => {
  const css: Record<string, Interpolation<Theme>> = {
    rounded: {
      borderRadius: '50%',
    },
    square: {
      borderRadius: 6,
    },
  };

  return (
    <img
      css={{
        ...css[variant],
        height: size,
        width: size,
      }}
      alt={alt}
      {...props}
    />
  );
};

export default Avatar;
