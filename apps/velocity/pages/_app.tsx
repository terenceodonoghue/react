import { faker } from '@faker-js/faker';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useState } from 'react';

import {
  AppBar,
  ThemeProvider,
  mq,
} from '@terenceodonoghue/react-components/velocity';
import {
  Analytics,
  Dashboard,
  Mail,
  Map,
  Service,
  Settings,
  Vehicles,
} from '@terenceodonoghue/react-icons/velocity';

import Link from '../components/Link';

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
    <ThemeProvider
      styles={({ color }) =>
        mq({
          body: {
            backgroundColor: color.neutral[100],
          },
          main: { marginLeft: [0, 0, 80] },
        })
      }
    >
      <AppBar
        css={{ zIndex: 1300 }}
        avatar={faker.image.avatar()}
        drawerHandler={() => toggleDrawer(!drawerOpen)}
        messageHandler={() => null}
        notificationHandler={() => null}
        profileHandler={() => null}
        hasMessage
        hasNotification
      />
      <Drawer
        css={{ zIndex: 1400 }}
        avatar={faker.image.avatar()}
        name={faker.name.fullName()}
        open={drawerOpen}
      >
        <Link to="/" compact={!drawerOpen} icon={Dashboard} label="Overview" />
        <Link
          to="/analytics"
          compact={!drawerOpen}
          icon={Analytics}
          label="Analytics"
        />
        <Link
          to="/vehicles"
          compact={!drawerOpen}
          icon={Vehicles}
          label="Vehicles"
        />
        <Link
          to="/reminders"
          compact={!drawerOpen}
          icon={Service}
          label="Service"
        />
        <Link to="/map" compact={!drawerOpen} icon={Map} label="Map" />
        <Link to="/chat" compact={!drawerOpen} icon={Mail} label="Chat" />
        <Link
          to="/settings"
          compact={!drawerOpen}
          icon={Settings}
          label="Settings"
        />
      </Drawer>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
