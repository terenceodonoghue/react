/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rem } from 'polished';
import { FunctionComponent } from 'react';

import { ReactIcon } from '@terenceodonoghue/react-icons';

import Backdrop from '../atoms/Backdrop.js';
import Card from '../atoms/Card.js';

interface MetricProps {
  backdropColor: string;
  compact?: boolean;
  icon: ReactIcon;
  iconColor?: string;
  label: string;
  value: string | number;
}

const Metric: FunctionComponent<MetricProps> = ({
  backdropColor,
  compact,
  icon: Icon,
  iconColor,
  label,
  value,
}) => {
  const { color, font } = useTheme();

  return (
    <Card css={{ padding: '16px 24px' }}>
      {Icon ? (
        <Backdrop
          css={{ marginBottom: 16, marginRight: 16 }}
          color={backdropColor}
        >
          <Icon color={iconColor} size={20} />
        </Backdrop>
      ) : undefined}
      <div css={{ display: 'flex', flexDirection: 'column' }}>
        <span
          css={{
            fontSize: rem(48),
            fontWeight: font.weight.light,
            letterSpacing: -0.6,
            lineHeight: rem(57),
          }}
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
