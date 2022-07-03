import { em, rgba } from 'polished';
import React, { forwardRef, HTMLAttributes } from 'react';
import mq from '../../utils/mq';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  heading?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, heading, ...props }, ref) => (
    <div
      css={({ palette }) =>
        mq({
          backgroundColor: palette.neutral[50],
          border: `solid 1px ${rgba(palette.accent, 0.08)}`,
          borderRadius: 1,
          boxShadow: `0 10px 20px 0 ${rgba(palette.accent, 0.07)}`,
          display: 'block',
          margin: [6, 12],
          padding: '32px 24px',
        })
      }
      data-testid="card"
      ref={ref}
      {...props}
    >
      {heading && (
        <h3
          css={({ palette, typography }) => ({
            color: palette.neutral[600],
            fontSize: em(13, typography.fontSize),
            fontWeight: typography.fontWeight.regular,
            margin: '0 0 24px',
            letterSpacing: 1.2,
            textTransform: 'uppercase',
          })}
          data-testid="card-heading"
        >
          {heading}
        </h3>
      )}
      {children}
    </div>
  ),
);

export default Card;
