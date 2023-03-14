/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rgba } from 'polished';
import { FunctionComponent, HTMLAttributes, useId } from 'react';

import Text from '../primitives/Text.js';
import mq from '../utils/mq.js';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  heading?: string;
}

const Card: FunctionComponent<CardProps> = ({
  heading,
  children,
  ...props
}) => {
  const headingId = useId();
  const { color, font } = useTheme();

  const Container = heading ? 'section' : 'div';

  return (
    <Container
      aria-labelledby={heading ? headingId : undefined}
      css={mq({
        border: `solid 1px ${rgba(color.primary, 0.08)}`,
        borderRadius: 1,
        boxShadow: `0 10px 20px 0 ${rgba(color.primary, 0.07)}`,
        margin: [6, 12],
        padding: '32px 24px',
        backgroundColor: color.neutral[50],
        color: color.neutral[900],
        fontFamily: font.family,
      })}
      {...props}
    >
      {heading ? (
        <Text
          css={{
            display: 'block',
            margin: '0 0 20px',
          }}
          as="h2"
          id={headingId}
          variant="c2"
        >
          {heading}
        </Text>
      ) : undefined}
      {children}
    </Container>
  );
};

export default Card;
