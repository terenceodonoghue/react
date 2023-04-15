/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rem } from 'polished';
import type { FunctionComponent } from 'react';

import type { ReactIcon } from '@terenceodonoghue/react-icons';

import Card, { type CardProps } from '../atoms/Card.js';
import Icon from '../atoms/Icon.js';
import Text from '../primitives/Text.js';
import mq from '../utils/mq.js';

export interface MetricCardProps extends CardProps {
  color?: string;
  icon: ReactIcon;
  label: string;
  value: string | number;
}

const MetricCard: FunctionComponent<MetricCardProps> = ({
  color: iconColor,
  icon: Svg,
  label,
  value,
}) => {
  const { color } = useTheme();

  return (
    <Card
      css={mq({
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: ['column', 'row', 'column'],
        padding: ['16px', '32px 24px', '16px 24px'],
      })}
    >
      <Icon
        backdrop
        color={iconColor || color.primary}
        css={mq({ marginBottom: [16, 0, 16], marginRight: [0, 16, 0] })}
        size={20}
        with={Svg}
      />

      <div css={{ display: 'flex', flexDirection: 'column' }}>
        <Text
          css={mq({
            marginBottom: [6, 0],
            fontSize: [rem(34), rem(48)],
            lineHeight: [rem(32), rem(57)],
          })}
          as="span"
          variant="h1"
        >
          {value}
        </Text>
        <Text as="span" variant="p2">
          {label}
        </Text>
      </div>
    </Card>
  );
};

export default MetricCard;
