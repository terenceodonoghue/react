import { faker } from '@faker-js/faker';
import { NextPage } from 'next';
import Head from 'next/head';

import {
  Card,
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
            origin={faker.address.city()}
            originAddress={faker.address.streetAddress()}
            destination={faker.address.city()}
            destinationAddress={faker.address.streetAddress()}
            distance="12.3km"
            time="42 min"
            price="$34.20"
            energy="12.4 kWh"
          />
          <Card css={mq({ display: ['none', 'none', 'block'], flex: 1 })} />
        </div>
      </div>
    </Main>
  </>
);

export default MapPage;
