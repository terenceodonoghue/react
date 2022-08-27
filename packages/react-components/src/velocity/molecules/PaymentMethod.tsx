/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { FunctionComponent, useMemo } from 'react';

import type { ReactIcon } from '@terenceodonoghue/react-icons';
import { ApplePay, Mastercard } from '@terenceodonoghue/react-icons/brands';

import Box, { type BoxProps } from '../atoms/Box.js';
import mq from '../utils/mq.js';

export interface PaymentMethodProps extends BoxProps {
  selected?: boolean;
  type: 'applepay' | 'mastercard';
}

const IntegrationCard: FunctionComponent<PaymentMethodProps> = ({
  selected = false,
  type,
  ...props
}) => {
  const { color } = useTheme();

  const Icon: ReactIcon | null = useMemo(() => {
    if (type === 'applepay') {
      return ApplePay;
    }

    if (type === 'mastercard') {
      return Mastercard;
    }

    return null;
  }, [type]);

  return (
    <Box
      css={mq({
        borderColor: selected ? color.primary : color.secondary,
        height: [64, 75],
        width: [119, 140],
        backgroundColor: selected ? color.primary : undefined,
      })}
      p={0}
      {...props}
    >
      {Icon ? (
        <Icon
          css={{
            filter: selected ? 'grayscale(1) invert(1)' : 'grayscale(1)',
          }}
          size="100%"
        />
      ) : undefined}
    </Box>
  );
};

export default IntegrationCard;
