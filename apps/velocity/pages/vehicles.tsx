import { Interpolation, Theme } from '@emotion/react';
import { Card } from '@terenceodonoghue/react-components/velocity';
import { NextPage } from 'next';
import Head from 'next/head';
import { em } from 'polished';
import Container from '../components/core/Container';
import Flex from '../components/core/Flex';
import Slider from '../components/core/Slider';
import TextField from '../components/core/TextField';

const VehiclesPage: NextPage = () => {
  const slider: Interpolation<Theme> = {
    display: 'block',
    marginBottom: 32,
  };

  const textField: Interpolation<Theme> = ({ palette, typography }) => ({
    color: palette.neutral[900],
    fontSize: em(15, typography.fontSize),
    fontWeight: typography.fontWeight.regular,
    input: {
      color: palette.accent,
      fontSize: '1em',
    },
    letterSpacing: 'normal',
    margin: '0 0 16px',
    textTransform: 'none',
  });

  return (
    <>
      <Head>
        <title>Velocity | Vehicles Dashboard</title>
      </Head>
      <Container heading="Vehicles Dashboard">
        <Flex>
          <div css={{ flex: 4 }} />
          <Card css={{ flex: 1, paddingBottom: 8 }} heading="Filter">
            <Slider css={slider} primary="Trips taken" secondary="753" />
            <Slider css={slider} primary="Service due" secondary="14 days" />
            <TextField
              css={textField}
              inputProps={{
                placeholder: 'Vehicle model',
                type: 'text',
              }}
            >
              Vehicle model
            </TextField>
            <TextField
              css={textField}
              inputProps={{
                defaultValue: 'Service needed',
                placeholder: 'Status',
                type: 'text',
              }}
            >
              Status
            </TextField>
            <TextField
              css={textField}
              inputProps={{
                defaultValue: 'USA',
                placeholder: 'Location',
                type: 'text',
              }}
            >
              Location
            </TextField>
          </Card>
        </Flex>
      </Container>
    </>
  );
};

export default VehiclesPage;
