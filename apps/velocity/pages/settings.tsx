import { Button, Card } from '@terenceodonoghue/react-components/velocity';
import { NextPage } from 'next';
import Head from 'next/head';
import { linearGradient, rgba } from 'polished';
import { ComponentType, FunctionComponent, SVGProps } from 'react';
import Container from '../components/core/Container';
import Flex from '../components/core/Flex';
import Radio from '../components/core/Radio';
import Switch from '../components/core/Switch';
import TextField from '../components/core/TextField';
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
    css={({ palette }) => ({
      alignItems: 'center',
      borderColor: selected ? palette.accent : palette.secondary,
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
      css={({ palette }) => ({
        flexShrink: 0,
        alignItems: 'center',
        backgroundColor: rgba(palette.neutral[700], 0.1),
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
      <span
        css={({ typography }) => ({ fontWeight: typography.fontWeight.medium })}
      >
        {name}
      </span>
      <span
        css={({ palette }) => ({
          color: palette.neutral[600],
          display: 'block',
        })}
      >
        {description}
      </span>
    </div>
  </Flex>
);

interface PaletteProps {
  colors: string[];
  defaultChecked?: boolean;
  name: string;
}

const Palette: FunctionComponent<PaletteProps> = ({
  colors,
  defaultChecked,
  name,
}) => (
  <div css={{ margin: '0 16px' }}>
    <div
      css={{
        borderRadius: 4,
        height: 65,
        margin: '12px 0',
        width: 120,
        ...linearGradient({
          colorStops: colors.map(
            (color, i) =>
              `${color} ${(i / colors.length) * 100}%, ${color} ${
                ((i + 1) / colors.length) * 100
              }%`,
          ),
          toDirection: '90deg',
        }),
      }}
    />
    <Radio inputProps={{ defaultChecked, name: 'theme' }}>{name}</Radio>
  </div>
);

const SettingsPage: NextPage = () => (
  <>
    <Head>
      <title>Velocity | Settings</title>
    </Head>
    <Container heading="Settings">
      <Flex>
        <Card css={{ flex: 1 }} heading="Personal data">
          <p>
            Use this page to update your contact information and change your
            password.
          </p>
          <Flex css={{ margin: '24px -12px' }}>
            <TextField inputProps={{ defaultValue: 'appleseed_jane@mac.com' }}>
              Email address
            </TextField>
          </Flex>
          <Flex css={{ flexWrap: 'wrap', margin: '24px -12px' }}>
            <TextField inputProps={{ defaultValue: 'Jane' }}>
              First name
            </TextField>
            <TextField inputProps={{ defaultValue: 'Appleseed' }}>
              Last name
            </TextField>
            <TextField
              inputProps={{ defaultValue: '1965-05-25', type: 'date' }}
            >
              Birth date
            </TextField>
          </Flex>
          <Flex css={{ flexWrap: 'wrap', margin: '24px -12px' }}>
            <TextField
              inputProps={{ defaultValue: 'password', type: 'password' }}
            >
              Current password
            </TextField>
            <TextField inputProps={{ type: 'password' }}>
              New password
            </TextField>
            <TextField inputProps={{ type: 'password' }}>Confirm</TextField>
          </Flex>
          <Button css={{ margin: '12px 0', width: 200 }}>Save Changes</Button>
        </Card>
      </Flex>
      <Flex>
        <Card css={{ flex: 1 }} heading="Integrations">
          <p>Manage third-party app integrations.</p>
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
        <Card css={{ flex: 1 }} heading="Notifications">
          <p>Control your notification and auto-follow settings.</p>
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
        <Card css={{ flex: 1 }} heading="Theme">
          <p>Select a color scheme for your Velocity app.</p>
          <Flex css={{ margin: '12px -16px' }}>
            <Palette
              colors={['#2e5bff', '#e0e7ff', '#8097b1']}
              defaultChecked
              name="Shelob"
            />
            <Palette
              colors={['#8c54ff', '#00c1d4', '#fad050']}
              name="Denethor"
            />
            <Palette
              colors={['#00a4de', '#3b7ed5', '#00a550']}
              name="Quickbeam"
            />
            <Palette
              colors={['#232a64', '#85c800', '#616266']}
              name="Shadowfax"
            />
            <Palette colors={['#a728a3', '#f7e0ff', '#7675ac']} name="Grima" />
          </Flex>
        </Card>
      </Flex>
    </Container>
  </>
);

export default SettingsPage;
