import { faker } from '@faker-js/faker';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import numeral from 'numeral';
import { rem, rgba } from 'polished';
import { useMemo } from 'react';

import {
  Avatar,
  Card,
  Driver,
  mq,
} from '@terenceodonoghue/react-components/velocity';

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
        totalEarnings: 6432,
        totalDistance: 1232,
      },
      {
        avatar: faker.image.avatar(),
        name: 'Gran Tesoro',
        vehicle: 'Chevrolet Bolt',
        totalEarnings: 5342,
        totalDistance: 945,
      },
      {
        avatar: faker.image.avatar(),
        name: 'Belafonte',
        vehicle: 'Infiniti Q50S',
        totalEarnings: 5133,
        totalDistance: 834,
      },
      {
        avatar: faker.image.avatar(),
        name: 'Chester',
        vehicle: 'Audi RS 7',
        totalEarnings: 4755,
        totalDistance: 812,
      },
      {
        avatar: faker.image.avatar(),
        name: 'Expedia',
        vehicle: 'Tesla Model X',
        totalEarnings: 4140,
        totalDistance: 724,
      },
      {
        avatar: faker.image.avatar(),
        name: 'Aeolus',
        vehicle: 'Tesla Model S',
        totalEarnings: 3323,
        totalDistance: 466,
      },
    ];
  }, []);

  return (
    <>
      <Head>
        <title>Velocity | Dashboard</title>
      </Head>
      <Container>
        <div
          css={mq({
            display: 'flex',
            flexDirection: ['column', 'column', 'row'],
          })}
        >
          <div
            css={mq({
              display: 'flex',
              flex: 1,
              flexDirection: ['column', 'row', 'column'],
            })}
          >
            <div css={{ display: 'flex', flex: 1 }}>
              <Card css={{ flex: 1 }}>
                <div
                  css={mq({
                    display: 'flex',
                    flexDirection: ['row', 'column', 'row'],
                    alignItems: 'center',
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
                </div>
              </Card>
            </div>
            <div
              css={mq({
                display: 'flex',
                flex: 1,
                flexDirection: ['row', 'column', 'row'],
              })}
            >
              <Card css={{ flex: 1 }} caption="Vehicles on track" />
              <Card css={{ flex: 1 }} caption="Distance driven" />
            </div>
          </div>
          <div css={{ display: 'flex', flex: 1 }}>
            <Card css={{ flex: 1 }} caption="Today's Trips" />
          </div>
        </div>
        <Card caption="Fleet activity map" />
        <div
          css={mq({
            display: 'flex',
            flexDirection: ['column', 'row'],
            flexWrap: ['no-wrap', 'wrap', 'no-wrap'],
          })}
        >
          <Card css={{ flex: 1 }} caption="Top Drivers">
            <div css={{ marginBottom: -12 }}>
              {fixtures.map(
                ({ totalDistance, totalEarnings, ...driver }, i) => (
                  <Driver
                    rank={i + 1}
                    totalDistance={`${numeral(totalDistance).format(
                      '0,0',
                    )} miles`}
                    totalEarnings={numeral(totalEarnings).format('$0')}
                    {...driver}
                  />
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
        </div>
      </Container>
    </>
  );
};

export default IndexPage;
