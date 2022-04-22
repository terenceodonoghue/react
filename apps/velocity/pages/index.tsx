import { useTheme } from '@emotion/react';
import faker from 'faker';
import { NextPage } from 'next';
import Head from 'next/head';
import numeral from 'numeral';
import { em, rgba } from 'polished';
import React, { ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Pie, PieChart, PieLabelRenderProps } from 'recharts';
import Avatar from '~/components/core/Avatar';
import Card from '~/components/core/Card';
import Container from '~/components/core/Container';
import Flex from '~/components/core/Flex';
import { TABLET } from '~/components/utils/breakpoints';
import mq from '~/components/utils/mq';

const fixtures = {
  drivers: Array.from(Array(6)).map(() => faker.image.avatar()),
};

const IndexPage: NextPage = () => {
  const isMobile = useMediaQuery({
    maxWidth: TABLET - 1,
  });

  const theme = useTheme();

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
                  <PieChart
                    height={isMobile ? 120 : 156}
                    width={isMobile ? 160 : 225}
                  >
                    <Pie
                      cy={isMobile ? 80 : 100}
                      data={Array(isMobile ? 27 : 41)
                        .fill(isMobile ? 27 : 41)
                        .map(() => ({
                          name: 'score',
                          value: 1,
                          fill: theme.palette.secondary,
                        }))}
                      dataKey="value"
                      innerRadius={isMobile ? 46 : 66}
                      outerRadius={isMobile ? 49 : 69}
                      startAngle={190}
                      paddingAngle={isMobile ? 5 : 3}
                      endAngle={-10}
                    />
                    <Pie
                      cy={isMobile ? 80 : 100}
                      data={Array(isMobile ? 27 : 41)
                        .fill(isMobile ? 27 : 41)
                        .map((_, i) => ({
                          name: 'score',
                          value: 1,
                          fill: (() => {
                            const value = i + 1;
                            if (value + (1 % 2)) {
                              if (value <= (isMobile ? 22 : 33)) {
                                return theme.palette.accent;
                              }

                              return '#e0e7ff';
                            }

                            return theme.palette.neutral[50];
                          })(),
                        }))}
                      dataKey="value"
                      paddingAngle={isMobile ? 5 : 3}
                      innerRadius={isMobile ? 55 : 75}
                      outerRadius={isMobile ? 81 : 101}
                      startAngle={190}
                      endAngle={-10}
                      label={({
                        cx,
                        cy,
                        index,
                      }: PieLabelRenderProps): ReactNode =>
                        index === 0 ? (
                          <>
                            <text
                              fill="#2e384d"
                              fontFamily="Rubik-Light, Rubik"
                              fontSize={isMobile ? 36 : 48}
                              fontWeight="300"
                              letterSpacing="-0.600000024"
                              x={cx}
                              y={(cy as number) - 5}
                            >
                              <tspan textAnchor="middle">86</tspan>
                            </text>
                            <text
                              dominantBaseline="central"
                              fill="#8798ad"
                              fontFamily="Rubik-Regular, Rubik"
                              fontSize="13"
                              fontWeight="normal"
                              letterSpacing="1.213333"
                            >
                              <tspan dy={15} textAnchor="middle" x={cx} y={cy}>
                                OPERATING
                              </tspan>
                              <tspan dy={30} textAnchor="middle" x={cx} y={cy}>
                                SCORE
                              </tspan>
                            </text>
                          </>
                        ) : null
                      }
                      labelLine={false}
                    />
                  </PieChart>
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
              {[
                {
                  src: fixtures.drivers[0],
                  name: 'Bebop',
                  vehicle: 'Volvo Intellisafe',
                  earnings: 6432,
                  distance: 1232,
                },
                {
                  src: fixtures.drivers[1],
                  name: 'Gran Tesoro',
                  vehicle: 'Chevrolet Bolt',
                  earnings: 5342,
                  distance: 945,
                },
                {
                  src: fixtures.drivers[2],
                  name: 'Belafonte',
                  vehicle: 'Infiniti Q50S',
                  earnings: 5133,
                  distance: 834,
                },
                {
                  src: fixtures.drivers[3],
                  name: 'Chester',
                  vehicle: 'Audi RS 7',
                  earnings: 4755,
                  distance: 812,
                },
                {
                  src: fixtures.drivers[4],
                  name: 'Expedia',
                  vehicle: 'Tesla Model X',
                  earnings: 4140,
                  distance: 724,
                },
                {
                  src: fixtures.drivers[5],
                  name: 'Aeolus',
                  vehicle: 'Tesla Model S',
                  earnings: 3323,
                  distance: 466,
                },
              ].map(({ distance, earnings, name, src, vehicle }, i) => (
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
                      alt={faker.name.findName()}
                      css={{ height: 48, verticalAlign: 'middle', width: 48 }}
                      src={src}
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
              ))}
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
