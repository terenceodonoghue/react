import { rgba } from 'polished';
import React, {
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
      css={({ typography }) => ({
        alignItems: 'center',
        cursor: 'pointer',
        display: 'flex',
        fontWeight: typography.fontWeight.medium,
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
        css={({ palette }) => ({
          border: `solid 1px ${rgba(palette.neutral[700], 0.5)}`,
          borderRadius: '50%',
          display: 'inline-block',
          height: 16,
          margin: '0 8px 0 0',
          width: 16,
          'input:disabled + &': {
            opacity: 0.4,
          },
          'input:checked:enabled + &': {
            border: `solid 4px ${palette.accent}`,
          },
        })}
      />
      {children}
    </label>
  ),
);

export default Radio;
