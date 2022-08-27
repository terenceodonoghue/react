import { Interpolation, Theme, useTheme } from '@emotion/react';
import { faker } from '@faker-js/faker';
import { NextPage } from 'next';
import Head from 'next/head';

import {
  Avatar,
  Box,
  Card,
  List,
  TripInfo,
} from '@terenceodonoghue/react-components/velocity';
import { Mastercard } from '@terenceodonoghue/react-icons/brands';

import Container from '../components/core/Container';
import { ApplePayIcon, PayPalIcon, VisaIcon } from '../components/icons';

const MapPage: NextPage = () => {
  const theme = useTheme();

  const paymentMethodIcon: Interpolation<Theme> = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 75,
    width: 140,
  };

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
                css={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignContent: 'flex-start',
                  justifyContent: 'center',
                  gap: 12,
                }}
              >
                <Box css={paymentMethodIcon}>
                  <PayPalIcon
                    color={theme.color.neutral[900]}
                    css={{ height: 25 }}
                  />
                </Box>
                <Box
                  css={({ color }) => [
                    paymentMethodIcon,
                    {
                      backgroundColor: color.primary,
                      borderColor: color.primary,
                    },
                  ]}
                >
                  <VisaIcon
                    color={theme.color.neutral[50]}
                    css={{ height: 24 }}
                  />
                </Box>
                <Box css={paymentMethodIcon}>
                  <Mastercard size="100%" />
                </Box>
                <Box css={paymentMethodIcon}>
                  <ApplePayIcon
                    color={theme.color.neutral[900]}
                    css={{ height: 25 }}
                  />
                </Box>
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
