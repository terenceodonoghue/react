/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rgba } from 'polished';
import { InputHTMLAttributes, FunctionComponent } from 'react';

import Text from '../primitives/Text.js';

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Radio: FunctionComponent<RadioProps> = ({
  className,
  disabled,
  id,
  label,
  style,
  ...props
}) => {
  const { color } = useTheme();

  return (
    <label
      css={{
        display: 'flex',
        alignItems: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
      }}
      className={className}
      htmlFor={id}
      style={style}
    >
      <input
        css={{
          margin: 0,
          height: 0,
          width: 0,
          opacity: 0,
        }}
        disabled={disabled}
        id={id}
        type="radio"
        {...props}
      />
      <span
        css={{
          border: `solid 1px ${rgba(color.neutral[700], 0.5)}`,
          borderRadius: '50%',
          display: 'inline-block',
          height: 16,
          margin: '0 8px 0 0',
          width: 16,
          'input:checked + &': {
            border: `solid 4px ${color.primary}`,
          },
          'input:enabled + &': {
            cursor: 'pointer',
          },
          'input:disabled + &': {
            cursor: 'not-allowed',
          },
        }}
      />
      <Text as="span" variant="h4">
        {label}
      </Text>
    </label>
  );
};

export default Radio;
