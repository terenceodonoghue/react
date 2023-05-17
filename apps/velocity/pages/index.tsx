import { faker } from '@faker-js/faker';
import { NextPage } from 'next';
import Head from 'next/head';

import { Dashboard } from '@terenceodonoghue/react-components/velocity';

const DashboardPage: NextPage = () => (
  <>
    <Head>
      <title>Velocity | Dashboard</title>
    </Head>
    <Dashboard
      drivers={{
        list: [
          {
            avatar: faker.image.avatar(),
            distance: 1232,
            earnings: 6432,
            name: 'Bebop',
            vehicle: faker.vehicle.vehicle(),
          },
          {
            avatar: faker.image.avatar(),
            distance: 945,
            earnings: 5342,
            name: 'Gran Tesoro',
            vehicle: faker.vehicle.vehicle(),
          },
          {
            avatar: faker.image.avatar(),
            distance: 834,
            earnings: 5133,
            name: 'Belafonte',
            vehicle: faker.vehicle.vehicle(),
          },
          {
            avatar: faker.image.avatar(),
            distance: 812,
            earnings: 4755,
            name: 'Chester',
            vehicle: faker.vehicle.vehicle(),
          },
          {
            avatar: faker.image.avatar(),
            distance: 724,
            earnings: 4140,
            name: 'Expedia',
            vehicle: faker.vehicle.vehicle(),
          },
          {
            avatar: faker.image.avatar(),
            distance: 466,
            earnings: 3323,
            name: 'Aeolus',
            vehicle: faker.vehicle.vehicle(),
          },
        ],
      }}
      operatingScore={{ score: 86, trips: 1233 }}
    />
  </>
);

export default DashboardPage;
