/** @jsxImportSource @emotion/react */
import { CSSObject, useTheme } from '@emotion/react';
import { useMemo } from 'react';

import { ReactIcon } from '@terenceodonoghue/react-icons';
import {
  ApplePay,
  Mastercard,
  PayPalLogo,
  VisaLogo,
} from '@terenceodonoghue/react-icons/brands';

import Pane, { PaneProps } from '../primitives/Pane.js';
import mq from '../utils/mq.js';

export interface PaymentMethodProps extends PaneProps {
  selected?: boolean;
  variant: 'applepay' | 'mastercard' | 'paypal' | 'visa';
}

const PaymentMethod = ({
  selected = false,
  variant,
  ...props
}: PaymentMethodProps) => {
  const { color } = useTheme();

  const variants: Record<typeof variant, CSSObject> = {
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
    if (variant === 'applepay') {
      return ApplePay;
    }

    if (variant === 'mastercard') {
      return Mastercard;
    }

    if (variant === 'paypal') {
      return PayPalLogo;
    }

    if (variant === 'visa') {
      return VisaLogo;
    }

    return null;
  }, [variant]);

  return (
    <Pane
      css={mq({
        width: [119, 140],
        height: [64, 75],
        backgroundColor: selected ? color.primary : undefined,
        borderColor: selected ? color.primary : color.secondary,
      })}
      px={32}
      py={0}
      {...props}
    >
      {Icon ? (
        <Icon aria-hidden css={variants[variant]} size="100%" />
      ) : undefined}
    </Pane>
  );
};

export default PaymentMethod;
