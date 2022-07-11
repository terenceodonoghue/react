import { rgba } from 'polished';
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
              css={{ flex: 1, lineHeight: '1.467em', margin: 0 }}
              data-testid="slider-primary"
            >
              {primary}
            </p>
          )}
          {secondary && (
            <p
              css={({ palette }) => ({
                color: palette.neutral[600],
                lineHeight: '1.467em',
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
        css={({ palette, transitions }) => ({
          appearance: 'none',
          backgroundColor: rgba(palette.accent, 0.15),
          borderRadius: 7,
          height: 4,
          outline: 'none',
          transition: `opacity ${transitions.duration.standard}ms
          ${transitions.easing.sharp}`,
          width: '100%',
          '&::-moz-range-progress': {
            backgroundColor: palette.accent,
          },
          '&::-moz-range-thumb': {
            border: `solid 4px ${palette.accent}`,
            borderRadius: '50%',
            cursor: 'pointer',
            height: 8,
            width: 8,
          },
          '&::-webkit-slider-thumb': {
            appearance: 'none',
            border: `solid 4px ${palette.accent}`,
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
