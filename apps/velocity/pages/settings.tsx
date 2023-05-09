import { NextPage } from 'next';
import Head from 'next/head';

import {
  Button,
  Card,
  Integrations,
  Main,
  mq,
  Notifications,
  Text,
  TextField,
  Theme,
} from '@terenceodonoghue/react-components/velocity';
import {
  GitHub,
  InVision,
  Medium,
  Slack,
  Twitter,
} from '@terenceodonoghue/react-icons/brands';

const SettingsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Velocity | Settings</title>
      </Head>
      <Main heading="Settings">
        <div
          css={mq({
            display: 'flex',
            flexDirection: 'column',
            gap: [8, 16, 32],
          })}
        >
          <Card heading="Personal data">
            <Text>
              Use this page to update your contact information and change your
              password.
            </Text>
            <div
              css={mq({
                display: 'grid',
                gridTemplateAreas: [
                  "'a' 'b' 'c' 'd' 'e' 'f' 'g'",
                  "'a . .' 'b c d' 'e f g'",
                ],
                gridTemplateColumns: [
                  '1fr',
                  'repeat(3, 1fr)',
                  'repeat(3, minmax(max-content, 272px))',
                ],
                columnGap: 24,
                rowGap: [16, 32],
                margin: ['24px 0', '32px 0'],
              })}
            >
              <TextField
                css={{ gridArea: 'a' }}
                defaultValue="appleseed_jane@mac.com"
                label="Email address"
              />

              <TextField
                css={{ gridArea: 'b' }}
                defaultValue="Jane"
                label="First name"
              />
              <TextField
                css={{ gridArea: 'c' }}
                defaultValue="Appleseed"
                label="Last name"
              />
              <TextField
                css={{ gridArea: 'd' }}
                defaultValue="1965-05-25"
                label="Birth date"
                type="date"
              />

              <TextField
                css={{ gridArea: 'e' }}
                defaultValue="password"
                label="Current password"
                type="password"
              />
              <TextField
                css={{ gridArea: 'f' }}
                label="New password"
                type="password"
              />
              <TextField
                css={{ gridArea: 'g' }}
                label="confirm"
                type="password"
              />
            </div>
            <Button css={mq({ width: ['100%', 200] })}>Save Changes</Button>
          </Card>
          <Integrations
            list={[
              {
                label: 'InVision',
                description: 'Boards and prototypes',
                icon: InVision,
                defaultChecked: true,
              },
              {
                label: 'GitHub',
                description: 'Commits data and history',
                icon: GitHub,
                defaultChecked: true,
              },
              {
                label: 'Slack',
                description: 'Messages and channels',
                icon: Slack,
              },
              {
                label: 'Twitter',
                description: 'Tweets data',
                icon: Twitter,
              },
              {
                label: 'Medium',
                description: 'Followers count',
                icon: Medium,
              },
            ]}
          />
          <Notifications
            options={[
              {
                label: 'Email Notification',
                description: 'Commits data and history',
              },
              {
                label: 'Push Notification',
                description: 'Commits data and history',
                defaultChecked: true,
              },
              {
                label: 'Monthly Reports',
                description: 'Commits data and history',
              },
              {
                label: 'Quarter Reports',
                description: 'Commits data and history',
              },
            ]}
          />
          <Theme
            options={[
              {
                label: 'Shelob',
                colors: ['#2e5bff', '#e0e7ff', '#8097b1'],
                defaultChecked: true,
              },
              {
                label: 'Denethor',
                colors: ['#8c54ff', '#00c1d4', '#fad050'],
              },
              {
                label: 'Quickbeam',
                colors: ['#00a4de', '#3b7ed5', '#00a550'],
              },
              {
                label: 'Shadowfax',
                colors: ['#232a64', '#85c800', '#616266'],
              },
              {
                label: 'Grima',
                colors: ['#a728a3', '#f7e0ff', '#7675ac'],
              },
            ]}
          />
        </div>
      </Main>
    </>
  );
};

export default SettingsPage;
