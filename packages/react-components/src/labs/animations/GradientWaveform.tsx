/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react';
import { linearGradient } from 'polished';
import type { FunctionComponent } from 'react';

export interface GradientWaveformProps {
  colorStops?: string[];
  height?: number;
}

const animate = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const GradientWaveform: FunctionComponent<GradientWaveformProps> = ({
  colorStops = ['#5AD1CD', '#84CDFA', '#FFF'],
  height = 96,
}) => (
  <div
    css={{
      display: 'flex',
      gap: 8,
      height,
      '& div': {
        borderRadius: 5,
        height: '100%',
        width: 5,
        animation: `${animate} 1.2s ease-in-out infinite`,
        transform: 'scale(0)',
        ...linearGradient({
          colorStops,
          toDirection: '45deg',
        }),
        '&:nth-of-type(2)': {
          animationDelay: '0.1s',
        },
        '&:nth-of-type(3)': {
          animationDelay: '0.2s',
        },
        '&:nth-of-type(4)': {
          animationDelay: '0.3s',
        },
        '&:nth-of-type(5)': {
          animationDelay: '0.4s',
        },
        '&:nth-of-type(6)': {
          animationDelay: '0.5s',
        },
        '&:nth-of-type(7)': {
          animationDelay: '0.6s',
        },
        '&:nth-of-type(8)': {
          animationDelay: '0.7s',
        },
        '&:nth-of-type(9)': {
          animationDelay: '0.8s',
        },
        '&:nth-of-type(10)': {
          animationDelay: '0.9s',
        },
      },
    }}
  >
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default GradientWaveform;
