import React, { FunctionComponent, HTMLAttributes } from 'react';

const Flex: FunctionComponent<HTMLAttributes<HTMLDivElement>> = (props) => (
  <div css={{ display: 'flex' }} data-testid="flex" {...props} />
);

export default Flex;
