/** @jsxImportSource @emotion/react */
import { CSSObject, useTheme } from '@emotion/react';
import { rem } from 'polished';
import { CSSProperties, ComponentPropsWithoutRef, ElementType } from 'react';

import mq, { MediaQuery } from '../utils/mq.js';

export type TextProps<T extends ElementType> = {
  align?: MediaQuery<CSSProperties['textAlign']>;
  as?: T;
  truncate?: boolean;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p1' | 'p2' | 'p3' | 'c1' | 'c2';
} & ComponentPropsWithoutRef<T>;

const Text = <T extends ElementType = 'span'>({
  align,
  as,
  truncate,
  variant = 'p1',
  ...props
}: TextProps<T>) => {
  const { color, font } = useTheme();

  const Component = as || 'span';

  const variants: Record<typeof variant, CSSObject> = {
    h1: {
      color: color.neutral[900],
      fontSize: rem(48),
      fontStyle: 'normal',
      fontWeight: font.weight.light,
      lineHeight: rem(57),
      letterSpacing: -0.6,
    },
    h2: {
      color: color.neutral[900],
      fontSize: rem(34),
      fontStyle: 'normal',
      fontWeight: font.weight.light,
      lineHeight: rem(32),
    },
    h3: {
      color: color.neutral[900],
      fontSize: rem(28),
      fontStyle: 'normal',
      fontWeight: font.weight.light,
      lineHeight: rem(32),
    },
    h4: {
      color: color.neutral[900],
      fontSize: rem(15),
      fontStyle: 'normal',
      fontWeight: font.weight.medium,
      lineHeight: rem(22),
    },
    p1: {
      color: color.neutral[900],
      fontSize: rem(15),
      fontWeight: font.weight.regular,
      lineHeight: rem(22),
    },
    p2: {
      color: color.neutral[600],
      fontSize: rem(15),
      fontWeight: font.weight.regular,
      lineHeight: rem(22),
    },
    p3: {
      color: color.neutral[500],
      fontSize: rem(15),
      fontWeight: font.weight.regular,
      lineHeight: rem(22),
    },
    c1: {
      color: color.neutral[500],
      fontSize: rem(12),
      fontWeight: 500,
      letterSpacing: 1.125,
      lineHeight: rem(14),
      textTransform: 'uppercase',
    },
    c2: {
      color: color.neutral[600],
      fontSize: rem(13),
      fontWeight: font.weight.regular,
      letterSpacing: 1.2,
      lineHeight: rem(15),
      textTransform: 'uppercase',
    },
  };

  return (
    <Component
      css={[
        variants[variant],
        mq({ fontFamily: font.family, textAlign: align }),
        truncate
          ? {
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }
          : undefined,
      ]}
      {...props}
    />
  );
};

export default Text;
