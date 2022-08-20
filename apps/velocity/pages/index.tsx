import { faker } from '@faker-js/faker';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import numeral from 'numeral';
import { rem, rgba } from 'polished';
import { useMemo } from 'react';

import { Flex } from '@terenceodonoghue/react-components/core';
import { Avatar, Card, mq } from '@terenceodonoghue/react-components/velocity';

import Container from '../components/core/Container';

const OperatingScore = dynamic(() => import('../components/OperatingScore'), {
  ssr: false,
});

const IndexPage: NextPage = () => {
  const fixtures = useMemo(() => {
    return [
      {
        avatar: faker.image.avatar(),
        name: 'Bebop',
        vehicle: 'Volvo Intellisafe',
        earnings: 6432,
        distance: 1232,
      },
      {
        avatar: faker.image.avatar(),
        name: 'Gran Tesoro',
        vehicle: 'Chevrolet Bolt',
        earnings: 5342,
        distance: 945,
      },
      {
        avatar: faker.image.avatar(),
        name: 'Belafonte',
        vehicle: 'Infiniti Q50S',
        earnings: 5133,
        distance: 834,
      },
      {
        avatar: faker.image.avatar(),
        name: 'Chester',
        vehicle: 'Audi RS 7',
        earnings: 4755,
        distance: 812,
      },
      {
        avatar: faker.image.avatar(),
        name: 'Expedia',
        vehicle: 'Tesla Model X',
        earnings: 4140,
        distance: 724,
      },
      {
        avatar: faker.image.avatar(),
        name: 'Aeolus',
        vehicle: 'Tesla Model S',
        earnings: 3323,
        distance: 466,
      },
    ];
  }, []);

  return (
    <>
      <Head>
        <title>Velocity | Dashboard</title>
      </Head>
      <Container>
        <Flex css={mq({ flexDirection: ['column', 'column', 'row'] })}>
          <Flex
            css={mq({ flex: 1, flexDirection: ['column', 'row', 'column'] })}
          >
            <Flex css={{ flex: 1 }}>
              <Card css={{ flex: 1 }}>
                <Flex
                  css={mq({
                    flexDirection: ['row', 'column', 'row'],
                    marginLeft: -4,
                    marginRight: -4,
                  })}
                  alignItems="center"
                >
                  <div
                    css={mq({
                      flexShrink: 0,
                      height: [120, 156],
                      width: [180, 255],
                    })}
                  >
                    <OperatingScore />
                  </div>
                  <div
                    css={mq({ marginTop: [0, 12, 0], marginLeft: [20, 0, 60] })}
                  >
                    <h3
                      css={mq({
                        display: ['none', 'none', 'block'],
                        margin: '0 0 13px',
                      })}
                    >
                      Welcome to Velocity
                    </h3>
                    <p
                      css={({ color }) =>
                        mq({
                          color: color.neutral[600],
                          margin: 0,
                          textAlign: ['left', 'center', 'left'],
                        })
                      }
                    >
                      All cars are operating well. There were 1,233 trips since
                      your last login.
                    </p>
                  </div>
                </Flex>
              </Card>
            </Flex>
            <Flex
              css={mq({ flex: 1, flexDirection: ['row', 'column', 'row'] })}
            >
              <Card css={{ flex: 1 }} caption="Vehicles on track" />
              <Card css={{ flex: 1 }} caption="Distance driven" />
            </Flex>
          </Flex>
          <Flex css={{ flex: 1 }}>
            <Card css={{ flex: 1 }} caption="Today's Trips" />
          </Flex>
        </Flex>
        <Card caption="Fleet activity map" />
        <Flex
          css={mq({
            flexDirection: ['column', 'row'],
            flexWrap: ['no-wrap', 'wrap', 'no-wrap'],
          })}
        >
          <Card css={{ flex: 1 }} caption="Top Drivers">
            <div css={{ marginBottom: -12 }}>
              {fixtures.map(
                ({ avatar, distance, earnings, name, vehicle }, i) => (
                  <Flex
                    css={{
                      lineHeight: '1.47em',
                      margin: '12px 0',
                      position: 'relative',
                    }}
                    key={`${earnings}-${distance}`}
                  >
                    <div
                      css={({ color, font }) => ({
                        margin: '0 16px 0 0',
                        '&::after': {
                          alignItems: 'center',
                          background: color.neutral[50],
                          borderRadius: '50%',
                          boxShadow: `0 3px 10px ${rgba(color.primary, 0.3)}`,
                          color: color.neutral[700],
                          content: `'${i + 1}'`,
                          display: 'flex',
                          fontSize: rem(10),
                          fontWeight: font.weight.medium,
                          height: 16,
                          justifyContent: 'center',
                          left: 32,
                          position: 'absolute',
                          top: 0,
                          width: 16,
                        },
                      })}
                    >
                      <Avatar
                        alt={name}
                        size={48}
                        src={avatar}
                        variant="rounded"
                      />
                    </div>
                    <div css={{ flex: 1 }}>
                      <Flex css={{ flex: 1 }} justifyContent="space-between">
                        <span
                          css={({ font }) => ({
                            fontWeight: font.weight.medium,
                          })}
                        >
                          {name}
                        </span>
                        <span>{numeral(earnings).format('$0')}</span>
                      </Flex>
                      <Flex
                        css={({ color }) => ({
                          color: color.neutral[600],
                          flex: 1,
                        })}
                        justifyContent="space-between"
                      >
                        <span>{vehicle}</span>
                        <span>{numeral(distance).format('0,0')} miles</span>
                      </Flex>
                    </div>
                  </Flex>
                ),
              )}
            </div>
          </Card>
          <Card css={{ flex: 1 }} caption="Trips by type" />
          <Card
            css={mq({
              display: ['none', 'block'],
              flex: ['initial', '0 1 100%', 1],
            })}
            caption="Service Reminders"
          />
        </Flex>
      </Container>
    </>
  );
};

export default IndexPage;
