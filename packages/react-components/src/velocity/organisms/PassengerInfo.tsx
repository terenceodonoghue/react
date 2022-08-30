/** @jsxImportSource @emotion/react */
import type { FunctionComponent } from 'react';

import Card, { type CardProps } from '../atoms/Card.js';
import List from '../atoms/List.js';
import Customer, { type CustomerProps } from '../molecules/Customer.js';
import PaymentMethod from '../molecules/PaymentMethod.js';
import mq from '../utils/mq.js';

export interface PassengerInfoProps extends CardProps, CustomerProps {
  city: string;
  email: string;
  paymentMethod: 'applepay' | 'mastercard' | 'paypal' | 'visa';
  phoneNumber: string;
  state: string;
}

const PassengerInfo: FunctionComponent<PassengerInfoProps> = ({
  avatar,
  city,
  email,
  interactions,
  name,
  paymentMethod,
  phoneNumber,
  state,
  ...props
}) => (
  <Card caption="Passenger info" {...props}>
    <div css={{ display: 'flex', gap: 40 }}>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          overflow: 'hidden',
        }}
      >
        <Customer avatar={avatar} name={name} interactions={interactions} />
        <List
          items={[
            { label: 'email', value: email },
            {
              label: 'phone',
              value: phoneNumber,
            },
            {
              label: 'location',
              value: `${city}, ${state}`,
            },
          ]}
        />
      </div>
      <div
        css={mq({
          display: 'grid',
          gridTemplateColumns: ['repeat(4, 1fr)', 'repeat(2, 1fr)'],
          gridAutoRows: 'min-content',
          gap: [12, 24],
          margin: '0 auto',
        })}
      >
        <PaymentMethod type="paypal" selected={paymentMethod === 'paypal'} />
        <PaymentMethod type="visa" selected={paymentMethod === 'visa'} />
        <PaymentMethod
          type="mastercard"
          selected={paymentMethod === 'mastercard'}
        />
        <PaymentMethod
          type="applepay"
          selected={paymentMethod === 'applepay'}
        />
      </div>
    </div>
  </Card>
);

export default PassengerInfo;
