import { useTheme } from '@emotion/react';
import { NextPage } from 'next';
import Head from 'next/head';
import numeral from 'numeral';
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

import {
  Card,
  MetricCard,
  Text,
  mq,
} from '@terenceodonoghue/react-components/velocity';
import {
  Check,
  Dynamic,
  Energy,
  Marker,
} from '@terenceodonoghue/react-icons/velocity';

import Container from '../components/core/Container';

const AnalyticsPage: NextPage = () => {
  const { color } = useTheme();

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
        <Text
          css={mq({
            display: 'flex',
            alignItems: 'center',
            margin: ['0 6px', '0 12px'],
            '&::before': {
              content: '""',
              borderRadius: '50%',
              backgroundColor: entry.color,
              display: 'inline-block',
              fontSize: '1.5em',
              marginRight: 8,
              height: 10,
              width: 10,
            },
          })}
          align="center"
          as="li"
          key={entry.dataKey}
          variant="p2"
        >
          {entry.value}
        </Text>
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
        <div
          css={{
            display: 'flex',
          }}
        >
          <Card css={{ flex: 1 }} caption="Revenue">
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
                      stopColor={color.primary}
                      stopOpacity={0.1}
                    />
                    <stop
                      offset="95%"
                      stopColor={color.primary}
                      stopOpacity={0}
                    />
                  </linearGradient>
                  <linearGradient id="colorTrips" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor={color.ui.purple}
                      stopOpacity={0.1}
                    />
                    <stop
                      offset="95%"
                      stopColor={color.ui.purple}
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="revenue"
                  fill="url(#colorRevenue)"
                  fillOpacity={1}
                  name="Revenue"
                  stroke={color.primary}
                  strokeWidth={2}
                  dot
                />
                <Area
                  dataKey="trips"
                  fill="url(#colorTrips)"
                  fillOpacity={1}
                  name="Trips"
                  stroke={color.ui.purple}
                  strokeWidth={2}
                  dot
                />
                <CartesianGrid
                  stroke={color.neutral[700]}
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
                  fontSize={15}
                  interval="preserveStartEnd"
                  stroke={color.secondary}
                  tick={{ fill: color.neutral[500] }}
                  tickLine={false}
                  tickMargin={8.5}
                />
                <YAxis
                  fontSize={15}
                  stroke={color.secondary}
                  tickFormatter={yTickFormatter}
                  tickLine={false}
                  tick={{ fill: color.neutral[500] }}
                  ticks={[0, 5000, 10000, 15000, 20000, 25000, 30000]}
                  tickMargin={13.5}
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </div>
        <div
          css={mq({
            display: 'grid',
            gridTemplateColumns: [
              'repeat(2, 1fr)',
              'repeat(2, 1fr)',
              'repeat(4, 1fr)',
            ],
            gap: 0,
          })}
        >
          {[
            {
              icon: Check,
              color: color.ui.green,
              label: 'Vehicles on track',
              value: '1,428',
            },
            {
              icon: Marker,
              color: color.ui.teal,
              label: 'Distance driven',
              value: '158.3 mi',
            },
            {
              icon: Energy,
              color: color.ui.purple,
              label: 'Energy consumed',
              value: '87.4 kWh',
            },
            {
              icon: Dynamic,
              color: color.ui.yellow,
              label: 'Total drive time',
              value: '24.2 h',
            },
          ].map((metric) => {
            return <MetricCard key={metric.label} {...metric} />;
          })}
        </div>
        <div
          css={mq({
            display: 'flex',
            flexDirection: ['column', 'column', 'row'],
          })}
        >
          <Card css={{ flex: 1 }} caption="Latest trips" />
          <Card css={mq({ flex: [1, 1, 2] })} caption="Trips by Weekday">
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
                  fill={color.ui.blue}
                  name="Comfort"
                  radius={5}
                />
                <Bar
                  barSize={7}
                  dataKey="premium"
                  fill={color.ui.purple}
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
                  stroke={color.ui.yellow}
                  strokeWidth={2}
                />
                <XAxis
                  dataKey="name"
                  fontSize={15}
                  interval="preserveStartEnd"
                  padding={{ left: 17, right: 16 }}
                  stroke={color.secondary}
                  tick={{ fill: color.neutral[500] }}
                  tickLine={false}
                  tickMargin={7.5}
                />
                <YAxis
                  fontSize={15}
                  tickLine={false}
                  tickMargin={1}
                  stroke={color.secondary}
                  tick={{ fill: color.neutral[500] }}
                  ticks={[0, 25, 50, 75, 100, 125, 150]}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default AnalyticsPage;
