/** @jsxImportSource @emotion/react */
import { CSSProperties, ComponentPropsWithoutRef } from 'react';

import mq, { MediaQuery } from '../utils/mq.js';

export interface FlexProps extends ComponentPropsWithoutRef<'div'> {
  align?: MediaQuery<CSSProperties['alignItems']>;
  direction?: MediaQuery<CSSProperties['flexDirection']>;
  justify?: MediaQuery<CSSProperties['justifyContent']>;
  marginX?: MediaQuery<number | CSSProperties['marginInline']>;
  marginY?: MediaQuery<number | CSSProperties['marginBlock']>;
  paddingX?: MediaQuery<number | CSSProperties['paddingInline']>;
  paddingY?: MediaQuery<number | CSSProperties['paddingBlock']>;
  spacing?: MediaQuery<number | CSSProperties['gap']>;
}

const Flex = ({
  align,
  direction,
  justify,
  marginX,
  marginY,
  paddingX,
  paddingY,
  spacing,
  ...props
}: FlexProps) => (
  <div
    css={mq({
      display: 'flex',
      flexDirection: direction,
      alignItems: align,
      justifyContent: justify,
      gap: spacing,
      marginBlock: marginY,
      marginInline: marginX,
      paddingBlock: paddingY,
      paddingInline: paddingX,
    })}
    {...props}
  />
);

export default Flex;
