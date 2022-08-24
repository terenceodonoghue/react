/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rem, rgba } from 'polished';
import type { FunctionComponent } from 'react';

import type { ReactIcon } from '@terenceodonoghue/react-icons';
import { Check } from '@terenceodonoghue/react-icons/velocity';

import Indicator from '../atoms/Indicator.js';
import Text from '../primitives/Text.js';

export interface IntegrationCardProps {
  description: string;
  enabled?: boolean;
  icon: ReactIcon;
  name: string;
}

const IntegrationCard: FunctionComponent<IntegrationCardProps> = ({
  description,
  enabled = false,
  name,
  icon: Icon,
}) => {
  const { color } = useTheme();

  return (
    <Indicator icon={Check} visible={enabled}>
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          borderColor: enabled ? color.primary : '#E0E7FF',
          borderRadius: 5,
          borderStyle: 'solid',
          borderWidth: 1,
          padding: 20,
          cursor: 'pointer',
        }}
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
          🎉
        </div>
        <div css={{ display: 'flex', flexDirection: 'column' }}>
          <Text css={{ lineHeight: rem(22) }} as="span" variant="h4">
            {name}
          </Text>
          <Text css={{ lineHeight: rem(22) }} as="span" variant="p2">
            {description}
          </Text>
        </div>
      </div>
    </Indicator>
  );
};

export default IntegrationCard;
