/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react';
import { linearGradient } from 'polished';
import type { FunctionComponent } from 'react';

export interface GradientCrescentProps {
  colorStops?: string[];
  size?: number;
}

const animate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const GradientCrescent: FunctionComponent<GradientCrescentProps> = ({
  colorStops = ['#9B59B6', '#84CDFA', '#5AD1CD'],
  size = 96,
}) => (
  <div
    css={{
      borderRadius: '50%',
      ...linearGradient({
        colorStops,
      }),
    }}
  >
    <div
      css={{
        animation: `${animate} 1.2s linear infinite`,
      }}
    >
      <div
        css={{
          borderRadius: '50%',
          height: size,
          width: size,
          backgroundColor: '#FFF',
          transform: 'rotate(45deg)',
          transformOrigin: '40% 50%',
        }}
      />
    </div>
  </div>
);

export default GradientCrescent;
