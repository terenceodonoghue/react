import { em, rem, rgba, transitions } from 'polished';
import {
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
        ({ color, font }) => ({
          color: color.neutral[500],
          display: 'inline-block',
          fontSize: rem(12),
          fontWeight: font.weight.medium,
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
        css={({ color, transition }) => ({
          display: 'block',
          backgroundColor: rgba(color.secondary, 0.2),
          border: `solid 1px ${color.secondary}`,
          borderRadius: 5,
          color: color.neutral[900],
          fontSize: em(15, 12),
          height: 38,
          margin: '8px 0',
          maxWidth: 270,
          padding: '10px 16px',
          ...transitions(['border', 'opacity'], transition.slowly),
          width: '100%',
          '&:disabled': {
            opacity: 0.3,
          },
          '&:focus': {
            border: `solid 1px ${color.primary}`,
            outline: 0,
          },
          '&::placeholder': {
            color: color.neutral[600],
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
