/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rem } from 'polished';
import { FunctionComponent } from 'react';

import { ReactIcon } from '@terenceodonoghue/react-icons';

import Backdrop from '../atoms/Backdrop.js';
import Card from '../atoms/Card.js';
import Text from '../primitives/Text.js';
import mq from '../utils/mq.js';

interface MetricCardProps {
  color?: string;
  icon: ReactIcon;
  label: string;
  value: string | number;
}

const MetricCard: FunctionComponent<MetricCardProps> = ({
  color: iconColor,
  icon: Icon,
  label,
  value,
}) => {
  const { color, font } = useTheme();

  return (
    <Card
      css={mq({
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: ['column', 'row', 'column'],
        padding: ['16px', '32px 24px', '16px 24px'],
      })}
    >
      <Backdrop
        css={mq({ marginBottom: [16, 0, 16], marginRight: [0, 16, 0] })}
        color={iconColor || color.primary}
      >
        <Icon color={iconColor || color.primary} size={20} />
      </Backdrop>
      <div css={{ display: 'flex', flexDirection: 'column' }}>
        <span
          css={mq({
            marginBottom: [6, 0],
            fontSize: [rem(34), rem(48)],
            fontWeight: font.weight.light,
            letterSpacing: -0.6,
            lineHeight: [rem(32), rem(57)],
          })}
        >
          {value}
        </span>
        <Text as="span" variant="p2">
          {label}
        </Text>
      </div>
    </Card>
  );
};

export default MetricCard;
