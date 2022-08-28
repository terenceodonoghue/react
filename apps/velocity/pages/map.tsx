import { faker } from '@faker-js/faker';
import { NextPage } from 'next';
import Head from 'next/head';

import {
  Avatar,
  Card,
  List,
  mq,
  PaymentMethod,
  TripInfo,
} from '@terenceodonoghue/react-components/velocity';

import Container from '../components/core/Container';

const MapPage: NextPage = () => (
  <>
    <Head>
      <title>Velocity | Map</title>
    </Head>
    <Container>
      <div
        css={mq({
          display: 'flex',
          flexDirection: ['column-reverse', 'column-reverse', 'row'],
        })}
      >
        <Card css={{ flexGrow: 2 }} caption="Passenger info">
          <div css={{ display: 'flex', gap: 40 }}>
            <div css={{ overflow: 'hidden' }}>
              <div
                css={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: 24,
                }}
              >
                <Avatar
                  alt={faker.name.fullName()}
                  size={48}
                  src={faker.image.avatar()}
                  variant="rounded"
                />
                <div css={{ marginLeft: 16 }}>
                  <span
                    css={({ font }) => ({
                      display: 'block',
                      fontWeight: font.weight.medium,
                    })}
                  >
                    {faker.name.fullName()}
                  </span>
                  <span css={({ color }) => ({ color: color.neutral[600] })}>
                    4 interactions
                  </span>
                </div>
              </div>
              <List
                items={[
                  { label: 'email', value: faker.internet.exampleEmail() },
                  {
                    label: 'phone',
                    value: faker.phone.number('+144–####–####'),
                  },
                  {
                    label: 'location',
                    value: `${faker.address.cityName()}, ${faker.address.stateAbbr()}`,
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
              <PaymentMethod type="paypal" />
              <PaymentMethod type="visa" selected />
              <PaymentMethod type="mastercard" />
              <PaymentMethod type="applepay" />
            </div>
          </div>
        </Card>
        <div css={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <TripInfo
            origin={faker.address.city()}
            originAddress={faker.address.streetAddress()}
            destination={faker.address.city()}
            destinationAddress={faker.address.streetAddress()}
            distance="12.3km"
            time="42 min"
            price="$34.20"
            energy="12.4 kWh"
          />
          <Card css={mq({ display: ['none', 'none', 'block'], flex: 1 })} />
        </div>
      </div>
    </Container>
  </>
);

export default MapPage;
