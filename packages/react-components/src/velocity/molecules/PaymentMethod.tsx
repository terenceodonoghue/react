/** @jsxImportSource @emotion/react */
import { type CSSObject, useTheme } from '@emotion/react';
import { FunctionComponent, useMemo } from 'react';

import type { ReactIcon } from '@terenceodonoghue/react-icons';
import {
  ApplePay,
  Mastercard,
  PayPalLogo,
  VisaLogo,
} from '@terenceodonoghue/react-icons/brands';

import Box, { type BoxProps } from '../atoms/Box.js';
import mq from '../utils/mq.js';

export interface PaymentMethodProps extends BoxProps {
  selected?: boolean;
  type: 'applepay' | 'mastercard' | 'paypal' | 'visa';
}

const IntegrationCard: FunctionComponent<PaymentMethodProps> = ({
  selected = false,
  type,
  ...props
}) => {
  const { color } = useTheme();

  const css: Record<string, CSSObject> = {
    applepay: {
      filter: selected ? 'grayscale(1) invert(1)' : 'grayscale(1)',
    },
    mastercard: {
      filter: selected ? 'grayscale(1) invert(1)' : 'grayscale(1)',
    },
    paypal: {
      filter: selected ? 'brightness(0) invert(1)' : 'grayscale(1)',
    },
    visa: {
      filter: selected ? 'brightness(0) invert(1)' : 'grayscale(1)',
    },
  };

  const Icon: ReactIcon | null = useMemo(() => {
    if (type === 'applepay') {
      return ApplePay;
    }

    if (type === 'mastercard') {
      return Mastercard;
    }

    if (type === 'paypal') {
      return PayPalLogo;
    }

    if (type === 'visa') {
      return VisaLogo;
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
      px={32}
      py={0}
      {...props}
    >
      {Icon ? <Icon css={css[type]} size="100%" /> : undefined}
    </Box>
  );
};

export default IntegrationCard;
