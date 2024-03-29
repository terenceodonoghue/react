/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rem, rgba } from 'polished';
import type { FunctionComponent, HTMLAttributes } from 'react';

export interface PillProps extends HTMLAttributes<HTMLDivElement> {
  color?: string;
  label: string | number;
}

const Pill: FunctionComponent<PillProps> = ({
  color: pillColor,
  label,
  ...props
}) => {
  const { color, font } = useTheme();

  return (
    <div
      css={{
        display: 'inline-block',
        borderRadius: 10,
        padding: '3px 5px',
        minWidth: 32,
        backgroundColor: rgba(pillColor || color.primary, 0.2),
        color: pillColor || color.primary,
        fontFamily: font.family,
        fontSize: rem(12),
        fontWeight: font.weight.medium,
        lineHeight: rem(14),
        textAlign: 'center',
        textTransform: 'uppercase',
      }}
      role="status"
      {...props}
    >
      {label}
    </div>
  );
};

export default Pill;
