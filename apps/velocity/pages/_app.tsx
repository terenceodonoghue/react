import { faker } from '@faker-js/faker';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useMemo, useState } from 'react';

import {
  Flex,
  GitHubCorner,
  Global,
} from '@terenceodonoghue/react-components/core';
import {
  Avatar,
  Logo,
  ThemeProvider,
  mq,
} from '@terenceodonoghue/react-components/velocity';
import velocity from '@terenceodonoghue/react-components/velocity.css';
import {
  Analytics,
  Dashboard,
  Mail,
  Map,
  Service,
  Settings,
  Vehicles,
} from '@terenceodonoghue/react-icons/velocity';

import AppBar from '../components/core/AppBar/AppBar';
import { DrawerItem } from '../components/core/Drawer';
import IconButton from '../components/core/IconButton';
import { MenuIcon } from '../components/icons';

const Drawer = dynamic(() => import('../components/core/Drawer'), {
  ssr: false,
});

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const [drawerOpen, toggleDrawer] = useState(false);

  const fixtures = useMemo(() => {
    faker.seed(123);

    return {
      avatar: faker.image.avatar(),
      name: faker.name.fullName(),
    };
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      toggleDrawer(false);
    };

    router.events.on('beforeHistoryChange', handleRouteChange);
  }, [router]);

  return (
    <ThemeProvider>
      <Global
        styles={[
          velocity,
          ({ color }) =>
            mq({
              body: {
                backgroundColor: color.neutral[100],
              },
              main: { marginLeft: [0, 0, 80] },
            }),
        ]}
      />
      <GitHubCorner
        css={{ zIndex: 1400 }}
        color="#151513"
        url="https://github.com/terenceodonoghue/react/tree/master/apps/velocity"
      />
      <AppBar>
        <Flex css={{ flex: 1 }} alignItems="center">
          <IconButton
            aria-label="menu"
            css={({ color }) => ({
              color: color.neutral[400],
              height: 28,
              width: 28,
              zIndex: 1300,
            })}
            onClick={() => toggleDrawer(!drawerOpen)}
          >
            <MenuIcon color="currentColor" css={{ height: 16, width: 18 }} />
          </IconButton>
          <Flex
            css={mq({
              left: [0, 0, 80],
              maxWidth: 1360,
              padding: ['0 24px', '0 30px', '0 110px'],
              position: 'absolute',
              right: 0,
            })}
            alignItems="center"
          >
            <Flex
              css={mq({
                flex: 1,
                justifyContent: ['initial', 'center', 'flex-start'],
                visibility: ['hidden', 'visible'],
              })}
            >
              <Logo />
            </Flex>
            <IconButton
              aria-label="user"
              css={{ borderRadius: '50%', flexGrow: 0 }}
            >
              <Avatar
                alt={fixtures.name}
                size={40}
                src={fixtures.avatar}
                variant="rounded"
              />
            </IconButton>
          </Flex>
        </Flex>
      </AppBar>
      <Drawer avatar={fixtures.avatar} name={fixtures.name} open={drawerOpen}>
        <Link href="/">
          <DrawerItem
            compact={!drawerOpen}
            icon={Dashboard}
            selected={router.pathname === '/'}
          >
            Overview
          </DrawerItem>
        </Link>
        <Link href="/analytics">
          <DrawerItem
            compact={!drawerOpen}
            icon={Analytics}
            selected={router.pathname === '/analytics'}
          >
            Analytics
          </DrawerItem>
        </Link>
        <Link href="/vehicles">
          <DrawerItem
            compact={!drawerOpen}
            icon={Vehicles}
            selected={router.pathname === '/vehicles'}
          >
            Vehicles
          </DrawerItem>
        </Link>
        <Link href="/reminders">
          <DrawerItem
            compact={!drawerOpen}
            icon={Service}
            selected={router.pathname === '/reminders'}
          >
            Service
          </DrawerItem>
        </Link>
        <Link href="/map">
          <DrawerItem
            compact={!drawerOpen}
            icon={Map}
            selected={router.pathname === '/map'}
          >
            Map
          </DrawerItem>
        </Link>
        <Link href="/chat">
          <DrawerItem
            compact={!drawerOpen}
            icon={Mail}
            selected={router.pathname === '/chat'}
          >
            Chat
          </DrawerItem>
        </Link>
        <Link href="/settings">
          <DrawerItem
            compact={!drawerOpen}
            icon={Settings}
            selected={router.pathname === '/settings'}
          >
            Settings
          </DrawerItem>
        </Link>
      </Drawer>
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
};

export default App;
