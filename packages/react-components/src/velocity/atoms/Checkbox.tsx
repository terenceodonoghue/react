/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { transitions } from 'polished';
import { ComponentPropsWithRef, forwardRef } from 'react';

import Icon from '../primitives/Icon.js';

export type CheckboxProps = ComponentPropsWithRef<'input'>;

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, className, style, ...props }, ref) => {
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
            width: 18,
            height: 18,
            backgroundColor: color.primary,
            borderRadius: '50%',
            transform: 'scale(0) translate(8px, -8px)',
            transformOrigin: 'top right',
            ...transitions(['transform'], transition.quickly),
            'input:checked ~ &': {
              transform: 'scale(1) translate(8px, -8px)',
            },
          }}
        >
          <Icon aria-hidden color={color.neutral[50]} size={12} with="check" />
        </div>
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBlock: 20,
            paddingInline: 20,
            borderColor: color.secondary,
            borderRadius: 5,
            borderStyle: 'solid',
            borderWidth: 1,
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
  },
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
