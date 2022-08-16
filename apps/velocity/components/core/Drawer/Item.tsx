import { useTheme } from '@emotion/react';
import { rgba, transitions } from 'polished';
import {
  forwardRef,
  JSXElementConstructor,
  LiHTMLAttributes,
  SVGProps,
} from 'react';

export interface ItemProps extends LiHTMLAttributes<HTMLLIElement> {
  compact?: boolean;
  icon?: JSXElementConstructor<SVGProps<SVGSVGElement>>;
  selected?: boolean;
}

const Item = forwardRef<HTMLLIElement, ItemProps>(
  (
    { children, compact = false, icon: Icon, selected = false, ...props },
    ref,
  ) => {
    const theme = useTheme();

    return (
      <li
        css={[
          ({ color, transition }) => ({
            alignItems: 'center',
            backgroundColor: selected ? rgba(color.primary, 0.1) : undefined,
            borderLeft: `solid 3px ${selected ? color.primary : 'transparent'}`,
            color: selected ? color.primary : color.neutral[500],
            cursor: 'pointer',
            display: 'flex',
            height: 56,
            justifyContent: 'flex-start',
            padding: '0 0 0 25px',
            ...transitions(['background-color'], transition.quickly),
            '&:hover': {
              backgroundColor: !selected && rgba(color.primary, 0.1),
            },
          }),
        ]}
        data-testid="drawer-item"
        ref={ref}
        {...props}
      >
        {Icon && (
          <Icon
            color={theme.color.neutral[400]}
            css={{
              flexShrink: 0,
              height: 24,
              width: 24,
            }}
            data-testid="drawer-item-icon"
          />
        )}
        <span
          css={[
            ({ transition }) => ({
              marginLeft: 16,
              opacity: compact ? 0 : 1,
              ...transitions(['opacity'], transition.quickly),
            }),
          ]}
          data-testid="drawer-item-text"
        >
          {children}
        </span>
      </li>
    );
  },
);

export default Item;
