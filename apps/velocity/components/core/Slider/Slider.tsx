import { rem, rgba, transitions } from 'polished';
import {
  forwardRef,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  RefObject,
} from 'react';

interface SliderProps extends LabelHTMLAttributes<HTMLLabelElement> {
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  inputRef?: RefObject<HTMLInputElement>;
  primary?: string;
  secondary?: string;
}

const Slider = forwardRef<HTMLLabelElement, SliderProps>(
  ({ id, inputProps, inputRef, primary, secondary, ...props }, ref) => (
    <label data-testid="slider" htmlFor={id} ref={ref} {...props}>
      {(primary || secondary) && (
        <div
          css={{
            display: 'flex',
          }}
        >
          {primary && (
            <p
              css={{ flex: 1, margin: 0, fontSize: 15, lineHeight: rem(22) }}
              data-testid="slider-primary"
            >
              {primary}
            </p>
          )}
          {secondary && (
            <p
              css={({ color }) => ({
                color: color.neutral[600],
                fontSize: 15,
                lineHeight: rem(22),
                margin: 0,
              })}
              data-testid="slider-secondary"
            >
              {secondary}
            </p>
          )}
        </div>
      )}
      <input
        css={({ color, transition }) => ({
          appearance: 'none',
          backgroundColor: rgba(color.primary, 0.15),
          borderRadius: 7,
          height: 4,
          outline: 'none',
          ...transitions(['opacity'], transition.quickly),
          width: '100%',
          '&::-moz-range-progress': {
            backgroundColor: color.primary,
          },
          '&::-moz-range-thumb': {
            border: `solid 4px ${color.primary}`,
            borderRadius: '50%',
            cursor: 'pointer',
            height: 8,
            width: 8,
          },
          '&::-webkit-slider-thumb': {
            appearance: 'none',
            border: `solid 4px ${color.primary}`,
            borderRadius: '50%',
            cursor: 'pointer',
            height: 16,
            width: 16,
          },
          '&:disabled': {
            opacity: 0.3,
          },
        })}
        data-testid="slider-input"
        id={id}
        ref={inputRef}
        type="range"
        {...inputProps}
      />
    </label>
  ),
);

export default Slider;
