/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rgba, transitions } from 'polished';
import type { FunctionComponent, HTMLAttributes } from 'react';

import type { ReactIcon } from '@terenceodonoghue/react-icons';

import Text from '../primitives/Text.js';

export interface NavItemProps extends HTMLAttributes<HTMLLIElement> {
  compact?: boolean;
  icon: ReactIcon;
  label: string;
  selected?: boolean;
}

const NavItem: FunctionComponent<NavItemProps> = ({
  compact,
  icon: Icon,
  label,
  selected,
  ...props
}) => {
  const { color, transition } = useTheme();

  return (
    <li
      css={{
        display: 'flex',
        alignItems: 'center',
        boxShadow: selected ? `inset 4px 0 0 -1px ${color.primary}` : undefined,
        height: 56,
        padding: '0 28px',
        backgroundColor: selected ? rgba(color.primary, 0.1) : undefined,
        cursor: 'pointer',
        width: compact ? 80 : '100%',
        overflow: 'hidden',
        ...transitions(['background-color'], transition.quickly),
        '&:hover': {
          backgroundColor: !selected ? rgba(color.primary, 0.1) : undefined,
        },
      }}
      {...props}
    >
      {Icon ? (
        <Icon css={{ flexShrink: 0 }} color={color.neutral[400]} size={24} />
      ) : undefined}

      <Text
        css={{
          marginLeft: 16,
          color: selected ? color.primary : color.neutral[500],
          opacity: compact ? 0 : 1,
        }}
        as="span"
        variant="p3"
      >
        {label}
      </Text>
    </li>
  );
};

export default NavItem;
