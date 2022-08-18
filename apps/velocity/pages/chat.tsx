import { faker } from '@faker-js/faker';
import moment from 'moment';
import { NextPage } from 'next';
import Head from 'next/head';
import { rgba, transitions } from 'polished';

import { Flex } from '@terenceodonoghue/react-components/core';
import { Avatar } from '@terenceodonoghue/react-components/velocity';

const fixtures = Array.from(Array(7)).map(() => ({
  isOnline: faker.datatype.boolean(),
  message: faker.lorem.sentences(),
  name: faker.name.fullName(),
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
        css={({ color }) => ({
          backgroundColor: color.neutral[50],
          borderRightColor: rgba(color.primary, 0.08),
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
            css={({ color, transition }) => ({
              borderBottomColor: rgba(color.primary, 0.08),
              borderBottomStyle: 'solid',
              borderBottomWidth: 1,
              cursor: 'pointer',
              padding: '16px 24px',
              ...transitions(['background-color'], transition.slowly),
              '&:hover': {
                backgroundColor: rgba(color.primary, 0.08),
              },
            })}
            // eslint-disable-next-line react/no-array-index-key
            key={`${conversation.name
              .split(' ')
              .join('-')
              .toLowerCase()}-${index}`}
          >
            <Avatar
              alt={faker.name.fullName()}
              css={{ marginRight: 8 }}
              size={48}
              src={conversation.src}
              variant="rounded"
            />
            <Flex direction="column" justifyContent="center">
              <Flex justifyContent="space-between">
                <span
                  css={({ font }) => ({
                    fontWeight: font.weight.medium,
                  })}
                >
                  {conversation.name}
                </span>
                <span
                  css={({ color }) => ({
                    color: color.neutral[600],
                    display: 'block',
                  })}
                >
                  {conversation.time}
                </span>
              </Flex>
              <span
                css={({ color }) => ({
                  color: color.neutral[600],
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
