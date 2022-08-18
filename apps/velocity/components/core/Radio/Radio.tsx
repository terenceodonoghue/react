import { rgba } from 'polished';
import {
  forwardRef,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  RefObject,
} from 'react';

interface RadioProps extends LabelHTMLAttributes<HTMLLabelElement> {
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  inputRef?: RefObject<HTMLInputElement>;
}

const Radio = forwardRef<HTMLLabelElement, RadioProps>(
  ({ children, id, inputProps, inputRef, ...props }, ref) => (
    <label
      css={({ font }) => ({
        alignItems: 'center',
        cursor: 'pointer',
        display: 'flex',
        fontWeight: font.weight.medium,
      })}
      data-testid="radio"
      htmlFor={id}
      ref={ref}
      {...props}
    >
      <input
        css={{
          height: 0,
          margin: 0,
          opacity: 0,
          width: 0,
        }}
        data-testid="radio-input"
        id={id}
        ref={inputRef}
        type="radio"
        {...inputProps}
      />
      <span
        css={({ color }) => ({
          border: `solid 1px ${rgba(color.neutral[700], 0.5)}`,
          borderRadius: '50%',
          display: 'inline-block',
          height: 16,
          margin: '0 8px 0 0',
          width: 16,
          'input:disabled + &': {
            opacity: 0.4,
          },
          'input:enabled:checked + &': {
            border: `solid 4px ${color.primary}`,
          },
        })}
      />
      {children}
    </label>
  ),
);

export default Radio;
