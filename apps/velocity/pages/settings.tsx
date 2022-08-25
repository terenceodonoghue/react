import { NextPage } from 'next';
import Head from 'next/head';

import {
  Button,
  Card,
  IntegrationCard,
  mq,
  Setting,
  Text,
  TextField,
  ThemeCard,
} from '@terenceodonoghue/react-components/velocity';
import {
  GitHub,
  InVision,
  Medium,
  Slack,
  Twitter,
} from '@terenceodonoghue/react-icons/brands';

import Container from '../components/core/Container';

const SettingsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Velocity | Settings</title>
      </Head>
      <Container heading="Settings">
        <div
          css={mq({
            display: 'flex',
            flexDirection: 'column',
            gap: [8, 16, 32],
          })}
        >
          <Card caption="Personal data">
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
          <Card caption="Integrations">
            <Text>Manage third-party app integrations.</Text>
            <div
              css={mq({
                display: 'grid',
                gridTemplateColumns: [
                  'repeat(1, minmax(0, 1fr))',
                  'repeat(2, minmax(0, 1fr))',
                  'repeat(3, minmax(0, 1fr))',
                ],
                gridAutoRows: '1fr',
                rowGap: [16, 24],
                columnGap: 48,
                marginTop: [24, 32],
              })}
            >
              {[
                {
                  name: 'InVision',
                  description: 'Boards and prototypes',
                  icon: InVision,
                  enabled: true,
                },
                {
                  name: 'GitHub',
                  description: 'Commits data and history',
                  icon: GitHub,
                  enabled: true,
                },
                {
                  name: 'Slack',
                  description: 'Messages and channels',
                  icon: Slack,
                },
                {
                  name: 'Twitter',
                  description: 'Tweets data',
                  icon: Twitter,
                },
                {
                  name: 'Medium',
                  description: 'Followers count',
                  icon: Medium,
                },
              ].map((integration) => (
                <IntegrationCard key={integration.name} {...integration} />
              ))}
            </div>
          </Card>
          <Card caption="Notifications">
            <Text>Control your notification and auto-follow settings.</Text>
            <div
              css={mq({
                display: 'grid',
                gridAutoFlow: [undefined, 'column'],
                gridTemplateColumns: [
                  'repeat(1, 1fr)',
                  'repeat(2, min-content)',
                ],
                gridTemplateRows: [undefined, 'repeat(2, 1fr)'],
                columnGap: [undefined, 110],
                rowGap: 20,
                marginTop: [24, 32],
              })}
            >
              {[
                {
                  name: 'Email Notification',
                  description: 'Commits data and history',
                },
                {
                  name: 'Push Notification',
                  description: 'Commits data and history',
                  defaultChecked: true,
                },
                {
                  name: 'Monthly Reports',
                  description: 'Commits data and history',
                },
                {
                  name: 'Quarter Reports',
                  description: 'Commits data and history',
                },
              ].map((setting) => (
                <Setting key={setting.name} {...setting} />
              ))}
            </div>
          </Card>
          <Card caption="Theme">
            <Text>Select a color scheme for your Velocity app.</Text>
            <div
              css={mq({
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, 120px)',
                gap: [24, 32],
                marginTop: [24, 32],
              })}
            >
              <ThemeCard
                label="Shelob"
                colors={['#2e5bff', '#e0e7ff', '#8097b1']}
                defaultChecked
              />
              <ThemeCard
                label="Denethor"
                colors={['#8c54ff', '#00c1d4', '#fad050']}
              />
              <ThemeCard
                label="Quickbeam"
                colors={['#00a4de', '#3b7ed5', '#00a550']}
              />
              <ThemeCard
                label="Shadowfax"
                colors={['#232a64', '#85c800', '#616266']}
              />
              <ThemeCard
                label="Grima"
                colors={['#a728a3', '#f7e0ff', '#7675ac']}
              />
            </div>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default SettingsPage;
