/** @jsxImportSource @emotion/react */
import { FunctionComponent, useId } from 'react';

import Card, { type CardProps } from '../atoms/Card.js';
import Setting, { type SettingProps } from '../molecules/Setting.js';
import Text from '../primitives/Text.js';
import mq from '../utils/mq.js';

export interface NotificationsProps extends CardProps {
  options: SettingProps[];
}

const Notifications: FunctionComponent<NotificationsProps> = ({
  options = [],
  ...props
}) => {
  const descriptionId = useId();

  return (
    <Card aria-describedby={descriptionId} heading="Notifications" {...props}>
      <Text id={descriptionId}>
        Control your notification and auto-follow settings.
      </Text>
      <div
        css={mq({
          display: 'grid',
          gridAutoFlow: [undefined, 'column'],
          gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, min-content)'],
          gridTemplateRows: [undefined, 'repeat(2, 1fr)'],
          columnGap: [undefined, 110],
          rowGap: 20,
          marginTop: [24, 32],
        })}
      >
        {options.map((option) => (
          <Setting key={option.label} {...option} />
        ))}
      </div>
    </Card>
  );
};

export default Notifications;
