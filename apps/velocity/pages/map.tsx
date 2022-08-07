import { Interpolation, Theme, useTheme } from '@emotion/react';
import { Flex } from '@terenceodonoghue/react-components/core';
import { Avatar, Card } from '@terenceodonoghue/react-components/velocity';
import { Check, Marker } from '@terenceodonoghue/react-icons/velocity';
import { faker } from '@faker-js/faker';
import { NextPage } from 'next';
import Head from 'next/head';
import { em, rgba } from 'polished';
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
  name: faker.name.findName(),
  phone: faker.phone.phoneNumberFormat(),
  state: faker.address.stateAbbr(),
};

const MapPage: NextPage = () => {
  const theme = useTheme();

  const metric: Interpolation<Theme> = {
    flex: 1,
    margin: '24px 24px 0',
  };

  const metricLabel: Interpolation<Theme> = ({ palette }) => ({
    color: palette.neutral[600],
  });

  const metricValue: Interpolation<Theme> = ({ typography }) => ({
    display: 'block',
    fontWeight: typography.fontWeight.medium,
  });

  const passengerLabel: Interpolation<Theme> = ({ palette, typography }) => ({
    color: palette.neutral[500],
    fontSize: em(12, typography.fontSize),
    fontWeight: theme.typography.fontWeight.medium,
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

  const paymentMethodIcon: Interpolation<Theme> = ({ palette }) => ({
    borderColor: palette.secondary,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    height: 75,
    margin: 12,
    padding: 8,
    width: 140,
  });

  const streetAddress: Interpolation<Theme> = ({ palette }) => ({
    color: palette.neutral[600],
  });

  const suburb: Interpolation<Theme> = ({ typography }) => ({
    display: 'block',
    fontWeight: typography.fontWeight.medium,
    margin: 0,
  });

  const tripIcon: Interpolation<Theme> = {
    alignItems: 'center',
    borderRadius: '50%',
    height: 32,
    justifyContent: 'center',
    margin: '0 8px',
    width: 32,
  };

  return (
    <>
      <Head>
        <title>Velocity | Map</title>
      </Head>
      <Container>
        <Flex>
          <Card
            css={{ flexBasis: 655, flexShrink: 0 }}
            heading="Passenger info"
          >
            <Flex>
              <div css={{ flexBasis: 256, flexShrink: 0 }}>
                <Flex css={{ marginBottom: 24 }} alignItems="center">
                  <Avatar
                    alt={faker.name.findName()}
                    size={48}
                    src={fixtures.avatar}
                    variant="rounded"
                  />
                  <div css={{ marginLeft: 16 }}>
                    <span
                      css={({ typography }) => ({
                        display: 'block',
                        fontWeight: typography.fontWeight.medium,
                      })}
                    >
                      {fixtures.name}
                    </span>
                    <span
                      css={({ palette }) => ({ color: palette.neutral[600] })}
                    >
                      4 interactions
                    </span>
                  </div>
                </Flex>
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
              <Flex
                css={{
                  alignContent: 'flex-start',
                  margin: -12,
                }}
                justifyContent="center"
                wrap="wrap"
              >
                <Flex
                  css={paymentMethodIcon}
                  alignItems="center"
                  justifyContent="center"
                >
                  <PayPalIcon
                    color={theme.palette.neutral[900]}
                    css={{ height: 25 }}
                  />
                </Flex>
                <Flex
                  css={({ palette }) => [
                    paymentMethodIcon,
                    {
                      backgroundColor: palette.accent,
                    },
                  ]}
                  alignItems="center"
                  justifyContent="center"
                >
                  <VisaIcon
                    color={theme.palette.neutral[50]}
                    css={{ height: 24 }}
                  />
                </Flex>
                <Flex
                  css={paymentMethodIcon}
                  alignItems="center"
                  justifyContent="center"
                >
                  <MastercardIcon
                    color={theme.palette.neutral[900]}
                    css={{ height: 59 }}
                  />
                </Flex>
                <Flex
                  css={paymentMethodIcon}
                  alignItems="center"
                  justifyContent="center"
                >
                  <ApplePayIcon
                    color={theme.palette.neutral[900]}
                    css={{ height: 25 }}
                  />
                </Flex>
              </Flex>
            </Flex>
          </Card>
          <Flex css={{ flexGrow: 1 }} direction="column">
            <Card>
              <Flex css={{ margin: '0 -8px 12px' }} alignItems="center">
                <Flex
                  css={[
                    tripIcon,
                    ({ palette }) => ({
                      backgroundColor: rgba(palette.ui.blue, 0.2),
                    }),
                  ]}
                  role="presentation"
                >
                  <Check
                    css={{ height: 16, width: 16 }}
                    fill={theme.palette.ui.blue}
                  />
                </Flex>
                <span
                  css={({ palette }) => ({
                    borderColor: palette.primary,
                    borderStyle: 'solid',
                    borderWidth: 1,
                    flexGrow: 1,
                    maxWidth: 'calc(50% - 56px)',
                  })}
                  role="presentation"
                />
                <Flex
                  css={[
                    tripIcon,
                    ({ palette }) => ({
                      backgroundColor: rgba(palette.ui.green, 0.2),
                    }),
                  ]}
                  role="presentation"
                >
                  <Marker
                    color={theme.palette.ui.green}
                    css={{ height: 16, width: 16 }}
                  />
                </Flex>
              </Flex>
              <Flex
                css={{
                  marginBottom: 32,
                }}
                wrap="wrap"
              >
                <div css={{ flex: 1 }}>
                  <span css={suburb}>Jackson Heights</span>
                  <span css={streetAddress}>37-27 74th Street</span>
                </div>
                <div css={{ flex: 1 }}>
                  <span css={suburb}>Greenpoint</span>
                  <span css={streetAddress}>81 Gate St Brooklyn</span>
                </div>
              </Flex>
              <Flex
                css={({ palette }) => ({
                  margin: '0 -24px',
                  '&::before': {
                    backgroundColor: palette.neutral[300],
                    content: '""',
                    height: 1,
                    width: '100%',
                  },
                })}
                wrap="wrap"
              >
                <div css={metric}>
                  <span css={metricValue}>12.3 km</span>
                  <span css={metricLabel}>Distance</span>
                </div>
                <div css={metric}>
                  <span css={metricValue}>42 min</span>
                  <span css={metricLabel}>Time</span>
                </div>
                <div css={metric}>
                  <span css={metricValue}>${(34.2).toFixed(2)}</span>
                  <span css={metricLabel}>Price</span>
                </div>
                <div css={metric}>
                  <span css={metricValue}>12.4 kWh</span>
                  <span css={metricLabel}>Energy</span>
                </div>
              </Flex>
            </Card>
            <Card css={{ flex: 1 }} />
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default MapPage;
