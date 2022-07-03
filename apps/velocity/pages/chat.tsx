import { faker } from '@faker-js/faker';
import moment from 'moment';
import { NextPage } from 'next';
import Head from 'next/head';
import { rgba, transitions as transition } from 'polished';
import React from 'react';
import Avatar from '../components/core/Avatar';
import Flex from '../components/core/Flex';

const fixtures = Array.from(Array(7)).map(() => ({
  isOnline: faker.datatype.boolean(),
  message: faker.lorem.sentences(),
  name: faker.name.findName(),
  src: faker.image.avatar(),
  time: moment()
    .minutes(faker.datatype.number({ min: 1, max: 19 }))
    .format('m[m]'),
}));

const ChatPage: NextPage = () => (
  <>
    <Head>
      <title>Velocity | Chat</title>
    </Head>
    <Flex>
      <ul
        css={({ palette }) => ({
          backgroundColor: palette.neutral[50],
          borderRightColor: rgba(palette.accent, 0.08),
          borderRightStyle: 'solid',
          borderRightWidth: 1,
          flexBasis: 376,
          flexShrink: 0,
          margin: 0,
          height: 'calc(100vh - 79px)',
          padding: 0,
          overflow: 'scroll',
        })}
      >
        {fixtures.map((conversation, index) => (
          <Flex
            css={({ palette, transitions }) => ({
              borderBottomColor: rgba(palette.accent, 0.08),
              borderBottomStyle: 'solid',
              borderBottomWidth: 1,
              cursor: 'pointer',
              padding: '16px 24px',
              ...transition(
                'background-color',
                `${transitions.duration.standard}ms ${transitions.easing.sharp}`,
              ),
              '&:hover': {
                backgroundColor: rgba(palette.accent, 0.08),
              },
            })}
            // eslint-disable-next-line react/no-array-index-key
            key={`${conversation.name
              .split(' ')
              .join('-')
              .toLowerCase()}-${index}`}
          >
            <Avatar
              alt={faker.name.findName()}
              css={{ marginRight: 8 }}
              size={48}
              src={conversation.src}
              variant="rounded"
            />
            <Flex css={{ flexDirection: 'column', justifyContent: 'center' }}>
              <Flex css={{ justifyContent: 'space-between' }}>
                <span
                  css={({ typography }) => ({
                    fontWeight: typography.fontWeight.medium,
                  })}
                >
                  {conversation.name}
                </span>
                <span
                  css={({ palette }) => ({
                    color: palette.neutral[600],
                    display: 'block',
                  })}
                >
                  {conversation.time}
                </span>
              </Flex>
              <span
                css={({ palette }) => ({
                  color: palette.neutral[600],
                  maxWidth: 256,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                })}
              >
                {conversation.message}
              </span>
            </Flex>
          </Flex>
        ))}
      </ul>
    </Flex>
  </>
);

export default ChatPage;
