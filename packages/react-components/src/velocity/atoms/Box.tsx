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

  const paddingX = Number.isInteger(px) ? px : p;
  const paddingY = Number.isInteger(py) ? py : p;

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
        padding:
          paddingX === paddingY ? `${p}px` : `${paddingY}px ${paddingX}px`,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Box;
