/** @jsxImportSource @emotion/react */
import { ComponentPropsWithoutRef } from 'react';

import Flex from '../primitives/Flex.js';
import Text, { TextProps } from '../primitives/Text.js';

export interface ArticleProps extends ComponentPropsWithoutRef<'article'> {
  descriptionId?: string;
  labelFor?: string;
  position?: 'left' | 'right';
  text?: [string?, string?, string?, string?];
  variant?: 'muted' | 'regular' | 'strong';
}

const Article = ({
  children,
  descriptionId,
  labelFor,
  position = 'right',
  text = [],
  variant = 'regular',
  ...props
}: ArticleProps) => {
  const [tl, bl, tr, br] = text;

  const variants: Record<typeof variant, TextProps<'span'>['variant']> = {
    muted: 'p2',
    regular: 'p1',
    strong: 'h4',
  };

  return (
    <article
      css={{
        display: 'flex',
        flexDirection: position === 'right' ? 'row' : 'row-reverse',
        alignItems: 'center',
        gap: 16,
        overflow: 'hidden',
      }}
      {...props}
    >
      {children}
      <div css={{ flex: 1, minWidth: 0 }}>
        <Flex spacing={16}>
          {tl ? (
            <Text
              as={labelFor ? 'label' : 'h3'}
              css={{ flex: '1 1 auto', margin: 0 }}
              htmlFor={labelFor}
              variant="h4"
              truncate
            >
              {tl}
            </Text>
          ) : null}
          {tr ? (
            <Text
              align="right"
              css={{ flex: '1 1 auto' }}
              variant={variants[variant]}
            >
              {tr}
            </Text>
          ) : null}
        </Flex>
        <Flex spacing={16}>
          {bl ? (
            <Text
              css={{ flex: '1 1 auto' }}
              id={descriptionId}
              variant="p2"
              truncate
            >
              {bl}
            </Text>
          ) : null}
          {br ? (
            <Text align="right" css={{ flex: '1 1 auto' }} variant="p2">
              {br}
            </Text>
          ) : null}
        </Flex>
      </div>
    </article>
  );
};

export default Article;
