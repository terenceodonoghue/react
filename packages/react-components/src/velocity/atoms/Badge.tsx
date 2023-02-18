/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rem, rgba } from 'polished';
import type { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  label?: string | number;
}

const Badge: FunctionComponent<BadgeProps> = ({
  children,
  label,
  ...props
}) => {
  const { color, font } = useTheme();

  return (
    <div
      css={{
        position: 'relative',
      }}
      {...props}
    >
      {label ? (
        <div
          css={{
            position: 'absolute',
            top: 0,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            minHeight: 16,
            minWidth: 16,
            boxShadow: `0 3px 10px ${rgba(color.primary, 0.3)}`,
            backgroundColor: color.neutral[50],
            color: color.neutral[700],
            fontFamily: font.family,
            fontSize: rem(10),
            fontWeight: font.weight.medium,
            lineHeight: rem(12),
          }}
        >
          {label}
        </div>
      ) : undefined}
      {children}
    </div>
  );
};

export default Badge;
