/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rem, rgba } from 'polished';
import type { FunctionComponent } from 'react';

import type { ReactIcon } from '@terenceodonoghue/react-icons';
import { Check } from '@terenceodonoghue/react-icons/velocity';

import Box, { type BoxProps } from '../atoms/Box.js';
import Indicator from '../atoms/Indicator.js';
import Text from '../primitives/Text.js';

export interface IntegrationCardProps extends BoxProps {
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
  ...props
}) => {
  const { color } = useTheme();

  return (
    <Indicator icon={Check} visible={enabled}>
      <Box
        css={{
          borderColor: enabled ? color.primary : color.secondary,
          cursor: 'pointer',
        }}
        p={20}
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
          <Icon size={30} />
        </div>
        <div css={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Text css={{ lineHeight: rem(22) }} as="span" variant="h4">
            {name}
          </Text>
          <Text as="span" variant="p2">
            {description}
          </Text>
        </div>
      </Box>
    </Indicator>
  );
};

export default IntegrationCard;
