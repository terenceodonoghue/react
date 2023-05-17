import { NextPage } from 'next';
import Head from 'next/head';
import 'recharts';

import { Analytics } from '@terenceodonoghue/react-components/velocity';

const AnalyticsPage: NextPage = () => (
  <>
    <Head>
      <title>Velocity | Analytics</title>
    </Head>
    <Analytics
      revenue={{
        revenue: [
          7850, 11100, 9100, 15200, 23000, 21400, 15950, 12750, 16100, 17600,
          23700, 18900, 11300,
        ],
        trips: [
          3900, 4700, 7150, 6400, 11000, 12500, 7000, 8250, 5850, 13000, 18050,
          17200, 2200,
        ],
      }}
      tripsByWeekday={{
        average: [109, 86, 102, 108, 75, 56, 125],
        comfort: [83, 66, 78, 133, 56, 65, 119],
        premium: [97, 76, 90, 96, 65, 47, 117],
      }}
    />
  </>
);

export default AnalyticsPage;
