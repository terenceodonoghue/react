/** @jsxImportSource @emotion/react */
import { rgba } from 'polished';
import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

export interface BackdropProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  color: string;
  opacity?: number;
}

const Backdrop: FunctionComponent<BackdropProps> = ({
  children,
  color,
  opacity = 0.15,
  ...props
}) => {
  return (
    <div
      css={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        padding: 14,
        backgroundColor: rgba(color, opacity),
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Backdrop;
