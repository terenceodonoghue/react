import { Interpolation, Theme, useTheme } from '@emotion/react';
import { faker } from '@faker-js/faker';
import { NextPage } from 'next';
import Head from 'next/head';
import { rem } from 'polished';

import {
  Avatar,
  Card,
  TripInfo,
} from '@terenceodonoghue/react-components/velocity';

import Container from '../components/core/Container';
import {
  ApplePayIcon,
  MastercardIcon,
  PayPalIcon,
  VisaIcon,
} from '../components/icons';

const fixtures = {
  avatar: faker.image.avatar(),
  city: faker.address.city(),
  email: faker.internet.exampleEmail(),
  name: faker.name.fullName(),
  phone: faker.phone.phoneNumberFormat(),
  state: faker.address.stateAbbr(),
};

const MapPage: NextPage = () => {
  const theme = useTheme();

  const metric: Interpolation<Theme> = {
    flex: 1,
    margin: '24px 24px 0',
  };

  const metricLabel: Interpolation<Theme> = ({ color }) => ({
    color: color.neutral[600],
  });

  const metricValue: Interpolation<Theme> = ({ font }) => ({
    display: 'block',
    fontWeight: font.weight.medium,
  });

  const passengerLabel: Interpolation<Theme> = ({ color }) => ({
    color: color.neutral[500],
    fontSize: rem(12),
    fontWeight: theme.font.weight.medium,
    letterSpacing: 1.125,
    marginBottom: 8,
    marginTop: 16,
    textTransform: 'uppercase',
  });

  const passengerValue: Interpolation<Theme> = {
    margin: 0,
    maxWidth: 256,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };

  const paymentMethodIcon: Interpolation<Theme> = ({ color }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: color.secondary,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    height: 75,
    margin: 12,
    padding: 8,
    width: 140,
  });

  return (
    <>
      <Head>
        <title>Velocity | Map</title>
      </Head>
      <Container>
        <div css={{ display: 'flex' }}>
          <Card
            css={{ flexBasis: 655, flexShrink: 0 }}
            caption="Passenger info"
          >
            <div css={{ display: 'flex' }}>
              <div css={{ flexBasis: 256, flexShrink: 0 }}>
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
                    src={fixtures.avatar}
                    variant="rounded"
                  />
                  <div css={{ marginLeft: 16 }}>
                    <span
                      css={({ font }) => ({
                        display: 'block',
                        fontWeight: font.weight.medium,
                      })}
                    >
                      {fixtures.name}
                    </span>
                    <span css={({ color }) => ({ color: color.neutral[600] })}>
                      4 interactions
                    </span>
                  </div>
                </div>
                <dl>
                  <dt css={passengerLabel}>Email</dt>
                  <dd css={passengerValue}>{fixtures.email}</dd>
                  <dt css={passengerLabel}>Phone</dt>
                  <dd css={passengerValue}>+{fixtures.phone}</dd>
                  <dt css={passengerLabel}>Location</dt>
                  <dd css={passengerValue}>
                    {fixtures.city}, {fixtures.state}
                  </dd>
                </dl>
              </div>
              <div
                css={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignContent: 'flex-start',
                  justifyContent: 'center',
                  margin: -12,
                }}
              >
                <div css={paymentMethodIcon}>
                  <PayPalIcon
                    color={theme.color.neutral[900]}
                    css={{ height: 25 }}
                  />
                </div>
                <div
                  css={({ color }) => [
                    paymentMethodIcon,
                    {
                      backgroundColor: color.primary,
                    },
                  ]}
                >
                  <VisaIcon
                    color={theme.color.neutral[50]}
                    css={{ height: 24 }}
                  />
                </div>
                <div css={paymentMethodIcon}>
                  <MastercardIcon
                    color={theme.color.neutral[900]}
                    css={{ height: 59 }}
                  />
                </div>
                <div css={paymentMethodIcon}>
                  <ApplePayIcon
                    color={theme.color.neutral[900]}
                    css={{ height: 25 }}
                  />
                </div>
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
            <Card css={{ flex: 1 }} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default MapPage;
