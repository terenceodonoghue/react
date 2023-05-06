/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { transitions } from 'polished';
import { FunctionComponent, InputHTMLAttributes, forwardRef } from 'react';

import { Check } from '@terenceodonoghue/react-icons/velocity';

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement>;

const Checkbox: FunctionComponent<CheckboxProps> = forwardRef<
  HTMLInputElement,
  CheckboxProps
>(({ children, className, style, ...props }, ref) => {
  const { color, font, transition } = useTheme();

  return (
    <div
      className={className}
      css={{
        position: 'relative',
        '&:has(input:disabled)': {
          opacity: 0.4,
        },
      }}
      style={style}
    >
      <input
        css={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          opacity: 0,
          '&:enabled': {
            cursor: 'pointer',
          },
          '&:disabled': {
            cursor: 'not-allowed',
          },
        }}
        ref={ref}
        type="checkbox"
        {...props}
      />
      <div
        css={{
          position: 'absolute',
          top: 0,
          right: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          height: 18,
          width: 18,
          backgroundColor: color.primary,
          transform: 'scale(0) translate(8px, -8px)',
          transformOrigin: 'top right',
          ...transitions(['transform'], transition.quickly),
          'input:checked ~ &': {
            transform: 'scale(1) translate(8px, -8px)',
          },
        }}
      >
        <Check aria-hidden color={color.neutral[50]} size={12} />
      </div>
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: color.secondary,
          borderRadius: 5,
          borderStyle: 'solid',
          borderWidth: 1,
          paddingBlock: 20,
          paddingInline: 20,
          fontFamily: font.family,
          ...transitions(
            ['border-color', 'background-color'],
            transition.quickly,
          ),
          'input:checked ~ &': {
            borderColor: color.primary,
          },
          'input:enabled:hover ~ &': {
            backgroundColor: color.neutral[100],
          },
          'input:focus-visible ~ &': {
            outline: `solid 2px ${color.primary}`,
            outlineOffset: -2,
          },
        }}
      >
        {children}
      </div>
    </div>
  );
});

export default Checkbox;
