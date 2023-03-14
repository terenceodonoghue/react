/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rgba, transitions } from 'polished';
import { InputHTMLAttributes, FunctionComponent, forwardRef } from 'react';

export type SliderProps = InputHTMLAttributes<HTMLInputElement>;

const Slider: FunctionComponent<InputHTMLAttributes<HTMLInputElement>> =
  forwardRef<HTMLInputElement, SliderProps>(
    ({ className, style, ...props }, ref) => {
      const { color, transition } = useTheme();

      return (
        <div
          className={className}
          css={{ display: 'flex' }}
          role="presentation"
          style={style}
        >
          <input
            css={{
              appearance: 'none',
              borderRadius: 7,
              outline: 'none',
              height: 4,
              width: '100%',
              backgroundColor: rgba(color.primary, 0.15),
              ...transitions(['opacity'], transition.slowly),
              '&::-moz-range-progress': {
                backgroundColor: color.primary,
              },
              '&::-moz-range-thumb': {
                border: `solid 4px ${color.primary}`,
                borderRadius: '50%',
                height: 8,
                width: 8,
              },
              '&::-webkit-slider-thumb': {
                appearance: 'none',
                border: `solid 4px ${color.primary}`,
                borderRadius: '50%',
                height: 16,
                width: 16,
              },
              '&:enabled': {
                cursor: 'pointer',
              },
              '&:disabled': {
                opacity: 0.3,
              },
            }}
            ref={ref}
            type="range"
            {...props}
          />
        </div>
      );
    },
  );

export default Slider;
