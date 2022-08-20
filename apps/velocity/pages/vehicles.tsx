import { Interpolation, Theme } from '@emotion/react';
import { NextPage } from 'next';
import Head from 'next/head';

import { Flex } from '@terenceodonoghue/react-components/core';
import { Card, TextField } from '@terenceodonoghue/react-components/velocity';

import Container from '../components/core/Container';
import Slider from '../components/core/Slider';

const VehiclesPage: NextPage = () => {
  const textField: Interpolation<Theme> = ({ color }) => ({
    input: {
      background: 'none',
      color: color.primary,
      '::placeholder': {
        color: color.neutral[600],
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
          <Card css={{ flex: 1 }} caption="Filter">
            <Flex direction="column" gap={24}>
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
