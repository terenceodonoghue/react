import { faker } from '@faker-js/faker';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import numeral from 'numeral';
import { em, rgba } from 'polished';
import React, { useMemo } from 'react';
import Avatar from '../components/core/Avatar';
import Card from '../components/core/Card';
import Container from '../components/core/Container';
import Flex from '../components/core/Flex';
import mq from '../components/utils/mq';

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
                    alignItems: 'center',
                    flexDirection: ['row', 'column', 'row'],
                    marginLeft: -4,
                    marginRight: -4,
                  })}
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
                    <h2
                      css={({ typography }) =>
                        mq({
                          display: ['none', 'none', 'block'],
                          margin: '0 0 13px',
                          width: 135,
                          fontSize: em(28, typography.fontSize),
                          fontWeight: typography.fontWeight.light,
                          lineHeight: '1.14em',
                        })
                      }
                    >
                      Welcome to Velocity
                    </h2>
                    <p
                      css={({ palette }) =>
                        mq({
                          color: palette.neutral[600],
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
              <Card css={{ flex: 1 }} heading="Vehicles on track" />
              <Card css={{ flex: 1 }} heading="Distance driven" />
            </Flex>
          </Flex>
          <Flex css={{ flex: 1 }}>
            <Card css={{ flex: 1 }} heading="Today's Trips" />
          </Flex>
        </Flex>
        <Card heading="Fleet activity map" />
        <Flex
          css={mq({
            flexDirection: ['column', 'row'],
            flexWrap: ['no-wrap', 'wrap', 'no-wrap'],
          })}
        >
          <Card css={{ flex: 1 }} heading="Top Drivers">
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
                      css={({ palette, typography }) => ({
                        margin: '0 16px 0 0',
                        '&::after': {
                          alignItems: 'center',
                          background: palette.neutral[50],
                          borderRadius: '50%',
                          boxShadow: `0 3px 10px ${rgba(palette.accent, 0.3)}`,
                          color: palette.neutral[700],
                          content: `'${i + 1}'`,
                          display: 'flex',
                          fontSize: em(10, typography.fontSize),
                          fontWeight: typography.fontWeight.medium,
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
                        css={{ height: 48, verticalAlign: 'middle', width: 48 }}
                        src={avatar}
                        variant="rounded"
                      />
                    </div>
                    <div css={{ flex: 1 }}>
                      <Flex css={{ flex: 1, justifyContent: 'space-between' }}>
                        <span
                          css={({ typography }) => ({
                            fontWeight: typography.fontWeight.medium,
                          })}
                        >
                          {name}
                        </span>
                        <span>{numeral(earnings).format('$0')}</span>
                      </Flex>
                      <Flex
                        css={({ palette }) => ({
                          color: palette.neutral[600],
                          flex: 1,
                          justifyContent: 'space-between',
                        })}
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
          <Card css={{ flex: 1 }} heading="Trips by type" />
          <Card
            css={mq({
              display: ['none', 'block'],
              flex: ['initial', '0 1 100%', 1],
            })}
            heading="Service Reminders"
          />
        </Flex>
      </Container>
    </>
  );
};

export default IndexPage;
