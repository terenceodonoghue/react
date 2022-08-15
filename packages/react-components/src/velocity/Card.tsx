/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rem, rgba } from 'polished';
import { FunctionComponent, HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  heading?: string;
}

const Card: FunctionComponent<CardProps> = ({
  children,
  heading,
  ...props
}) => {
  const { color, font } = useTheme();

  return (
    <div
      css={{
        border: `solid 1px ${rgba(color.primary, 0.08)}`,
        borderRadius: 1,
        boxShadow: `0 10px 20px 0 ${rgba(color.primary, 0.07)}`,
        margin: 6,
        padding: '32px 24px',
        backgroundColor: color.neutral[50],
        color: color.neutral[900],
      }}
      {...props}
    >
      {heading ? (
        <h3
          css={{
            margin: '0 0 24px',
            color: color.neutral[600],
            fontSize: rem(13),
            fontWeight: font.weight.regular,
            letterSpacing: 1.2,
            lineHeight: rem(15),
            textTransform: 'uppercase',
            '&:empty': {
              display: 'none',
            },
          }}
        >
          {heading}
        </h3>
      ) : undefined}
      {children}
    </div>
  );
};

export default Card;