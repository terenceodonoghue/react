/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rgba } from 'polished';
import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

export interface BackdropProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  color?: string;
  opacity?: number;
}

const Backdrop: FunctionComponent<BackdropProps> = ({
  children,
  color: backgroundColor,
  opacity = 0.15,
  ...props
}) => {
  const { color } = useTheme();

  return (
    <div
      css={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        padding: 14,
        backgroundColor: rgba(backgroundColor || color.primary, opacity),
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Backdrop;
