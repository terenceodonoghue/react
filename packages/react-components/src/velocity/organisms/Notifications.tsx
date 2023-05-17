/** @jsxImportSource @emotion/react */
import Section, { SectionProps } from '../atoms/Section.js';
import Setting, { SettingProps } from '../molecules/Setting.js';
import Grid from '../primitives/Grid.js';
import mq from '../utils/mq.js';

export interface NotificationsProps extends SectionProps {
  list?: SettingProps[];
}

const Notifications = ({ list = [], ...props }: NotificationsProps) => (
  <Section
    heading="Notifications"
    description="Control your notification and auto-follow settings."
    {...props}
  >
    <Grid gutterX="5%" gutterY={20}>
      {list.map((setting, i) => (
        <Setting
          css={mq({
            gridColumn: 'span 4',
            gridRow: [null, null, Math.floor(i / 2) + 1],
          })}
          key={setting.label}
          {...setting}
        />
      ))}
    </Grid>
  </Section>
);

export default Notifications;
