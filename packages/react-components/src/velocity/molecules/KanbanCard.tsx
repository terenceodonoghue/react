/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { linearGradient, transitions } from 'polished';
import type { FunctionComponent } from 'react';

import Card, { CardProps } from '../atoms/Card.js';
import Text from '../primitives/Text.js';

export interface KanbanCardProps extends CardProps {
  color?: string;
  cost: string;
  date: string;
  description: string;
  name: string;
}

const KanbanCard: FunctionComponent<KanbanCardProps> = ({
  color: cardColor,
  cost,
  date,
  description,
  name,
  ...props
}) => {
  const { color, transition } = useTheme();

  return (
    <Card
      css={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: 4,
        borderLeft: 0,
        borderRadius: 5,
        padding: 24,
        backgroundRepeat: 'no-repeat',
        ...linearGradient({
          colorStops: [
            `${cardColor || color.primary} 2px`,
            `${color.neutral[50]} 2px`,
          ],
          fallback: color.neutral[50],
          toDirection: '90deg',
        }),
        ...transitions(['box-shadow'], transition.quickly),
        cursor: 'grab',
        '&:not(:hover)': {
          boxShadow: 'none',
        },
      }}
      {...props}
    >
      <Text as="span" variant="h4">
        {name}
      </Text>
      <Text as="span" variant="h4" align="right">
        {cost}
      </Text>
      <Text as="span" variant="p2" truncate>
        {description}
      </Text>
      <Text as="span" variant="p2" align="right">
        {date}
      </Text>
    </Card>
  );
};

export default KanbanCard;
