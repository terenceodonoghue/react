/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rem } from 'polished';
import { FunctionComponent } from 'react';

import { ReactIcon } from '@terenceodonoghue/react-icons';

import Backdrop from '../atoms/Backdrop.js';
import Card from '../atoms/Card.js';
import mq from '../utils/mq.js';

interface MetricProps {
  backdropColor: string;
  icon: ReactIcon;
  iconColor?: string;
  label: string;
  value: string | number;
}

const Metric: FunctionComponent<MetricProps> = ({
  backdropColor,
  icon: Icon,
  iconColor,
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
        color={backdropColor}
      >
        <Icon color={iconColor} size={20} />
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
        <span
          css={{
            color: color.neutral[600],
            fontSize: rem(15),
            fontWeight: font.weight.regular,
            lineHeight: rem(22),
          }}
        >
          {label}
        </span>
      </div>
    </Card>
  );
};

export default Metric;
