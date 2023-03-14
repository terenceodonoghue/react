/** @jsxImportSource @emotion/react */
import { rem } from 'polished';
import { FunctionComponent, useId } from 'react';

import Switch, { type SwitchProps } from '../atoms/Switch.js';
import Text from '../primitives/Text.js';
import mq from '../utils/mq.js';

export interface SettingProps extends SwitchProps {
  description?: string;
  label: string;
}

const Setting: FunctionComponent<SettingProps> = ({
  className,
  description,
  label,
  style,
  ...props
}) => {
  const descriptionId = useId();
  const switchId = useId();

  return (
    <div
      css={mq({
        display: 'flex',
        alignItems: 'center',
        justifyContent: ['space-between', 'flex-start'],
        gap: [16, 56],
        overflow: 'hidden',
      })}
      className={className}
      role="presentation"
      style={style}
    >
      <div
        css={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
        role="presentation"
      >
        <Text
          as="label"
          css={{ lineHeight: rem(22) }}
          htmlFor={switchId}
          variant="h4"
        >
          {label}
        </Text>
        <Text as="span" id={descriptionId} variant="p2" truncate>
          {description}
        </Text>
      </div>
      <Switch aria-describedby={descriptionId} id={switchId} {...props} />
    </div>
  );
};

export default Setting;
