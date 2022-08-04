import { Interpolation, Theme } from '@emotion/react';
import { Card, TextField } from '@terenceodonoghue/react-components/velocity';
import { NextPage } from 'next';
import Head from 'next/head';
import Container from '../components/core/Container';
import Flex from '../components/core/Flex';
import Slider from '../components/core/Slider';

const VehiclesPage: NextPage = () => {
  const textField: Interpolation<Theme> = ({ palette }) => ({
    input: {
      background: 'none',
      color: palette.accent,
      '::placeholder': {
        color: palette.neutral[600],
      },
    },
  });

  return (
    <>
      <Head>
        <title>Velocity | Vehicles Dashboard</title>
      </Head>
      <Container heading="Vehicles Dashboard">
        <Flex>
          <div css={{ flex: 4 }} />
          <Card css={{ flex: 1 }} heading="Filter">
            <Flex css={{ flexDirection: 'column', gap: 24 }}>
              <Slider primary="Trips taken" secondary="753" />
              <Slider primary="Service due" secondary="14 days" />
              <TextField
                css={textField}
                label="Vehicle model"
                placeholder="Vehicle model"
              />
              <TextField
                css={textField}
                defaultValue="Service needed"
                label="Status"
                placeholder="Status"
              />
              <TextField
                css={textField}
                defaultValue="USA"
                label="Location"
                placeholder="Location"
              />
            </Flex>
          </Card>
        </Flex>
      </Container>
    </>
  );
};

export default VehiclesPage;
