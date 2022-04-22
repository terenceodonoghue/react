import React, { FunctionComponent, HTMLAttributes } from 'react';
import mq from '~/components/utils/mq';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  heading?: string;
}

const Container: FunctionComponent<ContainerProps> = ({
  children,
  heading,
  ...props
}) => (
  <div
    css={mq({
      maxWidth: 1360,
      padding: ['24px', '60px 30px', '64px 110px'],
      position: 'relative',
    })}
    data-testid="container"
    {...props}
  >
    <div css={mq({ margin: [-6, -12] })}>
      {heading && (
        <h1 css={{ margin: '0 12px' }} data-testid="container-heading">
          {heading}
        </h1>
      )}
      {children}
    </div>
  </div>
);

export default Container;
