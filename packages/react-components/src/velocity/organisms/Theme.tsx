/** @jsxImportSource @emotion/react */
import type { FunctionComponent } from 'react';

import Card, { type CardProps } from '../atoms/Card.js';
import ThemeCard, { type ThemeCardProps } from '../molecules/ThemeCard.js';
import Text from '../primitives/Text.js';
import mq from '../utils/mq.js';

export interface ThemeProps extends CardProps {
  options: ThemeCardProps[];
}

const Theme: FunctionComponent<ThemeProps> = ({ options = [], ...props }) => (
  <Card heading="Theme" {...props}>
    <Text>Select a color scheme for your Velocity app.</Text>
    <div
      css={mq({
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, 120px)',
        gap: [24, 32],
        marginTop: [24, 32],
      })}
    >
      {options.map((option) => (
        <ThemeCard key={option.label} {...option} />
      ))}
    </div>
  </Card>
);

export default Theme;
