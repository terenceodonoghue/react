/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rem, rgba } from 'polished';
import { FunctionComponent, useId } from 'react';

import type { ReactIcon } from '@terenceodonoghue/react-icons';

import Checkbox, { type CheckboxProps } from '../atoms/Checkbox.js';
import Text from '../primitives/Text.js';

export interface IntegrationCardProps extends CheckboxProps {
  description: string;
  enabled?: boolean;
  icon: ReactIcon;
  label: string;
}

const IntegrationCard: FunctionComponent<IntegrationCardProps> = ({
  description,
  enabled = false,
  label,
  icon: Icon,
  ...props
}) => {
  const labelId = useId();
  const descriptionId = useId();

  const { color } = useTheme();

  return (
    <Checkbox
      aria-labelledby={labelId}
      aria-describedby={descriptionId}
      css={{
        borderColor: enabled ? color.primary : color.secondary,
        cursor: 'pointer',
      }}
      {...props}
    >
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          borderRadius: '50%',
          marginRight: 16,
          height: 70,
          width: 70,
          backgroundColor: rgba(color.neutral[700], 0.1),
        }}
      >
        {Icon ? <Icon aria-hidden size={30} /> : undefined}
      </div>
      <div css={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Text as="span" css={{ lineHeight: rem(22) }} id={labelId} variant="h4">
          {label}
        </Text>
        <Text as="span" id={descriptionId} variant="p2">
          {description}
        </Text>
      </div>
    </Checkbox>
  );
};

export default IntegrationCard;
