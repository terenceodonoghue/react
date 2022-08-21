import { NextPage } from 'next';
import Head from 'next/head';
import { linearGradient, rgba } from 'polished';
import { ComponentType, FunctionComponent, SVGProps } from 'react';

import { Flex } from '@terenceodonoghue/react-components/core';
import {
  Button,
  Card,
  mq,
  Text,
  TextField,
  ThemeCard,
} from '@terenceodonoghue/react-components/velocity';

import Container from '../components/core/Container';
import Switch from '../components/core/Switch';
import {
  GitHubIcon,
  InVisionIcon,
  MailchimpIcon,
  MediumIcon,
  SlackIcon,
  TwitterIcon,
} from '../components/icons';

interface IntegrationProps {
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  name: string;
  selected?: boolean;
}

const Integration: FunctionComponent<IntegrationProps> = ({
  description,
  icon: IconComponent,
  name,
  selected,
}) => (
  <Flex
    css={({ color }) => ({
      alignItems: 'center',
      borderColor: selected ? color.primary : color.secondary,
      borderRadius: 5,
      borderStyle: 'solid',
      borderWidth: 1,
      cursor: 'pointer',
      flex: 1,
      margin: '12px 24px',
      padding: 18,
    })}
  >
    <Flex
      css={({ color }) => ({
        flexShrink: 0,
        alignItems: 'center',
        backgroundColor: rgba(color.neutral[700], 0.1),
        borderRadius: '50%',
        height: 70,
        justifyContent: 'center',
        marginRight: 16,
        width: 70,
      })}
    >
      <IconComponent css={{ height: 30, width: 30 }} />
    </Flex>
    <div>
      <span css={({ font }) => ({ fontWeight: font.weight.medium })}>
        {name}
      </span>
      <span
        css={({ color }) => ({
          color: color.neutral[600],
          display: 'block',
        })}
      >
        {description}
      </span>
    </div>
  </Flex>
);

const SettingsPage: NextPage = () => (
  <>
    <Head>
      <title>Velocity | Settings</title>
    </Head>
    <Container heading="Settings">
      <Flex>
        <Card css={{ flex: 1 }} caption="Personal data">
          <Text>
            Use this page to update your contact information and change your
            password.
          </Text>
          <Flex css={{ margin: '30px 0' }} gap={20} wrap="wrap">
            <TextField
              css={{ flex: 1, maxWidth: 272 }}
              defaultValue="appleseed_jane@mac.com"
              label="Email address"
            />
          </Flex>
          <Flex css={{ margin: '30px 0' }} gap={20} wrap="wrap">
            <TextField
              css={{ flex: 1, maxWidth: 272 }}
              defaultValue="Jane"
              label="First name"
            />
            <TextField
              css={{ flex: 1, maxWidth: 272 }}
              defaultValue="Appleseed"
              label="Last name"
            />
            <TextField
              css={{ flex: 1, maxWidth: 272 }}
              defaultValue="1965-05-25"
              label="Birth date"
              type="date"
            />
          </Flex>
          <Flex css={{ margin: '30px 0' }} gap={20} wrap="wrap">
            <TextField
              css={{ flex: 1, maxWidth: 272 }}
              defaultValue="password"
              label="Current password"
              type="password"
            />
            <TextField
              css={{ flex: 1, maxWidth: 272 }}
              label="New password"
              type="password"
            />
            <TextField
              css={{ flex: 1, maxWidth: 272 }}
              label="confirm"
              type="password"
            />
          </Flex>
          <Button css={{ width: 200 }}>Save Changes</Button>
        </Card>
      </Flex>
      <Flex>
        <Card css={{ flex: 1 }} caption="Integrations">
          <Text>Manage third-party app integrations.</Text>
          <Flex css={{ margin: '0 -24px' }}>
            <Integration
              description="Boards and prototypes"
              icon={InVisionIcon}
              name="InVision"
              selected
            />
            <Integration
              description="Commits data and history"
              icon={GitHubIcon}
              name="GitHub"
              selected
            />
            <Integration
              description="Messages and channels"
              icon={SlackIcon}
              name="Slack"
            />
          </Flex>
          <Flex css={{ margin: '0 -24px' }}>
            <Integration
              description="Subscribers list"
              icon={MailchimpIcon}
              name="Mailchimp"
            />
            <Integration
              description="Tweets data"
              icon={TwitterIcon}
              name="Twitter"
            />
            <Integration
              description="Followers count"
              icon={MediumIcon}
              name="Medium"
            />
          </Flex>
        </Card>
      </Flex>
      <Flex>
        <Card css={{ flex: 1 }} caption="Notifications">
          <Text>Control your notification and auto-follow settings.</Text>
          <Flex css={{ margin: '0 -60px' }}>
            <Switch
              css={{ margin: '12px 60px' }}
              primary="Email Notification"
              secondary="Commits data and history"
            />
            <Switch
              css={{ margin: '12px 60px' }}
              primary="Monthly Reports"
              secondary="Commits data and history"
            />
          </Flex>
          <Flex css={{ margin: '0 -60px' }}>
            <Switch
              css={{ margin: '12px 60px' }}
              primary="Push Notification"
              secondary="Commits data and history"
            />
            <Switch
              css={{ margin: '12px 60px' }}
              primary="Quarter Reports"
              secondary="Commits data and history"
            />
          </Flex>
        </Card>
      </Flex>
      <Flex>
        <Card css={{ flex: 1 }} caption="Theme">
          <Text>Select a color scheme for your Velocity app.</Text>
          <div
            css={mq({
              display: 'grid',
              gridTemplateColumns: [
                'repeat(auto-fit, 140px)',
                'repeat(auto-fit, 120px)',
              ],
              gap: [24, 32],
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
      </Flex>
    </Container>
  </>
);

export default SettingsPage;
