import { useTheme } from '@emotion/react';
import { rgba } from 'polished';
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
          ({ palette, transitions }) => ({
            alignItems: 'center',
            backgroundColor: selected ? rgba(palette.accent, 0.1) : undefined,
            borderLeft: `solid 3px ${
              selected ? palette.accent : 'transparent'
            }`,
            color: selected ? palette.accent : palette.neutral[500],
            cursor: 'pointer',
            display: 'flex',
            height: 56,
            justifyContent: 'flex-start',
            padding: '0 0 0 25px',
            transition: `background-color ${transitions.duration.standard}ms ${transitions.easing.sharp}`,
            '&:hover': {
              backgroundColor: !selected && rgba(palette.accent, 0.1),
            },
          }),
        ]}
        data-testid="drawer-item"
        ref={ref}
        {...props}
      >
        {Icon && (
          <Icon
            color={theme.palette.neutral[400]}
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
            ({ transitions }) => ({
              marginLeft: 16,
              opacity: compact ? 0 : 1,
              transition: `opacity ${transitions.duration.standard}ms ${transitions.easing.easeInOut}`,
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
