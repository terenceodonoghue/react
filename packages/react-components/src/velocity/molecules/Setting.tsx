import { rem } from 'polished';
import type { FunctionComponent } from 'react';

import Switch, { type SwitchProps } from '../atoms/Switch.js';
import Text from '../primitives/Text.js';
import mq from '../utils/mq.js';

export interface SettingProps extends SwitchProps {
  description?: string;
  name: string;
}

const Setting: FunctionComponent<SettingProps> = ({
  className,
  description,
  name,
  style,
  ...props
}) => (
  <div
    css={mq({
      display: 'flex',
      alignItems: 'center',
      justifyContent: ['space-between', 'flex-start'],
      gap: [16, 56],
      overflow: 'hidden',
    })}
    className={className}
    style={style}
  >
    <div css={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <Text css={{ lineHeight: rem(22) }} variant="h4">
        {name}
      </Text>
      <Text variant="p2" truncate>
        {description}
      </Text>
    </div>
    <Switch {...props} />
  </div>
);

export default Setting;
