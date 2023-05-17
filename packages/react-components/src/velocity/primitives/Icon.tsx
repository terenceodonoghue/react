/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rgba } from 'polished';

import { ReactIconProps } from '@terenceodonoghue/react-icons';
import * as VelocityIcons from '@terenceodonoghue/react-icons/velocity';

const isVelocityIcon = (key: string): key is keyof typeof VelocityIcons =>
  Object.keys(VelocityIcons).includes(key);

export interface IconProps extends ReactIconProps {
  backdrop?: boolean;
  color?: string;
  size?: 'compact' | number;
  with: Lowercase<keyof typeof VelocityIcons>;
}

const Icon = ({
  backdrop = false,
  color: iconColor,
  size = backdrop ? 20 : 24,
  with: name,
  ...props
}: IconProps) => {
  const { color } = useTheme();
  const key = name ? name.charAt(0).toUpperCase() + name.slice(1) : '';

  if (isVelocityIcon(key)) {
    const Svg = VelocityIcons[key];

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
  }

  return null;
};

export default Icon;
