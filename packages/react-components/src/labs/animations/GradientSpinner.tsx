/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react';
import { linearGradient } from 'polished';
import type { FunctionComponent } from 'react';

export interface GradientSpinnerProps {
  background?: string;
  borderColor?: string;
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

const GradientSpinner: FunctionComponent<GradientSpinnerProps> = ({
  background = '#FFF',
  borderColor = '#FFF',
  colorStops = ['#9B59B6', '#84CDFA', '#5AD1CD'],
  size = 96,
}) => (
  <div
    css={{
      position: 'relative',
      borderRadius: '50%',
      height: size,
      width: size,
      animation: `${animate} 1.2s linear infinite`,
      ...linearGradient({
        colorStops,
      }),
      '& div': {
        position: 'absolute',
        borderRadius: '50%',
        height: '100%',
        width: '100%',
        ...linearGradient({
          colorStops,
        }),
        '&:nth-of-type(1)': {
          filter: 'blur(5px)',
        },
        '&:nth-of-type(2)': {
          filter: 'blur(10px)',
        },
        '&:nth-of-type(3)': {
          filter: 'blur(25px)',
        },
        '&:nth-of-type(4)': {
          filter: 'blur(50px)',
        },
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 10,
        left: 10,
        right: 10,
        bottom: 10,
        background,
        border: `solid 5px ${borderColor}`,
        borderRadius: '50%',
      },
    }}
  >
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default GradientSpinner;
