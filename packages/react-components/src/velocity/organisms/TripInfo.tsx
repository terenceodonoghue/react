/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rgba } from 'polished';

import { money, unit } from '@terenceodonoghue/utils';

import Section, { SectionProps } from '../atoms/Section.js';
import Separator from '../atoms/Separator.js';
import Flex from '../primitives/Flex.js';
import Grid from '../primitives/Grid.js';
import Icon from '../primitives/Icon.js';
import Text from '../primitives/Text.js';

export interface TripInfoProps extends SectionProps {
  distance?: number;
  energy?: number;
  fromStreet: string;
  fromCity: string;
  price?: number;
  time?: number;
  toCity: string;
  toStreet: string;
}

const TripInfo = ({
  distance = 0,
  energy = 0,
  fromCity,
  fromStreet,
  price = 0,
  time = 0,
  toCity,
  toStreet,
  ...props
}: TripInfoProps) => {
  const { color } = useTheme();

  return (
    <Section aria-label="Trip info" css={{ padding: 0 }} {...props}>
      <Grid columns={2} gutterX={8} gutterY={12} marginX={24} marginY={32}>
        <Flex
          align="center"
          css={{
            '&::after': {
              flex: 1,
              content: '""',
              width: '100%',
              height: 2,
              marginLeft: 8,
              backgroundColor: rgba(color.ui.blue, 0.15),
            },
          }}
        >
          <Icon backdrop color={color.ui.blue} size="compact" with="check" />
        </Flex>
        <Icon backdrop color={color.ui.green} size="compact" with="marker" />
        <address
          css={{
            display: 'flex',
            flexDirection: 'column-reverse',
            fontStyle: 'normal',
            overflow: 'hidden',
          }}
        >
          <Text as="span" variant="p2" truncate>
            {fromStreet}
          </Text>
          <Text as="span" variant="h4" truncate>
            {fromCity}
          </Text>
        </address>
        <address
          css={{
            display: 'flex',
            flexDirection: 'column-reverse',
            fontStyle: 'normal',
            overflow: 'hidden',
          }}
        >
          <Text as="span" variant="p2" truncate>
            {toStreet}
          </Text>
          <Text as="span" variant="h4" truncate>
            {toCity}
          </Text>
        </address>
      </Grid>
      <Separator />
      <Grid
        flow="column"
        rows={2}
        columns={4}
        gutterX={16}
        gutterY={0}
        marginX={24}
        marginY={24}
      >
        <Text as="span" variant="h4" truncate>
          {unit(distance).km}
        </Text>
        <Text as="span" variant="p2" truncate>
          Distance
        </Text>
        <Text as="span" variant="h4" truncate>
          {unit(time).min}
        </Text>
        <Text as="span" variant="p2" truncate>
          Time
        </Text>
        <Text as="span" variant="h4" truncate>
          {money(price)}
        </Text>
        <Text as="span" variant="p2" truncate>
          Price
        </Text>
        <Text as="span" variant="h4" truncate>
          {unit(energy).kWh}
        </Text>
        <Text as="span" variant="p2" truncate>
          Energy
        </Text>
      </Grid>
    </Section>
  );
};

export default TripInfo;
