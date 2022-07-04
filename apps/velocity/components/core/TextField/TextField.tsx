import { em, rgba, transitions as transition } from 'polished';
import React, {
  forwardRef,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  RefObject,
} from 'react';

interface TextFieldProps extends LabelHTMLAttributes<HTMLLabelElement> {
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  inputRef?: RefObject<HTMLInputElement>;
}

const TextField = forwardRef<HTMLLabelElement, TextFieldProps>(
  ({ children, id, inputProps, inputRef, ...props }, ref) => (
    <label
      css={[
        ({ palette, typography }) => ({
          color: palette.neutral[500],
          display: 'inline-block',
          fontSize: em(12, typography.fontSize),
          fontWeight: typography.fontWeight.medium,
          letterSpacing: 1.2,
          margin: '0 12px',
          textTransform: 'uppercase',
        }),
      ]}
      data-testid="textfield"
      htmlFor={id}
      ref={ref}
      {...props}
    >
      {children}
      <input
        css={({ palette, transitions }) => ({
          display: 'block',
          backgroundColor: rgba(palette.secondary, 0.2),
          border: `solid 1px ${palette.secondary}`,
          borderRadius: 5,
          color: palette.neutral[900],
          fontSize: em(15, 12),
          height: 38,
          margin: '8px 0',
          maxWidth: 270,
          padding: '10px 16px',
          ...transition(
            ['border', 'opacity'],
            `${transitions.duration.standard}ms ${transitions.easing.sharp}`,
          ),
          width: '100%',
          '&:disabled': {
            opacity: 0.3,
          },
          '&:focus': {
            border: `solid 1px ${palette.accent}`,
            outline: 0,
          },
          '&::placeholder': {
            color: palette.neutral[600],
          },
        })}
        data-testid="textfield-input"
        id={id}
        ref={inputRef}
        {...inputProps}
      />
    </label>
  ),
);

export default TextField;
