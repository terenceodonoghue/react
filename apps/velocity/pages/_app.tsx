import faker from 'faker';
import { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FunctionComponent, useEffect, useState } from 'react';
import AppBar from '~/components/core/AppBar';
import Avatar from '~/components/core/Avatar';
import Button from '~/components/core/Button';
import Drawer from '~/components/core/Drawer';
import Flex from '~/components/core/Flex';
import Global from '~/components/core/Global';
import ThemeProvider from '~/components/core/ThemeProvider';
import {
  AnalyticsIcon,
  DashboardIcon,
  ChatIcon,
  MapIcon,
  MenuIcon,
  ServiceIcon,
  SettingsIcon,
  VehiclesIcon,
  VelocityIcon,
} from '~/components/icons';
import mq from '~/components/utils/mq';

const fixtures = {
  avatar: faker.image.avatar(),
  city: faker.address.city(),
  email: faker.internet.exampleEmail(),
  name: faker.name.findName(),
  phone: faker.phone.phoneNumberFormat(),
  jobTitle: faker.name.jobTitle(),
  sentences: faker.lorem.sentences(),
  state: faker.address.stateAbbr(),
};

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const [drawerOpen, toggleDrawer] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      toggleDrawer(false);
    };

    router.events.on('beforeHistoryChange', handleRouteChange);
  }, [router]);

  return (
    <ThemeProvider>
      <Global />
      <div
        css={({ zIndex }) => ({
          position: 'sticky',
          top: 0,
          zIndex: zIndex.appBar + 1,
          '.github-corner:hover': {
            '.octo-arm': {
              animation: 'octocat-wave 560ms ease-in-out',
            },
          },
          '@keyframes octocat-wave': {
            '0%, 100%': {
              transform: 'rotate(0)',
            },
            '20%, 60%': {
              transform: 'rotate(-25deg)',
            },
            '40%, 80%': {
              transform: 'rotate(10deg)',
            },
          },
          '@media (max-width: 500px)': {
            '.github-corner': {
              '.octo-arm': {
                animation: 'octocat-wave 560ms ease-in-out',
              },
            },
            '.github-corner:hover': {
              '.octo-arm': {
                animation: 'none',
              },
            },
          },
        })}
      >
        <a
          href="https://github.com/terenceodonoghue/react/tree/master/apps/velocity"
          className="github-corner"
          aria-label="View source on GitHub"
        >
          <svg
            width={80}
            height={80}
            viewBox="0 0 250 250"
            style={{
              position: 'absolute',
              top: 0,
              border: 0,
              right: 0,
            }}
            aria-hidden="true"
            fill="#151513"
            color="#fff"
          >
            <path d="M0 0l115 115h15l12 27 108 108V0z" />
            <path
              className="octo-arm"
              d="M128.3 109c-14.5-9.3-9.3-19.4-9.3-19.4 3-6.9 1.5-11 1.5-11-1.3-6.6 2.9-2.3 2.9-2.3 3.9 4.6 2.1 11 2.1 11-2.6 10.3 5.1 14.6 8.9 15.9"
              fill="currentColor"
              style={{
                transformOrigin: '130px 106px',
              }}
            />
            <path
              className="octo-body"
              d="M115 115c-.1.1 3.7 1.5 4.8.4l13.9-13.8c3.2-2.4 6.2-3.2 8.5-3-8.4-10.6-14.7-24.2 1.6-40.6 4.7-4.6 10.2-6.8 15.9-7 .6-1.6 3.5-7.4 11.7-10.9 0 0 4.7 2.4 7.4 16.1 4.3 2.4 8.4 5.6 12.1 9.2 3.6 3.6 6.8 7.8 9.2 12.2 13.7 2.6 16.2 7.3 16.2 7.3-3.6 8.2-9.4 11.1-10.9 11.7-.3 5.8-2.4 11.2-7.1 15.9-16.4 16.4-30 10-40.6 1.6.2 2.8-1 6.8-5 10.8L141 136.5c-1.2 1.2.6 5.4.8 5.3z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
      <AppBar>
        <Flex css={{ alignItems: 'center', flex: 1 }}>
          <Button
            aria-label="menu"
            css={({ palette, zIndex }) => ({
              color: palette.neutral[400],
              height: 28,
              width: 28,
              zIndex: zIndex.menuButton,
            })}
            onClick={() => toggleDrawer(!drawerOpen)}
            variant="icon"
          >
            <MenuIcon color="currentColor" css={{ height: 16, width: 18 }} />
          </Button>
          <Flex
            css={mq({
              alignItems: 'inherit',
              left: [0, 0, 80],
              maxWidth: 1360,
              padding: ['0 24px', '0 30px', '0 110px'],
              position: 'absolute',
              right: 0,
            })}
          >
            <Flex
              css={mq({
                flex: 1,
                justifyContent: ['initial', 'center', 'flex-start'],
                visibility: ['hidden', 'visible'],
              })}
            >
              <VelocityIcon css={{ height: 28, width: 102 }} />
            </Flex>
            <Button
              aria-label="user"
              css={{ borderRadius: '50%', flexGrow: 0 }}
              variant="icon"
            >
              <Avatar
                alt={fixtures.name}
                size={40}
                src={fixtures.avatar}
                variant="rounded"
              />
            </Button>
          </Flex>
        </Flex>
      </AppBar>
      <Drawer avatar={fixtures.avatar} name={fixtures.name} open={drawerOpen}>
        <Link href="/">
          <Drawer.Item
            compact={!drawerOpen}
            icon={DashboardIcon}
            selected={router.pathname === '/'}
          >
            Overview
          </Drawer.Item>
        </Link>
        <Link href="/analytics">
          <Drawer.Item
            compact={!drawerOpen}
            icon={AnalyticsIcon}
            selected={router.pathname === '/analytics'}
          >
            Analytics
          </Drawer.Item>
        </Link>
        <Link href="/vehicles">
          <Drawer.Item
            compact={!drawerOpen}
            icon={VehiclesIcon}
            selected={router.pathname === '/vehicles'}
          >
            Vehicles
          </Drawer.Item>
        </Link>
        <Link href="/reminders">
          <Drawer.Item
            compact={!drawerOpen}
            icon={ServiceIcon}
            selected={router.pathname === '/reminders'}
          >
            Service
          </Drawer.Item>
        </Link>
        <Link href="/map">
          <Drawer.Item
            compact={!drawerOpen}
            icon={MapIcon}
            selected={router.pathname === '/map'}
          >
            Map
          </Drawer.Item>
        </Link>
        <Link href="/chat">
          <Drawer.Item
            compact={!drawerOpen}
            icon={ChatIcon}
            selected={router.pathname === '/chat'}
          >
            Chat
          </Drawer.Item>
        </Link>
        <Link href="/settings">
          <Drawer.Item
            compact={!drawerOpen}
            icon={SettingsIcon}
            selected={router.pathname === '/settings'}
          >
            Settings
          </Drawer.Item>
        </Link>
      </Drawer>
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
};

export default App;
