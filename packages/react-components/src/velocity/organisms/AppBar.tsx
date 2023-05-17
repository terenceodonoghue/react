/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { ComponentPropsWithoutRef } from 'react';

import { ReactIcon } from '@terenceodonoghue/react-icons';
import {
  Mail,
  Menu,
  Notifications,
} from '@terenceodonoghue/react-icons/velocity';

import Avatar from '../atoms/Avatar.js';
import IconButton from '../atoms/IconButton.js';
import Status from '../atoms/Status.js';
import VelocityLogo from '../primitives/Logo.js';
import mq from '../utils/mq.js';

export interface AppBarProps extends ComponentPropsWithoutRef<'header'> {
  avatar?: string;
  hasMessage?: boolean;
  hasNotification?: boolean;
  logo?: ReactIcon;
  drawerHandler?: () => void;
  messageHandler?: () => void;
  notificationHandler?: () => void;
  profileHandler?: () => void;
}

const AppBar = ({
  avatar,
  hasMessage = false,
  hasNotification = false,
  logo: Logo = VelocityLogo,
  drawerHandler,
  messageHandler,
  notificationHandler,
  profileHandler,
  ...props
}: AppBarProps) => {
  const { color, page } = useTheme();

  return (
    <header
      css={{
        position: 'sticky',
        top: 0,
        display: 'flex',
        alignItems: 'center',
        minHeight: 80,
        backgroundColor: color.neutral[50],
        borderBottom: `solid 1px ${color.neutral[300]}`,
      }}
      {...props}
    >
      {drawerHandler ? (
        <div css={{ width: 80, paddingInline: 24 }}>
          <IconButton aria-label="Open drawer" onClick={drawerHandler}>
            <Menu color={color.neutral[400]} size={18} />
          </IconButton>
        </div>
      ) : undefined}
      <div
        css={mq({
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: page.maxWidth,
          padding: ['0 24px', undefined, '0 110px'],
        })}
      >
        {Logo ? (
          <div
            css={mq({
              flex: 1,
              display: 'flex',
              justifyContent: ['center', 'center', 'flex-start'],
              visibility: ['hidden', 'visible'],
            })}
          >
            <Logo
              css={mq({
                display: ['none', 'initial'],
                margin: [undefined, '0 auto', 0],
              })}
            />
          </div>
        ) : undefined}
        <div css={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {notificationHandler ? (
            <IconButton
              aria-label="View notifications"
              onClick={notificationHandler}
            >
              <Status show={hasNotification}>
                <Notifications color={color.neutral[400]} size={32} />
              </Status>
            </IconButton>
          ) : undefined}
          {messageHandler ? (
            <IconButton
              aria-label="View messages"
              css={mq({ display: ['none', 'inline-block'] })}
              onClick={messageHandler}
            >
              <Status show={hasMessage}>
                <Mail color={color.neutral[400]} size={32} />
              </Status>
            </IconButton>
          ) : undefined}
          {profileHandler ? (
            <IconButton
              aria-label="View profile"
              css={mq({ display: ['none', 'inline-block'] })}
              onClick={profileHandler}
              variant="rounded"
            >
              {avatar ? <Avatar size={40} src={avatar} /> : undefined}
            </IconButton>
          ) : undefined}
        </div>
      </div>
    </header>
  );
};

export default AppBar;
