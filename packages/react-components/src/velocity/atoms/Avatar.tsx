/** @jsxImportSource @emotion/react */
import { CSSObject } from '@emotion/react';
import { ComponentPropsWithoutRef } from 'react';

export interface AvatarProps extends ComponentPropsWithoutRef<'img'> {
  size?: number;
  variant?: 'rounded' | 'squared';
}

const Avatar = ({
  alt,
  size = 128,
  variant = 'rounded',
  ...props
}: AvatarProps) => {
  const variants: Record<typeof variant, CSSObject> = {
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
        variants[variant],
        {
          width: size,
          height: size,
        },
      ]}
      {...props}
    />
  );
};

export default Avatar;
