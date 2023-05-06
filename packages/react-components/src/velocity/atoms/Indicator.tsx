/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import type { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

export interface IndicatorProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  color?: string;
  visible?: boolean;
}

const Indicator: FunctionComponent<IndicatorProps> = ({
  children,
  color: indicatorColor,
  visible = true,
  ...props
}) => {
  const { color } = useTheme();

  return (
    <div
      css={{
        position: 'relative',
      }}
    >
      <div
        css={{
          position: 'absolute',
          top: 0,
          right: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `solid 2px ${color.neutral[50]}`,
          borderRadius: '50%',
          height: 12,
          width: 12,
          backgroundColor: indicatorColor || color.primary,
          opacity: visible ? 1 : 0,
        }}
        role="status"
        {...props}
      />
      {children}
    </div>
  );
};

export default Indicator;
