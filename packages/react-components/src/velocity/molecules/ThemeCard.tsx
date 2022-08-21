/** @jsxImportSource @emotion/react */
import { FunctionComponent } from 'react';

import Radio, { RadioProps } from '../atoms/Radio.js';

interface ThemeCardProps extends RadioProps {
  colors: string[];
  label: string;
}

const ThemeCard: FunctionComponent<ThemeCardProps> = ({
  colors,
  label,
  name = 'theme',
  ...props
}) => (
  <div css={{ minWidth: 120 }}>
    <div
      css={{
        display: 'flex',
        borderRadius: 5,
        margin: '12px 0',
        height: 65,
        overflow: 'hidden',
      }}
    >
      {colors.map((backgroundColor) => (
        <div css={{ flex: 1, backgroundColor }} />
      ))}
    </div>
    <Radio label={label} name={name} {...props} />
  </div>
);

export default ThemeCard;
