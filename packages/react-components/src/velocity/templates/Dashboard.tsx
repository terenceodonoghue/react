/** @jsxImportSource @emotion/react */
import Main, { MainProps } from '../atoms/Main.js';
import Section from '../atoms/Section.js';
import Drivers, { DriversProps } from '../organisms/Drivers.js';
import OperatingScore, {
  OperatingScoreProps,
} from '../organisms/OperatingScore.js';
import Grid from '../primitives/Grid.js';
import mq from '../utils/mq.js';

export interface DashboardProps extends MainProps {
  drivers?: DriversProps['list'];
  operatingScore?: OperatingScoreProps['score'];
}

const Dashboard = ({ drivers, operatingScore, ...props }: DashboardProps) => (
  <Main {...props}>
    <Grid>
      <OperatingScore
        css={mq({
          gridColumn: ['span 4', 'span 4', 'span 6'],
          gridRow: [1, '1 / span 2', 1],
        })}
        score={operatingScore}
      />
      <Section
        css={mq({
          gridColumn: ['span 4', 'span 8', 'span 6'],
          gridRow: [3, 3, '1 / span 2'],
        })}
        heading="Today's trips"
      />
      <Section
        css={mq({
          gridColumn: ['span 2', 'span 4', 'span 3'],
          gridRow: [2, 1, 2],
        })}
        heading="Vehicles on track"
      />
      <Section
        css={mq({
          gridColumn: ['span 2', 'span 4', 'span 3'],
          gridRow: 2,
        })}
        heading="Distance driven"
      />
      <Section
        css={mq({
          gridColumn: ['span 4', 'span 8', 'span 12'],
        })}
        heading="Fleet activity map"
      />
      <Drivers css={mq({ gridColumn: 'span 4' })} list={drivers} />
      <Section css={mq({ gridColumn: 'span 4' })} heading="Trips by type" />
      <Section
        css={mq({ gridColumn: ['span 4', 'span 8', 'span 4'] })}
        heading="Service reminders"
      />
    </Grid>
  </Main>
);

export default Dashboard;
