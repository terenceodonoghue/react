/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rgba } from 'polished';
import type { FunctionComponent, SVGProps } from 'react';

import type { ReactIcon } from '@terenceodonoghue/react-icons';

export interface IconProps extends SVGProps<SVGSVGElement> {
  backdrop?: boolean;
  color?: string;
  size?: 'compact' | number;
  with: ReactIcon;
}

const Icon: FunctionComponent<IconProps> = ({
  backdrop = false,
  color: iconColor,
  size = backdrop ? 20 : 24,
  with: Svg,
  ...props
}) => {
  const { color } = useTheme();

  return (
    <Svg
      aria-hidden
      color={iconColor}
      css={
        backdrop
          ? {
              borderRadius: '50%',
              padding: size === 'compact' ? 8 : 14,
              height: 'fit-content',
              width: 'fit-content',
              backgroundColor: rgba(iconColor || color.primary, 0.15),
            }
          : undefined
      }
      size={size === 'compact' ? 16 : size}
      {...props}
    />
  );
};

export default Icon;
