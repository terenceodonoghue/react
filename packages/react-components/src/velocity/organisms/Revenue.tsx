/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import dayjs, { ConfigType } from 'dayjs';

import { money } from '@terenceodonoghue/utils';

import Section, { SectionProps } from '../atoms/Section.js';
import Chart from '../molecules/Chart.js';

export interface RevenueProps extends SectionProps {
  asOf?: ConfigType;
  revenue?: number[];
  trips?: number[];
}

const Revenue = ({
  asOf = dayjs(),
  revenue = [],
  trips = [],
  ...props
}: RevenueProps) => {
  const { color } = useTheme();

  const labels = Array.from(
    Array(Math.max(revenue.length, trips.length)).keys(),
  )
    .map((diff) => dayjs(asOf).subtract(diff, 'weeks').format('MMM D'))
    .reverse();

  return (
    <Section heading="Revenue" {...props}>
      <Chart
        data={[
          {
            color: color.primary,
            label: 'Revenue',
            type: 'area',
            values: revenue,
          },
          {
            color: color.ui.purple,
            label: 'Trips',
            type: 'area',
            values: trips,
          },
        ]}
        format={(value) => money(value, true)}
        labels={labels}
      />
    </Section>
  );
};

export default Revenue;
