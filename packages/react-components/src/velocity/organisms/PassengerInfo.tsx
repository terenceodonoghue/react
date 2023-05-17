/** @jsxImportSource @emotion/react */
import Article from '../atoms/Article.js';
import Avatar from '../atoms/Avatar.js';
import List from '../atoms/List.js';
import Section, { SectionProps } from '../atoms/Section.js';
import PaymentMethod from '../molecules/PaymentMethod.js';
import mq from '../utils/mq.js';

export interface PassengerInfoProps extends SectionProps {
  avatar: string;
  city: string;
  email: string;
  interactions: number;
  name: string;
  paymentMethod: 'applepay' | 'mastercard' | 'paypal' | 'visa';
  phoneNumber: string;
  state: string;
}

const PassengerInfo = ({
  avatar,
  city,
  email,
  interactions,
  name,
  paymentMethod,
  phoneNumber,
  state,
  ...props
}: PassengerInfoProps) => (
  <Section heading="Passenger info" {...props}>
    <div css={{ display: 'flex', gap: 40 }}>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          overflow: 'hidden',
        }}
      >
        <Article
          text={[
            name,
            `${interactions} interaction${interactions === 1 ? '' : 's'}`,
          ]}
        >
          <Avatar alt={`${name}'s avatar`} size={48} src={avatar} />
        </Article>
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
        <PaymentMethod variant="paypal" selected={paymentMethod === 'paypal'} />
        <PaymentMethod variant="visa" selected={paymentMethod === 'visa'} />
        <PaymentMethod
          variant="mastercard"
          selected={paymentMethod === 'mastercard'}
        />
        <PaymentMethod
          variant="applepay"
          selected={paymentMethod === 'applepay'}
        />
      </div>
    </div>
  </Section>
);

export default PassengerInfo;
