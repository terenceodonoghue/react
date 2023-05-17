/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { ComponentPropsWithoutRef } from 'react';

export interface PaneProps extends ComponentPropsWithoutRef<'div'> {
  p?: number;
  px?: number;
  py?: number;
}

const Pane = ({ p = 20, px, py, ...props }: PaneProps) => {
  const { color, font } = useTheme();

  const paddingBlock = Number.isInteger(py) ? py : p;
  const paddingInline = Number.isInteger(px) ? px : p;

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
        paddingBlock,
        paddingInline,
        fontFamily: font.family,
      }}
      {...props}
    />
  );
};

export default Pane;
