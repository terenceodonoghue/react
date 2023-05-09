import { faker } from '@faker-js/faker';
import moment from 'moment';
import type { NextPage } from 'next';
import Head from 'next/head';

import { Conversations, mq } from '@terenceodonoghue/react-components/velocity';

const ChatPage: NextPage = () => (
  <>
    <Head>
      <title>Velocity | Chat</title>
    </Head>
    <main css={{ display: 'flex', height: 'calc(100vh - 80px)', padding: 0 }}>
      <Conversations
        css={mq({
          maxWidth: [undefined, 275, 376],
        })}
        list={Array.from(Array(7)).map(() => ({
          active: faker.datatype.boolean(),
          avatar: faker.image.avatar(),
          name: faker.name.fullName(),
          time: moment()
            .minutes(faker.datatype.number({ min: 1, max: 19 }))
            .format('m[m]'),
          message: faker.lorem.sentence(),
        }))}
      />
    </main>
  </>
);

export default ChatPage;
