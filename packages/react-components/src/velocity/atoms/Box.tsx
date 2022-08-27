/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import type { FunctionComponent, HTMLAttributes } from 'react';

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  p?: number;
  px?: number;
  py?: number;
}

const Box: FunctionComponent<BoxProps> = ({
  children,
  p = 20,
  px,
  py,
  ...props
}) => {
  const { color } = useTheme();

  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: color.secondary,
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        padding: !px && !py ? `${p}px` : `${py || p}px ${px || p}px`,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Box;
