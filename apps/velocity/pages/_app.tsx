import { faker } from '@faker-js/faker';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useState } from 'react';

import { GitHubCorner, Global } from '@terenceodonoghue/react-components/core';
import {
  AppBar,
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

import { DrawerItem } from '../components/core/Drawer';

const Drawer = dynamic(() => import('../components/core/Drawer'), {
  ssr: false,
});

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const [drawerOpen, toggleDrawer] = useState(false);

  faker.seed(123);

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
      <AppBar
        avatar={faker.image.avatar()}
        drawerHandler={() => toggleDrawer(!drawerOpen)}
        messageHandler={() => null}
        notificationHandler={() => null}
        profileHandler={() => null}
        hasMessage
        hasNotification
      />
      <Drawer
        avatar={faker.image.avatar()}
        name={faker.name.fullName()}
        open={drawerOpen}
      >
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
