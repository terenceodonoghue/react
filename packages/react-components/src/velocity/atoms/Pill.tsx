/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rem, rgba } from 'polished';
import { ComponentPropsWithoutRef } from 'react';

export interface PillProps extends ComponentPropsWithoutRef<'div'> {
  color?: string;
  label: number;
}

const Pill = ({ color: pillColor, label, ...props }: PillProps) => {
  const { color, font } = useTheme();

  return (
    <div
      css={{
        display: 'inline-block',
        minWidth: 32,
        padding: '3px 5px',
        color: pillColor || color.primary,
        backgroundColor: rgba(pillColor || color.primary, 0.2),
        borderRadius: 10,
        fontSize: rem(12),
        fontFamily: font.family,
        fontWeight: font.weight.medium,
        lineHeight: rem(14),
        textAlign: 'center',
        textTransform: 'uppercase',
      }}
      role="status"
      {...props}
    >
      {label > 99 ? '99+' : label}
    </div>
  );
};

export default Pill;
