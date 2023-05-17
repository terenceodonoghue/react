import { NextPage } from 'next';
import Head from 'next/head';

import {
  Flex,
  Integrations,
  Main,
  Notifications,
  PersonalData,
  Themes,
  Settings,
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
      <Settings />
      <Main heading="Settings">
        <Flex direction="column" spacing={[16, 24]}>
          <PersonalData />
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
            list={[
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
          <Themes
            list={[
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
        </Flex>
      </Main>
    </>
  );
};

export default SettingsPage;
