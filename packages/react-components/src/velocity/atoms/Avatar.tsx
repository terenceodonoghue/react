/** @jsxImportSource @emotion/react */
import type { CSSObject } from '@emotion/react';
import type { FunctionComponent, ImgHTMLAttributes } from 'react';

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
  variant?: 'rounded' | 'squared';
}

const Avatar: FunctionComponent<AvatarProps> = ({
  alt,
  size = 128,
  variant = 'rounded',
  ...props
}) => {
  const css: Record<string, CSSObject> = {
    rounded: {
      borderRadius: '50%',
    },
    squared: {
      borderRadius: 6,
    },
  };

  return (
    <img
      alt={alt}
      css={[
        css[variant],
        {
          height: size,
          width: size,
        },
      ]}
      {...props}
    />
  );
};

export default Avatar;
