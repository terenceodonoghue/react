/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';

import Main, { MainProps } from '../atoms/Main.js';
import Section from '../atoms/Section.js';
import Metric from '../molecules/Metric.js';
import Revenue, { RevenueProps } from '../organisms/Revenue.js';
import TripsByWeekday, {
  TripsByWeekdayProps,
} from '../organisms/TripsByWeekday.js';
import Grid from '../primitives/Grid.js';
import mq from '../utils/mq.js';

export interface AnalyticsProps extends MainProps {
  revenue?: RevenueProps;
  tripsByWeekday?: TripsByWeekdayProps;
}

const Analytics = ({ revenue, tripsByWeekday, ...props }: AnalyticsProps) => {
  const { color } = useTheme();

  return (
    <Main heading="Analytics" {...props}>
      <Grid>
        <Revenue
          css={mq({ gridColumn: ['span 4', 'span 8', 'span 12'] })}
          {...revenue}
        />
        <Metric
          color={color.ui.green}
          css={mq({ gridColumn: ['span 2', 'span 4', 'span 3'] })}
          icon="check"
          label="Vehicles on track"
          value="1,428"
        />
        <Metric
          color={color.ui.teal}
          css={mq({ gridColumn: ['span 2', 'span 4', 'span 3'] })}
          icon="marker"
          label="Distance driven"
          value="158.3 mi"
        />
        <Metric
          color={color.ui.purple}
          css={mq({ gridColumn: ['span 2', 'span 4', 'span 3'] })}
          icon="energy"
          label="Energy consumed"
          value="87.4 kWh"
        />
        <Metric
          color={color.ui.yellow}
          css={mq({ gridColumn: ['span 2', 'span 4', 'span 3'] })}
          icon="dynamic"
          label="Total drive time"
          value="24.2 h"
        />
        <Section
          css={mq({ gridColumn: ['span 4', 'span 8', 'span 4'] })}
          heading="Latest trips"
        />
        <TripsByWeekday
          css={mq({ gridColumn: ['span 4', 'span 8'] })}
          {...tripsByWeekday}
        />
      </Grid>
    </Main>
  );
};

export default Analytics;
