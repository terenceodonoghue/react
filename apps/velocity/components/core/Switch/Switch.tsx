import { rgba, transitions } from 'polished';
import {
  forwardRef,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  RefObject,
} from 'react';

interface SwitchProps extends LabelHTMLAttributes<HTMLLabelElement> {
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  inputRef?: RefObject<HTMLInputElement>;
  primary?: string;
  secondary?: string;
}

const Switch = forwardRef<HTMLLabelElement, SwitchProps>(
  ({ id, inputProps, inputRef, primary, secondary, ...props }, ref) => (
    <label
      css={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        userSelect: 'none',
      }}
      data-testid="switch"
      htmlFor={id}
      ref={ref}
      {...props}
    >
      {(primary || secondary) && (
        <div
          css={{ display: 'flex', flexDirection: 'column', marginRight: 60 }}
        >
          {primary && (
            <span
              css={({ font }) => ({
                fontWeight: font.weight.medium,
              })}
              data-testid="switch-primary"
            >
              {primary}
            </span>
          )}
          {secondary && (
            <span
              css={({ color }) => ({
                color: color.neutral[600],
              })}
              data-testid="switch-secondary"
            >
              {secondary}
            </span>
          )}
        </div>
      )}
      <input
        css={{ height: 0, margin: 0, width: 0, opacity: 0 }}
        data-testid="switch-input"
        id={id}
        ref={inputRef}
        type="checkbox"
        {...inputProps}
      />
      <span
        css={({ color, transition }) => ({
          backgroundColor: rgba(color.neutral[600], 0.4),
          borderRadius: 10,
          cursor: 'pointer',
          height: 20,
          position: 'relative',
          width: 36,
          ...transitions(['background-color', 'opacity'], transition.slowly),
          '&::before': {
            backgroundColor: color.neutral[50],
            borderRadius: '50%',
            content: '""',
            height: 16,
            left: 2,
            position: 'absolute',
            top: 2,
            width: 16,
            ...transitions(['transform'], transition.slowly),
            'input:checked + &': {
              transform: 'translateX(16px)',
            },
          },
          'input:checked:enabled + &': {
            backgroundColor: color.ui.green,
          },
          'input:disabled + &': {
            opacity: 0.4,
          },
        })}
      />
    </label>
  ),
);

export default Switch;
