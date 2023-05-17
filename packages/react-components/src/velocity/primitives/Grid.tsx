/** @jsxImportSource @emotion/react */
import { CSSProperties, ComponentPropsWithoutRef } from 'react';

import mq, { MediaQuery } from '../utils/mq.js';

export interface GridProps extends ComponentPropsWithoutRef<'div'> {
  flow?: MediaQuery<CSSProperties['gridAutoFlow']>;
  rows?: MediaQuery<number>;
  columns?: MediaQuery<number>;
  gutterX?: MediaQuery<number | CSSProperties['columnGap']>;
  gutterY?: MediaQuery<number | CSSProperties['rowGap']>;
  marginX?: MediaQuery<number | CSSProperties['marginInline']>;
  marginY?: MediaQuery<number | CSSProperties['marginBlock']>;
  paddingX?: MediaQuery<number | CSSProperties['paddingInline']>;
  paddingY?: MediaQuery<number | CSSProperties['paddingBlock']>;
}

const Grid = ({
  flow,
  rows,
  columns = [4, 8, 12],
  gutterX = [16, 24],
  gutterY = [16, 24],
  marginX,
  marginY,
  paddingX,
  paddingY,
  ...props
}: GridProps) => (
  <div
    css={mq({
      display: 'grid',
      gridAutoFlow: flow,
      gridTemplateColumns: Array.isArray(columns)
        ? columns.map((column) => `repeat(${column}, minmax(0, 1fr))`)
        : `repeat(${columns}, minmax(0, 1fr))`,
      gridTemplateRows: Array.isArray(rows)
        ? rows.map((row) => `repeat(${row}, minmax(0, 1fr))`)
        : `repeat(${
            Number.isInteger(rows) ? rows : 'auto-fit'
          }, minmax(0, 1fr))`,
      columnGap: gutterX,
      rowGap: gutterY,
      marginBlock: marginY,
      marginInline: marginX,
      paddingBlock: paddingY,
      paddingInline: paddingX,
    })}
    {...props}
  />
);

export default Grid;
