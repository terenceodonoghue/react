/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rgba } from 'polished';
import type { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

export interface BackdropProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  color?: string;
  compact?: boolean;
  opacity?: number;
}

const Backdrop: FunctionComponent<BackdropProps> = ({
  children,
  color: backgroundColor,
  compact = false,
  opacity = 0.15,
  ...props
}) => {
  const { color } = useTheme();

  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        padding: compact ? 8 : 14,
        height: 'fit-content',
        width: 'fit-content',
        backgroundColor: rgba(backgroundColor || color.primary, opacity),
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Backdrop;
