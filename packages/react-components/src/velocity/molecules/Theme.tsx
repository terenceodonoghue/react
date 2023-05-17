/** @jsxImportSource @emotion/react */
import { forwardRef } from 'react';

import Radio, { RadioProps } from '../atoms/Radio.js';

export interface ThemeProps extends RadioProps {
  colors: string[];
  label: string;
}

const Theme = forwardRef<HTMLInputElement, ThemeProps>(
  ({ className, colors, label, name = 'theme', style, ...props }, ref) => (
    <div css={{ minWidth: 120 }} className={className} style={style}>
      <div
        css={{
          display: 'flex',
          height: 65,
          marginBottom: 12,
          borderRadius: 5,
          overflow: 'hidden',
        }}
      >
        {colors.map((backgroundColor) => (
          <div key={backgroundColor} css={{ flex: 1, backgroundColor }} />
        ))}
      </div>
      <Radio label={label} name={name} ref={ref} {...props} />
    </div>
  ),
);

Theme.displayName = 'Theme';

export default Theme;
