/** @jsxImportSource @emotion/react */
import type { FunctionComponent } from 'react';

import Radio, { type RadioProps } from '../atoms/Radio.js';

export interface ThemeCardProps extends RadioProps {
  colors: string[];
  label: string;
}

const ThemeCard: FunctionComponent<ThemeCardProps> = ({
  className,
  colors,
  label,
  name = 'theme',
  style,
  ...props
}) => (
  <div
    css={{ minWidth: 120 }}
    className={className}
    role="presentation"
    style={style}
  >
    <div
      aria-hidden
      css={{
        display: 'flex',
        borderRadius: 5,
        marginBottom: 12,
        height: 65,
        overflow: 'hidden',
      }}
    >
      {colors.map((backgroundColor) => (
        <div key={backgroundColor} css={{ flex: 1, backgroundColor }} />
      ))}
    </div>
    <Radio label={label} name={name} {...props} />
  </div>
);

export default ThemeCard;
