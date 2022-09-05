import { faker } from '@faker-js/faker';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useState } from 'react';

import { GitHubCorner, Global } from '@terenceodonoghue/react-components/core';
import {
  AppBar,
  NavItem,
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
          <NavItem
            compact={!drawerOpen}
            icon={Dashboard}
            label="Overview"
            selected={router.pathname === '/'}
          />
        </Link>
        <Link href="/analytics">
          <NavItem
            compact={!drawerOpen}
            icon={Analytics}
            label="Analytics"
            selected={router.pathname === '/analytics'}
          />
        </Link>
        <Link href="/vehicles">
          <NavItem
            compact={!drawerOpen}
            icon={Vehicles}
            label="Vehicles"
            selected={router.pathname === '/vehicles'}
          />
        </Link>
        <Link href="/reminders">
          <NavItem
            compact={!drawerOpen}
            icon={Service}
            label="Service"
            selected={router.pathname === '/reminders'}
          />
        </Link>
        <Link href="/map">
          <NavItem
            compact={!drawerOpen}
            icon={Map}
            label="Map"
            selected={router.pathname === '/map'}
          />
        </Link>
        <Link href="/chat">
          <NavItem
            compact={!drawerOpen}
            icon={Mail}
            label="Chat"
            selected={router.pathname === '/chat'}
          />
        </Link>
        <Link href="/settings">
          <NavItem
            compact={!drawerOpen}
            icon={Settings}
            label="Settings"
            selected={router.pathname === '/settings'}
          />
        </Link>
      </Drawer>
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
};

export default App;
