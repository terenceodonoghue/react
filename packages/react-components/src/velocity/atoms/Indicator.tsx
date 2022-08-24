/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import type { FunctionComponent, ReactNode } from 'react';

import type { ReactIcon } from '@terenceodonoghue/react-icons';

export interface IndicatorProps {
  children?: ReactNode;
  color?: string;
  icon?: ReactIcon;
  visible?: boolean;
}

const Indicator: FunctionComponent<IndicatorProps> = ({
  children,
  color: indicatorColor,
  icon: Icon,
  visible = true,
  ...props
}) => {
  const { color } = useTheme();

  return (
    <div
      css={{
        position: 'relative',
      }}
      {...props}
    >
      {visible ? (
        <div
          css={{
            position: 'absolute',
            top: 0,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: Icon ? undefined : `solid 2px ${color.neutral[50]}`,
            borderRadius: '50%',
            height: Icon ? 18 : 12,
            width: Icon ? 18 : 12,
            backgroundColor: indicatorColor || color.primary,
            transform: Icon ? 'translate(8px, -7px)' : undefined,
          }}
        >
          {Icon ? <Icon color={color.neutral[50]} size={12} /> : undefined}
        </div>
      ) : undefined}
      {children}
    </div>
  );
};

export default Indicator;
