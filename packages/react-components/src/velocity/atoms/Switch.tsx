import { useTheme } from '@emotion/react';
import { rgba, transitions } from 'polished';
import type { InputHTMLAttributes, FunctionComponent } from 'react';

export type SwitchProps = InputHTMLAttributes<HTMLInputElement>;

const Switch: FunctionComponent<SwitchProps> = ({
  className,
  id,
  style,
  ...props
}) => {
  const { color, transition } = useTheme();

  return (
    <label
      css={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      className={className}
      htmlFor={id}
      style={style}
    >
      <input
        css={{ margin: 0, height: 0, width: 0, opacity: 0 }}
        id={id}
        type="checkbox"
        {...props}
      />
      <span
        css={{
          position: 'relative',
          borderRadius: 10,
          height: 20,
          width: 36,
          backgroundColor: rgba(color.neutral[600], 0.4),
          ...transitions(['background-color'], transition.slowly),
          '&::before': {
            position: 'absolute',
            top: 2,
            left: 2,
            content: '""',
            borderRadius: '50%',
            height: 16,
            width: 16,
            backgroundColor: color.neutral[50],
            ...transitions(['transform'], transition.slowly),
            'input:checked + &': {
              transform: 'translateX(16px)',
            },
          },
          'input:checked + &': {
            backgroundColor: color.ui.green,
          },
          'input:enabled + &': {
            cursor: 'pointer',
          },
          'input:disabled + &': {
            cursor: 'not-allowed',
            opacity: 0.4,
          },
        }}
      />
    </label>
  );
};

export default Switch;
