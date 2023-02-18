import { FunctionComponent, HTMLAttributes } from 'react';

import { Text, mq } from '@terenceodonoghue/react-components/velocity';

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
        <Text
          css={{ margin: '8px 12px' }}
          data-testid="container-heading"
          as="h3"
          variant="h3"
        >
          {heading}
        </Text>
      )}
      {children}
    </div>
  </div>
);

export default Container;
