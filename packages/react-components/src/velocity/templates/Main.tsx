import { FunctionComponent, HTMLAttributes, useId } from 'react';

import Text from '../primitives/Text.js';
import mq from '../utils/mq.js';

interface MainProps extends HTMLAttributes<HTMLDivElement> {
  heading?: string;
}

const Main: FunctionComponent<MainProps> = ({
  children,
  heading,
  ...props
}) => {
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
      <div css={mq({ margin: [-6, -12] })}>
        {heading && (
          <Text
            as="h1"
            css={{ margin: '8px 12px' }}
            id={headingId}
            variant="h3"
          >
            {heading}
          </Text>
        )}
        {children}
      </div>
    </main>
  );
};

export default Main;
