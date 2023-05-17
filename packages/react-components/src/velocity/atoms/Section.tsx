/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rgba } from 'polished';
import { ComponentPropsWithoutRef, useId } from 'react';

import Text from '../primitives/Text.js';
import mq from '../utils/mq.js';

export interface SectionProps extends ComponentPropsWithoutRef<'section'> {
  description?: string;
  heading?: string;
}

const Section = ({
  children,
  description,
  heading,
  ...props
}: SectionProps) => {
  const headingId = useId();
  const descriptionId = useId();
  const { color, font } = useTheme();

  return (
    <section
      aria-labelledby={heading ? headingId : undefined}
      aria-describedby={description ? descriptionId : undefined}
      css={mq({
        paddingBlock: 32,
        paddingInline: 24,
        color: color.neutral[900],
        backgroundColor: color.neutral[50],
        border: `solid 1px ${rgba(color.primary, 0.08)}`,
        borderRadius: 1,
        boxShadow: `0 10px 20px 0 ${rgba(color.primary, 0.07)}`,
        fontFamily: font.family,
      })}
      {...props}
    >
      {heading ? (
        <Text
          css={{
            display: 'block',
            margin: '0 0 24px',
          }}
          as="h2"
          id={headingId}
          variant="c2"
        >
          {heading}
        </Text>
      ) : null}
      {description ? (
        <Text as="p" css={{ marginBottom: 32 }} id={descriptionId}>
          {description}
        </Text>
      ) : null}
      {children}
    </section>
  );
};

export default Section;
