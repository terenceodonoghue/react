/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import dayjs, { ConfigType } from 'dayjs';

import Section, { SectionProps } from '../atoms/Section.js';
import Chart from '../molecules/Chart.js';

export interface TripsByWeekdayProps extends SectionProps {
  asOf?: ConfigType;
  average?: number[];
  comfort?: number[];
  premium?: number[];
}

const TripsByWeekday = ({
  asOf = dayjs(),
  average = [],
  comfort = [],
  premium = [],
  ...props
}: TripsByWeekdayProps) => {
  const { color } = useTheme();

  const labels = Array.from(
    Array(Math.max(comfort.length, premium.length)).keys(),
  )
    .map((diff) => dayjs(asOf).subtract(diff, 'days').format('ddd'))
    .reverse();

  return (
    <Section heading="Trips by weekday" {...props}>
      <Chart
        data={[
          {
            color: color.primary,
            label: 'Comfort',
            type: 'bar',
            values: comfort,
          },
          {
            color: color.ui.purple,
            label: 'Premium',
            type: 'bar',
            values: premium,
          },
          {
            color: color.ui.yellow,
            label: 'Average',
            type: 'line',
            values: average,
          },
        ]}
        labels={labels}
      />
    </Section>
  );
};

export default TripsByWeekday;
