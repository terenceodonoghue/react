/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react';
import type { FunctionComponent } from 'react';

export interface RippleDotsProps {
  colors?: string[];
  gap?: number;
  size?: number;
}

const animate = keyframes`
  from {
    opacity: 1;
    transform: scale(0);
  }

  to {
    opacity: 0;
    transform: scale(3);
  }
`;

const RippleDots: FunctionComponent<RippleDotsProps> = ({
  colors = ['#84CDFA', '#5AD1CD', '#9B59B6'],
  gap = 10,
  size = 24,
}) => (
  <div css={{ display: 'flex', gap }}>
    {colors.map((backgroundColor, i) => (
      <div
        // eslint-disable-next-line react/no-array-index-key
        key={`${backgroundColor}-${i}`}
        css={{
          borderRadius: '50%',
          height: size,
          width: size,
          backgroundColor,
          '&::before': {
            content: '""',
            display: 'block',
            borderRadius: 'inherit',
            height: 'inherit',
            width: 'inherit',
            backgroundColor: 'inherit',
            animation: `${animate} 1.8s ease-out infinite`,
            animationDelay: `${i * 0.2}s`,
            zIndex: -1,
          },
        }}
      />
    ))}
  </div>
);

export default RippleDots;
