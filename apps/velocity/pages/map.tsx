import { faker } from '@faker-js/faker';
import { NextPage } from 'next';
import Head from 'next/head';

import {
  Section,
  Main,
  mq,
  PassengerInfo,
  TripInfo,
} from '@terenceodonoghue/react-components/velocity';

const MapPage: NextPage = () => (
  <>
    <Head>
      <title>Velocity | Map</title>
    </Head>
    <Main>
      <div
        css={mq({
          display: 'flex',
          flexDirection: ['column-reverse', 'column-reverse', 'row'],
        })}
      >
        <PassengerInfo
          css={{ flexGrow: 2 }}
          avatar={faker.image.avatar()}
          city={faker.address.cityName()}
          email={faker.internet.exampleEmail()}
          interactions={4}
          name={faker.name.fullName()}
          paymentMethod="visa"
          phoneNumber={faker.phone.number('+144–####–####')}
          state={faker.address.stateAbbr()}
        />
        <div css={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <TripInfo
            fromStreet={faker.address.streetAddress()}
            fromCity={faker.address.city()}
            toStreet={faker.address.streetAddress()}
            toCity={faker.address.city()}
            distance={12.3}
            time={42}
            price={34.2}
            energy={12.4}
          />
          <Section css={mq({ display: ['none', 'none', 'block'], flex: 1 })} />
        </div>
      </div>
    </Main>
  </>
);

export default MapPage;
