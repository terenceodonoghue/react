/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rgba, transitions } from 'polished';
import { ComponentPropsWithRef, forwardRef } from 'react';

import Icon, { IconProps } from '../primitives/Icon.js';
import Text from '../primitives/Text.js';

export interface NavItemProps extends ComponentPropsWithRef<'button'> {
  compact?: boolean;
  icon: IconProps['with'];
  label: string;
  selected?: boolean;
}

const NavItem = forwardRef<HTMLButtonElement, NavItemProps>(
  ({ compact = false, icon, label, selected = false, ...props }, ref) => {
    const { color, transition } = useTheme();

    return (
      <button
        css={{
          display: 'flex',
          alignItems: 'center',
          width: compact ? 80 : '100%',
          height: 56,
          padding: '0 28px',
          backgroundColor: selected ? rgba(color.primary, 0.1) : 'transparent',
          border: 'none',
          boxShadow: selected
            ? `inset 4px 0 0 -1px ${color.primary}`
            : undefined,
          cursor: 'pointer',
          overflow: 'hidden',
          ...transitions(['background-color'], transition.quickly),
          '&:focus-visible': {
            outline: `solid 2px ${color.primary}`,
            outlineOffset: -2,
          },
          '&:hover': {
            backgroundColor: !selected ? rgba(color.primary, 0.1) : undefined,
          },
        }}
        ref={ref}
        type="button"
        {...props}
      >
        <Icon
          aria-hidden
          color={color.neutral[400]}
          css={{ flexShrink: 0 }}
          size={24}
          with={icon}
        />
        <Text
          as="span"
          css={{
            marginLeft: 16,
            color: selected ? color.primary : color.neutral[500],
            opacity: compact ? 0 : 1,
          }}
          variant="p3"
        >
          {label}
        </Text>
      </button>
    );
  },
);

NavItem.displayName = 'NavItem';

export default NavItem;
