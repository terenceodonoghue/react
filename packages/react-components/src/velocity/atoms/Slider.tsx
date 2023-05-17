/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rgba, transitions } from 'polished';
import { ComponentPropsWithRef, forwardRef } from 'react';

export type SliderProps = ComponentPropsWithRef<'input'>;

const Slider = forwardRef<HTMLInputElement, SliderProps>(
  ({ className, style, ...props }, ref) => {
    const { color, transition } = useTheme();

    return (
      <div className={className} css={{ display: 'flex' }} style={style}>
        <input
          css={{
            appearance: 'none',
            width: '100%',
            height: 4,
            backgroundColor: rgba(color.primary, 0.15),
            borderRadius: 7,
            outline: 'none',
            ...transitions(['opacity'], transition.slowly),
            '&::-moz-range-progress': {
              backgroundColor: color.primary,
            },
            '&::-moz-range-thumb': {
              width: 8,
              height: 8,
              border: `solid 4px ${color.primary}`,
              borderRadius: '50%',
            },
            '&::-webkit-slider-thumb': {
              appearance: 'none',
              width: 16,
              height: 16,
              border: `solid 4px ${color.primary}`,
              borderRadius: '50%',
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

Slider.displayName = 'Slider';

export default Slider;
