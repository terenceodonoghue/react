/** @jsxImportSource @emotion/react */
import { ComponentPropsWithoutRef, useId } from 'react';

import Text from '../primitives/Text.js';
import mq from '../utils/mq.js';

export interface MainProps extends ComponentPropsWithoutRef<'main'> {
  heading?: string;
}

const Main = ({ children, heading, ...props }: MainProps) => {
  const headingId = useId();

  return (
    <main
      aria-labelledby={heading ? headingId : undefined}
      css={mq({
        position: 'relative',
        maxWidth: 1360,
        padding: ['24px', '60px 30px', '64px 110px'],
      })}
      {...props}
    >
      {heading && (
        <Text
          as="h1"
          css={{
            margin: '0 0 20px 0',
          }}
          id={headingId}
          variant="h3"
        >
          {heading}
        </Text>
      )}
      {children}
    </main>
  );
};

export default Main;
