/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rgba, transitions } from 'polished';
import { ButtonHTMLAttributes, forwardRef, FunctionComponent } from 'react';

import type { ReactIcon } from '@terenceodonoghue/react-icons';

import Text from '../primitives/Text.js';

export interface NavItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  compact?: boolean;
  icon: ReactIcon;
  label: string;
  selected?: boolean;
}

const NavItem: FunctionComponent<NavItemProps> = forwardRef<
  HTMLButtonElement,
  NavItemProps
>(({ compact = false, icon: Icon, label, selected = false, ...props }, ref) => {
  const { color, transition } = useTheme();

  return (
    <button
      css={{
        display: 'flex',
        alignItems: 'center',
        border: 'none',
        boxShadow: selected ? `inset 4px 0 0 -1px ${color.primary}` : undefined,
        height: 56,
        padding: '0 28px',
        backgroundColor: selected ? rgba(color.primary, 0.1) : undefined,
        cursor: 'pointer',
        width: compact ? 80 : '100%',
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
      {Icon ? (
        <Icon
          aria-hidden
          css={{ flexShrink: 0 }}
          color={color.neutral[400]}
          size={24}
        />
      ) : undefined}

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
});

export default NavItem;
