/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { linearGradient, transitions } from 'polished';
import { FunctionComponent } from 'react';

import Card from '../atoms/Card.js';
import Text from '../primitives/Text.js';

interface KanbanCardProps {
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
}) => {
  const { color, transition } = useTheme();

  return (
    <Card
      css={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
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
