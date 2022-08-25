import { faker } from '@faker-js/faker';
import moment from 'moment';
import type { NextPage } from 'next';
import Head from 'next/head';

import { ChatList, mq } from '@terenceodonoghue/react-components/velocity';

const ChatPage: NextPage = () => (
  <>
    <Head>
      <title>Velocity | Chat</title>
    </Head>
    <div css={{ display: 'flex', height: 'calc(100vh - 80px)' }}>
      <ChatList
        css={mq({
          maxWidth: [undefined, 275, 376],
        })}
        chats={Array.from(Array(7)).map((chat, i) => ({
          avatar: faker.image.avatar(),
          name: faker.name.fullName(),
          time: moment()
            .minutes(faker.datatype.number({ min: 1, max: 19 }))
            .format('m[m]'),
          message: faker.lorem.sentence(),
          online: faker.datatype.boolean(),
          selected: i === 2,
        }))}
      />
    </div>
  </>
);

export default ChatPage;
