/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import type { FunctionComponent, HTMLAttributes } from 'react';

import { ReactIcon } from '@terenceodonoghue/react-icons';
import {
  Mail,
  Menu,
  Notifications,
} from '@terenceodonoghue/react-icons/velocity';

import Avatar from '../atoms/Avatar.js';
import IconButton from '../atoms/IconButton.js';
import Indicator from '../atoms/Indicator.js';
import VelocityLogo from '../atoms/Logo.js';
import mq from '../utils/mq.js';

export interface AppBarProps extends HTMLAttributes<HTMLDivElement> {
  avatar: string;
  hasMessage?: boolean;
  hasNotification?: boolean;
  logo?: ReactIcon;
  drawerHandler?: () => void;
  messageHandler?: () => void;
  notificationHandler?: () => void;
  profileHandler?: () => void;
}

const AppBar: FunctionComponent<AppBarProps> = ({
  avatar,
  hasMessage = false,
  hasNotification = false,
  logo: Logo = VelocityLogo,
  drawerHandler,
  messageHandler,
  notificationHandler,
  profileHandler,
  ...props
}) => {
  const { color, page } = useTheme();

  return (
    <header
      css={{
        position: 'sticky',
        top: 0,
        display: 'flex',
        alignItems: 'center',
        borderBottom: `solid 1px ${color.neutral[300]}`,
        minHeight: 80,
        backgroundColor: color.neutral[50],
      }}
      {...props}
    >
      {drawerHandler ? (
        <div css={{ padding: '0 24px', width: 80 }}>
          <IconButton aria-label="menu" onClick={drawerHandler}>
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
              display: 'flex',
              flex: 1,
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
            <IconButton onClick={notificationHandler}>
              <Indicator visible={hasNotification}>
                <Notifications color={color.neutral[400]} size={32} />
              </Indicator>
            </IconButton>
          ) : undefined}
          {messageHandler ? (
            <IconButton
              css={mq({ display: ['none', 'inline-block'] })}
              onClick={messageHandler}
            >
              <Indicator visible={hasMessage}>
                <Mail color={color.neutral[400]} size={32} />
              </Indicator>
            </IconButton>
          ) : undefined}
          {avatar && profileHandler ? (
            <IconButton
              css={mq({ display: ['none', 'inline-block'] })}
              onClick={profileHandler}
              variant="rounded"
            >
              <Avatar size={40} src={avatar} />
            </IconButton>
          ) : undefined}
        </div>
      </div>
    </header>
  );
};

export default AppBar;
