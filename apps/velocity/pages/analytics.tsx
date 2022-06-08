import { useTheme } from '@emotion/react';
import {
  Check,
  Dynamic,
  Energy,
  Marker,
} from '@terenceodonoghue/react-icons/velocity';
import { NextPage } from 'next';
import Head from 'next/head';
import numeral from 'numeral';
import { em, rgba } from 'polished';
import {
  AreaChart,
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import React from 'react';
import Card from '~/components/core/Card';
import Container from '~/components/core/Container';
import Flex from '~/components/core/Flex';
import mq from '~/components/utils/mq';

const AnalyticsPage: NextPage = () => {
  const theme = useTheme();

  const iconMap = {
    'vehicles-on-track': {
      color: theme.palette.ui.purple,
      component: Check,
    },
    'distance-driven': {
      color: theme.palette.ui.blue,
      component: Marker,
    },
    'energy-consumed': {
      color: theme.palette.ui.blue,
      component: Energy,
    },
    'total-drive-time': {
      color: theme.palette.ui.blue,
      component: Dynamic,
    },
  };

  const renderLegend = ({ payload }) => (
    <ul
      css={{
        display: 'flex',
        listStyleType: 'none',
        justifyContent: 'flex-end',
        marginTop: 0,
        marginRight: -12,
        padding: 0,
      }}
    >
      {payload.map((entry) => (
        <li
          css={mq({
            alignItems: 'center',
            color: theme.palette.neutral[600],
            display: 'flex',
            margin: ['0 6px', '0 12px'],
            '&::before': {
              content: '"\u25CF"',
              color: entry.color,
              display: 'inline-block',
              fontSize: '1.5em',
              marginRight: 8,
            },
          })}
          key={entry.dataKey}
        >
          {entry.value}
        </li>
      ))}
    </ul>
  );

  const yTickFormatter = (value: number): string =>
    value > 999
      ? numeral(Math.abs(value)).format('$0[.]0a')
      : Math.abs(value).toString();

  return (
    <>
      <Head>
        <title>Velocity | Analytics</title>
      </Head>
      <Container heading="Analytics">
        <Flex>
          <Card css={{ flex: 1 }} heading="Revenue">
            <ResponsiveContainer width="100%" height={340}>
              <AreaChart
                data={[
                  {
                    name: 'Mar 1',
                    revenue: 7850,
                    trips: 3900,
                  },
                  {
                    name: 'Mar 8',
                    revenue: 11100,
                    trips: 4700,
                  },
                  {
                    name: 'Mar 15',
                    revenue: 9100,
                    trips: 7150,
                  },
                  {
                    name: 'Mar 22',
                    revenue: 15200,
                    trips: 6400,
                  },
                  {
                    name: 'Mar 29',
                    revenue: 23000,
                    trips: 11000,
                  },
                  {
                    name: 'Apr 5',
                    revenue: 21400,
                    trips: 12500,
                  },
                  {
                    name: 'Apr 12',
                    revenue: 15950,
                    trips: 7000,
                  },
                  {
                    name: 'Apr 19',
                    revenue: 12750,
                    trips: 8250,
                  },
                  {
                    name: 'Apr 26',
                    revenue: 16100,
                    trips: 5850,
                  },
                  {
                    name: 'May 2',
                    revenue: 17600,
                    trips: 13000,
                  },
                  {
                    name: 'May 9',
                    revenue: 23700,
                    trips: 18050,
                  },
                  {
                    name: 'May 16',
                    revenue: 18900,
                    trips: 17200,
                  },
                  {
                    name: 'May 23',
                    revenue: 11300,
                    trips: 2200,
                  },
                ]}
              >
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor={theme.palette.accent}
                      stopOpacity={0.1}
                    />
                    <stop
                      offset="95%"
                      stopColor={theme.palette.accent}
                      stopOpacity={0}
                    />
                  </linearGradient>
                  <linearGradient id="colorTrips" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor={theme.palette.ui.purple}
                      stopOpacity={0.1}
                    />
                    <stop
                      offset="95%"
                      stopColor={theme.palette.ui.purple}
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="revenue"
                  fill="url(#colorRevenue)"
                  fillOpacity={1}
                  name="Revenue"
                  stroke={theme.palette.accent}
                  strokeWidth={2}
                  dot
                />
                <Area
                  dataKey="trips"
                  fill="url(#colorTrips)"
                  fillOpacity={1}
                  name="Trips"
                  stroke={theme.palette.ui.purple}
                  strokeWidth={2}
                  dot
                />
                <CartesianGrid
                  stroke={theme.palette.neutral[700]}
                  strokeDasharray="2 2"
                  strokeOpacity="0.3"
                />
                <Legend
                  align="right"
                  content={renderLegend}
                  iconSize={10}
                  iconType="circle"
                  verticalAlign="top"
                />
                <XAxis
                  dataKey="name"
                  interval="preserveStartEnd"
                  stroke={theme.palette.secondary}
                  tick={{ fill: theme.palette.neutral[500] }}
                  tickLine={false}
                  tickMargin={8.5}
                />
                <YAxis
                  stroke={theme.palette.secondary}
                  tickFormatter={yTickFormatter}
                  tickLine={false}
                  tick={{ fill: theme.palette.neutral[500] }}
                  ticks={[0, 5000, 10000, 15000, 20000, 25000, 30000]}
                  tickMargin={13.5}
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </Flex>
        <Flex css={{ flexWrap: 'wrap' }}>
          {[
            {
              label: 'Vehicles on track',
              value: '$1,428',
            },
            {
              label: 'Distance driven',
              value: '158.3 mi',
            },
            {
              label: 'Energy consumed',
              value: '87.4 kWh',
            },
            {
              label: 'Total drive time',
              value: '24.2 h',
            },
          ].map((metric, index) => {
            const label = metric.label.split(' ').join('-').toLowerCase();
            const IconComponent = iconMap[label].component;

            return (
              <Flex
                css={mq({ flex: ['1 0 50%', '1 0 50%', 1] })}
                // eslint-disable-next-line react/no-array-index-key
                key={`${label}-${index}`}
              >
                <Card
                  css={mq({
                    flex: 1,
                    padding: ['16px', '32px 24px', '16px 24px'],
                  })}
                >
                  <Flex
                    css={{
                      alignItems: 'center',
                      backgroundColor: rgba(theme.palette.ui.purple, 0.15),
                      borderRadius: '50%',
                      height: 48,
                      marginBottom: 16,
                      justifyContent: 'center',
                      width: 48,
                    }}
                  >
                    <IconComponent
                      color={iconMap[label].color}
                      css={{ height: 19, width: 19 }}
                    />
                  </Flex>
                  <span
                    css={({ typography }) =>
                      mq({
                        display: 'inline-block',
                        fontSize: [
                          em(34, typography.fontSize),
                          em(48, typography.fontSize),
                        ],
                        fontWeight: typography.fontWeight.light,
                        letterSpacing: -0.6,
                        lineHeight: em(57, 48),
                      })
                    }
                  >
                    {metric.value}
                  </span>
                  <div
                    css={({ palette }) => ({
                      color: palette.neutral[600],
                      lineHeight: '1.47em',
                    })}
                  >
                    {metric.label}
                  </div>
                </Card>
              </Flex>
            );
          })}
        </Flex>
        <Flex css={mq({ flexDirection: ['column', 'column', 'row'] })}>
          <Card css={{ flex: 1 }} heading="Latest trips" />
          <Card css={mq({ flex: [1, 1, 2] })} heading="Trips by Weekday">
            <ResponsiveContainer width="100%" height={340}>
              <ComposedChart
                data={[
                  {
                    average: 109,
                    name: 'Mon',
                    comfort: 83,
                    premium: 97,
                  },
                  {
                    average: 86,
                    name: 'Tue',
                    comfort: 66,
                    premium: 76,
                  },
                  {
                    average: 102,
                    name: 'Wed',
                    comfort: 78,
                    premium: 90,
                  },
                  {
                    average: 108,
                    name: 'Thu',
                    comfort: 133,
                    premium: 96,
                  },
                  {
                    average: 75,
                    name: 'Fri',
                    comfort: 56,
                    premium: 65,
                  },
                  {
                    average: 56,
                    name: 'Sat',
                    comfort: 65,
                    premium: 47,
                  },
                  {
                    average: 125,
                    name: 'Sun',
                    comfort: 119,
                    premium: 117,
                  },
                ]}
                margin={{
                  top: -3,
                  right: 0,
                  bottom: 2,
                  left: -16,
                }}
                width={500}
              >
                <Bar
                  barSize={7}
                  dataKey="comfort"
                  fill={theme.palette.ui.blue}
                  name="Comfort"
                  radius={5}
                />
                <Bar
                  barSize={7}
                  dataKey="premium"
                  fill={theme.palette.ui.purple}
                  name="Premium"
                  radius={5}
                />
                <CartesianGrid
                  stroke="#8097b1"
                  strokeDasharray="2 2"
                  strokeOpacity="0.3"
                />
                <Legend
                  align="right"
                  content={renderLegend}
                  iconSize={10}
                  iconType="circle"
                  verticalAlign="top"
                />
                <Line
                  dataKey="average"
                  name="Average"
                  stroke={theme.palette.ui.yellow}
                  strokeWidth={2}
                />
                <XAxis
                  dataKey="name"
                  interval="preserveStartEnd"
                  padding={{ left: 17, right: 16 }}
                  stroke={theme.palette.secondary}
                  tick={{ fill: theme.palette.neutral[500] }}
                  tickLine={false}
                  tickMargin={7.5}
                />
                <YAxis
                  tickLine={false}
                  tickMargin={1}
                  stroke={theme.palette.secondary}
                  tick={{ fill: theme.palette.neutral[500] }}
                  ticks={[0, 25, 50, 75, 100, 125, 150]}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </Card>
        </Flex>
      </Container>
    </>
  );
};

export default AnalyticsPage;
