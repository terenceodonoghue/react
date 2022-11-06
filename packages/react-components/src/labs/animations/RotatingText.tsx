/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react';
import { FunctionComponent } from 'react';

interface Word {
  content: string;
  color?: string;
}

export interface RotatingTextProps {
  delay?: number;
  words: Word[];
}

const animateIn = keyframes`
  0% {
    transform: rotateX(-90deg);
  }
  100% {
    transform: rotateX(0deg);
  }
`;

const animateOut = keyframes`
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(90deg);
  }
`;

const RotatingText: FunctionComponent<RotatingTextProps> = ({
  delay = 4000,
  words = [],
}) => {
  return (
    <span
      css={{
        display: 'inline-block',
        verticalAlign: 'top',
      }}
    >
      {words.map(({ content, color }, i) => (
        <span css={{ position: 'absolute', display: 'flex' }} key={content}>
          {content.split('').map((letter, j) => (
            <span
              css={{
                color,
                transform: 'rotateX(-90deg)',
                transformOrigin: 'center center 25px',
                animation: `${animateIn} 380ms ease ${
                  i * delay + (340 + j * 80)
                }ms forwards, ${animateOut} 320ms cubic-bezier(0.6, 0, 0.7, 0.2) ${
                  i * delay + j * 80 + delay
                }ms forwards`,
              }}
              // eslint-disable-next-line react/no-array-index-key
              key={`${i}-${letter}-${j}`}
            >
              {letter}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
};

export default RotatingText;
